import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import theme from '../../theme';
import WaterIntake from '../../screens/Water';

const width_ratio = Dimensions.get('screen').width / 390;
const height_ratio = Dimensions.get('screen').height / 844;

const WaterIntakeSection = ({navigation}) => {
  const [cups, setCups] = useState(0);

  return (
    <View style={styles.section}>
      <TouchableOpacity
        style={styles.row}
        onPress={() => navigation.navigate('WaterIntake')}>
        <Text style={styles.rowLabel}>총 수분 섭취량</Text>
        <Text style={styles.rowValue}>{cups}잔 / 5잔</Text>
      </TouchableOpacity>
      <View style={styles.speechBubbleContainer}>
        <View style={styles.speechBubbleArrow} />
        <View style={styles.speechBubble}>
          <Text style={styles.speechBubbleText}>
            수분 섭취량을 기록해보세요.
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
    marginBottom: 8 * height_ratio,
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

export default WaterIntakeSection;
