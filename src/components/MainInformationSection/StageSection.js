import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import theme from '../../theme';
import images from '../../../assets/icons/images';
import {UserContext} from '../../contexts/User/UserContext';
import {useContext} from 'react';

const width_ratio = Dimensions.get('screen').width / 390;
const height_ratio = Dimensions.get('screen').height / 844;

const getStage = eGFR => {
  if (eGFR >= 90) return 1;
  if (eGFR >= 60) return 2;
  if (eGFR >= 45) return '3a';
  if (eGFR >= 30) return '3b';
  if (eGFR >= 15) return 4;
  return 5;
};

const StageSection = ({eGFR}) => {
  const stage = 5;
  const {user} = useContext(UserContext);

  return (
    <View style={styles.section}>
      {stage !== null ? (
        <>
          <Text style={styles.title}>
            {user.name}님은 만성콩팥병{' '}
            <Text style={styles.highlight}>{stage}단계</Text>입니다.
          </Text>
          <Text style={styles.subtitle}>
            사구체여과율 <Text style={styles.subtitleBold}>12</Text>
          </Text>
        </>
      ) : (
        <>
          <Text style={styles.title}>아직 내 단계 데이터가 없어요.</Text>
          <Text style={styles.subtitle}>
            지금 자가진단 키트로 검사하고 내 단계를 알아보세요.
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>입력하러 가기</Text>
            <Image source={images.go} style={styles.icon} />
          </TouchableOpacity>
        </>
      )}
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
  title: {
    fontSize: 16 * height_ratio,
    fontWeight: 'bold',
    marginBottom: 8 * height_ratio,
    color: theme.colors.Black,
    ...theme.fonts.Bold,
  },
  subtitle: {
    fontSize: 14 * height_ratio,
    color: theme.colors.textGray,
    ...theme.fonts.Medium,
  },
  highlight: {
    color: '#FF4D4F',
  },
  subtitleBold: {
    fontSize: 16 * height_ratio,
    fontWeight: 'bold',
    color: theme.colors.textGray,
    marginBottom: 8 * height_ratio,
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
});

export default StageSection;
