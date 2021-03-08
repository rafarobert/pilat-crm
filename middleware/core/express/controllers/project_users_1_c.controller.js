/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:51 GMT-0400 (Bolivia Time)
 * Time: 15:36:51
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:51 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:51
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const projectUser1CService = require('../services/project_users_1_c.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const projectUsers1CCtrl = {};
projectUsers1CCtrl.service = projectUser1CService;


projectUsers1CCtrl.getAllProjectUsers1C = async (req, res) => {
    try {
        const objProjectUsers1C = await projectUser1CService.getAllProjectUsers1C(req.query);
        if (objProjectUsers1C.length > 0) {
            util.setSuccess(200, 'ProjectUsers1C retrieved', objProjectUsers1C);
        } else {
            util.setSuccess(200, 'No projectUser1C found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectUsers1CCtrl.getAProjectUser1C = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objProjectUser1C = await projectUser1CService.getAProjectUser1C(id, req.query);
        if (!objProjectUser1C) {
            util.setError(404, `Cannot find projectUser1C with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found projectUser1C', objProjectUser1C);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectUsers1CCtrl.addProjectUser1C = async (req, res) => {
    try {
        const objProjectUser1C = await projectUser1CService.addProjectUser1C(req.body);
        util.setSuccess(201, 'ProjectUser1C Added!', objProjectUser1C);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectUsers1CCtrl.updateProjectUser1C = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objProjectUser1C = await projectUser1CService.updateProjectUser1C(id, req.body);
        if (!objProjectUser1C) {
            util.setError(404, `Cannot find projectUser1C with the id: ${id}`);
        } else {
            util.setSuccess(200, 'ProjectUser1C updated', objProjectUser1C);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

projectUsers1CCtrl.deleteProjectUser1C = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objProjectUser1C = await projectUser1CService.deleteProjectUser1C(id);
        if (objProjectUser1C) {
            util.setSuccess(200, 'ProjectUser1C deleted', objProjectUser1C);
        } else {
            util.setError(404, `ProjectUser1C with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



projectUsers1CCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objProjectUser1C = await projectUser1CService.findOneById(id, req.query);
        if (!objProjectUser1C) {
            util.setError(404, `Cannot find projectUser1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectUser1C', objProjectUser1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectUsers1CCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objProjectUser1C = await projectUser1CService.findOneByDeleted(deleted, req.query);
        if (!objProjectUser1C) {
            util.setError(404, `Cannot find projectUser1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectUser1C', objProjectUser1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectUsers1CCtrl.findOneByProjectUsers1projectIda = async (req, res) => {
    try {
        const { projectUsers1projectIda } = req.params;
        const objProjectUser1C = await projectUser1CService.findOneByProjectUsers1projectIda(projectUsers1projectIda, req.query);
        if (!objProjectUser1C) {
            util.setError(404, `Cannot find projectUser1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectUser1C', objProjectUser1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectUsers1CCtrl.findOneByProjectUsers1usersIdb = async (req, res) => {
    try {
        const { projectUsers1usersIdb } = req.params;
        const objProjectUser1C = await projectUser1CService.findOneByProjectUsers1usersIdb(projectUsers1usersIdb, req.query);
        if (!objProjectUser1C) {
            util.setError(404, `Cannot find projectUser1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectUser1C', objProjectUser1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectUsers1CCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objProjectUser1C = await projectUser1CService.findOneByDateModified(dateModified, req.query);
        if (!objProjectUser1C) {
            util.setError(404, `Cannot find projectUser1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectUser1C', objProjectUser1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



projectUsers1CCtrl.updateProjectUser1CById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProjectUser1C = await projectUser1CService.updateProjectUser1CById(id, req.body);
            if (!objProjectUser1C) {
                util.setError(404, `Cannot find projectUser1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectUser1C updated', objProjectUser1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectUsers1CCtrl.updateProjectUser1CByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProjectUser1C = await projectUser1CService.updateProjectUser1CByDeleted(deleted, req.body);
            if (!objProjectUser1C) {
                util.setError(404, `Cannot find projectUser1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectUser1C updated', objProjectUser1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectUsers1CCtrl.updateProjectUser1CByProjectUsers1projectIda = async (req, res) => {
     const { projectUsers1projectIda } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProjectUser1C = await projectUser1CService.updateProjectUser1CByProjectUsers1projectIda(projectUsers1projectIda, req.body);
            if (!objProjectUser1C) {
                util.setError(404, `Cannot find projectUser1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectUser1C updated', objProjectUser1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectUsers1CCtrl.updateProjectUser1CByProjectUsers1usersIdb = async (req, res) => {
     const { projectUsers1usersIdb } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProjectUser1C = await projectUser1CService.updateProjectUser1CByProjectUsers1usersIdb(projectUsers1usersIdb, req.body);
            if (!objProjectUser1C) {
                util.setError(404, `Cannot find projectUser1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectUser1C updated', objProjectUser1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectUsers1CCtrl.updateProjectUser1CByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProjectUser1C = await projectUser1CService.updateProjectUser1CByDateModified(dateModified, req.body);
            if (!objProjectUser1C) {
                util.setError(404, `Cannot find projectUser1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectUser1C updated', objProjectUser1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = projectUsers1CCtrl;
//</es-section>
