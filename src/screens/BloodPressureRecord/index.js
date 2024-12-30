import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Alert,
} from 'react-native';
import styles from './styles';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import {BloodPressureContext} from '../../contexts/BloodPressure/BloodPressureContext';
import {UserContext} from '../../contexts/User/UserContext';
import {useAPI} from '../../contexts/API/APIContext';

const {width, height} = Dimensions.get('window');

const BloodPressureRecordScreen = ({navigation}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [systolicData, setSystolicData] = useState('');
  const [diastolicData, setDiastolicData] = useState('');
  const [pressureMemoData, setPressureMemoData] = useState('');
  const [heartRateData, setHeartRateData] = useState('');

  const {addBloodPressureRecord} = useContext(BloodPressureContext);
  const {user} = useContext(UserContext);
  const url = useAPI();

  const onChange = (event, date) => {
    const currentDate = date || selectedDate;
    setShowDatePicker(false);
    setSelectedDate(currentDate);
  };

  const onTimeChange = (event, time) => {
    const currentTime = time || selectedDate;
    setShowTimePicker(false);
    setSelectedDate(currentTime);
  };

  const saveRecord = async () => {
    if (!systolicData || !diastolicData || !heartRateData) {
      Alert.alert('모든 필드를 입력하세요.');
      return;
    }

    const newRecord = {
      date: moment(selectedDate).format('YYYY-MM-DD'),
      time: moment(selectedDate).format('HH:mm'),
      systolic: parseInt(systolicData, 10),
      relaxation: parseInt(diastolicData, 10),
      heart_rate: parseInt(heartRateData, 10),
      memo: pressureMemoData,
    };

    try {
      const response = await fetch(`${url}/blood_pressure`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          _id: user._id,
        },
        body: JSON.stringify(newRecord),
      });

      if (response.ok) {
        addBloodPressureRecord(newRecord);
        Alert.alert('기록이 저장되었습니다.');
        navigation.navigate('BloodPressure');
      } else {
        Alert.alert('기록 저장에 실패했습니다.');
      }
    } catch (error) {
      Alert.alert('네트워크 오류가 발생했습니다.');
    }
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
      <View style={styles.container}>
        <View style={styles.recordContainer}>
          <View style={styles.recordBox}>
            <Text style={styles.boldText}>기록 날짜</Text>
            <Text style={styles.boldText}>
              {moment(selectedDate).format('YYYY.MM.DD')}
            </Text>
            <TouchableOpacity
              onPress={() => setShowDatePicker(true)}
              style={styles.dateButton}>
              <Text style={styles.boldText}>click</Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={selectedDate}
                mode="date"
                display="default"
                onChange={onChange}
              />
            )}
          </View>
          <View style={styles.recordBox}>
            <Text style={styles.boldText}>기록 시간</Text>
            <Text style={styles.boldText}>
              {moment(selectedDate).format('HH:mm')}
            </Text>
            <TouchableOpacity
              onPress={() => setShowTimePicker(true)}
              style={styles.dateButton}>
              <Text style={styles.boldText}>click</Text>
            </TouchableOpacity>
            {showTimePicker && (
              <DateTimePicker
                value={selectedDate}
                mode="time"
                display="default"
                onChange={onTimeChange}
              />
            )}
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputBox}>
            <Text style={styles.normalText}>수축기</Text>
            <TextInput
              style={styles.inputText}
              keyboardType="numeric"
              onChangeText={setSystolicData}
              value={systolicData}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.normalText}>이완기</Text>
            <TextInput
              style={styles.inputText}
              keyboardType="numeric"
              onChangeText={setDiastolicData}
              value={diastolicData}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.normalText}>심박수</Text>
            <TextInput
              style={styles.inputText}
              keyboardType="numeric"
              onChangeText={setHeartRateData}
              value={heartRateData}
            />
          </View>
        </View>
        <View style={styles.memoContainer}>
          <View style={styles.memoBox}>
            <Text style={styles.boldText}>메모</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={setPressureMemoData}
              value={pressureMemoData}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.recordButton} onPress={saveRecord}>
          <Text style={styles.buttonText}>기록하기</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default BloodPressureRecordScreen;
