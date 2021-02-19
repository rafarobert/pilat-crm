/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:35:57 GMT-0400 (Bolivia Time)
 * Time: 18:35:57
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:35:57 GMT-0400 (Bolivia Time)
 * Last time updated: 18:35:57
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const aoContractService = require('../services/aos_contracts.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aosContractsCtrl = {};
aosContractsCtrl.service = aoContractService;


aosContractsCtrl.getAllAosContracts = async (req, res) => {
    try {
        const objAosContracts = await aoContractService.getAllAosContracts(req.query);
        if (objAosContracts.length > 0) {
            util.setSuccess(200, 'AosContracts retrieved', objAosContracts);
        } else {
            util.setSuccess(200, 'No aoContract found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsCtrl.getAAoContract = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAoContract = await aoContractService.getAAoContract(id, req.query);
        if (!objAoContract) {
            util.setError(404, `Cannot find aoContract with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aoContract', objAoContract);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsCtrl.addAoContract = async (req, res) => {
    try {
        const objAoContract = await aoContractService.addAoContract(req.body);
        util.setSuccess(201, 'AoContract Added!', objAoContract);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsCtrl.updateAoContract = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAoContract = await aoContractService.updateAoContract(id, req.body);
        if (!objAoContract) {
            util.setError(404, `Cannot find aoContract with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AoContract updated', objAoContract);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aosContractsCtrl.deleteAoContract = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAoContract = await aoContractService.deleteAoContract(id);
        if (objAoContract) {
            util.setSuccess(200, 'AoContract deleted', objAoContract);
        } else {
            util.setError(404, `AoContract with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aosContractsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAoContract = await aoContractService.findOneById(id, req.query);
        if (!objAoContract) {
            util.setError(404, `Cannot find aoContract with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContract', objAoContract);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAoContract = await aoContractService.findOneByDeleted(deleted, req.query);
        if (!objAoContract) {
            util.setError(404, `Cannot find aoContract with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContract', objAoContract);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsCtrl.findOneByTotalContractValue = async (req, res) => {
    try {
        const { totalContractValue } = req.params;
        const objAoContract = await aoContractService.findOneByTotalContractValue(totalContractValue, req.query);
        if (!objAoContract) {
            util.setError(404, `Cannot find aoContract with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContract', objAoContract);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsCtrl.findOneByTotalContractValueUsdollar = async (req, res) => {
    try {
        const { totalContractValueUsdollar } = req.params;
        const objAoContract = await aoContractService.findOneByTotalContractValueUsdollar(totalContractValueUsdollar, req.query);
        if (!objAoContract) {
            util.setError(404, `Cannot find aoContract with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContract', objAoContract);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsCtrl.findOneByTotalAmt = async (req, res) => {
    try {
        const { totalAmt } = req.params;
        const objAoContract = await aoContractService.findOneByTotalAmt(totalAmt, req.query);
        if (!objAoContract) {
            util.setError(404, `Cannot find aoContract with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContract', objAoContract);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsCtrl.findOneByTotalAmtUsdollar = async (req, res) => {
    try {
        const { totalAmtUsdollar } = req.params;
        const objAoContract = await aoContractService.findOneByTotalAmtUsdollar(totalAmtUsdollar, req.query);
        if (!objAoContract) {
            util.setError(404, `Cannot find aoContract with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContract', objAoContract);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsCtrl.findOneBySubtotalAmount = async (req, res) => {
    try {
        const { subtotalAmount } = req.params;
        const objAoContract = await aoContractService.findOneBySubtotalAmount(subtotalAmount, req.query);
        if (!objAoContract) {
            util.setError(404, `Cannot find aoContract with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContract', objAoContract);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsCtrl.findOneBySubtotalAmountUsdollar = async (req, res) => {
    try {
        const { subtotalAmountUsdollar } = req.params;
        const objAoContract = await aoContractService.findOneBySubtotalAmountUsdollar(subtotalAmountUsdollar, req.query);
        if (!objAoContract) {
            util.setError(404, `Cannot find aoContract with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContract', objAoContract);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsCtrl.findOneByDiscountAmount = async (req, res) => {
    try {
        const { discountAmount } = req.params;
        const objAoContract = await aoContractService.findOneByDiscountAmount(discountAmount, req.query);
        if (!objAoContract) {
            util.setError(404, `Cannot find aoContract with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContract', objAoContract);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsCtrl.findOneByDiscountAmountUsdollar = async (req, res) => {
    try {
        const { discountAmountUsdollar } = req.params;
        const objAoContract = await aoContractService.findOneByDiscountAmountUsdollar(discountAmountUsdollar, req.query);
        if (!objAoContract) {
            util.setError(404, `Cannot find aoContract with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContract', objAoContract);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsCtrl.findOneByTaxAmount = async (req, res) => {
    try {
        const { taxAmount } = req.params;
        const objAoContract = await aoContractService.findOneByTaxAmount(taxAmount, req.query);
        if (!objAoContract) {
            util.setError(404, `Cannot find aoContract with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContract', objAoContract);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsCtrl.findOneByTaxAmountUsdollar = async (req, res) => {
    try {
        const { taxAmountUsdollar } = req.params;
        const objAoContract = await aoContractService.findOneByTaxAmountUsdollar(taxAmountUsdollar, req.query);
        if (!objAoContract) {
            util.setError(404, `Cannot find aoContract with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContract', objAoContract);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsCtrl.findOneByShippingAmount = async (req, res) => {
    try {
        const { shippingAmount } = req.params;
        const objAoContract = await aoContractService.findOneByShippingAmount(shippingAmount, req.query);
        if (!objAoContract) {
            util.setError(404, `Cannot find aoContract with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContract', objAoContract);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsCtrl.findOneByShippingAmountUsdollar = async (req, res) => {
    try {
        const { shippingAmountUsdollar } = req.params;
        const objAoContract = await aoContractService.findOneByShippingAmountUsdollar(shippingAmountUsdollar, req.query);
        if (!objAoContract) {
            util.setError(404, `Cannot find aoContract with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContract', objAoContract);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsCtrl.findOneByShippingTaxAmt = async (req, res) => {
    try {
        const { shippingTaxAmt } = req.params;
        const objAoContract = await aoContractService.findOneByShippingTaxAmt(shippingTaxAmt, req.query);
        if (!objAoContract) {
            util.setError(404, `Cannot find aoContract with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContract', objAoContract);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsCtrl.findOneByShippingTaxAmtUsdollar = async (req, res) => {
    try {
        const { shippingTaxAmtUsdollar } = req.params;
        const objAoContract = await aoContractService.findOneByShippingTaxAmtUsdollar(shippingTaxAmtUsdollar, req.query);
        if (!objAoContract) {
            util.setError(404, `Cannot find aoContract with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContract', objAoContract);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsCtrl.findOneByTotalAmount = async (req, res) => {
    try {
        const { totalAmount } = req.params;
        const objAoContract = await aoContractService.findOneByTotalAmount(totalAmount, req.query);
        if (!objAoContract) {
            util.setError(404, `Cannot find aoContract with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContract', objAoContract);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsCtrl.findOneByTotalAmountUsdollar = async (req, res) => {
    try {
        const { totalAmountUsdollar } = req.params;
        const objAoContract = await aoContractService.findOneByTotalAmountUsdollar(totalAmountUsdollar, req.query);
        if (!objAoContract) {
            util.setError(404, `Cannot find aoContract with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContract', objAoContract);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objAoContract = await aoContractService.findOneByName(name, req.query);
        if (!objAoContract) {
            util.setError(404, `Cannot find aoContract with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContract', objAoContract);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsCtrl.findOneByReferenceCode = async (req, res) => {
    try {
        const { referenceCode } = req.params;
        const objAoContract = await aoContractService.findOneByReferenceCode(referenceCode, req.query);
        if (!objAoContract) {
            util.setError(404, `Cannot find aoContract with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContract', objAoContract);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsCtrl.findOneByStatus = async (req, res) => {
    try {
        const { status } = req.params;
        const objAoContract = await aoContractService.findOneByStatus(status, req.query);
        if (!objAoContract) {
            util.setError(404, `Cannot find aoContract with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContract', objAoContract);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsCtrl.findOneByContractType = async (req, res) => {
    try {
        const { contractType } = req.params;
        const objAoContract = await aoContractService.findOneByContractType(contractType, req.query);
        if (!objAoContract) {
            util.setError(404, `Cannot find aoContract with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContract', objAoContract);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsCtrl.findOneByShippingTax = async (req, res) => {
    try {
        const { shippingTax } = req.params;
        const objAoContract = await aoContractService.findOneByShippingTax(shippingTax, req.query);
        if (!objAoContract) {
            util.setError(404, `Cannot find aoContract with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContract', objAoContract);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objAoContract = await aoContractService.findOneByDescription(description, req.query);
        if (!objAoContract) {
            util.setError(404, `Cannot find aoContract with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContract', objAoContract);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objAoContract = await aoContractService.findOneByDateEntered(dateEntered, req.query);
        if (!objAoContract) {
            util.setError(404, `Cannot find aoContract with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContract', objAoContract);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAoContract = await aoContractService.findOneByDateModified(dateModified, req.query);
        if (!objAoContract) {
            util.setError(404, `Cannot find aoContract with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContract', objAoContract);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsCtrl.findOneByStartDate = async (req, res) => {
    try {
        const { startDate } = req.params;
        const objAoContract = await aoContractService.findOneByStartDate(startDate, req.query);
        if (!objAoContract) {
            util.setError(404, `Cannot find aoContract with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContract', objAoContract);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsCtrl.findOneByEndDate = async (req, res) => {
    try {
        const { endDate } = req.params;
        const objAoContract = await aoContractService.findOneByEndDate(endDate, req.query);
        if (!objAoContract) {
            util.setError(404, `Cannot find aoContract with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContract', objAoContract);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsCtrl.findOneByCustomerSignedDate = async (req, res) => {
    try {
        const { customerSignedDate } = req.params;
        const objAoContract = await aoContractService.findOneByCustomerSignedDate(customerSignedDate, req.query);
        if (!objAoContract) {
            util.setError(404, `Cannot find aoContract with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContract', objAoContract);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsCtrl.findOneByCompanySignedDate = async (req, res) => {
    try {
        const { companySignedDate } = req.params;
        const objAoContract = await aoContractService.findOneByCompanySignedDate(companySignedDate, req.query);
        if (!objAoContract) {
            util.setError(404, `Cannot find aoContract with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContract', objAoContract);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsCtrl.findOneByRenewalReminderDate = async (req, res) => {
    try {
        const { renewalReminderDate } = req.params;
        const objAoContract = await aoContractService.findOneByRenewalReminderDate(renewalReminderDate, req.query);
        if (!objAoContract) {
            util.setError(404, `Cannot find aoContract with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContract', objAoContract);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objAoContract = await aoContractService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objAoContract) {
            util.setError(404, `Cannot find aoContract with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContract', objAoContract);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAoContract = await aoContractService.findOneByCreatedBy(createdBy, req.query);
        if (!objAoContract) {
            util.setError(404, `Cannot find aoContract with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContract', objAoContract);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objAoContract = await aoContractService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objAoContract) {
            util.setError(404, `Cannot find aoContract with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContract', objAoContract);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsCtrl.findOneByCurrencyId = async (req, res) => {
    try {
        const { currencyId } = req.params;
        const objAoContract = await aoContractService.findOneByCurrencyId(currencyId, req.query);
        if (!objAoContract) {
            util.setError(404, `Cannot find aoContract with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContract', objAoContract);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsCtrl.findOneByContractAccountId = async (req, res) => {
    try {
        const { contractAccountId } = req.params;
        const objAoContract = await aoContractService.findOneByContractAccountId(contractAccountId, req.query);
        if (!objAoContract) {
            util.setError(404, `Cannot find aoContract with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContract', objAoContract);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsCtrl.findOneByOpportunityId = async (req, res) => {
    try {
        const { opportunityId } = req.params;
        const objAoContract = await aoContractService.findOneByOpportunityId(opportunityId, req.query);
        if (!objAoContract) {
            util.setError(404, `Cannot find aoContract with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContract', objAoContract);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsCtrl.findOneByContactId = async (req, res) => {
    try {
        const { contactId } = req.params;
        const objAoContract = await aoContractService.findOneByContactId(contactId, req.query);
        if (!objAoContract) {
            util.setError(404, `Cannot find aoContract with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContract', objAoContract);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsCtrl.findOneByCallId = async (req, res) => {
    try {
        const { callId } = req.params;
        const objAoContract = await aoContractService.findOneByCallId(callId, req.query);
        if (!objAoContract) {
            util.setError(404, `Cannot find aoContract with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContract', objAoContract);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aosContractsCtrl.updateAoContractById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContract = await aoContractService.updateAoContractById(id, req.body);
            if (!objAoContract) {
                util.setError(404, `Cannot find aoContract with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContract updated', objAoContract);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsCtrl.updateAoContractByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContract = await aoContractService.updateAoContractByDeleted(deleted, req.body);
            if (!objAoContract) {
                util.setError(404, `Cannot find aoContract with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContract updated', objAoContract);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsCtrl.updateAoContractByTotalContractValue = async (req, res) => {
     const { totalContractValue } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContract = await aoContractService.updateAoContractByTotalContractValue(totalContractValue, req.body);
            if (!objAoContract) {
                util.setError(404, `Cannot find aoContract with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContract updated', objAoContract);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsCtrl.updateAoContractByTotalContractValueUsdollar = async (req, res) => {
     const { totalContractValueUsdollar } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContract = await aoContractService.updateAoContractByTotalContractValueUsdollar(totalContractValueUsdollar, req.body);
            if (!objAoContract) {
                util.setError(404, `Cannot find aoContract with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContract updated', objAoContract);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsCtrl.updateAoContractByTotalAmt = async (req, res) => {
     const { totalAmt } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContract = await aoContractService.updateAoContractByTotalAmt(totalAmt, req.body);
            if (!objAoContract) {
                util.setError(404, `Cannot find aoContract with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContract updated', objAoContract);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsCtrl.updateAoContractByTotalAmtUsdollar = async (req, res) => {
     const { totalAmtUsdollar } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContract = await aoContractService.updateAoContractByTotalAmtUsdollar(totalAmtUsdollar, req.body);
            if (!objAoContract) {
                util.setError(404, `Cannot find aoContract with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContract updated', objAoContract);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsCtrl.updateAoContractBySubtotalAmount = async (req, res) => {
     const { subtotalAmount } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContract = await aoContractService.updateAoContractBySubtotalAmount(subtotalAmount, req.body);
            if (!objAoContract) {
                util.setError(404, `Cannot find aoContract with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContract updated', objAoContract);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsCtrl.updateAoContractBySubtotalAmountUsdollar = async (req, res) => {
     const { subtotalAmountUsdollar } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContract = await aoContractService.updateAoContractBySubtotalAmountUsdollar(subtotalAmountUsdollar, req.body);
            if (!objAoContract) {
                util.setError(404, `Cannot find aoContract with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContract updated', objAoContract);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsCtrl.updateAoContractByDiscountAmount = async (req, res) => {
     const { discountAmount } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContract = await aoContractService.updateAoContractByDiscountAmount(discountAmount, req.body);
            if (!objAoContract) {
                util.setError(404, `Cannot find aoContract with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContract updated', objAoContract);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsCtrl.updateAoContractByDiscountAmountUsdollar = async (req, res) => {
     const { discountAmountUsdollar } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContract = await aoContractService.updateAoContractByDiscountAmountUsdollar(discountAmountUsdollar, req.body);
            if (!objAoContract) {
                util.setError(404, `Cannot find aoContract with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContract updated', objAoContract);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsCtrl.updateAoContractByTaxAmount = async (req, res) => {
     const { taxAmount } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContract = await aoContractService.updateAoContractByTaxAmount(taxAmount, req.body);
            if (!objAoContract) {
                util.setError(404, `Cannot find aoContract with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContract updated', objAoContract);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsCtrl.updateAoContractByTaxAmountUsdollar = async (req, res) => {
     const { taxAmountUsdollar } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContract = await aoContractService.updateAoContractByTaxAmountUsdollar(taxAmountUsdollar, req.body);
            if (!objAoContract) {
                util.setError(404, `Cannot find aoContract with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContract updated', objAoContract);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsCtrl.updateAoContractByShippingAmount = async (req, res) => {
     const { shippingAmount } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContract = await aoContractService.updateAoContractByShippingAmount(shippingAmount, req.body);
            if (!objAoContract) {
                util.setError(404, `Cannot find aoContract with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContract updated', objAoContract);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsCtrl.updateAoContractByShippingAmountUsdollar = async (req, res) => {
     const { shippingAmountUsdollar } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContract = await aoContractService.updateAoContractByShippingAmountUsdollar(shippingAmountUsdollar, req.body);
            if (!objAoContract) {
                util.setError(404, `Cannot find aoContract with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContract updated', objAoContract);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsCtrl.updateAoContractByShippingTaxAmt = async (req, res) => {
     const { shippingTaxAmt } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContract = await aoContractService.updateAoContractByShippingTaxAmt(shippingTaxAmt, req.body);
            if (!objAoContract) {
                util.setError(404, `Cannot find aoContract with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContract updated', objAoContract);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsCtrl.updateAoContractByShippingTaxAmtUsdollar = async (req, res) => {
     const { shippingTaxAmtUsdollar } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContract = await aoContractService.updateAoContractByShippingTaxAmtUsdollar(shippingTaxAmtUsdollar, req.body);
            if (!objAoContract) {
                util.setError(404, `Cannot find aoContract with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContract updated', objAoContract);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsCtrl.updateAoContractByTotalAmount = async (req, res) => {
     const { totalAmount } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContract = await aoContractService.updateAoContractByTotalAmount(totalAmount, req.body);
            if (!objAoContract) {
                util.setError(404, `Cannot find aoContract with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContract updated', objAoContract);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsCtrl.updateAoContractByTotalAmountUsdollar = async (req, res) => {
     const { totalAmountUsdollar } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContract = await aoContractService.updateAoContractByTotalAmountUsdollar(totalAmountUsdollar, req.body);
            if (!objAoContract) {
                util.setError(404, `Cannot find aoContract with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContract updated', objAoContract);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsCtrl.updateAoContractByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContract = await aoContractService.updateAoContractByName(name, req.body);
            if (!objAoContract) {
                util.setError(404, `Cannot find aoContract with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContract updated', objAoContract);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsCtrl.updateAoContractByReferenceCode = async (req, res) => {
     const { referenceCode } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContract = await aoContractService.updateAoContractByReferenceCode(referenceCode, req.body);
            if (!objAoContract) {
                util.setError(404, `Cannot find aoContract with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContract updated', objAoContract);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsCtrl.updateAoContractByStatus = async (req, res) => {
     const { status } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContract = await aoContractService.updateAoContractByStatus(status, req.body);
            if (!objAoContract) {
                util.setError(404, `Cannot find aoContract with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContract updated', objAoContract);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsCtrl.updateAoContractByContractType = async (req, res) => {
     const { contractType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContract = await aoContractService.updateAoContractByContractType(contractType, req.body);
            if (!objAoContract) {
                util.setError(404, `Cannot find aoContract with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContract updated', objAoContract);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsCtrl.updateAoContractByShippingTax = async (req, res) => {
     const { shippingTax } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContract = await aoContractService.updateAoContractByShippingTax(shippingTax, req.body);
            if (!objAoContract) {
                util.setError(404, `Cannot find aoContract with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContract updated', objAoContract);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsCtrl.updateAoContractByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContract = await aoContractService.updateAoContractByDescription(description, req.body);
            if (!objAoContract) {
                util.setError(404, `Cannot find aoContract with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContract updated', objAoContract);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsCtrl.updateAoContractByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContract = await aoContractService.updateAoContractByDateEntered(dateEntered, req.body);
            if (!objAoContract) {
                util.setError(404, `Cannot find aoContract with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContract updated', objAoContract);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsCtrl.updateAoContractByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContract = await aoContractService.updateAoContractByDateModified(dateModified, req.body);
            if (!objAoContract) {
                util.setError(404, `Cannot find aoContract with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContract updated', objAoContract);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsCtrl.updateAoContractByStartDate = async (req, res) => {
     const { startDate } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContract = await aoContractService.updateAoContractByStartDate(startDate, req.body);
            if (!objAoContract) {
                util.setError(404, `Cannot find aoContract with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContract updated', objAoContract);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsCtrl.updateAoContractByEndDate = async (req, res) => {
     const { endDate } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContract = await aoContractService.updateAoContractByEndDate(endDate, req.body);
            if (!objAoContract) {
                util.setError(404, `Cannot find aoContract with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContract updated', objAoContract);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsCtrl.updateAoContractByCustomerSignedDate = async (req, res) => {
     const { customerSignedDate } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContract = await aoContractService.updateAoContractByCustomerSignedDate(customerSignedDate, req.body);
            if (!objAoContract) {
                util.setError(404, `Cannot find aoContract with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContract updated', objAoContract);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsCtrl.updateAoContractByCompanySignedDate = async (req, res) => {
     const { companySignedDate } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContract = await aoContractService.updateAoContractByCompanySignedDate(companySignedDate, req.body);
            if (!objAoContract) {
                util.setError(404, `Cannot find aoContract with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContract updated', objAoContract);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsCtrl.updateAoContractByRenewalReminderDate = async (req, res) => {
     const { renewalReminderDate } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContract = await aoContractService.updateAoContractByRenewalReminderDate(renewalReminderDate, req.body);
            if (!objAoContract) {
                util.setError(404, `Cannot find aoContract with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContract updated', objAoContract);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsCtrl.updateAoContractByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContract = await aoContractService.updateAoContractByModifiedUserId(modifiedUserId, req.body);
            if (!objAoContract) {
                util.setError(404, `Cannot find aoContract with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContract updated', objAoContract);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsCtrl.updateAoContractByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContract = await aoContractService.updateAoContractByCreatedBy(createdBy, req.body);
            if (!objAoContract) {
                util.setError(404, `Cannot find aoContract with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContract updated', objAoContract);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsCtrl.updateAoContractByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContract = await aoContractService.updateAoContractByAssignedUserId(assignedUserId, req.body);
            if (!objAoContract) {
                util.setError(404, `Cannot find aoContract with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContract updated', objAoContract);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsCtrl.updateAoContractByCurrencyId = async (req, res) => {
     const { currencyId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContract = await aoContractService.updateAoContractByCurrencyId(currencyId, req.body);
            if (!objAoContract) {
                util.setError(404, `Cannot find aoContract with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContract updated', objAoContract);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsCtrl.updateAoContractByContractAccountId = async (req, res) => {
     const { contractAccountId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContract = await aoContractService.updateAoContractByContractAccountId(contractAccountId, req.body);
            if (!objAoContract) {
                util.setError(404, `Cannot find aoContract with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContract updated', objAoContract);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsCtrl.updateAoContractByOpportunityId = async (req, res) => {
     const { opportunityId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContract = await aoContractService.updateAoContractByOpportunityId(opportunityId, req.body);
            if (!objAoContract) {
                util.setError(404, `Cannot find aoContract with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContract updated', objAoContract);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsCtrl.updateAoContractByContactId = async (req, res) => {
     const { contactId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContract = await aoContractService.updateAoContractByContactId(contactId, req.body);
            if (!objAoContract) {
                util.setError(404, `Cannot find aoContract with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContract updated', objAoContract);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsCtrl.updateAoContractByCallId = async (req, res) => {
     const { callId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContract = await aoContractService.updateAoContractByCallId(callId, req.body);
            if (!objAoContract) {
                util.setError(404, `Cannot find aoContract with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContract updated', objAoContract);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aosContractsCtrl;
//</es-section>
