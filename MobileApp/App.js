import * as React from 'react';
import Starts from './components/start'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Movie from './components/movie';
import Theatre from './components/theatre';
import Show from './components/show';
import moviePost from './components/moviePost'
import theatrePost from './components/theatrePost'
import showPost from './components/showPost'

const Stack = createStackNavigator();


export default class App extends React.Component {
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Starts" component={Starts} options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Movie" component={Movie} options={{
              headerShown: false,
            }} 
          />
          <Stack.Screen name="Theatre" component={Theatre} options={{
              headerShown: false,
            }} 
          />
          <Stack.Screen name="Show" component={Show} options={{
              headerShown: false,
            }} 
          />
          <Stack.Screen name="moviePost" component={moviePost} options={{
              headerShown: false,
            }} 
          />
          <Stack.Screen name="theatrePost" component={theatrePost} options={{
              headerShown: false,
            }} 
          />
          <Stack.Screen name="showPost" component={showPost} options={{
              headerShown: false,
            }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
}