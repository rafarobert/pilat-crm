/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:22 GMT-0400 (Bolivia Time)
 * Time: 14:1:22
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:22 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:22
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const projectTaskAuditService = require('../services/project_task_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const projectTaskAuditCtrl = {};
projectTaskAuditCtrl.service = projectTaskAuditService;


projectTaskAuditCtrl.getAllProjectTaskAudit = async (req, res) => {
    try {
        const objProjectTaskAudit = await projectTaskAuditService.getAllProjectTaskAudit(req.query);
        if (objProjectTaskAudit.length > 0) {
            util.setSuccess(200, 'ProjectTaskAudit retrieved', objProjectTaskAudit);
        } else {
            util.setSuccess(200, 'No projectTaskAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskAuditCtrl.getAProjectTaskAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objProjectTaskAudit = await projectTaskAuditService.getAProjectTaskAudit(id, req.query);
        if (!objProjectTaskAudit) {
            util.setError(404, `Cannot find projectTaskAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found projectTaskAudit', objProjectTaskAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskAuditCtrl.addProjectTaskAudit = async (req, res) => {
    try {
        const objProjectTaskAudit = await projectTaskAuditService.addProjectTaskAudit(req.body);
        util.setSuccess(201, 'ProjectTaskAudit Added!', objProjectTaskAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskAuditCtrl.updateProjectTaskAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objProjectTaskAudit = await projectTaskAuditService.updateProjectTaskAudit(id, req.body);
        if (!objProjectTaskAudit) {
            util.setError(404, `Cannot find projectTaskAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'ProjectTaskAudit updated', objProjectTaskAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

projectTaskAuditCtrl.deleteProjectTaskAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objProjectTaskAudit = await projectTaskAuditService.deleteProjectTaskAudit(id);
        if (objProjectTaskAudit) {
            util.setSuccess(200, 'ProjectTaskAudit deleted', objProjectTaskAudit);
        } else {
            util.setError(404, `ProjectTaskAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



projectTaskAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objProjectTaskAudit = await projectTaskAuditService.findOneById(id, req.query);
        if (!objProjectTaskAudit) {
            util.setError(404, `Cannot find projectTaskAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectTaskAudit', objProjectTaskAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objProjectTaskAudit = await projectTaskAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objProjectTaskAudit) {
            util.setError(404, `Cannot find projectTaskAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectTaskAudit', objProjectTaskAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objProjectTaskAudit = await projectTaskAuditService.findOneByFieldName(fieldName, req.query);
        if (!objProjectTaskAudit) {
            util.setError(404, `Cannot find projectTaskAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectTaskAudit', objProjectTaskAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objProjectTaskAudit = await projectTaskAuditService.findOneByDataType(dataType, req.query);
        if (!objProjectTaskAudit) {
            util.setError(404, `Cannot find projectTaskAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectTaskAudit', objProjectTaskAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objProjectTaskAudit = await projectTaskAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objProjectTaskAudit) {
            util.setError(404, `Cannot find projectTaskAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectTaskAudit', objProjectTaskAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objProjectTaskAudit = await projectTaskAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objProjectTaskAudit) {
            util.setError(404, `Cannot find projectTaskAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectTaskAudit', objProjectTaskAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objProjectTaskAudit = await projectTaskAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objProjectTaskAudit) {
            util.setError(404, `Cannot find projectTaskAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectTaskAudit', objProjectTaskAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objProjectTaskAudit = await projectTaskAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objProjectTaskAudit) {
            util.setError(404, `Cannot find projectTaskAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectTaskAudit', objProjectTaskAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objProjectTaskAudit = await projectTaskAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objProjectTaskAudit) {
            util.setError(404, `Cannot find projectTaskAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectTaskAudit', objProjectTaskAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objProjectTaskAudit = await projectTaskAuditService.findOneByParentId(parentId, req.query);
        if (!objProjectTaskAudit) {
            util.setError(404, `Cannot find projectTaskAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectTaskAudit', objProjectTaskAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



projectTaskAuditCtrl.updateProjectTaskAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectTaskAudit = await projectTaskAuditService.updateProjectTaskAuditById(id, req.body);
            if (!objProjectTaskAudit) {
                util.setError(404, `Cannot find projectTaskAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectTaskAudit updated', objProjectTaskAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectTaskAuditCtrl.updateProjectTaskAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectTaskAudit = await projectTaskAuditService.updateProjectTaskAuditByCreatedBy(createdBy, req.body);
            if (!objProjectTaskAudit) {
                util.setError(404, `Cannot find projectTaskAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectTaskAudit updated', objProjectTaskAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectTaskAuditCtrl.updateProjectTaskAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectTaskAudit = await projectTaskAuditService.updateProjectTaskAuditByFieldName(fieldName, req.body);
            if (!objProjectTaskAudit) {
                util.setError(404, `Cannot find projectTaskAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectTaskAudit updated', objProjectTaskAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectTaskAuditCtrl.updateProjectTaskAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectTaskAudit = await projectTaskAuditService.updateProjectTaskAuditByDataType(dataType, req.body);
            if (!objProjectTaskAudit) {
                util.setError(404, `Cannot find projectTaskAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectTaskAudit updated', objProjectTaskAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectTaskAuditCtrl.updateProjectTaskAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectTaskAudit = await projectTaskAuditService.updateProjectTaskAuditByBeforeValueString(beforeValueString, req.body);
            if (!objProjectTaskAudit) {
                util.setError(404, `Cannot find projectTaskAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectTaskAudit updated', objProjectTaskAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectTaskAuditCtrl.updateProjectTaskAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectTaskAudit = await projectTaskAuditService.updateProjectTaskAuditByAfterValueString(afterValueString, req.body);
            if (!objProjectTaskAudit) {
                util.setError(404, `Cannot find projectTaskAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectTaskAudit updated', objProjectTaskAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectTaskAuditCtrl.updateProjectTaskAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectTaskAudit = await projectTaskAuditService.updateProjectTaskAuditByBeforeValueText(beforeValueText, req.body);
            if (!objProjectTaskAudit) {
                util.setError(404, `Cannot find projectTaskAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectTaskAudit updated', objProjectTaskAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectTaskAuditCtrl.updateProjectTaskAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectTaskAudit = await projectTaskAuditService.updateProjectTaskAuditByAfterValueText(afterValueText, req.body);
            if (!objProjectTaskAudit) {
                util.setError(404, `Cannot find projectTaskAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectTaskAudit updated', objProjectTaskAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectTaskAuditCtrl.updateProjectTaskAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectTaskAudit = await projectTaskAuditService.updateProjectTaskAuditByDateCreated(dateCreated, req.body);
            if (!objProjectTaskAudit) {
                util.setError(404, `Cannot find projectTaskAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectTaskAudit updated', objProjectTaskAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectTaskAuditCtrl.updateProjectTaskAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectTaskAudit = await projectTaskAuditService.updateProjectTaskAuditByParentId(parentId, req.body);
            if (!objProjectTaskAudit) {
                util.setError(404, `Cannot find projectTaskAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectTaskAudit updated', objProjectTaskAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = projectTaskAuditCtrl;
//</es-section>
