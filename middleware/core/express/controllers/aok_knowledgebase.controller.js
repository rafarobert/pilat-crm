/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:55:58 GMT-0400 (Bolivia Time)
 * Time: 14:55:58
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:55:58 GMT-0400 (Bolivia Time)
 * Last time updated: 14:55:58
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const aokKnowledgebaseService = require('../services/aok_knowledgebase.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aokKnowledgebaseCtrl = {};
aokKnowledgebaseCtrl.service = aokKnowledgebaseService;


aokKnowledgebaseCtrl.getAllAokKnowledgebase = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.aokKnowledgebase.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objAokKnowledgebase = await aokKnowledgebaseService.getAllAokKnowledgebase(req.query);
        if (objAokKnowledgebase && objAokKnowledgebase.rows && objAokKnowledgebase.count) {
            util.setSuccess(200, 'AokKnowledgebase retrieved', objAokKnowledgebase.rows, objAokKnowledgebase.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No aokKnowledgebase found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgebaseCtrl.getAAokKnowledgebase = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAokKnowledgebase = await aokKnowledgebaseService.getAAokKnowledgebase(id, req.query);
        if (!objAokKnowledgebase) {
            util.setError(404, `Cannot find aokKnowledgebase with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgebase', objAokKnowledgebase);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgebaseCtrl.addAokKnowledgebase = async (req, res) => {
    try {
        const objAokKnowledgebase = await aokKnowledgebaseService.addAokKnowledgebase(req.body);
        util.setSuccess(201, 'AokKnowledgebase Added!', objAokKnowledgebase);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgebaseCtrl.updateAokKnowledgebase = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAokKnowledgebase = await aokKnowledgebaseService.updateAokKnowledgebase(id, req.body);
        if (!objAokKnowledgebase) {
            util.setError(404, `Cannot find aokKnowledgebase with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AokKnowledgebase updated', objAokKnowledgebase);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aokKnowledgebaseCtrl.deleteAokKnowledgebase = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAokKnowledgebase = await aokKnowledgebaseService.deleteAokKnowledgebase(id);
        if (objAokKnowledgebase) {
            util.setSuccess(200, 'AokKnowledgebase deleted', objAokKnowledgebase);
        } else {
            util.setError(404, `AokKnowledgebase with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aokKnowledgebaseCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAokKnowledgebase = await aokKnowledgebaseService.findOneById(id, req.query);
        if (!objAokKnowledgebase) {
            util.setError(404, `Cannot find aokKnowledgebase with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgebase', objAokKnowledgebase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgebaseCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAokKnowledgebase = await aokKnowledgebaseService.findOneByDeleted(deleted, req.query);
        if (!objAokKnowledgebase) {
            util.setError(404, `Cannot find aokKnowledgebase with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgebase', objAokKnowledgebase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgebaseCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objAokKnowledgebase = await aokKnowledgebaseService.findOneByName(name, req.query);
        if (!objAokKnowledgebase) {
            util.setError(404, `Cannot find aokKnowledgebase with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgebase', objAokKnowledgebase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgebaseCtrl.findOneByStatus = async (req, res) => {
    try {
        const { status } = req.params;
        const objAokKnowledgebase = await aokKnowledgebaseService.findOneByStatus(status, req.query);
        if (!objAokKnowledgebase) {
            util.setError(404, `Cannot find aokKnowledgebase with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgebase', objAokKnowledgebase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgebaseCtrl.findOneByRevision = async (req, res) => {
    try {
        const { revision } = req.params;
        const objAokKnowledgebase = await aokKnowledgebaseService.findOneByRevision(revision, req.query);
        if (!objAokKnowledgebase) {
            util.setError(404, `Cannot find aokKnowledgebase with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgebase', objAokKnowledgebase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgebaseCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objAokKnowledgebase = await aokKnowledgebaseService.findOneByDescription(description, req.query);
        if (!objAokKnowledgebase) {
            util.setError(404, `Cannot find aokKnowledgebase with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgebase', objAokKnowledgebase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgebaseCtrl.findOneByAdditionalInfo = async (req, res) => {
    try {
        const { additionalInfo } = req.params;
        const objAokKnowledgebase = await aokKnowledgebaseService.findOneByAdditionalInfo(additionalInfo, req.query);
        if (!objAokKnowledgebase) {
            util.setError(404, `Cannot find aokKnowledgebase with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgebase', objAokKnowledgebase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgebaseCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objAokKnowledgebase = await aokKnowledgebaseService.findOneByDateEntered(dateEntered, req.query);
        if (!objAokKnowledgebase) {
            util.setError(404, `Cannot find aokKnowledgebase with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgebase', objAokKnowledgebase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgebaseCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAokKnowledgebase = await aokKnowledgebaseService.findOneByDateModified(dateModified, req.query);
        if (!objAokKnowledgebase) {
            util.setError(404, `Cannot find aokKnowledgebase with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgebase', objAokKnowledgebase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgebaseCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objAokKnowledgebase = await aokKnowledgebaseService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objAokKnowledgebase) {
            util.setError(404, `Cannot find aokKnowledgebase with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgebase', objAokKnowledgebase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgebaseCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAokKnowledgebase = await aokKnowledgebaseService.findOneByCreatedBy(createdBy, req.query);
        if (!objAokKnowledgebase) {
            util.setError(404, `Cannot find aokKnowledgebase with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgebase', objAokKnowledgebase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgebaseCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objAokKnowledgebase = await aokKnowledgebaseService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objAokKnowledgebase) {
            util.setError(404, `Cannot find aokKnowledgebase with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgebase', objAokKnowledgebase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgebaseCtrl.findOneByUserIdC = async (req, res) => {
    try {
        const { userIdC } = req.params;
        const objAokKnowledgebase = await aokKnowledgebaseService.findOneByUserIdC(userIdC, req.query);
        if (!objAokKnowledgebase) {
            util.setError(404, `Cannot find aokKnowledgebase with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgebase', objAokKnowledgebase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgebaseCtrl.findOneByUserId1C = async (req, res) => {
    try {
        const { userId1C } = req.params;
        const objAokKnowledgebase = await aokKnowledgebaseService.findOneByUserId1C(userId1C, req.query);
        if (!objAokKnowledgebase) {
            util.setError(404, `Cannot find aokKnowledgebase with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgebase', objAokKnowledgebase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aokKnowledgebaseCtrl.updateAokKnowledgebaseById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAokKnowledgebase = await aokKnowledgebaseService.updateAokKnowledgebaseById(id, req.body);
            if (!objAokKnowledgebase) {
                util.setError(404, `Cannot find aokKnowledgebase with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgebase updated', objAokKnowledgebase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aokKnowledgebaseCtrl.updateAokKnowledgebaseByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAokKnowledgebase = await aokKnowledgebaseService.updateAokKnowledgebaseByDeleted(deleted, req.body);
            if (!objAokKnowledgebase) {
                util.setError(404, `Cannot find aokKnowledgebase with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgebase updated', objAokKnowledgebase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aokKnowledgebaseCtrl.updateAokKnowledgebaseByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAokKnowledgebase = await aokKnowledgebaseService.updateAokKnowledgebaseByName(name, req.body);
            if (!objAokKnowledgebase) {
                util.setError(404, `Cannot find aokKnowledgebase with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgebase updated', objAokKnowledgebase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aokKnowledgebaseCtrl.updateAokKnowledgebaseByStatus = async (req, res) => {
     const { status } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAokKnowledgebase = await aokKnowledgebaseService.updateAokKnowledgebaseByStatus(status, req.body);
            if (!objAokKnowledgebase) {
                util.setError(404, `Cannot find aokKnowledgebase with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgebase updated', objAokKnowledgebase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aokKnowledgebaseCtrl.updateAokKnowledgebaseByRevision = async (req, res) => {
     const { revision } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAokKnowledgebase = await aokKnowledgebaseService.updateAokKnowledgebaseByRevision(revision, req.body);
            if (!objAokKnowledgebase) {
                util.setError(404, `Cannot find aokKnowledgebase with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgebase updated', objAokKnowledgebase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aokKnowledgebaseCtrl.updateAokKnowledgebaseByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAokKnowledgebase = await aokKnowledgebaseService.updateAokKnowledgebaseByDescription(description, req.body);
            if (!objAokKnowledgebase) {
                util.setError(404, `Cannot find aokKnowledgebase with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgebase updated', objAokKnowledgebase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aokKnowledgebaseCtrl.updateAokKnowledgebaseByAdditionalInfo = async (req, res) => {
     const { additionalInfo } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAokKnowledgebase = await aokKnowledgebaseService.updateAokKnowledgebaseByAdditionalInfo(additionalInfo, req.body);
            if (!objAokKnowledgebase) {
                util.setError(404, `Cannot find aokKnowledgebase with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgebase updated', objAokKnowledgebase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aokKnowledgebaseCtrl.updateAokKnowledgebaseByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAokKnowledgebase = await aokKnowledgebaseService.updateAokKnowledgebaseByDateEntered(dateEntered, req.body);
            if (!objAokKnowledgebase) {
                util.setError(404, `Cannot find aokKnowledgebase with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgebase updated', objAokKnowledgebase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aokKnowledgebaseCtrl.updateAokKnowledgebaseByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAokKnowledgebase = await aokKnowledgebaseService.updateAokKnowledgebaseByDateModified(dateModified, req.body);
            if (!objAokKnowledgebase) {
                util.setError(404, `Cannot find aokKnowledgebase with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgebase updated', objAokKnowledgebase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aokKnowledgebaseCtrl.updateAokKnowledgebaseByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAokKnowledgebase = await aokKnowledgebaseService.updateAokKnowledgebaseByModifiedUserId(modifiedUserId, req.body);
            if (!objAokKnowledgebase) {
                util.setError(404, `Cannot find aokKnowledgebase with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgebase updated', objAokKnowledgebase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aokKnowledgebaseCtrl.updateAokKnowledgebaseByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAokKnowledgebase = await aokKnowledgebaseService.updateAokKnowledgebaseByCreatedBy(createdBy, req.body);
            if (!objAokKnowledgebase) {
                util.setError(404, `Cannot find aokKnowledgebase with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgebase updated', objAokKnowledgebase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aokKnowledgebaseCtrl.updateAokKnowledgebaseByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAokKnowledgebase = await aokKnowledgebaseService.updateAokKnowledgebaseByAssignedUserId(assignedUserId, req.body);
            if (!objAokKnowledgebase) {
                util.setError(404, `Cannot find aokKnowledgebase with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgebase updated', objAokKnowledgebase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aokKnowledgebaseCtrl.updateAokKnowledgebaseByUserIdC = async (req, res) => {
     const { userIdC } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAokKnowledgebase = await aokKnowledgebaseService.updateAokKnowledgebaseByUserIdC(userIdC, req.body);
            if (!objAokKnowledgebase) {
                util.setError(404, `Cannot find aokKnowledgebase with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgebase updated', objAokKnowledgebase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aokKnowledgebaseCtrl.updateAokKnowledgebaseByUserId1C = async (req, res) => {
     const { userId1C } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAokKnowledgebase = await aokKnowledgebaseService.updateAokKnowledgebaseByUserId1C(userId1C, req.body);
            if (!objAokKnowledgebase) {
                util.setError(404, `Cannot find aokKnowledgebase with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgebase updated', objAokKnowledgebase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aokKnowledgebaseCtrl;
//</es-section>
