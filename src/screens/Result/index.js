import * as React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  Padding,
  Border,
  Color,
  StyleVariable,
  FontFamily,
  FontSize,
} from './styles';

const ResultScreen = ({onPress, navigation}) => {
  return (
    <ScrollView>
      <View style={styles.view}>
        <View style={styles.child} />
        <View style={[styles.inner, styles.innerFlexBox]}>
          <View style={[styles.frameParent, styles.parentLayout]}>
            <View style={[styles.buttonParent, styles.parentLayout]}>
              <View style={[styles.button, styles.buttonFlexBox1]}>
                <View style={styles.content}>
                  <Text style={[styles.text, styles.textTypo1]}>검사하기</Text>
                </View>
              </View>
              <View style={styles.buttonFlexBox1}>
                <View style={styles.content}>
                  <Text style={[styles.text1, styles.textTypo1]}>결과지</Text>
                </View>
              </View>
            </View>
            <View style={styles.frameGroup}>
              <View
                style={[
                  styles.dropdownButtonBasicWrapper,
                  styles.frameContainerFlexBox,
                ]}>
                <View
                  style={[styles.dropdownButtonBasic, styles.buttonFlexBox]}>
                  <View style={styles.content}>
                    <Text style={styles.text2}>전체</Text>
                    <Image
                      style={styles.iconArrowDown}
                      resizeMode="cover"
                      source={require('../assets/iconarrow-down.png')}
                    />
                  </View>
                </View>
              </View>
              <View style={[styles.frameContainer, styles.inner1SpaceBlock]}>
                <View style={styles.frameView}>
                  <View style={styles.mditestTubeParent}>
                    <Image
                      style={styles.mditestTubeIcon}
                      resizeMode="cover"
                      source={require('../assets/mditesttube.png')}
                    />
                    <Text style={styles.text3}>키트 검사하기</Text>
                  </View>
                  <Text style={[styles.text4, styles.text4Typo]}>
                    키트로 검사를 시작해보세요! 신부전증 증상을 자세하게 알 수
                    있어요.
                  </Text>
                </View>
                <TouchableOpacity
                  style={[styles.button2, styles.buttonFlexBox]}
                  onPress={() => navigation.navigate('QRCode')}>
                  <View style={styles.content}>
                    <Text style={[styles.button3, styles.text4Typo]}>
                      시작하기
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={[styles.frameContainer, styles.inner1SpaceBlock]}>
                <View style={styles.frameView}>
                  <View style={styles.mditestTubeParent}>
                    <Image
                      style={styles.mingcutehospitalFillIcon}
                      resizeMode="cover"
                      source={require('../assets/mingcutehospitalfill.png')}
                    />
                    <Text style={styles.text3}>투석 결과지</Text>
                  </View>
                  <Text style={[styles.text4, styles.text4Typo]}>
                    나의 투석 결과지를 찍고, 분석해보세요.
                  </Text>
                </View>
                <View style={[styles.button2, styles.buttonFlexBox]}>
                  <View style={styles.content}>
                    <Text style={[styles.button3, styles.text4Typo]}>
                      시작하기
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.frameContainer, styles.inner1SpaceBlock]}>
                <View style={styles.frameView}>
                  <View style={styles.mditestTubeParent}>
                    <Image
                      style={styles.mingcutehospitalFillIcon}
                      resizeMode="cover"
                      source={require('../assets/mingcutehospitalfill1.png')}
                    />
                    <Text style={styles.text3}>건강검진기록 불러오기</Text>
                  </View>
                  <Text style={[styles.text4, styles.text4Typo]}>
                    지금 나의 영양 상태를 체크리스트를 통해 확인해보세요.
                  </Text>
                </View>
                <TouchableOpacity
                  style={[styles.button2, styles.buttonFlexBox]}
                  onPress={() => navigation.navigate('LoadHealthCheckup')}>
                  <View style={styles.content}>
                    <Text style={[styles.button3, styles.text4Typo]}>
                      시작하기
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={[styles.frameContainer, styles.inner1SpaceBlock]}>
                <View style={styles.frameView}>
                  <View style={styles.mditestTubeParent}>
                    <Image
                      style={styles.mingcutehospitalFillIcon}
                      resizeMode="cover"
                      source={require('../assets/majesticonslistbox.png')}
                    />
                    <Text style={styles.text3}>영양 상태</Text>
                  </View>
                  <Text style={[styles.text4, styles.text4Typo]}>
                    지금 나의 영양 상태를 체크리스트를 통해 확인해보세요.
                  </Text>
                </View>
                <View style={[styles.button2, styles.buttonFlexBox]}>
                  <View style={styles.content}>
                    <Text style={[styles.button3, styles.text4Typo]}>
                      시작하기
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.frameContainer, styles.inner1SpaceBlock]}>
                <View style={styles.frameView}>
                  <View style={styles.mditestTubeParent}>
                    <Image
                      style={styles.mingcutehospitalFillIcon}
                      resizeMode="cover"
                      source={require('../assets/majesticonslistbox1.png')}
                    />
                    <Text style={styles.text3}>만성신부전</Text>
                  </View>
                  <Text style={[styles.text4, styles.text4Typo]}>
                    지금 나의 영양 상태를 체크리스트를 통해 확인해보세요.
                  </Text>
                </View>
                <View style={[styles.button2, styles.buttonFlexBox]}>
                  <View style={styles.content}>
                    <Text style={[styles.button3, styles.text4Typo]}>
                      시작하기
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.inner1, styles.inner1SpaceBlock]}>
          <View style={styles.healthiconsbloodDropParent}>
            <View style={styles.healthiconsbloodLayout}>
              <Image
                style={styles.mingcutehospitalFillIcon}
                resizeMode="cover"
                source={require('../assets/majesticonslistbox1.png')}
              />
              <Text style={styles.text13}>자가진단 체크하기</Text>
            </View>
            <View
              style={[
                styles.healthiconsbloodDrop1,
                styles.healthiconsbloodLayout,
              ]}>
              <Image
                style={styles.mingcutehospitalFillIcon}
                resizeMode="cover"
                source={require('../assets/mingcutehospitalfill1.png')}
              />
              <Text style={styles.text13}>건강검진기록 불러오기</Text>
            </View>
          </View>
        </View>
        <View style={[styles.ios, styles.iosPosition]}>
          <View style={[styles.right, styles.rightPosition]}>
            <Image
              style={styles.batteryIcon}
              resizeMode="cover"
              source={require('../assets/battery.png')}
            />
            <Image
              style={styles.wifiIcon}
              resizeMode="cover"
              source={require('../assets/wifi.png')}
            />
            <Image
              style={styles.mobileSignalIcon}
              resizeMode="cover"
              source={require('../assets/mobile-signal.png')}
            />
          </View>
          <Image
            style={[styles.dateIcon, styles.rightPosition]}
            resizeMode="cover"
            source={require('../assets/date.png')}
          />
        </View>
        <View style={[styles.inner2, styles.iosPosition]}>
          <View>
            <View style={[styles.iosIndicatorBar, styles.iosLayout]}>
              <View style={styles.homeIndicator}>
                <View style={styles.homeIndicator1} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  innerFlexBox: {
    paddingHorizontal: Padding.p_5xl,
    flexDirection: 'row',
    width: 390,
    justifyContent: 'center',
  },
  parentLayout: {
    width: 342,
    borderRadius: Border.br_5xs,
    alignItems: 'center',
    backgroundColor: Color.componentsButtonComponentPrimaryColor,
  },
  buttonFlexBox1: {
    paddingVertical: 0,
    paddingHorizontal: StyleVariable.componentsButtonComponentPaddingInline,
    borderRadius: StyleVariable.componentsButtonGlobalBorderRadius,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  iconCommon: {
    display: 'none',
    overflow: 'hidden',
  },
  textTypo1: {
    textAlign: 'left',
    fontFamily: FontFamily.notoSansBold,
    fontWeight: '700',
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    marginLeft: 8,
  },
  frameContainerFlexBox: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  buttonFlexBox: {
    borderStyle: 'solid',
    paddingVertical: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner1SpaceBlock: {
    padding: Padding.p_xl,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.backgroundBg2,
    alignSelf: 'stretch',
  },
  text4Typo: {
    fontSize: 12,
    fontFamily: FontFamily.notoSansRegular,
    textAlign: 'left',
  },
  healthiconsbloodLayout: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_xs,
    width: 165,
    height: 52,
    overflow: 'hidden',
    borderRadius: Border.br_5xs,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.componentsButtonComponentPrimaryColor,
  },
  iosPosition: {
    left: 0,
    position: 'absolute',
  },
  rightPosition: {
    top: 16,
    height: 11,
    position: 'absolute',
  },
  textTypo: {
    marginTop: 4,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: '600',
    textAlign: 'left',
  },
  parentFlexBox: {
    paddingTop: Padding.p_base,
    alignItems: 'center',
    flex: 1,
  },
  iosLayout: {
    width: 390,
    backgroundColor: Color.componentsButtonComponentPrimaryColor,
  },
  child: {
    backgroundColor: '#bbb',
    height: 153,
    zIndex: 0,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  iconSearchoutlined: {
    width: 16,
    height: 16,
  },
  text: {
    color: Color.colorsBaseGeekblue5,
    marginLeft: 8,
  },
  content: {
    height: StyleVariable.componentsButtonGlobalControlHeight,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: Color.colorsBaseGeekblue1,
  },
  text1: {
    color: Color.grayscaleGray7,
    marginLeft: 8,
  },
  buttonParent: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 8,
    flexDirection: 'row',
  },
  text2: {
    color: Color.componentsButtonComponentDefaultColor,
    fontFamily: FontFamily.notoSansRegular,
    textAlign: 'left',
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  iconArrowDown: {
    height: 15,
    width: 15,
    marginLeft: 8,
    overflow: 'hidden',
  },
  dropdownButtonBasic: {
    borderColor: Color.componentsButtonComponentDefaultBorderColor,
    borderWidth: 1,
    paddingHorizontal:
      StyleVariable.componentsButtonGlobalPaddingContentHorizontal,
    height: StyleVariable.componentsButtonGlobalControlHeight,
    borderStyle: 'solid',
    borderRadius: StyleVariable.componentsButtonGlobalBorderRadius,
    backgroundColor: Color.componentsButtonComponentPrimaryColor,
  },
  dropdownButtonBasicWrapper: {
    alignSelf: 'stretch',
  },
  mditestTubeIcon: {
    width: 25,
    height: 25,
    overflow: 'hidden',
  },
  text3: {
    fontSize: 14,
    marginLeft: 7,
    color: Color.colorBlack,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: '600',
    textAlign: 'left',
  },
  mditestTubeParent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text4: {
    marginTop: 7.1,
    color: Color.colorBlack,
    alignSelf: 'stretch',
  },
  frameView: {
    justifyContent: 'center',
    flex: 1,
  },
  iconPlusoutlined: {
    width: 14,
    height: 14,
  },
  button3: {
    lineHeight: 20,
    color: Color.componentsButtonComponentPrimaryColor,
  },
  button2: {
    borderRadius: 5,
    backgroundColor: Color.componentsButtonGlobalColorPrimary,
    borderColor: Color.componentsButtonGlobalColorPrimary,
    borderWidth: 0.9,
    marginLeft: 14,
    paddingHorizontal: StyleVariable.componentsButtonComponentPaddingInline,
    borderStyle: 'solid',
  },
  frameContainer: {
    height: 98,
    marginTop: 16,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  mingcutehospitalFillIcon: {
    width: 20,
    height: 20,
    overflow: 'hidden',
  },
  frameGroup: {
    width: 305,
    marginTop: 24,
    alignItems: 'flex-end',
    overflow: 'hidden',
    justifyContent: 'center',
  },
  frameParent: {
    paddingBottom: Padding.p_xl,
  },
  inner: {
    flexWrap: 'wrap',
    paddingVertical: Padding.p_xl,
    zIndex: 1,
    backgroundColor: Color.backgroundBg2,
    paddingHorizontal: Padding.p_5xl,
  },
  text13: {
    color: Color.grayscaleBlack,
    marginLeft: 10,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: '600',
    textAlign: 'left',
  },
  healthiconsbloodDrop1: {
    marginLeft: 12,
  },
  healthiconsbloodDropParent: {
    height: 52,
    width: 342,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner1: {
    height: 1,
    zIndex: 2,
    alignItems: 'flex-end',
  },
  batteryIcon: {
    right: 0,
    width: 24,
    height: 11,
    top: 0,
    position: 'absolute',
  },
  wifiIcon: {
    height: 11,
    width: 15,
  },
  mobileSignalIcon: {
    width: 17,
    height: 11,
  },
  right: {
    right: 15,
    width: 67,
    height: 11,
  },
  dateIcon: {
    left: 33,
    width: 28,
    height: 11,
  },
  ios: {
    height: 44,
    zIndex: 3,
    top: 0,
    overflow: 'hidden',
    width: 390,
    backgroundColor: Color.componentsButtonComponentPrimaryColor,
  },
  text15: {
    color: Color.grayscaleGray5,
  },
  mdimarketplaceParent: {
    marginLeft: 8,
  },
  text17: {
    color: Color.componentsButtonGlobalColorPrimary,
  },
  frameParent10: {
    paddingBottom: Padding.p_base,
    backgroundColor: Color.componentsButtonComponentPrimaryColor,
  },
  homeIndicator1: {
    marginLeft: -73,
    bottom: 8,
    left: '50%',
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorBlack,
    width: 146,
    height: 5,
    position: 'absolute',
  },
  homeIndicator: {
    height: 34,
    alignSelf: 'stretch',
  },
  iosIndicatorBar: {
    alignItems: 'center',
  },
  inner2: {
    bottom: 9,
    zIndex: 4,
  },
  view: {
    width: '100%',
    height: 1043,
    alignItems: 'center',
    flex: 1,
    backgroundColor: Color.componentsButtonComponentPrimaryColor,
  },
});

export default ResultScreen;
