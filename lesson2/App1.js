// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// import ListScreen from "./screens/ListScreen";
// import StudentsScreen from "./screens/StudentsScreen";
// import StudentDetailsScreen from "./screens/StudentDetailsScreen";
// import SearchScreen from "./screens/SearchScreen";
// import { NavigationContainer } from "@react-navigation/native";
// import {Ionicons} from "@expo/vector-icons";
// import {createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from "@react-navigation/drawer";

// const Drawer = createDrawerNavigator();

// function CustomDrawerContent(props) {
//   return (
//     <View style={{flex: 1, backgroundColor: '#1a11a2e'}}>
//       <View style={styles.drawerHeader}>
//         <View style={styles.avatarContainer}>
//           <Ionicons name='planet-outline' size={50} color={'#e94560'} />
//         </View>
//         <Text style={styles.drawerHeaderTitle}>Student App</Text>
//         <Text style={styles.drawerHeaderSubtitle}>Manage Students</Text>
//       </View>

//       <DrawerContentScrollView {...props} contentContainerStyle={{paddingTop: 10}}>
//         <DrawerItemList {...props} />
//       </DrawerContentScrollView>

//       <View style={styles.drawerFooter}>
//         <Ionicons name='code-slash-outline' size={16} color={'#555'} />
//         <Text style={styles.drawerFooterText}>React Native</Text>
//       </View>
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <StatusBar style="light" />
//       <Drawer.Navigator
//         drawerContent={(props) => <CustomDrawerContent {...props} />}
//         screenOptions={{
//           drawerStyle:{
//             width: 280,
//             backgroundColor: '#16213e',
//           },
//           drawerLabelStyle: {
//             fontSize: 16,
//             fontWeight: '600',
//             marginLeft: -10,
//             color: '#fff',
//           },
//           drawerActiveTintColor: '#e94560',
//           drawerInactiveTintColor: '#a0a0b0',
//           drawerActiveBackgroundColor: '#0F3460',
//           drawerItemStyle: {
//             borderRadius: 12,
//             marginHorizontal: 10,
//             marginVertical: 4,
//             paddingVertical: 2,
//           },
//           headerStyle:{
//             backgroundColor: '#16213e',
//           },
//           headerTintColor: '#ffff',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//             fontSize:20,
//           },
//         }}
//       >
//         <Drawer.Screen
//           name="ListScreen"
//           component={ListScreen}
//           options={{
//             title: 'Student List',
//             drawerIcon: ({color, size}) => (
//               <Ionicons name='document-text-outline' size={size} color={color} />
//             ),
//           }}
//         />

//         <Drawer.Screen
//           name="Students"
//           component={StudentsScreen}
//           options={{
//             title: 'All Students',
//             drawerIcon: ({color, size}) => (
//               <Ionicons name='people-outline' size={size} color={color} />
//             ),
//           }}
//         />

//         <Drawer.Screen
//           name="Search"
//           component={SearchScreen}
//           options={{
//             title: 'Search Students',
//             drawerIcon: ({color, size}) => (
//               <Ionicons name='search-outline' size={size} color={color} />
//             ),
//           }}
//         />

//         <Drawer.Screen
//           name="StudentDetails"
//           component={StudentDetailsScreen}
//           options={{
//             title: 'Student Details',
//             drawerIcon: ({color, size}) => (
//               <Ionicons name='person-outline' size={size} color={color} />
//             ),
//           }}
//         />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   drawerHeader: {
//     backgroundColor: '#16213e',
//     paddingTop: 50,
//     paddingBottom: 25,
//     paddingHorizontal: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#0F3460',
//     alignItems: 'center',
//   },
//   avatarContainer: {
//     width: 80,
//     height: 50,
//     borderRadius: 40,
//     backgroundColor: '#1a1a2e',
//     borderWidth: 2,
//     borderColor: '#e94560',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   drawerHeaderTitle: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   drawerHeaderSubtitle: {
//     color: '#a0a0b0',
//     fontSize: 12,
//     marginTop: 4,
//   },
//   drawerFooter: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingBottom: 20,
//   },
//   drawerFooterText: {
//     color: '#555',
//     fontSize: 12,
//     marginLeft: 5,
//   },
// });