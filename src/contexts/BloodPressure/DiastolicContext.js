import React from 'react';
import {createContext, useState} from 'react';

const DiastolicContext = createContext();

const DiastolicProvider = ({children}) => {
  const [diastolic, setDiastolic] = useState(0);

  const updateDiastolic = number => {
    setDiastolic(number);
  };

  return (
    <DiastolicContext.Provider value={{diastolic, setDiastolic}}>
      {children}
    </DiastolicContext.Provider>
  );
};

export {DiastolicContext, DiastolicProvider};
