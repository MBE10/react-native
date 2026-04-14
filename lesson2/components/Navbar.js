import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { StudentContext } from '../context/StudentContext';

const Navbar = ({ onMenuPress, title }) => {
  const { apiKey } = useContext(StudentContext);

  return (
    <View style={styles.navbar}>
      <View style={styles.navContent}>
        <TouchableOpacity 
          style={styles.menuButton}
          onPress={onMenuPress}
        >
          <Text style={styles.menuIcon}>Menu</Text>
        </TouchableOpacity>
        
        <Text style={styles.title}>{title || 'Student Portal'}</Text>
        
        <View style={styles.apiKeyContainer}>
          <Text style={styles.apiKeyLabel}>API Key:</Text>
          <Text style={styles.apiKey}>{apiKey.substr(0, 10)}...</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#f2f2f2',
    paddingTop: Platform.OS === 'web' ? 10 : 0,
    paddingBottom: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#d4d4d4',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
  },
  navContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuButton: {
    padding: 10,
    marginRight: 15,
  },
  menuIcon: {
    fontSize: 24,
    color: '#333',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  apiKeyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e9ecef',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  apiKeyLabel: {
    color: '#6b6b6b',
    fontSize: 12,
    marginRight: 5,
  },
  apiKey: {
    color: '#4a4a4a',
    fontSize: 11,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'web' ? 'monospace' : 'Courier New',
  },
});

export default Navbar;
