/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:44 GMT-0400 (Bolivia Time)
 * Time: 4:43:44
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:44 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:44
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const pilatDictionariesCtrl = require("../controllers/pilat_dictionaries.controller");
//</es-section>
//<es-section>

router.get(`/api-${sys}/pilat-dictionaries/findPilatParamsDicParStatusWithParOrder`, (req, res) => pilatDictionariesCtrl.findPilatParamsDicParStatusWithParOrder(req, res));
router.get(`/api-${sys}/pilat-dictionaries/filterPilatDictionariesByDicParStatus/:dicParStatusId/`, (req, res) => pilatDictionariesCtrl.filterPilatDictionariesByDicParStatus(req, res));



router.get(`/api-${sys}/pilat-dictionaries/findOneByUid/:Id`, (req, res) => pilatDictionariesCtrl.findOneByUid(req, res));

router.get(`/api-${sys}/pilat-dictionaries/findOneById/:id`, (req, res) => pilatDictionariesCtrl.findOneById(req, res));

router.get(`/api-${sys}/pilat-dictionaries/findOneByDicCode/:dicCode`, (req, res) => pilatDictionariesCtrl.findOneByDicCode(req, res));

router.get(`/api-${sys}/pilat-dictionaries/findOneByDicDescription/:dicDescription`, (req, res) => pilatDictionariesCtrl.findOneByDicDescription(req, res));

router.get(`/api-${sys}/pilat-dictionaries/findOneByDicGroup/:dicGroup`, (req, res) => pilatDictionariesCtrl.findOneByDicGroup(req, res));

router.get(`/api-${sys}/pilat-dictionaries/findOneByDicParStatusId/:dicParStatusId`, (req, res) => pilatDictionariesCtrl.findOneByDicParStatusId(req, res));

router.get(`/api-${sys}/pilat-dictionaries/findOneByCreatedby/:createdby`, (req, res) => pilatDictionariesCtrl.findOneByCreatedby(req, res));

router.get(`/api-${sys}/pilat-dictionaries/findOneByUpdatedby/:updatedby`, (req, res) => pilatDictionariesCtrl.findOneByUpdatedby(req, res));

router.get(`/api-${sys}/pilat-dictionaries/findOneByDueat/:dueat`, (req, res) => pilatDictionariesCtrl.findOneByDueat(req, res));

router.get(`/api-${sys}/pilat-dictionaries/findOneByCreatedat/:createdat`, (req, res) => pilatDictionariesCtrl.findOneByCreatedat(req, res));

router.get(`/api-${sys}/pilat-dictionaries/findOneByUpdatedat/:updatedat`, (req, res) => pilatDictionariesCtrl.findOneByUpdatedat(req, res));



router.post(`/api-${sys}/pilat-dictionaries/updatePilatDictionaryByUid`, (req, res) => pilatDictionariesCtrl.updatePilatDictionaryByUid(req, res));

router.post(`/api-${sys}/pilat-dictionaries/updatePilatDictionaryById`, (req, res) => pilatDictionariesCtrl.updatePilatDictionaryById(req, res));

router.post(`/api-${sys}/pilat-dictionaries/updatePilatDictionaryByDicCode`, (req, res) => pilatDictionariesCtrl.updatePilatDictionaryByDicCode(req, res));

router.post(`/api-${sys}/pilat-dictionaries/updatePilatDictionaryByDicDescription`, (req, res) => pilatDictionariesCtrl.updatePilatDictionaryByDicDescription(req, res));

router.post(`/api-${sys}/pilat-dictionaries/updatePilatDictionaryByDicGroup`, (req, res) => pilatDictionariesCtrl.updatePilatDictionaryByDicGroup(req, res));

router.post(`/api-${sys}/pilat-dictionaries/updatePilatDictionaryByDicParStatusId`, (req, res) => pilatDictionariesCtrl.updatePilatDictionaryByDicParStatusId(req, res));

router.post(`/api-${sys}/pilat-dictionaries/updatePilatDictionaryByCreatedby`, (req, res) => pilatDictionariesCtrl.updatePilatDictionaryByCreatedby(req, res));

router.post(`/api-${sys}/pilat-dictionaries/updatePilatDictionaryByUpdatedby`, (req, res) => pilatDictionariesCtrl.updatePilatDictionaryByUpdatedby(req, res));

router.post(`/api-${sys}/pilat-dictionaries/updatePilatDictionaryByDueat`, (req, res) => pilatDictionariesCtrl.updatePilatDictionaryByDueat(req, res));

router.post(`/api-${sys}/pilat-dictionaries/updatePilatDictionaryByCreatedat`, (req, res) => pilatDictionariesCtrl.updatePilatDictionaryByCreatedat(req, res));

router.post(`/api-${sys}/pilat-dictionaries/updatePilatDictionaryByUpdatedat`, (req, res) => pilatDictionariesCtrl.updatePilatDictionaryByUpdatedat(req, res));



router.get(`/api-${sys}/pilat-dictionaries/findPilatParamsDicParStatusWithParOrder`, (req, res) => pilatDictionariesCtrl.findPilatParamsDicParStatusWithParOrder(req, res));



router.get(`/api-${sys}/pilat-dictionaries/`, (req, res) => pilatDictionariesCtrl.getAllPilatDictionaries(req, res));
router.post(`/api-${sys}/pilat-dictionaries/`, (req, res) => pilatDictionariesCtrl.addPilatDictionary(req, res));
router.get(`/api-${sys}/pilat-dictionaries/:Id`, (req, res) => pilatDictionariesCtrl.getAPilatDictionary(req, res));
router.put(`/api-${sys}/pilat-dictionaries/:Id`, (req, res) => pilatDictionariesCtrl.updatePilatDictionary(req, res));
router.delete(`/api-${sys}/pilat-dictionaries/:Id`, (req, res) => pilatDictionariesCtrl.deletePilatDictionary(req, res));

//</es-section>
module.exports = router;
