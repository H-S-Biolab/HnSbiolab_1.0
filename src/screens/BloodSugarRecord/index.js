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
import {BloodSugarContext} from '../../contexts/BloodSugar/BloodSugarContext';
import {useAPI} from '../../contexts/API/APIContext';
import {UserContext} from '../../contexts/User/UserContext';

const {width, height} = Dimensions.get('window');

const BloodSugarRecordScreen = ({navigation}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [bloodSugar, setBloodSugar] = useState('');
  const [memo, setMemo] = useState('');
  const [selectedOption, setSelectedOption] = useState('breakfast');

  const {records, addRecord} = useContext(BloodSugarContext);
  const {user} = useContext(UserContext); // UserContext에서 user 객체 가져오기

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

  const handleAddRecord = async () => {
    if (!bloodSugar) {
      Alert.alert('혈당 수치를 입력하세요.');
      return;
    }

    const recordData = {
      bloodSugar: parseFloat(bloodSugar),
      time: selectedDate,
      memo,
    };

    try {
      await sendDataToServer(recordData, selectedOption);
      addRecord(recordData, selectedOption);
      Alert.alert('기록이 저장되었습니다.');
      navigation.navigate('BloodSugar');
    } catch (error) {
      Alert.alert('데이터 전송에 실패했습니다.', error.message);
    }
  };

  // Function to get the most recent record for a specific type
  const getMostRecentRecord = type => {
    const record = records.find(record => record[type]);
    return record ? record[type] : {time: '', blood_sugar: '', memo: ''};
  };

  // Function to send data to the server
  const sendDataToServer = async (recordData, selectedOption) => {
    const formattedData = {
      date: moment(selectedDate).format('YYYY-MM-DD'),
      empty:
        selectedOption === 'emptyStomach'
          ? {
              time: moment(selectedDate).format('HH:mm'),
              blood_sugar: recordData.bloodSugar,
              memo: recordData.memo,
            }
          : getMostRecentRecord('empty'),
      breakfast:
        selectedOption === 'breakfast'
          ? {
              time: moment(selectedDate).format('HH:mm'),
              blood_sugar: recordData.bloodSugar,
              memo: recordData.memo,
            }
          : getMostRecentRecord('breakfast'),
      lunch:
        selectedOption === 'lunch'
          ? {
              time: moment(selectedDate).format('HH:mm'),
              blood_sugar: recordData.bloodSugar,
              memo: recordData.memo,
            }
          : getMostRecentRecord('lunch'),
      dinner:
        selectedOption === 'dinner'
          ? {
              time: moment(selectedDate).format('HH:mm'),
              blood_sugar: recordData.bloodSugar,
              memo: recordData.memo,
            }
          : getMostRecentRecord('dinner'),
    };

    const response = await fetch(`${url}/blood_sugar`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        _id: user._id, // UserContext에서 가져온 user._id 사용
      },
      body: JSON.stringify(formattedData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  };

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              selectedOption === 'emptyStomach' && styles.selectedButton,
            ]}
            onPress={() => setSelectedOption('emptyStomach')}>
            <Text style={styles.normaltext}>공복</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              selectedOption === 'breakfast' && styles.selectedButton,
            ]}
            onPress={() => setSelectedOption('breakfast')}>
            <Text style={styles.normaltext}>아침</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              selectedOption === 'lunch' && styles.selectedButton,
            ]}
            onPress={() => setSelectedOption('lunch')}>
            <Text style={styles.normaltext}>점심</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              selectedOption === 'dinner' && styles.selectedButton,
            ]}
            onPress={() => setSelectedOption('dinner')}>
            <Text style={styles.normaltext}>저녁</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.selectContainer}>
          <View style={styles.leftRecordBox}>
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
          <View style={styles.rightRecordBox}>
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
        <View style={styles.bloodSugarContainer}>
          <View style={styles.bloodSugarText}>
            <Text style={styles.boldText}>혈당</Text>
          </View>
          <View style={styles.bloodSugarInputText}>
            <TextInput
              style={styles.normalText}
              placeholder="입력"
              keyboardType="numeric"
              value={bloodSugar}
              onChangeText={setBloodSugar}
            />
          </View>
        </View>
        <View style={styles.memoContainer}>
          <View style={styles.memoText}>
            <Text style={styles.boldText}>메모</Text>
          </View>
          <View style={styles.memoTextInput}>
            <TextInput
              style={styles.normalText}
              placeholder="메모를 입력하세요."
              value={memo}
              onChangeText={setMemo}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.recordButton} onPress={handleAddRecord}>
          <Text style={styles.buttonText}>추가하기</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default BloodSugarRecordScreen;
