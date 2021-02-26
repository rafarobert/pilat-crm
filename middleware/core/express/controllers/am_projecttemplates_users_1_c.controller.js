/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:21:56 GMT-0400 (Bolivia Time)
 * Time: 0:21:56
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:21:56 GMT-0400 (Bolivia Time)
 * Last time updated: 0:21:56
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const amProjecttemplateUser1CService = require('../services/am_projecttemplates_users_1_c.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const amProjecttemplatesUsers1CCtrl = {};
amProjecttemplatesUsers1CCtrl.service = amProjecttemplateUser1CService;


amProjecttemplatesUsers1CCtrl.getAllAmProjecttemplatesUsers1C = async (req, res) => {
    try {
        const objAmProjecttemplatesUsers1C = await amProjecttemplateUser1CService.getAllAmProjecttemplatesUsers1C(req.query);
        if (objAmProjecttemplatesUsers1C.length > 0) {
            util.setSuccess(200, 'AmProjecttemplatesUsers1C retrieved', objAmProjecttemplatesUsers1C);
        } else {
            util.setSuccess(200, 'No amProjecttemplateUser1C found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesUsers1CCtrl.getAAmProjecttemplateUser1C = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objAmProjecttemplateUser1C = await amProjecttemplateUser1CService.getAAmProjecttemplateUser1C(id, req.query);
        if (!objAmProjecttemplateUser1C) {
            util.setError(404, `Cannot find amProjecttemplateUser1C with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found amProjecttemplateUser1C', objAmProjecttemplateUser1C);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesUsers1CCtrl.addAmProjecttemplateUser1C = async (req, res) => {
    try {
        const objAmProjecttemplateUser1C = await amProjecttemplateUser1CService.addAmProjecttemplateUser1C(req.body);
        util.setSuccess(201, 'AmProjecttemplateUser1C Added!', objAmProjecttemplateUser1C);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesUsers1CCtrl.updateAmProjecttemplateUser1C = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objAmProjecttemplateUser1C = await amProjecttemplateUser1CService.updateAmProjecttemplateUser1C(id, req.body);
        if (!objAmProjecttemplateUser1C) {
            util.setError(404, `Cannot find amProjecttemplateUser1C with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AmProjecttemplateUser1C updated', objAmProjecttemplateUser1C);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

amProjecttemplatesUsers1CCtrl.deleteAmProjecttemplateUser1C = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objAmProjecttemplateUser1C = await amProjecttemplateUser1CService.deleteAmProjecttemplateUser1C(id);
        if (objAmProjecttemplateUser1C) {
            util.setSuccess(200, 'AmProjecttemplateUser1C deleted', objAmProjecttemplateUser1C);
        } else {
            util.setError(404, `AmProjecttemplateUser1C with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



amProjecttemplatesUsers1CCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAmProjecttemplateUser1C = await amProjecttemplateUser1CService.findOneById(id, req.query);
        if (!objAmProjecttemplateUser1C) {
            util.setError(404, `Cannot find amProjecttemplateUser1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amProjecttemplateUser1C', objAmProjecttemplateUser1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesUsers1CCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAmProjecttemplateUser1C = await amProjecttemplateUser1CService.findOneByDeleted(deleted, req.query);
        if (!objAmProjecttemplateUser1C) {
            util.setError(404, `Cannot find amProjecttemplateUser1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amProjecttemplateUser1C', objAmProjecttemplateUser1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesUsers1CCtrl.findOneByAmProjecttemplatesIda = async (req, res) => {
    try {
        const { amProjecttemplatesIda } = req.params;
        const objAmProjecttemplateUser1C = await amProjecttemplateUser1CService.findOneByAmProjecttemplatesIda(amProjecttemplatesIda, req.query);
        if (!objAmProjecttemplateUser1C) {
            util.setError(404, `Cannot find amProjecttemplateUser1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amProjecttemplateUser1C', objAmProjecttemplateUser1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesUsers1CCtrl.findOneByUsersIdb = async (req, res) => {
    try {
        const { usersIdb } = req.params;
        const objAmProjecttemplateUser1C = await amProjecttemplateUser1CService.findOneByUsersIdb(usersIdb, req.query);
        if (!objAmProjecttemplateUser1C) {
            util.setError(404, `Cannot find amProjecttemplateUser1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amProjecttemplateUser1C', objAmProjecttemplateUser1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesUsers1CCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAmProjecttemplateUser1C = await amProjecttemplateUser1CService.findOneByDateModified(dateModified, req.query);
        if (!objAmProjecttemplateUser1C) {
            util.setError(404, `Cannot find amProjecttemplateUser1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amProjecttemplateUser1C', objAmProjecttemplateUser1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



amProjecttemplatesUsers1CCtrl.updateAmProjecttemplateUser1CById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAmProjecttemplateUser1C = await amProjecttemplateUser1CService.updateAmProjecttemplateUser1CById(id, req.body);
            if (!objAmProjecttemplateUser1C) {
                util.setError(404, `Cannot find amProjecttemplateUser1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmProjecttemplateUser1C updated', objAmProjecttemplateUser1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amProjecttemplatesUsers1CCtrl.updateAmProjecttemplateUser1CByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAmProjecttemplateUser1C = await amProjecttemplateUser1CService.updateAmProjecttemplateUser1CByDeleted(deleted, req.body);
            if (!objAmProjecttemplateUser1C) {
                util.setError(404, `Cannot find amProjecttemplateUser1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmProjecttemplateUser1C updated', objAmProjecttemplateUser1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amProjecttemplatesUsers1CCtrl.updateAmProjecttemplateUser1CByAmProjecttemplatesIda = async (req, res) => {
     const { amProjecttemplatesIda } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAmProjecttemplateUser1C = await amProjecttemplateUser1CService.updateAmProjecttemplateUser1CByAmProjecttemplatesIda(amProjecttemplatesIda, req.body);
            if (!objAmProjecttemplateUser1C) {
                util.setError(404, `Cannot find amProjecttemplateUser1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmProjecttemplateUser1C updated', objAmProjecttemplateUser1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amProjecttemplatesUsers1CCtrl.updateAmProjecttemplateUser1CByUsersIdb = async (req, res) => {
     const { usersIdb } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAmProjecttemplateUser1C = await amProjecttemplateUser1CService.updateAmProjecttemplateUser1CByUsersIdb(usersIdb, req.body);
            if (!objAmProjecttemplateUser1C) {
                util.setError(404, `Cannot find amProjecttemplateUser1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmProjecttemplateUser1C updated', objAmProjecttemplateUser1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amProjecttemplatesUsers1CCtrl.updateAmProjecttemplateUser1CByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAmProjecttemplateUser1C = await amProjecttemplateUser1CService.updateAmProjecttemplateUser1CByDateModified(dateModified, req.body);
            if (!objAmProjecttemplateUser1C) {
                util.setError(404, `Cannot find amProjecttemplateUser1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmProjecttemplateUser1C updated', objAmProjecttemplateUser1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = amProjecttemplatesUsers1CCtrl;
//</es-section>
