import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import theme from '../../theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import ImageAndName from './ImageAndName';
import PageMove from './PageMove';
import Notification from './Notification';

const width_ratio = Dimensions.get('screen').width / 390;
const height_ratio = Dimensions.get('screen').height / 844;

function MyProfileScreen({navigation, onPress}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>내 정보</Text>
      </View>
      <View style={styles.sectionContainer}>
        <ImageAndName />
      </View>
      <View style={styles.sectionContainer}>
        <PageMove navigation={navigation} />
      </View>
      <View style={styles.sectionContainer}>
        <Notification onPress={onPress} navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 58.8 * height_ratio,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 17.55 * width_ratio,
    ...theme.fonts.Bold,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.White,
    alignItems: 'center',
  },
  sectionContainer: {
    width: '90%',
    marginBottom: 16.88 * height_ratio,
    alignItems: 'center',
  },
});

export default MyProfileScreen;
