import React, {createContext, useState} from 'react';

export const BloodPressureContext = createContext();

export const BloodPressureProvider = ({children}) => {
  const [bloodPressureRecords, setBloodPressureRecords] = useState([]);

  const addBloodPressureRecord = record => {
    setBloodPressureRecords([...bloodPressureRecords, record]);
  };

  return (
    <BloodPressureContext.Provider
      value={{
        bloodPressureRecords,
        setBloodPressureRecords,
        addBloodPressureRecord,
      }}>
      {children}
    </BloodPressureContext.Provider>
  );
};
