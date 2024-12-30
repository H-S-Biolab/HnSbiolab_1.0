import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import theme from '../../theme';
import DropDownPicker from 'react-native-dropdown-picker';
import images from '../../../assets/icons/images';

const width_ratio = Dimensions.get('screen').width / 390;
const height_ratio = Dimensions.get('screen').height / 844;

function ExaminePart({navigation, onPress}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('전체');

  const [items, setItems] = useState([
    {label: '전체', value: '전체'},
    {label: '옵션1', value: '옵션1'},
    {label: '옵션2', value: '옵션2'},
  ]);

  return (
    <>
      <View style={styles.mainContainer}>
        <TouchableOpacity
          style={styles.testContainer}
          onPress={() => navigation.navigate('QRCode')}>
          <View style={styles.titleContainer}>
            <Image source={images.test} style={styles.image} />
            <Text style={styles.titleText}>키트 검사하기</Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.contentText}>
              키트로 검사를 시작해보세요! 신부전증 증상을 자세하게 알 수 있어요.
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.testContainer}
          onPress={() => navigation.navigate('DiagnosisCamera')}>
          <View style={styles.titleContainer}>
            <Image source={images.test} style={styles.image} />
            <Text style={styles.titleText}>검사 결과지</Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.contentText}>
              나의 검사 결과지를 촬영하고 내용을 쉽게 확인해보세요.
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.testContainer}
          onPress={() => navigation.navigate('HealthCheckup')}>
          <View style={styles.titleContainer}>
            <Image source={images.test} style={styles.image} />
            <Text style={styles.titleText}>건강검진기록 불러오기</Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.contentText}>
              지금 나의 영양 상태를 체크리스트를 통해 확인해보세요.
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.testContainer}>
        <Image source={images.test} style={styles.imageLocation} />
        <Text style={styles.titleText}>영양 상태</Text>
        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>
            지금 나의 영양 상태를 체크리스트를 통해 확인해보세요.{' '}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => navigation.navigate('Result')}>
          <Text style={styles.buttonText}>시작하기</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.testContainer}>
        <Image source={images.test} style={styles.imageLocation} />
        <Text style={styles.titleText}>만성신부전</Text>
        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>
            지금 나의 영양 상태를 체크리스트를 통해 확인해보세요.{' '}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => navigation.navigate('LoadHealthCheckup')}>
          <Text style={styles.buttonText}>시작하기</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 12 * width_ratio,
    backgroundColor: theme.colors.White,
    width: '100%',
    paddingTop: 20 * height_ratio,
    paddingBottom: 40 * height_ratio,
    paddingHorizontal: 10 * width_ratio, // Added padding for overall spacing
  },
  testContainer: {
    borderRadius: 8 * width_ratio,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 6 * height_ratio,
    paddingHorizontal: 16 * width_ratio,
    marginVertical: 4 * height_ratio,
    marginHorizontal: 8 * width_ratio,
    backgroundColor: theme.colors.lightGray,
    height: 100 * height_ratio,
  },
  titleContainer: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 22 * width_ratio,
    height: 22 * width_ratio,
    marginRight: 4 * width_ratio,
  },
  titleText: {
    fontSize: 15 * width_ratio,
    fontWeight: 'bold',
    color: theme.colors.Black,
    ...theme.fonts.Bold,
    paddingBottom: 2 * height_ratio,
  },
  contentContainer: {
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 8 * width_ratio,
    paddingBottom: 10 * height_ratio,
    color: theme.colors.textGray,
    ...theme.fonts.Bold,
  },
  contentText: {
    fontSize: 14 * width_ratio,
    color: theme.colors.Black,
  },
  startButton: {
    borderRadius: 10 * width_ratio,
    justifyContent: 'center',
    alignContent: 'center',
    width: 97.5 * width_ratio,
    height: 39 * width_ratio,
    backgroundColor: theme.colors.mainBlue,
    alignSelf: 'flex-end',
    marginTop: 10 * height_ratio,
  },
  buttonText: {
    fontSize: 15.6 * width_ratio,
    color: theme.colors.White,
  },
  dropdownContainer: {
    width: 117 * width_ratio,
    height: 39 * width_ratio,
    alignSelf: 'center',
    marginTop: 10 * height_ratio,
    zIndex: 1000,
  },
});

export default ExaminePart;
