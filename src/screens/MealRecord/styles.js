import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: width * 0.04,
    margin: width * 0.05,
    backgroundColor: 'white',
    width: width * 0.9,
  },
  header: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    marginBottom: width * 0.04,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: width * 0.04,
  },
  tab: {
    flex: 1,
    padding: width * 0.03,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    marginHorizontal: width * 0.01,
  },
  activeTab: {
    backgroundColor: '#007bff',
  },
  tabText: {
    color: 'black',
    fontSize: width * 0.04,
  },
  activeTabText: {
    color: 'white',
  },
  inputContainer: {
    marginBottom: width * 0.04,
  },
  dateTimeButton: {
    height: width * 0.12,
    borderColor: 'gray',
    borderWidth: 1,
    justifyContent: 'center',
    paddingHorizontal: width * 0.02,
    marginTop: width * 0.02,
  },
  dateTimeText: {
    fontSize: width * 0.04,
  },
  input: {
    height: width * 0.12,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: width * 0.04,
    paddingHorizontal: width * 0.02,
  },
  memoInput: {
    height: width * 0.3,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: width * 0.04,
    paddingHorizontal: width * 0.02,
  },
  cameraButton: {
    backgroundColor: '#007bff',
    padding: width * 0.04,
    alignItems: 'center',
    marginBottom: width * 0.04,
  },
  cameraButtonText: {
    color: 'white',
    fontSize: width * 0.04,
  },
  addButton: {
    backgroundColor: '#d3d3d3',
    padding: width * 0.04,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'gray',
    fontSize: width * 0.04,
  },
});

export default styles;
