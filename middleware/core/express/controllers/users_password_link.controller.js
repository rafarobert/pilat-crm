/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:44:24 GMT-0400 (Bolivia Time)
 * Time: 4:44:24
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:44:24 GMT-0400 (Bolivia Time)
 * Last time updated: 4:44:24
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const userPasswordLinkService = require('../services/users_password_link.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const usersPasswordLinkCtrl = {};
usersPasswordLinkCtrl.service = userPasswordLinkService;


usersPasswordLinkCtrl.getAllUsersPasswordLink = async (req, res) => {
    try {
        const objUsersPasswordLink = await userPasswordLinkService.getAllUsersPasswordLink(req.query);
        if (objUsersPasswordLink.length > 0) {
            util.setSuccess(200, 'UsersPasswordLink retrieved', objUsersPasswordLink);
        } else {
            util.setSuccess(200, 'No userPasswordLink found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersPasswordLinkCtrl.getAUserPasswordLink = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objUserPasswordLink = await userPasswordLinkService.getAUserPasswordLink(id, req.query);
        if (!objUserPasswordLink) {
            util.setError(404, `Cannot find userPasswordLink with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found userPasswordLink', objUserPasswordLink);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersPasswordLinkCtrl.addUserPasswordLink = async (req, res) => {
    try {
        const objUserPasswordLink = await userPasswordLinkService.addUserPasswordLink(req.body);
        util.setSuccess(201, 'UserPasswordLink Added!', objUserPasswordLink);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersPasswordLinkCtrl.updateUserPasswordLink = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objUserPasswordLink = await userPasswordLinkService.updateUserPasswordLink(id, req.body);
        if (!objUserPasswordLink) {
            util.setError(404, `Cannot find userPasswordLink with the id: ${id}`);
        } else {
            util.setSuccess(200, 'UserPasswordLink updated', objUserPasswordLink);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

usersPasswordLinkCtrl.deleteUserPasswordLink = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objUserPasswordLink = await userPasswordLinkService.deleteUserPasswordLink(id);
        if (objUserPasswordLink) {
            util.setSuccess(200, 'UserPasswordLink deleted', objUserPasswordLink);
        } else {
            util.setError(404, `UserPasswordLink with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



usersPasswordLinkCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objUserPasswordLink = await userPasswordLinkService.findOneById(id, req.query);
        if (!objUserPasswordLink) {
            util.setError(404, `Cannot find userPasswordLink with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found userPasswordLink', objUserPasswordLink);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersPasswordLinkCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objUserPasswordLink = await userPasswordLinkService.findOneByDeleted(deleted, req.query);
        if (!objUserPasswordLink) {
            util.setError(404, `Cannot find userPasswordLink with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found userPasswordLink', objUserPasswordLink);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersPasswordLinkCtrl.findOneByUsername = async (req, res) => {
    try {
        const { username } = req.params;
        const objUserPasswordLink = await userPasswordLinkService.findOneByUsername(username, req.query);
        if (!objUserPasswordLink) {
            util.setError(404, `Cannot find userPasswordLink with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found userPasswordLink', objUserPasswordLink);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersPasswordLinkCtrl.findOneByDateGenerated = async (req, res) => {
    try {
        const { dateGenerated } = req.params;
        const objUserPasswordLink = await userPasswordLinkService.findOneByDateGenerated(dateGenerated, req.query);
        if (!objUserPasswordLink) {
            util.setError(404, `Cannot find userPasswordLink with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found userPasswordLink', objUserPasswordLink);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



usersPasswordLinkCtrl.updateUserPasswordLinkById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUserPasswordLink = await userPasswordLinkService.updateUserPasswordLinkById(id, req.body);
            if (!objUserPasswordLink) {
                util.setError(404, `Cannot find userPasswordLink with the id: ${id}`);
            } else {
                util.setSuccess(200, 'UserPasswordLink updated', objUserPasswordLink);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersPasswordLinkCtrl.updateUserPasswordLinkByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUserPasswordLink = await userPasswordLinkService.updateUserPasswordLinkByDeleted(deleted, req.body);
            if (!objUserPasswordLink) {
                util.setError(404, `Cannot find userPasswordLink with the id: ${id}`);
            } else {
                util.setSuccess(200, 'UserPasswordLink updated', objUserPasswordLink);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersPasswordLinkCtrl.updateUserPasswordLinkByUsername = async (req, res) => {
     const { username } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUserPasswordLink = await userPasswordLinkService.updateUserPasswordLinkByUsername(username, req.body);
            if (!objUserPasswordLink) {
                util.setError(404, `Cannot find userPasswordLink with the id: ${id}`);
            } else {
                util.setSuccess(200, 'UserPasswordLink updated', objUserPasswordLink);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersPasswordLinkCtrl.updateUserPasswordLinkByDateGenerated = async (req, res) => {
     const { dateGenerated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUserPasswordLink = await userPasswordLinkService.updateUserPasswordLinkByDateGenerated(dateGenerated, req.body);
            if (!objUserPasswordLink) {
                util.setError(404, `Cannot find userPasswordLink with the id: ${id}`);
            } else {
                util.setSuccess(200, 'UserPasswordLink updated', objUserPasswordLink);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = usersPasswordLinkCtrl;
//</es-section>
