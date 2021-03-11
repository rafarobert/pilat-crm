/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:55:53 GMT-0400 (Bolivia Time)
 * Time: 14:55:53
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:55:53 GMT-0400 (Bolivia Time)
 * Last time updated: 14:55:53
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const amProjecttemplatesProject1CCtrl = require("../controllers/am_projecttemplates_project_1_c.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/am-projecttemplates-project-1-c/findOneById/:id`, (req, res) => amProjecttemplatesProject1CCtrl.findOneById(req, res));

router.get(`/api-${sys}/am-projecttemplates-project-1-c/findOneByDeleted/:deleted`, (req, res) => amProjecttemplatesProject1CCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/am-projecttemplates-project-1-c/findOneByAmProjecttemplatesProject1amProjecttemplatesIda/:amProjecttemplatesProject1amProjecttemplatesIda`, (req, res) => amProjecttemplatesProject1CCtrl.findOneByAmProjecttemplatesProject1amProjecttemplatesIda(req, res));

router.get(`/api-${sys}/am-projecttemplates-project-1-c/findOneByAmProjecttemplatesProject1projectIdb/:amProjecttemplatesProject1projectIdb`, (req, res) => amProjecttemplatesProject1CCtrl.findOneByAmProjecttemplatesProject1projectIdb(req, res));

router.get(`/api-${sys}/am-projecttemplates-project-1-c/findOneByDateModified/:dateModified`, (req, res) => amProjecttemplatesProject1CCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/am-projecttemplates-project-1-c/updateAmProjecttemplateProject1CById`, (req, res) => amProjecttemplatesProject1CCtrl.updateAmProjecttemplateProject1CById(req, res));

router.post(`/api-${sys}/am-projecttemplates-project-1-c/updateAmProjecttemplateProject1CByDeleted`, (req, res) => amProjecttemplatesProject1CCtrl.updateAmProjecttemplateProject1CByDeleted(req, res));

router.post(`/api-${sys}/am-projecttemplates-project-1-c/updateAmProjecttemplateProject1CByAmProjecttemplatesProject1amProjecttemplatesIda`, (req, res) => amProjecttemplatesProject1CCtrl.updateAmProjecttemplateProject1CByAmProjecttemplatesProject1amProjecttemplatesIda(req, res));

router.post(`/api-${sys}/am-projecttemplates-project-1-c/updateAmProjecttemplateProject1CByAmProjecttemplatesProject1projectIdb`, (req, res) => amProjecttemplatesProject1CCtrl.updateAmProjecttemplateProject1CByAmProjecttemplatesProject1projectIdb(req, res));

router.post(`/api-${sys}/am-projecttemplates-project-1-c/updateAmProjecttemplateProject1CByDateModified`, (req, res) => amProjecttemplatesProject1CCtrl.updateAmProjecttemplateProject1CByDateModified(req, res));





router.get(`/api-${sys}/am-projecttemplates-project-1-c/`, (req, res) => amProjecttemplatesProject1CCtrl.getAllAmProjecttemplatesProject1C(req, res));
router.post(`/api-${sys}/am-projecttemplates-project-1-c/`, (req, res) => amProjecttemplatesProject1CCtrl.addAmProjecttemplateProject1C(req, res));
router.get(`/api-${sys}/am-projecttemplates-project-1-c/:id`, (req, res) => amProjecttemplatesProject1CCtrl.getAAmProjecttemplateProject1C(req, res));
router.put(`/api-${sys}/am-projecttemplates-project-1-c/:id`, (req, res) => amProjecttemplatesProject1CCtrl.updateAmProjecttemplateProject1C(req, res));
router.delete(`/api-${sys}/am-projecttemplates-project-1-c/:id`, (req, res) => amProjecttemplatesProject1CCtrl.deleteAmProjecttemplateProject1C(req, res));

//</es-section>
module.exports = router;
