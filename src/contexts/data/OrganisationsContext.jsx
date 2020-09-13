import React, { useState, useEffect, useContext } from 'react';
import * as API from '../../api';

const OrganisationsContext = React.createContext({});

export const useOrganisations = () => useContext(OrganisationsContext);

export const OrganisationsConsumer = OrganisationsContext.Consumer;

export const OrganisationsProvider = ({ children }) => {
  const [ data, setData ] = useState([]);

  const getData = async (force = false) => {
    // Only update if object empty or forced refresh
    if (data.length === 0 || force ) {
      let response = await API.get('/organisations');
      setData(response);
    }
  }

  return(
    <OrganisationsContext.Provider
      value={{
        data,
        getData
      }}
    >
      {children}
    </OrganisationsContext.Provider>
  )
}

export default OrganisationsContext;