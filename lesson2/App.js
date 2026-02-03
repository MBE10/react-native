import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, FlatList } from 'react-native';
import FlatListsExample from './screens/FlatListsExample';
import ButtonScreen from './screens/ButtonScreen';


const Stack = createStackNavigator();





export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen name='Button' component={ButtonScreen} />
       <Stack.Screen name='FlatList' component={FlatListsExample} />
     </Stack.Navigator>
    </NavigationContainer>

 
  );
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   TextStyle: {
//     color: 'blue',
//     fontSize: 40,
//   }
// });