import React, {createContext, useState} from 'react';

export const EmptyBloodSugarContext = createContext();

export const EmptyBloodSugarProvider = ({children}) => {
  const [emptyBloodSugar, setEmptyBloodSugar] = useState([]);
  const [emptyTime, setEmptyTime] = useState([]);
  const [emptyMemo, setEmptyMemo] = useState([]);

  const addEmptyRecord = record => {
    setEmptyBloodSugar([...emptyBloodSugar, record.bloodSugar]);
    setEmptyTime([...emptyTime, record.time]);
    setEmptyMemo([...emptyMemo, record.memo]);
  };

  return (
    <EmptyBloodSugarContext.Provider
      value={{emptyBloodSugar, emptyTime, emptyMemo, addEmptyRecord}}>
      {children}
    </EmptyBloodSugarContext.Provider>
  );
};
