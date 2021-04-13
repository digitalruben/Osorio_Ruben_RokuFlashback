const creds = require("./userConfig");
const sql = require('mysql');

// these are the same connect data that you use in
// we want to obscure them a bit for security (normally )
// and then read in at runtime / readtime

const connection = sql.createPool({
    connectionLimit: 10,
    host: creds.host,
    user: creds.user,
    port: creds.port,
    password: creds.password,
    database: creds.database
});

module.exports = connection;