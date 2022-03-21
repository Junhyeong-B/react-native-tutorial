import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

type Props = {
  onPressAddButton(enteredGoal: string): void;
};

const GoalInput = ({ onPressAddButton }: Props): JSX.Element => {
  const [enteredGoal, setEnteredGoal] = useState<string>("");

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="ADD" onPress={onPressAddButton.bind(this, enteredGoal)} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
  },
});
