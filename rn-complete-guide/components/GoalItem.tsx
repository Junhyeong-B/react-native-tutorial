import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  title: string;
};

const GoalItem = ({ title }: Props): JSX.Element => {
  return (
    <View style={styles.listItem}>
      <Text>{title}</Text>
    </View>
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
