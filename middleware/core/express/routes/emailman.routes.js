/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:37:00 GMT-0400 (Bolivia Time)
 * Time: 18:37:0
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:37:00 GMT-0400 (Bolivia Time)
 * Last time updated: 18:37:0
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const emailmanCtrl = require("../controllers/emailman.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/emailman/findOneById/:id`, (req, res) => emailmanCtrl.findOneById(req, res));

router.get(`/api-${sys}/emailman/findOneByInQueue/:inQueue`, (req, res) => emailmanCtrl.findOneByInQueue(req, res));

router.get(`/api-${sys}/emailman/findOneByDeleted/:deleted`, (req, res) => emailmanCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/emailman/findOneByRelatedConfirmOptIn/:relatedConfirmOptIn`, (req, res) => emailmanCtrl.findOneByRelatedConfirmOptIn(req, res));

router.get(`/api-${sys}/emailman/findOneBySendAttempts/:sendAttempts`, (req, res) => emailmanCtrl.findOneBySendAttempts(req, res));

router.get(`/api-${sys}/emailman/findOneByRelatedType/:relatedType`, (req, res) => emailmanCtrl.findOneByRelatedType(req, res));

router.get(`/api-${sys}/emailman/findOneByDateEntered/:dateEntered`, (req, res) => emailmanCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/emailman/findOneByDateModified/:dateModified`, (req, res) => emailmanCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/emailman/findOneBySendDateTime/:sendDateTime`, (req, res) => emailmanCtrl.findOneBySendDateTime(req, res));

router.get(`/api-${sys}/emailman/findOneByInQueueDate/:inQueueDate`, (req, res) => emailmanCtrl.findOneByInQueueDate(req, res));

router.get(`/api-${sys}/emailman/findOneByUserId/:userId`, (req, res) => emailmanCtrl.findOneByUserId(req, res));

router.get(`/api-${sys}/emailman/findOneByCampaignId/:campaignId`, (req, res) => emailmanCtrl.findOneByCampaignId(req, res));

router.get(`/api-${sys}/emailman/findOneByMarketingId/:marketingId`, (req, res) => emailmanCtrl.findOneByMarketingId(req, res));

router.get(`/api-${sys}/emailman/findOneByListId/:listId`, (req, res) => emailmanCtrl.findOneByListId(req, res));

router.get(`/api-${sys}/emailman/findOneByModifiedUserId/:modifiedUserId`, (req, res) => emailmanCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/emailman/findOneByRelatedId/:relatedId`, (req, res) => emailmanCtrl.findOneByRelatedId(req, res));



router.post(`/api-${sys}/emailman/updateEmailmanById`, (req, res) => emailmanCtrl.updateEmailmanById(req, res));

router.post(`/api-${sys}/emailman/updateEmailmanByInQueue`, (req, res) => emailmanCtrl.updateEmailmanByInQueue(req, res));

router.post(`/api-${sys}/emailman/updateEmailmanByDeleted`, (req, res) => emailmanCtrl.updateEmailmanByDeleted(req, res));

router.post(`/api-${sys}/emailman/updateEmailmanByRelatedConfirmOptIn`, (req, res) => emailmanCtrl.updateEmailmanByRelatedConfirmOptIn(req, res));

router.post(`/api-${sys}/emailman/updateEmailmanBySendAttempts`, (req, res) => emailmanCtrl.updateEmailmanBySendAttempts(req, res));

router.post(`/api-${sys}/emailman/updateEmailmanByRelatedType`, (req, res) => emailmanCtrl.updateEmailmanByRelatedType(req, res));

router.post(`/api-${sys}/emailman/updateEmailmanByDateEntered`, (req, res) => emailmanCtrl.updateEmailmanByDateEntered(req, res));

router.post(`/api-${sys}/emailman/updateEmailmanByDateModified`, (req, res) => emailmanCtrl.updateEmailmanByDateModified(req, res));

router.post(`/api-${sys}/emailman/updateEmailmanBySendDateTime`, (req, res) => emailmanCtrl.updateEmailmanBySendDateTime(req, res));

router.post(`/api-${sys}/emailman/updateEmailmanByInQueueDate`, (req, res) => emailmanCtrl.updateEmailmanByInQueueDate(req, res));

router.post(`/api-${sys}/emailman/updateEmailmanByUserId`, (req, res) => emailmanCtrl.updateEmailmanByUserId(req, res));

router.post(`/api-${sys}/emailman/updateEmailmanByCampaignId`, (req, res) => emailmanCtrl.updateEmailmanByCampaignId(req, res));

router.post(`/api-${sys}/emailman/updateEmailmanByMarketingId`, (req, res) => emailmanCtrl.updateEmailmanByMarketingId(req, res));

router.post(`/api-${sys}/emailman/updateEmailmanByListId`, (req, res) => emailmanCtrl.updateEmailmanByListId(req, res));

router.post(`/api-${sys}/emailman/updateEmailmanByModifiedUserId`, (req, res) => emailmanCtrl.updateEmailmanByModifiedUserId(req, res));

router.post(`/api-${sys}/emailman/updateEmailmanByRelatedId`, (req, res) => emailmanCtrl.updateEmailmanByRelatedId(req, res));





router.get(`/api-${sys}/emailman/`, (req, res) => emailmanCtrl.getAllEmailman(req, res));
router.post(`/api-${sys}/emailman/`, (req, res) => emailmanCtrl.addEmailman(req, res));
router.get(`/api-${sys}/emailman/:id`, (req, res) => emailmanCtrl.getAEmailman(req, res));
router.put(`/api-${sys}/emailman/:id`, (req, res) => emailmanCtrl.updateEmailman(req, res));
router.delete(`/api-${sys}/emailman/:id`, (req, res) => emailmanCtrl.deleteEmailman(req, res));

//</es-section>
module.exports = router;
