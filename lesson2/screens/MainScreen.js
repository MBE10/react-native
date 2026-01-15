import { setStatusBarBackgroundColor } from "expo-status-bar";
import React from "react";
import { Text, Stylesheet, View  } from "react-native";

const MainScreen = () => {

    return(
    <view style={style.container}>
        <text style={style.TextStyle}>This is Main MainScreen</text>
    </view>)
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    TextStyle: {
        fontSize: 30
    }
});

export default MainScreen;