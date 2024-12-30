import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Button,
  Dimensions,
} from 'react-native';
import Svg, {Rect, G, Text as SvgText, Line} from 'react-native-svg';
import {useAPI} from '../../contexts/API/APIContext';

const {width} = Dimensions.get('window');

const API = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayData, setDisplayData] = useState([]);
  const [view, setView] = useState('daily');
  const url = useAPI();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('${url}/jaehyun');
        const result = await response.json();
        setData(result.datas);
        setDisplayData(groupByDaily(result.datas));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const groupByDaily = data => {
    const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
    return data.slice(-7).map(item => {
      const date = new Date(item.date);
      const dayName = dayNames[date.getDay()];
      return {
        ...item,
        date: dayName,
      };
    });
  };

  const groupByWeekly = data => {
    const reversedData = [...data].reverse();
    const weeks = [];
    const weekCount = Math.ceil(reversedData.length / 7);

    for (let i = 0; i < weekCount; i++) {
      const weekStart = i * 7;
      const weekEnd = weekStart + 7;
      const weekData = reversedData.slice(weekStart, weekEnd);
      if (weekData.length > 0) {
        weeks.push(weekData);
      }
    }

    const weeklyData = weeks.map((week, index) => {
      const weekSum = week.reduce((sum, day) => sum + day.water, 0);
      const averageWater = weekSum / week.length;
      return {
        date: `주 ${4 - index}`,
        water: averageWater,
      };
    });

    return weeklyData.slice(0, 4).reverse();
  };

  const groupByMonthly = data => {
    const months = [];
    const monthsMap = {};

    data.forEach(item => {
      const month = new Date(item.date).getMonth();
      const year = new Date(item.date).getFullYear();
      const key = `${year}-${month}`;

      if (!monthsMap[key]) {
        monthsMap[key] = [];
      }
      monthsMap[key].push(item);
    });

    Object.keys(monthsMap)
      .sort((a, b) => {
        const [yearA, monthA] = a.split('-').map(Number);
        const [yearB, monthB] = b.split('-').map(Number);
        return yearA - yearB || monthA - monthB;
      })
      .forEach(key => {
        const monthData = monthsMap[key];
        const monthSum = monthData.reduce((sum, day) => sum + day.water, 0);
        const averageWater = monthSum / monthData.length;
        const [year, month] = key.split('-');
        months.push({
          date: ` ${parseInt(month) + 1}월`,
          water: averageWater,
        });
      });

    return months.slice(-12);
  };

  const switchView = view => {
    setView(view);
    if (view === 'daily') {
      setDisplayData(groupByDaily(data));
    } else if (view === 'weekly') {
      setDisplayData(groupByWeekly(data));
    } else if (view === 'monthly') {
      setDisplayData(groupByMonthly(data));
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const renderBarChart = () => {
    const chartWidth = width - 100;
    const chartHeight = 200;
    let barWidth;
    let barGap;

    const itemCount = displayData.length;
    const totalBarWidth = chartWidth - (itemCount + 1) * 10;

    if (view === 'daily') {
      barWidth = totalBarWidth / itemCount;
      barGap = 10;
    } else if (view === 'weekly') {
      barWidth = totalBarWidth / itemCount;
      barGap = 10;
    } else if (view === 'monthly') {
      barWidth = totalBarWidth / itemCount;
      barGap = 10;
    }

    const maxValue = Math.max(...displayData.map(item => item.water)) + 100;
    const yAxisStep = maxValue / 8;

    return (
      <Svg width={chartWidth + 100} height={chartHeight + 50}>
        {Array.from({length: 9}).map((_, index) => (
          <SvgText
            key={index}
            x={chartWidth + 50}
            y={(chartHeight / 8) * index + 20}
            fontSize={10}
            fill="black"
            textAnchor="start"
            alignmentBaseline="middle">
            {Math.round(maxValue - yAxisStep * index)}ml
          </SvgText>
        ))}
        {Array.from({length: 9}).map((_, index) => (
          <Line
            key={index}
            x1={30}
            y1={(chartHeight / 8) * index + 20}
            x2={chartWidth + 30}
            y2={(chartHeight / 8) * index + 20}
            stroke="lightgray"
            strokeWidth="1"
          />
        ))}
        {displayData.map((value, index) => {
          const barHeight = (chartHeight * value.water) / maxValue;
          const barX = 30 + (index + 1) * barGap + index * barWidth;
          const barY = (chartHeight * (maxValue - value.water)) / maxValue + 20;
          return (
            <G key={index}>
              <Rect
                x={barX}
                y={barY}
                width={barWidth}
                height={barHeight}
                fill={index !== displayData.length - 1 ? 'lightblue' : 'blue'}
              />
              {index === displayData.length - 1 && (
                <G>
                  <Rect
                    x={barX - 15}
                    y={barY - 30}
                    width={barWidth + 30}
                    height={20}
                    rx={5}
                    ry={5}
                    fill="black"
                  />
                  <SvgText
                    x={barX + barWidth / 2}
                    y={barY - 15}
                    fontSize={10}
                    fill="white"
                    textAnchor="middle">
                    {value.water}ml
                  </SvgText>
                </G>
              )}
            </G>
          );
        })}
        {displayData.map((value, index) => (
          <SvgText
            key={index}
            x={30 + (index + 1) * barGap + index * barWidth + barWidth / 2}
            y={chartHeight + 35}
            fontSize={10}
            fill="black"
            textAnchor="middle">
            {value.date}
          </SvgText>
        ))}
      </Svg>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="일간" onPress={() => switchView('daily')} />
        <Button title="주간" onPress={() => switchView('weekly')} />
        <Button title="월간" onPress={() => switchView('monthly')} />
      </View>
      <View style={styles.chartContainer}>{renderBarChart()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 10,
  },
  chartContainer: {
    width: width - 20,
    height: 250,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

export default API;
