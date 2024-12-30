import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import {BloodPressureContext} from '../../contexts/BloodPressure/BloodPressureContext';
import {UserContext} from '../../contexts/User/UserContext';
import images from '../../../assets/icons/images';
import styles from './styles';
import moment from 'moment';
import {BarChart} from 'react-native-chart-kit';
import {useAPI} from '../../contexts/API/APIContext';

const {width, height} = Dimensions.get('window');

const BloodPressureScreen = ({navigation, onPress}) => {
  const {bloodPressureRecords = [], setBloodPressureRecords} =
    useContext(BloodPressureContext);
  const {user} = useContext(UserContext);
  const [selectedOption, setSelectedOption] = useState('daily');
  const url = useAPI();

  useEffect(() => {
    const fetchBloodPressureData = async () => {
      try {
        const response = await fetch(`${url}/blood_pressure?_id=${user._id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();
        setBloodPressureRecords(data.data);
      } catch (error) {
        console.error('Error fetching blood pressure data:', error);
      }
    };

    fetchBloodPressureData();
  }, [user._id, setBloodPressureRecords]);

  const latestRecord =
    bloodPressureRecords.length > 0
      ? bloodPressureRecords[bloodPressureRecords.length - 1]
      : {
          systolic: '---',
          relaxation: '---',
          heart_rate: '---',
          date: '',
          time: '',
          memo: '',
        };

  const filterRecords = (records, option) => {
    // filter logic based on option
    return records.slice(-10);
  };

  const filteredRecords = filterRecords(bloodPressureRecords, selectedOption);

  const getSafeNumber = num => {
    return isNaN(num) || !isFinite(num) ? 0 : num;
  };

  const chartData = {
    labels: filteredRecords.map(record =>
      moment(`${record.date} ${record.time}`, 'YYYY-MM-DD HH:mm:ss').format(
        'MM-DD',
      ),
    ),
    datasets: [
      {
        data: filteredRecords.map(record => getSafeNumber(record.systolic)),
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
      {
        data: filteredRecords.map(record => getSafeNumber(record.relaxation)),
        color: (opacity = 1) => `rgba(34, 128, 176, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
      {
        data: filteredRecords.map(record => getSafeNumber(record.heart_rate)),
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ['Systolic', 'Diastolic', 'Heart Rate'],
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.pressureContainer}>
            <Image source={images.혈압} style={styles.imageSize} />
            <View style={styles.pressureTextContainer}>
              <Text style={styles.boldtext}>혈압</Text>
              <Text style={styles.normaltext}>
                {latestRecord.time
                  ? moment(
                      `${latestRecord.date} ${latestRecord.time}`,
                      'YYYY-MM-DD HH:mm:ss',
                    ).format('LT')
                  : '---'}
              </Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonAdd}
              onPress={() => navigation.navigate('BloodPressureRecord')}>
              <Text style={styles.normaltext}>추가</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonEdit} onPress={onPress}>
              <Text style={styles.normaltext}>편집</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.normaltext}>
            수축기: {latestRecord.systolic || '---'}
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.normaltext}>
            이완기: {latestRecord.relaxation || '---'}
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.normaltext}>
            심박수: {latestRecord.heart_rate || '---'}
          </Text>
        </View>
        <View style={styles.memo}>
          <Text style={styles.boldtext}>메모</Text>
          <Text style={styles.normaltext}>{latestRecord.memo || ''}</Text>
        </View>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={[
              styles.buttonOption,
              selectedOption === 'daily' && styles.buttonSelected,
            ]}
            onPress={() => setSelectedOption('daily')}>
            <Text style={styles.normaltext}>일간</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.buttonOption,
              selectedOption === 'weekly' && styles.buttonSelected,
            ]}
            onPress={() => setSelectedOption('weekly')}>
            <Text style={styles.normaltext}>주간</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.buttonOption,
              selectedOption === 'monthly' && styles.buttonSelected,
            ]}
            onPress={() => setSelectedOption('monthly')}>
            <Text style={styles.normaltext}>월간</Text>
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

export default BloodPressureScreen;
