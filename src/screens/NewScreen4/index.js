import React from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Text,
  ImageBackground,
} from 'react-native';
export default props => {
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
            marginBottom: 455,
          }}>
          <View
            style={{
              backgroundColor: '#FAFAFA',
              paddingTop: 24,
              paddingBottom: 449,
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
              {'소영님에게 딱 맞는\n식단으로 건강을 챙기세요!'}
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
                height: 1,
                marginBottom: 22,
                marginHorizontal: 30,
              }}></View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 36,
                marginHorizontal: 30,
              }}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginTop: 4,
                  width: 203,
                }}>
                {'소영님 맞춤 칼로리와\n맞춤 영양소 섭취량이에요.'}
              </Text>
              <View
                style={{
                  width: 97,
                  alignSelf: 'flex-start',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: '#FAFAFA',
                  borderRadius: 8,
                  paddingVertical: 15,
                  paddingHorizontal: 20,
                  shadowColor: '#0000001A',
                  shadowOpacity: 0.1,
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  shadowRadius: 10,
                  elevation: 10,
                }}>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  {'전체'}
                </Text>
                <Image
                  source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                  resizeMode={'stretch'}
                  style={{
                    width: 16,
                    height: 9,
                  }}
                />
              </View>
            </View>
            <Text
              style={{
                color: '#C1C1C6',
                fontSize: 14,
                marginBottom: 11,
                marginLeft: 33,
              }}>
              {'일일 목표칼로리'}
            </Text>
            <Text
              style={{
                color: '#000000',
                fontSize: 14,
                fontWeight: 'bold',
                marginBottom: 27,
                marginLeft: 33,
              }}>
              {'1196 kcal'}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 11,
                marginHorizontal: 35,
              }}>
              <Text
                style={{
                  color: '#8B8B91',
                  fontSize: 14,
                  fontWeight: 'bold',
                }}>
                {'칼로리'}
              </Text>
              <Text
                style={{
                  color: '#8B8B91',
                  fontSize: 14,
                }}>
                {'450 / 1500 kcal'}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 3,
                marginHorizontal: 36,
              }}>
              <View
                style={{
                  width: 1,
                  height: 20,
                  backgroundColor: '#FFFFFF',
                  marginRight: 89,
                }}></View>
              <View
                style={{
                  width: 1,
                  height: 20,
                  backgroundColor: '#FFFFFF',
                }}></View>
              <View
                style={{
                  flex: 1,
                  alignSelf: 'stretch',
                }}></View>
              <Image
                source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                resizeMode={'stretch'}
                style={{
                  width: 16,
                  height: 9,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 22,
                marginHorizontal: 110,
              }}>
              <Text
                style={{
                  color: '#8B8B91',
                  fontSize: 14,
                  marginRight: 4,
                  flex: 1,
                }}>
                {'500'}
              </Text>
              <Text
                style={{
                  color: '#8B8B91',
                  fontSize: 14,
                }}>
                {'1000'}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 11,
                marginHorizontal: 35,
              }}>
              <Text
                style={{
                  color: '#8B8B91',
                  fontSize: 14,
                  fontWeight: 'bold',
                }}>
                {'단백질'}
              </Text>
              <Text
                style={{
                  color: '#8B8B91',
                  fontSize: 14,
                }}>
                {'30 / 60 g'}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 3,
                marginHorizontal: 36,
              }}>
              <View
                style={{
                  width: 1,
                  height: 20,
                  backgroundColor: '#FFFFFF',
                  marginRight: 89,
                }}></View>
              <View
                style={{
                  width: 1,
                  height: 20,
                  backgroundColor: '#FFFFFF',
                }}></View>
              <View
                style={{
                  flex: 1,
                  alignSelf: 'stretch',
                }}></View>
              <Image
                source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                resizeMode={'stretch'}
                style={{
                  width: 16,
                  height: 9,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 10,
                marginHorizontal: 114,
              }}>
              <Text
                style={{
                  color: '#8B8B91',
                  fontSize: 14,
                  marginRight: 4,
                  flex: 1,
                }}>
                {'30'}
              </Text>
              <Text
                style={{
                  color: '#8B8B91',
                  fontSize: 14,
                }}>
                {'60'}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 20,
                paddingVertical: 30,
                paddingHorizontal: 27,
                marginBottom: 22,
                marginHorizontal: 30,
                shadowColor: '#00000026',
                shadowOpacity: 0.2,
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowRadius: 10,
                elevation: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 20,
                }}>
                <View
                  style={{
                    width: 24,
                    alignItems: 'center',
                    backgroundColor: '#E8E8EC',
                    borderRadius: 9999,
                    paddingVertical: 8,
                    marginRight: 12,
                  }}>
                  <Text
                    style={{
                      color: '#8B8B91',
                      fontSize: 14,
                      fontWeight: 'bold',
                    }}>
                    {'1'}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    marginRight: 4,
                  }}>
                  <Text
                    style={{
                      color: '#000000',
                      fontSize: 14,
                      fontWeight: 'bold',
                      marginBottom: 4,
                    }}>
                    {'닭가슴살 소시지 청양고추'}
                  </Text>
                  <Text
                    style={{
                      color: '#C1C1C6',
                      fontSize: 14,
                    }}>
                    {'CJ'}
                  </Text>
                </View>
                <View
                  style={{
                    width: 32,
                  }}>
                  <View
                    style={{
                      alignItems: 'center',
                      backgroundColor: '#E8E8EC',
                      borderRadius: 4,
                      paddingVertical: 5,
                      marginBottom: 7,
                      marginHorizontal: 2,
                    }}>
                    <Text
                      style={{
                        color: '#8B8B91',
                        fontSize: 10,
                        fontWeight: 'bold',
                      }}>
                      {'1회'}
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: '#000000',
                      fontSize: 12,
                      fontWeight: 'bold',
                    }}>
                    {'총 12g'}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 14,
                }}>
                <View
                  style={{
                    width: 24,
                    alignItems: 'center',
                    backgroundColor: '#E8E8EC',
                    borderRadius: 9999,
                    paddingVertical: 7,
                    marginRight: 12,
                  }}>
                  <Text
                    style={{
                      color: '#8B8B91',
                      fontSize: 14,
                      fontWeight: 'bold',
                    }}>
                    {'2'}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    marginRight: 4,
                  }}>
                  <Text
                    style={{
                      color: '#000000',
                      fontSize: 14,
                      fontWeight: 'bold',
                      marginBottom: 10,
                    }}>
                    {'크림 파스타'}
                  </Text>
                  <Text
                    style={{
                      color: '#C1C1C6',
                      fontSize: 14,
                    }}>
                    {'-'}
                  </Text>
                </View>
                <View
                  style={{
                    width: 37,
                  }}>
                  <View
                    style={{
                      alignItems: 'center',
                      backgroundColor: '#E8E8EC',
                      borderRadius: 4,
                      paddingVertical: 5,
                      marginBottom: 7,
                      marginHorizontal: 5,
                    }}>
                    <Text
                      style={{
                        color: '#8B8B91',
                        fontSize: 10,
                        fontWeight: 'bold',
                      }}>
                      {'1회'}
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: '#000000',
                      fontSize: 12,
                      fontWeight: 'bold',
                    }}>
                    {'총 9.4g'}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 20,
                }}>
                <View
                  style={{
                    width: 24,
                    alignItems: 'center',
                    backgroundColor: '#E8E8EC',
                    borderRadius: 9999,
                    paddingVertical: 7,
                    marginRight: 12,
                  }}>
                  <Text
                    style={{
                      color: '#8B8B91',
                      fontSize: 14,
                      fontWeight: 'bold',
                    }}>
                    {'3'}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    marginRight: 4,
                  }}>
                  <Text
                    style={{
                      color: '#000000',
                      fontSize: 14,
                      fontWeight: 'bold',
                      marginBottom: 3,
                    }}>
                    {'감동란'}
                  </Text>
                  <Text
                    style={{
                      color: '#C1C1C6',
                      fontSize: 14,
                    }}>
                    {'감동란'}
                  </Text>
                </View>
                <View
                  style={{
                    width: 27,
                  }}>
                  <View
                    style={{
                      alignItems: 'center',
                      backgroundColor: '#E8E8EC',
                      borderRadius: 4,
                      paddingVertical: 5,
                      marginBottom: 7,
                    }}>
                    <Text
                      style={{
                        color: '#8B8B91',
                        fontSize: 10,
                        fontWeight: 'bold',
                      }}>
                      {'1회'}
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: '#000000',
                      fontSize: 12,
                      fontWeight: 'bold',
                    }}>
                    {'총 6g'}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 20,
                }}>
                <View
                  style={{
                    width: 24,
                    alignItems: 'center',
                    backgroundColor: '#E8E8EC',
                    borderRadius: 9999,
                    paddingVertical: 8,
                    marginRight: 12,
                  }}>
                  <Text
                    style={{
                      color: '#8B8B91',
                      fontSize: 14,
                      fontWeight: 'bold',
                    }}>
                    {'4'}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    marginRight: 4,
                  }}>
                  <Text
                    style={{
                      color: '#000000',
                      fontSize: 14,
                      fontWeight: 'bold',
                      marginBottom: 3,
                    }}>
                    {'컵누들 로제맛'}
                  </Text>
                  <Text
                    style={{
                      color: '#C1C1C6',
                      fontSize: 14,
                    }}>
                    {'오뚜기'}
                  </Text>
                </View>
                <View
                  style={{
                    width: 26,
                  }}>
                  <View
                    style={{
                      alignItems: 'center',
                      backgroundColor: '#E8E8EC',
                      borderRadius: 4,
                      paddingVertical: 5,
                      marginBottom: 7,
                    }}>
                    <Text
                      style={{
                        color: '#8B8B91',
                        fontSize: 10,
                        fontWeight: 'bold',
                      }}>
                      {'1회'}
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: '#000000',
                      fontSize: 12,
                      fontWeight: 'bold',
                    }}>
                    {'총 1g'}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: 24,
                    alignItems: 'center',
                    backgroundColor: '#E8E8EC',
                    borderRadius: 9999,
                    paddingVertical: 8,
                    marginRight: 12,
                  }}>
                  <Text
                    style={{
                      color: '#8B8B91',
                      fontSize: 14,
                      fontWeight: 'bold',
                    }}>
                    {'5'}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    marginRight: 4,
                  }}>
                  <Text
                    style={{
                      color: '#000000',
                      fontSize: 14,
                      fontWeight: 'bold',
                      marginBottom: 3,
                    }}>
                    {'마시멜로 핫 초콜릿'}
                  </Text>
                  <Text
                    style={{
                      color: '#C1C1C6',
                      fontSize: 14,
                    }}>
                    {'스위스미스'}
                  </Text>
                </View>
                <View
                  style={{
                    width: 26,
                  }}>
                  <View
                    style={{
                      alignItems: 'center',
                      backgroundColor: '#E8E8EC',
                      borderRadius: 4,
                      paddingVertical: 5,
                      marginBottom: 7,
                    }}>
                    <Text
                      style={{
                        color: '#8B8B91',
                        fontSize: 10,
                        fontWeight: 'bold',
                      }}>
                      {'1회'}
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: '#000000',
                      fontSize: 12,
                      fontWeight: 'bold',
                    }}>
                    {'총 1g'}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 11,
                marginHorizontal: 35,
              }}>
              <Text
                style={{
                  color: '#8B8B91',
                  fontSize: 14,
                  fontWeight: 'bold',
                }}>
                {'나트륨'}
              </Text>
              <Text
                style={{
                  color: '#8B8B91',
                  fontSize: 14,
                }}>
                {'1200 / 2000 mg'}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 3,
                marginHorizontal: 36,
              }}>
              <View
                style={{
                  width: 1,
                  height: 20,
                  backgroundColor: '#FFFFFF',
                  marginRight: 89,
                }}></View>
              <View
                style={{
                  width: 1,
                  height: 20,
                  backgroundColor: '#FFFFFF',
                }}></View>
              <View
                style={{
                  flex: 1,
                  alignSelf: 'stretch',
                }}></View>
              <Image
                source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                resizeMode={'stretch'}
                style={{
                  width: 16,
                  height: 9,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 22,
                marginHorizontal: 110,
              }}>
              <Text
                style={{
                  color: '#8B8B91',
                  fontSize: 14,
                  marginRight: 4,
                  flex: 1,
                }}>
                {'500'}
              </Text>
              <Text
                style={{
                  color: '#8B8B91',
                  fontSize: 14,
                }}>
                {'1000'}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 11,
                marginHorizontal: 35,
              }}>
              <Text
                style={{
                  color: '#8B8B91',
                  fontSize: 14,
                  fontWeight: 'bold',
                }}>
                {'인'}
              </Text>
              <Text
                style={{
                  color: '#8B8B91',
                  fontSize: 14,
                }}>
                {'200 / 1000 mg'}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 3,
                marginHorizontal: 36,
              }}>
              <View
                style={{
                  width: 1,
                  height: 20,
                  backgroundColor: '#FFFFFF',
                  marginRight: 89,
                }}></View>
              <View
                style={{
                  width: 1,
                  height: 20,
                  backgroundColor: '#FFFFFF',
                }}></View>
              <View
                style={{
                  flex: 1,
                  alignSelf: 'stretch',
                }}></View>
              <Image
                source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                resizeMode={'stretch'}
                style={{
                  width: 16,
                  height: 9,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 22,
                marginHorizontal: 110,
              }}>
              <Text
                style={{
                  color: '#8B8B91',
                  fontSize: 14,
                  marginRight: 4,
                  flex: 1,
                }}>
                {'500'}
              </Text>
              <Text
                style={{
                  color: '#8B8B91',
                  fontSize: 14,
                }}>
                {'1000'}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 11,
                marginHorizontal: 35,
              }}>
              <Text
                style={{
                  color: '#8B8B91',
                  fontSize: 14,
                  fontWeight: 'bold',
                }}>
                {'칼륨'}
              </Text>
              <Text
                style={{
                  color: '#8B8B91',
                  fontSize: 14,
                }}>
                {'600 / 2000 mg'}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 3,
                marginHorizontal: 36,
              }}>
              <View
                style={{
                  width: 1,
                  height: 20,
                  backgroundColor: '#FFFFFF',
                  marginRight: 89,
                }}></View>
              <View
                style={{
                  width: 1,
                  height: 20,
                  backgroundColor: '#FFFFFF',
                }}></View>
              <View
                style={{
                  flex: 1,
                  alignSelf: 'stretch',
                }}></View>
              <Image
                source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                resizeMode={'stretch'}
                style={{
                  width: 16,
                  height: 9,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 110,
              }}>
              <Text
                style={{
                  color: '#8B8B91',
                  fontSize: 14,
                  marginRight: 4,
                  flex: 1,
                }}>
                {'500'}
              </Text>
              <Text
                style={{
                  color: '#8B8B91',
                  fontSize: 14,
                }}>
                {'1000'}
              </Text>
            </View>
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: -455,
              right: 0,
              left: 0,
              height: 884,
              backgroundColor: '#FAFAFA',
              paddingHorizontal: 24,
            }}>
            <View
              style={{
                height: 1,
                marginBottom: 19,
              }}></View>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 8,
                paddingVertical: 12,
                paddingHorizontal: 24,
                marginBottom: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 14,
                }}>
                <View
                  style={{
                    width: 20,
                    marginRight: 10,
                  }}>
                  <Image
                    source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                    resizeMode={'stretch'}
                    style={{
                      height: 13,
                    }}
                  />
                  <Image
                    source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                    resizeMode={'stretch'}
                    style={{
                      position: 'absolute',
                      bottom: -1,
                      left: 5,
                      width: 10,
                      height: 1,
                    }}
                  />
                </View>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 12,
                    fontWeight: 'bold',
                  }}>
                  {'아침'}
                </Text>
                <View
                  style={{
                    flex: 1,
                    alignSelf: 'stretch',
                  }}></View>
                <View
                  style={{
                    width: 24,
                    backgroundColor: '#4096FF',
                    borderRadius: 9999,
                    paddingHorizontal: 7,
                  }}>
                  <Image
                    source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                    resizeMode={'stretch'}
                    style={{
                      height: 9,
                      marginTop: 8,
                    }}
                  />
                </View>
              </View>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 12,
                  marginBottom: 12,
                }}>
                {'오전 08:30'}
              </Text>
              <View
                style={{
                  backgroundColor: '#FAFAFA',
                  borderRadius: 8,
                  paddingVertical: 12,
                  paddingHorizontal: 24,
                  marginBottom: 12,
                }}>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 12,
                    fontWeight: 'bold',
                    marginBottom: 6,
                  }}>
                  {'마시멜로 핫 초콜릿'}
                </Text>
                <Text
                  style={{
                    color: '#8B8B91',
                    fontSize: 12,
                  }}>
                  {'스위스미스 1인분 (28g)'}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: '#FAFAFA',
                  borderRadius: 8,
                  paddingVertical: 12,
                  paddingHorizontal: 24,
                  marginBottom: 12,
                }}>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 12,
                    fontWeight: 'bold',
                    marginBottom: 6,
                  }}>
                  {'콤부차 유자'}
                </Text>
                <Text
                  style={{
                    color: '#8B8B91',
                    fontSize: 12,
                  }}>
                  {'티젠 1인분 (5g)'}
                </Text>
              </View>
              <View
                style={{
                  height: 1,
                  backgroundColor: '#E8E8EC',
                }}></View>
            </View>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 8,
                paddingVertical: 12,
                paddingHorizontal: 24,
                marginBottom: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 14,
                }}>
                <ImageBackground
                  source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                  resizeMode={'stretch'}
                  style={{
                    width: 18,
                    height: 18,
                    marginRight: 12,
                  }}></ImageBackground>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 12,
                    fontWeight: 'bold',
                  }}>
                  {'점심'}
                </Text>
                <View
                  style={{
                    flex: 1,
                    alignSelf: 'stretch',
                  }}></View>
                <View
                  style={{
                    width: 24,
                    backgroundColor: '#4096FF',
                    borderRadius: 9999,
                    paddingHorizontal: 7,
                  }}>
                  <Image
                    source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                    resizeMode={'stretch'}
                    style={{
                      height: 9,
                      marginTop: 8,
                    }}
                  />
                </View>
              </View>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 12,
                  marginBottom: 12,
                }}>
                {'오후 1:30'}
              </Text>
              <View
                style={{
                  backgroundColor: '#FAFAFA',
                  borderRadius: 8,
                  paddingVertical: 12,
                  paddingHorizontal: 24,
                  marginBottom: 8,
                }}>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 12,
                    fontWeight: 'bold',
                    marginBottom: 6,
                  }}>
                  {'닭가슴살 소시지 청양고추'}
                </Text>
                <Text
                  style={{
                    color: '#8B8B91',
                    fontSize: 12,
                  }}>
                  {'CJ 1인분 (80g)'}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: '#FAFAFA',
                  borderRadius: 8,
                  paddingVertical: 12,
                  paddingHorizontal: 24,
                  marginBottom: 12,
                }}>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 12,
                    fontWeight: 'bold',
                    marginBottom: 6,
                  }}>
                  {'감동란'}
                </Text>
                <Text
                  style={{
                    color: '#8B8B91',
                    fontSize: 12,
                  }}>
                  {'감동란 1인분 (50g)'}
                </Text>
              </View>
              <View
                style={{
                  height: 1,
                  backgroundColor: '#E8E8EC',
                  marginBottom: 13,
                }}></View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 12,
                    fontWeight: 'bold',
                    marginRight: 10,
                  }}>
                  {'메모'}
                </Text>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 12,
                    flex: 1,
                  }}>
                  {'라떼는 잘 안맞는 것 같다. 주의하기'}
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 8,
                paddingVertical: 12,
                paddingHorizontal: 24,
                marginBottom: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 14,
                }}>
                <Image
                  source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                  resizeMode={'stretch'}
                  style={{
                    width: 21,
                    height: 20,
                    marginRight: 10,
                  }}
                />
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 12,
                    fontWeight: 'bold',
                  }}>
                  {'저녁'}
                </Text>
                <View
                  style={{
                    flex: 1,
                    alignSelf: 'stretch',
                  }}></View>
                <View
                  style={{
                    width: 24,
                    backgroundColor: '#4096FF',
                    borderRadius: 9999,
                    paddingHorizontal: 7,
                  }}>
                  <Image
                    source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                    resizeMode={'stretch'}
                    style={{
                      height: 9,
                      marginTop: 8,
                    }}
                  />
                </View>
              </View>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 12,
                  marginBottom: 12,
                }}>
                {'오후 7:30'}
              </Text>
              <View
                style={{
                  backgroundColor: '#FAFAFA',
                  borderRadius: 8,
                  paddingVertical: 12,
                  paddingHorizontal: 24,
                  marginBottom: 12,
                }}>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 12,
                    fontWeight: 'bold',
                    marginBottom: 6,
                  }}>
                  {'크림 파스타'}
                </Text>
                <Text
                  style={{
                    color: '#8B8B91',
                    fontSize: 12,
                  }}>
                  {'1기본량 (100g)'}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: '#FAFAFA',
                  borderRadius: 8,
                  paddingVertical: 12,
                  paddingHorizontal: 24,
                  marginBottom: 12,
                }}>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 12,
                    fontWeight: 'bold',
                    marginBottom: 6,
                  }}>
                  {'콜라'}
                </Text>
                <Text
                  style={{
                    color: '#8B8B91',
                    fontSize: 12,
                  }}>
                  {'코카콜라 1인분 (350ml)'}
                </Text>
              </View>
              <View
                style={{
                  height: 1,
                  backgroundColor: '#E8E8EC',
                }}></View>
            </View>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 8,
                paddingVertical: 12,
                paddingHorizontal: 24,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 14,
                }}>
                <View
                  style={{
                    width: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: 10,
                  }}>
                  <View
                    style={{
                      flex: 1,
                    }}>
                    <ImageBackground
                      source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                      resizeMode={'stretch'}
                      style={{
                        height: 15,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginHorizontal: 3,
                      }}>
                      <View
                        style={{
                          flex: 1,
                        }}>
                        <ImageBackground
                          source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                          resizeMode={'stretch'}
                          style={{
                            height: 5,
                            paddingHorizontal: 1,
                            marginBottom: 1,
                            marginHorizontal: 3,
                          }}>
                          <View
                            style={{
                              height: 2,
                              backgroundColor: '#F4ABBA',
                              marginTop: 1,
                            }}></View>
                        </ImageBackground>
                        <ImageBackground
                          source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                          resizeMode={'stretch'}
                          style={{
                            height: 8,
                          }}>
                          <ImageBackground
                            source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                            resizeMode={'stretch'}
                            style={{
                              height: 7,
                            }}>
                            <Image
                              source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                              resizeMode={'stretch'}
                              style={{
                                height: 2,
                                marginTop: 2,
                              }}
                            />
                          </ImageBackground>
                        </ImageBackground>
                      </View>
                      <Image
                        source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                        resizeMode={'stretch'}
                        style={{
                          position: 'absolute',
                          top: 2,
                          left: 0,
                          width: 11,
                          height: 5,
                        }}
                      />
                      <Image
                        source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                        resizeMode={'stretch'}
                        style={{
                          position: 'absolute',
                          top: 1,
                          right: 0,
                          width: 8,
                          height: 3,
                        }}
                      />
                    </ImageBackground>
                    <ImageBackground
                      source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                      resizeMode={'stretch'}
                      style={{
                        height: 11,
                        paddingHorizontal: 1,
                      }}>
                      <Image
                        source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                        resizeMode={'stretch'}
                        style={{
                          height: 8,
                          marginTop: 1,
                        }}
                      />
                    </ImageBackground>
                    <Image
                      source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                      resizeMode={'stretch'}
                      style={{
                        height: 11,
                      }}
                    />
                  </View>
                </View>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 12,
                    fontWeight: 'bold',
                  }}>
                  {'간식'}
                </Text>
                <View
                  style={{
                    flex: 1,
                    alignSelf: 'stretch',
                  }}></View>
                <View
                  style={{
                    width: 24,
                    backgroundColor: '#4096FF',
                    borderRadius: 9999,
                    paddingHorizontal: 7,
                  }}>
                  <Image
                    source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                    resizeMode={'stretch'}
                    style={{
                      height: 9,
                      marginTop: 8,
                    }}
                  />
                </View>
              </View>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 12,
                  marginBottom: 12,
                }}>
                {'오후 4:30'}
              </Text>
              <View
                style={{
                  backgroundColor: '#FAFAFA',
                  borderRadius: 8,
                  paddingVertical: 12,
                  paddingHorizontal: 24,
                  marginBottom: 12,
                }}>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 12,
                    fontWeight: 'bold',
                    marginBottom: 6,
                  }}>
                  {'컵누들 로제맛'}
                </Text>
                <Text
                  style={{
                    color: '#8B8B91',
                    fontSize: 12,
                  }}>
                  {'오뚜기 1인분 (498g)'}
                </Text>
              </View>
              <View
                style={{
                  height: 1,
                  backgroundColor: '#E8E8EC',
                }}></View>
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
