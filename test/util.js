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

  describe('hashToInts', function() {

    it('hashToInts is a function', function () {
      expect(( util.hashToInts )).to.be.a('function');
    });

    it('test hashToInts(\'00000000000000000000000000000000\') = \'[0,0,0,0]\'', function () {
      expect(( util.hashToInts('00000000000000000000000000000000') )).to.eql([0,0,0,0]);
    });

    it('test hashToInts(\'00000001000000000000000000000000\') = \'[1,0,0,0]\'', function () {
      expect(( util.hashToInts('00000001000000000000000000000000') )).to.eql([1,0,0,0]);
    });

    it('test hashToInts(\'7fffffff000000000000000000000000\') = \'[0x7fffffff,0,0,0]\'', function () {
      expect(( util.hashToInts('7fffffff000000000000000000000000') )).to.eql([0x7fffffff,0,0,0]);
    });

    it('test hashToInts(\'ffffffff000000000000000000000000\') = \'[0x7fffffff,0,0,0]\'', function () {
      expect(( util.hashToInts('ffffffff000000000000000000000000') )).to.eql([0x7fffffff,0,0,0]);
    });


    it('test hashToInts(\'00000000000000010000000000000000\') = \'[0,1,0,0]\'', function () {
      expect(( util.hashToInts('00000000000000010000000000000000') )).to.eql([0,1,0,0]);
    });

    it('test hashToInts(\'000000007fffffff0000000000000000\') = \'[0,0x7fffffff,0,0]\'', function () {
      expect(( util.hashToInts('000000007fffffff0000000000000000') )).to.eql([0,0x7fffffff,0,0]);
    });

    it('test hashToInts(\'00000000ffffffff0000000000000000\') = \'[0,0x7fffffff,0,0]\'', function () {
      expect(( util.hashToInts('00000000ffffffff0000000000000000') )).to.eql([0,0x7fffffff,0,0]);
    });

    it('test hashToInts(\'00000000000000000000000100000000\') = \'[0,0,1,0]\'', function () {
      expect(( util.hashToInts('00000000000000000000000100000000') )).to.eql([0,0,1,0]);
    });

    it('test hashToInts(\'00000000000000007fffffff00000000\') = \'[0,0,0x7fffffff,0]\'', function () {
      expect(( util.hashToInts('00000000000000007fffffff00000000') )).to.eql([0,0,0x7fffffff,0]);
    });

    it('test hashToInts(\'0000000000000000ffffffff00000000\') = \'[0,0,0x7fffffff,0]\'', function () {
      expect(( util.hashToInts('0000000000000000ffffffff00000000') )).to.eql([0,0,0x7fffffff,0]);
    });

    it('test hashToInts(\'00000000000000000000000000000001\') = \'[0,0,0,1]\'', function () {
      expect(( util.hashToInts('00000000000000000000000000000001') )).to.eql([0,0,0,1]);
    });

    it('test hashToInts(\'0000000000000000000000007fffffff\') = \'[0,0,0,0x7fffffff]\'', function () {
      expect(( util.hashToInts('0000000000000000000000007fffffff') )).to.eql([0,0,0,0x7fffffff]);
    });

    it('test hashToInts(\'000000000000000000000000ffffffff\') = \'[0,0,0,0x7fffffff]\'', function () {
      expect(( util.hashToInts('000000000000000000000000ffffffff') )).to.eql([0,0,0,0x7fffffff]);
    });



  });



});
