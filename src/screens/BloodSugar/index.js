import React, {useContext, useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  Alert,
} from 'react-native';
import moment from 'moment';
import {BarChart} from 'react-native-chart-kit';
import {BloodSugarContext} from '../../contexts/BloodSugar/BloodSugarContext';
import {UserContext} from '../../contexts/User/UserContext';
import images from '../../../assets/icons/images';
import styles from './styles';
import {useAPI} from '../../contexts/API/APIContext';

const {width, height} = Dimensions.get('window');

const BloodSugarScreen = ({navigation}) => {
  const {records, setRecords} = useContext(BloodSugarContext);
  const {user} = useContext(UserContext);
  const [selectedOption, setSelectedOption] = useState('daily');
  const url = useAPI();

  const fetchBloodSugarData = useCallback(async () => {
    if (!user._id) {
      Alert.alert('Error', 'User ID is missing');
      return;
    }

    try {
      const response = await fetch(`${url}/blood_sugar?_id=${user._id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      console.log('Fetched data:', data); // 서버에서 받은 데이터 출력
      if (data && Array.isArray(data)) {
        setRecords(data);
      } else {
        console.error('Invalid data format:', data);
        Alert.alert('Error', 'Invalid data format from server.');
      }
    } catch (error) {
      console.error('Error fetching blood sugar data:', error);
      Alert.alert('Error', 'Failed to fetch blood sugar data.');
    }
  }, [user._id, setRecords]);

  useEffect(() => {
    fetchBloodSugarData();
  }, [fetchBloodSugarData]);

  const getRecordByType = type => {
    return records
      .filter(record => record[type])
      .map(record => ({
        ...record[type],
        date: record.date,
      }));
  };

  const renderRecordBox = (type, title, imageSrc) => {
    const recordsByType = getRecordByType(type);
    const latestRecord =
      recordsByType.length > 0 ? recordsByType[recordsByType.length - 1] : null;

    const formatTime = time => {
      const parsedTime = moment(time, 'HH:mm:ss');
      return parsedTime.isValid()
        ? parsedTime.format('HH:mm:ss')
        : '시간 기록 없음';
    };

    return (
      <View style={styles.timeRecordContainer}>
        <Image source={imageSrc} style={styles.itemImage} />
        <View style={styles.textBox}>
          <Text style={styles.boldText}>{title}</Text>
          <Text style={styles.normalText}>
            {latestRecord && latestRecord.time
              ? formatTime(latestRecord.time)
              : '시간 기록 없음'}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.buttonAdd}
          onPress={() => navigation.navigate('BloodSugarRecord')}>
          <Image source={images.plusbutton} style={styles.image} />
        </TouchableOpacity>
        <View style={styles.smallContainer}>
          <View style={styles.smallTextBox}>
            <Text style={styles.boldText}>
              {latestRecord
                ? `혈당: ${latestRecord.blood_sugar}`
                : '혈당을 기록해보세요.'}
            </Text>
            <Text style={styles.normalText}>
              {latestRecord ? `메모: ${latestRecord.memo}` : ''}
            </Text>
          </View>
          <TouchableOpacity style={styles.buttonEdit}>
            <Image source={images.tripleSpot} style={styles.image} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const filterRecords = (records, type) => {
    // filter logic based on option
    const filtered = records.filter(record => record[type]).slice(-10);
    return filtered;
  };

  const chartData = {
    labels: filterRecords(records, 'empty').map(record =>
      moment(record.date).format('MM-DD'),
    ),
    datasets: [
      {
        data: filterRecords(records, 'empty').map(
          record => record.empty.blood_sugar || 0,
        ),
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
        label: '공복',
      },
      {
        data: filterRecords(records, 'breakfast').map(
          record => record.breakfast.blood_sugar || 0,
        ),
        color: (opacity = 1) => `rgba(255, 99, 132, ${opacity})`, // optional
        strokeWidth: 2, // optional
        label: '아침 식후',
      },
      {
        data: filterRecords(records, 'lunch').map(
          record => record.lunch.blood_sugar || 0,
        ),
        color: (opacity = 1) => `rgba(54, 162, 235, ${opacity})`, // optional
        strokeWidth: 2, // optional
        label: '점심 식후',
      },
      {
        data: filterRecords(records, 'dinner').map(
          record => record.dinner.blood_sugar || 0,
        ),
        color: (opacity = 1) => `rgba(75, 192, 192, ${opacity})`, // optional
        strokeWidth: 2, // optional
        label: '저녁 식후',
      },
    ],
    legend: ['공복', '아침 식후', '점심 식후', '저녁 식후'],
  };

  return (
    <ScrollView>
      <View style={styles.recordContainer}>
        {renderRecordBox('empty', '공복', images.emptyStomach)}
        {renderRecordBox('breakfast', '아침 식후', images.breakfast)}
        {renderRecordBox('lunch', '점심 식후', images.lunch)}
        {renderRecordBox('dinner', '저녁 식후', images.dinner)}

        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={[
              styles.buttonOption,
              selectedOption === 'daily' && styles.buttonSelected,
            ]}
            onPress={() => setSelectedOption('daily')}>
            <Text style={styles.normalText}>일간</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.buttonOption,
              selectedOption === 'weekly' && styles.buttonSelected,
            ]}
            onPress={() => setSelectedOption('weekly')}>
            <Text style={styles.normalText}>주간</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.buttonOption,
              selectedOption === 'monthly' && styles.buttonSelected,
            ]}
            onPress={() => setSelectedOption('monthly')}>
            <Text style={styles.normalText}>월간</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.chartContainer}>
          <BarChart
            data={chartData}
            width={Dimensions.get('window').width - 30}
            height={220}
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#fb8c00',
              backgroundGradientTo: '#ffa726',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default BloodSugarScreen;
