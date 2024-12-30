import React, {createContext, useState} from 'react';

export const BreakfastBloodSugarContext = createContext();

export const BreakfastBloodSugarProvider = ({children}) => {
  const [breakfastBloodSugar, setBreakfastBloodSugar] = useState([]);
  const [breakfastTime, setBreakfastTime] = useState([]);
  const [breakfastMemo, setBreakfastMemo] = useState([]);

  const addBreakfastRecord = record => {
    setBreakfastBloodSugar([...breakfastBloodSugar, record.bloodSugar]);
    setBreakfastTime([...breakfastTime, record.time]);
    setBreakfastMemo([...breakfastMemo, record.memo]);
  };

  return (
    <BreakfastBloodSugarContext.Provider
      value={{
        breakfastBloodSugar,
        breakfastTime,
        breakfastMemo,
        addBreakfastRecord,
      }}>
      {children}
    </BreakfastBloodSugarContext.Provider>
  );
};
