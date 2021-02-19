/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:36:55 GMT-0400 (Bolivia Time)
 * Time: 18:36:55
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:36:55 GMT-0400 (Bolivia Time)
 * Last time updated: 18:36:55
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const documentBugService = require('../services/documents_bugs.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const documentsBugsCtrl = {};
documentsBugsCtrl.service = documentBugService;


documentsBugsCtrl.getAllDocumentsBugs = async (req, res) => {
    try {
        const objDocumentsBugs = await documentBugService.getAllDocumentsBugs(req.query);
        if (objDocumentsBugs.length > 0) {
            util.setSuccess(200, 'DocumentsBugs retrieved', objDocumentsBugs);
        } else {
            util.setSuccess(200, 'No documentBug found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsBugsCtrl.getADocumentBug = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objDocumentBug = await documentBugService.getADocumentBug(id, req.query);
        if (!objDocumentBug) {
            util.setError(404, `Cannot find documentBug with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found documentBug', objDocumentBug);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsBugsCtrl.addDocumentBug = async (req, res) => {
    try {
        const objDocumentBug = await documentBugService.addDocumentBug(req.body);
        util.setSuccess(201, 'DocumentBug Added!', objDocumentBug);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsBugsCtrl.updateDocumentBug = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objDocumentBug = await documentBugService.updateDocumentBug(id, req.body);
        if (!objDocumentBug) {
            util.setError(404, `Cannot find documentBug with the id: ${id}`);
        } else {
            util.setSuccess(200, 'DocumentBug updated', objDocumentBug);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

documentsBugsCtrl.deleteDocumentBug = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objDocumentBug = await documentBugService.deleteDocumentBug(id);
        if (objDocumentBug) {
            util.setSuccess(200, 'DocumentBug deleted', objDocumentBug);
        } else {
            util.setError(404, `DocumentBug with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



documentsBugsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objDocumentBug = await documentBugService.findOneById(id, req.query);
        if (!objDocumentBug) {
            util.setError(404, `Cannot find documentBug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found documentBug', objDocumentBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsBugsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objDocumentBug = await documentBugService.findOneByDeleted(deleted, req.query);
        if (!objDocumentBug) {
            util.setError(404, `Cannot find documentBug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found documentBug', objDocumentBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsBugsCtrl.findOneByDocumentId = async (req, res) => {
    try {
        const { documentId } = req.params;
        const objDocumentBug = await documentBugService.findOneByDocumentId(documentId, req.query);
        if (!objDocumentBug) {
            util.setError(404, `Cannot find documentBug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found documentBug', objDocumentBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsBugsCtrl.findOneByBugId = async (req, res) => {
    try {
        const { bugId } = req.params;
        const objDocumentBug = await documentBugService.findOneByBugId(bugId, req.query);
        if (!objDocumentBug) {
            util.setError(404, `Cannot find documentBug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found documentBug', objDocumentBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsBugsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objDocumentBug = await documentBugService.findOneByDateModified(dateModified, req.query);
        if (!objDocumentBug) {
            util.setError(404, `Cannot find documentBug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found documentBug', objDocumentBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



documentsBugsCtrl.updateDocumentBugById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objDocumentBug = await documentBugService.updateDocumentBugById(id, req.body);
            if (!objDocumentBug) {
                util.setError(404, `Cannot find documentBug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'DocumentBug updated', objDocumentBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentsBugsCtrl.updateDocumentBugByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objDocumentBug = await documentBugService.updateDocumentBugByDeleted(deleted, req.body);
            if (!objDocumentBug) {
                util.setError(404, `Cannot find documentBug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'DocumentBug updated', objDocumentBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentsBugsCtrl.updateDocumentBugByDocumentId = async (req, res) => {
     const { documentId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objDocumentBug = await documentBugService.updateDocumentBugByDocumentId(documentId, req.body);
            if (!objDocumentBug) {
                util.setError(404, `Cannot find documentBug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'DocumentBug updated', objDocumentBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentsBugsCtrl.updateDocumentBugByBugId = async (req, res) => {
     const { bugId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objDocumentBug = await documentBugService.updateDocumentBugByBugId(bugId, req.body);
            if (!objDocumentBug) {
                util.setError(404, `Cannot find documentBug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'DocumentBug updated', objDocumentBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentsBugsCtrl.updateDocumentBugByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objDocumentBug = await documentBugService.updateDocumentBugByDateModified(dateModified, req.body);
            if (!objDocumentBug) {
                util.setError(404, `Cannot find documentBug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'DocumentBug updated', objDocumentBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = documentsBugsCtrl;
//</es-section>
