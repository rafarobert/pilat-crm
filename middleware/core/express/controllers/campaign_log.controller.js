/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:34 GMT-0400 (Bolivia Time)
 * Time: 14:0:34
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:34 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:34
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const campaignLogService = require('../services/campaign_log.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const campaignLogCtrl = {};
campaignLogCtrl.service = campaignLogService;


campaignLogCtrl.getAllCampaignLog = async (req, res) => {
    try {
        const objCampaignLog = await campaignLogService.getAllCampaignLog(req.query);
        if (objCampaignLog.length > 0) {
            util.setSuccess(200, 'CampaignLog retrieved', objCampaignLog);
        } else {
            util.setSuccess(200, 'No campaignLog found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignLogCtrl.getACampaignLog = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objCampaignLog = await campaignLogService.getACampaignLog(id, req.query);
        if (!objCampaignLog) {
            util.setError(404, `Cannot find campaignLog with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found campaignLog', objCampaignLog);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignLogCtrl.addCampaignLog = async (req, res) => {
    try {
        const objCampaignLog = await campaignLogService.addCampaignLog(req.body);
        util.setSuccess(201, 'CampaignLog Added!', objCampaignLog);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignLogCtrl.updateCampaignLog = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objCampaignLog = await campaignLogService.updateCampaignLog(id, req.body);
        if (!objCampaignLog) {
            util.setError(404, `Cannot find campaignLog with the id: ${id}`);
        } else {
            util.setSuccess(200, 'CampaignLog updated', objCampaignLog);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

campaignLogCtrl.deleteCampaignLog = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objCampaignLog = await campaignLogService.deleteCampaignLog(id);
        if (objCampaignLog) {
            util.setSuccess(200, 'CampaignLog deleted', objCampaignLog);
        } else {
            util.setError(404, `CampaignLog with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



campaignLogCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objCampaignLog = await campaignLogService.findOneById(id, req.query);
        if (!objCampaignLog) {
            util.setError(404, `Cannot find campaignLog with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaignLog', objCampaignLog);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignLogCtrl.findOneByArchived = async (req, res) => {
    try {
        const { archived } = req.params;
        const objCampaignLog = await campaignLogService.findOneByArchived(archived, req.query);
        if (!objCampaignLog) {
            util.setError(404, `Cannot find campaignLog with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaignLog', objCampaignLog);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignLogCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objCampaignLog = await campaignLogService.findOneByDeleted(deleted, req.query);
        if (!objCampaignLog) {
            util.setError(404, `Cannot find campaignLog with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaignLog', objCampaignLog);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignLogCtrl.findOneByHits = async (req, res) => {
    try {
        const { hits } = req.params;
        const objCampaignLog = await campaignLogService.findOneByHits(hits, req.query);
        if (!objCampaignLog) {
            util.setError(404, `Cannot find campaignLog with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaignLog', objCampaignLog);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignLogCtrl.findOneByTargetTrackerKey = async (req, res) => {
    try {
        const { targetTrackerKey } = req.params;
        const objCampaignLog = await campaignLogService.findOneByTargetTrackerKey(targetTrackerKey, req.query);
        if (!objCampaignLog) {
            util.setError(404, `Cannot find campaignLog with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaignLog', objCampaignLog);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignLogCtrl.findOneByTargetId = async (req, res) => {
    try {
        const { targetId } = req.params;
        const objCampaignLog = await campaignLogService.findOneByTargetId(targetId, req.query);
        if (!objCampaignLog) {
            util.setError(404, `Cannot find campaignLog with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaignLog', objCampaignLog);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignLogCtrl.findOneByTargetType = async (req, res) => {
    try {
        const { targetType } = req.params;
        const objCampaignLog = await campaignLogService.findOneByTargetType(targetType, req.query);
        if (!objCampaignLog) {
            util.setError(404, `Cannot find campaignLog with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaignLog', objCampaignLog);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignLogCtrl.findOneByActivityType = async (req, res) => {
    try {
        const { activityType } = req.params;
        const objCampaignLog = await campaignLogService.findOneByActivityType(activityType, req.query);
        if (!objCampaignLog) {
            util.setError(404, `Cannot find campaignLog with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaignLog', objCampaignLog);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignLogCtrl.findOneByRelatedId = async (req, res) => {
    try {
        const { relatedId } = req.params;
        const objCampaignLog = await campaignLogService.findOneByRelatedId(relatedId, req.query);
        if (!objCampaignLog) {
            util.setError(404, `Cannot find campaignLog with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaignLog', objCampaignLog);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignLogCtrl.findOneByRelatedType = async (req, res) => {
    try {
        const { relatedType } = req.params;
        const objCampaignLog = await campaignLogService.findOneByRelatedType(relatedType, req.query);
        if (!objCampaignLog) {
            util.setError(404, `Cannot find campaignLog with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaignLog', objCampaignLog);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignLogCtrl.findOneByMoreInformation = async (req, res) => {
    try {
        const { moreInformation } = req.params;
        const objCampaignLog = await campaignLogService.findOneByMoreInformation(moreInformation, req.query);
        if (!objCampaignLog) {
            util.setError(404, `Cannot find campaignLog with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaignLog', objCampaignLog);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignLogCtrl.findOneByActivityDate = async (req, res) => {
    try {
        const { activityDate } = req.params;
        const objCampaignLog = await campaignLogService.findOneByActivityDate(activityDate, req.query);
        if (!objCampaignLog) {
            util.setError(404, `Cannot find campaignLog with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaignLog', objCampaignLog);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignLogCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objCampaignLog = await campaignLogService.findOneByDateModified(dateModified, req.query);
        if (!objCampaignLog) {
            util.setError(404, `Cannot find campaignLog with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaignLog', objCampaignLog);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignLogCtrl.findOneByCampaignId = async (req, res) => {
    try {
        const { campaignId } = req.params;
        const objCampaignLog = await campaignLogService.findOneByCampaignId(campaignId, req.query);
        if (!objCampaignLog) {
            util.setError(404, `Cannot find campaignLog with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaignLog', objCampaignLog);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignLogCtrl.findOneByListId = async (req, res) => {
    try {
        const { listId } = req.params;
        const objCampaignLog = await campaignLogService.findOneByListId(listId, req.query);
        if (!objCampaignLog) {
            util.setError(404, `Cannot find campaignLog with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaignLog', objCampaignLog);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignLogCtrl.findOneByMarketingId = async (req, res) => {
    try {
        const { marketingId } = req.params;
        const objCampaignLog = await campaignLogService.findOneByMarketingId(marketingId, req.query);
        if (!objCampaignLog) {
            util.setError(404, `Cannot find campaignLog with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaignLog', objCampaignLog);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



campaignLogCtrl.updateCampaignLogById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaignLog = await campaignLogService.updateCampaignLogById(id, req.body);
            if (!objCampaignLog) {
                util.setError(404, `Cannot find campaignLog with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CampaignLog updated', objCampaignLog);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignLogCtrl.updateCampaignLogByArchived = async (req, res) => {
     const { archived } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaignLog = await campaignLogService.updateCampaignLogByArchived(archived, req.body);
            if (!objCampaignLog) {
                util.setError(404, `Cannot find campaignLog with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CampaignLog updated', objCampaignLog);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignLogCtrl.updateCampaignLogByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaignLog = await campaignLogService.updateCampaignLogByDeleted(deleted, req.body);
            if (!objCampaignLog) {
                util.setError(404, `Cannot find campaignLog with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CampaignLog updated', objCampaignLog);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignLogCtrl.updateCampaignLogByHits = async (req, res) => {
     const { hits } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaignLog = await campaignLogService.updateCampaignLogByHits(hits, req.body);
            if (!objCampaignLog) {
                util.setError(404, `Cannot find campaignLog with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CampaignLog updated', objCampaignLog);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignLogCtrl.updateCampaignLogByTargetTrackerKey = async (req, res) => {
     const { targetTrackerKey } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaignLog = await campaignLogService.updateCampaignLogByTargetTrackerKey(targetTrackerKey, req.body);
            if (!objCampaignLog) {
                util.setError(404, `Cannot find campaignLog with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CampaignLog updated', objCampaignLog);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignLogCtrl.updateCampaignLogByTargetId = async (req, res) => {
     const { targetId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaignLog = await campaignLogService.updateCampaignLogByTargetId(targetId, req.body);
            if (!objCampaignLog) {
                util.setError(404, `Cannot find campaignLog with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CampaignLog updated', objCampaignLog);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignLogCtrl.updateCampaignLogByTargetType = async (req, res) => {
     const { targetType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaignLog = await campaignLogService.updateCampaignLogByTargetType(targetType, req.body);
            if (!objCampaignLog) {
                util.setError(404, `Cannot find campaignLog with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CampaignLog updated', objCampaignLog);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignLogCtrl.updateCampaignLogByActivityType = async (req, res) => {
     const { activityType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaignLog = await campaignLogService.updateCampaignLogByActivityType(activityType, req.body);
            if (!objCampaignLog) {
                util.setError(404, `Cannot find campaignLog with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CampaignLog updated', objCampaignLog);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignLogCtrl.updateCampaignLogByRelatedId = async (req, res) => {
     const { relatedId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaignLog = await campaignLogService.updateCampaignLogByRelatedId(relatedId, req.body);
            if (!objCampaignLog) {
                util.setError(404, `Cannot find campaignLog with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CampaignLog updated', objCampaignLog);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignLogCtrl.updateCampaignLogByRelatedType = async (req, res) => {
     const { relatedType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaignLog = await campaignLogService.updateCampaignLogByRelatedType(relatedType, req.body);
            if (!objCampaignLog) {
                util.setError(404, `Cannot find campaignLog with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CampaignLog updated', objCampaignLog);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignLogCtrl.updateCampaignLogByMoreInformation = async (req, res) => {
     const { moreInformation } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaignLog = await campaignLogService.updateCampaignLogByMoreInformation(moreInformation, req.body);
            if (!objCampaignLog) {
                util.setError(404, `Cannot find campaignLog with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CampaignLog updated', objCampaignLog);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignLogCtrl.updateCampaignLogByActivityDate = async (req, res) => {
     const { activityDate } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaignLog = await campaignLogService.updateCampaignLogByActivityDate(activityDate, req.body);
            if (!objCampaignLog) {
                util.setError(404, `Cannot find campaignLog with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CampaignLog updated', objCampaignLog);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignLogCtrl.updateCampaignLogByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaignLog = await campaignLogService.updateCampaignLogByDateModified(dateModified, req.body);
            if (!objCampaignLog) {
                util.setError(404, `Cannot find campaignLog with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CampaignLog updated', objCampaignLog);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignLogCtrl.updateCampaignLogByCampaignId = async (req, res) => {
     const { campaignId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaignLog = await campaignLogService.updateCampaignLogByCampaignId(campaignId, req.body);
            if (!objCampaignLog) {
                util.setError(404, `Cannot find campaignLog with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CampaignLog updated', objCampaignLog);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignLogCtrl.updateCampaignLogByListId = async (req, res) => {
     const { listId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaignLog = await campaignLogService.updateCampaignLogByListId(listId, req.body);
            if (!objCampaignLog) {
                util.setError(404, `Cannot find campaignLog with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CampaignLog updated', objCampaignLog);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignLogCtrl.updateCampaignLogByMarketingId = async (req, res) => {
     const { marketingId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaignLog = await campaignLogService.updateCampaignLogByMarketingId(marketingId, req.body);
            if (!objCampaignLog) {
                util.setError(404, `Cannot find campaignLog with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CampaignLog updated', objCampaignLog);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = campaignLogCtrl;
//</es-section>
