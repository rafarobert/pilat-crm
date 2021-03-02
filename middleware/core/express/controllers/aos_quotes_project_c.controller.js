/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:27 GMT-0400 (Bolivia Time)
 * Time: 14:0:27
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:27 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:27
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const aoQuoteProjectCService = require('../services/aos_quotes_project_c.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aosQuotesProjectCCtrl = {};
aosQuotesProjectCCtrl.service = aoQuoteProjectCService;


aosQuotesProjectCCtrl.getAllAosQuotesProjectC = async (req, res) => {
    try {
        const objAosQuotesProjectC = await aoQuoteProjectCService.getAllAosQuotesProjectC(req.query);
        if (objAosQuotesProjectC.length > 0) {
            util.setSuccess(200, 'AosQuotesProjectC retrieved', objAosQuotesProjectC);
        } else {
            util.setSuccess(200, 'No aoQuoteProjectC found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesProjectCCtrl.getAAoQuoteProjectC = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objAoQuoteProjectC = await aoQuoteProjectCService.getAAoQuoteProjectC(id, req.query);
        if (!objAoQuoteProjectC) {
            util.setError(404, `Cannot find aoQuoteProjectC with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteProjectC', objAoQuoteProjectC);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesProjectCCtrl.addAoQuoteProjectC = async (req, res) => {
    try {
        const objAoQuoteProjectC = await aoQuoteProjectCService.addAoQuoteProjectC(req.body);
        util.setSuccess(201, 'AoQuoteProjectC Added!', objAoQuoteProjectC);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesProjectCCtrl.updateAoQuoteProjectC = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objAoQuoteProjectC = await aoQuoteProjectCService.updateAoQuoteProjectC(id, req.body);
        if (!objAoQuoteProjectC) {
            util.setError(404, `Cannot find aoQuoteProjectC with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AoQuoteProjectC updated', objAoQuoteProjectC);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aosQuotesProjectCCtrl.deleteAoQuoteProjectC = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objAoQuoteProjectC = await aoQuoteProjectCService.deleteAoQuoteProjectC(id);
        if (objAoQuoteProjectC) {
            util.setSuccess(200, 'AoQuoteProjectC deleted', objAoQuoteProjectC);
        } else {
            util.setError(404, `AoQuoteProjectC with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aosQuotesProjectCCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAoQuoteProjectC = await aoQuoteProjectCService.findOneById(id, req.query);
        if (!objAoQuoteProjectC) {
            util.setError(404, `Cannot find aoQuoteProjectC with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteProjectC', objAoQuoteProjectC);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesProjectCCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAoQuoteProjectC = await aoQuoteProjectCService.findOneByDeleted(deleted, req.query);
        if (!objAoQuoteProjectC) {
            util.setError(404, `Cannot find aoQuoteProjectC with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteProjectC', objAoQuoteProjectC);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesProjectCCtrl.findOneByAosQuotes1112QuotesIda = async (req, res) => {
    try {
        const { aosQuotes1112QuotesIda } = req.params;
        const objAoQuoteProjectC = await aoQuoteProjectCService.findOneByAosQuotes1112QuotesIda(aosQuotes1112QuotesIda, req.query);
        if (!objAoQuoteProjectC) {
            util.setError(404, `Cannot find aoQuoteProjectC with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteProjectC', objAoQuoteProjectC);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesProjectCCtrl.findOneByAosQuotes7207projectIdb = async (req, res) => {
    try {
        const { aosQuotes7207projectIdb } = req.params;
        const objAoQuoteProjectC = await aoQuoteProjectCService.findOneByAosQuotes7207projectIdb(aosQuotes7207projectIdb, req.query);
        if (!objAoQuoteProjectC) {
            util.setError(404, `Cannot find aoQuoteProjectC with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteProjectC', objAoQuoteProjectC);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesProjectCCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAoQuoteProjectC = await aoQuoteProjectCService.findOneByDateModified(dateModified, req.query);
        if (!objAoQuoteProjectC) {
            util.setError(404, `Cannot find aoQuoteProjectC with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteProjectC', objAoQuoteProjectC);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aosQuotesProjectCCtrl.updateAoQuoteProjectCById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAoQuoteProjectC = await aoQuoteProjectCService.updateAoQuoteProjectCById(id, req.body);
            if (!objAoQuoteProjectC) {
                util.setError(404, `Cannot find aoQuoteProjectC with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuoteProjectC updated', objAoQuoteProjectC);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesProjectCCtrl.updateAoQuoteProjectCByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAoQuoteProjectC = await aoQuoteProjectCService.updateAoQuoteProjectCByDeleted(deleted, req.body);
            if (!objAoQuoteProjectC) {
                util.setError(404, `Cannot find aoQuoteProjectC with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuoteProjectC updated', objAoQuoteProjectC);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesProjectCCtrl.updateAoQuoteProjectCByAosQuotes1112QuotesIda = async (req, res) => {
     const { aosQuotes1112QuotesIda } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAoQuoteProjectC = await aoQuoteProjectCService.updateAoQuoteProjectCByAosQuotes1112QuotesIda(aosQuotes1112QuotesIda, req.body);
            if (!objAoQuoteProjectC) {
                util.setError(404, `Cannot find aoQuoteProjectC with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuoteProjectC updated', objAoQuoteProjectC);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesProjectCCtrl.updateAoQuoteProjectCByAosQuotes7207projectIdb = async (req, res) => {
     const { aosQuotes7207projectIdb } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAoQuoteProjectC = await aoQuoteProjectCService.updateAoQuoteProjectCByAosQuotes7207projectIdb(aosQuotes7207projectIdb, req.body);
            if (!objAoQuoteProjectC) {
                util.setError(404, `Cannot find aoQuoteProjectC with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuoteProjectC updated', objAoQuoteProjectC);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesProjectCCtrl.updateAoQuoteProjectCByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAoQuoteProjectC = await aoQuoteProjectCService.updateAoQuoteProjectCByDateModified(dateModified, req.body);
            if (!objAoQuoteProjectC) {
                util.setError(404, `Cannot find aoQuoteProjectC with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuoteProjectC updated', objAoQuoteProjectC);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aosQuotesProjectCCtrl;
//</es-section>
