/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:25 GMT-0400 (Bolivia Time)
 * Time: 14:57:25
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:25 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:25
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const pilatLogService = require('../services/pilat_logs.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const pilatLogsCtrl = {};
pilatLogsCtrl.service = pilatLogService;


pilatLogsCtrl.getAllPilatLogs = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.pilatLogs.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objPilatLogs = await pilatLogService.getAllPilatLogs(req.query);
        if (objPilatLogs && objPilatLogs.rows && objPilatLogs.count) {
            util.setSuccess(200, 'PilatLogs retrieved', objPilatLogs.rows, objPilatLogs.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No pilatLog found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatLogsCtrl.getAPilatLog = async (req, res) => {
    try {
        const { Id } = req.params;
        if (!util.isString(Id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objPilatLog = await pilatLogService.getAPilatLog(Id, req.query);
        if (!objPilatLog) {
            util.setError(404, `Cannot find pilatLog with the id ${Id}`);
        } else {
            util.setSuccess(200, 'Found pilatLog', objPilatLog);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatLogsCtrl.addPilatLog = async (req, res) => {
    try {
        const objPilatLog = await pilatLogService.addPilatLog(req.body);
        util.setSuccess(201, 'PilatLog Added!', objPilatLog);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatLogsCtrl.updatePilatLog = async (req, res) => {
    try {
        const { Id } = req.params;
        if (!util.isString(Id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objPilatLog = await pilatLogService.updatePilatLog(Id, req.body);
        if (!objPilatLog) {
            util.setError(404, `Cannot find pilatLog with the id: ${Id}`);
        } else {
            util.setSuccess(200, 'PilatLog updated', objPilatLog);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

pilatLogsCtrl.deletePilatLog = async (req, res) => {
    try {
        const { Id } = req.params;
        if (!util.isString(Id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objPilatLog = await pilatLogService.deletePilatLog(Id);
        if (objPilatLog) {
            util.setSuccess(200, 'PilatLog deleted', objPilatLog);
        } else {
            util.setError(404, `PilatLog with the id ${Id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



pilatLogsCtrl.findOneByUid = async (req, res) => {
    try {
        const { Id } = req.params;
        const objPilatLog = await pilatLogService.findOneByUid(Id, req.query);
        if (!objPilatLog) {
            util.setError(404, `Cannot find pilatLog with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatLog', objPilatLog);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatLogsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objPilatLog = await pilatLogService.findOneById(id, req.query);
        if (!objPilatLog) {
            util.setError(404, `Cannot find pilatLog with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatLog', objPilatLog);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatLogsCtrl.findOneByAction = async (req, res) => {
    try {
        const { action } = req.params;
        const objPilatLog = await pilatLogService.findOneByAction(action, req.query);
        if (!objPilatLog) {
            util.setError(404, `Cannot find pilatLog with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatLog', objPilatLog);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatLogsCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objPilatLog = await pilatLogService.findOneByDescription(description, req.query);
        if (!objPilatLog) {
            util.setError(404, `Cannot find pilatLog with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatLog', objPilatLog);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatLogsCtrl.findOneByModule = async (req, res) => {
    try {
        const { module } = req.params;
        const objPilatLog = await pilatLogService.findOneByModule(module, req.query);
        if (!objPilatLog) {
            util.setError(404, `Cannot find pilatLog with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatLog', objPilatLog);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatLogsCtrl.findOneByUser = async (req, res) => {
    try {
        const { user } = req.params;
        const objPilatLog = await pilatLogService.findOneByUser(user, req.query);
        if (!objPilatLog) {
            util.setError(404, `Cannot find pilatLog with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatLog', objPilatLog);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatLogsCtrl.findOneBySourceId = async (req, res) => {
    try {
        const { sourceId } = req.params;
        const objPilatLog = await pilatLogService.findOneBySourceId(sourceId, req.query);
        if (!objPilatLog) {
            util.setError(404, `Cannot find pilatLog with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatLog', objPilatLog);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatLogsCtrl.findOneByModuleId = async (req, res) => {
    try {
        const { moduleId } = req.params;
        const objPilatLog = await pilatLogService.findOneByModuleId(moduleId, req.query);
        if (!objPilatLog) {
            util.setError(404, `Cannot find pilatLog with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatLog', objPilatLog);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatLogsCtrl.findOneByCreatedby = async (req, res) => {
    try {
        const { createdby } = req.params;
        const objPilatLog = await pilatLogService.findOneByCreatedby(createdby, req.query);
        if (!objPilatLog) {
            util.setError(404, `Cannot find pilatLog with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatLog', objPilatLog);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatLogsCtrl.findOneByUpdatedby = async (req, res) => {
    try {
        const { updatedby } = req.params;
        const objPilatLog = await pilatLogService.findOneByUpdatedby(updatedby, req.query);
        if (!objPilatLog) {
            util.setError(404, `Cannot find pilatLog with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatLog', objPilatLog);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatLogsCtrl.findOneByDueat = async (req, res) => {
    try {
        const { dueat } = req.params;
        const objPilatLog = await pilatLogService.findOneByDueat(dueat, req.query);
        if (!objPilatLog) {
            util.setError(404, `Cannot find pilatLog with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatLog', objPilatLog);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatLogsCtrl.findOneByCreatedat = async (req, res) => {
    try {
        const { createdat } = req.params;
        const objPilatLog = await pilatLogService.findOneByCreatedat(createdat, req.query);
        if (!objPilatLog) {
            util.setError(404, `Cannot find pilatLog with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatLog', objPilatLog);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatLogsCtrl.findOneByUpdatedat = async (req, res) => {
    try {
        const { updatedat } = req.params;
        const objPilatLog = await pilatLogService.findOneByUpdatedat(updatedat, req.query);
        if (!objPilatLog) {
            util.setError(404, `Cannot find pilatLog with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatLog', objPilatLog);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



pilatLogsCtrl.updatePilatLogByUid = async (req, res) => {
     const { Id } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatLog = await pilatLogService.updatePilatLogByUid(Id, req.body);
            if (!objPilatLog) {
                util.setError(404, `Cannot find pilatLog with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatLog updated', objPilatLog);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatLogsCtrl.updatePilatLogById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatLog = await pilatLogService.updatePilatLogById(id, req.body);
            if (!objPilatLog) {
                util.setError(404, `Cannot find pilatLog with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatLog updated', objPilatLog);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatLogsCtrl.updatePilatLogByAction = async (req, res) => {
     const { action } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatLog = await pilatLogService.updatePilatLogByAction(action, req.body);
            if (!objPilatLog) {
                util.setError(404, `Cannot find pilatLog with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatLog updated', objPilatLog);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatLogsCtrl.updatePilatLogByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatLog = await pilatLogService.updatePilatLogByDescription(description, req.body);
            if (!objPilatLog) {
                util.setError(404, `Cannot find pilatLog with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatLog updated', objPilatLog);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatLogsCtrl.updatePilatLogByModule = async (req, res) => {
     const { module } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatLog = await pilatLogService.updatePilatLogByModule(module, req.body);
            if (!objPilatLog) {
                util.setError(404, `Cannot find pilatLog with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatLog updated', objPilatLog);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatLogsCtrl.updatePilatLogByUser = async (req, res) => {
     const { user } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatLog = await pilatLogService.updatePilatLogByUser(user, req.body);
            if (!objPilatLog) {
                util.setError(404, `Cannot find pilatLog with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatLog updated', objPilatLog);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatLogsCtrl.updatePilatLogBySourceId = async (req, res) => {
     const { sourceId } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatLog = await pilatLogService.updatePilatLogBySourceId(sourceId, req.body);
            if (!objPilatLog) {
                util.setError(404, `Cannot find pilatLog with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatLog updated', objPilatLog);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatLogsCtrl.updatePilatLogByModuleId = async (req, res) => {
     const { moduleId } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatLog = await pilatLogService.updatePilatLogByModuleId(moduleId, req.body);
            if (!objPilatLog) {
                util.setError(404, `Cannot find pilatLog with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatLog updated', objPilatLog);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatLogsCtrl.updatePilatLogByCreatedby = async (req, res) => {
     const { createdby } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatLog = await pilatLogService.updatePilatLogByCreatedby(createdby, req.body);
            if (!objPilatLog) {
                util.setError(404, `Cannot find pilatLog with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatLog updated', objPilatLog);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatLogsCtrl.updatePilatLogByUpdatedby = async (req, res) => {
     const { updatedby } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatLog = await pilatLogService.updatePilatLogByUpdatedby(updatedby, req.body);
            if (!objPilatLog) {
                util.setError(404, `Cannot find pilatLog with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatLog updated', objPilatLog);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatLogsCtrl.updatePilatLogByDueat = async (req, res) => {
     const { dueat } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatLog = await pilatLogService.updatePilatLogByDueat(dueat, req.body);
            if (!objPilatLog) {
                util.setError(404, `Cannot find pilatLog with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatLog updated', objPilatLog);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatLogsCtrl.updatePilatLogByCreatedat = async (req, res) => {
     const { createdat } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatLog = await pilatLogService.updatePilatLogByCreatedat(createdat, req.body);
            if (!objPilatLog) {
                util.setError(404, `Cannot find pilatLog with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatLog updated', objPilatLog);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatLogsCtrl.updatePilatLogByUpdatedat = async (req, res) => {
     const { updatedat } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatLog = await pilatLogService.updatePilatLogByUpdatedat(updatedat, req.body);
            if (!objPilatLog) {
                util.setError(404, `Cannot find pilatLog with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatLog updated', objPilatLog);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = pilatLogsCtrl;
//</es-section>
