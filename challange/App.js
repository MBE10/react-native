import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ListScreen from "./screens/ListScreen"
import PhonesScreen from "./screens/PhonesScreen"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ListScreen} />
        <Stack.Screen name="Phones" component={PhonesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}