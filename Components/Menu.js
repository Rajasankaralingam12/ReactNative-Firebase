import React from "react";
import {View, StyleSheet,Text, Animated, TouchableOpacity, Dimensions} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import styled from "styled-components";
import {Ionicons} from "@expo/vector-icons"
import {connect}   from "react-redux";
import MenuCard from "./MenuCard";
import { abs } from "react-native-reanimated";


const screenHeight = Dimensions.get("window").height;
function  mapStateToProps(state){
    return{ menu: state.menu};
}

function mapDispatchToProps(dispatch){
return {
    closeMenu : () =>{ dispatch({
        type : "CLOSEMENU"
    })
    }
}
}

class Menu extends React.Component{

    state = {
        top: new Animated.Value(screenHeight)
     
        
    };
    componentDidMount(){

    this.openMenuUsingRedux();
    }

    componentDidUpdate(){
        this.openMenuUsingRedux();
    }

    openMenuUsingRedux(){
      console.log("Raja sankaralingam");

        if(this.props.menu == "openMenu"){

          console.log("Opened");
            
            // const transformStyle ={
            //     transform : [{ 
            //         translateY : this.state.top,
            //     }]
            // }
            // Animated.spring(this.state.top, {toValue: 150 }).start();

           
         }

       if(this.props.menu == "closeMenu"){

        console.log("Closed");
      
        Animated.spring(this.state.top, {toValue: screenHeight, useNativeDriver:true}).start();
       } 
    }

    closeMenu = () => {
      console.log("Check Raja sankaralingam");

        Animated.spring(this.state.top, {toValue: screenHeight, useNativeDriver:true}).start();
        console.log(this.props.menu);
    }

  
    render() {

        console.log(this.state.top);
        console.log("raja");
        const transformStyle ={
            transform : [{ 
                translateY : this.state.top,
            }]
        }

        const backdrop = {
          
            transform: [
              {
                translateY: this.state.top.interpolate({
                  inputRange: [0, 0.01],
                  outputRange: [screenHeight, 0],
                  extrapolate: "clamp",
                }),
              },
            ],
            opacity: this.state.top.interpolate({
              inputRange: [0.01, 0.5],
              outputRange: [0, 1],
              extrapolate: "clamp",
            }),
          };
        return(
        // <AnimatedContainer  style = {{position:"absolute", top:this.state.top, zIndex:100}} >
       // <Animated.View  style = {{position:"absolute", top:900, zIndex:100}}  >
              // <Animated.View style = {[styles.animationStyle, transformStyle ]}>  
              <Animated.View  style = {{position:"absolute", zIndex:100, transform :[{translateY :this.state.top
              }]}}  >
            <View style = {styles.coverStyle}>
            <LinearGradient colors = {[ "rgba(155, 6,36, 27)", "rgba(253, 206, 215, 1)"]} 
             style = {{ height: "100%", width:"100%"}}/>
             <MenuText>Menu</MenuText>
            </View>
            <TouchableOpacity  
            style = {{position:"absolute", top: 120, left:"50%", marginLeft:-22}}
            
            onPress = {this.props.closeMenu}

            > 
            <CloseView>
              <Ionicons name = "ios-close" size = {40} color = "blue"/> 
                 </CloseView>
            </TouchableOpacity>
            <View style = {styles.contentStyle}>
         <MenuCard textData = "Account" icon = "ios-settings" captionName = "Profile"></MenuCard>
         <MenuCard textData = "Log Out" icon = "ios-log-out" captionName = "See you soon"></MenuCard>
    
            </View>

        {/* </AnimatedContainer> */}
        </Animated.View>
        )
    } 
}

export default connect(mapStateToProps, mapDispatchToProps )(Menu);

const styles = StyleSheet.create({

    containerStyle: {
    
        height:'100%',
        backgroundColor:"#f0f3f5",
    
    
      
      },
      coverStyle: {
        alignSelf: 'stretch',
        height: 142,
      
      },

      contentStyle: {
        
        height:'100%',
      
      },

      animationStyle: {
        position:"absolute",
        zIndex:100,
      },
    
    
});

const Container = styled.View`
 width: 100%;
 height: 100%;
 background: #f0f3f5;
 border-radius: 26px;
 overflow: hidden;
`;

const CloseView = styled.View`
 width: 44px;
 height: 44px;
 border-radius: 22px;
 background: white;
 justify-content:center;
 align-items:center;
`;

const MenuText = styled.Text`
 position: absolute;
 font-size: 25px;
 font-weight:600;
 color:white;
 top:55px;
 left:42%;
`;
 
const AnimatedContainer =  Animated.createAnimatedComponent(Container);