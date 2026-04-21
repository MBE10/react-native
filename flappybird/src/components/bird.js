import React from "react";
import {view} from 'react-native';

const Bird = () =>{
    const birdWidth = 50
    const birdHeight = 60

    return(
        <View style = {{
            position: 'absolute',
            left: birdLeft - (birdWidth/2),
            bottom: birdBottom - (birdHeight/2),
            width: 40,
            height:40

        }}
        source={require('../../assets/bird1.png')}
        resizeMode="stretch"
        />
    )
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 40,
        height: 40
    },
 });

export default Bird;