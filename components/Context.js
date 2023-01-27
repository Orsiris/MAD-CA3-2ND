
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import React, { useState, createContext, useContext } from "react";

export const TaskContext = createContext();

export const TaskProvider = (props) => {
  const [todayTask, setTodayTask] = React.useState([]);
  const [tomorrowTask, setTomorrowTask] = React.useState([]);
  const [upcomingTask, setUpcomingTask] = React.useState([]);
  const [completedTask, setCompletedTask] = React.useState([]);

  return (
    <TaskContext.Provider
      value={{
        todayTask,
        setTodayTask,
        tomorrowTask,
        setTomorrowTask,
        upcomingTask,
        setUpcomingTask,
        completedTask,
        setCompletedTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};