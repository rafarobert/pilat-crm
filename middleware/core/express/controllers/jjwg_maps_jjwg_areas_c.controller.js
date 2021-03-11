/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:07 GMT-0400 (Bolivia Time)
 * Time: 14:57:7
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:07 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:7
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const jjwgMapJjwgAreaCService = require('../services/jjwg_maps_jjwg_areas_c.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const jjwgMapsJjwgAreasCCtrl = {};
jjwgMapsJjwgAreasCCtrl.service = jjwgMapJjwgAreaCService;


jjwgMapsJjwgAreasCCtrl.getAllJjwgMapsJjwgAreasC = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.jjwgMapsJjwgAreasC.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objJjwgMapsJjwgAreasC = await jjwgMapJjwgAreaCService.getAllJjwgMapsJjwgAreasC(req.query);
        if (objJjwgMapsJjwgAreasC && objJjwgMapsJjwgAreasC.rows && objJjwgMapsJjwgAreasC.count) {
            util.setSuccess(200, 'JjwgMapsJjwgAreasC retrieved', objJjwgMapsJjwgAreasC.rows, objJjwgMapsJjwgAreasC.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No jjwgMapJjwgAreaC found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMapsJjwgAreasCCtrl.getAJjwgMapJjwgAreaC = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objJjwgMapJjwgAreaC = await jjwgMapJjwgAreaCService.getAJjwgMapJjwgAreaC(id, req.query);
        if (!objJjwgMapJjwgAreaC) {
            util.setError(404, `Cannot find jjwgMapJjwgAreaC with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found jjwgMapJjwgAreaC', objJjwgMapJjwgAreaC);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMapsJjwgAreasCCtrl.addJjwgMapJjwgAreaC = async (req, res) => {
    try {
        const objJjwgMapJjwgAreaC = await jjwgMapJjwgAreaCService.addJjwgMapJjwgAreaC(req.body);
        util.setSuccess(201, 'JjwgMapJjwgAreaC Added!', objJjwgMapJjwgAreaC);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMapsJjwgAreasCCtrl.updateJjwgMapJjwgAreaC = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objJjwgMapJjwgAreaC = await jjwgMapJjwgAreaCService.updateJjwgMapJjwgAreaC(id, req.body);
        if (!objJjwgMapJjwgAreaC) {
            util.setError(404, `Cannot find jjwgMapJjwgAreaC with the id: ${id}`);
        } else {
            util.setSuccess(200, 'JjwgMapJjwgAreaC updated', objJjwgMapJjwgAreaC);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

jjwgMapsJjwgAreasCCtrl.deleteJjwgMapJjwgAreaC = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objJjwgMapJjwgAreaC = await jjwgMapJjwgAreaCService.deleteJjwgMapJjwgAreaC(id);
        if (objJjwgMapJjwgAreaC) {
            util.setSuccess(200, 'JjwgMapJjwgAreaC deleted', objJjwgMapJjwgAreaC);
        } else {
            util.setError(404, `JjwgMapJjwgAreaC with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



jjwgMapsJjwgAreasCCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objJjwgMapJjwgAreaC = await jjwgMapJjwgAreaCService.findOneById(id, req.query);
        if (!objJjwgMapJjwgAreaC) {
            util.setError(404, `Cannot find jjwgMapJjwgAreaC with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMapJjwgAreaC', objJjwgMapJjwgAreaC);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMapsJjwgAreasCCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objJjwgMapJjwgAreaC = await jjwgMapJjwgAreaCService.findOneByDeleted(deleted, req.query);
        if (!objJjwgMapJjwgAreaC) {
            util.setError(404, `Cannot find jjwgMapJjwgAreaC with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMapJjwgAreaC', objJjwgMapJjwgAreaC);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMapsJjwgAreasCCtrl.findOneByJjwgMaps5304wgMapsIda = async (req, res) => {
    try {
        const { jjwgMaps5304wgMapsIda } = req.params;
        const objJjwgMapJjwgAreaC = await jjwgMapJjwgAreaCService.findOneByJjwgMaps5304wgMapsIda(jjwgMaps5304wgMapsIda, req.query);
        if (!objJjwgMapJjwgAreaC) {
            util.setError(404, `Cannot find jjwgMapJjwgAreaC with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMapJjwgAreaC', objJjwgMapJjwgAreaC);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMapsJjwgAreasCCtrl.findOneByJjwgMaps41f2gAreasIdb = async (req, res) => {
    try {
        const { jjwgMaps41f2gAreasIdb } = req.params;
        const objJjwgMapJjwgAreaC = await jjwgMapJjwgAreaCService.findOneByJjwgMaps41f2gAreasIdb(jjwgMaps41f2gAreasIdb, req.query);
        if (!objJjwgMapJjwgAreaC) {
            util.setError(404, `Cannot find jjwgMapJjwgAreaC with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMapJjwgAreaC', objJjwgMapJjwgAreaC);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMapsJjwgAreasCCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objJjwgMapJjwgAreaC = await jjwgMapJjwgAreaCService.findOneByDateModified(dateModified, req.query);
        if (!objJjwgMapJjwgAreaC) {
            util.setError(404, `Cannot find jjwgMapJjwgAreaC with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMapJjwgAreaC', objJjwgMapJjwgAreaC);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



jjwgMapsJjwgAreasCCtrl.updateJjwgMapJjwgAreaCById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objJjwgMapJjwgAreaC = await jjwgMapJjwgAreaCService.updateJjwgMapJjwgAreaCById(id, req.body);
            if (!objJjwgMapJjwgAreaC) {
                util.setError(404, `Cannot find jjwgMapJjwgAreaC with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMapJjwgAreaC updated', objJjwgMapJjwgAreaC);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMapsJjwgAreasCCtrl.updateJjwgMapJjwgAreaCByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objJjwgMapJjwgAreaC = await jjwgMapJjwgAreaCService.updateJjwgMapJjwgAreaCByDeleted(deleted, req.body);
            if (!objJjwgMapJjwgAreaC) {
                util.setError(404, `Cannot find jjwgMapJjwgAreaC with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMapJjwgAreaC updated', objJjwgMapJjwgAreaC);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMapsJjwgAreasCCtrl.updateJjwgMapJjwgAreaCByJjwgMaps5304wgMapsIda = async (req, res) => {
     const { jjwgMaps5304wgMapsIda } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objJjwgMapJjwgAreaC = await jjwgMapJjwgAreaCService.updateJjwgMapJjwgAreaCByJjwgMaps5304wgMapsIda(jjwgMaps5304wgMapsIda, req.body);
            if (!objJjwgMapJjwgAreaC) {
                util.setError(404, `Cannot find jjwgMapJjwgAreaC with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMapJjwgAreaC updated', objJjwgMapJjwgAreaC);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMapsJjwgAreasCCtrl.updateJjwgMapJjwgAreaCByJjwgMaps41f2gAreasIdb = async (req, res) => {
     const { jjwgMaps41f2gAreasIdb } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objJjwgMapJjwgAreaC = await jjwgMapJjwgAreaCService.updateJjwgMapJjwgAreaCByJjwgMaps41f2gAreasIdb(jjwgMaps41f2gAreasIdb, req.body);
            if (!objJjwgMapJjwgAreaC) {
                util.setError(404, `Cannot find jjwgMapJjwgAreaC with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMapJjwgAreaC updated', objJjwgMapJjwgAreaC);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMapsJjwgAreasCCtrl.updateJjwgMapJjwgAreaCByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objJjwgMapJjwgAreaC = await jjwgMapJjwgAreaCService.updateJjwgMapJjwgAreaCByDateModified(dateModified, req.body);
            if (!objJjwgMapJjwgAreaC) {
                util.setError(404, `Cannot find jjwgMapJjwgAreaC with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMapJjwgAreaC updated', objJjwgMapJjwgAreaC);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = jjwgMapsJjwgAreasCCtrl;
//</es-section>
