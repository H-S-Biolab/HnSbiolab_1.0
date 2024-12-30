import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import styles from './styles';

const { width } = Dimensions.get('window');

const WaterGraph = () => {
  const [selectedTab, setSelectedTab] = useState('일간');

  const graphData = {
    daily: {
      labels: ['월', '화', '수', '목', '금', '토', '일'],
      data: [600, 800, 1000, 1200, 700, 1500, 500],
    },
    weekly: {
      labels: ['1주차', '2주차', '3주차', '4주차'],
      data: [7000, 6500, 8000, 7500],
    },
    monthly: {
      labels: [
        '1월',
        '2월',
        '3월',
        '4월',
        '5월',
        '6월',
        '7월',
        '8월',
        '9월',
        '10월',
        '11월',
        '12월',
      ],
      data: [
        30000, 28000, 32000, 31000, 29000, 33000, 34000, 30000, 32000, 31000,
        33000, 35000,
      ],
    },
  };

  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(192, 192, 192, ${opacity})`,
    strokeWidth: 7,
    barPercentage: 0.8,
    decimalPlaces: 1,
    propsForBackgroundLines: {
      stroke: '#ccc',
    },
    fillShadowGradient: '#F0F5FF',
    fillShadowGradientTo: '#ADC6FF',
    fillShadowGradientOpacity: 1,
    propsForLabels: {
      marginRight: 100,
    },
  };

  const selectedGraphData =
    graphData[
      selectedTab === '일간'
        ? 'daily'
        : selectedTab === '주간'
        ? 'weekly'
        : 'monthly'
    ];

  const yAxisLabels = [1500, 1250, 1000, 750, 500, 250];

  return (
    <View style={styles.graphContainer}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === '일간' && styles.selectedTab]}
          onPress={() => setSelectedTab('일간')}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === '일간' && styles.selectedTabText,
            ]}
          >
            일간
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === '주간' && styles.selectedTab]}
          onPress={() => setSelectedTab('주간')}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === '주간' && styles.selectedTabText,
            ]}
          >
            주간
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === '월간' && styles.selectedTab]}
          onPress={() => setSelectedTab('월간')}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === '월간' && styles.selectedTabText,
            ]}
          >
            월간
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: '#85A5FF' }]} />
          <Text>수분 섭취량</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: '#FF6187' }]} />
          <Text>제한 1,250ml</Text>
        </View>
      </View>
      <View style={styles.chartWrapperContainer}>
        <View style={styles.chartWrapper}>
          <BarChart
            data={{
              labels: selectedGraphData.labels,
              datasets: [
                {
                  data: selectedGraphData.data,
                  color: () => `#ADC6FF`,
                },
              ],
            }}
            width={width - 40}
            height={250}
            chartConfig={chartConfig}
            bezier={false}
            fromZero
            yAxisInterval={1}
            segments={5}
            formatYLabel={() => ''}
            yLabelsOffset={-9999}
            yAxisSuffix="ml"
            showBarTops={false}
          />
          <View style={styles.yAxisLabelsContainer}>
            {yAxisLabels.map((label, index) => (
              <Text key={index} style={styles.yAxisLabel}>
                {label}ml
              </Text>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default WaterGraph;
