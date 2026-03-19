import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DetailsScreen = ({ route }) => {
  const student = route.params?.student;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Details</Text>

      <Text style={styles.item}>Name: {student?.name}</Text>
      <Text style={styles.item}>Surname: {student?.surname}</Text>
      <Text style={styles.item}>Age: {student?.age}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  item: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default DetailsScreen;