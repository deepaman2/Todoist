//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';
import HeaderComp from '../../Components/HeaderComp/HeaderComp';
import { moderateScaleVertical } from '../../styles/responsive';
import styles from './styles';

import NavigationString from '../../Navigation/NavigationString';

const SignUp = ({navigation, route}) => {
    return (
        <SafeAreaView style={styles.container}>
            <HeaderComp />
            <View style={styles.loginView}>
                <Text style={styles.loginstyle}>
                    Sign Up
                </Text>
            </View>
            <View style={{ marginTop: 10 }}>
                <TextInput style={styles.logintextstyle}
                    placeholder='Name'
                    placeholderTextColor="black"
                />
                <TextInput style={styles.logintextstyle}
                    placeholder='Phone Number'
                    placeholderTextColor="black"
                />
                <TextInput style={styles.logintextstyle}
                    placeholder='E-mail Address'
                    placeholderTextColor="black"
                />
                <TextInput style={styles.logintextstyle}
                    placeholder='Password'
                    placeholderTextColor="black"
                />
            </View>
            <View style={{ alignItems: 'flex-end' }}>
                <TouchableOpacity>
                    <Text style={styles.touchstyle}>
                        Forget Password
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.touchstylelog}onPress={()=>{navigation.navigate(NavigationString.ADDTASK)}} >
                    <Text style={styles.touchtext}>  Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.orstyle}>
                <Text style={{ fontSize: 18 }}>
                    OR
                </Text>
                <Text style={{ fontWeight: '500', color: 'grey', marginTop: 20 }}>
                    Signup with
                </Text>

            </View>
            <View style={{ flexDirection: 'row' ,alignItems:'center', justifyContent:'space-evenly',marginTop:10,margin:50}}>
                <Image
                    source={require('../../assets/images/ic_mail.png')}
                />
                <Image
                    source={require('../../assets/images/ic_apple.png')}
                />
                <Image
                    source={require('../../assets/images/ic_facebook.png')}
                />
            </View>


            <View style={styles.viewtwo}>
                <Text style={{ fontWeight: '200' }}>
                    Don't have an account?
                </Text>

                <TouchableOpacity onPress={()=>{navigation.navigate(NavigationString.LOGIN)}}>
                    <Text style={styles.logtext}>  Log In 
                    </Text>
                    </TouchableOpacity>


            </View>





        </SafeAreaView>
    );
};



export default SignUp;
