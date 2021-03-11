/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:53 GMT-0400 (Bolivia Time)
 * Time: 14:56:53
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:53 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:53
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const foldersRelCtrl = require("../controllers/folders_rel.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/folders-rel/findOneById/:id`, (req, res) => foldersRelCtrl.findOneById(req, res));

router.get(`/api-${sys}/folders-rel/findOneByDeleted/:deleted`, (req, res) => foldersRelCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/folders-rel/findOneByPolymorphicModule/:polymorphicModule`, (req, res) => foldersRelCtrl.findOneByPolymorphicModule(req, res));

router.get(`/api-${sys}/folders-rel/findOneByFolderId/:folderId`, (req, res) => foldersRelCtrl.findOneByFolderId(req, res));

router.get(`/api-${sys}/folders-rel/findOneByPolymorphicId/:polymorphicId`, (req, res) => foldersRelCtrl.findOneByPolymorphicId(req, res));



router.post(`/api-${sys}/folders-rel/updateFolderRelById`, (req, res) => foldersRelCtrl.updateFolderRelById(req, res));

router.post(`/api-${sys}/folders-rel/updateFolderRelByDeleted`, (req, res) => foldersRelCtrl.updateFolderRelByDeleted(req, res));

router.post(`/api-${sys}/folders-rel/updateFolderRelByPolymorphicModule`, (req, res) => foldersRelCtrl.updateFolderRelByPolymorphicModule(req, res));

router.post(`/api-${sys}/folders-rel/updateFolderRelByFolderId`, (req, res) => foldersRelCtrl.updateFolderRelByFolderId(req, res));

router.post(`/api-${sys}/folders-rel/updateFolderRelByPolymorphicId`, (req, res) => foldersRelCtrl.updateFolderRelByPolymorphicId(req, res));





router.get(`/api-${sys}/folders-rel/`, (req, res) => foldersRelCtrl.getAllFoldersRel(req, res));
router.post(`/api-${sys}/folders-rel/`, (req, res) => foldersRelCtrl.addFolderRel(req, res));
router.get(`/api-${sys}/folders-rel/:id`, (req, res) => foldersRelCtrl.getAFolderRel(req, res));
router.put(`/api-${sys}/folders-rel/:id`, (req, res) => foldersRelCtrl.updateFolderRel(req, res));
router.delete(`/api-${sys}/folders-rel/:id`, (req, res) => foldersRelCtrl.deleteFolderRel(req, res));

//</es-section>
module.exports = router;
