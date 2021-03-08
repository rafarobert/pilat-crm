/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:46 GMT-0400 (Bolivia Time)
 * Time: 15:36:46
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:46 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:46
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const projectService = require('../services/project.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const projectCtrl = {};
projectCtrl.service = projectService;


projectCtrl.getAllProject = async (req, res) => {
    try {
        const objProject = await projectService.getAllProject(req.query);
        if (objProject.length > 0) {
            util.setSuccess(200, 'Project retrieved', objProject);
        } else {
            util.setSuccess(200, 'No project found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectCtrl.getAProject = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objProject = await projectService.getAProject(id, req.query);
        if (!objProject) {
            util.setError(404, `Cannot find project with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found project', objProject);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectCtrl.addProject = async (req, res) => {
    try {
        const objProject = await projectService.addProject(req.body);
        util.setSuccess(201, 'Project Added!', objProject);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectCtrl.updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objProject = await projectService.updateProject(id, req.body);
        if (!objProject) {
            util.setError(404, `Cannot find project with the id: ${id}`);
        } else {
            util.setSuccess(200, 'Project updated', objProject);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

projectCtrl.deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objProject = await projectService.deleteProject(id);
        if (objProject) {
            util.setSuccess(200, 'Project deleted', objProject);
        } else {
            util.setError(404, `Project with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



projectCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objProject = await projectService.findOneById(id, req.query);
        if (!objProject) {
            util.setError(404, `Cannot find project with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found project', objProject);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objProject = await projectService.findOneByDeleted(deleted, req.query);
        if (!objProject) {
            util.setError(404, `Cannot find project with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found project', objProject);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectCtrl.findOneByOverrideBusinessHours = async (req, res) => {
    try {
        const { overrideBusinessHours } = req.params;
        const objProject = await projectService.findOneByOverrideBusinessHours(overrideBusinessHours, req.query);
        if (!objProject) {
            util.setError(404, `Cannot find project with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found project', objProject);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objProject = await projectService.findOneByName(name, req.query);
        if (!objProject) {
            util.setError(404, `Cannot find project with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found project', objProject);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectCtrl.findOneByStatus = async (req, res) => {
    try {
        const { status } = req.params;
        const objProject = await projectService.findOneByStatus(status, req.query);
        if (!objProject) {
            util.setError(404, `Cannot find project with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found project', objProject);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectCtrl.findOneByPriority = async (req, res) => {
    try {
        const { priority } = req.params;
        const objProject = await projectService.findOneByPriority(priority, req.query);
        if (!objProject) {
            util.setError(404, `Cannot find project with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found project', objProject);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objProject = await projectService.findOneByDescription(description, req.query);
        if (!objProject) {
            util.setError(404, `Cannot find project with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found project', objProject);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objProject = await projectService.findOneByDateEntered(dateEntered, req.query);
        if (!objProject) {
            util.setError(404, `Cannot find project with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found project', objProject);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objProject = await projectService.findOneByDateModified(dateModified, req.query);
        if (!objProject) {
            util.setError(404, `Cannot find project with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found project', objProject);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectCtrl.findOneByEstimatedStartDate = async (req, res) => {
    try {
        const { estimatedStartDate } = req.params;
        const objProject = await projectService.findOneByEstimatedStartDate(estimatedStartDate, req.query);
        if (!objProject) {
            util.setError(404, `Cannot find project with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found project', objProject);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectCtrl.findOneByEstimatedEndDate = async (req, res) => {
    try {
        const { estimatedEndDate } = req.params;
        const objProject = await projectService.findOneByEstimatedEndDate(estimatedEndDate, req.query);
        if (!objProject) {
            util.setError(404, `Cannot find project with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found project', objProject);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objProject = await projectService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objProject) {
            util.setError(404, `Cannot find project with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found project', objProject);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objProject = await projectService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objProject) {
            util.setError(404, `Cannot find project with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found project', objProject);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objProject = await projectService.findOneByCreatedBy(createdBy, req.query);
        if (!objProject) {
            util.setError(404, `Cannot find project with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found project', objProject);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



projectCtrl.updateProjectById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProject = await projectService.updateProjectById(id, req.body);
            if (!objProject) {
                util.setError(404, `Cannot find project with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Project updated', objProject);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectCtrl.updateProjectByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProject = await projectService.updateProjectByDeleted(deleted, req.body);
            if (!objProject) {
                util.setError(404, `Cannot find project with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Project updated', objProject);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectCtrl.updateProjectByOverrideBusinessHours = async (req, res) => {
     const { overrideBusinessHours } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProject = await projectService.updateProjectByOverrideBusinessHours(overrideBusinessHours, req.body);
            if (!objProject) {
                util.setError(404, `Cannot find project with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Project updated', objProject);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectCtrl.updateProjectByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProject = await projectService.updateProjectByName(name, req.body);
            if (!objProject) {
                util.setError(404, `Cannot find project with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Project updated', objProject);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectCtrl.updateProjectByStatus = async (req, res) => {
     const { status } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProject = await projectService.updateProjectByStatus(status, req.body);
            if (!objProject) {
                util.setError(404, `Cannot find project with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Project updated', objProject);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectCtrl.updateProjectByPriority = async (req, res) => {
     const { priority } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProject = await projectService.updateProjectByPriority(priority, req.body);
            if (!objProject) {
                util.setError(404, `Cannot find project with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Project updated', objProject);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectCtrl.updateProjectByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProject = await projectService.updateProjectByDescription(description, req.body);
            if (!objProject) {
                util.setError(404, `Cannot find project with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Project updated', objProject);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectCtrl.updateProjectByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProject = await projectService.updateProjectByDateEntered(dateEntered, req.body);
            if (!objProject) {
                util.setError(404, `Cannot find project with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Project updated', objProject);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectCtrl.updateProjectByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProject = await projectService.updateProjectByDateModified(dateModified, req.body);
            if (!objProject) {
                util.setError(404, `Cannot find project with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Project updated', objProject);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectCtrl.updateProjectByEstimatedStartDate = async (req, res) => {
     const { estimatedStartDate } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProject = await projectService.updateProjectByEstimatedStartDate(estimatedStartDate, req.body);
            if (!objProject) {
                util.setError(404, `Cannot find project with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Project updated', objProject);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectCtrl.updateProjectByEstimatedEndDate = async (req, res) => {
     const { estimatedEndDate } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProject = await projectService.updateProjectByEstimatedEndDate(estimatedEndDate, req.body);
            if (!objProject) {
                util.setError(404, `Cannot find project with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Project updated', objProject);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectCtrl.updateProjectByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProject = await projectService.updateProjectByAssignedUserId(assignedUserId, req.body);
            if (!objProject) {
                util.setError(404, `Cannot find project with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Project updated', objProject);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectCtrl.updateProjectByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProject = await projectService.updateProjectByModifiedUserId(modifiedUserId, req.body);
            if (!objProject) {
                util.setError(404, `Cannot find project with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Project updated', objProject);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectCtrl.updateProjectByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProject = await projectService.updateProjectByCreatedBy(createdBy, req.body);
            if (!objProject) {
                util.setError(404, `Cannot find project with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Project updated', objProject);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = projectCtrl;
//</es-section>
