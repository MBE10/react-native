import React, { createContext, useState, useEffect } from 'react';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [apiKey, setApiKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Generate API Key on mount
  useEffect(() => {
    const generatedKey = generateApiKey();
    setApiKey(generatedKey);
    localStorage.setItem('apiKey', generatedKey);
  }, []);

  // Generate random API key
  const generateApiKey = () => {
    const timestamp = Date.now().toString(36);
    const randomStr = Math.random().toString(36).substr(2, 9);
    return `SK-${timestamp}-${randomStr}`.toUpperCase();
  };

  // Fetch students from mock API
  const fetchStudents = async () => {
    setLoading(true);
    setError(null);
    try {
      // Mock API call - replace with real API
      const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=10');
      const data = await response.json();
      
      const formattedStudents = data.map((user, index) => ({
        id: user.id,
        name: user.name,
        age: Math.floor(Math.random() * (25 - 18 + 1)) + 18,
        email: user.email,
        phone: user.phone,
        major: ['Computer Science', 'Business', 'Engineering', 'Arts'][Math.floor(Math.random() * 4)],
        gpa: (Math.random() * (4.0 - 2.0) + 2.0).toFixed(2),
      }));
      
      setStudents(formattedStudents);
    } catch (err) {
      setError('Failed to fetch students: ' + err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Add new student
  const addStudent = (student) => {
    const newStudent = {
      id: students.length + 1,
      ...student,
    };
    setStudents([...students, newStudent]);
  };

  // Update student
  const updateStudent = (id, updatedData) => {
    setStudents(students.map(student => 
      student.id === id ? { ...student, ...updatedData } : student
    ));
  };

  // Delete student
  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const value = {
    students,
    apiKey,
    loading,
    error,
    fetchStudents,
    addStudent,
    updateStudent,
    deleteStudent,
    generateApiKey,
  };

  return (
    <StudentContext.Provider value={value}>
      {children}
    </StudentContext.Provider>
  );
};
