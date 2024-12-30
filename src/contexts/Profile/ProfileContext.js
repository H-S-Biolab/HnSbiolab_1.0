import React from 'react';
import {ProfileBooleanProvider} from './ProfileBooleanContext';
import {ProfileDropdownProvider} from './ProfileDropdownContext';
import {ProfileAgeProvider} from './ProfileAgeContext';
import {ProfileHeightProvider} from './ProfileHeightContext';
import {ProfileNameProvider} from './ProfileNameContext';
import {ProfileWeightProvider} from './ProfileWeightContext';
import {
  ProfileGenderContext,
  ProfileGenderProvider,
} from './ProfileGenderContext';

const ProfileProvider = ({children}) => (
  <ProfileBooleanProvider>
    <ProfileDropdownProvider>
      <ProfileAgeProvider>
        <ProfileHeightProvider>
          <ProfileNameProvider>
            <ProfileGenderProvider>
              <ProfileWeightProvider>{children}</ProfileWeightProvider>
            </ProfileGenderProvider>
          </ProfileNameProvider>
        </ProfileHeightProvider>
      </ProfileAgeProvider>
    </ProfileDropdownProvider>
  </ProfileBooleanProvider>
);

export default ProfileProvider;
