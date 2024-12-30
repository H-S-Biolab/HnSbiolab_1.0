import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, ImageBackground, } from "react-native";
const NewScreen3 = prop => {
	return (
		<SafeAreaView 
			style = {{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView  
				style = {{
					flex: 1,
					backgroundColor: "#FFFFFF",
				}}>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#FFFFFF",
						paddingVertical: 16,
						paddingLeft: 33,
						paddingRight: 15,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 28,
							height: 11,
						}}
					/>
					<View 
						style = {{
							flex: 1,
							alignSelf: "stretch",
						}}>
					</View>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 17,
							height: 10,
							marginRight: 5,
						}}
					/>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 15,
							height: 10,
							marginRight: 6,
						}}
					/>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 24,
							height: 11,
						}}
					/>
				</View>
				<View 
					style = {{
						backgroundColor: "#FFFFFF",
						paddingHorizontal: 24,
						marginBottom: 2,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 60,
							height: 30,
							marginTop: 11,
						}}
					/>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 14,
						fontWeight: "bold",
						marginBottom: 1,
						marginLeft: 169,
					}}>
					{"7월 29일"}
				</Text>
				<View 
					style = {{
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
						backgroundColor: "#FFFFFF",
						borderColor: "#E8E8EC",
						borderWidth: 1,
						paddingVertical: 17,
					}}>
					<View 
						style = {{
							width: 14,
							marginRight: 31,
						}}>
						<Text 
							style = {{
								color: "#5D5D62",
								fontSize: 12,
								marginBottom: 16,
								marginLeft: 2,
							}}>
							{"목"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 14,
							}}>
							{"25"}
						</Text>
					</View>
					<View 
						style = {{
							width: 15,
							marginRight: 31,
						}}>
						<Text 
							style = {{
								color: "#5D5D62",
								fontSize: 12,
								marginBottom: 16,
								marginLeft: 3,
							}}>
							{"금"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 14,
							}}>
							{"26"}
						</Text>
					</View>
					<View 
						style = {{
							width: 14,
							marginRight: 29,
						}}>
						<Text 
							style = {{
								color: "#5D5D62",
								fontSize: 12,
								marginBottom: 16,
								marginLeft: 2,
							}}>
							{"토"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 14,
							}}>
							{"27"}
						</Text>
					</View>
					<View 
						style = {{
							width: 17,
							marginRight: 15,
						}}>
						<Text 
							style = {{
								color: "#5D5D62",
								fontSize: 12,
								marginBottom: 16,
								marginLeft: 4,
							}}>
							{"일"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 16,
							}}>
							{"28"}
						</Text>
					</View>
					<View 
						style = {{
							width: 45,
							alignItems: "center",
							backgroundColor: "#F0F5FF",
							borderRadius: 8,
							paddingVertical: 9,
							marginRight: 14,
						}}>
						<Text 
							style = {{
								color: "#597EF7",
								fontSize: 12,
								fontWeight: "bold",
								marginBottom: 16,
							}}>
							{"오늘"}
						</Text>
						<Text 
							style = {{
								color: "#597EF7",
								fontSize: 14,
								fontWeight: "bold",
							}}>
							{"29"}
						</Text>
					</View>
					<View 
						style = {{
							width: 15,
							marginRight: 33,
						}}>
						<Text 
							style = {{
								color: "#5D5D62",
								fontSize: 12,
								marginBottom: 16,
								marginLeft: 3,
							}}>
							{"화"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 14,
							}}>
							{"30"}
						</Text>
					</View>
					<View 
						style = {{
							width: 9,
							marginRight: 21,
						}}>
						<Text 
							style = {{
								color: "#5D5D62",
								fontSize: 12,
								marginBottom: 16,
							}}>
							{"수"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 14,
								marginLeft: 2,
							}}>
							{"1"}
						</Text>
					</View>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 19,
							height: 19,
						}}
					/>
				</View>
				<View 
					style = {{
						backgroundColor: "#FAFAFA",
						paddingTop: 20,
						paddingBottom: 34,
						paddingHorizontal: 30,
					}}>
					<View 
						style = {{
							backgroundColor: "#FFFFFF",
							borderRadius: 20,
							paddingTop: 28,
							paddingBottom: 14,
							marginBottom: 20,
							shadowColor: "#00000026",
							shadowOpacity: 0.2,
							shadowOffset: {
							    width: 0,
							    height: 0
							},
							shadowRadius: 10,
							elevation: 10,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
								fontWeight: "bold",
								marginBottom: 6,
								marginLeft: 18,
							}}>
							{"체중"}
						</Text>
						<View 
							style = {{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: 10,
								marginHorizontal: 50,
							}}>
							<ImageBackground 
								source={{uri:'https://i.imgur.com/1tMFzp8.png'}} 
								resizeMode = {'stretch'}
								style = {{
									width: 30,
									height: 30,
									paddingHorizontal: 6,
								}}
								>
								<Image
									source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style = {{
										height: 1,
										marginTop: 15,
									}}
								/>
							</ImageBackground>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 20,
									fontWeight: "bold",
								}}>
								{"57.2 kg"}
							</Text>
							<ImageBackground 
								source={{uri:'https://i.imgur.com/1tMFzp8.png'}} 
								resizeMode = {'stretch'}
								style = {{
									width: 30,
									height: 30,
									paddingHorizontal: 5,
								}}
								>
								<Image
									source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style = {{
										height: 20,
										marginTop: 6,
									}}
								/>
							</ImageBackground>
						</View>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								height: 35,
								marginBottom: 7,
								marginHorizontal: 65,
							}}
						/>
						<Text 
							style = {{
								color: "#B9B9BE",
								fontSize: 10,
								fontWeight: "bold",
								marginLeft: 132,
							}}>
							{"목표체중 52 kg"}
						</Text>
					</View>
					<View 
						style = {{
							flexDirection: "row",
							alignItems: "center",
							marginBottom: 20,
						}}>
						<View 
							style = {{
								width: 100,
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 20,
								paddingVertical: 22,
								marginRight: 15,
								shadowColor: "#00000026",
								shadowOpacity: 0.2,
								shadowOffset: {
								    width: 0,
								    height: 0
								},
								shadowRadius: 10,
								elevation: 10,
							}}>
							<Text 
								style = {{
									color: "#B9B9BE",
									fontSize: 12,
									marginBottom: 21,
								}}>
								{"체중(kg)"}
							</Text>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 20,
									fontWeight: "bold",
								}}>
								{"57.2 kg"}
							</Text>
						</View>
						<View 
							style = {{
								width: 100,
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 20,
								paddingVertical: 22,
								marginRight: 15,
								shadowColor: "#00000026",
								shadowOpacity: 0.2,
								shadowOffset: {
								    width: 0,
								    height: 0
								},
								shadowRadius: 10,
								elevation: 10,
							}}>
							<Text 
								style = {{
									color: "#B9B9BE",
									fontSize: 12,
									marginBottom: 21,
								}}>
								{"골격근량(kg)"}
							</Text>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 20,
									fontWeight: "bold",
								}}>
								{"21.8 kg"}
							</Text>
						</View>
						<View 
							style = {{
								width: 100,
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 20,
								paddingVertical: 22,
								shadowColor: "#00000026",
								shadowOpacity: 0.2,
								shadowOffset: {
								    width: 0,
								    height: 0
								},
								shadowRadius: 10,
								elevation: 10,
							}}>
							<Text 
								style = {{
									color: "#B9B9BE",
									fontSize: 12,
									marginBottom: 21,
								}}>
								{"체지방율(%)"}
							</Text>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 20,
									fontWeight: "bold",
								}}>
								{"27.6 %"}
							</Text>
						</View>
					</View>
					<View 
						style = {{
							backgroundColor: "#FFFFFF",
							borderRadius: 20,
							paddingBottom: 20,
							shadowColor: "#00000024",
							shadowOpacity: 0.1,
							shadowOffset: {
							    width: 0,
							    height: 0
							},
							shadowRadius: 10,
							elevation: 10,
						}}>
						<View 
							style = {{
								flexDirection: "row",
								marginBottom: 12,
								marginHorizontal: 5,
							}}>
							<View 
								style = {{
									flex: 1,
									alignSelf: "flex-start",
									marginRight: 4,
								}}>
								<View 
									style = {{
										marginBottom: 22,
									}}>
									<View 
										style = {{
											height: 33,
											backgroundColor: "#FFE5E5",
										}}>
									</View>
									<View 
										style = {{
											position: "absolute",
											bottom: -1,
											right: 0,
											left: 0,
											height: 1,
											borderStyle: "dashed",
										}}>
									</View>
								</View>
								<View 
									style = {{
										width: 95,
										height: 66,
										paddingBottom: -100,
										marginBottom: 30,
										marginHorizontal: 35,
									}}>
									<View 
										style = {{
										}}>
										<View 
											style = {{
												height: 66,
												borderColor: "#1677FF",
												borderWidth: 2,
											}}>
										</View>
										<Image
											source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
											resizeMode = {"stretch"}
											style = {{
												position: "absolute",
												top: -6,
												left: -6,
												width: 11,
												height: 11,
											}}
										/>
									</View>
									<View 
										style = {{
											height: 188,
											marginHorizontal: 96,
										}}>
									</View>
									<View 
										style = {{
											position: "absolute",
											top: 24,
											left: -35,
											width: 260,
											height: 1,
										}}>
									</View>
								</View>
								<View 
									style = {{
										backgroundColor: "#DEECFF",
										paddingBottom: 57,
									}}>
									<View 
										style = {{
											height: 1,
											backgroundColor: "#1677FF",
											borderStyle: "dashed",
											marginBottom: 11,
										}}>
									</View>
									<View 
										style = {{
											height: 1,
										}}>
									</View>
								</View>
							</View>
							<View 
								style = {{
									width: 34,
									alignSelf: "flex-start",
									marginTop: 30,
								}}>
								<Text 
									style = {{
										color: "#FF8E8E",
										fontSize: 10,
										fontWeight: "bold",
										marginBottom: 36,
									}}>
									{"제한체중"}
								</Text>
								<Text 
									style = {{
										color: "#D1D1D5",
										fontSize: 10,
										fontWeight: "bold",
									}}>
									{"60"}
								</Text>
							</View>
							<View 
								style = {{
								}}>
								<Image
									source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style = {{
										position: "absolute",
										top: 0,
										left: 0,
										width: 11,
										height: 11,
									}}
								/>
								<Image
									source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style = {{
										position: "absolute",
										top: 0,
										left: 0,
										width: 9,
										height: 13,
									}}
								/>
								<View 
									style = {{
										position: "absolute",
										top: 0,
										left: 0,
										width: 260,
										height: 1,
										backgroundColor: "#1677FF",
										borderStyle: "dashed",
									}}>
								</View>
							</View>
							<View 
								style = {{
									width: 25,
									alignSelf: "flex-start",
									marginTop: 148,
								}}>
								<Text 
									style = {{
										color: "#1677FF",
										fontSize: 10,
										fontWeight: "bold",
										marginBottom: 2,
									}}>
									{"건체중"}
								</Text>
								<Text 
									style = {{
										color: "#D1D1D5",
										fontSize: 10,
										fontWeight: "bold",
									}}>
									{"55"}
								</Text>
							</View>
							<View 
								style = {{
									position: "absolute",
									top: 49,
									left: 99,
									width: 65,
									height: 44,
									backgroundColor: "#1677FF",
									borderRadius: 8,
									paddingHorizontal: 8,
								}}>
								<Text 
									style = {{
										color: "#FFFFFF",
										fontSize: 12,
										fontWeight: "bold",
										marginTop: 11,
										marginBottom: 5,
									}}>
									{"57.2 kg"}
								</Text>
								<Text 
									style = {{
										color: "#FFFFFF",
										fontSize: 8,
									}}>
									{"24년 7월 29일"}
								</Text>
							</View>
							<View 
								style = {{
									position: "absolute",
									top: 89,
									left: 132,
									width: 1,
									height: 27,
									backgroundColor: "#1677FF",
									borderStyle: "dashed",
								}}>
							</View>
						</View>
						<Text 
							style = {{
								color: "#FF2528",
								fontSize: 10,
								marginBottom: 2,
								marginLeft: 139,
							}}>
							{"투석일"}
						</Text>
						<View 
							style = {{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: 5,
								marginHorizontal: 21,
							}}>
							<View 
								style = {{
									width: 260,
									height: 1,
									backgroundColor: "#D3D3D6",
								}}>
							</View>
							<Text 
								style = {{
									color: "#D1D1D5",
									fontSize: 10,
									fontWeight: "bold",
								}}>
								{"50"}
							</Text>
						</View>
						<View 
							style = {{
								flexDirection: "row",
								alignItems: "center",
								marginHorizontal: 36,
							}}>
							<Text 
								style = {{
									color: "#D1D1D5",
									fontSize: 12,
									fontWeight: "bold",
									marginRight: 4,
									flex: 1,
								}}>
								{"7월 28일"}
							</Text>
							<Text 
								style = {{
									color: "#D1D1D5",
									fontSize: 12,
									fontWeight: "bold",
									marginRight: 54,
								}}>
								{"7월 29일"}
							</Text>
							<Text 
								style = {{
									color: "#D1D1D5",
									fontSize: 12,
									fontWeight: "bold",
								}}>
								{"7월 30일"}
							</Text>
						</View>
					</View>
				</View>
				<View 
					style = {{
						backgroundColor: "#FFFFFF",
						paddingVertical: 18,
						paddingHorizontal: 45,
					}}>
					<View 
						style = {{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: 8,
						}}>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 18,
								height: 18,
							}}
						/>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 18,
								height: 20,
							}}
						/>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 10,
								height: 20,
							}}
						/>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 18,
								height: 20,
							}}
						/>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 18,
								height: 20,
							}}
						/>
					</View>
					<View 
						style = {{
							flexDirection: "row",
							alignItems: "center",
						}}>
						<Text 
							style = {{
								color: "#1677FF",
								fontSize: 12,
								fontWeight: "bold",
								marginRight: 46,
							}}>
							{"홈"}
						</Text>
						<Text 
							style = {{
								color: "#8B8B91",
								fontSize: 12,
								fontWeight: "bold",
								marginRight: 31,
							}}>
							{"나의루틴"}
						</Text>
						<Text 
							style = {{
								color: "#8B8B91",
								fontSize: 12,
								fontWeight: "bold",
								marginRight: 31,
							}}>
							{"검사하기"}
						</Text>
						<Text 
							style = {{
								color: "#8B8B91",
								fontSize: 12,
								fontWeight: "bold",
								marginRight: 35,
							}}>
							{"병원찾기"}
						</Text>
						<Text 
							style = {{
								color: "#8B8B91",
								fontSize: 12,
								fontWeight: "bold",
								flex: 1,
							}}>
							{"내 정보"}
						</Text>
					</View>
				</View>
				<View 
					style = {{
						backgroundColor: "#FFFFFF",
						paddingHorizontal: 122,
					}}>
					<View 
						style = {{
							height: 5,
							backgroundColor: "#000000",
							borderRadius: 100,
							marginTop: 21,
						}}>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
export default NewScreen3;