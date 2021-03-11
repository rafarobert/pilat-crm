/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:36 GMT-0400 (Bolivia Time)
 * Time: 14:57:36
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:36 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:36
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const prospectListCampaignService = require('../services/prospect_list_campaigns.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const prospectListCampaignsCtrl = {};
prospectListCampaignsCtrl.service = prospectListCampaignService;


prospectListCampaignsCtrl.getAllProspectListCampaigns = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.prospectListCampaigns.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objProspectListCampaigns = await prospectListCampaignService.getAllProspectListCampaigns(req.query);
        if (objProspectListCampaigns && objProspectListCampaigns.rows && objProspectListCampaigns.count) {
            util.setSuccess(200, 'ProspectListCampaigns retrieved', objProspectListCampaigns.rows, objProspectListCampaigns.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No prospectListCampaign found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectListCampaignsCtrl.getAProspectListCampaign = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objProspectListCampaign = await prospectListCampaignService.getAProspectListCampaign(id, req.query);
        if (!objProspectListCampaign) {
            util.setError(404, `Cannot find prospectListCampaign with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found prospectListCampaign', objProspectListCampaign);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectListCampaignsCtrl.addProspectListCampaign = async (req, res) => {
    try {
        const objProspectListCampaign = await prospectListCampaignService.addProspectListCampaign(req.body);
        util.setSuccess(201, 'ProspectListCampaign Added!', objProspectListCampaign);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectListCampaignsCtrl.updateProspectListCampaign = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objProspectListCampaign = await prospectListCampaignService.updateProspectListCampaign(id, req.body);
        if (!objProspectListCampaign) {
            util.setError(404, `Cannot find prospectListCampaign with the id: ${id}`);
        } else {
            util.setSuccess(200, 'ProspectListCampaign updated', objProspectListCampaign);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

prospectListCampaignsCtrl.deleteProspectListCampaign = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objProspectListCampaign = await prospectListCampaignService.deleteProspectListCampaign(id);
        if (objProspectListCampaign) {
            util.setSuccess(200, 'ProspectListCampaign deleted', objProspectListCampaign);
        } else {
            util.setError(404, `ProspectListCampaign with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



prospectListCampaignsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objProspectListCampaign = await prospectListCampaignService.findOneById(id, req.query);
        if (!objProspectListCampaign) {
            util.setError(404, `Cannot find prospectListCampaign with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospectListCampaign', objProspectListCampaign);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectListCampaignsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objProspectListCampaign = await prospectListCampaignService.findOneByDeleted(deleted, req.query);
        if (!objProspectListCampaign) {
            util.setError(404, `Cannot find prospectListCampaign with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospectListCampaign', objProspectListCampaign);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectListCampaignsCtrl.findOneByProspectListId = async (req, res) => {
    try {
        const { prospectListId } = req.params;
        const objProspectListCampaign = await prospectListCampaignService.findOneByProspectListId(prospectListId, req.query);
        if (!objProspectListCampaign) {
            util.setError(404, `Cannot find prospectListCampaign with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospectListCampaign', objProspectListCampaign);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectListCampaignsCtrl.findOneByCampaignId = async (req, res) => {
    try {
        const { campaignId } = req.params;
        const objProspectListCampaign = await prospectListCampaignService.findOneByCampaignId(campaignId, req.query);
        if (!objProspectListCampaign) {
            util.setError(404, `Cannot find prospectListCampaign with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospectListCampaign', objProspectListCampaign);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectListCampaignsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objProspectListCampaign = await prospectListCampaignService.findOneByDateModified(dateModified, req.query);
        if (!objProspectListCampaign) {
            util.setError(404, `Cannot find prospectListCampaign with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospectListCampaign', objProspectListCampaign);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



prospectListCampaignsCtrl.updateProspectListCampaignById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProspectListCampaign = await prospectListCampaignService.updateProspectListCampaignById(id, req.body);
            if (!objProspectListCampaign) {
                util.setError(404, `Cannot find prospectListCampaign with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProspectListCampaign updated', objProspectListCampaign);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectListCampaignsCtrl.updateProspectListCampaignByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProspectListCampaign = await prospectListCampaignService.updateProspectListCampaignByDeleted(deleted, req.body);
            if (!objProspectListCampaign) {
                util.setError(404, `Cannot find prospectListCampaign with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProspectListCampaign updated', objProspectListCampaign);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectListCampaignsCtrl.updateProspectListCampaignByProspectListId = async (req, res) => {
     const { prospectListId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProspectListCampaign = await prospectListCampaignService.updateProspectListCampaignByProspectListId(prospectListId, req.body);
            if (!objProspectListCampaign) {
                util.setError(404, `Cannot find prospectListCampaign with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProspectListCampaign updated', objProspectListCampaign);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectListCampaignsCtrl.updateProspectListCampaignByCampaignId = async (req, res) => {
     const { campaignId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProspectListCampaign = await prospectListCampaignService.updateProspectListCampaignByCampaignId(campaignId, req.body);
            if (!objProspectListCampaign) {
                util.setError(404, `Cannot find prospectListCampaign with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProspectListCampaign updated', objProspectListCampaign);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectListCampaignsCtrl.updateProspectListCampaignByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProspectListCampaign = await prospectListCampaignService.updateProspectListCampaignByDateModified(dateModified, req.body);
            if (!objProspectListCampaign) {
                util.setError(404, `Cannot find prospectListCampaign with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProspectListCampaign updated', objProspectListCampaign);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = prospectListCampaignsCtrl;
//</es-section>
