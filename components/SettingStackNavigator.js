import {
  StyleSheet,
  Text,
  View,
  Switch,
  TouchableOpacity,
  Appearance,
} from "react-native";
import React, { useState } from "react";
import darkMode from "./darkMode";

const SettingStackNavigator = () => {
  const [notificationEnabled, setNotificationEnabled] = useState(false);
  const notificationSwitch = () =>
    setNotificationEnabled((previousState) => !previousState);

  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener((scheme) => {
    setTheme(scheme.colorScheme);
  });
  const darkModeSwitch = (value) => {
    if (value) {
      setTheme("dark");
    } else {
      setTheme(Appearance.getColorScheme());
    }
  };

  return (
    <View style={theme == "light" ? styles.container : darkMode.container}>
      <View style={styles.header} />
      <Text
        style={theme == "light" ? styles.NotiSubHeader : darkMode.NotiSubHeader}
      >
        Notifications{" "}
      </Text>
      <Text style={theme == "light" ? styles.subText : darkMode.subText}>
        {
          "Receive your push notifications on events and deadlines via your mobile app"
        }
      </Text>
      <View style={theme == "light" ? styles.lineBreak : darkMode.lineBreak} />
      <View style={styles.subContainer}>
        <Text
          style={
            theme == "light" ? styles.SubheaderText : darkMode.SubheaderText
          }
        >
          {"Mobile Push Notifications"}{" "}
        </Text>
        <View style={styles.switchContainer}>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={notificationEnabled ? "#767577" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={notificationSwitch}
            value={notificationEnabled}
          />
        </View>
      </View>

      <View
        style={
          theme == "light" ? styles.lineBreakMargin : darkMode.lineBreakMargin
        }
      />
      <Text
        style={theme == "light" ? styles.SubheaderText : darkMode.SubheaderText}
      >
        Appearance{" "}
      </Text>
      <Text style={theme == "light" ? styles.subText : darkMode.subText}>
        {
          "Customise how To-do List looks on your device, follows default system settings when switch is disabled."
        }
      </Text>
      <View style={theme == "light" ? styles.lineBreak : darkMode.lineBreak} />
      <View style={styles.subContainer}>
        <Text
          style={
            theme == "light" ? styles.SubheaderText : darkMode.SubheaderText
          }
        >
          {"Dark Mode"}{" "}
        </Text>
        <View style={styles.switchContainer}>
          <Switch
            style={styles.Switch}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={theme === "dark" ? "#767577" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={darkModeSwitch}
            value={theme === "dark"}
          />
        </View>
      </View>

      <View
        style={
          theme == "light" ? styles.lineBreakMargin : darkMode.lineBreakMargin
        }
      />
      <Text
        style={theme == "light" ? styles.SubheaderText : darkMode.SubheaderText}
      >
        Reset{" "}
      </Text>
      <Text style={theme == "light" ? styles.subText : darkMode.subText}>
        {"Remove and clear all tasks application"}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.resetButton}
          onPress={() => {
            console.log("reset to-do list");
          }}
        >
          <Text style={styles.resetButtonText}>Reset To-do List</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingStackNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  SubheaderText: {
    fontWeight: "bold",
    fontSize: 20,
    margin: 30,
    paddingLeft: 10,
    marginBottom: 5,
  },
  NotiSubHeader: {
    fontWeight: "bold",
    fontSize: 20,
    margin: 30,
    paddingLeft: 10,
    marginBottom: 3,
  },
  subText: {
    fontSize: 15,
    padding: 0,
    width: 400,
    paddingHorizontal: 40,
    paddingTop: 0,
    marginBottom: 15,
  },
  switchContainer: {
    paddingLeft: 0,
    marginTop: 18,
  },
  lineBreak: {
    width: "85%",
    height: StyleSheet.hairlineWidth,
    backgroundColor: "black",
    alignSelf: "center",
  },
  header: {
    backgroundColor: "#5C71E6",
    height: 110,
  },
  lineBreakMargin: {
    width: "85%",
    height: StyleSheet.hairlineWidth,
    backgroundColor: "black",
    alignSelf: "center",
    marginTop: 30,
  },

  resetButton: {
    backgroundColor: "#f40000",
    padding: 12,
    borderRadius: 5,
    alignSelf: "flex-start",
    marginTop: 20,
    marginLeft: 40,
  },
  resetButtonText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  buttonContainer: {
    alignItems: "flex-start",
  },
  Switch: {
    marginLeft: 135,
    marginTop: 10,
  },
});
