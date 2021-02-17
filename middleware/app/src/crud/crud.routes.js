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

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
// const authenticateToken = require("../../../config/token");

//<es-section>
const crudCtrl = require("./crud.controller");
//</es-section>

router.get(`/${sys}/extjs/crud`, async (req, res) => {
	res.render('crud/views/crud', {
		title: 'Crud',
		sys: sys,
		message: req.flash('crudMessage')
	});
});

module.exports = router;
