# 🎯 Developer Quick Reference Card

## Student Portal - Developer Cheat Sheet

---

## 🚀 Commands

```bash
# Start web app
npm run web

# Start iOS
npm run ios

# Start Android
npm run android

# Install dependencies
npm install

# Clear cache and rebuild
npm cache clean --force && npm install && npm run web -- --clear

# Use different port
expo start --web --port 8082
```

---

## 📁 Key Files

| File | Purpose |
|------|---------|
| `App.js` | Main entry, navigation setup |
| `context/StudentContext.js` | Global state |
| `api/apiClient.js` | API calls & key |
| `screens/Dashboard.js` | Home screen |
| `screens/StudentsList.js` | View/search students |
| `screens/AddStudent.js` | Add/edit form |
| `screens/StudentDetails.js` | Student profile |
| `components/Navbar.js` | Top bar |
| `components/Sidebar.js` | Side drawer |

---

## 🔄 Data Flow

### Fetch Students
```javascript
// In component:
const { students, fetchStudents, loading } = useContext(StudentContext);

useEffect(() => {
  fetchStudents();  // Fetch from API
}, []);
```

### Add Student
```javascript
const { addStudent } = useContext(StudentContext);

addStudent({
  name: 'John Doe',
  age: 20,
  email: 'john@email.com',
  phone: '555-1234',
  major: 'Computer Science',
  gpa: '3.5'
});
```

### Update Student
```javascript
const { updateStudent } = useContext(StudentContext);

updateStudent(studentId, {
  name: 'Jane Doe',
  age: 21
  // Only changed fields
});
```

### Delete Student
```javascript
const { deleteStudent } = useContext(StudentContext);

deleteStudent(studentId);
```

---

## 📊 Student Object Structure

```javascript
{
  id: 1,
  name: 'John Doe',
  age: 20,
  email: 'john@example.com',
  phone: '555-1234',
  major: 'Computer Science',
  gpa: '3.85'
}
```

---

## 🎨 Styling Quick Reference

### Colors
```javascript
PRIMARY: '#3498db'      // Blue
SUCCESS: '#27ae60'      // Green  
DANGER: '#e74c3c'       // Red
WARNING: '#f39c12'      // Orange
DARK: '#2c3e50'         // Dark gray
LIGHT: '#ecf0f1'        // Light gray
```

### Common Styles
```javascript
// Button
backgroundColor: '#3498db'
paddingVertical: 12
paddingHorizontal: 20
borderRadius: 8
color: '#fff'

// Shadow (iOS)
shadowColor: '#000'
shadowOffset: { width: 0, height: 2 }
shadowOpacity: 0.1
shadowRadius: 3

// Shadow (Android)
elevation: 2
```

---

## 🔑 API Key

### Get Current Key
```javascript
const { apiKey } = useContext(StudentContext);
console.log(apiKey); // SK-xxxxx-xxxxx
```

### Generate New Key
```javascript
const { generateApiKey } = useContext(StudentContext);
const newKey = generateApiKey();
```

---

## ✅ Validation Rules

| Field | Rule | Example |
|-------|------|---------|
| Name | Non-empty string | "John Doe" |
| Age | 18-60 | 20 |
| Email | Valid format | "john@email.com" |
| Phone | Non-empty | "555-1234" |
| Major | From list | "Computer Science" |
| GPA | 0.0-4.0 | "3.85" |

---

## 🎓 Available Majors

```javascript
[
  'Computer Science',
  'Business',
  'Engineering',
  'Arts',
  'Medicine',
  'Law',
  'Science',
  'Education'
]
```

---

## 📱 Navigation Quick Reference

### Navigate to Screen
```javascript
navigation.navigate('Dashboard');
navigation.navigate('StudentsList');
navigation.navigate('AddStudent');
navigation.navigate('StudentDetails', { student: {} });
```

### Go Back
```javascript
navigation.goBack();
```

### Replace Screen
```javascript
navigation.replace('Dashboard');
```

---

## 🛠️ Debugging Tips

### Check Console
```javascript
console.log('Value:', value);
console.error('Error:', error);
console.warn('Warning:', warning);
```

### React DevTools
- Open DevTools: F12
- Console tab: Check errors
- Network tab: Check API calls
- Storage tab: Check localStorage

### Common Errors
```javascript
// Module not found
// Solution: Check file path and import statement

// Cannot read property 'length' of undefined
// Solution: Check if array exists before using

// Navigation not working
// Solution: Verify screen name matches exactly
```

---

## 🎯 Common Tasks

### Search Implementation
```javascript
const [search, setSearch] = useState('');
const filtered = students.filter(s =>
  s.name.toLowerCase().includes(search.toLowerCase())
);
```

### Form Validation
```javascript
const validateForm = () => {
  if (!name.trim()) return false;
  if (age < 18 || age > 60) return false;
  if (!email.includes('@')) return false;
  return true;
};
```

### Loading Indicator
```javascript
{loading ? (
  <ActivityIndicator size="large" color="#3498db" />
) : (
  <View>Content</View>
)}
```

### Error Display
```javascript
{error && (
  <View style={{ backgroundColor: '#fadbd8', padding: 10 }}>
    <Text style={{ color: '#e74c3c' }}>{error}</Text>
  </View>
)}
```

---

## 🔗 Useful Code Snippets

### Get Academic Status
```javascript
const getStatus = (gpa) => {
  if (gpa >= 3.5) return { icon: '🌟', label: 'Excellent' };
  if (gpa >= 3.0) return { icon: '👍', label: 'Good' };
  if (gpa >= 2.5) return { icon: '📚', label: 'Average' };
  return { icon: '⚠️', label: 'Below Average' };
};
```

### Calculate Average
```javascript
const avgGPA = students.length > 0
  ? (students.reduce((sum, s) => sum + parseFloat(s.gpa), 0) / students.length).toFixed(2)
  : 0;
```

### Format DateTime
```javascript
const formatted = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric'
});
```

---

## 📂 File Organization

```
New files to create/edit:
✅ App.js                     - Main navigation
✅ context/StudentContext.js  - State management
✅ api/apiClient.js           - API handler
✅ screens/Dashboard.js       - Home screen
✅ screens/StudentsList.js    - List screen
✅ screens/AddStudent.js      - Form screen
✅ screens/StudentDetails.js  - Detail screen
✅ components/Navbar.js       - Top nav
✅ components/Sidebar.js      - Side drawer
✅ config/apiConfig.js        - Config
✅ utils/helpers.js           - Utilities
```

---

## 🚨 Error Checklist

| Error | Cause | Fix |
|-------|-------|-----|
| Port in use | Another process | Use different port |
| Module not found | Missing import | Check path |
| TypeError: can't read | Undefined value | Add null check |
| Network error | No internet | Check connection |
| Form validation | Invalid input | Check rules |

---

## 🔄 Screen Navigation Map

```
           Dashboard
              ↓ ↑
        ┌─────┼─────┐
        ↓           ↓
   Students List  Add Student
        ↓
   Student Details
```

---

## 💾 localStorage Operations

### Store API Key
```javascript
localStorage.setItem('apiKey', key);
```

### Get API Key
```javascript
const key = localStorage.getItem('apiKey');
```

### Clear All
```javascript
localStorage.clear();
```

---

## 🎬 Lifecycle Quick Guide

```javascript
// On component mount
useEffect(() => {
  // Fetch data
  fetchStudents();
}, []); // Empty array = run once

// On state change
useEffect(() => {
  // React to changes
  console.log(students);
}, [students]); // Run when students changes
```

---

## 📞 Quick Help

| Question | Answer |
|----------|--------|
| How to start? | `npm run web` |
| How to add student? | Use AddStudent screen form |
| How to search? | Type in search box on list |
| How to delete? | Click delete button on card |
| How to get API key? | Check navbar top right |
| How to refresh data? | Click refresh button |
| How to edit student? | Click edit button or use form |
| How to view details? | Click view button or details screen |

---

## 🎓 Learning Resources

- React: https://react.dev
- React Native: https://reactnative.dev
- Expo: https://expo.dev
- Navigation: https://reactnavigation.org
- Context API: https://react.dev/reference/react/useContext

---

**Keep this handy for quick reference! 📝**
