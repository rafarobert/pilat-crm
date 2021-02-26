/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:25 GMT-0400 (Bolivia Time)
 * Time: 0:23:25
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:25 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:25
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const outboundEmailService = require('../services/outbound_email.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const outboundEmailCtrl = {};
outboundEmailCtrl.service = outboundEmailService;


outboundEmailCtrl.getAllOutboundEmail = async (req, res) => {
    try {
        const objOutboundEmail = await outboundEmailService.getAllOutboundEmail(req.query);
        if (objOutboundEmail.length > 0) {
            util.setSuccess(200, 'OutboundEmail retrieved', objOutboundEmail);
        } else {
            util.setSuccess(200, 'No outboundEmail found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

outboundEmailCtrl.getAOutboundEmail = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objOutboundEmail = await outboundEmailService.getAOutboundEmail(id, req.query);
        if (!objOutboundEmail) {
            util.setError(404, `Cannot find outboundEmail with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found outboundEmail', objOutboundEmail);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

outboundEmailCtrl.addOutboundEmail = async (req, res) => {
    try {
        const objOutboundEmail = await outboundEmailService.addOutboundEmail(req.body);
        util.setSuccess(201, 'OutboundEmail Added!', objOutboundEmail);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

outboundEmailCtrl.updateOutboundEmail = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objOutboundEmail = await outboundEmailService.updateOutboundEmail(id, req.body);
        if (!objOutboundEmail) {
            util.setError(404, `Cannot find outboundEmail with the id: ${id}`);
        } else {
            util.setSuccess(200, 'OutboundEmail updated', objOutboundEmail);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

outboundEmailCtrl.deleteOutboundEmail = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objOutboundEmail = await outboundEmailService.deleteOutboundEmail(id);
        if (objOutboundEmail) {
            util.setSuccess(200, 'OutboundEmail deleted', objOutboundEmail);
        } else {
            util.setError(404, `OutboundEmail with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



outboundEmailCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objOutboundEmail = await outboundEmailService.findOneById(id, req.query);
        if (!objOutboundEmail) {
            util.setError(404, `Cannot find outboundEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found outboundEmail', objOutboundEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

outboundEmailCtrl.findOneByMailSmtpauthReq = async (req, res) => {
    try {
        const { mailSmtpauthReq } = req.params;
        const objOutboundEmail = await outboundEmailService.findOneByMailSmtpauthReq(mailSmtpauthReq, req.query);
        if (!objOutboundEmail) {
            util.setError(404, `Cannot find outboundEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found outboundEmail', objOutboundEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

outboundEmailCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objOutboundEmail = await outboundEmailService.findOneByDeleted(deleted, req.query);
        if (!objOutboundEmail) {
            util.setError(404, `Cannot find outboundEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found outboundEmail', objOutboundEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

outboundEmailCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objOutboundEmail = await outboundEmailService.findOneByName(name, req.query);
        if (!objOutboundEmail) {
            util.setError(404, `Cannot find outboundEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found outboundEmail', objOutboundEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

outboundEmailCtrl.findOneByType = async (req, res) => {
    try {
        const { type } = req.params;
        const objOutboundEmail = await outboundEmailService.findOneByType(type, req.query);
        if (!objOutboundEmail) {
            util.setError(404, `Cannot find outboundEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found outboundEmail', objOutboundEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

outboundEmailCtrl.findOneBySmtpFromName = async (req, res) => {
    try {
        const { smtpFromName } = req.params;
        const objOutboundEmail = await outboundEmailService.findOneBySmtpFromName(smtpFromName, req.query);
        if (!objOutboundEmail) {
            util.setError(404, `Cannot find outboundEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found outboundEmail', objOutboundEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

outboundEmailCtrl.findOneBySmtpFromAddr = async (req, res) => {
    try {
        const { smtpFromAddr } = req.params;
        const objOutboundEmail = await outboundEmailService.findOneBySmtpFromAddr(smtpFromAddr, req.query);
        if (!objOutboundEmail) {
            util.setError(404, `Cannot find outboundEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found outboundEmail', objOutboundEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

outboundEmailCtrl.findOneByMailSendtype = async (req, res) => {
    try {
        const { mailSendtype } = req.params;
        const objOutboundEmail = await outboundEmailService.findOneByMailSendtype(mailSendtype, req.query);
        if (!objOutboundEmail) {
            util.setError(404, `Cannot find outboundEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found outboundEmail', objOutboundEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

outboundEmailCtrl.findOneByMailSmtptype = async (req, res) => {
    try {
        const { mailSmtptype } = req.params;
        const objOutboundEmail = await outboundEmailService.findOneByMailSmtptype(mailSmtptype, req.query);
        if (!objOutboundEmail) {
            util.setError(404, `Cannot find outboundEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found outboundEmail', objOutboundEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

outboundEmailCtrl.findOneByMailSmtpserver = async (req, res) => {
    try {
        const { mailSmtpserver } = req.params;
        const objOutboundEmail = await outboundEmailService.findOneByMailSmtpserver(mailSmtpserver, req.query);
        if (!objOutboundEmail) {
            util.setError(404, `Cannot find outboundEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found outboundEmail', objOutboundEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

outboundEmailCtrl.findOneByMailSmtpport = async (req, res) => {
    try {
        const { mailSmtpport } = req.params;
        const objOutboundEmail = await outboundEmailService.findOneByMailSmtpport(mailSmtpport, req.query);
        if (!objOutboundEmail) {
            util.setError(404, `Cannot find outboundEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found outboundEmail', objOutboundEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

outboundEmailCtrl.findOneByMailSmtpuser = async (req, res) => {
    try {
        const { mailSmtpuser } = req.params;
        const objOutboundEmail = await outboundEmailService.findOneByMailSmtpuser(mailSmtpuser, req.query);
        if (!objOutboundEmail) {
            util.setError(404, `Cannot find outboundEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found outboundEmail', objOutboundEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

outboundEmailCtrl.findOneByMailSmtppass = async (req, res) => {
    try {
        const { mailSmtppass } = req.params;
        const objOutboundEmail = await outboundEmailService.findOneByMailSmtppass(mailSmtppass, req.query);
        if (!objOutboundEmail) {
            util.setError(404, `Cannot find outboundEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found outboundEmail', objOutboundEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

outboundEmailCtrl.findOneByMailSmtpssl = async (req, res) => {
    try {
        const { mailSmtpssl } = req.params;
        const objOutboundEmail = await outboundEmailService.findOneByMailSmtpssl(mailSmtpssl, req.query);
        if (!objOutboundEmail) {
            util.setError(404, `Cannot find outboundEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found outboundEmail', objOutboundEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

outboundEmailCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objOutboundEmail = await outboundEmailService.findOneByDateEntered(dateEntered, req.query);
        if (!objOutboundEmail) {
            util.setError(404, `Cannot find outboundEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found outboundEmail', objOutboundEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

outboundEmailCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objOutboundEmail = await outboundEmailService.findOneByDateModified(dateModified, req.query);
        if (!objOutboundEmail) {
            util.setError(404, `Cannot find outboundEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found outboundEmail', objOutboundEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

outboundEmailCtrl.findOneByUserId = async (req, res) => {
    try {
        const { userId } = req.params;
        const objOutboundEmail = await outboundEmailService.findOneByUserId(userId, req.query);
        if (!objOutboundEmail) {
            util.setError(404, `Cannot find outboundEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found outboundEmail', objOutboundEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

outboundEmailCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objOutboundEmail = await outboundEmailService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objOutboundEmail) {
            util.setError(404, `Cannot find outboundEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found outboundEmail', objOutboundEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

outboundEmailCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objOutboundEmail = await outboundEmailService.findOneByCreatedBy(createdBy, req.query);
        if (!objOutboundEmail) {
            util.setError(404, `Cannot find outboundEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found outboundEmail', objOutboundEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

outboundEmailCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objOutboundEmail = await outboundEmailService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objOutboundEmail) {
            util.setError(404, `Cannot find outboundEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found outboundEmail', objOutboundEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



outboundEmailCtrl.updateOutboundEmailById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOutboundEmail = await outboundEmailService.updateOutboundEmailById(id, req.body);
            if (!objOutboundEmail) {
                util.setError(404, `Cannot find outboundEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OutboundEmail updated', objOutboundEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

outboundEmailCtrl.updateOutboundEmailByMailSmtpauthReq = async (req, res) => {
     const { mailSmtpauthReq } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOutboundEmail = await outboundEmailService.updateOutboundEmailByMailSmtpauthReq(mailSmtpauthReq, req.body);
            if (!objOutboundEmail) {
                util.setError(404, `Cannot find outboundEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OutboundEmail updated', objOutboundEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

outboundEmailCtrl.updateOutboundEmailByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOutboundEmail = await outboundEmailService.updateOutboundEmailByDeleted(deleted, req.body);
            if (!objOutboundEmail) {
                util.setError(404, `Cannot find outboundEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OutboundEmail updated', objOutboundEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

outboundEmailCtrl.updateOutboundEmailByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOutboundEmail = await outboundEmailService.updateOutboundEmailByName(name, req.body);
            if (!objOutboundEmail) {
                util.setError(404, `Cannot find outboundEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OutboundEmail updated', objOutboundEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

outboundEmailCtrl.updateOutboundEmailByType = async (req, res) => {
     const { type } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOutboundEmail = await outboundEmailService.updateOutboundEmailByType(type, req.body);
            if (!objOutboundEmail) {
                util.setError(404, `Cannot find outboundEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OutboundEmail updated', objOutboundEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

outboundEmailCtrl.updateOutboundEmailBySmtpFromName = async (req, res) => {
     const { smtpFromName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOutboundEmail = await outboundEmailService.updateOutboundEmailBySmtpFromName(smtpFromName, req.body);
            if (!objOutboundEmail) {
                util.setError(404, `Cannot find outboundEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OutboundEmail updated', objOutboundEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

outboundEmailCtrl.updateOutboundEmailBySmtpFromAddr = async (req, res) => {
     const { smtpFromAddr } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOutboundEmail = await outboundEmailService.updateOutboundEmailBySmtpFromAddr(smtpFromAddr, req.body);
            if (!objOutboundEmail) {
                util.setError(404, `Cannot find outboundEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OutboundEmail updated', objOutboundEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

outboundEmailCtrl.updateOutboundEmailByMailSendtype = async (req, res) => {
     const { mailSendtype } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOutboundEmail = await outboundEmailService.updateOutboundEmailByMailSendtype(mailSendtype, req.body);
            if (!objOutboundEmail) {
                util.setError(404, `Cannot find outboundEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OutboundEmail updated', objOutboundEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

outboundEmailCtrl.updateOutboundEmailByMailSmtptype = async (req, res) => {
     const { mailSmtptype } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOutboundEmail = await outboundEmailService.updateOutboundEmailByMailSmtptype(mailSmtptype, req.body);
            if (!objOutboundEmail) {
                util.setError(404, `Cannot find outboundEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OutboundEmail updated', objOutboundEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

outboundEmailCtrl.updateOutboundEmailByMailSmtpserver = async (req, res) => {
     const { mailSmtpserver } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOutboundEmail = await outboundEmailService.updateOutboundEmailByMailSmtpserver(mailSmtpserver, req.body);
            if (!objOutboundEmail) {
                util.setError(404, `Cannot find outboundEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OutboundEmail updated', objOutboundEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

outboundEmailCtrl.updateOutboundEmailByMailSmtpport = async (req, res) => {
     const { mailSmtpport } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOutboundEmail = await outboundEmailService.updateOutboundEmailByMailSmtpport(mailSmtpport, req.body);
            if (!objOutboundEmail) {
                util.setError(404, `Cannot find outboundEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OutboundEmail updated', objOutboundEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

outboundEmailCtrl.updateOutboundEmailByMailSmtpuser = async (req, res) => {
     const { mailSmtpuser } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOutboundEmail = await outboundEmailService.updateOutboundEmailByMailSmtpuser(mailSmtpuser, req.body);
            if (!objOutboundEmail) {
                util.setError(404, `Cannot find outboundEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OutboundEmail updated', objOutboundEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

outboundEmailCtrl.updateOutboundEmailByMailSmtppass = async (req, res) => {
     const { mailSmtppass } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOutboundEmail = await outboundEmailService.updateOutboundEmailByMailSmtppass(mailSmtppass, req.body);
            if (!objOutboundEmail) {
                util.setError(404, `Cannot find outboundEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OutboundEmail updated', objOutboundEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

outboundEmailCtrl.updateOutboundEmailByMailSmtpssl = async (req, res) => {
     const { mailSmtpssl } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOutboundEmail = await outboundEmailService.updateOutboundEmailByMailSmtpssl(mailSmtpssl, req.body);
            if (!objOutboundEmail) {
                util.setError(404, `Cannot find outboundEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OutboundEmail updated', objOutboundEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

outboundEmailCtrl.updateOutboundEmailByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOutboundEmail = await outboundEmailService.updateOutboundEmailByDateEntered(dateEntered, req.body);
            if (!objOutboundEmail) {
                util.setError(404, `Cannot find outboundEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OutboundEmail updated', objOutboundEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

outboundEmailCtrl.updateOutboundEmailByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOutboundEmail = await outboundEmailService.updateOutboundEmailByDateModified(dateModified, req.body);
            if (!objOutboundEmail) {
                util.setError(404, `Cannot find outboundEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OutboundEmail updated', objOutboundEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

outboundEmailCtrl.updateOutboundEmailByUserId = async (req, res) => {
     const { userId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOutboundEmail = await outboundEmailService.updateOutboundEmailByUserId(userId, req.body);
            if (!objOutboundEmail) {
                util.setError(404, `Cannot find outboundEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OutboundEmail updated', objOutboundEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

outboundEmailCtrl.updateOutboundEmailByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOutboundEmail = await outboundEmailService.updateOutboundEmailByModifiedUserId(modifiedUserId, req.body);
            if (!objOutboundEmail) {
                util.setError(404, `Cannot find outboundEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OutboundEmail updated', objOutboundEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

outboundEmailCtrl.updateOutboundEmailByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOutboundEmail = await outboundEmailService.updateOutboundEmailByCreatedBy(createdBy, req.body);
            if (!objOutboundEmail) {
                util.setError(404, `Cannot find outboundEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OutboundEmail updated', objOutboundEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

outboundEmailCtrl.updateOutboundEmailByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOutboundEmail = await outboundEmailService.updateOutboundEmailByAssignedUserId(assignedUserId, req.body);
            if (!objOutboundEmail) {
                util.setError(404, `Cannot find outboundEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OutboundEmail updated', objOutboundEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = outboundEmailCtrl;
//</es-section>
