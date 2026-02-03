import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity} from "react-native-web";

const  ButtonScreen = () => {


    let counter , counterT = 0;
    return(
        <View>
            <Text style={styles.textStyle}>Button Screen</Text>
            <Button
            title="Click Me"
            color="Purple"
            onPress={() => console.log('Button Clicked', counter++)}
            />
            <TouchableOpacity
            title = "Click"
            style={styles.touchableBtn}
            onPress={() => console.log('TouchableOpacoty clicked', counterT++)}
            > <Text style={StyleSheetList.btnText}>Click the TouchableOpacity</Text></TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    textStyle:{
        textAlign: 'center',
        marginTop: 10,
        fontSize: 20,
        marginBottom: 10
    },
    touchableBtn:{
        backgroundColor: 'purple',
        marginVertical: 15,
        paddingVertical: 20,
        borderRadius: 6,
        marginHorizontal: 20,
    },
    btnText:{
        color:"white",
        textAlign: 'Center',
        fontSize: 15,
        fontweight: 'bold'
    }
})

export default ButtonScreen;