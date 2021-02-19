/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:42:49 GMT-0400 (Bolivia Time)
 * Time: 4:42:49
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:42:49 GMT-0400 (Bolivia Time)
 * Last time updated: 4:42:49
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const customFieldsCtrl = require("../controllers/custom_fields.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/custom-fields/findOneByDeleted/:deleted`, (req, res) => customFieldsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/custom-fields/findOneBySetNum/:setNum`, (req, res) => customFieldsCtrl.findOneBySetNum(req, res));

router.get(`/api-${sys}/custom-fields/findOneByBeanId/:beanId`, (req, res) => customFieldsCtrl.findOneByBeanId(req, res));

router.get(`/api-${sys}/custom-fields/findOneByField0/:field0`, (req, res) => customFieldsCtrl.findOneByField0(req, res));

router.get(`/api-${sys}/custom-fields/findOneByField1/:field1`, (req, res) => customFieldsCtrl.findOneByField1(req, res));

router.get(`/api-${sys}/custom-fields/findOneByField2/:field2`, (req, res) => customFieldsCtrl.findOneByField2(req, res));

router.get(`/api-${sys}/custom-fields/findOneByField3/:field3`, (req, res) => customFieldsCtrl.findOneByField3(req, res));

router.get(`/api-${sys}/custom-fields/findOneByField4/:field4`, (req, res) => customFieldsCtrl.findOneByField4(req, res));

router.get(`/api-${sys}/custom-fields/findOneByField5/:field5`, (req, res) => customFieldsCtrl.findOneByField5(req, res));

router.get(`/api-${sys}/custom-fields/findOneByField6/:field6`, (req, res) => customFieldsCtrl.findOneByField6(req, res));

router.get(`/api-${sys}/custom-fields/findOneByField7/:field7`, (req, res) => customFieldsCtrl.findOneByField7(req, res));

router.get(`/api-${sys}/custom-fields/findOneByField8/:field8`, (req, res) => customFieldsCtrl.findOneByField8(req, res));

router.get(`/api-${sys}/custom-fields/findOneByField9/:field9`, (req, res) => customFieldsCtrl.findOneByField9(req, res));



router.post(`/api-${sys}/custom-fields/updateCustomFieldByDeleted`, (req, res) => customFieldsCtrl.updateCustomFieldByDeleted(req, res));

router.post(`/api-${sys}/custom-fields/updateCustomFieldBySetNum`, (req, res) => customFieldsCtrl.updateCustomFieldBySetNum(req, res));

router.post(`/api-${sys}/custom-fields/updateCustomFieldByBeanId`, (req, res) => customFieldsCtrl.updateCustomFieldByBeanId(req, res));

router.post(`/api-${sys}/custom-fields/updateCustomFieldByField0`, (req, res) => customFieldsCtrl.updateCustomFieldByField0(req, res));

router.post(`/api-${sys}/custom-fields/updateCustomFieldByField1`, (req, res) => customFieldsCtrl.updateCustomFieldByField1(req, res));

router.post(`/api-${sys}/custom-fields/updateCustomFieldByField2`, (req, res) => customFieldsCtrl.updateCustomFieldByField2(req, res));

router.post(`/api-${sys}/custom-fields/updateCustomFieldByField3`, (req, res) => customFieldsCtrl.updateCustomFieldByField3(req, res));

router.post(`/api-${sys}/custom-fields/updateCustomFieldByField4`, (req, res) => customFieldsCtrl.updateCustomFieldByField4(req, res));

router.post(`/api-${sys}/custom-fields/updateCustomFieldByField5`, (req, res) => customFieldsCtrl.updateCustomFieldByField5(req, res));

router.post(`/api-${sys}/custom-fields/updateCustomFieldByField6`, (req, res) => customFieldsCtrl.updateCustomFieldByField6(req, res));

router.post(`/api-${sys}/custom-fields/updateCustomFieldByField7`, (req, res) => customFieldsCtrl.updateCustomFieldByField7(req, res));

router.post(`/api-${sys}/custom-fields/updateCustomFieldByField8`, (req, res) => customFieldsCtrl.updateCustomFieldByField8(req, res));

router.post(`/api-${sys}/custom-fields/updateCustomFieldByField9`, (req, res) => customFieldsCtrl.updateCustomFieldByField9(req, res));





//</es-section>
module.exports = router;
