/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:19 GMT-0400 (Bolivia Time)
 * Time: 14:57:19
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:19 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:19
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const oauthNonceService = require('../services/oauth_nonce.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const oauthNonceCtrl = {};
oauthNonceCtrl.service = oauthNonceService;


oauthNonceCtrl.getAllOauthNonce = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.oauthNonce.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objOauthNonce = await oauthNonceService.getAllOauthNonce(req.query);
        if (objOauthNonce && objOauthNonce.rows && objOauthNonce.count) {
            util.setSuccess(200, 'OauthNonce retrieved', objOauthNonce.rows, objOauthNonce.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No oauthNonce found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauthNonceCtrl.getAOauthNonce = async (req, res) => {
    try {
        const { nonce } = req.params;
        if (!util.isString(nonce)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objOauthNonce = await oauthNonceService.getAOauthNonce(nonce, req.query);
        if (!objOauthNonce) {
            util.setError(404, `Cannot find oauthNonce with the id ${nonce}`);
        } else {
            util.setSuccess(200, 'Found oauthNonce', objOauthNonce);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauthNonceCtrl.addOauthNonce = async (req, res) => {
    try {
        const objOauthNonce = await oauthNonceService.addOauthNonce(req.body);
        util.setSuccess(201, 'OauthNonce Added!', objOauthNonce);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauthNonceCtrl.updateOauthNonce = async (req, res) => {
    try {
        const { nonce } = req.params;
        if (!util.isString(nonce)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objOauthNonce = await oauthNonceService.updateOauthNonce(nonce, req.body);
        if (!objOauthNonce) {
            util.setError(404, `Cannot find oauthNonce with the id: ${nonce}`);
        } else {
            util.setSuccess(200, 'OauthNonce updated', objOauthNonce);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

oauthNonceCtrl.deleteOauthNonce = async (req, res) => {
    try {
        const { nonce } = req.params;
        if (!util.isString(nonce)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objOauthNonce = await oauthNonceService.deleteOauthNonce(nonce);
        if (objOauthNonce) {
            util.setSuccess(200, 'OauthNonce deleted', objOauthNonce);
        } else {
            util.setError(404, `OauthNonce with the id ${nonce} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



oauthNonceCtrl.findOneByConskey = async (req, res) => {
    try {
        const { conskey } = req.params;
        const objOauthNonce = await oauthNonceService.findOneByConskey(conskey, req.query);
        if (!objOauthNonce) {
            util.setError(404, `Cannot find oauthNonce with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauthNonce', objOauthNonce);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauthNonceCtrl.findOneByNonce = async (req, res) => {
    try {
        const { nonce } = req.params;
        const objOauthNonce = await oauthNonceService.findOneByNonce(nonce, req.query);
        if (!objOauthNonce) {
            util.setError(404, `Cannot find oauthNonce with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauthNonce', objOauthNonce);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauthNonceCtrl.findOneByNonceTs = async (req, res) => {
    try {
        const { nonceTs } = req.params;
        const objOauthNonce = await oauthNonceService.findOneByNonceTs(nonceTs, req.query);
        if (!objOauthNonce) {
            util.setError(404, `Cannot find oauthNonce with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauthNonce', objOauthNonce);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



oauthNonceCtrl.updateOauthNonceByConskey = async (req, res) => {
     const { conskey } = req.params;
        try {
            if (!util.isString(conskey)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objOauthNonce = await oauthNonceService.updateOauthNonceByConskey(conskey, req.body);
            if (!objOauthNonce) {
                util.setError(404, `Cannot find oauthNonce with the id: ${conskey}`);
            } else {
                util.setSuccess(200, 'OauthNonce updated', objOauthNonce);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauthNonceCtrl.updateOauthNonceByNonce = async (req, res) => {
     const { nonce } = req.params;
        try {
            if (!util.isString(nonce)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objOauthNonce = await oauthNonceService.updateOauthNonceByNonce(nonce, req.body);
            if (!objOauthNonce) {
                util.setError(404, `Cannot find oauthNonce with the id: ${nonce}`);
            } else {
                util.setSuccess(200, 'OauthNonce updated', objOauthNonce);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauthNonceCtrl.updateOauthNonceByNonceTs = async (req, res) => {
     const { nonceTs } = req.params;
        try {
            if (!util.isString(conskey)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objOauthNonce = await oauthNonceService.updateOauthNonceByNonceTs(nonceTs, req.body);
            if (!objOauthNonce) {
                util.setError(404, `Cannot find oauthNonce with the id: ${conskey}`);
            } else {
                util.setSuccess(200, 'OauthNonce updated', objOauthNonce);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = oauthNonceCtrl;
//</es-section>
