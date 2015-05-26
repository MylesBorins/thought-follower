#!/usr/bin/env node

var twitter = require('../lib/twitter');

twitter.getToken(function (err, token) {
  console.log(token);
});
