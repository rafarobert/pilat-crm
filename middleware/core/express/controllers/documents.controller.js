/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:42:50 GMT-0400 (Bolivia Time)
 * Time: 4:42:50
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:42:50 GMT-0400 (Bolivia Time)
 * Last time updated: 4:42:50
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const documentService = require('../services/documents.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const documentsCtrl = {};
documentsCtrl.service = documentService;


documentsCtrl.getAllDocuments = async (req, res) => {
    try {
        const objDocuments = await documentService.getAllDocuments(req.query);
        if (objDocuments.length > 0) {
            util.setSuccess(200, 'Documents retrieved', objDocuments);
        } else {
            util.setSuccess(200, 'No document found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsCtrl.getADocument = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objDocument = await documentService.getADocument(id, req.query);
        if (!objDocument) {
            util.setError(404, `Cannot find document with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found document', objDocument);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsCtrl.addDocument = async (req, res) => {
    try {
        const objDocument = await documentService.addDocument(req.body);
        util.setSuccess(201, 'Document Added!', objDocument);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsCtrl.updateDocument = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objDocument = await documentService.updateDocument(id, req.body);
        if (!objDocument) {
            util.setError(404, `Cannot find document with the id: ${id}`);
        } else {
            util.setSuccess(200, 'Document updated', objDocument);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

documentsCtrl.deleteDocument = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objDocument = await documentService.deleteDocument(id);
        if (objDocument) {
            util.setSuccess(200, 'Document deleted', objDocument);
        } else {
            util.setError(404, `Document with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



documentsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objDocument = await documentService.findOneById(id, req.query);
        if (!objDocument) {
            util.setError(404, `Cannot find document with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found document', objDocument);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objDocument = await documentService.findOneByDeleted(deleted, req.query);
        if (!objDocument) {
            util.setError(404, `Cannot find document with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found document', objDocument);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsCtrl.findOneByIsTemplate = async (req, res) => {
    try {
        const { isTemplate } = req.params;
        const objDocument = await documentService.findOneByIsTemplate(isTemplate, req.query);
        if (!objDocument) {
            util.setError(404, `Cannot find document with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found document', objDocument);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsCtrl.findOneByDocumentName = async (req, res) => {
    try {
        const { documentName } = req.params;
        const objDocument = await documentService.findOneByDocumentName(documentName, req.query);
        if (!objDocument) {
            util.setError(404, `Cannot find document with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found document', objDocument);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsCtrl.findOneByDocId = async (req, res) => {
    try {
        const { docId } = req.params;
        const objDocument = await documentService.findOneByDocId(docId, req.query);
        if (!objDocument) {
            util.setError(404, `Cannot find document with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found document', objDocument);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsCtrl.findOneByDocType = async (req, res) => {
    try {
        const { docType } = req.params;
        const objDocument = await documentService.findOneByDocType(docType, req.query);
        if (!objDocument) {
            util.setError(404, `Cannot find document with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found document', objDocument);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsCtrl.findOneByDocUrl = async (req, res) => {
    try {
        const { docUrl } = req.params;
        const objDocument = await documentService.findOneByDocUrl(docUrl, req.query);
        if (!objDocument) {
            util.setError(404, `Cannot find document with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found document', objDocument);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsCtrl.findOneByCategoryId = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const objDocument = await documentService.findOneByCategoryId(categoryId, req.query);
        if (!objDocument) {
            util.setError(404, `Cannot find document with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found document', objDocument);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsCtrl.findOneBySubcategoryId = async (req, res) => {
    try {
        const { subcategoryId } = req.params;
        const objDocument = await documentService.findOneBySubcategoryId(subcategoryId, req.query);
        if (!objDocument) {
            util.setError(404, `Cannot find document with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found document', objDocument);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsCtrl.findOneByStatusId = async (req, res) => {
    try {
        const { statusId } = req.params;
        const objDocument = await documentService.findOneByStatusId(statusId, req.query);
        if (!objDocument) {
            util.setError(404, `Cannot find document with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found document', objDocument);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsCtrl.findOneByDocumentRevisionId = async (req, res) => {
    try {
        const { documentRevisionId } = req.params;
        const objDocument = await documentService.findOneByDocumentRevisionId(documentRevisionId, req.query);
        if (!objDocument) {
            util.setError(404, `Cannot find document with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found document', objDocument);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsCtrl.findOneByTemplateType = async (req, res) => {
    try {
        const { templateType } = req.params;
        const objDocument = await documentService.findOneByTemplateType(templateType, req.query);
        if (!objDocument) {
            util.setError(404, `Cannot find document with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found document', objDocument);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objDocument = await documentService.findOneByDescription(description, req.query);
        if (!objDocument) {
            util.setError(404, `Cannot find document with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found document', objDocument);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objDocument = await documentService.findOneByDateEntered(dateEntered, req.query);
        if (!objDocument) {
            util.setError(404, `Cannot find document with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found document', objDocument);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objDocument = await documentService.findOneByDateModified(dateModified, req.query);
        if (!objDocument) {
            util.setError(404, `Cannot find document with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found document', objDocument);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsCtrl.findOneByActiveDate = async (req, res) => {
    try {
        const { activeDate } = req.params;
        const objDocument = await documentService.findOneByActiveDate(activeDate, req.query);
        if (!objDocument) {
            util.setError(404, `Cannot find document with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found document', objDocument);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsCtrl.findOneByExpDate = async (req, res) => {
    try {
        const { expDate } = req.params;
        const objDocument = await documentService.findOneByExpDate(expDate, req.query);
        if (!objDocument) {
            util.setError(404, `Cannot find document with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found document', objDocument);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objDocument = await documentService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objDocument) {
            util.setError(404, `Cannot find document with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found document', objDocument);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objDocument = await documentService.findOneByCreatedBy(createdBy, req.query);
        if (!objDocument) {
            util.setError(404, `Cannot find document with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found document', objDocument);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objDocument = await documentService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objDocument) {
            util.setError(404, `Cannot find document with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found document', objDocument);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsCtrl.findOneByRelatedDocId = async (req, res) => {
    try {
        const { relatedDocId } = req.params;
        const objDocument = await documentService.findOneByRelatedDocId(relatedDocId, req.query);
        if (!objDocument) {
            util.setError(404, `Cannot find document with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found document', objDocument);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsCtrl.findOneByRelatedDocRevId = async (req, res) => {
    try {
        const { relatedDocRevId } = req.params;
        const objDocument = await documentService.findOneByRelatedDocRevId(relatedDocRevId, req.query);
        if (!objDocument) {
            util.setError(404, `Cannot find document with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found document', objDocument);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



documentsCtrl.updateDocumentById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objDocument = await documentService.updateDocumentById(id, req.body);
            if (!objDocument) {
                util.setError(404, `Cannot find document with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Document updated', objDocument);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentsCtrl.updateDocumentByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objDocument = await documentService.updateDocumentByDeleted(deleted, req.body);
            if (!objDocument) {
                util.setError(404, `Cannot find document with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Document updated', objDocument);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentsCtrl.updateDocumentByIsTemplate = async (req, res) => {
     const { isTemplate } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objDocument = await documentService.updateDocumentByIsTemplate(isTemplate, req.body);
            if (!objDocument) {
                util.setError(404, `Cannot find document with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Document updated', objDocument);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentsCtrl.updateDocumentByDocumentName = async (req, res) => {
     const { documentName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objDocument = await documentService.updateDocumentByDocumentName(documentName, req.body);
            if (!objDocument) {
                util.setError(404, `Cannot find document with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Document updated', objDocument);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentsCtrl.updateDocumentByDocId = async (req, res) => {
     const { docId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objDocument = await documentService.updateDocumentByDocId(docId, req.body);
            if (!objDocument) {
                util.setError(404, `Cannot find document with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Document updated', objDocument);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentsCtrl.updateDocumentByDocType = async (req, res) => {
     const { docType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objDocument = await documentService.updateDocumentByDocType(docType, req.body);
            if (!objDocument) {
                util.setError(404, `Cannot find document with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Document updated', objDocument);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentsCtrl.updateDocumentByDocUrl = async (req, res) => {
     const { docUrl } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objDocument = await documentService.updateDocumentByDocUrl(docUrl, req.body);
            if (!objDocument) {
                util.setError(404, `Cannot find document with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Document updated', objDocument);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentsCtrl.updateDocumentByCategoryId = async (req, res) => {
     const { categoryId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objDocument = await documentService.updateDocumentByCategoryId(categoryId, req.body);
            if (!objDocument) {
                util.setError(404, `Cannot find document with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Document updated', objDocument);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentsCtrl.updateDocumentBySubcategoryId = async (req, res) => {
     const { subcategoryId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objDocument = await documentService.updateDocumentBySubcategoryId(subcategoryId, req.body);
            if (!objDocument) {
                util.setError(404, `Cannot find document with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Document updated', objDocument);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentsCtrl.updateDocumentByStatusId = async (req, res) => {
     const { statusId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objDocument = await documentService.updateDocumentByStatusId(statusId, req.body);
            if (!objDocument) {
                util.setError(404, `Cannot find document with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Document updated', objDocument);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentsCtrl.updateDocumentByDocumentRevisionId = async (req, res) => {
     const { documentRevisionId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objDocument = await documentService.updateDocumentByDocumentRevisionId(documentRevisionId, req.body);
            if (!objDocument) {
                util.setError(404, `Cannot find document with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Document updated', objDocument);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentsCtrl.updateDocumentByTemplateType = async (req, res) => {
     const { templateType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objDocument = await documentService.updateDocumentByTemplateType(templateType, req.body);
            if (!objDocument) {
                util.setError(404, `Cannot find document with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Document updated', objDocument);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentsCtrl.updateDocumentByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objDocument = await documentService.updateDocumentByDescription(description, req.body);
            if (!objDocument) {
                util.setError(404, `Cannot find document with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Document updated', objDocument);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentsCtrl.updateDocumentByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objDocument = await documentService.updateDocumentByDateEntered(dateEntered, req.body);
            if (!objDocument) {
                util.setError(404, `Cannot find document with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Document updated', objDocument);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentsCtrl.updateDocumentByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objDocument = await documentService.updateDocumentByDateModified(dateModified, req.body);
            if (!objDocument) {
                util.setError(404, `Cannot find document with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Document updated', objDocument);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentsCtrl.updateDocumentByActiveDate = async (req, res) => {
     const { activeDate } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objDocument = await documentService.updateDocumentByActiveDate(activeDate, req.body);
            if (!objDocument) {
                util.setError(404, `Cannot find document with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Document updated', objDocument);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentsCtrl.updateDocumentByExpDate = async (req, res) => {
     const { expDate } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objDocument = await documentService.updateDocumentByExpDate(expDate, req.body);
            if (!objDocument) {
                util.setError(404, `Cannot find document with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Document updated', objDocument);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentsCtrl.updateDocumentByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objDocument = await documentService.updateDocumentByModifiedUserId(modifiedUserId, req.body);
            if (!objDocument) {
                util.setError(404, `Cannot find document with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Document updated', objDocument);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentsCtrl.updateDocumentByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objDocument = await documentService.updateDocumentByCreatedBy(createdBy, req.body);
            if (!objDocument) {
                util.setError(404, `Cannot find document with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Document updated', objDocument);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentsCtrl.updateDocumentByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objDocument = await documentService.updateDocumentByAssignedUserId(assignedUserId, req.body);
            if (!objDocument) {
                util.setError(404, `Cannot find document with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Document updated', objDocument);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentsCtrl.updateDocumentByRelatedDocId = async (req, res) => {
     const { relatedDocId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objDocument = await documentService.updateDocumentByRelatedDocId(relatedDocId, req.body);
            if (!objDocument) {
                util.setError(404, `Cannot find document with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Document updated', objDocument);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentsCtrl.updateDocumentByRelatedDocRevId = async (req, res) => {
     const { relatedDocRevId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objDocument = await documentService.updateDocumentByRelatedDocRevId(relatedDocRevId, req.body);
            if (!objDocument) {
                util.setError(404, `Cannot find document with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Document updated', objDocument);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = documentsCtrl;
//</es-section>
