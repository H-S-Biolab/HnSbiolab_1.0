import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';
import styles from './styles';
import {Button} from 'react-native-paper';

const {width, height} = Dimensions.get('window');

const DATA = [
  {
    id: '1',
    title: '돼지국밥',
    subtitle: '1인분 (200g)',
    calories: '307 kcal',
    badge: '1만회 이상 기록',
  },
  {
    id: '2',
    title: '얼큰 돼지국밥',
    subtitle: '1인분 (200g)',
    calories: '336 kcal',
    badge: '1천회 이상 기록',
  },
];

const Item = ({title, subtitle, calories, badge}) => (
  <View style={styles.item}>
    <View style={styles.badgeContainer}>
      <Text style={styles.badge}>{badge}</Text>
    </View>
    <View style={styles.itemContent}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
    <Text style={styles.calories}>{calories}</Text>
    <TouchableOpacity style={styles.addButton}>
      <Text style={styles.addButtonText}>+</Text>
    </TouchableOpacity>
  </View>
);

const AddFoodScreen = ({navigation, onPress}) => {
  const renderItem = ({item}) => (
    <Item
      title={item.title}
      subtitle={item.subtitle}
      calories={item.calories}
      badge={item.badge}
    />
  );

  return (
    <View style={styles.container}>
      <Button title="뒤로가기" onPress={() => navigation.goBack()} />
      <Text style={styles.header}>식사 기록</Text>
      <TextInput style={styles.searchInput} placeholder="검색하기" />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default AddFoodScreen;
