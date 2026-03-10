import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

export default function ListScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Phones")}>
        <Text style={styles.text}>Phones</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Products")}>
        <Text style={styles.text}>Products</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.text}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Students</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Posts</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Box</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    justifyContent: "center"
  },
  button: {
    width: "100%",
    backgroundColor: "#2F80ED",
    padding: 18,
    marginVertical: 10,
    borderRadius: 12,
    alignItems: "center"
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "600"
  }
})