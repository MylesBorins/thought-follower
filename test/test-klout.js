'use strict';

var test = require('tap').test;

var klout = require('../lib/klout');

test('it can get the kloutid of a user based on twitter screen name', function (t) {
  t.plan(2);
  klout.id('thealphanerd', function (err, id) {

    t.error(err, 'no error!!!');
    t.equals(id, '42502726248281752', 'we should get back the id');
  });
});

test('it can get the kloutscore of a user based on kloutid', function (t) {
  t.plan(2);
  klout.score('42502726248281752', function (err, score) {

    t.error(err, 'no error!!!');
    t.ok(score, 'we should get back a score');
  });
});
