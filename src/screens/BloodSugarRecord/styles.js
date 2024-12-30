import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../theme';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: width * 1,
    padding: width * 0.01,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.White,
    flexDirection: 'column',
  },
  selectContainer: {
    flex: 1,
    width: width * 0.84,
    padding: width * 0.01,
    margin: width * 0.08,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.backGray,
    flexDirection: 'row',
    marginBottom: width * 0.01,
    height: height * 0.15,
  },
  bloodSugarContainer: {
    flex: 1,
    width: width * 0.84,
    padding: width * 0.01,
    margin: width * 0.08,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.backGray,
    flexDirection: 'row',
    marginBottom: width * 0.03,
    height: height * 0.15,
  },
  memoContainer: {
    flex: 1,
    width: width * 0.84,
    padding: width * 0.01,
    margin: width * 0.08,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.backGray,
    flexDirection: 'row',
    marginBottom: width * 0.03,
    height: width * 0.8,
  },
  boldText: {
    fontSize: width * 0.04,
    color: theme.colors.Black,
    marginTop: height * 0.01,
    fontWeight: 'bold',
  },
  normalText: {
    fontSize: width * 0.04,
    color: theme.colors.Black,
    marginTop: height * 0.01,
    marginBottom: height * 0.01,
  },
  button: {
    paddingVertical: width * 0.05,
    paddingHorizontal: width * 0.08,
    backgroundColor: theme.colors.backGray,
    borderRadius: 5,
    marginVertical: 5,
  },
  selectedButton: {
    backgroundColor: theme.colors.mainBlue,
    borderColor: theme.colors.Black,
    borderWidth: width * 0.02,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: width * 0.01,
  },
  leftRecordBox: {
    position: 'absolute',
    width: width * 0.38,
    justifyContent: 'center',
    left: width * 0.03,
  },
  rightRecordBox: {
    position: 'absolute',
    width: width * 0.38,
    justifyContent: 'center',
    right: width * 0.03,
  },
  dateButton: {
    position: 'absolute',
    justifyContent: 'center',
    right: width * 0.03,
  },
  bloodSugarText: {
    position: 'absolute',
    left: width * 0.03,
    top: width * 0.02,
  },
  bloodSugarInputText: {
    position: 'absolute',
    left: width * 0.03,
    bottom: width * 0.02,
    fontSize: width * 0.04,
    color: theme.colors.Black,
    marginTop: height * 0.01,
    marginBottom: height * 0.01,
  },
  memoText: {
    position: 'absolute',
    left: width * 0.03,
    top: width * 0.02,
  },
  memoTextInput: {
    position: 'absolute',
    left: width * 0.03,
    top: width * 0.09,
  },
  buttonText: {
    fontSize: width * 0.05,
    color: theme.colors.White,
  },
  recordButton: {
    width: width * 0.9,
    height: width * 0.1,
    backgroundColor: theme.colors.iconBlueMain,
    margin: width * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
