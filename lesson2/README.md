# Student Portal Web Application

A modern, full-featured student management web application built with React Native & Expo, featuring API integration, context-based state management, and a professional UI.

## 🎯 Features

### ✅ 3 Main Screens
1. **Dashboard** - Overview with statistics, recent students, and API key display
2. **Students List** - Searchable directory of all students with action buttons
3. **Add/Edit Student** - Comprehensive form for managing student information

### 🗂️ Navigation
- **Top Navbar** - Shows current page title and API key
- **Sidebar Navigation Drawer** - Smooth drawer navigation for web
- **Stack Navigation** - Full navigation history support

### 📡 API Integration
- **Automatic API Key Generation** - Unique key generated on app startup
- **Mock API Calls** - Fetches student data from JSONPlaceholder
- **Data Persistence** - Context API for global state management
- **Error Handling** - Comprehensive error messages and validation

### 👥 Student Management
- Add new students with validation
- Edit existing student information
- Delete students
- Search students by name, email, or major
- View detailed student profiles
- Academic status indicators (GPA-based)

### 🎨 UI/UX
- Professional color scheme and styling
- Responsive design for web and mobile
- Loading indicators and error states
- Form validation with error messages
- Interactive cards and icons

## 📦 Project Structure

```
lesson2/
├── api/
│   └── apiClient.js              # API client with key management
├── components/
│   ├── Navbar.js                 # Top navigation bar
│   ├── Sidebar.js                # Sidebar drawer navigation
│   └── [existing components]
├── context/
│   └── StudentContext.js         # Global state management
├── screens/
│   ├── Dashboard.js              # Home/dashboard screen
│   ├── StudentsList.js           # Students directory screen
│   ├── AddStudent.js             # Add/edit student screen
│   ├── StudentDetails.js         # Individual student details
│   └── [existing screens]
├── App.js                        # Main app with navigation setup
└── package.json                  # Dependencies
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js and npm installed
- Expo CLI installed (or use `npx expo`)

### Step 1: Install Dependencies
```bash
cd lesson2
npm install
```

### Step 2: Run the Application

#### For Web
```bash
npm run web
```
The app will open at `http://localhost:8081` in your browser.

#### For iOS
```bash
npm run ios
```

#### For Android
```bash
npm run android
```

#### Start Expo Development Server
```bash
npm start
```

## 🔑 API Key

The application automatically generates a unique API key on startup in the format:
```
SK-[timestamp]-[random]
```

This key is:
- ✅ Displayed in the navbar
- ✅ Stored in localStorage
- ✅ Used for all API requests
- ✅ Can be regenerated from the dashboard

## 📊 Data Structure

### Student Object
```javascript
{
  id: number,
  name: string,
  age: number (18-60),
  email: string,
  phone: string,
  major: string,
  gpa: number (0.0-4.0)
}
```

### Available Majors
- Computer Science
- Business
- Engineering
- Arts
- Medicine
- Law
- Science
- Education

## 🎓 Academic Status Indicators
- ⭐ **Excellent**: GPA ≥ 3.5
- 👍 **Good**: GPA 3.0 - 3.4
- 📚 **Average**: GPA 2.5 - 2.9
- ⚠️ **Below Average**: GPA < 2.5

## 🔄 Navigation Flows

### Dashboard
- View statistics (total students, avg age, majors, avg GPA)
- See API key
- Quick actions to view all students or add new student
- Refresh data button

### Students List
- Search by name, email, or major
- View all students in card format
- Edit student information
- Delete students
- View detailed student profile
- Add new student button

### Add/Edit Student
- Form validation for all fields
- Age: 18-60 years
- GPA: 0.0 - 4.0 scale
- Email format validation
- Select from available majors
- Reset and cancel options

### Student Details
- Complete student information display
- Academic status badge
- Edit and back buttons

## 🛠️ Technologies Used

- **React Native** - Cross-platform UI framework
- **React Navigation** - Navigation library
- **Context API** - State management
- **Expo** - development and deployment
- **JSONPlaceholder** - Mock API for data

## 📝 Form Validation Rules

| Field | Rules |
|-------|-------|
| Name | Required, non-empty |
| Age | Required, 18-60 years |
| Email | Required, valid email format |
| Phone | Required, non-empty |
| Major | Required, select from list |
| GPA | Required, 0.0 - 4.0 scale |

## 🎨 Color Scheme

- **Primary**: #3498db (Blue)
- **Success**: #27ae60 (Green)
- **Danger**: #e74c3c (Red)
- **Dark**: #2c3e50 (Dark Blue-Gray)
- **Light**: #ecf0f1 (Light Gray)
- **Neutral**: #95a5a6 (Gray)

## 📱 Responsive Design

The application is fully responsive and works on:
- ✅ Web browsers (Chrome, Firefox, Safari)
- ✅ iOS devices and simulator
- ✅ Android devices and emulator
- ✅ Tablets and various screen sizes

## 🐛 Troubleshooting

### App won't start
```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
npm run web
```

### "Module not found" error
```bash
# Ensure all dependencies are installed
npm install

# Or install specific package
npm install @react-navigation/stack
```

### API key not displaying
- Check browser localStorage in DevTools
- Clear app cache and restart
- API key generates automatically on first load

### Search not working
- Try searching with different keywords
- Ensure data is loaded by checking dashboard first
- Refresh page if needed

## 🔐 Security Notes

- API keys are demo/mock only
- No real sensitive data is stored
- For production, implement:
  - Backend API server
  - Secure key management
  - User authentication
  - Database persistence

## 📈 Future Enhancements

- [ ] User authentication & login
- [ ] Backend database integration
- [ ] Attendance tracking
- [ ] Grade management
- [ ] Export students to CSV/PDF
- [ ] Email notifications
- [ ] Dashboard analytics
- [ ] Dark mode support
- [ ] Multi-language support

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Developer Notes

- All components use React Hooks
- Context API for global state management
- Validation handled with JS
- Mock API using JSONPlaceholder (users endpoint)
- localStorage for API key persistence

---

**Made with ❤️ for Student Management**
