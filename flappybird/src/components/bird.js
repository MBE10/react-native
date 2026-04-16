import React from "react";
import {view} from 'react-native';

const Bird = () =>{
    const birdWidth = 50
    const birdHeight = 60

    return(
        <View style = {{
            position: 'absolute',
            backgroundColor: 'Blue',
            height:birdHeight,
            width:birdWidth,
            left: birdLeft - (birdWidth/2),
            bottom: birdBottom - (birdHeight/2)




        }}></View>
    )
}