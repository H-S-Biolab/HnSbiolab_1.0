import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import theme from '../../theme';
import images from '../../../assets/icons/images';
import {AlertInformation} from './AlertInformation';
import {Alertsetting} from './Alertsetting';

const width_ratio = Dimensions.get('screen').width / 390;
const height_ratio = Dimensions.get('screen').height / 844;

function Notification({onPress, navigation}) {
  return (
    <>
      <View style={styles.footer}>
        <View style={styles.footerButtonContainer}>
          <TouchableOpacity
            style={styles.footerButton}
            title="알림설정"
            onPress={() =>
              Alertsetting(
                '알림을 키겠습니까?',
                '어플의 알림을 받거나 끌 수 있습니다.',
                () => console.log('확인 버튼 클릭됨'),
                () => console.log('취소 버튼 클릭됨'),
              )
            }>
            <Text style={styles.footerButtonText}>알림설정</Text>
            <Image source={images.go} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.footerButton}
            title="공지사항"
            onPress={() =>
              AlertInformation(
                '새로운 기능이 추가되었습니다',
                '이제 내 정보를 편하게 확인할 수 있습니다.',
                () => console.log('확인 버튼 클릭됨'),
              )
            }>
            <Text style={styles.footerButtonText}>공지사항</Text>
            <Image source={images.go} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.logoutButtonText}>로그아웃</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  footerButtonText: {
    color: theme.colors.textGray,
    fontSize: 15.6 * width_ratio,
    marginRight: 7.8 * width_ratio,
    paddingBottom: 4 * height_ratio,
    ...theme.fonts.Medium,
  },
  footerButtonContainer: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20 * height_ratio,
  },
  footerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: 30 * height_ratio,
    marginLeft: 20 * width_ratio,
  },
  icon: {
    width: 20 * width_ratio,
    height: 20 * width_ratio,
  },
  logoutButton: {
    alignSelf: 'flex-end',
    marginBottom: 0,
    marginRight: 10 * width_ratio,
  },
  logoutButtonText: {
    fontSize: 13.65 * width_ratio,
    color: theme.colors.textGray,
    ...theme.fonts.Medium,
  },
});

export default Notification;
