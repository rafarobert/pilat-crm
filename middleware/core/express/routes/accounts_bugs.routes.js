/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:34:57 GMT-0400 (Bolivia Time)
 * Time: 15:34:57
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:34:57 GMT-0400 (Bolivia Time)
 * Last time updated: 15:34:57
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const accountsBugsCtrl = require("../controllers/accounts_bugs.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/accounts-bugs/findOneById/:id`, (req, res) => accountsBugsCtrl.findOneById(req, res));

router.get(`/api-${sys}/accounts-bugs/findOneByDeleted/:deleted`, (req, res) => accountsBugsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/accounts-bugs/findOneByAccountId/:accountId`, (req, res) => accountsBugsCtrl.findOneByAccountId(req, res));

router.get(`/api-${sys}/accounts-bugs/findOneByBugId/:bugId`, (req, res) => accountsBugsCtrl.findOneByBugId(req, res));

router.get(`/api-${sys}/accounts-bugs/findOneByDateModified/:dateModified`, (req, res) => accountsBugsCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/accounts-bugs/updateAccountBugById`, (req, res) => accountsBugsCtrl.updateAccountBugById(req, res));

router.post(`/api-${sys}/accounts-bugs/updateAccountBugByDeleted`, (req, res) => accountsBugsCtrl.updateAccountBugByDeleted(req, res));

router.post(`/api-${sys}/accounts-bugs/updateAccountBugByAccountId`, (req, res) => accountsBugsCtrl.updateAccountBugByAccountId(req, res));

router.post(`/api-${sys}/accounts-bugs/updateAccountBugByBugId`, (req, res) => accountsBugsCtrl.updateAccountBugByBugId(req, res));

router.post(`/api-${sys}/accounts-bugs/updateAccountBugByDateModified`, (req, res) => accountsBugsCtrl.updateAccountBugByDateModified(req, res));





router.get(`/api-${sys}/accounts-bugs/`, (req, res) => accountsBugsCtrl.getAllAccountsBugs(req, res));
router.post(`/api-${sys}/accounts-bugs/`, (req, res) => accountsBugsCtrl.addAccountBug(req, res));
router.get(`/api-${sys}/accounts-bugs/:id`, (req, res) => accountsBugsCtrl.getAAccountBug(req, res));
router.put(`/api-${sys}/accounts-bugs/:id`, (req, res) => accountsBugsCtrl.updateAccountBug(req, res));
router.delete(`/api-${sys}/accounts-bugs/:id`, (req, res) => accountsBugsCtrl.deleteAccountBug(req, res));

//</es-section>
module.exports = router;
