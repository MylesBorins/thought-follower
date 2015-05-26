'use strict';

// npm modules
var request = require('request');
// var Twitter = require('mtwitter');

// local modules
var conf = require('./conf');

var base = 'https://api.twitter.com/';
var version = '1.1/';
var token = conf.get('twitter').bearer;

function get(path, params, callback) {
  var options = {
    url: base + version + path,
    qs: params,
    headers: {
      Authorization: 'Bearer ' + token
    },
    json: true
  };

  return request(options, function (err, req, body) {
    if (err) {
      return callback(err);
    }
    return callback(null, body);
  });
}

function getToken(callback) {
  var credentials = conf.get('twitter');
  var auth = [credentials.consumer_key, credentials.consumer_secret].join(':'); // eslint-disable-line camelcase

  var options = {
    url: base + 'oauth2/token',
    body: 'grant_type=client_credentials',
    headers: {
      Authorization: 'Basic ' + new Buffer(auth).toString('base64'),
      'content-type': 'application/x-www-form-urlencoded'
    },
    json: true
  };

  return request.post(options, function (err, res, body) {
    if (err) {
      return callback(err);
    }

    return callback(null, body.access_token); // eslint-disable-line camelcase
  });
}

function id(handle, callback) {

  get('users/show', {
    screen_name: handle // eslint-disable-line camelcase
  }, function (err, user) {

    if (err) {
      return callback(err);
    }

    return callback(null, user.id);
  });
}

module.exports = {
  getToken: getToken,
  id: id
};
