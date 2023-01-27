// Wong Wei Jun Daniel
// P2243564
// DIT/1B/02

import React, { useState, useMemo, useContext } from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { Agenda } from "react-native-calendars";
import moment from "moment";
import { TaskContext } from "./Context";

moment().format();

function CalendarPicker() {
  const {
    todayTask,
    tomorrowTask,
    upcomingTask,
    completedTask,
    
  } = useContext(TaskContext);

  

  let allTasks = todayTask.concat(tomorrowTask, upcomingTask, completedTask);
  console.log(completedTask);
  const items = {};

  allTasks.forEach((task) => {
    if (!items[task.date]) {
      items[task.date] = [];
    }
    items[task.date].push({
      taskName: task.taskName,
      isCompleted: task.isCompleted,
      date: task.date,
      id: task.id,
    });
  });

  // todayTask.forEach((task) => {
  //   if (!items[task.date]) {
  //     items[task.date] = [];
  //   }
  //   items[task.date].push({ name: task.taskName });
  // });

  

  return (
    <SafeAreaView style={styles.container}>
      <Agenda
        showClosingKnob={true}
        renderEmptyDate={() => {
          return (
            <View>
            
            </View>
          );
        }}
        renderEmptyData={() => {
          return (
            <View>
             
            </View>
          );
        }}
        selected={moment().format("YYYY-MM-DD")}
        items={items}
        renderItem={(item, firstItemInDay) => {
          return (
            <View style={styles.item}>
              <Text
                style={[
                  styles.itemText,
                  {
                    textDecorationLine: item?.isCompleted
                      ? "line-through"
                      : "none",
                  },
                ]}
              >
                {item.taskName}
              </Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

export default CalendarPicker;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    color: "#888",
    fontSize: 24,
  },
});
