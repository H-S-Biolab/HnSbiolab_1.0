import React from 'react';
import {SafeAreaView, View, ScrollView, Image, Text} from 'react-native';
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
            backgroundColor: '#FAFAFA',
            paddingVertical: 20,
            paddingHorizontal: 30,
          }}>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 20,
              paddingVertical: 28,
              marginBottom: 20,
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
                marginBottom: 35,
                marginLeft: 18,
              }}>
              {'수분 섭취량'}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 12,
                marginHorizontal: 27,
              }}>
              <View
                style={{
                  width: 24,
                  alignSelf: 'flex-start',
                  backgroundColor: '#D9D9D9',
                  borderRadius: 9999,
                  paddingHorizontal: 6,
                  marginTop: 11,
                  marginRight: 7,
                }}>
                <Image
                  source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                  resizeMode={'stretch'}
                  style={{
                    height: 1,
                    marginTop: 12,
                  }}
                />
              </View>
              <Image
                source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                resizeMode={'stretch'}
                style={{
                  width: 42,
                  height: 49,
                  marginRight: 10,
                }}
              />
              <View
                style={{
                  width: 24,
                  alignSelf: 'flex-start',
                  backgroundColor: '#D9D9D9',
                  borderRadius: 9999,
                  paddingHorizontal: 7,
                  marginTop: 11,
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
              <View
                style={{
                  flex: 1,
                }}></View>
              <Text
                style={{
                  color: '#8B8B91',
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginTop: 19,
                  marginRight: 23,
                }}>
                {'650 ml'}
              </Text>
              <View
                style={{
                  width: 20,
                  alignSelf: 'flex-start',
                  backgroundColor: '#E8E8EC',
                  borderRadius: 4,
                  paddingHorizontal: 5,
                  marginTop: 20,
                }}>
                <Image
                  source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                  resizeMode={'stretch'}
                  style={{
                    height: 9,
                    marginTop: 6,
                  }}
                />
              </View>
            </View>
            <Text
              style={{
                color: '#8B8B91',
                fontSize: 16,
                fontWeight: 'bold',
                marginBottom: 22,
                marginLeft: 59,
              }}>
              {'50 ml'}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 17,
                marginHorizontal: 27,
              }}>
              <View
                style={{
                  width: 24,
                  backgroundColor: '#D9D9D9',
                  borderRadius: 9999,
                  paddingHorizontal: 6,
                  marginRight: 11,
                }}>
                <Image
                  source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                  resizeMode={'stretch'}
                  style={{
                    height: 1,
                    marginTop: 12,
                  }}
                />
              </View>
              <Image
                source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                resizeMode={'stretch'}
                style={{
                  width: 34,
                  height: 43,
                  marginRight: 14,
                }}
              />
              <View
                style={{
                  width: 24,
                  backgroundColor: '#D9D9D9',
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
              <View
                style={{
                  flex: 1,
                  alignSelf: 'stretch',
                }}></View>
              <Text
                style={{
                  color: '#8B8B91',
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginRight: 22,
                }}>
                {'450 ml'}
              </Text>
              <View
                style={{
                  width: 20,
                  backgroundColor: '#E8E8EC',
                  borderRadius: 4,
                  paddingHorizontal: 5,
                }}>
                <Image
                  source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                  resizeMode={'stretch'}
                  style={{
                    height: 9,
                    marginTop: 6,
                  }}
                />
              </View>
            </View>
            <Text
              style={{
                color: '#8B8B91',
                fontSize: 16,
                fontWeight: 'bold',
                marginBottom: 18,
                marginLeft: 59,
              }}>
              {'50 ml'}
            </Text>
            <View
              style={{
                height: 1,
                marginBottom: 11,
                marginHorizontal: 27,
              }}></View>
            <Text
              style={{
                color: '#8B8B91',
                fontSize: 10,
                marginBottom: 14,
                marginLeft: 33,
              }}>
              {'※ 투석환자 수분섭취량  :  전 날 소변량 + 500 ml'}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 27,
              }}>
              <Text
                style={{
                  color: '#8B8B91',
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginRight: 6,
                }}>
                {'목표 수분량'}
              </Text>
              <Image
                source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                resizeMode={'stretch'}
                style={{
                  width: 15,
                  height: 15,
                }}
              />
              <View
                style={{
                  flex: 1,
                  alignSelf: 'stretch',
                }}></View>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginRight: 21,
                }}>
                {'1,250 ml'}
              </Text>
              <View
                style={{
                  width: 20,
                  backgroundColor: '#E8E8EC',
                  borderRadius: 4,
                  paddingHorizontal: 5,
                }}>
                <Image
                  source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                  resizeMode={'stretch'}
                  style={{
                    height: 9,
                    marginTop: 6,
                  }}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 25,
              paddingBottom: 29,
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
                backgroundColor: '#FFFFFF',
                borderRadius: 25,
                paddingVertical: 8,
                paddingHorizontal: 10,
              }}>
              <View
                style={{
                  width: 103,
                  alignItems: 'center',
                  backgroundColor: '#F0F5FF',
                  borderRadius: 25,
                  paddingVertical: 10,
                  marginRight: 39,
                }}>
                <Text
                  style={{
                    color: '#597EF7',
                    fontSize: 14,
                    fontWeight: 'bold',
                  }}>
                  {'일간'}
                </Text>
              </View>
              <Text
                style={{
                  color: '#B9B9BE',
                  fontSize: 14,
                  fontWeight: 'bold',
                }}>
                {'주간'}
              </Text>
              <View
                style={{
                  flex: 1,
                  alignSelf: 'stretch',
                }}></View>
              <Text
                style={{
                  color: '#B9B9BE',
                  fontSize: 14,
                  fontWeight: 'bold',
                }}>
                {'월간'}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 25,
                paddingVertical: 20,
                paddingHorizontal: 24,
                marginBottom: 23,
              }}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                {'일일 수분량 그래프'}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 1,
                marginHorizontal: 16,
              }}>
              <View
                style={{
                  flex: 1,
                  alignSelf: 'flex-start',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 3,
                  marginRight: 4,
                }}>
                <View
                  style={{
                    flex: 1,
                  }}>
                  <View
                    style={{
                      height: 1,
                    }}></View>
                  <View
                    style={{
                      width: 45,
                      height: 35,
                      alignItems: 'center',
                      backgroundColor: '#1677FF',
                      borderRadius: 8,
                      paddingVertical: 8,
                      marginHorizontal: 1,
                    }}>
                    <Text
                      style={{
                        color: '#FFFFFF',
                        fontSize: 10,
                        fontWeight: 'bold',
                        marginBottom: 5,
                      }}>
                      {'500 ml'}
                    </Text>
                    <Text
                      style={{
                        color: '#FFFFFF',
                        fontSize: 8,
                      }}>
                      {'오늘'}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: 25,
                      height: 150,
                      marginHorizontal: 8,
                    }}>
                    <View
                      style={{
                        backgroundColor: '#597EF7',
                        borderRadius: 4,
                      }}>
                      <View
                        style={{
                          backgroundColor: '#A9D9D9',
                          borderRadius: 4,
                          paddingHorizontal: 6,
                          marginTop: 56,
                        }}>
                        <Image
                          source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                          resizeMode={'stretch'}
                          style={{
                            height: 14,
                            marginTop: 37,
                          }}
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: -8,
                        width: 260,
                        height: 1,
                        borderStyle: 'dashed',
                      }}></View>
                  </View>
                  <View
                    style={{
                      width: 1,
                      height: 90,
                      backgroundColor: '#1677FF',
                      borderStyle: 'dashed',
                      marginHorizontal: 22,
                    }}></View>
                  <View
                    style={{
                      width: 25,
                      height: 139,
                      backgroundColor: '#F4ABBA',
                      borderRadius: 4,
                      paddingHorizontal: 6,
                      marginHorizontal: 83,
                    }}>
                    <Image
                      source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                      resizeMode={'stretch'}
                      style={{
                        height: 14,
                        marginTop: 82,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      width: 25,
                      height: 136,
                      backgroundColor: '#597EF7',
                      borderRadius: 4,
                      marginHorizontal: 47,
                    }}>
                    <View
                      style={{
                        backgroundColor: '#A9D9D9',
                        borderRadius: 4,
                        paddingHorizontal: 6,
                        marginTop: 30,
                      }}>
                      <Image
                        source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                        resizeMode={'stretch'}
                        style={{
                          height: 14,
                          marginTop: 40,
                        }}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      width: 25,
                      height: 136,
                      backgroundColor: '#F4ABBA',
                      borderRadius: 4,
                      paddingHorizontal: 6,
                      marginHorizontal: 80,
                    }}>
                    <Image
                      source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                      resizeMode={'stretch'}
                      style={{
                        height: 14,
                        marginTop: 70,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      backgroundColor: '#597EF7',
                      borderRadius: 4,
                      marginHorizontal: 116,
                    }}>
                    <View
                      style={{
                        backgroundColor: '#A9D9D9',
                        borderRadius: 4,
                        paddingHorizontal: 6,
                        marginTop: 21,
                      }}>
                      <Image
                        source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                        resizeMode={'stretch'}
                        style={{
                          height: 14,
                          marginTop: 53,
                        }}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      width: 25,
                      height: 119,
                      backgroundColor: '#597EF7',
                      borderRadius: 4,
                      marginHorizontal: 44,
                    }}>
                    <View
                      style={{
                        backgroundColor: '#A9D9D9',
                        borderRadius: 4,
                        paddingHorizontal: 6,
                        marginTop: 43,
                      }}>
                      <Image
                        source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                        resizeMode={'stretch'}
                        style={{
                          height: 14,
                          marginTop: 37,
                        }}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      width: 25,
                      height: 50,
                      backgroundColor: '#597EF7',
                      borderRadius: 4,
                      paddingHorizontal: 6,
                      marginHorizontal: 11,
                    }}>
                    <Image
                      source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                      resizeMode={'stretch'}
                      style={{
                        height: 14,
                        marginTop: 18,
                      }}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: 22,
                  alignSelf: 'flex-start',
                }}>
                <Text
                  style={{
                    color: '#D1D1D5',
                    fontSize: 10,
                    fontWeight: 'bold',
                    marginBottom: 15,
                  }}>
                  {'1750'}
                </Text>
                <Text
                  style={{
                    color: '#D1D1D5',
                    fontSize: 10,
                    fontWeight: 'bold',
                    marginBottom: 15,
                  }}>
                  {'1500'}
                </Text>
                <Text
                  style={{
                    color: '#D1D1D5',
                    fontSize: 10,
                    fontWeight: 'bold',
                  }}>
                  {'1250'}
                </Text>
              </View>
              <View style={{}}>
                <View
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: 260,
                    height: 1,
                    borderStyle: 'dashed',
                  }}></View>
                <View
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: 260,
                    height: 1,
                    borderStyle: 'dashed',
                  }}></View>
                <View
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: 260,
                    height: 1,
                    borderStyle: 'dashed',
                  }}></View>
                <View
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: 260,
                    height: 1,
                    borderStyle: 'dashed',
                  }}></View>
                <View
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: 260,
                    height: 1,
                    borderStyle: 'dashed',
                  }}></View>
                <View
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: 260,
                    height: 1,
                    backgroundColor: '#D3D3D6',
                  }}></View>
              </View>
              <View
                style={{
                  width: 22,
                  alignSelf: 'flex-start',
                  marginTop: 75,
                }}>
                <Text
                  style={{
                    color: '#D1D1D5',
                    fontSize: 10,
                    fontWeight: 'bold',
                    marginBottom: 15,
                  }}>
                  {'1000'}
                </Text>
                <Text
                  style={{
                    color: '#D1D1D5',
                    fontSize: 10,
                    fontWeight: 'bold',
                    marginBottom: 15,
                  }}>
                  {'750'}
                </Text>
                <Text
                  style={{
                    color: '#D1D1D5',
                    fontSize: 10,
                    fontWeight: 'bold',
                    marginBottom: 15,
                  }}>
                  {'500'}
                </Text>
                <Text
                  style={{
                    color: '#D1D1D5',
                    fontSize: 10,
                    fontWeight: 'bold',
                    marginBottom: 15,
                  }}>
                  {'250'}
                </Text>
                <Text
                  style={{
                    color: '#D1D1D5',
                    fontSize: 10,
                    fontWeight: 'bold',
                  }}>
                  {'0'}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 28,
                marginHorizontal: 31,
              }}>
              <Text
                style={{
                  color: '#D1D1D5',
                  fontSize: 12,
                  fontWeight: 'bold',
                  marginRight: 27,
                }}>
                {'화'}
              </Text>
              <Text
                style={{
                  color: '#D1D1D5',
                  fontSize: 12,
                  fontWeight: 'bold',
                  marginRight: 27,
                }}>
                {'수'}
              </Text>
              <Text
                style={{
                  color: '#D1D1D5',
                  fontSize: 12,
                  fontWeight: 'bold',
                  marginRight: 27,
                }}>
                {'목'}
              </Text>
              <Text
                style={{
                  color: '#D1D1D5',
                  fontSize: 12,
                  fontWeight: 'bold',
                  marginRight: 27,
                }}>
                {'금'}
              </Text>
              <Text
                style={{
                  color: '#D1D1D5',
                  fontSize: 12,
                  fontWeight: 'bold',
                  marginRight: 27,
                }}>
                {'토'}
              </Text>
              <Text
                style={{
                  color: '#D1D1D5',
                  fontSize: 12,
                  fontWeight: 'bold',
                  marginRight: 28,
                }}>
                {'일'}
              </Text>
              <Text
                style={{
                  color: '#D1D1D5',
                  fontSize: 12,
                  fontWeight: 'bold',
                  flex: 1,
                }}>
                {'월'}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 16,
              }}>
              <View
                style={{
                  width: 14,
                  height: 14,
                  backgroundColor: '#A9D9D9',
                  borderRadius: 2,
                  marginRight: 4,
                }}></View>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 12,
                  fontWeight: 'bold',
                  marginRight: 7,
                }}>
                {'섭취량'}
              </Text>
              <View
                style={{
                  width: 14,
                  height: 14,
                  backgroundColor: '#597EF7',
                  borderRadius: 2,
                  marginRight: 4,
                }}></View>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 12,
                  fontWeight: 'bold',
                  marginRight: 7,
                }}>
                {'제한량'}
              </Text>
              <Image
                source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                resizeMode={'stretch'}
                style={{
                  width: 14,
                  height: 14,
                  marginRight: 4,
                }}
              />
              <Text
                style={{
                  color: '#000000',
                  fontSize: 12,
                  fontWeight: 'bold',
                  flex: 1,
                }}>
                {'소변량   '}
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
