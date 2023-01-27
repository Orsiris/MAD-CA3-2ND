import React, { useState } from "react";
import {StyleSheet,Button} from "react-native";

const DoneButton = (props) => {
    
  
    
  
      return (
        <Button style = {styles.button} title="Done" onPress={props.onPress} />
      )
    }
  
    export default DoneButton

    const styles = StyleSheet.create({
        button: {
          width:200
        }
      });