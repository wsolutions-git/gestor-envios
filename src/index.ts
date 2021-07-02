import app from "./app";
const path = require('path');
require("dotenv").config({path: path.join(__dirname, '../src/.env')});

process.on('uncaughtException', err => {
    console.log(err.name, err.message);
    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    process.exit(1);
});

// dotenv configuration

const port = process.env.PORT;


app.listen(port, () => {
    console.log("Http server starting on port: " + port);
});