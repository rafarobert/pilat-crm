/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:30 GMT-0400 (Bolivia Time)
 * Time: 14:1:30
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:30 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:30
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const securitygroupRecordService = require('../services/securitygroups_records.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const securitygroupsRecordsCtrl = {};
securitygroupsRecordsCtrl.service = securitygroupRecordService;


securitygroupsRecordsCtrl.getAllSecuritygroupsRecords = async (req, res) => {
    try {
        const objSecuritygroupsRecords = await securitygroupRecordService.getAllSecuritygroupsRecords(req.query);
        if (objSecuritygroupsRecords.length > 0) {
            util.setSuccess(200, 'SecuritygroupsRecords retrieved', objSecuritygroupsRecords);
        } else {
            util.setSuccess(200, 'No securitygroupRecord found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsRecordsCtrl.getASecuritygroupRecord = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objSecuritygroupRecord = await securitygroupRecordService.getASecuritygroupRecord(id, req.query);
        if (!objSecuritygroupRecord) {
            util.setError(404, `Cannot find securitygroupRecord with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found securitygroupRecord', objSecuritygroupRecord);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsRecordsCtrl.addSecuritygroupRecord = async (req, res) => {
    try {
        const objSecuritygroupRecord = await securitygroupRecordService.addSecuritygroupRecord(req.body);
        util.setSuccess(201, 'SecuritygroupRecord Added!', objSecuritygroupRecord);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsRecordsCtrl.updateSecuritygroupRecord = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objSecuritygroupRecord = await securitygroupRecordService.updateSecuritygroupRecord(id, req.body);
        if (!objSecuritygroupRecord) {
            util.setError(404, `Cannot find securitygroupRecord with the id: ${id}`);
        } else {
            util.setSuccess(200, 'SecuritygroupRecord updated', objSecuritygroupRecord);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

securitygroupsRecordsCtrl.deleteSecuritygroupRecord = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objSecuritygroupRecord = await securitygroupRecordService.deleteSecuritygroupRecord(id);
        if (objSecuritygroupRecord) {
            util.setSuccess(200, 'SecuritygroupRecord deleted', objSecuritygroupRecord);
        } else {
            util.setError(404, `SecuritygroupRecord with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



securitygroupsRecordsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objSecuritygroupRecord = await securitygroupRecordService.findOneById(id, req.query);
        if (!objSecuritygroupRecord) {
            util.setError(404, `Cannot find securitygroupRecord with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroupRecord', objSecuritygroupRecord);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsRecordsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objSecuritygroupRecord = await securitygroupRecordService.findOneByDeleted(deleted, req.query);
        if (!objSecuritygroupRecord) {
            util.setError(404, `Cannot find securitygroupRecord with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroupRecord', objSecuritygroupRecord);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsRecordsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objSecuritygroupRecord = await securitygroupRecordService.findOneByDateModified(dateModified, req.query);
        if (!objSecuritygroupRecord) {
            util.setError(404, `Cannot find securitygroupRecord with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroupRecord', objSecuritygroupRecord);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsRecordsCtrl.findOneBySecuritygroupId = async (req, res) => {
    try {
        const { securitygroupId } = req.params;
        const objSecuritygroupRecord = await securitygroupRecordService.findOneBySecuritygroupId(securitygroupId, req.query);
        if (!objSecuritygroupRecord) {
            util.setError(404, `Cannot find securitygroupRecord with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroupRecord', objSecuritygroupRecord);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsRecordsCtrl.findOneByRecordId = async (req, res) => {
    try {
        const { recordId } = req.params;
        const objSecuritygroupRecord = await securitygroupRecordService.findOneByRecordId(recordId, req.query);
        if (!objSecuritygroupRecord) {
            util.setError(404, `Cannot find securitygroupRecord with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroupRecord', objSecuritygroupRecord);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsRecordsCtrl.findOneByModule = async (req, res) => {
    try {
        const { module } = req.params;
        const objSecuritygroupRecord = await securitygroupRecordService.findOneByModule(module, req.query);
        if (!objSecuritygroupRecord) {
            util.setError(404, `Cannot find securitygroupRecord with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroupRecord', objSecuritygroupRecord);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsRecordsCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objSecuritygroupRecord = await securitygroupRecordService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objSecuritygroupRecord) {
            util.setError(404, `Cannot find securitygroupRecord with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroupRecord', objSecuritygroupRecord);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsRecordsCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objSecuritygroupRecord = await securitygroupRecordService.findOneByCreatedBy(createdBy, req.query);
        if (!objSecuritygroupRecord) {
            util.setError(404, `Cannot find securitygroupRecord with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroupRecord', objSecuritygroupRecord);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



securitygroupsRecordsCtrl.updateSecuritygroupRecordById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSecuritygroupRecord = await securitygroupRecordService.updateSecuritygroupRecordById(id, req.body);
            if (!objSecuritygroupRecord) {
                util.setError(404, `Cannot find securitygroupRecord with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SecuritygroupRecord updated', objSecuritygroupRecord);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

securitygroupsRecordsCtrl.updateSecuritygroupRecordByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSecuritygroupRecord = await securitygroupRecordService.updateSecuritygroupRecordByDeleted(deleted, req.body);
            if (!objSecuritygroupRecord) {
                util.setError(404, `Cannot find securitygroupRecord with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SecuritygroupRecord updated', objSecuritygroupRecord);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

securitygroupsRecordsCtrl.updateSecuritygroupRecordByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSecuritygroupRecord = await securitygroupRecordService.updateSecuritygroupRecordByDateModified(dateModified, req.body);
            if (!objSecuritygroupRecord) {
                util.setError(404, `Cannot find securitygroupRecord with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SecuritygroupRecord updated', objSecuritygroupRecord);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

securitygroupsRecordsCtrl.updateSecuritygroupRecordBySecuritygroupId = async (req, res) => {
     const { securitygroupId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSecuritygroupRecord = await securitygroupRecordService.updateSecuritygroupRecordBySecuritygroupId(securitygroupId, req.body);
            if (!objSecuritygroupRecord) {
                util.setError(404, `Cannot find securitygroupRecord with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SecuritygroupRecord updated', objSecuritygroupRecord);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

securitygroupsRecordsCtrl.updateSecuritygroupRecordByRecordId = async (req, res) => {
     const { recordId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSecuritygroupRecord = await securitygroupRecordService.updateSecuritygroupRecordByRecordId(recordId, req.body);
            if (!objSecuritygroupRecord) {
                util.setError(404, `Cannot find securitygroupRecord with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SecuritygroupRecord updated', objSecuritygroupRecord);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

securitygroupsRecordsCtrl.updateSecuritygroupRecordByModule = async (req, res) => {
     const { module } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSecuritygroupRecord = await securitygroupRecordService.updateSecuritygroupRecordByModule(module, req.body);
            if (!objSecuritygroupRecord) {
                util.setError(404, `Cannot find securitygroupRecord with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SecuritygroupRecord updated', objSecuritygroupRecord);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

securitygroupsRecordsCtrl.updateSecuritygroupRecordByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSecuritygroupRecord = await securitygroupRecordService.updateSecuritygroupRecordByModifiedUserId(modifiedUserId, req.body);
            if (!objSecuritygroupRecord) {
                util.setError(404, `Cannot find securitygroupRecord with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SecuritygroupRecord updated', objSecuritygroupRecord);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

securitygroupsRecordsCtrl.updateSecuritygroupRecordByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSecuritygroupRecord = await securitygroupRecordService.updateSecuritygroupRecordByCreatedBy(createdBy, req.body);
            if (!objSecuritygroupRecord) {
                util.setError(404, `Cannot find securitygroupRecord with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SecuritygroupRecord updated', objSecuritygroupRecord);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = securitygroupsRecordsCtrl;
//</es-section>
