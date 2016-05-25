#!/usr/bin/env node

var Mnemonic = require('bitcore-mnemonic')
var util = require('../')

var m = new Mnemonic('flower blossom cruel culture doctor scale hazard word column cheap chest alien');

var webid = 'https://melvincarvalho.com/#me'

var pubKey = util.mnemonicToPubKey(m)

console.log(pubKey)

address = util.webidAndPubKeyToAddress(webid, 'xpub661MyMwAqRbcGv9ZE8Kc2gG5nJAqHRcUQr5hKimSAqrhQqkjskXots3c49vcUXHGrX7n4pCYbLo9qF2RHFyXQBvHT8zjiEQJqVMeuFrP8Jf')

console.log(address)