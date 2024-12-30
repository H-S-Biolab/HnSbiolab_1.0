// AppNavigator.js

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignupScreen from '../screens/Signup';
import LoginScreen from '../screens/Login';
import MainAppNavigator from './MainAppNavigator';
import FindingIDScreen from '../screens/FindingID';
import FindingPasswordScreen from '../screens/FindingPassword';
import FindingPassword2Screen from '../screens/FindingPassword2';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FindingID"
          component={FindingIDScreen}
          options={{headerTitle: 'ID 찾기'}}
        />
        <Stack.Screen
          name="FindingPassword"
          component={FindingPasswordScreen}
          options={{headerTitle: '비밀번호 찾기'}}
        />
        <Stack.Screen
          name="FindingPassword2"
          component={FindingPassword2Screen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainApp"
          component={MainAppNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
