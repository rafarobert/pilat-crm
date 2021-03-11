/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:14 GMT-0400 (Bolivia Time)
 * Time: 14:57:14
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:14 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:14
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const linkedDocumentService = require('../services/linked_documents.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const linkedDocumentsCtrl = {};
linkedDocumentsCtrl.service = linkedDocumentService;


linkedDocumentsCtrl.getAllLinkedDocuments = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.linkedDocuments.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objLinkedDocuments = await linkedDocumentService.getAllLinkedDocuments(req.query);
        if (objLinkedDocuments && objLinkedDocuments.rows && objLinkedDocuments.count) {
            util.setSuccess(200, 'LinkedDocuments retrieved', objLinkedDocuments.rows, objLinkedDocuments.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No linkedDocument found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

linkedDocumentsCtrl.getALinkedDocument = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objLinkedDocument = await linkedDocumentService.getALinkedDocument(id, req.query);
        if (!objLinkedDocument) {
            util.setError(404, `Cannot find linkedDocument with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found linkedDocument', objLinkedDocument);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

linkedDocumentsCtrl.addLinkedDocument = async (req, res) => {
    try {
        const objLinkedDocument = await linkedDocumentService.addLinkedDocument(req.body);
        util.setSuccess(201, 'LinkedDocument Added!', objLinkedDocument);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

linkedDocumentsCtrl.updateLinkedDocument = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objLinkedDocument = await linkedDocumentService.updateLinkedDocument(id, req.body);
        if (!objLinkedDocument) {
            util.setError(404, `Cannot find linkedDocument with the id: ${id}`);
        } else {
            util.setSuccess(200, 'LinkedDocument updated', objLinkedDocument);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

linkedDocumentsCtrl.deleteLinkedDocument = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objLinkedDocument = await linkedDocumentService.deleteLinkedDocument(id);
        if (objLinkedDocument) {
            util.setSuccess(200, 'LinkedDocument deleted', objLinkedDocument);
        } else {
            util.setError(404, `LinkedDocument with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



linkedDocumentsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objLinkedDocument = await linkedDocumentService.findOneById(id, req.query);
        if (!objLinkedDocument) {
            util.setError(404, `Cannot find linkedDocument with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found linkedDocument', objLinkedDocument);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

linkedDocumentsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objLinkedDocument = await linkedDocumentService.findOneByDeleted(deleted, req.query);
        if (!objLinkedDocument) {
            util.setError(404, `Cannot find linkedDocument with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found linkedDocument', objLinkedDocument);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

linkedDocumentsCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objLinkedDocument = await linkedDocumentService.findOneByParentId(parentId, req.query);
        if (!objLinkedDocument) {
            util.setError(404, `Cannot find linkedDocument with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found linkedDocument', objLinkedDocument);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

linkedDocumentsCtrl.findOneByParentType = async (req, res) => {
    try {
        const { parentType } = req.params;
        const objLinkedDocument = await linkedDocumentService.findOneByParentType(parentType, req.query);
        if (!objLinkedDocument) {
            util.setError(404, `Cannot find linkedDocument with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found linkedDocument', objLinkedDocument);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

linkedDocumentsCtrl.findOneByDocumentId = async (req, res) => {
    try {
        const { documentId } = req.params;
        const objLinkedDocument = await linkedDocumentService.findOneByDocumentId(documentId, req.query);
        if (!objLinkedDocument) {
            util.setError(404, `Cannot find linkedDocument with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found linkedDocument', objLinkedDocument);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

linkedDocumentsCtrl.findOneByDocumentRevisionId = async (req, res) => {
    try {
        const { documentRevisionId } = req.params;
        const objLinkedDocument = await linkedDocumentService.findOneByDocumentRevisionId(documentRevisionId, req.query);
        if (!objLinkedDocument) {
            util.setError(404, `Cannot find linkedDocument with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found linkedDocument', objLinkedDocument);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

linkedDocumentsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objLinkedDocument = await linkedDocumentService.findOneByDateModified(dateModified, req.query);
        if (!objLinkedDocument) {
            util.setError(404, `Cannot find linkedDocument with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found linkedDocument', objLinkedDocument);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



linkedDocumentsCtrl.updateLinkedDocumentById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objLinkedDocument = await linkedDocumentService.updateLinkedDocumentById(id, req.body);
            if (!objLinkedDocument) {
                util.setError(404, `Cannot find linkedDocument with the id: ${id}`);
            } else {
                util.setSuccess(200, 'LinkedDocument updated', objLinkedDocument);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

linkedDocumentsCtrl.updateLinkedDocumentByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objLinkedDocument = await linkedDocumentService.updateLinkedDocumentByDeleted(deleted, req.body);
            if (!objLinkedDocument) {
                util.setError(404, `Cannot find linkedDocument with the id: ${id}`);
            } else {
                util.setSuccess(200, 'LinkedDocument updated', objLinkedDocument);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

linkedDocumentsCtrl.updateLinkedDocumentByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objLinkedDocument = await linkedDocumentService.updateLinkedDocumentByParentId(parentId, req.body);
            if (!objLinkedDocument) {
                util.setError(404, `Cannot find linkedDocument with the id: ${id}`);
            } else {
                util.setSuccess(200, 'LinkedDocument updated', objLinkedDocument);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

linkedDocumentsCtrl.updateLinkedDocumentByParentType = async (req, res) => {
     const { parentType } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objLinkedDocument = await linkedDocumentService.updateLinkedDocumentByParentType(parentType, req.body);
            if (!objLinkedDocument) {
                util.setError(404, `Cannot find linkedDocument with the id: ${id}`);
            } else {
                util.setSuccess(200, 'LinkedDocument updated', objLinkedDocument);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

linkedDocumentsCtrl.updateLinkedDocumentByDocumentId = async (req, res) => {
     const { documentId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objLinkedDocument = await linkedDocumentService.updateLinkedDocumentByDocumentId(documentId, req.body);
            if (!objLinkedDocument) {
                util.setError(404, `Cannot find linkedDocument with the id: ${id}`);
            } else {
                util.setSuccess(200, 'LinkedDocument updated', objLinkedDocument);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

linkedDocumentsCtrl.updateLinkedDocumentByDocumentRevisionId = async (req, res) => {
     const { documentRevisionId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objLinkedDocument = await linkedDocumentService.updateLinkedDocumentByDocumentRevisionId(documentRevisionId, req.body);
            if (!objLinkedDocument) {
                util.setError(404, `Cannot find linkedDocument with the id: ${id}`);
            } else {
                util.setSuccess(200, 'LinkedDocument updated', objLinkedDocument);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

linkedDocumentsCtrl.updateLinkedDocumentByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objLinkedDocument = await linkedDocumentService.updateLinkedDocumentByDateModified(dateModified, req.body);
            if (!objLinkedDocument) {
                util.setError(404, `Cannot find linkedDocument with the id: ${id}`);
            } else {
                util.setSuccess(200, 'LinkedDocument updated', objLinkedDocument);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = linkedDocumentsCtrl;
//</es-section>
