import React from "react";
import {createStackNavigator} from "@react-navigation/stack"

import HomeScreen from "../Screens/HomeScreen";
import VideoScreen from "../Screens/VideoScreen"

import VideoActivity from "../Screens/VideoActivity"


const Stack = createStackNavigator();


const MainStackNavigator = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name = "Home" component = {HomeScreen} options = {{headerShown:false}}/>
            <Stack.Screen name = "VideoActivity" component = { VideoActivity}  />
       
        </Stack.Navigator>
    )
}

const VideoStackNavigator = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name = "VideoScreen" component = { VideoScreen}  options = {{headerShown:false}} />
       
        </Stack.Navigator>
    )
}

export { MainStackNavigator, VideoStackNavigator};