import React from "react";
import { Text,View } from "react-native";
import {TouchableOpacity, ScrollView} from "react-native-gesture-handler"
import styled from "styled-components";
import {Video} from "expo-av"
import MediumBanner from "../Components/MediumBanner";
import  AppTextView from "../Components/AppTextView";
import MovieCard from "../Components/MovieCard";

class VideoActivity extends React.Component{


    render(){
        const firstdata = this.props.route.params.video;
        const MediumBannerData = this.props.route.params.datas;
        const MenuCardData = this.props.route.params.movieData;
        return (
        
            <Container >
                <Video1Container>
                 <Video  source = {{
                     uri : "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
                 }} 
                 shouldPlay = {true}
                  resizeMode = "cover"
                  useNativeControls = {true}
                  style={{ width: "100%", height: "100%" }}
              
                  />
                <CustomText>{this.props.route.params.video.Title}</CustomText>
                
                 <MediumBannerContainer>
                 <ScrollView horizontal = {true} showsHorizontalScrollIndicator ={false}> 
                {MediumBannerData.map((data,index) => {
            
                return <TouchableOpacity 
                   key ={index}
                    onPress = {()=> {

                 this.props.navigation.navigate("VideoActivity",{
                      video: data,
                      datas: MediumBannerData,
                      movieData:MenuCardData,
                     });
      }}
       > 
       <MediumBanner image = {data.MediumBannerImage} />
       </TouchableOpacity>
    })}
    </ScrollView>
   </MediumBannerContainer>
   <MediumBannerContainer>
   <AppTextView  name = "You may like also"/>
    <ScrollView horizontal = {true} showsHorizontalScrollIndicator ={false}> 
   
    {MenuCardData.map((data,index) => {
      return <TouchableOpacity   key ={index} onPress = { ()=> {
        this.props.navigation.navigate("VideoActivity",
        {
          video: data,
          datas: MediumBannerData,
          movieData:MenuCardData,
        });
      }} > 
       <MovieCard image = {data.MediumBannerImage} />
       </TouchableOpacity>
    })}
    </ScrollView>
    </MediumBannerContainer>
                
            
                </Video1Container>
             
     
     
            </Container>
          );
        
  
   
      
    }
}

export default VideoActivity;

const Container = styled.View` 
 flex:1;
`;

const CustomText = styled.Text` 
 justify-content: center;
 align-items:center;
 background:white;
 margin-top:10px;
 margin-bottom:10px;
`;

const Video1Container = styled.View`
 width: 100%;
 height:201px;
 background:black;

`;


const MediumBannerContainer = styled.View`
margin-right:10px;

`;