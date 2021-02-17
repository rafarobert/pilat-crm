/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:44:18 GMT-0400 (Bolivia Time)
 * Time: 4:44:18
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:44:18 GMT-0400 (Bolivia Time)
 * Last time updated: 4:44:18
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const taskService = require('../services/tasks.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const tasksCtrl = {};
tasksCtrl.service = taskService;


tasksCtrl.getAllTasks = async (req, res) => {
    try {
        const objTasks = await taskService.getAllTasks(req.query);
        if (objTasks.length > 0) {
            util.setSuccess(200, 'Tasks retrieved', objTasks);
        } else {
            util.setSuccess(200, 'No task found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

tasksCtrl.getATask = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objTask = await taskService.getATask(id, req.query);
        if (!objTask) {
            util.setError(404, `Cannot find task with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found task', objTask);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

tasksCtrl.addTask = async (req, res) => {
    try {
        const objTask = await taskService.addTask(req.body);
        util.setSuccess(201, 'Task Added!', objTask);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

tasksCtrl.updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objTask = await taskService.updateTask(id, req.body);
        if (!objTask) {
            util.setError(404, `Cannot find task with the id: ${id}`);
        } else {
            util.setSuccess(200, 'Task updated', objTask);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

tasksCtrl.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objTask = await taskService.deleteTask(id);
        if (objTask) {
            util.setSuccess(200, 'Task deleted', objTask);
        } else {
            util.setError(404, `Task with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



tasksCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objTask = await taskService.findOneById(id, req.query);
        if (!objTask) {
            util.setError(404, `Cannot find task with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found task', objTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

tasksCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objTask = await taskService.findOneByDeleted(deleted, req.query);
        if (!objTask) {
            util.setError(404, `Cannot find task with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found task', objTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

tasksCtrl.findOneByDateDueFlag = async (req, res) => {
    try {
        const { dateDueFlag } = req.params;
        const objTask = await taskService.findOneByDateDueFlag(dateDueFlag, req.query);
        if (!objTask) {
            util.setError(404, `Cannot find task with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found task', objTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

tasksCtrl.findOneByDateStartFlag = async (req, res) => {
    try {
        const { dateStartFlag } = req.params;
        const objTask = await taskService.findOneByDateStartFlag(dateStartFlag, req.query);
        if (!objTask) {
            util.setError(404, `Cannot find task with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found task', objTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

tasksCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objTask = await taskService.findOneByName(name, req.query);
        if (!objTask) {
            util.setError(404, `Cannot find task with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found task', objTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

tasksCtrl.findOneByStatus = async (req, res) => {
    try {
        const { status } = req.params;
        const objTask = await taskService.findOneByStatus(status, req.query);
        if (!objTask) {
            util.setError(404, `Cannot find task with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found task', objTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

tasksCtrl.findOneByParentType = async (req, res) => {
    try {
        const { parentType } = req.params;
        const objTask = await taskService.findOneByParentType(parentType, req.query);
        if (!objTask) {
            util.setError(404, `Cannot find task with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found task', objTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

tasksCtrl.findOneByPriority = async (req, res) => {
    try {
        const { priority } = req.params;
        const objTask = await taskService.findOneByPriority(priority, req.query);
        if (!objTask) {
            util.setError(404, `Cannot find task with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found task', objTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

tasksCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objTask = await taskService.findOneByDescription(description, req.query);
        if (!objTask) {
            util.setError(404, `Cannot find task with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found task', objTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

tasksCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objTask = await taskService.findOneByDateEntered(dateEntered, req.query);
        if (!objTask) {
            util.setError(404, `Cannot find task with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found task', objTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

tasksCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objTask = await taskService.findOneByDateModified(dateModified, req.query);
        if (!objTask) {
            util.setError(404, `Cannot find task with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found task', objTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

tasksCtrl.findOneByDateDue = async (req, res) => {
    try {
        const { dateDue } = req.params;
        const objTask = await taskService.findOneByDateDue(dateDue, req.query);
        if (!objTask) {
            util.setError(404, `Cannot find task with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found task', objTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

tasksCtrl.findOneByDateStart = async (req, res) => {
    try {
        const { dateStart } = req.params;
        const objTask = await taskService.findOneByDateStart(dateStart, req.query);
        if (!objTask) {
            util.setError(404, `Cannot find task with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found task', objTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

tasksCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objTask = await taskService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objTask) {
            util.setError(404, `Cannot find task with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found task', objTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

tasksCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objTask = await taskService.findOneByCreatedBy(createdBy, req.query);
        if (!objTask) {
            util.setError(404, `Cannot find task with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found task', objTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

tasksCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objTask = await taskService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objTask) {
            util.setError(404, `Cannot find task with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found task', objTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

tasksCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objTask = await taskService.findOneByParentId(parentId, req.query);
        if (!objTask) {
            util.setError(404, `Cannot find task with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found task', objTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

tasksCtrl.findOneByContactId = async (req, res) => {
    try {
        const { contactId } = req.params;
        const objTask = await taskService.findOneByContactId(contactId, req.query);
        if (!objTask) {
            util.setError(404, `Cannot find task with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found task', objTask);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



tasksCtrl.updateTaskById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objTask = await taskService.updateTaskById(id, req.body);
            if (!objTask) {
                util.setError(404, `Cannot find task with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Task updated', objTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

tasksCtrl.updateTaskByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objTask = await taskService.updateTaskByDeleted(deleted, req.body);
            if (!objTask) {
                util.setError(404, `Cannot find task with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Task updated', objTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

tasksCtrl.updateTaskByDateDueFlag = async (req, res) => {
     const { dateDueFlag } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objTask = await taskService.updateTaskByDateDueFlag(dateDueFlag, req.body);
            if (!objTask) {
                util.setError(404, `Cannot find task with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Task updated', objTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

tasksCtrl.updateTaskByDateStartFlag = async (req, res) => {
     const { dateStartFlag } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objTask = await taskService.updateTaskByDateStartFlag(dateStartFlag, req.body);
            if (!objTask) {
                util.setError(404, `Cannot find task with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Task updated', objTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

tasksCtrl.updateTaskByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objTask = await taskService.updateTaskByName(name, req.body);
            if (!objTask) {
                util.setError(404, `Cannot find task with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Task updated', objTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

tasksCtrl.updateTaskByStatus = async (req, res) => {
     const { status } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objTask = await taskService.updateTaskByStatus(status, req.body);
            if (!objTask) {
                util.setError(404, `Cannot find task with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Task updated', objTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

tasksCtrl.updateTaskByParentType = async (req, res) => {
     const { parentType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objTask = await taskService.updateTaskByParentType(parentType, req.body);
            if (!objTask) {
                util.setError(404, `Cannot find task with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Task updated', objTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

tasksCtrl.updateTaskByPriority = async (req, res) => {
     const { priority } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objTask = await taskService.updateTaskByPriority(priority, req.body);
            if (!objTask) {
                util.setError(404, `Cannot find task with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Task updated', objTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

tasksCtrl.updateTaskByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objTask = await taskService.updateTaskByDescription(description, req.body);
            if (!objTask) {
                util.setError(404, `Cannot find task with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Task updated', objTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

tasksCtrl.updateTaskByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objTask = await taskService.updateTaskByDateEntered(dateEntered, req.body);
            if (!objTask) {
                util.setError(404, `Cannot find task with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Task updated', objTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

tasksCtrl.updateTaskByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objTask = await taskService.updateTaskByDateModified(dateModified, req.body);
            if (!objTask) {
                util.setError(404, `Cannot find task with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Task updated', objTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

tasksCtrl.updateTaskByDateDue = async (req, res) => {
     const { dateDue } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objTask = await taskService.updateTaskByDateDue(dateDue, req.body);
            if (!objTask) {
                util.setError(404, `Cannot find task with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Task updated', objTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

tasksCtrl.updateTaskByDateStart = async (req, res) => {
     const { dateStart } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objTask = await taskService.updateTaskByDateStart(dateStart, req.body);
            if (!objTask) {
                util.setError(404, `Cannot find task with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Task updated', objTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

tasksCtrl.updateTaskByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objTask = await taskService.updateTaskByModifiedUserId(modifiedUserId, req.body);
            if (!objTask) {
                util.setError(404, `Cannot find task with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Task updated', objTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

tasksCtrl.updateTaskByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objTask = await taskService.updateTaskByCreatedBy(createdBy, req.body);
            if (!objTask) {
                util.setError(404, `Cannot find task with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Task updated', objTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

tasksCtrl.updateTaskByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objTask = await taskService.updateTaskByAssignedUserId(assignedUserId, req.body);
            if (!objTask) {
                util.setError(404, `Cannot find task with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Task updated', objTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

tasksCtrl.updateTaskByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objTask = await taskService.updateTaskByParentId(parentId, req.body);
            if (!objTask) {
                util.setError(404, `Cannot find task with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Task updated', objTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

tasksCtrl.updateTaskByContactId = async (req, res) => {
     const { contactId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objTask = await taskService.updateTaskByContactId(contactId, req.body);
            if (!objTask) {
                util.setError(404, `Cannot find task with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Task updated', objTask);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = tasksCtrl;
//</es-section>
