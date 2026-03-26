// import React from "react";
// import { Text, StyleSheet, View, FlatList, TouchableOpacity } from "react-native";

// const students = [
//   { name: 'Gabriel', surname: 'Rocha', age: '17' },
//   { name: 'Kaylen', surname: 'Tyler', age: '15' },
//   { name: 'Ellie', surname: 'Mcclure', age: '17' },
//   { name: 'Journey', surname: 'Blackburn', age: '16' },
//   { name: 'Alice', surname: 'Johnson', age: '18' },
//   { name: 'Bob', surname: 'Smith', age: '19' },
//   { name: 'Charlie', surname: 'Brown', age: '17' },
//   { name: 'Diana', surname: 'Davis', age: '16' }
// ];

// const StudentsScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>All Students</Text>

//       <FlatList
//         showsVerticalScrollIndicator={false}
//         keyExtractor={(student) => student.name + student.surname}
//         data={students}
//         renderItem={({ item }) => {
//           return (
//             <TouchableOpacity
//               style={styles.studentItem}
//               onPress={() => navigation.navigate("StudentDetails", { student: item })}
//             >
//               <Text style={styles.studentName}>{item.name} {item.surname}</Text>
//               <Text style={styles.studentAge}>Age: {item.age}</Text>
//             </TouchableOpacity>
//           );
//         }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f5f5f5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   studentItem: {
//     backgroundColor: '#fff',
//     padding: 15,
//     marginBottom: 10,
//     borderRadius: 8,
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//   },
//   studentName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   studentAge: {
//     fontSize: 16,
//     color: '#666',
//   },
// });

// export default StudentsScreen;