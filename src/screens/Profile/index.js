// src/screens/ProfileScreen.js
import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import theme from '../../theme';
import CustomDropDownPicker from '../../components/atomic/CustomDropDownPicker';
import DialysisOption from '../../components/atomic/DialysisOption';
import {UserContext} from '../../contexts/User/UserContext';
import styles from './styles';

const {width, height} = Dimensions.get('window');

const ProfileScreen = ({navigation}) => {
  const {user, updateUser} = useContext(UserContext);
  const [name, setName] = useState('');
  const [userHeight, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setName(user.name || '');
    setHeight(user.height ? user.height.toString() : '');
    setAge(user.age ? user.age.toString() : '');
    setWeight(user.weight ? user.weight.toString() : '');
    setGender(user.gender || '');
    setSelectedOption(user.dialysis_status ? '네' : '아니오');
    setSelectedItem(user.diet_type || '');
  }, [user]);

  const data = [
    {key: '이름을 알려주세요.', placeholder: '홍길동', unit: ''},
    {key: '키를 입력해주세요.', placeholder: '100', unit: ' cm'},
    {key: '나이를 알려주세요.', placeholder: '00', unit: ' 세'},
    {key: '몸무게를 입력해주세요.', placeholder: '00', unit: ' Kg'},
  ];

  const items = [
    {label: '신장 투석 식단', value: '신장 투석 식단'},
    {label: '체중 관리 식단', value: '체중 관리 식단'},
    {label: '혈압 관리 식단', value: '혈압 관리 식단'},
    {label: '내 식단으로 할래요', value: '내 식단으로 할래요'},
  ];

  const handleOptionPress = option => {
    setSelectedOption(option);
    updateUser({...user, dialysis_status: option === '네'});
  };

  const handleInputChange = (key, value) => {
    switch (key) {
      case '이름을 알려주세요.':
        setName(value);
        updateUser({...user, name: value});
        break;
      case '키를 입력해주세요.':
        setHeight(value);
        updateUser({...user, height: value});
        break;
      case '나이를 알려주세요.':
        setAge(value);
        updateUser({...user, age: value});
        break;
      case '몸무게를 입력해주세요.':
        setWeight(value);
        updateUser({...user, weight: value});
        break;
      default:
        break;
    }
  };

  const renderItem = ({item, index}) => (
    <View key={item.key} style={styles.inputContainer}>
      <Text style={styles.label}>{item.key}</Text>
      <View style={styles.inputWithUnit}>
        <TextInput
          style={styles.input}
          placeholder={item.placeholder}
          placeholderTextColor={theme.colors.textGray}
          autoCapitalize="none"
          keyboardType={
            item.key === '이름을 알려주세요.' ? 'default' : 'numeric'
          }
          value={
            item.key === '이름을 알려주세요.'
              ? name
              : item.key === '키를 입력해주세요.'
              ? userHeight
              : item.key === '나이를 알려주세요.'
              ? age
              : item.key === '몸무게를 입력해주세요.'
              ? weight
              : ''
          }
          onChangeText={text => handleInputChange(item.key, text)}
        />
        <Text style={styles.unit}>{item.unit}</Text>
      </View>
      {index === 0 && ( // 이름 입력란 아래에 성별 선택 추가
        <View style={styles.genderContainer}>
          <TouchableOpacity
            style={[
              styles.genderButton,
              gender === '남자' && styles.selectedGenderButton,
            ]}
            onPress={() => {
              setGender('남자');
              updateUser({...user, gender: '남자'});
            }}>
            <Text
              style={[
                styles.genderButtonText,
                gender === '남자' && styles.selectedGenderButtonText,
              ]}>
              남자
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.genderButton,
              gender === '여자' && styles.selectedGenderButton,
            ]}
            onPress={() => {
              setGender('여자');
              updateUser({...user, gender: '여자'});
            }}>
            <Text
              style={[
                styles.genderButtonText,
                gender === '여자' && styles.selectedGenderButtonText,
              ]}>
              여자
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.key}
      contentContainerStyle={styles.container}
      ListHeaderComponent={() => (
        <>
          <Text style={styles.title}>
            정확한 건강 관리를 위해 아래 정보를 입력해주세요.
          </Text>
        </>
      )}
      ListFooterComponent={() => (
        <>
          <Text style={styles.label}>투석 여부를 알려주세요.</Text>
          <Text style={styles.note}>
            투석 중일 경우 투석날과 복약등의 관리를 해드려요.
          </Text>
          <DialysisOption
            selectedOption={selectedOption}
            onOptionPress={handleOptionPress}
          />
          <Text style={styles.label}>식단 목표를 정해드려요.</Text>
          <Text style={styles.note}>
            관리하고자 하는 질병에 따라 다른 식단 목표를 정해드려요.
          </Text>
          <CustomDropDownPicker
            open={open}
            value={selectedItem}
            items={items}
            setOpen={setOpen}
            setValue={setSelectedItem}
          />
          <View style={styles.actionContainer}>
            <TouchableOpacity
              style={styles.startButton}
              onPress={() => navigation.navigate('MainTabs')}>
              <Text style={styles.startButtonText}>시작하기</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.skipButton}
              onPress={() => navigation.navigate('MainTabs')}>
              <Text style={styles.skipButtonText}>건너뛰기</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    />
  );
};

export default ProfileScreen;
