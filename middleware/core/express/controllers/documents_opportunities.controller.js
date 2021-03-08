/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:56 GMT-0400 (Bolivia Time)
 * Time: 15:35:56
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:56 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:56
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const documentOpportunityService = require('../services/documents_opportunities.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const documentsOpportunitiesCtrl = {};
documentsOpportunitiesCtrl.service = documentOpportunityService;


documentsOpportunitiesCtrl.getAllDocumentsOpportunities = async (req, res) => {
    try {
        const objDocumentsOpportunities = await documentOpportunityService.getAllDocumentsOpportunities(req.query);
        if (objDocumentsOpportunities.length > 0) {
            util.setSuccess(200, 'DocumentsOpportunities retrieved', objDocumentsOpportunities);
        } else {
            util.setSuccess(200, 'No documentOpportunity found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsOpportunitiesCtrl.getADocumentOpportunity = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objDocumentOpportunity = await documentOpportunityService.getADocumentOpportunity(id, req.query);
        if (!objDocumentOpportunity) {
            util.setError(404, `Cannot find documentOpportunity with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found documentOpportunity', objDocumentOpportunity);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsOpportunitiesCtrl.addDocumentOpportunity = async (req, res) => {
    try {
        const objDocumentOpportunity = await documentOpportunityService.addDocumentOpportunity(req.body);
        util.setSuccess(201, 'DocumentOpportunity Added!', objDocumentOpportunity);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsOpportunitiesCtrl.updateDocumentOpportunity = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objDocumentOpportunity = await documentOpportunityService.updateDocumentOpportunity(id, req.body);
        if (!objDocumentOpportunity) {
            util.setError(404, `Cannot find documentOpportunity with the id: ${id}`);
        } else {
            util.setSuccess(200, 'DocumentOpportunity updated', objDocumentOpportunity);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

documentsOpportunitiesCtrl.deleteDocumentOpportunity = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objDocumentOpportunity = await documentOpportunityService.deleteDocumentOpportunity(id);
        if (objDocumentOpportunity) {
            util.setSuccess(200, 'DocumentOpportunity deleted', objDocumentOpportunity);
        } else {
            util.setError(404, `DocumentOpportunity with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



documentsOpportunitiesCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objDocumentOpportunity = await documentOpportunityService.findOneById(id, req.query);
        if (!objDocumentOpportunity) {
            util.setError(404, `Cannot find documentOpportunity with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found documentOpportunity', objDocumentOpportunity);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsOpportunitiesCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objDocumentOpportunity = await documentOpportunityService.findOneByDeleted(deleted, req.query);
        if (!objDocumentOpportunity) {
            util.setError(404, `Cannot find documentOpportunity with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found documentOpportunity', objDocumentOpportunity);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsOpportunitiesCtrl.findOneByDocumentId = async (req, res) => {
    try {
        const { documentId } = req.params;
        const objDocumentOpportunity = await documentOpportunityService.findOneByDocumentId(documentId, req.query);
        if (!objDocumentOpportunity) {
            util.setError(404, `Cannot find documentOpportunity with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found documentOpportunity', objDocumentOpportunity);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsOpportunitiesCtrl.findOneByOpportunityId = async (req, res) => {
    try {
        const { opportunityId } = req.params;
        const objDocumentOpportunity = await documentOpportunityService.findOneByOpportunityId(opportunityId, req.query);
        if (!objDocumentOpportunity) {
            util.setError(404, `Cannot find documentOpportunity with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found documentOpportunity', objDocumentOpportunity);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsOpportunitiesCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objDocumentOpportunity = await documentOpportunityService.findOneByDateModified(dateModified, req.query);
        if (!objDocumentOpportunity) {
            util.setError(404, `Cannot find documentOpportunity with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found documentOpportunity', objDocumentOpportunity);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



documentsOpportunitiesCtrl.updateDocumentOpportunityById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objDocumentOpportunity = await documentOpportunityService.updateDocumentOpportunityById(id, req.body);
            if (!objDocumentOpportunity) {
                util.setError(404, `Cannot find documentOpportunity with the id: ${id}`);
            } else {
                util.setSuccess(200, 'DocumentOpportunity updated', objDocumentOpportunity);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentsOpportunitiesCtrl.updateDocumentOpportunityByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objDocumentOpportunity = await documentOpportunityService.updateDocumentOpportunityByDeleted(deleted, req.body);
            if (!objDocumentOpportunity) {
                util.setError(404, `Cannot find documentOpportunity with the id: ${id}`);
            } else {
                util.setSuccess(200, 'DocumentOpportunity updated', objDocumentOpportunity);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentsOpportunitiesCtrl.updateDocumentOpportunityByDocumentId = async (req, res) => {
     const { documentId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objDocumentOpportunity = await documentOpportunityService.updateDocumentOpportunityByDocumentId(documentId, req.body);
            if (!objDocumentOpportunity) {
                util.setError(404, `Cannot find documentOpportunity with the id: ${id}`);
            } else {
                util.setSuccess(200, 'DocumentOpportunity updated', objDocumentOpportunity);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentsOpportunitiesCtrl.updateDocumentOpportunityByOpportunityId = async (req, res) => {
     const { opportunityId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objDocumentOpportunity = await documentOpportunityService.updateDocumentOpportunityByOpportunityId(opportunityId, req.body);
            if (!objDocumentOpportunity) {
                util.setError(404, `Cannot find documentOpportunity with the id: ${id}`);
            } else {
                util.setSuccess(200, 'DocumentOpportunity updated', objDocumentOpportunity);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentsOpportunitiesCtrl.updateDocumentOpportunityByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objDocumentOpportunity = await documentOpportunityService.updateDocumentOpportunityByDateModified(dateModified, req.body);
            if (!objDocumentOpportunity) {
                util.setError(404, `Cannot find documentOpportunity with the id: ${id}`);
            } else {
                util.setSuccess(200, 'DocumentOpportunity updated', objDocumentOpportunity);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = documentsOpportunitiesCtrl;
//</es-section>
