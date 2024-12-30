import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import theme from '../../theme';

const width_ratio = Dimensions.get('screen').width / 390;
const height_ratio = Dimensions.get('screen').height / 844;

function PageMove({navigation}) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>내 병원</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Test')}>
        <Text style={styles.buttonText}>검사 결과</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.buttonText}>내 정보</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 0,
    alignItems: 'center',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 3.9 * width_ratio,
    paddingVertical: 16.88 * height_ratio,
    borderRadius: 7.8 * width_ratio,
    backgroundColor: theme.colors.backGray,
  },
  buttonText: {
    fontSize: 15.6 * width_ratio,
    ...theme.fonts.Medium,
  },
});

export default PageMove;
