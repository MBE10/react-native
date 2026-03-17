import React from "react";
import { Text, StyleSheet, View, FlatList, Button} from "react-native";

const students  = [
  {name: 'Gabriel', surname: 'Rocha', age: '17'},
  {name: 'Kaylen', surname: 'Tyler', age: '15'},
  {name: 'Ellie', surname: 'Mcclure', age: '17'},
  {name: 'Journey', surname: 'Blackburn', age: '16'}
];

const ListScreen = (props) => {
  return(
    <View>
        <Text style={styles.textStyle}>List of Students</Text>
        <FlatList 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={student => student.name}
            data={students} 
            renderItem={({item}) => {
              return <Text style={styles.studentWrapper}>{item.name} {item.surname} - {item.age}</Text>
            }}
        />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ListScreen;