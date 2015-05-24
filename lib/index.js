'use strict';

// npm modules
var async = require('async');

// local modules
var klout = require('./klout');
// var twitter = require('./twitter');

function score(twitterHandle, callback) {
  async.waterfall([
    klout.id.bind(null, twitterHandle),
    klout.score
  ], callback);
}

module.exports = {
  score: score
};
