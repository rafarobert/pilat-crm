/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:42:55 GMT-0400 (Bolivia Time)
 * Time: 4:42:55
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:42:55 GMT-0400 (Bolivia Time)
 * Last time updated: 4:42:55
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const emailmanService = require('../services/emailman.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const emailmanCtrl = {};
emailmanCtrl.service = emailmanService;


emailmanCtrl.getAllEmailman = async (req, res) => {
    try {
        const objEmailman = await emailmanService.getAllEmailman(req.query);
        if (objEmailman.length > 0) {
            util.setSuccess(200, 'Emailman retrieved', objEmailman);
        } else {
            util.setSuccess(200, 'No emailman found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailmanCtrl.getAEmailman = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isInteger(id)) {
            util.setError(400, 'Please input a valid Integer value');
            return util.send(res);
        }
        const objEmailman = await emailmanService.getAEmailman(id, req.query);
        if (!objEmailman) {
            util.setError(404, `Cannot find emailman with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found emailman', objEmailman);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailmanCtrl.addEmailman = async (req, res) => {
    try {
        const objEmailman = await emailmanService.addEmailman(req.body);
        util.setSuccess(201, 'Emailman Added!', objEmailman);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailmanCtrl.updateEmailman = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isInteger(id)) {
            util.setError(400, 'Please input a valid Integer value');
            return util.send(res);
        }
        const objEmailman = await emailmanService.updateEmailman(id, req.body);
        if (!objEmailman) {
            util.setError(404, `Cannot find emailman with the id: ${id}`);
        } else {
            util.setSuccess(200, 'Emailman updated', objEmailman);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

emailmanCtrl.deleteEmailman = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isInteger(id)) {
            util.setError(400, 'Please provide a Integer value');
            return util.send(res);
        }
        const objEmailman = await emailmanService.deleteEmailman(id);
        if (objEmailman) {
            util.setSuccess(200, 'Emailman deleted', objEmailman);
        } else {
            util.setError(404, `Emailman with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



emailmanCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objEmailman = await emailmanService.findOneById(id, req.query);
        if (!objEmailman) {
            util.setError(404, `Cannot find emailman with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailman', objEmailman);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailmanCtrl.findOneByInQueue = async (req, res) => {
    try {
        const { inQueue } = req.params;
        const objEmailman = await emailmanService.findOneByInQueue(inQueue, req.query);
        if (!objEmailman) {
            util.setError(404, `Cannot find emailman with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailman', objEmailman);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailmanCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objEmailman = await emailmanService.findOneByDeleted(deleted, req.query);
        if (!objEmailman) {
            util.setError(404, `Cannot find emailman with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailman', objEmailman);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailmanCtrl.findOneByRelatedConfirmOptIn = async (req, res) => {
    try {
        const { relatedConfirmOptIn } = req.params;
        const objEmailman = await emailmanService.findOneByRelatedConfirmOptIn(relatedConfirmOptIn, req.query);
        if (!objEmailman) {
            util.setError(404, `Cannot find emailman with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailman', objEmailman);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailmanCtrl.findOneBySendAttempts = async (req, res) => {
    try {
        const { sendAttempts } = req.params;
        const objEmailman = await emailmanService.findOneBySendAttempts(sendAttempts, req.query);
        if (!objEmailman) {
            util.setError(404, `Cannot find emailman with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailman', objEmailman);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailmanCtrl.findOneByRelatedType = async (req, res) => {
    try {
        const { relatedType } = req.params;
        const objEmailman = await emailmanService.findOneByRelatedType(relatedType, req.query);
        if (!objEmailman) {
            util.setError(404, `Cannot find emailman with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailman', objEmailman);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailmanCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objEmailman = await emailmanService.findOneByDateEntered(dateEntered, req.query);
        if (!objEmailman) {
            util.setError(404, `Cannot find emailman with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailman', objEmailman);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailmanCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objEmailman = await emailmanService.findOneByDateModified(dateModified, req.query);
        if (!objEmailman) {
            util.setError(404, `Cannot find emailman with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailman', objEmailman);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailmanCtrl.findOneBySendDateTime = async (req, res) => {
    try {
        const { sendDateTime } = req.params;
        const objEmailman = await emailmanService.findOneBySendDateTime(sendDateTime, req.query);
        if (!objEmailman) {
            util.setError(404, `Cannot find emailman with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailman', objEmailman);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailmanCtrl.findOneByInQueueDate = async (req, res) => {
    try {
        const { inQueueDate } = req.params;
        const objEmailman = await emailmanService.findOneByInQueueDate(inQueueDate, req.query);
        if (!objEmailman) {
            util.setError(404, `Cannot find emailman with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailman', objEmailman);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailmanCtrl.findOneByUserId = async (req, res) => {
    try {
        const { userId } = req.params;
        const objEmailman = await emailmanService.findOneByUserId(userId, req.query);
        if (!objEmailman) {
            util.setError(404, `Cannot find emailman with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailman', objEmailman);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailmanCtrl.findOneByCampaignId = async (req, res) => {
    try {
        const { campaignId } = req.params;
        const objEmailman = await emailmanService.findOneByCampaignId(campaignId, req.query);
        if (!objEmailman) {
            util.setError(404, `Cannot find emailman with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailman', objEmailman);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailmanCtrl.findOneByMarketingId = async (req, res) => {
    try {
        const { marketingId } = req.params;
        const objEmailman = await emailmanService.findOneByMarketingId(marketingId, req.query);
        if (!objEmailman) {
            util.setError(404, `Cannot find emailman with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailman', objEmailman);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailmanCtrl.findOneByListId = async (req, res) => {
    try {
        const { listId } = req.params;
        const objEmailman = await emailmanService.findOneByListId(listId, req.query);
        if (!objEmailman) {
            util.setError(404, `Cannot find emailman with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailman', objEmailman);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailmanCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objEmailman = await emailmanService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objEmailman) {
            util.setError(404, `Cannot find emailman with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailman', objEmailman);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailmanCtrl.findOneByRelatedId = async (req, res) => {
    try {
        const { relatedId } = req.params;
        const objEmailman = await emailmanService.findOneByRelatedId(relatedId, req.query);
        if (!objEmailman) {
            util.setError(404, `Cannot find emailman with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailman', objEmailman);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



emailmanCtrl.updateEmailmanById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isInteger(id)) {
                util.setError(400, 'Please input a valid Integer value');
                return util.send(res);
            }
            const objEmailman = await emailmanService.updateEmailmanById(id, req.body);
            if (!objEmailman) {
                util.setError(404, `Cannot find emailman with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Emailman updated', objEmailman);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailmanCtrl.updateEmailmanByInQueue = async (req, res) => {
     const { inQueue } = req.params;
        try {
            if (!util.isInteger(id)) {
                util.setError(400, 'Please input a valid Integer value');
                return util.send(res);
            }
            const objEmailman = await emailmanService.updateEmailmanByInQueue(inQueue, req.body);
            if (!objEmailman) {
                util.setError(404, `Cannot find emailman with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Emailman updated', objEmailman);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailmanCtrl.updateEmailmanByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isInteger(id)) {
                util.setError(400, 'Please input a valid Integer value');
                return util.send(res);
            }
            const objEmailman = await emailmanService.updateEmailmanByDeleted(deleted, req.body);
            if (!objEmailman) {
                util.setError(404, `Cannot find emailman with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Emailman updated', objEmailman);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailmanCtrl.updateEmailmanByRelatedConfirmOptIn = async (req, res) => {
     const { relatedConfirmOptIn } = req.params;
        try {
            if (!util.isInteger(id)) {
                util.setError(400, 'Please input a valid Integer value');
                return util.send(res);
            }
            const objEmailman = await emailmanService.updateEmailmanByRelatedConfirmOptIn(relatedConfirmOptIn, req.body);
            if (!objEmailman) {
                util.setError(404, `Cannot find emailman with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Emailman updated', objEmailman);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailmanCtrl.updateEmailmanBySendAttempts = async (req, res) => {
     const { sendAttempts } = req.params;
        try {
            if (!util.isInteger(id)) {
                util.setError(400, 'Please input a valid Integer value');
                return util.send(res);
            }
            const objEmailman = await emailmanService.updateEmailmanBySendAttempts(sendAttempts, req.body);
            if (!objEmailman) {
                util.setError(404, `Cannot find emailman with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Emailman updated', objEmailman);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailmanCtrl.updateEmailmanByRelatedType = async (req, res) => {
     const { relatedType } = req.params;
        try {
            if (!util.isInteger(id)) {
                util.setError(400, 'Please input a valid Integer value');
                return util.send(res);
            }
            const objEmailman = await emailmanService.updateEmailmanByRelatedType(relatedType, req.body);
            if (!objEmailman) {
                util.setError(404, `Cannot find emailman with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Emailman updated', objEmailman);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailmanCtrl.updateEmailmanByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isInteger(id)) {
                util.setError(400, 'Please input a valid Integer value');
                return util.send(res);
            }
            const objEmailman = await emailmanService.updateEmailmanByDateEntered(dateEntered, req.body);
            if (!objEmailman) {
                util.setError(404, `Cannot find emailman with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Emailman updated', objEmailman);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailmanCtrl.updateEmailmanByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isInteger(id)) {
                util.setError(400, 'Please input a valid Integer value');
                return util.send(res);
            }
            const objEmailman = await emailmanService.updateEmailmanByDateModified(dateModified, req.body);
            if (!objEmailman) {
                util.setError(404, `Cannot find emailman with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Emailman updated', objEmailman);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailmanCtrl.updateEmailmanBySendDateTime = async (req, res) => {
     const { sendDateTime } = req.params;
        try {
            if (!util.isInteger(id)) {
                util.setError(400, 'Please input a valid Integer value');
                return util.send(res);
            }
            const objEmailman = await emailmanService.updateEmailmanBySendDateTime(sendDateTime, req.body);
            if (!objEmailman) {
                util.setError(404, `Cannot find emailman with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Emailman updated', objEmailman);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailmanCtrl.updateEmailmanByInQueueDate = async (req, res) => {
     const { inQueueDate } = req.params;
        try {
            if (!util.isInteger(id)) {
                util.setError(400, 'Please input a valid Integer value');
                return util.send(res);
            }
            const objEmailman = await emailmanService.updateEmailmanByInQueueDate(inQueueDate, req.body);
            if (!objEmailman) {
                util.setError(404, `Cannot find emailman with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Emailman updated', objEmailman);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailmanCtrl.updateEmailmanByUserId = async (req, res) => {
     const { userId } = req.params;
        try {
            if (!util.isInteger(id)) {
                util.setError(400, 'Please input a valid Integer value');
                return util.send(res);
            }
            const objEmailman = await emailmanService.updateEmailmanByUserId(userId, req.body);
            if (!objEmailman) {
                util.setError(404, `Cannot find emailman with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Emailman updated', objEmailman);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailmanCtrl.updateEmailmanByCampaignId = async (req, res) => {
     const { campaignId } = req.params;
        try {
            if (!util.isInteger(id)) {
                util.setError(400, 'Please input a valid Integer value');
                return util.send(res);
            }
            const objEmailman = await emailmanService.updateEmailmanByCampaignId(campaignId, req.body);
            if (!objEmailman) {
                util.setError(404, `Cannot find emailman with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Emailman updated', objEmailman);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailmanCtrl.updateEmailmanByMarketingId = async (req, res) => {
     const { marketingId } = req.params;
        try {
            if (!util.isInteger(id)) {
                util.setError(400, 'Please input a valid Integer value');
                return util.send(res);
            }
            const objEmailman = await emailmanService.updateEmailmanByMarketingId(marketingId, req.body);
            if (!objEmailman) {
                util.setError(404, `Cannot find emailman with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Emailman updated', objEmailman);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailmanCtrl.updateEmailmanByListId = async (req, res) => {
     const { listId } = req.params;
        try {
            if (!util.isInteger(id)) {
                util.setError(400, 'Please input a valid Integer value');
                return util.send(res);
            }
            const objEmailman = await emailmanService.updateEmailmanByListId(listId, req.body);
            if (!objEmailman) {
                util.setError(404, `Cannot find emailman with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Emailman updated', objEmailman);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailmanCtrl.updateEmailmanByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isInteger(id)) {
                util.setError(400, 'Please input a valid Integer value');
                return util.send(res);
            }
            const objEmailman = await emailmanService.updateEmailmanByModifiedUserId(modifiedUserId, req.body);
            if (!objEmailman) {
                util.setError(404, `Cannot find emailman with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Emailman updated', objEmailman);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailmanCtrl.updateEmailmanByRelatedId = async (req, res) => {
     const { relatedId } = req.params;
        try {
            if (!util.isInteger(id)) {
                util.setError(400, 'Please input a valid Integer value');
                return util.send(res);
            }
            const objEmailman = await emailmanService.updateEmailmanByRelatedId(relatedId, req.body);
            if (!objEmailman) {
                util.setError(404, `Cannot find emailman with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Emailman updated', objEmailman);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = emailmanCtrl;
//</es-section>
