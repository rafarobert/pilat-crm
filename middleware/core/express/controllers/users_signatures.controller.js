/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:55 GMT-0400 (Bolivia Time)
 * Time: 14:57:55
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:55 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:55
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const userSignatureService = require('../services/users_signatures.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const usersSignaturesCtrl = {};
usersSignaturesCtrl.service = userSignatureService;


usersSignaturesCtrl.getAllUsersSignatures = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.usersSignatures.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objUsersSignatures = await userSignatureService.getAllUsersSignatures(req.query);
        if (objUsersSignatures && objUsersSignatures.rows && objUsersSignatures.count) {
            util.setSuccess(200, 'UsersSignatures retrieved', objUsersSignatures.rows, objUsersSignatures.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No userSignature found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersSignaturesCtrl.getAUserSignature = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objUserSignature = await userSignatureService.getAUserSignature(id, req.query);
        if (!objUserSignature) {
            util.setError(404, `Cannot find userSignature with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found userSignature', objUserSignature);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersSignaturesCtrl.addUserSignature = async (req, res) => {
    try {
        const objUserSignature = await userSignatureService.addUserSignature(req.body);
        util.setSuccess(201, 'UserSignature Added!', objUserSignature);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersSignaturesCtrl.updateUserSignature = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objUserSignature = await userSignatureService.updateUserSignature(id, req.body);
        if (!objUserSignature) {
            util.setError(404, `Cannot find userSignature with the id: ${id}`);
        } else {
            util.setSuccess(200, 'UserSignature updated', objUserSignature);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

usersSignaturesCtrl.deleteUserSignature = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objUserSignature = await userSignatureService.deleteUserSignature(id);
        if (objUserSignature) {
            util.setSuccess(200, 'UserSignature deleted', objUserSignature);
        } else {
            util.setError(404, `UserSignature with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



usersSignaturesCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objUserSignature = await userSignatureService.findOneById(id, req.query);
        if (!objUserSignature) {
            util.setError(404, `Cannot find userSignature with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found userSignature', objUserSignature);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersSignaturesCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objUserSignature = await userSignatureService.findOneByDeleted(deleted, req.query);
        if (!objUserSignature) {
            util.setError(404, `Cannot find userSignature with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found userSignature', objUserSignature);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersSignaturesCtrl.findOneByUserId = async (req, res) => {
    try {
        const { userId } = req.params;
        const objUserSignature = await userSignatureService.findOneByUserId(userId, req.query);
        if (!objUserSignature) {
            util.setError(404, `Cannot find userSignature with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found userSignature', objUserSignature);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersSignaturesCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objUserSignature = await userSignatureService.findOneByName(name, req.query);
        if (!objUserSignature) {
            util.setError(404, `Cannot find userSignature with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found userSignature', objUserSignature);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersSignaturesCtrl.findOneBySignature = async (req, res) => {
    try {
        const { signature } = req.params;
        const objUserSignature = await userSignatureService.findOneBySignature(signature, req.query);
        if (!objUserSignature) {
            util.setError(404, `Cannot find userSignature with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found userSignature', objUserSignature);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersSignaturesCtrl.findOneBySignatureHtml = async (req, res) => {
    try {
        const { signatureHtml } = req.params;
        const objUserSignature = await userSignatureService.findOneBySignatureHtml(signatureHtml, req.query);
        if (!objUserSignature) {
            util.setError(404, `Cannot find userSignature with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found userSignature', objUserSignature);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersSignaturesCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objUserSignature = await userSignatureService.findOneByDateEntered(dateEntered, req.query);
        if (!objUserSignature) {
            util.setError(404, `Cannot find userSignature with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found userSignature', objUserSignature);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersSignaturesCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objUserSignature = await userSignatureService.findOneByDateModified(dateModified, req.query);
        if (!objUserSignature) {
            util.setError(404, `Cannot find userSignature with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found userSignature', objUserSignature);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



usersSignaturesCtrl.updateUserSignatureById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUserSignature = await userSignatureService.updateUserSignatureById(id, req.body);
            if (!objUserSignature) {
                util.setError(404, `Cannot find userSignature with the id: ${id}`);
            } else {
                util.setSuccess(200, 'UserSignature updated', objUserSignature);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersSignaturesCtrl.updateUserSignatureByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUserSignature = await userSignatureService.updateUserSignatureByDeleted(deleted, req.body);
            if (!objUserSignature) {
                util.setError(404, `Cannot find userSignature with the id: ${id}`);
            } else {
                util.setSuccess(200, 'UserSignature updated', objUserSignature);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersSignaturesCtrl.updateUserSignatureByUserId = async (req, res) => {
     const { userId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUserSignature = await userSignatureService.updateUserSignatureByUserId(userId, req.body);
            if (!objUserSignature) {
                util.setError(404, `Cannot find userSignature with the id: ${id}`);
            } else {
                util.setSuccess(200, 'UserSignature updated', objUserSignature);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersSignaturesCtrl.updateUserSignatureByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUserSignature = await userSignatureService.updateUserSignatureByName(name, req.body);
            if (!objUserSignature) {
                util.setError(404, `Cannot find userSignature with the id: ${id}`);
            } else {
                util.setSuccess(200, 'UserSignature updated', objUserSignature);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersSignaturesCtrl.updateUserSignatureBySignature = async (req, res) => {
     const { signature } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUserSignature = await userSignatureService.updateUserSignatureBySignature(signature, req.body);
            if (!objUserSignature) {
                util.setError(404, `Cannot find userSignature with the id: ${id}`);
            } else {
                util.setSuccess(200, 'UserSignature updated', objUserSignature);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersSignaturesCtrl.updateUserSignatureBySignatureHtml = async (req, res) => {
     const { signatureHtml } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUserSignature = await userSignatureService.updateUserSignatureBySignatureHtml(signatureHtml, req.body);
            if (!objUserSignature) {
                util.setError(404, `Cannot find userSignature with the id: ${id}`);
            } else {
                util.setSuccess(200, 'UserSignature updated', objUserSignature);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersSignaturesCtrl.updateUserSignatureByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUserSignature = await userSignatureService.updateUserSignatureByDateEntered(dateEntered, req.body);
            if (!objUserSignature) {
                util.setError(404, `Cannot find userSignature with the id: ${id}`);
            } else {
                util.setSuccess(200, 'UserSignature updated', objUserSignature);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersSignaturesCtrl.updateUserSignatureByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUserSignature = await userSignatureService.updateUserSignatureByDateModified(dateModified, req.body);
            if (!objUserSignature) {
                util.setError(404, `Cannot find userSignature with the id: ${id}`);
            } else {
                util.setSuccess(200, 'UserSignature updated', objUserSignature);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = usersSignaturesCtrl;
//</es-section>
