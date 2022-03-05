import React,  { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import styles from './styles/mystyle.js';
import Button2 from './base/Button2'
import PostinfoTheatre from './base/PostInfoTheatre';
import axios from 'axios';

export default class Theatre extends Component {
  constructor(props){
    super(props)
    this.state={
      fdata: []
    }
    
  }
  fetching() {
    axios.get('http://172.20.10.9/api/v1/theatre') // change the ip when change the network connection
    // axios.get('http://192.168.0.102/api/v1/theatre')
      .then(res => {
        const fdata = res.data;
        this.setState({ fdata });
        // console.log('get theatre data')
        // console.log(this.state.fdata);
      })
      .catch(error => console.log(error));
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
    // console.log('post theatre')
    this.props.navigation.navigate('theatrePost')
  }
  render(){
    const boards = []
    for (let i = 0; i < this.state.fdata.length; i++)
    {
      boards.push(<View key={i + 1} style ={{marginTop:10}}></View>);
      boards.push(<PostinfoTheatre key={-i - 1} name={this.state.fdata[i].name} 
                                                city={this.state.fdata[i].city}
                                                address={this.state.fdata[i].address}
                                                no_of_screen={this.state.fdata[i].no_of_screen}/>);
    }
    return (
      <View style={styles.container}>

        <View style ={{marginTop:15}}></View>
        
        <Text style={{fontSize:40, fontWeight:'bold', color : '#000000', marginTop: 70, textAlign:'center'}}>Theatre!</Text>

        <Button2 text = 'Post' onPress = {() =>this.post()} />

        <View style ={{marginTop:35}}></View>

        <ScrollView>

          {boards}
          
        </ScrollView>
      </View>
    );
  }
}
