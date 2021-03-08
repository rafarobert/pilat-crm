/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:33 GMT-0400 (Bolivia Time)
 * Time: 15:36:33
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:33 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:33
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const meetingUserService = require('../services/meetings_users.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const meetingsUsersCtrl = {};
meetingsUsersCtrl.service = meetingUserService;


meetingsUsersCtrl.getAllMeetingsUsers = async (req, res) => {
    try {
        const objMeetingsUsers = await meetingUserService.getAllMeetingsUsers(req.query);
        if (objMeetingsUsers.length > 0) {
            util.setSuccess(200, 'MeetingsUsers retrieved', objMeetingsUsers);
        } else {
            util.setSuccess(200, 'No meetingUser found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsUsersCtrl.getAMeetingUser = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objMeetingUser = await meetingUserService.getAMeetingUser(id, req.query);
        if (!objMeetingUser) {
            util.setError(404, `Cannot find meetingUser with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found meetingUser', objMeetingUser);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsUsersCtrl.addMeetingUser = async (req, res) => {
    try {
        const objMeetingUser = await meetingUserService.addMeetingUser(req.body);
        util.setSuccess(201, 'MeetingUser Added!', objMeetingUser);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsUsersCtrl.updateMeetingUser = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objMeetingUser = await meetingUserService.updateMeetingUser(id, req.body);
        if (!objMeetingUser) {
            util.setError(404, `Cannot find meetingUser with the id: ${id}`);
        } else {
            util.setSuccess(200, 'MeetingUser updated', objMeetingUser);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

meetingsUsersCtrl.deleteMeetingUser = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objMeetingUser = await meetingUserService.deleteMeetingUser(id);
        if (objMeetingUser) {
            util.setSuccess(200, 'MeetingUser deleted', objMeetingUser);
        } else {
            util.setError(404, `MeetingUser with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



meetingsUsersCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objMeetingUser = await meetingUserService.findOneById(id, req.query);
        if (!objMeetingUser) {
            util.setError(404, `Cannot find meetingUser with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meetingUser', objMeetingUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsUsersCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objMeetingUser = await meetingUserService.findOneByDeleted(deleted, req.query);
        if (!objMeetingUser) {
            util.setError(404, `Cannot find meetingUser with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meetingUser', objMeetingUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsUsersCtrl.findOneByMeetingId = async (req, res) => {
    try {
        const { meetingId } = req.params;
        const objMeetingUser = await meetingUserService.findOneByMeetingId(meetingId, req.query);
        if (!objMeetingUser) {
            util.setError(404, `Cannot find meetingUser with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meetingUser', objMeetingUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsUsersCtrl.findOneByUserId = async (req, res) => {
    try {
        const { userId } = req.params;
        const objMeetingUser = await meetingUserService.findOneByUserId(userId, req.query);
        if (!objMeetingUser) {
            util.setError(404, `Cannot find meetingUser with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meetingUser', objMeetingUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsUsersCtrl.findOneByRequired = async (req, res) => {
    try {
        const { required } = req.params;
        const objMeetingUser = await meetingUserService.findOneByRequired(required, req.query);
        if (!objMeetingUser) {
            util.setError(404, `Cannot find meetingUser with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meetingUser', objMeetingUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsUsersCtrl.findOneByAcceptStatus = async (req, res) => {
    try {
        const { acceptStatus } = req.params;
        const objMeetingUser = await meetingUserService.findOneByAcceptStatus(acceptStatus, req.query);
        if (!objMeetingUser) {
            util.setError(404, `Cannot find meetingUser with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meetingUser', objMeetingUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsUsersCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objMeetingUser = await meetingUserService.findOneByDateModified(dateModified, req.query);
        if (!objMeetingUser) {
            util.setError(404, `Cannot find meetingUser with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meetingUser', objMeetingUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



meetingsUsersCtrl.updateMeetingUserById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objMeetingUser = await meetingUserService.updateMeetingUserById(id, req.body);
            if (!objMeetingUser) {
                util.setError(404, `Cannot find meetingUser with the id: ${id}`);
            } else {
                util.setSuccess(200, 'MeetingUser updated', objMeetingUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsUsersCtrl.updateMeetingUserByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objMeetingUser = await meetingUserService.updateMeetingUserByDeleted(deleted, req.body);
            if (!objMeetingUser) {
                util.setError(404, `Cannot find meetingUser with the id: ${id}`);
            } else {
                util.setSuccess(200, 'MeetingUser updated', objMeetingUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsUsersCtrl.updateMeetingUserByMeetingId = async (req, res) => {
     const { meetingId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objMeetingUser = await meetingUserService.updateMeetingUserByMeetingId(meetingId, req.body);
            if (!objMeetingUser) {
                util.setError(404, `Cannot find meetingUser with the id: ${id}`);
            } else {
                util.setSuccess(200, 'MeetingUser updated', objMeetingUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsUsersCtrl.updateMeetingUserByUserId = async (req, res) => {
     const { userId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objMeetingUser = await meetingUserService.updateMeetingUserByUserId(userId, req.body);
            if (!objMeetingUser) {
                util.setError(404, `Cannot find meetingUser with the id: ${id}`);
            } else {
                util.setSuccess(200, 'MeetingUser updated', objMeetingUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsUsersCtrl.updateMeetingUserByRequired = async (req, res) => {
     const { required } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objMeetingUser = await meetingUserService.updateMeetingUserByRequired(required, req.body);
            if (!objMeetingUser) {
                util.setError(404, `Cannot find meetingUser with the id: ${id}`);
            } else {
                util.setSuccess(200, 'MeetingUser updated', objMeetingUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsUsersCtrl.updateMeetingUserByAcceptStatus = async (req, res) => {
     const { acceptStatus } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objMeetingUser = await meetingUserService.updateMeetingUserByAcceptStatus(acceptStatus, req.body);
            if (!objMeetingUser) {
                util.setError(404, `Cannot find meetingUser with the id: ${id}`);
            } else {
                util.setSuccess(200, 'MeetingUser updated', objMeetingUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsUsersCtrl.updateMeetingUserByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objMeetingUser = await meetingUserService.updateMeetingUserByDateModified(dateModified, req.body);
            if (!objMeetingUser) {
                util.setError(404, `Cannot find meetingUser with the id: ${id}`);
            } else {
                util.setSuccess(200, 'MeetingUser updated', objMeetingUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = meetingsUsersCtrl;
//</es-section>
