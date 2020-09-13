import React, { useState, useEffect, useContext } from 'react';
import * as API from '../../api';

const AwardsContext = React.createContext({});

export const useAwards = () => useContext(AwardsContext);

export const AwardsConsumer = AwardsContext.Consumer;

export const AwardsProvider = ({ children }) => {
  const [ data, setData ] = useState([]);

  const getData = async (force = false) => {
    // Only update if object empty or forced refresh
    if ( data.length === 0 || force ) {
      let response = await API.get('/awards');
      setData(response);
    }
  }

  return(
    <AwardsContext.Provider
      value={{
        data,
        getData
      }}
    >
      {children}
    </AwardsContext.Provider>
  )
}

export default AwardsContext;