import React, { useState, useEffect, useContext } from 'react';
import * as API from '../../api';

const FooterContext = React.createContext({});

export const useFooter = () => useContext(FooterContext);

export const FooterConsumer = FooterContext.Consumer;

export const FooterProvider = ({ children }) => {
  const [ data, setData ] = useState({});

  const getData = async (force = false) => {
    // Only update if object empty or forced refresh
    if (
      (Object.keys(data).length === 0 && data.constructor === Object)
      || force
    ) {
      let response = await API.get('/footer');
      setData(response);
    }
  }

  return(
    <FooterContext.Provider
      value={{
        data,
        getData
      }}
    >
      {children}
    </FooterContext.Provider>
  )
}

export default FooterContext;