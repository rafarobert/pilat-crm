/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:05 GMT-0400 (Bolivia Time)
 * Time: 4:43:5
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:05 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:5
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const favoritesCtrl = require("../controllers/favorites.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/favorites/findOneById/:id`, (req, res) => favoritesCtrl.findOneById(req, res));

router.get(`/api-${sys}/favorites/findOneByDeleted/:deleted`, (req, res) => favoritesCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/favorites/findOneByName/:name`, (req, res) => favoritesCtrl.findOneByName(req, res));

router.get(`/api-${sys}/favorites/findOneByParentType/:parentType`, (req, res) => favoritesCtrl.findOneByParentType(req, res));

router.get(`/api-${sys}/favorites/findOneByDescription/:description`, (req, res) => favoritesCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/favorites/findOneByDateEntered/:dateEntered`, (req, res) => favoritesCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/favorites/findOneByDateModified/:dateModified`, (req, res) => favoritesCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/favorites/findOneByModifiedUserId/:modifiedUserId`, (req, res) => favoritesCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/favorites/findOneByCreatedBy/:createdBy`, (req, res) => favoritesCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/favorites/findOneByAssignedUserId/:assignedUserId`, (req, res) => favoritesCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/favorites/findOneByParentId/:parentId`, (req, res) => favoritesCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/favorites/updateFavoriteById`, (req, res) => favoritesCtrl.updateFavoriteById(req, res));

router.post(`/api-${sys}/favorites/updateFavoriteByDeleted`, (req, res) => favoritesCtrl.updateFavoriteByDeleted(req, res));

router.post(`/api-${sys}/favorites/updateFavoriteByName`, (req, res) => favoritesCtrl.updateFavoriteByName(req, res));

router.post(`/api-${sys}/favorites/updateFavoriteByParentType`, (req, res) => favoritesCtrl.updateFavoriteByParentType(req, res));

router.post(`/api-${sys}/favorites/updateFavoriteByDescription`, (req, res) => favoritesCtrl.updateFavoriteByDescription(req, res));

router.post(`/api-${sys}/favorites/updateFavoriteByDateEntered`, (req, res) => favoritesCtrl.updateFavoriteByDateEntered(req, res));

router.post(`/api-${sys}/favorites/updateFavoriteByDateModified`, (req, res) => favoritesCtrl.updateFavoriteByDateModified(req, res));

router.post(`/api-${sys}/favorites/updateFavoriteByModifiedUserId`, (req, res) => favoritesCtrl.updateFavoriteByModifiedUserId(req, res));

router.post(`/api-${sys}/favorites/updateFavoriteByCreatedBy`, (req, res) => favoritesCtrl.updateFavoriteByCreatedBy(req, res));

router.post(`/api-${sys}/favorites/updateFavoriteByAssignedUserId`, (req, res) => favoritesCtrl.updateFavoriteByAssignedUserId(req, res));

router.post(`/api-${sys}/favorites/updateFavoriteByParentId`, (req, res) => favoritesCtrl.updateFavoriteByParentId(req, res));





router.get(`/api-${sys}/favorites/`, (req, res) => favoritesCtrl.getAllFavorites(req, res));
router.post(`/api-${sys}/favorites/`, (req, res) => favoritesCtrl.addFavorite(req, res));
router.get(`/api-${sys}/favorites/:id`, (req, res) => favoritesCtrl.getAFavorite(req, res));
router.put(`/api-${sys}/favorites/:id`, (req, res) => favoritesCtrl.updateFavorite(req, res));
router.delete(`/api-${sys}/favorites/:id`, (req, res) => favoritesCtrl.deleteFavorite(req, res));

//</es-section>
module.exports = router;
