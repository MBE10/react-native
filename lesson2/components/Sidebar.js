import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Platform } from 'react-native';

const Sidebar = ({ isOpen, onClose, onNavigate, activeScreen }) => {
  const menuItems = [
    { label: 'Dashboard', screen: 'Dashboard' },
    { label: 'Students List', screen: 'StudentsList' },
    { label: 'Add Student', screen: 'AddStudent' },
  ];

  const handleNavigation = (screen) => {
    if (typeof onNavigate === 'function') {
      onNavigate(screen);
    }
    onClose();
  };

  if (Platform.OS === 'web') {
    return (
      <View style={[styles.sidebar, isOpen ? styles.sidebarOpen : styles.sidebarClosed]}>
        <View style={styles.sidebarHeader}>
          <Text style={styles.headerTitle}>Menu</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
        
        <ScrollView style={styles.menuList}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.menuItem,
                activeScreen === item.screen && styles.menuItemActive,
              ]}
              onPress={() => handleNavigation(item.screen)}
            >
              <Text style={styles.menuLabel}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.sidebarFooter}>
          <Text style={styles.footerText}>© 2025 Student Portal</Text>
        </View>
      </View>
    );
  }

  // Native version
  return (
    <View style={styles.sidebar}>
      <View style={styles.sidebarHeader}>
        <Text style={styles.headerTitle}>Menu</Text>
      </View>
      
      <ScrollView style={styles.menuList}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => handleNavigation(item.screen)}
          >
            <Text style={styles.menuIcon}>{item.icon}</Text>
            <Text style={styles.menuLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.sidebarFooter}>
        <Text style={styles.footerText}>© 2025 Student Portal</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    width: 250,
    backgroundColor: '#f8f8f8',
    height: '100%',
    borderRightWidth: 1,
    borderRightColor: '#d1d1d1',
    position: Platform.OS === 'web' ? 'relative' : 'absolute',
    top: 0,
    zIndex: 1000,
  },
  sidebarOpen: {
    transform: [{ translateX: 0 }],
  },
  sidebarClosed: {
    width: 0,
    overflow: 'hidden',
  },
  sidebarHeader: {
    backgroundColor: '#e5e5e5',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#d0d0d0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  closeButton: {
    padding: 5,
  },
  closeButtonText: {
    fontSize: 20,
    color: '#707070',
  },
  menuList: {
    flex: 1,
    paddingVertical: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.08)',
  },
  menuIcon: {
    fontSize: 20,
    marginRight: 15,
  },
  menuLabel: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  sidebarFooter: {
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#d0d0d0',
    backgroundColor: '#e5e5e5',
  },
  footerText: {
    fontSize: 12,
    color: '#7a7a7a',
    textAlign: 'center',
  },
});

export default Sidebar;
