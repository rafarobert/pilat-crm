/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:51 GMT-0400 (Bolivia Time)
 * Time: 14:0:51
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:51 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:51
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const foldersCtrl = require("../controllers/folders.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/folders/findOneById/:id`, (req, res) => foldersCtrl.findOneById(req, res));

router.get(`/api-${sys}/folders/findOneByHasChild/:hasChild`, (req, res) => foldersCtrl.findOneByHasChild(req, res));

router.get(`/api-${sys}/folders/findOneByIsGroup/:isGroup`, (req, res) => foldersCtrl.findOneByIsGroup(req, res));

router.get(`/api-${sys}/folders/findOneByIsDynamic/:isDynamic`, (req, res) => foldersCtrl.findOneByIsDynamic(req, res));

router.get(`/api-${sys}/folders/findOneByDeleted/:deleted`, (req, res) => foldersCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/folders/findOneByName/:name`, (req, res) => foldersCtrl.findOneByName(req, res));

router.get(`/api-${sys}/folders/findOneByFolderType/:folderType`, (req, res) => foldersCtrl.findOneByFolderType(req, res));

router.get(`/api-${sys}/folders/findOneByDynamicQuery/:dynamicQuery`, (req, res) => foldersCtrl.findOneByDynamicQuery(req, res));

router.get(`/api-${sys}/folders/findOneByParentFolder/:parentFolder`, (req, res) => foldersCtrl.findOneByParentFolder(req, res));

router.get(`/api-${sys}/folders/findOneByAssignToId/:assignToId`, (req, res) => foldersCtrl.findOneByAssignToId(req, res));

router.get(`/api-${sys}/folders/findOneByCreatedBy/:createdBy`, (req, res) => foldersCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/folders/findOneByModifiedBy/:modifiedBy`, (req, res) => foldersCtrl.findOneByModifiedBy(req, res));



router.post(`/api-${sys}/folders/updateFolderById`, (req, res) => foldersCtrl.updateFolderById(req, res));

router.post(`/api-${sys}/folders/updateFolderByHasChild`, (req, res) => foldersCtrl.updateFolderByHasChild(req, res));

router.post(`/api-${sys}/folders/updateFolderByIsGroup`, (req, res) => foldersCtrl.updateFolderByIsGroup(req, res));

router.post(`/api-${sys}/folders/updateFolderByIsDynamic`, (req, res) => foldersCtrl.updateFolderByIsDynamic(req, res));

router.post(`/api-${sys}/folders/updateFolderByDeleted`, (req, res) => foldersCtrl.updateFolderByDeleted(req, res));

router.post(`/api-${sys}/folders/updateFolderByName`, (req, res) => foldersCtrl.updateFolderByName(req, res));

router.post(`/api-${sys}/folders/updateFolderByFolderType`, (req, res) => foldersCtrl.updateFolderByFolderType(req, res));

router.post(`/api-${sys}/folders/updateFolderByDynamicQuery`, (req, res) => foldersCtrl.updateFolderByDynamicQuery(req, res));

router.post(`/api-${sys}/folders/updateFolderByParentFolder`, (req, res) => foldersCtrl.updateFolderByParentFolder(req, res));

router.post(`/api-${sys}/folders/updateFolderByAssignToId`, (req, res) => foldersCtrl.updateFolderByAssignToId(req, res));

router.post(`/api-${sys}/folders/updateFolderByCreatedBy`, (req, res) => foldersCtrl.updateFolderByCreatedBy(req, res));

router.post(`/api-${sys}/folders/updateFolderByModifiedBy`, (req, res) => foldersCtrl.updateFolderByModifiedBy(req, res));





router.get(`/api-${sys}/folders/`, (req, res) => foldersCtrl.getAllFolders(req, res));
router.post(`/api-${sys}/folders/`, (req, res) => foldersCtrl.addFolder(req, res));
router.get(`/api-${sys}/folders/:id`, (req, res) => foldersCtrl.getAFolder(req, res));
router.put(`/api-${sys}/folders/:id`, (req, res) => foldersCtrl.updateFolder(req, res));
router.delete(`/api-${sys}/folders/:id`, (req, res) => foldersCtrl.deleteFolder(req, res));

//</es-section>
module.exports = router;
