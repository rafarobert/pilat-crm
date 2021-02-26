/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:23 GMT-0400 (Bolivia Time)
 * Time: 0:23:23
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:23 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:23
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const opportunityService = require('../services/opportunities.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const opportunitiesCtrl = {};
opportunitiesCtrl.service = opportunityService;


opportunitiesCtrl.getAllOpportunities = async (req, res) => {
    try {
        const objOpportunities = await opportunityService.getAllOpportunities(req.query);
        if (objOpportunities.length > 0) {
            util.setSuccess(200, 'Opportunities retrieved', objOpportunities);
        } else {
            util.setSuccess(200, 'No opportunity found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesCtrl.getAOpportunity = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objOpportunity = await opportunityService.getAOpportunity(id, req.query);
        if (!objOpportunity) {
            util.setError(404, `Cannot find opportunity with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found opportunity', objOpportunity);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesCtrl.addOpportunity = async (req, res) => {
    try {
        const objOpportunity = await opportunityService.addOpportunity(req.body);
        util.setSuccess(201, 'Opportunity Added!', objOpportunity);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesCtrl.updateOpportunity = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objOpportunity = await opportunityService.updateOpportunity(id, req.body);
        if (!objOpportunity) {
            util.setError(404, `Cannot find opportunity with the id: ${id}`);
        } else {
            util.setSuccess(200, 'Opportunity updated', objOpportunity);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

opportunitiesCtrl.deleteOpportunity = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objOpportunity = await opportunityService.deleteOpportunity(id);
        if (objOpportunity) {
            util.setSuccess(200, 'Opportunity deleted', objOpportunity);
        } else {
            util.setError(404, `Opportunity with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



opportunitiesCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objOpportunity = await opportunityService.findOneById(id, req.query);
        if (!objOpportunity) {
            util.setError(404, `Cannot find opportunity with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunity', objOpportunity);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objOpportunity = await opportunityService.findOneByDeleted(deleted, req.query);
        if (!objOpportunity) {
            util.setError(404, `Cannot find opportunity with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunity', objOpportunity);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesCtrl.findOneByAmount = async (req, res) => {
    try {
        const { amount } = req.params;
        const objOpportunity = await opportunityService.findOneByAmount(amount, req.query);
        if (!objOpportunity) {
            util.setError(404, `Cannot find opportunity with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunity', objOpportunity);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesCtrl.findOneByAmountUsdollar = async (req, res) => {
    try {
        const { amountUsdollar } = req.params;
        const objOpportunity = await opportunityService.findOneByAmountUsdollar(amountUsdollar, req.query);
        if (!objOpportunity) {
            util.setError(404, `Cannot find opportunity with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunity', objOpportunity);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesCtrl.findOneByProbability = async (req, res) => {
    try {
        const { probability } = req.params;
        const objOpportunity = await opportunityService.findOneByProbability(probability, req.query);
        if (!objOpportunity) {
            util.setError(404, `Cannot find opportunity with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunity', objOpportunity);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objOpportunity = await opportunityService.findOneByName(name, req.query);
        if (!objOpportunity) {
            util.setError(404, `Cannot find opportunity with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunity', objOpportunity);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesCtrl.findOneByOpportunityType = async (req, res) => {
    try {
        const { opportunityType } = req.params;
        const objOpportunity = await opportunityService.findOneByOpportunityType(opportunityType, req.query);
        if (!objOpportunity) {
            util.setError(404, `Cannot find opportunity with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunity', objOpportunity);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesCtrl.findOneByLeadSource = async (req, res) => {
    try {
        const { leadSource } = req.params;
        const objOpportunity = await opportunityService.findOneByLeadSource(leadSource, req.query);
        if (!objOpportunity) {
            util.setError(404, `Cannot find opportunity with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunity', objOpportunity);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesCtrl.findOneByNextStep = async (req, res) => {
    try {
        const { nextStep } = req.params;
        const objOpportunity = await opportunityService.findOneByNextStep(nextStep, req.query);
        if (!objOpportunity) {
            util.setError(404, `Cannot find opportunity with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunity', objOpportunity);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesCtrl.findOneBySalesStage = async (req, res) => {
    try {
        const { salesStage } = req.params;
        const objOpportunity = await opportunityService.findOneBySalesStage(salesStage, req.query);
        if (!objOpportunity) {
            util.setError(404, `Cannot find opportunity with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunity', objOpportunity);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objOpportunity = await opportunityService.findOneByDescription(description, req.query);
        if (!objOpportunity) {
            util.setError(404, `Cannot find opportunity with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunity', objOpportunity);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objOpportunity = await opportunityService.findOneByDateEntered(dateEntered, req.query);
        if (!objOpportunity) {
            util.setError(404, `Cannot find opportunity with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunity', objOpportunity);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objOpportunity = await opportunityService.findOneByDateModified(dateModified, req.query);
        if (!objOpportunity) {
            util.setError(404, `Cannot find opportunity with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunity', objOpportunity);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesCtrl.findOneByDateClosed = async (req, res) => {
    try {
        const { dateClosed } = req.params;
        const objOpportunity = await opportunityService.findOneByDateClosed(dateClosed, req.query);
        if (!objOpportunity) {
            util.setError(404, `Cannot find opportunity with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunity', objOpportunity);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objOpportunity = await opportunityService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objOpportunity) {
            util.setError(404, `Cannot find opportunity with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunity', objOpportunity);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objOpportunity = await opportunityService.findOneByCreatedBy(createdBy, req.query);
        if (!objOpportunity) {
            util.setError(404, `Cannot find opportunity with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunity', objOpportunity);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objOpportunity = await opportunityService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objOpportunity) {
            util.setError(404, `Cannot find opportunity with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunity', objOpportunity);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesCtrl.findOneByCampaignId = async (req, res) => {
    try {
        const { campaignId } = req.params;
        const objOpportunity = await opportunityService.findOneByCampaignId(campaignId, req.query);
        if (!objOpportunity) {
            util.setError(404, `Cannot find opportunity with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunity', objOpportunity);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesCtrl.findOneByCurrencyId = async (req, res) => {
    try {
        const { currencyId } = req.params;
        const objOpportunity = await opportunityService.findOneByCurrencyId(currencyId, req.query);
        if (!objOpportunity) {
            util.setError(404, `Cannot find opportunity with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunity', objOpportunity);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



opportunitiesCtrl.updateOpportunityById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOpportunity = await opportunityService.updateOpportunityById(id, req.body);
            if (!objOpportunity) {
                util.setError(404, `Cannot find opportunity with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Opportunity updated', objOpportunity);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

opportunitiesCtrl.updateOpportunityByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOpportunity = await opportunityService.updateOpportunityByDeleted(deleted, req.body);
            if (!objOpportunity) {
                util.setError(404, `Cannot find opportunity with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Opportunity updated', objOpportunity);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

opportunitiesCtrl.updateOpportunityByAmount = async (req, res) => {
     const { amount } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOpportunity = await opportunityService.updateOpportunityByAmount(amount, req.body);
            if (!objOpportunity) {
                util.setError(404, `Cannot find opportunity with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Opportunity updated', objOpportunity);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

opportunitiesCtrl.updateOpportunityByAmountUsdollar = async (req, res) => {
     const { amountUsdollar } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOpportunity = await opportunityService.updateOpportunityByAmountUsdollar(amountUsdollar, req.body);
            if (!objOpportunity) {
                util.setError(404, `Cannot find opportunity with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Opportunity updated', objOpportunity);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

opportunitiesCtrl.updateOpportunityByProbability = async (req, res) => {
     const { probability } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOpportunity = await opportunityService.updateOpportunityByProbability(probability, req.body);
            if (!objOpportunity) {
                util.setError(404, `Cannot find opportunity with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Opportunity updated', objOpportunity);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

opportunitiesCtrl.updateOpportunityByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOpportunity = await opportunityService.updateOpportunityByName(name, req.body);
            if (!objOpportunity) {
                util.setError(404, `Cannot find opportunity with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Opportunity updated', objOpportunity);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

opportunitiesCtrl.updateOpportunityByOpportunityType = async (req, res) => {
     const { opportunityType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOpportunity = await opportunityService.updateOpportunityByOpportunityType(opportunityType, req.body);
            if (!objOpportunity) {
                util.setError(404, `Cannot find opportunity with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Opportunity updated', objOpportunity);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

opportunitiesCtrl.updateOpportunityByLeadSource = async (req, res) => {
     const { leadSource } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOpportunity = await opportunityService.updateOpportunityByLeadSource(leadSource, req.body);
            if (!objOpportunity) {
                util.setError(404, `Cannot find opportunity with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Opportunity updated', objOpportunity);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

opportunitiesCtrl.updateOpportunityByNextStep = async (req, res) => {
     const { nextStep } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOpportunity = await opportunityService.updateOpportunityByNextStep(nextStep, req.body);
            if (!objOpportunity) {
                util.setError(404, `Cannot find opportunity with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Opportunity updated', objOpportunity);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

opportunitiesCtrl.updateOpportunityBySalesStage = async (req, res) => {
     const { salesStage } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOpportunity = await opportunityService.updateOpportunityBySalesStage(salesStage, req.body);
            if (!objOpportunity) {
                util.setError(404, `Cannot find opportunity with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Opportunity updated', objOpportunity);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

opportunitiesCtrl.updateOpportunityByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOpportunity = await opportunityService.updateOpportunityByDescription(description, req.body);
            if (!objOpportunity) {
                util.setError(404, `Cannot find opportunity with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Opportunity updated', objOpportunity);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

opportunitiesCtrl.updateOpportunityByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOpportunity = await opportunityService.updateOpportunityByDateEntered(dateEntered, req.body);
            if (!objOpportunity) {
                util.setError(404, `Cannot find opportunity with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Opportunity updated', objOpportunity);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

opportunitiesCtrl.updateOpportunityByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOpportunity = await opportunityService.updateOpportunityByDateModified(dateModified, req.body);
            if (!objOpportunity) {
                util.setError(404, `Cannot find opportunity with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Opportunity updated', objOpportunity);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

opportunitiesCtrl.updateOpportunityByDateClosed = async (req, res) => {
     const { dateClosed } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOpportunity = await opportunityService.updateOpportunityByDateClosed(dateClosed, req.body);
            if (!objOpportunity) {
                util.setError(404, `Cannot find opportunity with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Opportunity updated', objOpportunity);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

opportunitiesCtrl.updateOpportunityByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOpportunity = await opportunityService.updateOpportunityByModifiedUserId(modifiedUserId, req.body);
            if (!objOpportunity) {
                util.setError(404, `Cannot find opportunity with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Opportunity updated', objOpportunity);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

opportunitiesCtrl.updateOpportunityByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOpportunity = await opportunityService.updateOpportunityByCreatedBy(createdBy, req.body);
            if (!objOpportunity) {
                util.setError(404, `Cannot find opportunity with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Opportunity updated', objOpportunity);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

opportunitiesCtrl.updateOpportunityByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOpportunity = await opportunityService.updateOpportunityByAssignedUserId(assignedUserId, req.body);
            if (!objOpportunity) {
                util.setError(404, `Cannot find opportunity with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Opportunity updated', objOpportunity);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

opportunitiesCtrl.updateOpportunityByCampaignId = async (req, res) => {
     const { campaignId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOpportunity = await opportunityService.updateOpportunityByCampaignId(campaignId, req.body);
            if (!objOpportunity) {
                util.setError(404, `Cannot find opportunity with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Opportunity updated', objOpportunity);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

opportunitiesCtrl.updateOpportunityByCurrencyId = async (req, res) => {
     const { currencyId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOpportunity = await opportunityService.updateOpportunityByCurrencyId(currencyId, req.body);
            if (!objOpportunity) {
                util.setError(404, `Cannot find opportunity with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Opportunity updated', objOpportunity);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = opportunitiesCtrl;
//</es-section>
