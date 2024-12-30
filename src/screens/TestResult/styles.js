import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    justifyContent: 'center',
    width: '80%',
    marginVertical: 8,
  },
  box: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'green',
    padding: 16,
    marginHorizontal: 4,
  },
  label: {
    fontSize: 18,
    textAlign: 'center',
  },
  value: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default styles;
