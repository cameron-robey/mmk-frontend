import React, { useState, useEffect, useContext } from 'react';
import * as API from '../../api';

const BlogContext = React.createContext({});

export const useBlog = () => useContext(BlogContext);

export const BlogConsumer = BlogContext.Consumer;

export const BlogProvider = ({ children }) => {
  const [ data, setData ] = useState({});

  const getData = async (force = false) => {
    // Only update if object empty or forced refresh
    if (
      (Object.keys(data).length === 0 && data.constructor === Object)
      || force
    ) {
      let response = await API.get('/blog');
      setData(response);
    }
  }

  return(
    <BlogContext.Provider
      value={{
        data,
        getData
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}

export default BlogContext;