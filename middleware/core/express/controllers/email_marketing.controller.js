/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:48 GMT-0400 (Bolivia Time)
 * Time: 14:56:48
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:48 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:48
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const emailMarketingService = require('../services/email_marketing.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const emailMarketingCtrl = {};
emailMarketingCtrl.service = emailMarketingService;


emailMarketingCtrl.getAllEmailMarketing = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.emailMarketing.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objEmailMarketing = await emailMarketingService.getAllEmailMarketing(req.query);
        if (objEmailMarketing && objEmailMarketing.rows && objEmailMarketing.count) {
            util.setSuccess(200, 'EmailMarketing retrieved', objEmailMarketing.rows, objEmailMarketing.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No emailMarketing found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailMarketingCtrl.getAEmailMarketing = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objEmailMarketing = await emailMarketingService.getAEmailMarketing(id, req.query);
        if (!objEmailMarketing) {
            util.setError(404, `Cannot find emailMarketing with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found emailMarketing', objEmailMarketing);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailMarketingCtrl.addEmailMarketing = async (req, res) => {
    try {
        const objEmailMarketing = await emailMarketingService.addEmailMarketing(req.body);
        util.setSuccess(201, 'EmailMarketing Added!', objEmailMarketing);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailMarketingCtrl.updateEmailMarketing = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objEmailMarketing = await emailMarketingService.updateEmailMarketing(id, req.body);
        if (!objEmailMarketing) {
            util.setError(404, `Cannot find emailMarketing with the id: ${id}`);
        } else {
            util.setSuccess(200, 'EmailMarketing updated', objEmailMarketing);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

emailMarketingCtrl.deleteEmailMarketing = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objEmailMarketing = await emailMarketingService.deleteEmailMarketing(id);
        if (objEmailMarketing) {
            util.setSuccess(200, 'EmailMarketing deleted', objEmailMarketing);
        } else {
            util.setError(404, `EmailMarketing with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



emailMarketingCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objEmailMarketing = await emailMarketingService.findOneById(id, req.query);
        if (!objEmailMarketing) {
            util.setError(404, `Cannot find emailMarketing with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailMarketing', objEmailMarketing);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailMarketingCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objEmailMarketing = await emailMarketingService.findOneByDeleted(deleted, req.query);
        if (!objEmailMarketing) {
            util.setError(404, `Cannot find emailMarketing with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailMarketing', objEmailMarketing);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailMarketingCtrl.findOneByAllProspectLists = async (req, res) => {
    try {
        const { allProspectLists } = req.params;
        const objEmailMarketing = await emailMarketingService.findOneByAllProspectLists(allProspectLists, req.query);
        if (!objEmailMarketing) {
            util.setError(404, `Cannot find emailMarketing with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailMarketing', objEmailMarketing);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailMarketingCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objEmailMarketing = await emailMarketingService.findOneByName(name, req.query);
        if (!objEmailMarketing) {
            util.setError(404, `Cannot find emailMarketing with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailMarketing', objEmailMarketing);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailMarketingCtrl.findOneByFromName = async (req, res) => {
    try {
        const { fromName } = req.params;
        const objEmailMarketing = await emailMarketingService.findOneByFromName(fromName, req.query);
        if (!objEmailMarketing) {
            util.setError(404, `Cannot find emailMarketing with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailMarketing', objEmailMarketing);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailMarketingCtrl.findOneByFromAddr = async (req, res) => {
    try {
        const { fromAddr } = req.params;
        const objEmailMarketing = await emailMarketingService.findOneByFromAddr(fromAddr, req.query);
        if (!objEmailMarketing) {
            util.setError(404, `Cannot find emailMarketing with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailMarketing', objEmailMarketing);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailMarketingCtrl.findOneByReplyToName = async (req, res) => {
    try {
        const { replyToName } = req.params;
        const objEmailMarketing = await emailMarketingService.findOneByReplyToName(replyToName, req.query);
        if (!objEmailMarketing) {
            util.setError(404, `Cannot find emailMarketing with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailMarketing', objEmailMarketing);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailMarketingCtrl.findOneByReplyToAddr = async (req, res) => {
    try {
        const { replyToAddr } = req.params;
        const objEmailMarketing = await emailMarketingService.findOneByReplyToAddr(replyToAddr, req.query);
        if (!objEmailMarketing) {
            util.setError(404, `Cannot find emailMarketing with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailMarketing', objEmailMarketing);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailMarketingCtrl.findOneByInboundEmailId = async (req, res) => {
    try {
        const { inboundEmailId } = req.params;
        const objEmailMarketing = await emailMarketingService.findOneByInboundEmailId(inboundEmailId, req.query);
        if (!objEmailMarketing) {
            util.setError(404, `Cannot find emailMarketing with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailMarketing', objEmailMarketing);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailMarketingCtrl.findOneByStatus = async (req, res) => {
    try {
        const { status } = req.params;
        const objEmailMarketing = await emailMarketingService.findOneByStatus(status, req.query);
        if (!objEmailMarketing) {
            util.setError(404, `Cannot find emailMarketing with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailMarketing', objEmailMarketing);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailMarketingCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objEmailMarketing = await emailMarketingService.findOneByDateEntered(dateEntered, req.query);
        if (!objEmailMarketing) {
            util.setError(404, `Cannot find emailMarketing with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailMarketing', objEmailMarketing);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailMarketingCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objEmailMarketing = await emailMarketingService.findOneByDateModified(dateModified, req.query);
        if (!objEmailMarketing) {
            util.setError(404, `Cannot find emailMarketing with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailMarketing', objEmailMarketing);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailMarketingCtrl.findOneByDateStart = async (req, res) => {
    try {
        const { dateStart } = req.params;
        const objEmailMarketing = await emailMarketingService.findOneByDateStart(dateStart, req.query);
        if (!objEmailMarketing) {
            util.setError(404, `Cannot find emailMarketing with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailMarketing', objEmailMarketing);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailMarketingCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objEmailMarketing = await emailMarketingService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objEmailMarketing) {
            util.setError(404, `Cannot find emailMarketing with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailMarketing', objEmailMarketing);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailMarketingCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objEmailMarketing = await emailMarketingService.findOneByCreatedBy(createdBy, req.query);
        if (!objEmailMarketing) {
            util.setError(404, `Cannot find emailMarketing with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailMarketing', objEmailMarketing);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailMarketingCtrl.findOneByTemplateId = async (req, res) => {
    try {
        const { templateId } = req.params;
        const objEmailMarketing = await emailMarketingService.findOneByTemplateId(templateId, req.query);
        if (!objEmailMarketing) {
            util.setError(404, `Cannot find emailMarketing with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailMarketing', objEmailMarketing);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailMarketingCtrl.findOneByCampaignId = async (req, res) => {
    try {
        const { campaignId } = req.params;
        const objEmailMarketing = await emailMarketingService.findOneByCampaignId(campaignId, req.query);
        if (!objEmailMarketing) {
            util.setError(404, `Cannot find emailMarketing with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailMarketing', objEmailMarketing);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailMarketingCtrl.findOneByOutboundEmailId = async (req, res) => {
    try {
        const { outboundEmailId } = req.params;
        const objEmailMarketing = await emailMarketingService.findOneByOutboundEmailId(outboundEmailId, req.query);
        if (!objEmailMarketing) {
            util.setError(404, `Cannot find emailMarketing with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailMarketing', objEmailMarketing);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



emailMarketingCtrl.updateEmailMarketingById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailMarketing = await emailMarketingService.updateEmailMarketingById(id, req.body);
            if (!objEmailMarketing) {
                util.setError(404, `Cannot find emailMarketing with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailMarketing updated', objEmailMarketing);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailMarketingCtrl.updateEmailMarketingByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailMarketing = await emailMarketingService.updateEmailMarketingByDeleted(deleted, req.body);
            if (!objEmailMarketing) {
                util.setError(404, `Cannot find emailMarketing with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailMarketing updated', objEmailMarketing);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailMarketingCtrl.updateEmailMarketingByAllProspectLists = async (req, res) => {
     const { allProspectLists } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailMarketing = await emailMarketingService.updateEmailMarketingByAllProspectLists(allProspectLists, req.body);
            if (!objEmailMarketing) {
                util.setError(404, `Cannot find emailMarketing with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailMarketing updated', objEmailMarketing);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailMarketingCtrl.updateEmailMarketingByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailMarketing = await emailMarketingService.updateEmailMarketingByName(name, req.body);
            if (!objEmailMarketing) {
                util.setError(404, `Cannot find emailMarketing with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailMarketing updated', objEmailMarketing);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailMarketingCtrl.updateEmailMarketingByFromName = async (req, res) => {
     const { fromName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailMarketing = await emailMarketingService.updateEmailMarketingByFromName(fromName, req.body);
            if (!objEmailMarketing) {
                util.setError(404, `Cannot find emailMarketing with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailMarketing updated', objEmailMarketing);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailMarketingCtrl.updateEmailMarketingByFromAddr = async (req, res) => {
     const { fromAddr } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailMarketing = await emailMarketingService.updateEmailMarketingByFromAddr(fromAddr, req.body);
            if (!objEmailMarketing) {
                util.setError(404, `Cannot find emailMarketing with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailMarketing updated', objEmailMarketing);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailMarketingCtrl.updateEmailMarketingByReplyToName = async (req, res) => {
     const { replyToName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailMarketing = await emailMarketingService.updateEmailMarketingByReplyToName(replyToName, req.body);
            if (!objEmailMarketing) {
                util.setError(404, `Cannot find emailMarketing with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailMarketing updated', objEmailMarketing);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailMarketingCtrl.updateEmailMarketingByReplyToAddr = async (req, res) => {
     const { replyToAddr } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailMarketing = await emailMarketingService.updateEmailMarketingByReplyToAddr(replyToAddr, req.body);
            if (!objEmailMarketing) {
                util.setError(404, `Cannot find emailMarketing with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailMarketing updated', objEmailMarketing);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailMarketingCtrl.updateEmailMarketingByInboundEmailId = async (req, res) => {
     const { inboundEmailId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailMarketing = await emailMarketingService.updateEmailMarketingByInboundEmailId(inboundEmailId, req.body);
            if (!objEmailMarketing) {
                util.setError(404, `Cannot find emailMarketing with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailMarketing updated', objEmailMarketing);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailMarketingCtrl.updateEmailMarketingByStatus = async (req, res) => {
     const { status } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailMarketing = await emailMarketingService.updateEmailMarketingByStatus(status, req.body);
            if (!objEmailMarketing) {
                util.setError(404, `Cannot find emailMarketing with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailMarketing updated', objEmailMarketing);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailMarketingCtrl.updateEmailMarketingByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailMarketing = await emailMarketingService.updateEmailMarketingByDateEntered(dateEntered, req.body);
            if (!objEmailMarketing) {
                util.setError(404, `Cannot find emailMarketing with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailMarketing updated', objEmailMarketing);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailMarketingCtrl.updateEmailMarketingByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailMarketing = await emailMarketingService.updateEmailMarketingByDateModified(dateModified, req.body);
            if (!objEmailMarketing) {
                util.setError(404, `Cannot find emailMarketing with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailMarketing updated', objEmailMarketing);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailMarketingCtrl.updateEmailMarketingByDateStart = async (req, res) => {
     const { dateStart } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailMarketing = await emailMarketingService.updateEmailMarketingByDateStart(dateStart, req.body);
            if (!objEmailMarketing) {
                util.setError(404, `Cannot find emailMarketing with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailMarketing updated', objEmailMarketing);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailMarketingCtrl.updateEmailMarketingByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailMarketing = await emailMarketingService.updateEmailMarketingByModifiedUserId(modifiedUserId, req.body);
            if (!objEmailMarketing) {
                util.setError(404, `Cannot find emailMarketing with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailMarketing updated', objEmailMarketing);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailMarketingCtrl.updateEmailMarketingByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailMarketing = await emailMarketingService.updateEmailMarketingByCreatedBy(createdBy, req.body);
            if (!objEmailMarketing) {
                util.setError(404, `Cannot find emailMarketing with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailMarketing updated', objEmailMarketing);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailMarketingCtrl.updateEmailMarketingByTemplateId = async (req, res) => {
     const { templateId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailMarketing = await emailMarketingService.updateEmailMarketingByTemplateId(templateId, req.body);
            if (!objEmailMarketing) {
                util.setError(404, `Cannot find emailMarketing with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailMarketing updated', objEmailMarketing);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailMarketingCtrl.updateEmailMarketingByCampaignId = async (req, res) => {
     const { campaignId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailMarketing = await emailMarketingService.updateEmailMarketingByCampaignId(campaignId, req.body);
            if (!objEmailMarketing) {
                util.setError(404, `Cannot find emailMarketing with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailMarketing updated', objEmailMarketing);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailMarketingCtrl.updateEmailMarketingByOutboundEmailId = async (req, res) => {
     const { outboundEmailId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailMarketing = await emailMarketingService.updateEmailMarketingByOutboundEmailId(outboundEmailId, req.body);
            if (!objEmailMarketing) {
                util.setError(404, `Cannot find emailMarketing with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailMarketing updated', objEmailMarketing);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = emailMarketingCtrl;
//</es-section>
