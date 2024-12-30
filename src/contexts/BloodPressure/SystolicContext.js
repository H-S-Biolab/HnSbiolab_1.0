import React from 'react';
import {createContext, useState} from 'react';

const SystolicContext = createContext();

const SystolicProvider = ({children}) => {
  const [systolic, setSystolic] = useState(0);

  const updateSystolic = number => {
    setSystolic(number);
  };

  return (
    <SystolicContext.Provider value={{systolic, setSystolic}}>
      {children}
    </SystolicContext.Provider>
  );
};

export {SystolicContext, SystolicProvider};
