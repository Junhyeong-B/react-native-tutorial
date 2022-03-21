import React, { useCallback, useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

type Props = {
  onPressAddButton(enteredGoal: string): void;
  onPressCancelButton(): void;
  visible: boolean;
};

const GoalInput = ({
  onPressAddButton,
  onPressCancelButton,
  visible,
}: Props): JSX.Element => {
  const [enteredGoal, setEnteredGoal] = useState<string>("");

  const goalInputHandler = useCallback((enteredText: string) => {
    setEnteredGoal(enteredText);
  }, []);

  const addGoalHandler = () => {
    onPressAddButton(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={onPressCancelButton} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "50%",
  },
  button: {
    width: "40%",
  },
});
