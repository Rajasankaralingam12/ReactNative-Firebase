import React from "react";
import styled from "styled-components";
import {Text , View} from "react-native";
import {Ionicons} from "@expo/vector-icons"
const MenuCard = props =>(
    
    <Container>

        <MenuContainer>

        <ContainerRow>

         <Ionicons name = {props.icon} size = {25} color = "#1254ff" style ={{marginLeft:20,top:5}} />
         
         <MenuButton>{props.textData}</MenuButton>

        </ContainerRow>

        <MenuCaption>{props.captionName}</MenuCaption>

        </MenuContainer>
        
        </Container>
 
)

export default MenuCard;

const Container = styled.View`
 align-items:center;


`;

const ContainerRow = styled.View`
 align-items:center;
 justify-content:center;
 flex-direction: row;


`;

const MenuContainer = styled.View`
 margin-left: 30px;
 margin-top:10px;
 margin-bottom:10px;

`;

const MenuButton = styled.Text`
 font-size: 25px;
 color: #1254ff;
 width:100%;
 height:40px;
 top:5px;
 align-items:center;
  margin-left: 10px;

`;  

const MenuCaption = styled.Text`
 font-size: 14px;
 width:100%;
 margin-left: 30px;
`;  