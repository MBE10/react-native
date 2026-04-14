import React, { useState } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

// Providers & Context
import { StudentProvider } from './context/StudentContext';

// Screens
import Dashboard from './screens/Dashboard';
import StudentsList from './screens/StudentsList';
import AddStudent from './screens/AddStudent';
import StudentDetails from './screens/StudentDetails';

// Components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const Stack = createStackNavigator();

const RootApp = () => {
  const [sidebarOpen, setSidebarOpen] = useState(Platform.OS === 'web');
  const [currentScreen, setCurrentScreen] = useState('Dashboard');

  const navigationRef = useNavigationContainerRef();

  const handleNavigate = (screen) => {
    if (navigationRef.isReady && navigationRef.isReady()) {
      navigationRef.navigate(screen);
      setSidebarOpen(false);
    }
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        if (!navigationRef.getCurrentRoute()) {
          setCurrentScreen('Dashboard');
        }
      }}
    >
      <View style={styles.container}>
        <Navbar 
          onMenuPress={() => setSidebarOpen(!sidebarOpen)}
          title={currentScreen}
        />
        
        <View style={styles.mainContainer}>
          {Platform.OS === 'web' && (
            <Sidebar 
              isOpen={sidebarOpen}
              onClose={() => setSidebarOpen(false)}
              onNavigate={handleNavigate}
              activeScreen={currentScreen}
            />
          )}
          
          <View style={styles.contentContainer}>
            <Stack.Navigator
              screenOptions={{ headerShown: false }}
              screenListeners={{
                state: (e) => {
                  const routeName = e.data.state.routes[e.data.state.index].name;
                  setCurrentScreen(routeName);
                },
              }}
            >
              <Stack.Screen name="Dashboard" component={Dashboard} />
              <Stack.Screen name="StudentsList" component={StudentsList} />
              <Stack.Screen name="AddStudent" component={AddStudent} />
              <Stack.Screen name="StudentDetails" component={StudentDetails} />
            </Stack.Navigator>
          </View>
        </View>
      </View>

      <StatusBar barStyle="light-content" />
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <StudentProvider>
      <RootApp />
    </StudentProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  contentContainer: {
    flex: 1,
  },
});