import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";


class MovieCard extends React.Component{
 
    render(){
        return(

        <View style = {styles.bannerStyle}>
        <Image style = {styles.ImageStyle} source = {{uri:this.props.image}}/>
    
        </View>

        );
    }
}


export default MovieCard;


const styles = StyleSheet.create({
    bannerStyle :{
        width: 130, 
        height: 172,
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