/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:37:33 GMT-0400 (Bolivia Time)
 * Time: 18:37:33
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:37:33 GMT-0400 (Bolivia Time)
 * Last time updated: 18:37:33
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const inboundEmailCacheTService = require('../services/inbound_email_cache_ts.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const inboundEmailCacheTsCtrl = {};
inboundEmailCacheTsCtrl.service = inboundEmailCacheTService;


inboundEmailCacheTsCtrl.getAllInboundEmailCacheTs = async (req, res) => {
    try {
        const objInboundEmailCacheTs = await inboundEmailCacheTService.getAllInboundEmailCacheTs(req.query);
        if (objInboundEmailCacheTs.length > 0) {
            util.setSuccess(200, 'InboundEmailCacheTs retrieved', objInboundEmailCacheTs);
        } else {
            util.setSuccess(200, 'No inboundEmailCacheT found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

inboundEmailCacheTsCtrl.getAInboundEmailCacheT = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objInboundEmailCacheT = await inboundEmailCacheTService.getAInboundEmailCacheT(id, req.query);
        if (!objInboundEmailCacheT) {
            util.setError(404, `Cannot find inboundEmailCacheT with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found inboundEmailCacheT', objInboundEmailCacheT);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

inboundEmailCacheTsCtrl.addInboundEmailCacheT = async (req, res) => {
    try {
        const objInboundEmailCacheT = await inboundEmailCacheTService.addInboundEmailCacheT(req.body);
        util.setSuccess(201, 'InboundEmailCacheT Added!', objInboundEmailCacheT);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

inboundEmailCacheTsCtrl.updateInboundEmailCacheT = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objInboundEmailCacheT = await inboundEmailCacheTService.updateInboundEmailCacheT(id, req.body);
        if (!objInboundEmailCacheT) {
            util.setError(404, `Cannot find inboundEmailCacheT with the id: ${id}`);
        } else {
            util.setSuccess(200, 'InboundEmailCacheT updated', objInboundEmailCacheT);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

inboundEmailCacheTsCtrl.deleteInboundEmailCacheT = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objInboundEmailCacheT = await inboundEmailCacheTService.deleteInboundEmailCacheT(id);
        if (objInboundEmailCacheT) {
            util.setSuccess(200, 'InboundEmailCacheT deleted', objInboundEmailCacheT);
        } else {
            util.setError(404, `InboundEmailCacheT with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



inboundEmailCacheTsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objInboundEmailCacheT = await inboundEmailCacheTService.findOneById(id, req.query);
        if (!objInboundEmailCacheT) {
            util.setError(404, `Cannot find inboundEmailCacheT with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found inboundEmailCacheT', objInboundEmailCacheT);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

inboundEmailCacheTsCtrl.findOneByIeTimestamp = async (req, res) => {
    try {
        const { ieTimestamp } = req.params;
        const objInboundEmailCacheT = await inboundEmailCacheTService.findOneByIeTimestamp(ieTimestamp, req.query);
        if (!objInboundEmailCacheT) {
            util.setError(404, `Cannot find inboundEmailCacheT with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found inboundEmailCacheT', objInboundEmailCacheT);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



inboundEmailCacheTsCtrl.updateInboundEmailCacheTById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objInboundEmailCacheT = await inboundEmailCacheTService.updateInboundEmailCacheTById(id, req.body);
            if (!objInboundEmailCacheT) {
                util.setError(404, `Cannot find inboundEmailCacheT with the id: ${id}`);
            } else {
                util.setSuccess(200, 'InboundEmailCacheT updated', objInboundEmailCacheT);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

inboundEmailCacheTsCtrl.updateInboundEmailCacheTByIeTimestamp = async (req, res) => {
     const { ieTimestamp } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objInboundEmailCacheT = await inboundEmailCacheTService.updateInboundEmailCacheTByIeTimestamp(ieTimestamp, req.body);
            if (!objInboundEmailCacheT) {
                util.setError(404, `Cannot find inboundEmailCacheT with the id: ${id}`);
            } else {
                util.setSuccess(200, 'InboundEmailCacheT updated', objInboundEmailCacheT);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = inboundEmailCacheTsCtrl;
//</es-section>
