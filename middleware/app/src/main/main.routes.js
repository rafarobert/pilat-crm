/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Sep 11 2020 21:41:43 GMT-0400 (Bolivia Time)
 * Time: 21:41:43
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Sep 11 2020 21:41:43 GMT-0400 (Bolivia Time)
 * Last time updated: 21:41:43
 *
 * Caution: es-sections will be replaced by script execution
 */

require('dotenv').config();
const sys = process.env.SYSTEM;
const express = require("express");
const router = express.Router();
const authenticateToken = require("../../../config/token");

//<es-section>
const mainCtrl = require("./main.controller");
//</es-section>

router.get(`/`, async (req, res) => {
	res.render('main/views/main', {
		title: 'MAIN',
		sys: sys,
	});
});

router.get(`/main/`, async (req, res) => {
	res.render('main/views/main', {
		title: 'MAIN',
		sys: sys,

	});
});

router.get(`/${sys}/`, async (req, res) => {
	res.render('main/views/main', {
		title: 'MAIN',
		sys: sys,

	});
});

router.get(`/${sys}/main/`, async (req, res) => {
	res.render('main/views/main', {
		title: 'MAIN',
		sys: sys,

	});
});

module.exports = router;
