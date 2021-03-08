/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:51 GMT-0400 (Bolivia Time)
 * Time: 15:35:51
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:51 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:51
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const contactBugService = require('../services/contacts_bugs.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const contactsBugsCtrl = {};
contactsBugsCtrl.service = contactBugService;


contactsBugsCtrl.getAllContactsBugs = async (req, res) => {
    try {
        const objContactsBugs = await contactBugService.getAllContactsBugs(req.query);
        if (objContactsBugs.length > 0) {
            util.setSuccess(200, 'ContactsBugs retrieved', objContactsBugs);
        } else {
            util.setSuccess(200, 'No contactBug found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsBugsCtrl.getAContactBug = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objContactBug = await contactBugService.getAContactBug(id, req.query);
        if (!objContactBug) {
            util.setError(404, `Cannot find contactBug with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found contactBug', objContactBug);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsBugsCtrl.addContactBug = async (req, res) => {
    try {
        const objContactBug = await contactBugService.addContactBug(req.body);
        util.setSuccess(201, 'ContactBug Added!', objContactBug);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsBugsCtrl.updateContactBug = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objContactBug = await contactBugService.updateContactBug(id, req.body);
        if (!objContactBug) {
            util.setError(404, `Cannot find contactBug with the id: ${id}`);
        } else {
            util.setSuccess(200, 'ContactBug updated', objContactBug);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

contactsBugsCtrl.deleteContactBug = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objContactBug = await contactBugService.deleteContactBug(id);
        if (objContactBug) {
            util.setSuccess(200, 'ContactBug deleted', objContactBug);
        } else {
            util.setError(404, `ContactBug with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



contactsBugsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objContactBug = await contactBugService.findOneById(id, req.query);
        if (!objContactBug) {
            util.setError(404, `Cannot find contactBug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contactBug', objContactBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsBugsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objContactBug = await contactBugService.findOneByDeleted(deleted, req.query);
        if (!objContactBug) {
            util.setError(404, `Cannot find contactBug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contactBug', objContactBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsBugsCtrl.findOneByContactId = async (req, res) => {
    try {
        const { contactId } = req.params;
        const objContactBug = await contactBugService.findOneByContactId(contactId, req.query);
        if (!objContactBug) {
            util.setError(404, `Cannot find contactBug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contactBug', objContactBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsBugsCtrl.findOneByBugId = async (req, res) => {
    try {
        const { bugId } = req.params;
        const objContactBug = await contactBugService.findOneByBugId(bugId, req.query);
        if (!objContactBug) {
            util.setError(404, `Cannot find contactBug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contactBug', objContactBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsBugsCtrl.findOneByContactRole = async (req, res) => {
    try {
        const { contactRole } = req.params;
        const objContactBug = await contactBugService.findOneByContactRole(contactRole, req.query);
        if (!objContactBug) {
            util.setError(404, `Cannot find contactBug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contactBug', objContactBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsBugsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objContactBug = await contactBugService.findOneByDateModified(dateModified, req.query);
        if (!objContactBug) {
            util.setError(404, `Cannot find contactBug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contactBug', objContactBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



contactsBugsCtrl.updateContactBugById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objContactBug = await contactBugService.updateContactBugById(id, req.body);
            if (!objContactBug) {
                util.setError(404, `Cannot find contactBug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ContactBug updated', objContactBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsBugsCtrl.updateContactBugByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objContactBug = await contactBugService.updateContactBugByDeleted(deleted, req.body);
            if (!objContactBug) {
                util.setError(404, `Cannot find contactBug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ContactBug updated', objContactBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsBugsCtrl.updateContactBugByContactId = async (req, res) => {
     const { contactId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objContactBug = await contactBugService.updateContactBugByContactId(contactId, req.body);
            if (!objContactBug) {
                util.setError(404, `Cannot find contactBug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ContactBug updated', objContactBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsBugsCtrl.updateContactBugByBugId = async (req, res) => {
     const { bugId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objContactBug = await contactBugService.updateContactBugByBugId(bugId, req.body);
            if (!objContactBug) {
                util.setError(404, `Cannot find contactBug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ContactBug updated', objContactBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsBugsCtrl.updateContactBugByContactRole = async (req, res) => {
     const { contactRole } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objContactBug = await contactBugService.updateContactBugByContactRole(contactRole, req.body);
            if (!objContactBug) {
                util.setError(404, `Cannot find contactBug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ContactBug updated', objContactBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsBugsCtrl.updateContactBugByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objContactBug = await contactBugService.updateContactBugByDateModified(dateModified, req.body);
            if (!objContactBug) {
                util.setError(404, `Cannot find contactBug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ContactBug updated', objContactBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = contactsBugsCtrl;
//</es-section>
