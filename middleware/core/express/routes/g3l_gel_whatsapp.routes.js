/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:37:26 GMT-0400 (Bolivia Time)
 * Time: 18:37:26
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:37:26 GMT-0400 (Bolivia Time)
 * Last time updated: 18:37:26
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const g3lGelWhatsappCtrl = require("../controllers/g3l_gel_whatsapp.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/g3l-gel-whatsapp/findOneById/:id`, (req, res) => g3lGelWhatsappCtrl.findOneById(req, res));

router.get(`/api-${sys}/g3l-gel-whatsapp/findOneByDeleted/:deleted`, (req, res) => g3lGelWhatsappCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/g3l-gel-whatsapp/findOneByName/:name`, (req, res) => g3lGelWhatsappCtrl.findOneByName(req, res));

router.get(`/api-${sys}/g3l-gel-whatsapp/findOneByParentType/:parentType`, (req, res) => g3lGelWhatsappCtrl.findOneByParentType(req, res));

router.get(`/api-${sys}/g3l-gel-whatsapp/findOneByNumeroEnvio/:numeroEnvio`, (req, res) => g3lGelWhatsappCtrl.findOneByNumeroEnvio(req, res));

router.get(`/api-${sys}/g3l-gel-whatsapp/findOneByEstadoEnvio/:estadoEnvio`, (req, res) => g3lGelWhatsappCtrl.findOneByEstadoEnvio(req, res));

router.get(`/api-${sys}/g3l-gel-whatsapp/findOneByDescription/:description`, (req, res) => g3lGelWhatsappCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/g3l-gel-whatsapp/findOneByMensaje/:mensaje`, (req, res) => g3lGelWhatsappCtrl.findOneByMensaje(req, res));

router.get(`/api-${sys}/g3l-gel-whatsapp/findOneByDateEntered/:dateEntered`, (req, res) => g3lGelWhatsappCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/g3l-gel-whatsapp/findOneByDateModified/:dateModified`, (req, res) => g3lGelWhatsappCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/g3l-gel-whatsapp/findOneByFechaEnvio/:fechaEnvio`, (req, res) => g3lGelWhatsappCtrl.findOneByFechaEnvio(req, res));

router.get(`/api-${sys}/g3l-gel-whatsapp/findOneByModifiedUserId/:modifiedUserId`, (req, res) => g3lGelWhatsappCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/g3l-gel-whatsapp/findOneByCreatedBy/:createdBy`, (req, res) => g3lGelWhatsappCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/g3l-gel-whatsapp/findOneByAssignedUserId/:assignedUserId`, (req, res) => g3lGelWhatsappCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/g3l-gel-whatsapp/findOneByParentId/:parentId`, (req, res) => g3lGelWhatsappCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/g3l-gel-whatsapp/updateG3lGelWhatsappById`, (req, res) => g3lGelWhatsappCtrl.updateG3lGelWhatsappById(req, res));

router.post(`/api-${sys}/g3l-gel-whatsapp/updateG3lGelWhatsappByDeleted`, (req, res) => g3lGelWhatsappCtrl.updateG3lGelWhatsappByDeleted(req, res));

router.post(`/api-${sys}/g3l-gel-whatsapp/updateG3lGelWhatsappByName`, (req, res) => g3lGelWhatsappCtrl.updateG3lGelWhatsappByName(req, res));

router.post(`/api-${sys}/g3l-gel-whatsapp/updateG3lGelWhatsappByParentType`, (req, res) => g3lGelWhatsappCtrl.updateG3lGelWhatsappByParentType(req, res));

router.post(`/api-${sys}/g3l-gel-whatsapp/updateG3lGelWhatsappByNumeroEnvio`, (req, res) => g3lGelWhatsappCtrl.updateG3lGelWhatsappByNumeroEnvio(req, res));

router.post(`/api-${sys}/g3l-gel-whatsapp/updateG3lGelWhatsappByEstadoEnvio`, (req, res) => g3lGelWhatsappCtrl.updateG3lGelWhatsappByEstadoEnvio(req, res));

router.post(`/api-${sys}/g3l-gel-whatsapp/updateG3lGelWhatsappByDescription`, (req, res) => g3lGelWhatsappCtrl.updateG3lGelWhatsappByDescription(req, res));

router.post(`/api-${sys}/g3l-gel-whatsapp/updateG3lGelWhatsappByMensaje`, (req, res) => g3lGelWhatsappCtrl.updateG3lGelWhatsappByMensaje(req, res));

router.post(`/api-${sys}/g3l-gel-whatsapp/updateG3lGelWhatsappByDateEntered`, (req, res) => g3lGelWhatsappCtrl.updateG3lGelWhatsappByDateEntered(req, res));

router.post(`/api-${sys}/g3l-gel-whatsapp/updateG3lGelWhatsappByDateModified`, (req, res) => g3lGelWhatsappCtrl.updateG3lGelWhatsappByDateModified(req, res));

router.post(`/api-${sys}/g3l-gel-whatsapp/updateG3lGelWhatsappByFechaEnvio`, (req, res) => g3lGelWhatsappCtrl.updateG3lGelWhatsappByFechaEnvio(req, res));

router.post(`/api-${sys}/g3l-gel-whatsapp/updateG3lGelWhatsappByModifiedUserId`, (req, res) => g3lGelWhatsappCtrl.updateG3lGelWhatsappByModifiedUserId(req, res));

router.post(`/api-${sys}/g3l-gel-whatsapp/updateG3lGelWhatsappByCreatedBy`, (req, res) => g3lGelWhatsappCtrl.updateG3lGelWhatsappByCreatedBy(req, res));

router.post(`/api-${sys}/g3l-gel-whatsapp/updateG3lGelWhatsappByAssignedUserId`, (req, res) => g3lGelWhatsappCtrl.updateG3lGelWhatsappByAssignedUserId(req, res));

router.post(`/api-${sys}/g3l-gel-whatsapp/updateG3lGelWhatsappByParentId`, (req, res) => g3lGelWhatsappCtrl.updateG3lGelWhatsappByParentId(req, res));





router.get(`/api-${sys}/g3l-gel-whatsapp/`, (req, res) => g3lGelWhatsappCtrl.getAllG3lGelWhatsapp(req, res));
router.post(`/api-${sys}/g3l-gel-whatsapp/`, (req, res) => g3lGelWhatsappCtrl.addG3lGelWhatsapp(req, res));
router.get(`/api-${sys}/g3l-gel-whatsapp/:id`, (req, res) => g3lGelWhatsappCtrl.getAG3lGelWhatsapp(req, res));
router.put(`/api-${sys}/g3l-gel-whatsapp/:id`, (req, res) => g3lGelWhatsappCtrl.updateG3lGelWhatsapp(req, res));
router.delete(`/api-${sys}/g3l-gel-whatsapp/:id`, (req, res) => g3lGelWhatsappCtrl.deleteG3lGelWhatsapp(req, res));

//</es-section>
module.exports = router;
