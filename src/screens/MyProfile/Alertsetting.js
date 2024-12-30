import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions, Alert} from 'react-native';
import theme from '../../theme';
import images from '../../../assets/icons/images';

const {width, height} = Dimensions.get('window');

export const Alertsetting = (
  title,
  message,
  onConfirm = () => {},
  onCancel = () => {},
) => {
  Alert.alert(
    title,
    message,
    [
      {text: '확인', onPress: onConfirm},
      {text: '취소', onPress: onCancel, style: 'cancel'},
    ],
    {cancelable: false},
  );
};
