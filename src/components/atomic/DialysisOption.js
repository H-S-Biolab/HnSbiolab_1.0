import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import theme from '../../theme';

const DialysisOption = ({selectedOption, onOptionPress}) => {
  return (
    <View style={styles.optionContainer}>
      <TouchableOpacity
        style={[
          styles.optionButton,
          selectedOption === '네' && styles.selectedButton,
        ]}
        onPress={() => onOptionPress('네')}>
        <Text
          style={[
            styles.optionText,
            selectedOption === '네' && styles.selectedButtonText,
          ]}>
          네
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.optionButton,
          selectedOption === '아니오' && styles.selectedButton,
        ]}
        onPress={() => onOptionPress('아니오')}>
        <Text
          style={[
            styles.optionText,
            selectedOption === '아니오' && styles.selectedButtonText,
          ]}>
          아니오
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  optionButton: {
    width: '45%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.mainBlue,
    borderRadius: 10,
  },
  optionText: {
    color: theme.colors.mainBlue,
    fontSize: 16,
  },
  selectedButton: {
    backgroundColor: theme.colors.mainBlue,
  },
  selectedButtonText: {
    color: theme.colors.White,
  },
});

export default DialysisOption;
