import React,  { Component, useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from './styles/mystyle.js';
import Button from './base/Button';
import Inputplace from './base/InputPlace';
import axios from 'axios';

export default class theatrePost extends Component {
  constructor(props){
    super(props)
    this.state={
      name:'A',
      city:'B',
      address:'C',
      no_of_screen:2,
      admin_id:1,
    }
  }
  Submit(){
    console.log(this.state.name);
    console.log(this.state.city);
    console.log(this.state.address);
    console.log(this.state.no_of_screen);
    // Simple POST request with a JSON body using axios
    const article = { name: this.state.name,
                      city: this.state.city,
                      address: this.state.address,
                      no_of_screen: this.state.no_of_screen,
                      admin_id: this.state.admin_id}

    axios({
        method: 'POST',
        url: 'http://172.20.10.9/api/theatre/',
        data: article,
        headers:{
          "Content-Type":"application/json",
          "accept": "application/json"
        }
    }).then(response => {
        console.log("response");
    });
    this.props.navigation.navigate('Theatre');

  
  }
  render(){
    
    return (
      <View className={styles.container}>
        <Text style={{fontSize:40, fontWeight:'bold', color : '#000000', marginTop: 70, textAlign:'center'}}>Post in Theatre!</Text>

        <View style ={{marginTop:30}}></View>
        
        <View style = {{flexDirection:'row', marginTop: 15, marginLeft: 20}}>
          <Inputplace text='Name:        ' secure={false} state='name' that={this}/>
        </View>

        <View style = {{flexDirection:'row', marginTop: 15, marginLeft: 20}}>
          <Inputplace text='City:            ' secure={false} state='city' that={this}/>
        </View>

        <View style = {{flexDirection:'row', marginTop: 15, marginLeft: 20}}>
          <Inputplace text='Address:    ' secure={false} state='address' that={this}/>
        </View>

        <View style = {{flexDirection:'row', marginTop: 15, marginLeft: 20}}>
          <Inputplace text='No screen: ' secure={false} state='no_of_screen' that={this}/>
        </View>

        <View style ={{marginTop:80}}></View>

        <Button text = 'Submit' onPress = {() =>this.Submit()} />
  
        <View style ={{marginTop:35}}></View>
  
      </View>
    );
  }
}
