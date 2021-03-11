/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:51 GMT-0400 (Bolivia Time)
 * Time: 14:57:51
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:51 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:51
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const templatesectionlineService = require('../services/templatesectionline.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const templatesectionlineCtrl = {};
templatesectionlineCtrl.service = templatesectionlineService;


templatesectionlineCtrl.getAllTemplatesectionline = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.templatesectionline.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objTemplatesectionline = await templatesectionlineService.getAllTemplatesectionline(req.query);
        if (objTemplatesectionline && objTemplatesectionline.rows && objTemplatesectionline.count) {
            util.setSuccess(200, 'Templatesectionline retrieved', objTemplatesectionline.rows, objTemplatesectionline.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No templatesectionline found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

templatesectionlineCtrl.getATemplatesectionline = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objTemplatesectionline = await templatesectionlineService.getATemplatesectionline(id, req.query);
        if (!objTemplatesectionline) {
            util.setError(404, `Cannot find templatesectionline with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found templatesectionline', objTemplatesectionline);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

templatesectionlineCtrl.addTemplatesectionline = async (req, res) => {
    try {
        const objTemplatesectionline = await templatesectionlineService.addTemplatesectionline(req.body);
        util.setSuccess(201, 'Templatesectionline Added!', objTemplatesectionline);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

templatesectionlineCtrl.updateTemplatesectionline = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objTemplatesectionline = await templatesectionlineService.updateTemplatesectionline(id, req.body);
        if (!objTemplatesectionline) {
            util.setError(404, `Cannot find templatesectionline with the id: ${id}`);
        } else {
            util.setSuccess(200, 'Templatesectionline updated', objTemplatesectionline);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

templatesectionlineCtrl.deleteTemplatesectionline = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objTemplatesectionline = await templatesectionlineService.deleteTemplatesectionline(id);
        if (objTemplatesectionline) {
            util.setSuccess(200, 'Templatesectionline deleted', objTemplatesectionline);
        } else {
            util.setError(404, `Templatesectionline with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



templatesectionlineCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objTemplatesectionline = await templatesectionlineService.findOneById(id, req.query);
        if (!objTemplatesectionline) {
            util.setError(404, `Cannot find templatesectionline with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found templatesectionline', objTemplatesectionline);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

templatesectionlineCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objTemplatesectionline = await templatesectionlineService.findOneByDeleted(deleted, req.query);
        if (!objTemplatesectionline) {
            util.setError(404, `Cannot find templatesectionline with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found templatesectionline', objTemplatesectionline);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

templatesectionlineCtrl.findOneByOrd = async (req, res) => {
    try {
        const { ord } = req.params;
        const objTemplatesectionline = await templatesectionlineService.findOneByOrd(ord, req.query);
        if (!objTemplatesectionline) {
            util.setError(404, `Cannot find templatesectionline with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found templatesectionline', objTemplatesectionline);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

templatesectionlineCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objTemplatesectionline = await templatesectionlineService.findOneByName(name, req.query);
        if (!objTemplatesectionline) {
            util.setError(404, `Cannot find templatesectionline with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found templatesectionline', objTemplatesectionline);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

templatesectionlineCtrl.findOneByThumbnail = async (req, res) => {
    try {
        const { thumbnail } = req.params;
        const objTemplatesectionline = await templatesectionlineService.findOneByThumbnail(thumbnail, req.query);
        if (!objTemplatesectionline) {
            util.setError(404, `Cannot find templatesectionline with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found templatesectionline', objTemplatesectionline);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

templatesectionlineCtrl.findOneByGrp = async (req, res) => {
    try {
        const { grp } = req.params;
        const objTemplatesectionline = await templatesectionlineService.findOneByGrp(grp, req.query);
        if (!objTemplatesectionline) {
            util.setError(404, `Cannot find templatesectionline with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found templatesectionline', objTemplatesectionline);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

templatesectionlineCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objTemplatesectionline = await templatesectionlineService.findOneByDescription(description, req.query);
        if (!objTemplatesectionline) {
            util.setError(404, `Cannot find templatesectionline with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found templatesectionline', objTemplatesectionline);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

templatesectionlineCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objTemplatesectionline = await templatesectionlineService.findOneByDateEntered(dateEntered, req.query);
        if (!objTemplatesectionline) {
            util.setError(404, `Cannot find templatesectionline with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found templatesectionline', objTemplatesectionline);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

templatesectionlineCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objTemplatesectionline = await templatesectionlineService.findOneByDateModified(dateModified, req.query);
        if (!objTemplatesectionline) {
            util.setError(404, `Cannot find templatesectionline with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found templatesectionline', objTemplatesectionline);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

templatesectionlineCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objTemplatesectionline = await templatesectionlineService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objTemplatesectionline) {
            util.setError(404, `Cannot find templatesectionline with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found templatesectionline', objTemplatesectionline);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

templatesectionlineCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objTemplatesectionline = await templatesectionlineService.findOneByCreatedBy(createdBy, req.query);
        if (!objTemplatesectionline) {
            util.setError(404, `Cannot find templatesectionline with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found templatesectionline', objTemplatesectionline);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



templatesectionlineCtrl.updateTemplatesectionlineById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objTemplatesectionline = await templatesectionlineService.updateTemplatesectionlineById(id, req.body);
            if (!objTemplatesectionline) {
                util.setError(404, `Cannot find templatesectionline with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Templatesectionline updated', objTemplatesectionline);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

templatesectionlineCtrl.updateTemplatesectionlineByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objTemplatesectionline = await templatesectionlineService.updateTemplatesectionlineByDeleted(deleted, req.body);
            if (!objTemplatesectionline) {
                util.setError(404, `Cannot find templatesectionline with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Templatesectionline updated', objTemplatesectionline);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

templatesectionlineCtrl.updateTemplatesectionlineByOrd = async (req, res) => {
     const { ord } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objTemplatesectionline = await templatesectionlineService.updateTemplatesectionlineByOrd(ord, req.body);
            if (!objTemplatesectionline) {
                util.setError(404, `Cannot find templatesectionline with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Templatesectionline updated', objTemplatesectionline);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

templatesectionlineCtrl.updateTemplatesectionlineByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objTemplatesectionline = await templatesectionlineService.updateTemplatesectionlineByName(name, req.body);
            if (!objTemplatesectionline) {
                util.setError(404, `Cannot find templatesectionline with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Templatesectionline updated', objTemplatesectionline);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

templatesectionlineCtrl.updateTemplatesectionlineByThumbnail = async (req, res) => {
     const { thumbnail } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objTemplatesectionline = await templatesectionlineService.updateTemplatesectionlineByThumbnail(thumbnail, req.body);
            if (!objTemplatesectionline) {
                util.setError(404, `Cannot find templatesectionline with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Templatesectionline updated', objTemplatesectionline);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

templatesectionlineCtrl.updateTemplatesectionlineByGrp = async (req, res) => {
     const { grp } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objTemplatesectionline = await templatesectionlineService.updateTemplatesectionlineByGrp(grp, req.body);
            if (!objTemplatesectionline) {
                util.setError(404, `Cannot find templatesectionline with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Templatesectionline updated', objTemplatesectionline);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

templatesectionlineCtrl.updateTemplatesectionlineByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objTemplatesectionline = await templatesectionlineService.updateTemplatesectionlineByDescription(description, req.body);
            if (!objTemplatesectionline) {
                util.setError(404, `Cannot find templatesectionline with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Templatesectionline updated', objTemplatesectionline);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

templatesectionlineCtrl.updateTemplatesectionlineByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objTemplatesectionline = await templatesectionlineService.updateTemplatesectionlineByDateEntered(dateEntered, req.body);
            if (!objTemplatesectionline) {
                util.setError(404, `Cannot find templatesectionline with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Templatesectionline updated', objTemplatesectionline);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

templatesectionlineCtrl.updateTemplatesectionlineByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objTemplatesectionline = await templatesectionlineService.updateTemplatesectionlineByDateModified(dateModified, req.body);
            if (!objTemplatesectionline) {
                util.setError(404, `Cannot find templatesectionline with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Templatesectionline updated', objTemplatesectionline);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

templatesectionlineCtrl.updateTemplatesectionlineByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objTemplatesectionline = await templatesectionlineService.updateTemplatesectionlineByModifiedUserId(modifiedUserId, req.body);
            if (!objTemplatesectionline) {
                util.setError(404, `Cannot find templatesectionline with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Templatesectionline updated', objTemplatesectionline);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

templatesectionlineCtrl.updateTemplatesectionlineByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objTemplatesectionline = await templatesectionlineService.updateTemplatesectionlineByCreatedBy(createdBy, req.body);
            if (!objTemplatesectionline) {
                util.setError(404, `Cannot find templatesectionline with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Templatesectionline updated', objTemplatesectionline);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = templatesectionlineCtrl;
//</es-section>
