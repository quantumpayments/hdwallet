#!/usr/bin/env node

var util = require('../')


var webid = 'http://melvincarvalho.com/#me'

var m = 'exercise minute bridge unable better undo between shoulder system foam sick age'

var pubKey = util.mnemonicToPubKey(m)

console.log(pubKey)

var privKey = util.mnemonicToPrivKey(m)

console.log(privKey)

address = util.webidAndPubKeyToAddress(webid, pubKey, true)

console.log(address)

address = util.webidAndPrivKeyToAddress(webid, privKey)

console.log(address)
