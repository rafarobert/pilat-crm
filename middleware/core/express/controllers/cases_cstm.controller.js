/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:48 GMT-0400 (Bolivia Time)
 * Time: 15:35:48
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:48 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:48
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const caseCstmService = require('../services/cases_cstm.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const casesCstmCtrl = {};
casesCstmCtrl.service = caseCstmService;


casesCstmCtrl.getAllCasesCstm = async (req, res) => {
    try {
        const objCasesCstm = await caseCstmService.getAllCasesCstm(req.query);
        if (objCasesCstm.length > 0) {
            util.setSuccess(200, 'CasesCstm retrieved', objCasesCstm);
        } else {
            util.setSuccess(200, 'No caseCstm found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesCstmCtrl.getACaseCstm = async (req, res) => {
    try {
        const { idC } = req.params;
        if (!util.isChar(idC)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objCaseCstm = await caseCstmService.getACaseCstm(idC, req.query);
        if (!objCaseCstm) {
            util.setError(404, `Cannot find caseCstm with the id ${idC}`);
        } else {
            util.setSuccess(200, 'Found caseCstm', objCaseCstm);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesCstmCtrl.addCaseCstm = async (req, res) => {
    try {
        const objCaseCstm = await caseCstmService.addCaseCstm(req.body);
        util.setSuccess(201, 'CaseCstm Added!', objCaseCstm);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesCstmCtrl.updateCaseCstm = async (req, res) => {
    try {
        const { idC } = req.params;
        if (!util.isChar(idC)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objCaseCstm = await caseCstmService.updateCaseCstm(idC, req.body);
        if (!objCaseCstm) {
            util.setError(404, `Cannot find caseCstm with the id: ${idC}`);
        } else {
            util.setSuccess(200, 'CaseCstm updated', objCaseCstm);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

casesCstmCtrl.deleteCaseCstm = async (req, res) => {
    try {
        const { idC } = req.params;
        if (!util.isChar(idC)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objCaseCstm = await caseCstmService.deleteCaseCstm(idC);
        if (objCaseCstm) {
            util.setSuccess(200, 'CaseCstm deleted', objCaseCstm);
        } else {
            util.setError(404, `CaseCstm with the id ${idC} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



casesCstmCtrl.findOneByIdC = async (req, res) => {
    try {
        const { idC } = req.params;
        const objCaseCstm = await caseCstmService.findOneByIdC(idC, req.query);
        if (!objCaseCstm) {
            util.setError(404, `Cannot find caseCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found caseCstm', objCaseCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesCstmCtrl.findOneByJjwgMapsLngC = async (req, res) => {
    try {
        const { jjwgMapsLngC } = req.params;
        const objCaseCstm = await caseCstmService.findOneByJjwgMapsLngC(jjwgMapsLngC, req.query);
        if (!objCaseCstm) {
            util.setError(404, `Cannot find caseCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found caseCstm', objCaseCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesCstmCtrl.findOneByJjwgMapsLatC = async (req, res) => {
    try {
        const { jjwgMapsLatC } = req.params;
        const objCaseCstm = await caseCstmService.findOneByJjwgMapsLatC(jjwgMapsLatC, req.query);
        if (!objCaseCstm) {
            util.setError(404, `Cannot find caseCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found caseCstm', objCaseCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesCstmCtrl.findOneByJjwgMapsGeocodeStatusC = async (req, res) => {
    try {
        const { jjwgMapsGeocodeStatusC } = req.params;
        const objCaseCstm = await caseCstmService.findOneByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC, req.query);
        if (!objCaseCstm) {
            util.setError(404, `Cannot find caseCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found caseCstm', objCaseCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesCstmCtrl.findOneByJjwgMapsAddressC = async (req, res) => {
    try {
        const { jjwgMapsAddressC } = req.params;
        const objCaseCstm = await caseCstmService.findOneByJjwgMapsAddressC(jjwgMapsAddressC, req.query);
        if (!objCaseCstm) {
            util.setError(404, `Cannot find caseCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found caseCstm', objCaseCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



casesCstmCtrl.updateCaseCstmByIdC = async (req, res) => {
     const { idC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCaseCstm = await caseCstmService.updateCaseCstmByIdC(idC, req.body);
            if (!objCaseCstm) {
                util.setError(404, `Cannot find caseCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'CaseCstm updated', objCaseCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

casesCstmCtrl.updateCaseCstmByJjwgMapsLngC = async (req, res) => {
     const { jjwgMapsLngC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCaseCstm = await caseCstmService.updateCaseCstmByJjwgMapsLngC(jjwgMapsLngC, req.body);
            if (!objCaseCstm) {
                util.setError(404, `Cannot find caseCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'CaseCstm updated', objCaseCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

casesCstmCtrl.updateCaseCstmByJjwgMapsLatC = async (req, res) => {
     const { jjwgMapsLatC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCaseCstm = await caseCstmService.updateCaseCstmByJjwgMapsLatC(jjwgMapsLatC, req.body);
            if (!objCaseCstm) {
                util.setError(404, `Cannot find caseCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'CaseCstm updated', objCaseCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

casesCstmCtrl.updateCaseCstmByJjwgMapsGeocodeStatusC = async (req, res) => {
     const { jjwgMapsGeocodeStatusC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCaseCstm = await caseCstmService.updateCaseCstmByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC, req.body);
            if (!objCaseCstm) {
                util.setError(404, `Cannot find caseCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'CaseCstm updated', objCaseCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

casesCstmCtrl.updateCaseCstmByJjwgMapsAddressC = async (req, res) => {
     const { jjwgMapsAddressC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCaseCstm = await caseCstmService.updateCaseCstmByJjwgMapsAddressC(jjwgMapsAddressC, req.body);
            if (!objCaseCstm) {
                util.setError(404, `Cannot find caseCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'CaseCstm updated', objCaseCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = casesCstmCtrl;
//</es-section>
