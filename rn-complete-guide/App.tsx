import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

type CourseGoalType = {
  key: string;
  value: string;
};

export default function App() {
  const [courseGoals, setCourseGoals] = useState<CourseGoalType[]>([]);

  const addGoalHandler = (goalTitle: string) => {
    setCourseGoals((prevGoals) =>
      prevGoals.concat({ key: Math.random().toString(), value: goalTitle })
    );
  };

  return (
    <View style={styles.container}>
      <GoalInput onPressAddButton={addGoalHandler} />
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => <GoalItem title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
});
