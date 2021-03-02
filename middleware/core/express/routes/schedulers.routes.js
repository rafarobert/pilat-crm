/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:29 GMT-0400 (Bolivia Time)
 * Time: 14:1:29
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:29 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:29
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const schedulersCtrl = require("../controllers/schedulers.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/schedulers/findOneById/:id`, (req, res) => schedulersCtrl.findOneById(req, res));

router.get(`/api-${sys}/schedulers/findOneByDeleted/:deleted`, (req, res) => schedulersCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/schedulers/findOneByCatchUp/:catchUp`, (req, res) => schedulersCtrl.findOneByCatchUp(req, res));

router.get(`/api-${sys}/schedulers/findOneByName/:name`, (req, res) => schedulersCtrl.findOneByName(req, res));

router.get(`/api-${sys}/schedulers/findOneByJob/:job`, (req, res) => schedulersCtrl.findOneByJob(req, res));

router.get(`/api-${sys}/schedulers/findOneByJobInterval/:jobInterval`, (req, res) => schedulersCtrl.findOneByJobInterval(req, res));

router.get(`/api-${sys}/schedulers/findOneByStatus/:status`, (req, res) => schedulersCtrl.findOneByStatus(req, res));

router.get(`/api-${sys}/schedulers/findOneByDateEntered/:dateEntered`, (req, res) => schedulersCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/schedulers/findOneByDateModified/:dateModified`, (req, res) => schedulersCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/schedulers/findOneByDateTimeStart/:dateTimeStart`, (req, res) => schedulersCtrl.findOneByDateTimeStart(req, res));

router.get(`/api-${sys}/schedulers/findOneByDateTimeEnd/:dateTimeEnd`, (req, res) => schedulersCtrl.findOneByDateTimeEnd(req, res));

router.get(`/api-${sys}/schedulers/findOneByLastRun/:lastRun`, (req, res) => schedulersCtrl.findOneByLastRun(req, res));

router.get(`/api-${sys}/schedulers/findOneByCreatedBy/:createdBy`, (req, res) => schedulersCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/schedulers/findOneByModifiedUserId/:modifiedUserId`, (req, res) => schedulersCtrl.findOneByModifiedUserId(req, res));



router.post(`/api-${sys}/schedulers/updateSchedulerById`, (req, res) => schedulersCtrl.updateSchedulerById(req, res));

router.post(`/api-${sys}/schedulers/updateSchedulerByDeleted`, (req, res) => schedulersCtrl.updateSchedulerByDeleted(req, res));

router.post(`/api-${sys}/schedulers/updateSchedulerByCatchUp`, (req, res) => schedulersCtrl.updateSchedulerByCatchUp(req, res));

router.post(`/api-${sys}/schedulers/updateSchedulerByName`, (req, res) => schedulersCtrl.updateSchedulerByName(req, res));

router.post(`/api-${sys}/schedulers/updateSchedulerByJob`, (req, res) => schedulersCtrl.updateSchedulerByJob(req, res));

router.post(`/api-${sys}/schedulers/updateSchedulerByJobInterval`, (req, res) => schedulersCtrl.updateSchedulerByJobInterval(req, res));

router.post(`/api-${sys}/schedulers/updateSchedulerByStatus`, (req, res) => schedulersCtrl.updateSchedulerByStatus(req, res));

router.post(`/api-${sys}/schedulers/updateSchedulerByDateEntered`, (req, res) => schedulersCtrl.updateSchedulerByDateEntered(req, res));

router.post(`/api-${sys}/schedulers/updateSchedulerByDateModified`, (req, res) => schedulersCtrl.updateSchedulerByDateModified(req, res));

router.post(`/api-${sys}/schedulers/updateSchedulerByDateTimeStart`, (req, res) => schedulersCtrl.updateSchedulerByDateTimeStart(req, res));

router.post(`/api-${sys}/schedulers/updateSchedulerByDateTimeEnd`, (req, res) => schedulersCtrl.updateSchedulerByDateTimeEnd(req, res));

router.post(`/api-${sys}/schedulers/updateSchedulerByLastRun`, (req, res) => schedulersCtrl.updateSchedulerByLastRun(req, res));

router.post(`/api-${sys}/schedulers/updateSchedulerByCreatedBy`, (req, res) => schedulersCtrl.updateSchedulerByCreatedBy(req, res));

router.post(`/api-${sys}/schedulers/updateSchedulerByModifiedUserId`, (req, res) => schedulersCtrl.updateSchedulerByModifiedUserId(req, res));





router.get(`/api-${sys}/schedulers/`, (req, res) => schedulersCtrl.getAllSchedulers(req, res));
router.post(`/api-${sys}/schedulers/`, (req, res) => schedulersCtrl.addScheduler(req, res));
router.get(`/api-${sys}/schedulers/:id`, (req, res) => schedulersCtrl.getAScheduler(req, res));
router.put(`/api-${sys}/schedulers/:id`, (req, res) => schedulersCtrl.updateScheduler(req, res));
router.delete(`/api-${sys}/schedulers/:id`, (req, res) => schedulersCtrl.deleteScheduler(req, res));

//</es-section>
module.exports = router;
