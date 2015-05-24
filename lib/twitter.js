'use strict';

var Twit = require('twit');

var conf = require('./conf');

var T = new Twit(conf.get('twitter'));

function id(handle, callback) {

  T.get('users/show', {
    screen_name: handle // eslint-disable-line camelcase
  }, function (err, user) {

    if (err) {
      return callback(err);
    }

    return callback(null, user.id);
  });
}

module.exports = {
  id: id
};
