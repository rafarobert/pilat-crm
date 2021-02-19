/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:41:49 GMT-0400 (Bolivia Time)
 * Time: 4:41:49
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:41:49 GMT-0400 (Bolivia Time)
 * Last time updated: 4:41:49
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const amProjecttemplateContact1CService = require('../services/am_projecttemplates_contacts_1_c.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const amProjecttemplatesContacts1CCtrl = {};
amProjecttemplatesContacts1CCtrl.service = amProjecttemplateContact1CService;


amProjecttemplatesContacts1CCtrl.getAllAmProjecttemplatesContacts1C = async (req, res) => {
    try {
        const objAmProjecttemplatesContacts1C = await amProjecttemplateContact1CService.getAllAmProjecttemplatesContacts1C(req.query);
        if (objAmProjecttemplatesContacts1C.length > 0) {
            util.setSuccess(200, 'AmProjecttemplatesContacts1C retrieved', objAmProjecttemplatesContacts1C);
        } else {
            util.setSuccess(200, 'No amProjecttemplateContact1C found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesContacts1CCtrl.getAAmProjecttemplateContact1C = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objAmProjecttemplateContact1C = await amProjecttemplateContact1CService.getAAmProjecttemplateContact1C(id, req.query);
        if (!objAmProjecttemplateContact1C) {
            util.setError(404, `Cannot find amProjecttemplateContact1C with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found amProjecttemplateContact1C', objAmProjecttemplateContact1C);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesContacts1CCtrl.addAmProjecttemplateContact1C = async (req, res) => {
    try {
        const objAmProjecttemplateContact1C = await amProjecttemplateContact1CService.addAmProjecttemplateContact1C(req.body);
        util.setSuccess(201, 'AmProjecttemplateContact1C Added!', objAmProjecttemplateContact1C);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesContacts1CCtrl.updateAmProjecttemplateContact1C = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objAmProjecttemplateContact1C = await amProjecttemplateContact1CService.updateAmProjecttemplateContact1C(id, req.body);
        if (!objAmProjecttemplateContact1C) {
            util.setError(404, `Cannot find amProjecttemplateContact1C with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AmProjecttemplateContact1C updated', objAmProjecttemplateContact1C);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

amProjecttemplatesContacts1CCtrl.deleteAmProjecttemplateContact1C = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objAmProjecttemplateContact1C = await amProjecttemplateContact1CService.deleteAmProjecttemplateContact1C(id);
        if (objAmProjecttemplateContact1C) {
            util.setSuccess(200, 'AmProjecttemplateContact1C deleted', objAmProjecttemplateContact1C);
        } else {
            util.setError(404, `AmProjecttemplateContact1C with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



amProjecttemplatesContacts1CCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAmProjecttemplateContact1C = await amProjecttemplateContact1CService.findOneById(id, req.query);
        if (!objAmProjecttemplateContact1C) {
            util.setError(404, `Cannot find amProjecttemplateContact1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amProjecttemplateContact1C', objAmProjecttemplateContact1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesContacts1CCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAmProjecttemplateContact1C = await amProjecttemplateContact1CService.findOneByDeleted(deleted, req.query);
        if (!objAmProjecttemplateContact1C) {
            util.setError(404, `Cannot find amProjecttemplateContact1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amProjecttemplateContact1C', objAmProjecttemplateContact1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesContacts1CCtrl.findOneByAmProjecttemplatesIda = async (req, res) => {
    try {
        const { amProjecttemplatesIda } = req.params;
        const objAmProjecttemplateContact1C = await amProjecttemplateContact1CService.findOneByAmProjecttemplatesIda(amProjecttemplatesIda, req.query);
        if (!objAmProjecttemplateContact1C) {
            util.setError(404, `Cannot find amProjecttemplateContact1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amProjecttemplateContact1C', objAmProjecttemplateContact1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesContacts1CCtrl.findOneByContactsIdb = async (req, res) => {
    try {
        const { contactsIdb } = req.params;
        const objAmProjecttemplateContact1C = await amProjecttemplateContact1CService.findOneByContactsIdb(contactsIdb, req.query);
        if (!objAmProjecttemplateContact1C) {
            util.setError(404, `Cannot find amProjecttemplateContact1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amProjecttemplateContact1C', objAmProjecttemplateContact1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesContacts1CCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAmProjecttemplateContact1C = await amProjecttemplateContact1CService.findOneByDateModified(dateModified, req.query);
        if (!objAmProjecttemplateContact1C) {
            util.setError(404, `Cannot find amProjecttemplateContact1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amProjecttemplateContact1C', objAmProjecttemplateContact1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



amProjecttemplatesContacts1CCtrl.updateAmProjecttemplateContact1CById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAmProjecttemplateContact1C = await amProjecttemplateContact1CService.updateAmProjecttemplateContact1CById(id, req.body);
            if (!objAmProjecttemplateContact1C) {
                util.setError(404, `Cannot find amProjecttemplateContact1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmProjecttemplateContact1C updated', objAmProjecttemplateContact1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amProjecttemplatesContacts1CCtrl.updateAmProjecttemplateContact1CByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAmProjecttemplateContact1C = await amProjecttemplateContact1CService.updateAmProjecttemplateContact1CByDeleted(deleted, req.body);
            if (!objAmProjecttemplateContact1C) {
                util.setError(404, `Cannot find amProjecttemplateContact1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmProjecttemplateContact1C updated', objAmProjecttemplateContact1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amProjecttemplatesContacts1CCtrl.updateAmProjecttemplateContact1CByAmProjecttemplatesIda = async (req, res) => {
     const { amProjecttemplatesIda } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAmProjecttemplateContact1C = await amProjecttemplateContact1CService.updateAmProjecttemplateContact1CByAmProjecttemplatesIda(amProjecttemplatesIda, req.body);
            if (!objAmProjecttemplateContact1C) {
                util.setError(404, `Cannot find amProjecttemplateContact1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmProjecttemplateContact1C updated', objAmProjecttemplateContact1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amProjecttemplatesContacts1CCtrl.updateAmProjecttemplateContact1CByContactsIdb = async (req, res) => {
     const { contactsIdb } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAmProjecttemplateContact1C = await amProjecttemplateContact1CService.updateAmProjecttemplateContact1CByContactsIdb(contactsIdb, req.body);
            if (!objAmProjecttemplateContact1C) {
                util.setError(404, `Cannot find amProjecttemplateContact1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmProjecttemplateContact1C updated', objAmProjecttemplateContact1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amProjecttemplatesContacts1CCtrl.updateAmProjecttemplateContact1CByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAmProjecttemplateContact1C = await amProjecttemplateContact1CService.updateAmProjecttemplateContact1CByDateModified(dateModified, req.body);
            if (!objAmProjecttemplateContact1C) {
                util.setError(404, `Cannot find amProjecttemplateContact1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmProjecttemplateContact1C updated', objAmProjecttemplateContact1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = amProjecttemplatesContacts1CCtrl;
//</es-section>
