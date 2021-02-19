/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:22 GMT-0400 (Bolivia Time)
 * Time: 18:38:22
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:22 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:22
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const projectTaskService = require('../services/project_task.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const projectTaskCtrl = {};
projectTaskCtrl.service = projectTaskService;


projectTaskCtrl.getAllProjectTask = async (req, res) => {
    try {
        const objProjectTask = await projectTaskService.getAllProjectTask(req.query);
        if (objProjectTask.length > 0) {
            util.setSuccess(200, 'ProjectTask retrieved', objProjectTask);
        } else {
            util.setSuccess(200, 'No projectTask found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskCtrl.getAProjectTask = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objProjectTask = await projectTaskService.getAProjectTask(id, req.query);
        if (!objProjectTask) {
            util.setError(404, `Cannot find projectTask with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found projectTask', objProjectTask);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskCtrl.addProjectTask = async (req, res) => {
    try {
        const objProjectTask = await projectTaskService.addProjectTask(req.body);
        util.setSuccess(201, 'ProjectTask Added!', objProjectTask);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskCtrl.updateProjectTask = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objProjectTask = await projectTaskService.updateProjectTask(id, req.body);
        if (!objProjectTask) {
            util.setError(404, `Cannot find projectTask with the id: ${id}`);
        } else {
            util.setSuccess(200, 'ProjectTask updated', objProjectTask);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

projectTaskCtrl.deleteProjectTask = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objProjectTask = await projectTaskService.deleteProjectTask(id);
        if (objProjectTask) {
            util.setSuccess(200, 'ProjectTask deleted', objProjectTask);
        } else {
            util.setError(404, `ProjectTask with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



projectTaskCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objProjectTask = await projectTaskService.findOneById(id, req.query);
        if (!objProjectTask) {
            util.setError(404, `Cannot find projectTask with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectTask', objProjectTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskCtrl.findOneByMilestoneFlag = async (req, res) => {
    try {
        const { milestoneFlag } = req.params;
        const objProjectTask = await projectTaskService.findOneByMilestoneFlag(milestoneFlag, req.query);
        if (!objProjectTask) {
            util.setError(404, `Cannot find projectTask with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectTask', objProjectTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objProjectTask = await projectTaskService.findOneByDeleted(deleted, req.query);
        if (!objProjectTask) {
            util.setError(404, `Cannot find projectTask with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectTask', objProjectTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskCtrl.findOneByProjectTaskId = async (req, res) => {
    try {
        const { projectTaskId } = req.params;
        const objProjectTask = await projectTaskService.findOneByProjectTaskId(projectTaskId, req.query);
        if (!objProjectTask) {
            util.setError(404, `Cannot find projectTask with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectTask', objProjectTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskCtrl.findOneByTimeStart = async (req, res) => {
    try {
        const { timeStart } = req.params;
        const objProjectTask = await projectTaskService.findOneByTimeStart(timeStart, req.query);
        if (!objProjectTask) {
            util.setError(404, `Cannot find projectTask with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectTask', objProjectTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskCtrl.findOneByTimeFinish = async (req, res) => {
    try {
        const { timeFinish } = req.params;
        const objProjectTask = await projectTaskService.findOneByTimeFinish(timeFinish, req.query);
        if (!objProjectTask) {
            util.setError(404, `Cannot find projectTask with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectTask', objProjectTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskCtrl.findOneByDuration = async (req, res) => {
    try {
        const { duration } = req.params;
        const objProjectTask = await projectTaskService.findOneByDuration(duration, req.query);
        if (!objProjectTask) {
            util.setError(404, `Cannot find projectTask with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectTask', objProjectTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskCtrl.findOneByActualDuration = async (req, res) => {
    try {
        const { actualDuration } = req.params;
        const objProjectTask = await projectTaskService.findOneByActualDuration(actualDuration, req.query);
        if (!objProjectTask) {
            util.setError(404, `Cannot find projectTask with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectTask', objProjectTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskCtrl.findOneByPercentComplete = async (req, res) => {
    try {
        const { percentComplete } = req.params;
        const objProjectTask = await projectTaskService.findOneByPercentComplete(percentComplete, req.query);
        if (!objProjectTask) {
            util.setError(404, `Cannot find projectTask with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectTask', objProjectTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskCtrl.findOneByParentTaskId = async (req, res) => {
    try {
        const { parentTaskId } = req.params;
        const objProjectTask = await projectTaskService.findOneByParentTaskId(parentTaskId, req.query);
        if (!objProjectTask) {
            util.setError(404, `Cannot find projectTask with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectTask', objProjectTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskCtrl.findOneByOrderNumber = async (req, res) => {
    try {
        const { orderNumber } = req.params;
        const objProjectTask = await projectTaskService.findOneByOrderNumber(orderNumber, req.query);
        if (!objProjectTask) {
            util.setError(404, `Cannot find projectTask with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectTask', objProjectTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskCtrl.findOneByTaskNumber = async (req, res) => {
    try {
        const { taskNumber } = req.params;
        const objProjectTask = await projectTaskService.findOneByTaskNumber(taskNumber, req.query);
        if (!objProjectTask) {
            util.setError(404, `Cannot find projectTask with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectTask', objProjectTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskCtrl.findOneByEstimatedEffort = async (req, res) => {
    try {
        const { estimatedEffort } = req.params;
        const objProjectTask = await projectTaskService.findOneByEstimatedEffort(estimatedEffort, req.query);
        if (!objProjectTask) {
            util.setError(404, `Cannot find projectTask with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectTask', objProjectTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskCtrl.findOneByActualEffort = async (req, res) => {
    try {
        const { actualEffort } = req.params;
        const objProjectTask = await projectTaskService.findOneByActualEffort(actualEffort, req.query);
        if (!objProjectTask) {
            util.setError(404, `Cannot find projectTask with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectTask', objProjectTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskCtrl.findOneByUtilization = async (req, res) => {
    try {
        const { utilization } = req.params;
        const objProjectTask = await projectTaskService.findOneByUtilization(utilization, req.query);
        if (!objProjectTask) {
            util.setError(404, `Cannot find projectTask with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectTask', objProjectTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objProjectTask = await projectTaskService.findOneByName(name, req.query);
        if (!objProjectTask) {
            util.setError(404, `Cannot find projectTask with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectTask', objProjectTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskCtrl.findOneByStatus = async (req, res) => {
    try {
        const { status } = req.params;
        const objProjectTask = await projectTaskService.findOneByStatus(status, req.query);
        if (!objProjectTask) {
            util.setError(404, `Cannot find projectTask with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectTask', objProjectTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskCtrl.findOneByRelationshipType = async (req, res) => {
    try {
        const { relationshipType } = req.params;
        const objProjectTask = await projectTaskService.findOneByRelationshipType(relationshipType, req.query);
        if (!objProjectTask) {
            util.setError(404, `Cannot find projectTask with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectTask', objProjectTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskCtrl.findOneByPriority = async (req, res) => {
    try {
        const { priority } = req.params;
        const objProjectTask = await projectTaskService.findOneByPriority(priority, req.query);
        if (!objProjectTask) {
            util.setError(404, `Cannot find projectTask with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectTask', objProjectTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objProjectTask = await projectTaskService.findOneByDescription(description, req.query);
        if (!objProjectTask) {
            util.setError(404, `Cannot find projectTask with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectTask', objProjectTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskCtrl.findOneByPredecessors = async (req, res) => {
    try {
        const { predecessors } = req.params;
        const objProjectTask = await projectTaskService.findOneByPredecessors(predecessors, req.query);
        if (!objProjectTask) {
            util.setError(404, `Cannot find projectTask with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectTask', objProjectTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskCtrl.findOneByDurationUnit = async (req, res) => {
    try {
        const { durationUnit } = req.params;
        const objProjectTask = await projectTaskService.findOneByDurationUnit(durationUnit, req.query);
        if (!objProjectTask) {
            util.setError(404, `Cannot find projectTask with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectTask', objProjectTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objProjectTask = await projectTaskService.findOneByDateEntered(dateEntered, req.query);
        if (!objProjectTask) {
            util.setError(404, `Cannot find projectTask with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectTask', objProjectTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objProjectTask = await projectTaskService.findOneByDateModified(dateModified, req.query);
        if (!objProjectTask) {
            util.setError(404, `Cannot find projectTask with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectTask', objProjectTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskCtrl.findOneByDateStart = async (req, res) => {
    try {
        const { dateStart } = req.params;
        const objProjectTask = await projectTaskService.findOneByDateStart(dateStart, req.query);
        if (!objProjectTask) {
            util.setError(404, `Cannot find projectTask with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectTask', objProjectTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskCtrl.findOneByDateFinish = async (req, res) => {
    try {
        const { dateFinish } = req.params;
        const objProjectTask = await projectTaskService.findOneByDateFinish(dateFinish, req.query);
        if (!objProjectTask) {
            util.setError(404, `Cannot find projectTask with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectTask', objProjectTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskCtrl.findOneByDateDue = async (req, res) => {
    try {
        const { dateDue } = req.params;
        const objProjectTask = await projectTaskService.findOneByDateDue(dateDue, req.query);
        if (!objProjectTask) {
            util.setError(404, `Cannot find projectTask with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectTask', objProjectTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskCtrl.findOneByProjectId = async (req, res) => {
    try {
        const { projectId } = req.params;
        const objProjectTask = await projectTaskService.findOneByProjectId(projectId, req.query);
        if (!objProjectTask) {
            util.setError(404, `Cannot find projectTask with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectTask', objProjectTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objProjectTask = await projectTaskService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objProjectTask) {
            util.setError(404, `Cannot find projectTask with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectTask', objProjectTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objProjectTask = await projectTaskService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objProjectTask) {
            util.setError(404, `Cannot find projectTask with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectTask', objProjectTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectTaskCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objProjectTask = await projectTaskService.findOneByCreatedBy(createdBy, req.query);
        if (!objProjectTask) {
            util.setError(404, `Cannot find projectTask with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectTask', objProjectTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



projectTaskCtrl.updateProjectTaskById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectTask = await projectTaskService.updateProjectTaskById(id, req.body);
            if (!objProjectTask) {
                util.setError(404, `Cannot find projectTask with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectTask updated', objProjectTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectTaskCtrl.updateProjectTaskByMilestoneFlag = async (req, res) => {
     const { milestoneFlag } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectTask = await projectTaskService.updateProjectTaskByMilestoneFlag(milestoneFlag, req.body);
            if (!objProjectTask) {
                util.setError(404, `Cannot find projectTask with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectTask updated', objProjectTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectTaskCtrl.updateProjectTaskByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectTask = await projectTaskService.updateProjectTaskByDeleted(deleted, req.body);
            if (!objProjectTask) {
                util.setError(404, `Cannot find projectTask with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectTask updated', objProjectTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectTaskCtrl.updateProjectTaskByProjectTaskId = async (req, res) => {
     const { projectTaskId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectTask = await projectTaskService.updateProjectTaskByProjectTaskId(projectTaskId, req.body);
            if (!objProjectTask) {
                util.setError(404, `Cannot find projectTask with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectTask updated', objProjectTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectTaskCtrl.updateProjectTaskByTimeStart = async (req, res) => {
     const { timeStart } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectTask = await projectTaskService.updateProjectTaskByTimeStart(timeStart, req.body);
            if (!objProjectTask) {
                util.setError(404, `Cannot find projectTask with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectTask updated', objProjectTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectTaskCtrl.updateProjectTaskByTimeFinish = async (req, res) => {
     const { timeFinish } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectTask = await projectTaskService.updateProjectTaskByTimeFinish(timeFinish, req.body);
            if (!objProjectTask) {
                util.setError(404, `Cannot find projectTask with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectTask updated', objProjectTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectTaskCtrl.updateProjectTaskByDuration = async (req, res) => {
     const { duration } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectTask = await projectTaskService.updateProjectTaskByDuration(duration, req.body);
            if (!objProjectTask) {
                util.setError(404, `Cannot find projectTask with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectTask updated', objProjectTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectTaskCtrl.updateProjectTaskByActualDuration = async (req, res) => {
     const { actualDuration } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectTask = await projectTaskService.updateProjectTaskByActualDuration(actualDuration, req.body);
            if (!objProjectTask) {
                util.setError(404, `Cannot find projectTask with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectTask updated', objProjectTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectTaskCtrl.updateProjectTaskByPercentComplete = async (req, res) => {
     const { percentComplete } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectTask = await projectTaskService.updateProjectTaskByPercentComplete(percentComplete, req.body);
            if (!objProjectTask) {
                util.setError(404, `Cannot find projectTask with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectTask updated', objProjectTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectTaskCtrl.updateProjectTaskByParentTaskId = async (req, res) => {
     const { parentTaskId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectTask = await projectTaskService.updateProjectTaskByParentTaskId(parentTaskId, req.body);
            if (!objProjectTask) {
                util.setError(404, `Cannot find projectTask with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectTask updated', objProjectTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectTaskCtrl.updateProjectTaskByOrderNumber = async (req, res) => {
     const { orderNumber } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectTask = await projectTaskService.updateProjectTaskByOrderNumber(orderNumber, req.body);
            if (!objProjectTask) {
                util.setError(404, `Cannot find projectTask with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectTask updated', objProjectTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectTaskCtrl.updateProjectTaskByTaskNumber = async (req, res) => {
     const { taskNumber } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectTask = await projectTaskService.updateProjectTaskByTaskNumber(taskNumber, req.body);
            if (!objProjectTask) {
                util.setError(404, `Cannot find projectTask with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectTask updated', objProjectTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectTaskCtrl.updateProjectTaskByEstimatedEffort = async (req, res) => {
     const { estimatedEffort } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectTask = await projectTaskService.updateProjectTaskByEstimatedEffort(estimatedEffort, req.body);
            if (!objProjectTask) {
                util.setError(404, `Cannot find projectTask with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectTask updated', objProjectTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectTaskCtrl.updateProjectTaskByActualEffort = async (req, res) => {
     const { actualEffort } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectTask = await projectTaskService.updateProjectTaskByActualEffort(actualEffort, req.body);
            if (!objProjectTask) {
                util.setError(404, `Cannot find projectTask with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectTask updated', objProjectTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectTaskCtrl.updateProjectTaskByUtilization = async (req, res) => {
     const { utilization } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectTask = await projectTaskService.updateProjectTaskByUtilization(utilization, req.body);
            if (!objProjectTask) {
                util.setError(404, `Cannot find projectTask with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectTask updated', objProjectTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectTaskCtrl.updateProjectTaskByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectTask = await projectTaskService.updateProjectTaskByName(name, req.body);
            if (!objProjectTask) {
                util.setError(404, `Cannot find projectTask with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectTask updated', objProjectTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectTaskCtrl.updateProjectTaskByStatus = async (req, res) => {
     const { status } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectTask = await projectTaskService.updateProjectTaskByStatus(status, req.body);
            if (!objProjectTask) {
                util.setError(404, `Cannot find projectTask with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectTask updated', objProjectTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectTaskCtrl.updateProjectTaskByRelationshipType = async (req, res) => {
     const { relationshipType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectTask = await projectTaskService.updateProjectTaskByRelationshipType(relationshipType, req.body);
            if (!objProjectTask) {
                util.setError(404, `Cannot find projectTask with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectTask updated', objProjectTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectTaskCtrl.updateProjectTaskByPriority = async (req, res) => {
     const { priority } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectTask = await projectTaskService.updateProjectTaskByPriority(priority, req.body);
            if (!objProjectTask) {
                util.setError(404, `Cannot find projectTask with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectTask updated', objProjectTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectTaskCtrl.updateProjectTaskByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectTask = await projectTaskService.updateProjectTaskByDescription(description, req.body);
            if (!objProjectTask) {
                util.setError(404, `Cannot find projectTask with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectTask updated', objProjectTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectTaskCtrl.updateProjectTaskByPredecessors = async (req, res) => {
     const { predecessors } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectTask = await projectTaskService.updateProjectTaskByPredecessors(predecessors, req.body);
            if (!objProjectTask) {
                util.setError(404, `Cannot find projectTask with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectTask updated', objProjectTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectTaskCtrl.updateProjectTaskByDurationUnit = async (req, res) => {
     const { durationUnit } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectTask = await projectTaskService.updateProjectTaskByDurationUnit(durationUnit, req.body);
            if (!objProjectTask) {
                util.setError(404, `Cannot find projectTask with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectTask updated', objProjectTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectTaskCtrl.updateProjectTaskByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectTask = await projectTaskService.updateProjectTaskByDateEntered(dateEntered, req.body);
            if (!objProjectTask) {
                util.setError(404, `Cannot find projectTask with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectTask updated', objProjectTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectTaskCtrl.updateProjectTaskByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectTask = await projectTaskService.updateProjectTaskByDateModified(dateModified, req.body);
            if (!objProjectTask) {
                util.setError(404, `Cannot find projectTask with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectTask updated', objProjectTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectTaskCtrl.updateProjectTaskByDateStart = async (req, res) => {
     const { dateStart } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectTask = await projectTaskService.updateProjectTaskByDateStart(dateStart, req.body);
            if (!objProjectTask) {
                util.setError(404, `Cannot find projectTask with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectTask updated', objProjectTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectTaskCtrl.updateProjectTaskByDateFinish = async (req, res) => {
     const { dateFinish } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectTask = await projectTaskService.updateProjectTaskByDateFinish(dateFinish, req.body);
            if (!objProjectTask) {
                util.setError(404, `Cannot find projectTask with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectTask updated', objProjectTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectTaskCtrl.updateProjectTaskByDateDue = async (req, res) => {
     const { dateDue } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectTask = await projectTaskService.updateProjectTaskByDateDue(dateDue, req.body);
            if (!objProjectTask) {
                util.setError(404, `Cannot find projectTask with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectTask updated', objProjectTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectTaskCtrl.updateProjectTaskByProjectId = async (req, res) => {
     const { projectId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectTask = await projectTaskService.updateProjectTaskByProjectId(projectId, req.body);
            if (!objProjectTask) {
                util.setError(404, `Cannot find projectTask with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectTask updated', objProjectTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectTaskCtrl.updateProjectTaskByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectTask = await projectTaskService.updateProjectTaskByAssignedUserId(assignedUserId, req.body);
            if (!objProjectTask) {
                util.setError(404, `Cannot find projectTask with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectTask updated', objProjectTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectTaskCtrl.updateProjectTaskByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectTask = await projectTaskService.updateProjectTaskByModifiedUserId(modifiedUserId, req.body);
            if (!objProjectTask) {
                util.setError(404, `Cannot find projectTask with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectTask updated', objProjectTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectTaskCtrl.updateProjectTaskByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectTask = await projectTaskService.updateProjectTaskByCreatedBy(createdBy, req.body);
            if (!objProjectTask) {
                util.setError(404, `Cannot find projectTask with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectTask updated', objProjectTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = projectTaskCtrl;
//</es-section>
