/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:47 GMT-0400 (Bolivia Time)
 * Time: 4:43:47
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:47 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:47
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const pilatModulesCtrl = require("../controllers/pilat_modules.controller");
//</es-section>
//<es-section>

router.get(`/api-${sys}/pilat-modules/findPilatParamsModParStatusWithParOrder`, (req, res) => pilatModulesCtrl.findPilatParamsModParStatusWithParOrder(req, res));
router.get(`/api-${sys}/pilat-modules/filterPilatModulesByModParStatus/:modParStatusId/`, (req, res) => pilatModulesCtrl.filterPilatModulesByModParStatus(req, res));

router.get(`/api-${sys}/pilat-modules/findPilatModulesModParentWithModCode`, (req, res) => pilatModulesCtrl.findPilatModulesModParentWithModCode(req, res));
router.get(`/api-${sys}/pilat-modules/filterPilatModulesByModParent/:modParentId/`, (req, res) => pilatModulesCtrl.filterPilatModulesByModParent(req, res));



router.get(`/api-${sys}/pilat-modules/findOneByUid/:Id`, (req, res) => pilatModulesCtrl.findOneByUid(req, res));

router.get(`/api-${sys}/pilat-modules/findOneById/:id`, (req, res) => pilatModulesCtrl.findOneById(req, res));

router.get(`/api-${sys}/pilat-modules/findOneByModCode/:modCode`, (req, res) => pilatModulesCtrl.findOneByModCode(req, res));

router.get(`/api-${sys}/pilat-modules/findOneByModDescription/:modDescription`, (req, res) => pilatModulesCtrl.findOneByModDescription(req, res));

router.get(`/api-${sys}/pilat-modules/findOneByModAbbr/:modAbbr`, (req, res) => pilatModulesCtrl.findOneByModAbbr(req, res));

router.get(`/api-${sys}/pilat-modules/findOneByModIcon/:modIcon`, (req, res) => pilatModulesCtrl.findOneByModIcon(req, res));

router.get(`/api-${sys}/pilat-modules/findOneByModGroup/:modGroup`, (req, res) => pilatModulesCtrl.findOneByModGroup(req, res));

router.get(`/api-${sys}/pilat-modules/findOneByModParStatusId/:modParStatusId`, (req, res) => pilatModulesCtrl.findOneByModParStatusId(req, res));

router.get(`/api-${sys}/pilat-modules/findOneByCreatedby/:createdby`, (req, res) => pilatModulesCtrl.findOneByCreatedby(req, res));

router.get(`/api-${sys}/pilat-modules/findOneByUpdatedby/:updatedby`, (req, res) => pilatModulesCtrl.findOneByUpdatedby(req, res));

router.get(`/api-${sys}/pilat-modules/findOneByModParentId/:modParentId`, (req, res) => pilatModulesCtrl.findOneByModParentId(req, res));

router.get(`/api-${sys}/pilat-modules/findOneByDueat/:dueat`, (req, res) => pilatModulesCtrl.findOneByDueat(req, res));

router.get(`/api-${sys}/pilat-modules/findOneByCreatedat/:createdat`, (req, res) => pilatModulesCtrl.findOneByCreatedat(req, res));

router.get(`/api-${sys}/pilat-modules/findOneByUpdatedat/:updatedat`, (req, res) => pilatModulesCtrl.findOneByUpdatedat(req, res));



router.post(`/api-${sys}/pilat-modules/updatePilatModuleByUid`, (req, res) => pilatModulesCtrl.updatePilatModuleByUid(req, res));

router.post(`/api-${sys}/pilat-modules/updatePilatModuleById`, (req, res) => pilatModulesCtrl.updatePilatModuleById(req, res));

router.post(`/api-${sys}/pilat-modules/updatePilatModuleByModCode`, (req, res) => pilatModulesCtrl.updatePilatModuleByModCode(req, res));

router.post(`/api-${sys}/pilat-modules/updatePilatModuleByModDescription`, (req, res) => pilatModulesCtrl.updatePilatModuleByModDescription(req, res));

router.post(`/api-${sys}/pilat-modules/updatePilatModuleByModAbbr`, (req, res) => pilatModulesCtrl.updatePilatModuleByModAbbr(req, res));

router.post(`/api-${sys}/pilat-modules/updatePilatModuleByModIcon`, (req, res) => pilatModulesCtrl.updatePilatModuleByModIcon(req, res));

router.post(`/api-${sys}/pilat-modules/updatePilatModuleByModGroup`, (req, res) => pilatModulesCtrl.updatePilatModuleByModGroup(req, res));

router.post(`/api-${sys}/pilat-modules/updatePilatModuleByModParStatusId`, (req, res) => pilatModulesCtrl.updatePilatModuleByModParStatusId(req, res));

router.post(`/api-${sys}/pilat-modules/updatePilatModuleByCreatedby`, (req, res) => pilatModulesCtrl.updatePilatModuleByCreatedby(req, res));

router.post(`/api-${sys}/pilat-modules/updatePilatModuleByUpdatedby`, (req, res) => pilatModulesCtrl.updatePilatModuleByUpdatedby(req, res));

router.post(`/api-${sys}/pilat-modules/updatePilatModuleByModParentId`, (req, res) => pilatModulesCtrl.updatePilatModuleByModParentId(req, res));

router.post(`/api-${sys}/pilat-modules/updatePilatModuleByDueat`, (req, res) => pilatModulesCtrl.updatePilatModuleByDueat(req, res));

router.post(`/api-${sys}/pilat-modules/updatePilatModuleByCreatedat`, (req, res) => pilatModulesCtrl.updatePilatModuleByCreatedat(req, res));

router.post(`/api-${sys}/pilat-modules/updatePilatModuleByUpdatedat`, (req, res) => pilatModulesCtrl.updatePilatModuleByUpdatedat(req, res));



router.get(`/api-${sys}/pilat-modules/findPilatParamsModParStatusWithParOrder`, (req, res) => pilatModulesCtrl.findPilatParamsModParStatusWithParOrder(req, res));

router.get(`/api-${sys}/pilat-modules/findPilatModulesModParentWithModCode`, (req, res) => pilatModulesCtrl.findPilatModulesModParentWithModCode(req, res));



router.get(`/api-${sys}/pilat-modules/`, (req, res) => pilatModulesCtrl.getAllPilatModules(req, res));
router.post(`/api-${sys}/pilat-modules/`, (req, res) => pilatModulesCtrl.addPilatModule(req, res));
router.get(`/api-${sys}/pilat-modules/:Id`, (req, res) => pilatModulesCtrl.getAPilatModule(req, res));
router.put(`/api-${sys}/pilat-modules/:Id`, (req, res) => pilatModulesCtrl.updatePilatModule(req, res));
router.delete(`/api-${sys}/pilat-modules/:Id`, (req, res) => pilatModulesCtrl.deletePilatModule(req, res));

//</es-section>
module.exports = router;
