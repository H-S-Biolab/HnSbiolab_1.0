import React, {createContext, useState} from 'react';

export const WaterContext = createContext();

export const WaterProvider = ({children}) => {
  const [water, setWater] = useState(0);

  const updateWater = number => {
    setWater(number);
  };

  return (
    <WaterContext.Provider value={{water, updateWater}}>
      {children}
    </WaterContext.Provider>
  );
};
