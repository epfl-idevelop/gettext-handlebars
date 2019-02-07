'use strict';

var Parser = require('..'),
  fs = require('fs'),
  assert = require('assert');

describe('Parser', function () {
  describe('#parse()', function () {
    it('parses single-line Localization Tags', function (done) {
      fs.readFile(__dirname + '/fixtures/template.page', {encoding: 'utf8'}, function (err, data) {
        if (err) {
          throw err;
        }

        var result = (new Parser()).parse(data);

        assert.equal(typeof result, 'object');
        assert.deepEqual(result["Interdire l'accès à cette demande pour les utilisateurs suivants"], { line: [18] })

        done();
      });
    });
  });
});
