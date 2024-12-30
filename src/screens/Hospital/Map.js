import React, {useEffect, useState} from 'react';
import {WebView} from 'react-native-webview';
import Geolocation from 'react-native-geolocation-service';
import {
  PermissionsAndroid,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Platform,
} from 'react-native';
import axios from 'axios';

const Map = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [loading, setLoading] = useState(true);
  const [dataLoading, setDataLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://689f-203-252-33-1.ngrok-free.app/hospital/?latitude=${latitude}&longitude=${longitude}&range=3`,
        );
        const formattedData = response.data.map(item => ({
          lat: item.latitude,
          lng: item.longitude,
          name: item.hospital_name,
          address: item.address,
          rat: item.rating,
        }));
        setData(formattedData);
        setDataLoading(false);
      } catch (error) {
        setError(error);
        setDataLoading(false);
      }
    };

    if (latitude && longitude) {
      fetchData();
    }
  }, [latitude, longitude]);

  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        if (Platform.OS === 'android') {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: '위치 권한',
              message:
                '지도에서 사용자님의 위치를 보여드리기 위해 권한이 필요합니다.',
              buttonNegative: '아니요',
              buttonPositive: '네',
            },
          );
          if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
            console.error('Location permission denied');
            return;
          }
        }
        getCurrentLocation();
      } catch (err) {
        console.warn(err);
      }
    };

    const getCurrentLocation = () => {
      Geolocation.getCurrentPosition(
        position => {
          const {latitude, longitude} = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
          setLoading(false);
        },
        error => {
          console.error(error);
          setLoading(false);
        },
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
      );
    };

    requestLocationPermission();
  }, []);

  const generateHTML = () => {
    const positions = data
      .map(formattedData => {
        return `
        {
          lat: ${formattedData.lat},
          lng: ${formattedData.lng},
          name: "${formattedData.name}",
          address: "${formattedData.address}",
          rat: ${formattedData.rat}
        }
      `;
      })
      .join(',');

    return `
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script type="text/javascript" src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=3e1c139381d6055f207cc79f7b81af76&libraries=services,clusterer,drawing"></script> 
    <style>
    .wrap {
        background-color: white;
        border: 1px solid #ccc;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        padding: 10px;
        width: 250px;
        word-wrap: break-word;
        overflow: hidden;
        font-size: 11px;
        position: relative;
        bottom: 95px;
    }
    .wrap .title {
        font-weight: bold;
        font-size: 14px;
        margin-bottom: 10px;
    }
    .wrap .close {
        float: right;
        cursor: pointer;
        font-size: 14px;
        margin-top: -3px;
        margin-right: 3px;
    }
    .wrap .body {
        display: flex;
    }
    .wrap .desc {
        flex: 1;
    }
    .wrap .ellipsis {
        margin-bottom: 5px;
        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .wrap .link {
        color: blue;
        text-decoration: none;
        font-size: 12px;
    }
</style> 
</head>
<body>
<div id="map" style="width:100%;height:100%;"></div>
<script>
var mapContainer = document.getElementById('map'), 
    mapOption = { 
        center: new kakao.maps.LatLng(${latitude}, ${longitude}), 
        level: 7
    };

var map = new kakao.maps.Map(mapContainer, mapOption); 

var positions = [${positions}];
var overlays = [];

positions.forEach(position => {
    var markerPosition = new kakao.maps.LatLng(position.lat, position.lng); 
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });
    marker.setMap(map);
    
    var content = '<div class="wrap">' + 
              '    <div class="info">' + 
              '        <div class="title">' + 
              position.name +  
              '        </div>' + 
              '        <div class="body">' + 
              '            <div class="desc">' + 
              '                <div class="ellipsis">' + position.address + '</div>' + 
              '            </div>' + 
              '        </div>' + 
              '        <div class="body">' + 
              '            <div class="desc">' + 
              '                <div class="ellipsis">' + position.rat + '등급' + '</div>' + 
              '            </div>' + 
              '        </div>' + 
              '    </div>' +    
              '</div>';

    var overlay = new kakao.maps.CustomOverlay({
        content: content,
        map: null,
        position: marker.getPosition()       
    });

    overlays.push(overlay);

    kakao.maps.event.addListener(marker, 'click', function() {
        overlays.forEach(o => o.setMap(null));
        overlay.setMap(map);
    });

    kakao.maps.event.addListener(map, 'click', function() {
        overlay.setMap(null);
    });
});
</script>
</body>
</html>    
    `;
  };

  if (loading || dataLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  return <WebView source={{html: generateHTML()}} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Map;
