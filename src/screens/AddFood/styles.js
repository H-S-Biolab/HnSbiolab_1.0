import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: width * 0.04,
    top: height * 0.1,
  },
  header: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    marginBottom: height * 0.02,
  },
  searchInput: {
    height: height * 0.06,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: width * 0.02,
    paddingLeft: width * 0.02,
    marginBottom: height * 0.02,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: width * 0.04,
    backgroundColor: '#f9f9f9',
    marginBottom: height * 0.02,
    borderRadius: width * 0.02,
  },
  badgeContainer: {
    marginRight: width * 0.04,
  },
  badge: {
    backgroundColor: '#e0e0e0',
    paddingVertical: height * 0.005,
    paddingHorizontal: width * 0.02,
    borderRadius: width * 0.02,
    fontSize: width * 0.03,
  },
  itemContent: {
    flex: 1,
  },
  title: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: width * 0.035,
    color: '#777',
  },
  calories: {
    fontSize: width * 0.035,
    marginRight: width * 0.04,
  },
  addButton: {
    backgroundColor: '#007AFF',
    borderRadius: width * 0.08,
    width: width * 0.08,
    height: width * 0.08,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: width * 0.05,
    lineHeight: width * 0.06,
  },
});

export default styles;
