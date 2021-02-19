/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:36:22 GMT-0400 (Bolivia Time)
 * Time: 18:36:22
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:36:22 GMT-0400 (Bolivia Time)
 * Last time updated: 18:36:22
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const aowActionService = require('../services/aow_actions.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aowActionsCtrl = {};
aowActionsCtrl.service = aowActionService;


aowActionsCtrl.getAllAowActions = async (req, res) => {
    try {
        const objAowActions = await aowActionService.getAllAowActions(req.query);
        if (objAowActions.length > 0) {
            util.setSuccess(200, 'AowActions retrieved', objAowActions);
        } else {
            util.setSuccess(200, 'No aowAction found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowActionsCtrl.getAAowAction = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAowAction = await aowActionService.getAAowAction(id, req.query);
        if (!objAowAction) {
            util.setError(404, `Cannot find aowAction with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aowAction', objAowAction);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowActionsCtrl.addAowAction = async (req, res) => {
    try {
        const objAowAction = await aowActionService.addAowAction(req.body);
        util.setSuccess(201, 'AowAction Added!', objAowAction);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowActionsCtrl.updateAowAction = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAowAction = await aowActionService.updateAowAction(id, req.body);
        if (!objAowAction) {
            util.setError(404, `Cannot find aowAction with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AowAction updated', objAowAction);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aowActionsCtrl.deleteAowAction = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAowAction = await aowActionService.deleteAowAction(id);
        if (objAowAction) {
            util.setSuccess(200, 'AowAction deleted', objAowAction);
        } else {
            util.setError(404, `AowAction with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aowActionsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAowAction = await aowActionService.findOneById(id, req.query);
        if (!objAowAction) {
            util.setError(404, `Cannot find aowAction with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowAction', objAowAction);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowActionsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAowAction = await aowActionService.findOneByDeleted(deleted, req.query);
        if (!objAowAction) {
            util.setError(404, `Cannot find aowAction with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowAction', objAowAction);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowActionsCtrl.findOneByActionOrder = async (req, res) => {
    try {
        const { actionOrder } = req.params;
        const objAowAction = await aowActionService.findOneByActionOrder(actionOrder, req.query);
        if (!objAowAction) {
            util.setError(404, `Cannot find aowAction with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowAction', objAowAction);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowActionsCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objAowAction = await aowActionService.findOneByName(name, req.query);
        if (!objAowAction) {
            util.setError(404, `Cannot find aowAction with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowAction', objAowAction);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowActionsCtrl.findOneByAction = async (req, res) => {
    try {
        const { action } = req.params;
        const objAowAction = await aowActionService.findOneByAction(action, req.query);
        if (!objAowAction) {
            util.setError(404, `Cannot find aowAction with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowAction', objAowAction);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowActionsCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objAowAction = await aowActionService.findOneByDescription(description, req.query);
        if (!objAowAction) {
            util.setError(404, `Cannot find aowAction with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowAction', objAowAction);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowActionsCtrl.findOneByParameters = async (req, res) => {
    try {
        const { parameters } = req.params;
        const objAowAction = await aowActionService.findOneByParameters(parameters, req.query);
        if (!objAowAction) {
            util.setError(404, `Cannot find aowAction with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowAction', objAowAction);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowActionsCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objAowAction = await aowActionService.findOneByDateEntered(dateEntered, req.query);
        if (!objAowAction) {
            util.setError(404, `Cannot find aowAction with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowAction', objAowAction);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowActionsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAowAction = await aowActionService.findOneByDateModified(dateModified, req.query);
        if (!objAowAction) {
            util.setError(404, `Cannot find aowAction with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowAction', objAowAction);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowActionsCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objAowAction = await aowActionService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objAowAction) {
            util.setError(404, `Cannot find aowAction with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowAction', objAowAction);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowActionsCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAowAction = await aowActionService.findOneByCreatedBy(createdBy, req.query);
        if (!objAowAction) {
            util.setError(404, `Cannot find aowAction with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowAction', objAowAction);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowActionsCtrl.findOneByAowWorkflowId = async (req, res) => {
    try {
        const { aowWorkflowId } = req.params;
        const objAowAction = await aowActionService.findOneByAowWorkflowId(aowWorkflowId, req.query);
        if (!objAowAction) {
            util.setError(404, `Cannot find aowAction with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowAction', objAowAction);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aowActionsCtrl.updateAowActionById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowAction = await aowActionService.updateAowActionById(id, req.body);
            if (!objAowAction) {
                util.setError(404, `Cannot find aowAction with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowAction updated', objAowAction);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowActionsCtrl.updateAowActionByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowAction = await aowActionService.updateAowActionByDeleted(deleted, req.body);
            if (!objAowAction) {
                util.setError(404, `Cannot find aowAction with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowAction updated', objAowAction);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowActionsCtrl.updateAowActionByActionOrder = async (req, res) => {
     const { actionOrder } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowAction = await aowActionService.updateAowActionByActionOrder(actionOrder, req.body);
            if (!objAowAction) {
                util.setError(404, `Cannot find aowAction with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowAction updated', objAowAction);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowActionsCtrl.updateAowActionByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowAction = await aowActionService.updateAowActionByName(name, req.body);
            if (!objAowAction) {
                util.setError(404, `Cannot find aowAction with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowAction updated', objAowAction);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowActionsCtrl.updateAowActionByAction = async (req, res) => {
     const { action } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowAction = await aowActionService.updateAowActionByAction(action, req.body);
            if (!objAowAction) {
                util.setError(404, `Cannot find aowAction with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowAction updated', objAowAction);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowActionsCtrl.updateAowActionByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowAction = await aowActionService.updateAowActionByDescription(description, req.body);
            if (!objAowAction) {
                util.setError(404, `Cannot find aowAction with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowAction updated', objAowAction);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowActionsCtrl.updateAowActionByParameters = async (req, res) => {
     const { parameters } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowAction = await aowActionService.updateAowActionByParameters(parameters, req.body);
            if (!objAowAction) {
                util.setError(404, `Cannot find aowAction with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowAction updated', objAowAction);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowActionsCtrl.updateAowActionByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowAction = await aowActionService.updateAowActionByDateEntered(dateEntered, req.body);
            if (!objAowAction) {
                util.setError(404, `Cannot find aowAction with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowAction updated', objAowAction);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowActionsCtrl.updateAowActionByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowAction = await aowActionService.updateAowActionByDateModified(dateModified, req.body);
            if (!objAowAction) {
                util.setError(404, `Cannot find aowAction with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowAction updated', objAowAction);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowActionsCtrl.updateAowActionByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowAction = await aowActionService.updateAowActionByModifiedUserId(modifiedUserId, req.body);
            if (!objAowAction) {
                util.setError(404, `Cannot find aowAction with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowAction updated', objAowAction);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowActionsCtrl.updateAowActionByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowAction = await aowActionService.updateAowActionByCreatedBy(createdBy, req.body);
            if (!objAowAction) {
                util.setError(404, `Cannot find aowAction with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowAction updated', objAowAction);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowActionsCtrl.updateAowActionByAowWorkflowId = async (req, res) => {
     const { aowWorkflowId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowAction = await aowActionService.updateAowActionByAowWorkflowId(aowWorkflowId, req.body);
            if (!objAowAction) {
                util.setError(404, `Cannot find aowAction with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowAction updated', objAowAction);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aowActionsCtrl;
//</es-section>
