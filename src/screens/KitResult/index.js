import * as React from 'react';
import {Text, StyleSheet, Image, View} from 'react-native';
import {
  FontFamily,
  Padding,
  Border,
  Color,
  FontSize,
  StyleVariable,
} from './styles';

const KitResultScreen = () => {
  return (
    <View style={[styles.view, styles.parentFlexBox]}>
      <View style={[styles.parent, styles.parentSpaceBlock]}>
        <Text style={[styles.text, styles.textTypo5]}>검사 결과</Text>
        <View style={[styles.button, styles.parentSpaceBlock]}>
          <View style={styles.content}>
            <Text style={styles.button1}>닫기</Text>
          </View>
        </View>
      </View>
      <View style={[styles.inner, styles.innerSpaceBlock]}>
        <View style={[styles.frameParent, styles.innerSpaceBlock]}>
          <View style={styles.group}>
            <Text style={[styles.text1, styles.textTypo3]}>
              만성신부전 위험도
            </Text>
            <Text style={[styles.text2, styles.textTypo2]}>3단계</Text>
          </View>
          <View style={styles.frameGroup}>
            <View style={styles.mingcutewarningFillParent}>
              <Image
                style={styles.mingcutewarningFillIcon}
                resizeMode="cover"
                source={require('../assets/mingcutewarningfill.png')}
              />
              <Text style={[styles.text3, styles.textTypo1]}>위험</Text>
            </View>
            <Text style={[styles.text4, styles.textTypo1]}>
              섬세한 관리가 필요한 단계에요.
            </Text>
          </View>
          <View style={styles.wrapper}>
            <Text
              style={[
                styles.text1,
                styles.textTypo3,
              ]}>{`3개월 뒤 3단계 진입 (투석) 예정 `}</Text>
          </View>
          <Image
            style={[styles.iconArrowDown, styles.iconLayout]}
            resizeMode="cover"
            source={require('../assets/iconarrow-down.png')}
          />
        </View>
      </View>
      <View style={styles.frameContainer}>
        <View style={styles.container}>
          <Text style={[styles.text1, styles.textTypo3]}>신장 지표</Text>
        </View>
        <View style={[styles.frameView, styles.frameSpaceBlock]}>
          <View style={styles.parent1}>
            <Text style={[styles.text7, styles.textTypo4]}>혈청 크레아틴</Text>
            <Text style={[styles.text8, styles.textTypo2]}>1.3</Text>
          </View>
          <View style={styles.tagColorfulParent}>
            <View style={[styles.tagColorful, styles.tagBorder]}>
              <Text style={[styles.magenta, styles.greenTypo]}>위험</Text>
            </View>
            <Image
              style={[styles.iconArrowDown1, styles.iconLayout]}
              resizeMode="cover"
              source={require('../assets/iconarrow-down1.png')}
            />
          </View>
        </View>
        <View style={styles.frameSpaceBlock}>
          <View style={styles.parent1}>
            <Text style={[styles.text7, styles.textTypo4]}>
              신사구체여과율 (e-GFR)
            </Text>
            <Text style={[styles.text8, styles.textTypo2]}>68</Text>
          </View>
          <View style={styles.tagColorfulParent}>
            <View style={[styles.tagColorful, styles.tagBorder]}>
              <Text style={[styles.magenta, styles.greenTypo]}>위험</Text>
            </View>
            <Image
              style={[styles.iconArrowDown1, styles.iconLayout]}
              resizeMode="cover"
              source={require('../assets/iconarrow-down2.png')}
            />
          </View>
        </View>
        <View style={[styles.frameView, styles.frameSpaceBlock]}>
          <View style={styles.parent1}>
            <Text style={[styles.text7, styles.textTypo4]}>요단백</Text>
            <Text style={[styles.text8, styles.textTypo2]}>음성</Text>
          </View>
          <View style={styles.tagColorfulParent}>
            <View style={[styles.tagColorful2, styles.tagBorder]}>
              <Text style={[styles.green, styles.greenTypo]}>정상</Text>
            </View>
            <Image
              style={[styles.iconArrowDown1, styles.iconLayout]}
              resizeMode="cover"
              source={require('../assets/iconarrow-down2.png')}
            />
          </View>
        </View>
        <View style={[styles.frameView, styles.frameSpaceBlock]}>
          <View style={styles.parent1}>
            <Text style={[styles.text7, styles.textTypo4]}>공복혈당</Text>
            <Text style={[styles.text8, styles.textTypo2]}>75</Text>
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
        <View style={[styles.frameView, styles.frameSpaceBlock]}>
          <View style={styles.parent1}>
            <Text style={[styles.text7, styles.textTypo4]}>혈압</Text>
            <Text style={[styles.text8, styles.textTypo2]}>75</Text>
          </View>
          <View style={styles.tagColorfulParent}>
            <View style={[styles.tagColorful2, styles.tagBorder]}>
              <Text style={[styles.green, styles.greenTypo]}>정상</Text>
            </View>
            <Image
              style={[styles.iconArrowDown1, styles.iconLayout]}
              resizeMode="cover"
              source={require('../assets/iconarrow-down2.png')}
            />
          </View>
        </View>
      </View>
      <View style={styles.frameParent5}>
        <View style={[styles.frameParent6, styles.parentSpaceBlock1]}>
          <View style={[styles.flowbitehomeSolidParent, styles.parentFlexBox]}>
            <Image
              style={styles.flowbitehomeSolidIcon}
              resizeMode="cover"
              source={require('../assets/flowbitehomesolid.png')}
            />
            <Text style={[styles.text16, styles.textTypo]}>홈</Text>
          </View>
          <View style={[styles.mdimarketplaceParent, styles.parentFlexBox]}>
            <Image
              style={styles.flowbitehomeSolidIcon}
              resizeMode="cover"
              source={require('../assets/mdimarketplace.png')}
            />
            <Text style={[styles.text16, styles.textTypo]}>나의루틴</Text>
          </View>
          <View style={[styles.mdimarketplaceParent, styles.parentFlexBox]}>
            <Image
              style={styles.flowbitehomeSolidIcon}
              resizeMode="cover"
              source={require('../assets/mditesttube.png')}
            />
            <Text style={[styles.text18, styles.textTypo]}>검사지</Text>
          </View>
          <View style={[styles.mdimarketplaceParent, styles.parentFlexBox]}>
            <Image
              style={styles.flowbitehomeSolidIcon}
              resizeMode="cover"
              source={require('../assets/ionperson.png')}
            />
            <Text style={[styles.text16, styles.textTypo]}>내 정보</Text>
          </View>
        </View>
        <View style={styles.iosIndicatorBar}>
          <View style={styles.homeIndicator}>
            <View style={styles.homeIndicator1} />
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
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    flex: 1,
    alignItems: 'center',
  },
  parentSpaceBlock: {
    paddingVertical: 0,
    alignItems: 'center',
  },
  textTypo5: {
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: '600',
  },
  innerSpaceBlock: {
    padding: Padding.p_xl,
    borderRadius: Border.br_5xs,
    alignSelf: 'stretch',
  },
  textTypo3: {
    fontFamily: FontFamily.notoSansBold,
    fontWeight: '700',
  },
  textTypo2: {
    color: Color.grayscaleBlack,
    textAlign: 'left',
    fontSize: FontSize.size_base,
  },
  textTypo1: {
    marginLeft: 4,
    color: Color.colorsBaseRed5,
    fontSize: FontSize.size_xs,
    textAlign: 'left',
  },
  iconLayout: {
    height: 15,
    width: 15,
    overflow: 'hidden',
  },
  frameSpaceBlock: {
    marginTop: 10,
    paddingBottom: Padding.p_3xs,
    paddingRight: Padding.p_xs,
    paddingTop: Padding.p_3xs,
    paddingLeft: Padding.p_5xl,
    width: 342,
    borderRadius: Border.br_5xs,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.grayscaleWhite,
  },
  textTypo4: {
    fontSize: FontSize.size_xs,
    textAlign: 'left',
  },
  tagBorder: {
    paddingVertical: Padding.p_12xs,
    paddingHorizontal: StyleVariable.spacePaddingControlPaddingHorizontalSM,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: StyleVariable.componentsTagGlobalBorderRadiusSM,
    flexDirection: 'row',
    alignItems: 'center',
  },
  greenTypo: {
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.notoSansRegular,
    textAlign: 'left',
  },
  parentSpaceBlock1: {
    paddingHorizontal: Padding.p_5xl,
    flexDirection: 'row',
    width: 390,
    backgroundColor: Color.grayscaleWhite,
  },
  textTypo: {
    marginTop: 4,
    fontSize: FontSize.size_xs,
    textAlign: 'left',
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: '600',
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
  text: {
    lineHeight: 28,
    color: Color.colorBlack,
    textAlign: 'left',
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: '600',
  },
  iconSearchoutlined: {
    width: 16,
    height: 16,
    display: 'none',
    overflow: 'hidden',
  },
  button1: {
    fontSize: FontSize.size_sm,
    lineHeight: 22,
    color: Color.componentsButtonGlobalColorText,
    marginLeft: 8,
    fontFamily: FontFamily.notoSansRegular,
    textAlign: 'left',
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
    justifyContent: 'center',
  },
  parent: {
    height: 60,
    zIndex: 0,
    paddingHorizontal: Padding.p_5xl,
    flexDirection: 'row',
    width: 390,
    backgroundColor: Color.grayscaleWhite,
    justifyContent: 'space-between',
  },
  text1: {
    color: Color.grayscaleGray3,
    fontSize: FontSize.size_xs,
    textAlign: 'left',
  },
  text2: {
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: '600',
  },
  group: {
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  mingcutewarningFillIcon: {
    width: 14,
    height: 14,
    overflow: 'hidden',
  },
  text3: {
    fontFamily: FontFamily.notoSansBold,
    fontWeight: '700',
  },
  mingcutewarningFillParent: {
    flexDirection: 'row',
  },
  text4: {
    fontFamily: FontFamily.notoSansRegular,
  },
  frameGroup: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorsBaseRed1,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    marginTop: 12,
    alignSelf: 'stretch',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapper: {
    marginTop: 12,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconArrowDown: {
    marginTop: 12,
  },
  frameParent: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: Color.grayscaleWhite,
  },
  inner: {
    alignItems: 'flex-end',
    zIndex: 1,
    backgroundColor: Color.colorGray_100,
  },
  container: {
    height: 19,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text7: {
    color: Color.grayscaleGray5,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: '600',
  },
  text8: {
    fontWeight: '500',
    fontFamily: FontFamily.notoSansMedium,
    marginTop: 16,
  },
  parent1: {
    justifyContent: 'center',
  },
  magenta: {
    color: Color.colorsBaseMagenta6,
  },
  tagColorful: {
    backgroundColor: Color.colorsBaseMagenta1,
    borderColor: Color.colorsBaseMagenta3,
  },
  iconArrowDown1: {
    marginLeft: 8,
  },
  tagColorfulParent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  frameView: {
    height: 69,
  },
  green: {
    color: Color.colorsBaseGreen6,
  },
  tagColorful2: {
    backgroundColor: Color.colorsBaseGreen1,
    borderColor: Color.colorsBaseGreen3,
  },
  orange: {
    color: Color.colorsBaseOrange6,
  },
  tagColorful3: {
    backgroundColor: Color.colorsBaseOrange1,
    borderColor: Color.colorsBaseOrange3,
  },
  frameContainer: {
    padding: Padding.p_5xl,
    zIndex: 2,
    backgroundColor: Color.colorGray_100,
    width: 390,
    alignItems: 'center',
  },
  flowbitehomeSolidIcon: {
    width: 25,
    height: 25,
    overflow: 'hidden',
  },
  text16: {
    color: Color.grayscaleGray5,
  },
  flowbitehomeSolidParent: {
    alignItems: 'center',
  },
  mdimarketplaceParent: {
    marginLeft: 8,
    alignItems: 'center',
  },
  text18: {
    color: '#1677ff',
  },
  frameParent6: {
    paddingTop: Padding.p_5xs,
    paddingBottom: 16,
    justifyContent: 'center',
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
    width: 390,
    alignItems: 'center',
    backgroundColor: Color.grayscaleWhite,
  },
  frameParent5: {
    zIndex: 3,
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
    zIndex: 4,
    overflow: 'hidden',
    width: 390,
    backgroundColor: Color.grayscaleWhite,
  },
  view: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: Color.grayscaleWhite,
  },
});

export default KitResultScreen;
