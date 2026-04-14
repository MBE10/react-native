# Student Portal Web Application - PowerShell Startup Script
# This script starts the React Native web app on Windows

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Student Portal Web App - Starting..." -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Navigate to project directory
$ProjectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $ProjectRoot

Write-Host "Project Directory: $ProjectRoot" -ForegroundColor Yellow
Write-Host ""

# Check for Node.js
Write-Host "Checking Node.js installation..." -ForegroundColor Yellow
$nodeVersion = node --version
$npmVersion = npm --version
Write-Host "Node.js: $nodeVersion" -ForegroundColor Green
Write-Host "npm: $npmVersion" -ForegroundColor Green
Write-Host ""

# Install dependencies if node_modules doesn't exist
if (!(Test-Path "node_modules")) {
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    npm install
    Write-Host "Dependencies installed!" -ForegroundColor Green
    Write-Host ""
}

# Start the web app
Write-Host "Starting Expo web server..." -ForegroundColor Yellow
Write-Host "The app will open in your default browser..." -ForegroundColor Cyan
Write-Host ""

# Run with clear cache to avoid conflicts
npx expo start --web --clear

Write-Host ""
Write-Host "App stopped." -ForegroundColor Yellow
Read-Host "Press Enter to exit"
