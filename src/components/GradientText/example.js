import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import GradientText from './src/components/GradientText';

const {width} = Dimensions.get('window');

export default function App() {
  const score = 50;

  let gradientColors;
  if (score <= 35) {
    gradientColors = ['#ff7777', '#ff9377']; // Red shades
  } else if (score <= 70) {
    gradientColors = ['#77ff77', '#52dd62']; // Green shades
  } else {
    gradientColors = ['#cae0ff', '#1677ff']; // Blue shades
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.headerText}>오늘의 혈당</Text>
          <Text style={styles.headerSubText}>오후 6:10</Text>
        </View>
        <View style={styles.valueContainer}>
          <GradientText colors={gradientColors} style={styles.valueText}>
            {score}
          </GradientText>
          <Text style={styles.score}>점</Text>
          <Text style={styles.valueSubText}>▼10점</Text>
          <Text style={styles.detailText}>혈당 스파이크 : 2회</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'black',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 5},
    width: width * 0.8,
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  headerText: {
    color: '#e8e8e8',
    fontWeight: 'bold',
    fontSize: 16,
  },
  headerSubText: {
    color: '#a0aec0',
    fontSize: 12,
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 8,
  },
  valueText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  score: {
    fontSize: 12,
    color: '#ecc94b',
    marginBottom: 7,
    marginLeft: 4,
  },
  valueSubText: {
    fontSize: 12,
    color: '#ecc94b',
    marginLeft: 16,
    marginBottom: 22,
  },
  detailText: {
    color: '#a0aec0',
    fontSize: 12,
    marginLeft: 10,
  },
});
