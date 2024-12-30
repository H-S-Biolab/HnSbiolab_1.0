import React, {createContext, useState} from 'react';

const ProfileGenderContext = createContext();

const ProfileGenderProvider = ({children}) => {
  const [gender, setGender] = useState('');

  return (
    <ProfileGenderContext.Provider value={{gender, setGender}}>
      {children}
    </ProfileGenderContext.Provider>
  );
};

export {ProfileGenderContext, ProfileGenderProvider};
