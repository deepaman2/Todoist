import React, { Component } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import HeaderComp from '../../Components/HeaderComp/HeaderComp';
import NavigationString from '../../Navigation/NavigationString';
import { Route } from '@react-navigation/native';
import Textinput from '../../Components/HeaderComp/Textinput';
const Login = ({navigation, Route}) => {

    return (
        <SafeAreaView style={styles.addmain}>
            <HeaderComp />
           
            <View style={styles.loginView}>
                <Text style={styles.loginstyle}>
                    Login
                </Text>
            </View>
            <View style={{ marginTop: 10 }}>
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
                <TouchableOpacity style={styles.touchstylelog} >
                    <Text style={styles.touchtext}>  Log In
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.viewtwo}>
                <Text style={{ fontWeight: '200' }}>
                    Don't have an account?
                </Text>

                <TouchableOpacity onPress={()=>{navigation.navigate(NavigationString.SIGNUP)}}>
                    <Text style={styles.logtext}>  Sign Up
                    </Text>
                </TouchableOpacity>


            </View>
        </SafeAreaView>
    )
}

export default Login
