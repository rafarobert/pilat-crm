/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:03 GMT-0400 (Bolivia Time)
 * Time: 14:0:3
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:03 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:3
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const amProjecttemplatesUsers1CCtrl = require("../controllers/am_projecttemplates_users_1_c.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/am-projecttemplates-users-1-c/findOneById/:id`, (req, res) => amProjecttemplatesUsers1CCtrl.findOneById(req, res));

router.get(`/api-${sys}/am-projecttemplates-users-1-c/findOneByDeleted/:deleted`, (req, res) => amProjecttemplatesUsers1CCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/am-projecttemplates-users-1-c/findOneByAmProjecttemplatesIda/:amProjecttemplatesIda`, (req, res) => amProjecttemplatesUsers1CCtrl.findOneByAmProjecttemplatesIda(req, res));

router.get(`/api-${sys}/am-projecttemplates-users-1-c/findOneByUsersIdb/:usersIdb`, (req, res) => amProjecttemplatesUsers1CCtrl.findOneByUsersIdb(req, res));

router.get(`/api-${sys}/am-projecttemplates-users-1-c/findOneByDateModified/:dateModified`, (req, res) => amProjecttemplatesUsers1CCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/am-projecttemplates-users-1-c/updateAmProjecttemplateUser1CById`, (req, res) => amProjecttemplatesUsers1CCtrl.updateAmProjecttemplateUser1CById(req, res));

router.post(`/api-${sys}/am-projecttemplates-users-1-c/updateAmProjecttemplateUser1CByDeleted`, (req, res) => amProjecttemplatesUsers1CCtrl.updateAmProjecttemplateUser1CByDeleted(req, res));

router.post(`/api-${sys}/am-projecttemplates-users-1-c/updateAmProjecttemplateUser1CByAmProjecttemplatesIda`, (req, res) => amProjecttemplatesUsers1CCtrl.updateAmProjecttemplateUser1CByAmProjecttemplatesIda(req, res));

router.post(`/api-${sys}/am-projecttemplates-users-1-c/updateAmProjecttemplateUser1CByUsersIdb`, (req, res) => amProjecttemplatesUsers1CCtrl.updateAmProjecttemplateUser1CByUsersIdb(req, res));

router.post(`/api-${sys}/am-projecttemplates-users-1-c/updateAmProjecttemplateUser1CByDateModified`, (req, res) => amProjecttemplatesUsers1CCtrl.updateAmProjecttemplateUser1CByDateModified(req, res));





router.get(`/api-${sys}/am-projecttemplates-users-1-c/`, (req, res) => amProjecttemplatesUsers1CCtrl.getAllAmProjecttemplatesUsers1C(req, res));
router.post(`/api-${sys}/am-projecttemplates-users-1-c/`, (req, res) => amProjecttemplatesUsers1CCtrl.addAmProjecttemplateUser1C(req, res));
router.get(`/api-${sys}/am-projecttemplates-users-1-c/:id`, (req, res) => amProjecttemplatesUsers1CCtrl.getAAmProjecttemplateUser1C(req, res));
router.put(`/api-${sys}/am-projecttemplates-users-1-c/:id`, (req, res) => amProjecttemplatesUsers1CCtrl.updateAmProjecttemplateUser1C(req, res));
router.delete(`/api-${sys}/am-projecttemplates-users-1-c/:id`, (req, res) => amProjecttemplatesUsers1CCtrl.deleteAmProjecttemplateUser1C(req, res));

//</es-section>
module.exports = router;
