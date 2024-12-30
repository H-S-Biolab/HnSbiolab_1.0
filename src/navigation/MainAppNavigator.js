import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator'; // Your bottom tab navigator
import ProfileScreen from '../screens/Profile';
import BloodPressureRecordScreen from '../screens/BloodPressureRecord';
import BloodSugarRecordScreen from '../screens/BloodSugarRecord';
import MyProfileScreen from '../screens/MyProfile/MyProfileScreen';
import QRCodeScreen from '../screens/QRCode';
import MealRecordScreen from '../screens/MealRecord';
import AddFoodScreen from '../screens/AddFood';
import CameraScreen from '../screens/Camera';
import DiagnosisCameraScreen from '../screens/DiagnosisCamera';
import HospitalScreen from '../screens/Hospital';
import Map from '../screens/Hospital/Map';
import NewScreen1 from '../screens/NewScreen1';
import NewScreen2 from '../screens/NewScreen2';
import NewScreen3 from '../screens/NewScreen3';
import NewScreen4 from '../screens/NewScreen4';
import NewScreen5 from '../screens/NewScreen5';
import NewScreen6 from '../screens/NewScreen6';
import NewScreen7 from '../screens/NewScreen7';
import Frame from '../screens/Result';
import Frame2 from '../screens/KitResult';
import Frame3 from '../screens/LoadHealthCheckup';
import Frame4 from '../screens/HealthCheckupResult';
import HealthCheckupResultScreen from '../screens/HealthCheckupResult';
import LoadHealthCheckupScreen from '../screens/LoadHealthCheckup';
import KitResultScreen from '../screens/KitResult';
import ResultScreen from '../screens/Result';
import Search from '../screens/Hospital/search';

const Stack = createStackNavigator();

const MainAppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTabs"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerTitle: 'My Profile'}}
      />
      <Stack.Screen
        name="BloodPressureRecord"
        component={BloodPressureRecordScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BloodSugarRecord"
        component={BloodSugarRecordScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyProfile"
        component={MyProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="QRCode"
        component={QRCodeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MealRecord"
        component={MealRecordScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddFood"
        component={AddFoodScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Camera"
        component={CameraScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DiagnosisCamera"
        component={DiagnosisCameraScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FindHospital"
        component={HospitalScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Map" component={Map} options={{headershown: false}} />
      <Stack.Screen
        name="New1"
        component={NewScreen1}
        options={{headershown: false}}
      />
      <Stack.Screen
        name="New2"
        component={NewScreen2}
        options={{headershown: false}}
      />
      <Stack.Screen
        name="New3"
        component={NewScreen3}
        options={{headershown: false}}
      />
      <Stack.Screen
        name="New4"
        component={NewScreen4}
        options={{headershown: false}}
      />
      <Stack.Screen
        name="New5"
        component={NewScreen5}
        options={{headershown: false}}
      />
      <Stack.Screen
        name="New6"
        component={NewScreen6}
        options={{headershown: false}}
      />
      <Stack.Screen
        name="New7"
        component={NewScreen7}
        options={{headershown: false}}
      />
      <Stack.Screen
        name="Result"
        component={ResultScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="KitResult"
        component={KitResultScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoadHealthCheckup"
        component={LoadHealthCheckupScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HealthCheckupResult"
        component={HealthCheckupResultScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{headershown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainAppNavigator;
