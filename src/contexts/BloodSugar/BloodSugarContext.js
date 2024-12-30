// contexts/BloodSugar/BloodSugarContext.js
import React, {createContext, useState} from 'react';

export const BloodSugarContext = createContext();

export const BloodSugarProvider = ({children}) => {
  const [records, setRecords] = useState([]);

  const addRecord = (recordData, selectedOption) => {
    setRecords(prevRecords => [
      ...prevRecords,
      {
        ...recordData,
        type: selectedOption,
      },
    ]);
  };

  return (
    <BloodSugarContext.Provider value={{records, setRecords, addRecord}}>
      {children}
    </BloodSugarContext.Provider>
  );
};
