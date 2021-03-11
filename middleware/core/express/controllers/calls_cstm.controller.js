/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:29 GMT-0400 (Bolivia Time)
 * Time: 14:56:29
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:29 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:29
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const callCstmService = require('../services/calls_cstm.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const callsCstmCtrl = {};
callsCstmCtrl.service = callCstmService;


callsCstmCtrl.getAllCallsCstm = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.callsCstm.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objCallsCstm = await callCstmService.getAllCallsCstm(req.query);
        if (objCallsCstm && objCallsCstm.rows && objCallsCstm.count) {
            util.setSuccess(200, 'CallsCstm retrieved', objCallsCstm.rows, objCallsCstm.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No callCstm found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsCstmCtrl.getACallCstm = async (req, res) => {
    try {
        const { idC } = req.params;
        if (!util.isChar(idC)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objCallCstm = await callCstmService.getACallCstm(idC, req.query);
        if (!objCallCstm) {
            util.setError(404, `Cannot find callCstm with the id ${idC}`);
        } else {
            util.setSuccess(200, 'Found callCstm', objCallCstm);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsCstmCtrl.addCallCstm = async (req, res) => {
    try {
        const objCallCstm = await callCstmService.addCallCstm(req.body);
        util.setSuccess(201, 'CallCstm Added!', objCallCstm);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsCstmCtrl.updateCallCstm = async (req, res) => {
    try {
        const { idC } = req.params;
        if (!util.isChar(idC)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objCallCstm = await callCstmService.updateCallCstm(idC, req.body);
        if (!objCallCstm) {
            util.setError(404, `Cannot find callCstm with the id: ${idC}`);
        } else {
            util.setSuccess(200, 'CallCstm updated', objCallCstm);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

callsCstmCtrl.deleteCallCstm = async (req, res) => {
    try {
        const { idC } = req.params;
        if (!util.isChar(idC)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objCallCstm = await callCstmService.deleteCallCstm(idC);
        if (objCallCstm) {
            util.setSuccess(200, 'CallCstm deleted', objCallCstm);
        } else {
            util.setError(404, `CallCstm with the id ${idC} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



callsCstmCtrl.findOneByIdC = async (req, res) => {
    try {
        const { idC } = req.params;
        const objCallCstm = await callCstmService.findOneByIdC(idC, req.query);
        if (!objCallCstm) {
            util.setError(404, `Cannot find callCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callCstm', objCallCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsCstmCtrl.findOneByLlamadaRealizadaC = async (req, res) => {
    try {
        const { llamadaRealizadaC } = req.params;
        const objCallCstm = await callCstmService.findOneByLlamadaRealizadaC(llamadaRealizadaC, req.query);
        if (!objCallCstm) {
            util.setError(404, `Cannot find callCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callCstm', objCallCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsCstmCtrl.findOneByMessageIdC = async (req, res) => {
    try {
        const { messageIdC } = req.params;
        const objCallCstm = await callCstmService.findOneByMessageIdC(messageIdC, req.query);
        if (!objCallCstm) {
            util.setError(404, `Cannot find callCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callCstm', objCallCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsCstmCtrl.findOneByLlamadaFechaC = async (req, res) => {
    try {
        const { llamadaFechaC } = req.params;
        const objCallCstm = await callCstmService.findOneByLlamadaFechaC(llamadaFechaC, req.query);
        if (!objCallCstm) {
            util.setError(404, `Cannot find callCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callCstm', objCallCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



callsCstmCtrl.updateCallCstmByIdC = async (req, res) => {
     const { idC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCallCstm = await callCstmService.updateCallCstmByIdC(idC, req.body);
            if (!objCallCstm) {
                util.setError(404, `Cannot find callCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'CallCstm updated', objCallCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsCstmCtrl.updateCallCstmByLlamadaRealizadaC = async (req, res) => {
     const { llamadaRealizadaC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCallCstm = await callCstmService.updateCallCstmByLlamadaRealizadaC(llamadaRealizadaC, req.body);
            if (!objCallCstm) {
                util.setError(404, `Cannot find callCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'CallCstm updated', objCallCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsCstmCtrl.updateCallCstmByMessageIdC = async (req, res) => {
     const { messageIdC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCallCstm = await callCstmService.updateCallCstmByMessageIdC(messageIdC, req.body);
            if (!objCallCstm) {
                util.setError(404, `Cannot find callCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'CallCstm updated', objCallCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsCstmCtrl.updateCallCstmByLlamadaFechaC = async (req, res) => {
     const { llamadaFechaC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCallCstm = await callCstmService.updateCallCstmByLlamadaFechaC(llamadaFechaC, req.body);
            if (!objCallCstm) {
                util.setError(404, `Cannot find callCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'CallCstm updated', objCallCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = callsCstmCtrl;
//</es-section>
