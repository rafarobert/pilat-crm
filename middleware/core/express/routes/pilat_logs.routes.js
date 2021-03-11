/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:25 GMT-0400 (Bolivia Time)
 * Time: 14:57:25
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:25 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:25
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const pilatLogsCtrl = require("../controllers/pilat_logs.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/pilat-logs/findOneByUid/:Id`, (req, res) => pilatLogsCtrl.findOneByUid(req, res));

router.get(`/api-${sys}/pilat-logs/findOneById/:id`, (req, res) => pilatLogsCtrl.findOneById(req, res));

router.get(`/api-${sys}/pilat-logs/findOneByAction/:action`, (req, res) => pilatLogsCtrl.findOneByAction(req, res));

router.get(`/api-${sys}/pilat-logs/findOneByDescription/:description`, (req, res) => pilatLogsCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/pilat-logs/findOneByModule/:module`, (req, res) => pilatLogsCtrl.findOneByModule(req, res));

router.get(`/api-${sys}/pilat-logs/findOneByUser/:user`, (req, res) => pilatLogsCtrl.findOneByUser(req, res));

router.get(`/api-${sys}/pilat-logs/findOneBySourceId/:sourceId`, (req, res) => pilatLogsCtrl.findOneBySourceId(req, res));

router.get(`/api-${sys}/pilat-logs/findOneByModuleId/:moduleId`, (req, res) => pilatLogsCtrl.findOneByModuleId(req, res));

router.get(`/api-${sys}/pilat-logs/findOneByCreatedby/:createdby`, (req, res) => pilatLogsCtrl.findOneByCreatedby(req, res));

router.get(`/api-${sys}/pilat-logs/findOneByUpdatedby/:updatedby`, (req, res) => pilatLogsCtrl.findOneByUpdatedby(req, res));

router.get(`/api-${sys}/pilat-logs/findOneByDueat/:dueat`, (req, res) => pilatLogsCtrl.findOneByDueat(req, res));

router.get(`/api-${sys}/pilat-logs/findOneByCreatedat/:createdat`, (req, res) => pilatLogsCtrl.findOneByCreatedat(req, res));

router.get(`/api-${sys}/pilat-logs/findOneByUpdatedat/:updatedat`, (req, res) => pilatLogsCtrl.findOneByUpdatedat(req, res));



router.post(`/api-${sys}/pilat-logs/updatePilatLogByUid`, (req, res) => pilatLogsCtrl.updatePilatLogByUid(req, res));

router.post(`/api-${sys}/pilat-logs/updatePilatLogById`, (req, res) => pilatLogsCtrl.updatePilatLogById(req, res));

router.post(`/api-${sys}/pilat-logs/updatePilatLogByAction`, (req, res) => pilatLogsCtrl.updatePilatLogByAction(req, res));

router.post(`/api-${sys}/pilat-logs/updatePilatLogByDescription`, (req, res) => pilatLogsCtrl.updatePilatLogByDescription(req, res));

router.post(`/api-${sys}/pilat-logs/updatePilatLogByModule`, (req, res) => pilatLogsCtrl.updatePilatLogByModule(req, res));

router.post(`/api-${sys}/pilat-logs/updatePilatLogByUser`, (req, res) => pilatLogsCtrl.updatePilatLogByUser(req, res));

router.post(`/api-${sys}/pilat-logs/updatePilatLogBySourceId`, (req, res) => pilatLogsCtrl.updatePilatLogBySourceId(req, res));

router.post(`/api-${sys}/pilat-logs/updatePilatLogByModuleId`, (req, res) => pilatLogsCtrl.updatePilatLogByModuleId(req, res));

router.post(`/api-${sys}/pilat-logs/updatePilatLogByCreatedby`, (req, res) => pilatLogsCtrl.updatePilatLogByCreatedby(req, res));

router.post(`/api-${sys}/pilat-logs/updatePilatLogByUpdatedby`, (req, res) => pilatLogsCtrl.updatePilatLogByUpdatedby(req, res));

router.post(`/api-${sys}/pilat-logs/updatePilatLogByDueat`, (req, res) => pilatLogsCtrl.updatePilatLogByDueat(req, res));

router.post(`/api-${sys}/pilat-logs/updatePilatLogByCreatedat`, (req, res) => pilatLogsCtrl.updatePilatLogByCreatedat(req, res));

router.post(`/api-${sys}/pilat-logs/updatePilatLogByUpdatedat`, (req, res) => pilatLogsCtrl.updatePilatLogByUpdatedat(req, res));





router.get(`/api-${sys}/pilat-logs/`, (req, res) => pilatLogsCtrl.getAllPilatLogs(req, res));
router.post(`/api-${sys}/pilat-logs/`, (req, res) => pilatLogsCtrl.addPilatLog(req, res));
router.get(`/api-${sys}/pilat-logs/:Id`, (req, res) => pilatLogsCtrl.getAPilatLog(req, res));
router.put(`/api-${sys}/pilat-logs/:Id`, (req, res) => pilatLogsCtrl.updatePilatLog(req, res));
router.delete(`/api-${sys}/pilat-logs/:Id`, (req, res) => pilatLogsCtrl.deletePilatLog(req, res));

//</es-section>
module.exports = router;
