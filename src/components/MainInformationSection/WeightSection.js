import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import theme from '../../theme';
import {useContext} from 'react';
import {UserContext} from '../../contexts/User/UserContext';

const width_ratio = Dimensions.get('screen').width / 390;
const height_ratio = Dimensions.get('screen').height / 844;

const WeightSection = ({navigation}) => {
  const {user} = useContext(UserContext);

  return (
    <View style={styles.section}>
      <View style={styles.row}>
        <Text style={styles.rowLabel}>현재 몸무게</Text>
        <Text style={styles.rowValue}>78.7 kg</Text>
      </View>
      <View style={styles.speechBubbleContainer}>
        <View style={styles.speechBubbleArrow} />
        <View style={styles.speechBubble}>
          <Text style={styles.speechBubbleText}>
            목표 체중보다 1.3kg 줄었어요.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: theme.colors.White,
    borderRadius: 8 * width_ratio,
    paddingHorizontal: 30 * width_ratio,
    paddingVertical: 16 * height_ratio,
    marginBottom: 20 * height_ratio,
    height: 160 * height_ratio,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8 * height_ratio,
    marginBottom: 12 * height_ratio,
  },
  rowLabel: {
    fontSize: 16 * width_ratio,
    color: theme.colors.textGray,
    ...theme.fonts.Semibold,
  },
  rowValue: {
    fontSize: 16 * width_ratio,
    color: theme.colors.Black,
    ...theme.fonts.Bold,
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
    marginTop: -2 * height_ratio,
  },
});

export default WeightSection;
