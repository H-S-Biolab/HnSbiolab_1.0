import React from 'react';
import {createContext, useState} from 'react';

const ProfileBooleanContext = createContext();

const ProfileBooleanProvider = ({children}) => {
  const [value, setValue] = useState(null);

  return (
    <ProfileBooleanContext.Provider value={{value, setValue}}>
      {children}
    </ProfileBooleanContext.Provider>
  );
};

export {ProfileBooleanContext, ProfileBooleanProvider};
