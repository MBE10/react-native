import React from "react"
import { View, Text, FlatList, Image, StyleSheet } from "react-native"
import phones from "../data/phones.json"

export default function PhonesScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={phones}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.desc}>{item.category}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20
  },
  card: {
    backgroundColor: "#f3f3f3",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: "center"
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: "contain"
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10
  },
  desc: {
    color: "gray",
    marginTop: 4
  }
})