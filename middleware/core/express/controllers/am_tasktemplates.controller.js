/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:55:53 GMT-0400 (Bolivia Time)
 * Time: 14:55:53
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:55:53 GMT-0400 (Bolivia Time)
 * Last time updated: 14:55:53
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const amTasktemplateService = require('../services/am_tasktemplates.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const amTasktemplatesCtrl = {};
amTasktemplatesCtrl.service = amTasktemplateService;


amTasktemplatesCtrl.getAllAmTasktemplates = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.amTasktemplates.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objAmTasktemplates = await amTasktemplateService.getAllAmTasktemplates(req.query);
        if (objAmTasktemplates && objAmTasktemplates.rows && objAmTasktemplates.count) {
            util.setSuccess(200, 'AmTasktemplates retrieved', objAmTasktemplates.rows, objAmTasktemplates.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No amTasktemplate found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amTasktemplatesCtrl.getAAmTasktemplate = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAmTasktemplate = await amTasktemplateService.getAAmTasktemplate(id, req.query);
        if (!objAmTasktemplate) {
            util.setError(404, `Cannot find amTasktemplate with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found amTasktemplate', objAmTasktemplate);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amTasktemplatesCtrl.addAmTasktemplate = async (req, res) => {
    try {
        const objAmTasktemplate = await amTasktemplateService.addAmTasktemplate(req.body);
        util.setSuccess(201, 'AmTasktemplate Added!', objAmTasktemplate);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amTasktemplatesCtrl.updateAmTasktemplate = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAmTasktemplate = await amTasktemplateService.updateAmTasktemplate(id, req.body);
        if (!objAmTasktemplate) {
            util.setError(404, `Cannot find amTasktemplate with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AmTasktemplate updated', objAmTasktemplate);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

amTasktemplatesCtrl.deleteAmTasktemplate = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAmTasktemplate = await amTasktemplateService.deleteAmTasktemplate(id);
        if (objAmTasktemplate) {
            util.setSuccess(200, 'AmTasktemplate deleted', objAmTasktemplate);
        } else {
            util.setError(404, `AmTasktemplate with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



amTasktemplatesCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAmTasktemplate = await amTasktemplateService.findOneById(id, req.query);
        if (!objAmTasktemplate) {
            util.setError(404, `Cannot find amTasktemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amTasktemplate', objAmTasktemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amTasktemplatesCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAmTasktemplate = await amTasktemplateService.findOneByDeleted(deleted, req.query);
        if (!objAmTasktemplate) {
            util.setError(404, `Cannot find amTasktemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amTasktemplate', objAmTasktemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amTasktemplatesCtrl.findOneByMilestoneFlag = async (req, res) => {
    try {
        const { milestoneFlag } = req.params;
        const objAmTasktemplate = await amTasktemplateService.findOneByMilestoneFlag(milestoneFlag, req.query);
        if (!objAmTasktemplate) {
            util.setError(404, `Cannot find amTasktemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amTasktemplate', objAmTasktemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amTasktemplatesCtrl.findOneByPercentComplete = async (req, res) => {
    try {
        const { percentComplete } = req.params;
        const objAmTasktemplate = await amTasktemplateService.findOneByPercentComplete(percentComplete, req.query);
        if (!objAmTasktemplate) {
            util.setError(404, `Cannot find amTasktemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amTasktemplate', objAmTasktemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amTasktemplatesCtrl.findOneByPredecessors = async (req, res) => {
    try {
        const { predecessors } = req.params;
        const objAmTasktemplate = await amTasktemplateService.findOneByPredecessors(predecessors, req.query);
        if (!objAmTasktemplate) {
            util.setError(404, `Cannot find amTasktemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amTasktemplate', objAmTasktemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amTasktemplatesCtrl.findOneByTaskNumber = async (req, res) => {
    try {
        const { taskNumber } = req.params;
        const objAmTasktemplate = await amTasktemplateService.findOneByTaskNumber(taskNumber, req.query);
        if (!objAmTasktemplate) {
            util.setError(404, `Cannot find amTasktemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amTasktemplate', objAmTasktemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amTasktemplatesCtrl.findOneByOrderNumber = async (req, res) => {
    try {
        const { orderNumber } = req.params;
        const objAmTasktemplate = await amTasktemplateService.findOneByOrderNumber(orderNumber, req.query);
        if (!objAmTasktemplate) {
            util.setError(404, `Cannot find amTasktemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amTasktemplate', objAmTasktemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amTasktemplatesCtrl.findOneByEstimatedEffort = async (req, res) => {
    try {
        const { estimatedEffort } = req.params;
        const objAmTasktemplate = await amTasktemplateService.findOneByEstimatedEffort(estimatedEffort, req.query);
        if (!objAmTasktemplate) {
            util.setError(404, `Cannot find amTasktemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amTasktemplate', objAmTasktemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amTasktemplatesCtrl.findOneByDuration = async (req, res) => {
    try {
        const { duration } = req.params;
        const objAmTasktemplate = await amTasktemplateService.findOneByDuration(duration, req.query);
        if (!objAmTasktemplate) {
            util.setError(404, `Cannot find amTasktemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amTasktemplate', objAmTasktemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amTasktemplatesCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objAmTasktemplate = await amTasktemplateService.findOneByName(name, req.query);
        if (!objAmTasktemplate) {
            util.setError(404, `Cannot find amTasktemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amTasktemplate', objAmTasktemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amTasktemplatesCtrl.findOneByStatus = async (req, res) => {
    try {
        const { status } = req.params;
        const objAmTasktemplate = await amTasktemplateService.findOneByStatus(status, req.query);
        if (!objAmTasktemplate) {
            util.setError(404, `Cannot find amTasktemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amTasktemplate', objAmTasktemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amTasktemplatesCtrl.findOneByPriority = async (req, res) => {
    try {
        const { priority } = req.params;
        const objAmTasktemplate = await amTasktemplateService.findOneByPriority(priority, req.query);
        if (!objAmTasktemplate) {
            util.setError(404, `Cannot find amTasktemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amTasktemplate', objAmTasktemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amTasktemplatesCtrl.findOneByRelationshipType = async (req, res) => {
    try {
        const { relationshipType } = req.params;
        const objAmTasktemplate = await amTasktemplateService.findOneByRelationshipType(relationshipType, req.query);
        if (!objAmTasktemplate) {
            util.setError(404, `Cannot find amTasktemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amTasktemplate', objAmTasktemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amTasktemplatesCtrl.findOneByUtilization = async (req, res) => {
    try {
        const { utilization } = req.params;
        const objAmTasktemplate = await amTasktemplateService.findOneByUtilization(utilization, req.query);
        if (!objAmTasktemplate) {
            util.setError(404, `Cannot find amTasktemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amTasktemplate', objAmTasktemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amTasktemplatesCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objAmTasktemplate = await amTasktemplateService.findOneByDescription(description, req.query);
        if (!objAmTasktemplate) {
            util.setError(404, `Cannot find amTasktemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amTasktemplate', objAmTasktemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amTasktemplatesCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objAmTasktemplate = await amTasktemplateService.findOneByDateEntered(dateEntered, req.query);
        if (!objAmTasktemplate) {
            util.setError(404, `Cannot find amTasktemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amTasktemplate', objAmTasktemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amTasktemplatesCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAmTasktemplate = await amTasktemplateService.findOneByDateModified(dateModified, req.query);
        if (!objAmTasktemplate) {
            util.setError(404, `Cannot find amTasktemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amTasktemplate', objAmTasktemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amTasktemplatesCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objAmTasktemplate = await amTasktemplateService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objAmTasktemplate) {
            util.setError(404, `Cannot find amTasktemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amTasktemplate', objAmTasktemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amTasktemplatesCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAmTasktemplate = await amTasktemplateService.findOneByCreatedBy(createdBy, req.query);
        if (!objAmTasktemplate) {
            util.setError(404, `Cannot find amTasktemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amTasktemplate', objAmTasktemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amTasktemplatesCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objAmTasktemplate = await amTasktemplateService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objAmTasktemplate) {
            util.setError(404, `Cannot find amTasktemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amTasktemplate', objAmTasktemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



amTasktemplatesCtrl.updateAmTasktemplateById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmTasktemplate = await amTasktemplateService.updateAmTasktemplateById(id, req.body);
            if (!objAmTasktemplate) {
                util.setError(404, `Cannot find amTasktemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmTasktemplate updated', objAmTasktemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amTasktemplatesCtrl.updateAmTasktemplateByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmTasktemplate = await amTasktemplateService.updateAmTasktemplateByDeleted(deleted, req.body);
            if (!objAmTasktemplate) {
                util.setError(404, `Cannot find amTasktemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmTasktemplate updated', objAmTasktemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amTasktemplatesCtrl.updateAmTasktemplateByMilestoneFlag = async (req, res) => {
     const { milestoneFlag } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmTasktemplate = await amTasktemplateService.updateAmTasktemplateByMilestoneFlag(milestoneFlag, req.body);
            if (!objAmTasktemplate) {
                util.setError(404, `Cannot find amTasktemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmTasktemplate updated', objAmTasktemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amTasktemplatesCtrl.updateAmTasktemplateByPercentComplete = async (req, res) => {
     const { percentComplete } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmTasktemplate = await amTasktemplateService.updateAmTasktemplateByPercentComplete(percentComplete, req.body);
            if (!objAmTasktemplate) {
                util.setError(404, `Cannot find amTasktemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmTasktemplate updated', objAmTasktemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amTasktemplatesCtrl.updateAmTasktemplateByPredecessors = async (req, res) => {
     const { predecessors } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmTasktemplate = await amTasktemplateService.updateAmTasktemplateByPredecessors(predecessors, req.body);
            if (!objAmTasktemplate) {
                util.setError(404, `Cannot find amTasktemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmTasktemplate updated', objAmTasktemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amTasktemplatesCtrl.updateAmTasktemplateByTaskNumber = async (req, res) => {
     const { taskNumber } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmTasktemplate = await amTasktemplateService.updateAmTasktemplateByTaskNumber(taskNumber, req.body);
            if (!objAmTasktemplate) {
                util.setError(404, `Cannot find amTasktemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmTasktemplate updated', objAmTasktemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amTasktemplatesCtrl.updateAmTasktemplateByOrderNumber = async (req, res) => {
     const { orderNumber } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmTasktemplate = await amTasktemplateService.updateAmTasktemplateByOrderNumber(orderNumber, req.body);
            if (!objAmTasktemplate) {
                util.setError(404, `Cannot find amTasktemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmTasktemplate updated', objAmTasktemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amTasktemplatesCtrl.updateAmTasktemplateByEstimatedEffort = async (req, res) => {
     const { estimatedEffort } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmTasktemplate = await amTasktemplateService.updateAmTasktemplateByEstimatedEffort(estimatedEffort, req.body);
            if (!objAmTasktemplate) {
                util.setError(404, `Cannot find amTasktemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmTasktemplate updated', objAmTasktemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amTasktemplatesCtrl.updateAmTasktemplateByDuration = async (req, res) => {
     const { duration } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmTasktemplate = await amTasktemplateService.updateAmTasktemplateByDuration(duration, req.body);
            if (!objAmTasktemplate) {
                util.setError(404, `Cannot find amTasktemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmTasktemplate updated', objAmTasktemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amTasktemplatesCtrl.updateAmTasktemplateByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmTasktemplate = await amTasktemplateService.updateAmTasktemplateByName(name, req.body);
            if (!objAmTasktemplate) {
                util.setError(404, `Cannot find amTasktemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmTasktemplate updated', objAmTasktemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amTasktemplatesCtrl.updateAmTasktemplateByStatus = async (req, res) => {
     const { status } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmTasktemplate = await amTasktemplateService.updateAmTasktemplateByStatus(status, req.body);
            if (!objAmTasktemplate) {
                util.setError(404, `Cannot find amTasktemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmTasktemplate updated', objAmTasktemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amTasktemplatesCtrl.updateAmTasktemplateByPriority = async (req, res) => {
     const { priority } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmTasktemplate = await amTasktemplateService.updateAmTasktemplateByPriority(priority, req.body);
            if (!objAmTasktemplate) {
                util.setError(404, `Cannot find amTasktemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmTasktemplate updated', objAmTasktemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amTasktemplatesCtrl.updateAmTasktemplateByRelationshipType = async (req, res) => {
     const { relationshipType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmTasktemplate = await amTasktemplateService.updateAmTasktemplateByRelationshipType(relationshipType, req.body);
            if (!objAmTasktemplate) {
                util.setError(404, `Cannot find amTasktemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmTasktemplate updated', objAmTasktemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amTasktemplatesCtrl.updateAmTasktemplateByUtilization = async (req, res) => {
     const { utilization } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmTasktemplate = await amTasktemplateService.updateAmTasktemplateByUtilization(utilization, req.body);
            if (!objAmTasktemplate) {
                util.setError(404, `Cannot find amTasktemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmTasktemplate updated', objAmTasktemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amTasktemplatesCtrl.updateAmTasktemplateByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmTasktemplate = await amTasktemplateService.updateAmTasktemplateByDescription(description, req.body);
            if (!objAmTasktemplate) {
                util.setError(404, `Cannot find amTasktemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmTasktemplate updated', objAmTasktemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amTasktemplatesCtrl.updateAmTasktemplateByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmTasktemplate = await amTasktemplateService.updateAmTasktemplateByDateEntered(dateEntered, req.body);
            if (!objAmTasktemplate) {
                util.setError(404, `Cannot find amTasktemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmTasktemplate updated', objAmTasktemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amTasktemplatesCtrl.updateAmTasktemplateByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmTasktemplate = await amTasktemplateService.updateAmTasktemplateByDateModified(dateModified, req.body);
            if (!objAmTasktemplate) {
                util.setError(404, `Cannot find amTasktemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmTasktemplate updated', objAmTasktemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amTasktemplatesCtrl.updateAmTasktemplateByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmTasktemplate = await amTasktemplateService.updateAmTasktemplateByModifiedUserId(modifiedUserId, req.body);
            if (!objAmTasktemplate) {
                util.setError(404, `Cannot find amTasktemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmTasktemplate updated', objAmTasktemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amTasktemplatesCtrl.updateAmTasktemplateByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmTasktemplate = await amTasktemplateService.updateAmTasktemplateByCreatedBy(createdBy, req.body);
            if (!objAmTasktemplate) {
                util.setError(404, `Cannot find amTasktemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmTasktemplate updated', objAmTasktemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amTasktemplatesCtrl.updateAmTasktemplateByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmTasktemplate = await amTasktemplateService.updateAmTasktemplateByAssignedUserId(assignedUserId, req.body);
            if (!objAmTasktemplate) {
                util.setError(404, `Cannot find amTasktemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmTasktemplate updated', objAmTasktemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = amTasktemplatesCtrl;
//</es-section>
