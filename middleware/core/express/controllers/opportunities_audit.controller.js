/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:13 GMT-0400 (Bolivia Time)
 * Time: 14:1:13
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:13 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:13
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const opportunityAuditService = require('../services/opportunities_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const opportunitiesAuditCtrl = {};
opportunitiesAuditCtrl.service = opportunityAuditService;


opportunitiesAuditCtrl.getAllOpportunitiesAudit = async (req, res) => {
    try {
        const objOpportunitiesAudit = await opportunityAuditService.getAllOpportunitiesAudit(req.query);
        if (objOpportunitiesAudit.length > 0) {
            util.setSuccess(200, 'OpportunitiesAudit retrieved', objOpportunitiesAudit);
        } else {
            util.setSuccess(200, 'No opportunityAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesAuditCtrl.getAOpportunityAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objOpportunityAudit = await opportunityAuditService.getAOpportunityAudit(id, req.query);
        if (!objOpportunityAudit) {
            util.setError(404, `Cannot find opportunityAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found opportunityAudit', objOpportunityAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesAuditCtrl.addOpportunityAudit = async (req, res) => {
    try {
        const objOpportunityAudit = await opportunityAuditService.addOpportunityAudit(req.body);
        util.setSuccess(201, 'OpportunityAudit Added!', objOpportunityAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesAuditCtrl.updateOpportunityAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objOpportunityAudit = await opportunityAuditService.updateOpportunityAudit(id, req.body);
        if (!objOpportunityAudit) {
            util.setError(404, `Cannot find opportunityAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'OpportunityAudit updated', objOpportunityAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

opportunitiesAuditCtrl.deleteOpportunityAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objOpportunityAudit = await opportunityAuditService.deleteOpportunityAudit(id);
        if (objOpportunityAudit) {
            util.setSuccess(200, 'OpportunityAudit deleted', objOpportunityAudit);
        } else {
            util.setError(404, `OpportunityAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



opportunitiesAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objOpportunityAudit = await opportunityAuditService.findOneById(id, req.query);
        if (!objOpportunityAudit) {
            util.setError(404, `Cannot find opportunityAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunityAudit', objOpportunityAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objOpportunityAudit = await opportunityAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objOpportunityAudit) {
            util.setError(404, `Cannot find opportunityAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunityAudit', objOpportunityAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objOpportunityAudit = await opportunityAuditService.findOneByFieldName(fieldName, req.query);
        if (!objOpportunityAudit) {
            util.setError(404, `Cannot find opportunityAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunityAudit', objOpportunityAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objOpportunityAudit = await opportunityAuditService.findOneByDataType(dataType, req.query);
        if (!objOpportunityAudit) {
            util.setError(404, `Cannot find opportunityAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunityAudit', objOpportunityAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objOpportunityAudit = await opportunityAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objOpportunityAudit) {
            util.setError(404, `Cannot find opportunityAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunityAudit', objOpportunityAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objOpportunityAudit = await opportunityAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objOpportunityAudit) {
            util.setError(404, `Cannot find opportunityAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunityAudit', objOpportunityAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objOpportunityAudit = await opportunityAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objOpportunityAudit) {
            util.setError(404, `Cannot find opportunityAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunityAudit', objOpportunityAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objOpportunityAudit = await opportunityAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objOpportunityAudit) {
            util.setError(404, `Cannot find opportunityAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunityAudit', objOpportunityAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objOpportunityAudit = await opportunityAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objOpportunityAudit) {
            util.setError(404, `Cannot find opportunityAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunityAudit', objOpportunityAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objOpportunityAudit = await opportunityAuditService.findOneByParentId(parentId, req.query);
        if (!objOpportunityAudit) {
            util.setError(404, `Cannot find opportunityAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunityAudit', objOpportunityAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



opportunitiesAuditCtrl.updateOpportunityAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOpportunityAudit = await opportunityAuditService.updateOpportunityAuditById(id, req.body);
            if (!objOpportunityAudit) {
                util.setError(404, `Cannot find opportunityAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OpportunityAudit updated', objOpportunityAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

opportunitiesAuditCtrl.updateOpportunityAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOpportunityAudit = await opportunityAuditService.updateOpportunityAuditByCreatedBy(createdBy, req.body);
            if (!objOpportunityAudit) {
                util.setError(404, `Cannot find opportunityAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OpportunityAudit updated', objOpportunityAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

opportunitiesAuditCtrl.updateOpportunityAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOpportunityAudit = await opportunityAuditService.updateOpportunityAuditByFieldName(fieldName, req.body);
            if (!objOpportunityAudit) {
                util.setError(404, `Cannot find opportunityAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OpportunityAudit updated', objOpportunityAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

opportunitiesAuditCtrl.updateOpportunityAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOpportunityAudit = await opportunityAuditService.updateOpportunityAuditByDataType(dataType, req.body);
            if (!objOpportunityAudit) {
                util.setError(404, `Cannot find opportunityAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OpportunityAudit updated', objOpportunityAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

opportunitiesAuditCtrl.updateOpportunityAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOpportunityAudit = await opportunityAuditService.updateOpportunityAuditByBeforeValueString(beforeValueString, req.body);
            if (!objOpportunityAudit) {
                util.setError(404, `Cannot find opportunityAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OpportunityAudit updated', objOpportunityAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

opportunitiesAuditCtrl.updateOpportunityAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOpportunityAudit = await opportunityAuditService.updateOpportunityAuditByAfterValueString(afterValueString, req.body);
            if (!objOpportunityAudit) {
                util.setError(404, `Cannot find opportunityAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OpportunityAudit updated', objOpportunityAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

opportunitiesAuditCtrl.updateOpportunityAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOpportunityAudit = await opportunityAuditService.updateOpportunityAuditByBeforeValueText(beforeValueText, req.body);
            if (!objOpportunityAudit) {
                util.setError(404, `Cannot find opportunityAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OpportunityAudit updated', objOpportunityAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

opportunitiesAuditCtrl.updateOpportunityAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOpportunityAudit = await opportunityAuditService.updateOpportunityAuditByAfterValueText(afterValueText, req.body);
            if (!objOpportunityAudit) {
                util.setError(404, `Cannot find opportunityAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OpportunityAudit updated', objOpportunityAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

opportunitiesAuditCtrl.updateOpportunityAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOpportunityAudit = await opportunityAuditService.updateOpportunityAuditByDateCreated(dateCreated, req.body);
            if (!objOpportunityAudit) {
                util.setError(404, `Cannot find opportunityAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OpportunityAudit updated', objOpportunityAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

opportunitiesAuditCtrl.updateOpportunityAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOpportunityAudit = await opportunityAuditService.updateOpportunityAuditByParentId(parentId, req.body);
            if (!objOpportunityAudit) {
                util.setError(404, `Cannot find opportunityAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OpportunityAudit updated', objOpportunityAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = opportunitiesAuditCtrl;
//</es-section>
