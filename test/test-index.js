'use strict';

var test = require('tap').test;

var lib = require('../lib');

test('it can get klout score from twitter handle', function (t) {
  t.plan(2);
  lib.score('thealphanerd', function (err, score) {

    t.error(err, 'no error!!!');
    t.ok(score, 'we should get a score back');
  });
});
