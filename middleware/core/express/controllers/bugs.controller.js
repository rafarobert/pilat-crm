/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:29 GMT-0400 (Bolivia Time)
 * Time: 14:0:29
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:29 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:29
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const bugService = require('../services/bugs.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const bugsCtrl = {};
bugsCtrl.service = bugService;


bugsCtrl.getAllBugs = async (req, res) => {
    try {
        const objBugs = await bugService.getAllBugs(req.query);
        if (objBugs.length > 0) {
            util.setSuccess(200, 'Bugs retrieved', objBugs);
        } else {
            util.setSuccess(200, 'No bug found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

bugsCtrl.getABug = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objBug = await bugService.getABug(id, req.query);
        if (!objBug) {
            util.setError(404, `Cannot find bug with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found bug', objBug);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

bugsCtrl.addBug = async (req, res) => {
    try {
        const objBug = await bugService.addBug(req.body);
        util.setSuccess(201, 'Bug Added!', objBug);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

bugsCtrl.updateBug = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objBug = await bugService.updateBug(id, req.body);
        if (!objBug) {
            util.setError(404, `Cannot find bug with the id: ${id}`);
        } else {
            util.setSuccess(200, 'Bug updated', objBug);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

bugsCtrl.deleteBug = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objBug = await bugService.deleteBug(id);
        if (objBug) {
            util.setSuccess(200, 'Bug deleted', objBug);
        } else {
            util.setError(404, `Bug with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



bugsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objBug = await bugService.findOneById(id, req.query);
        if (!objBug) {
            util.setError(404, `Cannot find bug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found bug', objBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

bugsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objBug = await bugService.findOneByDeleted(deleted, req.query);
        if (!objBug) {
            util.setError(404, `Cannot find bug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found bug', objBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

bugsCtrl.findOneByBugNumber = async (req, res) => {
    try {
        const { bugNumber } = req.params;
        const objBug = await bugService.findOneByBugNumber(bugNumber, req.query);
        if (!objBug) {
            util.setError(404, `Cannot find bug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found bug', objBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

bugsCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objBug = await bugService.findOneByName(name, req.query);
        if (!objBug) {
            util.setError(404, `Cannot find bug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found bug', objBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

bugsCtrl.findOneByType = async (req, res) => {
    try {
        const { type } = req.params;
        const objBug = await bugService.findOneByType(type, req.query);
        if (!objBug) {
            util.setError(404, `Cannot find bug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found bug', objBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

bugsCtrl.findOneByStatus = async (req, res) => {
    try {
        const { status } = req.params;
        const objBug = await bugService.findOneByStatus(status, req.query);
        if (!objBug) {
            util.setError(404, `Cannot find bug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found bug', objBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

bugsCtrl.findOneByPriority = async (req, res) => {
    try {
        const { priority } = req.params;
        const objBug = await bugService.findOneByPriority(priority, req.query);
        if (!objBug) {
            util.setError(404, `Cannot find bug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found bug', objBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

bugsCtrl.findOneByResolution = async (req, res) => {
    try {
        const { resolution } = req.params;
        const objBug = await bugService.findOneByResolution(resolution, req.query);
        if (!objBug) {
            util.setError(404, `Cannot find bug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found bug', objBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

bugsCtrl.findOneByFoundInRelease = async (req, res) => {
    try {
        const { foundInRelease } = req.params;
        const objBug = await bugService.findOneByFoundInRelease(foundInRelease, req.query);
        if (!objBug) {
            util.setError(404, `Cannot find bug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found bug', objBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

bugsCtrl.findOneByFixedInRelease = async (req, res) => {
    try {
        const { fixedInRelease } = req.params;
        const objBug = await bugService.findOneByFixedInRelease(fixedInRelease, req.query);
        if (!objBug) {
            util.setError(404, `Cannot find bug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found bug', objBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

bugsCtrl.findOneBySource = async (req, res) => {
    try {
        const { source } = req.params;
        const objBug = await bugService.findOneBySource(source, req.query);
        if (!objBug) {
            util.setError(404, `Cannot find bug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found bug', objBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

bugsCtrl.findOneByProductCategory = async (req, res) => {
    try {
        const { productCategory } = req.params;
        const objBug = await bugService.findOneByProductCategory(productCategory, req.query);
        if (!objBug) {
            util.setError(404, `Cannot find bug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found bug', objBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

bugsCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objBug = await bugService.findOneByDescription(description, req.query);
        if (!objBug) {
            util.setError(404, `Cannot find bug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found bug', objBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

bugsCtrl.findOneByWorkLog = async (req, res) => {
    try {
        const { workLog } = req.params;
        const objBug = await bugService.findOneByWorkLog(workLog, req.query);
        if (!objBug) {
            util.setError(404, `Cannot find bug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found bug', objBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

bugsCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objBug = await bugService.findOneByDateEntered(dateEntered, req.query);
        if (!objBug) {
            util.setError(404, `Cannot find bug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found bug', objBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

bugsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objBug = await bugService.findOneByDateModified(dateModified, req.query);
        if (!objBug) {
            util.setError(404, `Cannot find bug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found bug', objBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

bugsCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objBug = await bugService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objBug) {
            util.setError(404, `Cannot find bug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found bug', objBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

bugsCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objBug = await bugService.findOneByCreatedBy(createdBy, req.query);
        if (!objBug) {
            util.setError(404, `Cannot find bug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found bug', objBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

bugsCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objBug = await bugService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objBug) {
            util.setError(404, `Cannot find bug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found bug', objBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



bugsCtrl.updateBugById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objBug = await bugService.updateBugById(id, req.body);
            if (!objBug) {
                util.setError(404, `Cannot find bug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Bug updated', objBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

bugsCtrl.updateBugByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objBug = await bugService.updateBugByDeleted(deleted, req.body);
            if (!objBug) {
                util.setError(404, `Cannot find bug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Bug updated', objBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

bugsCtrl.updateBugByBugNumber = async (req, res) => {
     const { bugNumber } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objBug = await bugService.updateBugByBugNumber(bugNumber, req.body);
            if (!objBug) {
                util.setError(404, `Cannot find bug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Bug updated', objBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

bugsCtrl.updateBugByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objBug = await bugService.updateBugByName(name, req.body);
            if (!objBug) {
                util.setError(404, `Cannot find bug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Bug updated', objBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

bugsCtrl.updateBugByType = async (req, res) => {
     const { type } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objBug = await bugService.updateBugByType(type, req.body);
            if (!objBug) {
                util.setError(404, `Cannot find bug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Bug updated', objBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

bugsCtrl.updateBugByStatus = async (req, res) => {
     const { status } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objBug = await bugService.updateBugByStatus(status, req.body);
            if (!objBug) {
                util.setError(404, `Cannot find bug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Bug updated', objBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

bugsCtrl.updateBugByPriority = async (req, res) => {
     const { priority } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objBug = await bugService.updateBugByPriority(priority, req.body);
            if (!objBug) {
                util.setError(404, `Cannot find bug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Bug updated', objBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

bugsCtrl.updateBugByResolution = async (req, res) => {
     const { resolution } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objBug = await bugService.updateBugByResolution(resolution, req.body);
            if (!objBug) {
                util.setError(404, `Cannot find bug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Bug updated', objBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

bugsCtrl.updateBugByFoundInRelease = async (req, res) => {
     const { foundInRelease } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objBug = await bugService.updateBugByFoundInRelease(foundInRelease, req.body);
            if (!objBug) {
                util.setError(404, `Cannot find bug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Bug updated', objBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

bugsCtrl.updateBugByFixedInRelease = async (req, res) => {
     const { fixedInRelease } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objBug = await bugService.updateBugByFixedInRelease(fixedInRelease, req.body);
            if (!objBug) {
                util.setError(404, `Cannot find bug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Bug updated', objBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

bugsCtrl.updateBugBySource = async (req, res) => {
     const { source } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objBug = await bugService.updateBugBySource(source, req.body);
            if (!objBug) {
                util.setError(404, `Cannot find bug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Bug updated', objBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

bugsCtrl.updateBugByProductCategory = async (req, res) => {
     const { productCategory } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objBug = await bugService.updateBugByProductCategory(productCategory, req.body);
            if (!objBug) {
                util.setError(404, `Cannot find bug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Bug updated', objBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

bugsCtrl.updateBugByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objBug = await bugService.updateBugByDescription(description, req.body);
            if (!objBug) {
                util.setError(404, `Cannot find bug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Bug updated', objBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

bugsCtrl.updateBugByWorkLog = async (req, res) => {
     const { workLog } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objBug = await bugService.updateBugByWorkLog(workLog, req.body);
            if (!objBug) {
                util.setError(404, `Cannot find bug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Bug updated', objBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

bugsCtrl.updateBugByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objBug = await bugService.updateBugByDateEntered(dateEntered, req.body);
            if (!objBug) {
                util.setError(404, `Cannot find bug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Bug updated', objBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

bugsCtrl.updateBugByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objBug = await bugService.updateBugByDateModified(dateModified, req.body);
            if (!objBug) {
                util.setError(404, `Cannot find bug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Bug updated', objBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

bugsCtrl.updateBugByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objBug = await bugService.updateBugByModifiedUserId(modifiedUserId, req.body);
            if (!objBug) {
                util.setError(404, `Cannot find bug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Bug updated', objBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

bugsCtrl.updateBugByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objBug = await bugService.updateBugByCreatedBy(createdBy, req.body);
            if (!objBug) {
                util.setError(404, `Cannot find bug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Bug updated', objBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

bugsCtrl.updateBugByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objBug = await bugService.updateBugByAssignedUserId(assignedUserId, req.body);
            if (!objBug) {
                util.setError(404, `Cannot find bug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Bug updated', objBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = bugsCtrl;
//</es-section>
