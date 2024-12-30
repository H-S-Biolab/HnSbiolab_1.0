import React from 'react';
import {createContext, useState} from 'react';

const HeartRateContext = createContext();

const HeartRateProvider = ({children}) => {
  const [heartRate, setHeartRate] = useState(0);

  const updateHeartRate = number => {
    setHeartRate(number);
  };

  return (
    <HeartRateContext.Provider value={{heartRate, setHeartRate}}>
      {children}
    </HeartRateContext.Provider>
  );
};

export {HeartRateContext, HeartRateProvider};
