import { Dimensions, StyleSheet } from 'react-native';
import theme from '../../theme'; // 테마 파일의 경로를 지정하세요

const width_ratio = Dimensions.get('screen').width / 390;
const height_ratio = Dimensions.get('screen').height / 844;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: theme.colors.White,
  },
  calendarBar: {
    marginTop: 16 * height_ratio,
  },
  container: {
    padding: 16 * width_ratio,
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16 * height_ratio,
  },
  icon: {
    width: 20 * width_ratio,
    height: 20 * height_ratio,
    marginRight: 8 * width_ratio,
  },
  title: {
    fontSize: 12 * height_ratio,
    fontWeight: 'bold',
    ...theme.fonts.Bold,
  },
  weightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.lightGray,
    height: 56 * height_ratio,
    padding: 8 * width_ratio,
    borderRadius: 8 * width_ratio,
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Input: {
    fontSize: 16 * height_ratio,
    textAlign: 'right',
    ...theme.fonts.Regular,
    width: 52 * width_ratio, // Ensure the width is enough
  },
  unit: {
    fontSize: 14 * height_ratio,
    ...theme.fonts.Regular,
    marginLeft: 4 * width_ratio,
  },
  button: {
    padding: 12 * width_ratio, // 패딩을 충분히 추가합니다.
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonIcon: {
    width: 24.6 * width_ratio,
    height: 24 * height_ratio,
  },
  speechBubbleContainer: {
    alignItems: 'center',
    marginBottom: 16 * height_ratio,
  },
  speechBubble: {
    backgroundColor: '#F6F6F9',
    padding: 10 * width_ratio,
    borderRadius: 8 * width_ratio,
    marginBottom: 16 * height_ratio,
  },
  speechBubbleText: {
    fontSize: 12 * height_ratio,
    paddingHorizontal: 8 * width_ratio,
    color: theme.colors.textGray,
    ...theme.fonts.Regular,
  },
  speechBubbleArrow: {
    width: 0,
    height: 0,
    borderLeftWidth: 10 * width_ratio,
    borderRightWidth: 10 * width_ratio,
    borderBottomWidth: 10 * height_ratio,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#F6F6F9',
    alignSelf: 'center',
    marginTop: -1 * height_ratio,
  },
  goalContainer: {
    backgroundColor: theme.colors.lightGray,
    height: 56 * height_ratio,
    borderRadius: 8 * width_ratio,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16 * width_ratio,
  },
  goalInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  goalText: {
    fontSize: 16 * height_ratio,
    flex: 1,
    paddingLeft: 8 * width_ratio,
    color: theme.colors.textGray,
    ...theme.fonts.Regular,
  },
  chartContainer: {
    padding: 16 * width_ratio,
  },
  tabContainer: {
    backgroundColor: theme.colors.lightGray,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20 * height_ratio,
    borderRadius: 8 * width_ratio,
    paddingVertical: 8 * height_ratio,
    paddingHorizontal: 12 * width_ratio,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8 * height_ratio,
  },
  selectedTab: {
    backgroundColor: theme.colors.lightBlue,
    borderRadius: 6 * width_ratio,
  },
  tabText: {
    fontSize: 16 * height_ratio,
    textAlign: 'center',
    ...theme.fonts.Regular,
  },
  selectedTabText: {
    color: theme.colors.mainBlue,
  },
  legendContainer: {
    flexDirection: 'row',
    marginBottom: 50 * height_ratio,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendColor: {
    width: 10 * width_ratio,
    height: 10 * height_ratio,
    marginLeft: 16 * width_ratio,
    marginRight: 4 * width_ratio,
  },
  chartWrapperContainer: {
    alignItems: 'center',
    marginRight: 50 * width_ratio,
  },
  chartWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chart: {
    marginVertical: 8 * height_ratio,
  },
  yAxisLabelsContainer: {
    justifyContent: 'space-between',
    marginLeft: 8 * width_ratio,
    height: 180 * height_ratio,
    marginBottom: 26 * height_ratio,
  },
  yAxisLabel: {
    color: '#D1D1D5',
    ...theme.fonts.Regular,
  },
  goalWeightLine: {
    position: 'absolute',
    left: 8 * width_ratio,
    right: -10 * width_ratio,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  goalWeightLineBar: {
    height: 2 * height_ratio,
    backgroundColor: '#FF8EA9',
    width: '70%',
  },
});

export default styles;
