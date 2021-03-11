/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:59 GMT-0400 (Bolivia Time)
 * Time: 14:56:59
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:59 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:59
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const g3lGelEmailCtrl = require("../controllers/g3l_gel_email.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/g3l-gel-email/findOneById/:id`, (req, res) => g3lGelEmailCtrl.findOneById(req, res));

router.get(`/api-${sys}/g3l-gel-email/findOneByDeleted/:deleted`, (req, res) => g3lGelEmailCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/g3l-gel-email/findOneByName/:name`, (req, res) => g3lGelEmailCtrl.findOneByName(req, res));

router.get(`/api-${sys}/g3l-gel-email/findOneByParentType/:parentType`, (req, res) => g3lGelEmailCtrl.findOneByParentType(req, res));

router.get(`/api-${sys}/g3l-gel-email/findOneByEstadoEnvio/:estadoEnvio`, (req, res) => g3lGelEmailCtrl.findOneByEstadoEnvio(req, res));

router.get(`/api-${sys}/g3l-gel-email/findOneByCorreoElectronico/:correoElectronico`, (req, res) => g3lGelEmailCtrl.findOneByCorreoElectronico(req, res));

router.get(`/api-${sys}/g3l-gel-email/findOneByDescription/:description`, (req, res) => g3lGelEmailCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/g3l-gel-email/findOneByMensaje/:mensaje`, (req, res) => g3lGelEmailCtrl.findOneByMensaje(req, res));

router.get(`/api-${sys}/g3l-gel-email/findOneByDateEntered/:dateEntered`, (req, res) => g3lGelEmailCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/g3l-gel-email/findOneByDateModified/:dateModified`, (req, res) => g3lGelEmailCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/g3l-gel-email/findOneByFechaEnvio/:fechaEnvio`, (req, res) => g3lGelEmailCtrl.findOneByFechaEnvio(req, res));

router.get(`/api-${sys}/g3l-gel-email/findOneByModifiedUserId/:modifiedUserId`, (req, res) => g3lGelEmailCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/g3l-gel-email/findOneByCreatedBy/:createdBy`, (req, res) => g3lGelEmailCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/g3l-gel-email/findOneByAssignedUserId/:assignedUserId`, (req, res) => g3lGelEmailCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/g3l-gel-email/findOneByParentId/:parentId`, (req, res) => g3lGelEmailCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/g3l-gel-email/updateG3lGelEmailById`, (req, res) => g3lGelEmailCtrl.updateG3lGelEmailById(req, res));

router.post(`/api-${sys}/g3l-gel-email/updateG3lGelEmailByDeleted`, (req, res) => g3lGelEmailCtrl.updateG3lGelEmailByDeleted(req, res));

router.post(`/api-${sys}/g3l-gel-email/updateG3lGelEmailByName`, (req, res) => g3lGelEmailCtrl.updateG3lGelEmailByName(req, res));

router.post(`/api-${sys}/g3l-gel-email/updateG3lGelEmailByParentType`, (req, res) => g3lGelEmailCtrl.updateG3lGelEmailByParentType(req, res));

router.post(`/api-${sys}/g3l-gel-email/updateG3lGelEmailByEstadoEnvio`, (req, res) => g3lGelEmailCtrl.updateG3lGelEmailByEstadoEnvio(req, res));

router.post(`/api-${sys}/g3l-gel-email/updateG3lGelEmailByCorreoElectronico`, (req, res) => g3lGelEmailCtrl.updateG3lGelEmailByCorreoElectronico(req, res));

router.post(`/api-${sys}/g3l-gel-email/updateG3lGelEmailByDescription`, (req, res) => g3lGelEmailCtrl.updateG3lGelEmailByDescription(req, res));

router.post(`/api-${sys}/g3l-gel-email/updateG3lGelEmailByMensaje`, (req, res) => g3lGelEmailCtrl.updateG3lGelEmailByMensaje(req, res));

router.post(`/api-${sys}/g3l-gel-email/updateG3lGelEmailByDateEntered`, (req, res) => g3lGelEmailCtrl.updateG3lGelEmailByDateEntered(req, res));

router.post(`/api-${sys}/g3l-gel-email/updateG3lGelEmailByDateModified`, (req, res) => g3lGelEmailCtrl.updateG3lGelEmailByDateModified(req, res));

router.post(`/api-${sys}/g3l-gel-email/updateG3lGelEmailByFechaEnvio`, (req, res) => g3lGelEmailCtrl.updateG3lGelEmailByFechaEnvio(req, res));

router.post(`/api-${sys}/g3l-gel-email/updateG3lGelEmailByModifiedUserId`, (req, res) => g3lGelEmailCtrl.updateG3lGelEmailByModifiedUserId(req, res));

router.post(`/api-${sys}/g3l-gel-email/updateG3lGelEmailByCreatedBy`, (req, res) => g3lGelEmailCtrl.updateG3lGelEmailByCreatedBy(req, res));

router.post(`/api-${sys}/g3l-gel-email/updateG3lGelEmailByAssignedUserId`, (req, res) => g3lGelEmailCtrl.updateG3lGelEmailByAssignedUserId(req, res));

router.post(`/api-${sys}/g3l-gel-email/updateG3lGelEmailByParentId`, (req, res) => g3lGelEmailCtrl.updateG3lGelEmailByParentId(req, res));





router.get(`/api-${sys}/g3l-gel-email/`, (req, res) => g3lGelEmailCtrl.getAllG3lGelEmail(req, res));
router.post(`/api-${sys}/g3l-gel-email/`, (req, res) => g3lGelEmailCtrl.addG3lGelEmail(req, res));
router.get(`/api-${sys}/g3l-gel-email/:id`, (req, res) => g3lGelEmailCtrl.getAG3lGelEmail(req, res));
router.put(`/api-${sys}/g3l-gel-email/:id`, (req, res) => g3lGelEmailCtrl.updateG3lGelEmail(req, res));
router.delete(`/api-${sys}/g3l-gel-email/:id`, (req, res) => g3lGelEmailCtrl.deleteG3lGelEmail(req, res));

//</es-section>
module.exports = router;
