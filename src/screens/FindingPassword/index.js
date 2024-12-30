import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';
import styles from './styles';

const FindingPasswordScreen = ({navigation}) => {
  const [id, setId] = useState('');

  const handleSubmit = id => {
    // 제출 처리 로직
    if (id !== 'ABC123') {
      console.log('없는 아이디입니다.');
    } else {
      console.log('성공했습니다.');
      navigation.navigate('FindingPassword2');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Button title="뒤로가기" onPress={() => navigation.goBack()} />
      <Text style={styles.header}>비밀번호 찾기</Text>
      <TextInput
        style={styles.input}
        value={id}
        onChangeText={setId}
        placeholder="ID를 입력해주세요"
      />
      <Button title="확인" onPress={() => handleSubmit(id)} />
    </ScrollView>
  );
};

export default FindingPasswordScreen;
