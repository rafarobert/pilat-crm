/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:04 GMT-0400 (Bolivia Time)
 * Time: 14:56:4
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:04 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:4
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aorFieldsCtrl = require("../controllers/aor_fields.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aor-fields/findOneById/:id`, (req, res) => aorFieldsCtrl.findOneById(req, res));

router.get(`/api-${sys}/aor-fields/findOneByDeleted/:deleted`, (req, res) => aorFieldsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/aor-fields/findOneByDisplay/:display`, (req, res) => aorFieldsCtrl.findOneByDisplay(req, res));

router.get(`/api-${sys}/aor-fields/findOneByLink/:link`, (req, res) => aorFieldsCtrl.findOneByLink(req, res));

router.get(`/api-${sys}/aor-fields/findOneByGroupBy/:groupBy`, (req, res) => aorFieldsCtrl.findOneByGroupBy(req, res));

router.get(`/api-${sys}/aor-fields/findOneByFieldOrder/:fieldOrder`, (req, res) => aorFieldsCtrl.findOneByFieldOrder(req, res));

router.get(`/api-${sys}/aor-fields/findOneByGroupDisplay/:groupDisplay`, (req, res) => aorFieldsCtrl.findOneByGroupDisplay(req, res));

router.get(`/api-${sys}/aor-fields/findOneByName/:name`, (req, res) => aorFieldsCtrl.findOneByName(req, res));

router.get(`/api-${sys}/aor-fields/findOneByField/:field`, (req, res) => aorFieldsCtrl.findOneByField(req, res));

router.get(`/api-${sys}/aor-fields/findOneByLabel/:label`, (req, res) => aorFieldsCtrl.findOneByLabel(req, res));

router.get(`/api-${sys}/aor-fields/findOneByFieldFunction/:fieldFunction`, (req, res) => aorFieldsCtrl.findOneByFieldFunction(req, res));

router.get(`/api-${sys}/aor-fields/findOneBySortBy/:sortBy`, (req, res) => aorFieldsCtrl.findOneBySortBy(req, res));

router.get(`/api-${sys}/aor-fields/findOneByFormat/:format`, (req, res) => aorFieldsCtrl.findOneByFormat(req, res));

router.get(`/api-${sys}/aor-fields/findOneByTotal/:total`, (req, res) => aorFieldsCtrl.findOneByTotal(req, res));

router.get(`/api-${sys}/aor-fields/findOneBySortOrder/:sortOrder`, (req, res) => aorFieldsCtrl.findOneBySortOrder(req, res));

router.get(`/api-${sys}/aor-fields/findOneByGroupOrder/:groupOrder`, (req, res) => aorFieldsCtrl.findOneByGroupOrder(req, res));

router.get(`/api-${sys}/aor-fields/findOneByDescription/:description`, (req, res) => aorFieldsCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/aor-fields/findOneByModulePath/:modulePath`, (req, res) => aorFieldsCtrl.findOneByModulePath(req, res));

router.get(`/api-${sys}/aor-fields/findOneByDateEntered/:dateEntered`, (req, res) => aorFieldsCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/aor-fields/findOneByDateModified/:dateModified`, (req, res) => aorFieldsCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/aor-fields/findOneByModifiedUserId/:modifiedUserId`, (req, res) => aorFieldsCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/aor-fields/findOneByCreatedBy/:createdBy`, (req, res) => aorFieldsCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/aor-fields/findOneByAorReportId/:aorReportId`, (req, res) => aorFieldsCtrl.findOneByAorReportId(req, res));



router.post(`/api-${sys}/aor-fields/updateAorFieldById`, (req, res) => aorFieldsCtrl.updateAorFieldById(req, res));

router.post(`/api-${sys}/aor-fields/updateAorFieldByDeleted`, (req, res) => aorFieldsCtrl.updateAorFieldByDeleted(req, res));

router.post(`/api-${sys}/aor-fields/updateAorFieldByDisplay`, (req, res) => aorFieldsCtrl.updateAorFieldByDisplay(req, res));

router.post(`/api-${sys}/aor-fields/updateAorFieldByLink`, (req, res) => aorFieldsCtrl.updateAorFieldByLink(req, res));

router.post(`/api-${sys}/aor-fields/updateAorFieldByGroupBy`, (req, res) => aorFieldsCtrl.updateAorFieldByGroupBy(req, res));

router.post(`/api-${sys}/aor-fields/updateAorFieldByFieldOrder`, (req, res) => aorFieldsCtrl.updateAorFieldByFieldOrder(req, res));

router.post(`/api-${sys}/aor-fields/updateAorFieldByGroupDisplay`, (req, res) => aorFieldsCtrl.updateAorFieldByGroupDisplay(req, res));

router.post(`/api-${sys}/aor-fields/updateAorFieldByName`, (req, res) => aorFieldsCtrl.updateAorFieldByName(req, res));

router.post(`/api-${sys}/aor-fields/updateAorFieldByField`, (req, res) => aorFieldsCtrl.updateAorFieldByField(req, res));

router.post(`/api-${sys}/aor-fields/updateAorFieldByLabel`, (req, res) => aorFieldsCtrl.updateAorFieldByLabel(req, res));

router.post(`/api-${sys}/aor-fields/updateAorFieldByFieldFunction`, (req, res) => aorFieldsCtrl.updateAorFieldByFieldFunction(req, res));

router.post(`/api-${sys}/aor-fields/updateAorFieldBySortBy`, (req, res) => aorFieldsCtrl.updateAorFieldBySortBy(req, res));

router.post(`/api-${sys}/aor-fields/updateAorFieldByFormat`, (req, res) => aorFieldsCtrl.updateAorFieldByFormat(req, res));

router.post(`/api-${sys}/aor-fields/updateAorFieldByTotal`, (req, res) => aorFieldsCtrl.updateAorFieldByTotal(req, res));

router.post(`/api-${sys}/aor-fields/updateAorFieldBySortOrder`, (req, res) => aorFieldsCtrl.updateAorFieldBySortOrder(req, res));

router.post(`/api-${sys}/aor-fields/updateAorFieldByGroupOrder`, (req, res) => aorFieldsCtrl.updateAorFieldByGroupOrder(req, res));

router.post(`/api-${sys}/aor-fields/updateAorFieldByDescription`, (req, res) => aorFieldsCtrl.updateAorFieldByDescription(req, res));

router.post(`/api-${sys}/aor-fields/updateAorFieldByModulePath`, (req, res) => aorFieldsCtrl.updateAorFieldByModulePath(req, res));

router.post(`/api-${sys}/aor-fields/updateAorFieldByDateEntered`, (req, res) => aorFieldsCtrl.updateAorFieldByDateEntered(req, res));

router.post(`/api-${sys}/aor-fields/updateAorFieldByDateModified`, (req, res) => aorFieldsCtrl.updateAorFieldByDateModified(req, res));

router.post(`/api-${sys}/aor-fields/updateAorFieldByModifiedUserId`, (req, res) => aorFieldsCtrl.updateAorFieldByModifiedUserId(req, res));

router.post(`/api-${sys}/aor-fields/updateAorFieldByCreatedBy`, (req, res) => aorFieldsCtrl.updateAorFieldByCreatedBy(req, res));

router.post(`/api-${sys}/aor-fields/updateAorFieldByAorReportId`, (req, res) => aorFieldsCtrl.updateAorFieldByAorReportId(req, res));





router.get(`/api-${sys}/aor-fields/`, (req, res) => aorFieldsCtrl.getAllAorFields(req, res));
router.post(`/api-${sys}/datatable/aor-fields/`, (req, res) => aorFieldsCtrl.getAllAorFields(req, res));
router.post(`/api-${sys}/aor-fields/`, (req, res) => aorFieldsCtrl.addAorField(req, res));
router.get(`/api-${sys}/aor-fields/:id`, (req, res) => aorFieldsCtrl.getAAorField(req, res));
router.put(`/api-${sys}/aor-fields/:id`, (req, res) => aorFieldsCtrl.updateAorField(req, res));
router.delete(`/api-${sys}/aor-fields/:id`, (req, res) => aorFieldsCtrl.deleteAorField(req, res));

//</es-section>
module.exports = router;
