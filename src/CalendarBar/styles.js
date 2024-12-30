import {StyleSheet, Dimensions} from 'react-native';
import theme from '../theme';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  calendarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: theme.colors.White,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  dayContainer: {
    alignItems: 'center',
    flex: 1, // Ensure each item takes equal space
  },
  selectedContainer: {
    backgroundColor: theme.colors.subBlue,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', // Make sure it takes full width of container
  },
  innerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', // Adjusted to take full width of the container
    height: height * 0.08, // 10% of screen height
  },
  dayText: {
    fontSize: width * 0.04, // 4% of screen width
    color: theme.colors.Black,
    marginBottom: 5,
  },
  selectedText: {
    fontSize: width * 0.04, // 4% of screen width
    color: theme.colors.mainBlue,
    marginBottom: 5,
  },
  dateText: {
    fontSize: width * 0.035, // 3.5% of screen width
    color: theme.colors.Black,
  },
  selectedDate: {
    fontSize: width * 0.035, // 3.5% of screen width
    color: theme.colors.mainBlue,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: theme.colors.mainBlue,
    position: 'absolute',
    top: height * 0.003,
  },
});

export default styles;
