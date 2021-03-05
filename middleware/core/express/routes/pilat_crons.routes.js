/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:15 GMT-0400 (Bolivia Time)
 * Time: 14:1:15
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:15 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:15
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const pilatCronsCtrl = require("../controllers/pilat_crons.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/pilat-crons/findOneByUid/:Id`, (req, res) => pilatCronsCtrl.findOneByUid(req, res));

router.get(`/api-${sys}/pilat-crons/findOneByCroStatus/:croStatus`, (req, res) => pilatCronsCtrl.findOneByCroStatus(req, res));

router.get(`/api-${sys}/pilat-crons/findOneById/:id`, (req, res) => pilatCronsCtrl.findOneById(req, res));

router.get(`/api-${sys}/pilat-crons/findOneByCroDescription/:croDescription`, (req, res) => pilatCronsCtrl.findOneByCroDescription(req, res));

router.get(`/api-${sys}/pilat-crons/findOneByCroExpression/:croExpression`, (req, res) => pilatCronsCtrl.findOneByCroExpression(req, res));

router.get(`/api-${sys}/pilat-crons/findOneByCroGroup/:croGroup`, (req, res) => pilatCronsCtrl.findOneByCroGroup(req, res));

router.get(`/api-${sys}/pilat-crons/findOneByCroMaiId/:croMaiId`, (req, res) => pilatCronsCtrl.findOneByCroMaiId(req, res));

router.get(`/api-${sys}/pilat-crons/findOneByCroLeadId/:croLeadId`, (req, res) => pilatCronsCtrl.findOneByCroLeadId(req, res));

router.get(`/api-${sys}/pilat-crons/findOneByCreatedby/:createdby`, (req, res) => pilatCronsCtrl.findOneByCreatedby(req, res));

router.get(`/api-${sys}/pilat-crons/findOneByUpdatedby/:updatedby`, (req, res) => pilatCronsCtrl.findOneByUpdatedby(req, res));

router.get(`/api-${sys}/pilat-crons/findOneByDueat/:dueat`, (req, res) => pilatCronsCtrl.findOneByDueat(req, res));

router.get(`/api-${sys}/pilat-crons/findOneByCreatedat/:createdat`, (req, res) => pilatCronsCtrl.findOneByCreatedat(req, res));

router.get(`/api-${sys}/pilat-crons/findOneByUpdatedat/:updatedat`, (req, res) => pilatCronsCtrl.findOneByUpdatedat(req, res));



router.post(`/api-${sys}/pilat-crons/updatePilatCronByUid`, (req, res) => pilatCronsCtrl.updatePilatCronByUid(req, res));

router.post(`/api-${sys}/pilat-crons/updatePilatCronByCroStatus`, (req, res) => pilatCronsCtrl.updatePilatCronByCroStatus(req, res));

router.post(`/api-${sys}/pilat-crons/updatePilatCronById`, (req, res) => pilatCronsCtrl.updatePilatCronById(req, res));

router.post(`/api-${sys}/pilat-crons/updatePilatCronByCroDescription`, (req, res) => pilatCronsCtrl.updatePilatCronByCroDescription(req, res));

router.post(`/api-${sys}/pilat-crons/updatePilatCronByCroExpression`, (req, res) => pilatCronsCtrl.updatePilatCronByCroExpression(req, res));

router.post(`/api-${sys}/pilat-crons/updatePilatCronByCroGroup`, (req, res) => pilatCronsCtrl.updatePilatCronByCroGroup(req, res));

router.post(`/api-${sys}/pilat-crons/updatePilatCronByCroMaiId`, (req, res) => pilatCronsCtrl.updatePilatCronByCroMaiId(req, res));

router.post(`/api-${sys}/pilat-crons/updatePilatCronByCroLeadId`, (req, res) => pilatCronsCtrl.updatePilatCronByCroLeadId(req, res));

router.post(`/api-${sys}/pilat-crons/updatePilatCronByCreatedby`, (req, res) => pilatCronsCtrl.updatePilatCronByCreatedby(req, res));

router.post(`/api-${sys}/pilat-crons/updatePilatCronByUpdatedby`, (req, res) => pilatCronsCtrl.updatePilatCronByUpdatedby(req, res));

router.post(`/api-${sys}/pilat-crons/updatePilatCronByDueat`, (req, res) => pilatCronsCtrl.updatePilatCronByDueat(req, res));

router.post(`/api-${sys}/pilat-crons/updatePilatCronByCreatedat`, (req, res) => pilatCronsCtrl.updatePilatCronByCreatedat(req, res));

router.post(`/api-${sys}/pilat-crons/updatePilatCronByUpdatedat`, (req, res) => pilatCronsCtrl.updatePilatCronByUpdatedat(req, res));





router.get(`/api-${sys}/pilat-crons/`, (req, res) => pilatCronsCtrl.getAllPilatCrons(req, res));
router.post(`/api-${sys}/pilat-crons/`, (req, res) => pilatCronsCtrl.addPilatCron(req, res));
router.get(`/api-${sys}/pilat-crons/:Id`, (req, res) => pilatCronsCtrl.getAPilatCron(req, res));
router.put(`/api-${sys}/pilat-crons/:Id`, (req, res) => pilatCronsCtrl.updatePilatCron(req, res));
router.delete(`/api-${sys}/pilat-crons/:Id`, (req, res) => pilatCronsCtrl.deletePilatCron(req, res));

//</es-section>
module.exports = router;
