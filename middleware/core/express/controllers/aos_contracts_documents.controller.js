/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:20 GMT-0400 (Bolivia Time)
 * Time: 15:35:20
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:20 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:20
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const aoContractDocumentService = require('../services/aos_contracts_documents.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aosContractsDocumentsCtrl = {};
aosContractsDocumentsCtrl.service = aoContractDocumentService;


aosContractsDocumentsCtrl.getAllAosContractsDocuments = async (req, res) => {
    try {
        const objAosContractsDocuments = await aoContractDocumentService.getAllAosContractsDocuments(req.query);
        if (objAosContractsDocuments.length > 0) {
            util.setSuccess(200, 'AosContractsDocuments retrieved', objAosContractsDocuments);
        } else {
            util.setSuccess(200, 'No aoContractDocument found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsDocumentsCtrl.getAAoContractDocument = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objAoContractDocument = await aoContractDocumentService.getAAoContractDocument(id, req.query);
        if (!objAoContractDocument) {
            util.setError(404, `Cannot find aoContractDocument with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aoContractDocument', objAoContractDocument);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsDocumentsCtrl.addAoContractDocument = async (req, res) => {
    try {
        const objAoContractDocument = await aoContractDocumentService.addAoContractDocument(req.body);
        util.setSuccess(201, 'AoContractDocument Added!', objAoContractDocument);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsDocumentsCtrl.updateAoContractDocument = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objAoContractDocument = await aoContractDocumentService.updateAoContractDocument(id, req.body);
        if (!objAoContractDocument) {
            util.setError(404, `Cannot find aoContractDocument with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AoContractDocument updated', objAoContractDocument);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aosContractsDocumentsCtrl.deleteAoContractDocument = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objAoContractDocument = await aoContractDocumentService.deleteAoContractDocument(id);
        if (objAoContractDocument) {
            util.setSuccess(200, 'AoContractDocument deleted', objAoContractDocument);
        } else {
            util.setError(404, `AoContractDocument with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aosContractsDocumentsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAoContractDocument = await aoContractDocumentService.findOneById(id, req.query);
        if (!objAoContractDocument) {
            util.setError(404, `Cannot find aoContractDocument with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContractDocument', objAoContractDocument);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsDocumentsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAoContractDocument = await aoContractDocumentService.findOneByDeleted(deleted, req.query);
        if (!objAoContractDocument) {
            util.setError(404, `Cannot find aoContractDocument with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContractDocument', objAoContractDocument);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsDocumentsCtrl.findOneByAosContractsId = async (req, res) => {
    try {
        const { aosContractsId } = req.params;
        const objAoContractDocument = await aoContractDocumentService.findOneByAosContractsId(aosContractsId, req.query);
        if (!objAoContractDocument) {
            util.setError(404, `Cannot find aoContractDocument with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContractDocument', objAoContractDocument);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsDocumentsCtrl.findOneByDocumentsId = async (req, res) => {
    try {
        const { documentsId } = req.params;
        const objAoContractDocument = await aoContractDocumentService.findOneByDocumentsId(documentsId, req.query);
        if (!objAoContractDocument) {
            util.setError(404, `Cannot find aoContractDocument with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContractDocument', objAoContractDocument);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsDocumentsCtrl.findOneByDocumentRevisionId = async (req, res) => {
    try {
        const { documentRevisionId } = req.params;
        const objAoContractDocument = await aoContractDocumentService.findOneByDocumentRevisionId(documentRevisionId, req.query);
        if (!objAoContractDocument) {
            util.setError(404, `Cannot find aoContractDocument with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContractDocument', objAoContractDocument);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsDocumentsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAoContractDocument = await aoContractDocumentService.findOneByDateModified(dateModified, req.query);
        if (!objAoContractDocument) {
            util.setError(404, `Cannot find aoContractDocument with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContractDocument', objAoContractDocument);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aosContractsDocumentsCtrl.updateAoContractDocumentById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAoContractDocument = await aoContractDocumentService.updateAoContractDocumentById(id, req.body);
            if (!objAoContractDocument) {
                util.setError(404, `Cannot find aoContractDocument with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContractDocument updated', objAoContractDocument);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsDocumentsCtrl.updateAoContractDocumentByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAoContractDocument = await aoContractDocumentService.updateAoContractDocumentByDeleted(deleted, req.body);
            if (!objAoContractDocument) {
                util.setError(404, `Cannot find aoContractDocument with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContractDocument updated', objAoContractDocument);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsDocumentsCtrl.updateAoContractDocumentByAosContractsId = async (req, res) => {
     const { aosContractsId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAoContractDocument = await aoContractDocumentService.updateAoContractDocumentByAosContractsId(aosContractsId, req.body);
            if (!objAoContractDocument) {
                util.setError(404, `Cannot find aoContractDocument with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContractDocument updated', objAoContractDocument);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsDocumentsCtrl.updateAoContractDocumentByDocumentsId = async (req, res) => {
     const { documentsId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAoContractDocument = await aoContractDocumentService.updateAoContractDocumentByDocumentsId(documentsId, req.body);
            if (!objAoContractDocument) {
                util.setError(404, `Cannot find aoContractDocument with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContractDocument updated', objAoContractDocument);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsDocumentsCtrl.updateAoContractDocumentByDocumentRevisionId = async (req, res) => {
     const { documentRevisionId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAoContractDocument = await aoContractDocumentService.updateAoContractDocumentByDocumentRevisionId(documentRevisionId, req.body);
            if (!objAoContractDocument) {
                util.setError(404, `Cannot find aoContractDocument with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContractDocument updated', objAoContractDocument);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsDocumentsCtrl.updateAoContractDocumentByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAoContractDocument = await aoContractDocumentService.updateAoContractDocumentByDateModified(dateModified, req.body);
            if (!objAoContractDocument) {
                util.setError(404, `Cannot find aoContractDocument with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContractDocument updated', objAoContractDocument);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aosContractsDocumentsCtrl;
//</es-section>
