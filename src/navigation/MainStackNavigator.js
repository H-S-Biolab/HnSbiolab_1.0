import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WeightScreen from '../screens/Weight';
import BloodPressureScreen from '../screens/BloodPressure';
import BottomNavigationBar from './BottomNavigationBar';
import MainDietScreen from '../screens/MainDiet';
import BloodSugarScreen from '../screens/BloodSugar';
import WaterIntake from '../components/water/WaterIntake';
import TestResultScreen from '../screens/TestResult/TestResultScreen';
import HealthCheckup from '../screens/HealthCheckup';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTabs"
        component={BottomNavigationBar}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BloodPressure"
        component={BloodPressureScreen}
        options={{headerTitle: 'Blood Pressure Management'}}
      />
      <Stack.Screen
        name="MainDiet"
        component={MainDietScreen}
        options={{headerTitle: 'Main Diet'}}
      />
      <Stack.Screen
        name="BloodSugar"
        component={BloodSugarScreen}
        options={{headerTitle: 'Blood Sugar'}}
      />
      <Stack.Screen
        name="WaterIntake"
        component={WaterIntake}
        optoins={{headerShown: false}}
      />
      <Stack.Screen
        name="WeightScreen"
        component={WeightScreen}
        options={{headerTitle: 'weight'}}
      />
      <Stack.Screen
        name="TestResult"
        component={TestResultScreen}
        options={{headerTitle: 'test result'}}
      />
      <Stack.Screen
        name='="HealthCheckup'
        component={HealthCheckup}
        options={{headerTitle: '건강검진'}}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
