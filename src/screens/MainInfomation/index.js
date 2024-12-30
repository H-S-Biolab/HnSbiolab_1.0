import React, {useState} from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';
import StageSection from '../../components/MainInformationSection/StageSection';
import DialysisSection from '../../components/MainInformationSection/DialysisSection';
import MedicationSection from '../../components/MainInformationSection/MedicationSection';
import DietSection from '../../components/MainInformationSection/DietSection';
import WaterIntakeSection from '../../components/MainInformationSection/WaterIntakeSection';
import BloodPressureSection from '../../components/MainInformationSection/BloodPressureSection';
import WeightSection from '../../components/MainInformationSection/WeightSection';
import BloodSugarSection from '../../components/MainInformationSection/BloodSugarSection';
import CustomButton from '../../components/atomic/CustomButton';
import CalendarBar from '../../CalendarBar';
import styles from './styles';
import FloatingButton from '../../components/FloatingButton';

const {width, height} = Dimensions.get('window');

const MainInformationScreen = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('수분');

  const [isDetailedRisk, setIsDetailedRisk] = useState(false);

  const toggleRiskDetail = () => {
    setIsDetailedRisk(prevState => !prevState);
  };

  const [isDialysis, setIsDialysis] = useState(false);

  const toggleDialysis = () => {
    setIsDialysis(prevState => !prevState);
  };

  const [isMedication, setIsMedication] = useState(false);

  const toggleMedication = () => {
    setIsMedication(prevState => !prevState);
  };

  const renderActiveSection = () => {
    switch (activeTab) {
      case '수분':
        return <WaterIntakeSection navigation={navigation} />;
      case '혈압':
        return <BloodPressureSection navigation={navigation} />;
      case '체중':
        return <WeightSection navigation={navigation} />;
      case '혈당':
        return <BloodSugarSection navigation={navigation} />;
      default:
        return null;
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.calendarBar}>
        <CalendarBar />
      </View>
      <View style={styles.tabsWrapper}>
        <View style={styles.sectionContainer}>
          <StageSection
            isDetailedRisk={isDetailedRisk}
            toggleRiskDetail={toggleRiskDetail}
          />
        </View>
        <View style={styles.sectionContainer}>
          <DialysisSection
            isDialysis={isDialysis}
            toggleDialysis={toggleDialysis}
          />
        </View>
        <View style={styles.sectionContainer}>
          <MedicationSection
            isMedication={isMedication}
            toggleMedication={toggleMedication}
          />
        </View>
        <View style={styles.sectionContainer}>
          <DietSection navigation={navigation} />
        </View>
      </View>
      <View style={styles.tabsContainer}>
        {['수분', '혈압', '체중', '혈당'].map(tab => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[styles.tab, activeTab === tab && styles.activeTab]}>
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.currentTabsContainer}>{renderActiveSection()}</View>
    </ScrollView>
  );
};

export default MainInformationScreen;
