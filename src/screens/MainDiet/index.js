import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions, FlatList} from 'react-native';
import theme from '../../theme';
import images from '../../../assets/icons/images';
import CustomDropDownPickerBottom from '../../components/atomic/CustomDropDownPickerBottom';
import CustomButtonImage from '../../components/atomic/CustomButtonImage';
import styles from './styles';

const {width, height} = Dimensions.get('window');

const MainDietScreen = ({navigation}) => {
  const [selectedDiet, setSelectedDiet] = useState('신장 투석 식단');
  const [open, setOpen] = useState(false);

  const [items, setItems] = useState([
    {label: '신장 투석 식단', value: '신장 투석 식단'},
    {label: '혈당 관리 식단', value: '혈당 관리 식단'},
    {label: '체중 관리 식단', value: '체중 관리 식단'},
    {label: '내 식단으로 할래요.', value: '내 식단으로 할래요.'},
  ]);

  const handlePress = () => {
    console.log('Button pressed!');
    navigation.navigate('MealRecord');
  };

  useEffect(() => {
    // 이 부분은 의존 배열을 사용하여 한 번만 실행되도록 합니다.
  }, []);

  const renderMeal = ({item}) => (
    <View style={styles.container}>
      <Text style={styles.maintext}>{item}</Text>
      <CustomButtonImage
        onPress={handlePress}
        imageSource={images.plusbutton}
        style={styles.customButtonStyle}
        imageStyle={styles.customButtonImageStyle}
      />
      <Text style={styles.maintext}>오늘 뭐 드셨나요?</Text>
    </View>
  );

  return (
    <FlatList
      data={['아침', '점심', '저녁', '간식']}
      renderItem={renderMeal}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={
        <View style={styles.container}>
          <Text style={styles.maintext}>식단</Text>
          <CustomDropDownPickerBottom
            open={open}
            value={selectedDiet}
            items={items}
            setOpen={setOpen}
            setValue={setSelectedDiet}
            setItems={setItems}
            dropDownDirection="BOTTOM"
            scrollViewProps={{nestedScrollEnabled: true}}
          />
          {['탄수화물', '단백질', '지방', '나트륨', '칼륨', '인'].map(
            (item, index) => (
              <View key={index} style={styles.row}>
                <Text style={styles.rowLabel}>{item}</Text>
                <Text style={styles.rowValue}>0/200g</Text>
              </View>
            ),
          )}
        </View>
      }
    />
  );
};

export default MainDietScreen;
