import * as React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  Color,
  FontFamily,
  FontSize,
  StyleVariable,
  Padding,
  Border,
} from './styles';

const HealthCheckupResultScreen = () => {
  return (
    <ScrollView>
      <View style={styles.view}>
        <View style={[styles.iconArrowDownParent, styles.buttonSpaceBlock]}>
          <Image
            style={[styles.iconArrowDown, styles.iconLayout]}
            resizeMode="cover"
            source={require('../assets/iconarrow-down.png')}
          />
          <View style={[styles.button, styles.buttonSpaceBlock]}>
            <View style={styles.content}>
              <Text style={[styles.button1, styles.text1Typo]}>검진기록</Text>
            </View>
          </View>
        </View>
        <View style={styles.parent}>
          <Text style={styles.textTypo}>{`김소영님의 `}</Text>
          <View style={[styles.dropdownButtonBasic, styles.content1FlexBox]}>
            <View style={[styles.content1, styles.content1FlexBox]}>
              <Text style={styles.text1Typo}>2023년 12월 20일</Text>
              <Image
                style={[styles.iconArrowDown1, styles.iconLayout]}
                resizeMode="cover"
                source={require('../assets/iconarrow-down1.png')}
              />
            </View>
          </View>
          <Text style={[styles.text2, styles.textTypo]}>
            건강검진 결과입니다.
          </Text>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.group}>
            <Text style={styles.text3}>건강검진 종합소견</Text>
            <Text style={[styles.b, styles.bClr]}>
              <Text style={styles.text4}>{`판정 `}</Text>
              <Text style={styles.b1Typo}>: 정상B(경계)</Text>
            </Text>
            <Text style={[styles.b, styles.bClr]}>
              <Text style={styles.text4}>의심질환 :</Text>
              <Text style={styles.b1Typo}> 해당없음</Text>
            </Text>
            <Text style={[styles.b, styles.bClr]}>
              <Text style={styles.text4}>유질환 :</Text>
              <Text style={styles.b1Typo}> 해당없음</Text>
            </Text>
            <Text style={[styles.b, styles.bClr]}>
              <Text style={styles.text4}>생활습관관리 :</Text>
              <Text style={styles.b1Typo}>
                {' '}
                흡연은 만병의 근원입니다. 신체활동량이 부족합니다. 운동을
                생활화하십시오.
              </Text>
            </Text>
            <Text style={[styles.b, styles.bClr]}>
              <Text style={styles.text4}>기타 :</Text>
              <Text
                style={
                  styles.b1Typo
                }>{` 이상지지혈증관리 -> 저지방식이요법, 운동`}</Text>
            </Text>
          </View>
          <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
            <View style={styles.container}>
              <Text style={styles.text3}>혈청 크레아틴</Text>
              <Text style={[styles.text18, styles.b1Typo]}>1.3</Text>
            </View>
            <View style={styles.tagColorfulParent}>
              <View style={[styles.tagColorful, styles.tagBorder]}>
                <Text style={[styles.green, styles.greenTypo]}>정상</Text>
              </View>
              <Image
                style={[styles.iconArrowDown1, styles.iconLayout]}
                resizeMode="cover"
                source={require('../assets/iconarrow-down2.png')}
              />
            </View>
          </View>
          <View style={styles.frameSpaceBlock}>
            <View style={styles.container}>
              <Text style={styles.text3}>신사구체여과율 (e-GFR)</Text>
              <Text style={[styles.text18, styles.b1Typo]}>68</Text>
            </View>
            <View style={styles.tagColorfulParent}>
              <View style={[styles.tagColorful1, styles.tagBorder]}>
                <Text style={[styles.magenta, styles.greenTypo]}>위험</Text>
              </View>
              <Image
                style={[styles.iconArrowDown1, styles.iconLayout]}
                resizeMode="cover"
                source={require('../assets/iconarrow-down2.png')}
              />
            </View>
          </View>
          <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
            <View style={styles.container}>
              <Text style={styles.text3}>요단백</Text>
              <Text style={[styles.text18, styles.b1Typo]}>음성</Text>
            </View>
            <View style={styles.tagColorfulParent}>
              <View style={[styles.tagColorful, styles.tagBorder]}>
                <Text style={[styles.green, styles.greenTypo]}>정상</Text>
              </View>
              <Image
                style={[styles.iconArrowDown1, styles.iconLayout]}
                resizeMode="cover"
                source={require('../assets/iconarrow-down2.png')}
              />
            </View>
          </View>
          <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
            <View style={styles.container}>
              <Text style={styles.text3}>공복혈당</Text>
              <Text style={[styles.text18, styles.b1Typo]}>75</Text>
            </View>
            <View style={styles.tagColorfulParent}>
              <View style={[styles.tagColorful3, styles.tagBorder]}>
                <Text style={[styles.orange, styles.greenTypo]}>주의</Text>
              </View>
              <Image
                style={[styles.iconArrowDown1, styles.iconLayout]}
                resizeMode="cover"
                source={require('../assets/iconarrow-down2.png')}
              />
            </View>
          </View>
          <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
            <View style={styles.container}>
              <Text style={styles.text3}>혈압</Text>
              <Text style={[styles.text18, styles.b1Typo]}>75</Text>
            </View>
            <View style={styles.tagColorfulParent}>
              <View style={[styles.tagColorful, styles.tagBorder]}>
                <Text style={[styles.green, styles.greenTypo]}>정상</Text>
              </View>
              <Image
                style={[styles.iconArrowDown1, styles.iconLayout]}
                resizeMode="cover"
                source={require('../assets/iconarrow-down2.png')}
              />
            </View>
          </View>
          <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
            <View style={styles.container}>
              <Text style={styles.text3}>흉부 방사선</Text>
              <Text style={[styles.text18, styles.b1Typo]}>정상</Text>
            </View>
            <View style={styles.tagColorfulParent}>
              <View style={[styles.tagColorful, styles.tagBorder]}>
                <Text style={[styles.green, styles.greenTypo]}>정상</Text>
              </View>
              <Image
                style={[styles.iconArrowDown1, styles.iconLayout]}
                resizeMode="cover"
                source={require('../assets/iconarrow-down2.png')}
              />
            </View>
          </View>
          <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
            <View style={styles.container}>
              <Text style={styles.text3}>헤모글로빈(혈색소)</Text>
              <Text style={[styles.text18, styles.b1Typo]}>정상</Text>
            </View>
            <View style={styles.tagColorfulParent}>
              <View style={[styles.tagColorful, styles.tagBorder]}>
                <Text style={[styles.green, styles.greenTypo]}>정상</Text>
              </View>
              <Image
                style={[styles.iconArrowDown1, styles.iconLayout]}
                resizeMode="cover"
                source={require('../assets/iconarrow-down2.png')}
              />
            </View>
          </View>
          <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
            <View style={styles.container}>
              <Text style={styles.text3}>시력</Text>
              <Text style={[styles.text18, styles.b1Typo]}>정상</Text>
            </View>
            <View style={styles.tagColorfulParent}>
              <View style={[styles.tagColorful, styles.tagBorder]}>
                <Text style={[styles.green, styles.greenTypo]}>정상</Text>
              </View>
              <Image
                style={[styles.iconArrowDown1, styles.iconLayout]}
                resizeMode="cover"
                source={require('../assets/iconarrow-down2.png')}
              />
            </View>
          </View>
          <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
            <View style={styles.container}>
              <Text style={styles.text3}>청력</Text>
              <Text style={[styles.text18, styles.b1Typo]}>정상</Text>
            </View>
            <View style={styles.tagColorfulParent}>
              <View style={[styles.tagColorful, styles.tagBorder]}>
                <Text style={[styles.green, styles.greenTypo]}>정상</Text>
              </View>
              <Image
                style={[styles.iconArrowDown1, styles.iconLayout]}
                resizeMode="cover"
                source={require('../assets/iconarrow-down1.png')}
              />
            </View>
          </View>
          <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
            <View style={styles.container}>
              <Text style={styles.text3}>체지방/허리둘레/몸무게/키</Text>
              <Text style={[styles.text18, styles.b1Typo]}>정상</Text>
            </View>
            <View style={styles.tagColorfulParent}>
              <View style={[styles.tagColorful, styles.tagBorder]}>
                <Text style={[styles.green, styles.greenTypo]}>정상</Text>
              </View>
              <Image
                style={[styles.iconArrowDown1, styles.iconLayout]}
                resizeMode="cover"
                source={require('../assets/iconarrow-down1.png')}
              />
            </View>
          </View>
          <View style={styles.frameSpaceBlock}>
            <View style={styles.container}>
              <Text style={styles.text3}>간 기능</Text>
              <Text style={[styles.text18, styles.b1Typo]}>정상</Text>
            </View>
            <View style={styles.tagColorfulParent}>
              <View style={[styles.tagColorful, styles.tagBorder]}>
                <Text style={[styles.green, styles.greenTypo]}>정상</Text>
              </View>
              <Image
                style={[styles.iconArrowDown1, styles.iconLayout]}
                resizeMode="cover"
                source={require('../assets/iconarrow-down1.png')}
              />
            </View>
          </View>
        </View>
        <View style={[styles.ios, styles.iosPosition]}>
          <View style={[styles.right, styles.rightPosition]}>
            <Image
              style={[styles.batteryIcon, styles.iosPosition]}
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
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonSpaceBlock: {
    paddingVertical: 0,
    alignItems: 'center',
  },
  iconLayout: {
    height: 15,
    overflow: 'hidden',
    width: 15,
  },
  text1Typo: {
    textAlign: 'left',
    color: Color.componentsButtonComponentDefaultColor,
    fontFamily: FontFamily.notoSansRegular,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  content1FlexBox: {
    height: StyleVariable.componentsButtonGlobalControlHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: '600',
    fontSize: FontSize.size_base,
    textAlign: 'left',
  },
  bClr: {
    color: Color.grayscaleBlack,
    marginTop: 16,
    textAlign: 'left',
  },
  frameSpaceBlock: {
    marginTop: 10,
    paddingBottom: Padding.p_3xs,
    paddingRight: Padding.p_xs,
    paddingTop: Padding.p_3xs,
    paddingLeft: Padding.p_5xl,
    justifyContent: 'space-between',
    width: 342,
    borderRadius: Border.br_5xs,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.grayscaleWhite,
  },
  b1Typo: {
    fontFamily: FontFamily.notoSansMedium,
    fontWeight: '500',
  },
  tagBorder: {
    paddingVertical: Padding.p_12xs,
    paddingHorizontal: StyleVariable.spacePaddingControlPaddingHorizontalSM,
    borderRadius: StyleVariable.componentsTagGlobalBorderRadiusSM,
    borderWidth: 1,
    borderStyle: 'solid',
    flexDirection: 'row',
    alignItems: 'center',
  },
  greenTypo: {
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    textAlign: 'left',
    fontFamily: FontFamily.notoSansRegular,
  },
  iosPosition: {
    top: 0,
    position: 'absolute',
  },
  rightPosition: {
    top: 16,
    height: 11,
    position: 'absolute',
  },
  iconArrowDown: {
    overflow: 'hidden',
  },
  iconSearchoutlined: {
    width: 16,
    height: 16,
    display: 'none',
    overflow: 'hidden',
  },
  button1: {
    marginLeft: 8,
  },
  content: {
    height: StyleVariable.componentsButtonGlobalControlHeightSM,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderRadius: StyleVariable.componentsButtonGlobalBorderRadiusSM,
    paddingHorizontal: StyleVariable.componentsButtonComponentPaddingInlineSM,
    marginLeft: 242,
    justifyContent: 'center',
  },
  iconArrowDownParent: {
    height: 60,
    justifyContent: 'flex-end',
    zIndex: 0,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 0,
    flexDirection: 'row',
    width: 390,
    backgroundColor: Color.grayscaleWhite,
  },
  iconArrowDown1: {
    marginLeft: 8,
    overflow: 'hidden',
  },
  content1: {
    flexDirection: 'row',
  },
  dropdownButtonBasic: {
    borderRadius: StyleVariable.componentsButtonGlobalBorderRadius,
    borderColor: Color.componentsButtonComponentDefaultBorderColor,
    paddingHorizontal:
      StyleVariable.componentsButtonGlobalPaddingContentHorizontal,
    marginTop: 16,
    borderWidth: 1,
    borderStyle: 'solid',
    height: StyleVariable.componentsButtonGlobalControlHeight,
    paddingVertical: 0,
    backgroundColor: Color.grayscaleWhite,
  },
  text2: {
    marginTop: 16,
  },
  parent: {
    paddingVertical: 20,
    zIndex: 1,
    borderRadius: Border.br_5xs,
    alignSelf: 'stretch',
    paddingHorizontal: Padding.p_5xl,
    backgroundColor: Color.grayscaleWhite,
  },
  text3: {
    color: Color.grayscaleGray5,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: '600',
    textAlign: 'left',
  },
  text4: {
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: '600',
  },
  b: {
    color: Color.grayscaleBlack,
    alignSelf: 'stretch',
    fontSize: FontSize.size_sm,
  },
  group: {
    paddingVertical: Padding.p_3xs,
    width: 342,
    borderRadius: Border.br_5xs,
    justifyContent: 'center',
    paddingHorizontal: Padding.p_5xl,
    backgroundColor: Color.grayscaleWhite,
  },
  text18: {
    color: Color.grayscaleBlack,
    marginTop: 16,
    textAlign: 'left',
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.notoSansMedium,
    fontWeight: '500',
  },
  container: {
    justifyContent: 'center',
  },
  green: {
    color: Color.colorsBaseGreen6,
  },
  tagColorful: {
    backgroundColor: Color.colorsBaseGreen1,
    borderColor: Color.colorsBaseGreen3,
  },
  tagColorfulParent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  frameGroup: {
    height: 69,
  },
  magenta: {
    color: Color.colorsBaseMagenta6,
  },
  tagColorful1: {
    backgroundColor: Color.colorsBaseMagenta1,
    borderColor: Color.colorsBaseMagenta3,
  },
  orange: {
    color: Color.colorsBaseOrange6,
  },
  tagColorful3: {
    backgroundColor: Color.colorsBaseOrange1,
    borderColor: Color.colorsBaseOrange3,
  },
  frameParent: {
    backgroundColor: '#fafafa',
    padding: Padding.p_5xl,
    zIndex: 2,
    width: 390,
    alignItems: 'center',
  },
  batteryIcon: {
    right: 0,
    width: 24,
    height: 11,
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
    left: 0,
    height: 44,
    zIndex: 3,
    overflow: 'hidden',
    width: 390,
    backgroundColor: Color.grayscaleWhite,
  },
  view: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: Color.grayscaleWhite,
  },
});

export default HealthCheckupResultScreen;
