import React, { useState, useEffect, useContext } from 'react';
import * as API from '../../api';

const NewsContext = React.createContext({});

export const useNews = () => useContext(NewsContext);

export const NewsConsumer = NewsContext.Consumer;

export const NewsProvider = ({ children }) => {
  const [ data, setData ] = useState([]);

  const getData = async (force = false) => {
    // Only update if object empty or forced refresh
    if (data.length === 0 || force ) {
      let response = await API.get('/internal-news');
      setData(response);
    }
  }

  return(
    <NewsContext.Provider
      value={{
        data,
        getData
      }}
    >
      {children}
    </NewsContext.Provider>
  )
}

export default NewsContext;