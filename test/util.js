var util = require("../");

/* test/my_test.js */
var expect = require('chai').expect;

describe('Util Functions', function () {

  describe('sha2', function() {

    it('sha2 is a function', function () {
      expect(( util.sha2 )).to.be.a('function');
    });

    it('test sha2(\'https://melvincarvalho.com/#me\') = \'2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae\'', function () {
      expect(( util.sha2('https://melvincarvalho.com/#me') )).to.equal('32f6c52920176d64b1a93bf66bd82c6d371b12054327c3de0bb72bc97fc40b5f');
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

    it('test hashToInts(\'32f6c52920176d64b1a93bf66bd82c6d371b12054327c3de0bb72bc97fc40b5f\') = \'[855033129,538406244,833174518,1809329261]\'', function () {
      expect(( util.hashToInts('32f6c52920176d64b1a93bf66bd82c6d371b12054327c3de0bb72bc97fc40b5f') )).to.eql([855033129,538406244,833174518,1809329261]);
    });



  });


  describe('mnemonicToPubKey', function() {

    it('mnemonicToPubKey is a function', function () {
      expect(( util.mnemonicToPubKey )).to.be.a('function');
    });

    it('test mnemonicToPubKey(\'pool payment random crash boil normal flight rather tool jazz bulk pull\') = \'xpub6DvSDtx5hEaX1r6nVtBSRjmK8NHtdbErgWQZ6nKbswsHsiS7pecfiqBzcDWAwnPWqTm4sRP8FGgnatDshAAVSsvQx8aUpydfa1J6PZ41Gt9\'', function () {
      expect(( util.mnemonicToPubKey('pool payment random crash boil normal flight rather tool jazz bulk pull').toString() )).to.equal('xpub661MyMwAqRbcGS5JFpd4Tmxs3uzT3B2xxTFpkMzapBma8MoLWfkB479DYeojAHG4YmuZAkDWouB8HRg4ja3CGC8o6Mc5yx9hLNibsU1XZEL');
    });


  });

  describe('mnemonicToPrivKey', function() {

    it('mnemonicToPrivKey is a function', function () {
      expect(( util.mnemonicToPrivKey )).to.be.a('function');
    });

    it('test mnemonicToPrivKey(\'pool payment random crash boil normal flight rather tool jazz bulk pull\') = \'xprv9s21ZrQH143K3wzq9o646e28Vt9xdiK7bELDwyayFrEbFZUBy8RvWJpjhPdKs6Lsn23JuNSNSPS4ZwTL3NXnrDvVagTioeiDY5quYfwzewP\'', function () {
      expect(( util.mnemonicToPrivKey('pool payment random crash boil normal flight rather tool jazz bulk pull').toString() )).to.equal('xprv9s21ZrQH143K3wzq9o646e28Vt9xdiK7bELDwyayFrEbFZUBy8RvWJpjhPdKs6Lsn23JuNSNSPS4ZwTL3NXnrDvVagTioeiDY5quYfwzewP');
    });


  });




  describe('webidAndPubKeyToAddress', function() {

    it('webidAndPubKeyToAddress is a function', function () {
      expect(( util.webidAndPubKeyToAddress )).to.be.a('function');
    });

    it('test webidAndPubKeyToAddress(\'https://melvincarvalho.com/#me\', \'xpub661MyMwAqRbcGS5JFpd4Tmxs3uzT3B2xxTFpkMzapBma8MoLWfkB479DYeojAHG4YmuZAkDWouB8HRg4ja3CGC8o6Mc5yx9hLNibsU1XZEL\') = \'16aSC2Y1HgngSzApNoGwXZ6gNpNNv6yo1v\'', function () {
      expect(( util.webidAndPubKeyToAddress('https://melvincarvalho.com/#me', 'xpub661MyMwAqRbcGS5JFpd4Tmxs3uzT3B2xxTFpkMzapBma8MoLWfkB479DYeojAHG4YmuZAkDWouB8HRg4ja3CGC8o6Mc5yx9hLNibsU1XZEL').toString() )).to.equal('16aSC2Y1HgngSzApNoGwXZ6gNpNNv6yo1v');
    });


  });


  describe('webidAndPrivKeyToAddress', function() {

    it('webidAndPrivKeyToAddress is a function', function () {
      expect(( util.webidAndPrivKeyToAddress )).to.be.a('function');
    });

    it('test webidAndPrivKeyToAddress(\'https://melvincarvalho.com/#me\', \'xprv9s21ZrQH143K3wzq9o646e28Vt9xdiK7bELDwyayFrEbFZUBy8RvWJpjhPdKs6Lsn23JuNSNSPS4ZwTL3NXnrDvVagTioeiDY5quYfwzewP\') = \'9243b97236bab2099df1c965e3d4a14e0564e72b54930446c840b6a08039ea51\'', function () {
      expect(( util.webidAndPrivKeyToAddress('https://melvincarvalho.com/#me', 'xprv9s21ZrQH143K3wzq9o646e28Vt9xdiK7bELDwyayFrEbFZUBy8RvWJpjhPdKs6Lsn23JuNSNSPS4ZwTL3NXnrDvVagTioeiDY5quYfwzewP').toString() )).to.equal('9243b97236bab2099df1c965e3d4a14e0564e72b54930446c840b6a08039ea51');
    });


  });




});
