
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

//const [app, aetApp] = useState('')

const Textinput = ({text}) => {
    return (
        <View>
<Text>{text}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Textinput;
