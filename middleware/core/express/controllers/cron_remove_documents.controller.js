/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:42:48 GMT-0400 (Bolivia Time)
 * Time: 4:42:48
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:42:48 GMT-0400 (Bolivia Time)
 * Last time updated: 4:42:48
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const cronRemoveDocumentService = require('../services/cron_remove_documents.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const cronRemoveDocumentsCtrl = {};
cronRemoveDocumentsCtrl.service = cronRemoveDocumentService;


cronRemoveDocumentsCtrl.getAllCronRemoveDocuments = async (req, res) => {
    try {
        const objCronRemoveDocuments = await cronRemoveDocumentService.getAllCronRemoveDocuments(req.query);
        if (objCronRemoveDocuments.length > 0) {
            util.setSuccess(200, 'CronRemoveDocuments retrieved', objCronRemoveDocuments);
        } else {
            util.setSuccess(200, 'No cronRemoveDocument found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

cronRemoveDocumentsCtrl.getACronRemoveDocument = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objCronRemoveDocument = await cronRemoveDocumentService.getACronRemoveDocument(id, req.query);
        if (!objCronRemoveDocument) {
            util.setError(404, `Cannot find cronRemoveDocument with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found cronRemoveDocument', objCronRemoveDocument);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

cronRemoveDocumentsCtrl.addCronRemoveDocument = async (req, res) => {
    try {
        const objCronRemoveDocument = await cronRemoveDocumentService.addCronRemoveDocument(req.body);
        util.setSuccess(201, 'CronRemoveDocument Added!', objCronRemoveDocument);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

cronRemoveDocumentsCtrl.updateCronRemoveDocument = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objCronRemoveDocument = await cronRemoveDocumentService.updateCronRemoveDocument(id, req.body);
        if (!objCronRemoveDocument) {
            util.setError(404, `Cannot find cronRemoveDocument with the id: ${id}`);
        } else {
            util.setSuccess(200, 'CronRemoveDocument updated', objCronRemoveDocument);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

cronRemoveDocumentsCtrl.deleteCronRemoveDocument = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objCronRemoveDocument = await cronRemoveDocumentService.deleteCronRemoveDocument(id);
        if (objCronRemoveDocument) {
            util.setSuccess(200, 'CronRemoveDocument deleted', objCronRemoveDocument);
        } else {
            util.setError(404, `CronRemoveDocument with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



cronRemoveDocumentsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objCronRemoveDocument = await cronRemoveDocumentService.findOneById(id, req.query);
        if (!objCronRemoveDocument) {
            util.setError(404, `Cannot find cronRemoveDocument with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found cronRemoveDocument', objCronRemoveDocument);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

cronRemoveDocumentsCtrl.findOneByBeanId = async (req, res) => {
    try {
        const { beanId } = req.params;
        const objCronRemoveDocument = await cronRemoveDocumentService.findOneByBeanId(beanId, req.query);
        if (!objCronRemoveDocument) {
            util.setError(404, `Cannot find cronRemoveDocument with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found cronRemoveDocument', objCronRemoveDocument);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

cronRemoveDocumentsCtrl.findOneByModule = async (req, res) => {
    try {
        const { module } = req.params;
        const objCronRemoveDocument = await cronRemoveDocumentService.findOneByModule(module, req.query);
        if (!objCronRemoveDocument) {
            util.setError(404, `Cannot find cronRemoveDocument with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found cronRemoveDocument', objCronRemoveDocument);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

cronRemoveDocumentsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objCronRemoveDocument = await cronRemoveDocumentService.findOneByDateModified(dateModified, req.query);
        if (!objCronRemoveDocument) {
            util.setError(404, `Cannot find cronRemoveDocument with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found cronRemoveDocument', objCronRemoveDocument);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



cronRemoveDocumentsCtrl.updateCronRemoveDocumentById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objCronRemoveDocument = await cronRemoveDocumentService.updateCronRemoveDocumentById(id, req.body);
            if (!objCronRemoveDocument) {
                util.setError(404, `Cannot find cronRemoveDocument with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CronRemoveDocument updated', objCronRemoveDocument);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

cronRemoveDocumentsCtrl.updateCronRemoveDocumentByBeanId = async (req, res) => {
     const { beanId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objCronRemoveDocument = await cronRemoveDocumentService.updateCronRemoveDocumentByBeanId(beanId, req.body);
            if (!objCronRemoveDocument) {
                util.setError(404, `Cannot find cronRemoveDocument with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CronRemoveDocument updated', objCronRemoveDocument);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

cronRemoveDocumentsCtrl.updateCronRemoveDocumentByModule = async (req, res) => {
     const { module } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objCronRemoveDocument = await cronRemoveDocumentService.updateCronRemoveDocumentByModule(module, req.body);
            if (!objCronRemoveDocument) {
                util.setError(404, `Cannot find cronRemoveDocument with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CronRemoveDocument updated', objCronRemoveDocument);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

cronRemoveDocumentsCtrl.updateCronRemoveDocumentByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objCronRemoveDocument = await cronRemoveDocumentService.updateCronRemoveDocumentByDateModified(dateModified, req.body);
            if (!objCronRemoveDocument) {
                util.setError(404, `Cannot find cronRemoveDocument with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CronRemoveDocument updated', objCronRemoveDocument);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = cronRemoveDocumentsCtrl;
//</es-section>
