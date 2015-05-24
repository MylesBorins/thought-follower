'use strict';

// npm modules
var request = require('request');
// var async = require('async');

// local modules
var conf = require('./conf');
// var twitter = require('./twitter');

var kloutKey = conf.get('klout');

function getTwitUrl(twitterID) {
  return 'http://api.klout.com/v2/identity.json/tw/' + twitterID + '?key=' + kloutKey;
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

// function score(twitterHandle, callback) {
//
// }

module.exports = {
  // score: score,
  id: id
};
