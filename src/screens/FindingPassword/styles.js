import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  input: {
    width: '80%',
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'green',
    padding: 8,
    marginBottom: 24,
    textAlign: 'center',
  },
});

export default styles;