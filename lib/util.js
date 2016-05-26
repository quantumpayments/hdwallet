#!/usr/bin/env node

module.exports = {
  hashToInts: hashToInts,
  mnemonicToPubKey : mnemonicToPubKey,
  mnemonicToPrivKey : mnemonicToPrivKey,
  sha2: sha2,
  webidToAddress: webidToAddress,
  webidAndPubKeyToAddress: webidAndPubKeyToAddress,
  webidAndPrivKeyToAddress: webidAndPrivKeyToAddress
}

var Mnemonic = require('bitcore-mnemonic')
var bitcore = require('bitcore-lib')
var forge = require('node-forge')


/**
 * sha2 get the sha256 of a string
 * @param  {String} str the string
 * @return {String}     the hash
 */
function sha2(str) {
  var md = forge.md.sha256.create();
  md.update(str);
  return md.digest().toHex()
}

/**
 * hashToInts get hash to ints minus first bit
 * @param  {String} hash a hex array
 * @return {Array}      4 numbers
 */
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

/**
 * get a public key from a mnemonic
 * @param  {String} str The mnemonic
 * @return {Object}     The HD Public Key
 */
function mnemonicToPubKey(str) {

  var m = new Mnemonic(str);

  var xpriv1 = m.toHDPrivateKey(); // no passphrase

  var xpub1 = xpriv1.hdPublicKey;

  return xpub1
}

/**
 * get a private key from a mnemonic
 * @param  {[type]} str The mnemonic
 * @return {[type]}     The HD Private Key
 */
function mnemonicToPrivKey(str) {

  var m = new Mnemonic(str);

  var xpriv1 = m.toHDPrivateKey(); // no passphrase

  return xpriv1
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



/**
 * get an address from webid and hd pub key
 * @param  {String}  webid   The WebID
 * @param  {String}  pubKey  The HD public key
 * @param  {boolean} testnet Use testnet
 * @return {String}          bitcoin address
 */
function webidAndPubKeyToAddress(webid, pubKey, testnet) {
  if (typeof(pubKey) === 'string') {
    pubKey = new bitcore.HDPublicKey(pubKey)
  }
  var hash = sha2(webid)

  var ints = hashToInts(hash)

  var dep2 = pubKey.derive(ints[0]).derive(ints[1]).derive(ints[2]).derive(ints[3])

  //console.log(dep2);

  if (testnet) {
    var address2 = new bitcore.Address(dep2.publicKey, bitcore.Networks.testnet)
  } else {
    var address2 = new bitcore.Address(dep2.publicKey)
  }

  //console.log(address1);
  //console.log(address2);

  return address2
}

/**
 * get an address from webid and hd priv key
 * @param  {String}  webid   The WebID
 * @param  {String}  pubKey  The HD private key
 * @param  {boolean} testnet Use testnet
 * @return {String}          bitcoin address
 */
function webidAndPrivKeyToAddress(webid, privKey, testnet) {
  if (typeof(privKey) === 'string') {
    privKey = new bitcore.HDPrivateKey(privKey)
  }
  var hash = sha2(webid)

  var ints = hashToInts(hash)

  var dep2 = privKey.derive(ints[0]).derive(ints[1]).derive(ints[2]).derive(ints[3])

  //console.log(dep2);

  if (testnet) {
    var address2 = dep2.privateKey
  } else {
    var address2 = dep2.privateKey
  }

  //console.log(address1);
  //console.log(address2);

  return address2
}
