import React, { useState, useEffect, useContext } from 'react';
import * as API from '../../api';

const BlogPostsContext = React.createContext({});

export const useBlogPosts = () => useContext(BlogPostsContext);

export const BlogPostsConsumer = BlogPostsContext.Consumer;

export const BlogPostsProvider = ({ children }) => {
  const [ data, setData ] = useState({});

  const getData = async (force = false) => {
    // Only update if object empty or forced refresh
    if (
      (Object.keys(data).length === 0 && data.constructor === Object)
      || force
    ) {
      let response = await API.get('/blog-posts');
      setData(response);
    }
  }

  return(
    <BlogPostsContext.Provider
      value={{
        data,
        getData
      }}
    >
      {children}
    </BlogPostsContext.Provider>
  )
}

export default BlogPostsContext;