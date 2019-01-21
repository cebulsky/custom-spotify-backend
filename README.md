# custom-spotify-backend

Please install MongoDb - I used it on Windows 7, with the MSI installer, with option on installing Compass <b>checked-out</b>

This is a simple REST backend, which use mongodb on localhost (please see connection URL). If you use Mongo somewhere else e.g. on cloud, please adjust this connection URL

Written in TS. 
To make it work (you need Node with npm installed):

1. npm install
2. run task to compile ts files to javascript (tsconfig on project root) (I'm using VS Code and Ctrl+Shift+B command)
3. node dist\index.js 
