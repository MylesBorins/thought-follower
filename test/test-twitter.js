'use strict';

var test = require('tap').test;

var twitter = require('../lib/twitter');

test('it can get the twitter id of a user', function (t) {
  t.plan(2);
  twitter.id('thealphanerd', function (err, id) {
    t.error(err, 'no error!!!');
    t.equals(id, 150664007, 'we get the correct id from twitter');
  });
});
