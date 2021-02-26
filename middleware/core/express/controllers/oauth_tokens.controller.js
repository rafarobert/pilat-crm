/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:23 GMT-0400 (Bolivia Time)
 * Time: 0:23:23
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:23 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:23
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const oauthTokenService = require('../services/oauth_tokens.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const oauthTokensCtrl = {};
oauthTokensCtrl.service = oauthTokenService;


oauthTokensCtrl.getAllOauthTokens = async (req, res) => {
    try {
        const objOauthTokens = await oauthTokenService.getAllOauthTokens(req.query);
        if (objOauthTokens.length > 0) {
            util.setSuccess(200, 'OauthTokens retrieved', objOauthTokens);
        } else {
            util.setSuccess(200, 'No oauthToken found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauthTokensCtrl.getAOauthToken = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objOauthToken = await oauthTokenService.getAOauthToken(id, req.query);
        if (!objOauthToken) {
            util.setError(404, `Cannot find oauthToken with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found oauthToken', objOauthToken);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauthTokensCtrl.addOauthToken = async (req, res) => {
    try {
        const objOauthToken = await oauthTokenService.addOauthToken(req.body);
        util.setSuccess(201, 'OauthToken Added!', objOauthToken);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauthTokensCtrl.updateOauthToken = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objOauthToken = await oauthTokenService.updateOauthToken(id, req.body);
        if (!objOauthToken) {
            util.setError(404, `Cannot find oauthToken with the id: ${id}`);
        } else {
            util.setSuccess(200, 'OauthToken updated', objOauthToken);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

oauthTokensCtrl.deleteOauthToken = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objOauthToken = await oauthTokenService.deleteOauthToken(id);
        if (objOauthToken) {
            util.setSuccess(200, 'OauthToken deleted', objOauthToken);
        } else {
            util.setError(404, `OauthToken with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



oauthTokensCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objOauthToken = await oauthTokenService.findOneById(id, req.query);
        if (!objOauthToken) {
            util.setError(404, `Cannot find oauthToken with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauthToken', objOauthToken);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauthTokensCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objOauthToken = await oauthTokenService.findOneByDeleted(deleted, req.query);
        if (!objOauthToken) {
            util.setError(404, `Cannot find oauthToken with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauthToken', objOauthToken);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauthTokensCtrl.findOneByTokenTs = async (req, res) => {
    try {
        const { tokenTs } = req.params;
        const objOauthToken = await oauthTokenService.findOneByTokenTs(tokenTs, req.query);
        if (!objOauthToken) {
            util.setError(404, `Cannot find oauthToken with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauthToken', objOauthToken);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauthTokensCtrl.findOneBySecret = async (req, res) => {
    try {
        const { secret } = req.params;
        const objOauthToken = await oauthTokenService.findOneBySecret(secret, req.query);
        if (!objOauthToken) {
            util.setError(404, `Cannot find oauthToken with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauthToken', objOauthToken);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauthTokensCtrl.findOneByTstate = async (req, res) => {
    try {
        const { tstate } = req.params;
        const objOauthToken = await oauthTokenService.findOneByTstate(tstate, req.query);
        if (!objOauthToken) {
            util.setError(404, `Cannot find oauthToken with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauthToken', objOauthToken);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauthTokensCtrl.findOneByVerify = async (req, res) => {
    try {
        const { verify } = req.params;
        const objOauthToken = await oauthTokenService.findOneByVerify(verify, req.query);
        if (!objOauthToken) {
            util.setError(404, `Cannot find oauthToken with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauthToken', objOauthToken);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauthTokensCtrl.findOneByCallbackUrl = async (req, res) => {
    try {
        const { callbackUrl } = req.params;
        const objOauthToken = await oauthTokenService.findOneByCallbackUrl(callbackUrl, req.query);
        if (!objOauthToken) {
            util.setError(404, `Cannot find oauthToken with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauthToken', objOauthToken);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauthTokensCtrl.findOneByConsumer = async (req, res) => {
    try {
        const { consumer } = req.params;
        const objOauthToken = await oauthTokenService.findOneByConsumer(consumer, req.query);
        if (!objOauthToken) {
            util.setError(404, `Cannot find oauthToken with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauthToken', objOauthToken);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauthTokensCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objOauthToken = await oauthTokenService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objOauthToken) {
            util.setError(404, `Cannot find oauthToken with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauthToken', objOauthToken);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



oauthTokensCtrl.updateOauthTokenById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauthToken = await oauthTokenService.updateOauthTokenById(id, req.body);
            if (!objOauthToken) {
                util.setError(404, `Cannot find oauthToken with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OauthToken updated', objOauthToken);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauthTokensCtrl.updateOauthTokenByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isTinyint(deleted)) {
                util.setError(400, 'Please input a valid Tinyint value');
                return util.send(res);
            }
            const objOauthToken = await oauthTokenService.updateOauthTokenByDeleted(deleted, req.body);
            if (!objOauthToken) {
                util.setError(404, `Cannot find oauthToken with the id: ${deleted}`);
            } else {
                util.setSuccess(200, 'OauthToken updated', objOauthToken);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauthTokensCtrl.updateOauthTokenByTokenTs = async (req, res) => {
     const { tokenTs } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauthToken = await oauthTokenService.updateOauthTokenByTokenTs(tokenTs, req.body);
            if (!objOauthToken) {
                util.setError(404, `Cannot find oauthToken with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OauthToken updated', objOauthToken);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauthTokensCtrl.updateOauthTokenBySecret = async (req, res) => {
     const { secret } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauthToken = await oauthTokenService.updateOauthTokenBySecret(secret, req.body);
            if (!objOauthToken) {
                util.setError(404, `Cannot find oauthToken with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OauthToken updated', objOauthToken);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauthTokensCtrl.updateOauthTokenByTstate = async (req, res) => {
     const { tstate } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauthToken = await oauthTokenService.updateOauthTokenByTstate(tstate, req.body);
            if (!objOauthToken) {
                util.setError(404, `Cannot find oauthToken with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OauthToken updated', objOauthToken);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauthTokensCtrl.updateOauthTokenByVerify = async (req, res) => {
     const { verify } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauthToken = await oauthTokenService.updateOauthTokenByVerify(verify, req.body);
            if (!objOauthToken) {
                util.setError(404, `Cannot find oauthToken with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OauthToken updated', objOauthToken);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauthTokensCtrl.updateOauthTokenByCallbackUrl = async (req, res) => {
     const { callbackUrl } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauthToken = await oauthTokenService.updateOauthTokenByCallbackUrl(callbackUrl, req.body);
            if (!objOauthToken) {
                util.setError(404, `Cannot find oauthToken with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OauthToken updated', objOauthToken);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauthTokensCtrl.updateOauthTokenByConsumer = async (req, res) => {
     const { consumer } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauthToken = await oauthTokenService.updateOauthTokenByConsumer(consumer, req.body);
            if (!objOauthToken) {
                util.setError(404, `Cannot find oauthToken with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OauthToken updated', objOauthToken);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauthTokensCtrl.updateOauthTokenByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauthToken = await oauthTokenService.updateOauthTokenByAssignedUserId(assignedUserId, req.body);
            if (!objOauthToken) {
                util.setError(404, `Cannot find oauthToken with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OauthToken updated', objOauthToken);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = oauthTokensCtrl;
//</es-section>
