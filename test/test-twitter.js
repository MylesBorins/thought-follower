'use strict';

var test = require('tap').test;

var twitter = require('../lib/twitter');

test('it can get a bearer token using OAuth2', function (t) {
  t.plan(2);
  twitter.getToken(function (err, token) {
    t.error(err, 'plox no err');
    t.ok(token, 'omgerd a token');
  });
});

test('it can get the twitter id from a twitter handle', function (t) {
  t.plan(2);
  twitter.id('thealphanerd', function (err, id) {
    t.error(err, 'no error!!!');
    t.equals(id, 150664007, 'we get the correct id from twitter');
  });
});

test('it can get friends of a twitter handle', function (t) {
  t.plan(2);
  twitter.friends('thealphanerd', function (err, friends) {
    t.error(err, 'no error!!!');
    t.ok(friends.ids.length > 500, 'I am pretty sure I have more than 500 friends');
  });
});

test('it can get followers of a twitter handle', function (t) {
  t.plan(2);
  twitter.followers('thealphanerd', function (err, followers) {
    t.error(err, 'no error!!!');
    t.ok(followers.ids.length > 700, 'I am pretty sure I have more than 700 followers');
  });
});
