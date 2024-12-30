import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../theme';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width * 0.9,
    padding: width * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.White,
    margin: width * 0.05,
    flexDirection: 'column',
  },
  recordContainer: {
    flex: 1,
    width: width * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.backGray,
    margin: width * 0.05,
    flexDirection: 'row',
    height: height * 0.1,
  },
  inputContainer: {
    flex: 1,
    width: width * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.backGray,
    margin: width * 0.05,
    flexDirection: 'row',
    height: height * 0.1,
  },
  memoContainer: {
    flex: 1,
    width: width * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.backGray,
    margin: width * 0.05,
    flexDirection: 'row',
    height: height * 0.4,
    marginBottom: height * 0.2,
  },
  recordBox: {
    height: height * 0.08,
    width: width * 0.4,
    flexDirection: 'column',
    padding: 5,
  },
  inputBox: {
    height: height * 0.08,
    width: width * 0.233,
    alignItems: 'center',
    margin: 10,
    flexDirection: 'column',
  },
  memoBox: {
    height: height * 0.4,
    width: width * 0.9,
  },
  boldText: {
    fontSize: width * 0.04,
    color: theme.colors.Black,
    marginTop: height * 0.01,
    marginBottom: height * 0.01,
    fontWeight: 'bold',
  },
  normalText: {
    fontSize: width * 0.03,
    color: theme.colors.Black,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputText: {
    fontSize: width * 0.05,
    color: theme.colors.Black,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: width * 0.05,
    color: theme.colors.White,
  },
  dateButton: {
    position: 'absolute',
    top: height * 0.04,
    right: 0,
  },
  recordButton: {
    width: width * 0.9,
    height: width * 0.1,
    backgroundColor: theme.colors.mainBlue,
    margin: width * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
