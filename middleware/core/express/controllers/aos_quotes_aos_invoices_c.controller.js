/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:25 GMT-0400 (Bolivia Time)
 * Time: 14:0:25
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:25 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:25
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const aoQuoteAoInvoiceCService = require('../services/aos_quotes_aos_invoices_c.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aosQuotesAosInvoicesCCtrl = {};
aosQuotesAosInvoicesCCtrl.service = aoQuoteAoInvoiceCService;


aosQuotesAosInvoicesCCtrl.getAllAosQuotesAosInvoicesC = async (req, res) => {
    try {
        const objAosQuotesAosInvoicesC = await aoQuoteAoInvoiceCService.getAllAosQuotesAosInvoicesC(req.query);
        if (objAosQuotesAosInvoicesC.length > 0) {
            util.setSuccess(200, 'AosQuotesAosInvoicesC retrieved', objAosQuotesAosInvoicesC);
        } else {
            util.setSuccess(200, 'No aoQuoteAoInvoiceC found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesAosInvoicesCCtrl.getAAoQuoteAoInvoiceC = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objAoQuoteAoInvoiceC = await aoQuoteAoInvoiceCService.getAAoQuoteAoInvoiceC(id, req.query);
        if (!objAoQuoteAoInvoiceC) {
            util.setError(404, `Cannot find aoQuoteAoInvoiceC with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteAoInvoiceC', objAoQuoteAoInvoiceC);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesAosInvoicesCCtrl.addAoQuoteAoInvoiceC = async (req, res) => {
    try {
        const objAoQuoteAoInvoiceC = await aoQuoteAoInvoiceCService.addAoQuoteAoInvoiceC(req.body);
        util.setSuccess(201, 'AoQuoteAoInvoiceC Added!', objAoQuoteAoInvoiceC);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesAosInvoicesCCtrl.updateAoQuoteAoInvoiceC = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objAoQuoteAoInvoiceC = await aoQuoteAoInvoiceCService.updateAoQuoteAoInvoiceC(id, req.body);
        if (!objAoQuoteAoInvoiceC) {
            util.setError(404, `Cannot find aoQuoteAoInvoiceC with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AoQuoteAoInvoiceC updated', objAoQuoteAoInvoiceC);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aosQuotesAosInvoicesCCtrl.deleteAoQuoteAoInvoiceC = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objAoQuoteAoInvoiceC = await aoQuoteAoInvoiceCService.deleteAoQuoteAoInvoiceC(id);
        if (objAoQuoteAoInvoiceC) {
            util.setSuccess(200, 'AoQuoteAoInvoiceC deleted', objAoQuoteAoInvoiceC);
        } else {
            util.setError(404, `AoQuoteAoInvoiceC with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aosQuotesAosInvoicesCCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAoQuoteAoInvoiceC = await aoQuoteAoInvoiceCService.findOneById(id, req.query);
        if (!objAoQuoteAoInvoiceC) {
            util.setError(404, `Cannot find aoQuoteAoInvoiceC with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteAoInvoiceC', objAoQuoteAoInvoiceC);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesAosInvoicesCCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAoQuoteAoInvoiceC = await aoQuoteAoInvoiceCService.findOneByDeleted(deleted, req.query);
        if (!objAoQuoteAoInvoiceC) {
            util.setError(404, `Cannot find aoQuoteAoInvoiceC with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteAoInvoiceC', objAoQuoteAoInvoiceC);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesAosInvoicesCCtrl.findOneByAosQuotes77d9QuotesIda = async (req, res) => {
    try {
        const { aosQuotes77d9QuotesIda } = req.params;
        const objAoQuoteAoInvoiceC = await aoQuoteAoInvoiceCService.findOneByAosQuotes77d9QuotesIda(aosQuotes77d9QuotesIda, req.query);
        if (!objAoQuoteAoInvoiceC) {
            util.setError(404, `Cannot find aoQuoteAoInvoiceC with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteAoInvoiceC', objAoQuoteAoInvoiceC);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesAosInvoicesCCtrl.findOneByAosQuotes6b83nvoicesIdb = async (req, res) => {
    try {
        const { aosQuotes6b83nvoicesIdb } = req.params;
        const objAoQuoteAoInvoiceC = await aoQuoteAoInvoiceCService.findOneByAosQuotes6b83nvoicesIdb(aosQuotes6b83nvoicesIdb, req.query);
        if (!objAoQuoteAoInvoiceC) {
            util.setError(404, `Cannot find aoQuoteAoInvoiceC with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteAoInvoiceC', objAoQuoteAoInvoiceC);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesAosInvoicesCCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAoQuoteAoInvoiceC = await aoQuoteAoInvoiceCService.findOneByDateModified(dateModified, req.query);
        if (!objAoQuoteAoInvoiceC) {
            util.setError(404, `Cannot find aoQuoteAoInvoiceC with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteAoInvoiceC', objAoQuoteAoInvoiceC);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aosQuotesAosInvoicesCCtrl.updateAoQuoteAoInvoiceCById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAoQuoteAoInvoiceC = await aoQuoteAoInvoiceCService.updateAoQuoteAoInvoiceCById(id, req.body);
            if (!objAoQuoteAoInvoiceC) {
                util.setError(404, `Cannot find aoQuoteAoInvoiceC with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuoteAoInvoiceC updated', objAoQuoteAoInvoiceC);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesAosInvoicesCCtrl.updateAoQuoteAoInvoiceCByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAoQuoteAoInvoiceC = await aoQuoteAoInvoiceCService.updateAoQuoteAoInvoiceCByDeleted(deleted, req.body);
            if (!objAoQuoteAoInvoiceC) {
                util.setError(404, `Cannot find aoQuoteAoInvoiceC with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuoteAoInvoiceC updated', objAoQuoteAoInvoiceC);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesAosInvoicesCCtrl.updateAoQuoteAoInvoiceCByAosQuotes77d9QuotesIda = async (req, res) => {
     const { aosQuotes77d9QuotesIda } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAoQuoteAoInvoiceC = await aoQuoteAoInvoiceCService.updateAoQuoteAoInvoiceCByAosQuotes77d9QuotesIda(aosQuotes77d9QuotesIda, req.body);
            if (!objAoQuoteAoInvoiceC) {
                util.setError(404, `Cannot find aoQuoteAoInvoiceC with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuoteAoInvoiceC updated', objAoQuoteAoInvoiceC);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesAosInvoicesCCtrl.updateAoQuoteAoInvoiceCByAosQuotes6b83nvoicesIdb = async (req, res) => {
     const { aosQuotes6b83nvoicesIdb } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAoQuoteAoInvoiceC = await aoQuoteAoInvoiceCService.updateAoQuoteAoInvoiceCByAosQuotes6b83nvoicesIdb(aosQuotes6b83nvoicesIdb, req.body);
            if (!objAoQuoteAoInvoiceC) {
                util.setError(404, `Cannot find aoQuoteAoInvoiceC with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuoteAoInvoiceC updated', objAoQuoteAoInvoiceC);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesAosInvoicesCCtrl.updateAoQuoteAoInvoiceCByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAoQuoteAoInvoiceC = await aoQuoteAoInvoiceCService.updateAoQuoteAoInvoiceCByDateModified(dateModified, req.body);
            if (!objAoQuoteAoInvoiceC) {
                util.setError(404, `Cannot find aoQuoteAoInvoiceC with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuoteAoInvoiceC updated', objAoQuoteAoInvoiceC);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aosQuotesAosInvoicesCCtrl;
//</es-section>
