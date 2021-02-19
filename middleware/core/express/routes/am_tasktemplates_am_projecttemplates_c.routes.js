/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:35:34 GMT-0400 (Bolivia Time)
 * Time: 18:35:34
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:35:34 GMT-0400 (Bolivia Time)
 * Last time updated: 18:35:34
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const amTasktemplatesAmProjecttemplatesCCtrl = require("../controllers/am_tasktemplates_am_projecttemplates_c.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/am-tasktemplates-am-projecttemplates-c/findOneById/:id`, (req, res) => amTasktemplatesAmProjecttemplatesCCtrl.findOneById(req, res));

router.get(`/api-${sys}/am-tasktemplates-am-projecttemplates-c/findOneByDeleted/:deleted`, (req, res) => amTasktemplatesAmProjecttemplatesCCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/am-tasktemplates-am-projecttemplates-c/findOneByAmTasktemplatesAmProjecttemplatesamProjecttemplatesIda/:amTasktemplatesAmProjecttemplatesamProjecttemplatesIda`, (req, res) => amTasktemplatesAmProjecttemplatesCCtrl.findOneByAmTasktemplatesAmProjecttemplatesamProjecttemplatesIda(req, res));

router.get(`/api-${sys}/am-tasktemplates-am-projecttemplates-c/findOneByAmTasktemplatesAmProjecttemplatesamTasktemplatesIdb/:amTasktemplatesAmProjecttemplatesamTasktemplatesIdb`, (req, res) => amTasktemplatesAmProjecttemplatesCCtrl.findOneByAmTasktemplatesAmProjecttemplatesamTasktemplatesIdb(req, res));

router.get(`/api-${sys}/am-tasktemplates-am-projecttemplates-c/findOneByDateModified/:dateModified`, (req, res) => amTasktemplatesAmProjecttemplatesCCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/am-tasktemplates-am-projecttemplates-c/updateAmTasktemplateAmProjecttemplateCById`, (req, res) => amTasktemplatesAmProjecttemplatesCCtrl.updateAmTasktemplateAmProjecttemplateCById(req, res));

router.post(`/api-${sys}/am-tasktemplates-am-projecttemplates-c/updateAmTasktemplateAmProjecttemplateCByDeleted`, (req, res) => amTasktemplatesAmProjecttemplatesCCtrl.updateAmTasktemplateAmProjecttemplateCByDeleted(req, res));

router.post(`/api-${sys}/am-tasktemplates-am-projecttemplates-c/updateAmTasktemplateAmProjecttemplateCByAmTasktemplatesAmProjecttemplatesamProjecttemplatesIda`, (req, res) => amTasktemplatesAmProjecttemplatesCCtrl.updateAmTasktemplateAmProjecttemplateCByAmTasktemplatesAmProjecttemplatesamProjecttemplatesIda(req, res));

router.post(`/api-${sys}/am-tasktemplates-am-projecttemplates-c/updateAmTasktemplateAmProjecttemplateCByAmTasktemplatesAmProjecttemplatesamTasktemplatesIdb`, (req, res) => amTasktemplatesAmProjecttemplatesCCtrl.updateAmTasktemplateAmProjecttemplateCByAmTasktemplatesAmProjecttemplatesamTasktemplatesIdb(req, res));

router.post(`/api-${sys}/am-tasktemplates-am-projecttemplates-c/updateAmTasktemplateAmProjecttemplateCByDateModified`, (req, res) => amTasktemplatesAmProjecttemplatesCCtrl.updateAmTasktemplateAmProjecttemplateCByDateModified(req, res));





router.get(`/api-${sys}/am-tasktemplates-am-projecttemplates-c/`, (req, res) => amTasktemplatesAmProjecttemplatesCCtrl.getAllAmTasktemplatesAmProjecttemplatesC(req, res));
router.post(`/api-${sys}/am-tasktemplates-am-projecttemplates-c/`, (req, res) => amTasktemplatesAmProjecttemplatesCCtrl.addAmTasktemplateAmProjecttemplateC(req, res));
router.get(`/api-${sys}/am-tasktemplates-am-projecttemplates-c/:id`, (req, res) => amTasktemplatesAmProjecttemplatesCCtrl.getAAmTasktemplateAmProjecttemplateC(req, res));
router.put(`/api-${sys}/am-tasktemplates-am-projecttemplates-c/:id`, (req, res) => amTasktemplatesAmProjecttemplatesCCtrl.updateAmTasktemplateAmProjecttemplateC(req, res));
router.delete(`/api-${sys}/am-tasktemplates-am-projecttemplates-c/:id`, (req, res) => amTasktemplatesAmProjecttemplatesCCtrl.deleteAmTasktemplateAmProjecttemplateC(req, res));

//</es-section>
module.exports = router;
