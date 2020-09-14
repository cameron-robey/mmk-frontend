import React, { useState, useEffect, useContext } from 'react';
import * as API from '../../api';

const VideosContext = React.createContext({});

export const useVideos = () => useContext(VideosContext);

export const VideosConsumer = VideosContext.Consumer;

export const VideosProvider = ({ children }) => {
  const [ data, setData ] = useState({});

  const getData = async (force = false) => {
    // Only update if object empty or forced refresh
    if (
      (Object.keys(data).length === 0 && data.constructor === Object)
      || force
    ) {
      let response = await API.get('/videos');
      setData(response);
    }
  }

  return(
    <VideosContext.Provider
      value={{
        data,
        getData
      }}
    >
      {children}
    </VideosContext.Provider>
  )
}

export default VideosContext;