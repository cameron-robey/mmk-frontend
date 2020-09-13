import React, { useState, useEffect, useContext } from 'react';
import * as API from './../../api';

const HomepageContext = React.createContext({});

export const useHomepage = () => useContext(HomepageContext);

export const HomepageConsumer = HomepageContext.Consumer;

export const HomepageProvider = ({ children }) => {
  const [ data, setData ] = useState({});

  const getData = async (force = false) => {
    // Only update if object empty or forced refresh
    if (
      (Object.keys(data).length === 0 && data.constructor === Object)
      || force
    ) {
      let response = await API.get('/homepage');
      setData(response);
    }
  }

  return(
    <HomepageContext.Provider
      value={{
        data,
        getData
      }}
    >
      {children}
    </HomepageContext.Provider>
  )
}

export default HomepageContext;