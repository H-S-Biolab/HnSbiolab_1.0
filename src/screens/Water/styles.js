// styles.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16, 
  },
  calendarBar: {
    marginTop: 16,
  },
  container: {
    backgroundColor: '#fff',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 32,
  },
  titleLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 4,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  intakeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fafafa',
    marginTop: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    height: 56,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  intakeAmount: {
    fontSize: 16,
    textAlign: 'center',
  },
  unit: {
    paddingLeft: 0,
  },
  button: {
  },
  buttonIcon: {
    width: 24,
    height: 24,
  },
  speechBubbleContainer: {
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 20,
  },
  speechBubble: {
    backgroundColor: '#F6F6F9',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  speechBubbleText: {
    fontSize: 12,
    color: '#5D5D62',
  },
  speechBubbleArrow: {
    width: 0,
    height: 0,
    borderBottomWidth: 10,
    borderBottomColor: '#F6F6F9',
    borderLeftWidth: 10,
    borderLeftColor: 'transparent',
    borderRightWidth: 10,
    borderRightColor: 'transparent',
    alignSelf: 'center',
    marginTop: -1,
  },
  goalCupWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  goalContainer: {
    backgroundColor: '#FAFAFA',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 6,
    paddingHorizontal: 24,
    flex: 1,
    marginRight: 6, // This provides equal spacing on both sides
  },
  CupContainer: {
    backgroundColor: '#FAFAFA',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 6,
    paddingHorizontal: 24,
    flex: 1,
    marginLeft: 6, // This provides equal spacing on both sides
  },
  Label: {
    fontSize: 14,
    color: '#5D5D62',
    paddingRight: 10,
  },
  InputUnitContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Input: {
    fontSize: 14,
    color: '#5D5D62',
    textAlign: 'center',
  },
  graphContainer: {
    backgroundColor: '#fff',
  },
  tabContainer: {
    backgroundColor: '#fafafa',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  selectedTab: {
    backgroundColor: '#E6F4FF',
    borderRadius: 6,
  },
  tabText: {
    fontSize: 16,
    textAlign: 'center',
  },
  selectedTabText: {
    color: '#1677FF',
  },
  legendContainer: {
    flexDirection: 'row',
    marginBottom: 50,
  },
  legendColor: {
    width: 10,
    height: 10,
    marginLeft: 16,
    marginRight: 4,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chartWrapperContainer: {
    width: 300,
    alignItems: 'center',
    marginRight: 60,
  },
  chartWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  yAxisLabelsContainer: {
    justifyContent: 'space-between',
    marginLeft: 8,
    height: 250,
    paddingVertical: 20,
    marginBottom: 26,
  },
  yAxisLabel: {
    color: '#D1D1D5',
  },
});

export default styles;

