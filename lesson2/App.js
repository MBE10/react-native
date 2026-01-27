import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './screens/Contact';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Contact from './screens/Contact';
import FlatListsExample from './screens/FlatListsExample';
import FlatListsExample2 from './screens/FlatListsExample2';

const Stack = createStackNavigator();





export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator>
     <Stack.Screen name='home' component={Home}></Stack.Screen>
     <Stack.Screen name='contact' component={Contact}></Stack.Screen>
     <Stack.Screen name='FlatListsExample' component={FlatListsExample}/>
     <Stack.Screen name='FlatListsExample2' component={FlatListsExample2}/>
     </Stack.Navigator>

    </NavigationContainer>

 
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextStyle: {
    color: 'blue',
    fontSize: 40,
  }
});