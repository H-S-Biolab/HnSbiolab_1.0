import React, {useContext, useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
} from 'react-native';
import images from '../../../assets/icons/images';
import WaterIntakeStyles from './WaterIntakeStyles';
import WaterIntakeGraph from './WaterIntakeGraph';
import CalendarBar from '../../CalendarBar';
import API from './API';
import {WaterContext} from '../../contexts/najoong-e_change/WaterContext';
import {GoalWaterContext} from '../../contexts/najoong-e_change/GoalWaterContext';

const {width, height} = Dimensions.get('window');

const WaterIntake = ({onPress, navigation}) => {
  const {water} = useContext(WaterContext);
  const {updateWater} = useContext(WaterContext);
  const {goalWater} = useContext(GoalWaterContext);
  const {updateGoalWater} = useContext(GoalWaterContext);
  const [number, setNumber] = useState(0);

  const HandleGoalWater = number => {
    updateGoalWater(number);
  };

  return (
    <ScrollView style={WaterIntakeStyles.container}>
      <View style={styles.calendarBar}>
        <CalendarBar />
      </View>
      <View style={WaterIntakeStyles.header}>
        <View style={WaterIntakeStyles.headerLeft}>
          <Image source={images.수분} style={WaterIntakeStyles.icon} />
          <Text style={WaterIntakeStyles.title}>총 수분량</Text>
        </View>
      </View>
      <View style={WaterIntakeStyles.intakeContainer}>
        <TouchableOpacity style={WaterIntakeStyles.button} onPress={MinusWater}>
          <Image source={images.minusbutton} style={WaterIntakeStyles.button} />
        </TouchableOpacity>
        <View style={WaterIntakeStyles.inputTextContainer}>
          <Text style={WaterIntakeStyles.intakeAmount}>{water} ml</Text>
        </View>
        <TouchableOpacity style={WaterIntakeStyles.button} onPress={PlusWater}>
          <Image source={images.plusbutton} style={WaterIntakeStyles.button} />
        </TouchableOpacity>
      </View>
      <View style={WaterIntakeStyles.speechBubbleContainer}>
        <View style={WaterIntakeStyles.speechBubbleArrow} />
        <View style={WaterIntakeStyles.speechBubble}>
          <Text style={WaterIntakeStyles.speechBubbleText}>
            수분 섭취량을 기록해보세요.
          </Text>
        </View>
      </View>
      <View style={WaterIntakeStyles.goalContainer}>
        <Text style={WaterIntakeStyles.goalText}>목표 수분량</Text>
        <TextInput
          style={styles.goalText}
          textAlign="left"
          placeholder="목표 수분량을 입력해 주세요."
          value={number}
          onChangeText={setNumber}
        />
        <Text style={WaterIntakeStyles.goalValue}> {goalWater} ml</Text>
        <TouchableOpacity
          source={images.modify}
          style={WaterIntakeStyles.modifyIcon}
          onPress={() => HandleGoalWater(number)}
        />
      </View>
      <View>
        <WaterIntakeGraph />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  calendarBar: {
    marginTop: 16,
  },
});

export default WaterIntake;
