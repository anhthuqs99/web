import React,  { Component, useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from './styles/mystyle.js';
import Button from './base/Button';
import Inputplace from './base/InputPlace';
import axios from 'axios';

export default class moviePost extends Component {
  constructor(props){
    super(props)
    this.state={
      name:'A',
      cast:'B',
      director:'C',
      language:'ENGLISH',
      certificate:'U',
      run_length: 120,    }
  }
  
  Submit(){
    console.log(this.state.name);
    console.log(this.state.cast);
    console.log(this.state.director);
    console.log(this.state.language);
    console.log(this.state.certificate);
    console.log(this.state.run_length);
    // Simple POST request with a JSON body using axios
    const article = { name: this.state.name,
                      cast: this.state.cast,
                      director: this.state.director,
                      language: this.state.language,
                      certificate: this.state.certificate,
                      run_length: this.state.run_length}

    axios({
        method: 'POST',
        url: 'http://172.20.10.9/api/v1/movie/',
        data: article,
        headers:{
          "Content-Type":"application/json",
          "accept": "application/json"
        }
    }).then(response => {
        // console.log("response");
    });
    this.props.navigation.navigate('Movie');

  
  }
  render(){
    
    return (
      <View className={styles.container}>
        <Text style={{fontSize:40, fontWeight:'bold', color : '#000000', marginTop: 70, textAlign:'center'}}>Post in Movie!</Text>

        <View style ={{marginTop:30}}></View>
        
        <View style = {{flexDirection:'row', marginTop: 15, marginLeft: 20}}>
          <Inputplace text='Name:            ' secure={false} state='name' that={this}/>
        </View>

        <View style = {{flexDirection:'row', marginTop: 15, marginLeft: 20}}>
          <Inputplace text='Cast:               ' secure={false} state='cast' that={this}/>
        </View>

        <View style = {{flexDirection:'row', marginTop: 15, marginLeft: 20}}>
          <Inputplace text='Director:        ' secure={false} state='director' that={this}/>
        </View>

        <View style = {{flexDirection:'row', marginTop: 15, marginLeft: 20}}>
          <Inputplace text='Language:    ' secure={false} state='language' that={this}/>
        </View>

        <View style = {{flexDirection:'row', marginTop: 15, marginLeft: 20}}>
          <Inputplace text='Certificate:  ' secure={false} state='certificate' that={this}/>
        </View>

        <View style = {{flexDirection:'row', marginTop: 15, marginLeft: 20}}>
          <Inputplace text='Run_length: ' secure={false} state='run_length' that={this}/>
        </View>

        <View style ={{marginTop:80}}></View>

        <Button text = 'Submit' onPress = {() =>this.Submit()} />
  
        <View style ={{marginTop:35}}></View>
  
      </View>
    );
  }
}
