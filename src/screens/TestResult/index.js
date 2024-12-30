import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import styles from './styles';

const TestResultsScreen = () => {
  const results = [
    {label: '크레아티닌', value: '1.3'},
    {label: '칼륨', value: '1.3'},
    {label: '인', value: '1.3'},
    {label: '칼슘', value: '1.3'},
    {label: '혈당', value: '1.3'},
    {label: '혈압', value: '1.3'},
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>나의 테스트 결과</Text>
      {results.map((result, index) => (
        <View key={index} style={styles.row}>
          <View style={styles.box}>
            <Text style={styles.label}>{result.label}</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.value}>{result.value}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default TestResultsScreen;
