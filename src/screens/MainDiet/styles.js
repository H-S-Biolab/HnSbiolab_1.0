import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../theme';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  scrollcontainer: {
    flexGrow: 1,
    backgroundColor: theme.colors.background,
  },
  container: {
    padding: width * 0.04, // width의 4%를 padding으로 지정
  },
  maintext: {
    fontSize: width * 0.05, // width의 5%를 fontSize로 지정
    fontWeight: 'bold',
    marginBottom: width * 0.025, // width의 2.5%를 marginBottom으로 지정
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: width * 0.025, // width의 2.5%를 marginBottom으로 지정
  },
  rowLabel: {
    fontSize: width * 0.04, // width의 4%를 fontSize로 지정
  },
  rowValue: {
    fontSize: width * 0.04, // width의 4%를 fontSize로 지정
  },
  customButtonStyle: {
    marginTop: width * 0.025, // width의 2.5%를 marginTop으로 지정
  },
  customButtonImageStyle: {
    width: width * 0.125, // width의 12.5%를 width로 지정
    height: width * 0.125, // width의 12.5%를 height로 지정
  },
  dropdownContainer: {
    flexDirection: 'row',
    width: width * 0.3,
    height: width * 0.1,
    bottom: width * 0.02,
  },
  dropdownContainer2: {
    flexDirection: 'row',
    width: width * 0.6,
    height: width * 0.1,
    bottom: width * 0.02,
  },
});

export default styles;
