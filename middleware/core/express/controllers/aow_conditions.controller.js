/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:27 GMT-0400 (Bolivia Time)
 * Time: 14:0:27
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:27 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:27
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const aowConditionService = require('../services/aow_conditions.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aowConditionsCtrl = {};
aowConditionsCtrl.service = aowConditionService;


aowConditionsCtrl.getAllAowConditions = async (req, res) => {
    try {
        const objAowConditions = await aowConditionService.getAllAowConditions(req.query);
        if (objAowConditions.length > 0) {
            util.setSuccess(200, 'AowConditions retrieved', objAowConditions);
        } else {
            util.setSuccess(200, 'No aowCondition found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowConditionsCtrl.getAAowCondition = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAowCondition = await aowConditionService.getAAowCondition(id, req.query);
        if (!objAowCondition) {
            util.setError(404, `Cannot find aowCondition with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aowCondition', objAowCondition);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowConditionsCtrl.addAowCondition = async (req, res) => {
    try {
        const objAowCondition = await aowConditionService.addAowCondition(req.body);
        util.setSuccess(201, 'AowCondition Added!', objAowCondition);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowConditionsCtrl.updateAowCondition = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAowCondition = await aowConditionService.updateAowCondition(id, req.body);
        if (!objAowCondition) {
            util.setError(404, `Cannot find aowCondition with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AowCondition updated', objAowCondition);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aowConditionsCtrl.deleteAowCondition = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAowCondition = await aowConditionService.deleteAowCondition(id);
        if (objAowCondition) {
            util.setSuccess(200, 'AowCondition deleted', objAowCondition);
        } else {
            util.setError(404, `AowCondition with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aowConditionsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAowCondition = await aowConditionService.findOneById(id, req.query);
        if (!objAowCondition) {
            util.setError(404, `Cannot find aowCondition with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowCondition', objAowCondition);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowConditionsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAowCondition = await aowConditionService.findOneByDeleted(deleted, req.query);
        if (!objAowCondition) {
            util.setError(404, `Cannot find aowCondition with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowCondition', objAowCondition);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowConditionsCtrl.findOneByConditionOrder = async (req, res) => {
    try {
        const { conditionOrder } = req.params;
        const objAowCondition = await aowConditionService.findOneByConditionOrder(conditionOrder, req.query);
        if (!objAowCondition) {
            util.setError(404, `Cannot find aowCondition with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowCondition', objAowCondition);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowConditionsCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objAowCondition = await aowConditionService.findOneByName(name, req.query);
        if (!objAowCondition) {
            util.setError(404, `Cannot find aowCondition with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowCondition', objAowCondition);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowConditionsCtrl.findOneByField = async (req, res) => {
    try {
        const { field } = req.params;
        const objAowCondition = await aowConditionService.findOneByField(field, req.query);
        if (!objAowCondition) {
            util.setError(404, `Cannot find aowCondition with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowCondition', objAowCondition);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowConditionsCtrl.findOneByOperator = async (req, res) => {
    try {
        const { operator } = req.params;
        const objAowCondition = await aowConditionService.findOneByOperator(operator, req.query);
        if (!objAowCondition) {
            util.setError(404, `Cannot find aowCondition with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowCondition', objAowCondition);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowConditionsCtrl.findOneByValueType = async (req, res) => {
    try {
        const { valueType } = req.params;
        const objAowCondition = await aowConditionService.findOneByValueType(valueType, req.query);
        if (!objAowCondition) {
            util.setError(404, `Cannot find aowCondition with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowCondition', objAowCondition);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowConditionsCtrl.findOneByValue = async (req, res) => {
    try {
        const { value } = req.params;
        const objAowCondition = await aowConditionService.findOneByValue(value, req.query);
        if (!objAowCondition) {
            util.setError(404, `Cannot find aowCondition with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowCondition', objAowCondition);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowConditionsCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objAowCondition = await aowConditionService.findOneByDescription(description, req.query);
        if (!objAowCondition) {
            util.setError(404, `Cannot find aowCondition with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowCondition', objAowCondition);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowConditionsCtrl.findOneByModulePath = async (req, res) => {
    try {
        const { modulePath } = req.params;
        const objAowCondition = await aowConditionService.findOneByModulePath(modulePath, req.query);
        if (!objAowCondition) {
            util.setError(404, `Cannot find aowCondition with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowCondition', objAowCondition);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowConditionsCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objAowCondition = await aowConditionService.findOneByDateEntered(dateEntered, req.query);
        if (!objAowCondition) {
            util.setError(404, `Cannot find aowCondition with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowCondition', objAowCondition);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowConditionsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAowCondition = await aowConditionService.findOneByDateModified(dateModified, req.query);
        if (!objAowCondition) {
            util.setError(404, `Cannot find aowCondition with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowCondition', objAowCondition);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowConditionsCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objAowCondition = await aowConditionService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objAowCondition) {
            util.setError(404, `Cannot find aowCondition with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowCondition', objAowCondition);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowConditionsCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAowCondition = await aowConditionService.findOneByCreatedBy(createdBy, req.query);
        if (!objAowCondition) {
            util.setError(404, `Cannot find aowCondition with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowCondition', objAowCondition);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowConditionsCtrl.findOneByAowWorkflowId = async (req, res) => {
    try {
        const { aowWorkflowId } = req.params;
        const objAowCondition = await aowConditionService.findOneByAowWorkflowId(aowWorkflowId, req.query);
        if (!objAowCondition) {
            util.setError(404, `Cannot find aowCondition with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowCondition', objAowCondition);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aowConditionsCtrl.updateAowConditionById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowCondition = await aowConditionService.updateAowConditionById(id, req.body);
            if (!objAowCondition) {
                util.setError(404, `Cannot find aowCondition with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowCondition updated', objAowCondition);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowConditionsCtrl.updateAowConditionByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowCondition = await aowConditionService.updateAowConditionByDeleted(deleted, req.body);
            if (!objAowCondition) {
                util.setError(404, `Cannot find aowCondition with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowCondition updated', objAowCondition);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowConditionsCtrl.updateAowConditionByConditionOrder = async (req, res) => {
     const { conditionOrder } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowCondition = await aowConditionService.updateAowConditionByConditionOrder(conditionOrder, req.body);
            if (!objAowCondition) {
                util.setError(404, `Cannot find aowCondition with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowCondition updated', objAowCondition);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowConditionsCtrl.updateAowConditionByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowCondition = await aowConditionService.updateAowConditionByName(name, req.body);
            if (!objAowCondition) {
                util.setError(404, `Cannot find aowCondition with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowCondition updated', objAowCondition);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowConditionsCtrl.updateAowConditionByField = async (req, res) => {
     const { field } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowCondition = await aowConditionService.updateAowConditionByField(field, req.body);
            if (!objAowCondition) {
                util.setError(404, `Cannot find aowCondition with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowCondition updated', objAowCondition);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowConditionsCtrl.updateAowConditionByOperator = async (req, res) => {
     const { operator } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowCondition = await aowConditionService.updateAowConditionByOperator(operator, req.body);
            if (!objAowCondition) {
                util.setError(404, `Cannot find aowCondition with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowCondition updated', objAowCondition);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowConditionsCtrl.updateAowConditionByValueType = async (req, res) => {
     const { valueType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowCondition = await aowConditionService.updateAowConditionByValueType(valueType, req.body);
            if (!objAowCondition) {
                util.setError(404, `Cannot find aowCondition with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowCondition updated', objAowCondition);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowConditionsCtrl.updateAowConditionByValue = async (req, res) => {
     const { value } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowCondition = await aowConditionService.updateAowConditionByValue(value, req.body);
            if (!objAowCondition) {
                util.setError(404, `Cannot find aowCondition with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowCondition updated', objAowCondition);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowConditionsCtrl.updateAowConditionByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowCondition = await aowConditionService.updateAowConditionByDescription(description, req.body);
            if (!objAowCondition) {
                util.setError(404, `Cannot find aowCondition with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowCondition updated', objAowCondition);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowConditionsCtrl.updateAowConditionByModulePath = async (req, res) => {
     const { modulePath } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowCondition = await aowConditionService.updateAowConditionByModulePath(modulePath, req.body);
            if (!objAowCondition) {
                util.setError(404, `Cannot find aowCondition with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowCondition updated', objAowCondition);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowConditionsCtrl.updateAowConditionByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowCondition = await aowConditionService.updateAowConditionByDateEntered(dateEntered, req.body);
            if (!objAowCondition) {
                util.setError(404, `Cannot find aowCondition with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowCondition updated', objAowCondition);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowConditionsCtrl.updateAowConditionByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowCondition = await aowConditionService.updateAowConditionByDateModified(dateModified, req.body);
            if (!objAowCondition) {
                util.setError(404, `Cannot find aowCondition with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowCondition updated', objAowCondition);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowConditionsCtrl.updateAowConditionByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowCondition = await aowConditionService.updateAowConditionByModifiedUserId(modifiedUserId, req.body);
            if (!objAowCondition) {
                util.setError(404, `Cannot find aowCondition with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowCondition updated', objAowCondition);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowConditionsCtrl.updateAowConditionByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowCondition = await aowConditionService.updateAowConditionByCreatedBy(createdBy, req.body);
            if (!objAowCondition) {
                util.setError(404, `Cannot find aowCondition with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowCondition updated', objAowCondition);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowConditionsCtrl.updateAowConditionByAowWorkflowId = async (req, res) => {
     const { aowWorkflowId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowCondition = await aowConditionService.updateAowConditionByAowWorkflowId(aowWorkflowId, req.body);
            if (!objAowCondition) {
                util.setError(404, `Cannot find aowCondition with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowCondition updated', objAowCondition);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aowConditionsCtrl;
//</es-section>
