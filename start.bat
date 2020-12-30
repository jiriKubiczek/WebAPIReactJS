@echo off
cd publish\
start dotnet myapi.dll
cd ..\react-app
start npm start