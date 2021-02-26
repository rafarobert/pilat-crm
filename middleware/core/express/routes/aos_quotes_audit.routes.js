/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:24 GMT-0400 (Bolivia Time)
 * Time: 0:22:24
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:24 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:24
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aosQuotesAuditCtrl = require("../controllers/aos_quotes_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aos-quotes-audit/findOneById/:id`, (req, res) => aosQuotesAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/aos-quotes-audit/findOneByCreatedBy/:createdBy`, (req, res) => aosQuotesAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/aos-quotes-audit/findOneByFieldName/:fieldName`, (req, res) => aosQuotesAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/aos-quotes-audit/findOneByDataType/:dataType`, (req, res) => aosQuotesAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/aos-quotes-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => aosQuotesAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/aos-quotes-audit/findOneByAfterValueString/:afterValueString`, (req, res) => aosQuotesAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/aos-quotes-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => aosQuotesAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/aos-quotes-audit/findOneByAfterValueText/:afterValueText`, (req, res) => aosQuotesAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/aos-quotes-audit/findOneByDateCreated/:dateCreated`, (req, res) => aosQuotesAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/aos-quotes-audit/findOneByParentId/:parentId`, (req, res) => aosQuotesAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/aos-quotes-audit/updateAoQuoteAuditById`, (req, res) => aosQuotesAuditCtrl.updateAoQuoteAuditById(req, res));

router.post(`/api-${sys}/aos-quotes-audit/updateAoQuoteAuditByCreatedBy`, (req, res) => aosQuotesAuditCtrl.updateAoQuoteAuditByCreatedBy(req, res));

router.post(`/api-${sys}/aos-quotes-audit/updateAoQuoteAuditByFieldName`, (req, res) => aosQuotesAuditCtrl.updateAoQuoteAuditByFieldName(req, res));

router.post(`/api-${sys}/aos-quotes-audit/updateAoQuoteAuditByDataType`, (req, res) => aosQuotesAuditCtrl.updateAoQuoteAuditByDataType(req, res));

router.post(`/api-${sys}/aos-quotes-audit/updateAoQuoteAuditByBeforeValueString`, (req, res) => aosQuotesAuditCtrl.updateAoQuoteAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/aos-quotes-audit/updateAoQuoteAuditByAfterValueString`, (req, res) => aosQuotesAuditCtrl.updateAoQuoteAuditByAfterValueString(req, res));

router.post(`/api-${sys}/aos-quotes-audit/updateAoQuoteAuditByBeforeValueText`, (req, res) => aosQuotesAuditCtrl.updateAoQuoteAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/aos-quotes-audit/updateAoQuoteAuditByAfterValueText`, (req, res) => aosQuotesAuditCtrl.updateAoQuoteAuditByAfterValueText(req, res));

router.post(`/api-${sys}/aos-quotes-audit/updateAoQuoteAuditByDateCreated`, (req, res) => aosQuotesAuditCtrl.updateAoQuoteAuditByDateCreated(req, res));

router.post(`/api-${sys}/aos-quotes-audit/updateAoQuoteAuditByParentId`, (req, res) => aosQuotesAuditCtrl.updateAoQuoteAuditByParentId(req, res));





router.get(`/api-${sys}/aos-quotes-audit/`, (req, res) => aosQuotesAuditCtrl.getAllAosQuotesAudit(req, res));
router.post(`/api-${sys}/aos-quotes-audit/`, (req, res) => aosQuotesAuditCtrl.addAoQuoteAudit(req, res));
router.get(`/api-${sys}/aos-quotes-audit/:id`, (req, res) => aosQuotesAuditCtrl.getAAoQuoteAudit(req, res));
router.put(`/api-${sys}/aos-quotes-audit/:id`, (req, res) => aosQuotesAuditCtrl.updateAoQuoteAudit(req, res));
router.delete(`/api-${sys}/aos-quotes-audit/:id`, (req, res) => aosQuotesAuditCtrl.deleteAoQuoteAudit(req, res));

//</es-section>
module.exports = router;
