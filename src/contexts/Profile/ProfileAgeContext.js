import React from 'react';
import {createContext, useState} from 'react';

const ProfileAgeContext = createContext();

const ProfileAgeProvider = ({children}) => {
  const [age, setAge] = useState(0);

  return (
    <ProfileAgeContext.Provider value={{age, setAge}}>
      {children}
    </ProfileAgeContext.Provider>
  );
};

export {ProfileAgeContext, ProfileAgeProvider};
