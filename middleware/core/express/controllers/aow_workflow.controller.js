/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:25 GMT-0400 (Bolivia Time)
 * Time: 14:56:25
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:25 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:25
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const aowWorkflowService = require('../services/aow_workflow.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aowWorkflowCtrl = {};
aowWorkflowCtrl.service = aowWorkflowService;


aowWorkflowCtrl.getAllAowWorkflow = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.aowWorkflow.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objAowWorkflow = await aowWorkflowService.getAllAowWorkflow(req.query);
        if (objAowWorkflow && objAowWorkflow.rows && objAowWorkflow.count) {
            util.setSuccess(200, 'AowWorkflow retrieved', objAowWorkflow.rows, objAowWorkflow.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No aowWorkflow found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowWorkflowCtrl.getAAowWorkflow = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAowWorkflow = await aowWorkflowService.getAAowWorkflow(id, req.query);
        if (!objAowWorkflow) {
            util.setError(404, `Cannot find aowWorkflow with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aowWorkflow', objAowWorkflow);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowWorkflowCtrl.addAowWorkflow = async (req, res) => {
    try {
        const objAowWorkflow = await aowWorkflowService.addAowWorkflow(req.body);
        util.setSuccess(201, 'AowWorkflow Added!', objAowWorkflow);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowWorkflowCtrl.updateAowWorkflow = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAowWorkflow = await aowWorkflowService.updateAowWorkflow(id, req.body);
        if (!objAowWorkflow) {
            util.setError(404, `Cannot find aowWorkflow with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AowWorkflow updated', objAowWorkflow);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aowWorkflowCtrl.deleteAowWorkflow = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAowWorkflow = await aowWorkflowService.deleteAowWorkflow(id);
        if (objAowWorkflow) {
            util.setSuccess(200, 'AowWorkflow deleted', objAowWorkflow);
        } else {
            util.setError(404, `AowWorkflow with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aowWorkflowCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAowWorkflow = await aowWorkflowService.findOneById(id, req.query);
        if (!objAowWorkflow) {
            util.setError(404, `Cannot find aowWorkflow with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowWorkflow', objAowWorkflow);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowWorkflowCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAowWorkflow = await aowWorkflowService.findOneByDeleted(deleted, req.query);
        if (!objAowWorkflow) {
            util.setError(404, `Cannot find aowWorkflow with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowWorkflow', objAowWorkflow);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowWorkflowCtrl.findOneByMultipleRuns = async (req, res) => {
    try {
        const { multipleRuns } = req.params;
        const objAowWorkflow = await aowWorkflowService.findOneByMultipleRuns(multipleRuns, req.query);
        if (!objAowWorkflow) {
            util.setError(404, `Cannot find aowWorkflow with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowWorkflow', objAowWorkflow);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowWorkflowCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objAowWorkflow = await aowWorkflowService.findOneByName(name, req.query);
        if (!objAowWorkflow) {
            util.setError(404, `Cannot find aowWorkflow with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowWorkflow', objAowWorkflow);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowWorkflowCtrl.findOneByFlowModule = async (req, res) => {
    try {
        const { flowModule } = req.params;
        const objAowWorkflow = await aowWorkflowService.findOneByFlowModule(flowModule, req.query);
        if (!objAowWorkflow) {
            util.setError(404, `Cannot find aowWorkflow with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowWorkflow', objAowWorkflow);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowWorkflowCtrl.findOneByFlowRunOn = async (req, res) => {
    try {
        const { flowRunOn } = req.params;
        const objAowWorkflow = await aowWorkflowService.findOneByFlowRunOn(flowRunOn, req.query);
        if (!objAowWorkflow) {
            util.setError(404, `Cannot find aowWorkflow with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowWorkflow', objAowWorkflow);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowWorkflowCtrl.findOneByStatus = async (req, res) => {
    try {
        const { status } = req.params;
        const objAowWorkflow = await aowWorkflowService.findOneByStatus(status, req.query);
        if (!objAowWorkflow) {
            util.setError(404, `Cannot find aowWorkflow with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowWorkflow', objAowWorkflow);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowWorkflowCtrl.findOneByRunWhen = async (req, res) => {
    try {
        const { runWhen } = req.params;
        const objAowWorkflow = await aowWorkflowService.findOneByRunWhen(runWhen, req.query);
        if (!objAowWorkflow) {
            util.setError(404, `Cannot find aowWorkflow with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowWorkflow', objAowWorkflow);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowWorkflowCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objAowWorkflow = await aowWorkflowService.findOneByDescription(description, req.query);
        if (!objAowWorkflow) {
            util.setError(404, `Cannot find aowWorkflow with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowWorkflow', objAowWorkflow);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowWorkflowCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objAowWorkflow = await aowWorkflowService.findOneByDateEntered(dateEntered, req.query);
        if (!objAowWorkflow) {
            util.setError(404, `Cannot find aowWorkflow with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowWorkflow', objAowWorkflow);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowWorkflowCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAowWorkflow = await aowWorkflowService.findOneByDateModified(dateModified, req.query);
        if (!objAowWorkflow) {
            util.setError(404, `Cannot find aowWorkflow with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowWorkflow', objAowWorkflow);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowWorkflowCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objAowWorkflow = await aowWorkflowService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objAowWorkflow) {
            util.setError(404, `Cannot find aowWorkflow with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowWorkflow', objAowWorkflow);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowWorkflowCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAowWorkflow = await aowWorkflowService.findOneByCreatedBy(createdBy, req.query);
        if (!objAowWorkflow) {
            util.setError(404, `Cannot find aowWorkflow with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowWorkflow', objAowWorkflow);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowWorkflowCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objAowWorkflow = await aowWorkflowService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objAowWorkflow) {
            util.setError(404, `Cannot find aowWorkflow with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowWorkflow', objAowWorkflow);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aowWorkflowCtrl.updateAowWorkflowById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowWorkflow = await aowWorkflowService.updateAowWorkflowById(id, req.body);
            if (!objAowWorkflow) {
                util.setError(404, `Cannot find aowWorkflow with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowWorkflow updated', objAowWorkflow);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowWorkflowCtrl.updateAowWorkflowByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowWorkflow = await aowWorkflowService.updateAowWorkflowByDeleted(deleted, req.body);
            if (!objAowWorkflow) {
                util.setError(404, `Cannot find aowWorkflow with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowWorkflow updated', objAowWorkflow);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowWorkflowCtrl.updateAowWorkflowByMultipleRuns = async (req, res) => {
     const { multipleRuns } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowWorkflow = await aowWorkflowService.updateAowWorkflowByMultipleRuns(multipleRuns, req.body);
            if (!objAowWorkflow) {
                util.setError(404, `Cannot find aowWorkflow with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowWorkflow updated', objAowWorkflow);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowWorkflowCtrl.updateAowWorkflowByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowWorkflow = await aowWorkflowService.updateAowWorkflowByName(name, req.body);
            if (!objAowWorkflow) {
                util.setError(404, `Cannot find aowWorkflow with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowWorkflow updated', objAowWorkflow);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowWorkflowCtrl.updateAowWorkflowByFlowModule = async (req, res) => {
     const { flowModule } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowWorkflow = await aowWorkflowService.updateAowWorkflowByFlowModule(flowModule, req.body);
            if (!objAowWorkflow) {
                util.setError(404, `Cannot find aowWorkflow with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowWorkflow updated', objAowWorkflow);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowWorkflowCtrl.updateAowWorkflowByFlowRunOn = async (req, res) => {
     const { flowRunOn } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowWorkflow = await aowWorkflowService.updateAowWorkflowByFlowRunOn(flowRunOn, req.body);
            if (!objAowWorkflow) {
                util.setError(404, `Cannot find aowWorkflow with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowWorkflow updated', objAowWorkflow);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowWorkflowCtrl.updateAowWorkflowByStatus = async (req, res) => {
     const { status } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowWorkflow = await aowWorkflowService.updateAowWorkflowByStatus(status, req.body);
            if (!objAowWorkflow) {
                util.setError(404, `Cannot find aowWorkflow with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowWorkflow updated', objAowWorkflow);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowWorkflowCtrl.updateAowWorkflowByRunWhen = async (req, res) => {
     const { runWhen } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowWorkflow = await aowWorkflowService.updateAowWorkflowByRunWhen(runWhen, req.body);
            if (!objAowWorkflow) {
                util.setError(404, `Cannot find aowWorkflow with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowWorkflow updated', objAowWorkflow);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowWorkflowCtrl.updateAowWorkflowByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowWorkflow = await aowWorkflowService.updateAowWorkflowByDescription(description, req.body);
            if (!objAowWorkflow) {
                util.setError(404, `Cannot find aowWorkflow with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowWorkflow updated', objAowWorkflow);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowWorkflowCtrl.updateAowWorkflowByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowWorkflow = await aowWorkflowService.updateAowWorkflowByDateEntered(dateEntered, req.body);
            if (!objAowWorkflow) {
                util.setError(404, `Cannot find aowWorkflow with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowWorkflow updated', objAowWorkflow);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowWorkflowCtrl.updateAowWorkflowByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowWorkflow = await aowWorkflowService.updateAowWorkflowByDateModified(dateModified, req.body);
            if (!objAowWorkflow) {
                util.setError(404, `Cannot find aowWorkflow with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowWorkflow updated', objAowWorkflow);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowWorkflowCtrl.updateAowWorkflowByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowWorkflow = await aowWorkflowService.updateAowWorkflowByModifiedUserId(modifiedUserId, req.body);
            if (!objAowWorkflow) {
                util.setError(404, `Cannot find aowWorkflow with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowWorkflow updated', objAowWorkflow);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowWorkflowCtrl.updateAowWorkflowByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowWorkflow = await aowWorkflowService.updateAowWorkflowByCreatedBy(createdBy, req.body);
            if (!objAowWorkflow) {
                util.setError(404, `Cannot find aowWorkflow with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowWorkflow updated', objAowWorkflow);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowWorkflowCtrl.updateAowWorkflowByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowWorkflow = await aowWorkflowService.updateAowWorkflowByAssignedUserId(assignedUserId, req.body);
            if (!objAowWorkflow) {
                util.setError(404, `Cannot find aowWorkflow with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowWorkflow updated', objAowWorkflow);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aowWorkflowCtrl;
//</es-section>
