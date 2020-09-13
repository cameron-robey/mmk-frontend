import React, { useState, useEffect, useContext } from 'react';
import * as API from '../../api';

const CustomerTestimonialsContext = React.createContext({});

export const useCustomerTestimonials = () => useContext(CustomerTestimonialsContext);

export const CustomerTestimonialsConsumer = CustomerTestimonialsContext.Consumer;

export const CustomerTestimonialsProvider = ({ children }) => {
  const [ data, setData ] = useState([]);

  const getData = async (force = false) => {
    // Only update if object empty or forced refresh
    if (data.length === 0 || force ) {
      let response = await API.get('/customer-testimonials');
      setData(response);
    }
  }

  return(
    <CustomerTestimonialsContext.Provider
      value={{
        data,
        getData
      }}
    >
      {children}
    </CustomerTestimonialsContext.Provider>
  )
}

export default CustomerTestimonialsContext;