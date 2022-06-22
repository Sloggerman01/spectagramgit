import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from "react";
import Profile from "./screens/Profile"
import CreatePost from "./screens/CreatePost"
import Feed from "./screens/Feed"
import BottomTabNavigator from './navigation/TabNavigator';
import { render } from 'react-dom';


export default function App() {
  
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <BottomTabNavigator/>
      
   </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

