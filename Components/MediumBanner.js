import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import { Ionicons} from "@expo/vector-icons";

class MediumBanner extends React.Component{
 
    render(){
        return(

        <View style = {styles.bannerStyle}>
        <Image style = {styles.ImageStyle} source = {{uri:this.props.image}}/>
         <LinearGradient colors = {[ "rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 5)"]}  style = {{ position:"absolute", height: "50%", width:"100%", top:55}}/>
        <View style = {styles.TextContainer}>
        <Ionicons  name = "ios-play" color = "white" size = {18}/>
        <Text style = {styles.TextStyle}>S1 E12.9 Aug</Text>
        </View>
       
        </View>
        );
    }
}


export default MediumBanner;


const styles = StyleSheet.create({
    bannerStyle :{
        width: 200, 
        height: 110,
        borderRadius: 5,
        backgroundColor: '#eaeaea',
        marginLeft: 5,
    },
  
    ImageStyle :{
      alignSelf: 'stretch',
      height: 110,
      borderRadius: 5,
      flex: 1,
      overflow: "hidden",
      marginLeft: 10,
  
  },
  TextStyle :{
    fontSize: 10,
    position: "absolute",
    fontWeight:'bold',
    color: 'white',
    paddingLeft: 20


},

TextContainer :{
    position: "absolute",
    bottom: 5,
    marginLeft: 15,
    flexDirection:"row",
    alignItems:"center"

},
  });