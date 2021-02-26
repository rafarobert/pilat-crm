/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:38 GMT-0400 (Bolivia Time)
 * Time: 0:22:38
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:38 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:38
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const caseBugService = require('../services/cases_bugs.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const casesBugsCtrl = {};
casesBugsCtrl.service = caseBugService;


casesBugsCtrl.getAllCasesBugs = async (req, res) => {
    try {
        const objCasesBugs = await caseBugService.getAllCasesBugs(req.query);
        if (objCasesBugs.length > 0) {
            util.setSuccess(200, 'CasesBugs retrieved', objCasesBugs);
        } else {
            util.setSuccess(200, 'No caseBug found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesBugsCtrl.getACaseBug = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objCaseBug = await caseBugService.getACaseBug(id, req.query);
        if (!objCaseBug) {
            util.setError(404, `Cannot find caseBug with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found caseBug', objCaseBug);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesBugsCtrl.addCaseBug = async (req, res) => {
    try {
        const objCaseBug = await caseBugService.addCaseBug(req.body);
        util.setSuccess(201, 'CaseBug Added!', objCaseBug);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesBugsCtrl.updateCaseBug = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objCaseBug = await caseBugService.updateCaseBug(id, req.body);
        if (!objCaseBug) {
            util.setError(404, `Cannot find caseBug with the id: ${id}`);
        } else {
            util.setSuccess(200, 'CaseBug updated', objCaseBug);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

casesBugsCtrl.deleteCaseBug = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objCaseBug = await caseBugService.deleteCaseBug(id);
        if (objCaseBug) {
            util.setSuccess(200, 'CaseBug deleted', objCaseBug);
        } else {
            util.setError(404, `CaseBug with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



casesBugsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objCaseBug = await caseBugService.findOneById(id, req.query);
        if (!objCaseBug) {
            util.setError(404, `Cannot find caseBug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found caseBug', objCaseBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesBugsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objCaseBug = await caseBugService.findOneByDeleted(deleted, req.query);
        if (!objCaseBug) {
            util.setError(404, `Cannot find caseBug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found caseBug', objCaseBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesBugsCtrl.findOneByCaseId = async (req, res) => {
    try {
        const { caseId } = req.params;
        const objCaseBug = await caseBugService.findOneByCaseId(caseId, req.query);
        if (!objCaseBug) {
            util.setError(404, `Cannot find caseBug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found caseBug', objCaseBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesBugsCtrl.findOneByBugId = async (req, res) => {
    try {
        const { bugId } = req.params;
        const objCaseBug = await caseBugService.findOneByBugId(bugId, req.query);
        if (!objCaseBug) {
            util.setError(404, `Cannot find caseBug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found caseBug', objCaseBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesBugsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objCaseBug = await caseBugService.findOneByDateModified(dateModified, req.query);
        if (!objCaseBug) {
            util.setError(404, `Cannot find caseBug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found caseBug', objCaseBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



casesBugsCtrl.updateCaseBugById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objCaseBug = await caseBugService.updateCaseBugById(id, req.body);
            if (!objCaseBug) {
                util.setError(404, `Cannot find caseBug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CaseBug updated', objCaseBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

casesBugsCtrl.updateCaseBugByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objCaseBug = await caseBugService.updateCaseBugByDeleted(deleted, req.body);
            if (!objCaseBug) {
                util.setError(404, `Cannot find caseBug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CaseBug updated', objCaseBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

casesBugsCtrl.updateCaseBugByCaseId = async (req, res) => {
     const { caseId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objCaseBug = await caseBugService.updateCaseBugByCaseId(caseId, req.body);
            if (!objCaseBug) {
                util.setError(404, `Cannot find caseBug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CaseBug updated', objCaseBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

casesBugsCtrl.updateCaseBugByBugId = async (req, res) => {
     const { bugId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objCaseBug = await caseBugService.updateCaseBugByBugId(bugId, req.body);
            if (!objCaseBug) {
                util.setError(404, `Cannot find caseBug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CaseBug updated', objCaseBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

casesBugsCtrl.updateCaseBugByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objCaseBug = await caseBugService.updateCaseBugByDateModified(dateModified, req.body);
            if (!objCaseBug) {
                util.setError(404, `Cannot find caseBug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CaseBug updated', objCaseBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = casesBugsCtrl;
//</es-section>
