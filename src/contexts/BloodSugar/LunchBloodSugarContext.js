import React, {createContext, useState} from 'react';

export const LunchBloodSugarContext = createContext();

export const LunchBloodSugarProvider = ({children}) => {
  const [lunchBloodSugar, setLunchBloodSugar] = useState([]);
  const [lunchTime, setLunchTime] = useState([]);
  const [lunchMemo, setLunchMemo] = useState([]);

  const addLunchRecord = record => {
    setLunchBloodSugar([...lunchBloodSugar, record.bloodSugar]);
    setLunchTime([...lunchTime, record.time]);
    setLunchMemo([...lunchMemo, record.memo]);
  };

  return (
    <LunchBloodSugarContext.Provider
      value={{lunchBloodSugar, lunchTime, lunchMemo, addLunchRecord}}>
      {children}
    </LunchBloodSugarContext.Provider>
  );
};
