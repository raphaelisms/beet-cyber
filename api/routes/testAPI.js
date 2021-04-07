var express = require('express');
var router = express.Router();
var fetchScore = require('../scoreSaber/fetchScore');
var fetch = fetchScore.fetchScore();


router.get('/', function(req, res, next) {
    let sampleReq = '76561198187936410';
    let sampleRes = fetch(sampleReq)
    res.send(sampleRes);
});

module.exports = router;