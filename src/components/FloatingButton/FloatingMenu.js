import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import images from '../../../assets/icons/images';

const FloatingMenu = () => {
  return (
    <View style={styles.menu}>
      <View style={styles.menuItem}>
        <Image source={images.식단} style={styles.icon} />
        <Text style={styles.menuText}>식단</Text>
      </View>
      <View style={styles.menuItem}>
        <Image source={images.수분} style={styles.icon} />
        <Text style={styles.menuText}>수분</Text>
      </View>
      <View style={styles.menuItem}>
        <Image source={images.체중} style={styles.icon} />
        <Text style={styles.menuText}>체중</Text>
      </View>
      <View style={styles.menuItem}>
        <Image source={images.혈압} style={styles.icon} />
        <Text style={styles.menuText}>혈압</Text>
      </View>
      <View style={styles.menuItem}>
        <Image source={images.혈당} style={styles.icon} />
        <Text style={styles.menuText}>혈당</Text>
      </View>
    </View>
  );
};

export default FloatingMenu;
