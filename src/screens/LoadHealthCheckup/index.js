import * as React from 'react';
import {Text, StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import {
  Padding,
  Color,
  FontFamily,
  FontSize,
  StyleVariable,
  Border,
} from './styles';

const LoadHealthCheckupScreen = ({onPress, navigation}) => {
  return (
    <View style={styles.view}>
      <View style={[styles.parent, styles.groupSpaceBlock]}>
        <Text style={[styles.text, styles.textTypo]}>검사 결과</Text>
        <View style={[styles.button, styles.buttonContentFlexBox]}>
          <TouchableOpacity
            style={[styles.content, styles.buttonContentFlexBox]}
            onPress={() => navigation.navigate('Result')}>
            <Text style={[styles.button1, styles.buttonTypo]}>닫기</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.group, styles.groupSpaceBlock]}>
        <Text style={styles.textTypo}>건강검진기록을 불러오세요.</Text>
        <Text style={styles.text2}>{`신장투석과 관련된 중요한 지표를 분석하고,
기타 지표들을 확인할 수있어요.`}</Text>
      </View>
      <View style={[styles.buttonWrapper, styles.buttonContentFlexBox]}>
        <TouchableOpacity
          style={[styles.button2, styles.buttonContentFlexBox]}
          onPress={() => navigation.navigate('HealthCheckupResult')}>
          <View style={[styles.content1, styles.buttonContentFlexBox]}>
            <Text style={[styles.button3, styles.buttonTypo]}>불러오기</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={[styles.child, styles.childLayout]} />
      <View>
        <View>
          <View style={[styles.iosIndicatorBar, styles.childLayout]}>
            <View style={styles.homeIndicator}>
              <View style={styles.homeIndicator1} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupSpaceBlock: {
    paddingHorizontal: Padding.p_5xl,
    backgroundColor: Color.componentsButtonComponentPrimaryColor,
  },
  textTypo: {
    textAlign: 'left',
    color: Color.colorBlack,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: 'bold',
    fontSize: FontSize.size_base,
  },
  buttonContentFlexBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTypo: {
    marginLeft: 8,
    fontFamily: FontFamily.notoSansRegular,
    textAlign: 'left',
  },
  childLayout: {
    width: 390,
    alignItems: 'center',
  },
  text: {
    lineHeight: 28,
  },
  iconSearchoutlined: {
    width: 16,
    height: 16,
    overflow: 'hidden',
    display: 'none',
  },
  button1: {
    lineHeight: 22,
    color: Color.componentsButtonGlobalColorText,
    fontSize: FontSize.size_sm,
    marginLeft: 8,
  },
  content: {
    height: StyleVariable.componentsButtonGlobalControlHeightSM,
    flexDirection: 'row',
  },
  button: {
    borderRadius: StyleVariable.componentsButtonGlobalBorderRadiusSM,
    paddingHorizontal: StyleVariable.componentsButtonComponentPaddingInlineSM,
    paddingVertical: 0,
  },
  parent: {
    height: 60,
    justifyContent: 'space-between',
    paddingVertical: 0,
    flexDirection: 'row',
    width: 390,
    alignItems: 'center',
  },
  text2: {
    marginTop: 16,
    fontFamily: FontFamily.notoSansRegular,
    fontSize: FontSize.size_sm,
    textAlign: 'left',
    color: Color.colorBlack,
  },
  group: {
    borderRadius: Border.br_5xs,
    paddingVertical: 20,
    alignSelf: 'stretch',
  },
  button3: {
    lineHeight: 24,
    color: Color.componentsButtonComponentPrimaryColor,
    marginLeft: 8,
    fontSize: FontSize.size_base,
  },
  content1: {
    height: StyleVariable.componentsButtonGlobalControlHeightLG,
    flexDirection: 'row',
  },
  button2: {
    borderRadius: StyleVariable.componentsButtonGlobalBorderRadiusLG,
    backgroundColor: Color.componentsButtonGlobalColorPrimary,
    width: 342,
    paddingHorizontal: StyleVariable.componentsButtonComponentPaddingInlineLG,
    paddingVertical: 0,
  },
  buttonWrapper: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xl,
    alignSelf: 'stretch',
  },
  child: {
    backgroundColor: '#fafafa',
    flex: 1,
    width: 390,
  },
  homeIndicator1: {
    position: 'absolute',
    marginLeft: -73,
    bottom: 8,
    left: '50%',
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorBlack,
    width: 146,
    height: 5,
  },
  homeIndicator: {
    height: 34,
    alignSelf: 'stretch',
  },
  iosIndicatorBar: {
    backgroundColor: Color.componentsButtonComponentPrimaryColor,
    width: 390,
  },
  view: {
    width: '100%',
    height: 820,
    alignItems: 'center',
    flex: 1,
    backgroundColor: Color.componentsButtonComponentPrimaryColor,
  },
});

export default LoadHealthCheckupScreen;
