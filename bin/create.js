#!/usr/bin/env node

var Mnemonic = require('bitcore-mnemonic')
var util = require('../')

var m = new Mnemonic('impulse decade luggage genre laundry route siren tuna ancient learn shallow dice');

var webid = 'https://melvincarvalho.com/#me'

var pubKey = util.mnemonicToPubKey(m)

console.log(pubKey)

var privKey = util.mnemonicToPrivKey(m)

console.log(privKey)

address = util.webidAndPubKeyToAddress(webid, 'xpub661MyMwAqRbcG2s7TWDFo6A8saDZJBYkEiDC4gXVrmwAjDoZagf1wduTamQJ3iU1eoT2A2wTzk2zM4X7MNLs7tZ45iCYEXPSoLN5DUJcXXW', true)

console.log(address)

address = util.webidAndPrivKeyToAddress(webid, 'xprv9s21ZrQH143K3YneMUgFRxDQKYP4tiptsVHbGJ7tJSQBrRUR39LmPqayjWY3fARoEBYMHvmQz69z8Xryj43mKAEWhPRtAGipChCC1QJSeLB', true)

console.log(address)
