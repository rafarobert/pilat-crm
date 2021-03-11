/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:36 GMT-0400 (Bolivia Time)
 * Time: 14:57:36
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:36 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:36
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const prospectListService = require('../services/prospect_lists.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const prospectListsCtrl = {};
prospectListsCtrl.service = prospectListService;


prospectListsCtrl.getAllProspectLists = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.prospectLists.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objProspectLists = await prospectListService.getAllProspectLists(req.query);
        if (objProspectLists && objProspectLists.rows && objProspectLists.count) {
            util.setSuccess(200, 'ProspectLists retrieved', objProspectLists.rows, objProspectLists.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No prospectList found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectListsCtrl.getAProspectList = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objProspectList = await prospectListService.getAProspectList(id, req.query);
        if (!objProspectList) {
            util.setError(404, `Cannot find prospectList with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found prospectList', objProspectList);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectListsCtrl.addProspectList = async (req, res) => {
    try {
        const objProspectList = await prospectListService.addProspectList(req.body);
        util.setSuccess(201, 'ProspectList Added!', objProspectList);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectListsCtrl.updateProspectList = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objProspectList = await prospectListService.updateProspectList(id, req.body);
        if (!objProspectList) {
            util.setError(404, `Cannot find prospectList with the id: ${id}`);
        } else {
            util.setSuccess(200, 'ProspectList updated', objProspectList);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

prospectListsCtrl.deleteProspectList = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objProspectList = await prospectListService.deleteProspectList(id);
        if (objProspectList) {
            util.setSuccess(200, 'ProspectList deleted', objProspectList);
        } else {
            util.setError(404, `ProspectList with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



prospectListsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objProspectList = await prospectListService.findOneById(id, req.query);
        if (!objProspectList) {
            util.setError(404, `Cannot find prospectList with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospectList', objProspectList);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectListsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objProspectList = await prospectListService.findOneByDeleted(deleted, req.query);
        if (!objProspectList) {
            util.setError(404, `Cannot find prospectList with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospectList', objProspectList);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectListsCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objProspectList = await prospectListService.findOneByName(name, req.query);
        if (!objProspectList) {
            util.setError(404, `Cannot find prospectList with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospectList', objProspectList);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectListsCtrl.findOneByListType = async (req, res) => {
    try {
        const { listType } = req.params;
        const objProspectList = await prospectListService.findOneByListType(listType, req.query);
        if (!objProspectList) {
            util.setError(404, `Cannot find prospectList with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospectList', objProspectList);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectListsCtrl.findOneByDomainName = async (req, res) => {
    try {
        const { domainName } = req.params;
        const objProspectList = await prospectListService.findOneByDomainName(domainName, req.query);
        if (!objProspectList) {
            util.setError(404, `Cannot find prospectList with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospectList', objProspectList);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectListsCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objProspectList = await prospectListService.findOneByDescription(description, req.query);
        if (!objProspectList) {
            util.setError(404, `Cannot find prospectList with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospectList', objProspectList);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectListsCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objProspectList = await prospectListService.findOneByDateEntered(dateEntered, req.query);
        if (!objProspectList) {
            util.setError(404, `Cannot find prospectList with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospectList', objProspectList);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectListsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objProspectList = await prospectListService.findOneByDateModified(dateModified, req.query);
        if (!objProspectList) {
            util.setError(404, `Cannot find prospectList with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospectList', objProspectList);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectListsCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objProspectList = await prospectListService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objProspectList) {
            util.setError(404, `Cannot find prospectList with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospectList', objProspectList);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectListsCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objProspectList = await prospectListService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objProspectList) {
            util.setError(404, `Cannot find prospectList with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospectList', objProspectList);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectListsCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objProspectList = await prospectListService.findOneByCreatedBy(createdBy, req.query);
        if (!objProspectList) {
            util.setError(404, `Cannot find prospectList with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospectList', objProspectList);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



prospectListsCtrl.updateProspectListById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspectList = await prospectListService.updateProspectListById(id, req.body);
            if (!objProspectList) {
                util.setError(404, `Cannot find prospectList with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProspectList updated', objProspectList);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectListsCtrl.updateProspectListByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspectList = await prospectListService.updateProspectListByDeleted(deleted, req.body);
            if (!objProspectList) {
                util.setError(404, `Cannot find prospectList with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProspectList updated', objProspectList);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectListsCtrl.updateProspectListByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspectList = await prospectListService.updateProspectListByName(name, req.body);
            if (!objProspectList) {
                util.setError(404, `Cannot find prospectList with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProspectList updated', objProspectList);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectListsCtrl.updateProspectListByListType = async (req, res) => {
     const { listType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspectList = await prospectListService.updateProspectListByListType(listType, req.body);
            if (!objProspectList) {
                util.setError(404, `Cannot find prospectList with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProspectList updated', objProspectList);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectListsCtrl.updateProspectListByDomainName = async (req, res) => {
     const { domainName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspectList = await prospectListService.updateProspectListByDomainName(domainName, req.body);
            if (!objProspectList) {
                util.setError(404, `Cannot find prospectList with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProspectList updated', objProspectList);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectListsCtrl.updateProspectListByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspectList = await prospectListService.updateProspectListByDescription(description, req.body);
            if (!objProspectList) {
                util.setError(404, `Cannot find prospectList with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProspectList updated', objProspectList);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectListsCtrl.updateProspectListByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspectList = await prospectListService.updateProspectListByDateEntered(dateEntered, req.body);
            if (!objProspectList) {
                util.setError(404, `Cannot find prospectList with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProspectList updated', objProspectList);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectListsCtrl.updateProspectListByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspectList = await prospectListService.updateProspectListByDateModified(dateModified, req.body);
            if (!objProspectList) {
                util.setError(404, `Cannot find prospectList with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProspectList updated', objProspectList);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectListsCtrl.updateProspectListByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspectList = await prospectListService.updateProspectListByAssignedUserId(assignedUserId, req.body);
            if (!objProspectList) {
                util.setError(404, `Cannot find prospectList with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProspectList updated', objProspectList);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectListsCtrl.updateProspectListByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspectList = await prospectListService.updateProspectListByModifiedUserId(modifiedUserId, req.body);
            if (!objProspectList) {
                util.setError(404, `Cannot find prospectList with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProspectList updated', objProspectList);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectListsCtrl.updateProspectListByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspectList = await prospectListService.updateProspectListByCreatedBy(createdBy, req.body);
            if (!objProspectList) {
                util.setError(404, `Cannot find prospectList with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProspectList updated', objProspectList);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = prospectListsCtrl;
//</es-section>
