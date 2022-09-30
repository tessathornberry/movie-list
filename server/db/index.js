var mysql = require('mysql2');

var connection = mysql.createConnection({
  // host: "localhost",
  user: "root",
  password: "",
  database: "movielist"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected! db -index.js");
});

module.exports = connection;
