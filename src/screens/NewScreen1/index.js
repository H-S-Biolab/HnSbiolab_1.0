import React from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Text,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // Install LinearGradient: https://github.com/react-native-linear-gradient/react-native-linear-gradient
const NewScreen1 = props => {
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
        <View style={{}}>
          <LinearGradient
            start={{x: 0.9999999760070958, y: 0.4999999598664151}}
            end={{x: -2.3992896447389e-8, y: 0.5000000000000009}}
            colors={['#ffffff00', '#ffffff']}
            style={{
              width: 249,
              height: 300,
              paddingTop: 36,
              paddingBottom: 85,
              paddingLeft: 33,
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 24,
                fontWeight: 'bold',
                marginBottom: 24,
                width: 216,
              }}>
              {'안녕하세요!\n김소영님'}
            </Text>
            <Text
              style={{
                color: '#000000',
                fontSize: 14,
                marginBottom: 21,
              }}>
              {'예정된 검진일정이 있어요'}
            </Text>
            <View
              style={{
                width: 200,
                height: 48,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#1677FF',
                borderColor: '#1677FF',
                borderRadius: 100,
                borderWidth: 1,
                paddingVertical: 18,
                shadowColor: '#0591FF1A',
                shadowOpacity: 0.1,
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
              }}>
              <Image
                source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                resizeMode={'stretch'}
                style={{
                  width: 13,
                  height: 13,
                  marginRight: 11,
                }}
              />
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 14,
                }}>
                {'진료 예약하기'}
              </Text>
            </View>
          </LinearGradient>
          <Image
            source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
            resizeMode={'stretch'}
            style={{
              width: 300,
              height: 300,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            borderColor: '#E8E8EC',
            borderWidth: 1,
            paddingVertical: 17,
            marginBottom: 51,
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
            marginBottom: 227,
          }}>
          <View
            style={{
              height: 30,
              backgroundColor: '#FFFFFF',
              marginBottom: 119,
            }}></View>
          <View style={{}}>
            <View
              style={{
                backgroundColor: '#FAFAFA',
                paddingTop: 40,
                paddingBottom: 53,
                paddingHorizontal: 30,
              }}>
              <View
                style={{
                  backgroundColor: '#2F3339',
                  borderRadius: 20,
                  paddingTop: 23,
                  paddingBottom: 8,
                  paddingHorizontal: 25,
                  marginBottom: 20,
                  shadowColor: '#0000001A',
                  shadowOpacity: 0.1,
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
                    marginBottom: 37,
                  }}>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontSize: 20,
                      fontWeight: 'bold',
                      marginRight: 4,
                      flex: 1,
                    }}>
                    {'오늘의 혈당'}
                  </Text>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontSize: 14,
                      marginRight: 11,
                    }}>
                    {'오후 6:10'}
                  </Text>
                  <Image
                    source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                    resizeMode={'stretch'}
                    style={{
                      width: 13,
                      height: 12,
                    }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      color: '#FBBF24',
                      fontSize: 24,
                      fontWeight: 'bold',
                      marginTop: 4,
                      marginRight: 8,
                      width: 73,
                    }}>
                    {'48점'}
                  </Text>
                  <Image
                    source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                    resizeMode={'stretch'}
                    style={{
                      borderRadius: 1,
                      width: 18,
                      height: 15,
                      marginRight: 2,
                    }}
                  />
                  <Text
                    style={{
                      color: '#FBBF24',
                      fontSize: 12,
                      fontWeight: 'bold',
                      marginTop: 3,
                    }}>
                    {'10점'}
                  </Text>
                  <View
                    style={{
                      flex: 1,
                    }}></View>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontSize: 14,
                      marginTop: 28,
                    }}>
                    {'혈당 스파이크 : 2회'}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 20,
                  paddingVertical: 27,
                  shadowColor: '#00000024',
                  shadowOpacity: 0.1,
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
                    marginBottom: 14,
                    marginHorizontal: 21,
                  }}>
                  <View
                    style={{
                      width: 65,
                      alignSelf: 'flex-start',
                      alignItems: 'center',
                      backgroundColor: '#FBBF24',
                      borderRadius: 8,
                      paddingVertical: 11,
                      marginTop: 7,
                      marginLeft: 185,
                    }}>
                    <Text
                      style={{
                        color: '#FFFFFF',
                        fontSize: 12,
                        fontWeight: 'bold',
                        marginBottom: 5,
                      }}>
                      {'210 mg/dL'}
                    </Text>
                    <Text
                      style={{
                        color: '#FFFFFF',
                        fontSize: 8,
                      }}>
                      {'오후 6시 15분'}
                    </Text>
                  </View>
                  <View style={{}}>
                    <Image
                      source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                      resizeMode={'stretch'}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: 14,
                        height: 14,
                      }}
                    />
                    <ImageBackground
                      source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                      resizeMode={'stretch'}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: 12,
                        height: 12,
                        paddingHorizontal: 2,
                      }}>
                      <View
                        style={{
                          marginTop: 3,
                        }}>
                        <ImageBackground
                          source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                          resizeMode={'stretch'}
                          style={{
                            height: 4,
                            paddingHorizontal: 1,
                          }}>
                          <ImageBackground
                            source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                            resizeMode={'stretch'}
                            style={{
                              height: 4,
                              paddingHorizontal: 3,
                            }}>
                            <View
                              style={{
                                height: 3,
                                backgroundColor: '#D4D4D4',
                                marginTop: 1,
                              }}></View>
                          </ImageBackground>
                        </ImageBackground>
                        <View style={{}}>
                          <Image
                            source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                            resizeMode={'stretch'}
                            style={{
                              height: 4,
                            }}
                          />
                          <Image
                            source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                            resizeMode={'stretch'}
                            style={{
                              position: 'absolute',
                              top: -1,
                              right: 0,
                              left: 0,
                              height: 3,
                            }}
                          />
                        </View>
                      </View>
                      <View
                        style={{
                          height: 1,
                          backgroundColor: '#77A3AB',
                        }}></View>
                    </ImageBackground>
                  </View>
                  <View
                    style={{
                      width: 286,
                      alignSelf: 'flex-start',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 26,
                      }}>
                      <Text
                        style={{
                          color: '#000000',
                          fontSize: 20,
                          fontWeight: 'bold',
                        }}>
                        {'혈당'}
                      </Text>
                      <View
                        style={{
                          width: 86,
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: 7,
                          }}>
                          <Image
                            source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                            resizeMode={'stretch'}
                            style={{
                              width: 14,
                              height: 1,
                            }}
                          />
                          <Text
                            style={{
                              color: '#000000',
                              fontSize: 12,
                              fontWeight: 'bold',
                            }}>
                            {'정상'}
                          </Text>
                          <Image
                            source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                            resizeMode={'stretch'}
                            style={{
                              width: 14,
                              height: 1,
                            }}
                          />
                          <Text
                            style={{
                              color: '#000000',
                              fontSize: 12,
                              fontWeight: 'bold',
                            }}>
                            {'주의'}
                          </Text>
                        </View>
                        <Text
                          style={{
                            color: '#B4B4B4',
                            fontSize: 8,
                            fontWeight: 'bold',
                          }}>
                          {'공복 99이하, 식후 180이하'}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        width: 260,
                        height: 1,
                        marginBottom: 8,
                      }}></View>
                    <View
                      style={{
                        marginBottom: 8,
                      }}>
                      <ImageBackground
                        source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                        resizeMode={'stretch'}
                        style={{
                          width: 25,
                          height: 25,
                          paddingHorizontal: 7,
                          marginHorizontal: 30,
                        }}>
                        <Image
                          source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                          resizeMode={'stretch'}
                          style={{
                            height: 11,
                            marginTop: 7,
                          }}
                        />
                      </ImageBackground>
                      <View
                        style={{
                          height: 1,
                          borderStyle: 'dashed',
                        }}></View>
                    </View>
                    <View
                      style={{
                        width: 260,
                        height: 1,
                        borderStyle: 'dashed',
                        marginBottom: 20,
                      }}></View>
                    <View
                      style={{
                        width: 260,
                        height: 64,
                      }}>
                      <View
                        style={{
                          backgroundColor: '#1677FF0D',
                        }}>
                        <View
                          style={{
                            height: 1,
                            borderStyle: 'dashed',
                          }}></View>
                        <View style={{}}>
                          <View
                            style={{
                              width: 67,
                              height: 63,
                              borderColor: '#1677FF',
                              borderWidth: 2,
                              marginHorizontal: 14,
                            }}></View>
                          <View
                            style={{
                              height: 1,
                              marginBottom: 20,
                            }}></View>
                          <View
                            style={{
                              height: 1,
                              marginBottom: 20,
                            }}></View>
                          <View
                            style={{
                              height: 1,
                              borderStyle: 'dashed',
                            }}></View>
                        </View>
                      </View>
                      <Image
                        source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                        resizeMode={'stretch'}
                        style={{
                          position: 'absolute',
                          bottom: -5,
                          left: 9,
                          width: 11,
                          height: 11,
                        }}
                      />
                    </View>
                  </View>
                  <View style={{}}>
                    <View
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: 1,
                        height: 27,
                        backgroundColor: '#FBBF24',
                        borderStyle: 'dashed',
                      }}></View>
                    <ImageBackground
                      source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                      resizeMode={'stretch'}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: 137,
                        height: 43,
                        paddingHorizontal: 24,
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginTop: 15,
                        }}>
                        <Image
                          source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                          resizeMode={'stretch'}
                          style={{
                            width: 14,
                            height: 14,
                          }}
                        />
                        <Image
                          source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                          resizeMode={'stretch'}
                          style={{
                            width: 11,
                            height: 11,
                          }}
                        />
                        <ImageBackground
                          source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                          resizeMode={'stretch'}
                          style={{
                            width: 12,
                            height: 12,
                            paddingVertical: 3,
                            paddingHorizontal: 2,
                          }}>
                          <View style={{}}>
                            <ImageBackground
                              source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                              resizeMode={'stretch'}
                              style={{
                                height: 4,
                                paddingHorizontal: 1,
                              }}>
                              <ImageBackground
                                source={{
                                  uri: 'https://i.imgur.com/1tMFzp8.png',
                                }}
                                resizeMode={'stretch'}
                                style={{
                                  height: 4,
                                  paddingHorizontal: 3,
                                }}>
                                <View
                                  style={{
                                    height: 3,
                                    backgroundColor: '#D4D4D4',
                                    marginTop: 1,
                                  }}></View>
                              </ImageBackground>
                            </ImageBackground>
                            <View style={{}}>
                              <Image
                                source={{
                                  uri: 'https://i.imgur.com/1tMFzp8.png',
                                }}
                                resizeMode={'stretch'}
                                style={{
                                  height: 4,
                                }}
                              />
                              <Image
                                source={{
                                  uri: 'https://i.imgur.com/1tMFzp8.png',
                                }}
                                resizeMode={'stretch'}
                                style={{
                                  position: 'absolute',
                                  top: -1,
                                  right: 0,
                                  left: 0,
                                  height: 3,
                                }}
                              />
                            </View>
                          </View>
                          <View
                            style={{
                              height: 1,
                              backgroundColor: '#77A3AB',
                            }}></View>
                        </ImageBackground>
                      </View>
                    </ImageBackground>
                    <Image
                      source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                      resizeMode={'stretch'}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: 11,
                        height: 11,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      width: 17,
                      alignSelf: 'flex-start',
                      marginTop: 50,
                    }}>
                    <Text
                      style={{
                        color: '#D1D1D5',
                        fontSize: 10,
                        fontWeight: 'bold',
                        marginBottom: 32,
                      }}>
                      {'250'}
                    </Text>
                    <Text
                      style={{
                        color: '#D1D1D5',
                        fontSize: 10,
                        fontWeight: 'bold',
                        marginBottom: 32,
                      }}>
                      {'200'}
                    </Text>
                    <Text
                      style={{
                        color: '#D1D1D5',
                        fontSize: 10,
                        fontWeight: 'bold',
                        marginBottom: 32,
                      }}>
                      {'150'}
                    </Text>
                    <Text
                      style={{
                        color: '#D1D1D5',
                        fontSize: 10,
                        fontWeight: 'bold',
                      }}>
                      {'100'}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: 260,
                    height: 1,
                    borderStyle: 'dashed',
                    marginBottom: 18,
                    marginHorizontal: 21,
                  }}></View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 13,
                    marginHorizontal: 21,
                  }}>
                  <View
                    style={{
                      width: 260,
                      height: 1,
                      borderStyle: 'dashed',
                    }}></View>
                  <Text
                    style={{
                      color: '#D1D1D5',
                      fontSize: 10,
                      fontWeight: 'bold',
                    }}>
                    {'50'}
                  </Text>
                </View>
                <View
                  style={{
                    width: 260,
                    height: 1,
                    borderStyle: 'dashed',
                    marginBottom: 17,
                    marginHorizontal: 21,
                  }}></View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 1,
                    marginHorizontal: 21,
                  }}>
                  <View
                    style={{
                      width: 260,
                      height: 1,
                      backgroundColor: '#D3D3D6',
                    }}></View>
                  <Text
                    style={{
                      color: '#D1D1D5',
                      fontSize: 10,
                      fontWeight: 'bold',
                    }}>
                    {'0'}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginHorizontal: 36,
                  }}>
                  <Text
                    style={{
                      color: '#D1D1D5',
                      fontSize: 12,
                      fontWeight: 'bold',
                      marginRight: 4,
                      flex: 1,
                    }}>
                    {'오전 6시'}
                  </Text>
                  <Text
                    style={{
                      color: '#D1D1D5',
                      fontSize: 12,
                      fontWeight: 'bold',
                      marginRight: 55,
                    }}>
                    {'오후12시'}
                  </Text>
                  <Text
                    style={{
                      color: '#D1D1D5',
                      fontSize: 12,
                      fontWeight: 'bold',
                    }}>
                    {'오후6시'}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                position: 'absolute',
                top: -180,
                left: 30,
                width: 330,
                height: 200,
                backgroundColor: '#FFFFFF',
                borderRadius: 20,
                shadowColor: '#00000026',
                shadowOpacity: 0.2,
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
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginTop: 24,
                  marginBottom: 1,
                  marginLeft: 25,
                }}>
                {'오늘은 정기검진 날입니다.'}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: 32,
                  marginHorizontal: 25,
                }}>
                <View
                  style={{
                    flex: 1,
                    alignSelf: 'flex-start',
                    marginTop: 29,
                    marginRight: 4,
                  }}>
                  <Text
                    style={{
                      color: '#000000',
                      fontSize: 14,
                      fontWeight: 'bold',
                      marginBottom: 12,
                    }}>
                    {'장       소  :  연세아이봄여성의원'}
                  </Text>
                  <Text
                    style={{
                      color: '#000000',
                      fontSize: 12.485380172729492,
                    }}>
                    {'예약시간  :  11:00 '}
                  </Text>
                </View>
                <View
                  style={{
                    width: 35,
                    alignSelf: 'flex-start',
                    marginTop: 1,
                    marginRight: 9,
                  }}>
                  <View
                    style={{
                      width: 12,
                      height: 49,
                    }}>
                    <Image
                      source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                      resizeMode={'stretch'}
                      style={{
                        height: 49,
                      }}
                    />
                    <Image
                      source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                      resizeMode={'stretch'}
                      style={{
                        position: 'absolute',
                        bottom: -12,
                        left: 7,
                        width: 31,
                        height: 46,
                      }}
                    />
                  </View>
                  <Image
                    source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                    resizeMode={'stretch'}
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: 29,
                      height: 43,
                    }}
                  />
                </View>
                <ImageBackground
                  source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                  resizeMode={'stretch'}
                  style={{
                    width: 16,
                    height: 16,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 6,
                  }}>
                  <View
                    style={{
                      flex: 1,
                    }}>
                    <Image
                      source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                      resizeMode={'stretch'}
                      style={{
                        height: 14,
                      }}
                    />
                    <ImageBackground
                      source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                      resizeMode={'stretch'}
                      style={{
                        height: 14,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: -12,
                        marginHorizontal: 1,
                      }}>
                      <View
                        style={{
                          flex: 1,
                        }}>
                        <ImageBackground
                          source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                          resizeMode={'stretch'}
                          style={{
                            height: 9,
                            paddingHorizontal: 2,
                          }}>
                          <Image
                            source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                            resizeMode={'stretch'}
                            style={{
                              height: 7,
                            }}
                          />
                        </ImageBackground>
                        <Image
                          source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                          resizeMode={'stretch'}
                          style={{
                            height: 4,
                          }}
                        />
                      </View>
                    </ImageBackground>
                  </View>
                </ImageBackground>
                <ImageBackground
                  source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                  resizeMode={'stretch'}
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 34,
                    width: 18,
                    height: 9,
                    paddingHorizontal: 2,
                  }}>
                  <Image
                    source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                    resizeMode={'stretch'}
                    style={{
                      height: 5,
                      marginTop: 2,
                    }}
                  />
                </ImageBackground>
                <ImageBackground
                  source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                  resizeMode={'stretch'}
                  style={{
                    position: 'absolute',
                    bottom: 17.485380172729492,
                    right: 25,
                    width: 22,
                    height: 21,
                    paddingHorizontal: 1,
                  }}>
                  <Image
                    source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                    resizeMode={'stretch'}
                    style={{
                      height: 10,
                      marginTop: 1,
                    }}
                  />
                </ImageBackground>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginHorizontal: 48,
                }}>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 12.485380172729492,
                    textAlign: 'center',
                    width: 47,
                  }}>
                  {'5\n진료완료'}
                </Text>
                <View
                  style={{
                    width: 1,
                    height: 40,
                    backgroundColor: '#BDBDBD',
                  }}></View>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 12.485380172729492,
                    textAlign: 'center',
                    width: 46,
                  }}>
                  {'1\n진료예정'}
                </Text>
              </View>
            </View>
            <View
              style={{
                position: 'absolute',
                bottom: -207,
                left: 30,
                width: 330,
                height: 240,
                backgroundColor: '#FFFFFF',
                borderRadius: 20,
                shadowColor: '#00000026',
                shadowOpacity: 0.2,
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
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginTop: 28,
                  marginBottom: 26,
                  marginLeft: 18,
                }}>
                {'식단'}
              </Text>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginBottom: 23,
                  marginLeft: 18,
                }}>
                {'1887 kcal'}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 23,
                  marginHorizontal: 18,
                }}>
                <View
                  style={{
                    width: 15,
                    height: 15,
                    backgroundColor: '#1677FF',
                    borderRadius: 2,
                    marginRight: 5,
                  }}></View>
                <Text
                  style={{
                    color: '#5D5D62',
                    fontSize: 12,
                    fontWeight: 'bold',
                    marginRight: 7,
                  }}>
                  {'탄'}
                </Text>
                <Text
                  style={{
                    color: '#5D5D62',
                    fontSize: 12,
                    fontWeight: 'bold',
                    marginRight: 14,
                  }}>
                  {'0/200g'}
                </Text>
                <View
                  style={{
                    width: 15,
                    height: 15,
                    backgroundColor: '#7FB5FF',
                    borderRadius: 2,
                    marginRight: 5,
                  }}></View>
                <Text
                  style={{
                    color: '#5D5D62',
                    fontSize: 12,
                    fontWeight: 'bold',
                    marginRight: 7,
                  }}>
                  {'단'}
                </Text>
                <Text
                  style={{
                    color: '#5D5D62',
                    fontSize: 12,
                    fontWeight: 'bold',
                    marginRight: 14,
                  }}>
                  {'0/200g'}
                </Text>
                <View
                  style={{
                    width: 15,
                    height: 15,
                    backgroundColor: '#8CF1FF',
                    borderRadius: 2,
                    marginRight: 5,
                  }}></View>
                <Text
                  style={{
                    color: '#5D5D62',
                    fontSize: 12,
                    fontWeight: 'bold',
                    marginRight: 7,
                  }}>
                  {'지'}
                </Text>
                <Text
                  style={{
                    color: '#5D5D62',
                    fontSize: 12,
                    fontWeight: 'bold',
                    flex: 1,
                  }}>
                  {'0/200g'}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 7,
                  marginHorizontal: 18,
                }}>
                <Image
                  source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                  resizeMode={'stretch'}
                  style={{
                    borderRadius: 5,
                    width: 50,
                    height: 50,
                    marginRight: 18,
                  }}
                />
                <Image
                  source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                  resizeMode={'stretch'}
                  style={{
                    borderRadius: 5,
                    width: 50,
                    height: 50,
                    marginRight: 18,
                  }}
                />
                <Image
                  source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                  resizeMode={'stretch'}
                  style={{
                    borderRadius: 5,
                    width: 50,
                    height: 50,
                    marginRight: 18,
                  }}
                />
                <View
                  style={{
                    width: 50,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#F6F6F9',
                    borderRadius: 5,
                    paddingVertical: 5,
                  }}>
                  <View
                    style={{
                      flex: 1,
                    }}>
                    <Image
                      source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                      resizeMode={'stretch'}
                      style={{
                        width: 10,
                        height: 10,
                      }}
                    />
                    <ImageBackground
                      source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                      resizeMode={'stretch'}
                      style={{
                        height: 18,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginHorizontal: 5,
                      }}>
                      <View
                        style={{
                          flex: 1,
                        }}>
                        <ImageBackground
                          source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                          resizeMode={'stretch'}
                          style={{
                            height: 6,
                            paddingHorizontal: 1,
                            marginBottom: 1,
                            marginHorizontal: 4,
                          }}>
                          <View
                            style={{
                              height: 3,
                              backgroundColor: '#F4ABBA',
                              marginTop: 2,
                            }}></View>
                        </ImageBackground>
                        <ImageBackground
                          source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                          resizeMode={'stretch'}
                          style={{
                            height: 10,
                          }}>
                          <View style={{}}>
                            <Image
                              source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                              resizeMode={'stretch'}
                              style={{
                                height: 9,
                              }}
                            />
                            <Image
                              source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                              resizeMode={'stretch'}
                              style={{
                                position: 'absolute',
                                top: 3,
                                left: 0,
                                width: 14,
                                height: 3,
                              }}
                            />
                          </View>
                        </ImageBackground>
                      </View>
                      <Image
                        source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                        resizeMode={'stretch'}
                        style={{
                          position: 'absolute',
                          top: 3,
                          left: 0,
                          width: 13,
                          height: 6,
                        }}
                      />
                      <Image
                        source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                        resizeMode={'stretch'}
                        style={{
                          position: 'absolute',
                          top: 1,
                          right: 0,
                          width: 9,
                          height: 4,
                        }}
                      />
                    </ImageBackground>
                    <ImageBackground
                      source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                      resizeMode={'stretch'}
                      style={{
                        height: 13,
                        paddingHorizontal: 2,
                      }}>
                      <Image
                        source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                        resizeMode={'stretch'}
                        style={{
                          height: 10,
                          marginTop: 1,
                        }}
                      />
                    </ImageBackground>
                    <Image
                      source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                      resizeMode={'stretch'}
                      style={{
                        height: 13,
                      }}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginHorizontal: 33,
                }}>
                <Text
                  style={{
                    color: '#B9B9BE',
                    fontSize: 12,
                  }}>
                  {'아침'}
                </Text>
                <Text
                  style={{
                    color: '#B9B9BE',
                    fontSize: 12,
                  }}>
                  {'점심'}
                </Text>
                <Text
                  style={{
                    color: '#B9B9BE',
                    fontSize: 12,
                  }}>
                  {'저녁'}
                </Text>
                <Text
                  style={{
                    color: '#B9B9BE',
                    fontSize: 12,
                  }}>
                  {'간식'}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            marginBottom: 20,
            marginHorizontal: 25,
          }}>
          <ImageBackground
            source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
            resizeMode={'stretch'}
            imageStyle={{borderRadius: 20}}
            style={{
              height: 290,
              paddingVertical: 28,
              marginHorizontal: 5,
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 18,
                marginLeft: 18,
              }}>
              {'수분'}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 9,
                marginHorizontal: 65,
              }}>
              <ImageBackground
                source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                resizeMode={'stretch'}
                style={{
                  width: 30,
                  height: 30,
                  paddingHorizontal: 6,
                }}>
                <Image
                  source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                  resizeMode={'stretch'}
                  style={{
                    height: 1,
                    marginTop: 15,
                  }}
                />
              </ImageBackground>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                {'800 ml'}
              </Text>
              <ImageBackground
                source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                resizeMode={'stretch'}
                style={{
                  width: 30,
                  height: 30,
                  paddingHorizontal: 5,
                }}>
                <Image
                  source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                  resizeMode={'stretch'}
                  style={{
                    height: 20,
                    marginTop: 6,
                  }}
                />
              </ImageBackground>
            </View>
            <Text
              style={{
                color: '#B9B9BE',
                fontSize: 10,
                fontWeight: 'bold',
                marginBottom: 24,
                marginLeft: 125,
              }}>
              {'목표수분량 1250 ml'}
            </Text>
            <Image
              source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
              resizeMode={'stretch'}
              style={{
                width: 50,
                height: 1,
                marginBottom: 24,
              }}
            />
            <Image
              source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
              resizeMode={'stretch'}
              style={{
                width: 25,
                height: 1,
                marginBottom: 24,
              }}
            />
            <Image
              source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
              resizeMode={'stretch'}
              style={{
                width: 50,
                height: 1,
                marginBottom: 24,
              }}
            />
            <Image
              source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
              resizeMode={'stretch'}
              style={{
                width: 25,
                height: 1,
                marginBottom: 24,
              }}
            />
            <Image
              source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
              resizeMode={'stretch'}
              style={{
                width: 50,
                height: 1,
                marginBottom: 24,
              }}
            />
            <Image
              source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
              resizeMode={'stretch'}
              style={{
                width: 25,
                height: 1,
              }}
            />
          </ImageBackground>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              left: 0,
              height: 126,
              backgroundColor: '#FFE5E5',
              borderColor: '#FF8E8E',
              borderWidth: 2,
              borderStyle: 'dashed',
            }}></View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 20,
            marginHorizontal: 30,
          }}>
          <View
            style={{
              width: 160,
              backgroundColor: '#FFFFFF',
              borderRadius: 20,
              paddingTop: 28,
              paddingBottom: 14,
              shadowColor: '#00000026',
              shadowOpacity: 0.2,
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
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 18,
                marginLeft: 18,
              }}>
              {'체중'}
            </Text>
            <Text
              style={{
                color: '#000000',
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 8,
                marginLeft: 49,
              }}>
              {'57.2 kg'}
            </Text>
            <Image
              source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
              resizeMode={'stretch'}
              style={{
                height: 35,
                marginBottom: 7,
                marginHorizontal: 30,
              }}
            />
            <Text
              style={{
                color: '#B9B9BE',
                fontSize: 10,
                fontWeight: 'bold',
                marginLeft: 47,
              }}>
              {'목표체중 52 kg'}
            </Text>
          </View>
          <View
            style={{
              width: 160,
              backgroundColor: '#FFFFFF',
              borderRadius: 20,
              paddingTop: 28,
              paddingBottom: 12,
              shadowColor: '#00000026',
              shadowOpacity: 0.2,
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
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 18,
                marginLeft: 18,
              }}>
              {'운동'}
            </Text>
            <Text
              style={{
                color: '#000000',
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 7,
                marginLeft: 41,
              }}>
              {'8235 걸음'}
            </Text>
            <Image
              source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
              resizeMode={'stretch'}
              style={{
                height: 35,
                marginBottom: 10,
                marginHorizontal: 68,
              }}
            />
            <Text
              style={{
                color: '#B9B9BE',
                fontSize: 10,
                marginLeft: 33,
              }}>
              {'목표걸음수 10000 걸음'}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginBottom: 20,
            marginHorizontal: 30,
          }}>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 20,
              paddingTop: 28,
              paddingBottom: 14,
              paddingHorizontal: 18,
              shadowColor: '#00000026',
              shadowOpacity: 0.2,
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
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 21,
              }}>
              {'복약'}
            </Text>
            <Text
              style={{
                color: '#1677FF',
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 11,
              }}>
              {'80%  섭취완료'}
            </Text>
            <View
              style={{
                backgroundColor: '#F6F6F9',
                borderRadius: 20,
                marginBottom: 12,
              }}>
              <LinearGradient
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}
                colors={['#1575fb', '#0d489b']}
                style={{
                  width: 220,
                  height: 25,
                  borderRadius: 20,
                }}></LinearGradient>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#F0F5FF',
                borderRadius: 20,
                paddingVertical: 10,
                paddingHorizontal: 18,
              }}>
              <View
                style={{
                  flex: 1,
                  marginRight: 4,
                }}>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 12,
                    fontWeight: 'bold',
                    marginBottom: 6,
                  }}>
                  {'락토핏 플러스 듀얼바이오틱스'}
                </Text>
                <Text
                  style={{
                    color: '#B9B9BE',
                    fontSize: 10,
                  }}>
                  {'오후 8:00'}
                </Text>
              </View>
              <Image
                source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                resizeMode={'stretch'}
                style={{
                  width: 25,
                  height: 25,
                }}
              />
            </View>
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: -10,
              right: -10,
              width: 59,
              height: 59,
              backgroundColor: '#1677FF',
              borderRadius: 12665,
              paddingHorizontal: 19,
            }}>
            <Image
              source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
              resizeMode={'stretch'}
              style={{
                height: 21,
                marginTop: 19,
              }}
            />
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

export default NewScreen1;
