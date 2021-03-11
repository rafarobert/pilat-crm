/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:26 GMT-0400 (Bolivia Time)
 * Time: 14:57:26
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:26 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:26
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const pilatMailsCtrl = require("../controllers/pilat_mails.controller");
//</es-section>
//<es-section>

router.get(`/api-${sys}/pilat-mails/findPilatParamsMaiParStatusWithParOrder`, (req, res) => pilatMailsCtrl.findPilatParamsMaiParStatusWithParOrder(req, res));
router.get(`/api-${sys}/pilat-mails/filterPilatMailsByMaiParStatus/:maiParStatusId/`, (req, res) => pilatMailsCtrl.filterPilatMailsByMaiParStatus(req, res));



router.get(`/api-${sys}/pilat-mails/findOneByUid/:Id`, (req, res) => pilatMailsCtrl.findOneByUid(req, res));

router.get(`/api-${sys}/pilat-mails/findOneById/:id`, (req, res) => pilatMailsCtrl.findOneById(req, res));

router.get(`/api-${sys}/pilat-mails/findOneByMaiPort/:maiPort`, (req, res) => pilatMailsCtrl.findOneByMaiPort(req, res));

router.get(`/api-${sys}/pilat-mails/findOneByMaiDescription/:maiDescription`, (req, res) => pilatMailsCtrl.findOneByMaiDescription(req, res));

router.get(`/api-${sys}/pilat-mails/findOneByMaiUserAccount/:maiUserAccount`, (req, res) => pilatMailsCtrl.findOneByMaiUserAccount(req, res));

router.get(`/api-${sys}/pilat-mails/findOneByMaiUserPassword/:maiUserPassword`, (req, res) => pilatMailsCtrl.findOneByMaiUserPassword(req, res));

router.get(`/api-${sys}/pilat-mails/findOneByMaiHost/:maiHost`, (req, res) => pilatMailsCtrl.findOneByMaiHost(req, res));

router.get(`/api-${sys}/pilat-mails/findOneByMaiProtocol/:maiProtocol`, (req, res) => pilatMailsCtrl.findOneByMaiProtocol(req, res));

router.get(`/api-${sys}/pilat-mails/findOneByMaiBusId/:maiBusId`, (req, res) => pilatMailsCtrl.findOneByMaiBusId(req, res));

router.get(`/api-${sys}/pilat-mails/findOneByMaiParStatusId/:maiParStatusId`, (req, res) => pilatMailsCtrl.findOneByMaiParStatusId(req, res));

router.get(`/api-${sys}/pilat-mails/findOneByMaiGroup/:maiGroup`, (req, res) => pilatMailsCtrl.findOneByMaiGroup(req, res));

router.get(`/api-${sys}/pilat-mails/findOneByMaiSubject/:maiSubject`, (req, res) => pilatMailsCtrl.findOneByMaiSubject(req, res));

router.get(`/api-${sys}/pilat-mails/findOneByMaiTo/:maiTo`, (req, res) => pilatMailsCtrl.findOneByMaiTo(req, res));

router.get(`/api-${sys}/pilat-mails/findOneByUpdatedby/:updatedby`, (req, res) => pilatMailsCtrl.findOneByUpdatedby(req, res));

router.get(`/api-${sys}/pilat-mails/findOneByCreatedby/:createdby`, (req, res) => pilatMailsCtrl.findOneByCreatedby(req, res));

router.get(`/api-${sys}/pilat-mails/findOneByMaiBcc/:maiBcc`, (req, res) => pilatMailsCtrl.findOneByMaiBcc(req, res));

router.get(`/api-${sys}/pilat-mails/findOneByMaiCc/:maiCc`, (req, res) => pilatMailsCtrl.findOneByMaiCc(req, res));

router.get(`/api-${sys}/pilat-mails/findOneByMaiText/:maiText`, (req, res) => pilatMailsCtrl.findOneByMaiText(req, res));

router.get(`/api-${sys}/pilat-mails/findOneByMaiHtml/:maiHtml`, (req, res) => pilatMailsCtrl.findOneByMaiHtml(req, res));

router.get(`/api-${sys}/pilat-mails/findOneByDueat/:dueat`, (req, res) => pilatMailsCtrl.findOneByDueat(req, res));

router.get(`/api-${sys}/pilat-mails/findOneByCreatedat/:createdat`, (req, res) => pilatMailsCtrl.findOneByCreatedat(req, res));

router.get(`/api-${sys}/pilat-mails/findOneByUpdatedat/:updatedat`, (req, res) => pilatMailsCtrl.findOneByUpdatedat(req, res));



router.post(`/api-${sys}/pilat-mails/updatePilatMailByUid`, (req, res) => pilatMailsCtrl.updatePilatMailByUid(req, res));

router.post(`/api-${sys}/pilat-mails/updatePilatMailById`, (req, res) => pilatMailsCtrl.updatePilatMailById(req, res));

router.post(`/api-${sys}/pilat-mails/updatePilatMailByMaiPort`, (req, res) => pilatMailsCtrl.updatePilatMailByMaiPort(req, res));

router.post(`/api-${sys}/pilat-mails/updatePilatMailByMaiDescription`, (req, res) => pilatMailsCtrl.updatePilatMailByMaiDescription(req, res));

router.post(`/api-${sys}/pilat-mails/updatePilatMailByMaiUserAccount`, (req, res) => pilatMailsCtrl.updatePilatMailByMaiUserAccount(req, res));

router.post(`/api-${sys}/pilat-mails/updatePilatMailByMaiUserPassword`, (req, res) => pilatMailsCtrl.updatePilatMailByMaiUserPassword(req, res));

router.post(`/api-${sys}/pilat-mails/updatePilatMailByMaiHost`, (req, res) => pilatMailsCtrl.updatePilatMailByMaiHost(req, res));

router.post(`/api-${sys}/pilat-mails/updatePilatMailByMaiProtocol`, (req, res) => pilatMailsCtrl.updatePilatMailByMaiProtocol(req, res));

router.post(`/api-${sys}/pilat-mails/updatePilatMailByMaiBusId`, (req, res) => pilatMailsCtrl.updatePilatMailByMaiBusId(req, res));

router.post(`/api-${sys}/pilat-mails/updatePilatMailByMaiParStatusId`, (req, res) => pilatMailsCtrl.updatePilatMailByMaiParStatusId(req, res));

router.post(`/api-${sys}/pilat-mails/updatePilatMailByMaiGroup`, (req, res) => pilatMailsCtrl.updatePilatMailByMaiGroup(req, res));

router.post(`/api-${sys}/pilat-mails/updatePilatMailByMaiSubject`, (req, res) => pilatMailsCtrl.updatePilatMailByMaiSubject(req, res));

router.post(`/api-${sys}/pilat-mails/updatePilatMailByMaiTo`, (req, res) => pilatMailsCtrl.updatePilatMailByMaiTo(req, res));

router.post(`/api-${sys}/pilat-mails/updatePilatMailByUpdatedby`, (req, res) => pilatMailsCtrl.updatePilatMailByUpdatedby(req, res));

router.post(`/api-${sys}/pilat-mails/updatePilatMailByCreatedby`, (req, res) => pilatMailsCtrl.updatePilatMailByCreatedby(req, res));

router.post(`/api-${sys}/pilat-mails/updatePilatMailByMaiBcc`, (req, res) => pilatMailsCtrl.updatePilatMailByMaiBcc(req, res));

router.post(`/api-${sys}/pilat-mails/updatePilatMailByMaiCc`, (req, res) => pilatMailsCtrl.updatePilatMailByMaiCc(req, res));

router.post(`/api-${sys}/pilat-mails/updatePilatMailByMaiText`, (req, res) => pilatMailsCtrl.updatePilatMailByMaiText(req, res));

router.post(`/api-${sys}/pilat-mails/updatePilatMailByMaiHtml`, (req, res) => pilatMailsCtrl.updatePilatMailByMaiHtml(req, res));

router.post(`/api-${sys}/pilat-mails/updatePilatMailByDueat`, (req, res) => pilatMailsCtrl.updatePilatMailByDueat(req, res));

router.post(`/api-${sys}/pilat-mails/updatePilatMailByCreatedat`, (req, res) => pilatMailsCtrl.updatePilatMailByCreatedat(req, res));

router.post(`/api-${sys}/pilat-mails/updatePilatMailByUpdatedat`, (req, res) => pilatMailsCtrl.updatePilatMailByUpdatedat(req, res));



router.get(`/api-${sys}/pilat-mails/findPilatParamsMaiParStatusWithParOrder`, (req, res) => pilatMailsCtrl.findPilatParamsMaiParStatusWithParOrder(req, res));



router.get(`/api-${sys}/pilat-mails/`, (req, res) => pilatMailsCtrl.getAllPilatMails(req, res));
router.post(`/api-${sys}/pilat-mails/`, (req, res) => pilatMailsCtrl.addPilatMail(req, res));
router.get(`/api-${sys}/pilat-mails/:Id`, (req, res) => pilatMailsCtrl.getAPilatMail(req, res));
router.put(`/api-${sys}/pilat-mails/:Id`, (req, res) => pilatMailsCtrl.updatePilatMail(req, res));
router.delete(`/api-${sys}/pilat-mails/:Id`, (req, res) => pilatMailsCtrl.deletePilatMail(req, res));

//</es-section>
module.exports = router;
