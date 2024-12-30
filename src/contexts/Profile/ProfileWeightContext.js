import React from 'react';
import {createContext, useState} from 'react';

const ProfileWeightContext = createContext();

const ProfileWeightProvider = ({children}) => {
  const [weight, setWeight] = useState(0);

  return (
    <ProfileWeightContext.Provider value={{weight, setWeight}}>
      {children}
    </ProfileWeightContext.Provider>
  );
};

export {ProfileWeightContext, ProfileWeightProvider};
