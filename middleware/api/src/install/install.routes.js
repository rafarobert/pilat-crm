
import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const installCtrl = require("./install.controller");

// router.get(`/api-${sys}/install/findOneById`, (req, res) => installCtrl.findOneById(req, res));

module.exports = router;
