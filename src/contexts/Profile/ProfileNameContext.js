import React from 'react';
import {createContext, useState} from 'react';

const ProfileNameContext = createContext();

const ProfileNameProvider = ({children}) => {
  const [name, setName] = useState('');

  return (
    <ProfileNameContext.Provider value={{name, setName}}>
      {children}
    </ProfileNameContext.Provider>
  );
};

export {ProfileNameContext, ProfileNameProvider};
