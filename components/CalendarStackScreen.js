import React, { useContext } from "react";

import { StyleSheet, View } from "react-native";
import CalendarPicker from "./Calendar";
import { TaskContext } from "./Context";
const CalendarScreen = () => {
  const { todayTask, setTodayTask } = useContext(TaskContext);

  return (
    <View style={styles.container}>
      <CalendarPicker />
    </View>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },

  header: {
    flex: 1,
    backgroundColor: "#5C71E6",
  },

  headerText: {
    fontSize: 24,
    color: "white",
    paddingTop: 20,
  },
});
