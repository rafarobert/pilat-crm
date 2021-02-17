#!/usr/bin/env bash
sudo kill `sudo lsof -t -i:8001`

lsof -i:8001
kill $(lsof -t -i:801)
kill -9 $(lsof -t -i:8001)

sudo netstat -lpn |grep :'8001'
kill -9 1192
node -r esm index.js &
