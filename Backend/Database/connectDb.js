const mysql = require("mysql");

const pool = mysql.createPool({
    host: 'localhost',
    user: "root",
    password: "SANdy@0207",
    database: "Person"
});

pool.getConnection((err, connection) => {
    if (err) {
        console.log("Error in connecting Database");
    } else {
        console.log(`Connected to Database Person`);
        connection.release(); // release the connection back to the pool
    }
});

module.exports = pool;
