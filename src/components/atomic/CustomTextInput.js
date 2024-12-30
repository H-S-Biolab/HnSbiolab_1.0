// src/components/atomic/CustomTextInput.js

import React from 'react';
import {TextInput} from 'react-native';
import PrincipalTextInputStyles from '../../design/PrincipalTextInputStyles';
import theme from '../../theme';

const CustomTextInput = ({
  placeholder,
  secureTextEntry,
  onChangeText,
  value,
  style,
  keyboardType,
  editable,
}) => {
  return (
    <TextInput
      style={[PrincipalTextInputStyles.input, style]}
      placeholder={placeholder}
      placeholderTextColor={theme.colors.textGray}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      value={value}
      keyboardType={keyboardType}
      editable={editable}
    />
  );
};

export default CustomTextInput;
