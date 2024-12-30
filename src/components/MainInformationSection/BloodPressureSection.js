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

const width_ratio = Dimensions.get('screen').width / 390;
const height_ratio = Dimensions.get('screen').height / 844;

const BloodPressureSection = ({navigation}) => {
  return (
    <View style={styles.section}>
      <View style={styles.row}>
        <Text style={styles.rowLabel}>수축기</Text>
        <Text style={styles.rowValue}>116</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.rowLabel}>이완기</Text>
        <Text style={styles.rowValue}>80</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.rowLabel}>심박수</Text>
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
    paddingVertical: 16 * height_ratio,
    marginBottom: 20 * height_ratio,
    height: 160 * height_ratio,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8 * height_ratio,
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
export default BloodPressureSection;
