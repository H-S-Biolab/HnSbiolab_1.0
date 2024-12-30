import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  Button,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import styles from './styles'; // 기존 스타일 가져오기

const CameraScreen = ({navigation}) => {
  const cameraRef = useRef(null);
  const [photoUri, setPhotoUri] = useState(null);

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = {quality: 0.5, base64: true};
      const data = await cameraRef.current.takePictureAsync(options);
      setPhotoUri(data.uri);
      console.log(data);
    }
  };

  const uploadImage = async uri => {
    const formData = new FormData();
    formData.append(
      'image',
      JSON.stringify([
        {
          uri,
          type: 'image/jpeg', // 이미지의 MIME 타입
          name: 'photo.jpg',
        },
      ]),
    );

    try {
      const response = await fetch(
        'http://localhost:3000/blood_urine_test/post_image/',
        {
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      if (response.ok) {
        Alert.alert('성공', '사진이 성공적으로 업로드되었습니다.');
        setPhotoUri(null); // 업로드 후 사진 URI 초기화
      } else {
        Alert.alert('실패', '사진 업로드에 실패했습니다.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('오류', '사진 업로드 중 오류가 발생했습니다.');
    }
  };

  return (
    <View style={styles.container}>
      {photoUri ? (
        <>
          <Image source={{uri: photoUri}} style={styles.previewImage} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => setPhotoUri(null)}
              style={styles.capture}>
              <Text style={styles.buttonText}>다시 찍기</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => uploadImage(photoUri)}
              style={styles.capture}>
              <Text style={styles.buttonText}>업로드</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <RNCamera
            ref={cameraRef}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            captureAudio={false} // 오디오 캡처 비활성화
            androidCameraPermissionOptions={{
              title: 'Camera Permission',
              message: 'We need access to your camera to take photos',
              buttonPositive: 'OK',
              buttonNegative: 'Cancel',
            }}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={takePicture} style={styles.capture}>
              <Text style={styles.buttonText}>촬영</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
      <Button title="뒤로가기" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default CameraScreen;
