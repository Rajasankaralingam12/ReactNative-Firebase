import React from "react";
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import NavigationContainer from "@react-navigation/native";
import HomeScreen from "./Screens/HomeScreen";

const HomeStack = createSwitchNavigator({
    Home: HomeScreen
});

const BottomTabTest = createBottomTabNavigator();


    export default function Nav() {
        return (

            <NavigationContainer>
            <BottomTab.Navigator>
                <BottomTab.Screen name= "Home" component= {HomeScreen}> </BottomTab.Screen>
                <BottomTab.Screen  name= "Settings"  component = {HomeScreen}> </BottomTab.Screen>
            </BottomTab.Navigator>
         </NavigationContainer>
        );
    }