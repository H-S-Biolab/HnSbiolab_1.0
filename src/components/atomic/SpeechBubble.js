// src/components/atomic/SpeechBubble.js

import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import theme from '../../theme';

const { height, width } = Dimensions.get('window');

const SpeechBubble = ({ message }) => {
  return (
    <View style={[styles.bubble, { width: Math.min(message.length * width * 0.03, width * 0.8) }]}>
      <Text style={styles.messageText}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bubble: {
    backgroundColor: theme.colors.MessageGray,
    borderRadius: 15,
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.03,
    marginTop: height * 0.02,
  },
  messageText: {
    ...theme.fonts.Regular_14,
    color: theme.colors.textDarkGray,
    textAlign: 'center',
  },
});

export default SpeechBubble;
