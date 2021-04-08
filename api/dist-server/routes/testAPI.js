"use strict";

// import express, { router } from 'express';
// import { fetch } from '../../scoreSaber/fetchScore';
var express = require('express');

var router = express.Router();

var fetch = require('../../scoreSaber/fetchScore.js');

router.get('/', function (req, res, next) {
  var sampleReq = '76561198187936410';
  var sampleRes = fetch.fetchScore(sampleReq);
  res.send(sampleRes);
});
module.exports = router;