import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

const TestScreen = () => {
    return <Text style={styles.textStyle}> Test Screen </Text>;
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize:30
    }
});

export default TestScreen;