/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:19 GMT-0400 (Bolivia Time)
 * Time: 14:57:19
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:19 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:19
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const oauthConsumerService = require('../services/oauth_consumer.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const oauthConsumerCtrl = {};
oauthConsumerCtrl.service = oauthConsumerService;


oauthConsumerCtrl.getAllOauthConsumer = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.oauthConsumer.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objOauthConsumer = await oauthConsumerService.getAllOauthConsumer(req.query);
        if (objOauthConsumer && objOauthConsumer.rows && objOauthConsumer.count) {
            util.setSuccess(200, 'OauthConsumer retrieved', objOauthConsumer.rows, objOauthConsumer.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No oauthConsumer found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauthConsumerCtrl.getAOauthConsumer = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objOauthConsumer = await oauthConsumerService.getAOauthConsumer(id, req.query);
        if (!objOauthConsumer) {
            util.setError(404, `Cannot find oauthConsumer with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found oauthConsumer', objOauthConsumer);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauthConsumerCtrl.addOauthConsumer = async (req, res) => {
    try {
        const objOauthConsumer = await oauthConsumerService.addOauthConsumer(req.body);
        util.setSuccess(201, 'OauthConsumer Added!', objOauthConsumer);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauthConsumerCtrl.updateOauthConsumer = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objOauthConsumer = await oauthConsumerService.updateOauthConsumer(id, req.body);
        if (!objOauthConsumer) {
            util.setError(404, `Cannot find oauthConsumer with the id: ${id}`);
        } else {
            util.setSuccess(200, 'OauthConsumer updated', objOauthConsumer);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

oauthConsumerCtrl.deleteOauthConsumer = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objOauthConsumer = await oauthConsumerService.deleteOauthConsumer(id);
        if (objOauthConsumer) {
            util.setSuccess(200, 'OauthConsumer deleted', objOauthConsumer);
        } else {
            util.setError(404, `OauthConsumer with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



oauthConsumerCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objOauthConsumer = await oauthConsumerService.findOneById(id, req.query);
        if (!objOauthConsumer) {
            util.setError(404, `Cannot find oauthConsumer with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauthConsumer', objOauthConsumer);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauthConsumerCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objOauthConsumer = await oauthConsumerService.findOneByDeleted(deleted, req.query);
        if (!objOauthConsumer) {
            util.setError(404, `Cannot find oauthConsumer with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauthConsumer', objOauthConsumer);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauthConsumerCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objOauthConsumer = await oauthConsumerService.findOneByName(name, req.query);
        if (!objOauthConsumer) {
            util.setError(404, `Cannot find oauthConsumer with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauthConsumer', objOauthConsumer);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauthConsumerCtrl.findOneByCKey = async (req, res) => {
    try {
        const { cKey } = req.params;
        const objOauthConsumer = await oauthConsumerService.findOneByCKey(cKey, req.query);
        if (!objOauthConsumer) {
            util.setError(404, `Cannot find oauthConsumer with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauthConsumer', objOauthConsumer);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauthConsumerCtrl.findOneByCSecret = async (req, res) => {
    try {
        const { cSecret } = req.params;
        const objOauthConsumer = await oauthConsumerService.findOneByCSecret(cSecret, req.query);
        if (!objOauthConsumer) {
            util.setError(404, `Cannot find oauthConsumer with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauthConsumer', objOauthConsumer);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauthConsumerCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objOauthConsumer = await oauthConsumerService.findOneByDescription(description, req.query);
        if (!objOauthConsumer) {
            util.setError(404, `Cannot find oauthConsumer with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauthConsumer', objOauthConsumer);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauthConsumerCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objOauthConsumer = await oauthConsumerService.findOneByDateEntered(dateEntered, req.query);
        if (!objOauthConsumer) {
            util.setError(404, `Cannot find oauthConsumer with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauthConsumer', objOauthConsumer);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauthConsumerCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objOauthConsumer = await oauthConsumerService.findOneByDateModified(dateModified, req.query);
        if (!objOauthConsumer) {
            util.setError(404, `Cannot find oauthConsumer with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauthConsumer', objOauthConsumer);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauthConsumerCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objOauthConsumer = await oauthConsumerService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objOauthConsumer) {
            util.setError(404, `Cannot find oauthConsumer with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauthConsumer', objOauthConsumer);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauthConsumerCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objOauthConsumer = await oauthConsumerService.findOneByCreatedBy(createdBy, req.query);
        if (!objOauthConsumer) {
            util.setError(404, `Cannot find oauthConsumer with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauthConsumer', objOauthConsumer);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

oauthConsumerCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objOauthConsumer = await oauthConsumerService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objOauthConsumer) {
            util.setError(404, `Cannot find oauthConsumer with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found oauthConsumer', objOauthConsumer);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



oauthConsumerCtrl.updateOauthConsumerById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauthConsumer = await oauthConsumerService.updateOauthConsumerById(id, req.body);
            if (!objOauthConsumer) {
                util.setError(404, `Cannot find oauthConsumer with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OauthConsumer updated', objOauthConsumer);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauthConsumerCtrl.updateOauthConsumerByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauthConsumer = await oauthConsumerService.updateOauthConsumerByDeleted(deleted, req.body);
            if (!objOauthConsumer) {
                util.setError(404, `Cannot find oauthConsumer with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OauthConsumer updated', objOauthConsumer);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauthConsumerCtrl.updateOauthConsumerByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauthConsumer = await oauthConsumerService.updateOauthConsumerByName(name, req.body);
            if (!objOauthConsumer) {
                util.setError(404, `Cannot find oauthConsumer with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OauthConsumer updated', objOauthConsumer);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauthConsumerCtrl.updateOauthConsumerByCKey = async (req, res) => {
     const { cKey } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauthConsumer = await oauthConsumerService.updateOauthConsumerByCKey(cKey, req.body);
            if (!objOauthConsumer) {
                util.setError(404, `Cannot find oauthConsumer with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OauthConsumer updated', objOauthConsumer);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauthConsumerCtrl.updateOauthConsumerByCSecret = async (req, res) => {
     const { cSecret } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauthConsumer = await oauthConsumerService.updateOauthConsumerByCSecret(cSecret, req.body);
            if (!objOauthConsumer) {
                util.setError(404, `Cannot find oauthConsumer with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OauthConsumer updated', objOauthConsumer);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauthConsumerCtrl.updateOauthConsumerByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauthConsumer = await oauthConsumerService.updateOauthConsumerByDescription(description, req.body);
            if (!objOauthConsumer) {
                util.setError(404, `Cannot find oauthConsumer with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OauthConsumer updated', objOauthConsumer);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauthConsumerCtrl.updateOauthConsumerByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauthConsumer = await oauthConsumerService.updateOauthConsumerByDateEntered(dateEntered, req.body);
            if (!objOauthConsumer) {
                util.setError(404, `Cannot find oauthConsumer with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OauthConsumer updated', objOauthConsumer);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauthConsumerCtrl.updateOauthConsumerByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauthConsumer = await oauthConsumerService.updateOauthConsumerByDateModified(dateModified, req.body);
            if (!objOauthConsumer) {
                util.setError(404, `Cannot find oauthConsumer with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OauthConsumer updated', objOauthConsumer);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauthConsumerCtrl.updateOauthConsumerByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauthConsumer = await oauthConsumerService.updateOauthConsumerByModifiedUserId(modifiedUserId, req.body);
            if (!objOauthConsumer) {
                util.setError(404, `Cannot find oauthConsumer with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OauthConsumer updated', objOauthConsumer);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauthConsumerCtrl.updateOauthConsumerByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauthConsumer = await oauthConsumerService.updateOauthConsumerByCreatedBy(createdBy, req.body);
            if (!objOauthConsumer) {
                util.setError(404, `Cannot find oauthConsumer with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OauthConsumer updated', objOauthConsumer);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

oauthConsumerCtrl.updateOauthConsumerByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOauthConsumer = await oauthConsumerService.updateOauthConsumerByAssignedUserId(assignedUserId, req.body);
            if (!objOauthConsumer) {
                util.setError(404, `Cannot find oauthConsumer with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OauthConsumer updated', objOauthConsumer);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = oauthConsumerCtrl;
//</es-section>
