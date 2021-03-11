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
const emailCacheService = require('../services/email_cache.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const emailCacheCtrl = {};
emailCacheCtrl.service = emailCacheService;




emailCacheCtrl.findOneByRecent = async (req, res) => {
    try {
        const { recent } = req.params;
        const objEmailCache = await emailCacheService.findOneByRecent(recent, req.query);
        if (!objEmailCache) {
            util.setError(404, `Cannot find emailCache with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailCache', objEmailCache);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailCacheCtrl.findOneByFlagged = async (req, res) => {
    try {
        const { flagged } = req.params;
        const objEmailCache = await emailCacheService.findOneByFlagged(flagged, req.query);
        if (!objEmailCache) {
            util.setError(404, `Cannot find emailCache with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailCache', objEmailCache);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailCacheCtrl.findOneByAnswered = async (req, res) => {
    try {
        const { answered } = req.params;
        const objEmailCache = await emailCacheService.findOneByAnswered(answered, req.query);
        if (!objEmailCache) {
            util.setError(404, `Cannot find emailCache with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailCache', objEmailCache);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailCacheCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objEmailCache = await emailCacheService.findOneByDeleted(deleted, req.query);
        if (!objEmailCache) {
            util.setError(404, `Cannot find emailCache with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailCache', objEmailCache);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailCacheCtrl.findOneBySeen = async (req, res) => {
    try {
        const { seen } = req.params;
        const objEmailCache = await emailCacheService.findOneBySeen(seen, req.query);
        if (!objEmailCache) {
            util.setError(404, `Cannot find emailCache with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailCache', objEmailCache);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailCacheCtrl.findOneByDraft = async (req, res) => {
    try {
        const { draft } = req.params;
        const objEmailCache = await emailCacheService.findOneByDraft(draft, req.query);
        if (!objEmailCache) {
            util.setError(404, `Cannot find emailCache with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailCache', objEmailCache);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailCacheCtrl.findOneByMailsize = async (req, res) => {
    try {
        const { mailsize } = req.params;
        const objEmailCache = await emailCacheService.findOneByMailsize(mailsize, req.query);
        if (!objEmailCache) {
            util.setError(404, `Cannot find emailCache with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailCache', objEmailCache);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailCacheCtrl.findOneByImapUid = async (req, res) => {
    try {
        const { imapUid } = req.params;
        const objEmailCache = await emailCacheService.findOneByImapUid(imapUid, req.query);
        if (!objEmailCache) {
            util.setError(404, `Cannot find emailCache with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailCache', objEmailCache);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailCacheCtrl.findOneByMsgno = async (req, res) => {
    try {
        const { msgno } = req.params;
        const objEmailCache = await emailCacheService.findOneByMsgno(msgno, req.query);
        if (!objEmailCache) {
            util.setError(404, `Cannot find emailCache with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailCache', objEmailCache);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailCacheCtrl.findOneByMbox = async (req, res) => {
    try {
        const { mbox } = req.params;
        const objEmailCache = await emailCacheService.findOneByMbox(mbox, req.query);
        if (!objEmailCache) {
            util.setError(404, `Cannot find emailCache with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailCache', objEmailCache);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailCacheCtrl.findOneBySubject = async (req, res) => {
    try {
        const { subject } = req.params;
        const objEmailCache = await emailCacheService.findOneBySubject(subject, req.query);
        if (!objEmailCache) {
            util.setError(404, `Cannot find emailCache with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailCache', objEmailCache);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailCacheCtrl.findOneByFromaddr = async (req, res) => {
    try {
        const { fromaddr } = req.params;
        const objEmailCache = await emailCacheService.findOneByFromaddr(fromaddr, req.query);
        if (!objEmailCache) {
            util.setError(404, `Cannot find emailCache with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailCache', objEmailCache);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailCacheCtrl.findOneByToaddr = async (req, res) => {
    try {
        const { toaddr } = req.params;
        const objEmailCache = await emailCacheService.findOneByToaddr(toaddr, req.query);
        if (!objEmailCache) {
            util.setError(404, `Cannot find emailCache with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailCache', objEmailCache);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailCacheCtrl.findOneByMessageId = async (req, res) => {
    try {
        const { messageId } = req.params;
        const objEmailCache = await emailCacheService.findOneByMessageId(messageId, req.query);
        if (!objEmailCache) {
            util.setError(404, `Cannot find emailCache with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailCache', objEmailCache);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailCacheCtrl.findOneBySenddate = async (req, res) => {
    try {
        const { senddate } = req.params;
        const objEmailCache = await emailCacheService.findOneBySenddate(senddate, req.query);
        if (!objEmailCache) {
            util.setError(404, `Cannot find emailCache with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailCache', objEmailCache);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailCacheCtrl.findOneByIeId = async (req, res) => {
    try {
        const { ieId } = req.params;
        const objEmailCache = await emailCacheService.findOneByIeId(ieId, req.query);
        if (!objEmailCache) {
            util.setError(404, `Cannot find emailCache with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailCache', objEmailCache);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}









//</es-section>

//<es-section>
module.exports = emailCacheCtrl;
//</es-section>
