import React, { useState, useEffect, useContext } from 'react';
import * as API from '../../api';

const BlogPostSourcesContext = React.createContext({});

export const useBlogPostSources = () => useContext(BlogPostSourcesContext);

export const BlogPostSourcesConsumer = BlogPostSourcesContext.Consumer;

export const BlogPostSourcesProvider = ({ children }) => {
  const [ data, setData ] = useState({});

  const getData = async (force = false) => {
    // Only update if object empty or forced refresh
    if (
      (Object.keys(data).length === 0 && data.constructor === Object)
      || force
    ) {
      let response = await API.get('/blog-post-sources');
      setData(response);
    }
  }

  return(
    <BlogPostSourcesContext.Provider
      value={{
        data,
        getData
      }}
    >
      {children}
    </BlogPostSourcesContext.Provider>
  )
}

export default BlogPostSourcesContext;