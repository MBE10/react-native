import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import ProductScreen from "./screens/Products";
import Slider from './screens/Example'

export default function App(){
    return(
        <>
        <NavigationContainer>
           { /* <ProductScreen/> */}
           <Slider/>
        </NavigationContainer>
        </>
    );
}
 
const styles = StyleSheet.create({
    
})