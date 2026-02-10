import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';


const MenuScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Welcome to Menu Screen</Text>


      <Button
        title="Go to Test Screen"
        onPress={() => props.navigation.navigate('Test')}
      />


      <TouchableOpacity
        style={styles.btn}
        onPress={() => props.navigation.navigate('Students')}
      >
        <Text style={styles.btnText}>Go to Students Screen</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 20,
  },
  btn: {
    backgroundColor: '#3446eb',
    marginVertical: 10,
    paddingVertical: 7,
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});


export default MenuScreen;