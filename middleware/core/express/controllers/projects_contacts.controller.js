/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:47 GMT-0400 (Bolivia Time)
 * Time: 15:36:47
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:47 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:47
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const projectContactService = require('../services/projects_contacts.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const projectsContactsCtrl = {};
projectsContactsCtrl.service = projectContactService;


projectsContactsCtrl.getAllProjectsContacts = async (req, res) => {
    try {
        const objProjectsContacts = await projectContactService.getAllProjectsContacts(req.query);
        if (objProjectsContacts.length > 0) {
            util.setSuccess(200, 'ProjectsContacts retrieved', objProjectsContacts);
        } else {
            util.setSuccess(200, 'No projectContact found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectsContactsCtrl.getAProjectContact = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objProjectContact = await projectContactService.getAProjectContact(id, req.query);
        if (!objProjectContact) {
            util.setError(404, `Cannot find projectContact with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found projectContact', objProjectContact);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectsContactsCtrl.addProjectContact = async (req, res) => {
    try {
        const objProjectContact = await projectContactService.addProjectContact(req.body);
        util.setSuccess(201, 'ProjectContact Added!', objProjectContact);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectsContactsCtrl.updateProjectContact = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objProjectContact = await projectContactService.updateProjectContact(id, req.body);
        if (!objProjectContact) {
            util.setError(404, `Cannot find projectContact with the id: ${id}`);
        } else {
            util.setSuccess(200, 'ProjectContact updated', objProjectContact);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

projectsContactsCtrl.deleteProjectContact = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objProjectContact = await projectContactService.deleteProjectContact(id);
        if (objProjectContact) {
            util.setSuccess(200, 'ProjectContact deleted', objProjectContact);
        } else {
            util.setError(404, `ProjectContact with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



projectsContactsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objProjectContact = await projectContactService.findOneById(id, req.query);
        if (!objProjectContact) {
            util.setError(404, `Cannot find projectContact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectContact', objProjectContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectsContactsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objProjectContact = await projectContactService.findOneByDeleted(deleted, req.query);
        if (!objProjectContact) {
            util.setError(404, `Cannot find projectContact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectContact', objProjectContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectsContactsCtrl.findOneByContactId = async (req, res) => {
    try {
        const { contactId } = req.params;
        const objProjectContact = await projectContactService.findOneByContactId(contactId, req.query);
        if (!objProjectContact) {
            util.setError(404, `Cannot find projectContact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectContact', objProjectContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectsContactsCtrl.findOneByProjectId = async (req, res) => {
    try {
        const { projectId } = req.params;
        const objProjectContact = await projectContactService.findOneByProjectId(projectId, req.query);
        if (!objProjectContact) {
            util.setError(404, `Cannot find projectContact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectContact', objProjectContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectsContactsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objProjectContact = await projectContactService.findOneByDateModified(dateModified, req.query);
        if (!objProjectContact) {
            util.setError(404, `Cannot find projectContact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectContact', objProjectContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



projectsContactsCtrl.updateProjectContactById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProjectContact = await projectContactService.updateProjectContactById(id, req.body);
            if (!objProjectContact) {
                util.setError(404, `Cannot find projectContact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectContact updated', objProjectContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectsContactsCtrl.updateProjectContactByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProjectContact = await projectContactService.updateProjectContactByDeleted(deleted, req.body);
            if (!objProjectContact) {
                util.setError(404, `Cannot find projectContact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectContact updated', objProjectContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectsContactsCtrl.updateProjectContactByContactId = async (req, res) => {
     const { contactId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProjectContact = await projectContactService.updateProjectContactByContactId(contactId, req.body);
            if (!objProjectContact) {
                util.setError(404, `Cannot find projectContact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectContact updated', objProjectContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectsContactsCtrl.updateProjectContactByProjectId = async (req, res) => {
     const { projectId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProjectContact = await projectContactService.updateProjectContactByProjectId(projectId, req.body);
            if (!objProjectContact) {
                util.setError(404, `Cannot find projectContact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectContact updated', objProjectContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectsContactsCtrl.updateProjectContactByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProjectContact = await projectContactService.updateProjectContactByDateModified(dateModified, req.body);
            if (!objProjectContact) {
                util.setError(404, `Cannot find projectContact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectContact updated', objProjectContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = projectsContactsCtrl;
//</es-section>
