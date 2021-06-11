#Steps to run all applications(Server. Front-end, CLI)

# Back-End

## Application Description

Server for file store (Upload, Delete and Fetch)

## Installation and Run the Project

1) Go to back-end folder in terminal (CLI)
2) Run npm install (Node.js should be included in system)
3) Run npm start    
4) check from UI or CLI

## Tech stack

Node.js
Express.js

# Front-End

## Application Description

UI for file store (Upload, Delete and Fetch)

## Installation and Run the Project

1) Go to front-end folder in terminal (CLI)
2) Run npm install (Node.js should be included in system)
3) Run npm start
4) Go to http://localhost:3000/ in browser

## Tech stack

React
HTML
CSS
Javascript


# CLI

## Application Description

CLI for file store (Upload, Delete and Fetch)

## Installation and Run the Project

1) Go to file-upload folder in terminal (CLI)
2) Run npm install -g oclif (Node.js should be included in system)
3) Run npm install 
4) Run npm link(to link file-upload command with CLI)

## Run below commads in same terminal(same path) to use file store(Server should be up and running)

1) To fetch all files
    file-upload list-files

2) To upload a file
    file-upload list-files "filepath"

3) To delete file
    file-upload delete "finename"

## Tech stack

OCLIF
Typescript

# Possible Improvements

1) Currently files metadata are being stored in one JSON file(Due to time constarint), ideally it should be stored in database.( For e.g. we can create file schema in mongoose and can use it to store File metadata information)
2) To check if file exist or not with same time stamp. if new file has different time stamp, we can replace existing file with new one
3) We can show metadata of file for e.g. file size, last modified, etc.
4) We can upload multiple files at once
