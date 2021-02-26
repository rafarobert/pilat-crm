/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:54 GMT-0400 (Bolivia Time)
 * Time: 0:23:54
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:54 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:54
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const templatesectionlineCtrl = require("../controllers/templatesectionline.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/templatesectionline/findOneById/:id`, (req, res) => templatesectionlineCtrl.findOneById(req, res));

router.get(`/api-${sys}/templatesectionline/findOneByDeleted/:deleted`, (req, res) => templatesectionlineCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/templatesectionline/findOneByOrd/:ord`, (req, res) => templatesectionlineCtrl.findOneByOrd(req, res));

router.get(`/api-${sys}/templatesectionline/findOneByName/:name`, (req, res) => templatesectionlineCtrl.findOneByName(req, res));

router.get(`/api-${sys}/templatesectionline/findOneByThumbnail/:thumbnail`, (req, res) => templatesectionlineCtrl.findOneByThumbnail(req, res));

router.get(`/api-${sys}/templatesectionline/findOneByGrp/:grp`, (req, res) => templatesectionlineCtrl.findOneByGrp(req, res));

router.get(`/api-${sys}/templatesectionline/findOneByDescription/:description`, (req, res) => templatesectionlineCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/templatesectionline/findOneByDateEntered/:dateEntered`, (req, res) => templatesectionlineCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/templatesectionline/findOneByDateModified/:dateModified`, (req, res) => templatesectionlineCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/templatesectionline/findOneByModifiedUserId/:modifiedUserId`, (req, res) => templatesectionlineCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/templatesectionline/findOneByCreatedBy/:createdBy`, (req, res) => templatesectionlineCtrl.findOneByCreatedBy(req, res));



router.post(`/api-${sys}/templatesectionline/updateTemplatesectionlineById`, (req, res) => templatesectionlineCtrl.updateTemplatesectionlineById(req, res));

router.post(`/api-${sys}/templatesectionline/updateTemplatesectionlineByDeleted`, (req, res) => templatesectionlineCtrl.updateTemplatesectionlineByDeleted(req, res));

router.post(`/api-${sys}/templatesectionline/updateTemplatesectionlineByOrd`, (req, res) => templatesectionlineCtrl.updateTemplatesectionlineByOrd(req, res));

router.post(`/api-${sys}/templatesectionline/updateTemplatesectionlineByName`, (req, res) => templatesectionlineCtrl.updateTemplatesectionlineByName(req, res));

router.post(`/api-${sys}/templatesectionline/updateTemplatesectionlineByThumbnail`, (req, res) => templatesectionlineCtrl.updateTemplatesectionlineByThumbnail(req, res));

router.post(`/api-${sys}/templatesectionline/updateTemplatesectionlineByGrp`, (req, res) => templatesectionlineCtrl.updateTemplatesectionlineByGrp(req, res));

router.post(`/api-${sys}/templatesectionline/updateTemplatesectionlineByDescription`, (req, res) => templatesectionlineCtrl.updateTemplatesectionlineByDescription(req, res));

router.post(`/api-${sys}/templatesectionline/updateTemplatesectionlineByDateEntered`, (req, res) => templatesectionlineCtrl.updateTemplatesectionlineByDateEntered(req, res));

router.post(`/api-${sys}/templatesectionline/updateTemplatesectionlineByDateModified`, (req, res) => templatesectionlineCtrl.updateTemplatesectionlineByDateModified(req, res));

router.post(`/api-${sys}/templatesectionline/updateTemplatesectionlineByModifiedUserId`, (req, res) => templatesectionlineCtrl.updateTemplatesectionlineByModifiedUserId(req, res));

router.post(`/api-${sys}/templatesectionline/updateTemplatesectionlineByCreatedBy`, (req, res) => templatesectionlineCtrl.updateTemplatesectionlineByCreatedBy(req, res));





router.get(`/api-${sys}/templatesectionline/`, (req, res) => templatesectionlineCtrl.getAllTemplatesectionline(req, res));
router.post(`/api-${sys}/templatesectionline/`, (req, res) => templatesectionlineCtrl.addTemplatesectionline(req, res));
router.get(`/api-${sys}/templatesectionline/:id`, (req, res) => templatesectionlineCtrl.getATemplatesectionline(req, res));
router.put(`/api-${sys}/templatesectionline/:id`, (req, res) => templatesectionlineCtrl.updateTemplatesectionline(req, res));
router.delete(`/api-${sys}/templatesectionline/:id`, (req, res) => templatesectionlineCtrl.deleteTemplatesectionline(req, res));

//</es-section>
module.exports = router;
