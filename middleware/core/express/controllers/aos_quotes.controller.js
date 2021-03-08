/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:31 GMT-0400 (Bolivia Time)
 * Time: 15:35:31
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:31 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:31
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const aoQuoteService = require('../services/aos_quotes.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aosQuotesCtrl = {};
aosQuotesCtrl.service = aoQuoteService;


aosQuotesCtrl.getAllAosQuotes = async (req, res) => {
    try {
        const objAosQuotes = await aoQuoteService.getAllAosQuotes(req.query);
        if (objAosQuotes.length > 0) {
            util.setSuccess(200, 'AosQuotes retrieved', objAosQuotes);
        } else {
            util.setSuccess(200, 'No aoQuote found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.getAAoQuote = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAoQuote = await aoQuoteService.getAAoQuote(id, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.addAoQuote = async (req, res) => {
    try {
        const objAoQuote = await aoQuoteService.addAoQuote(req.body);
        util.setSuccess(201, 'AoQuote Added!', objAoQuote);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.updateAoQuote = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAoQuote = await aoQuoteService.updateAoQuote(id, req.body);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AoQuote updated', objAoQuote);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aosQuotesCtrl.deleteAoQuote = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAoQuote = await aoQuoteService.deleteAoQuote(id);
        if (objAoQuote) {
            util.setSuccess(200, 'AoQuote deleted', objAoQuote);
        } else {
            util.setError(404, `AoQuote with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aosQuotesCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAoQuote = await aoQuoteService.findOneById(id, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAoQuote = await aoQuoteService.findOneByDeleted(deleted, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByNumber = async (req, res) => {
    try {
        const { number } = req.params;
        const objAoQuote = await aoQuoteService.findOneByNumber(number, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByTotalAmt = async (req, res) => {
    try {
        const { totalAmt } = req.params;
        const objAoQuote = await aoQuoteService.findOneByTotalAmt(totalAmt, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByTotalAmtUsdollar = async (req, res) => {
    try {
        const { totalAmtUsdollar } = req.params;
        const objAoQuote = await aoQuoteService.findOneByTotalAmtUsdollar(totalAmtUsdollar, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneBySubtotalAmount = async (req, res) => {
    try {
        const { subtotalAmount } = req.params;
        const objAoQuote = await aoQuoteService.findOneBySubtotalAmount(subtotalAmount, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneBySubtotalAmountUsdollar = async (req, res) => {
    try {
        const { subtotalAmountUsdollar } = req.params;
        const objAoQuote = await aoQuoteService.findOneBySubtotalAmountUsdollar(subtotalAmountUsdollar, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByDiscountAmount = async (req, res) => {
    try {
        const { discountAmount } = req.params;
        const objAoQuote = await aoQuoteService.findOneByDiscountAmount(discountAmount, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByDiscountAmountUsdollar = async (req, res) => {
    try {
        const { discountAmountUsdollar } = req.params;
        const objAoQuote = await aoQuoteService.findOneByDiscountAmountUsdollar(discountAmountUsdollar, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByTaxAmount = async (req, res) => {
    try {
        const { taxAmount } = req.params;
        const objAoQuote = await aoQuoteService.findOneByTaxAmount(taxAmount, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByTaxAmountUsdollar = async (req, res) => {
    try {
        const { taxAmountUsdollar } = req.params;
        const objAoQuote = await aoQuoteService.findOneByTaxAmountUsdollar(taxAmountUsdollar, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByShippingAmount = async (req, res) => {
    try {
        const { shippingAmount } = req.params;
        const objAoQuote = await aoQuoteService.findOneByShippingAmount(shippingAmount, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByShippingAmountUsdollar = async (req, res) => {
    try {
        const { shippingAmountUsdollar } = req.params;
        const objAoQuote = await aoQuoteService.findOneByShippingAmountUsdollar(shippingAmountUsdollar, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByShippingTaxAmt = async (req, res) => {
    try {
        const { shippingTaxAmt } = req.params;
        const objAoQuote = await aoQuoteService.findOneByShippingTaxAmt(shippingTaxAmt, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByShippingTaxAmtUsdollar = async (req, res) => {
    try {
        const { shippingTaxAmtUsdollar } = req.params;
        const objAoQuote = await aoQuoteService.findOneByShippingTaxAmtUsdollar(shippingTaxAmtUsdollar, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByTotalAmount = async (req, res) => {
    try {
        const { totalAmount } = req.params;
        const objAoQuote = await aoQuoteService.findOneByTotalAmount(totalAmount, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByTotalAmountUsdollar = async (req, res) => {
    try {
        const { totalAmountUsdollar } = req.params;
        const objAoQuote = await aoQuoteService.findOneByTotalAmountUsdollar(totalAmountUsdollar, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneBySubtotalTaxAmount = async (req, res) => {
    try {
        const { subtotalTaxAmount } = req.params;
        const objAoQuote = await aoQuoteService.findOneBySubtotalTaxAmount(subtotalTaxAmount, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneBySubtotalTaxAmountUsdollar = async (req, res) => {
    try {
        const { subtotalTaxAmountUsdollar } = req.params;
        const objAoQuote = await aoQuoteService.findOneBySubtotalTaxAmountUsdollar(subtotalTaxAmountUsdollar, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objAoQuote = await aoQuoteService.findOneByName(name, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByBillingAddressStreet = async (req, res) => {
    try {
        const { billingAddressStreet } = req.params;
        const objAoQuote = await aoQuoteService.findOneByBillingAddressStreet(billingAddressStreet, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByBillingAddressCity = async (req, res) => {
    try {
        const { billingAddressCity } = req.params;
        const objAoQuote = await aoQuoteService.findOneByBillingAddressCity(billingAddressCity, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByBillingAddressState = async (req, res) => {
    try {
        const { billingAddressState } = req.params;
        const objAoQuote = await aoQuoteService.findOneByBillingAddressState(billingAddressState, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByBillingAddressPostalcode = async (req, res) => {
    try {
        const { billingAddressPostalcode } = req.params;
        const objAoQuote = await aoQuoteService.findOneByBillingAddressPostalcode(billingAddressPostalcode, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByBillingAddressCountry = async (req, res) => {
    try {
        const { billingAddressCountry } = req.params;
        const objAoQuote = await aoQuoteService.findOneByBillingAddressCountry(billingAddressCountry, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByShippingAddressStreet = async (req, res) => {
    try {
        const { shippingAddressStreet } = req.params;
        const objAoQuote = await aoQuoteService.findOneByShippingAddressStreet(shippingAddressStreet, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByShippingAddressCity = async (req, res) => {
    try {
        const { shippingAddressCity } = req.params;
        const objAoQuote = await aoQuoteService.findOneByShippingAddressCity(shippingAddressCity, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByShippingAddressState = async (req, res) => {
    try {
        const { shippingAddressState } = req.params;
        const objAoQuote = await aoQuoteService.findOneByShippingAddressState(shippingAddressState, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByShippingAddressPostalcode = async (req, res) => {
    try {
        const { shippingAddressPostalcode } = req.params;
        const objAoQuote = await aoQuoteService.findOneByShippingAddressPostalcode(shippingAddressPostalcode, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByShippingAddressCountry = async (req, res) => {
    try {
        const { shippingAddressCountry } = req.params;
        const objAoQuote = await aoQuoteService.findOneByShippingAddressCountry(shippingAddressCountry, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByShippingTax = async (req, res) => {
    try {
        const { shippingTax } = req.params;
        const objAoQuote = await aoQuoteService.findOneByShippingTax(shippingTax, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByStage = async (req, res) => {
    try {
        const { stage } = req.params;
        const objAoQuote = await aoQuoteService.findOneByStage(stage, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByTerm = async (req, res) => {
    try {
        const { term } = req.params;
        const objAoQuote = await aoQuoteService.findOneByTerm(term, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByApprovalStatus = async (req, res) => {
    try {
        const { approvalStatus } = req.params;
        const objAoQuote = await aoQuoteService.findOneByApprovalStatus(approvalStatus, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByInvoiceStatus = async (req, res) => {
    try {
        const { invoiceStatus } = req.params;
        const objAoQuote = await aoQuoteService.findOneByInvoiceStatus(invoiceStatus, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objAoQuote = await aoQuoteService.findOneByDescription(description, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByApprovalIssue = async (req, res) => {
    try {
        const { approvalIssue } = req.params;
        const objAoQuote = await aoQuoteService.findOneByApprovalIssue(approvalIssue, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByTemplateDdownC = async (req, res) => {
    try {
        const { templateDdownC } = req.params;
        const objAoQuote = await aoQuoteService.findOneByTemplateDdownC(templateDdownC, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByTermsC = async (req, res) => {
    try {
        const { termsC } = req.params;
        const objAoQuote = await aoQuoteService.findOneByTermsC(termsC, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objAoQuote = await aoQuoteService.findOneByDateEntered(dateEntered, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAoQuote = await aoQuoteService.findOneByDateModified(dateModified, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByExpiration = async (req, res) => {
    try {
        const { expiration } = req.params;
        const objAoQuote = await aoQuoteService.findOneByExpiration(expiration, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objAoQuote = await aoQuoteService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAoQuote = await aoQuoteService.findOneByCreatedBy(createdBy, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objAoQuote = await aoQuoteService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByBillingAccountId = async (req, res) => {
    try {
        const { billingAccountId } = req.params;
        const objAoQuote = await aoQuoteService.findOneByBillingAccountId(billingAccountId, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByBillingContactId = async (req, res) => {
    try {
        const { billingContactId } = req.params;
        const objAoQuote = await aoQuoteService.findOneByBillingContactId(billingContactId, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByOpportunityId = async (req, res) => {
    try {
        const { opportunityId } = req.params;
        const objAoQuote = await aoQuoteService.findOneByOpportunityId(opportunityId, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCtrl.findOneByCurrencyId = async (req, res) => {
    try {
        const { currencyId } = req.params;
        const objAoQuote = await aoQuoteService.findOneByCurrencyId(currencyId, req.query);
        if (!objAoQuote) {
            util.setError(404, `Cannot find aoQuote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuote', objAoQuote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aosQuotesCtrl.updateAoQuoteById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteById(id, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByDeleted(deleted, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByNumber = async (req, res) => {
     const { number } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByNumber(number, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByTotalAmt = async (req, res) => {
     const { totalAmt } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByTotalAmt(totalAmt, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByTotalAmtUsdollar = async (req, res) => {
     const { totalAmtUsdollar } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByTotalAmtUsdollar(totalAmtUsdollar, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteBySubtotalAmount = async (req, res) => {
     const { subtotalAmount } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteBySubtotalAmount(subtotalAmount, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteBySubtotalAmountUsdollar = async (req, res) => {
     const { subtotalAmountUsdollar } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteBySubtotalAmountUsdollar(subtotalAmountUsdollar, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByDiscountAmount = async (req, res) => {
     const { discountAmount } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByDiscountAmount(discountAmount, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByDiscountAmountUsdollar = async (req, res) => {
     const { discountAmountUsdollar } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByDiscountAmountUsdollar(discountAmountUsdollar, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByTaxAmount = async (req, res) => {
     const { taxAmount } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByTaxAmount(taxAmount, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByTaxAmountUsdollar = async (req, res) => {
     const { taxAmountUsdollar } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByTaxAmountUsdollar(taxAmountUsdollar, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByShippingAmount = async (req, res) => {
     const { shippingAmount } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByShippingAmount(shippingAmount, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByShippingAmountUsdollar = async (req, res) => {
     const { shippingAmountUsdollar } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByShippingAmountUsdollar(shippingAmountUsdollar, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByShippingTaxAmt = async (req, res) => {
     const { shippingTaxAmt } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByShippingTaxAmt(shippingTaxAmt, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByShippingTaxAmtUsdollar = async (req, res) => {
     const { shippingTaxAmtUsdollar } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByShippingTaxAmtUsdollar(shippingTaxAmtUsdollar, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByTotalAmount = async (req, res) => {
     const { totalAmount } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByTotalAmount(totalAmount, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByTotalAmountUsdollar = async (req, res) => {
     const { totalAmountUsdollar } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByTotalAmountUsdollar(totalAmountUsdollar, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteBySubtotalTaxAmount = async (req, res) => {
     const { subtotalTaxAmount } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteBySubtotalTaxAmount(subtotalTaxAmount, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteBySubtotalTaxAmountUsdollar = async (req, res) => {
     const { subtotalTaxAmountUsdollar } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteBySubtotalTaxAmountUsdollar(subtotalTaxAmountUsdollar, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByName(name, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByBillingAddressStreet = async (req, res) => {
     const { billingAddressStreet } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByBillingAddressStreet(billingAddressStreet, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByBillingAddressCity = async (req, res) => {
     const { billingAddressCity } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByBillingAddressCity(billingAddressCity, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByBillingAddressState = async (req, res) => {
     const { billingAddressState } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByBillingAddressState(billingAddressState, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByBillingAddressPostalcode = async (req, res) => {
     const { billingAddressPostalcode } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByBillingAddressPostalcode(billingAddressPostalcode, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByBillingAddressCountry = async (req, res) => {
     const { billingAddressCountry } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByBillingAddressCountry(billingAddressCountry, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByShippingAddressStreet = async (req, res) => {
     const { shippingAddressStreet } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByShippingAddressStreet(shippingAddressStreet, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByShippingAddressCity = async (req, res) => {
     const { shippingAddressCity } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByShippingAddressCity(shippingAddressCity, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByShippingAddressState = async (req, res) => {
     const { shippingAddressState } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByShippingAddressState(shippingAddressState, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByShippingAddressPostalcode = async (req, res) => {
     const { shippingAddressPostalcode } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByShippingAddressPostalcode(shippingAddressPostalcode, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByShippingAddressCountry = async (req, res) => {
     const { shippingAddressCountry } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByShippingAddressCountry(shippingAddressCountry, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByShippingTax = async (req, res) => {
     const { shippingTax } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByShippingTax(shippingTax, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByStage = async (req, res) => {
     const { stage } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByStage(stage, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByTerm = async (req, res) => {
     const { term } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByTerm(term, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByApprovalStatus = async (req, res) => {
     const { approvalStatus } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByApprovalStatus(approvalStatus, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByInvoiceStatus = async (req, res) => {
     const { invoiceStatus } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByInvoiceStatus(invoiceStatus, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByDescription(description, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByApprovalIssue = async (req, res) => {
     const { approvalIssue } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByApprovalIssue(approvalIssue, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByTemplateDdownC = async (req, res) => {
     const { templateDdownC } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByTemplateDdownC(templateDdownC, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByTermsC = async (req, res) => {
     const { termsC } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByTermsC(termsC, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByDateEntered(dateEntered, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByDateModified(dateModified, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByExpiration = async (req, res) => {
     const { expiration } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByExpiration(expiration, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByModifiedUserId(modifiedUserId, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByCreatedBy(createdBy, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByAssignedUserId(assignedUserId, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByBillingAccountId = async (req, res) => {
     const { billingAccountId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByBillingAccountId(billingAccountId, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByBillingContactId = async (req, res) => {
     const { billingContactId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByBillingContactId(billingContactId, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByOpportunityId = async (req, res) => {
     const { opportunityId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByOpportunityId(opportunityId, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCtrl.updateAoQuoteByCurrencyId = async (req, res) => {
     const { currencyId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuote = await aoQuoteService.updateAoQuoteByCurrencyId(currencyId, req.body);
            if (!objAoQuote) {
                util.setError(404, `Cannot find aoQuote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuote updated', objAoQuote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aosQuotesCtrl;
//</es-section>
