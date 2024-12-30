import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import images from '../../../assets/icons/images';
import styles from './styles';

const WaterInput = ({ currentWater, setCurrentWater }) => {

  const [goal, setGoal] = useState(1500); // Default goal value
  const [cupSize, setCupSize] = useState(100); // Default cup size

  const handleWaterChange = (newValue) => {
    const water = newValue.replace('ml', '').trim();
    if (water === '' || isNaN(water)) {
      setCurrentWater(0);
    } else {
      setCurrentWater(parseInt(water, 10));
    }
  };

  const handleIncrement = () => {
    setCurrentWater((prev) => parseInt(prev, 10) + cupSize);
  };

  const handleDecrement = () => {
    setCurrentWater((prev) => Math.max(0, parseInt(prev, 10) - cupSize));
  };

  const handleGoalChange = (newGoal) => {
    const goalValue = newGoal.replace('ml', '').trim();
    if (/^\d*$/.test(goalValue) && goalValue.length <= 6) {
      setGoal(goalValue === '' ? 0 : parseInt(goalValue, 10));
    }
  };

  const handleCupSizeChange = (newSize) => {
    const size = newSize.replace('ml', '').trim();
    if (/^\d*$/.test(size) && size.length <= 4) {
      setCupSize(size === '' ? 0 : parseInt(size, 10));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.titleLeft}>
          <Image source={images.수분} style={styles.icon} />
          <Text style={styles.title}>총 수분량</Text>
        </View>
      </View>
      <View style={styles.intakeContainer}>
        <TouchableOpacity onPress={handleDecrement} style={styles.button}>
          <Image source={images.minusbutton} style={styles.buttonIcon} />
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.intakeAmount}
            keyboardType="numeric"
            value={currentWater.toString()}
            onChangeText={handleWaterChange}
          />
          <Text style={styles.unit}> ml</Text>
        </View>
        <TouchableOpacity onPress={handleIncrement} style={styles.button}>
          <Image source={images.plusbutton} style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.speechBubbleContainer}>
        <View style={styles.speechBubbleArrow} />
        <View style={styles.speechBubble}>
          <Text style={styles.speechBubbleText}>
            수분 섭취량을 기록해보세요.
          </Text>
        </View>
      </View>
      <View style={styles.goalCupWrapper}>
        <View style={styles.goalContainer}>
          <Text style={styles.Label}>제한량:</Text>
          <View style={styles.InputUnitContainer}>
          <TextInput
              style={styles.Input}
              keyboardType='numeric'
              value={goal.toString()}
              onChangeText={handleGoalChange}
              maxLength={6}
            />
            <Text style={styles.unit}> ml</Text>
          </View>
        </View>
        <View style={styles.CupContainer}>
          <Text style={styles.Label}>한 컵의 양:</Text>
          <View style={styles.InputUnitContainer}>
            <TextInput
              style={styles.Input}
              keyboardType="numeric"
              value={cupSize.toString()}
              onChangeText={handleCupSizeChange}
              maxLength={4}
            />
            <Text style={styles.unit}> ml</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WaterInput;
