#!/usr/bin/env node

var util = require('../')


var webid = 'https://melvincarvalho.com/#me'

var m = 'pool payment random crash boil normal flight rather tool jazz bulk pull'

var pubKey = util.mnemonicToPubKey(m)

console.log(pubKey)

var privKey = util.mnemonicToPrivKey(m)

console.log(privKey)

address = util.webidAndPubKeyToAddress(webid, pubKey)

console.log(address)

address = util.webidAndPrivKeyToAddress(webid, privKey)

console.log(address)
