// src/components/atomic/PlusMinusButton.js

import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const PlusMinusButton = ({ value, setValue }) => {
  const incrementValue = () => {
    const newValue = value ? (parseFloat(value) + 0.1).toFixed(1) : '0.1';
    setValue(newValue);
  };

  const decrementValue = () => {
    const newValue = value && parseFloat(value) > 0 ? (parseFloat(value) - 0.1).toFixed(1) : '0.0';
    setValue(newValue);
  };

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={decrementValue}>
        <Image source={require('../../../assets/icons/minusbutton.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={incrementValue}>
        <Image source={require('../../../assets/icons/plusbutton.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: width * 0.1,
    height: width * 0.1,
    marginHorizontal: width * 0.02,
  },
});

export default PlusMinusButton;
