import React from "react";
import HomeScreen from "./Screens/HomeScreen";
 import {createStore }from "redux";
 import {Provider} from "react-redux";

 import {createAppContainer, createSwitchNavigator} from "react-navigation";
import {BottomTabBar, createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import NavigationContainer from "@react-navigation/native";
import BottomNavigation from "./BottomNavigation";

const reducer =  ( state = {menu : "closeMenu"}, command) => {
//  if(command.type == "OPENMENU"){
//    return {menu : "openMenu"}
//  }else if(command.type == "CLOSEMENU"){
//   return {menu : "closeMenu"}
// }
//  return state;

 switch(command.type){
   case "OPENMENU":{
    return {menu : "openMenu"}
   }
   case "CLOSEMENU":{
     return {menu : "closeMenu"}
   }
   default :{
     return state;
    
   }
 }
};

const database = createStore(reducer);

const Tab = createBottomTabNavigator();

const App = ( ) =>

<Provider store = {database}>
  <BottomNavigation />
</Provider>

 

export default App;