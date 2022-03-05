import React,  { Component, useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from './styles/mystyle.js';
import Button from './base/Button';
import Inputplace from './base/InputPlace';
import axios from 'axios';

export default class showPost extends Component {
  constructor(props){
    super(props)
    this.state={
      screen:'',
      date:'',
      time:'',
    }
  }
  Submit(){
    
    // Simple POST request with a JSON body using axios
    const article = { screen: this.state.screen,
                      date: this.state.date,
                      time:this.state.time}
    axios({
        method: 'POST',
        url: 'http://172.20.10.9/api/show/',
        data: article,
        headers:{
          "Content-Type":"application/json",
          "accept": "application/json"
        }
    }).then(response => {
        console.log("response");
    });
    this.props.navigation.navigate('Show');

  
  }
  render(){
    
    return (
      <View className={styles.container}>
        <Text style={{fontSize:40, fontWeight:'bold', color : '#000000', marginTop: 70, textAlign:'center'}}>Post in Show!</Text>

        <View style ={{marginTop:30}}></View>
        
        <View style = {{flexDirection:'row', marginTop: 15, marginLeft: 20}}>
          <Inputplace text='Screen:   ' secure={false} state='title' that={this} />
        </View>

        <View style = {{flexDirection:'row', marginTop: 15, marginLeft: 20}}>
          <Inputplace text='Date:        ' secure={false} state='main_content' that={this}/>
        </View>

        <View style = {{flexDirection:'row', marginTop: 15, marginLeft: 20}}>
          <Inputplace text='Time:        ' secure={false} state='salary' that={this}/>
        </View>

        <View style ={{marginTop:80}}></View>

        <Button text = 'Submit' onPress = {() =>this.Submit()} />
  
        <View style ={{marginTop:35}}></View>
  
      </View>
    );
  }
}
