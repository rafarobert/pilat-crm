/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:42:36 GMT-0400 (Bolivia Time)
 * Time: 4:42:36
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:42:36 GMT-0400 (Bolivia Time)
 * Last time updated: 4:42:36
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const callUserService = require('../services/calls_users.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const callsUsersCtrl = {};
callsUsersCtrl.service = callUserService;


callsUsersCtrl.getAllCallsUsers = async (req, res) => {
    try {
        const objCallsUsers = await callUserService.getAllCallsUsers(req.query);
        if (objCallsUsers.length > 0) {
            util.setSuccess(200, 'CallsUsers retrieved', objCallsUsers);
        } else {
            util.setSuccess(200, 'No callUser found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsUsersCtrl.getACallUser = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objCallUser = await callUserService.getACallUser(id, req.query);
        if (!objCallUser) {
            util.setError(404, `Cannot find callUser with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found callUser', objCallUser);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsUsersCtrl.addCallUser = async (req, res) => {
    try {
        const objCallUser = await callUserService.addCallUser(req.body);
        util.setSuccess(201, 'CallUser Added!', objCallUser);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsUsersCtrl.updateCallUser = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objCallUser = await callUserService.updateCallUser(id, req.body);
        if (!objCallUser) {
            util.setError(404, `Cannot find callUser with the id: ${id}`);
        } else {
            util.setSuccess(200, 'CallUser updated', objCallUser);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

callsUsersCtrl.deleteCallUser = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objCallUser = await callUserService.deleteCallUser(id);
        if (objCallUser) {
            util.setSuccess(200, 'CallUser deleted', objCallUser);
        } else {
            util.setError(404, `CallUser with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



callsUsersCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objCallUser = await callUserService.findOneById(id, req.query);
        if (!objCallUser) {
            util.setError(404, `Cannot find callUser with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callUser', objCallUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsUsersCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objCallUser = await callUserService.findOneByDeleted(deleted, req.query);
        if (!objCallUser) {
            util.setError(404, `Cannot find callUser with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callUser', objCallUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsUsersCtrl.findOneByCallId = async (req, res) => {
    try {
        const { callId } = req.params;
        const objCallUser = await callUserService.findOneByCallId(callId, req.query);
        if (!objCallUser) {
            util.setError(404, `Cannot find callUser with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callUser', objCallUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsUsersCtrl.findOneByUserId = async (req, res) => {
    try {
        const { userId } = req.params;
        const objCallUser = await callUserService.findOneByUserId(userId, req.query);
        if (!objCallUser) {
            util.setError(404, `Cannot find callUser with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callUser', objCallUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsUsersCtrl.findOneByRequired = async (req, res) => {
    try {
        const { required } = req.params;
        const objCallUser = await callUserService.findOneByRequired(required, req.query);
        if (!objCallUser) {
            util.setError(404, `Cannot find callUser with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callUser', objCallUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsUsersCtrl.findOneByAcceptStatus = async (req, res) => {
    try {
        const { acceptStatus } = req.params;
        const objCallUser = await callUserService.findOneByAcceptStatus(acceptStatus, req.query);
        if (!objCallUser) {
            util.setError(404, `Cannot find callUser with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callUser', objCallUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsUsersCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objCallUser = await callUserService.findOneByDateModified(dateModified, req.query);
        if (!objCallUser) {
            util.setError(404, `Cannot find callUser with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callUser', objCallUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



callsUsersCtrl.updateCallUserById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objCallUser = await callUserService.updateCallUserById(id, req.body);
            if (!objCallUser) {
                util.setError(404, `Cannot find callUser with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CallUser updated', objCallUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsUsersCtrl.updateCallUserByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objCallUser = await callUserService.updateCallUserByDeleted(deleted, req.body);
            if (!objCallUser) {
                util.setError(404, `Cannot find callUser with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CallUser updated', objCallUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsUsersCtrl.updateCallUserByCallId = async (req, res) => {
     const { callId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objCallUser = await callUserService.updateCallUserByCallId(callId, req.body);
            if (!objCallUser) {
                util.setError(404, `Cannot find callUser with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CallUser updated', objCallUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsUsersCtrl.updateCallUserByUserId = async (req, res) => {
     const { userId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objCallUser = await callUserService.updateCallUserByUserId(userId, req.body);
            if (!objCallUser) {
                util.setError(404, `Cannot find callUser with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CallUser updated', objCallUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsUsersCtrl.updateCallUserByRequired = async (req, res) => {
     const { required } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objCallUser = await callUserService.updateCallUserByRequired(required, req.body);
            if (!objCallUser) {
                util.setError(404, `Cannot find callUser with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CallUser updated', objCallUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsUsersCtrl.updateCallUserByAcceptStatus = async (req, res) => {
     const { acceptStatus } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objCallUser = await callUserService.updateCallUserByAcceptStatus(acceptStatus, req.body);
            if (!objCallUser) {
                util.setError(404, `Cannot find callUser with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CallUser updated', objCallUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsUsersCtrl.updateCallUserByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objCallUser = await callUserService.updateCallUserByDateModified(dateModified, req.body);
            if (!objCallUser) {
                util.setError(404, `Cannot find callUser with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CallUser updated', objCallUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = callsUsersCtrl;
//</es-section>
