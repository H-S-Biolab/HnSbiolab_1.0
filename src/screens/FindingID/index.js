import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

const years = Array.from({length: 100}, (_, i) => ({
  label: `${2024 - i}`,
  value: `${2024 - i}`,
}));
const months = Array.from({length: 12}, (_, i) => ({
  label: `${i + 1}`,
  value: `${i + 1}`,
}));
const days = Array.from({length: 31}, (_, i) => ({
  label: `${i + 1}`,
  value: `${i + 1}`,
}));

const FindingIDScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [phone, setPhone] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [gender, setGender] = useState(null);

  const handleVerify = () => {
    // 인증 처리 로직
  };

  const handleSubmit = () => {
    // 제출 처리 로직
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Button title="뒤로가기" onPress={() => navigation.goBack()} />
      <Text style={styles.header}>아이디 찾기</Text>
      <View style={styles.row}>
        <Text style={styles.label}>이름 :</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="입력"
        />
        <TouchableOpacity
          style={[
            styles.genderButton,
            gender === 'male' && styles.selectedGender,
          ]}
          onPress={() => setGender('male')}>
          <Text>남</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.genderButton,
            gender === 'female' && styles.selectedGender,
          ]}
          onPress={() => setGender('female')}>
          <Text>녀</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>생년월일 :</Text>
        <RNPickerSelect
          onValueChange={value => setYear(value)}
          items={years}
          placeholder={{label: '년도', value: null}}
          style={pickerSelectStyles}
        />
        <RNPickerSelect
          onValueChange={value => setMonth(value)}
          items={months}
          placeholder={{label: '월', value: null}}
          style={pickerSelectStyles}
        />
        <RNPickerSelect
          onValueChange={value => setDay(value)}
          items={days}
          placeholder={{label: '일', value: null}}
          style={pickerSelectStyles}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>휴대폰번호 :</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="입력"
        />
        <Button title="인증" onPress={handleVerify} />
      </View>
      <TextInput
        style={styles.verificationInput}
        value={verificationCode}
        onChangeText={setVerificationCode}
        placeholder="인증번호 입력"
      />
      <Button title="확인" onPress={handleSubmit} />
      <View>
        <Icon name="coffee" size={30} color="#900" />
      </View>
    </ScrollView>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default FindingIDScreen;
