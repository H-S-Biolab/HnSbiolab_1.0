import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../theme';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
  },
  tabsWrapper: {
    width: '100%',
  },
  calendarBar: {
    width: '100%',
  },
  sectionContainer: {
    backgroundColor: theme.colors.White,
    marginHorizontal: 24,
    marginBottom: 12,
    borderRadius: 8,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: theme.colors.White,
    borderRadius: 10,
    paddingVertical: height * 0.02,
    width: '90%',
  },
  currentTabsContainer: {
    justifyContent: 'space-between',
    width: '90%',

  },
  tab: {
    paddingBottom: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.mainBlue,
  },
  tabText: {
    fontSize: width * 0.04,
    color: theme.colors.textGray,
  },
  activeTabText: {
    color: theme.colors.mainBlue,
  },
  button: {
    width: '80%',
    height: height * 0.06,
    backgroundColor: theme.colors.mainBlue,
    borderRadius: width * 0.025,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.03,
  },
  buttonText: {
    color: theme.colors.White,
    fontSize: width * 0.045,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
});

export default styles;
