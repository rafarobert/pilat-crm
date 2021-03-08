/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:01 GMT-0400 (Bolivia Time)
 * Time: 15:35:1
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:01 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:1
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const alertService = require('../services/alerts.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const alertsCtrl = {};
alertsCtrl.service = alertService;


alertsCtrl.getAllAlerts = async (req, res) => {
    try {
        const objAlerts = await alertService.getAllAlerts(req.query);
        if (objAlerts.length > 0) {
            util.setSuccess(200, 'Alerts retrieved', objAlerts);
        } else {
            util.setSuccess(200, 'No alert found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

alertsCtrl.getAAlert = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAlert = await alertService.getAAlert(id, req.query);
        if (!objAlert) {
            util.setError(404, `Cannot find alert with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found alert', objAlert);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

alertsCtrl.addAlert = async (req, res) => {
    try {
        const objAlert = await alertService.addAlert(req.body);
        util.setSuccess(201, 'Alert Added!', objAlert);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

alertsCtrl.updateAlert = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAlert = await alertService.updateAlert(id, req.body);
        if (!objAlert) {
            util.setError(404, `Cannot find alert with the id: ${id}`);
        } else {
            util.setSuccess(200, 'Alert updated', objAlert);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

alertsCtrl.deleteAlert = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAlert = await alertService.deleteAlert(id);
        if (objAlert) {
            util.setSuccess(200, 'Alert deleted', objAlert);
        } else {
            util.setError(404, `Alert with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



alertsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAlert = await alertService.findOneById(id, req.query);
        if (!objAlert) {
            util.setError(404, `Cannot find alert with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found alert', objAlert);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

alertsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAlert = await alertService.findOneByDeleted(deleted, req.query);
        if (!objAlert) {
            util.setError(404, `Cannot find alert with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found alert', objAlert);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

alertsCtrl.findOneByIsRead = async (req, res) => {
    try {
        const { isRead } = req.params;
        const objAlert = await alertService.findOneByIsRead(isRead, req.query);
        if (!objAlert) {
            util.setError(404, `Cannot find alert with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found alert', objAlert);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

alertsCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objAlert = await alertService.findOneByName(name, req.query);
        if (!objAlert) {
            util.setError(404, `Cannot find alert with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found alert', objAlert);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

alertsCtrl.findOneByTargetModule = async (req, res) => {
    try {
        const { targetModule } = req.params;
        const objAlert = await alertService.findOneByTargetModule(targetModule, req.query);
        if (!objAlert) {
            util.setError(404, `Cannot find alert with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found alert', objAlert);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

alertsCtrl.findOneByType = async (req, res) => {
    try {
        const { type } = req.params;
        const objAlert = await alertService.findOneByType(type, req.query);
        if (!objAlert) {
            util.setError(404, `Cannot find alert with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found alert', objAlert);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

alertsCtrl.findOneByUrlRedirect = async (req, res) => {
    try {
        const { urlRedirect } = req.params;
        const objAlert = await alertService.findOneByUrlRedirect(urlRedirect, req.query);
        if (!objAlert) {
            util.setError(404, `Cannot find alert with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found alert', objAlert);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

alertsCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objAlert = await alertService.findOneByDescription(description, req.query);
        if (!objAlert) {
            util.setError(404, `Cannot find alert with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found alert', objAlert);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

alertsCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objAlert = await alertService.findOneByDateEntered(dateEntered, req.query);
        if (!objAlert) {
            util.setError(404, `Cannot find alert with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found alert', objAlert);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

alertsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAlert = await alertService.findOneByDateModified(dateModified, req.query);
        if (!objAlert) {
            util.setError(404, `Cannot find alert with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found alert', objAlert);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

alertsCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objAlert = await alertService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objAlert) {
            util.setError(404, `Cannot find alert with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found alert', objAlert);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

alertsCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAlert = await alertService.findOneByCreatedBy(createdBy, req.query);
        if (!objAlert) {
            util.setError(404, `Cannot find alert with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found alert', objAlert);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

alertsCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objAlert = await alertService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objAlert) {
            util.setError(404, `Cannot find alert with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found alert', objAlert);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

alertsCtrl.findOneByReminderId = async (req, res) => {
    try {
        const { reminderId } = req.params;
        const objAlert = await alertService.findOneByReminderId(reminderId, req.query);
        if (!objAlert) {
            util.setError(404, `Cannot find alert with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found alert', objAlert);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



alertsCtrl.updateAlertById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAlert = await alertService.updateAlertById(id, req.body);
            if (!objAlert) {
                util.setError(404, `Cannot find alert with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Alert updated', objAlert);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

alertsCtrl.updateAlertByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAlert = await alertService.updateAlertByDeleted(deleted, req.body);
            if (!objAlert) {
                util.setError(404, `Cannot find alert with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Alert updated', objAlert);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

alertsCtrl.updateAlertByIsRead = async (req, res) => {
     const { isRead } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAlert = await alertService.updateAlertByIsRead(isRead, req.body);
            if (!objAlert) {
                util.setError(404, `Cannot find alert with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Alert updated', objAlert);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

alertsCtrl.updateAlertByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAlert = await alertService.updateAlertByName(name, req.body);
            if (!objAlert) {
                util.setError(404, `Cannot find alert with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Alert updated', objAlert);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

alertsCtrl.updateAlertByTargetModule = async (req, res) => {
     const { targetModule } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAlert = await alertService.updateAlertByTargetModule(targetModule, req.body);
            if (!objAlert) {
                util.setError(404, `Cannot find alert with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Alert updated', objAlert);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

alertsCtrl.updateAlertByType = async (req, res) => {
     const { type } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAlert = await alertService.updateAlertByType(type, req.body);
            if (!objAlert) {
                util.setError(404, `Cannot find alert with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Alert updated', objAlert);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

alertsCtrl.updateAlertByUrlRedirect = async (req, res) => {
     const { urlRedirect } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAlert = await alertService.updateAlertByUrlRedirect(urlRedirect, req.body);
            if (!objAlert) {
                util.setError(404, `Cannot find alert with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Alert updated', objAlert);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

alertsCtrl.updateAlertByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAlert = await alertService.updateAlertByDescription(description, req.body);
            if (!objAlert) {
                util.setError(404, `Cannot find alert with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Alert updated', objAlert);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

alertsCtrl.updateAlertByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAlert = await alertService.updateAlertByDateEntered(dateEntered, req.body);
            if (!objAlert) {
                util.setError(404, `Cannot find alert with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Alert updated', objAlert);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

alertsCtrl.updateAlertByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAlert = await alertService.updateAlertByDateModified(dateModified, req.body);
            if (!objAlert) {
                util.setError(404, `Cannot find alert with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Alert updated', objAlert);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

alertsCtrl.updateAlertByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAlert = await alertService.updateAlertByModifiedUserId(modifiedUserId, req.body);
            if (!objAlert) {
                util.setError(404, `Cannot find alert with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Alert updated', objAlert);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

alertsCtrl.updateAlertByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAlert = await alertService.updateAlertByCreatedBy(createdBy, req.body);
            if (!objAlert) {
                util.setError(404, `Cannot find alert with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Alert updated', objAlert);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

alertsCtrl.updateAlertByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAlert = await alertService.updateAlertByAssignedUserId(assignedUserId, req.body);
            if (!objAlert) {
                util.setError(404, `Cannot find alert with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Alert updated', objAlert);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

alertsCtrl.updateAlertByReminderId = async (req, res) => {
     const { reminderId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAlert = await alertService.updateAlertByReminderId(reminderId, req.body);
            if (!objAlert) {
                util.setError(404, `Cannot find alert with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Alert updated', objAlert);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = alertsCtrl;
//</es-section>
