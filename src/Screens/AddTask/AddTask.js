import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import colorsPath from '../../constants/colorsPath';
const MyComponent = () => {
    return (
        <SafeAreaView style={styles.addmain}>
            <View style={{ marginLeft:20,marginTop:20 }}>
                <Text style={{ fontWeight: 'bold' }}>
                    Hello Lorem!
                </Text>
            </View >
             <View style={{ marginLeft:20 ,marginTop:10}}>
                <Text style={styles.addtextstyle}>
                    Let's start with todays tasks.
                </Text>
            </View>
        <View style={{backgroundColor:'white',margin:20,borderRadius:10}}>
<Text>
    sv
</Text>
        </View>
        
        
        
        
        </SafeAreaView>
    )
};

export default MyComponent
