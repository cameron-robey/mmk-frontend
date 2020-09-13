import React, { useState, useEffect, useContext } from 'react';
import * as API from '../../api';

const AboutUsContext = React.createContext({});

export const useAboutUs = () => useContext(AboutUsContext);

export const AboutUsConsumer = AboutUsContext.Consumer;

export const AboutUsProvider = ({ children }) => {
  const [ data, setData ] = useState({});

  const getData = async (force = false) => {
    // Only update if object empty or forced refresh
    if (
      (Object.keys(data).length === 0 && data.constructor === Object)
      || force
    ) {
      let response = await API.get('/about-us');
      setData(response);
    }
  }

  return(
    <AboutUsContext.Provider
      value={{
        data,
        getData
      }}
    >
      {children}
    </AboutUsContext.Provider>
  )
}

export default AboutUsContext;