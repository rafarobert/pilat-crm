/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:37:56 GMT-0400 (Bolivia Time)
 * Time: 18:37:56
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:37:56 GMT-0400 (Bolivia Time)
 * Last time updated: 18:37:56
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const oauth2clientService = require('../services/oauth2clients.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const oauth2clientsCtrl = {};
oauth2clientsCtrl.service = oauth2clientService;


oauth2clientsCtrl.getAllOauth2clients = async (req, res) => {
    try {
        const objOauth2clients = await oauth2clientService.getAllOauth2clients(req.query);
        if (objOauth2clients.length > 0) {
            util.setSuccess(200, 'Oauth2clients retrieved', objOauth2clients);
        } else {
            util.setSuccess(200, 'No oauth2client found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauth2clientsCtrl.getAOauth2client = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objOauth2client = await oauth2clientService.getAOauth2client(id, req.query);
        if (!objOauth2client) {
            util.setError(404, `Cannot find oauth2client with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found oauth2client', objOauth2client);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauth2clientsCtrl.addOauth2client = async (req, res) => {
    try {
        const objOauth2client = await oauth2clientService.addOauth2client(req.body);
        util.setSuccess(201, 'Oauth2client Added!', objOauth2client);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauth2clientsCtrl.updateOauth2client = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objOauth2client = await oauth2clientService.updateOauth2client(id, req.body);
        if (!objOauth2client) {
            util.setError(404, `Cannot find oauth2client with the id: ${id}`);
        } else {
            util.setSuccess(200, 'Oauth2client updated', objOauth2client);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

oauth2clientsCtrl.deleteOauth2client = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objOauth2client = await oauth2clientService.deleteOauth2client(id);
        if (objOauth2client) {
            util.setSuccess(200, 'Oauth2client deleted', objOauth2client);
        } else {
            util.setError(404, `Oauth2client with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



oauth2clientsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objOauth2client = await oauth2clientService.findOneById(id, req.query);
        if (!objOauth2client) {
            util.setError(404, `Cannot find oauth2client with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauth2client', objOauth2client);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauth2clientsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objOauth2client = await oauth2clientService.findOneByDeleted(deleted, req.query);
        if (!objOauth2client) {
            util.setError(404, `Cannot find oauth2client with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauth2client', objOauth2client);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauth2clientsCtrl.findOneByIsConfidential = async (req, res) => {
    try {
        const { isConfidential } = req.params;
        const objOauth2client = await oauth2clientService.findOneByIsConfidential(isConfidential, req.query);
        if (!objOauth2client) {
            util.setError(404, `Cannot find oauth2client with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauth2client', objOauth2client);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauth2clientsCtrl.findOneByDurationValue = async (req, res) => {
    try {
        const { durationValue } = req.params;
        const objOauth2client = await oauth2clientService.findOneByDurationValue(durationValue, req.query);
        if (!objOauth2client) {
            util.setError(404, `Cannot find oauth2client with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauth2client', objOauth2client);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauth2clientsCtrl.findOneByDurationAmount = async (req, res) => {
    try {
        const { durationAmount } = req.params;
        const objOauth2client = await oauth2clientService.findOneByDurationAmount(durationAmount, req.query);
        if (!objOauth2client) {
            util.setError(404, `Cannot find oauth2client with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauth2client', objOauth2client);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauth2clientsCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objOauth2client = await oauth2clientService.findOneByName(name, req.query);
        if (!objOauth2client) {
            util.setError(404, `Cannot find oauth2client with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauth2client', objOauth2client);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauth2clientsCtrl.findOneBySecret = async (req, res) => {
    try {
        const { secret } = req.params;
        const objOauth2client = await oauth2clientService.findOneBySecret(secret, req.query);
        if (!objOauth2client) {
            util.setError(404, `Cannot find oauth2client with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauth2client', objOauth2client);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauth2clientsCtrl.findOneByRedirectUrl = async (req, res) => {
    try {
        const { redirectUrl } = req.params;
        const objOauth2client = await oauth2clientService.findOneByRedirectUrl(redirectUrl, req.query);
        if (!objOauth2client) {
            util.setError(404, `Cannot find oauth2client with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauth2client', objOauth2client);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauth2clientsCtrl.findOneByAllowedGrantType = async (req, res) => {
    try {
        const { allowedGrantType } = req.params;
        const objOauth2client = await oauth2clientService.findOneByAllowedGrantType(allowedGrantType, req.query);
        if (!objOauth2client) {
            util.setError(404, `Cannot find oauth2client with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauth2client', objOauth2client);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauth2clientsCtrl.findOneByDurationUnit = async (req, res) => {
    try {
        const { durationUnit } = req.params;
        const objOauth2client = await oauth2clientService.findOneByDurationUnit(durationUnit, req.query);
        if (!objOauth2client) {
            util.setError(404, `Cannot find oauth2client with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauth2client', objOauth2client);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauth2clientsCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objOauth2client = await oauth2clientService.findOneByDescription(description, req.query);
        if (!objOauth2client) {
            util.setError(404, `Cannot find oauth2client with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauth2client', objOauth2client);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauth2clientsCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objOauth2client = await oauth2clientService.findOneByDateEntered(dateEntered, req.query);
        if (!objOauth2client) {
            util.setError(404, `Cannot find oauth2client with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauth2client', objOauth2client);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauth2clientsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objOauth2client = await oauth2clientService.findOneByDateModified(dateModified, req.query);
        if (!objOauth2client) {
            util.setError(404, `Cannot find oauth2client with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauth2client', objOauth2client);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauth2clientsCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objOauth2client = await oauth2clientService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objOauth2client) {
            util.setError(404, `Cannot find oauth2client with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauth2client', objOauth2client);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauth2clientsCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objOauth2client = await oauth2clientService.findOneByCreatedBy(createdBy, req.query);
        if (!objOauth2client) {
            util.setError(404, `Cannot find oauth2client with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauth2client', objOauth2client);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauth2clientsCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objOauth2client = await oauth2clientService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objOauth2client) {
            util.setError(404, `Cannot find oauth2client with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauth2client', objOauth2client);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



oauth2clientsCtrl.updateOauth2clientById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauth2client = await oauth2clientService.updateOauth2clientById(id, req.body);
            if (!objOauth2client) {
                util.setError(404, `Cannot find oauth2client with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Oauth2client updated', objOauth2client);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauth2clientsCtrl.updateOauth2clientByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauth2client = await oauth2clientService.updateOauth2clientByDeleted(deleted, req.body);
            if (!objOauth2client) {
                util.setError(404, `Cannot find oauth2client with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Oauth2client updated', objOauth2client);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauth2clientsCtrl.updateOauth2clientByIsConfidential = async (req, res) => {
     const { isConfidential } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauth2client = await oauth2clientService.updateOauth2clientByIsConfidential(isConfidential, req.body);
            if (!objOauth2client) {
                util.setError(404, `Cannot find oauth2client with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Oauth2client updated', objOauth2client);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauth2clientsCtrl.updateOauth2clientByDurationValue = async (req, res) => {
     const { durationValue } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauth2client = await oauth2clientService.updateOauth2clientByDurationValue(durationValue, req.body);
            if (!objOauth2client) {
                util.setError(404, `Cannot find oauth2client with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Oauth2client updated', objOauth2client);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauth2clientsCtrl.updateOauth2clientByDurationAmount = async (req, res) => {
     const { durationAmount } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauth2client = await oauth2clientService.updateOauth2clientByDurationAmount(durationAmount, req.body);
            if (!objOauth2client) {
                util.setError(404, `Cannot find oauth2client with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Oauth2client updated', objOauth2client);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauth2clientsCtrl.updateOauth2clientByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauth2client = await oauth2clientService.updateOauth2clientByName(name, req.body);
            if (!objOauth2client) {
                util.setError(404, `Cannot find oauth2client with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Oauth2client updated', objOauth2client);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauth2clientsCtrl.updateOauth2clientBySecret = async (req, res) => {
     const { secret } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauth2client = await oauth2clientService.updateOauth2clientBySecret(secret, req.body);
            if (!objOauth2client) {
                util.setError(404, `Cannot find oauth2client with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Oauth2client updated', objOauth2client);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauth2clientsCtrl.updateOauth2clientByRedirectUrl = async (req, res) => {
     const { redirectUrl } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauth2client = await oauth2clientService.updateOauth2clientByRedirectUrl(redirectUrl, req.body);
            if (!objOauth2client) {
                util.setError(404, `Cannot find oauth2client with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Oauth2client updated', objOauth2client);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauth2clientsCtrl.updateOauth2clientByAllowedGrantType = async (req, res) => {
     const { allowedGrantType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauth2client = await oauth2clientService.updateOauth2clientByAllowedGrantType(allowedGrantType, req.body);
            if (!objOauth2client) {
                util.setError(404, `Cannot find oauth2client with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Oauth2client updated', objOauth2client);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauth2clientsCtrl.updateOauth2clientByDurationUnit = async (req, res) => {
     const { durationUnit } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauth2client = await oauth2clientService.updateOauth2clientByDurationUnit(durationUnit, req.body);
            if (!objOauth2client) {
                util.setError(404, `Cannot find oauth2client with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Oauth2client updated', objOauth2client);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauth2clientsCtrl.updateOauth2clientByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauth2client = await oauth2clientService.updateOauth2clientByDescription(description, req.body);
            if (!objOauth2client) {
                util.setError(404, `Cannot find oauth2client with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Oauth2client updated', objOauth2client);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauth2clientsCtrl.updateOauth2clientByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauth2client = await oauth2clientService.updateOauth2clientByDateEntered(dateEntered, req.body);
            if (!objOauth2client) {
                util.setError(404, `Cannot find oauth2client with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Oauth2client updated', objOauth2client);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauth2clientsCtrl.updateOauth2clientByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauth2client = await oauth2clientService.updateOauth2clientByDateModified(dateModified, req.body);
            if (!objOauth2client) {
                util.setError(404, `Cannot find oauth2client with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Oauth2client updated', objOauth2client);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauth2clientsCtrl.updateOauth2clientByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauth2client = await oauth2clientService.updateOauth2clientByModifiedUserId(modifiedUserId, req.body);
            if (!objOauth2client) {
                util.setError(404, `Cannot find oauth2client with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Oauth2client updated', objOauth2client);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauth2clientsCtrl.updateOauth2clientByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauth2client = await oauth2clientService.updateOauth2clientByCreatedBy(createdBy, req.body);
            if (!objOauth2client) {
                util.setError(404, `Cannot find oauth2client with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Oauth2client updated', objOauth2client);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauth2clientsCtrl.updateOauth2clientByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauth2client = await oauth2clientService.updateOauth2clientByAssignedUserId(assignedUserId, req.body);
            if (!objOauth2client) {
                util.setError(404, `Cannot find oauth2client with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Oauth2client updated', objOauth2client);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = oauth2clientsCtrl;
//</es-section>
