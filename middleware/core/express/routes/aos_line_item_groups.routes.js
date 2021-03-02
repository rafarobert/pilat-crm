/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:18 GMT-0400 (Bolivia Time)
 * Time: 14:0:18
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:18 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:18
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aosLineItemGroupsCtrl = require("../controllers/aos_line_item_groups.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aos-line-item-groups/findOneById/:id`, (req, res) => aosLineItemGroupsCtrl.findOneById(req, res));

router.get(`/api-${sys}/aos-line-item-groups/findOneByDeleted/:deleted`, (req, res) => aosLineItemGroupsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/aos-line-item-groups/findOneByNumber/:number`, (req, res) => aosLineItemGroupsCtrl.findOneByNumber(req, res));

router.get(`/api-${sys}/aos-line-item-groups/findOneByTotalAmt/:totalAmt`, (req, res) => aosLineItemGroupsCtrl.findOneByTotalAmt(req, res));

router.get(`/api-${sys}/aos-line-item-groups/findOneByTotalAmtUsdollar/:totalAmtUsdollar`, (req, res) => aosLineItemGroupsCtrl.findOneByTotalAmtUsdollar(req, res));

router.get(`/api-${sys}/aos-line-item-groups/findOneByDiscountAmount/:discountAmount`, (req, res) => aosLineItemGroupsCtrl.findOneByDiscountAmount(req, res));

router.get(`/api-${sys}/aos-line-item-groups/findOneByDiscountAmountUsdollar/:discountAmountUsdollar`, (req, res) => aosLineItemGroupsCtrl.findOneByDiscountAmountUsdollar(req, res));

router.get(`/api-${sys}/aos-line-item-groups/findOneBySubtotalAmount/:subtotalAmount`, (req, res) => aosLineItemGroupsCtrl.findOneBySubtotalAmount(req, res));

router.get(`/api-${sys}/aos-line-item-groups/findOneBySubtotalAmountUsdollar/:subtotalAmountUsdollar`, (req, res) => aosLineItemGroupsCtrl.findOneBySubtotalAmountUsdollar(req, res));

router.get(`/api-${sys}/aos-line-item-groups/findOneByTaxAmount/:taxAmount`, (req, res) => aosLineItemGroupsCtrl.findOneByTaxAmount(req, res));

router.get(`/api-${sys}/aos-line-item-groups/findOneByTaxAmountUsdollar/:taxAmountUsdollar`, (req, res) => aosLineItemGroupsCtrl.findOneByTaxAmountUsdollar(req, res));

router.get(`/api-${sys}/aos-line-item-groups/findOneBySubtotalTaxAmount/:subtotalTaxAmount`, (req, res) => aosLineItemGroupsCtrl.findOneBySubtotalTaxAmount(req, res));

router.get(`/api-${sys}/aos-line-item-groups/findOneBySubtotalTaxAmountUsdollar/:subtotalTaxAmountUsdollar`, (req, res) => aosLineItemGroupsCtrl.findOneBySubtotalTaxAmountUsdollar(req, res));

router.get(`/api-${sys}/aos-line-item-groups/findOneByTotalAmount/:totalAmount`, (req, res) => aosLineItemGroupsCtrl.findOneByTotalAmount(req, res));

router.get(`/api-${sys}/aos-line-item-groups/findOneByTotalAmountUsdollar/:totalAmountUsdollar`, (req, res) => aosLineItemGroupsCtrl.findOneByTotalAmountUsdollar(req, res));

router.get(`/api-${sys}/aos-line-item-groups/findOneByName/:name`, (req, res) => aosLineItemGroupsCtrl.findOneByName(req, res));

router.get(`/api-${sys}/aos-line-item-groups/findOneByParentType/:parentType`, (req, res) => aosLineItemGroupsCtrl.findOneByParentType(req, res));

router.get(`/api-${sys}/aos-line-item-groups/findOneByDescription/:description`, (req, res) => aosLineItemGroupsCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/aos-line-item-groups/findOneByDateEntered/:dateEntered`, (req, res) => aosLineItemGroupsCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/aos-line-item-groups/findOneByDateModified/:dateModified`, (req, res) => aosLineItemGroupsCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/aos-line-item-groups/findOneByModifiedUserId/:modifiedUserId`, (req, res) => aosLineItemGroupsCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/aos-line-item-groups/findOneByCreatedBy/:createdBy`, (req, res) => aosLineItemGroupsCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/aos-line-item-groups/findOneByAssignedUserId/:assignedUserId`, (req, res) => aosLineItemGroupsCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/aos-line-item-groups/findOneByParentId/:parentId`, (req, res) => aosLineItemGroupsCtrl.findOneByParentId(req, res));

router.get(`/api-${sys}/aos-line-item-groups/findOneByCurrencyId/:currencyId`, (req, res) => aosLineItemGroupsCtrl.findOneByCurrencyId(req, res));



router.post(`/api-${sys}/aos-line-item-groups/updateAoLineItemGroupById`, (req, res) => aosLineItemGroupsCtrl.updateAoLineItemGroupById(req, res));

router.post(`/api-${sys}/aos-line-item-groups/updateAoLineItemGroupByDeleted`, (req, res) => aosLineItemGroupsCtrl.updateAoLineItemGroupByDeleted(req, res));

router.post(`/api-${sys}/aos-line-item-groups/updateAoLineItemGroupByNumber`, (req, res) => aosLineItemGroupsCtrl.updateAoLineItemGroupByNumber(req, res));

router.post(`/api-${sys}/aos-line-item-groups/updateAoLineItemGroupByTotalAmt`, (req, res) => aosLineItemGroupsCtrl.updateAoLineItemGroupByTotalAmt(req, res));

router.post(`/api-${sys}/aos-line-item-groups/updateAoLineItemGroupByTotalAmtUsdollar`, (req, res) => aosLineItemGroupsCtrl.updateAoLineItemGroupByTotalAmtUsdollar(req, res));

router.post(`/api-${sys}/aos-line-item-groups/updateAoLineItemGroupByDiscountAmount`, (req, res) => aosLineItemGroupsCtrl.updateAoLineItemGroupByDiscountAmount(req, res));

router.post(`/api-${sys}/aos-line-item-groups/updateAoLineItemGroupByDiscountAmountUsdollar`, (req, res) => aosLineItemGroupsCtrl.updateAoLineItemGroupByDiscountAmountUsdollar(req, res));

router.post(`/api-${sys}/aos-line-item-groups/updateAoLineItemGroupBySubtotalAmount`, (req, res) => aosLineItemGroupsCtrl.updateAoLineItemGroupBySubtotalAmount(req, res));

router.post(`/api-${sys}/aos-line-item-groups/updateAoLineItemGroupBySubtotalAmountUsdollar`, (req, res) => aosLineItemGroupsCtrl.updateAoLineItemGroupBySubtotalAmountUsdollar(req, res));

router.post(`/api-${sys}/aos-line-item-groups/updateAoLineItemGroupByTaxAmount`, (req, res) => aosLineItemGroupsCtrl.updateAoLineItemGroupByTaxAmount(req, res));

router.post(`/api-${sys}/aos-line-item-groups/updateAoLineItemGroupByTaxAmountUsdollar`, (req, res) => aosLineItemGroupsCtrl.updateAoLineItemGroupByTaxAmountUsdollar(req, res));

router.post(`/api-${sys}/aos-line-item-groups/updateAoLineItemGroupBySubtotalTaxAmount`, (req, res) => aosLineItemGroupsCtrl.updateAoLineItemGroupBySubtotalTaxAmount(req, res));

router.post(`/api-${sys}/aos-line-item-groups/updateAoLineItemGroupBySubtotalTaxAmountUsdollar`, (req, res) => aosLineItemGroupsCtrl.updateAoLineItemGroupBySubtotalTaxAmountUsdollar(req, res));

router.post(`/api-${sys}/aos-line-item-groups/updateAoLineItemGroupByTotalAmount`, (req, res) => aosLineItemGroupsCtrl.updateAoLineItemGroupByTotalAmount(req, res));

router.post(`/api-${sys}/aos-line-item-groups/updateAoLineItemGroupByTotalAmountUsdollar`, (req, res) => aosLineItemGroupsCtrl.updateAoLineItemGroupByTotalAmountUsdollar(req, res));

router.post(`/api-${sys}/aos-line-item-groups/updateAoLineItemGroupByName`, (req, res) => aosLineItemGroupsCtrl.updateAoLineItemGroupByName(req, res));

router.post(`/api-${sys}/aos-line-item-groups/updateAoLineItemGroupByParentType`, (req, res) => aosLineItemGroupsCtrl.updateAoLineItemGroupByParentType(req, res));

router.post(`/api-${sys}/aos-line-item-groups/updateAoLineItemGroupByDescription`, (req, res) => aosLineItemGroupsCtrl.updateAoLineItemGroupByDescription(req, res));

router.post(`/api-${sys}/aos-line-item-groups/updateAoLineItemGroupByDateEntered`, (req, res) => aosLineItemGroupsCtrl.updateAoLineItemGroupByDateEntered(req, res));

router.post(`/api-${sys}/aos-line-item-groups/updateAoLineItemGroupByDateModified`, (req, res) => aosLineItemGroupsCtrl.updateAoLineItemGroupByDateModified(req, res));

router.post(`/api-${sys}/aos-line-item-groups/updateAoLineItemGroupByModifiedUserId`, (req, res) => aosLineItemGroupsCtrl.updateAoLineItemGroupByModifiedUserId(req, res));

router.post(`/api-${sys}/aos-line-item-groups/updateAoLineItemGroupByCreatedBy`, (req, res) => aosLineItemGroupsCtrl.updateAoLineItemGroupByCreatedBy(req, res));

router.post(`/api-${sys}/aos-line-item-groups/updateAoLineItemGroupByAssignedUserId`, (req, res) => aosLineItemGroupsCtrl.updateAoLineItemGroupByAssignedUserId(req, res));

router.post(`/api-${sys}/aos-line-item-groups/updateAoLineItemGroupByParentId`, (req, res) => aosLineItemGroupsCtrl.updateAoLineItemGroupByParentId(req, res));

router.post(`/api-${sys}/aos-line-item-groups/updateAoLineItemGroupByCurrencyId`, (req, res) => aosLineItemGroupsCtrl.updateAoLineItemGroupByCurrencyId(req, res));





router.get(`/api-${sys}/aos-line-item-groups/`, (req, res) => aosLineItemGroupsCtrl.getAllAosLineItemGroups(req, res));
router.post(`/api-${sys}/aos-line-item-groups/`, (req, res) => aosLineItemGroupsCtrl.addAoLineItemGroup(req, res));
router.get(`/api-${sys}/aos-line-item-groups/:id`, (req, res) => aosLineItemGroupsCtrl.getAAoLineItemGroup(req, res));
router.put(`/api-${sys}/aos-line-item-groups/:id`, (req, res) => aosLineItemGroupsCtrl.updateAoLineItemGroup(req, res));
router.delete(`/api-${sys}/aos-line-item-groups/:id`, (req, res) => aosLineItemGroupsCtrl.deleteAoLineItemGroup(req, res));

//</es-section>
module.exports = router;
