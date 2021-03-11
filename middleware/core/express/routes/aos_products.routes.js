/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:15 GMT-0400 (Bolivia Time)
 * Time: 14:56:15
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:15 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:15
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aosProductsCtrl = require("../controllers/aos_products.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aos-products/findOneById/:id`, (req, res) => aosProductsCtrl.findOneById(req, res));

router.get(`/api-${sys}/aos-products/findOneByDeleted/:deleted`, (req, res) => aosProductsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/aos-products/findOneByCost/:cost`, (req, res) => aosProductsCtrl.findOneByCost(req, res));

router.get(`/api-${sys}/aos-products/findOneByCostUsdollar/:costUsdollar`, (req, res) => aosProductsCtrl.findOneByCostUsdollar(req, res));

router.get(`/api-${sys}/aos-products/findOneByPrice/:price`, (req, res) => aosProductsCtrl.findOneByPrice(req, res));

router.get(`/api-${sys}/aos-products/findOneByPriceUsdollar/:priceUsdollar`, (req, res) => aosProductsCtrl.findOneByPriceUsdollar(req, res));

router.get(`/api-${sys}/aos-products/findOneByName/:name`, (req, res) => aosProductsCtrl.findOneByName(req, res));

router.get(`/api-${sys}/aos-products/findOneByMaincode/:maincode`, (req, res) => aosProductsCtrl.findOneByMaincode(req, res));

router.get(`/api-${sys}/aos-products/findOneByPartNumber/:partNumber`, (req, res) => aosProductsCtrl.findOneByPartNumber(req, res));

router.get(`/api-${sys}/aos-products/findOneByCategory/:category`, (req, res) => aosProductsCtrl.findOneByCategory(req, res));

router.get(`/api-${sys}/aos-products/findOneByType/:type`, (req, res) => aosProductsCtrl.findOneByType(req, res));

router.get(`/api-${sys}/aos-products/findOneByUrl/:url`, (req, res) => aosProductsCtrl.findOneByUrl(req, res));

router.get(`/api-${sys}/aos-products/findOneByProductImage/:productImage`, (req, res) => aosProductsCtrl.findOneByProductImage(req, res));

router.get(`/api-${sys}/aos-products/findOneByDescription/:description`, (req, res) => aosProductsCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/aos-products/findOneByDateEntered/:dateEntered`, (req, res) => aosProductsCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/aos-products/findOneByDateModified/:dateModified`, (req, res) => aosProductsCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/aos-products/findOneByModifiedUserId/:modifiedUserId`, (req, res) => aosProductsCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/aos-products/findOneByCreatedBy/:createdBy`, (req, res) => aosProductsCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/aos-products/findOneByAssignedUserId/:assignedUserId`, (req, res) => aosProductsCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/aos-products/findOneByCurrencyId/:currencyId`, (req, res) => aosProductsCtrl.findOneByCurrencyId(req, res));

router.get(`/api-${sys}/aos-products/findOneByContactId/:contactId`, (req, res) => aosProductsCtrl.findOneByContactId(req, res));

router.get(`/api-${sys}/aos-products/findOneByAosProductCategoryId/:aosProductCategoryId`, (req, res) => aosProductsCtrl.findOneByAosProductCategoryId(req, res));



router.post(`/api-${sys}/aos-products/updateAoProductById`, (req, res) => aosProductsCtrl.updateAoProductById(req, res));

router.post(`/api-${sys}/aos-products/updateAoProductByDeleted`, (req, res) => aosProductsCtrl.updateAoProductByDeleted(req, res));

router.post(`/api-${sys}/aos-products/updateAoProductByCost`, (req, res) => aosProductsCtrl.updateAoProductByCost(req, res));

router.post(`/api-${sys}/aos-products/updateAoProductByCostUsdollar`, (req, res) => aosProductsCtrl.updateAoProductByCostUsdollar(req, res));

router.post(`/api-${sys}/aos-products/updateAoProductByPrice`, (req, res) => aosProductsCtrl.updateAoProductByPrice(req, res));

router.post(`/api-${sys}/aos-products/updateAoProductByPriceUsdollar`, (req, res) => aosProductsCtrl.updateAoProductByPriceUsdollar(req, res));

router.post(`/api-${sys}/aos-products/updateAoProductByName`, (req, res) => aosProductsCtrl.updateAoProductByName(req, res));

router.post(`/api-${sys}/aos-products/updateAoProductByMaincode`, (req, res) => aosProductsCtrl.updateAoProductByMaincode(req, res));

router.post(`/api-${sys}/aos-products/updateAoProductByPartNumber`, (req, res) => aosProductsCtrl.updateAoProductByPartNumber(req, res));

router.post(`/api-${sys}/aos-products/updateAoProductByCategory`, (req, res) => aosProductsCtrl.updateAoProductByCategory(req, res));

router.post(`/api-${sys}/aos-products/updateAoProductByType`, (req, res) => aosProductsCtrl.updateAoProductByType(req, res));

router.post(`/api-${sys}/aos-products/updateAoProductByUrl`, (req, res) => aosProductsCtrl.updateAoProductByUrl(req, res));

router.post(`/api-${sys}/aos-products/updateAoProductByProductImage`, (req, res) => aosProductsCtrl.updateAoProductByProductImage(req, res));

router.post(`/api-${sys}/aos-products/updateAoProductByDescription`, (req, res) => aosProductsCtrl.updateAoProductByDescription(req, res));

router.post(`/api-${sys}/aos-products/updateAoProductByDateEntered`, (req, res) => aosProductsCtrl.updateAoProductByDateEntered(req, res));

router.post(`/api-${sys}/aos-products/updateAoProductByDateModified`, (req, res) => aosProductsCtrl.updateAoProductByDateModified(req, res));

router.post(`/api-${sys}/aos-products/updateAoProductByModifiedUserId`, (req, res) => aosProductsCtrl.updateAoProductByModifiedUserId(req, res));

router.post(`/api-${sys}/aos-products/updateAoProductByCreatedBy`, (req, res) => aosProductsCtrl.updateAoProductByCreatedBy(req, res));

router.post(`/api-${sys}/aos-products/updateAoProductByAssignedUserId`, (req, res) => aosProductsCtrl.updateAoProductByAssignedUserId(req, res));

router.post(`/api-${sys}/aos-products/updateAoProductByCurrencyId`, (req, res) => aosProductsCtrl.updateAoProductByCurrencyId(req, res));

router.post(`/api-${sys}/aos-products/updateAoProductByContactId`, (req, res) => aosProductsCtrl.updateAoProductByContactId(req, res));

router.post(`/api-${sys}/aos-products/updateAoProductByAosProductCategoryId`, (req, res) => aosProductsCtrl.updateAoProductByAosProductCategoryId(req, res));





router.get(`/api-${sys}/aos-products/`, (req, res) => aosProductsCtrl.getAllAosProducts(req, res));
router.post(`/api-${sys}/aos-products/`, (req, res) => aosProductsCtrl.addAoProduct(req, res));
router.get(`/api-${sys}/aos-products/:id`, (req, res) => aosProductsCtrl.getAAoProduct(req, res));
router.put(`/api-${sys}/aos-products/:id`, (req, res) => aosProductsCtrl.updateAoProduct(req, res));
router.delete(`/api-${sys}/aos-products/:id`, (req, res) => aosProductsCtrl.deleteAoProduct(req, res));

//</es-section>
module.exports = router;
