import React from 'react';
import {createContext, useState} from 'react';

const ProfileHeightContext = createContext();

const ProfileHeightProvider = ({children}) => {
  const [height, setHeight] = useState(0);

  return (
    <ProfileHeightContext.Provider value={{height, setHeight}}>
      {children}
    </ProfileHeightContext.Provider>
  );
};

export {ProfileHeightContext, ProfileHeightProvider};
