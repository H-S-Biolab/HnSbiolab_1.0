import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import theme from '../../theme';
import {BlurView} from '@react-native-community/blur';

const width_ratio = Dimensions.get('screen').width / 390;
const height_ratio = Dimensions.get('screen').height / 844;

const MedicationSection = ({ isMedication, toggleMedication, remainingMeds, progress = 0 }) => {
  return (
    <View style={styles.section}>
      <View style={styles.titleContainer}>
        <Text style={styles.sectionTitle}>복약</Text>
        <Text style={styles.progressPercentage}>{progress} %</Text>
      </View>
      {isMedication ? (
        <>
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: `${progress}%` }]} />
            </View>
          </View>
          <View style={styles.speechBubbleContainer}>
            <View style={styles.speechBubbleArrow} />
            <View style={styles.speechBubble}>
              <Text style={styles.speechBubbleText}>
                {remainingMeds}개의 약이 남았어요!
              </Text>
            </View>
          </View>
        </>
      ) : (
        <>
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '0%' }]} />
            </View>
          </View>
          <View style={styles.speechBubbleContainer}>
            <View style={styles.speechBubbleArrow} />
            <View style={styles.speechBubble}>
              <Text style={styles.speechBubbleText}>
                복약 루틴을 등록해보세요.
              </Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: theme.colors.White,
    borderRadius: 8 * width_ratio,
    paddingHorizontal: 24 * width_ratio,
    paddingVertical: 12 * height_ratio,
    marginBottom: 16 * height_ratio,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10 * height_ratio,
  },
  sectionTitle: {
    fontSize: 18 * height_ratio,
    color: theme.colors.Black,
    ...theme.fonts.Bold,
  },
  progressPercentage: {
    fontSize: 22 * height_ratio,
    fontWeight: 'bold',
    color: theme.colors.mainBlue,
    ...theme.fonts.Bold,
  },
  progressContainer: {
    paddingVertical: 10 * height_ratio,
    marginVertical: 12 * height_ratio,
  },
  progressBar: {
    height: 20 * height_ratio,
    backgroundColor: theme.colors.lightGray,
    borderRadius: 12 * height_ratio,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: theme.colors.mainBlue,
  },
  speechBubbleContainer: {
    alignItems: 'center',
  },
  speechBubble: {
    backgroundColor: '#F6F6F9',
    paddingVertical: 10 * height_ratio,
    paddingHorizontal: 12 * width_ratio,
    borderRadius: 8 * width_ratio,
  },
  speechBubbleText: {
    fontSize: 13 * height_ratio,
    color: '#5D5D62',
    ...theme.fonts.Semibold,
  },
  speechBubbleArrow: {
    width: 0,
    height: 0,
    borderBottomWidth: 10 * height_ratio,
    borderBottomColor: '#F6F6F9',
    borderLeftWidth: 10 * width_ratio,
    borderLeftColor: 'transparent',
    borderRightWidth: 10 * width_ratio,
    borderRightColor: 'transparent',
    alignSelf: 'center',
    marginTop: -1 * height_ratio,
  },
});

export default MedicationSection;
