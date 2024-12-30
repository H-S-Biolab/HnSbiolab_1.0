import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../theme';

const width_ratio = Dimensions.get('screen').width / 390;
const height_ratio = Dimensions.get('screen').height / 844;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'left',
    backgroundColor: theme.colors.White,
    paddingHorizontal: 40 * width_ratio,
  },
  logo: {
    width: 103 * width_ratio,
    height: 50 * height_ratio,
    marginBottom: 42 * height_ratio,
    resizeMode: 'contain',
  },
  input: {
    width: '100%',
    height: 50 * height_ratio,
    backgroundColor: theme.colors.lightGray,
    borderRadius: 10 * width_ratio,
    paddingHorizontal: 16 * width_ratio,
    marginBottom: 13 * height_ratio,
    color: theme.colors.Black,
  },
  loginButton: {
    backgroundColor: theme.colors.mainBlue,
    borderRadius: 14 * width_ratio,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 13 * height_ratio,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  loginText: {
    fontSize: 16 * width_ratio,
    marginTop: 25 * height_ratio,
    marginBottom: 8 * height_ratio,
    color: theme.colors.textGray,
    ...theme.fonts.Medium,
  },
  snsLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16 * height_ratio,
  },
  snsButton: {
    width: 47 * width_ratio,
    height: 47 * width_ratio,
    backgroundColor: theme.colors.MessageGray,
    borderRadius: 23.5 * width_ratio,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerButton: {
    padding: 13 * height_ratio,
  },
  footerButtonText: {
    color: theme.colors.textDarkGray,
  },
});

export default styles;
