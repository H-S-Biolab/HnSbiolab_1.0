// src/screens/Weight/WeightChart.js

import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import styles from './styles';

const width_ratio = Dimensions.get('screen').width / 390;
const height_ratio = Dimensions.get('screen').height / 844;

const WeightChart = ({ graphData, selectedTab, setSelectedTab, goalValue }) => {
  const { width } = Dimensions.get('window');

  const data = {
    labels: graphData.labels,
    datasets: [
      {
        data: graphData.data,
        color: (opacity = 1) => `rgba(133, 165, 255, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(192, 192, 192, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    decimalPlaces: 1,
    propsForDots: {
      r: '3',
      strokeWidth: '2',
    },
    propsForBackgroundLines: {
      stroke: '#ccc',
    },
    fillShadowGradient: 'transparent',
  };

  const getYAxisLabels = (data) => {
    const maxWeight = Math.max(...data);
    const minWeight = Math.min(...data);
    const topLabel = Math.ceil(maxWeight / 5) * 5;
    const bottomLabel = topLabel - 10;
    return [topLabel, topLabel - 5, bottomLabel];
  };

  const yAxisLabels = getYAxisLabels(graphData.data);

  const calculateGoalWeightTopPosition = (goalValue, yAxisLabels) => {
    const [max, , min] = yAxisLabels;
    const range = max - min;
    const topPosition = ((max - goalValue) / range) * 100;
    return `${topPosition}%`;
  };

  const goalWeightTopPosition = calculateGoalWeightTopPosition(goalValue, yAxisLabels);

  return (
    <View style={styles.chartContainer}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === '일간' && styles.selectedTab]}
          onPress={() => setSelectedTab('일간')}
        >
          <Text style={[styles.tabText, selectedTab === '일간' && styles.selectedTabText]}>
            일간
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === '주간' && styles.selectedTab]}
          onPress={() => setSelectedTab('주간')}
        >
          <Text style={[styles.tabText, selectedTab === '주간' && styles.selectedTabText]}>
            주간
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === '월간' && styles.selectedTab]}
          onPress={() => setSelectedTab('월간')}
        >
          <Text style={[styles.tabText, selectedTab === '월간' && styles.selectedTabText]}>
            월간
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: '#85A5FF' }]} />
          <Text>현재 체중</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: '#FF6187' }]} />
          <Text>목표 체중 {goalValue}kg</Text>
        </View>
      </View>
      <View style={styles.chartWrapperContainer}>
        <View style={styles.chartWrapper}>
          <LineChart
            data={data}
            width={width - 80}
            height={210 * height_ratio}
            chartConfig={chartConfig}
            bezier={false}
            style={styles.chart}
            withVerticalLines={false}
            withInnerLines={true}
            renderDotContent={() => null}
            withShadow={false}
            yAxisInterval={1}
            segments={2}
            formatYLabel={() => ''}
            yLabelsOffset={9999}
          />
          <View style={styles.yAxisLabelsContainer}>
            {yAxisLabels.map((label, index) => (
              <Text key={index} style={styles.yAxisLabel}>
                {label}kg
              </Text>
            ))}
          </View>
          <View style={[styles.goalWeightLine, { top: goalWeightTopPosition }]}>
            <View style={styles.goalWeightLineBar} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default WeightChart;
