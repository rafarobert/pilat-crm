/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:04 GMT-0400 (Bolivia Time)
 * Time: 15:36:4
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:04 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:4
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const emailMarketingProspectListService = require('../services/email_marketing_prospect_lists.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const emailMarketingProspectListsCtrl = {};
emailMarketingProspectListsCtrl.service = emailMarketingProspectListService;


emailMarketingProspectListsCtrl.getAllEmailMarketingProspectLists = async (req, res) => {
    try {
        const objEmailMarketingProspectLists = await emailMarketingProspectListService.getAllEmailMarketingProspectLists(req.query);
        if (objEmailMarketingProspectLists.length > 0) {
            util.setSuccess(200, 'EmailMarketingProspectLists retrieved', objEmailMarketingProspectLists);
        } else {
            util.setSuccess(200, 'No emailMarketingProspectList found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailMarketingProspectListsCtrl.getAEmailMarketingProspectList = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objEmailMarketingProspectList = await emailMarketingProspectListService.getAEmailMarketingProspectList(id, req.query);
        if (!objEmailMarketingProspectList) {
            util.setError(404, `Cannot find emailMarketingProspectList with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found emailMarketingProspectList', objEmailMarketingProspectList);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailMarketingProspectListsCtrl.addEmailMarketingProspectList = async (req, res) => {
    try {
        const objEmailMarketingProspectList = await emailMarketingProspectListService.addEmailMarketingProspectList(req.body);
        util.setSuccess(201, 'EmailMarketingProspectList Added!', objEmailMarketingProspectList);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailMarketingProspectListsCtrl.updateEmailMarketingProspectList = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objEmailMarketingProspectList = await emailMarketingProspectListService.updateEmailMarketingProspectList(id, req.body);
        if (!objEmailMarketingProspectList) {
            util.setError(404, `Cannot find emailMarketingProspectList with the id: ${id}`);
        } else {
            util.setSuccess(200, 'EmailMarketingProspectList updated', objEmailMarketingProspectList);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

emailMarketingProspectListsCtrl.deleteEmailMarketingProspectList = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objEmailMarketingProspectList = await emailMarketingProspectListService.deleteEmailMarketingProspectList(id);
        if (objEmailMarketingProspectList) {
            util.setSuccess(200, 'EmailMarketingProspectList deleted', objEmailMarketingProspectList);
        } else {
            util.setError(404, `EmailMarketingProspectList with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



emailMarketingProspectListsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objEmailMarketingProspectList = await emailMarketingProspectListService.findOneById(id, req.query);
        if (!objEmailMarketingProspectList) {
            util.setError(404, `Cannot find emailMarketingProspectList with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailMarketingProspectList', objEmailMarketingProspectList);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailMarketingProspectListsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objEmailMarketingProspectList = await emailMarketingProspectListService.findOneByDeleted(deleted, req.query);
        if (!objEmailMarketingProspectList) {
            util.setError(404, `Cannot find emailMarketingProspectList with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailMarketingProspectList', objEmailMarketingProspectList);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailMarketingProspectListsCtrl.findOneByProspectListId = async (req, res) => {
    try {
        const { prospectListId } = req.params;
        const objEmailMarketingProspectList = await emailMarketingProspectListService.findOneByProspectListId(prospectListId, req.query);
        if (!objEmailMarketingProspectList) {
            util.setError(404, `Cannot find emailMarketingProspectList with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailMarketingProspectList', objEmailMarketingProspectList);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailMarketingProspectListsCtrl.findOneByEmailMarketingId = async (req, res) => {
    try {
        const { emailMarketingId } = req.params;
        const objEmailMarketingProspectList = await emailMarketingProspectListService.findOneByEmailMarketingId(emailMarketingId, req.query);
        if (!objEmailMarketingProspectList) {
            util.setError(404, `Cannot find emailMarketingProspectList with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailMarketingProspectList', objEmailMarketingProspectList);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailMarketingProspectListsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objEmailMarketingProspectList = await emailMarketingProspectListService.findOneByDateModified(dateModified, req.query);
        if (!objEmailMarketingProspectList) {
            util.setError(404, `Cannot find emailMarketingProspectList with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailMarketingProspectList', objEmailMarketingProspectList);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



emailMarketingProspectListsCtrl.updateEmailMarketingProspectListById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objEmailMarketingProspectList = await emailMarketingProspectListService.updateEmailMarketingProspectListById(id, req.body);
            if (!objEmailMarketingProspectList) {
                util.setError(404, `Cannot find emailMarketingProspectList with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailMarketingProspectList updated', objEmailMarketingProspectList);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailMarketingProspectListsCtrl.updateEmailMarketingProspectListByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objEmailMarketingProspectList = await emailMarketingProspectListService.updateEmailMarketingProspectListByDeleted(deleted, req.body);
            if (!objEmailMarketingProspectList) {
                util.setError(404, `Cannot find emailMarketingProspectList with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailMarketingProspectList updated', objEmailMarketingProspectList);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailMarketingProspectListsCtrl.updateEmailMarketingProspectListByProspectListId = async (req, res) => {
     const { prospectListId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objEmailMarketingProspectList = await emailMarketingProspectListService.updateEmailMarketingProspectListByProspectListId(prospectListId, req.body);
            if (!objEmailMarketingProspectList) {
                util.setError(404, `Cannot find emailMarketingProspectList with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailMarketingProspectList updated', objEmailMarketingProspectList);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailMarketingProspectListsCtrl.updateEmailMarketingProspectListByEmailMarketingId = async (req, res) => {
     const { emailMarketingId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objEmailMarketingProspectList = await emailMarketingProspectListService.updateEmailMarketingProspectListByEmailMarketingId(emailMarketingId, req.body);
            if (!objEmailMarketingProspectList) {
                util.setError(404, `Cannot find emailMarketingProspectList with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailMarketingProspectList updated', objEmailMarketingProspectList);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailMarketingProspectListsCtrl.updateEmailMarketingProspectListByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objEmailMarketingProspectList = await emailMarketingProspectListService.updateEmailMarketingProspectListByDateModified(dateModified, req.body);
            if (!objEmailMarketingProspectList) {
                util.setError(404, `Cannot find emailMarketingProspectList with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailMarketingProspectList updated', objEmailMarketingProspectList);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = emailMarketingProspectListsCtrl;
//</es-section>
