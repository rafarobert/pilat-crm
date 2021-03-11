/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:55:54 GMT-0400 (Bolivia Time)
 * Time: 14:55:54
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:55:54 GMT-0400 (Bolivia Time)
 * Last time updated: 14:55:54
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const amTasktemplateAmProjecttemplateCService = require('../services/am_tasktemplates_am_projecttemplates_c.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const amTasktemplatesAmProjecttemplatesCCtrl = {};
amTasktemplatesAmProjecttemplatesCCtrl.service = amTasktemplateAmProjecttemplateCService;


amTasktemplatesAmProjecttemplatesCCtrl.getAllAmTasktemplatesAmProjecttemplatesC = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.amTasktemplatesAmProjecttemplatesC.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objAmTasktemplatesAmProjecttemplatesC = await amTasktemplateAmProjecttemplateCService.getAllAmTasktemplatesAmProjecttemplatesC(req.query);
        if (objAmTasktemplatesAmProjecttemplatesC && objAmTasktemplatesAmProjecttemplatesC.rows && objAmTasktemplatesAmProjecttemplatesC.count) {
            util.setSuccess(200, 'AmTasktemplatesAmProjecttemplatesC retrieved', objAmTasktemplatesAmProjecttemplatesC.rows, objAmTasktemplatesAmProjecttemplatesC.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No amTasktemplateAmProjecttemplateC found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amTasktemplatesAmProjecttemplatesCCtrl.getAAmTasktemplateAmProjecttemplateC = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objAmTasktemplateAmProjecttemplateC = await amTasktemplateAmProjecttemplateCService.getAAmTasktemplateAmProjecttemplateC(id, req.query);
        if (!objAmTasktemplateAmProjecttemplateC) {
            util.setError(404, `Cannot find amTasktemplateAmProjecttemplateC with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found amTasktemplateAmProjecttemplateC', objAmTasktemplateAmProjecttemplateC);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amTasktemplatesAmProjecttemplatesCCtrl.addAmTasktemplateAmProjecttemplateC = async (req, res) => {
    try {
        const objAmTasktemplateAmProjecttemplateC = await amTasktemplateAmProjecttemplateCService.addAmTasktemplateAmProjecttemplateC(req.body);
        util.setSuccess(201, 'AmTasktemplateAmProjecttemplateC Added!', objAmTasktemplateAmProjecttemplateC);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amTasktemplatesAmProjecttemplatesCCtrl.updateAmTasktemplateAmProjecttemplateC = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objAmTasktemplateAmProjecttemplateC = await amTasktemplateAmProjecttemplateCService.updateAmTasktemplateAmProjecttemplateC(id, req.body);
        if (!objAmTasktemplateAmProjecttemplateC) {
            util.setError(404, `Cannot find amTasktemplateAmProjecttemplateC with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AmTasktemplateAmProjecttemplateC updated', objAmTasktemplateAmProjecttemplateC);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

amTasktemplatesAmProjecttemplatesCCtrl.deleteAmTasktemplateAmProjecttemplateC = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objAmTasktemplateAmProjecttemplateC = await amTasktemplateAmProjecttemplateCService.deleteAmTasktemplateAmProjecttemplateC(id);
        if (objAmTasktemplateAmProjecttemplateC) {
            util.setSuccess(200, 'AmTasktemplateAmProjecttemplateC deleted', objAmTasktemplateAmProjecttemplateC);
        } else {
            util.setError(404, `AmTasktemplateAmProjecttemplateC with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



amTasktemplatesAmProjecttemplatesCCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAmTasktemplateAmProjecttemplateC = await amTasktemplateAmProjecttemplateCService.findOneById(id, req.query);
        if (!objAmTasktemplateAmProjecttemplateC) {
            util.setError(404, `Cannot find amTasktemplateAmProjecttemplateC with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amTasktemplateAmProjecttemplateC', objAmTasktemplateAmProjecttemplateC);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amTasktemplatesAmProjecttemplatesCCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAmTasktemplateAmProjecttemplateC = await amTasktemplateAmProjecttemplateCService.findOneByDeleted(deleted, req.query);
        if (!objAmTasktemplateAmProjecttemplateC) {
            util.setError(404, `Cannot find amTasktemplateAmProjecttemplateC with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amTasktemplateAmProjecttemplateC', objAmTasktemplateAmProjecttemplateC);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amTasktemplatesAmProjecttemplatesCCtrl.findOneByAmTasktemplatesAmProjecttemplatesamProjecttemplatesIda = async (req, res) => {
    try {
        const { amTasktemplatesAmProjecttemplatesamProjecttemplatesIda } = req.params;
        const objAmTasktemplateAmProjecttemplateC = await amTasktemplateAmProjecttemplateCService.findOneByAmTasktemplatesAmProjecttemplatesamProjecttemplatesIda(amTasktemplatesAmProjecttemplatesamProjecttemplatesIda, req.query);
        if (!objAmTasktemplateAmProjecttemplateC) {
            util.setError(404, `Cannot find amTasktemplateAmProjecttemplateC with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amTasktemplateAmProjecttemplateC', objAmTasktemplateAmProjecttemplateC);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amTasktemplatesAmProjecttemplatesCCtrl.findOneByAmTasktemplatesAmProjecttemplatesamTasktemplatesIdb = async (req, res) => {
    try {
        const { amTasktemplatesAmProjecttemplatesamTasktemplatesIdb } = req.params;
        const objAmTasktemplateAmProjecttemplateC = await amTasktemplateAmProjecttemplateCService.findOneByAmTasktemplatesAmProjecttemplatesamTasktemplatesIdb(amTasktemplatesAmProjecttemplatesamTasktemplatesIdb, req.query);
        if (!objAmTasktemplateAmProjecttemplateC) {
            util.setError(404, `Cannot find amTasktemplateAmProjecttemplateC with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amTasktemplateAmProjecttemplateC', objAmTasktemplateAmProjecttemplateC);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amTasktemplatesAmProjecttemplatesCCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAmTasktemplateAmProjecttemplateC = await amTasktemplateAmProjecttemplateCService.findOneByDateModified(dateModified, req.query);
        if (!objAmTasktemplateAmProjecttemplateC) {
            util.setError(404, `Cannot find amTasktemplateAmProjecttemplateC with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amTasktemplateAmProjecttemplateC', objAmTasktemplateAmProjecttemplateC);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



amTasktemplatesAmProjecttemplatesCCtrl.updateAmTasktemplateAmProjecttemplateCById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAmTasktemplateAmProjecttemplateC = await amTasktemplateAmProjecttemplateCService.updateAmTasktemplateAmProjecttemplateCById(id, req.body);
            if (!objAmTasktemplateAmProjecttemplateC) {
                util.setError(404, `Cannot find amTasktemplateAmProjecttemplateC with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmTasktemplateAmProjecttemplateC updated', objAmTasktemplateAmProjecttemplateC);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amTasktemplatesAmProjecttemplatesCCtrl.updateAmTasktemplateAmProjecttemplateCByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAmTasktemplateAmProjecttemplateC = await amTasktemplateAmProjecttemplateCService.updateAmTasktemplateAmProjecttemplateCByDeleted(deleted, req.body);
            if (!objAmTasktemplateAmProjecttemplateC) {
                util.setError(404, `Cannot find amTasktemplateAmProjecttemplateC with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmTasktemplateAmProjecttemplateC updated', objAmTasktemplateAmProjecttemplateC);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amTasktemplatesAmProjecttemplatesCCtrl.updateAmTasktemplateAmProjecttemplateCByAmTasktemplatesAmProjecttemplatesamProjecttemplatesIda = async (req, res) => {
     const { amTasktemplatesAmProjecttemplatesamProjecttemplatesIda } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAmTasktemplateAmProjecttemplateC = await amTasktemplateAmProjecttemplateCService.updateAmTasktemplateAmProjecttemplateCByAmTasktemplatesAmProjecttemplatesamProjecttemplatesIda(amTasktemplatesAmProjecttemplatesamProjecttemplatesIda, req.body);
            if (!objAmTasktemplateAmProjecttemplateC) {
                util.setError(404, `Cannot find amTasktemplateAmProjecttemplateC with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmTasktemplateAmProjecttemplateC updated', objAmTasktemplateAmProjecttemplateC);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amTasktemplatesAmProjecttemplatesCCtrl.updateAmTasktemplateAmProjecttemplateCByAmTasktemplatesAmProjecttemplatesamTasktemplatesIdb = async (req, res) => {
     const { amTasktemplatesAmProjecttemplatesamTasktemplatesIdb } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAmTasktemplateAmProjecttemplateC = await amTasktemplateAmProjecttemplateCService.updateAmTasktemplateAmProjecttemplateCByAmTasktemplatesAmProjecttemplatesamTasktemplatesIdb(amTasktemplatesAmProjecttemplatesamTasktemplatesIdb, req.body);
            if (!objAmTasktemplateAmProjecttemplateC) {
                util.setError(404, `Cannot find amTasktemplateAmProjecttemplateC with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmTasktemplateAmProjecttemplateC updated', objAmTasktemplateAmProjecttemplateC);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amTasktemplatesAmProjecttemplatesCCtrl.updateAmTasktemplateAmProjecttemplateCByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAmTasktemplateAmProjecttemplateC = await amTasktemplateAmProjecttemplateCService.updateAmTasktemplateAmProjecttemplateCByDateModified(dateModified, req.body);
            if (!objAmTasktemplateAmProjecttemplateC) {
                util.setError(404, `Cannot find amTasktemplateAmProjecttemplateC with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmTasktemplateAmProjecttemplateC updated', objAmTasktemplateAmProjecttemplateC);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = amTasktemplatesAmProjecttemplatesCCtrl;
//</es-section>
