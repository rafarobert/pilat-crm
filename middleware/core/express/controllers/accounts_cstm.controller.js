/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:00 GMT-0400 (Bolivia Time)
 * Time: 14:0:0
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:00 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:0
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const accountCstmService = require('../services/accounts_cstm.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const accountsCstmCtrl = {};
accountsCstmCtrl.service = accountCstmService;


accountsCstmCtrl.getAllAccountsCstm = async (req, res) => {
    try {
        const objAccountsCstm = await accountCstmService.getAllAccountsCstm(req.query);
        if (objAccountsCstm.length > 0) {
            util.setSuccess(200, 'AccountsCstm retrieved', objAccountsCstm);
        } else {
            util.setSuccess(200, 'No accountCstm found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCstmCtrl.getAAccountCstm = async (req, res) => {
    try {
        const { idC } = req.params;
        if (!util.isChar(idC)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAccountCstm = await accountCstmService.getAAccountCstm(idC, req.query);
        if (!objAccountCstm) {
            util.setError(404, `Cannot find accountCstm with the id ${idC}`);
        } else {
            util.setSuccess(200, 'Found accountCstm', objAccountCstm);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCstmCtrl.addAccountCstm = async (req, res) => {
    try {
        const objAccountCstm = await accountCstmService.addAccountCstm(req.body);
        util.setSuccess(201, 'AccountCstm Added!', objAccountCstm);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCstmCtrl.updateAccountCstm = async (req, res) => {
    try {
        const { idC } = req.params;
        if (!util.isChar(idC)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAccountCstm = await accountCstmService.updateAccountCstm(idC, req.body);
        if (!objAccountCstm) {
            util.setError(404, `Cannot find accountCstm with the id: ${idC}`);
        } else {
            util.setSuccess(200, 'AccountCstm updated', objAccountCstm);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

accountsCstmCtrl.deleteAccountCstm = async (req, res) => {
    try {
        const { idC } = req.params;
        if (!util.isChar(idC)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAccountCstm = await accountCstmService.deleteAccountCstm(idC);
        if (objAccountCstm) {
            util.setSuccess(200, 'AccountCstm deleted', objAccountCstm);
        } else {
            util.setError(404, `AccountCstm with the id ${idC} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



accountsCstmCtrl.findOneByIdC = async (req, res) => {
    try {
        const { idC } = req.params;
        const objAccountCstm = await accountCstmService.findOneByIdC(idC, req.query);
        if (!objAccountCstm) {
            util.setError(404, `Cannot find accountCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found accountCstm', objAccountCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCstmCtrl.findOneByJjwgMapsLngC = async (req, res) => {
    try {
        const { jjwgMapsLngC } = req.params;
        const objAccountCstm = await accountCstmService.findOneByJjwgMapsLngC(jjwgMapsLngC, req.query);
        if (!objAccountCstm) {
            util.setError(404, `Cannot find accountCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found accountCstm', objAccountCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCstmCtrl.findOneByJjwgMapsLatC = async (req, res) => {
    try {
        const { jjwgMapsLatC } = req.params;
        const objAccountCstm = await accountCstmService.findOneByJjwgMapsLatC(jjwgMapsLatC, req.query);
        if (!objAccountCstm) {
            util.setError(404, `Cannot find accountCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found accountCstm', objAccountCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCstmCtrl.findOneByJjwgMapsGeocodeStatusC = async (req, res) => {
    try {
        const { jjwgMapsGeocodeStatusC } = req.params;
        const objAccountCstm = await accountCstmService.findOneByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC, req.query);
        if (!objAccountCstm) {
            util.setError(404, `Cannot find accountCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found accountCstm', objAccountCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCstmCtrl.findOneByJjwgMapsAddressC = async (req, res) => {
    try {
        const { jjwgMapsAddressC } = req.params;
        const objAccountCstm = await accountCstmService.findOneByJjwgMapsAddressC(jjwgMapsAddressC, req.query);
        if (!objAccountCstm) {
            util.setError(404, `Cannot find accountCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found accountCstm', objAccountCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCstmCtrl.findOneByNumeroDocumentoC = async (req, res) => {
    try {
        const { numeroDocumentoC } = req.params;
        const objAccountCstm = await accountCstmService.findOneByNumeroDocumentoC(numeroDocumentoC, req.query);
        if (!objAccountCstm) {
            util.setError(404, `Cannot find accountCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found accountCstm', objAccountCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCstmCtrl.findOneByExtensionDocumentoC = async (req, res) => {
    try {
        const { extensionDocumentoC } = req.params;
        const objAccountCstm = await accountCstmService.findOneByExtensionDocumentoC(extensionDocumentoC, req.query);
        if (!objAccountCstm) {
            util.setError(404, `Cannot find accountCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found accountCstm', objAccountCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



accountsCstmCtrl.updateAccountCstmByIdC = async (req, res) => {
     const { idC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccountCstm = await accountCstmService.updateAccountCstmByIdC(idC, req.body);
            if (!objAccountCstm) {
                util.setError(404, `Cannot find accountCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'AccountCstm updated', objAccountCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsCstmCtrl.updateAccountCstmByJjwgMapsLngC = async (req, res) => {
     const { jjwgMapsLngC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccountCstm = await accountCstmService.updateAccountCstmByJjwgMapsLngC(jjwgMapsLngC, req.body);
            if (!objAccountCstm) {
                util.setError(404, `Cannot find accountCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'AccountCstm updated', objAccountCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsCstmCtrl.updateAccountCstmByJjwgMapsLatC = async (req, res) => {
     const { jjwgMapsLatC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccountCstm = await accountCstmService.updateAccountCstmByJjwgMapsLatC(jjwgMapsLatC, req.body);
            if (!objAccountCstm) {
                util.setError(404, `Cannot find accountCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'AccountCstm updated', objAccountCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsCstmCtrl.updateAccountCstmByJjwgMapsGeocodeStatusC = async (req, res) => {
     const { jjwgMapsGeocodeStatusC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccountCstm = await accountCstmService.updateAccountCstmByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC, req.body);
            if (!objAccountCstm) {
                util.setError(404, `Cannot find accountCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'AccountCstm updated', objAccountCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsCstmCtrl.updateAccountCstmByJjwgMapsAddressC = async (req, res) => {
     const { jjwgMapsAddressC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccountCstm = await accountCstmService.updateAccountCstmByJjwgMapsAddressC(jjwgMapsAddressC, req.body);
            if (!objAccountCstm) {
                util.setError(404, `Cannot find accountCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'AccountCstm updated', objAccountCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsCstmCtrl.updateAccountCstmByNumeroDocumentoC = async (req, res) => {
     const { numeroDocumentoC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccountCstm = await accountCstmService.updateAccountCstmByNumeroDocumentoC(numeroDocumentoC, req.body);
            if (!objAccountCstm) {
                util.setError(404, `Cannot find accountCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'AccountCstm updated', objAccountCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsCstmCtrl.updateAccountCstmByExtensionDocumentoC = async (req, res) => {
     const { extensionDocumentoC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccountCstm = await accountCstmService.updateAccountCstmByExtensionDocumentoC(extensionDocumentoC, req.body);
            if (!objAccountCstm) {
                util.setError(404, `Cannot find accountCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'AccountCstm updated', objAccountCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = accountsCstmCtrl;
//</es-section>
