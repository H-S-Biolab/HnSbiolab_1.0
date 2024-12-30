import React from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';
import styles from './styles';

export default function HealthCheckup() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>건강검진</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Text</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Text</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Text</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Text</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Text</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="제출하기" onPress={() => {}} />
        <Button title="뒤로가기" onPress={() => {}} />
      </View>
    </View>
  );
}
