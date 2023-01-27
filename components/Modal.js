import React, { useState, useMemo } from "react";
import {
  Text,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
} from "react-native";
import Modal from "react-native-modal";
import AddTaskModalButtons from "./AddTaskModalButtons";
import { TextInput } from "react-native-paper";
import { Calendar } from "react-native-calendars";
import AsyncStorage from "@react-native-async-storage/async-storage";

function DatePicker({ visible, onDateSelected }) {
  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <View style={styles.overlay}>
        <Calendar onDayPress={onDateSelected} />
      </View>
    </Modal>
  );
}

function ModalScreen(props) {
  const [text, onChangeText] = React.useState("");
  const [descriptionText, onChangeDescriptionText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const storeData = async (text, descriptionText) => {
    try {
      await AsyncStorage.setItem("taskName", taskName);
      await AsyncStorage.setItem("taskDescription", taskDescription);
    } catch (e) {
      console.log("Error saving data", e);
    }
  };

  return (
    <Modal isVisible={props.isVisible}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.modal}>
            <View style={styles.modalHeader}>
              <Text style={styles.addTaskTitle}>{props.title}</Text>
            </View>
            <View style={styles.inputSection}>
              <TextInput
                mode="outlined"
                textColor="rgba(0, 0, 0, 0.6)"
                theme={{
                  colors: {
                    background: "white",
                    onSurfaceVariant: "rgba(0, 0, 0, 0.6)",
                  },
                }}
                outlineStyle={{ borderRadius: 8 }}
                outlineColor="#A4AEEA"
                activeOutlineColor="#A4AEEA"
                placeholder="Enter Task Name..."
                value={text}
                onChangeText={onChangeText}
              />

              <TextInput
                mode="outlined"
                textColor="rgba(0, 0, 0, 0.6)"
                theme={{
                  colors: {
                    background: "white",
                    onSurfaceVariant: "rgba(0, 0, 0, 0.6)",
                  },
                }}
                style={{ marginTop: 14 }}
                multiline={true}
                numberOfLines={8}
                outlineStyle={{ borderRadius: 8 }}
                outlineColor="#A4AEEA"
                activeOutlineColor="#A4AEEA"
                placeholder="Enter Task Description (Optional)"
                value={descriptionText}
                onChangeText={onChangeDescriptionText}
              />
              <View style={styles.dateButton}>
                <Pressable onPress={() => setModalVisible(true)}>
                  <Text style={styles.dateText}>{props.dateText}</Text>
                  <DatePicker
                    visible={modalVisible}
                    onDateSelected={() => setModalVisible(false)}
                  />
                </Pressable>
              </View>
            </View>

            <View style={styles.buttonSection}>
              <AddTaskModalButtons
                style={{
                  marginRight: 20,
                  backgroundColor: "transparent",
                  color: "black",
                }}
                onPress={props.onClose}
                Text={"Cancel"}
              />
              <AddTaskModalButtons onPress={props.onSave}  Text={"Done"} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Modal>
  );
}

export default ModalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  modal: {
    height: "auto",
    width: 350,

    backgroundColor: "white",

    alignSelf: "center",
    borderRadius: 10,
  },

  modalHeader: {
    backgroundColor: "#5C71E6",
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  addTaskTitle: {
    fontSize: 30,
    color: "white",
  },

  buttonSection: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  buttons: {
    marginRight: 20,
  },

  dateButton: {
    alignSelf: "flex-start",
    justifyContent: "center",
    height: 40,
    borderRadius: 13,
    paddingHorizontal: 10,
    backgroundColor: "#5C71E6",
    marginTop: 20,
  },

  dateText: {
    color: "white",
  },

  overlay: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },

  inputSection: {
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});
