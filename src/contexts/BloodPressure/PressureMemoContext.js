import React from 'react';
import {createContext, useState} from 'react';

const PressureMemoContext = createContext();

const PressureMemoProvider = ({children}) => {
  const [pressureMemo, setPressureMemo] = useState('');

  const updatePressureMemo = memo => {
    setPressureMemo(memo);
  };

  return (
    <PressureMemoContext.Provider value={{pressureMemo, setPressureMemo}}>
      {children}
    </PressureMemoContext.Provider>
  );
};

export {PressureMemoContext, PressureMemoProvider};
