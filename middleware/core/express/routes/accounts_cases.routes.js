/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:21:50 GMT-0400 (Bolivia Time)
 * Time: 0:21:50
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:21:50 GMT-0400 (Bolivia Time)
 * Last time updated: 0:21:50
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const accountsCasesCtrl = require("../controllers/accounts_cases.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/accounts-cases/findOneById/:id`, (req, res) => accountsCasesCtrl.findOneById(req, res));

router.get(`/api-${sys}/accounts-cases/findOneByDeleted/:deleted`, (req, res) => accountsCasesCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/accounts-cases/findOneByAccountId/:accountId`, (req, res) => accountsCasesCtrl.findOneByAccountId(req, res));

router.get(`/api-${sys}/accounts-cases/findOneByCaseId/:caseId`, (req, res) => accountsCasesCtrl.findOneByCaseId(req, res));

router.get(`/api-${sys}/accounts-cases/findOneByDateModified/:dateModified`, (req, res) => accountsCasesCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/accounts-cases/updateAccountCaseById`, (req, res) => accountsCasesCtrl.updateAccountCaseById(req, res));

router.post(`/api-${sys}/accounts-cases/updateAccountCaseByDeleted`, (req, res) => accountsCasesCtrl.updateAccountCaseByDeleted(req, res));

router.post(`/api-${sys}/accounts-cases/updateAccountCaseByAccountId`, (req, res) => accountsCasesCtrl.updateAccountCaseByAccountId(req, res));

router.post(`/api-${sys}/accounts-cases/updateAccountCaseByCaseId`, (req, res) => accountsCasesCtrl.updateAccountCaseByCaseId(req, res));

router.post(`/api-${sys}/accounts-cases/updateAccountCaseByDateModified`, (req, res) => accountsCasesCtrl.updateAccountCaseByDateModified(req, res));





router.get(`/api-${sys}/accounts-cases/`, (req, res) => accountsCasesCtrl.getAllAccountsCases(req, res));
router.post(`/api-${sys}/accounts-cases/`, (req, res) => accountsCasesCtrl.addAccountCase(req, res));
router.get(`/api-${sys}/accounts-cases/:id`, (req, res) => accountsCasesCtrl.getAAccountCase(req, res));
router.put(`/api-${sys}/accounts-cases/:id`, (req, res) => accountsCasesCtrl.updateAccountCase(req, res));
router.delete(`/api-${sys}/accounts-cases/:id`, (req, res) => accountsCasesCtrl.deleteAccountCase(req, res));

//</es-section>
module.exports = router;
