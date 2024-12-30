// contexts/BloodSugar/BloodSugarContext.js
import React, {createContext, useState, useContext} from 'react';

const APIContext = createContext();

export const APIProvider = ({children}) => {
  const api = 'https://689f-203-252-33-1.ngrok-free.app';

  return <APIContext.Provider value={api}>{children}</APIContext.Provider>;
};

export const useAPI = () => useContext(APIContext);
