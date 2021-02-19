/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:35:24 GMT-0400 (Bolivia Time)
 * Time: 18:35:24
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:35:24 GMT-0400 (Bolivia Time)
 * Last time updated: 18:35:24
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aclActionsCtrl = require("../controllers/acl_actions.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/acl-actions/findOneById/:id`, (req, res) => aclActionsCtrl.findOneById(req, res));

router.get(`/api-${sys}/acl-actions/findOneByDeleted/:deleted`, (req, res) => aclActionsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/acl-actions/findOneByAclaccess/:aclaccess`, (req, res) => aclActionsCtrl.findOneByAclaccess(req, res));

router.get(`/api-${sys}/acl-actions/findOneByName/:name`, (req, res) => aclActionsCtrl.findOneByName(req, res));

router.get(`/api-${sys}/acl-actions/findOneByCategory/:category`, (req, res) => aclActionsCtrl.findOneByCategory(req, res));

router.get(`/api-${sys}/acl-actions/findOneByAcltype/:acltype`, (req, res) => aclActionsCtrl.findOneByAcltype(req, res));

router.get(`/api-${sys}/acl-actions/findOneByDateEntered/:dateEntered`, (req, res) => aclActionsCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/acl-actions/findOneByDateModified/:dateModified`, (req, res) => aclActionsCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/acl-actions/findOneByModifiedUserId/:modifiedUserId`, (req, res) => aclActionsCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/acl-actions/findOneByCreatedBy/:createdBy`, (req, res) => aclActionsCtrl.findOneByCreatedBy(req, res));



router.post(`/api-${sys}/acl-actions/updateAclActionById`, (req, res) => aclActionsCtrl.updateAclActionById(req, res));

router.post(`/api-${sys}/acl-actions/updateAclActionByDeleted`, (req, res) => aclActionsCtrl.updateAclActionByDeleted(req, res));

router.post(`/api-${sys}/acl-actions/updateAclActionByAclaccess`, (req, res) => aclActionsCtrl.updateAclActionByAclaccess(req, res));

router.post(`/api-${sys}/acl-actions/updateAclActionByName`, (req, res) => aclActionsCtrl.updateAclActionByName(req, res));

router.post(`/api-${sys}/acl-actions/updateAclActionByCategory`, (req, res) => aclActionsCtrl.updateAclActionByCategory(req, res));

router.post(`/api-${sys}/acl-actions/updateAclActionByAcltype`, (req, res) => aclActionsCtrl.updateAclActionByAcltype(req, res));

router.post(`/api-${sys}/acl-actions/updateAclActionByDateEntered`, (req, res) => aclActionsCtrl.updateAclActionByDateEntered(req, res));

router.post(`/api-${sys}/acl-actions/updateAclActionByDateModified`, (req, res) => aclActionsCtrl.updateAclActionByDateModified(req, res));

router.post(`/api-${sys}/acl-actions/updateAclActionByModifiedUserId`, (req, res) => aclActionsCtrl.updateAclActionByModifiedUserId(req, res));

router.post(`/api-${sys}/acl-actions/updateAclActionByCreatedBy`, (req, res) => aclActionsCtrl.updateAclActionByCreatedBy(req, res));





router.get(`/api-${sys}/acl-actions/`, (req, res) => aclActionsCtrl.getAllAclActions(req, res));
router.post(`/api-${sys}/acl-actions/`, (req, res) => aclActionsCtrl.addAclAction(req, res));
router.get(`/api-${sys}/acl-actions/:id`, (req, res) => aclActionsCtrl.getAAclAction(req, res));
router.put(`/api-${sys}/acl-actions/:id`, (req, res) => aclActionsCtrl.updateAclAction(req, res));
router.delete(`/api-${sys}/acl-actions/:id`, (req, res) => aclActionsCtrl.deleteAclAction(req, res));

//</es-section>
module.exports = router;
