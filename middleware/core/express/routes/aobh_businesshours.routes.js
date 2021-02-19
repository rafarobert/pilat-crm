/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:41:53 GMT-0400 (Bolivia Time)
 * Time: 4:41:53
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:41:53 GMT-0400 (Bolivia Time)
 * Last time updated: 4:41:53
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aobhBusinesshoursCtrl = require("../controllers/aobh_businesshours.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aobh-businesshours/findOneById/:id`, (req, res) => aobhBusinesshoursCtrl.findOneById(req, res));

router.get(`/api-${sys}/aobh-businesshours/findOneByDeleted/:deleted`, (req, res) => aobhBusinesshoursCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/aobh-businesshours/findOneByOpen/:open`, (req, res) => aobhBusinesshoursCtrl.findOneByOpen(req, res));

router.get(`/api-${sys}/aobh-businesshours/findOneByOpenStatus/:openStatus`, (req, res) => aobhBusinesshoursCtrl.findOneByOpenStatus(req, res));

router.get(`/api-${sys}/aobh-businesshours/findOneByName/:name`, (req, res) => aobhBusinesshoursCtrl.findOneByName(req, res));

router.get(`/api-${sys}/aobh-businesshours/findOneByOpeningHours/:openingHours`, (req, res) => aobhBusinesshoursCtrl.findOneByOpeningHours(req, res));

router.get(`/api-${sys}/aobh-businesshours/findOneByClosingHours/:closingHours`, (req, res) => aobhBusinesshoursCtrl.findOneByClosingHours(req, res));

router.get(`/api-${sys}/aobh-businesshours/findOneByDay/:day`, (req, res) => aobhBusinesshoursCtrl.findOneByDay(req, res));

router.get(`/api-${sys}/aobh-businesshours/findOneByDescription/:description`, (req, res) => aobhBusinesshoursCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/aobh-businesshours/findOneByDateEntered/:dateEntered`, (req, res) => aobhBusinesshoursCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/aobh-businesshours/findOneByDateModified/:dateModified`, (req, res) => aobhBusinesshoursCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/aobh-businesshours/findOneByModifiedUserId/:modifiedUserId`, (req, res) => aobhBusinesshoursCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/aobh-businesshours/findOneByCreatedBy/:createdBy`, (req, res) => aobhBusinesshoursCtrl.findOneByCreatedBy(req, res));



router.post(`/api-${sys}/aobh-businesshours/updateAobhBusinesshourById`, (req, res) => aobhBusinesshoursCtrl.updateAobhBusinesshourById(req, res));

router.post(`/api-${sys}/aobh-businesshours/updateAobhBusinesshourByDeleted`, (req, res) => aobhBusinesshoursCtrl.updateAobhBusinesshourByDeleted(req, res));

router.post(`/api-${sys}/aobh-businesshours/updateAobhBusinesshourByOpen`, (req, res) => aobhBusinesshoursCtrl.updateAobhBusinesshourByOpen(req, res));

router.post(`/api-${sys}/aobh-businesshours/updateAobhBusinesshourByOpenStatus`, (req, res) => aobhBusinesshoursCtrl.updateAobhBusinesshourByOpenStatus(req, res));

router.post(`/api-${sys}/aobh-businesshours/updateAobhBusinesshourByName`, (req, res) => aobhBusinesshoursCtrl.updateAobhBusinesshourByName(req, res));

router.post(`/api-${sys}/aobh-businesshours/updateAobhBusinesshourByOpeningHours`, (req, res) => aobhBusinesshoursCtrl.updateAobhBusinesshourByOpeningHours(req, res));

router.post(`/api-${sys}/aobh-businesshours/updateAobhBusinesshourByClosingHours`, (req, res) => aobhBusinesshoursCtrl.updateAobhBusinesshourByClosingHours(req, res));

router.post(`/api-${sys}/aobh-businesshours/updateAobhBusinesshourByDay`, (req, res) => aobhBusinesshoursCtrl.updateAobhBusinesshourByDay(req, res));

router.post(`/api-${sys}/aobh-businesshours/updateAobhBusinesshourByDescription`, (req, res) => aobhBusinesshoursCtrl.updateAobhBusinesshourByDescription(req, res));

router.post(`/api-${sys}/aobh-businesshours/updateAobhBusinesshourByDateEntered`, (req, res) => aobhBusinesshoursCtrl.updateAobhBusinesshourByDateEntered(req, res));

router.post(`/api-${sys}/aobh-businesshours/updateAobhBusinesshourByDateModified`, (req, res) => aobhBusinesshoursCtrl.updateAobhBusinesshourByDateModified(req, res));

router.post(`/api-${sys}/aobh-businesshours/updateAobhBusinesshourByModifiedUserId`, (req, res) => aobhBusinesshoursCtrl.updateAobhBusinesshourByModifiedUserId(req, res));

router.post(`/api-${sys}/aobh-businesshours/updateAobhBusinesshourByCreatedBy`, (req, res) => aobhBusinesshoursCtrl.updateAobhBusinesshourByCreatedBy(req, res));





router.get(`/api-${sys}/aobh-businesshours/`, (req, res) => aobhBusinesshoursCtrl.getAllAobhBusinesshours(req, res));
router.post(`/api-${sys}/aobh-businesshours/`, (req, res) => aobhBusinesshoursCtrl.addAobhBusinesshour(req, res));
router.get(`/api-${sys}/aobh-businesshours/:id`, (req, res) => aobhBusinesshoursCtrl.getAAobhBusinesshour(req, res));
router.put(`/api-${sys}/aobh-businesshours/:id`, (req, res) => aobhBusinesshoursCtrl.updateAobhBusinesshour(req, res));
router.delete(`/api-${sys}/aobh-businesshours/:id`, (req, res) => aobhBusinesshoursCtrl.deleteAobhBusinesshour(req, res));

//</es-section>
module.exports = router;
