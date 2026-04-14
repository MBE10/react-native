@echo off
REM Student Portal Web Application - Startup Script
REM This script starts the React Native web app

echo.
echo ========================================
echo Student Portal Web App - Starting...
echo ========================================
echo.

cd /d "%~dp0"

REM Try port 8081 first, then 8082
echo Starting Expo server...
echo.

REM Start with npm run web
npx expo start --web --clear

pause
