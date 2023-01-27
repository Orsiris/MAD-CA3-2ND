import React, { useState } from "react";
import {StyleSheet, Pressable, Text, View} from "react-native";

const TaskDayButton = (props) => {
  

    return (
      
      <Pressable style = {props.pressableStyle}
        
      
      onPress={props.onPress}
      >
        
      <Text style = {props.textStyle}>{props.Text}</Text>
      
      </Pressable>
      
    )
  }

  export default TaskDayButton

  