/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:49 GMT-0400 (Bolivia Time)
 * Time: 14:56:49
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:49 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:49
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const emailMarketingProspectListsCtrl = require("../controllers/email_marketing_prospect_lists.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/email-marketing-prospect-lists/findOneById/:id`, (req, res) => emailMarketingProspectListsCtrl.findOneById(req, res));

router.get(`/api-${sys}/email-marketing-prospect-lists/findOneByDeleted/:deleted`, (req, res) => emailMarketingProspectListsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/email-marketing-prospect-lists/findOneByProspectListId/:prospectListId`, (req, res) => emailMarketingProspectListsCtrl.findOneByProspectListId(req, res));

router.get(`/api-${sys}/email-marketing-prospect-lists/findOneByEmailMarketingId/:emailMarketingId`, (req, res) => emailMarketingProspectListsCtrl.findOneByEmailMarketingId(req, res));

router.get(`/api-${sys}/email-marketing-prospect-lists/findOneByDateModified/:dateModified`, (req, res) => emailMarketingProspectListsCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/email-marketing-prospect-lists/updateEmailMarketingProspectListById`, (req, res) => emailMarketingProspectListsCtrl.updateEmailMarketingProspectListById(req, res));

router.post(`/api-${sys}/email-marketing-prospect-lists/updateEmailMarketingProspectListByDeleted`, (req, res) => emailMarketingProspectListsCtrl.updateEmailMarketingProspectListByDeleted(req, res));

router.post(`/api-${sys}/email-marketing-prospect-lists/updateEmailMarketingProspectListByProspectListId`, (req, res) => emailMarketingProspectListsCtrl.updateEmailMarketingProspectListByProspectListId(req, res));

router.post(`/api-${sys}/email-marketing-prospect-lists/updateEmailMarketingProspectListByEmailMarketingId`, (req, res) => emailMarketingProspectListsCtrl.updateEmailMarketingProspectListByEmailMarketingId(req, res));

router.post(`/api-${sys}/email-marketing-prospect-lists/updateEmailMarketingProspectListByDateModified`, (req, res) => emailMarketingProspectListsCtrl.updateEmailMarketingProspectListByDateModified(req, res));





router.get(`/api-${sys}/email-marketing-prospect-lists/`, (req, res) => emailMarketingProspectListsCtrl.getAllEmailMarketingProspectLists(req, res));
router.post(`/api-${sys}/email-marketing-prospect-lists/`, (req, res) => emailMarketingProspectListsCtrl.addEmailMarketingProspectList(req, res));
router.get(`/api-${sys}/email-marketing-prospect-lists/:id`, (req, res) => emailMarketingProspectListsCtrl.getAEmailMarketingProspectList(req, res));
router.put(`/api-${sys}/email-marketing-prospect-lists/:id`, (req, res) => emailMarketingProspectListsCtrl.updateEmailMarketingProspectList(req, res));
router.delete(`/api-${sys}/email-marketing-prospect-lists/:id`, (req, res) => emailMarketingProspectListsCtrl.deleteEmailMarketingProspectList(req, res));

//</es-section>
module.exports = router;
