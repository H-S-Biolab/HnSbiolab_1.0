import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import theme from '../../theme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useContext} from 'react';

const width_ratio = Dimensions.get('screen').width / 390;
const height_ratio = Dimensions.get('screen').height / 844;

const BloodSugarSection = ({navigation, onPress}) => {
  return (
    <View style={styles.section}>
      <View style={styles.row}>
        <Text style={styles.rowLabel}>공복 혈당</Text>
        <Text style={styles.rowValue}>116</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.rowLabel}>아침 후</Text>
        <Text style={styles.rowValue}>80</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.rowLabel}>점심 후</Text>
        <Text style={styles.rowValue}>80</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.rowLabel}>저녁 후</Text>
        <Text style={styles.rowValue}>77</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  section: {
    backgroundColor: theme.colors.White,
    borderRadius: 8 * width_ratio,
    paddingHorizontal: 30 * width_ratio,
    paddingVertical: 6 * height_ratio,
    marginBottom: 20 * height_ratio,
    height: 160 * height_ratio,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6 * height_ratio,
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
});
export default BloodSugarSection;
