import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from "@react-navigation/stack"
import HomeScreen from './Screens/HomeScreen';
import VideoScreen from './Screens/VideoScreen';
import Menu from './Components/Menu';
import { Ionicons} from "@expo/vector-icons";
import VideoActivity from './Screens/VideoActivity';
import { MainStackNavigator, VideoStackNavigator } from './Navigators/StackNavigator';


const Stack = createStackNavigator();

function HomeStack(){
  return(
    <Stack.Navigator>
       <Stack.Screen  name="Home" component={HomeScreen} />

      <Stack.Screen  name="Video" component={VideoScreen} />
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator();
function TestScreen() {
    return (
      <View style={{ flex: 1, position:'absolute', justifyContent: 'center', alignItems: 'center' }}>
        <MainStackNavigator />
      </View>
    );
  }

  function TestScreen2() {
    return (
      <View style={{ flex: 1, position:'absolute', justifyContent: 'center', alignItems: 'center' }}>
        <VideoStackNavigator />
      </View>
    );
  }

function MyTabs() {
  return (
    <Tab.Navigator tabBarOptions ={{ activeTintColor : "#9b0624", inactiveTintColor: "#808080", showLabel: true, style :{
      backgroundColor:"white",
       borderStartColor:"#9b0624",
       paddingBottom: 5,
      
  
  
    
    }}}>
      <Tab.Screen name="Home"   options  = {{ tabBarIcon:({focused}) => (
       <Ionicons name = "ios-home" size = {25}   color = {focused? "#9b0624": "#808080"}></Ionicons>

      )}}  component={MainStackNavigator} />
      
      <Tab.Screen name= "Videos"  options  = {{tabBarIcon:({focused}) => (
       <Ionicons name = "ios-videocam" size = {25} color = {focused? "#9b0624": "#808080"}
       
       ></Ionicons>

      )}}  component={VideoStackNavigator} />
    </Tab.Navigator>
  );
}

export default function BottomNavigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
