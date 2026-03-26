// import React from "react";
// import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// const StudentDetailsScreen = ({ route, navigation }) => {
//   const student = route.params?.student;

//   if (!student) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.error}>No student data available</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity
//           style={styles.backButton}
//           onPress={() => navigation.goBack()}
//         >
//           <Ionicons name="arrow-back" size={24} color="#fff" />
//         </TouchableOpacity>
//         <Text style={styles.title}>Student Details</Text>
//       </View>

//       <View style={styles.detailsContainer}>
//         <View style={styles.avatar}>
//           <Ionicons name="person-circle-outline" size={80} color="#e94560" />
//         </View>

//         <View style={styles.infoContainer}>
//           <Text style={styles.name}>{student.name} {student.surname}</Text>
//           <Text style={styles.age}>Age: {student.age}</Text>
//         </View>

//         <View style={styles.additionalInfo}>
//           <Text style={styles.label}>Full Name:</Text>
//           <Text style={styles.value}>{student.name} {student.surname}</Text>

//           <Text style={styles.label}>Age:</Text>
//           <Text style={styles.value}>{student.age} years old</Text>

//           <Text style={styles.label}>Status:</Text>
//           <Text style={styles.value}>Active Student</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   header: {
//     backgroundColor: '#16213e',
//     paddingTop: 50,
//     paddingBottom: 20,
//     paddingHorizontal: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   backButton: {
//     marginRight: 15,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   detailsContainer: {
//     flex: 1,
//     alignItems: 'center',
//     padding: 20,
//   },
//   avatar: {
//     marginBottom: 20,
//   },
//   infoContainer: {
//     alignItems: 'center',
//     marginBottom: 30,
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#16213e',
//     marginBottom: 5,
//   },
//   age: {
//     fontSize: 18,
//     color: '#666',
//   },
//   additionalInfo: {
//     width: '100%',
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 10,
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#16213e',
//     marginTop: 15,
//     marginBottom: 5,
//   },
//   value: {
//     fontSize: 16,
//     color: '#666',
//   },
//   error: {
//     fontSize: 18,
//     textAlign: 'center',
//     marginTop: 50,
//     color: '#e94560',
//   },
// });

// export default StudentDetailsScreen;