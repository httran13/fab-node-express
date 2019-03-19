var express = require('express');
var router = express.Router();
let appRoot = require('app-root-path')
let fabService = require(`${appRoot}/src/fabric/fabric-interface`)
const constants = require('./../src/constants')

/* Post a transaction listing. */
router.post('/', function(req, res, next) {

  //example
  let exampleObj = {
    "tokenInc":"idtok890",
    "energyInc":"iden123",
    "rate":"0.83",
    "energyDec":"iden890",
    "value":"5",
    "tokenDec":"idtok123",
    "timestamp":"2000-01-23T04:56:07.000+00:00"
  };

  const transactionObj = req.body
  let args = [JSON.stringify(exampleObj)]
  fabService.invoke("admin", constants.trade, args)
      .then((txId) =>{
        console.log("transaction successful with txid "+txId)
        res.send(txId)
      })
});

module.exports = router;