#!/usr/bin/env node

module.exports = {
  sha2: sha2,
  hashToInts: hashToInts,
  webidToAddress: webidToAddress,
  mnemonicToPubKey : mnemonicToPubKey,
  webidAndPubKeyToAddress: webidAndPubKeyToAddress
}

var Mnemonic = require('bitcore-mnemonic')
var bitcore = require('bitcore-lib')
var forge = require('node-forge')

function sha2(str) {

  var md = forge.md.sha256.create();
  md.update('str');
  return md.digest().toHex()

}

function hashToInts(hash) {
  var arr = []
  var num = 4

  for (var i = 0; i < 4; i++) {
    var part = hash.substr(i*8,8)
    var n = parseInt(part, 16) & 0x7fffffff
    arr.push(n)
  }

  return arr

}

function webidToAddress(webid, m) {
  var hash = sha2(webid)
  var xpriv1 = m.toHDPrivateKey(); // no passphrase

  //console.log(xpriv1)

  var xpub1 = xpriv1.hdPublicKey;

  //console.log(xpub1);

  var ints = hashToInts(hash)

  var dep1 = xpriv1.derive(ints[0]).derive(ints[1]).derive(ints[2]).derive(ints[3])

  var dep2 = xpub1.derive(ints[0]).derive(ints[1]).derive(ints[2]).derive(ints[3])

  //console.log(dep2);

  var address1 = dep1.publicKey.toAddress()
  var address2 = new bitcore.Address(dep2.publicKey)

  //console.log(address1);
  //console.log(address2);

  return address1
}

function mnemonicToPubKey(m) {

  var xpriv1 = m.toHDPrivateKey(); // no passphrase

  var xpub1 = xpriv1.hdPublicKey;

  return xpub1
}


function webidAndPubKeyToAddress(webid, pubKey) {
  if (typeof(pubKey) === 'string') {
    pubKey = new bitcore.HDPublicKey(pubKey)
  }
  var hash = sha2(webid)

  var ints = hashToInts(hash)

  var dep2 = pubKey.derive(ints[0]).derive(ints[1]).derive(ints[2]).derive(ints[3])

  //console.log(dep2);

  var address2 = new bitcore.Address(dep2.publicKey)

  //console.log(address1);
  //console.log(address2);

  return address2
}