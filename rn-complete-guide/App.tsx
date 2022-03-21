import { useCallback, useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

type CourseGoalType = {
  key: string;
  value: string;
};

export default function App() {
  const [courseGoals, setCourseGoals] = useState<CourseGoalType[]>([]);
  const [isAddMode, setIsAddMode] = useState<boolean>(false);

  const addGoalHandler = useCallback((goalTitle: string) => {
    if (!goalTitle) {
      return;
    }

    setCourseGoals((prevGoals) =>
      prevGoals.concat({ key: Math.random().toString(), value: goalTitle })
    );
    setIsAddMode(false);
  }, []);

  const deleteGoalHandler = useCallback((id: string) => {
    setCourseGoals((prevGoals) => prevGoals.filter(({ key }) => key !== id));
  }, []);

  const setAddMode = useCallback(() => {
    setIsAddMode(true);
  }, []);

  const cancelHandler = useCallback(() => {
    setIsAddMode(false);
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Add New Goal" onPress={setAddMode} />
      <GoalInput
        onPressAddButton={addGoalHandler}
        onPressCancelButton={cancelHandler}
        visible={isAddMode}
      />
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            onDelete={deleteGoalHandler}
            id={itemData.item.key}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
});
