import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../theme';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  recordContainer: {
    flex: 1,
    width: width * 1,
    padding: width * 0.01,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.backGray,
    flexDirection: 'column',
  },
  mainContainer: {
    flex: 1,
    width: width * 1,
    padding: width * 0.01,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.White,
    flexDirection: 'column',
  },
  timeRecordContainer: {
    flex: 1,
    width: width * 0.84,
    height: height * 0.2,
    padding: width * 0.02,
    alignItems: 'center',
    backgroundColor: theme.colors.White,
    margin: width * 0.08,
    flexDirection: 'column',
    borderRadius: 10,
    marginBottom: width * 0.003,
  },
  itemImage: {
    width: width * 0.06,
    height: width * 0.06,
    top: width * 0.07,
    left: width * 0.07,
    position: 'absolute',
  },
  image: {
    width: width * 0.07,
    height: width * 0.07,
    resizeMode: 'contain',
  },
  textBox: {
    flexDirection: 'column',
    position: 'absolute',
    top: width * 0.03,
    left: width * 0.17,
  },
  buttonAdd: {
    position: 'absolute',
    top: width * 0.06,
    right: width * 0.06,
  },
  buttonEdit: {
    position: 'absolute',
    right: width * 0.06,
    justifyContent: 'center',
  },
  smallContainer: {
    position: 'absolute',
    bottom: width * 0.01,
    backgroundColor: theme.colors.backGray,
    borderRadius: 15,
    width: width * 0.7,
    height: width * 0.15,
    justifyContent: 'center',
  },
  smallTextBox: {
    position: 'absolute',
    left: width * 0.06,
    justifyContent: 'center',
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
    marginBottom: 20,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    width: '100%',
  },
  buttonOption: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  buttonSelected: {
    backgroundColor: '#ccc',
  },
  chartContainer: {
    marginTop: 20,
    width: width * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
