/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:35:29 GMT-0400 (Bolivia Time)
 * Time: 18:35:29
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:35:29 GMT-0400 (Bolivia Time)
 * Last time updated: 18:35:29
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const amProjecttemplateService = require('../services/am_projecttemplates.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const amProjecttemplatesCtrl = {};
amProjecttemplatesCtrl.service = amProjecttemplateService;


amProjecttemplatesCtrl.getAllAmProjecttemplates = async (req, res) => {
    try {
        const objAmProjecttemplates = await amProjecttemplateService.getAllAmProjecttemplates(req.query);
        if (objAmProjecttemplates.length > 0) {
            util.setSuccess(200, 'AmProjecttemplates retrieved', objAmProjecttemplates);
        } else {
            util.setSuccess(200, 'No amProjecttemplate found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesCtrl.getAAmProjecttemplate = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAmProjecttemplate = await amProjecttemplateService.getAAmProjecttemplate(id, req.query);
        if (!objAmProjecttemplate) {
            util.setError(404, `Cannot find amProjecttemplate with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found amProjecttemplate', objAmProjecttemplate);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesCtrl.addAmProjecttemplate = async (req, res) => {
    try {
        const objAmProjecttemplate = await amProjecttemplateService.addAmProjecttemplate(req.body);
        util.setSuccess(201, 'AmProjecttemplate Added!', objAmProjecttemplate);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesCtrl.updateAmProjecttemplate = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAmProjecttemplate = await amProjecttemplateService.updateAmProjecttemplate(id, req.body);
        if (!objAmProjecttemplate) {
            util.setError(404, `Cannot find amProjecttemplate with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AmProjecttemplate updated', objAmProjecttemplate);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

amProjecttemplatesCtrl.deleteAmProjecttemplate = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAmProjecttemplate = await amProjecttemplateService.deleteAmProjecttemplate(id);
        if (objAmProjecttemplate) {
            util.setSuccess(200, 'AmProjecttemplate deleted', objAmProjecttemplate);
        } else {
            util.setError(404, `AmProjecttemplate with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



amProjecttemplatesCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAmProjecttemplate = await amProjecttemplateService.findOneById(id, req.query);
        if (!objAmProjecttemplate) {
            util.setError(404, `Cannot find amProjecttemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amProjecttemplate', objAmProjecttemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAmProjecttemplate = await amProjecttemplateService.findOneByDeleted(deleted, req.query);
        if (!objAmProjecttemplate) {
            util.setError(404, `Cannot find amProjecttemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amProjecttemplate', objAmProjecttemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesCtrl.findOneByOverrideBusinessHours = async (req, res) => {
    try {
        const { overrideBusinessHours } = req.params;
        const objAmProjecttemplate = await amProjecttemplateService.findOneByOverrideBusinessHours(overrideBusinessHours, req.query);
        if (!objAmProjecttemplate) {
            util.setError(404, `Cannot find amProjecttemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amProjecttemplate', objAmProjecttemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objAmProjecttemplate = await amProjecttemplateService.findOneByName(name, req.query);
        if (!objAmProjecttemplate) {
            util.setError(404, `Cannot find amProjecttemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amProjecttemplate', objAmProjecttemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesCtrl.findOneByStatus = async (req, res) => {
    try {
        const { status } = req.params;
        const objAmProjecttemplate = await amProjecttemplateService.findOneByStatus(status, req.query);
        if (!objAmProjecttemplate) {
            util.setError(404, `Cannot find amProjecttemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amProjecttemplate', objAmProjecttemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesCtrl.findOneByPriority = async (req, res) => {
    try {
        const { priority } = req.params;
        const objAmProjecttemplate = await amProjecttemplateService.findOneByPriority(priority, req.query);
        if (!objAmProjecttemplate) {
            util.setError(404, `Cannot find amProjecttemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amProjecttemplate', objAmProjecttemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objAmProjecttemplate = await amProjecttemplateService.findOneByDescription(description, req.query);
        if (!objAmProjecttemplate) {
            util.setError(404, `Cannot find amProjecttemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amProjecttemplate', objAmProjecttemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objAmProjecttemplate = await amProjecttemplateService.findOneByDateEntered(dateEntered, req.query);
        if (!objAmProjecttemplate) {
            util.setError(404, `Cannot find amProjecttemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amProjecttemplate', objAmProjecttemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAmProjecttemplate = await amProjecttemplateService.findOneByDateModified(dateModified, req.query);
        if (!objAmProjecttemplate) {
            util.setError(404, `Cannot find amProjecttemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amProjecttemplate', objAmProjecttemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objAmProjecttemplate = await amProjecttemplateService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objAmProjecttemplate) {
            util.setError(404, `Cannot find amProjecttemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amProjecttemplate', objAmProjecttemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAmProjecttemplate = await amProjecttemplateService.findOneByCreatedBy(createdBy, req.query);
        if (!objAmProjecttemplate) {
            util.setError(404, `Cannot find amProjecttemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amProjecttemplate', objAmProjecttemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objAmProjecttemplate = await amProjecttemplateService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objAmProjecttemplate) {
            util.setError(404, `Cannot find amProjecttemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amProjecttemplate', objAmProjecttemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



amProjecttemplatesCtrl.updateAmProjecttemplateById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmProjecttemplate = await amProjecttemplateService.updateAmProjecttemplateById(id, req.body);
            if (!objAmProjecttemplate) {
                util.setError(404, `Cannot find amProjecttemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmProjecttemplate updated', objAmProjecttemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amProjecttemplatesCtrl.updateAmProjecttemplateByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmProjecttemplate = await amProjecttemplateService.updateAmProjecttemplateByDeleted(deleted, req.body);
            if (!objAmProjecttemplate) {
                util.setError(404, `Cannot find amProjecttemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmProjecttemplate updated', objAmProjecttemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amProjecttemplatesCtrl.updateAmProjecttemplateByOverrideBusinessHours = async (req, res) => {
     const { overrideBusinessHours } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmProjecttemplate = await amProjecttemplateService.updateAmProjecttemplateByOverrideBusinessHours(overrideBusinessHours, req.body);
            if (!objAmProjecttemplate) {
                util.setError(404, `Cannot find amProjecttemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmProjecttemplate updated', objAmProjecttemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amProjecttemplatesCtrl.updateAmProjecttemplateByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmProjecttemplate = await amProjecttemplateService.updateAmProjecttemplateByName(name, req.body);
            if (!objAmProjecttemplate) {
                util.setError(404, `Cannot find amProjecttemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmProjecttemplate updated', objAmProjecttemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amProjecttemplatesCtrl.updateAmProjecttemplateByStatus = async (req, res) => {
     const { status } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmProjecttemplate = await amProjecttemplateService.updateAmProjecttemplateByStatus(status, req.body);
            if (!objAmProjecttemplate) {
                util.setError(404, `Cannot find amProjecttemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmProjecttemplate updated', objAmProjecttemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amProjecttemplatesCtrl.updateAmProjecttemplateByPriority = async (req, res) => {
     const { priority } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmProjecttemplate = await amProjecttemplateService.updateAmProjecttemplateByPriority(priority, req.body);
            if (!objAmProjecttemplate) {
                util.setError(404, `Cannot find amProjecttemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmProjecttemplate updated', objAmProjecttemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amProjecttemplatesCtrl.updateAmProjecttemplateByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmProjecttemplate = await amProjecttemplateService.updateAmProjecttemplateByDescription(description, req.body);
            if (!objAmProjecttemplate) {
                util.setError(404, `Cannot find amProjecttemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmProjecttemplate updated', objAmProjecttemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amProjecttemplatesCtrl.updateAmProjecttemplateByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmProjecttemplate = await amProjecttemplateService.updateAmProjecttemplateByDateEntered(dateEntered, req.body);
            if (!objAmProjecttemplate) {
                util.setError(404, `Cannot find amProjecttemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmProjecttemplate updated', objAmProjecttemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amProjecttemplatesCtrl.updateAmProjecttemplateByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmProjecttemplate = await amProjecttemplateService.updateAmProjecttemplateByDateModified(dateModified, req.body);
            if (!objAmProjecttemplate) {
                util.setError(404, `Cannot find amProjecttemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmProjecttemplate updated', objAmProjecttemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amProjecttemplatesCtrl.updateAmProjecttemplateByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmProjecttemplate = await amProjecttemplateService.updateAmProjecttemplateByModifiedUserId(modifiedUserId, req.body);
            if (!objAmProjecttemplate) {
                util.setError(404, `Cannot find amProjecttemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmProjecttemplate updated', objAmProjecttemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amProjecttemplatesCtrl.updateAmProjecttemplateByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmProjecttemplate = await amProjecttemplateService.updateAmProjecttemplateByCreatedBy(createdBy, req.body);
            if (!objAmProjecttemplate) {
                util.setError(404, `Cannot find amProjecttemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmProjecttemplate updated', objAmProjecttemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amProjecttemplatesCtrl.updateAmProjecttemplateByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmProjecttemplate = await amProjecttemplateService.updateAmProjecttemplateByAssignedUserId(assignedUserId, req.body);
            if (!objAmProjecttemplate) {
                util.setError(404, `Cannot find amProjecttemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmProjecttemplate updated', objAmProjecttemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = amProjecttemplatesCtrl;
//</es-section>
