import React from 'react';
import {SafeAreaView, View, ScrollView, Image, Text} from 'react-native';
const NewScreen7 = props => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
      }}>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: '#FFFFFF',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            paddingVertical: 16,
            paddingLeft: 33,
            paddingRight: 15,
          }}>
          <Image
            source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
            resizeMode={'stretch'}
            style={{
              width: 28,
              height: 11,
            }}
          />
          <View
            style={{
              flex: 1,
              alignSelf: 'stretch',
            }}></View>
          <Image
            source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
            resizeMode={'stretch'}
            style={{
              width: 17,
              height: 10,
              marginRight: 5,
            }}
          />
          <Image
            source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
            resizeMode={'stretch'}
            style={{
              width: 15,
              height: 10,
              marginRight: 6,
            }}
          />
          <Image
            source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
            resizeMode={'stretch'}
            style={{
              width: 24,
              height: 11,
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            paddingHorizontal: 24,
            marginBottom: 2,
          }}>
          <Image
            source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
            resizeMode={'stretch'}
            style={{
              width: 60,
              height: 30,
              marginTop: 11,
            }}
          />
        </View>
        <Text
          style={{
            color: '#000000',
            fontSize: 14,
            fontWeight: 'bold',
            marginBottom: 1,
            marginLeft: 169,
          }}>
          {'7월 29일'}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            borderColor: '#E8E8EC',
            borderWidth: 1,
            paddingVertical: 17,
          }}>
          <View
            style={{
              width: 14,
              marginRight: 31,
            }}>
            <Text
              style={{
                color: '#5D5D62',
                fontSize: 12,
                marginBottom: 16,
                marginLeft: 2,
              }}>
              {'목'}
            </Text>
            <Text
              style={{
                color: '#000000',
                fontSize: 14,
              }}>
              {'25'}
            </Text>
          </View>
          <View
            style={{
              width: 15,
              marginRight: 31,
            }}>
            <Text
              style={{
                color: '#5D5D62',
                fontSize: 12,
                marginBottom: 16,
                marginLeft: 3,
              }}>
              {'금'}
            </Text>
            <Text
              style={{
                color: '#000000',
                fontSize: 14,
              }}>
              {'26'}
            </Text>
          </View>
          <View
            style={{
              width: 14,
              marginRight: 29,
            }}>
            <Text
              style={{
                color: '#5D5D62',
                fontSize: 12,
                marginBottom: 16,
                marginLeft: 2,
              }}>
              {'토'}
            </Text>
            <Text
              style={{
                color: '#000000',
                fontSize: 14,
              }}>
              {'27'}
            </Text>
          </View>
          <View
            style={{
              width: 17,
              marginRight: 15,
            }}>
            <Text
              style={{
                color: '#5D5D62',
                fontSize: 12,
                marginBottom: 16,
                marginLeft: 4,
              }}>
              {'일'}
            </Text>
            <Text
              style={{
                color: '#000000',
                fontSize: 16,
              }}>
              {'28'}
            </Text>
          </View>
          <View
            style={{
              width: 45,
              alignItems: 'center',
              backgroundColor: '#F0F5FF',
              borderRadius: 8,
              paddingVertical: 9,
              marginRight: 14,
            }}>
            <Text
              style={{
                color: '#597EF7',
                fontSize: 12,
                fontWeight: 'bold',
                marginBottom: 16,
              }}>
              {'오늘'}
            </Text>
            <Text
              style={{
                color: '#597EF7',
                fontSize: 14,
                fontWeight: 'bold',
              }}>
              {'29'}
            </Text>
          </View>
          <View
            style={{
              width: 15,
              marginRight: 33,
            }}>
            <Text
              style={{
                color: '#5D5D62',
                fontSize: 12,
                marginBottom: 16,
                marginLeft: 3,
              }}>
              {'화'}
            </Text>
            <Text
              style={{
                color: '#000000',
                fontSize: 14,
              }}>
              {'30'}
            </Text>
          </View>
          <View
            style={{
              width: 9,
              marginRight: 21,
            }}>
            <Text
              style={{
                color: '#5D5D62',
                fontSize: 12,
                marginBottom: 16,
              }}>
              {'수'}
            </Text>
            <Text
              style={{
                color: '#000000',
                fontSize: 14,
                marginLeft: 2,
              }}>
              {'1'}
            </Text>
          </View>
          <Image
            source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
            resizeMode={'stretch'}
            style={{
              width: 19,
              height: 19,
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: '#FAFAFA',
            paddingVertical: 24,
          }}>
          <Text
            style={{
              color: '#000000',
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: 14,
              marginHorizontal: 33,
              width: 324,
            }}>
            {'소영님 복약 루틴을 등록해\n잊지말고 약 챙기세요!'}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 5,
              marginHorizontal: 33,
            }}>
            <View
              style={{
                width: 139,
                alignItems: 'center',
                backgroundColor: '#1677FF',
                borderRadius: 15,
                paddingVertical: 6,
                marginRight: 5,
              }}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 14,
                  fontWeight: 'bold',
                }}>
                {'만성 콩팥병 4단계'}
              </Text>
            </View>
            <View
              style={{
                width: 113,
                alignItems: 'center',
                backgroundColor: '#1677FF',
                borderRadius: 15,
                paddingVertical: 6,
              }}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 14,
                  fontWeight: 'bold',
                }}>
                {'혈액투석 당일'}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 27,
              marginHorizontal: 33,
            }}>
            <View
              style={{
                width: 95,
                alignItems: 'center',
                backgroundColor: '#D9D9D9',
                borderRadius: 15,
                paddingVertical: 6,
                marginRight: 5,
              }}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 14,
                  fontWeight: 'bold',
                }}>
                {'알부민 부족'}
              </Text>
            </View>
            <View
              style={{
                width: 125,
                alignItems: 'center',
                backgroundColor: '#D9D9D9',
                borderRadius: 15,
                paddingVertical: 6,
              }}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 14,
                  fontWeight: 'bold',
                }}>
                {'헤모글로빈 부족'}
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#FAFAFA',
              paddingTop: 35,
              paddingBottom: 14,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 23,
                marginHorizontal: 48,
              }}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginRight: 4,
                  flex: 1,
                }}>
                {'김소영님의 루틴'}
              </Text>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 14,
                  marginRight: 24,
                }}>
                {'추가'}
              </Text>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 14,
                }}>
                {'편집'}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 8,
                paddingBottom: 20,
                marginBottom: 20,
                marginHorizontal: 20,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 8,
                  paddingVertical: 8,
                  paddingLeft: 78,
                  paddingRight: 10,
                  marginBottom: 20,
                }}>
                <Text
                  style={{
                    color: '#B9B9BE',
                    fontSize: 14,
                    fontWeight: 'bold',
                    marginRight: 4,
                    flex: 1,
                  }}>
                  {'투석'}
                </Text>
                <View
                  style={{
                    width: 161,
                    alignItems: 'center',
                    backgroundColor: '#F0F5FF',
                    borderRadius: 6,
                    paddingVertical: 10,
                  }}>
                  <Text
                    style={{
                      color: '#597EF7',
                      fontSize: 14,
                      fontWeight: 'bold',
                    }}>
                    {'복약'}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  backgroundColor: '#FAFAFA',
                  borderRadius: 8,
                  paddingVertical: 19,
                  marginHorizontal: 20,
                }}>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 12,
                    fontWeight: 'bold',
                  }}>
                  {'복약 루틴을 등록해보세요.'}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 20,
                marginHorizontal: 40,
              }}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                {'오늘 기록'}
              </Text>
              <View
                style={{
                  width: 63,
                  alignItems: 'center',
                  backgroundColor: '#FFFFFF',
                  borderColor: '#D9D9D9',
                  borderRadius: 4,
                  borderWidth: 1,
                  paddingVertical: 6,
                  shadowColor: '#00000003',
                  shadowOpacity: 0.0,
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                }}>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 14,
                  }}>
                  {'저장하기'}
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 8,
                paddingTop: 13,
                paddingBottom: 59,
                paddingHorizontal: 24,
                marginHorizontal: 20,
              }}>
              <Text
                style={{
                  color: '#8B8B91',
                  fontSize: 14,
                  width: 302,
                }}>
                {
                  '오늘 투석은 어땠나요? 몸 상태와 변화 내용등을 자세하게 기록해보세요.'
                }
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            paddingVertical: 18,
            paddingHorizontal: 45,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 8,
            }}>
            <Image
              source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
              resizeMode={'stretch'}
              style={{
                width: 18,
                height: 18,
              }}
            />
            <Image
              source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
              resizeMode={'stretch'}
              style={{
                width: 18,
                height: 20,
              }}
            />
            <Image
              source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
              resizeMode={'stretch'}
              style={{
                width: 10,
                height: 20,
              }}
            />
            <Image
              source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
              resizeMode={'stretch'}
              style={{
                width: 18,
                height: 20,
              }}
            />
            <Image
              source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
              resizeMode={'stretch'}
              style={{
                width: 18,
                height: 20,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#1677FF',
                fontSize: 12,
                fontWeight: 'bold',
                marginRight: 46,
              }}>
              {'홈'}
            </Text>
            <Text
              style={{
                color: '#8B8B91',
                fontSize: 12,
                fontWeight: 'bold',
                marginRight: 31,
              }}>
              {'나의루틴'}
            </Text>
            <Text
              style={{
                color: '#8B8B91',
                fontSize: 12,
                fontWeight: 'bold',
                marginRight: 31,
              }}>
              {'검사하기'}
            </Text>
            <Text
              style={{
                color: '#8B8B91',
                fontSize: 12,
                fontWeight: 'bold',
                marginRight: 35,
              }}>
              {'병원찾기'}
            </Text>
            <Text
              style={{
                color: '#8B8B91',
                fontSize: 12,
                fontWeight: 'bold',
                flex: 1,
              }}>
              {'내 정보'}
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            paddingHorizontal: 122,
          }}>
          <View
            style={{
              height: 5,
              backgroundColor: '#000000',
              borderRadius: 100,
              marginTop: 21,
            }}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewScreen7;
