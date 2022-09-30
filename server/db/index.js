var mysql = require('mysql2');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "movielist"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("db/index.js, Connected!");
});

module.exports = connection;
