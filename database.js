const mysql = require('mysql')

const sql = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port: 8889,
    database: "cinema"
})

sql.connect();

module.exports = sql