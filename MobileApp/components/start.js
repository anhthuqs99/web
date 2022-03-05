import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles/mystyle.js';
import Button from './base/Button'

export default class Starts extends Component {
  constructor(props){
    super(props)
  }
  movie(){
    this.props.navigation.navigate('Movie')
  }
  theatre(){
    this.props.navigation.navigate('Theatre')
  }
  show(){
    this.props.navigation.navigate('Show',)
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={{fontSize:40, fontWeight:'bold', color : '#000000', marginTop: 70, textAlign:'center'}}>Movie Booking</Text>
        {/* <Text style={{fontSize:40, fontWeight:'bold', color : '#000000', marginTop: 70, textAlign:'center'}}></Text> */}
  
        <View style ={{marginTop:80}}></View>

        <Button text = 'Movie' onPress = {() =>this.movie()} />
  
        <View style ={{marginTop:35}}></View>
  
        <Button text = 'Theatre' onPress = {() =>this.theatre()} />

        <View style ={{marginTop:35}}></View>
  
        <Button text = 'Show' onPress = {() =>this.show()} />
  
      </View>
    );
  }
}
