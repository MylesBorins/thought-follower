'use strict';

// npm modules
var request = require('request');

// local modules
var conf = require('./conf');

var kloutKey = conf.get('klout');

function twitHandleUrl(twitterHandle) {
  return 'http://api.klout.com/v2/identity.json/twitter?screenName=' + twitterHandle + '&key=' + kloutKey;
}

function twitIdUrl(twitterId) {
  return 'http://api.klout.com/v2/identity.json/tw/' + twitterId + '?key=' + kloutKey;
}

function scoreUrl(kloutID) {
  return 'http://api.klout.com/v2/user.json/' + kloutID + '/score?key=' + kloutKey;
}

function req(url, selector, callback) {
  return request({
      url: url,
      json: true
    }, function (err, res, body) {

    if (err) {
      return callback(err);
    }

    return callback(null, body[selector]);
  });
}

function idByTwitterHandle(twitterHandle, callback) {
  return req(twitHandleUrl(twitterHandle), 'id', callback);
}

function idByTwitterId(twitterId, callback) {
  return req(twitIdUrl(twitterId), 'id', callback);
}

function score(kloutId, callback) {
  return req(scoreUrl(kloutId), 'score', callback);
}

module.exports = {
  score: score,
  idByTwitterHandle: idByTwitterHandle,
  idByTwitterId: idByTwitterId
};
