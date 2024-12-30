import React, {createContext, useState} from 'react';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [user, setUser] = useState({
    _id: '',
    name: '',
    height: 0,
    age: 0,
    weight: 0,
    diet_type: '',
    gender: '',
    dialysis_status: null,
    CKD_state: null,
  });

  const updateUser = newUser => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{user, updateUser}}>
      {children}
    </UserContext.Provider>
  );
};
