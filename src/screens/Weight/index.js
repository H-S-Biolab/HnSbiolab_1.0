// src/screens/Weight/index.js

import React, {useContext, useState, useEffect} from 'react';
import {View, ScrollView, ActivityIndicator} from 'react-native';
import CalendarBar from '../../CalendarBar';
import WeightInput from './WeightInput';
import WeightChart from './WeightChart';
import styles from './styles';
import {fetchWeightData} from './API';
import {GoalWeightContext} from '../../contexts/najoong-e_change/GoalWeightContext';
import {UserContext} from '../../contexts/User/UserContext';

const WeightScreen = ({navigation, onPress}) => {
  const {weight, setWeight} = useContext(UserContext);
  const {goalValue, setGoalWeight} = useContext(GoalWeightContext);
  const [currentWeight, setCurrentWeight] = useState(weight);
  const [selectedTab, setSelectedTab] = useState('일간');
  const [graphData, setGraphData] = useState({labels: [], data: []});
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await fetchWeightData();

      if (!Array.isArray(data)) {
        console.error('Fetched data is not an array:', data);
        return;
      }

      if (selectedTab === '일간') {
        const sortedData = data.sort(
          (a, b) => new Date(b.date) - new Date(a.date),
        );
        const lastSevenDaysData = sortedData.slice(0, 7).reverse();
        setGraphData({
          labels: lastSevenDaysData.map(item =>
            new Date(item.date).toLocaleDateString('ko-KR', {day: 'numeric'}),
          ),
          data: lastSevenDaysData.map(item => item.weight),
        });
      } else if (selectedTab === '주간') {
        const sortedData = data.sort(
          (a, b) => new Date(b.date) - new Date(a.date),
        );
        const weeks = [];

        for (let i = 0; i < 7; i++) {
          const weekStart = new Date(sortedData[0].date);
          weekStart.setDate(weekStart.getDate() - weekStart.getDay() - i * 7);
          const weekEnd = new Date(weekStart);
          weekEnd.setDate(weekEnd.getDate() + 6);

          const weekData = sortedData.filter(item => {
            const itemDate = new Date(item.date);
            return itemDate >= weekStart && itemDate <= weekEnd;
          });

          if (weekData.length > 0) {
            const isCurrentWeek = i === 0;
            const weekLabel = isCurrentWeek
              ? '이번주'
              : `-${weekEnd.getMonth() + 1}.${weekEnd.getDate()}`;
            const weekAverage =
              weekData.reduce((sum, day) => sum + day.weight, 0) /
              weekData.length;
            weeks.push({label: weekLabel, average: weekAverage});
          }
        }

        setGraphData({
          labels: weeks.map(week => week.label).reverse(),
          data: weeks.map(week => week.average).reverse(),
        });
      } else if (selectedTab === '월간') {
        const sortedData = data.sort(
          (a, b) => new Date(b.date) - new Date(a.date),
        );
        const months = [];

        for (let i = 0; i < 7; i++) {
          const monthEnd = new Date(sortedData[0].date);
          monthEnd.setMonth(monthEnd.getMonth() - i);
          const monthStart = new Date(monthEnd);
          monthStart.setDate(1);

          const monthData = sortedData.filter(item => {
            const itemDate = new Date(item.date);
            return (
              itemDate.getMonth() === monthEnd.getMonth() &&
              itemDate.getFullYear() === monthEnd.getFullYear()
            );
          });

          if (monthData.length > 0) {
            const isCurrentMonth = i === 0;
            const monthLabel = isCurrentMonth
              ? '이번 달'
              : `${monthEnd.getMonth() + 1}월`;
            const monthAverage =
              monthData.reduce((sum, day) => sum + day.weight, 0) /
              monthData.length;
            months.push({label: monthLabel, average: monthAverage});
          }
        }

        setGraphData({
          labels: months.map(month => month.label).reverse(),
          data: months.map(month => month.average).reverse(),
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedTab]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.screenContainer}>
      <View style={styles.calendarBar}>
        <CalendarBar />
      </View>
      <WeightInput
        currentWeight={currentWeight}
        setCurrentWeight={setCurrentWeight}
        refreshGraph={fetchData}
      />
      <WeightChart
        graphData={graphData}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        goalValue={goalValue}
      />
    </ScrollView>
  );
};

export default WeightScreen;
