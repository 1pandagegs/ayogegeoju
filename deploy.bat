@echo off
echo ==============================================
echo  Ayo Gegeoju Portfolio Deployment Script
echo ==============================================
echo.

echo 1. Staging changes...
git add .

echo 2. Committing changes...
git commit -m "feat: implement homepage hero slideshow, work page tabs reordering, custom follow-cursor, figma workspace showcase, larger logo, and dynamic screens fallback"

echo 3. Pushing to GitHub (main)...
git push origin main

echo.
echo ==============================================
echo  Push complete! Vercel should start deploying.
echo ==============================================
pause
