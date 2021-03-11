/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:35 GMT-0400 (Bolivia Time)
 * Time: 14:57:35
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:35 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:35
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const prospectCstmService = require('../services/prospects_cstm.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const prospectsCstmCtrl = {};
prospectsCstmCtrl.service = prospectCstmService;


prospectsCstmCtrl.getAllProspectsCstm = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.prospectsCstm.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objProspectsCstm = await prospectCstmService.getAllProspectsCstm(req.query);
        if (objProspectsCstm && objProspectsCstm.rows && objProspectsCstm.count) {
            util.setSuccess(200, 'ProspectsCstm retrieved', objProspectsCstm.rows, objProspectsCstm.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No prospectCstm found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCstmCtrl.getAProspectCstm = async (req, res) => {
    try {
        const { idC } = req.params;
        if (!util.isChar(idC)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objProspectCstm = await prospectCstmService.getAProspectCstm(idC, req.query);
        if (!objProspectCstm) {
            util.setError(404, `Cannot find prospectCstm with the id ${idC}`);
        } else {
            util.setSuccess(200, 'Found prospectCstm', objProspectCstm);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCstmCtrl.addProspectCstm = async (req, res) => {
    try {
        const objProspectCstm = await prospectCstmService.addProspectCstm(req.body);
        util.setSuccess(201, 'ProspectCstm Added!', objProspectCstm);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCstmCtrl.updateProspectCstm = async (req, res) => {
    try {
        const { idC } = req.params;
        if (!util.isChar(idC)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objProspectCstm = await prospectCstmService.updateProspectCstm(idC, req.body);
        if (!objProspectCstm) {
            util.setError(404, `Cannot find prospectCstm with the id: ${idC}`);
        } else {
            util.setSuccess(200, 'ProspectCstm updated', objProspectCstm);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

prospectsCstmCtrl.deleteProspectCstm = async (req, res) => {
    try {
        const { idC } = req.params;
        if (!util.isChar(idC)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objProspectCstm = await prospectCstmService.deleteProspectCstm(idC);
        if (objProspectCstm) {
            util.setSuccess(200, 'ProspectCstm deleted', objProspectCstm);
        } else {
            util.setError(404, `ProspectCstm with the id ${idC} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



prospectsCstmCtrl.findOneByIdC = async (req, res) => {
    try {
        const { idC } = req.params;
        const objProspectCstm = await prospectCstmService.findOneByIdC(idC, req.query);
        if (!objProspectCstm) {
            util.setError(404, `Cannot find prospectCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospectCstm', objProspectCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCstmCtrl.findOneByJjwgMapsLngC = async (req, res) => {
    try {
        const { jjwgMapsLngC } = req.params;
        const objProspectCstm = await prospectCstmService.findOneByJjwgMapsLngC(jjwgMapsLngC, req.query);
        if (!objProspectCstm) {
            util.setError(404, `Cannot find prospectCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospectCstm', objProspectCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCstmCtrl.findOneByJjwgMapsLatC = async (req, res) => {
    try {
        const { jjwgMapsLatC } = req.params;
        const objProspectCstm = await prospectCstmService.findOneByJjwgMapsLatC(jjwgMapsLatC, req.query);
        if (!objProspectCstm) {
            util.setError(404, `Cannot find prospectCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospectCstm', objProspectCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCstmCtrl.findOneByJjwgMapsGeocodeStatusC = async (req, res) => {
    try {
        const { jjwgMapsGeocodeStatusC } = req.params;
        const objProspectCstm = await prospectCstmService.findOneByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC, req.query);
        if (!objProspectCstm) {
            util.setError(404, `Cannot find prospectCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospectCstm', objProspectCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCstmCtrl.findOneByJjwgMapsAddressC = async (req, res) => {
    try {
        const { jjwgMapsAddressC } = req.params;
        const objProspectCstm = await prospectCstmService.findOneByJjwgMapsAddressC(jjwgMapsAddressC, req.query);
        if (!objProspectCstm) {
            util.setError(404, `Cannot find prospectCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospectCstm', objProspectCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



prospectsCstmCtrl.updateProspectCstmByIdC = async (req, res) => {
     const { idC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspectCstm = await prospectCstmService.updateProspectCstmByIdC(idC, req.body);
            if (!objProspectCstm) {
                util.setError(404, `Cannot find prospectCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'ProspectCstm updated', objProspectCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectsCstmCtrl.updateProspectCstmByJjwgMapsLngC = async (req, res) => {
     const { jjwgMapsLngC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspectCstm = await prospectCstmService.updateProspectCstmByJjwgMapsLngC(jjwgMapsLngC, req.body);
            if (!objProspectCstm) {
                util.setError(404, `Cannot find prospectCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'ProspectCstm updated', objProspectCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectsCstmCtrl.updateProspectCstmByJjwgMapsLatC = async (req, res) => {
     const { jjwgMapsLatC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspectCstm = await prospectCstmService.updateProspectCstmByJjwgMapsLatC(jjwgMapsLatC, req.body);
            if (!objProspectCstm) {
                util.setError(404, `Cannot find prospectCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'ProspectCstm updated', objProspectCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectsCstmCtrl.updateProspectCstmByJjwgMapsGeocodeStatusC = async (req, res) => {
     const { jjwgMapsGeocodeStatusC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspectCstm = await prospectCstmService.updateProspectCstmByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC, req.body);
            if (!objProspectCstm) {
                util.setError(404, `Cannot find prospectCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'ProspectCstm updated', objProspectCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectsCstmCtrl.updateProspectCstmByJjwgMapsAddressC = async (req, res) => {
     const { jjwgMapsAddressC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspectCstm = await prospectCstmService.updateProspectCstmByJjwgMapsAddressC(jjwgMapsAddressC, req.body);
            if (!objProspectCstm) {
                util.setError(404, `Cannot find prospectCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'ProspectCstm updated', objProspectCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = prospectsCstmCtrl;
//</es-section>
