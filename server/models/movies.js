var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var queryStr = "SELECT * FROM movies order by movies.moviename ASC"; //might not work?
    db.query(queryStr, function(err, results) {
      if (err) {
        console.log('Could not retrieve movies');
      } else {
        callback(results);
      }
    });
  }, // a function which produces all the movies

  create: function (params, callback) {
    var queryStr = "INSERT INTO movies (moviename) VALUES ('%')";
    db.query(queryStr, params, function(err, result) {
      if (err) {
        throw err;
      } else {
        console.log('results of create query', result);
        callback(result);
      }
    });

  } // a function which can be used to insert a movie into the database
};

//exports.counterFile = path.join(__dirname, 'counter.txt');