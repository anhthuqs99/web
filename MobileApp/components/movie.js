import React,  { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import styles from './styles/mystyle.js';
import Button2 from './base/Button2'
import PostinfoMovie from './base/PostInfoMovie';
import axios from 'axios';

export default class Movie extends Component {
  constructor(props){
    super(props)
    this.state={
      fdata: []
    }
    
  }
  fetching() {
    axios.get('http://172.20.10.9/api/v1/movie') //ip of phone
    // axios.get('http://192.168.0.102/api/v1/movie')
      .then(res => {
        const fdata = res.data;
        this.setState({ fdata });
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
    // console.log("Post Movie")
    this.props.navigation.navigate('moviePost')
  }

  render(){
    const boards = []
    for (let i = 0; i < this.state.fdata.length; i++)
    {
      boards.push(<View key={i + 1} style ={{marginTop:10}}></View>);
      boards.push(<PostinfoMovie key={-i - 1} name={this.state.fdata[i].name} 
                                              cast={this.state.fdata[i].cast } 
                                              director={this.state.fdata[i].director} 
                                              language={this.state.fdata[i].language} 
                                              run_length={this.state.fdata[i].run_length}
                                              certificate={this.state.fdata[i].certificate}/>);
    }
    return (
      <View style={styles.container}>

        <View style ={{marginTop:15}}></View>
        
        <Text style={{fontSize:40, fontWeight:'bold', color : '#000000', marginTop: 70, textAlign:'center'}}>Movie!</Text>

        <Button2 text = 'Post' onPress = {() =>this.post()} />

        <View style ={{marginTop:35}}></View>
        
        <ScrollView>

          {boards}
          
        </ScrollView>
      </View>
    );
  }
}
