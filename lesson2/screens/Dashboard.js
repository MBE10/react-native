import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform, ActivityIndicator } from 'react-native';
import { StudentContext } from '../context/StudentContext';

const Dashboard = ({ navigation }) => {
  const { students, apiKey, fetchStudents, loading, error } = useContext(StudentContext);

  useEffect(() => {
    fetchStudents();
  }, []);

  const stats = {
    totalStudents: students.length,
    avgAge: students.length > 0 
      ? (students.reduce((sum, s) => sum + parseInt(s.age), 0) / students.length).toFixed(1)
      : 0,
    majors: [...new Set(students.map(s => s.major))].length,
    avgGPA: students.length > 0
      ? (students.reduce((sum, s) => sum + parseFloat(s.gpa), 0) / students.length).toFixed(2)
      : 0,
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeTitle}>Welcome to Student Portal</Text>
        <Text style={styles.welcomeSubtitle}>Manage student information efficiently</Text>
      </View>

      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}

      <View style={styles.statsGrid}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{stats.totalStudents}</Text>
          <Text style={styles.statLabel}>Total Students</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statValue}>{stats.avgAge}</Text>
          <Text style={styles.statLabel}>Average Age</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statValue}>{stats.majors}</Text>
          <Text style={styles.statLabel}>Majors</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statValue}>{stats.avgGPA}</Text>
          <Text style={styles.statLabel}>Average GPA</Text>
        </View>
      </View>

      <View style={styles.apiKeySection}>
        <Text style={styles.sectionTitle}>API Configuration</Text>
        <View style={styles.apiKeyBox}>
          <Text style={styles.apiKeyText}>API Key: {apiKey}</Text>
          <Text style={styles.apiKeyNote}>This key is used for all API requests</Text>
        </View>
      </View>

      <View style={styles.actionSection}>
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => {
            fetchStudents();
          }}
        >
          <Text style={styles.actionButtonText}>Refresh Data</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.actionButton, styles.primaryButton]}
          onPress={() => navigation.navigate('StudentsList')}
        >
          <Text style={styles.actionButtonText}>View Students</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.actionButton, styles.successButton]}
          onPress={() => navigation.navigate('AddStudent')}
        >
          <Text style={styles.actionButtonText}>Add Student</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.recentStudents}>
        <Text style={styles.sectionTitle}>Recent Students</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#7f8c8d" />
        ) : students.length > 0 ? (
          students.slice(0, 3).map((student) => (
            <View key={student.id} style={styles.studentItem}>
              <View style={styles.studentInfo}>
                <Text style={styles.studentName}>{student.name}</Text>
                <Text style={styles.studentDetails}>Age: {student.age} | {student.major}</Text>
              </View>
              <Text style={styles.studentGPA}>GPA: {student.gpa}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.emptyText}>No students found. Add one to get started!</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  welcomeSection: {
    backgroundColor: '#f5f5f5',
    padding: 25,
    paddingTop: 20,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2f2f2f',
    marginBottom: 5,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#6f6f6f',
  },
  errorContainer: {
    backgroundColor: '#f5e6e6',
    padding: 15,
    margin: 15,
    borderRadius: 8,
  },
  errorText: {
    color: '#7a3838',
    fontSize: 14,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-between',
  },
  statCard: {
    width: '48%',
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
  },
  statIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  statValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 12,
    color: '#7f8c8d',
    marginTop: 5,
  },
  apiKeySection: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  apiKeyBox: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#9d9d9d',
  },
  apiKeyText: {
    fontSize: 13,
    color: '#333',
    fontFamily: Platform.OS === 'web' ? 'monospace' : 'Courier New',
    marginBottom: 8,
  },
  apiKeyNote: {
    fontSize: 12,
    color: '#7f8c8d',
  },
  actionSection: {
    padding: 15,
    gap: 10,
  },
  actionButton: {
    backgroundColor: '#d9d9d9',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#bdbdbd',
  },
  successButton: {
    backgroundColor: '#9fa3a7',
  },
  actionButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
  },
  recentStudents: {
    padding: 15,
    paddingBottom: 25,
  },
  studentItem: {
    backgroundColor: '#fff',
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  studentInfo: {
    flex: 1,
  },
  studentName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },
  studentDetails: {
    fontSize: 12,
    color: '#7f8c8d',
    marginTop: 4,
  },
  studentGPA: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4d4d4d',
  },
  emptyText: {
    textAlign: 'center',
    color: '#7f8c8d',
    fontSize: 14,
    marginVertical: 20,
  },
});

export default Dashboard;
