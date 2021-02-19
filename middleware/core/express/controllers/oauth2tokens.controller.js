/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:37:57 GMT-0400 (Bolivia Time)
 * Time: 18:37:57
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:37:57 GMT-0400 (Bolivia Time)
 * Last time updated: 18:37:57
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const oauth2tokenService = require('../services/oauth2tokens.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const oauth2tokensCtrl = {};
oauth2tokensCtrl.service = oauth2tokenService;


oauth2tokensCtrl.getAllOauth2tokens = async (req, res) => {
    try {
        const objOauth2tokens = await oauth2tokenService.getAllOauth2tokens(req.query);
        if (objOauth2tokens.length > 0) {
            util.setSuccess(200, 'Oauth2tokens retrieved', objOauth2tokens);
        } else {
            util.setSuccess(200, 'No oauth2token found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauth2tokensCtrl.getAOauth2token = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objOauth2token = await oauth2tokenService.getAOauth2token(id, req.query);
        if (!objOauth2token) {
            util.setError(404, `Cannot find oauth2token with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found oauth2token', objOauth2token);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauth2tokensCtrl.addOauth2token = async (req, res) => {
    try {
        const objOauth2token = await oauth2tokenService.addOauth2token(req.body);
        util.setSuccess(201, 'Oauth2token Added!', objOauth2token);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauth2tokensCtrl.updateOauth2token = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objOauth2token = await oauth2tokenService.updateOauth2token(id, req.body);
        if (!objOauth2token) {
            util.setError(404, `Cannot find oauth2token with the id: ${id}`);
        } else {
            util.setSuccess(200, 'Oauth2token updated', objOauth2token);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

oauth2tokensCtrl.deleteOauth2token = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objOauth2token = await oauth2tokenService.deleteOauth2token(id);
        if (objOauth2token) {
            util.setSuccess(200, 'Oauth2token deleted', objOauth2token);
        } else {
            util.setError(404, `Oauth2token with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



oauth2tokensCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objOauth2token = await oauth2tokenService.findOneById(id, req.query);
        if (!objOauth2token) {
            util.setError(404, `Cannot find oauth2token with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauth2token', objOauth2token);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauth2tokensCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objOauth2token = await oauth2tokenService.findOneByDeleted(deleted, req.query);
        if (!objOauth2token) {
            util.setError(404, `Cannot find oauth2token with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauth2token', objOauth2token);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauth2tokensCtrl.findOneByTokenIsRevoked = async (req, res) => {
    try {
        const { tokenIsRevoked } = req.params;
        const objOauth2token = await oauth2tokenService.findOneByTokenIsRevoked(tokenIsRevoked, req.query);
        if (!objOauth2token) {
            util.setError(404, `Cannot find oauth2token with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauth2token', objOauth2token);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauth2tokensCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objOauth2token = await oauth2tokenService.findOneByName(name, req.query);
        if (!objOauth2token) {
            util.setError(404, `Cannot find oauth2token with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauth2token', objOauth2token);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauth2tokensCtrl.findOneByTokenType = async (req, res) => {
    try {
        const { tokenType } = req.params;
        const objOauth2token = await oauth2tokenService.findOneByTokenType(tokenType, req.query);
        if (!objOauth2token) {
            util.setError(404, `Cannot find oauth2token with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauth2token', objOauth2token);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauth2tokensCtrl.findOneByAccessToken = async (req, res) => {
    try {
        const { accessToken } = req.params;
        const objOauth2token = await oauth2tokenService.findOneByAccessToken(accessToken, req.query);
        if (!objOauth2token) {
            util.setError(404, `Cannot find oauth2token with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauth2token', objOauth2token);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauth2tokensCtrl.findOneByRefreshToken = async (req, res) => {
    try {
        const { refreshToken } = req.params;
        const objOauth2token = await oauth2tokenService.findOneByRefreshToken(refreshToken, req.query);
        if (!objOauth2token) {
            util.setError(404, `Cannot find oauth2token with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauth2token', objOauth2token);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauth2tokensCtrl.findOneByGrantType = async (req, res) => {
    try {
        const { grantType } = req.params;
        const objOauth2token = await oauth2tokenService.findOneByGrantType(grantType, req.query);
        if (!objOauth2token) {
            util.setError(404, `Cannot find oauth2token with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauth2token', objOauth2token);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauth2tokensCtrl.findOneByState = async (req, res) => {
    try {
        const { state } = req.params;
        const objOauth2token = await oauth2tokenService.findOneByState(state, req.query);
        if (!objOauth2token) {
            util.setError(404, `Cannot find oauth2token with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauth2token', objOauth2token);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauth2tokensCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objOauth2token = await oauth2tokenService.findOneByDescription(description, req.query);
        if (!objOauth2token) {
            util.setError(404, `Cannot find oauth2token with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauth2token', objOauth2token);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauth2tokensCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objOauth2token = await oauth2tokenService.findOneByDateEntered(dateEntered, req.query);
        if (!objOauth2token) {
            util.setError(404, `Cannot find oauth2token with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauth2token', objOauth2token);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauth2tokensCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objOauth2token = await oauth2tokenService.findOneByDateModified(dateModified, req.query);
        if (!objOauth2token) {
            util.setError(404, `Cannot find oauth2token with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauth2token', objOauth2token);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauth2tokensCtrl.findOneByAccessTokenExpires = async (req, res) => {
    try {
        const { accessTokenExpires } = req.params;
        const objOauth2token = await oauth2tokenService.findOneByAccessTokenExpires(accessTokenExpires, req.query);
        if (!objOauth2token) {
            util.setError(404, `Cannot find oauth2token with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauth2token', objOauth2token);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauth2tokensCtrl.findOneByRefreshTokenExpires = async (req, res) => {
    try {
        const { refreshTokenExpires } = req.params;
        const objOauth2token = await oauth2tokenService.findOneByRefreshTokenExpires(refreshTokenExpires, req.query);
        if (!objOauth2token) {
            util.setError(404, `Cannot find oauth2token with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauth2token', objOauth2token);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauth2tokensCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objOauth2token = await oauth2tokenService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objOauth2token) {
            util.setError(404, `Cannot find oauth2token with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauth2token', objOauth2token);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauth2tokensCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objOauth2token = await oauth2tokenService.findOneByCreatedBy(createdBy, req.query);
        if (!objOauth2token) {
            util.setError(404, `Cannot find oauth2token with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauth2token', objOauth2token);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauth2tokensCtrl.findOneByClient = async (req, res) => {
    try {
        const { client } = req.params;
        const objOauth2token = await oauth2tokenService.findOneByClient(client, req.query);
        if (!objOauth2token) {
            util.setError(404, `Cannot find oauth2token with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauth2token', objOauth2token);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauth2tokensCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objOauth2token = await oauth2tokenService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objOauth2token) {
            util.setError(404, `Cannot find oauth2token with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauth2token', objOauth2token);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



oauth2tokensCtrl.updateOauth2tokenById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauth2token = await oauth2tokenService.updateOauth2tokenById(id, req.body);
            if (!objOauth2token) {
                util.setError(404, `Cannot find oauth2token with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Oauth2token updated', objOauth2token);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauth2tokensCtrl.updateOauth2tokenByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauth2token = await oauth2tokenService.updateOauth2tokenByDeleted(deleted, req.body);
            if (!objOauth2token) {
                util.setError(404, `Cannot find oauth2token with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Oauth2token updated', objOauth2token);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauth2tokensCtrl.updateOauth2tokenByTokenIsRevoked = async (req, res) => {
     const { tokenIsRevoked } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauth2token = await oauth2tokenService.updateOauth2tokenByTokenIsRevoked(tokenIsRevoked, req.body);
            if (!objOauth2token) {
                util.setError(404, `Cannot find oauth2token with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Oauth2token updated', objOauth2token);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauth2tokensCtrl.updateOauth2tokenByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauth2token = await oauth2tokenService.updateOauth2tokenByName(name, req.body);
            if (!objOauth2token) {
                util.setError(404, `Cannot find oauth2token with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Oauth2token updated', objOauth2token);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauth2tokensCtrl.updateOauth2tokenByTokenType = async (req, res) => {
     const { tokenType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauth2token = await oauth2tokenService.updateOauth2tokenByTokenType(tokenType, req.body);
            if (!objOauth2token) {
                util.setError(404, `Cannot find oauth2token with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Oauth2token updated', objOauth2token);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauth2tokensCtrl.updateOauth2tokenByAccessToken = async (req, res) => {
     const { accessToken } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauth2token = await oauth2tokenService.updateOauth2tokenByAccessToken(accessToken, req.body);
            if (!objOauth2token) {
                util.setError(404, `Cannot find oauth2token with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Oauth2token updated', objOauth2token);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauth2tokensCtrl.updateOauth2tokenByRefreshToken = async (req, res) => {
     const { refreshToken } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauth2token = await oauth2tokenService.updateOauth2tokenByRefreshToken(refreshToken, req.body);
            if (!objOauth2token) {
                util.setError(404, `Cannot find oauth2token with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Oauth2token updated', objOauth2token);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauth2tokensCtrl.updateOauth2tokenByGrantType = async (req, res) => {
     const { grantType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauth2token = await oauth2tokenService.updateOauth2tokenByGrantType(grantType, req.body);
            if (!objOauth2token) {
                util.setError(404, `Cannot find oauth2token with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Oauth2token updated', objOauth2token);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauth2tokensCtrl.updateOauth2tokenByState = async (req, res) => {
     const { state } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauth2token = await oauth2tokenService.updateOauth2tokenByState(state, req.body);
            if (!objOauth2token) {
                util.setError(404, `Cannot find oauth2token with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Oauth2token updated', objOauth2token);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauth2tokensCtrl.updateOauth2tokenByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauth2token = await oauth2tokenService.updateOauth2tokenByDescription(description, req.body);
            if (!objOauth2token) {
                util.setError(404, `Cannot find oauth2token with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Oauth2token updated', objOauth2token);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauth2tokensCtrl.updateOauth2tokenByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauth2token = await oauth2tokenService.updateOauth2tokenByDateEntered(dateEntered, req.body);
            if (!objOauth2token) {
                util.setError(404, `Cannot find oauth2token with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Oauth2token updated', objOauth2token);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauth2tokensCtrl.updateOauth2tokenByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauth2token = await oauth2tokenService.updateOauth2tokenByDateModified(dateModified, req.body);
            if (!objOauth2token) {
                util.setError(404, `Cannot find oauth2token with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Oauth2token updated', objOauth2token);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauth2tokensCtrl.updateOauth2tokenByAccessTokenExpires = async (req, res) => {
     const { accessTokenExpires } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauth2token = await oauth2tokenService.updateOauth2tokenByAccessTokenExpires(accessTokenExpires, req.body);
            if (!objOauth2token) {
                util.setError(404, `Cannot find oauth2token with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Oauth2token updated', objOauth2token);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauth2tokensCtrl.updateOauth2tokenByRefreshTokenExpires = async (req, res) => {
     const { refreshTokenExpires } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauth2token = await oauth2tokenService.updateOauth2tokenByRefreshTokenExpires(refreshTokenExpires, req.body);
            if (!objOauth2token) {
                util.setError(404, `Cannot find oauth2token with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Oauth2token updated', objOauth2token);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauth2tokensCtrl.updateOauth2tokenByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauth2token = await oauth2tokenService.updateOauth2tokenByModifiedUserId(modifiedUserId, req.body);
            if (!objOauth2token) {
                util.setError(404, `Cannot find oauth2token with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Oauth2token updated', objOauth2token);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauth2tokensCtrl.updateOauth2tokenByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauth2token = await oauth2tokenService.updateOauth2tokenByCreatedBy(createdBy, req.body);
            if (!objOauth2token) {
                util.setError(404, `Cannot find oauth2token with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Oauth2token updated', objOauth2token);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauth2tokensCtrl.updateOauth2tokenByClient = async (req, res) => {
     const { client } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauth2token = await oauth2tokenService.updateOauth2tokenByClient(client, req.body);
            if (!objOauth2token) {
                util.setError(404, `Cannot find oauth2token with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Oauth2token updated', objOauth2token);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauth2tokensCtrl.updateOauth2tokenByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauth2token = await oauth2tokenService.updateOauth2tokenByAssignedUserId(assignedUserId, req.body);
            if (!objOauth2token) {
                util.setError(404, `Cannot find oauth2token with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Oauth2token updated', objOauth2token);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = oauth2tokensCtrl;
//</es-section>
