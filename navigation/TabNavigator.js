import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Feed from "../screens/Feed"
import CreatePost from "../screens/CreatePost"

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
        style = {styles.style}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Feed") {
                iconName = focused ?
                "book":
                "book-outline";
              } else if (route.name === "CreatePost") {
                iconName = focused? "create":"create-outline"
              }

              // You can return any component that you like here!
              return (
                <Ionicons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            }
          })}
          tabBarOptions={{
            activeTintColor: "#tomato",
            inactiveTintColor: "gray",
            
          }}
        >
          <Tab.Screen name="Feed" component={Feed} />
          <Tab.Screen name="CreatePost" component={CreatePost} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  style: {
    height: 100,
    borderTopWidth: 0,
    backgroundColor: "#F88379"
  },
});
