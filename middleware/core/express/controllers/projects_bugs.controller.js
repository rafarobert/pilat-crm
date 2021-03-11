/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:30 GMT-0400 (Bolivia Time)
 * Time: 14:57:30
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:30 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:30
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const projectBugService = require('../services/projects_bugs.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const projectsBugsCtrl = {};
projectsBugsCtrl.service = projectBugService;


projectsBugsCtrl.getAllProjectsBugs = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.projectsBugs.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objProjectsBugs = await projectBugService.getAllProjectsBugs(req.query);
        if (objProjectsBugs && objProjectsBugs.rows && objProjectsBugs.count) {
            util.setSuccess(200, 'ProjectsBugs retrieved', objProjectsBugs.rows, objProjectsBugs.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No projectBug found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectsBugsCtrl.getAProjectBug = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objProjectBug = await projectBugService.getAProjectBug(id, req.query);
        if (!objProjectBug) {
            util.setError(404, `Cannot find projectBug with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found projectBug', objProjectBug);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectsBugsCtrl.addProjectBug = async (req, res) => {
    try {
        const objProjectBug = await projectBugService.addProjectBug(req.body);
        util.setSuccess(201, 'ProjectBug Added!', objProjectBug);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectsBugsCtrl.updateProjectBug = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objProjectBug = await projectBugService.updateProjectBug(id, req.body);
        if (!objProjectBug) {
            util.setError(404, `Cannot find projectBug with the id: ${id}`);
        } else {
            util.setSuccess(200, 'ProjectBug updated', objProjectBug);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

projectsBugsCtrl.deleteProjectBug = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objProjectBug = await projectBugService.deleteProjectBug(id);
        if (objProjectBug) {
            util.setSuccess(200, 'ProjectBug deleted', objProjectBug);
        } else {
            util.setError(404, `ProjectBug with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



projectsBugsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objProjectBug = await projectBugService.findOneById(id, req.query);
        if (!objProjectBug) {
            util.setError(404, `Cannot find projectBug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectBug', objProjectBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectsBugsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objProjectBug = await projectBugService.findOneByDeleted(deleted, req.query);
        if (!objProjectBug) {
            util.setError(404, `Cannot find projectBug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectBug', objProjectBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectsBugsCtrl.findOneByBugId = async (req, res) => {
    try {
        const { bugId } = req.params;
        const objProjectBug = await projectBugService.findOneByBugId(bugId, req.query);
        if (!objProjectBug) {
            util.setError(404, `Cannot find projectBug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectBug', objProjectBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectsBugsCtrl.findOneByProjectId = async (req, res) => {
    try {
        const { projectId } = req.params;
        const objProjectBug = await projectBugService.findOneByProjectId(projectId, req.query);
        if (!objProjectBug) {
            util.setError(404, `Cannot find projectBug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectBug', objProjectBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectsBugsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objProjectBug = await projectBugService.findOneByDateModified(dateModified, req.query);
        if (!objProjectBug) {
            util.setError(404, `Cannot find projectBug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectBug', objProjectBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



projectsBugsCtrl.updateProjectBugById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProjectBug = await projectBugService.updateProjectBugById(id, req.body);
            if (!objProjectBug) {
                util.setError(404, `Cannot find projectBug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectBug updated', objProjectBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectsBugsCtrl.updateProjectBugByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProjectBug = await projectBugService.updateProjectBugByDeleted(deleted, req.body);
            if (!objProjectBug) {
                util.setError(404, `Cannot find projectBug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectBug updated', objProjectBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectsBugsCtrl.updateProjectBugByBugId = async (req, res) => {
     const { bugId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProjectBug = await projectBugService.updateProjectBugByBugId(bugId, req.body);
            if (!objProjectBug) {
                util.setError(404, `Cannot find projectBug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectBug updated', objProjectBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectsBugsCtrl.updateProjectBugByProjectId = async (req, res) => {
     const { projectId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProjectBug = await projectBugService.updateProjectBugByProjectId(projectId, req.body);
            if (!objProjectBug) {
                util.setError(404, `Cannot find projectBug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectBug updated', objProjectBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectsBugsCtrl.updateProjectBugByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProjectBug = await projectBugService.updateProjectBugByDateModified(dateModified, req.body);
            if (!objProjectBug) {
                util.setError(404, `Cannot find projectBug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectBug updated', objProjectBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = projectsBugsCtrl;
//</es-section>
