import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import ProductScreen from "./screens/Products";

export default function App(){
    return(
        <>
        <NavigationContainer>
            <ProductScreen/>
        </NavigationContainer>
        </>
    );
}
 
const styles = StyleSheet.create({
    
})