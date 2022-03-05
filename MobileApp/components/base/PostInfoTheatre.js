import React from "react";
import {Text, View } from 'react-native';
import styles from '../styles/mystyle.js';


export default function PostinfoTheatre({name, city, address, no_of_screen}) {
    return (
        <View style={styles.board}>
            <Text style={styles.textInBtn}>{name}</Text>
            <Text style={styles.textInfo}>City:             {city}</Text>
            <Text style={styles.textInfo}>Address:          {address}</Text>
            <Text style={styles.textInfo}>Number of screen: {no_of_screen}</Text>
        </View>
    )
}