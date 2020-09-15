import React, { useState, useEffect, useContext } from 'react';
import * as API from '../../api';

const OrganisationsPageContext = React.createContext({});

export const useOrganisationsPage = () => useContext(OrganisationsPageContext);

export const OrganisationsPageConsumer = OrganisationsPageContext.Consumer;

export const OrganisationsPageProvider = ({ children }) => {
  const [ data, setData ] = useState({});

  const getData = async (force = false) => {
    // Only update if object empty or forced refresh
    if (
      (Object.keys(data).length === 0 && data.constructor === Object)
      || force
    ) {
      let response = await API.get('/organisations-page');
      setData(response);
    }
  }

  return(
    <OrganisationsPageContext.Provider
      value={{
        data,
        getData
      }}
    >
      {children}
    </OrganisationsPageContext.Provider>
  )
}

export default OrganisationsPageContext;