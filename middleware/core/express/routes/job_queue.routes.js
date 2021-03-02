/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:03 GMT-0400 (Bolivia Time)
 * Time: 14:1:3
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:03 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:3
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const jobQueueCtrl = require("../controllers/job_queue.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/job-queue/findOneById/:id`, (req, res) => jobQueueCtrl.findOneById(req, res));

router.get(`/api-${sys}/job-queue/findOneByDeleted/:deleted`, (req, res) => jobQueueCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/job-queue/findOneByRequeue/:requeue`, (req, res) => jobQueueCtrl.findOneByRequeue(req, res));

router.get(`/api-${sys}/job-queue/findOneByRetryCount/:retryCount`, (req, res) => jobQueueCtrl.findOneByRetryCount(req, res));

router.get(`/api-${sys}/job-queue/findOneByFailureCount/:failureCount`, (req, res) => jobQueueCtrl.findOneByFailureCount(req, res));

router.get(`/api-${sys}/job-queue/findOneByJobDelay/:jobDelay`, (req, res) => jobQueueCtrl.findOneByJobDelay(req, res));

router.get(`/api-${sys}/job-queue/findOneByPercentComplete/:percentComplete`, (req, res) => jobQueueCtrl.findOneByPercentComplete(req, res));

router.get(`/api-${sys}/job-queue/findOneByName/:name`, (req, res) => jobQueueCtrl.findOneByName(req, res));

router.get(`/api-${sys}/job-queue/findOneByStatus/:status`, (req, res) => jobQueueCtrl.findOneByStatus(req, res));

router.get(`/api-${sys}/job-queue/findOneByResolution/:resolution`, (req, res) => jobQueueCtrl.findOneByResolution(req, res));

router.get(`/api-${sys}/job-queue/findOneByTarget/:target`, (req, res) => jobQueueCtrl.findOneByTarget(req, res));

router.get(`/api-${sys}/job-queue/findOneByClient/:client`, (req, res) => jobQueueCtrl.findOneByClient(req, res));

router.get(`/api-${sys}/job-queue/findOneByMessage/:message`, (req, res) => jobQueueCtrl.findOneByMessage(req, res));

router.get(`/api-${sys}/job-queue/findOneByData/:data`, (req, res) => jobQueueCtrl.findOneByData(req, res));

router.get(`/api-${sys}/job-queue/findOneByDateEntered/:dateEntered`, (req, res) => jobQueueCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/job-queue/findOneByDateModified/:dateModified`, (req, res) => jobQueueCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/job-queue/findOneByExecuteTime/:executeTime`, (req, res) => jobQueueCtrl.findOneByExecuteTime(req, res));

router.get(`/api-${sys}/job-queue/findOneByAssignedUserId/:assignedUserId`, (req, res) => jobQueueCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/job-queue/findOneBySchedulerId/:schedulerId`, (req, res) => jobQueueCtrl.findOneBySchedulerId(req, res));



router.post(`/api-${sys}/job-queue/updateJobQueueById`, (req, res) => jobQueueCtrl.updateJobQueueById(req, res));

router.post(`/api-${sys}/job-queue/updateJobQueueByDeleted`, (req, res) => jobQueueCtrl.updateJobQueueByDeleted(req, res));

router.post(`/api-${sys}/job-queue/updateJobQueueByRequeue`, (req, res) => jobQueueCtrl.updateJobQueueByRequeue(req, res));

router.post(`/api-${sys}/job-queue/updateJobQueueByRetryCount`, (req, res) => jobQueueCtrl.updateJobQueueByRetryCount(req, res));

router.post(`/api-${sys}/job-queue/updateJobQueueByFailureCount`, (req, res) => jobQueueCtrl.updateJobQueueByFailureCount(req, res));

router.post(`/api-${sys}/job-queue/updateJobQueueByJobDelay`, (req, res) => jobQueueCtrl.updateJobQueueByJobDelay(req, res));

router.post(`/api-${sys}/job-queue/updateJobQueueByPercentComplete`, (req, res) => jobQueueCtrl.updateJobQueueByPercentComplete(req, res));

router.post(`/api-${sys}/job-queue/updateJobQueueByName`, (req, res) => jobQueueCtrl.updateJobQueueByName(req, res));

router.post(`/api-${sys}/job-queue/updateJobQueueByStatus`, (req, res) => jobQueueCtrl.updateJobQueueByStatus(req, res));

router.post(`/api-${sys}/job-queue/updateJobQueueByResolution`, (req, res) => jobQueueCtrl.updateJobQueueByResolution(req, res));

router.post(`/api-${sys}/job-queue/updateJobQueueByTarget`, (req, res) => jobQueueCtrl.updateJobQueueByTarget(req, res));

router.post(`/api-${sys}/job-queue/updateJobQueueByClient`, (req, res) => jobQueueCtrl.updateJobQueueByClient(req, res));

router.post(`/api-${sys}/job-queue/updateJobQueueByMessage`, (req, res) => jobQueueCtrl.updateJobQueueByMessage(req, res));

router.post(`/api-${sys}/job-queue/updateJobQueueByData`, (req, res) => jobQueueCtrl.updateJobQueueByData(req, res));

router.post(`/api-${sys}/job-queue/updateJobQueueByDateEntered`, (req, res) => jobQueueCtrl.updateJobQueueByDateEntered(req, res));

router.post(`/api-${sys}/job-queue/updateJobQueueByDateModified`, (req, res) => jobQueueCtrl.updateJobQueueByDateModified(req, res));

router.post(`/api-${sys}/job-queue/updateJobQueueByExecuteTime`, (req, res) => jobQueueCtrl.updateJobQueueByExecuteTime(req, res));

router.post(`/api-${sys}/job-queue/updateJobQueueByAssignedUserId`, (req, res) => jobQueueCtrl.updateJobQueueByAssignedUserId(req, res));

router.post(`/api-${sys}/job-queue/updateJobQueueBySchedulerId`, (req, res) => jobQueueCtrl.updateJobQueueBySchedulerId(req, res));





router.get(`/api-${sys}/job-queue/`, (req, res) => jobQueueCtrl.getAllJobQueue(req, res));
router.post(`/api-${sys}/job-queue/`, (req, res) => jobQueueCtrl.addJobQueue(req, res));
router.get(`/api-${sys}/job-queue/:id`, (req, res) => jobQueueCtrl.getAJobQueue(req, res));
router.put(`/api-${sys}/job-queue/:id`, (req, res) => jobQueueCtrl.updateJobQueue(req, res));
router.delete(`/api-${sys}/job-queue/:id`, (req, res) => jobQueueCtrl.deleteJobQueue(req, res));

//</es-section>
module.exports = router;
