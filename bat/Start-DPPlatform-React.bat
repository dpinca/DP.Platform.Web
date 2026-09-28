@echo off
title DP Platform - React

cd /d "C:\DP\Projects\Portfolio\dp-platform-web"

start "" cmd /c "timeout /t 2 >nul && start http://localhost:3000"

npm run dev