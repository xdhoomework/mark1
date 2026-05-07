@echo off
cd /d "%~dp0"
title Artmash Server
echo Starting Artmash...

start http://127.0.0.1:5000

python server.py

pause