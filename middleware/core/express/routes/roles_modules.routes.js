/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:44:04 GMT-0400 (Bolivia Time)
 * Time: 4:44:4
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:44:04 GMT-0400 (Bolivia Time)
 * Last time updated: 4:44:4
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const rolesModulesCtrl = require("../controllers/roles_modules.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/roles-modules/findOneById/:id`, (req, res) => rolesModulesCtrl.findOneById(req, res));

router.get(`/api-${sys}/roles-modules/findOneByAllow/:allow`, (req, res) => rolesModulesCtrl.findOneByAllow(req, res));

router.get(`/api-${sys}/roles-modules/findOneByDeleted/:deleted`, (req, res) => rolesModulesCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/roles-modules/findOneByRoleId/:roleId`, (req, res) => rolesModulesCtrl.findOneByRoleId(req, res));

router.get(`/api-${sys}/roles-modules/findOneByModuleId/:moduleId`, (req, res) => rolesModulesCtrl.findOneByModuleId(req, res));

router.get(`/api-${sys}/roles-modules/findOneByDateModified/:dateModified`, (req, res) => rolesModulesCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/roles-modules/updateRoleModuleById`, (req, res) => rolesModulesCtrl.updateRoleModuleById(req, res));

router.post(`/api-${sys}/roles-modules/updateRoleModuleByAllow`, (req, res) => rolesModulesCtrl.updateRoleModuleByAllow(req, res));

router.post(`/api-${sys}/roles-modules/updateRoleModuleByDeleted`, (req, res) => rolesModulesCtrl.updateRoleModuleByDeleted(req, res));

router.post(`/api-${sys}/roles-modules/updateRoleModuleByRoleId`, (req, res) => rolesModulesCtrl.updateRoleModuleByRoleId(req, res));

router.post(`/api-${sys}/roles-modules/updateRoleModuleByModuleId`, (req, res) => rolesModulesCtrl.updateRoleModuleByModuleId(req, res));

router.post(`/api-${sys}/roles-modules/updateRoleModuleByDateModified`, (req, res) => rolesModulesCtrl.updateRoleModuleByDateModified(req, res));





router.get(`/api-${sys}/roles-modules/`, (req, res) => rolesModulesCtrl.getAllRolesModules(req, res));
router.post(`/api-${sys}/roles-modules/`, (req, res) => rolesModulesCtrl.addRoleModule(req, res));
router.get(`/api-${sys}/roles-modules/:id`, (req, res) => rolesModulesCtrl.getARoleModule(req, res));
router.put(`/api-${sys}/roles-modules/:id`, (req, res) => rolesModulesCtrl.updateRoleModule(req, res));
router.delete(`/api-${sys}/roles-modules/:id`, (req, res) => rolesModulesCtrl.deleteRoleModule(req, res));

//</es-section>
module.exports = router;
