var mysql = require('mysql2');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "movielist"
});

connection.connect();

module.exports = connection;
