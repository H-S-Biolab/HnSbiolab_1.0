import React, {useContext} from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import theme from '../../theme';
import images from '../../../assets/icons/images';
import {UserContext} from '../../contexts/User/UserContext';

const width_ratio = Dimensions.get('screen').width / 390;
const height_ratio = Dimensions.get('screen').height / 844;

function ImageAndName() {
  const {user} = useContext(UserContext);

  return (
    <View style={styles.content}>
      <Image source={images.testFace} style={styles.image} />
      <Text style={styles.greeting}>{user.name}님,</Text>
      <Text style={styles.message}>건강하고 멋진 하루 되세요!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
  },
  image: {
    width: 156 * width_ratio,
    height: 156 * width_ratio,
  },
  greeting: {
    fontSize: 23.4 * width_ratio,
    marginTop: 25.32 * height_ratio,
    fontWeight: 'bold',
    ...theme.fonts.Bold,
  },
  message: {
    fontSize: 15.6 * width_ratio,
    marginTop: 8.44 * height_ratio,
    marginBottom: 25.32 * height_ratio,
    ...theme.fonts.Bold,
  },
});

export default ImageAndName;
