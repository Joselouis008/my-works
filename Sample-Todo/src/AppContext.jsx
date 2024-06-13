// src/AppContext.jsx
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [contextValue, setContextValue] = useState("Hello from context!");

  return (
    <AppContext.Provider value={{ contextValue, setContextValue }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
