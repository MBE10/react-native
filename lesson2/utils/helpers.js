// Utility functions for Student Portal

// Format date to readable format
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

// Validate email
export const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

// Validate phone number (simple check)
export const validatePhone = (phone) => {
  return phone.trim().length >= 10;
};

// Get academic status based on GPA
export const getAcademicStatus = (gpa) => {
  const gpaNum = parseFloat(gpa);
  if (gpaNum >= 3.5) return { status: 'Excellent', icon: '🌟', color: '#4a4a4a' };
  if (gpaNum >= 3.0) return { status: 'Good', icon: '👍', color: '#6a6a6a' };
  if (gpaNum >= 2.5) return { status: 'Average', icon: '📚', color: '#8c8c8c' };
  return { status: 'Below Average', icon: '⚠️', color: '#9f9f9f' };
};

// Format GPA to 2 decimal places
export const formatGPA = (gpa) => {
  return parseFloat(gpa).toFixed(2);
};

// Generate random age
export const generateRandomAge = () => {
  return Math.floor(Math.random() * (25 - 18 + 1)) + 18;
};

// Generate random GPA
export const generateRandomGPA = () => {
  return (Math.random() * (4.0 - 2.0) + 2.0).toFixed(2);
};

// Get random major from list
export const getRandomMajor = (majors) => {
  return majors[Math.floor(Math.random() * majors.length)];
};

// Calculate average GPA from students
export const calculateAverageGPA = (students) => {
  if (students.length === 0) return 0;
  const sum = students.reduce((acc, student) => acc + parseFloat(student.gpa), 0);
  return (sum / students.length).toFixed(2);
};

// Calculate average age from students
export const calculateAverageAge = (students) => {
  if (students.length === 0) return 0;
  const sum = students.reduce((acc, student) => acc + parseInt(student.age), 0);
  return Math.round(sum / students.length);
};

// Get unique majors from students
export const getUniqueMajors = (students) => {
  return [...new Set(students.map(s => s.major))];
};

// Search students by query
export const searchStudents = (students, query) => {
  const q = query.toLowerCase();
  return students.filter(student =>
    student.name.toLowerCase().includes(q) ||
    student.email.toLowerCase().includes(q) ||
    student.major.toLowerCase().includes(q) ||
    student.phone.toLowerCase().includes(q)
  );
};

// Sort students by field
export const sortStudents = (students, field, ascending = true) => {
  return [...students].sort((a, b) => {
    let aVal = a[field];
    let bVal = b[field];

    if (field === 'age' || field === 'gpa') {
      aVal = parseFloat(aVal);
      bVal = parseFloat(bVal);
    } else {
      aVal = aVal.toString().toLowerCase();
      bVal = bVal.toString().toLowerCase();
    }

    if (aVal < bVal) return ascending ? -1 : 1;
    if (aVal > bVal) return ascending ? 1 : -1;
    return 0;
  });
};

// Export student data as CSV (for future use)
export const exportStudentsAsCSV = (students) => {
  if (students.length === 0) return '';

  const headers = ['ID', 'Name', 'Age', 'Email', 'Phone', 'Major', 'GPA'];
  const rows = students.map(s => [
    s.id,
    s.name,
    s.age,
    s.email,
    s.phone,
    s.major,
    s.gpa,
  ]);

  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.join(',')),
  ].join('\n');

  return csvContent;
};

// Debounce function for search
export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

// Throttle function
export const throttle = (func, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
