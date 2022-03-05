import React from "react";
import {Text, View } from 'react-native';
import styles from '../styles/mystyle.js';

export default function PostinfoMovie({name, cast, director, language, run_length, certificate}) {
  return (
    <View style={styles.board}>
        <Text style={styles.textInBtn}>{name}</Text>
        <Text style={styles.textInfo}>Cast:             {cast}</Text>
        <Text style={styles.textInfo}>Director:         {director}</Text>
        <Text style={styles.textInfo}>Language:         {language}</Text>
        <Text style={styles.textInfo}>Run Length:       {run_length}</Text>
        <Text style={styles.textInfo}>Certificate:      {certificate}</Text>
    </View>
  )
}

