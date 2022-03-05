import React from "react";
import {Text, View } from 'react-native';
import styles from '../styles/mystyle.js';

export default function PostinfoShow({screen, date, time}) {
    return (
        <View style={styles.board}>
            <Text style={styles.textInBtn}>{screen}</Text>
            <Text style={styles.textInfo}>Date:      {date}</Text>
            <Text style={styles.textInfo}>Time:      {time}</Text>
        </View>
    )
}