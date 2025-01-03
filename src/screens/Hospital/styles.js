import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
    marginBottom: -15,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: 8,
    color: '#000',
  },
  searchIconContainer: {
    padding: 10,
  },
  searchIcon: {
    width: 30,
    height: 30,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  iconImage: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    tintColor: '#fff',
  },
  mapButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 10,
    borderRadius: 5,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
    paddingLeft: 20,
  },
  mapButtonText: {
    color: '#fff',
  },
  locationText: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#f5f5f5',
    color: '#222',
    fontSize: 15,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 10,
  },
  sectionTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  pickerContainer: {
    color: 'black',
    width: 120, // Reduced the width of the picker
    zIndex: 5000, // 중요: DropDownPicker와 겹치는 요소를 피하기 위해 zIndex 설정
  },
  dropdownContainer: {
    height: 35, // Reduced the height of the container
  },
  dropdown: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 4,
    height: 0, // Reduced the height of the picker
  },
  dropdownList: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 4,
    maxHeight: 200,
  }, //dropdownList1은 세로로 병원 나열할때
  dropdownList1: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 4,
    maxHeight: 250,
  },
  dropdownText: {
    fontSize: 14, // Reduced the font size
    color: '#000',
  },
  listItemContainer: {
    height: 30, // Reducing the height of each item
    justifyContent: 'center', // Center the text vertically
  },
  listItemLabel: {
    fontSize: 14, // Adjust font size to fit the compact design
  },
  card: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 350,
    height: 170,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginTop: 20,
    marginBottom: 10,
    marginRight: 10,
    position: 'relative', // 자식 요소의 absolute 위치 지정을 위해 필요
  },
  // card1은 세로로 있을 때
  card1: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 350,
    height: 180,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginTop: 15,
    marginBottom: 5,
    marginRight: 10,
    position: 'relative', // 자식 요소의 absolute 위치 지정을 위해 필요
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  grade: {
    backgroundColor: '#F0F5FF',
    borderColor: '#ADC6FF',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
    color: '#ffffff',
  },
  horizontalScrollView: {
    flexDirection: 'row',
  },
  favoriteButton: {
    padding: 10, // 터치 영역 확장을 위한 패딩 추가
  },
  starIcon: {
    // 필요 시 추가 스타일
  },
  hospitalName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  hospitalTimeContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  hospitalTimeLabel: {
    color: '#888',
    fontWeight: 'bold',
  },
  hospitalTime: {
    color: '#888',
  },
  hospitalAddress: {
    marginTop: 5,
    color: '#888',
  },
  phone: {
    fontSize: 13,
    marginTop: 5,
    color: '#666',
  },
  noHospital: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 350,
    height: 170,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginTop: 20,
    marginBottom: 50,
    marginRight: 10,
    position: 'relative',
  },
  noHospitalText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
  placeholder: {
    height: 50, // Adjust height as needed
    backgroundColor: 'transparent', // Make it invisible
  },
});

export default styles;
