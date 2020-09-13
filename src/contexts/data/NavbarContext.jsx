import React, { useState, useEffect, useContext } from 'react';
import * as API from '../../api';

const NavbarContext = React.createContext({});

export const useNavbar = () => useContext(NavbarContext);

export const NavbarConsumer = NavbarContext.Consumer;

export const NavbarProvider = ({ children }) => {
  const [ data, setData ] = useState({});

  const getData = async (force = false) => {
    // Only update if object empty or forced refresh
    if (
      (Object.keys(data).length === 0 && data.constructor === Object)
      || force
    ) {
      let response = await API.get('/navbar');
      setData(response);
    }
  }

  return(
    <NavbarContext.Provider
      value={{
        data,
        getData
      }}
    >
      {children}
    </NavbarContext.Provider>
  )
}

export default NavbarContext;