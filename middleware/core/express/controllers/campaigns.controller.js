/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:33 GMT-0400 (Bolivia Time)
 * Time: 14:0:33
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:33 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:33
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const campaignService = require('../services/campaigns.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const campaignsCtrl = {};
campaignsCtrl.service = campaignService;


campaignsCtrl.getAllCampaigns = async (req, res) => {
    try {
        const objCampaigns = await campaignService.getAllCampaigns(req.query);
        if (objCampaigns.length > 0) {
            util.setSuccess(200, 'Campaigns retrieved', objCampaigns);
        } else {
            util.setSuccess(200, 'No campaign found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignsCtrl.getACampaign = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objCampaign = await campaignService.getACampaign(id, req.query);
        if (!objCampaign) {
            util.setError(404, `Cannot find campaign with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found campaign', objCampaign);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignsCtrl.addCampaign = async (req, res) => {
    try {
        const objCampaign = await campaignService.addCampaign(req.body);
        util.setSuccess(201, 'Campaign Added!', objCampaign);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignsCtrl.updateCampaign = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objCampaign = await campaignService.updateCampaign(id, req.body);
        if (!objCampaign) {
            util.setError(404, `Cannot find campaign with the id: ${id}`);
        } else {
            util.setSuccess(200, 'Campaign updated', objCampaign);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

campaignsCtrl.deleteCampaign = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objCampaign = await campaignService.deleteCampaign(id);
        if (objCampaign) {
            util.setSuccess(200, 'Campaign deleted', objCampaign);
        } else {
            util.setError(404, `Campaign with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



campaignsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objCampaign = await campaignService.findOneById(id, req.query);
        if (!objCampaign) {
            util.setError(404, `Cannot find campaign with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaign', objCampaign);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objCampaign = await campaignService.findOneByDeleted(deleted, req.query);
        if (!objCampaign) {
            util.setError(404, `Cannot find campaign with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaign', objCampaign);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignsCtrl.findOneByTrackerKey = async (req, res) => {
    try {
        const { trackerKey } = req.params;
        const objCampaign = await campaignService.findOneByTrackerKey(trackerKey, req.query);
        if (!objCampaign) {
            util.setError(404, `Cannot find campaign with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaign', objCampaign);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignsCtrl.findOneByTrackerCount = async (req, res) => {
    try {
        const { trackerCount } = req.params;
        const objCampaign = await campaignService.findOneByTrackerCount(trackerCount, req.query);
        if (!objCampaign) {
            util.setError(404, `Cannot find campaign with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaign', objCampaign);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignsCtrl.findOneByImpressions = async (req, res) => {
    try {
        const { impressions } = req.params;
        const objCampaign = await campaignService.findOneByImpressions(impressions, req.query);
        if (!objCampaign) {
            util.setError(404, `Cannot find campaign with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaign', objCampaign);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignsCtrl.findOneByBudget = async (req, res) => {
    try {
        const { budget } = req.params;
        const objCampaign = await campaignService.findOneByBudget(budget, req.query);
        if (!objCampaign) {
            util.setError(404, `Cannot find campaign with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaign', objCampaign);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignsCtrl.findOneByExpectedCost = async (req, res) => {
    try {
        const { expectedCost } = req.params;
        const objCampaign = await campaignService.findOneByExpectedCost(expectedCost, req.query);
        if (!objCampaign) {
            util.setError(404, `Cannot find campaign with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaign', objCampaign);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignsCtrl.findOneByActualCost = async (req, res) => {
    try {
        const { actualCost } = req.params;
        const objCampaign = await campaignService.findOneByActualCost(actualCost, req.query);
        if (!objCampaign) {
            util.setError(404, `Cannot find campaign with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaign', objCampaign);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignsCtrl.findOneByExpectedRevenue = async (req, res) => {
    try {
        const { expectedRevenue } = req.params;
        const objCampaign = await campaignService.findOneByExpectedRevenue(expectedRevenue, req.query);
        if (!objCampaign) {
            util.setError(404, `Cannot find campaign with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaign', objCampaign);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignsCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objCampaign = await campaignService.findOneByName(name, req.query);
        if (!objCampaign) {
            util.setError(404, `Cannot find campaign with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaign', objCampaign);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignsCtrl.findOneByReferUrl = async (req, res) => {
    try {
        const { referUrl } = req.params;
        const objCampaign = await campaignService.findOneByReferUrl(referUrl, req.query);
        if (!objCampaign) {
            util.setError(404, `Cannot find campaign with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaign', objCampaign);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignsCtrl.findOneByTrackerText = async (req, res) => {
    try {
        const { trackerText } = req.params;
        const objCampaign = await campaignService.findOneByTrackerText(trackerText, req.query);
        if (!objCampaign) {
            util.setError(404, `Cannot find campaign with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaign', objCampaign);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignsCtrl.findOneByStatus = async (req, res) => {
    try {
        const { status } = req.params;
        const objCampaign = await campaignService.findOneByStatus(status, req.query);
        if (!objCampaign) {
            util.setError(404, `Cannot find campaign with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaign', objCampaign);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignsCtrl.findOneByCampaignType = async (req, res) => {
    try {
        const { campaignType } = req.params;
        const objCampaign = await campaignService.findOneByCampaignType(campaignType, req.query);
        if (!objCampaign) {
            util.setError(404, `Cannot find campaign with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaign', objCampaign);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignsCtrl.findOneByFrequency = async (req, res) => {
    try {
        const { frequency } = req.params;
        const objCampaign = await campaignService.findOneByFrequency(frequency, req.query);
        if (!objCampaign) {
            util.setError(404, `Cannot find campaign with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaign', objCampaign);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignsCtrl.findOneByObjective = async (req, res) => {
    try {
        const { objective } = req.params;
        const objCampaign = await campaignService.findOneByObjective(objective, req.query);
        if (!objCampaign) {
            util.setError(404, `Cannot find campaign with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaign', objCampaign);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignsCtrl.findOneByContent = async (req, res) => {
    try {
        const { content } = req.params;
        const objCampaign = await campaignService.findOneByContent(content, req.query);
        if (!objCampaign) {
            util.setError(404, `Cannot find campaign with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaign', objCampaign);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignsCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objCampaign = await campaignService.findOneByDateEntered(dateEntered, req.query);
        if (!objCampaign) {
            util.setError(404, `Cannot find campaign with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaign', objCampaign);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objCampaign = await campaignService.findOneByDateModified(dateModified, req.query);
        if (!objCampaign) {
            util.setError(404, `Cannot find campaign with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaign', objCampaign);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignsCtrl.findOneByStartDate = async (req, res) => {
    try {
        const { startDate } = req.params;
        const objCampaign = await campaignService.findOneByStartDate(startDate, req.query);
        if (!objCampaign) {
            util.setError(404, `Cannot find campaign with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaign', objCampaign);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignsCtrl.findOneByEndDate = async (req, res) => {
    try {
        const { endDate } = req.params;
        const objCampaign = await campaignService.findOneByEndDate(endDate, req.query);
        if (!objCampaign) {
            util.setError(404, `Cannot find campaign with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaign', objCampaign);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignsCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objCampaign = await campaignService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objCampaign) {
            util.setError(404, `Cannot find campaign with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaign', objCampaign);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignsCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objCampaign = await campaignService.findOneByCreatedBy(createdBy, req.query);
        if (!objCampaign) {
            util.setError(404, `Cannot find campaign with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaign', objCampaign);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignsCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objCampaign = await campaignService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objCampaign) {
            util.setError(404, `Cannot find campaign with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaign', objCampaign);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignsCtrl.findOneByCurrencyId = async (req, res) => {
    try {
        const { currencyId } = req.params;
        const objCampaign = await campaignService.findOneByCurrencyId(currencyId, req.query);
        if (!objCampaign) {
            util.setError(404, `Cannot find campaign with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaign', objCampaign);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignsCtrl.findOneBySurveyId = async (req, res) => {
    try {
        const { surveyId } = req.params;
        const objCampaign = await campaignService.findOneBySurveyId(surveyId, req.query);
        if (!objCampaign) {
            util.setError(404, `Cannot find campaign with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaign', objCampaign);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



campaignsCtrl.updateCampaignById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaign = await campaignService.updateCampaignById(id, req.body);
            if (!objCampaign) {
                util.setError(404, `Cannot find campaign with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Campaign updated', objCampaign);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignsCtrl.updateCampaignByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaign = await campaignService.updateCampaignByDeleted(deleted, req.body);
            if (!objCampaign) {
                util.setError(404, `Cannot find campaign with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Campaign updated', objCampaign);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignsCtrl.updateCampaignByTrackerKey = async (req, res) => {
     const { trackerKey } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaign = await campaignService.updateCampaignByTrackerKey(trackerKey, req.body);
            if (!objCampaign) {
                util.setError(404, `Cannot find campaign with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Campaign updated', objCampaign);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignsCtrl.updateCampaignByTrackerCount = async (req, res) => {
     const { trackerCount } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaign = await campaignService.updateCampaignByTrackerCount(trackerCount, req.body);
            if (!objCampaign) {
                util.setError(404, `Cannot find campaign with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Campaign updated', objCampaign);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignsCtrl.updateCampaignByImpressions = async (req, res) => {
     const { impressions } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaign = await campaignService.updateCampaignByImpressions(impressions, req.body);
            if (!objCampaign) {
                util.setError(404, `Cannot find campaign with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Campaign updated', objCampaign);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignsCtrl.updateCampaignByBudget = async (req, res) => {
     const { budget } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaign = await campaignService.updateCampaignByBudget(budget, req.body);
            if (!objCampaign) {
                util.setError(404, `Cannot find campaign with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Campaign updated', objCampaign);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignsCtrl.updateCampaignByExpectedCost = async (req, res) => {
     const { expectedCost } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaign = await campaignService.updateCampaignByExpectedCost(expectedCost, req.body);
            if (!objCampaign) {
                util.setError(404, `Cannot find campaign with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Campaign updated', objCampaign);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignsCtrl.updateCampaignByActualCost = async (req, res) => {
     const { actualCost } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaign = await campaignService.updateCampaignByActualCost(actualCost, req.body);
            if (!objCampaign) {
                util.setError(404, `Cannot find campaign with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Campaign updated', objCampaign);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignsCtrl.updateCampaignByExpectedRevenue = async (req, res) => {
     const { expectedRevenue } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaign = await campaignService.updateCampaignByExpectedRevenue(expectedRevenue, req.body);
            if (!objCampaign) {
                util.setError(404, `Cannot find campaign with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Campaign updated', objCampaign);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignsCtrl.updateCampaignByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaign = await campaignService.updateCampaignByName(name, req.body);
            if (!objCampaign) {
                util.setError(404, `Cannot find campaign with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Campaign updated', objCampaign);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignsCtrl.updateCampaignByReferUrl = async (req, res) => {
     const { referUrl } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaign = await campaignService.updateCampaignByReferUrl(referUrl, req.body);
            if (!objCampaign) {
                util.setError(404, `Cannot find campaign with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Campaign updated', objCampaign);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignsCtrl.updateCampaignByTrackerText = async (req, res) => {
     const { trackerText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaign = await campaignService.updateCampaignByTrackerText(trackerText, req.body);
            if (!objCampaign) {
                util.setError(404, `Cannot find campaign with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Campaign updated', objCampaign);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignsCtrl.updateCampaignByStatus = async (req, res) => {
     const { status } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaign = await campaignService.updateCampaignByStatus(status, req.body);
            if (!objCampaign) {
                util.setError(404, `Cannot find campaign with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Campaign updated', objCampaign);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignsCtrl.updateCampaignByCampaignType = async (req, res) => {
     const { campaignType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaign = await campaignService.updateCampaignByCampaignType(campaignType, req.body);
            if (!objCampaign) {
                util.setError(404, `Cannot find campaign with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Campaign updated', objCampaign);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignsCtrl.updateCampaignByFrequency = async (req, res) => {
     const { frequency } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaign = await campaignService.updateCampaignByFrequency(frequency, req.body);
            if (!objCampaign) {
                util.setError(404, `Cannot find campaign with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Campaign updated', objCampaign);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignsCtrl.updateCampaignByObjective = async (req, res) => {
     const { objective } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaign = await campaignService.updateCampaignByObjective(objective, req.body);
            if (!objCampaign) {
                util.setError(404, `Cannot find campaign with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Campaign updated', objCampaign);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignsCtrl.updateCampaignByContent = async (req, res) => {
     const { content } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaign = await campaignService.updateCampaignByContent(content, req.body);
            if (!objCampaign) {
                util.setError(404, `Cannot find campaign with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Campaign updated', objCampaign);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignsCtrl.updateCampaignByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaign = await campaignService.updateCampaignByDateEntered(dateEntered, req.body);
            if (!objCampaign) {
                util.setError(404, `Cannot find campaign with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Campaign updated', objCampaign);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignsCtrl.updateCampaignByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaign = await campaignService.updateCampaignByDateModified(dateModified, req.body);
            if (!objCampaign) {
                util.setError(404, `Cannot find campaign with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Campaign updated', objCampaign);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignsCtrl.updateCampaignByStartDate = async (req, res) => {
     const { startDate } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaign = await campaignService.updateCampaignByStartDate(startDate, req.body);
            if (!objCampaign) {
                util.setError(404, `Cannot find campaign with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Campaign updated', objCampaign);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignsCtrl.updateCampaignByEndDate = async (req, res) => {
     const { endDate } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaign = await campaignService.updateCampaignByEndDate(endDate, req.body);
            if (!objCampaign) {
                util.setError(404, `Cannot find campaign with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Campaign updated', objCampaign);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignsCtrl.updateCampaignByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaign = await campaignService.updateCampaignByModifiedUserId(modifiedUserId, req.body);
            if (!objCampaign) {
                util.setError(404, `Cannot find campaign with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Campaign updated', objCampaign);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignsCtrl.updateCampaignByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaign = await campaignService.updateCampaignByCreatedBy(createdBy, req.body);
            if (!objCampaign) {
                util.setError(404, `Cannot find campaign with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Campaign updated', objCampaign);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignsCtrl.updateCampaignByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaign = await campaignService.updateCampaignByAssignedUserId(assignedUserId, req.body);
            if (!objCampaign) {
                util.setError(404, `Cannot find campaign with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Campaign updated', objCampaign);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignsCtrl.updateCampaignByCurrencyId = async (req, res) => {
     const { currencyId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaign = await campaignService.updateCampaignByCurrencyId(currencyId, req.body);
            if (!objCampaign) {
                util.setError(404, `Cannot find campaign with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Campaign updated', objCampaign);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignsCtrl.updateCampaignBySurveyId = async (req, res) => {
     const { surveyId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaign = await campaignService.updateCampaignBySurveyId(surveyId, req.body);
            if (!objCampaign) {
                util.setError(404, `Cannot find campaign with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Campaign updated', objCampaign);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = campaignsCtrl;
//</es-section>
