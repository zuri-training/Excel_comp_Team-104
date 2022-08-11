const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "************",
    database: "group104",
    port: "3306"
});

module.exports = db;