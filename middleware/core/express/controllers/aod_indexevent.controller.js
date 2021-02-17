/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:41:54 GMT-0400 (Bolivia Time)
 * Time: 4:41:54
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:41:54 GMT-0400 (Bolivia Time)
 * Last time updated: 4:41:54
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const aodIndexeventService = require('../services/aod_indexevent.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aodIndexeventCtrl = {};
aodIndexeventCtrl.service = aodIndexeventService;


aodIndexeventCtrl.getAllAodIndexevent = async (req, res) => {
    try {
        const objAodIndexevent = await aodIndexeventService.getAllAodIndexevent(req.query);
        if (objAodIndexevent.length > 0) {
            util.setSuccess(200, 'AodIndexevent retrieved', objAodIndexevent);
        } else {
            util.setSuccess(200, 'No aodIndexevent found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexeventCtrl.getAAodIndexevent = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAodIndexevent = await aodIndexeventService.getAAodIndexevent(id, req.query);
        if (!objAodIndexevent) {
            util.setError(404, `Cannot find aodIndexevent with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aodIndexevent', objAodIndexevent);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexeventCtrl.addAodIndexevent = async (req, res) => {
    try {
        const objAodIndexevent = await aodIndexeventService.addAodIndexevent(req.body);
        util.setSuccess(201, 'AodIndexevent Added!', objAodIndexevent);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexeventCtrl.updateAodIndexevent = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAodIndexevent = await aodIndexeventService.updateAodIndexevent(id, req.body);
        if (!objAodIndexevent) {
            util.setError(404, `Cannot find aodIndexevent with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AodIndexevent updated', objAodIndexevent);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aodIndexeventCtrl.deleteAodIndexevent = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAodIndexevent = await aodIndexeventService.deleteAodIndexevent(id);
        if (objAodIndexevent) {
            util.setSuccess(200, 'AodIndexevent deleted', objAodIndexevent);
        } else {
            util.setError(404, `AodIndexevent with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aodIndexeventCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAodIndexevent = await aodIndexeventService.findOneById(id, req.query);
        if (!objAodIndexevent) {
            util.setError(404, `Cannot find aodIndexevent with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndexevent', objAodIndexevent);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexeventCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAodIndexevent = await aodIndexeventService.findOneByDeleted(deleted, req.query);
        if (!objAodIndexevent) {
            util.setError(404, `Cannot find aodIndexevent with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndexevent', objAodIndexevent);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexeventCtrl.findOneBySuccess = async (req, res) => {
    try {
        const { success } = req.params;
        const objAodIndexevent = await aodIndexeventService.findOneBySuccess(success, req.query);
        if (!objAodIndexevent) {
            util.setError(404, `Cannot find aodIndexevent with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndexevent', objAodIndexevent);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexeventCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objAodIndexevent = await aodIndexeventService.findOneByName(name, req.query);
        if (!objAodIndexevent) {
            util.setError(404, `Cannot find aodIndexevent with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndexevent', objAodIndexevent);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexeventCtrl.findOneByError = async (req, res) => {
    try {
        const { error } = req.params;
        const objAodIndexevent = await aodIndexeventService.findOneByError(error, req.query);
        if (!objAodIndexevent) {
            util.setError(404, `Cannot find aodIndexevent with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndexevent', objAodIndexevent);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexeventCtrl.findOneByRecordModule = async (req, res) => {
    try {
        const { recordModule } = req.params;
        const objAodIndexevent = await aodIndexeventService.findOneByRecordModule(recordModule, req.query);
        if (!objAodIndexevent) {
            util.setError(404, `Cannot find aodIndexevent with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndexevent', objAodIndexevent);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexeventCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objAodIndexevent = await aodIndexeventService.findOneByDescription(description, req.query);
        if (!objAodIndexevent) {
            util.setError(404, `Cannot find aodIndexevent with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndexevent', objAodIndexevent);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexeventCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objAodIndexevent = await aodIndexeventService.findOneByDateEntered(dateEntered, req.query);
        if (!objAodIndexevent) {
            util.setError(404, `Cannot find aodIndexevent with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndexevent', objAodIndexevent);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexeventCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAodIndexevent = await aodIndexeventService.findOneByDateModified(dateModified, req.query);
        if (!objAodIndexevent) {
            util.setError(404, `Cannot find aodIndexevent with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndexevent', objAodIndexevent);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexeventCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objAodIndexevent = await aodIndexeventService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objAodIndexevent) {
            util.setError(404, `Cannot find aodIndexevent with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndexevent', objAodIndexevent);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexeventCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAodIndexevent = await aodIndexeventService.findOneByCreatedBy(createdBy, req.query);
        if (!objAodIndexevent) {
            util.setError(404, `Cannot find aodIndexevent with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndexevent', objAodIndexevent);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexeventCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objAodIndexevent = await aodIndexeventService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objAodIndexevent) {
            util.setError(404, `Cannot find aodIndexevent with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndexevent', objAodIndexevent);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexeventCtrl.findOneByRecordId = async (req, res) => {
    try {
        const { recordId } = req.params;
        const objAodIndexevent = await aodIndexeventService.findOneByRecordId(recordId, req.query);
        if (!objAodIndexevent) {
            util.setError(404, `Cannot find aodIndexevent with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndexevent', objAodIndexevent);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aodIndexeventCtrl.updateAodIndexeventById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndexevent = await aodIndexeventService.updateAodIndexeventById(id, req.body);
            if (!objAodIndexevent) {
                util.setError(404, `Cannot find aodIndexevent with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndexevent updated', objAodIndexevent);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aodIndexeventCtrl.updateAodIndexeventByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndexevent = await aodIndexeventService.updateAodIndexeventByDeleted(deleted, req.body);
            if (!objAodIndexevent) {
                util.setError(404, `Cannot find aodIndexevent with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndexevent updated', objAodIndexevent);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aodIndexeventCtrl.updateAodIndexeventBySuccess = async (req, res) => {
     const { success } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndexevent = await aodIndexeventService.updateAodIndexeventBySuccess(success, req.body);
            if (!objAodIndexevent) {
                util.setError(404, `Cannot find aodIndexevent with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndexevent updated', objAodIndexevent);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aodIndexeventCtrl.updateAodIndexeventByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndexevent = await aodIndexeventService.updateAodIndexeventByName(name, req.body);
            if (!objAodIndexevent) {
                util.setError(404, `Cannot find aodIndexevent with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndexevent updated', objAodIndexevent);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aodIndexeventCtrl.updateAodIndexeventByError = async (req, res) => {
     const { error } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndexevent = await aodIndexeventService.updateAodIndexeventByError(error, req.body);
            if (!objAodIndexevent) {
                util.setError(404, `Cannot find aodIndexevent with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndexevent updated', objAodIndexevent);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aodIndexeventCtrl.updateAodIndexeventByRecordModule = async (req, res) => {
     const { recordModule } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndexevent = await aodIndexeventService.updateAodIndexeventByRecordModule(recordModule, req.body);
            if (!objAodIndexevent) {
                util.setError(404, `Cannot find aodIndexevent with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndexevent updated', objAodIndexevent);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aodIndexeventCtrl.updateAodIndexeventByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndexevent = await aodIndexeventService.updateAodIndexeventByDescription(description, req.body);
            if (!objAodIndexevent) {
                util.setError(404, `Cannot find aodIndexevent with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndexevent updated', objAodIndexevent);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aodIndexeventCtrl.updateAodIndexeventByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndexevent = await aodIndexeventService.updateAodIndexeventByDateEntered(dateEntered, req.body);
            if (!objAodIndexevent) {
                util.setError(404, `Cannot find aodIndexevent with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndexevent updated', objAodIndexevent);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aodIndexeventCtrl.updateAodIndexeventByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndexevent = await aodIndexeventService.updateAodIndexeventByDateModified(dateModified, req.body);
            if (!objAodIndexevent) {
                util.setError(404, `Cannot find aodIndexevent with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndexevent updated', objAodIndexevent);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aodIndexeventCtrl.updateAodIndexeventByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndexevent = await aodIndexeventService.updateAodIndexeventByModifiedUserId(modifiedUserId, req.body);
            if (!objAodIndexevent) {
                util.setError(404, `Cannot find aodIndexevent with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndexevent updated', objAodIndexevent);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aodIndexeventCtrl.updateAodIndexeventByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndexevent = await aodIndexeventService.updateAodIndexeventByCreatedBy(createdBy, req.body);
            if (!objAodIndexevent) {
                util.setError(404, `Cannot find aodIndexevent with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndexevent updated', objAodIndexevent);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aodIndexeventCtrl.updateAodIndexeventByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndexevent = await aodIndexeventService.updateAodIndexeventByAssignedUserId(assignedUserId, req.body);
            if (!objAodIndexevent) {
                util.setError(404, `Cannot find aodIndexevent with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndexevent updated', objAodIndexevent);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aodIndexeventCtrl.updateAodIndexeventByRecordId = async (req, res) => {
     const { recordId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndexevent = await aodIndexeventService.updateAodIndexeventByRecordId(recordId, req.body);
            if (!objAodIndexevent) {
                util.setError(404, `Cannot find aodIndexevent with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndexevent updated', objAodIndexevent);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aodIndexeventCtrl;
//</es-section>
