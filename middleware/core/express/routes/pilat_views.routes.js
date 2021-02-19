/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:14 GMT-0400 (Bolivia Time)
 * Time: 18:38:14
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:14 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:14
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const pilatViewsCtrl = require("../controllers/pilat_views.controller");
//</es-section>
//<es-section>

router.get(`/api-${sys}/pilat-views/findPilatModulesVieModuleWithModCode`, (req, res) => pilatViewsCtrl.findPilatModulesVieModuleWithModCode(req, res));
router.get(`/api-${sys}/pilat-views/filterPilatViewsByVieModule/:vieModuleId/`, (req, res) => pilatViewsCtrl.filterPilatViewsByVieModule(req, res));

router.get(`/api-${sys}/pilat-views/findPilatViewsVieReturnWithVieCode`, (req, res) => pilatViewsCtrl.findPilatViewsVieReturnWithVieCode(req, res));
router.get(`/api-${sys}/pilat-views/filterPilatViewsByVieReturn/:vieReturnId/`, (req, res) => pilatViewsCtrl.filterPilatViewsByVieReturn(req, res));

router.get(`/api-${sys}/pilat-views/findPilatParamsVieParStatusWithParOrder`, (req, res) => pilatViewsCtrl.findPilatParamsVieParStatusWithParOrder(req, res));
router.get(`/api-${sys}/pilat-views/filterPilatViewsByVieParStatus/:vieParStatusId/`, (req, res) => pilatViewsCtrl.filterPilatViewsByVieParStatus(req, res));



router.get(`/api-${sys}/pilat-views/findOneByUid/:Id`, (req, res) => pilatViewsCtrl.findOneByUid(req, res));

router.get(`/api-${sys}/pilat-views/findOneById/:id`, (req, res) => pilatViewsCtrl.findOneById(req, res));

router.get(`/api-${sys}/pilat-views/findOneByVieCode/:vieCode`, (req, res) => pilatViewsCtrl.findOneByVieCode(req, res));

router.get(`/api-${sys}/pilat-views/findOneByVieDescription/:vieDescription`, (req, res) => pilatViewsCtrl.findOneByVieDescription(req, res));

router.get(`/api-${sys}/pilat-views/findOneByVieRoute/:vieRoute`, (req, res) => pilatViewsCtrl.findOneByVieRoute(req, res));

router.get(`/api-${sys}/pilat-views/findOneByVieParams/:vieParams`, (req, res) => pilatViewsCtrl.findOneByVieParams(req, res));

router.get(`/api-${sys}/pilat-views/findOneByVieIcon/:vieIcon`, (req, res) => pilatViewsCtrl.findOneByVieIcon(req, res));

router.get(`/api-${sys}/pilat-views/findOneByVieGroup/:vieGroup`, (req, res) => pilatViewsCtrl.findOneByVieGroup(req, res));

router.get(`/api-${sys}/pilat-views/findOneByCreatedby/:createdby`, (req, res) => pilatViewsCtrl.findOneByCreatedby(req, res));

router.get(`/api-${sys}/pilat-views/findOneByUpdatedby/:updatedby`, (req, res) => pilatViewsCtrl.findOneByUpdatedby(req, res));

router.get(`/api-${sys}/pilat-views/findOneByVieModuleId/:vieModuleId`, (req, res) => pilatViewsCtrl.findOneByVieModuleId(req, res));

router.get(`/api-${sys}/pilat-views/findOneByVieReturnId/:vieReturnId`, (req, res) => pilatViewsCtrl.findOneByVieReturnId(req, res));

router.get(`/api-${sys}/pilat-views/findOneByVieParStatusId/:vieParStatusId`, (req, res) => pilatViewsCtrl.findOneByVieParStatusId(req, res));

router.get(`/api-${sys}/pilat-views/findOneByDueat/:dueat`, (req, res) => pilatViewsCtrl.findOneByDueat(req, res));

router.get(`/api-${sys}/pilat-views/findOneByCreatedat/:createdat`, (req, res) => pilatViewsCtrl.findOneByCreatedat(req, res));

router.get(`/api-${sys}/pilat-views/findOneByUpdatedat/:updatedat`, (req, res) => pilatViewsCtrl.findOneByUpdatedat(req, res));



router.post(`/api-${sys}/pilat-views/updatePilatViewByUid`, (req, res) => pilatViewsCtrl.updatePilatViewByUid(req, res));

router.post(`/api-${sys}/pilat-views/updatePilatViewById`, (req, res) => pilatViewsCtrl.updatePilatViewById(req, res));

router.post(`/api-${sys}/pilat-views/updatePilatViewByVieCode`, (req, res) => pilatViewsCtrl.updatePilatViewByVieCode(req, res));

router.post(`/api-${sys}/pilat-views/updatePilatViewByVieDescription`, (req, res) => pilatViewsCtrl.updatePilatViewByVieDescription(req, res));

router.post(`/api-${sys}/pilat-views/updatePilatViewByVieRoute`, (req, res) => pilatViewsCtrl.updatePilatViewByVieRoute(req, res));

router.post(`/api-${sys}/pilat-views/updatePilatViewByVieParams`, (req, res) => pilatViewsCtrl.updatePilatViewByVieParams(req, res));

router.post(`/api-${sys}/pilat-views/updatePilatViewByVieIcon`, (req, res) => pilatViewsCtrl.updatePilatViewByVieIcon(req, res));

router.post(`/api-${sys}/pilat-views/updatePilatViewByVieGroup`, (req, res) => pilatViewsCtrl.updatePilatViewByVieGroup(req, res));

router.post(`/api-${sys}/pilat-views/updatePilatViewByCreatedby`, (req, res) => pilatViewsCtrl.updatePilatViewByCreatedby(req, res));

router.post(`/api-${sys}/pilat-views/updatePilatViewByUpdatedby`, (req, res) => pilatViewsCtrl.updatePilatViewByUpdatedby(req, res));

router.post(`/api-${sys}/pilat-views/updatePilatViewByVieModuleId`, (req, res) => pilatViewsCtrl.updatePilatViewByVieModuleId(req, res));

router.post(`/api-${sys}/pilat-views/updatePilatViewByVieReturnId`, (req, res) => pilatViewsCtrl.updatePilatViewByVieReturnId(req, res));

router.post(`/api-${sys}/pilat-views/updatePilatViewByVieParStatusId`, (req, res) => pilatViewsCtrl.updatePilatViewByVieParStatusId(req, res));

router.post(`/api-${sys}/pilat-views/updatePilatViewByDueat`, (req, res) => pilatViewsCtrl.updatePilatViewByDueat(req, res));

router.post(`/api-${sys}/pilat-views/updatePilatViewByCreatedat`, (req, res) => pilatViewsCtrl.updatePilatViewByCreatedat(req, res));

router.post(`/api-${sys}/pilat-views/updatePilatViewByUpdatedat`, (req, res) => pilatViewsCtrl.updatePilatViewByUpdatedat(req, res));



router.get(`/api-${sys}/pilat-views/findPilatModulesVieModuleWithModCode`, (req, res) => pilatViewsCtrl.findPilatModulesVieModuleWithModCode(req, res));

router.get(`/api-${sys}/pilat-views/findPilatViewsVieReturnWithVieCode`, (req, res) => pilatViewsCtrl.findPilatViewsVieReturnWithVieCode(req, res));

router.get(`/api-${sys}/pilat-views/findPilatParamsVieParStatusWithParOrder`, (req, res) => pilatViewsCtrl.findPilatParamsVieParStatusWithParOrder(req, res));



router.get(`/api-${sys}/pilat-views/`, (req, res) => pilatViewsCtrl.getAllPilatViews(req, res));
router.post(`/api-${sys}/pilat-views/`, (req, res) => pilatViewsCtrl.addPilatView(req, res));
router.get(`/api-${sys}/pilat-views/:Id`, (req, res) => pilatViewsCtrl.getAPilatView(req, res));
router.put(`/api-${sys}/pilat-views/:Id`, (req, res) => pilatViewsCtrl.updatePilatView(req, res));
router.delete(`/api-${sys}/pilat-views/:Id`, (req, res) => pilatViewsCtrl.deletePilatView(req, res));

//</es-section>
module.exports = router;
