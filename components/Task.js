import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ModalScreen from "./Modal";
import moment from "moment";
import { TaskContext } from "./Context";

const Task = (props, { task }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const {
    todayTask,
    setTodayTask,
    tomorrowTask,
    setTomorrowTask,
    upcomingTask,
    setUpcomingTask,
    completedTask,
    setCompletedTask,
  } = useContext(TaskContext);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // const completeTask = (todoId) => {
  //   const newTodosItem = props.todayTask.map((item) => {
  //     if (item.id == todoId) {
  //       return { ...item, isCompleted: true };
  //     }
  //     return item;
  //   });

  //   props.setCompletedTask(newTodosItem);
  // };

  const completeTask = (todoId) => {
    if (
      props.datetext == moment().format("YYYY-MM-DD") &&
      props.isChecked == false
    ) {
      const filteredItem = todayTask.find((item) => item.id === todoId);

      const newTodosItem = todayTask.filter((item) => item.id !== todoId);

      setTodayTask(newTodosItem);

      const completedItem = {
        taskName: filteredItem.taskName,
        taskDescription: filteredItem.taskDescription,
        date: filteredItem.date,
        isCompleted: true,
        id: filteredItem.id,
      };

      setCompletedTask([...completedTask, completedItem]);
    } else if (
      props.datetext == moment().add(1, "days").format("YYYY-MM-DD") &&
      props.isChecked == false
    ) {
      const filteredItem = tomorrowTask.find((item) => item.id === todoId);

      const newTodosItem = tomorrowTask.filter((item) => item.id !== todoId);

      setTomorrowTask(newTodosItem);

      const completedItem = {
        taskName: filteredItem.taskName,
        taskDescription: filteredItem.taskDescription,
        date: filteredItem.date,
        isCompleted: true,
        id: filteredItem.id,
      };

      setCompletedTask([...completedTask, completedItem]);
    } else if (
      props.datetext > moment().add(1, "days").format("YYYY-MM-DD") &&
      props.isChecked == false
    ) {
      const filteredItem = upcomingTask.find((item) => item.id === todoId);

      const newTodosItem = upcomingTask.filter((item) => item.id !== todoId);

      setUpcomingTask(newTodosItem);

      const completedItem = {
        taskName: filteredItem.taskName,
        taskDescription: filteredItem.taskDescription,
        date: filteredItem.date,
        isCompleted: true,
        id: filteredItem.id,
      };

      setCompletedTask([...completedTask, completedItem]);
    } else {
      const filteredItem = completedTask.find((item) => item.id === todoId);

      const newTodosItem = completedTask.filter((item) => item.id !== todoId);
      setCompletedTask(newTodosItem);

      const completedItem = {
        taskName: filteredItem.taskName,
        taskDescription: filteredItem.taskDescription,
        date: filteredItem.date,
        isCompleted: false,
        id: filteredItem.id,
      };

      if (completedItem.date == moment().format("YYYY-MM-DD")) {
        
        setTodayTask([...todayTask, completedItem]);
      } else if (
        completedItem.date == moment().add(1, "days").format("YYYY-MM-DD")
      ) {
        setTomorrowTask([...tomorrowTask, completedItem]);
      } else if (
        completedItem.date > moment().add(1, "days").format("YYYY-MM-DD")
      ) {
        setUpcomingTask([...upcomingTask, completedItem]);
      }
    }
  };

  const deleteTodo = (todoId) => {
    if (
      props.datetext == moment().format("YYYY-MM-DD") &&
      props.isChecked == false
    ) {
      const newTodosItem = todayTask.filter((item) => item.id != todoId);
      setTodayTask(newTodosItem);
    } else if (
      props.datetext == moment().add(1, "days").format("YYYY-MM-DD") &&
      props.isChecked == false
    ) {
      const newTodosItem = tomorrowTask.filter((item) => item.id != todoId);
      setTomorrowTask(newTodosItem);
    } else if (
      props.datetext > moment().add(1, "days").format("YYYY-MM-DD") &&
      props.isChecked == false
    ) {
      const newTodosItem = upcomingTask.filter((item) => item.id != todoId);
      setUpcomingTask(newTodosItem);
    } else {
      const newTodosItem = completedTask.filter((item) => item.id != todoId);

      setCompletedTask(newTodosItem);
    }
  };

  return (
    <View style={styles.item}>
      <Text style={{ textAlign: "center" }}>{moment(props.datetext).format("DD MMM")}</Text>
      <View style={styles.task}>
        <BouncyCheckbox
          size={28}
          fillColor="#A4AEEA"
          unfillColor="#FFFFFF"
          innerIconStyle={{ borderWidth: 2 }}
          textStyle={{
            fontFamily: "sans-serif",
            color: props.isChecked ? "#808486" : "#222B45",
            fontSize: 18,
          }}
          isChecked={props.isChecked}
          onPress={() => completeTask(props.id)}
          text={props.text}
        ></BouncyCheckbox>
      </View>

      <View style={styles.button}>
        <Pressable onPress={toggleModal}>
          <MaterialCommunityIcons name="pencil" color={"#222B45"} size={25} />

          <ModalScreen
            title="Edit Task"
            isVisible={isModalVisible}
            onPress={toggleModal}
            dateText={"26 Dec 2022"}
          />
        </Pressable>
        <Pressable
          style={styles.secondButton}
          onPress={() => deleteTodo(props.id)}
        >
          <MaterialCommunityIcons name="delete" color={"#222B45"} size={25} />
        </Pressable>
      </View>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#A4AEEA",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 28,
    elevation: 3,
  },
  button: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  task: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 20,
  },

  secondButton: {
    marginLeft: 10,
  },

  tasktext: {
    marginLeft: 20,
  },
});
