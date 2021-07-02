const path = require('path');
require("dotenv").config({
    path: path.join(__dirname, '../src/.env')
});
var mysql = require('mysql');

const getDbClientConnection = async function () {
    try {
        const client = mysql.createConnection({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWD,
            database: process.env.MYSQL_DB,
            port: process.env.MYSQL_PORT
        });
        await client.connect();
        return client;
    } catch (error) {
        console.log(error);
    }
}

export {
    getDbClientConnection
}
