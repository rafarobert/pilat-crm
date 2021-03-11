/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:54 GMT-0400 (Bolivia Time)
 * Time: 14:56:54
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:54 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:54
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const fpEventsCtrl = require("../controllers/fp_events.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/fp-events/findOneById/:id`, (req, res) => fpEventsCtrl.findOneById(req, res));

router.get(`/api-${sys}/fp-events/findOneByDeleted/:deleted`, (req, res) => fpEventsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/fp-events/findOneByDurationHours/:durationHours`, (req, res) => fpEventsCtrl.findOneByDurationHours(req, res));

router.get(`/api-${sys}/fp-events/findOneByDurationMinutes/:durationMinutes`, (req, res) => fpEventsCtrl.findOneByDurationMinutes(req, res));

router.get(`/api-${sys}/fp-events/findOneByBudget/:budget`, (req, res) => fpEventsCtrl.findOneByBudget(req, res));

router.get(`/api-${sys}/fp-events/findOneByName/:name`, (req, res) => fpEventsCtrl.findOneByName(req, res));

router.get(`/api-${sys}/fp-events/findOneByInviteTemplates/:inviteTemplates`, (req, res) => fpEventsCtrl.findOneByInviteTemplates(req, res));

router.get(`/api-${sys}/fp-events/findOneByAcceptRedirect/:acceptRedirect`, (req, res) => fpEventsCtrl.findOneByAcceptRedirect(req, res));

router.get(`/api-${sys}/fp-events/findOneByDeclineRedirect/:declineRedirect`, (req, res) => fpEventsCtrl.findOneByDeclineRedirect(req, res));

router.get(`/api-${sys}/fp-events/findOneByActivityStatusType/:activityStatusType`, (req, res) => fpEventsCtrl.findOneByActivityStatusType(req, res));

router.get(`/api-${sys}/fp-events/findOneByDescription/:description`, (req, res) => fpEventsCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/fp-events/findOneByDateEntered/:dateEntered`, (req, res) => fpEventsCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/fp-events/findOneByDateModified/:dateModified`, (req, res) => fpEventsCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/fp-events/findOneByDateStart/:dateStart`, (req, res) => fpEventsCtrl.findOneByDateStart(req, res));

router.get(`/api-${sys}/fp-events/findOneByDateEnd/:dateEnd`, (req, res) => fpEventsCtrl.findOneByDateEnd(req, res));

router.get(`/api-${sys}/fp-events/findOneByModifiedUserId/:modifiedUserId`, (req, res) => fpEventsCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/fp-events/findOneByCreatedBy/:createdBy`, (req, res) => fpEventsCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/fp-events/findOneByAssignedUserId/:assignedUserId`, (req, res) => fpEventsCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/fp-events/findOneByCurrencyId/:currencyId`, (req, res) => fpEventsCtrl.findOneByCurrencyId(req, res));



router.post(`/api-${sys}/fp-events/updateFpEventById`, (req, res) => fpEventsCtrl.updateFpEventById(req, res));

router.post(`/api-${sys}/fp-events/updateFpEventByDeleted`, (req, res) => fpEventsCtrl.updateFpEventByDeleted(req, res));

router.post(`/api-${sys}/fp-events/updateFpEventByDurationHours`, (req, res) => fpEventsCtrl.updateFpEventByDurationHours(req, res));

router.post(`/api-${sys}/fp-events/updateFpEventByDurationMinutes`, (req, res) => fpEventsCtrl.updateFpEventByDurationMinutes(req, res));

router.post(`/api-${sys}/fp-events/updateFpEventByBudget`, (req, res) => fpEventsCtrl.updateFpEventByBudget(req, res));

router.post(`/api-${sys}/fp-events/updateFpEventByName`, (req, res) => fpEventsCtrl.updateFpEventByName(req, res));

router.post(`/api-${sys}/fp-events/updateFpEventByInviteTemplates`, (req, res) => fpEventsCtrl.updateFpEventByInviteTemplates(req, res));

router.post(`/api-${sys}/fp-events/updateFpEventByAcceptRedirect`, (req, res) => fpEventsCtrl.updateFpEventByAcceptRedirect(req, res));

router.post(`/api-${sys}/fp-events/updateFpEventByDeclineRedirect`, (req, res) => fpEventsCtrl.updateFpEventByDeclineRedirect(req, res));

router.post(`/api-${sys}/fp-events/updateFpEventByActivityStatusType`, (req, res) => fpEventsCtrl.updateFpEventByActivityStatusType(req, res));

router.post(`/api-${sys}/fp-events/updateFpEventByDescription`, (req, res) => fpEventsCtrl.updateFpEventByDescription(req, res));

router.post(`/api-${sys}/fp-events/updateFpEventByDateEntered`, (req, res) => fpEventsCtrl.updateFpEventByDateEntered(req, res));

router.post(`/api-${sys}/fp-events/updateFpEventByDateModified`, (req, res) => fpEventsCtrl.updateFpEventByDateModified(req, res));

router.post(`/api-${sys}/fp-events/updateFpEventByDateStart`, (req, res) => fpEventsCtrl.updateFpEventByDateStart(req, res));

router.post(`/api-${sys}/fp-events/updateFpEventByDateEnd`, (req, res) => fpEventsCtrl.updateFpEventByDateEnd(req, res));

router.post(`/api-${sys}/fp-events/updateFpEventByModifiedUserId`, (req, res) => fpEventsCtrl.updateFpEventByModifiedUserId(req, res));

router.post(`/api-${sys}/fp-events/updateFpEventByCreatedBy`, (req, res) => fpEventsCtrl.updateFpEventByCreatedBy(req, res));

router.post(`/api-${sys}/fp-events/updateFpEventByAssignedUserId`, (req, res) => fpEventsCtrl.updateFpEventByAssignedUserId(req, res));

router.post(`/api-${sys}/fp-events/updateFpEventByCurrencyId`, (req, res) => fpEventsCtrl.updateFpEventByCurrencyId(req, res));





router.get(`/api-${sys}/fp-events/`, (req, res) => fpEventsCtrl.getAllFpEvents(req, res));
router.post(`/api-${sys}/fp-events/`, (req, res) => fpEventsCtrl.addFpEvent(req, res));
router.get(`/api-${sys}/fp-events/:id`, (req, res) => fpEventsCtrl.getAFpEvent(req, res));
router.put(`/api-${sys}/fp-events/:id`, (req, res) => fpEventsCtrl.updateFpEvent(req, res));
router.delete(`/api-${sys}/fp-events/:id`, (req, res) => fpEventsCtrl.deleteFpEvent(req, res));

//</es-section>
module.exports = router;
