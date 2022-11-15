import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import styles from './styles';

const HeaderComp = () => {
    return (
        <View style={{ marginTop: 25, alignItems: 'center' }}>
            <Text style={styles.Textstyle}>
                Todoist
            </Text>
        </View>
    );
};
export default HeaderComp;
