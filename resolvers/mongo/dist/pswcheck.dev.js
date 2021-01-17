"use strict";

var bcrypt = require('bcrypt');

bcrypt.compare(password, hash, function (err, res) {
  if (err) {
    console.error(err);
    return;
  }

  console.log(res); //true or false
});