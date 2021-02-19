/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:44:07 GMT-0400 (Bolivia Time)
 * Time: 4:44:7
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:44:07 GMT-0400 (Bolivia Time)
 * Last time updated: 4:44:7
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const securitygroupService = require('../services/securitygroups.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const securitygroupsCtrl = {};
securitygroupsCtrl.service = securitygroupService;


securitygroupsCtrl.getAllSecuritygroups = async (req, res) => {
    try {
        const objSecuritygroups = await securitygroupService.getAllSecuritygroups(req.query);
        if (objSecuritygroups.length > 0) {
            util.setSuccess(200, 'Securitygroups retrieved', objSecuritygroups);
        } else {
            util.setSuccess(200, 'No securitygroup found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsCtrl.getASecuritygroup = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objSecuritygroup = await securitygroupService.getASecuritygroup(id, req.query);
        if (!objSecuritygroup) {
            util.setError(404, `Cannot find securitygroup with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found securitygroup', objSecuritygroup);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsCtrl.addSecuritygroup = async (req, res) => {
    try {
        const objSecuritygroup = await securitygroupService.addSecuritygroup(req.body);
        util.setSuccess(201, 'Securitygroup Added!', objSecuritygroup);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsCtrl.updateSecuritygroup = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objSecuritygroup = await securitygroupService.updateSecuritygroup(id, req.body);
        if (!objSecuritygroup) {
            util.setError(404, `Cannot find securitygroup with the id: ${id}`);
        } else {
            util.setSuccess(200, 'Securitygroup updated', objSecuritygroup);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

securitygroupsCtrl.deleteSecuritygroup = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objSecuritygroup = await securitygroupService.deleteSecuritygroup(id);
        if (objSecuritygroup) {
            util.setSuccess(200, 'Securitygroup deleted', objSecuritygroup);
        } else {
            util.setError(404, `Securitygroup with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



securitygroupsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objSecuritygroup = await securitygroupService.findOneById(id, req.query);
        if (!objSecuritygroup) {
            util.setError(404, `Cannot find securitygroup with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroup', objSecuritygroup);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objSecuritygroup = await securitygroupService.findOneByDeleted(deleted, req.query);
        if (!objSecuritygroup) {
            util.setError(404, `Cannot find securitygroup with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroup', objSecuritygroup);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsCtrl.findOneByNoninheritable = async (req, res) => {
    try {
        const { noninheritable } = req.params;
        const objSecuritygroup = await securitygroupService.findOneByNoninheritable(noninheritable, req.query);
        if (!objSecuritygroup) {
            util.setError(404, `Cannot find securitygroup with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroup', objSecuritygroup);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objSecuritygroup = await securitygroupService.findOneByName(name, req.query);
        if (!objSecuritygroup) {
            util.setError(404, `Cannot find securitygroup with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroup', objSecuritygroup);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objSecuritygroup = await securitygroupService.findOneByDescription(description, req.query);
        if (!objSecuritygroup) {
            util.setError(404, `Cannot find securitygroup with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroup', objSecuritygroup);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objSecuritygroup = await securitygroupService.findOneByDateEntered(dateEntered, req.query);
        if (!objSecuritygroup) {
            util.setError(404, `Cannot find securitygroup with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroup', objSecuritygroup);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objSecuritygroup = await securitygroupService.findOneByDateModified(dateModified, req.query);
        if (!objSecuritygroup) {
            util.setError(404, `Cannot find securitygroup with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroup', objSecuritygroup);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objSecuritygroup = await securitygroupService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objSecuritygroup) {
            util.setError(404, `Cannot find securitygroup with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroup', objSecuritygroup);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objSecuritygroup = await securitygroupService.findOneByCreatedBy(createdBy, req.query);
        if (!objSecuritygroup) {
            util.setError(404, `Cannot find securitygroup with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroup', objSecuritygroup);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objSecuritygroup = await securitygroupService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objSecuritygroup) {
            util.setError(404, `Cannot find securitygroup with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroup', objSecuritygroup);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



securitygroupsCtrl.updateSecuritygroupById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSecuritygroup = await securitygroupService.updateSecuritygroupById(id, req.body);
            if (!objSecuritygroup) {
                util.setError(404, `Cannot find securitygroup with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Securitygroup updated', objSecuritygroup);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

securitygroupsCtrl.updateSecuritygroupByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSecuritygroup = await securitygroupService.updateSecuritygroupByDeleted(deleted, req.body);
            if (!objSecuritygroup) {
                util.setError(404, `Cannot find securitygroup with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Securitygroup updated', objSecuritygroup);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

securitygroupsCtrl.updateSecuritygroupByNoninheritable = async (req, res) => {
     const { noninheritable } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSecuritygroup = await securitygroupService.updateSecuritygroupByNoninheritable(noninheritable, req.body);
            if (!objSecuritygroup) {
                util.setError(404, `Cannot find securitygroup with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Securitygroup updated', objSecuritygroup);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

securitygroupsCtrl.updateSecuritygroupByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSecuritygroup = await securitygroupService.updateSecuritygroupByName(name, req.body);
            if (!objSecuritygroup) {
                util.setError(404, `Cannot find securitygroup with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Securitygroup updated', objSecuritygroup);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

securitygroupsCtrl.updateSecuritygroupByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSecuritygroup = await securitygroupService.updateSecuritygroupByDescription(description, req.body);
            if (!objSecuritygroup) {
                util.setError(404, `Cannot find securitygroup with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Securitygroup updated', objSecuritygroup);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

securitygroupsCtrl.updateSecuritygroupByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSecuritygroup = await securitygroupService.updateSecuritygroupByDateEntered(dateEntered, req.body);
            if (!objSecuritygroup) {
                util.setError(404, `Cannot find securitygroup with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Securitygroup updated', objSecuritygroup);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

securitygroupsCtrl.updateSecuritygroupByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSecuritygroup = await securitygroupService.updateSecuritygroupByDateModified(dateModified, req.body);
            if (!objSecuritygroup) {
                util.setError(404, `Cannot find securitygroup with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Securitygroup updated', objSecuritygroup);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

securitygroupsCtrl.updateSecuritygroupByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSecuritygroup = await securitygroupService.updateSecuritygroupByModifiedUserId(modifiedUserId, req.body);
            if (!objSecuritygroup) {
                util.setError(404, `Cannot find securitygroup with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Securitygroup updated', objSecuritygroup);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

securitygroupsCtrl.updateSecuritygroupByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSecuritygroup = await securitygroupService.updateSecuritygroupByCreatedBy(createdBy, req.body);
            if (!objSecuritygroup) {
                util.setError(404, `Cannot find securitygroup with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Securitygroup updated', objSecuritygroup);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

securitygroupsCtrl.updateSecuritygroupByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSecuritygroup = await securitygroupService.updateSecuritygroupByAssignedUserId(assignedUserId, req.body);
            if (!objSecuritygroup) {
                util.setError(404, `Cannot find securitygroup with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Securitygroup updated', objSecuritygroup);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = securitygroupsCtrl;
//</es-section>
