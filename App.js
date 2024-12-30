import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {BloodPressureProvider} from './src/contexts/BloodPressure/BloodPressureContext';
import {BloodSugarProvider} from './src/contexts/BloodSugar/BloodSugarContext';
import {WaterProvider} from './src/contexts/najoong-e_change/WaterContext';
import {GoalWaterProvider} from './src/contexts/najoong-e_change/GoalWaterContext';
import {GoalWeightProvider} from './src/contexts/najoong-e_change/GoalWeightContext';
import {UserProvider} from './src/contexts/User/UserContext';
import {APIProvider} from './src/contexts/API/APIContext';

//const Stack = createStackNavigator();

console.warn = console.error = () => {};

const App = () => {
  return (
    <APIProvider>
      <UserProvider>
        <GoalWeightProvider>
          <GoalWaterProvider>
            <WaterProvider>
              <BloodSugarProvider>
                <BloodPressureProvider>
                  <View style={styles.container}>
                    <AppNavigator />
                  </View>
                </BloodPressureProvider>
              </BloodSugarProvider>
            </WaterProvider>
          </GoalWaterProvider>
        </GoalWeightProvider>
      </UserProvider>
    </APIProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default App;
