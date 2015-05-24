'use strict';

// npm modules
var request = require('request');

// local modules
var conf = require('./conf');

var kloutKey = conf.get('klout');

function getTwitUrl(twitterID) {
  return 'http://api.klout.com/v2/identity.json/tw/' + twitterID + '?key=' + kloutKey;
}

function getScoreUrl(kloutID) {
  return 'http://api.klout.com/v2/user.json/' + kloutID + '/score?key=' + kloutKey;
}

function id(twitterID, callback) {
  return request({
      url: getTwitUrl(twitterID),
      json: true
    }, function (err, res, body) {

    if (err) {
      return callback(err);
    }

    return callback(null, body.id);
  });
}

function score(twitterHandle, callback) {
  return request({
    url: getScoreUrl(twitterHandle),
    json: true
  }, function (err, res, body) {

    if (err) {
      return callback(err);
    }

    return callback(null, body.score);
  });
}

module.exports = {
  score: score,
  id: id
};
