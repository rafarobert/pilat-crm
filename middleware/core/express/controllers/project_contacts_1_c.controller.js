/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:31 GMT-0400 (Bolivia Time)
 * Time: 14:57:31
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:31 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:31
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const projectContact1CService = require('../services/project_contacts_1_c.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const projectContacts1CCtrl = {};
projectContacts1CCtrl.service = projectContact1CService;


projectContacts1CCtrl.getAllProjectContacts1C = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.projectContacts1C.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objProjectContacts1C = await projectContact1CService.getAllProjectContacts1C(req.query);
        if (objProjectContacts1C && objProjectContacts1C.rows && objProjectContacts1C.count) {
            util.setSuccess(200, 'ProjectContacts1C retrieved', objProjectContacts1C.rows, objProjectContacts1C.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No projectContact1C found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectContacts1CCtrl.getAProjectContact1C = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objProjectContact1C = await projectContact1CService.getAProjectContact1C(id, req.query);
        if (!objProjectContact1C) {
            util.setError(404, `Cannot find projectContact1C with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found projectContact1C', objProjectContact1C);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectContacts1CCtrl.addProjectContact1C = async (req, res) => {
    try {
        const objProjectContact1C = await projectContact1CService.addProjectContact1C(req.body);
        util.setSuccess(201, 'ProjectContact1C Added!', objProjectContact1C);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectContacts1CCtrl.updateProjectContact1C = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objProjectContact1C = await projectContact1CService.updateProjectContact1C(id, req.body);
        if (!objProjectContact1C) {
            util.setError(404, `Cannot find projectContact1C with the id: ${id}`);
        } else {
            util.setSuccess(200, 'ProjectContact1C updated', objProjectContact1C);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

projectContacts1CCtrl.deleteProjectContact1C = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objProjectContact1C = await projectContact1CService.deleteProjectContact1C(id);
        if (objProjectContact1C) {
            util.setSuccess(200, 'ProjectContact1C deleted', objProjectContact1C);
        } else {
            util.setError(404, `ProjectContact1C with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



projectContacts1CCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objProjectContact1C = await projectContact1CService.findOneById(id, req.query);
        if (!objProjectContact1C) {
            util.setError(404, `Cannot find projectContact1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectContact1C', objProjectContact1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectContacts1CCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objProjectContact1C = await projectContact1CService.findOneByDeleted(deleted, req.query);
        if (!objProjectContact1C) {
            util.setError(404, `Cannot find projectContact1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectContact1C', objProjectContact1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectContacts1CCtrl.findOneByProjectContacts1projectIda = async (req, res) => {
    try {
        const { projectContacts1projectIda } = req.params;
        const objProjectContact1C = await projectContact1CService.findOneByProjectContacts1projectIda(projectContacts1projectIda, req.query);
        if (!objProjectContact1C) {
            util.setError(404, `Cannot find projectContact1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectContact1C', objProjectContact1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectContacts1CCtrl.findOneByProjectContacts1contactsIdb = async (req, res) => {
    try {
        const { projectContacts1contactsIdb } = req.params;
        const objProjectContact1C = await projectContact1CService.findOneByProjectContacts1contactsIdb(projectContacts1contactsIdb, req.query);
        if (!objProjectContact1C) {
            util.setError(404, `Cannot find projectContact1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectContact1C', objProjectContact1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectContacts1CCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objProjectContact1C = await projectContact1CService.findOneByDateModified(dateModified, req.query);
        if (!objProjectContact1C) {
            util.setError(404, `Cannot find projectContact1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectContact1C', objProjectContact1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



projectContacts1CCtrl.updateProjectContact1CById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProjectContact1C = await projectContact1CService.updateProjectContact1CById(id, req.body);
            if (!objProjectContact1C) {
                util.setError(404, `Cannot find projectContact1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectContact1C updated', objProjectContact1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectContacts1CCtrl.updateProjectContact1CByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProjectContact1C = await projectContact1CService.updateProjectContact1CByDeleted(deleted, req.body);
            if (!objProjectContact1C) {
                util.setError(404, `Cannot find projectContact1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectContact1C updated', objProjectContact1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectContacts1CCtrl.updateProjectContact1CByProjectContacts1projectIda = async (req, res) => {
     const { projectContacts1projectIda } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProjectContact1C = await projectContact1CService.updateProjectContact1CByProjectContacts1projectIda(projectContacts1projectIda, req.body);
            if (!objProjectContact1C) {
                util.setError(404, `Cannot find projectContact1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectContact1C updated', objProjectContact1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectContacts1CCtrl.updateProjectContact1CByProjectContacts1contactsIdb = async (req, res) => {
     const { projectContacts1contactsIdb } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProjectContact1C = await projectContact1CService.updateProjectContact1CByProjectContacts1contactsIdb(projectContacts1contactsIdb, req.body);
            if (!objProjectContact1C) {
                util.setError(404, `Cannot find projectContact1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectContact1C updated', objProjectContact1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectContacts1CCtrl.updateProjectContact1CByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProjectContact1C = await projectContact1CService.updateProjectContact1CByDateModified(dateModified, req.body);
            if (!objProjectContact1C) {
                util.setError(404, `Cannot find projectContact1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectContact1C updated', objProjectContact1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = projectContacts1CCtrl;
//</es-section>
