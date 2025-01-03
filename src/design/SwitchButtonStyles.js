import {StyleSheet, Dimensions} from 'react-native';
import theme from '../theme';

const {width, height} = Dimensions.get('window');

const SwitchButtonStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: height * 0.03,
    right: width * 0.04,
  },
  button: {
    borderRadius: 120,
    backgroundColor: '#FFFFFF',
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  image: {
    width: width * 0.11,
    height: height * 0.06,
    resizeMode: 'contain',
  },
});
export default SwitchButtonStyles;
