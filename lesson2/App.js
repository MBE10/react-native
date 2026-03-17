import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ListScreen from "./screens/ListScreen";
import BoxScreen from "./screens/BoxScreen";
import { NavigationContainer } from "@react-navigation/native"; 
import { createStackNavigator } from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

function CostumDrawerContent(props){
  return(
    <View style={{flex: 1 , backgroundColor: '#1a11a2e'}}>
      <View style={StyleSheet.draweHeader}>
        <View style={StyleSheet.avatarContainer}>
          <Ionicons name='planet-outline' size={50} color={'#e94560'} />
        </View>
        <Text style={styles.drawerHeaderTitle}>Fetching Data</Text>
        <Text style={styles.drawerHeaderSubtitle}>Explore Data</Text> 

      </View>

      <DrawerContentScrollView {...props} contentContainerStyle={{paddingTop: 10}}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <View style={styles.drawerFooter}>
        <Ionicons name='code-slash-outline' size={16} color={'#555'} />
      </View>
    </View>
  );
}



export default function App() {
  return (
    <>
    <NavigationContainer>
      <StatusBar style='light' />
      <Drawer.Navigator
        drawerContent={(props) => <CostumDrawerContent {...props} />}
        screenOptions={{
          drawerStyle:{
            width: 280,
          },

          drawerLabelStyle: {
            fontSize: 16,
            fontWeight: '600',
            marginLeft: -10
          },
          
          drawerActiveTintColor: '#e94560',
          drawerInactiveTintColor: '#a0a0b0',
          drawerActibeBackgroundColor: '#16213e',


          drawerItemStyle: {
            borderRadius: 12,
            marginHorizontal: 10,
            marginVertical: 4,
            paddingVertical: 2,

          },
          headerStyle:{
            backgroundColor: '#16213e',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: '#ffff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:20,
          },
        }}
        >
          {/* <Drawer.Screen
          name= 'BoxScreen'
          component={BoxScreen}
          options={{
            title: 'BoxModel',
            drawerIcon: ({color, size}) => (
              <Ionicons name='globe-outline' size={size} color={color} />
            ),
          }}
          /> */}

          <Drawer.Screen
          name= 'ListScreen'
          component={ListScreen}
          options={{
            title: 'ListScreen',
            drawerIcon: ({color, size}) => (
              <Ionicons name='document-text-outline' size={size} color={color} />
            ),
          }}
          />

         </Drawer.Navigator> 

    
    </NavigationContainer>
    </>


  );
}

const styles = StyleSheet.create({
  drawerHeader: {
    backgroundColor: '#16213e',
    paddingTop: 50,
    paddingBottom: 25,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#0F3460',
    alignItems: 'center',
  },
  avatarContainer: {
    width: 80,
    height: 50,
    borderRadius: 40,
    backgroundColor: '#1a1a2e',
    borderWidth: 2,
    borderColor: '#e94560',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  drawerHeaderTitle: {
    color: '#fff',
    fontSize:12,
    fontWeight: 'bold',
  },
  drawerHeaderSubtitle: {
    color:'#a0a0b0',
    fontSize: 12,
    marginTop: 4,
  },
  drawerFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});




