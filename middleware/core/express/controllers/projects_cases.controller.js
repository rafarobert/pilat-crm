/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:47 GMT-0400 (Bolivia Time)
 * Time: 15:36:47
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:47 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:47
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const projectCaseService = require('../services/projects_cases.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const projectsCasesCtrl = {};
projectsCasesCtrl.service = projectCaseService;


projectsCasesCtrl.getAllProjectsCases = async (req, res) => {
    try {
        const objProjectsCases = await projectCaseService.getAllProjectsCases(req.query);
        if (objProjectsCases.length > 0) {
            util.setSuccess(200, 'ProjectsCases retrieved', objProjectsCases);
        } else {
            util.setSuccess(200, 'No projectCase found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectsCasesCtrl.getAProjectCase = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objProjectCase = await projectCaseService.getAProjectCase(id, req.query);
        if (!objProjectCase) {
            util.setError(404, `Cannot find projectCase with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found projectCase', objProjectCase);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectsCasesCtrl.addProjectCase = async (req, res) => {
    try {
        const objProjectCase = await projectCaseService.addProjectCase(req.body);
        util.setSuccess(201, 'ProjectCase Added!', objProjectCase);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectsCasesCtrl.updateProjectCase = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objProjectCase = await projectCaseService.updateProjectCase(id, req.body);
        if (!objProjectCase) {
            util.setError(404, `Cannot find projectCase with the id: ${id}`);
        } else {
            util.setSuccess(200, 'ProjectCase updated', objProjectCase);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

projectsCasesCtrl.deleteProjectCase = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objProjectCase = await projectCaseService.deleteProjectCase(id);
        if (objProjectCase) {
            util.setSuccess(200, 'ProjectCase deleted', objProjectCase);
        } else {
            util.setError(404, `ProjectCase with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



projectsCasesCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objProjectCase = await projectCaseService.findOneById(id, req.query);
        if (!objProjectCase) {
            util.setError(404, `Cannot find projectCase with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectCase', objProjectCase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectsCasesCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objProjectCase = await projectCaseService.findOneByDeleted(deleted, req.query);
        if (!objProjectCase) {
            util.setError(404, `Cannot find projectCase with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectCase', objProjectCase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectsCasesCtrl.findOneByCaseId = async (req, res) => {
    try {
        const { caseId } = req.params;
        const objProjectCase = await projectCaseService.findOneByCaseId(caseId, req.query);
        if (!objProjectCase) {
            util.setError(404, `Cannot find projectCase with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectCase', objProjectCase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectsCasesCtrl.findOneByProjectId = async (req, res) => {
    try {
        const { projectId } = req.params;
        const objProjectCase = await projectCaseService.findOneByProjectId(projectId, req.query);
        if (!objProjectCase) {
            util.setError(404, `Cannot find projectCase with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectCase', objProjectCase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectsCasesCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objProjectCase = await projectCaseService.findOneByDateModified(dateModified, req.query);
        if (!objProjectCase) {
            util.setError(404, `Cannot find projectCase with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectCase', objProjectCase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



projectsCasesCtrl.updateProjectCaseById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProjectCase = await projectCaseService.updateProjectCaseById(id, req.body);
            if (!objProjectCase) {
                util.setError(404, `Cannot find projectCase with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectCase updated', objProjectCase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectsCasesCtrl.updateProjectCaseByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProjectCase = await projectCaseService.updateProjectCaseByDeleted(deleted, req.body);
            if (!objProjectCase) {
                util.setError(404, `Cannot find projectCase with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectCase updated', objProjectCase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectsCasesCtrl.updateProjectCaseByCaseId = async (req, res) => {
     const { caseId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProjectCase = await projectCaseService.updateProjectCaseByCaseId(caseId, req.body);
            if (!objProjectCase) {
                util.setError(404, `Cannot find projectCase with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectCase updated', objProjectCase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectsCasesCtrl.updateProjectCaseByProjectId = async (req, res) => {
     const { projectId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProjectCase = await projectCaseService.updateProjectCaseByProjectId(projectId, req.body);
            if (!objProjectCase) {
                util.setError(404, `Cannot find projectCase with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectCase updated', objProjectCase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectsCasesCtrl.updateProjectCaseByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProjectCase = await projectCaseService.updateProjectCaseByDateModified(dateModified, req.body);
            if (!objProjectCase) {
                util.setError(404, `Cannot find projectCase with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectCase updated', objProjectCase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = projectsCasesCtrl;
//</es-section>
