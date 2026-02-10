import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import StudentDetails from '../components/StudentDetails';

const TestScreen = () => {
    return( 
    <View>

        <Text style={styles.textStyle}> Students Screen </Text>;
        <StudentDetails name="Ana" description="Lorem ipsum"/>
        <StudentDetails name="Leo" description="Lorem ipsum"/>
        <StudentDetails name="Anita" description="Lorem ipsum" />
    
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