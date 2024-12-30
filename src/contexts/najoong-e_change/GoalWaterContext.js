import React, {createContext, useState} from 'react';

export const GoalWaterContext = createContext();

export const GoalWaterProvider = ({children}) => {
  const [goalWater, setGoalWater] = useState(1250);

  const updateGoalWater = number => {
    setGoalWater(number);
  };

  return (
    <GoalWaterContext.Provider value={{goalWater, updateGoalWater}}>
      {children}
    </GoalWaterContext.Provider>
  );
};
