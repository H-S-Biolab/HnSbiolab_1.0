import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import images from '../../../assets/icons/images';
import SwitchButton from '../atomic/SwitchButton';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const FloatingMenu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.menu}>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('MainDiet')}>
        <Image source={images.식단} style={styles.icon} />
        <Text style={styles.menuText}>식단</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('WaterIntake')}>
        <Image source={images.수분} style={styles.icon} />
        <Text style={styles.menuText}>수분</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Weight')}>
        <Image source={images.체중} style={styles.icon} />
        <Text style={styles.menuText}>체중</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('BloodPressure')}>
        <Image source={images.혈압} style={styles.icon} />
        <Text style={styles.menuText}>혈압</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('BloodSugar')}>
        <Image source={images.혈당} style={styles.icon} />
        <Text style={styles.menuText}>혈당</Text>
      </TouchableOpacity>
    </View>
  );
};

const FloatingButton = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {menuVisible && <FloatingMenu />}
        <SwitchButton
          onPress={toggleMenu}
          icon={menuVisible ? images.Xbutton : images.plusbutton}
        />
      </View>
    </SafeAreaView>
  );
};

export default FloatingButton;
