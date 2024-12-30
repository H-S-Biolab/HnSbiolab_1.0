import React from 'react';
import {BlurView} from '@react-native-community/blur';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import theme from '../../theme';
import CustomButton from '../atomic/CustomButton';
import images from '../../../assets/icons/images';

const width_ratio = Dimensions.get('screen').width / 390;
const height_ratio = Dimensions.get('screen').height / 844;

const DietSection = ( { navigation }) => {
  return (
    <View style={styles.section}>
    <View style={styles.titleContainer}>
      <Text style={styles.sectionTitle}>식단</Text>
    </View>
      {['탄수화물', '단백질', '지방', '나트륨', '칼륨', '인'].map((item, index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.rowLabel}>{item}</Text>
          <Text style={styles.rowValue}>0/200g</Text>
        </View>
      ))}
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('MainDiet')}
      >
        <Text style={styles.buttonText}>식사 기록하기</Text>
        <Image source={images.go} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: theme.colors.White,
    borderRadius: 8 * width_ratio,
    paddingHorizontal: 24 * width_ratio,
    paddingVertical: 12 * height_ratio,
    marginBottom: 20 * height_ratio,
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
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 11 * height_ratio,
  },
  rowLabel: {
    fontSize: 17 * width_ratio,
    color: theme.colors.textGray,
    ...theme.fonts.Semibold,
  },
  rowValue: {
    fontSize: 16 * width_ratio,
    color: theme.colors.Black,
    ...theme.fonts.Semibold,
  },
  CustomButtonTextStyle: {
    color: 'white',
    fontSize: 18 * height_ratio,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 30 * height_ratio,
  },
  buttonText: {
    color: theme.colors.textGray,
    fontSize: 16 * width_ratio,
    marginRight: 8 * width_ratio,
    ...theme.fonts.Medium,
  },
  icon: {
    width: 20 * width_ratio,
    height: 20 * height_ratio,
  },
});

export default DietSection;
