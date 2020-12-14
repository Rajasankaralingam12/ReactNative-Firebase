import React from "react";
import { Image, StyleSheet, View} from "react-native";

export default class BigBanner extends React.Component{
    render (){
        return (
    <View style = {styles.bannerStyle}>
    <Image style = {styles.ImageStyle} source = {{
        uri:this.props.image
        }}>

    </Image>
    </View>
        );
    }
}

const styles = StyleSheet.create({
  bannerStyle :{
      width: 330,
      height: 190,
      borderRadius: 15,
      backgroundColor: 'white',
      marginLeft: 10,
  },

  ImageStyle :{
    alignSelf: 'stretch',
    height: 100,
    borderRadius: 12,
    flex: 1,
    overflow: "hidden",

},
});