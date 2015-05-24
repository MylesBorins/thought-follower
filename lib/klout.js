'use strict';

// npm modules
var request = require('request');

// local modules
var conf = require('./conf');

var kloutKey = conf.get('klout');

var baseurl = 'http://api.klout.com/v2/';

function twitHandleUrl(twitterHandle) {
  return baseurl + 'identity.json/twitter?screenName=' + twitterHandle + '&key=' + kloutKey;
}

function twitIdUrl(twitterId) {
  return baseurl + 'identity.json/tw/' + twitterId + '?key=' + kloutKey;
}

function scoreUrl(kloutID) {
  return baseurl + 'user.json/' + kloutID + '/score?key=' + kloutKey;
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
