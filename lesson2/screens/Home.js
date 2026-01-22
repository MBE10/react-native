import React from "react";
import { Text, StyleSheet, View } from 'react-native';
import { Button } from "react-native-web";
//import Contact from '.screen/Contact';



const Home = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Home</Text>
      <Button title = "Go to Contact Page"
      onPress ={() => navigation.navigate('Contact') }/>
    </View>
  )
};


const styles = StyleSheet.create({
  textStyle: {
      fontSize: 30,
  }
});


export default Home;