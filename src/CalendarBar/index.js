import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Dimensions,
} from 'react-native';
import theme from '../theme';
import styles from './styles';

const {width, height} = Dimensions.get('window');

const CalendarBar = () => {
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    generateCalendarDates();
  }, []);

  const generateCalendarDates = () => {
    const today = new Date();
    const currentDayOfWeek = today.getDay();
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    let tempDates = [];

    // Create a list of dates for the current week
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(today.getDate() - currentDayOfWeek + i);
      tempDates.push({day: days[i], date: date.getDate()});
    }

    setDates(tempDates);
    setSelectedDate(today.getDate()); // Set the initial selected date to today
  };

  const today = new Date();

  const handlePress = (day, date) => {
    setSelectedDate(date);
  };

  return (
    <View style={styles.calendarContainer}>
      {dates.map((item, index) => {
        const isToday = item.date === today.getDate();
        const isSelected = item.date === selectedDate;

        return (
          <TouchableOpacity
            key={index}
            style={styles.dayContainer}
            onPress={() => handlePress(item.day, item.date)}>
            <View
              style={[
                styles.innerContainer,
                isSelected && styles.selectedContainer,
              ]}>
              {isToday && !isSelected && <View style={styles.dot} />}
              <Text style={isSelected ? styles.selectedText : styles.dayText}>
                {item.day}
              </Text>
              <Text style={isSelected ? styles.selectedDate : styles.dateText}>
                {item.date}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CalendarBar;
