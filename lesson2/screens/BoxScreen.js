import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
    }}>
      <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
      <View style={{height: 50, backgroundColor: 'skyblue'}} />
      <View style={{height: 100, backgroundColor: 'steelblue'}} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default BoxScreen;