import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  Dimensions,
} from 'react-native';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomTextInput from '../../components/atomic/CustomTextInput';
import LoginButton from '../../components/atomic/LoginButton';
import styles from './styles';
import {UserContext} from '../../contexts/User/UserContext';
import images from '../../../assets/icons/images';
import {useAPI} from '../../contexts/API/APIContext';

const {width, height} = Dimensions.get('window');

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {updateUser} = useContext(UserContext);
  const url = useAPI();

  const handleLogin = async () => {
    console.log(username);
    console.log(password);

    try {
      const response = await fetch(
        `${url}/login?id=${username}&pwd=${password}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      console.log('Response status:', response.status);
      console.log('Response statusText:', response.statusText);

      const data = await response.json();

      if (data._id) {
        updateUser(data);
        console.log(data._id);
        navigation.navigate('MainApp');
      } else {
        // 로그인 실패 시
        Alert.alert('로그인 실패', '아이디 또는 비밀번호를 확인하세요.');
      }
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('오류', '로그인 요청 중 오류가 발생했습니다.');
    }
  };

  return (
    // <KeyboardAwareScrollView
    //   contentContainerStyle={{flexGrow: 1}}
    //   keyboardShouldPersistTaps="handled"
    //   enableOnAndroid={true}
    //   extraScrollHeight={100}>
    <View style={styles.container}>
      <Image source={images.logo} style={styles.logo} />
      <CustomTextInput
        placeholder="아이디 입력"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        autoCapitalize="none" // 첫 글자 대문자 방지
      />
      <CustomTextInput
        placeholder="비밀번호 입력"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        autoCapitalize="none" // 첫 글자 대문자 방지
      />
      <LoginButton
        title="로그인"
        // onPress={handleLogin}
        onPress={() => navigation.navigate('MainApp')}
        style={styles.loginButton}
      />
      <View style={styles.signUpContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.loginText}>회원가입</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('FindingID')}>
          <Text style={styles.loginText}>아이디ㆍ비밀번호 찾기</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.snsLoginContainer}>
        <TouchableOpacity style={styles.snsButton}>
          <View style={styles.snsButton} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.snsButton}>
          <View style={styles.snsButton} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.snsButton}>
          <View style={styles.snsButton} />
        </TouchableOpacity>
      </View>
    </View>
    // </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
