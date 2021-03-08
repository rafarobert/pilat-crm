/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:59 GMT-0400 (Bolivia Time)
 * Time: 15:35:59
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:59 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:59
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const emailService = require('../services/emails.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const emailsCtrl = {};
emailsCtrl.service = emailService;


emailsCtrl.getAllEmails = async (req, res) => {
    try {
        const objEmails = await emailService.getAllEmails(req.query);
        if (objEmails.length > 0) {
            util.setSuccess(200, 'Emails retrieved', objEmails);
        } else {
            util.setSuccess(200, 'No email found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsCtrl.getAEmail = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objEmail = await emailService.getAEmail(id, req.query);
        if (!objEmail) {
            util.setError(404, `Cannot find email with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found email', objEmail);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsCtrl.addEmail = async (req, res) => {
    try {
        const objEmail = await emailService.addEmail(req.body);
        util.setSuccess(201, 'Email Added!', objEmail);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsCtrl.updateEmail = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objEmail = await emailService.updateEmail(id, req.body);
        if (!objEmail) {
            util.setError(404, `Cannot find email with the id: ${id}`);
        } else {
            util.setSuccess(200, 'Email updated', objEmail);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

emailsCtrl.deleteEmail = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objEmail = await emailService.deleteEmail(id);
        if (objEmail) {
            util.setSuccess(200, 'Email deleted', objEmail);
        } else {
            util.setError(404, `Email with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



emailsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objEmail = await emailService.findOneById(id, req.query);
        if (!objEmail) {
            util.setError(404, `Cannot find email with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found email', objEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objEmail = await emailService.findOneByDeleted(deleted, req.query);
        if (!objEmail) {
            util.setError(404, `Cannot find email with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found email', objEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsCtrl.findOneByOrphaned = async (req, res) => {
    try {
        const { orphaned } = req.params;
        const objEmail = await emailService.findOneByOrphaned(orphaned, req.query);
        if (!objEmail) {
            util.setError(404, `Cannot find email with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found email', objEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsCtrl.findOneByFlagged = async (req, res) => {
    try {
        const { flagged } = req.params;
        const objEmail = await emailService.findOneByFlagged(flagged, req.query);
        if (!objEmail) {
            util.setError(404, `Cannot find email with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found email', objEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsCtrl.findOneByReplyToStatus = async (req, res) => {
    try {
        const { replyToStatus } = req.params;
        const objEmail = await emailService.findOneByReplyToStatus(replyToStatus, req.query);
        if (!objEmail) {
            util.setError(404, `Cannot find email with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found email', objEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objEmail = await emailService.findOneByName(name, req.query);
        if (!objEmail) {
            util.setError(404, `Cannot find email with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found email', objEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsCtrl.findOneByMessageId = async (req, res) => {
    try {
        const { messageId } = req.params;
        const objEmail = await emailService.findOneByMessageId(messageId, req.query);
        if (!objEmail) {
            util.setError(404, `Cannot find email with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found email', objEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsCtrl.findOneByType = async (req, res) => {
    try {
        const { type } = req.params;
        const objEmail = await emailService.findOneByType(type, req.query);
        if (!objEmail) {
            util.setError(404, `Cannot find email with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found email', objEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsCtrl.findOneByStatus = async (req, res) => {
    try {
        const { status } = req.params;
        const objEmail = await emailService.findOneByStatus(status, req.query);
        if (!objEmail) {
            util.setError(404, `Cannot find email with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found email', objEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsCtrl.findOneByIntent = async (req, res) => {
    try {
        const { intent } = req.params;
        const objEmail = await emailService.findOneByIntent(intent, req.query);
        if (!objEmail) {
            util.setError(404, `Cannot find email with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found email', objEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsCtrl.findOneByParentType = async (req, res) => {
    try {
        const { parentType } = req.params;
        const objEmail = await emailService.findOneByParentType(parentType, req.query);
        if (!objEmail) {
            util.setError(404, `Cannot find email with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found email', objEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsCtrl.findOneByUid = async (req, res) => {
    try {
        const { uid } = req.params;
        const objEmail = await emailService.findOneByUid(uid, req.query);
        if (!objEmail) {
            util.setError(404, `Cannot find email with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found email', objEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsCtrl.findOneByCategoryId = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const objEmail = await emailService.findOneByCategoryId(categoryId, req.query);
        if (!objEmail) {
            util.setError(404, `Cannot find email with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found email', objEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objEmail = await emailService.findOneByDateEntered(dateEntered, req.query);
        if (!objEmail) {
            util.setError(404, `Cannot find email with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found email', objEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objEmail = await emailService.findOneByDateModified(dateModified, req.query);
        if (!objEmail) {
            util.setError(404, `Cannot find email with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found email', objEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsCtrl.findOneByLastSynced = async (req, res) => {
    try {
        const { lastSynced } = req.params;
        const objEmail = await emailService.findOneByLastSynced(lastSynced, req.query);
        if (!objEmail) {
            util.setError(404, `Cannot find email with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found email', objEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsCtrl.findOneByDateSentReceived = async (req, res) => {
    try {
        const { dateSentReceived } = req.params;
        const objEmail = await emailService.findOneByDateSentReceived(dateSentReceived, req.query);
        if (!objEmail) {
            util.setError(404, `Cannot find email with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found email', objEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objEmail = await emailService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objEmail) {
            util.setError(404, `Cannot find email with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found email', objEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objEmail = await emailService.findOneByCreatedBy(createdBy, req.query);
        if (!objEmail) {
            util.setError(404, `Cannot find email with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found email', objEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objEmail = await emailService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objEmail) {
            util.setError(404, `Cannot find email with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found email', objEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsCtrl.findOneByMailboxId = async (req, res) => {
    try {
        const { mailboxId } = req.params;
        const objEmail = await emailService.findOneByMailboxId(mailboxId, req.query);
        if (!objEmail) {
            util.setError(404, `Cannot find email with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found email', objEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objEmail = await emailService.findOneByParentId(parentId, req.query);
        if (!objEmail) {
            util.setError(404, `Cannot find email with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found email', objEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



emailsCtrl.updateEmailById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmail = await emailService.updateEmailById(id, req.body);
            if (!objEmail) {
                util.setError(404, `Cannot find email with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Email updated', objEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailsCtrl.updateEmailByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmail = await emailService.updateEmailByDeleted(deleted, req.body);
            if (!objEmail) {
                util.setError(404, `Cannot find email with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Email updated', objEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailsCtrl.updateEmailByOrphaned = async (req, res) => {
     const { orphaned } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmail = await emailService.updateEmailByOrphaned(orphaned, req.body);
            if (!objEmail) {
                util.setError(404, `Cannot find email with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Email updated', objEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailsCtrl.updateEmailByFlagged = async (req, res) => {
     const { flagged } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmail = await emailService.updateEmailByFlagged(flagged, req.body);
            if (!objEmail) {
                util.setError(404, `Cannot find email with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Email updated', objEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailsCtrl.updateEmailByReplyToStatus = async (req, res) => {
     const { replyToStatus } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmail = await emailService.updateEmailByReplyToStatus(replyToStatus, req.body);
            if (!objEmail) {
                util.setError(404, `Cannot find email with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Email updated', objEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailsCtrl.updateEmailByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmail = await emailService.updateEmailByName(name, req.body);
            if (!objEmail) {
                util.setError(404, `Cannot find email with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Email updated', objEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailsCtrl.updateEmailByMessageId = async (req, res) => {
     const { messageId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmail = await emailService.updateEmailByMessageId(messageId, req.body);
            if (!objEmail) {
                util.setError(404, `Cannot find email with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Email updated', objEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailsCtrl.updateEmailByType = async (req, res) => {
     const { type } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmail = await emailService.updateEmailByType(type, req.body);
            if (!objEmail) {
                util.setError(404, `Cannot find email with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Email updated', objEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailsCtrl.updateEmailByStatus = async (req, res) => {
     const { status } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmail = await emailService.updateEmailByStatus(status, req.body);
            if (!objEmail) {
                util.setError(404, `Cannot find email with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Email updated', objEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailsCtrl.updateEmailByIntent = async (req, res) => {
     const { intent } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmail = await emailService.updateEmailByIntent(intent, req.body);
            if (!objEmail) {
                util.setError(404, `Cannot find email with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Email updated', objEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailsCtrl.updateEmailByParentType = async (req, res) => {
     const { parentType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmail = await emailService.updateEmailByParentType(parentType, req.body);
            if (!objEmail) {
                util.setError(404, `Cannot find email with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Email updated', objEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailsCtrl.updateEmailByUid = async (req, res) => {
     const { uid } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmail = await emailService.updateEmailByUid(uid, req.body);
            if (!objEmail) {
                util.setError(404, `Cannot find email with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Email updated', objEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailsCtrl.updateEmailByCategoryId = async (req, res) => {
     const { categoryId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmail = await emailService.updateEmailByCategoryId(categoryId, req.body);
            if (!objEmail) {
                util.setError(404, `Cannot find email with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Email updated', objEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailsCtrl.updateEmailByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmail = await emailService.updateEmailByDateEntered(dateEntered, req.body);
            if (!objEmail) {
                util.setError(404, `Cannot find email with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Email updated', objEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailsCtrl.updateEmailByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmail = await emailService.updateEmailByDateModified(dateModified, req.body);
            if (!objEmail) {
                util.setError(404, `Cannot find email with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Email updated', objEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailsCtrl.updateEmailByLastSynced = async (req, res) => {
     const { lastSynced } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmail = await emailService.updateEmailByLastSynced(lastSynced, req.body);
            if (!objEmail) {
                util.setError(404, `Cannot find email with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Email updated', objEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailsCtrl.updateEmailByDateSentReceived = async (req, res) => {
     const { dateSentReceived } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmail = await emailService.updateEmailByDateSentReceived(dateSentReceived, req.body);
            if (!objEmail) {
                util.setError(404, `Cannot find email with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Email updated', objEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailsCtrl.updateEmailByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmail = await emailService.updateEmailByModifiedUserId(modifiedUserId, req.body);
            if (!objEmail) {
                util.setError(404, `Cannot find email with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Email updated', objEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailsCtrl.updateEmailByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmail = await emailService.updateEmailByCreatedBy(createdBy, req.body);
            if (!objEmail) {
                util.setError(404, `Cannot find email with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Email updated', objEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailsCtrl.updateEmailByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmail = await emailService.updateEmailByAssignedUserId(assignedUserId, req.body);
            if (!objEmail) {
                util.setError(404, `Cannot find email with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Email updated', objEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailsCtrl.updateEmailByMailboxId = async (req, res) => {
     const { mailboxId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmail = await emailService.updateEmailByMailboxId(mailboxId, req.body);
            if (!objEmail) {
                util.setError(404, `Cannot find email with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Email updated', objEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailsCtrl.updateEmailByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmail = await emailService.updateEmailByParentId(parentId, req.body);
            if (!objEmail) {
                util.setError(404, `Cannot find email with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Email updated', objEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = emailsCtrl;
//</es-section>
