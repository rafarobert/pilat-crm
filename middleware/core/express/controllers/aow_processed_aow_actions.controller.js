/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:36:25 GMT-0400 (Bolivia Time)
 * Time: 18:36:25
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:36:25 GMT-0400 (Bolivia Time)
 * Last time updated: 18:36:25
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const aowProcessedAowActionService = require('../services/aow_processed_aow_actions.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aowProcessedAowActionsCtrl = {};
aowProcessedAowActionsCtrl.service = aowProcessedAowActionService;


aowProcessedAowActionsCtrl.getAllAowProcessedAowActions = async (req, res) => {
    try {
        const objAowProcessedAowActions = await aowProcessedAowActionService.getAllAowProcessedAowActions(req.query);
        if (objAowProcessedAowActions.length > 0) {
            util.setSuccess(200, 'AowProcessedAowActions retrieved', objAowProcessedAowActions);
        } else {
            util.setSuccess(200, 'No aowProcessedAowAction found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowProcessedAowActionsCtrl.getAAowProcessedAowAction = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objAowProcessedAowAction = await aowProcessedAowActionService.getAAowProcessedAowAction(id, req.query);
        if (!objAowProcessedAowAction) {
            util.setError(404, `Cannot find aowProcessedAowAction with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aowProcessedAowAction', objAowProcessedAowAction);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowProcessedAowActionsCtrl.addAowProcessedAowAction = async (req, res) => {
    try {
        const objAowProcessedAowAction = await aowProcessedAowActionService.addAowProcessedAowAction(req.body);
        util.setSuccess(201, 'AowProcessedAowAction Added!', objAowProcessedAowAction);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowProcessedAowActionsCtrl.updateAowProcessedAowAction = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objAowProcessedAowAction = await aowProcessedAowActionService.updateAowProcessedAowAction(id, req.body);
        if (!objAowProcessedAowAction) {
            util.setError(404, `Cannot find aowProcessedAowAction with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AowProcessedAowAction updated', objAowProcessedAowAction);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aowProcessedAowActionsCtrl.deleteAowProcessedAowAction = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objAowProcessedAowAction = await aowProcessedAowActionService.deleteAowProcessedAowAction(id);
        if (objAowProcessedAowAction) {
            util.setSuccess(200, 'AowProcessedAowAction deleted', objAowProcessedAowAction);
        } else {
            util.setError(404, `AowProcessedAowAction with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aowProcessedAowActionsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAowProcessedAowAction = await aowProcessedAowActionService.findOneById(id, req.query);
        if (!objAowProcessedAowAction) {
            util.setError(404, `Cannot find aowProcessedAowAction with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowProcessedAowAction', objAowProcessedAowAction);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowProcessedAowActionsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAowProcessedAowAction = await aowProcessedAowActionService.findOneByDeleted(deleted, req.query);
        if (!objAowProcessedAowAction) {
            util.setError(404, `Cannot find aowProcessedAowAction with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowProcessedAowAction', objAowProcessedAowAction);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowProcessedAowActionsCtrl.findOneByAowProcessedId = async (req, res) => {
    try {
        const { aowProcessedId } = req.params;
        const objAowProcessedAowAction = await aowProcessedAowActionService.findOneByAowProcessedId(aowProcessedId, req.query);
        if (!objAowProcessedAowAction) {
            util.setError(404, `Cannot find aowProcessedAowAction with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowProcessedAowAction', objAowProcessedAowAction);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowProcessedAowActionsCtrl.findOneByAowActionId = async (req, res) => {
    try {
        const { aowActionId } = req.params;
        const objAowProcessedAowAction = await aowProcessedAowActionService.findOneByAowActionId(aowActionId, req.query);
        if (!objAowProcessedAowAction) {
            util.setError(404, `Cannot find aowProcessedAowAction with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowProcessedAowAction', objAowProcessedAowAction);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowProcessedAowActionsCtrl.findOneByStatus = async (req, res) => {
    try {
        const { status } = req.params;
        const objAowProcessedAowAction = await aowProcessedAowActionService.findOneByStatus(status, req.query);
        if (!objAowProcessedAowAction) {
            util.setError(404, `Cannot find aowProcessedAowAction with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowProcessedAowAction', objAowProcessedAowAction);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowProcessedAowActionsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAowProcessedAowAction = await aowProcessedAowActionService.findOneByDateModified(dateModified, req.query);
        if (!objAowProcessedAowAction) {
            util.setError(404, `Cannot find aowProcessedAowAction with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowProcessedAowAction', objAowProcessedAowAction);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aowProcessedAowActionsCtrl.updateAowProcessedAowActionById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAowProcessedAowAction = await aowProcessedAowActionService.updateAowProcessedAowActionById(id, req.body);
            if (!objAowProcessedAowAction) {
                util.setError(404, `Cannot find aowProcessedAowAction with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowProcessedAowAction updated', objAowProcessedAowAction);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowProcessedAowActionsCtrl.updateAowProcessedAowActionByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAowProcessedAowAction = await aowProcessedAowActionService.updateAowProcessedAowActionByDeleted(deleted, req.body);
            if (!objAowProcessedAowAction) {
                util.setError(404, `Cannot find aowProcessedAowAction with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowProcessedAowAction updated', objAowProcessedAowAction);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowProcessedAowActionsCtrl.updateAowProcessedAowActionByAowProcessedId = async (req, res) => {
     const { aowProcessedId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAowProcessedAowAction = await aowProcessedAowActionService.updateAowProcessedAowActionByAowProcessedId(aowProcessedId, req.body);
            if (!objAowProcessedAowAction) {
                util.setError(404, `Cannot find aowProcessedAowAction with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowProcessedAowAction updated', objAowProcessedAowAction);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowProcessedAowActionsCtrl.updateAowProcessedAowActionByAowActionId = async (req, res) => {
     const { aowActionId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAowProcessedAowAction = await aowProcessedAowActionService.updateAowProcessedAowActionByAowActionId(aowActionId, req.body);
            if (!objAowProcessedAowAction) {
                util.setError(404, `Cannot find aowProcessedAowAction with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowProcessedAowAction updated', objAowProcessedAowAction);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowProcessedAowActionsCtrl.updateAowProcessedAowActionByStatus = async (req, res) => {
     const { status } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAowProcessedAowAction = await aowProcessedAowActionService.updateAowProcessedAowActionByStatus(status, req.body);
            if (!objAowProcessedAowAction) {
                util.setError(404, `Cannot find aowProcessedAowAction with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowProcessedAowAction updated', objAowProcessedAowAction);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowProcessedAowActionsCtrl.updateAowProcessedAowActionByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAowProcessedAowAction = await aowProcessedAowActionService.updateAowProcessedAowActionByDateModified(dateModified, req.body);
            if (!objAowProcessedAowAction) {
                util.setError(404, `Cannot find aowProcessedAowAction with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowProcessedAowAction updated', objAowProcessedAowAction);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aowProcessedAowActionsCtrl;
//</es-section>
