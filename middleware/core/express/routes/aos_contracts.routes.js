/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:35:58 GMT-0400 (Bolivia Time)
 * Time: 18:35:58
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:35:58 GMT-0400 (Bolivia Time)
 * Last time updated: 18:35:58
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aosContractsCtrl = require("../controllers/aos_contracts.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aos-contracts/findOneById/:id`, (req, res) => aosContractsCtrl.findOneById(req, res));

router.get(`/api-${sys}/aos-contracts/findOneByDeleted/:deleted`, (req, res) => aosContractsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/aos-contracts/findOneByTotalContractValue/:totalContractValue`, (req, res) => aosContractsCtrl.findOneByTotalContractValue(req, res));

router.get(`/api-${sys}/aos-contracts/findOneByTotalContractValueUsdollar/:totalContractValueUsdollar`, (req, res) => aosContractsCtrl.findOneByTotalContractValueUsdollar(req, res));

router.get(`/api-${sys}/aos-contracts/findOneByTotalAmt/:totalAmt`, (req, res) => aosContractsCtrl.findOneByTotalAmt(req, res));

router.get(`/api-${sys}/aos-contracts/findOneByTotalAmtUsdollar/:totalAmtUsdollar`, (req, res) => aosContractsCtrl.findOneByTotalAmtUsdollar(req, res));

router.get(`/api-${sys}/aos-contracts/findOneBySubtotalAmount/:subtotalAmount`, (req, res) => aosContractsCtrl.findOneBySubtotalAmount(req, res));

router.get(`/api-${sys}/aos-contracts/findOneBySubtotalAmountUsdollar/:subtotalAmountUsdollar`, (req, res) => aosContractsCtrl.findOneBySubtotalAmountUsdollar(req, res));

router.get(`/api-${sys}/aos-contracts/findOneByDiscountAmount/:discountAmount`, (req, res) => aosContractsCtrl.findOneByDiscountAmount(req, res));

router.get(`/api-${sys}/aos-contracts/findOneByDiscountAmountUsdollar/:discountAmountUsdollar`, (req, res) => aosContractsCtrl.findOneByDiscountAmountUsdollar(req, res));

router.get(`/api-${sys}/aos-contracts/findOneByTaxAmount/:taxAmount`, (req, res) => aosContractsCtrl.findOneByTaxAmount(req, res));

router.get(`/api-${sys}/aos-contracts/findOneByTaxAmountUsdollar/:taxAmountUsdollar`, (req, res) => aosContractsCtrl.findOneByTaxAmountUsdollar(req, res));

router.get(`/api-${sys}/aos-contracts/findOneByShippingAmount/:shippingAmount`, (req, res) => aosContractsCtrl.findOneByShippingAmount(req, res));

router.get(`/api-${sys}/aos-contracts/findOneByShippingAmountUsdollar/:shippingAmountUsdollar`, (req, res) => aosContractsCtrl.findOneByShippingAmountUsdollar(req, res));

router.get(`/api-${sys}/aos-contracts/findOneByShippingTaxAmt/:shippingTaxAmt`, (req, res) => aosContractsCtrl.findOneByShippingTaxAmt(req, res));

router.get(`/api-${sys}/aos-contracts/findOneByShippingTaxAmtUsdollar/:shippingTaxAmtUsdollar`, (req, res) => aosContractsCtrl.findOneByShippingTaxAmtUsdollar(req, res));

router.get(`/api-${sys}/aos-contracts/findOneByTotalAmount/:totalAmount`, (req, res) => aosContractsCtrl.findOneByTotalAmount(req, res));

router.get(`/api-${sys}/aos-contracts/findOneByTotalAmountUsdollar/:totalAmountUsdollar`, (req, res) => aosContractsCtrl.findOneByTotalAmountUsdollar(req, res));

router.get(`/api-${sys}/aos-contracts/findOneByName/:name`, (req, res) => aosContractsCtrl.findOneByName(req, res));

router.get(`/api-${sys}/aos-contracts/findOneByReferenceCode/:referenceCode`, (req, res) => aosContractsCtrl.findOneByReferenceCode(req, res));

router.get(`/api-${sys}/aos-contracts/findOneByStatus/:status`, (req, res) => aosContractsCtrl.findOneByStatus(req, res));

router.get(`/api-${sys}/aos-contracts/findOneByContractType/:contractType`, (req, res) => aosContractsCtrl.findOneByContractType(req, res));

router.get(`/api-${sys}/aos-contracts/findOneByShippingTax/:shippingTax`, (req, res) => aosContractsCtrl.findOneByShippingTax(req, res));

router.get(`/api-${sys}/aos-contracts/findOneByDescription/:description`, (req, res) => aosContractsCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/aos-contracts/findOneByDateEntered/:dateEntered`, (req, res) => aosContractsCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/aos-contracts/findOneByDateModified/:dateModified`, (req, res) => aosContractsCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/aos-contracts/findOneByStartDate/:startDate`, (req, res) => aosContractsCtrl.findOneByStartDate(req, res));

router.get(`/api-${sys}/aos-contracts/findOneByEndDate/:endDate`, (req, res) => aosContractsCtrl.findOneByEndDate(req, res));

router.get(`/api-${sys}/aos-contracts/findOneByCustomerSignedDate/:customerSignedDate`, (req, res) => aosContractsCtrl.findOneByCustomerSignedDate(req, res));

router.get(`/api-${sys}/aos-contracts/findOneByCompanySignedDate/:companySignedDate`, (req, res) => aosContractsCtrl.findOneByCompanySignedDate(req, res));

router.get(`/api-${sys}/aos-contracts/findOneByRenewalReminderDate/:renewalReminderDate`, (req, res) => aosContractsCtrl.findOneByRenewalReminderDate(req, res));

router.get(`/api-${sys}/aos-contracts/findOneByModifiedUserId/:modifiedUserId`, (req, res) => aosContractsCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/aos-contracts/findOneByCreatedBy/:createdBy`, (req, res) => aosContractsCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/aos-contracts/findOneByAssignedUserId/:assignedUserId`, (req, res) => aosContractsCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/aos-contracts/findOneByCurrencyId/:currencyId`, (req, res) => aosContractsCtrl.findOneByCurrencyId(req, res));

router.get(`/api-${sys}/aos-contracts/findOneByContractAccountId/:contractAccountId`, (req, res) => aosContractsCtrl.findOneByContractAccountId(req, res));

router.get(`/api-${sys}/aos-contracts/findOneByOpportunityId/:opportunityId`, (req, res) => aosContractsCtrl.findOneByOpportunityId(req, res));

router.get(`/api-${sys}/aos-contracts/findOneByContactId/:contactId`, (req, res) => aosContractsCtrl.findOneByContactId(req, res));

router.get(`/api-${sys}/aos-contracts/findOneByCallId/:callId`, (req, res) => aosContractsCtrl.findOneByCallId(req, res));



router.post(`/api-${sys}/aos-contracts/updateAoContractById`, (req, res) => aosContractsCtrl.updateAoContractById(req, res));

router.post(`/api-${sys}/aos-contracts/updateAoContractByDeleted`, (req, res) => aosContractsCtrl.updateAoContractByDeleted(req, res));

router.post(`/api-${sys}/aos-contracts/updateAoContractByTotalContractValue`, (req, res) => aosContractsCtrl.updateAoContractByTotalContractValue(req, res));

router.post(`/api-${sys}/aos-contracts/updateAoContractByTotalContractValueUsdollar`, (req, res) => aosContractsCtrl.updateAoContractByTotalContractValueUsdollar(req, res));

router.post(`/api-${sys}/aos-contracts/updateAoContractByTotalAmt`, (req, res) => aosContractsCtrl.updateAoContractByTotalAmt(req, res));

router.post(`/api-${sys}/aos-contracts/updateAoContractByTotalAmtUsdollar`, (req, res) => aosContractsCtrl.updateAoContractByTotalAmtUsdollar(req, res));

router.post(`/api-${sys}/aos-contracts/updateAoContractBySubtotalAmount`, (req, res) => aosContractsCtrl.updateAoContractBySubtotalAmount(req, res));

router.post(`/api-${sys}/aos-contracts/updateAoContractBySubtotalAmountUsdollar`, (req, res) => aosContractsCtrl.updateAoContractBySubtotalAmountUsdollar(req, res));

router.post(`/api-${sys}/aos-contracts/updateAoContractByDiscountAmount`, (req, res) => aosContractsCtrl.updateAoContractByDiscountAmount(req, res));

router.post(`/api-${sys}/aos-contracts/updateAoContractByDiscountAmountUsdollar`, (req, res) => aosContractsCtrl.updateAoContractByDiscountAmountUsdollar(req, res));

router.post(`/api-${sys}/aos-contracts/updateAoContractByTaxAmount`, (req, res) => aosContractsCtrl.updateAoContractByTaxAmount(req, res));

router.post(`/api-${sys}/aos-contracts/updateAoContractByTaxAmountUsdollar`, (req, res) => aosContractsCtrl.updateAoContractByTaxAmountUsdollar(req, res));

router.post(`/api-${sys}/aos-contracts/updateAoContractByShippingAmount`, (req, res) => aosContractsCtrl.updateAoContractByShippingAmount(req, res));

router.post(`/api-${sys}/aos-contracts/updateAoContractByShippingAmountUsdollar`, (req, res) => aosContractsCtrl.updateAoContractByShippingAmountUsdollar(req, res));

router.post(`/api-${sys}/aos-contracts/updateAoContractByShippingTaxAmt`, (req, res) => aosContractsCtrl.updateAoContractByShippingTaxAmt(req, res));

router.post(`/api-${sys}/aos-contracts/updateAoContractByShippingTaxAmtUsdollar`, (req, res) => aosContractsCtrl.updateAoContractByShippingTaxAmtUsdollar(req, res));

router.post(`/api-${sys}/aos-contracts/updateAoContractByTotalAmount`, (req, res) => aosContractsCtrl.updateAoContractByTotalAmount(req, res));

router.post(`/api-${sys}/aos-contracts/updateAoContractByTotalAmountUsdollar`, (req, res) => aosContractsCtrl.updateAoContractByTotalAmountUsdollar(req, res));

router.post(`/api-${sys}/aos-contracts/updateAoContractByName`, (req, res) => aosContractsCtrl.updateAoContractByName(req, res));

router.post(`/api-${sys}/aos-contracts/updateAoContractByReferenceCode`, (req, res) => aosContractsCtrl.updateAoContractByReferenceCode(req, res));

router.post(`/api-${sys}/aos-contracts/updateAoContractByStatus`, (req, res) => aosContractsCtrl.updateAoContractByStatus(req, res));

router.post(`/api-${sys}/aos-contracts/updateAoContractByContractType`, (req, res) => aosContractsCtrl.updateAoContractByContractType(req, res));

router.post(`/api-${sys}/aos-contracts/updateAoContractByShippingTax`, (req, res) => aosContractsCtrl.updateAoContractByShippingTax(req, res));

router.post(`/api-${sys}/aos-contracts/updateAoContractByDescription`, (req, res) => aosContractsCtrl.updateAoContractByDescription(req, res));

router.post(`/api-${sys}/aos-contracts/updateAoContractByDateEntered`, (req, res) => aosContractsCtrl.updateAoContractByDateEntered(req, res));

router.post(`/api-${sys}/aos-contracts/updateAoContractByDateModified`, (req, res) => aosContractsCtrl.updateAoContractByDateModified(req, res));

router.post(`/api-${sys}/aos-contracts/updateAoContractByStartDate`, (req, res) => aosContractsCtrl.updateAoContractByStartDate(req, res));

router.post(`/api-${sys}/aos-contracts/updateAoContractByEndDate`, (req, res) => aosContractsCtrl.updateAoContractByEndDate(req, res));

router.post(`/api-${sys}/aos-contracts/updateAoContractByCustomerSignedDate`, (req, res) => aosContractsCtrl.updateAoContractByCustomerSignedDate(req, res));

router.post(`/api-${sys}/aos-contracts/updateAoContractByCompanySignedDate`, (req, res) => aosContractsCtrl.updateAoContractByCompanySignedDate(req, res));

router.post(`/api-${sys}/aos-contracts/updateAoContractByRenewalReminderDate`, (req, res) => aosContractsCtrl.updateAoContractByRenewalReminderDate(req, res));

router.post(`/api-${sys}/aos-contracts/updateAoContractByModifiedUserId`, (req, res) => aosContractsCtrl.updateAoContractByModifiedUserId(req, res));

router.post(`/api-${sys}/aos-contracts/updateAoContractByCreatedBy`, (req, res) => aosContractsCtrl.updateAoContractByCreatedBy(req, res));

router.post(`/api-${sys}/aos-contracts/updateAoContractByAssignedUserId`, (req, res) => aosContractsCtrl.updateAoContractByAssignedUserId(req, res));

router.post(`/api-${sys}/aos-contracts/updateAoContractByCurrencyId`, (req, res) => aosContractsCtrl.updateAoContractByCurrencyId(req, res));

router.post(`/api-${sys}/aos-contracts/updateAoContractByContractAccountId`, (req, res) => aosContractsCtrl.updateAoContractByContractAccountId(req, res));

router.post(`/api-${sys}/aos-contracts/updateAoContractByOpportunityId`, (req, res) => aosContractsCtrl.updateAoContractByOpportunityId(req, res));

router.post(`/api-${sys}/aos-contracts/updateAoContractByContactId`, (req, res) => aosContractsCtrl.updateAoContractByContactId(req, res));

router.post(`/api-${sys}/aos-contracts/updateAoContractByCallId`, (req, res) => aosContractsCtrl.updateAoContractByCallId(req, res));





router.get(`/api-${sys}/aos-contracts/`, (req, res) => aosContractsCtrl.getAllAosContracts(req, res));
router.post(`/api-${sys}/aos-contracts/`, (req, res) => aosContractsCtrl.addAoContract(req, res));
router.get(`/api-${sys}/aos-contracts/:id`, (req, res) => aosContractsCtrl.getAAoContract(req, res));
router.put(`/api-${sys}/aos-contracts/:id`, (req, res) => aosContractsCtrl.updateAoContract(req, res));
router.delete(`/api-${sys}/aos-contracts/:id`, (req, res) => aosContractsCtrl.deleteAoContract(req, res));

//</es-section>
module.exports = router;
