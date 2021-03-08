/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:53 GMT-0400 (Bolivia Time)
 * Time: 15:36:53
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:53 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:53
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const prospectListProspectService = require('../services/prospect_lists_prospects.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const prospectListsProspectsCtrl = {};
prospectListsProspectsCtrl.service = prospectListProspectService;


prospectListsProspectsCtrl.getAllProspectListsProspects = async (req, res) => {
    try {
        const objProspectListsProspects = await prospectListProspectService.getAllProspectListsProspects(req.query);
        if (objProspectListsProspects.length > 0) {
            util.setSuccess(200, 'ProspectListsProspects retrieved', objProspectListsProspects);
        } else {
            util.setSuccess(200, 'No prospectListProspect found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectListsProspectsCtrl.getAProspectListProspect = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objProspectListProspect = await prospectListProspectService.getAProspectListProspect(id, req.query);
        if (!objProspectListProspect) {
            util.setError(404, `Cannot find prospectListProspect with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found prospectListProspect', objProspectListProspect);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectListsProspectsCtrl.addProspectListProspect = async (req, res) => {
    try {
        const objProspectListProspect = await prospectListProspectService.addProspectListProspect(req.body);
        util.setSuccess(201, 'ProspectListProspect Added!', objProspectListProspect);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectListsProspectsCtrl.updateProspectListProspect = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objProspectListProspect = await prospectListProspectService.updateProspectListProspect(id, req.body);
        if (!objProspectListProspect) {
            util.setError(404, `Cannot find prospectListProspect with the id: ${id}`);
        } else {
            util.setSuccess(200, 'ProspectListProspect updated', objProspectListProspect);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

prospectListsProspectsCtrl.deleteProspectListProspect = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objProspectListProspect = await prospectListProspectService.deleteProspectListProspect(id);
        if (objProspectListProspect) {
            util.setSuccess(200, 'ProspectListProspect deleted', objProspectListProspect);
        } else {
            util.setError(404, `ProspectListProspect with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



prospectListsProspectsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objProspectListProspect = await prospectListProspectService.findOneById(id, req.query);
        if (!objProspectListProspect) {
            util.setError(404, `Cannot find prospectListProspect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospectListProspect', objProspectListProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectListsProspectsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objProspectListProspect = await prospectListProspectService.findOneByDeleted(deleted, req.query);
        if (!objProspectListProspect) {
            util.setError(404, `Cannot find prospectListProspect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospectListProspect', objProspectListProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectListsProspectsCtrl.findOneByProspectListId = async (req, res) => {
    try {
        const { prospectListId } = req.params;
        const objProspectListProspect = await prospectListProspectService.findOneByProspectListId(prospectListId, req.query);
        if (!objProspectListProspect) {
            util.setError(404, `Cannot find prospectListProspect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospectListProspect', objProspectListProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectListsProspectsCtrl.findOneByRelatedId = async (req, res) => {
    try {
        const { relatedId } = req.params;
        const objProspectListProspect = await prospectListProspectService.findOneByRelatedId(relatedId, req.query);
        if (!objProspectListProspect) {
            util.setError(404, `Cannot find prospectListProspect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospectListProspect', objProspectListProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectListsProspectsCtrl.findOneByRelatedType = async (req, res) => {
    try {
        const { relatedType } = req.params;
        const objProspectListProspect = await prospectListProspectService.findOneByRelatedType(relatedType, req.query);
        if (!objProspectListProspect) {
            util.setError(404, `Cannot find prospectListProspect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospectListProspect', objProspectListProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectListsProspectsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objProspectListProspect = await prospectListProspectService.findOneByDateModified(dateModified, req.query);
        if (!objProspectListProspect) {
            util.setError(404, `Cannot find prospectListProspect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospectListProspect', objProspectListProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



prospectListsProspectsCtrl.updateProspectListProspectById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProspectListProspect = await prospectListProspectService.updateProspectListProspectById(id, req.body);
            if (!objProspectListProspect) {
                util.setError(404, `Cannot find prospectListProspect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProspectListProspect updated', objProspectListProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectListsProspectsCtrl.updateProspectListProspectByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProspectListProspect = await prospectListProspectService.updateProspectListProspectByDeleted(deleted, req.body);
            if (!objProspectListProspect) {
                util.setError(404, `Cannot find prospectListProspect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProspectListProspect updated', objProspectListProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectListsProspectsCtrl.updateProspectListProspectByProspectListId = async (req, res) => {
     const { prospectListId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProspectListProspect = await prospectListProspectService.updateProspectListProspectByProspectListId(prospectListId, req.body);
            if (!objProspectListProspect) {
                util.setError(404, `Cannot find prospectListProspect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProspectListProspect updated', objProspectListProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectListsProspectsCtrl.updateProspectListProspectByRelatedId = async (req, res) => {
     const { relatedId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProspectListProspect = await prospectListProspectService.updateProspectListProspectByRelatedId(relatedId, req.body);
            if (!objProspectListProspect) {
                util.setError(404, `Cannot find prospectListProspect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProspectListProspect updated', objProspectListProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectListsProspectsCtrl.updateProspectListProspectByRelatedType = async (req, res) => {
     const { relatedType } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProspectListProspect = await prospectListProspectService.updateProspectListProspectByRelatedType(relatedType, req.body);
            if (!objProspectListProspect) {
                util.setError(404, `Cannot find prospectListProspect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProspectListProspect updated', objProspectListProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectListsProspectsCtrl.updateProspectListProspectByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProspectListProspect = await prospectListProspectService.updateProspectListProspectByDateModified(dateModified, req.body);
            if (!objProspectListProspect) {
                util.setError(404, `Cannot find prospectListProspect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProspectListProspect updated', objProspectListProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = prospectListsProspectsCtrl;
//</es-section>
