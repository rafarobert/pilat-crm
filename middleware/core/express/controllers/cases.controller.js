/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:35 GMT-0400 (Bolivia Time)
 * Time: 14:0:35
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:35 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:35
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const caseService = require('../services/cases.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const casesCtrl = {};
casesCtrl.service = caseService;


casesCtrl.getAllCases = async (req, res) => {
    try {
        const objCases = await caseService.getAllCases(req.query);
        if (objCases.length > 0) {
            util.setSuccess(200, 'Cases retrieved', objCases);
        } else {
            util.setSuccess(200, 'No case found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesCtrl.getACase = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objCase = await caseService.getACase(id, req.query);
        if (!objCase) {
            util.setError(404, `Cannot find case with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found case', objCase);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesCtrl.addCase = async (req, res) => {
    try {
        const objCase = await caseService.addCase(req.body);
        util.setSuccess(201, 'Case Added!', objCase);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesCtrl.updateCase = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objCase = await caseService.updateCase(id, req.body);
        if (!objCase) {
            util.setError(404, `Cannot find case with the id: ${id}`);
        } else {
            util.setSuccess(200, 'Case updated', objCase);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

casesCtrl.deleteCase = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objCase = await caseService.deleteCase(id);
        if (objCase) {
            util.setSuccess(200, 'Case deleted', objCase);
        } else {
            util.setError(404, `Case with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



casesCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objCase = await caseService.findOneById(id, req.query);
        if (!objCase) {
            util.setError(404, `Cannot find case with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found case', objCase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objCase = await caseService.findOneByDeleted(deleted, req.query);
        if (!objCase) {
            util.setError(404, `Cannot find case with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found case', objCase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesCtrl.findOneByCaseNumber = async (req, res) => {
    try {
        const { caseNumber } = req.params;
        const objCase = await caseService.findOneByCaseNumber(caseNumber, req.query);
        if (!objCase) {
            util.setError(404, `Cannot find case with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found case', objCase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objCase = await caseService.findOneByName(name, req.query);
        if (!objCase) {
            util.setError(404, `Cannot find case with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found case', objCase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesCtrl.findOneByType = async (req, res) => {
    try {
        const { type } = req.params;
        const objCase = await caseService.findOneByType(type, req.query);
        if (!objCase) {
            util.setError(404, `Cannot find case with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found case', objCase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesCtrl.findOneByStatus = async (req, res) => {
    try {
        const { status } = req.params;
        const objCase = await caseService.findOneByStatus(status, req.query);
        if (!objCase) {
            util.setError(404, `Cannot find case with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found case', objCase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesCtrl.findOneByPriority = async (req, res) => {
    try {
        const { priority } = req.params;
        const objCase = await caseService.findOneByPriority(priority, req.query);
        if (!objCase) {
            util.setError(404, `Cannot find case with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found case', objCase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesCtrl.findOneByState = async (req, res) => {
    try {
        const { state } = req.params;
        const objCase = await caseService.findOneByState(state, req.query);
        if (!objCase) {
            util.setError(404, `Cannot find case with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found case', objCase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objCase = await caseService.findOneByDescription(description, req.query);
        if (!objCase) {
            util.setError(404, `Cannot find case with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found case', objCase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesCtrl.findOneByResolution = async (req, res) => {
    try {
        const { resolution } = req.params;
        const objCase = await caseService.findOneByResolution(resolution, req.query);
        if (!objCase) {
            util.setError(404, `Cannot find case with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found case', objCase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesCtrl.findOneByWorkLog = async (req, res) => {
    try {
        const { workLog } = req.params;
        const objCase = await caseService.findOneByWorkLog(workLog, req.query);
        if (!objCase) {
            util.setError(404, `Cannot find case with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found case', objCase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objCase = await caseService.findOneByDateEntered(dateEntered, req.query);
        if (!objCase) {
            util.setError(404, `Cannot find case with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found case', objCase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objCase = await caseService.findOneByDateModified(dateModified, req.query);
        if (!objCase) {
            util.setError(404, `Cannot find case with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found case', objCase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objCase = await caseService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objCase) {
            util.setError(404, `Cannot find case with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found case', objCase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objCase = await caseService.findOneByCreatedBy(createdBy, req.query);
        if (!objCase) {
            util.setError(404, `Cannot find case with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found case', objCase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objCase = await caseService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objCase) {
            util.setError(404, `Cannot find case with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found case', objCase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesCtrl.findOneByAccountId = async (req, res) => {
    try {
        const { accountId } = req.params;
        const objCase = await caseService.findOneByAccountId(accountId, req.query);
        if (!objCase) {
            util.setError(404, `Cannot find case with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found case', objCase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesCtrl.findOneByContactCreatedById = async (req, res) => {
    try {
        const { contactCreatedById } = req.params;
        const objCase = await caseService.findOneByContactCreatedById(contactCreatedById, req.query);
        if (!objCase) {
            util.setError(404, `Cannot find case with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found case', objCase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



casesCtrl.updateCaseById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCase = await caseService.updateCaseById(id, req.body);
            if (!objCase) {
                util.setError(404, `Cannot find case with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Case updated', objCase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

casesCtrl.updateCaseByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCase = await caseService.updateCaseByDeleted(deleted, req.body);
            if (!objCase) {
                util.setError(404, `Cannot find case with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Case updated', objCase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

casesCtrl.updateCaseByCaseNumber = async (req, res) => {
     const { caseNumber } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCase = await caseService.updateCaseByCaseNumber(caseNumber, req.body);
            if (!objCase) {
                util.setError(404, `Cannot find case with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Case updated', objCase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

casesCtrl.updateCaseByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCase = await caseService.updateCaseByName(name, req.body);
            if (!objCase) {
                util.setError(404, `Cannot find case with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Case updated', objCase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

casesCtrl.updateCaseByType = async (req, res) => {
     const { type } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCase = await caseService.updateCaseByType(type, req.body);
            if (!objCase) {
                util.setError(404, `Cannot find case with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Case updated', objCase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

casesCtrl.updateCaseByStatus = async (req, res) => {
     const { status } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCase = await caseService.updateCaseByStatus(status, req.body);
            if (!objCase) {
                util.setError(404, `Cannot find case with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Case updated', objCase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

casesCtrl.updateCaseByPriority = async (req, res) => {
     const { priority } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCase = await caseService.updateCaseByPriority(priority, req.body);
            if (!objCase) {
                util.setError(404, `Cannot find case with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Case updated', objCase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

casesCtrl.updateCaseByState = async (req, res) => {
     const { state } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCase = await caseService.updateCaseByState(state, req.body);
            if (!objCase) {
                util.setError(404, `Cannot find case with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Case updated', objCase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

casesCtrl.updateCaseByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCase = await caseService.updateCaseByDescription(description, req.body);
            if (!objCase) {
                util.setError(404, `Cannot find case with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Case updated', objCase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

casesCtrl.updateCaseByResolution = async (req, res) => {
     const { resolution } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCase = await caseService.updateCaseByResolution(resolution, req.body);
            if (!objCase) {
                util.setError(404, `Cannot find case with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Case updated', objCase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

casesCtrl.updateCaseByWorkLog = async (req, res) => {
     const { workLog } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCase = await caseService.updateCaseByWorkLog(workLog, req.body);
            if (!objCase) {
                util.setError(404, `Cannot find case with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Case updated', objCase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

casesCtrl.updateCaseByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCase = await caseService.updateCaseByDateEntered(dateEntered, req.body);
            if (!objCase) {
                util.setError(404, `Cannot find case with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Case updated', objCase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

casesCtrl.updateCaseByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCase = await caseService.updateCaseByDateModified(dateModified, req.body);
            if (!objCase) {
                util.setError(404, `Cannot find case with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Case updated', objCase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

casesCtrl.updateCaseByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCase = await caseService.updateCaseByModifiedUserId(modifiedUserId, req.body);
            if (!objCase) {
                util.setError(404, `Cannot find case with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Case updated', objCase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

casesCtrl.updateCaseByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCase = await caseService.updateCaseByCreatedBy(createdBy, req.body);
            if (!objCase) {
                util.setError(404, `Cannot find case with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Case updated', objCase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

casesCtrl.updateCaseByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCase = await caseService.updateCaseByAssignedUserId(assignedUserId, req.body);
            if (!objCase) {
                util.setError(404, `Cannot find case with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Case updated', objCase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

casesCtrl.updateCaseByAccountId = async (req, res) => {
     const { accountId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCase = await caseService.updateCaseByAccountId(accountId, req.body);
            if (!objCase) {
                util.setError(404, `Cannot find case with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Case updated', objCase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

casesCtrl.updateCaseByContactCreatedById = async (req, res) => {
     const { contactCreatedById } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCase = await caseService.updateCaseByContactCreatedById(contactCreatedById, req.body);
            if (!objCase) {
                util.setError(404, `Cannot find case with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Case updated', objCase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = casesCtrl;
//</es-section>
