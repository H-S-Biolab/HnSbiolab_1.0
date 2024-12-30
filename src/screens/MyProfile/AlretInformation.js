import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions, Alert} from 'react-native';
import theme from '../../theme';
import images from '../../../assets/icons/images';

const {width, height} = Dimensions.get('window');

export const AlertInformation = (
  title,
  message,
  onConfirm = () => {},
  onCancel = () => {},
) => {
  Alert.alert(title, message, [
    {text: '확인', onPress: () => console.log('확인 버튼 클릭됨')},
  ]);
};
