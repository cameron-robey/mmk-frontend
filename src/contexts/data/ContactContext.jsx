import React, { useState, useEffect, useContext } from 'react';
import * as API from '../../api';

const ContactContext = React.createContext({});

export const useContact = () => useContext(ContactContext);

export const ContactConsumer = ContactContext.Consumer;

export const ContactProvider = ({ children }) => {
  const [ data, setData ] = useState({});

  const getData = async (force = false) => {
    // Only update if object empty or forced refresh
    if (
      (Object.keys(data).length === 0 && data.constructor === Object)
      || force
    ) {
      let response = await API.get('/contact');
      setData(response);
    }
  }

  return(
    <ContactContext.Provider
      value={{
        data,
        getData
      }}
    >
      {children}
    </ContactContext.Provider>
  )
}

export default ContactContext;