/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:32 GMT-0400 (Bolivia Time)
 * Time: 14:56:32
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:32 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:32
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const campaignAuditService = require('../services/campaigns_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const campaignsAuditCtrl = {};
campaignsAuditCtrl.service = campaignAuditService;


campaignsAuditCtrl.getAllCampaignsAudit = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.campaignsAudit.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objCampaignsAudit = await campaignAuditService.getAllCampaignsAudit(req.query);
        if (objCampaignsAudit && objCampaignsAudit.rows && objCampaignsAudit.count) {
            util.setSuccess(200, 'CampaignsAudit retrieved', objCampaignsAudit.rows, objCampaignsAudit.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No campaignAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignsAuditCtrl.getACampaignAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objCampaignAudit = await campaignAuditService.getACampaignAudit(id, req.query);
        if (!objCampaignAudit) {
            util.setError(404, `Cannot find campaignAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found campaignAudit', objCampaignAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignsAuditCtrl.addCampaignAudit = async (req, res) => {
    try {
        const objCampaignAudit = await campaignAuditService.addCampaignAudit(req.body);
        util.setSuccess(201, 'CampaignAudit Added!', objCampaignAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignsAuditCtrl.updateCampaignAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objCampaignAudit = await campaignAuditService.updateCampaignAudit(id, req.body);
        if (!objCampaignAudit) {
            util.setError(404, `Cannot find campaignAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'CampaignAudit updated', objCampaignAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

campaignsAuditCtrl.deleteCampaignAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objCampaignAudit = await campaignAuditService.deleteCampaignAudit(id);
        if (objCampaignAudit) {
            util.setSuccess(200, 'CampaignAudit deleted', objCampaignAudit);
        } else {
            util.setError(404, `CampaignAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



campaignsAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objCampaignAudit = await campaignAuditService.findOneById(id, req.query);
        if (!objCampaignAudit) {
            util.setError(404, `Cannot find campaignAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaignAudit', objCampaignAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignsAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objCampaignAudit = await campaignAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objCampaignAudit) {
            util.setError(404, `Cannot find campaignAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaignAudit', objCampaignAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignsAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objCampaignAudit = await campaignAuditService.findOneByFieldName(fieldName, req.query);
        if (!objCampaignAudit) {
            util.setError(404, `Cannot find campaignAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaignAudit', objCampaignAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignsAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objCampaignAudit = await campaignAuditService.findOneByDataType(dataType, req.query);
        if (!objCampaignAudit) {
            util.setError(404, `Cannot find campaignAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaignAudit', objCampaignAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignsAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objCampaignAudit = await campaignAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objCampaignAudit) {
            util.setError(404, `Cannot find campaignAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaignAudit', objCampaignAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignsAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objCampaignAudit = await campaignAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objCampaignAudit) {
            util.setError(404, `Cannot find campaignAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaignAudit', objCampaignAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignsAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objCampaignAudit = await campaignAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objCampaignAudit) {
            util.setError(404, `Cannot find campaignAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaignAudit', objCampaignAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignsAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objCampaignAudit = await campaignAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objCampaignAudit) {
            util.setError(404, `Cannot find campaignAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaignAudit', objCampaignAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignsAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objCampaignAudit = await campaignAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objCampaignAudit) {
            util.setError(404, `Cannot find campaignAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaignAudit', objCampaignAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignsAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objCampaignAudit = await campaignAuditService.findOneByParentId(parentId, req.query);
        if (!objCampaignAudit) {
            util.setError(404, `Cannot find campaignAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaignAudit', objCampaignAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



campaignsAuditCtrl.updateCampaignAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaignAudit = await campaignAuditService.updateCampaignAuditById(id, req.body);
            if (!objCampaignAudit) {
                util.setError(404, `Cannot find campaignAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CampaignAudit updated', objCampaignAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignsAuditCtrl.updateCampaignAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaignAudit = await campaignAuditService.updateCampaignAuditByCreatedBy(createdBy, req.body);
            if (!objCampaignAudit) {
                util.setError(404, `Cannot find campaignAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CampaignAudit updated', objCampaignAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignsAuditCtrl.updateCampaignAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaignAudit = await campaignAuditService.updateCampaignAuditByFieldName(fieldName, req.body);
            if (!objCampaignAudit) {
                util.setError(404, `Cannot find campaignAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CampaignAudit updated', objCampaignAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignsAuditCtrl.updateCampaignAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaignAudit = await campaignAuditService.updateCampaignAuditByDataType(dataType, req.body);
            if (!objCampaignAudit) {
                util.setError(404, `Cannot find campaignAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CampaignAudit updated', objCampaignAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignsAuditCtrl.updateCampaignAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaignAudit = await campaignAuditService.updateCampaignAuditByBeforeValueString(beforeValueString, req.body);
            if (!objCampaignAudit) {
                util.setError(404, `Cannot find campaignAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CampaignAudit updated', objCampaignAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignsAuditCtrl.updateCampaignAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaignAudit = await campaignAuditService.updateCampaignAuditByAfterValueString(afterValueString, req.body);
            if (!objCampaignAudit) {
                util.setError(404, `Cannot find campaignAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CampaignAudit updated', objCampaignAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignsAuditCtrl.updateCampaignAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaignAudit = await campaignAuditService.updateCampaignAuditByBeforeValueText(beforeValueText, req.body);
            if (!objCampaignAudit) {
                util.setError(404, `Cannot find campaignAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CampaignAudit updated', objCampaignAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignsAuditCtrl.updateCampaignAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaignAudit = await campaignAuditService.updateCampaignAuditByAfterValueText(afterValueText, req.body);
            if (!objCampaignAudit) {
                util.setError(404, `Cannot find campaignAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CampaignAudit updated', objCampaignAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignsAuditCtrl.updateCampaignAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaignAudit = await campaignAuditService.updateCampaignAuditByDateCreated(dateCreated, req.body);
            if (!objCampaignAudit) {
                util.setError(404, `Cannot find campaignAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CampaignAudit updated', objCampaignAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignsAuditCtrl.updateCampaignAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaignAudit = await campaignAuditService.updateCampaignAuditByParentId(parentId, req.body);
            if (!objCampaignAudit) {
                util.setError(404, `Cannot find campaignAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CampaignAudit updated', objCampaignAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = campaignsAuditCtrl;
//</es-section>
