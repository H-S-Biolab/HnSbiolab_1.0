import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../theme';

const width_ratio = Dimensions.get('screen').width / 390;
const height_ratio = Dimensions.get('screen').height / 844;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.White,
    paddingHorizontal: 24 * width_ratio,
    paddingBottom: 16 * height_ratio,
  },
  title: {
    fontSize: 18 * height_ratio,
    marginBottom: 60 * height_ratio,
    color: theme.colors.Black,
    ...theme.fonts.Bold,
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: 6 * width_ratio,
    marginBottom: 8 * height_ratio,
    fontSize: 16 * height_ratio,
    color: theme.colors.Black,
    ...theme.fonts.Semibold,
  },
  input: {
    width: '100%',
    backgroundColor: theme.colors.lightBlue,
    borderRadius: 10 * width_ratio,
    paddingVertical: 10 * height_ratio,
    paddingHorizontal: 16 * width_ratio,
    marginBottom: 18 * height_ratio,
    color: theme.colors.Black,
  },
  button: {
    width: '100%',
    backgroundColor: theme.colors.mainBlue,
    borderRadius: 10 * width_ratio,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20 * height_ratio,
  },
  buttonText: {
    color: theme.colors.White,
    fontSize: 16 * width_ratio,
    textAlign: 'center',
    paddingVertical: 6 * height_ratio,
    ...theme.fonts.Medium,
  },
});

export default styles;
