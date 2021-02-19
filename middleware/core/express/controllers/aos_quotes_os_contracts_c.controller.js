/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:36:21 GMT-0400 (Bolivia Time)
 * Time: 18:36:21
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:36:21 GMT-0400 (Bolivia Time)
 * Last time updated: 18:36:21
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const aoQuoteOContractCService = require('../services/aos_quotes_os_contracts_c.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aosQuotesOsContractsCCtrl = {};
aosQuotesOsContractsCCtrl.service = aoQuoteOContractCService;


aosQuotesOsContractsCCtrl.getAllAosQuotesOsContractsC = async (req, res) => {
    try {
        const objAosQuotesOsContractsC = await aoQuoteOContractCService.getAllAosQuotesOsContractsC(req.query);
        if (objAosQuotesOsContractsC.length > 0) {
            util.setSuccess(200, 'AosQuotesOsContractsC retrieved', objAosQuotesOsContractsC);
        } else {
            util.setSuccess(200, 'No aoQuoteOContractC found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesOsContractsCCtrl.getAAoQuoteOContractC = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objAoQuoteOContractC = await aoQuoteOContractCService.getAAoQuoteOContractC(id, req.query);
        if (!objAoQuoteOContractC) {
            util.setError(404, `Cannot find aoQuoteOContractC with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteOContractC', objAoQuoteOContractC);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesOsContractsCCtrl.addAoQuoteOContractC = async (req, res) => {
    try {
        const objAoQuoteOContractC = await aoQuoteOContractCService.addAoQuoteOContractC(req.body);
        util.setSuccess(201, 'AoQuoteOContractC Added!', objAoQuoteOContractC);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesOsContractsCCtrl.updateAoQuoteOContractC = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objAoQuoteOContractC = await aoQuoteOContractCService.updateAoQuoteOContractC(id, req.body);
        if (!objAoQuoteOContractC) {
            util.setError(404, `Cannot find aoQuoteOContractC with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AoQuoteOContractC updated', objAoQuoteOContractC);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aosQuotesOsContractsCCtrl.deleteAoQuoteOContractC = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objAoQuoteOContractC = await aoQuoteOContractCService.deleteAoQuoteOContractC(id);
        if (objAoQuoteOContractC) {
            util.setSuccess(200, 'AoQuoteOContractC deleted', objAoQuoteOContractC);
        } else {
            util.setError(404, `AoQuoteOContractC with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aosQuotesOsContractsCCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAoQuoteOContractC = await aoQuoteOContractCService.findOneById(id, req.query);
        if (!objAoQuoteOContractC) {
            util.setError(404, `Cannot find aoQuoteOContractC with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteOContractC', objAoQuoteOContractC);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesOsContractsCCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAoQuoteOContractC = await aoQuoteOContractCService.findOneByDeleted(deleted, req.query);
        if (!objAoQuoteOContractC) {
            util.setError(404, `Cannot find aoQuoteOContractC with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteOContractC', objAoQuoteOContractC);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesOsContractsCCtrl.findOneByAosQuotese81eQuotesIda = async (req, res) => {
    try {
        const { aosQuotese81eQuotesIda } = req.params;
        const objAoQuoteOContractC = await aoQuoteOContractCService.findOneByAosQuotese81eQuotesIda(aosQuotese81eQuotesIda, req.query);
        if (!objAoQuoteOContractC) {
            util.setError(404, `Cannot find aoQuoteOContractC with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteOContractC', objAoQuoteOContractC);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesOsContractsCCtrl.findOneByAosQuotes4dc0ntractsIdb = async (req, res) => {
    try {
        const { aosQuotes4dc0ntractsIdb } = req.params;
        const objAoQuoteOContractC = await aoQuoteOContractCService.findOneByAosQuotes4dc0ntractsIdb(aosQuotes4dc0ntractsIdb, req.query);
        if (!objAoQuoteOContractC) {
            util.setError(404, `Cannot find aoQuoteOContractC with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteOContractC', objAoQuoteOContractC);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesOsContractsCCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAoQuoteOContractC = await aoQuoteOContractCService.findOneByDateModified(dateModified, req.query);
        if (!objAoQuoteOContractC) {
            util.setError(404, `Cannot find aoQuoteOContractC with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteOContractC', objAoQuoteOContractC);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aosQuotesOsContractsCCtrl.updateAoQuoteOContractCById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAoQuoteOContractC = await aoQuoteOContractCService.updateAoQuoteOContractCById(id, req.body);
            if (!objAoQuoteOContractC) {
                util.setError(404, `Cannot find aoQuoteOContractC with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuoteOContractC updated', objAoQuoteOContractC);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesOsContractsCCtrl.updateAoQuoteOContractCByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAoQuoteOContractC = await aoQuoteOContractCService.updateAoQuoteOContractCByDeleted(deleted, req.body);
            if (!objAoQuoteOContractC) {
                util.setError(404, `Cannot find aoQuoteOContractC with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuoteOContractC updated', objAoQuoteOContractC);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesOsContractsCCtrl.updateAoQuoteOContractCByAosQuotese81eQuotesIda = async (req, res) => {
     const { aosQuotese81eQuotesIda } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAoQuoteOContractC = await aoQuoteOContractCService.updateAoQuoteOContractCByAosQuotese81eQuotesIda(aosQuotese81eQuotesIda, req.body);
            if (!objAoQuoteOContractC) {
                util.setError(404, `Cannot find aoQuoteOContractC with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuoteOContractC updated', objAoQuoteOContractC);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesOsContractsCCtrl.updateAoQuoteOContractCByAosQuotes4dc0ntractsIdb = async (req, res) => {
     const { aosQuotes4dc0ntractsIdb } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAoQuoteOContractC = await aoQuoteOContractCService.updateAoQuoteOContractCByAosQuotes4dc0ntractsIdb(aosQuotes4dc0ntractsIdb, req.body);
            if (!objAoQuoteOContractC) {
                util.setError(404, `Cannot find aoQuoteOContractC with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuoteOContractC updated', objAoQuoteOContractC);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesOsContractsCCtrl.updateAoQuoteOContractCByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAoQuoteOContractC = await aoQuoteOContractCService.updateAoQuoteOContractCByDateModified(dateModified, req.body);
            if (!objAoQuoteOContractC) {
                util.setError(404, `Cannot find aoQuoteOContractC with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuoteOContractC updated', objAoQuoteOContractC);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aosQuotesOsContractsCCtrl;
//</es-section>
