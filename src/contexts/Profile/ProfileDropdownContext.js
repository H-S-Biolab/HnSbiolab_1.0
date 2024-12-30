import React from 'react';
import {createContext, useState} from 'react';

const ProfileDropdownContext = createContext();

const ProfileDropdownProvider = ({children}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const items = [
    {label: '신장 투석 식단', value: '신장 투석 식단'},
    {label: '혈당 관리 식단', value: '혈당 관리 식단'},
    {label: '체중 관리 식단', value: '체중 관리 식단'},
    {label: '내 식단으로 할래요.', value: '내 식단으로 할래요.'},
  ];

  return (
    <ProfileDropdownContext.Provider
      value={{selectedItem, setSelectedItem, items}}>
      {children}
    </ProfileDropdownContext.Provider>
  );
};

export {ProfileDropdownContext, ProfileDropdownProvider};
