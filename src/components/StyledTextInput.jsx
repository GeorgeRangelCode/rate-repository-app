import React from "react";
import { TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#999",
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 10,
  },
  error: {
    borderColor: "red",
  },
});

const StyledTextInput = ({ style = {}, error, ...props }) => {
  const inpurStyle = [styles.textInput, style, error && styles.error];

  return <TextInput style={inpurStyle} {...props} />;
};

export default StyledTextInput;
