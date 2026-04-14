import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { StudentContext } from '../context/StudentContext';

const AddStudent = ({ route, navigation }) => {
  const { addStudent, updateStudent } = useContext(StudentContext);
  const student = route?.params?.student;
  
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    major: '',
    gpa: '',
  });
  
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (student) {
      setFormData({
        name: student.name,
        age: student.age.toString(),
        email: student.email,
        phone: student.phone,
        major: student.major,
        gpa: student.gpa.toString(),
      });
    }
  }, [student]);

  const majors = [
    'Computer Science',
    'Business',
    'Engineering',
    'Arts',
    'Medicine',
    'Law',
    'Science',
    'Education',
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.age.trim()) newErrors.age = 'Age is required';
    if (parseInt(formData.age) < 18 || parseInt(formData.age) > 60) {
      newErrors.age = 'Age must be between 18 and 60';
    }
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.major.trim()) newErrors.major = 'Major is required';
    if (!formData.gpa.trim()) newErrors.gpa = 'GPA is required';
    if (parseFloat(formData.gpa) < 0 || parseFloat(formData.gpa) > 4.0) {
      newErrors.gpa = 'GPA must be between 0 and 4.0';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      Alert.alert('Validation Error', 'Please fix the errors and try again.');
      return;
    }

    setLoading(true);
    try {
      const newStudentData = {
        name: formData.name,
        age: parseInt(formData.age),
        email: formData.email,
        phone: formData.phone,
        major: formData.major,
        gpa: formData.gpa,
      };

      if (student) {
        updateStudent(student.id, newStudentData);
        Alert.alert('Success', 'Student updated successfully!');
      } else {
        addStudent(newStudentData);
        Alert.alert('Success', 'Student added successfully!');
      }

      setTimeout(() => {
        navigation.navigate('StudentsList');
      }, 500);
    } catch (error) {
      Alert.alert('Error', 'Failed to save student. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      age: '',
      email: '',
      phone: '',
      major: '',
      gpa: '',
    });
    setErrors({});
  };

  const FormField = ({ label, placeholder, value, onChangeText, error, keyboardType = 'default' }) => (
    <View style={styles.formGroup}>
      <Text style={styles.label}>{label} *</Text>
      <TextInput
        style={[styles.input, error && styles.inputError]}
        placeholder={placeholder}
        placeholderTextColor="#bdc3c7"
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {student ? 'Edit Student' : 'Add New Student'}
        </Text>
        <Text style={styles.subtitle}>
          {student ? 'Update student information' : 'Fill in the form to add a new student'}
        </Text>
      </View>

      <View style={styles.formContainer}>
        <FormField
          label="Full Name"
          placeholder="Enter student name"
          value={formData.name}
          onChangeText={(text) => {
            setFormData({ ...formData, name: text });
            if (errors.name) setErrors({ ...errors, name: '' });
          }}
          error={errors.name}
        />

        <FormField
          label="Age"
          placeholder="Enter age (18-60)"
          value={formData.age}
          onChangeText={(text) => {
            setFormData({ ...formData, age: text.replace(/[^0-9]/g, '') });
            if (errors.age) setErrors({ ...errors, age: '' });
          }}
          keyboardType="numeric"
          error={errors.age}
        />

        <FormField
          label="Email"
          placeholder="Enter email address"
          value={formData.email}
          onChangeText={(text) => {
            setFormData({ ...formData, email: text });
            if (errors.email) setErrors({ ...errors, email: '' });
          }}
          keyboardType="email-address"
          error={errors.email}
        />

        <FormField
          label="Phone"
          placeholder="Enter phone number"
          value={formData.phone}
          onChangeText={(text) => {
            setFormData({ ...formData, phone: text });
            if (errors.phone) setErrors({ ...errors, phone: '' });
          }}
          error={errors.phone}
        />

        <View style={styles.formGroup}>
          <Text style={styles.label}>Major *</Text>
          <View style={styles.majorSelection}>
            {majors.map((major, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.majorButton,
                  formData.major === major && styles.majorButtonActive,
                ]}
                onPress={() => {
                  setFormData({ ...formData, major });
                  if (errors.major) setErrors({ ...errors, major: '' });
                }}
              >
                <Text
                  style={[
                    styles.majorButtonText,
                    formData.major === major && styles.majorButtonTextActive,
                  ]}
                >
                  {major}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          {errors.major && <Text style={styles.errorText}>{errors.major}</Text>}
        </View>

        <FormField
          label="GPA"
          placeholder="Enter GPA (0.0 - 4.0)"
          value={formData.gpa}
          onChangeText={(text) => {
            setFormData({ ...formData, gpa: text });
            if (errors.gpa) setErrors({ ...errors, gpa: '' });
          }}
          keyboardType="decimal-pad"
          error={errors.gpa}
        />
      </View>

      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.submitButtonText}>
              {student ? 'Update Student' : 'Add Student'}
            </Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.resetButton}
          onPress={handleReset}
          disabled={loading}
        >
          <Text style={styles.resetButtonText}>Reset Form</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
          disabled={loading}
        >
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Information</Text>
        <Text style={styles.infoText}>• All fields are required</Text>
        <Text style={styles.infoText}>• Age must be between 18 and 60</Text>
        <Text style={styles.infoText}>• GPA must be between 0.0 and 4.0</Text>
        <Text style={styles.infoText}>• A valid email address is required</Text>
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
    padding: 20,
    paddingTop: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#6f6f6f',
  },
  formContainer: {
    backgroundColor: '#fafafa',
    margin: 15,
    padding: 20,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
  },
  formGroup: {
    marginBottom: 18,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#f8f8f8',
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: '#333',
  },
  inputError: {
    borderColor: '#b68989',
    backgroundColor: '#f2e7e7',
  },
  errorText: {
    color: '#8b4b4b',
    fontSize: 12,
    marginTop: 5,
  },
  majorSelection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 8,
  },
  majorButton: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#d0d0d0',
  },
  majorButtonActive: {
    backgroundColor: '#cccccc',
    borderColor: '#b0b0b0',
  },
  majorButtonText: {
    fontSize: 12,
    color: '#5f5f5f',
    fontWeight: '500',
  },
  majorButtonTextActive: {
    color: '#333',
  },
  buttonGroup: {
    paddingHorizontal: 15,
    marginVertical: 10,
    gap: 10,
  },
  submitButton: {
    backgroundColor: '#b3b3b3',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#333',
    fontSize: 15,
    fontWeight: 'bold',
  },
  resetButton: {
    backgroundColor: '#d0d0d0',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  resetButtonText: {
    color: '#333',
    fontSize: 14,
    fontWeight: '600',
  },
  cancelButton: {
    backgroundColor: '#c4c4c4',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#333',
    fontSize: 14,
    fontWeight: '600',
  },
  infoBox: {
    backgroundColor: '#f3f3f3',
    margin: 15,
    padding: 15,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#b0b0b0',
    marginBottom: 25,
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 12,
    color: '#4f4f4f',
    marginVertical: 3,
  },
});

export default AddStudent;
