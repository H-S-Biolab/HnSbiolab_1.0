import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import LoginButtonStyles from '../../design/LoginButtonStyles';

const CustomButtonImage = ({onPress, imageSource, style, imageStyle}) => {
  return (
    <TouchableOpacity
      style={[LoginButtonStyles.button, style]}
      onPress={onPress}>
      <Image
        source={imageSource}
        style={[LoginButtonStyles.buttonImage, imageStyle]}
      />
    </TouchableOpacity>
  );
};

export default CustomButtonImage;
