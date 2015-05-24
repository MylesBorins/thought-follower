'use strict';

var test = require('tap').test;

var klout = require('../lib/klout');

test('it can get the kloutid of a user based on twitter ID', function (t) {
  t.plan(2);
  klout.id('150664007', function (err, id) {

    t.error(err, 'no error!!!');
    t.equals(id, '42502726248281752', 'we should get back the id');
  });
});
