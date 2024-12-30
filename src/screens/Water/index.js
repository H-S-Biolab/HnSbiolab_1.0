import React, { useState } from 'react';
import { ScrollView, View, Text, Image, Dimensions } from 'react-native';
import images from '../../../assets/icons/images';
import styles from './styles';
import CalendarBar from '../../CalendarBar';
import WaterInput from './WaterInput';
import WaterGraph from './WaterGraph';

const WaterScreen = () => {
  const [currentWater, setCurrentWater] = useState(0);

  return (
    <ScrollView style={styles.screenContainer}>
      <View style={styles.calendarBar}>
        <CalendarBar />
      </View>
      <WaterInput currentWater={currentWater} setCurrentWater={setCurrentWater} />
        <View>
          <WaterGraph />
        </View>
    </ScrollView>
  );
};

export default WaterScreen;
