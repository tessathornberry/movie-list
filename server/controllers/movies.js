var models = require('../models');

module.exports = {
  get: function(request, response) {
    models.movies.getAll(function(err, results) { //this is Node , I think
      if (err) {
        console.log('error in controllers movies', err);
      } else {
        console.log('success in controllers movies')
        response.json(results);
      } //callback on response?
      //this is a Promise
    });
  }, // a function which handles a get request for all messages
  post: function(request, response) {
    console.log('req body', request.body);
    var params = [request.body.moviename];
    models.movies.create(params, function(err, results) {
      if (err) {
        response.sendStatus(500);
      } else {
        response.sendStatus(201).end();
        // res.json(results);
      }

    });
  } // a function which handles posting a moviename to the database
};
