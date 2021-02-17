/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:44:25 GMT-0400 (Bolivia Time)
 * Time: 4:44:25
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:44:25 GMT-0400 (Bolivia Time)
 * Last time updated: 4:44:25
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const vcalsCtrl = require("../controllers/vcals.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/vcals/findOneById/:id`, (req, res) => vcalsCtrl.findOneById(req, res));

router.get(`/api-${sys}/vcals/findOneByDeleted/:deleted`, (req, res) => vcalsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/vcals/findOneByType/:type`, (req, res) => vcalsCtrl.findOneByType(req, res));

router.get(`/api-${sys}/vcals/findOneBySource/:source`, (req, res) => vcalsCtrl.findOneBySource(req, res));

router.get(`/api-${sys}/vcals/findOneByContent/:content`, (req, res) => vcalsCtrl.findOneByContent(req, res));

router.get(`/api-${sys}/vcals/findOneByDateEntered/:dateEntered`, (req, res) => vcalsCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/vcals/findOneByDateModified/:dateModified`, (req, res) => vcalsCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/vcals/findOneByUserId/:userId`, (req, res) => vcalsCtrl.findOneByUserId(req, res));



router.post(`/api-${sys}/vcals/updateVcalById`, (req, res) => vcalsCtrl.updateVcalById(req, res));

router.post(`/api-${sys}/vcals/updateVcalByDeleted`, (req, res) => vcalsCtrl.updateVcalByDeleted(req, res));

router.post(`/api-${sys}/vcals/updateVcalByType`, (req, res) => vcalsCtrl.updateVcalByType(req, res));

router.post(`/api-${sys}/vcals/updateVcalBySource`, (req, res) => vcalsCtrl.updateVcalBySource(req, res));

router.post(`/api-${sys}/vcals/updateVcalByContent`, (req, res) => vcalsCtrl.updateVcalByContent(req, res));

router.post(`/api-${sys}/vcals/updateVcalByDateEntered`, (req, res) => vcalsCtrl.updateVcalByDateEntered(req, res));

router.post(`/api-${sys}/vcals/updateVcalByDateModified`, (req, res) => vcalsCtrl.updateVcalByDateModified(req, res));

router.post(`/api-${sys}/vcals/updateVcalByUserId`, (req, res) => vcalsCtrl.updateVcalByUserId(req, res));





router.get(`/api-${sys}/vcals/`, (req, res) => vcalsCtrl.getAllVcals(req, res));
router.post(`/api-${sys}/vcals/`, (req, res) => vcalsCtrl.addVcal(req, res));
router.get(`/api-${sys}/vcals/:id`, (req, res) => vcalsCtrl.getAVcal(req, res));
router.put(`/api-${sys}/vcals/:id`, (req, res) => vcalsCtrl.updateVcal(req, res));
router.delete(`/api-${sys}/vcals/:id`, (req, res) => vcalsCtrl.deleteVcal(req, res));

//</es-section>
module.exports = router;
