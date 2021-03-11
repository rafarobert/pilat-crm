/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:28 GMT-0400 (Bolivia Time)
 * Time: 14:57:28
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:28 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:28
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const pilatParamsCtrl = require("../controllers/pilat_params.controller");
//</es-section>
//<es-section>

router.get(`/api-${sys}/pilat-params/findPilatDictionariesParDictionaryWithDicCode`, (req, res) => pilatParamsCtrl.findPilatDictionariesParDictionaryWithDicCode(req, res));
router.get(`/api-${sys}/pilat-params/filterPilatParamsByParDictionary/:parDictionaryId/`, (req, res) => pilatParamsCtrl.filterPilatParamsByParDictionary(req, res));

router.get(`/api-${sys}/pilat-params/findPilatParamsParStatusWithParOrder`, (req, res) => pilatParamsCtrl.findPilatParamsParStatusWithParOrder(req, res));
router.get(`/api-${sys}/pilat-params/filterPilatParamsByParStatus/:parStatusId/`, (req, res) => pilatParamsCtrl.filterPilatParamsByParStatus(req, res));

router.get(`/api-${sys}/pilat-params/findPilatParamsParParentWithParOrder`, (req, res) => pilatParamsCtrl.findPilatParamsParParentWithParOrder(req, res));
router.get(`/api-${sys}/pilat-params/filterPilatParamsByParParent/:parParentId/`, (req, res) => pilatParamsCtrl.filterPilatParamsByParParent(req, res));



router.get(`/api-${sys}/pilat-params/findOneByUid/:Id`, (req, res) => pilatParamsCtrl.findOneByUid(req, res));

router.get(`/api-${sys}/pilat-params/findOneById/:id`, (req, res) => pilatParamsCtrl.findOneById(req, res));

router.get(`/api-${sys}/pilat-params/findOneByParOrder/:parOrder`, (req, res) => pilatParamsCtrl.findOneByParOrder(req, res));

router.get(`/api-${sys}/pilat-params/findOneByParCod/:parCod`, (req, res) => pilatParamsCtrl.findOneByParCod(req, res));

router.get(`/api-${sys}/pilat-params/findOneByParDescription/:parDescription`, (req, res) => pilatParamsCtrl.findOneByParDescription(req, res));

router.get(`/api-${sys}/pilat-params/findOneByParAbbr/:parAbbr`, (req, res) => pilatParamsCtrl.findOneByParAbbr(req, res));

router.get(`/api-${sys}/pilat-params/findOneByParGroup/:parGroup`, (req, res) => pilatParamsCtrl.findOneByParGroup(req, res));

router.get(`/api-${sys}/pilat-params/findOneByCreatedby/:createdby`, (req, res) => pilatParamsCtrl.findOneByCreatedby(req, res));

router.get(`/api-${sys}/pilat-params/findOneByUpdatedby/:updatedby`, (req, res) => pilatParamsCtrl.findOneByUpdatedby(req, res));

router.get(`/api-${sys}/pilat-params/findOneByParDictionaryId/:parDictionaryId`, (req, res) => pilatParamsCtrl.findOneByParDictionaryId(req, res));

router.get(`/api-${sys}/pilat-params/findOneByParStatusId/:parStatusId`, (req, res) => pilatParamsCtrl.findOneByParStatusId(req, res));

router.get(`/api-${sys}/pilat-params/findOneByParParentId/:parParentId`, (req, res) => pilatParamsCtrl.findOneByParParentId(req, res));

router.get(`/api-${sys}/pilat-params/findOneByDuaat/:duaat`, (req, res) => pilatParamsCtrl.findOneByDuaat(req, res));

router.get(`/api-${sys}/pilat-params/findOneByCreatedat/:createdat`, (req, res) => pilatParamsCtrl.findOneByCreatedat(req, res));

router.get(`/api-${sys}/pilat-params/findOneByUpdatedat/:updatedat`, (req, res) => pilatParamsCtrl.findOneByUpdatedat(req, res));



router.post(`/api-${sys}/pilat-params/updatePilatParamByUid`, (req, res) => pilatParamsCtrl.updatePilatParamByUid(req, res));

router.post(`/api-${sys}/pilat-params/updatePilatParamById`, (req, res) => pilatParamsCtrl.updatePilatParamById(req, res));

router.post(`/api-${sys}/pilat-params/updatePilatParamByParOrder`, (req, res) => pilatParamsCtrl.updatePilatParamByParOrder(req, res));

router.post(`/api-${sys}/pilat-params/updatePilatParamByParCod`, (req, res) => pilatParamsCtrl.updatePilatParamByParCod(req, res));

router.post(`/api-${sys}/pilat-params/updatePilatParamByParDescription`, (req, res) => pilatParamsCtrl.updatePilatParamByParDescription(req, res));

router.post(`/api-${sys}/pilat-params/updatePilatParamByParAbbr`, (req, res) => pilatParamsCtrl.updatePilatParamByParAbbr(req, res));

router.post(`/api-${sys}/pilat-params/updatePilatParamByParGroup`, (req, res) => pilatParamsCtrl.updatePilatParamByParGroup(req, res));

router.post(`/api-${sys}/pilat-params/updatePilatParamByCreatedby`, (req, res) => pilatParamsCtrl.updatePilatParamByCreatedby(req, res));

router.post(`/api-${sys}/pilat-params/updatePilatParamByUpdatedby`, (req, res) => pilatParamsCtrl.updatePilatParamByUpdatedby(req, res));

router.post(`/api-${sys}/pilat-params/updatePilatParamByParDictionaryId`, (req, res) => pilatParamsCtrl.updatePilatParamByParDictionaryId(req, res));

router.post(`/api-${sys}/pilat-params/updatePilatParamByParStatusId`, (req, res) => pilatParamsCtrl.updatePilatParamByParStatusId(req, res));

router.post(`/api-${sys}/pilat-params/updatePilatParamByParParentId`, (req, res) => pilatParamsCtrl.updatePilatParamByParParentId(req, res));

router.post(`/api-${sys}/pilat-params/updatePilatParamByDuaat`, (req, res) => pilatParamsCtrl.updatePilatParamByDuaat(req, res));

router.post(`/api-${sys}/pilat-params/updatePilatParamByCreatedat`, (req, res) => pilatParamsCtrl.updatePilatParamByCreatedat(req, res));

router.post(`/api-${sys}/pilat-params/updatePilatParamByUpdatedat`, (req, res) => pilatParamsCtrl.updatePilatParamByUpdatedat(req, res));



router.get(`/api-${sys}/pilat-params/findPilatDictionariesParDictionaryWithDicCode`, (req, res) => pilatParamsCtrl.findPilatDictionariesParDictionaryWithDicCode(req, res));

router.get(`/api-${sys}/pilat-params/findPilatParamsParStatusWithParOrder`, (req, res) => pilatParamsCtrl.findPilatParamsParStatusWithParOrder(req, res));

router.get(`/api-${sys}/pilat-params/findPilatParamsParParentWithParOrder`, (req, res) => pilatParamsCtrl.findPilatParamsParParentWithParOrder(req, res));



router.get(`/api-${sys}/pilat-params/`, (req, res) => pilatParamsCtrl.getAllPilatParams(req, res));
router.post(`/api-${sys}/datatable/pilat-params/`, (req, res) => pilatParamsCtrl.getAllPilatParams(req, res));
router.post(`/api-${sys}/pilat-params/`, (req, res) => pilatParamsCtrl.addPilatParam(req, res));
router.get(`/api-${sys}/pilat-params/:Id`, (req, res) => pilatParamsCtrl.getAPilatParam(req, res));
router.put(`/api-${sys}/pilat-params/:Id`, (req, res) => pilatParamsCtrl.updatePilatParam(req, res));
router.delete(`/api-${sys}/pilat-params/:Id`, (req, res) => pilatParamsCtrl.deletePilatParam(req, res));

//</es-section>
module.exports = router;
