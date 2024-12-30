import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

export default function Search({navigation}) {
  const [openNearby, setOpenNearby] = useState(false);
  const [valueNearby, setValueNearby] = useState('모든 병원');
  const [itemsNearby, setItemsNearby] = useState([
    {label: '모든 병원', value: '모든 병원'},
    {label: '1등급', value: '1'},
    {label: '2등급', value: '2'},
    {label: '3등급', value: '3'},
    {label: '4등급', value: '4'},
    {label: '5등급', value: '5'},
  ]);

  const [hospitalData, setHospitalData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchHospitalData(searchQuery);
  }, [searchQuery, valueNearby]);

  const fetchHospitalData = async query => {
    try {
      const response = await axios.post(
        'https://689f-203-252-33-1.ngrok-free.app/hospital/search',
        {
          partial_name: query,
          user_latitude: 37.2948,
          user_longitude: 126.97669,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      setHospitalData(response.data.results);
    } catch (error) {
      console.error('Error fetching hospital data:', error);
    }
  };

  const filterHospitalsByGrade = (hospitals, grade) => {
    return grade === '모든 병원'
      ? hospitals
      : hospitals.filter(hospital => hospital.rating === parseInt(grade));
  };

  const filteredHospitals = filterHospitalsByGrade(hospitalData, valueNearby);

  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <View style={styles.searchInputContainer}>
          <TextInput
            style={styles.input}
            placeholder="가까운 병원 검색 하기"
            placeholderTextColor="#777"
            onChangeText={text => setSearchQuery(text)}
          />
        </View>
      </View>
      <Text style={styles.locationText}>경기도 수원시 장안구</Text>
      <ScrollView style={styles.scrollView}>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.pickerContainer}>
              <DropDownPicker
                open={openNearby}
                value={valueNearby}
                items={itemsNearby}
                setOpen={setOpenNearby}
                setValue={setValueNearby}
                setItems={setItemsNearby}
                containerStyle={styles.dropdownContainer}
                style={styles.dropdown}
                dropDownContainerStyle={styles.dropdownList1}
                textStyle={styles.dropdownText}
                dropDownDirection="BOTTOM"
              />
            </View>
          </View>
          <View style={styles.section}>
            {filteredHospitals.length === 0 ? (
              <View style={styles.noHospital}>
                <Text style={styles.noHospitalText}>병원을 검색하세요!</Text>
              </View>
            ) : (
              <>
                {filteredHospitals.map((hospital, index) => (
                  <HospitalCard key={index} hospital={hospital} />
                ))}
                <View style={styles.placeholder}></View>
              </>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function HospitalCard({hospital}) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoritePress = () => {
    console.log('Favorite Pressed');
    setIsFavorite(!isFavorite);
  };

  const getGradeColor = rating => {
    switch (rating) {
      case 1:
        return '#4caf50'; // Green
      case 2:
        return '#8bc34a'; // Light Green
      case 3:
        return '#ffeb3b'; // Yellow
      case 4:
        return '#ffc107'; // Amber
      case 5:
        return '#f44336'; // Red
      default:
        return '#000'; // Default black
    }
  };

  return (
    <View style={styles.card1}>
      <View style={styles.cardHeader}>
        <Text
          style={[
            styles.grade,
            {backgroundColor: getGradeColor(hospital.rating)},
          ]}>
          {hospital.rating}등급
        </Text>
        <TouchableOpacity
          onPress={handleFavoritePress}
          style={styles.favoriteButton}>
          <Icon
            name={isFavorite ? 'star' : 'star-border'}
            size={30}
            color={isFavorite ? 'gold' : 'gray'}
            style={styles.starIcon}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.hospitalName}>{hospital.hospital_name}</Text>
      <View style={styles.hospitalTimeContainer}>
        <Text style={styles.hospitalTimeLabel}>진료시간: </Text>
        <Text style={styles.hospitalTime}>09:00~20:00</Text>
      </View>
      <Text style={styles.hospitalAddress}>{hospital.address}</Text>
    </View>
  );
}
