import React, {useState} from 'react';
import {View, Button, Image, ScrollView, Alert} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';

const DiagnosisCameraScreen = ({navigation}) => {
  const [images, setImages] = useState([]);

  const pickImage = () => {
    launchImageLibrary({}, response => {
      if (response.assets) {
        const newImages = response.assets.map(asset => asset.uri);
        setImages([...images, ...newImages]);
      }
    });
  };

  const takePhoto = () => {
    launchCamera({}, response => {
      if (response.assets) {
        const newImages = response.assets.map(asset => asset.uri);
        setImages([...images, ...newImages]);
      }
    });
  };

  const convertToBase64 = async uri => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        const reader = new FileReader();
        reader.onloadend = function () {
          resolve(reader.result);
        };
        reader.onerror = function (error) {
          reject(error);
        };
        reader.readAsDataURL(xhr.response);
      };
      xhr.onerror = function (error) {
        reject(error);
      };
      xhr.open('GET', uri);
      xhr.responseType = 'blob';
      xhr.send();
    });
  };

  const uploadImages = () => {
    navigation.navigate('TestResult');
  };

  /*
  const uploadImages = async () => {
    const imagePromises = images.map(imageUri => convertToBase64(imageUri));
    try {
      const base64Images = await Promise.all(imagePromises);
      const formData = {
        image: base64Images,
      };

      console.log('Form Data:', formData); // 전송할 데이터 출력

      const response = await axios.post(
        'https://9810-203-252-33-3.ngrok-free.app/blood_urine_test/post_image/',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      console.log(response.data);
    } catch (error) {
      console.error(
        'Error Response:',
        error.response ? error.response.data : error.message,
      );
      Alert.alert('Upload Error', 'An error occurred while uploading images.');
    }
  };
  */

  return (
    <View>
      <Button title="Pick Image" onPress={pickImage} />
      <Button title="Take Photo" onPress={takePhoto} />
      <Button title="Upload Images" onPress={uploadImages} />
      <ScrollView>
        {images.map((imageUri, index) => (
          <Image
            key={index}
            source={{uri: imageUri}}
            style={{width: 100, height: 100}}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default DiagnosisCameraScreen;
