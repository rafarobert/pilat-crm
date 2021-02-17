/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:41:49 GMT-0400 (Bolivia Time)
 * Time: 4:41:49
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:41:49 GMT-0400 (Bolivia Time)
 * Last time updated: 4:41:49
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const amProjecttemplatesContacts1CCtrl = require("../controllers/am_projecttemplates_contacts_1_c.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/am-projecttemplates-contacts-1-c/findOneById/:id`, (req, res) => amProjecttemplatesContacts1CCtrl.findOneById(req, res));

router.get(`/api-${sys}/am-projecttemplates-contacts-1-c/findOneByDeleted/:deleted`, (req, res) => amProjecttemplatesContacts1CCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/am-projecttemplates-contacts-1-c/findOneByAmProjecttemplatesIda/:amProjecttemplatesIda`, (req, res) => amProjecttemplatesContacts1CCtrl.findOneByAmProjecttemplatesIda(req, res));

router.get(`/api-${sys}/am-projecttemplates-contacts-1-c/findOneByContactsIdb/:contactsIdb`, (req, res) => amProjecttemplatesContacts1CCtrl.findOneByContactsIdb(req, res));

router.get(`/api-${sys}/am-projecttemplates-contacts-1-c/findOneByDateModified/:dateModified`, (req, res) => amProjecttemplatesContacts1CCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/am-projecttemplates-contacts-1-c/updateAmProjecttemplateContact1CById`, (req, res) => amProjecttemplatesContacts1CCtrl.updateAmProjecttemplateContact1CById(req, res));

router.post(`/api-${sys}/am-projecttemplates-contacts-1-c/updateAmProjecttemplateContact1CByDeleted`, (req, res) => amProjecttemplatesContacts1CCtrl.updateAmProjecttemplateContact1CByDeleted(req, res));

router.post(`/api-${sys}/am-projecttemplates-contacts-1-c/updateAmProjecttemplateContact1CByAmProjecttemplatesIda`, (req, res) => amProjecttemplatesContacts1CCtrl.updateAmProjecttemplateContact1CByAmProjecttemplatesIda(req, res));

router.post(`/api-${sys}/am-projecttemplates-contacts-1-c/updateAmProjecttemplateContact1CByContactsIdb`, (req, res) => amProjecttemplatesContacts1CCtrl.updateAmProjecttemplateContact1CByContactsIdb(req, res));

router.post(`/api-${sys}/am-projecttemplates-contacts-1-c/updateAmProjecttemplateContact1CByDateModified`, (req, res) => amProjecttemplatesContacts1CCtrl.updateAmProjecttemplateContact1CByDateModified(req, res));





router.get(`/api-${sys}/am-projecttemplates-contacts-1-c/`, (req, res) => amProjecttemplatesContacts1CCtrl.getAllAmProjecttemplatesContacts1C(req, res));
router.post(`/api-${sys}/am-projecttemplates-contacts-1-c/`, (req, res) => amProjecttemplatesContacts1CCtrl.addAmProjecttemplateContact1C(req, res));
router.get(`/api-${sys}/am-projecttemplates-contacts-1-c/:id`, (req, res) => amProjecttemplatesContacts1CCtrl.getAAmProjecttemplateContact1C(req, res));
router.put(`/api-${sys}/am-projecttemplates-contacts-1-c/:id`, (req, res) => amProjecttemplatesContacts1CCtrl.updateAmProjecttemplateContact1C(req, res));
router.delete(`/api-${sys}/am-projecttemplates-contacts-1-c/:id`, (req, res) => amProjecttemplatesContacts1CCtrl.deleteAmProjecttemplateContact1C(req, res));

//</es-section>
module.exports = router;
