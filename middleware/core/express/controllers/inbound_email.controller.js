/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:19 GMT-0400 (Bolivia Time)
 * Time: 15:36:19
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:19 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:19
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const inboundEmailService = require('../services/inbound_email.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const inboundEmailCtrl = {};
inboundEmailCtrl.service = inboundEmailService;


inboundEmailCtrl.getAllInboundEmail = async (req, res) => {
    try {
        const objInboundEmail = await inboundEmailService.getAllInboundEmail(req.query);
        if (objInboundEmail.length > 0) {
            util.setSuccess(200, 'InboundEmail retrieved', objInboundEmail);
        } else {
            util.setSuccess(200, 'No inboundEmail found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

inboundEmailCtrl.getAInboundEmail = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objInboundEmail = await inboundEmailService.getAInboundEmail(id, req.query);
        if (!objInboundEmail) {
            util.setError(404, `Cannot find inboundEmail with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found inboundEmail', objInboundEmail);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

inboundEmailCtrl.addInboundEmail = async (req, res) => {
    try {
        const objInboundEmail = await inboundEmailService.addInboundEmail(req.body);
        util.setSuccess(201, 'InboundEmail Added!', objInboundEmail);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

inboundEmailCtrl.updateInboundEmail = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objInboundEmail = await inboundEmailService.updateInboundEmail(id, req.body);
        if (!objInboundEmail) {
            util.setError(404, `Cannot find inboundEmail with the id: ${id}`);
        } else {
            util.setSuccess(200, 'InboundEmail updated', objInboundEmail);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

inboundEmailCtrl.deleteInboundEmail = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objInboundEmail = await inboundEmailService.deleteInboundEmail(id);
        if (objInboundEmail) {
            util.setSuccess(200, 'InboundEmail deleted', objInboundEmail);
        } else {
            util.setError(404, `InboundEmail with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



inboundEmailCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objInboundEmail = await inboundEmailService.findOneById(id, req.query);
        if (!objInboundEmail) {
            util.setError(404, `Cannot find inboundEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found inboundEmail', objInboundEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

inboundEmailCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objInboundEmail = await inboundEmailService.findOneByDeleted(deleted, req.query);
        if (!objInboundEmail) {
            util.setError(404, `Cannot find inboundEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found inboundEmail', objInboundEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

inboundEmailCtrl.findOneByDeleteSeen = async (req, res) => {
    try {
        const { deleteSeen } = req.params;
        const objInboundEmail = await inboundEmailService.findOneByDeleteSeen(deleteSeen, req.query);
        if (!objInboundEmail) {
            util.setError(404, `Cannot find inboundEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found inboundEmail', objInboundEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

inboundEmailCtrl.findOneByIsPersonal = async (req, res) => {
    try {
        const { isPersonal } = req.params;
        const objInboundEmail = await inboundEmailService.findOneByIsPersonal(isPersonal, req.query);
        if (!objInboundEmail) {
            util.setError(404, `Cannot find inboundEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found inboundEmail', objInboundEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

inboundEmailCtrl.findOneByPort = async (req, res) => {
    try {
        const { port } = req.params;
        const objInboundEmail = await inboundEmailService.findOneByPort(port, req.query);
        if (!objInboundEmail) {
            util.setError(404, `Cannot find inboundEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found inboundEmail', objInboundEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

inboundEmailCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objInboundEmail = await inboundEmailService.findOneByName(name, req.query);
        if (!objInboundEmail) {
            util.setError(404, `Cannot find inboundEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found inboundEmail', objInboundEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

inboundEmailCtrl.findOneByStatus = async (req, res) => {
    try {
        const { status } = req.params;
        const objInboundEmail = await inboundEmailService.findOneByStatus(status, req.query);
        if (!objInboundEmail) {
            util.setError(404, `Cannot find inboundEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found inboundEmail', objInboundEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

inboundEmailCtrl.findOneByServerUrl = async (req, res) => {
    try {
        const { serverUrl } = req.params;
        const objInboundEmail = await inboundEmailService.findOneByServerUrl(serverUrl, req.query);
        if (!objInboundEmail) {
            util.setError(404, `Cannot find inboundEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found inboundEmail', objInboundEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

inboundEmailCtrl.findOneByEmailUser = async (req, res) => {
    try {
        const { emailUser } = req.params;
        const objInboundEmail = await inboundEmailService.findOneByEmailUser(emailUser, req.query);
        if (!objInboundEmail) {
            util.setError(404, `Cannot find inboundEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found inboundEmail', objInboundEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

inboundEmailCtrl.findOneByEmailPassword = async (req, res) => {
    try {
        const { emailPassword } = req.params;
        const objInboundEmail = await inboundEmailService.findOneByEmailPassword(emailPassword, req.query);
        if (!objInboundEmail) {
            util.setError(404, `Cannot find inboundEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found inboundEmail', objInboundEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

inboundEmailCtrl.findOneByService = async (req, res) => {
    try {
        const { service } = req.params;
        const objInboundEmail = await inboundEmailService.findOneByService(service, req.query);
        if (!objInboundEmail) {
            util.setError(404, `Cannot find inboundEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found inboundEmail', objInboundEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

inboundEmailCtrl.findOneByMailboxType = async (req, res) => {
    try {
        const { mailboxType } = req.params;
        const objInboundEmail = await inboundEmailService.findOneByMailboxType(mailboxType, req.query);
        if (!objInboundEmail) {
            util.setError(404, `Cannot find inboundEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found inboundEmail', objInboundEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

inboundEmailCtrl.findOneByMailbox = async (req, res) => {
    try {
        const { mailbox } = req.params;
        const objInboundEmail = await inboundEmailService.findOneByMailbox(mailbox, req.query);
        if (!objInboundEmail) {
            util.setError(404, `Cannot find inboundEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found inboundEmail', objInboundEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

inboundEmailCtrl.findOneByStoredOptions = async (req, res) => {
    try {
        const { storedOptions } = req.params;
        const objInboundEmail = await inboundEmailService.findOneByStoredOptions(storedOptions, req.query);
        if (!objInboundEmail) {
            util.setError(404, `Cannot find inboundEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found inboundEmail', objInboundEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

inboundEmailCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objInboundEmail = await inboundEmailService.findOneByDateEntered(dateEntered, req.query);
        if (!objInboundEmail) {
            util.setError(404, `Cannot find inboundEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found inboundEmail', objInboundEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

inboundEmailCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objInboundEmail = await inboundEmailService.findOneByDateModified(dateModified, req.query);
        if (!objInboundEmail) {
            util.setError(404, `Cannot find inboundEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found inboundEmail', objInboundEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

inboundEmailCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objInboundEmail = await inboundEmailService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objInboundEmail) {
            util.setError(404, `Cannot find inboundEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found inboundEmail', objInboundEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

inboundEmailCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objInboundEmail = await inboundEmailService.findOneByCreatedBy(createdBy, req.query);
        if (!objInboundEmail) {
            util.setError(404, `Cannot find inboundEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found inboundEmail', objInboundEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

inboundEmailCtrl.findOneByTemplateId = async (req, res) => {
    try {
        const { templateId } = req.params;
        const objInboundEmail = await inboundEmailService.findOneByTemplateId(templateId, req.query);
        if (!objInboundEmail) {
            util.setError(404, `Cannot find inboundEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found inboundEmail', objInboundEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

inboundEmailCtrl.findOneByGroupId = async (req, res) => {
    try {
        const { groupId } = req.params;
        const objInboundEmail = await inboundEmailService.findOneByGroupId(groupId, req.query);
        if (!objInboundEmail) {
            util.setError(404, `Cannot find inboundEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found inboundEmail', objInboundEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

inboundEmailCtrl.findOneByGroupfolderId = async (req, res) => {
    try {
        const { groupfolderId } = req.params;
        const objInboundEmail = await inboundEmailService.findOneByGroupfolderId(groupfolderId, req.query);
        if (!objInboundEmail) {
            util.setError(404, `Cannot find inboundEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found inboundEmail', objInboundEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



inboundEmailCtrl.updateInboundEmailById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objInboundEmail = await inboundEmailService.updateInboundEmailById(id, req.body);
            if (!objInboundEmail) {
                util.setError(404, `Cannot find inboundEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'InboundEmail updated', objInboundEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

inboundEmailCtrl.updateInboundEmailByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objInboundEmail = await inboundEmailService.updateInboundEmailByDeleted(deleted, req.body);
            if (!objInboundEmail) {
                util.setError(404, `Cannot find inboundEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'InboundEmail updated', objInboundEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

inboundEmailCtrl.updateInboundEmailByDeleteSeen = async (req, res) => {
     const { deleteSeen } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objInboundEmail = await inboundEmailService.updateInboundEmailByDeleteSeen(deleteSeen, req.body);
            if (!objInboundEmail) {
                util.setError(404, `Cannot find inboundEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'InboundEmail updated', objInboundEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

inboundEmailCtrl.updateInboundEmailByIsPersonal = async (req, res) => {
     const { isPersonal } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objInboundEmail = await inboundEmailService.updateInboundEmailByIsPersonal(isPersonal, req.body);
            if (!objInboundEmail) {
                util.setError(404, `Cannot find inboundEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'InboundEmail updated', objInboundEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

inboundEmailCtrl.updateInboundEmailByPort = async (req, res) => {
     const { port } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objInboundEmail = await inboundEmailService.updateInboundEmailByPort(port, req.body);
            if (!objInboundEmail) {
                util.setError(404, `Cannot find inboundEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'InboundEmail updated', objInboundEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

inboundEmailCtrl.updateInboundEmailByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objInboundEmail = await inboundEmailService.updateInboundEmailByName(name, req.body);
            if (!objInboundEmail) {
                util.setError(404, `Cannot find inboundEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'InboundEmail updated', objInboundEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

inboundEmailCtrl.updateInboundEmailByStatus = async (req, res) => {
     const { status } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objInboundEmail = await inboundEmailService.updateInboundEmailByStatus(status, req.body);
            if (!objInboundEmail) {
                util.setError(404, `Cannot find inboundEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'InboundEmail updated', objInboundEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

inboundEmailCtrl.updateInboundEmailByServerUrl = async (req, res) => {
     const { serverUrl } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objInboundEmail = await inboundEmailService.updateInboundEmailByServerUrl(serverUrl, req.body);
            if (!objInboundEmail) {
                util.setError(404, `Cannot find inboundEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'InboundEmail updated', objInboundEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

inboundEmailCtrl.updateInboundEmailByEmailUser = async (req, res) => {
     const { emailUser } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objInboundEmail = await inboundEmailService.updateInboundEmailByEmailUser(emailUser, req.body);
            if (!objInboundEmail) {
                util.setError(404, `Cannot find inboundEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'InboundEmail updated', objInboundEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

inboundEmailCtrl.updateInboundEmailByEmailPassword = async (req, res) => {
     const { emailPassword } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objInboundEmail = await inboundEmailService.updateInboundEmailByEmailPassword(emailPassword, req.body);
            if (!objInboundEmail) {
                util.setError(404, `Cannot find inboundEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'InboundEmail updated', objInboundEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

inboundEmailCtrl.updateInboundEmailByService = async (req, res) => {
     const { service } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objInboundEmail = await inboundEmailService.updateInboundEmailByService(service, req.body);
            if (!objInboundEmail) {
                util.setError(404, `Cannot find inboundEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'InboundEmail updated', objInboundEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

inboundEmailCtrl.updateInboundEmailByMailboxType = async (req, res) => {
     const { mailboxType } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objInboundEmail = await inboundEmailService.updateInboundEmailByMailboxType(mailboxType, req.body);
            if (!objInboundEmail) {
                util.setError(404, `Cannot find inboundEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'InboundEmail updated', objInboundEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

inboundEmailCtrl.updateInboundEmailByMailbox = async (req, res) => {
     const { mailbox } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objInboundEmail = await inboundEmailService.updateInboundEmailByMailbox(mailbox, req.body);
            if (!objInboundEmail) {
                util.setError(404, `Cannot find inboundEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'InboundEmail updated', objInboundEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

inboundEmailCtrl.updateInboundEmailByStoredOptions = async (req, res) => {
     const { storedOptions } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objInboundEmail = await inboundEmailService.updateInboundEmailByStoredOptions(storedOptions, req.body);
            if (!objInboundEmail) {
                util.setError(404, `Cannot find inboundEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'InboundEmail updated', objInboundEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

inboundEmailCtrl.updateInboundEmailByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objInboundEmail = await inboundEmailService.updateInboundEmailByDateEntered(dateEntered, req.body);
            if (!objInboundEmail) {
                util.setError(404, `Cannot find inboundEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'InboundEmail updated', objInboundEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

inboundEmailCtrl.updateInboundEmailByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objInboundEmail = await inboundEmailService.updateInboundEmailByDateModified(dateModified, req.body);
            if (!objInboundEmail) {
                util.setError(404, `Cannot find inboundEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'InboundEmail updated', objInboundEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

inboundEmailCtrl.updateInboundEmailByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objInboundEmail = await inboundEmailService.updateInboundEmailByModifiedUserId(modifiedUserId, req.body);
            if (!objInboundEmail) {
                util.setError(404, `Cannot find inboundEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'InboundEmail updated', objInboundEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

inboundEmailCtrl.updateInboundEmailByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objInboundEmail = await inboundEmailService.updateInboundEmailByCreatedBy(createdBy, req.body);
            if (!objInboundEmail) {
                util.setError(404, `Cannot find inboundEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'InboundEmail updated', objInboundEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

inboundEmailCtrl.updateInboundEmailByTemplateId = async (req, res) => {
     const { templateId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objInboundEmail = await inboundEmailService.updateInboundEmailByTemplateId(templateId, req.body);
            if (!objInboundEmail) {
                util.setError(404, `Cannot find inboundEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'InboundEmail updated', objInboundEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

inboundEmailCtrl.updateInboundEmailByGroupId = async (req, res) => {
     const { groupId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objInboundEmail = await inboundEmailService.updateInboundEmailByGroupId(groupId, req.body);
            if (!objInboundEmail) {
                util.setError(404, `Cannot find inboundEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'InboundEmail updated', objInboundEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

inboundEmailCtrl.updateInboundEmailByGroupfolderId = async (req, res) => {
     const { groupfolderId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objInboundEmail = await inboundEmailService.updateInboundEmailByGroupfolderId(groupfolderId, req.body);
            if (!objInboundEmail) {
                util.setError(404, `Cannot find inboundEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'InboundEmail updated', objInboundEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = inboundEmailCtrl;
//</es-section>
