import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const StudentInfo = ({ fullname, position, description, profileImage }) => {
  return (
    <View style={styles.container}>
      <Image source={profileImage} style={styles.image} />

      <Text style={styles.fullname}>{fullname}</Text>
      <Text style={styles.position}>{position}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 10
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15
  },
  fullname: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  position: {
    fontSize: 16,
    color: 'gray',
    marginVertical: 5
  },
  description: {
    textAlign: 'center'
  }
});

export default StudentInfo;
