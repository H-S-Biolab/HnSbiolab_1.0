// src/screens/MyRoutineScreen.js

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styles from './styles';

function MyRoutineScreen({onPress, navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Routine Screen</Text>
      <TouchableOpacity
        style={styless.button}
        onPress={() => navigation.navigate('New1')}>
        <Text style={styless.buttonText}>title</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styless.button}
        onPress={() => navigation.navigate('New2')}>
        <Text style={styless.buttonText}>title</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styless.button}
        onPress={() => navigation.navigate('New3')}>
        <Text style={styless.buttonText}>title</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styless.button}
        onPress={() => navigation.navigate('New4')}>
        <Text style={styless.buttonText}>title</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styless.button}
        onPress={() => navigation.navigate('New5')}>
        <Text style={styless.buttonText}>title</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styless.button}
        onPress={() => navigation.navigate('New6')}>
        <Text style={styless.buttonText}>title</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styless.button}
        onPress={() => navigation.navigate('New7')}>
        <Text style={styless.buttonText}>title</Text>
      </TouchableOpacity>
    </View>
  );
}
const styless = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MyRoutineScreen;
