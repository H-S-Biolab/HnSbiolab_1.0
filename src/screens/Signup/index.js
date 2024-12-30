import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import theme from '../../theme';
import styles from './styles';

const {width, height} = Dimensions.get('window');

const SignupScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>회원가입</Text>
      <Text style={styles.label}>email</Text>
      <TextInput
        style={styles.input}
        placeholder="아이디 입력"
        placeholderTextColor={theme.colors.textGray}
      />
      <Text style={styles.label}>비밀번호</Text>
      <TextInput
        style={styles.input}
        placeholder="비밀번호 입력"
        placeholderTextColor={theme.colors.textGray}
        secureTextEntry
      />
      <Text style={styles.label}>비밀번호 확인</Text>
      <TextInput
        style={styles.input}
        placeholder="비밀번호 확인"
        placeholderTextColor={theme.colors.textGray}
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Email 인증하기</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;
