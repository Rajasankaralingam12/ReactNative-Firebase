
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text } from 'react-native';

export default class AppTextview extends React.Component{
 
    render() {
        return (
      
  <Text style={styles.textgenericStyle}>{this.props.name}</Text>
    
      
        );
    }
}

const styles = StyleSheet.create({
  textgenericStyle: {
    alignItems: 'center',
    fontSize : 20,
    justifyContent: 'center',
    marginTop: 5,
    marginLeft: 10,
    marginTop:5,
    marginBottom:5,
  
  },
});



