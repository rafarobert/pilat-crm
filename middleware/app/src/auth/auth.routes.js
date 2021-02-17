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
const authCtrl = require("./auth.controller");
//</es-section>


router.get(`/${sys}/auth/facebook`, authCtrl.facebookLogin);
router.get(`/${sys}/auth/facebook/callback`, authCtrl.facebookLoginCallback);
router.get(`/${sys}/auth/logout`, (req, res) => authCtrl.logout(req,res));

router.post(`/${sys}/auth/signup`, authCtrl.localSignup());
router.post(`/${sys}/auth/login`, authCtrl.localLogin());


router.get(`/${sys}/login`, async (req, res) => {
	res.render('auth/views/login', {
		title: 'Login',
		sys: sys,

		message: req.flash('loginMessage')
	});
});

router.get(`/${sys}/signup`, async (req, res) => {
	res.render('auth/views/signup', {
		title: 'Login',
		sys: sys,

		message: req.flash('signupMessage')
	});
});

router.get(`/${sys}/profile`, authenticateToken, async (req, res) => {
	res.render('auth/views/profile', {
		title: 'Login',
		sys: sys,

		message: req.flash('signupMessage')
	});
});

module.exports = router;
