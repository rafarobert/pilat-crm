/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:48 GMT-0400 (Bolivia Time)
 * Time: 15:36:48
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:48 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:48
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const projectsProductsCtrl = require("../controllers/projects_products.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/projects-products/findOneById/:id`, (req, res) => projectsProductsCtrl.findOneById(req, res));

router.get(`/api-${sys}/projects-products/findOneByDeleted/:deleted`, (req, res) => projectsProductsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/projects-products/findOneByProductId/:productId`, (req, res) => projectsProductsCtrl.findOneByProductId(req, res));

router.get(`/api-${sys}/projects-products/findOneByProjectId/:projectId`, (req, res) => projectsProductsCtrl.findOneByProjectId(req, res));

router.get(`/api-${sys}/projects-products/findOneByDateModified/:dateModified`, (req, res) => projectsProductsCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/projects-products/updateProjectProductById`, (req, res) => projectsProductsCtrl.updateProjectProductById(req, res));

router.post(`/api-${sys}/projects-products/updateProjectProductByDeleted`, (req, res) => projectsProductsCtrl.updateProjectProductByDeleted(req, res));

router.post(`/api-${sys}/projects-products/updateProjectProductByProductId`, (req, res) => projectsProductsCtrl.updateProjectProductByProductId(req, res));

router.post(`/api-${sys}/projects-products/updateProjectProductByProjectId`, (req, res) => projectsProductsCtrl.updateProjectProductByProjectId(req, res));

router.post(`/api-${sys}/projects-products/updateProjectProductByDateModified`, (req, res) => projectsProductsCtrl.updateProjectProductByDateModified(req, res));





router.get(`/api-${sys}/projects-products/`, (req, res) => projectsProductsCtrl.getAllProjectsProducts(req, res));
router.post(`/api-${sys}/projects-products/`, (req, res) => projectsProductsCtrl.addProjectProduct(req, res));
router.get(`/api-${sys}/projects-products/:id`, (req, res) => projectsProductsCtrl.getAProjectProduct(req, res));
router.put(`/api-${sys}/projects-products/:id`, (req, res) => projectsProductsCtrl.updateProjectProduct(req, res));
router.delete(`/api-${sys}/projects-products/:id`, (req, res) => projectsProductsCtrl.deleteProjectProduct(req, res));

//</es-section>
module.exports = router;
