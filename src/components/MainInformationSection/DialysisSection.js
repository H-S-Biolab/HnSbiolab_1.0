import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import theme from '../../theme';
import images from '../../../assets/icons/images';
import {UserContext} from '../../contexts/User/UserContext';
import {useContext} from 'react';

const width_ratio = Dimensions.get('screen').width / 390;
const height_ratio = Dimensions.get('screen').height / 844;

const DialysisSection = ({isDialysis}) => {
  const {user} = useContext(UserContext);

  return (
    <View style={styles.section}>
      {isDialysis ? (
        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              {user.name}님, 오늘은 투석날이에요.
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>투석</Text>
            <Text style={styles.rowValue}>오전 11:30</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>메모</Text>
            <Text style={styles.rowValue}>여의도성모병원</Text>
          </View>
        </View>
      ) : (
        <>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              {user.name}님, 혹시 투석 중이신가요?
            </Text>
          </View>
          <Text style={styles.subtitle}>
            투석 루틴을 등록하시면 투석날을 관리할 수 있어요.
          </Text>
          <View style={styles.routineContainer}>
            <BlurView style={styles.absolute} blurType="light" blurAmount={2} />
            <View style={styles.row}>
              <Text style={styles.rowLabel}>투석</Text>
              <Text style={styles.rowValue}>오전 11:30</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowLabel}>메모</Text>
              <Text style={styles.rowValue}>여의도성모병원</Text>
            </View>
          </View>
        </>
      )}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>루틴 등록하기</Text>
        <Image source={images.go} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: theme.colors.White,
    borderRadius: 8 * width_ratio,
    paddingVertical: 24 * height_ratio,
    paddingHorizontal: 20 * width_ratio,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16 * height_ratio,
    marginBottom: 8 * height_ratio,
    color: theme.colors.Black,
    ...theme.fonts.Bold,
  },
  subtitle: {
    fontSize: 14 * height_ratio,
    color: theme.colors.textGray,
    marginBottom: 20 * height_ratio,
    ...theme.fonts.Medium,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8 * height_ratio,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.lightGray,
  },
  rowLabel: {
    paddingLeft: 16 * width_ratio,
    fontSize: 17 * width_ratio,
    color: theme.colors.textGray,
    ...theme.fonts.Medium,
  },
  rowValue: {
    paddingRight: 24 * width_ratio,
    fontSize: 17 * width_ratio,
    color: theme.colors.Black,
    ...theme.fonts.Semibold,
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
    ...theme.fonts.Semibold,
  },
  icon: {
    width: 20 * width_ratio,
    height: 20 * height_ratio,
  },
  routineContainer: {},
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 8 * width_ratio,
    zIndex: 2,
  },
});

export default DialysisSection;
