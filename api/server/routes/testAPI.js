// import express, { router } from 'express';
// import { fetch } from '../../scoreSaber/fetchScore';

var express = require('express');
var router = express.Router();
var fetch = require('../../scoreSaber/fetchScore.js');

router.get('/', function(req, res, next) {
    // let sampleReq = '76561198187936410';
    let sampleRes = fetch.fetchScore() // sampleReq goes here
    console.log(sampleRes);
    res.contentType('application/json');
    res.send(sampleRes);
    res.send({"message":"post done"});
});

module.exports = router;