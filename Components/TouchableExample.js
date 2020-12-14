import React from "react";
import { StyleSheet, View, Text , TouchableOpacity} from "react-native";
import  AppTextView from "./Components/AppTextView";
import styled from "styled-components";

export default class TouchableExample extends React.Component {

  state = {
    testname : "Lets Start"
  }
  render() {
    return (
      <View style={styles.container}>
    <TouchableOpacity 
    onPress = {() =>{
      this.setState({
       testname : "You successfully Logged in"
      });
    }}
    >
    <AppTextView  name="Log In" />
    </TouchableOpacity>

    <TouchableOpacity 
    onPress = {() =>{
      this.setState({
       testname : " you are Logged Out"
      });
    }}
    >
        <AppTextView  name="Log out"/>
        </TouchableOpacity>
        <AppTextView name="Lingam" /> 
       <Text style = {{color: "#000000", fontSize:20, marginTop:10}}>
        {this.state.testname}
       </Text>
      </View>
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const MainView = styled.view`
flex: 1,
alignItems: 'center',
justifyContent: 'center,
background-color:#E5E5e5;
`;



