# 🛠️ Setup & Troubleshooting Guide

## Environment Setup

### System Requirements
- Windows 7 or later
- Node.js 14+ (currently using 16+)
- npm 6+ or yarn
- 200MB free disk space
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Prerequisites Installation

#### 1. Install Node.js
- Visit https://nodejs.org/
- Download LTS version
- Run installer with defaults
- Verify: Open Command Prompt and run:
```bash
node --version
npm --version
```

#### 2. Install Expo CLI (Optional but recommended)
```bash
npm install -g expo-cli
```

#### 3. Verify Installation
```bash
node -v      # Should show v14.x.x or higher
npm -v       # Should show 6.x.x or higher
```

---

## 🚀 Running the Application

### Quick Start
```bash
cd c:\Users\Student\Desktop\react-native\lesson2
npm run web
```

### Using Batch Script (Windows)
Double-click `start-web.bat` in the project folder

### Using PowerShell Script
```powershell
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process -Force
.\start-web.ps1
```

### Manual Start
```bash
npm install    # If first time
expo start --web
```

---

## 🐛 Troubleshooting

### Issue 1: Port Already in Use

**Error:**
```
Port 8081 is being used by another process
```

**Solutions:**

**Option A:** Use different port
```bash
expo start --web --port 8082
```

**Option B:** Kill the process
```powershell
# Find process using port 8081
Get-NetTCPConnection -LocalPort 8081 | 
  Select-Object -First 1 | 
  ForEach-Object {Stop-Process -Id $_.OwningProcess -Force}
```

**Option C:** Restart computer
- Easiest solution if unsure

---

### Issue 2: Module Not Found

**Error:**
```
Cannot find module './context/StudentContext'
```

**Solutions:**

1. **Reinstall dependencies:**
```bash
rm -r node_modules
npm install
```

2. **Check file exists:**
```bash
# Verify files exist
ls context/
ls components/
ls screens/
```

3. **Clear cache:**
```bash
npm cache clean --force
npm install
```

---

### Issue 3: Expo Not Found

**Error:**
```
'expo' is not recognized as an internal or external command
```

**Solutions:**

1. **Install globally:**
```bash
npm install -g expo-cli
```

2. **Use npx instead:**
```bash
npx expo start --web
```

3. **Update npm:**
```bash
npm install -g npm
```

---

### Issue 4: No Data Showing

**Error:**
- Dashboard shows 0 students
- Students list is empty

**Solutions:**

1. **Click Refresh Data** on Dashboard

2. **Check Internet Connection**
   - App needs internet to fetch from API

3. **Check API Status**
   - Open DevTools (F12)
   - Go to Network tab
   - Look for failed requests to jsonplaceholder.typicode.com

4. **Verify Context is Working**
   - Check browser console for errors
   - Look for red error messages

---

### Issue 5: Form Validation Errors

**Error:**
- "Name is required"
- "Invalid email"
- "Age must be between 18 and 60"

**Solutions:**

1. **Name field:** Enter non-empty name
2. **Age field:** Enter number between 18-60
3. **Email field:** Use format: name@email.com
4. **Phone field:** Enter any non-empty value
5. **Major field:** Select from the button options
6. **GPA field:** Enter number between 0.0 and 4.0

---

### Issue 6: Sidebar Not Showing (Mobile)

**Note:** Sidebar only visible on web browser

**For Mobile:**
- Use drawer icon on left
- Or use tab navigation (if available)

---

### Issue 7: App Freezes/Hangs

**Solutions:**

1. **Hard Refresh Browser:**
   - Press Ctrl+Shift+R (Chrome/Firefox)
   - Or Cmd+Shift+R (Mac)

2. **Clear Cache:**
```bash
npm run web -- --clear
# or
expo start --web --clear
```

3. **Restart Dev Server:**
   - Press Ctrl+C in terminal
   - Run `npm run web` again

4. **Restart Computer**
   - Nuclear option, but effective

---

### Issue 8: Styling Issues

**Problem:** Buttons not visible or text cut off

**Solutions:**

1. **Browser Zoom:** 
   - Press Ctrl+0 to reset zoom (Chrome)

2. **Clear Cache:**
```bash
npm run web -- --clear
```

3. **Check Screen Size:**
   - Make sure browser window isn't too small
   - Try fullscreen (F11)

4. **Restart Server:**
   - Stop current server (Ctrl+C)
   - Run: `expo start --web`

---

## 📊 Verification Checklist

After startup, verify these:

- [ ] Browser opens automatically
- [ ] No errors in console (F12 → Console tab)
- [ ] API key shows in navbar (top right)
- [ ] Dashboard loads with welcome message
- [ ] Statistics cards visible but may show 0
- [ ] Menu button (☰) clickable in navbar
- [ ] Navigation links work in sidebar
- [ ] "Refresh Data" button works
- [ ] Students populate after refresh
- [ ] Can type in search box
- [ ] Can navigate between screens

---

## 🔍 Debug Mode

### Enable Console Logging
```javascript
// In StudentContext.js, uncomment lines for detailed logging:
console.log('Fetching students...');
console.log('Data received:', data);
console.log('Error:', error);
```

### Open Developer Tools
```
Windows/Linux: F12 or Ctrl+Shift+I
Mac: Cmd+Option+I
```

### Check These Tabs
- **Console:** Error messages
- **Network:** API calls to jsonplaceholder
- **Storage:** localStorage with API key
- **Elements/Inspector:** HTML structure

---

## 🌐 API Information

### Current API
- **Source:** JSONPlaceholder (mock API)
- **Endpoint:** https://jsonplaceholder.typicode.com/users
- **Limit:** 100 users (we fetch 10)
- **Rate Limit:** None (public API)
- **Speed:** Can be slow (simulated)

### To Switch to Real API
Edit `context/StudentContext.js` line ~35:
```javascript
// Change from:
const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=10');

// To your backend:
const response = await fetch('https://your-api.com/api/students');
```

---

## 📱 Platform-Specific Notes

### Web Browser
- Full feature support
- Sidebar visible
- Best experience
- Press F12 for DevTools

### iOS Simulator
```bash
npm run ios
```
- Close browser tab after startup
- Use touch gestures
- Slower than web

### Android Emulator
```bash
npm run android
```
- Requires Android Studio
- May be slow
- Use keyboard for input

---

## 🗑️ Clean Up / Reset

### If everything breaks:

```bash
# Step 1: Stop the server (Ctrl+C in terminal)

# Step 2: Clear everything
rm -r node_modules
rm package-lock.json

# Step 3: Reinstall
npm install

# Step 4: Clear Expo cache
expo start --web --clear

# Step 5: Try again
npm run web
```

---

## 📞 Getting Help

### Best Practices
1. **Check console first** (F12 → Console)
2. **Read error message carefully**
3. **Google the error** (verbatim in quotes)
4. **Check Network tab** for API errors
5. **Try a hard refresh** (Ctrl+Shift+R)

### Common Error Messages

| Message | Cause | Fix |
|---------|-------|-----|
| Port 8081 in use | Other app using it | Use different port |
| Module not found | Missing file | `npm install` |
| Cannot GET /web | Expo not started | Run `npm run web` |
| Network error | No internet | Check connection |
| Form validation | Input invalid | Check field rules |

---

## 🎯 Performance Tips

### For Faster Experience
1. Close other applications
2. Run on wired internet (if possible)
3. Use Chrome browser (fastest)
4. Clear browser cache monthly
5. Keep Node.js updated

### Monitor Performance
- Open DevTools (F12)
- Go to Performance tab
- Click Record
- Do actions in app
- Click Stop
- Analyze results

---

## 📚 Useful Links

- **React Native Docs:** https://reactnative.dev/docs/getting-started
- **Expo Docs:** https://docs.expo.dev/
- **React Navigation:** https://reactnavigation.org/docs/getting-started
- **JSONPlaceholder:** https://jsonplaceholder.typicode.com/
- **Node.js:** https://nodejs.org/

---

## ✅ Success Indicators

You're all set when you see:
- ✅ App opens in browser
- ✅ No red errors in console
- ✅ API key displays in navbar
- ✅ Dashboard loads
- ✅ Can navigate between screens
- ✅ Can add/edit/delete students
- ✅ Search works
- ✅ Form validation works

---

**Need more help? Check README.md and QUICK_START.md files!**
