import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import HeaderComp from '../../Components/HeaderComp/HeaderComp';
import imagesPath from '../../constants/imagesPath';
import { moderateScaleVertical } from '../../styles/responsive';
import styles from './styles';
import Swiper from 'react-native-swiper'
import colorsPath from '../../constants/colorsPath';
import NavigationString from '../../Navigation/NavigationString';
import Textinput from '../../Components/HeaderComp/Textinput';
const Home = ({navigation , route}) => {
    return (
        <SafeAreaView style={styles.homestyle}>
            <HeaderComp />
            
            
            <Swiper dotStyle={{height:4,width:50}}
           activeDotStyle={{height:4,width:50}} 
           activeDotColor={colorsPath.PURPLE}
           >
                <View>
                    <Image style={{ marginTop: moderateScaleVertical(75) }}
                        source={imagesPath.icIcon1}
                    />
                    <Text style={styles.textHome}>   Manage Tasks
                    </Text>
                </View>
                <View>
                    <Image style={{ marginTop: moderateScaleVertical(75) }}
                        source={imagesPath.icIcon2}
                    />
                    <Text style={styles.textHome}>   Prioritize wisely.
                    </Text>
                </View>
                <View>
                    <Image style={{ marginTop: moderateScaleVertical(90) }}
                        source={imagesPath.icIcon3}
                    />
                    <Text style={styles.textHome}>   Get Reminders on time.
                    </Text>
                </View>

            </Swiper>
            <View>
                <Text style={styles.textHome2}>
                    Lorem ipsum dolor sit amet,consectetur{"\n"}adipiscing elit, sed do eiusmod tempor{"\n"}incidunt ut labore.
                </Text>

                <TouchableOpacity style={styles.touchstyle}onPress={()=>{navigation.navigate(NavigationString.SIGNUP)}}>
                    <Text style={styles.touchtext}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewtwo}>
                <Text style={{ fontWeight: '200' }}>
                    Already have an account?
                </Text>

                <TouchableOpacity onPress={()=>{navigation.navigate(NavigationString.LOGIN)}}>
                    <Text style={styles.logtext}>  Log in
                    </Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}
export default Home;
