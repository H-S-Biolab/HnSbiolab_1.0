import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import SwitchButtonStyles from '../../design/SwitchButtonStyles';

const SwitchButton = ({onPress, icon, style}) => {
  return (
    <View style={SwitchButtonStyles.container}>
      <TouchableOpacity style={SwitchButtonStyles.button} onPress={onPress}>
        <Image source={icon} style={[SwitchButtonStyles.image, style]} />
      </TouchableOpacity>
    </View>
  );
};

export default SwitchButton;
