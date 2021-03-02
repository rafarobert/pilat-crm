/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:25 GMT-0400 (Bolivia Time)
 * Time: 14:1:25
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:25 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:25
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const relationshipsCtrl = require("../controllers/relationships.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/relationships/findOneById/:id`, (req, res) => relationshipsCtrl.findOneById(req, res));

router.get(`/api-${sys}/relationships/findOneByReverse/:reverse`, (req, res) => relationshipsCtrl.findOneByReverse(req, res));

router.get(`/api-${sys}/relationships/findOneByDeleted/:deleted`, (req, res) => relationshipsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/relationships/findOneByRelationshipName/:relationshipName`, (req, res) => relationshipsCtrl.findOneByRelationshipName(req, res));

router.get(`/api-${sys}/relationships/findOneByLhsModule/:lhsModule`, (req, res) => relationshipsCtrl.findOneByLhsModule(req, res));

router.get(`/api-${sys}/relationships/findOneByLhsTable/:lhsTable`, (req, res) => relationshipsCtrl.findOneByLhsTable(req, res));

router.get(`/api-${sys}/relationships/findOneByLhsKey/:lhsKey`, (req, res) => relationshipsCtrl.findOneByLhsKey(req, res));

router.get(`/api-${sys}/relationships/findOneByRhsModule/:rhsModule`, (req, res) => relationshipsCtrl.findOneByRhsModule(req, res));

router.get(`/api-${sys}/relationships/findOneByRhsTable/:rhsTable`, (req, res) => relationshipsCtrl.findOneByRhsTable(req, res));

router.get(`/api-${sys}/relationships/findOneByRhsKey/:rhsKey`, (req, res) => relationshipsCtrl.findOneByRhsKey(req, res));

router.get(`/api-${sys}/relationships/findOneByJoinTable/:joinTable`, (req, res) => relationshipsCtrl.findOneByJoinTable(req, res));

router.get(`/api-${sys}/relationships/findOneByJoinKeyLhs/:joinKeyLhs`, (req, res) => relationshipsCtrl.findOneByJoinKeyLhs(req, res));

router.get(`/api-${sys}/relationships/findOneByJoinKeyRhs/:joinKeyRhs`, (req, res) => relationshipsCtrl.findOneByJoinKeyRhs(req, res));

router.get(`/api-${sys}/relationships/findOneByRelationshipType/:relationshipType`, (req, res) => relationshipsCtrl.findOneByRelationshipType(req, res));

router.get(`/api-${sys}/relationships/findOneByRelationshipRoleColumn/:relationshipRoleColumn`, (req, res) => relationshipsCtrl.findOneByRelationshipRoleColumn(req, res));

router.get(`/api-${sys}/relationships/findOneByRelationshipRoleColumnValue/:relationshipRoleColumnValue`, (req, res) => relationshipsCtrl.findOneByRelationshipRoleColumnValue(req, res));



router.post(`/api-${sys}/relationships/updateRelationshipById`, (req, res) => relationshipsCtrl.updateRelationshipById(req, res));

router.post(`/api-${sys}/relationships/updateRelationshipByReverse`, (req, res) => relationshipsCtrl.updateRelationshipByReverse(req, res));

router.post(`/api-${sys}/relationships/updateRelationshipByDeleted`, (req, res) => relationshipsCtrl.updateRelationshipByDeleted(req, res));

router.post(`/api-${sys}/relationships/updateRelationshipByRelationshipName`, (req, res) => relationshipsCtrl.updateRelationshipByRelationshipName(req, res));

router.post(`/api-${sys}/relationships/updateRelationshipByLhsModule`, (req, res) => relationshipsCtrl.updateRelationshipByLhsModule(req, res));

router.post(`/api-${sys}/relationships/updateRelationshipByLhsTable`, (req, res) => relationshipsCtrl.updateRelationshipByLhsTable(req, res));

router.post(`/api-${sys}/relationships/updateRelationshipByLhsKey`, (req, res) => relationshipsCtrl.updateRelationshipByLhsKey(req, res));

router.post(`/api-${sys}/relationships/updateRelationshipByRhsModule`, (req, res) => relationshipsCtrl.updateRelationshipByRhsModule(req, res));

router.post(`/api-${sys}/relationships/updateRelationshipByRhsTable`, (req, res) => relationshipsCtrl.updateRelationshipByRhsTable(req, res));

router.post(`/api-${sys}/relationships/updateRelationshipByRhsKey`, (req, res) => relationshipsCtrl.updateRelationshipByRhsKey(req, res));

router.post(`/api-${sys}/relationships/updateRelationshipByJoinTable`, (req, res) => relationshipsCtrl.updateRelationshipByJoinTable(req, res));

router.post(`/api-${sys}/relationships/updateRelationshipByJoinKeyLhs`, (req, res) => relationshipsCtrl.updateRelationshipByJoinKeyLhs(req, res));

router.post(`/api-${sys}/relationships/updateRelationshipByJoinKeyRhs`, (req, res) => relationshipsCtrl.updateRelationshipByJoinKeyRhs(req, res));

router.post(`/api-${sys}/relationships/updateRelationshipByRelationshipType`, (req, res) => relationshipsCtrl.updateRelationshipByRelationshipType(req, res));

router.post(`/api-${sys}/relationships/updateRelationshipByRelationshipRoleColumn`, (req, res) => relationshipsCtrl.updateRelationshipByRelationshipRoleColumn(req, res));

router.post(`/api-${sys}/relationships/updateRelationshipByRelationshipRoleColumnValue`, (req, res) => relationshipsCtrl.updateRelationshipByRelationshipRoleColumnValue(req, res));





router.get(`/api-${sys}/relationships/`, (req, res) => relationshipsCtrl.getAllRelationships(req, res));
router.post(`/api-${sys}/relationships/`, (req, res) => relationshipsCtrl.addRelationship(req, res));
router.get(`/api-${sys}/relationships/:id`, (req, res) => relationshipsCtrl.getARelationship(req, res));
router.put(`/api-${sys}/relationships/:id`, (req, res) => relationshipsCtrl.updateRelationship(req, res));
router.delete(`/api-${sys}/relationships/:id`, (req, res) => relationshipsCtrl.deleteRelationship(req, res));

//</es-section>
module.exports = router;
