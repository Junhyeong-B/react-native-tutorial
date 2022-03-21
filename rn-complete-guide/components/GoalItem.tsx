import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  id: string;
  title: string;
  onDelete(id: string): void;
};

const GoalItem = ({ id, title, onDelete }: Props): JSX.Element => {
  return (
    <TouchableOpacity onPress={onDelete.bind(this, id)}>
      <View style={styles.listItem}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "salmon",
    borderColor: "black",
    borderWidth: 1,
  },
});
