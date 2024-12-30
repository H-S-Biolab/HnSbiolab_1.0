import React, {useState, useEffect, useContext, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import images from '../../../assets/icons/images';
import styles from './styles';
import {postWeightData} from './API';
import {UserContext} from '../../contexts/User/UserContext';

const WeightInput = ({currentWeight = 0, setCurrentWeight, refreshGraph}) => {
  const {user} = useContext(UserContext);
  const [goal, setGoal] = useState(0);
  const timeoutRef = useRef(null);
  const currentWeightRef = useRef(currentWeight);

  useEffect(() => {
    setGoal(goal);
  }, [goal]);

  useEffect(() => {
    return () => {
      // 컴포넌트 언마운트 시 타이머를 취소하고 post 요청을 강제로 트리거
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        updateWeight(currentWeightRef.current);
      }
    };
  }, []);

  const handleWeightChange = async newValue => {
    const formattedValue = newValue.replace(/[^0-9.]/g, ''); // Remove any non-numeric and non-decimal characters
    if (/^\d{0,3}(\.\d{0,1})?$/.test(formattedValue) || formattedValue === '') {
      setCurrentWeight(formattedValue);
      await updateWeight(formattedValue);
    }
  };

  const handleWeightBlur = async () => {
    await updateWeight(currentWeight); // 입력이 완료되었을 때 최신 값으로 post 요청을 보냄
  };

  const debounceUpdateWeight = weight => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      updateWeight(weight);
    }, 10000); // 10000ms 동안 버튼이 눌리지 않으면 updateWeight 호출
  };

  const handleIncrement = () => {
    setCurrentWeight(prev => {
      const weight = parseFloat(prev);
      const newWeight = (isNaN(weight) ? 0 : weight + 0.1).toFixed(1);
      currentWeightRef.current = newWeight;
      debounceUpdateWeight(newWeight);
      return newWeight.length <= 5 ? newWeight : weight.toFixed(1);
    });
  };

  const handleDecrement = () => {
    setCurrentWeight(prev => {
      const weight = parseFloat(prev);
      const newWeight = isNaN(weight) ? 0 : (weight - 0.1).toFixed(1);
      currentWeightRef.current = newWeight;
      debounceUpdateWeight(newWeight);
      return newWeight >= 0 ? newWeight : '0.0';
    });
  };

  const handleGoalChange = newGoal => {
    const formattedGoal = newGoal.replace(/[^0-9.]/g, ''); // Remove any non-numeric and non-decimal characters
    if (/^\d{0,3}(\.\d{0,1})?$/.test(formattedGoal) || formattedGoal === '') {
      setGoal(formattedGoal);
    }
  };

  const updateWeight = async weight => {
    const date = new Date().toISOString();
    try {
      await postWeightData(user._id, date, weight);
      console.log('체중 데이터가 성공적으로 저장되었습니다.');
      refreshGraph();
    } catch (error) {
      console.error('체중 데이터 저장에 실패했습니다.', error);
      Alert.alert('Error', `체중 데이터 저장에 실패했습니다: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image source={images.체중} style={styles.icon} />
        <Text style={styles.title}>현재 체중</Text>
      </View>
      <View style={styles.weightContainer}>
        <TouchableOpacity onPress={handleDecrement} style={styles.button}>
          <Image source={images.minusbutton} style={styles.buttonIcon} />
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.Input}
            keyboardType="numeric"
            value={currentWeight.toString()}
            onChangeText={text => setCurrentWeight(text)}
            onBlur={handleWeightBlur}
          />
          <Text style={styles.unit}> kg</Text>
        </View>
        <TouchableOpacity onPress={handleIncrement} style={styles.button}>
          <Image source={images.plusbutton} style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.speechBubbleContainer}>
        <View style={styles.speechBubbleArrow} />
        <View style={styles.speechBubble}>
          <Text style={styles.speechBubbleText}>
            목표 체중보다 {Math.abs(currentWeight - goal).toFixed(1)} kg{' '}
            {currentWeight > goal ? '늘었어요.' : '줄었어요.'}
          </Text>
        </View>
      </View>
      <View style={styles.goalContainer}>
        <Text style={styles.goalText}>목표 체중</Text>
        <View style={styles.goalInputContainer}>
          <TextInput
            style={styles.Input}
            keyboardType="numeric"
            value={goal.toString()}
            onChangeText={handleGoalChange}
          />
          <Text style={styles.unit}> kg</Text>
        </View>
      </View>
    </View>
  );
};

export default WeightInput;
