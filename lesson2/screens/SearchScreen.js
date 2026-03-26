// import React, { useState } from "react";
// import { Text, StyleSheet, View, FlatList, TouchableOpacity, TextInput } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

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

// const SearchScreen = ({ navigation }) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredStudents, setFilteredStudents] = useState(students);

//   const handleSearch = (query) => {
//     setSearchQuery(query);
//     if (query.trim() === '') {
//       setFilteredStudents(students);
//     } else {
//       const filtered = students.filter(student =>
//         student.name.toLowerCase().includes(query.toLowerCase()) ||
//         student.surname.toLowerCase().includes(query.toLowerCase())
//       );
//       setFilteredStudents(filtered);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Search Students</Text>

//       <View style={styles.searchContainer}>
//         <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search by name..."
//           value={searchQuery}
//           onChangeText={handleSearch}
//           autoCapitalize="none"
//           autoCorrect={false}
//         />
//         {searchQuery.length > 0 && (
//           <TouchableOpacity onPress={() => handleSearch('')}>
//             <Ionicons name="close-circle" size={20} color="#666" />
//           </TouchableOpacity>
//         )}
//       </View>

//       <Text style={styles.resultsText}>
//         {filteredStudents.length} student{filteredStudents.length !== 1 ? 's' : ''} found
//       </Text>

//       <FlatList
//         showsVerticalScrollIndicator={false}
//         keyExtractor={(student) => student.name + student.surname}
//         data={filteredStudents}
//         renderItem={({ item }) => {
//           return (
//             <TouchableOpacity
//               style={styles.studentItem}
//               onPress={() => navigation.navigate("StudentDetails", { student: item })}
//             >
//               <View style={styles.studentInfo}>
//                 <Text style={styles.studentName}>{item.name} {item.surname}</Text>
//                 <Text style={styles.studentAge}>Age: {item.age}</Text>
//               </View>
//               <Ionicons name="chevron-forward" size={24} color="#666" />
//             </TouchableOpacity>
//           );
//         }}
//         ListEmptyComponent={
//           <View style={styles.emptyContainer}>
//             <Ionicons name="search-outline" size={50} color="#ccc" />
//             <Text style={styles.emptyText}>No students found</Text>
//           </View>
//         }
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
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     marginBottom: 15,
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//   },
//   searchIcon: {
//     marginRight: 10,
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 16,
//     color: '#333',
//   },
//   resultsText: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 15,
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
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   studentInfo: {
//     flex: 1,
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
//   emptyContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: 50,
//   },
//   emptyText: {
//     fontSize: 18,
//     color: '#ccc',
//     marginTop: 10,
//   },
// });

// export default SearchScreen;