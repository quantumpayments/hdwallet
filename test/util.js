var util = require("../");

/* test/my_test.js */
var expect = require('chai').expect;

describe('Util Functions', function () {

  describe('sha2', function() {

    it('sha2 is a function', function () {
      expect(( util.sha2 )).to.be.a('function');
    });

    it('test sha2(\'foo\') = \'2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae\'', function () {
      expect(( util.sha2('foo') )).to.equal('2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae');
    });


  });



});
