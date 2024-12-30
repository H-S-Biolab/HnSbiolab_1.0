import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: 'green',
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
    borderWidth: 1,
    borderColor: 'green',
    padding: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'green',
    padding: 8,
  },
  label: {
    fontSize: 18,
    marginRight: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'green',
    padding: 8,
    marginRight: 8,
  },
  genderButton: {
    borderWidth: 1,
    borderColor: 'green',
    padding: 8,
    marginHorizontal: 4,
  },
  selectedGender: {
    backgroundColor: 'lightgreen',
  },
  verificationInput: {
    borderWidth: 1,
    borderColor: 'green',
    padding: 8,
    marginBottom: 16,
  },
});

export default styles;
