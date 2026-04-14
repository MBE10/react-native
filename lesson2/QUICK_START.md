# 🚀 Quick Start Guide - Student Portal Web App

## ⚡ Quick Setup (2 minutes)

### 1. Navigate to Project
```bash
cd desktop
cd react-native
cd lesson2
```

### 2. Install Dependencies (if not done)
```bash
npm install
```

### 3. Start the Web Application
```bash
npm run web
```

**The app will automatically open in your browser at `http://localhost:8081`**

## 📱 What You'll See

### First Load
1. **Dashboard** appears with welcome message
2. Auto-generated **API Key** is displayed in the navbar
3. Statistics showing 0 students initially

### Navigation Options
- **Navbar** (Top) - Shows current page & API key
- **Menu Button** (☰) - Opens sidebar drawer for navigation

## 🎯 Features to Try

### 1️⃣ Dashboard
- View overall statistics
- See API key used for requests
- Click "Refresh Data" to fetch from API
- Quick action buttons

### 2️⃣ View Students
- Click "View All Students" button
- Auto-fetches 10 students from API
- Search by name, email, or major
- Click action buttons: Edit, Delete, or View Details

### 3️⃣ Add Student
- Click "Add New Student" button
- Fill form with validation
- Test different majors
- Submit to add to list

### 4️⃣ View Details
- Click eye icon on any student
- See full profile
- Academic status badge (based on GPA)
- Can edit from here

## 🔑 API Key

- **Auto-generated** on first load
- **Displayed** in navbar
- **Format**: SK-[timestamp]-[random]
- **Stored** in browser localStorage

## 📊 Sample Student Data

The app fetches and transforms data:
```
Name: From API
Age: Random 18-25
Email: From API
Phone: From API
Major: Random selection
GPA: Random 2.0-4.0
```

## 🛠️ Troubleshooting

### App doesn't load?
```bash
# Fresh install
npm install
npm run web
```

### Blank screen?
- Wait 10 seconds for Expo to build
- Check browser console (F12 key)
- Try refreshing the page

### No data showing?
- Click "Refresh Data" on Dashboard
- Check network tab in DevTools
- Ensure internet connection

## 🎨 Try These

1. **Search Box** - Type a name to filter students
2. **GPA Colors** - View different GPA colors in details
3. **Add Student** - Create custom students
4. **Edit** - Modify any student details
5. **Delete** - Remove students from list

## 📱 Switch Platforms

### Mobile (iOS)
```bash
npm run ios
```

### Mobile (Android)
```bash
npm run android
```

### Restart Dev Server
```bash
npm start
```

## ✅ Verification Checklist

- [ ] App loads in browser
- [ ] API key shows in navbar
- [ ] Can see Dashboard with stats
- [ ] Can navigate to Students List
- [ ] Can search students
- [ ] Can add new student
- [ ] Can edit student
- [ ] Can delete student
- [ ] Can view student details

## 🎓 Project Components Included

✅ Dashboard Screen  
✅ Students List Screen  
✅ Add/Edit Student Screen  
✅ Student Details Screen  
✅ Navbar Component  
✅ Sidebar Navigation  
✅ API Client  
✅ Context Provider  
✅ Form Validation  
✅ Error Handling  

## 🔗 Key Files

| File | Purpose |
|------|---------|
| `App.js` | Main app entry & navigation |
| `context/StudentContext.js` | State management |
| `api/apiClient.js` | API calls & key generation |
| `screens/Dashboard.js` | Home screen |
| `screens/StudentsList.js` | List & search |
| `screens/AddStudent.js` | Add/edit form |
| `components/Navbar.js` | Top navigation |
| `components/Sidebar.js` | Side drawer |

## 🚨 Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| Expo won't build | `npm install` |
| No students shown | Click "Refresh Data" |
| Sidebar won't appear (mobile) | Use drawer navigation |
| Form validation errors | Fill all fields correctly |
| API key missing | Clear cache, restart |

## 📞 Support

If stuck:
1. Check browser console (F12)
2. Look in the README.md for details
3. Check networkTab for API errors
4. Restart: `npm run web`

---

**Ready to go!** Press `npm run web` and enjoy your Student Portal! 🎉
