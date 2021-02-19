/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:36:56 GMT-0400 (Bolivia Time)
 * Time: 18:36:56
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:36:56 GMT-0400 (Bolivia Time)
 * Last time updated: 18:36:56
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const documentCaseService = require('../services/documents_cases.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const documentsCasesCtrl = {};
documentsCasesCtrl.service = documentCaseService;


documentsCasesCtrl.getAllDocumentsCases = async (req, res) => {
    try {
        const objDocumentsCases = await documentCaseService.getAllDocumentsCases(req.query);
        if (objDocumentsCases.length > 0) {
            util.setSuccess(200, 'DocumentsCases retrieved', objDocumentsCases);
        } else {
            util.setSuccess(200, 'No documentCase found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsCasesCtrl.getADocumentCase = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objDocumentCase = await documentCaseService.getADocumentCase(id, req.query);
        if (!objDocumentCase) {
            util.setError(404, `Cannot find documentCase with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found documentCase', objDocumentCase);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsCasesCtrl.addDocumentCase = async (req, res) => {
    try {
        const objDocumentCase = await documentCaseService.addDocumentCase(req.body);
        util.setSuccess(201, 'DocumentCase Added!', objDocumentCase);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsCasesCtrl.updateDocumentCase = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objDocumentCase = await documentCaseService.updateDocumentCase(id, req.body);
        if (!objDocumentCase) {
            util.setError(404, `Cannot find documentCase with the id: ${id}`);
        } else {
            util.setSuccess(200, 'DocumentCase updated', objDocumentCase);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

documentsCasesCtrl.deleteDocumentCase = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objDocumentCase = await documentCaseService.deleteDocumentCase(id);
        if (objDocumentCase) {
            util.setSuccess(200, 'DocumentCase deleted', objDocumentCase);
        } else {
            util.setError(404, `DocumentCase with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



documentsCasesCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objDocumentCase = await documentCaseService.findOneById(id, req.query);
        if (!objDocumentCase) {
            util.setError(404, `Cannot find documentCase with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found documentCase', objDocumentCase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsCasesCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objDocumentCase = await documentCaseService.findOneByDeleted(deleted, req.query);
        if (!objDocumentCase) {
            util.setError(404, `Cannot find documentCase with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found documentCase', objDocumentCase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsCasesCtrl.findOneByDocumentId = async (req, res) => {
    try {
        const { documentId } = req.params;
        const objDocumentCase = await documentCaseService.findOneByDocumentId(documentId, req.query);
        if (!objDocumentCase) {
            util.setError(404, `Cannot find documentCase with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found documentCase', objDocumentCase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsCasesCtrl.findOneByCaseId = async (req, res) => {
    try {
        const { caseId } = req.params;
        const objDocumentCase = await documentCaseService.findOneByCaseId(caseId, req.query);
        if (!objDocumentCase) {
            util.setError(404, `Cannot find documentCase with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found documentCase', objDocumentCase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsCasesCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objDocumentCase = await documentCaseService.findOneByDateModified(dateModified, req.query);
        if (!objDocumentCase) {
            util.setError(404, `Cannot find documentCase with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found documentCase', objDocumentCase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



documentsCasesCtrl.updateDocumentCaseById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objDocumentCase = await documentCaseService.updateDocumentCaseById(id, req.body);
            if (!objDocumentCase) {
                util.setError(404, `Cannot find documentCase with the id: ${id}`);
            } else {
                util.setSuccess(200, 'DocumentCase updated', objDocumentCase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentsCasesCtrl.updateDocumentCaseByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objDocumentCase = await documentCaseService.updateDocumentCaseByDeleted(deleted, req.body);
            if (!objDocumentCase) {
                util.setError(404, `Cannot find documentCase with the id: ${id}`);
            } else {
                util.setSuccess(200, 'DocumentCase updated', objDocumentCase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentsCasesCtrl.updateDocumentCaseByDocumentId = async (req, res) => {
     const { documentId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objDocumentCase = await documentCaseService.updateDocumentCaseByDocumentId(documentId, req.body);
            if (!objDocumentCase) {
                util.setError(404, `Cannot find documentCase with the id: ${id}`);
            } else {
                util.setSuccess(200, 'DocumentCase updated', objDocumentCase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentsCasesCtrl.updateDocumentCaseByCaseId = async (req, res) => {
     const { caseId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objDocumentCase = await documentCaseService.updateDocumentCaseByCaseId(caseId, req.body);
            if (!objDocumentCase) {
                util.setError(404, `Cannot find documentCase with the id: ${id}`);
            } else {
                util.setSuccess(200, 'DocumentCase updated', objDocumentCase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentsCasesCtrl.updateDocumentCaseByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objDocumentCase = await documentCaseService.updateDocumentCaseByDateModified(dateModified, req.body);
            if (!objDocumentCase) {
                util.setError(404, `Cannot find documentCase with the id: ${id}`);
            } else {
                util.setSuccess(200, 'DocumentCase updated', objDocumentCase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = documentsCasesCtrl;
//</es-section>
