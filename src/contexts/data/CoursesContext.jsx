import React, { useState, useEffect, useContext } from 'react';
import * as API from '../../api';

const CoursesContext = React.createContext({});

export const useCourses = () => useContext(CoursesContext);

export const CoursesConsumer = CoursesContext.Consumer;

export const CoursesProvider = ({ children }) => {
  const [ data, setData ] = useState({});

  const getData = async (force = false) => {
    // Only update if object empty or forced refresh
    if (
      (Object.keys(data).length === 0 && data.constructor === Object)
      || force
    ) {
      let response = await API.get('/courses');
      setData(response);
    }
  }

  return(
    <CoursesContext.Provider
      value={{
        data,
        getData
      }}
    >
      {children}
    </CoursesContext.Provider>
  )
}

export default CoursesContext;