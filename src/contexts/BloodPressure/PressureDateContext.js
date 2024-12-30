import React from 'react';
import {createContext, useState} from 'react';

const PressureDateContext = createContext();

const PressureDateProvider = ({children}) => {
  const [pressureDate, setPressureDate] = useState(new Date());

  const updatePressureDate = date => {
    setPressureDate(date);
  };

  return (
    <PressureDateContext.Provider value={{pressureDate, setPressureDate}}>
      {children}
    </PressureDateContext.Provider>
  );
};

export {PressureDateContext, PressureDateProvider};
