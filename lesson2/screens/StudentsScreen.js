import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

const TestScreen = () => {
    return( 
    <View>

        <Text style={styles.textStyle}> Students Screen </Text>;
    
    </View>    

    
)};

const styles = StyleSheet.create({
    textStyle:{
        fontSize:30,
        textAlign: 'center',
        marginVertical: 20
    }
});

export default TestScreen;