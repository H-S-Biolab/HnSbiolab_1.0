import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../theme';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    padding: width * 0.05,
    backgroundColor: theme.colors.background,
    flexGrow: 1,
  },
  title: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    marginBottom: height * 0.02,
    color: theme.colors.Black,
  },
  inputContainer: {
    marginBottom: height * 0.02,
  },
  label: {
    fontSize: width * 0.04,
    color: theme.colors.Black,
  },
  inputWithUnit: {
    flexDirection: 'row',
    alignItems: 'center',
    height: height * 0.06,
    backgroundColor: theme.colors.subBlue,
    borderRadius: 10,
    paddingHorizontal: width * 0.04,
    marginTop: height * 0.01,
  },
  input: {
    flex: 1,
    color: theme.colors.Black,
    paddingRight: width * 0.02,
  },
  unit: {
    fontWeight: 'bold',
    color: theme.colors.Black,
  },
  note: {
    fontSize: width * 0.035,
    color: theme.colors.textGray,
    marginBottom: height * 0.02,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: height * 0.02,
  },
  optionButton: {
    width: width * 0.4,
    height: height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.mainBlue,
    borderRadius: 10,
  },
  optionText: {
    color: theme.colors.mainBlue,
    fontSize: width * 0.04,
  },
  selectedButton: {
    backgroundColor: theme.colors.mainBlue,
  },
  selectedButtonText: {
    color: theme.colors.White,
  },
  dropdownContainer: {
    zIndex: 10,
    marginBottom: height * 0.03,
  },
  dropdown: {
    width: '100%',
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  startButton: {
    width: '60%',
    height: height * 0.07,
    backgroundColor: theme.colors.mainBlue,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startButtonText: {
    color: theme.colors.White,
    fontSize: width * 0.045,
  },
  skipButton: {
    width: '35%',
    height: height * 0.07,
    backgroundColor: theme.colors.lightGray,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipButtonText: {
    color: theme.colors.textGray,
    fontSize: width * 0.04,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: height * 0.02,
  },
  genderButton: {
    width: width * 0.4,
    height: height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.mainBlue,
    borderRadius: 10,
    marginHorizontal: width * 0.02,
  },
  genderButtonText: {
    color: theme.colors.mainBlue,
    fontSize: width * 0.04,
  },
  selectedGenderButton: {
    backgroundColor: theme.colors.mainBlue,
  },
  selectedGenderButtonText: {
    color: theme.colors.White,
  },
});

export default styles;
