// API Configuration File
// Configure your API settings here

export const API_CONFIG = {
  // API Base URL
  BASE_URL: 'https://jsonplaceholder.typicode.com',

  // Endpoints
  ENDPOINTS: {
    STUDENTS: '/users',
    STUDENT: '/users/:id',
  },

  // Timeout in milliseconds
  TIMEOUT: 5000,

  // API Key Settings
  API_KEY: {
    // Format: SK-[timestamp]-[random]
    PREFIX: 'SK',
    STORAGE_KEY: 'apiKey',
  },

  // Mock Data Mode
  USE_MOCK_DATA: false,

  // Development mode
  DEBUG: true,

  // Student Validation Rules
  VALIDATION: {
    AGE_MIN: 18,
    AGE_MAX: 60,
    GPA_MIN: 0.0,
    GPA_MAX: 4.0,
  },

  // Available Majors
  MAJORS: [
    'Computer Science',
    'Business',
    'Engineering',
    'Arts',
    'Medicine',
    'Law',
    'Science',
    'Education',
  ],

  // Color Scheme
  COLORS: {
    PRIMARY: '#9d9d9d',
    SUCCESS: '#7a7a7a',
    DANGER: '#8b4b4b',
    WARNING: '#b09f86',
    INFO: '#9d9d9d',
    DARK: '#4a4a4a',
    LIGHT: '#ecf0f1',
    NEUTRAL: '#95a5a6',
  },
};

export default API_CONFIG;
