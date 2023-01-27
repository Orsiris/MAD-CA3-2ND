import React from "react";
import { StyleSheet } from "react-native";

const darkMode = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212529",
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
    color: "white",
  },
  NotiSubHeader: {
    fontWeight: "bold",
    fontSize: 20,
    margin: 30,
    paddingLeft: 10,
    marginBottom: 3,
    color: "white",
  },
  subText: {
    fontSize: 15,
    padding: 0,
    width: 400,
    paddingHorizontal: 40,
    paddingTop: 0,
    marginBottom: 15,
    color: "white",
  },
  lineBreak: {
    width: "85%",
    height: StyleSheet.hairlineWidth,
    backgroundColor: "white",
    alignSelf: "center",
  },
  lineBreakMargin: {
    width: "85%",
    height: StyleSheet.hairlineWidth,
    backgroundColor: "white",
    alignSelf: "center",
    marginTop: 30,
  },
});

export default darkMode;
