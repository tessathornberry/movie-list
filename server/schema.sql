-- CREATE DATABASE movielist;

-- USE movielist;

CREATE TABLE movies (
  id INT(11) PRIMARY KEY AUTO_INCREMENT,
  moviename VARCHAR(255) NOT NULL,
  watched BOOLEAN
  /* Describe your table here.*/
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

