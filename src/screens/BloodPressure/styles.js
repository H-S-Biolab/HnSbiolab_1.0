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
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  pressureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pressureTextContainer: {
    marginLeft: 10,
  },
  imageSize: {
    width: 40,
    height: 40,
  },
  boldtext: {
    fontSize: 16,
    color: theme.colors.Black,
    fontWeight: 'bold',
  },
  normaltext: {
    fontSize: 16,
    color: theme.colors.Black,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  buttonAdd: {
    marginHorizontal: 5,
    padding: 10,
    backgroundColor: theme.colors.lightGray,
    borderRadius: 5,
  },
  buttonEdit: {
    marginHorizontal: 5,
    padding: 10,
    backgroundColor: theme.colors.lightGray,
    borderRadius: 5,
  },
  textContainer: {
    marginVertical: 10,
    width: '100%',
    padding: 10,
    backgroundColor: theme.colors.backGray,
    borderRadius: 5,
  },
  memo: {
    width: '100%',
    padding: 10,
    backgroundColor: theme.colors.backGray,
    borderRadius: 5,
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
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
