import React from "react";
import { StyleSheet, Pressable, Text, } from "react-native";

const AddTaskModalButtons = (props) => {

  return (
    <Pressable style={({ pressed }) => [
      {
        backgroundColor: pressed ? '#3D4B99' : '#5C71E6',
      },
      styles.button,
      props.style,
    ]}
      onPress={props.onPress}
    >

      <Text style={[styles.text, props.style]}>{props.Text}</Text>
    </Pressable>
  )
}

export default AddTaskModalButtons

const styles = StyleSheet.create({
  button: {

    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',



  },

  text: {
    fontSize: 15,
    color: 'white'
  }
});