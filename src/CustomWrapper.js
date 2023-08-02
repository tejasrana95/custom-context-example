// CustomContext.js
import React, { createContext, useState } from 'react';

// Create the custom context
const CustomContext = createContext();

// Create a Provider component to wrap the components that will have access to the context
const CustomProvider = ({ children }) => {
  const [data, setData] = useState('Default data');

  return (
    <CustomContext.Provider value={{ data, setData }}>
      {children}
    </CustomContext.Provider>
  );
};

export { CustomContext, CustomProvider };
