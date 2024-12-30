import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  Platform,
  Button,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './styles';

const {width} = Dimensions.get('window');

const MealRecordScreen = ({navigation, onPress}) => {
  const [selectedMeal, setSelectedMeal] = useState('아침');
  const [mealTime, setMealTime] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [memo, setMemo] = useState('');
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onTimeChange = (event, selectedTime) => {
    setShowTimePicker(Platform.OS === 'ios');
    if (selectedTime) {
      setMealTime(selectedTime);
    }
  };

  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="뒤로가기" onPress={() => navigation.goBack()} />
      <Text style={styles.header}>식사 기록</Text>
      <View style={styles.tabContainer}>
        {['아침', '점심', '저녁', '간식'].map(meal => (
          <TouchableOpacity
            key={meal}
            style={[styles.tab, selectedMeal === meal && styles.activeTab]}
            onPress={() => setSelectedMeal(meal)}>
            <Text
              style={[
                styles.tabText,
                selectedMeal === meal && styles.activeTabText,
              ]}>
              {meal}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.inputContainer}>
        <Text>식사 시간</Text>
        <TouchableOpacity
          onPress={() => setShowTimePicker(true)}
          style={styles.dateTimeButton}>
          <Text style={styles.dateTimeText}>
            {mealTime.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </Text>
        </TouchableOpacity>
        {showTimePicker && (
          <DateTimePicker
            value={mealTime}
            mode="time"
            is24Hour={false}
            display="default"
            onChange={onTimeChange}
          />
        )}
      </View>
      <View style={styles.inputContainer}>
        <Text>날짜</Text>
        <TouchableOpacity
          onPress={() => setShowDatePicker(true)}
          style={styles.dateTimeButton}>
          <Text style={styles.dateTimeText}>{date.toLocaleDateString()}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onDateChange}
          />
        )}
      </View>
      <TextInput style={styles.input} placeholder="음식을 검색해보세요." />
      <TextInput
        style={styles.memoInput}
        placeholder="메모를 입력하세요."
        multiline
        numberOfLines={4}
        onChangeText={text => setMemo(text)}
        value={memo}
      />
      <TouchableOpacity
        style={styles.cameraButton}
        onPress={() => navigation.navigate('Camera')}>
        <Text style={styles.cameraButtonText}>촬영</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddFood')}>
        <Text style={styles.addButtonText}>추가하기</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MealRecordScreen;
