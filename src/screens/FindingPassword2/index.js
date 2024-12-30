import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const FindingPassword2Screen = ({navigation, onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>비밀번호 찾기</Text>
      </View>
      <Text style={styles.greeting}>안녕하세요 ABC123님</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('휴대폰으로 인증')}>
        <Text style={styles.buttonText}>휴대폰으로 인증</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('등록된 이메일로 인증')}>
        <Text style={styles.buttonText}>등록된 이메일로 인증</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.footerText}>돌아가기</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('계속하기')}>
          <Text style={styles.footerText}>계속하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5%',
    borderWidth: 1,
    borderColor: 'green',
    margin: '5%',
  },
  header: {
    borderBottomWidth: 1,
    borderColor: 'green',
    marginBottom: '5%',
    width: '100%',
    alignItems: 'center',
  },
  headerText: {
    fontSize: width * 0.06,
    color: 'black',
  },
  greeting: {
    fontSize: width * 0.05,
    marginBottom: '5%',
  },
  button: {
    width: '80%',
    padding: '3%',
    marginBottom: '5%',
    borderWidth: 1,
    borderColor: 'green',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: width * 0.045,
    color: 'black',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: '5%',
  },
  footerText: {
    fontSize: width * 0.045,
    color: 'green',
  },
});

export default FindingPassword2Screen;
