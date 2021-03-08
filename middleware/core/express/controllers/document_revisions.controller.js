/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:57 GMT-0400 (Bolivia Time)
 * Time: 15:35:57
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:57 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:57
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const documentRevisionService = require('../services/document_revisions.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const documentRevisionsCtrl = {};
documentRevisionsCtrl.service = documentRevisionService;


documentRevisionsCtrl.getAllDocumentRevisions = async (req, res) => {
    try {
        const objDocumentRevisions = await documentRevisionService.getAllDocumentRevisions(req.query);
        if (objDocumentRevisions.length > 0) {
            util.setSuccess(200, 'DocumentRevisions retrieved', objDocumentRevisions);
        } else {
            util.setSuccess(200, 'No documentRevision found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentRevisionsCtrl.getADocumentRevision = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objDocumentRevision = await documentRevisionService.getADocumentRevision(id, req.query);
        if (!objDocumentRevision) {
            util.setError(404, `Cannot find documentRevision with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found documentRevision', objDocumentRevision);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentRevisionsCtrl.addDocumentRevision = async (req, res) => {
    try {
        const objDocumentRevision = await documentRevisionService.addDocumentRevision(req.body);
        util.setSuccess(201, 'DocumentRevision Added!', objDocumentRevision);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentRevisionsCtrl.updateDocumentRevision = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objDocumentRevision = await documentRevisionService.updateDocumentRevision(id, req.body);
        if (!objDocumentRevision) {
            util.setError(404, `Cannot find documentRevision with the id: ${id}`);
        } else {
            util.setSuccess(200, 'DocumentRevision updated', objDocumentRevision);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

documentRevisionsCtrl.deleteDocumentRevision = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objDocumentRevision = await documentRevisionService.deleteDocumentRevision(id);
        if (objDocumentRevision) {
            util.setSuccess(200, 'DocumentRevision deleted', objDocumentRevision);
        } else {
            util.setError(404, `DocumentRevision with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



documentRevisionsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objDocumentRevision = await documentRevisionService.findOneById(id, req.query);
        if (!objDocumentRevision) {
            util.setError(404, `Cannot find documentRevision with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found documentRevision', objDocumentRevision);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentRevisionsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objDocumentRevision = await documentRevisionService.findOneByDeleted(deleted, req.query);
        if (!objDocumentRevision) {
            util.setError(404, `Cannot find documentRevision with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found documentRevision', objDocumentRevision);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentRevisionsCtrl.findOneByChangeLog = async (req, res) => {
    try {
        const { changeLog } = req.params;
        const objDocumentRevision = await documentRevisionService.findOneByChangeLog(changeLog, req.query);
        if (!objDocumentRevision) {
            util.setError(404, `Cannot find documentRevision with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found documentRevision', objDocumentRevision);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentRevisionsCtrl.findOneByDocumentId = async (req, res) => {
    try {
        const { documentId } = req.params;
        const objDocumentRevision = await documentRevisionService.findOneByDocumentId(documentId, req.query);
        if (!objDocumentRevision) {
            util.setError(404, `Cannot find documentRevision with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found documentRevision', objDocumentRevision);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentRevisionsCtrl.findOneByDocId = async (req, res) => {
    try {
        const { docId } = req.params;
        const objDocumentRevision = await documentRevisionService.findOneByDocId(docId, req.query);
        if (!objDocumentRevision) {
            util.setError(404, `Cannot find documentRevision with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found documentRevision', objDocumentRevision);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentRevisionsCtrl.findOneByDocType = async (req, res) => {
    try {
        const { docType } = req.params;
        const objDocumentRevision = await documentRevisionService.findOneByDocType(docType, req.query);
        if (!objDocumentRevision) {
            util.setError(404, `Cannot find documentRevision with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found documentRevision', objDocumentRevision);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentRevisionsCtrl.findOneByDocUrl = async (req, res) => {
    try {
        const { docUrl } = req.params;
        const objDocumentRevision = await documentRevisionService.findOneByDocUrl(docUrl, req.query);
        if (!objDocumentRevision) {
            util.setError(404, `Cannot find documentRevision with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found documentRevision', objDocumentRevision);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentRevisionsCtrl.findOneByFilename = async (req, res) => {
    try {
        const { filename } = req.params;
        const objDocumentRevision = await documentRevisionService.findOneByFilename(filename, req.query);
        if (!objDocumentRevision) {
            util.setError(404, `Cannot find documentRevision with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found documentRevision', objDocumentRevision);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentRevisionsCtrl.findOneByFileExt = async (req, res) => {
    try {
        const { fileExt } = req.params;
        const objDocumentRevision = await documentRevisionService.findOneByFileExt(fileExt, req.query);
        if (!objDocumentRevision) {
            util.setError(404, `Cannot find documentRevision with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found documentRevision', objDocumentRevision);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentRevisionsCtrl.findOneByFileMimeType = async (req, res) => {
    try {
        const { fileMimeType } = req.params;
        const objDocumentRevision = await documentRevisionService.findOneByFileMimeType(fileMimeType, req.query);
        if (!objDocumentRevision) {
            util.setError(404, `Cannot find documentRevision with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found documentRevision', objDocumentRevision);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentRevisionsCtrl.findOneByRevision = async (req, res) => {
    try {
        const { revision } = req.params;
        const objDocumentRevision = await documentRevisionService.findOneByRevision(revision, req.query);
        if (!objDocumentRevision) {
            util.setError(404, `Cannot find documentRevision with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found documentRevision', objDocumentRevision);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentRevisionsCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objDocumentRevision = await documentRevisionService.findOneByDateEntered(dateEntered, req.query);
        if (!objDocumentRevision) {
            util.setError(404, `Cannot find documentRevision with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found documentRevision', objDocumentRevision);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentRevisionsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objDocumentRevision = await documentRevisionService.findOneByDateModified(dateModified, req.query);
        if (!objDocumentRevision) {
            util.setError(404, `Cannot find documentRevision with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found documentRevision', objDocumentRevision);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentRevisionsCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objDocumentRevision = await documentRevisionService.findOneByCreatedBy(createdBy, req.query);
        if (!objDocumentRevision) {
            util.setError(404, `Cannot find documentRevision with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found documentRevision', objDocumentRevision);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



documentRevisionsCtrl.updateDocumentRevisionById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objDocumentRevision = await documentRevisionService.updateDocumentRevisionById(id, req.body);
            if (!objDocumentRevision) {
                util.setError(404, `Cannot find documentRevision with the id: ${id}`);
            } else {
                util.setSuccess(200, 'DocumentRevision updated', objDocumentRevision);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentRevisionsCtrl.updateDocumentRevisionByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objDocumentRevision = await documentRevisionService.updateDocumentRevisionByDeleted(deleted, req.body);
            if (!objDocumentRevision) {
                util.setError(404, `Cannot find documentRevision with the id: ${id}`);
            } else {
                util.setSuccess(200, 'DocumentRevision updated', objDocumentRevision);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentRevisionsCtrl.updateDocumentRevisionByChangeLog = async (req, res) => {
     const { changeLog } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objDocumentRevision = await documentRevisionService.updateDocumentRevisionByChangeLog(changeLog, req.body);
            if (!objDocumentRevision) {
                util.setError(404, `Cannot find documentRevision with the id: ${id}`);
            } else {
                util.setSuccess(200, 'DocumentRevision updated', objDocumentRevision);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentRevisionsCtrl.updateDocumentRevisionByDocumentId = async (req, res) => {
     const { documentId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objDocumentRevision = await documentRevisionService.updateDocumentRevisionByDocumentId(documentId, req.body);
            if (!objDocumentRevision) {
                util.setError(404, `Cannot find documentRevision with the id: ${id}`);
            } else {
                util.setSuccess(200, 'DocumentRevision updated', objDocumentRevision);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentRevisionsCtrl.updateDocumentRevisionByDocId = async (req, res) => {
     const { docId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objDocumentRevision = await documentRevisionService.updateDocumentRevisionByDocId(docId, req.body);
            if (!objDocumentRevision) {
                util.setError(404, `Cannot find documentRevision with the id: ${id}`);
            } else {
                util.setSuccess(200, 'DocumentRevision updated', objDocumentRevision);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentRevisionsCtrl.updateDocumentRevisionByDocType = async (req, res) => {
     const { docType } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objDocumentRevision = await documentRevisionService.updateDocumentRevisionByDocType(docType, req.body);
            if (!objDocumentRevision) {
                util.setError(404, `Cannot find documentRevision with the id: ${id}`);
            } else {
                util.setSuccess(200, 'DocumentRevision updated', objDocumentRevision);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentRevisionsCtrl.updateDocumentRevisionByDocUrl = async (req, res) => {
     const { docUrl } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objDocumentRevision = await documentRevisionService.updateDocumentRevisionByDocUrl(docUrl, req.body);
            if (!objDocumentRevision) {
                util.setError(404, `Cannot find documentRevision with the id: ${id}`);
            } else {
                util.setSuccess(200, 'DocumentRevision updated', objDocumentRevision);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentRevisionsCtrl.updateDocumentRevisionByFilename = async (req, res) => {
     const { filename } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objDocumentRevision = await documentRevisionService.updateDocumentRevisionByFilename(filename, req.body);
            if (!objDocumentRevision) {
                util.setError(404, `Cannot find documentRevision with the id: ${id}`);
            } else {
                util.setSuccess(200, 'DocumentRevision updated', objDocumentRevision);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentRevisionsCtrl.updateDocumentRevisionByFileExt = async (req, res) => {
     const { fileExt } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objDocumentRevision = await documentRevisionService.updateDocumentRevisionByFileExt(fileExt, req.body);
            if (!objDocumentRevision) {
                util.setError(404, `Cannot find documentRevision with the id: ${id}`);
            } else {
                util.setSuccess(200, 'DocumentRevision updated', objDocumentRevision);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentRevisionsCtrl.updateDocumentRevisionByFileMimeType = async (req, res) => {
     const { fileMimeType } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objDocumentRevision = await documentRevisionService.updateDocumentRevisionByFileMimeType(fileMimeType, req.body);
            if (!objDocumentRevision) {
                util.setError(404, `Cannot find documentRevision with the id: ${id}`);
            } else {
                util.setSuccess(200, 'DocumentRevision updated', objDocumentRevision);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentRevisionsCtrl.updateDocumentRevisionByRevision = async (req, res) => {
     const { revision } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objDocumentRevision = await documentRevisionService.updateDocumentRevisionByRevision(revision, req.body);
            if (!objDocumentRevision) {
                util.setError(404, `Cannot find documentRevision with the id: ${id}`);
            } else {
                util.setSuccess(200, 'DocumentRevision updated', objDocumentRevision);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentRevisionsCtrl.updateDocumentRevisionByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objDocumentRevision = await documentRevisionService.updateDocumentRevisionByDateEntered(dateEntered, req.body);
            if (!objDocumentRevision) {
                util.setError(404, `Cannot find documentRevision with the id: ${id}`);
            } else {
                util.setSuccess(200, 'DocumentRevision updated', objDocumentRevision);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentRevisionsCtrl.updateDocumentRevisionByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objDocumentRevision = await documentRevisionService.updateDocumentRevisionByDateModified(dateModified, req.body);
            if (!objDocumentRevision) {
                util.setError(404, `Cannot find documentRevision with the id: ${id}`);
            } else {
                util.setSuccess(200, 'DocumentRevision updated', objDocumentRevision);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentRevisionsCtrl.updateDocumentRevisionByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objDocumentRevision = await documentRevisionService.updateDocumentRevisionByCreatedBy(createdBy, req.body);
            if (!objDocumentRevision) {
                util.setError(404, `Cannot find documentRevision with the id: ${id}`);
            } else {
                util.setSuccess(200, 'DocumentRevision updated', objDocumentRevision);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = documentRevisionsCtrl;
//</es-section>
