import React, {createContext, useState} from 'react';

export const GoalWeightContext = createContext();

export const GoalWeightProvider = ({children}) => {
  const [goalWeight, setGoalWeight] = useState(0);

  const updateGoalWeight = number => {
    setGoalWeight(number);
  };

  return (
    <GoalWeightContext.Provider value={{goalWeight, updateGoalWeight}}>
      {children}
    </GoalWeightContext.Provider>
  );
};
