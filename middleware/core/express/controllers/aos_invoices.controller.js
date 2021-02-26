/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:12 GMT-0400 (Bolivia Time)
 * Time: 0:22:12
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:12 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:12
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const aoInvoiceService = require('../services/aos_invoices.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aosInvoicesCtrl = {};
aosInvoicesCtrl.service = aoInvoiceService;


aosInvoicesCtrl.getAllAosInvoices = async (req, res) => {
    try {
        const objAosInvoices = await aoInvoiceService.getAllAosInvoices(req.query);
        if (objAosInvoices.length > 0) {
            util.setSuccess(200, 'AosInvoices retrieved', objAosInvoices);
        } else {
            util.setSuccess(200, 'No aoInvoice found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.getAAoInvoice = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAoInvoice = await aoInvoiceService.getAAoInvoice(id, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.addAoInvoice = async (req, res) => {
    try {
        const objAoInvoice = await aoInvoiceService.addAoInvoice(req.body);
        util.setSuccess(201, 'AoInvoice Added!', objAoInvoice);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.updateAoInvoice = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAoInvoice = await aoInvoiceService.updateAoInvoice(id, req.body);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aosInvoicesCtrl.deleteAoInvoice = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAoInvoice = await aoInvoiceService.deleteAoInvoice(id);
        if (objAoInvoice) {
            util.setSuccess(200, 'AoInvoice deleted', objAoInvoice);
        } else {
            util.setError(404, `AoInvoice with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aosInvoicesCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneById(id, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneByDeleted(deleted, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneByNumber = async (req, res) => {
    try {
        const { number } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneByNumber(number, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneByQuoteNumber = async (req, res) => {
    try {
        const { quoteNumber } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneByQuoteNumber(quoteNumber, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneByTotalAmt = async (req, res) => {
    try {
        const { totalAmt } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneByTotalAmt(totalAmt, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneByTotalAmtUsdollar = async (req, res) => {
    try {
        const { totalAmtUsdollar } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneByTotalAmtUsdollar(totalAmtUsdollar, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneBySubtotalAmount = async (req, res) => {
    try {
        const { subtotalAmount } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneBySubtotalAmount(subtotalAmount, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneBySubtotalAmountUsdollar = async (req, res) => {
    try {
        const { subtotalAmountUsdollar } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneBySubtotalAmountUsdollar(subtotalAmountUsdollar, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneByDiscountAmount = async (req, res) => {
    try {
        const { discountAmount } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneByDiscountAmount(discountAmount, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneByDiscountAmountUsdollar = async (req, res) => {
    try {
        const { discountAmountUsdollar } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneByDiscountAmountUsdollar(discountAmountUsdollar, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneByTaxAmount = async (req, res) => {
    try {
        const { taxAmount } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneByTaxAmount(taxAmount, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneByTaxAmountUsdollar = async (req, res) => {
    try {
        const { taxAmountUsdollar } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneByTaxAmountUsdollar(taxAmountUsdollar, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneByShippingAmount = async (req, res) => {
    try {
        const { shippingAmount } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneByShippingAmount(shippingAmount, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneByShippingAmountUsdollar = async (req, res) => {
    try {
        const { shippingAmountUsdollar } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneByShippingAmountUsdollar(shippingAmountUsdollar, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneByShippingTaxAmt = async (req, res) => {
    try {
        const { shippingTaxAmt } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneByShippingTaxAmt(shippingTaxAmt, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneByShippingTaxAmtUsdollar = async (req, res) => {
    try {
        const { shippingTaxAmtUsdollar } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneByShippingTaxAmtUsdollar(shippingTaxAmtUsdollar, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneByTotalAmount = async (req, res) => {
    try {
        const { totalAmount } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneByTotalAmount(totalAmount, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneByTotalAmountUsdollar = async (req, res) => {
    try {
        const { totalAmountUsdollar } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneByTotalAmountUsdollar(totalAmountUsdollar, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneBySubtotalTaxAmount = async (req, res) => {
    try {
        const { subtotalTaxAmount } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneBySubtotalTaxAmount(subtotalTaxAmount, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneBySubtotalTaxAmountUsdollar = async (req, res) => {
    try {
        const { subtotalTaxAmountUsdollar } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneBySubtotalTaxAmountUsdollar(subtotalTaxAmountUsdollar, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneByName(name, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneByBillingAddressStreet = async (req, res) => {
    try {
        const { billingAddressStreet } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneByBillingAddressStreet(billingAddressStreet, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneByBillingAddressCity = async (req, res) => {
    try {
        const { billingAddressCity } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneByBillingAddressCity(billingAddressCity, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneByBillingAddressState = async (req, res) => {
    try {
        const { billingAddressState } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneByBillingAddressState(billingAddressState, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneByBillingAddressPostalcode = async (req, res) => {
    try {
        const { billingAddressPostalcode } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneByBillingAddressPostalcode(billingAddressPostalcode, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneByBillingAddressCountry = async (req, res) => {
    try {
        const { billingAddressCountry } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneByBillingAddressCountry(billingAddressCountry, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneByShippingAddressStreet = async (req, res) => {
    try {
        const { shippingAddressStreet } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneByShippingAddressStreet(shippingAddressStreet, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneByShippingAddressCity = async (req, res) => {
    try {
        const { shippingAddressCity } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneByShippingAddressCity(shippingAddressCity, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneByShippingAddressState = async (req, res) => {
    try {
        const { shippingAddressState } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneByShippingAddressState(shippingAddressState, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneByShippingAddressPostalcode = async (req, res) => {
    try {
        const { shippingAddressPostalcode } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneByShippingAddressPostalcode(shippingAddressPostalcode, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneByShippingAddressCountry = async (req, res) => {
    try {
        const { shippingAddressCountry } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneByShippingAddressCountry(shippingAddressCountry, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneByShippingTax = async (req, res) => {
    try {
        const { shippingTax } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneByShippingTax(shippingTax, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneByStatus = async (req, res) => {
    try {
        const { status } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneByStatus(status, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneByDescription(description, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneByTemplateDdownC = async (req, res) => {
    try {
        const { templateDdownC } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneByTemplateDdownC(templateDdownC, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneByDateEntered(dateEntered, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneByDateModified(dateModified, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneByQuoteDate = async (req, res) => {
    try {
        const { quoteDate } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneByQuoteDate(quoteDate, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneByInvoiceDate = async (req, res) => {
    try {
        const { invoiceDate } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneByInvoiceDate(invoiceDate, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneByDueDate = async (req, res) => {
    try {
        const { dueDate } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneByDueDate(dueDate, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneByCreatedBy(createdBy, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneByBillingAccountId = async (req, res) => {
    try {
        const { billingAccountId } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneByBillingAccountId(billingAccountId, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneByBillingContactId = async (req, res) => {
    try {
        const { billingContactId } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneByBillingContactId(billingContactId, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesCtrl.findOneByCurrencyId = async (req, res) => {
    try {
        const { currencyId } = req.params;
        const objAoInvoice = await aoInvoiceService.findOneByCurrencyId(currencyId, req.query);
        if (!objAoInvoice) {
            util.setError(404, `Cannot find aoInvoice with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoice', objAoInvoice);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aosInvoicesCtrl.updateAoInvoiceById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceById(id, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceByDeleted(deleted, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceByNumber = async (req, res) => {
     const { number } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceByNumber(number, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceByQuoteNumber = async (req, res) => {
     const { quoteNumber } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceByQuoteNumber(quoteNumber, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceByTotalAmt = async (req, res) => {
     const { totalAmt } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceByTotalAmt(totalAmt, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceByTotalAmtUsdollar = async (req, res) => {
     const { totalAmtUsdollar } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceByTotalAmtUsdollar(totalAmtUsdollar, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceBySubtotalAmount = async (req, res) => {
     const { subtotalAmount } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceBySubtotalAmount(subtotalAmount, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceBySubtotalAmountUsdollar = async (req, res) => {
     const { subtotalAmountUsdollar } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceBySubtotalAmountUsdollar(subtotalAmountUsdollar, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceByDiscountAmount = async (req, res) => {
     const { discountAmount } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceByDiscountAmount(discountAmount, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceByDiscountAmountUsdollar = async (req, res) => {
     const { discountAmountUsdollar } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceByDiscountAmountUsdollar(discountAmountUsdollar, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceByTaxAmount = async (req, res) => {
     const { taxAmount } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceByTaxAmount(taxAmount, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceByTaxAmountUsdollar = async (req, res) => {
     const { taxAmountUsdollar } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceByTaxAmountUsdollar(taxAmountUsdollar, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceByShippingAmount = async (req, res) => {
     const { shippingAmount } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceByShippingAmount(shippingAmount, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceByShippingAmountUsdollar = async (req, res) => {
     const { shippingAmountUsdollar } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceByShippingAmountUsdollar(shippingAmountUsdollar, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceByShippingTaxAmt = async (req, res) => {
     const { shippingTaxAmt } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceByShippingTaxAmt(shippingTaxAmt, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceByShippingTaxAmtUsdollar = async (req, res) => {
     const { shippingTaxAmtUsdollar } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceByShippingTaxAmtUsdollar(shippingTaxAmtUsdollar, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceByTotalAmount = async (req, res) => {
     const { totalAmount } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceByTotalAmount(totalAmount, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceByTotalAmountUsdollar = async (req, res) => {
     const { totalAmountUsdollar } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceByTotalAmountUsdollar(totalAmountUsdollar, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceBySubtotalTaxAmount = async (req, res) => {
     const { subtotalTaxAmount } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceBySubtotalTaxAmount(subtotalTaxAmount, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceBySubtotalTaxAmountUsdollar = async (req, res) => {
     const { subtotalTaxAmountUsdollar } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceBySubtotalTaxAmountUsdollar(subtotalTaxAmountUsdollar, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceByName(name, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceByBillingAddressStreet = async (req, res) => {
     const { billingAddressStreet } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceByBillingAddressStreet(billingAddressStreet, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceByBillingAddressCity = async (req, res) => {
     const { billingAddressCity } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceByBillingAddressCity(billingAddressCity, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceByBillingAddressState = async (req, res) => {
     const { billingAddressState } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceByBillingAddressState(billingAddressState, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceByBillingAddressPostalcode = async (req, res) => {
     const { billingAddressPostalcode } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceByBillingAddressPostalcode(billingAddressPostalcode, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceByBillingAddressCountry = async (req, res) => {
     const { billingAddressCountry } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceByBillingAddressCountry(billingAddressCountry, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceByShippingAddressStreet = async (req, res) => {
     const { shippingAddressStreet } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceByShippingAddressStreet(shippingAddressStreet, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceByShippingAddressCity = async (req, res) => {
     const { shippingAddressCity } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceByShippingAddressCity(shippingAddressCity, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceByShippingAddressState = async (req, res) => {
     const { shippingAddressState } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceByShippingAddressState(shippingAddressState, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceByShippingAddressPostalcode = async (req, res) => {
     const { shippingAddressPostalcode } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceByShippingAddressPostalcode(shippingAddressPostalcode, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceByShippingAddressCountry = async (req, res) => {
     const { shippingAddressCountry } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceByShippingAddressCountry(shippingAddressCountry, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceByShippingTax = async (req, res) => {
     const { shippingTax } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceByShippingTax(shippingTax, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceByStatus = async (req, res) => {
     const { status } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceByStatus(status, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceByDescription(description, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceByTemplateDdownC = async (req, res) => {
     const { templateDdownC } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceByTemplateDdownC(templateDdownC, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceByDateEntered(dateEntered, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceByDateModified(dateModified, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceByQuoteDate = async (req, res) => {
     const { quoteDate } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceByQuoteDate(quoteDate, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceByInvoiceDate = async (req, res) => {
     const { invoiceDate } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceByInvoiceDate(invoiceDate, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceByDueDate = async (req, res) => {
     const { dueDate } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceByDueDate(dueDate, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceByModifiedUserId(modifiedUserId, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceByCreatedBy(createdBy, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceByAssignedUserId(assignedUserId, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceByBillingAccountId = async (req, res) => {
     const { billingAccountId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceByBillingAccountId(billingAccountId, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceByBillingContactId = async (req, res) => {
     const { billingContactId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceByBillingContactId(billingContactId, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesCtrl.updateAoInvoiceByCurrencyId = async (req, res) => {
     const { currencyId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoice = await aoInvoiceService.updateAoInvoiceByCurrencyId(currencyId, req.body);
            if (!objAoInvoice) {
                util.setError(404, `Cannot find aoInvoice with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoice updated', objAoInvoice);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aosInvoicesCtrl;
//</es-section>
