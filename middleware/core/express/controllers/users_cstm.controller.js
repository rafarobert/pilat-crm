/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:39 GMT-0400 (Bolivia Time)
 * Time: 14:1:39
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:39 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:39
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const userCstmService = require('../services/users_cstm.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const usersCstmCtrl = {};
usersCstmCtrl.service = userCstmService;


usersCstmCtrl.getAllUsersCstm = async (req, res) => {
    try {
        const objUsersCstm = await userCstmService.getAllUsersCstm(req.query);
        if (objUsersCstm.length > 0) {
            util.setSuccess(200, 'UsersCstm retrieved', objUsersCstm);
        } else {
            util.setSuccess(200, 'No userCstm found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCstmCtrl.getAUserCstm = async (req, res) => {
    try {
        const { idC } = req.params;
        if (!util.isChar(idC)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objUserCstm = await userCstmService.getAUserCstm(idC, req.query);
        if (!objUserCstm) {
            util.setError(404, `Cannot find userCstm with the id ${idC}`);
        } else {
            util.setSuccess(200, 'Found userCstm', objUserCstm);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCstmCtrl.addUserCstm = async (req, res) => {
    try {
        const objUserCstm = await userCstmService.addUserCstm(req.body);
        util.setSuccess(201, 'UserCstm Added!', objUserCstm);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCstmCtrl.updateUserCstm = async (req, res) => {
    try {
        const { idC } = req.params;
        if (!util.isChar(idC)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objUserCstm = await userCstmService.updateUserCstm(idC, req.body);
        if (!objUserCstm) {
            util.setError(404, `Cannot find userCstm with the id: ${idC}`);
        } else {
            util.setSuccess(200, 'UserCstm updated', objUserCstm);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

usersCstmCtrl.deleteUserCstm = async (req, res) => {
    try {
        const { idC } = req.params;
        if (!util.isChar(idC)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objUserCstm = await userCstmService.deleteUserCstm(idC);
        if (objUserCstm) {
            util.setSuccess(200, 'UserCstm deleted', objUserCstm);
        } else {
            util.setError(404, `UserCstm with the id ${idC} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



usersCstmCtrl.findOneByIdC = async (req, res) => {
    try {
        const { idC } = req.params;
        const objUserCstm = await userCstmService.findOneByIdC(idC, req.query);
        if (!objUserCstm) {
            util.setError(404, `Cannot find userCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found userCstm', objUserCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCstmCtrl.findOneByCodigoAgendaC = async (req, res) => {
    try {
        const { codigoAgendaC } = req.params;
        const objUserCstm = await userCstmService.findOneByCodigoAgendaC(codigoAgendaC, req.query);
        if (!objUserCstm) {
            util.setError(404, `Cannot find userCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found userCstm', objUserCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCstmCtrl.findOneByNumeroDocumentoC = async (req, res) => {
    try {
        const { numeroDocumentoC } = req.params;
        const objUserCstm = await userCstmService.findOneByNumeroDocumentoC(numeroDocumentoC, req.query);
        if (!objUserCstm) {
            util.setError(404, `Cannot find userCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found userCstm', objUserCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCstmCtrl.findOneByExtensionDocumentoC = async (req, res) => {
    try {
        const { extensionDocumentoC } = req.params;
        const objUserCstm = await userCstmService.findOneByExtensionDocumentoC(extensionDocumentoC, req.query);
        if (!objUserCstm) {
            util.setError(404, `Cannot find userCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found userCstm', objUserCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



usersCstmCtrl.updateUserCstmByIdC = async (req, res) => {
     const { idC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUserCstm = await userCstmService.updateUserCstmByIdC(idC, req.body);
            if (!objUserCstm) {
                util.setError(404, `Cannot find userCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'UserCstm updated', objUserCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersCstmCtrl.updateUserCstmByCodigoAgendaC = async (req, res) => {
     const { codigoAgendaC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUserCstm = await userCstmService.updateUserCstmByCodigoAgendaC(codigoAgendaC, req.body);
            if (!objUserCstm) {
                util.setError(404, `Cannot find userCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'UserCstm updated', objUserCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersCstmCtrl.updateUserCstmByNumeroDocumentoC = async (req, res) => {
     const { numeroDocumentoC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUserCstm = await userCstmService.updateUserCstmByNumeroDocumentoC(numeroDocumentoC, req.body);
            if (!objUserCstm) {
                util.setError(404, `Cannot find userCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'UserCstm updated', objUserCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersCstmCtrl.updateUserCstmByExtensionDocumentoC = async (req, res) => {
     const { extensionDocumentoC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUserCstm = await userCstmService.updateUserCstmByExtensionDocumentoC(extensionDocumentoC, req.body);
            if (!objUserCstm) {
                util.setError(404, `Cannot find userCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'UserCstm updated', objUserCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = usersCstmCtrl;
//</es-section>
