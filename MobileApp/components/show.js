import React,  { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import styles from './styles/mystyle.js';
import Button2 from './base/Button2'
import PostinfoShow from './base/PostInfoShow';
import axios from 'axios';

export default class Show extends Component {
  constructor(props){
    super(props)
    this.state={
      fdata: []
    }
    
  }

  fetching() {
    axios.get('http://172.20.10.9/api/v1/show')
      .then(res => {
        const fdata = res.data;
        this.setState({ fdata });
        // console.log(this.state.fdata);
      })
  }
  componentDidMount() {
    const { navigation } = this.props;
    
    this.focusListener = navigation.addListener('focus', () => {
        // call your refresh method here
        this.fetching();
    });
  }

  componentWillUnmount() {
      // Remove the event listener
      if (this.focusListener != null && this.focusListener.remove) {
          this.focusListener.remove();
      }
  }
  post(){
    this.props.navigation.navigate('showPost')
  }
  render(){
    const boards = []
    for (let i = 0; i < this.state.fdata.length; i++)
    {
      boards.push(<View key={i + 1} style ={{marginTop:10}}></View>);
      boards.push(<PostinfoShow key={-i - 1}  screen = {this.state.fdata[i].screen} 
                                              date = {this.state.fdata[i].date}
                                              time = {this.state.fdata[i].time}/>);
    }
    return (
      <View style={styles.container}>

        <View style ={{marginTop:15}}></View>
        
        <Text style={{fontSize:40, fontWeight:'bold', color : '#000000', marginTop: 70, textAlign:'center'}}>Show!</Text>

        <Button2 text = 'Post' onPress = {() =>this.post()} />

        <View style ={{marginTop:35}}></View>

        <ScrollView>

          {boards}
          
        </ScrollView>
      </View>
    );
  }
}
