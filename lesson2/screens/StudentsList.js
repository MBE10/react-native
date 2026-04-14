import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { StudentContext } from '../context/StudentContext';

const StudentsList = ({ navigation }) => {
  const { students, loading, fetchStudents, deleteStudent } = useContext(StudentContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStudents, setFilteredStudents] = useState(students);

  useEffect(() => {
    fetchStudents();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredStudents(students);
    } else {
      const filtered = students.filter(student =>
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.major.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredStudents(filtered);
    }
  }, [searchQuery, students]);

  const handleDelete = (id) => {
    deleteStudent(id);
  };

  const handleEdit = (student) => {
    navigation.navigate('AddStudent', { student });
  };

  const StudentCard = ({ item }) => (
    <View style={styles.studentCard}>
      <View style={styles.cardHeader}>
        <View style={styles.cardTitle}>
          <Text style={styles.studentName}>{item.name}</Text>
          <Text style={styles.studentId}>ID: {item.id}</Text>
        </View>
        <Text style={styles.gpaTag}>{item.gpa}</Text>
      </View>

      <View style={styles.cardContent}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Age:</Text>
          <Text style={styles.value}>{item.age}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Major:</Text>
          <Text style={styles.value}>{item.major}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{item.email}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>{item.phone}</Text>
        </View>
      </View>

      <View style={styles.cardFooter}>
        <TouchableOpacity 
          style={styles.buttonEdit}
          onPress={() => handleEdit(item)}
        >
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.buttonDelete}
          onPress={() => handleDelete(item.id)}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.buttonView}
          onPress={() => navigation.navigate('StudentDetails', { student: item })}
        >
          <Text style={styles.buttonText}>Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Text style={styles.headerTitle}>Students Directory</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by name, email, or major..."
          placeholderTextColor="#95a5a6"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Text style={styles.resultCount}>
          Found: {filteredStudents.length} student{filteredStudents.length !== 1 ? 's' : ''}
        </Text>
      </View>

      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#7f8c8d" />
          <Text style={styles.loadingText}>Fetching students...</Text>
        </View>
      ) : filteredStudents.length > 0 ? (
        <FlatList
          data={filteredStudents}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <StudentCard item={item} />}
          contentContainerStyle={styles.listContent}
          scrollEnabled={true}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>No Students Found</Text>
          <Text style={styles.emptyText}>
            {searchQuery ? 'Try a different search term' : 'Add your first student to get started'}
          </Text>
          <TouchableOpacity 
            style={styles.addButton}
            onPress={() => navigation.navigate('AddStudent')}
          >
            <Text style={styles.addButtonText}>Add Student</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  searchContainer: {
    backgroundColor: '#f7f7f7',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#bdc3c7',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  searchInput: {
    backgroundColor: '#f8f8f8',
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  resultCount: {
    fontSize: 12,
    color: '#7f8c8d',
  },
  listContent: {
    padding: 10,
    paddingBottom: 20,
  },
  studentCard: {
    backgroundColor: '#fafafa',
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    overflow: 'hidden',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#d8d8d8',
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  cardTitle: {
    flex: 1,
  },
  studentName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  studentId: {
    fontSize: 12,
    color: '#6f6f6f',
    marginTop: 3,
  },
  gpaTag: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  cardContent: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#7f8c8d',
  },
  value: {
    fontSize: 13,
    color: '#333',
    flex: 1,
    textAlign: 'right',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    gap: 8,
  },
  buttonEdit: {
    flex: 1,
    backgroundColor: '#b0b0b0',
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonDelete: {
    flex: 1,
    backgroundColor: '#c7c3c3',
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonView: {
    flex: 1,
    backgroundColor: '#909090',
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    color: '#7f8c8d',
    fontSize: 14,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: 15,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 14,
    color: '#7f8c8d',
    textAlign: 'center',
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#d1d3d6',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#333',
    fontSize: 15,
    fontWeight: '600',
  },
});

export default StudentsList;
