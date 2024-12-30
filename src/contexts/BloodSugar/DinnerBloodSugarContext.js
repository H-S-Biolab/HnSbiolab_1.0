import React, {createContext, useState} from 'react';

export const DinnerBloodSugarContext = createContext();

export const DinnerBloodSugarProvider = ({children}) => {
  const [dinnerBloodSugar, setDinnerBloodSugar] = useState([]);
  const [dinnerTime, setDinnerTime] = useState([]);
  const [dinnerMemo, setDinnerMemo] = useState([]);

  const addDinnerRecord = record => {
    setDinnerBloodSugar([...dinnerBloodSugar, record.bloodSugar]);
    setDinnerTime([...dinnerTime, record.time]);
    setDinnerMemo([...dinnerMemo, record.memo]);
  };

  return (
    <DinnerBloodSugarContext.Provider
      value={{dinnerBloodSugar, dinnerTime, dinnerMemo, addDinnerRecord}}>
      {children}
    </DinnerBloodSugarContext.Provider>
  );
};
