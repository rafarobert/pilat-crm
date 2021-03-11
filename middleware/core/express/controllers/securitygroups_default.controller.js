/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:43 GMT-0400 (Bolivia Time)
 * Time: 14:57:43
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:43 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:43
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const securitygroupDefaultService = require('../services/securitygroups_default.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const securitygroupsDefaultCtrl = {};
securitygroupsDefaultCtrl.service = securitygroupDefaultService;


securitygroupsDefaultCtrl.getAllSecuritygroupsDefault = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.securitygroupsDefault.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objSecuritygroupsDefault = await securitygroupDefaultService.getAllSecuritygroupsDefault(req.query);
        if (objSecuritygroupsDefault && objSecuritygroupsDefault.rows && objSecuritygroupsDefault.count) {
            util.setSuccess(200, 'SecuritygroupsDefault retrieved', objSecuritygroupsDefault.rows, objSecuritygroupsDefault.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No securitygroupDefault found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsDefaultCtrl.getASecuritygroupDefault = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objSecuritygroupDefault = await securitygroupDefaultService.getASecuritygroupDefault(id, req.query);
        if (!objSecuritygroupDefault) {
            util.setError(404, `Cannot find securitygroupDefault with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found securitygroupDefault', objSecuritygroupDefault);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsDefaultCtrl.addSecuritygroupDefault = async (req, res) => {
    try {
        const objSecuritygroupDefault = await securitygroupDefaultService.addSecuritygroupDefault(req.body);
        util.setSuccess(201, 'SecuritygroupDefault Added!', objSecuritygroupDefault);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsDefaultCtrl.updateSecuritygroupDefault = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objSecuritygroupDefault = await securitygroupDefaultService.updateSecuritygroupDefault(id, req.body);
        if (!objSecuritygroupDefault) {
            util.setError(404, `Cannot find securitygroupDefault with the id: ${id}`);
        } else {
            util.setSuccess(200, 'SecuritygroupDefault updated', objSecuritygroupDefault);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

securitygroupsDefaultCtrl.deleteSecuritygroupDefault = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objSecuritygroupDefault = await securitygroupDefaultService.deleteSecuritygroupDefault(id);
        if (objSecuritygroupDefault) {
            util.setSuccess(200, 'SecuritygroupDefault deleted', objSecuritygroupDefault);
        } else {
            util.setError(404, `SecuritygroupDefault with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



securitygroupsDefaultCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objSecuritygroupDefault = await securitygroupDefaultService.findOneById(id, req.query);
        if (!objSecuritygroupDefault) {
            util.setError(404, `Cannot find securitygroupDefault with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroupDefault', objSecuritygroupDefault);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsDefaultCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objSecuritygroupDefault = await securitygroupDefaultService.findOneByDeleted(deleted, req.query);
        if (!objSecuritygroupDefault) {
            util.setError(404, `Cannot find securitygroupDefault with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroupDefault', objSecuritygroupDefault);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsDefaultCtrl.findOneByModule = async (req, res) => {
    try {
        const { module } = req.params;
        const objSecuritygroupDefault = await securitygroupDefaultService.findOneByModule(module, req.query);
        if (!objSecuritygroupDefault) {
            util.setError(404, `Cannot find securitygroupDefault with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroupDefault', objSecuritygroupDefault);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsDefaultCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objSecuritygroupDefault = await securitygroupDefaultService.findOneByDateModified(dateModified, req.query);
        if (!objSecuritygroupDefault) {
            util.setError(404, `Cannot find securitygroupDefault with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroupDefault', objSecuritygroupDefault);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsDefaultCtrl.findOneBySecuritygroupId = async (req, res) => {
    try {
        const { securitygroupId } = req.params;
        const objSecuritygroupDefault = await securitygroupDefaultService.findOneBySecuritygroupId(securitygroupId, req.query);
        if (!objSecuritygroupDefault) {
            util.setError(404, `Cannot find securitygroupDefault with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroupDefault', objSecuritygroupDefault);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



securitygroupsDefaultCtrl.updateSecuritygroupDefaultById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSecuritygroupDefault = await securitygroupDefaultService.updateSecuritygroupDefaultById(id, req.body);
            if (!objSecuritygroupDefault) {
                util.setError(404, `Cannot find securitygroupDefault with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SecuritygroupDefault updated', objSecuritygroupDefault);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

securitygroupsDefaultCtrl.updateSecuritygroupDefaultByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSecuritygroupDefault = await securitygroupDefaultService.updateSecuritygroupDefaultByDeleted(deleted, req.body);
            if (!objSecuritygroupDefault) {
                util.setError(404, `Cannot find securitygroupDefault with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SecuritygroupDefault updated', objSecuritygroupDefault);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

securitygroupsDefaultCtrl.updateSecuritygroupDefaultByModule = async (req, res) => {
     const { module } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSecuritygroupDefault = await securitygroupDefaultService.updateSecuritygroupDefaultByModule(module, req.body);
            if (!objSecuritygroupDefault) {
                util.setError(404, `Cannot find securitygroupDefault with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SecuritygroupDefault updated', objSecuritygroupDefault);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

securitygroupsDefaultCtrl.updateSecuritygroupDefaultByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSecuritygroupDefault = await securitygroupDefaultService.updateSecuritygroupDefaultByDateModified(dateModified, req.body);
            if (!objSecuritygroupDefault) {
                util.setError(404, `Cannot find securitygroupDefault with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SecuritygroupDefault updated', objSecuritygroupDefault);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

securitygroupsDefaultCtrl.updateSecuritygroupDefaultBySecuritygroupId = async (req, res) => {
     const { securitygroupId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSecuritygroupDefault = await securitygroupDefaultService.updateSecuritygroupDefaultBySecuritygroupId(securitygroupId, req.body);
            if (!objSecuritygroupDefault) {
                util.setError(404, `Cannot find securitygroupDefault with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SecuritygroupDefault updated', objSecuritygroupDefault);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = securitygroupsDefaultCtrl;
//</es-section>
