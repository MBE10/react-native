import React from "react";
import { View , Text , FlatList } from "react-native"

const footballers = [
    {name: "Mbappe", team:"Real Madrid", number:10},
    {name: "Doue", team:"PSG", number:14},
    {name: "Raphina", team:"Barcelona", number:11}

    
]


const FlatListsExample2 = ()=>{
    return(
        <View>
            <Text>Lists of Players</Text>
            <FlatList

            data={footballers}
            renderItem={({item}) =>{
                return <View>
                    <Text>{item.name} {item.team} {item.number} </Text>
                </View>
            }}/>
        </View>
    )
}

export default FlatListsExample2