/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:03 GMT-0400 (Bolivia Time)
 * Time: 14:0:3
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:03 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:3
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const amProjecttemplateProject1CService = require('../services/am_projecttemplates_project_1_c.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const amProjecttemplatesProject1CCtrl = {};
amProjecttemplatesProject1CCtrl.service = amProjecttemplateProject1CService;


amProjecttemplatesProject1CCtrl.getAllAmProjecttemplatesProject1C = async (req, res) => {
    try {
        const objAmProjecttemplatesProject1C = await amProjecttemplateProject1CService.getAllAmProjecttemplatesProject1C(req.query);
        if (objAmProjecttemplatesProject1C.length > 0) {
            util.setSuccess(200, 'AmProjecttemplatesProject1C retrieved', objAmProjecttemplatesProject1C);
        } else {
            util.setSuccess(200, 'No amProjecttemplateProject1C found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesProject1CCtrl.getAAmProjecttemplateProject1C = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objAmProjecttemplateProject1C = await amProjecttemplateProject1CService.getAAmProjecttemplateProject1C(id, req.query);
        if (!objAmProjecttemplateProject1C) {
            util.setError(404, `Cannot find amProjecttemplateProject1C with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found amProjecttemplateProject1C', objAmProjecttemplateProject1C);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesProject1CCtrl.addAmProjecttemplateProject1C = async (req, res) => {
    try {
        const objAmProjecttemplateProject1C = await amProjecttemplateProject1CService.addAmProjecttemplateProject1C(req.body);
        util.setSuccess(201, 'AmProjecttemplateProject1C Added!', objAmProjecttemplateProject1C);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesProject1CCtrl.updateAmProjecttemplateProject1C = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objAmProjecttemplateProject1C = await amProjecttemplateProject1CService.updateAmProjecttemplateProject1C(id, req.body);
        if (!objAmProjecttemplateProject1C) {
            util.setError(404, `Cannot find amProjecttemplateProject1C with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AmProjecttemplateProject1C updated', objAmProjecttemplateProject1C);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

amProjecttemplatesProject1CCtrl.deleteAmProjecttemplateProject1C = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objAmProjecttemplateProject1C = await amProjecttemplateProject1CService.deleteAmProjecttemplateProject1C(id);
        if (objAmProjecttemplateProject1C) {
            util.setSuccess(200, 'AmProjecttemplateProject1C deleted', objAmProjecttemplateProject1C);
        } else {
            util.setError(404, `AmProjecttemplateProject1C with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



amProjecttemplatesProject1CCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAmProjecttemplateProject1C = await amProjecttemplateProject1CService.findOneById(id, req.query);
        if (!objAmProjecttemplateProject1C) {
            util.setError(404, `Cannot find amProjecttemplateProject1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amProjecttemplateProject1C', objAmProjecttemplateProject1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesProject1CCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAmProjecttemplateProject1C = await amProjecttemplateProject1CService.findOneByDeleted(deleted, req.query);
        if (!objAmProjecttemplateProject1C) {
            util.setError(404, `Cannot find amProjecttemplateProject1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amProjecttemplateProject1C', objAmProjecttemplateProject1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesProject1CCtrl.findOneByAmProjecttemplatesProject1amProjecttemplatesIda = async (req, res) => {
    try {
        const { amProjecttemplatesProject1amProjecttemplatesIda } = req.params;
        const objAmProjecttemplateProject1C = await amProjecttemplateProject1CService.findOneByAmProjecttemplatesProject1amProjecttemplatesIda(amProjecttemplatesProject1amProjecttemplatesIda, req.query);
        if (!objAmProjecttemplateProject1C) {
            util.setError(404, `Cannot find amProjecttemplateProject1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amProjecttemplateProject1C', objAmProjecttemplateProject1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesProject1CCtrl.findOneByAmProjecttemplatesProject1projectIdb = async (req, res) => {
    try {
        const { amProjecttemplatesProject1projectIdb } = req.params;
        const objAmProjecttemplateProject1C = await amProjecttemplateProject1CService.findOneByAmProjecttemplatesProject1projectIdb(amProjecttemplatesProject1projectIdb, req.query);
        if (!objAmProjecttemplateProject1C) {
            util.setError(404, `Cannot find amProjecttemplateProject1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amProjecttemplateProject1C', objAmProjecttemplateProject1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesProject1CCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAmProjecttemplateProject1C = await amProjecttemplateProject1CService.findOneByDateModified(dateModified, req.query);
        if (!objAmProjecttemplateProject1C) {
            util.setError(404, `Cannot find amProjecttemplateProject1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amProjecttemplateProject1C', objAmProjecttemplateProject1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



amProjecttemplatesProject1CCtrl.updateAmProjecttemplateProject1CById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAmProjecttemplateProject1C = await amProjecttemplateProject1CService.updateAmProjecttemplateProject1CById(id, req.body);
            if (!objAmProjecttemplateProject1C) {
                util.setError(404, `Cannot find amProjecttemplateProject1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmProjecttemplateProject1C updated', objAmProjecttemplateProject1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amProjecttemplatesProject1CCtrl.updateAmProjecttemplateProject1CByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAmProjecttemplateProject1C = await amProjecttemplateProject1CService.updateAmProjecttemplateProject1CByDeleted(deleted, req.body);
            if (!objAmProjecttemplateProject1C) {
                util.setError(404, `Cannot find amProjecttemplateProject1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmProjecttemplateProject1C updated', objAmProjecttemplateProject1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amProjecttemplatesProject1CCtrl.updateAmProjecttemplateProject1CByAmProjecttemplatesProject1amProjecttemplatesIda = async (req, res) => {
     const { amProjecttemplatesProject1amProjecttemplatesIda } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAmProjecttemplateProject1C = await amProjecttemplateProject1CService.updateAmProjecttemplateProject1CByAmProjecttemplatesProject1amProjecttemplatesIda(amProjecttemplatesProject1amProjecttemplatesIda, req.body);
            if (!objAmProjecttemplateProject1C) {
                util.setError(404, `Cannot find amProjecttemplateProject1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmProjecttemplateProject1C updated', objAmProjecttemplateProject1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amProjecttemplatesProject1CCtrl.updateAmProjecttemplateProject1CByAmProjecttemplatesProject1projectIdb = async (req, res) => {
     const { amProjecttemplatesProject1projectIdb } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAmProjecttemplateProject1C = await amProjecttemplateProject1CService.updateAmProjecttemplateProject1CByAmProjecttemplatesProject1projectIdb(amProjecttemplatesProject1projectIdb, req.body);
            if (!objAmProjecttemplateProject1C) {
                util.setError(404, `Cannot find amProjecttemplateProject1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmProjecttemplateProject1C updated', objAmProjecttemplateProject1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amProjecttemplatesProject1CCtrl.updateAmProjecttemplateProject1CByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAmProjecttemplateProject1C = await amProjecttemplateProject1CService.updateAmProjecttemplateProject1CByDateModified(dateModified, req.body);
            if (!objAmProjecttemplateProject1C) {
                util.setError(404, `Cannot find amProjecttemplateProject1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmProjecttemplateProject1C updated', objAmProjecttemplateProject1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = amProjecttemplatesProject1CCtrl;
//</es-section>
