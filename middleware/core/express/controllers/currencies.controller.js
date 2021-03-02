/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:40 GMT-0400 (Bolivia Time)
 * Time: 14:0:40
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:40 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:40
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const currencyService = require('../services/currencies.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const currenciesCtrl = {};
currenciesCtrl.service = currencyService;


currenciesCtrl.getAllCurrencies = async (req, res) => {
    try {
        const objCurrencies = await currencyService.getAllCurrencies(req.query);
        if (objCurrencies.length > 0) {
            util.setSuccess(200, 'Currencies retrieved', objCurrencies);
        } else {
            util.setSuccess(200, 'No currency found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

currenciesCtrl.getACurrency = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objCurrency = await currencyService.getACurrency(id, req.query);
        if (!objCurrency) {
            util.setError(404, `Cannot find currency with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found currency', objCurrency);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

currenciesCtrl.addCurrency = async (req, res) => {
    try {
        const objCurrency = await currencyService.addCurrency(req.body);
        util.setSuccess(201, 'Currency Added!', objCurrency);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

currenciesCtrl.updateCurrency = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objCurrency = await currencyService.updateCurrency(id, req.body);
        if (!objCurrency) {
            util.setError(404, `Cannot find currency with the id: ${id}`);
        } else {
            util.setSuccess(200, 'Currency updated', objCurrency);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

currenciesCtrl.deleteCurrency = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objCurrency = await currencyService.deleteCurrency(id);
        if (objCurrency) {
            util.setSuccess(200, 'Currency deleted', objCurrency);
        } else {
            util.setError(404, `Currency with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



currenciesCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objCurrency = await currencyService.findOneById(id, req.query);
        if (!objCurrency) {
            util.setError(404, `Cannot find currency with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found currency', objCurrency);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

currenciesCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objCurrency = await currencyService.findOneByDeleted(deleted, req.query);
        if (!objCurrency) {
            util.setError(404, `Cannot find currency with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found currency', objCurrency);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

currenciesCtrl.findOneByConversionRate = async (req, res) => {
    try {
        const { conversionRate } = req.params;
        const objCurrency = await currencyService.findOneByConversionRate(conversionRate, req.query);
        if (!objCurrency) {
            util.setError(404, `Cannot find currency with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found currency', objCurrency);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

currenciesCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objCurrency = await currencyService.findOneByName(name, req.query);
        if (!objCurrency) {
            util.setError(404, `Cannot find currency with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found currency', objCurrency);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

currenciesCtrl.findOneBySymbol = async (req, res) => {
    try {
        const { symbol } = req.params;
        const objCurrency = await currencyService.findOneBySymbol(symbol, req.query);
        if (!objCurrency) {
            util.setError(404, `Cannot find currency with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found currency', objCurrency);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

currenciesCtrl.findOneByIso4217 = async (req, res) => {
    try {
        const { iso4217 } = req.params;
        const objCurrency = await currencyService.findOneByIso4217(iso4217, req.query);
        if (!objCurrency) {
            util.setError(404, `Cannot find currency with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found currency', objCurrency);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

currenciesCtrl.findOneByStatus = async (req, res) => {
    try {
        const { status } = req.params;
        const objCurrency = await currencyService.findOneByStatus(status, req.query);
        if (!objCurrency) {
            util.setError(404, `Cannot find currency with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found currency', objCurrency);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

currenciesCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objCurrency = await currencyService.findOneByDateEntered(dateEntered, req.query);
        if (!objCurrency) {
            util.setError(404, `Cannot find currency with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found currency', objCurrency);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

currenciesCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objCurrency = await currencyService.findOneByDateModified(dateModified, req.query);
        if (!objCurrency) {
            util.setError(404, `Cannot find currency with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found currency', objCurrency);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

currenciesCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objCurrency = await currencyService.findOneByCreatedBy(createdBy, req.query);
        if (!objCurrency) {
            util.setError(404, `Cannot find currency with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found currency', objCurrency);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



currenciesCtrl.updateCurrencyById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCurrency = await currencyService.updateCurrencyById(id, req.body);
            if (!objCurrency) {
                util.setError(404, `Cannot find currency with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Currency updated', objCurrency);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

currenciesCtrl.updateCurrencyByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCurrency = await currencyService.updateCurrencyByDeleted(deleted, req.body);
            if (!objCurrency) {
                util.setError(404, `Cannot find currency with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Currency updated', objCurrency);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

currenciesCtrl.updateCurrencyByConversionRate = async (req, res) => {
     const { conversionRate } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCurrency = await currencyService.updateCurrencyByConversionRate(conversionRate, req.body);
            if (!objCurrency) {
                util.setError(404, `Cannot find currency with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Currency updated', objCurrency);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

currenciesCtrl.updateCurrencyByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCurrency = await currencyService.updateCurrencyByName(name, req.body);
            if (!objCurrency) {
                util.setError(404, `Cannot find currency with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Currency updated', objCurrency);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

currenciesCtrl.updateCurrencyBySymbol = async (req, res) => {
     const { symbol } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCurrency = await currencyService.updateCurrencyBySymbol(symbol, req.body);
            if (!objCurrency) {
                util.setError(404, `Cannot find currency with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Currency updated', objCurrency);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

currenciesCtrl.updateCurrencyByIso4217 = async (req, res) => {
     const { iso4217 } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCurrency = await currencyService.updateCurrencyByIso4217(iso4217, req.body);
            if (!objCurrency) {
                util.setError(404, `Cannot find currency with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Currency updated', objCurrency);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

currenciesCtrl.updateCurrencyByStatus = async (req, res) => {
     const { status } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCurrency = await currencyService.updateCurrencyByStatus(status, req.body);
            if (!objCurrency) {
                util.setError(404, `Cannot find currency with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Currency updated', objCurrency);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

currenciesCtrl.updateCurrencyByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCurrency = await currencyService.updateCurrencyByDateEntered(dateEntered, req.body);
            if (!objCurrency) {
                util.setError(404, `Cannot find currency with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Currency updated', objCurrency);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

currenciesCtrl.updateCurrencyByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCurrency = await currencyService.updateCurrencyByDateModified(dateModified, req.body);
            if (!objCurrency) {
                util.setError(404, `Cannot find currency with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Currency updated', objCurrency);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

currenciesCtrl.updateCurrencyByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCurrency = await currencyService.updateCurrencyByCreatedBy(createdBy, req.body);
            if (!objCurrency) {
                util.setError(404, `Cannot find currency with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Currency updated', objCurrency);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = currenciesCtrl;
//</es-section>
