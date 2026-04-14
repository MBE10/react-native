import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const StudentDetails = ({ route, navigation }) => {
  const { student } = route.params;

  const DetailField = ({ label, value }) => (
    <View style={styles.detailField}>
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.studentName}>{student.name}</Text>
      </View>

      <View style={styles.gpaCard}>
        <Text style={styles.gpaLabel}>Current GPA</Text>
        <Text style={styles.gpaValue}>{student.gpa}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        
        <DetailField label="Age" value={`${student.age} years old`} />
        <DetailField label="Email" value={student.email} />
        <DetailField label="Phone" value={student.phone} />
        
        <Text style={styles.sectionTitle}>Academic Information</Text>
        
        <DetailField label="Major" value={student.major} />
        <DetailField label="GPA" value={student.gpa} />
        <DetailField label="Student ID" value={`#${student.id}`} />

        <View style={styles.statusContainer}>
          <Text style={styles.statusLabel}>Academic Status</Text>
          <Text style={[
            styles.statusBadge,
            parseFloat(student.gpa) >= 3.5 ? styles.statusExcellent :
            parseFloat(student.gpa) >= 3.0 ? styles.statusGood :
            parseFloat(student.gpa) >= 2.5 ? styles.statusAverage :
            styles.statusBelow
          ]}>
            {parseFloat(student.gpa) >= 3.5 ? 'Excellent' :
             parseFloat(student.gpa) >= 3.0 ? 'Good' :
             parseFloat(student.gpa) >= 2.5 ? 'Average' :
             'Below Average'}
          </Text>
        </View>
      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity 
          style={styles.editButton}
          onPress={() => navigation.navigate('AddStudent', { student })}
        >
          <Text style={styles.buttonText}>Edit Student</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#e5e5e5',
    paddingVertical: 30,
    alignItems: 'center',
  },
  headerIcon: {
    fontSize: 48,
    marginBottom: 10,
  },
  studentName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
  },
  gpaCard: {
    backgroundColor: '#fafafa',
    margin: 15,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
  },
  gpaLabel: {
    fontSize: 14,
    color: '#6f6f6f',
    marginBottom: 8,
  },
  gpaValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  detailsContainer: {
    backgroundColor: '#fafafa',
    margin: 15,
    borderRadius: 10,
    padding: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 15,
    marginBottom: 12,
    paddingBottomWidth: 1,
    paddingBottomColor: '#ecf0f1',
  },
  detailField: {
    marginVertical: 10,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
  },
  detailLabel: {
    fontSize: 13,
    color: '#7f8c8d',
    fontWeight: '600',
    marginBottom: 5,
  },
  detailValue: {
    fontSize: 15,
    color: '#333',
    fontWeight: '500',
  },
  statusContainer: {
    marginVertical: 15,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: '#f3f3f3',
    borderRadius: 8,
  },
  statusLabel: {
    fontSize: 13,
    color: '#7f8c8d',
    fontWeight: '600',
    marginBottom: 8,
  },
  statusBadge: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    textAlign: 'center',
  },
  statusExcellent: {
    backgroundColor: '#dbe2e6',
    color: '#495057',
  },
  statusGood: {
    backgroundColor: '#d8d8d8',
    color: '#495057',
  },
  statusAverage: {
    backgroundColor: '#e5e1dd',
    color: '#515151',
  },
  statusBelow: {
    backgroundColor: '#e8d6d6',
    color: '#5c4b4b',
  },
  actionButtons: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    gap: 10,
  },
  editButton: {
    backgroundColor: '#c0c0c0',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: '#d3d3d3',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#333',
    fontSize: 15,
    fontWeight: '600',
  },
});

export default StudentDetails;
