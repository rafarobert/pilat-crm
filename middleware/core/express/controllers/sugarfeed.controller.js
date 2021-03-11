/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:44 GMT-0400 (Bolivia Time)
 * Time: 14:57:44
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:44 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:44
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const sugarfeedService = require('../services/sugarfeed.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const sugarfeedCtrl = {};
sugarfeedCtrl.service = sugarfeedService;


sugarfeedCtrl.getAllSugarfeed = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.sugarfeed.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objSugarfeed = await sugarfeedService.getAllSugarfeed(req.query);
        if (objSugarfeed && objSugarfeed.rows && objSugarfeed.count) {
            util.setSuccess(200, 'Sugarfeed retrieved', objSugarfeed.rows, objSugarfeed.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No sugarfeed found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

sugarfeedCtrl.getASugarfeed = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objSugarfeed = await sugarfeedService.getASugarfeed(id, req.query);
        if (!objSugarfeed) {
            util.setError(404, `Cannot find sugarfeed with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found sugarfeed', objSugarfeed);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

sugarfeedCtrl.addSugarfeed = async (req, res) => {
    try {
        const objSugarfeed = await sugarfeedService.addSugarfeed(req.body);
        util.setSuccess(201, 'Sugarfeed Added!', objSugarfeed);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

sugarfeedCtrl.updateSugarfeed = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objSugarfeed = await sugarfeedService.updateSugarfeed(id, req.body);
        if (!objSugarfeed) {
            util.setError(404, `Cannot find sugarfeed with the id: ${id}`);
        } else {
            util.setSuccess(200, 'Sugarfeed updated', objSugarfeed);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

sugarfeedCtrl.deleteSugarfeed = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objSugarfeed = await sugarfeedService.deleteSugarfeed(id);
        if (objSugarfeed) {
            util.setSuccess(200, 'Sugarfeed deleted', objSugarfeed);
        } else {
            util.setError(404, `Sugarfeed with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



sugarfeedCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objSugarfeed = await sugarfeedService.findOneById(id, req.query);
        if (!objSugarfeed) {
            util.setError(404, `Cannot find sugarfeed with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found sugarfeed', objSugarfeed);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

sugarfeedCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objSugarfeed = await sugarfeedService.findOneByDeleted(deleted, req.query);
        if (!objSugarfeed) {
            util.setError(404, `Cannot find sugarfeed with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found sugarfeed', objSugarfeed);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

sugarfeedCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objSugarfeed = await sugarfeedService.findOneByName(name, req.query);
        if (!objSugarfeed) {
            util.setError(404, `Cannot find sugarfeed with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found sugarfeed', objSugarfeed);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

sugarfeedCtrl.findOneByRelatedModule = async (req, res) => {
    try {
        const { relatedModule } = req.params;
        const objSugarfeed = await sugarfeedService.findOneByRelatedModule(relatedModule, req.query);
        if (!objSugarfeed) {
            util.setError(404, `Cannot find sugarfeed with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found sugarfeed', objSugarfeed);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

sugarfeedCtrl.findOneByLinkUrl = async (req, res) => {
    try {
        const { linkUrl } = req.params;
        const objSugarfeed = await sugarfeedService.findOneByLinkUrl(linkUrl, req.query);
        if (!objSugarfeed) {
            util.setError(404, `Cannot find sugarfeed with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found sugarfeed', objSugarfeed);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

sugarfeedCtrl.findOneByLinkType = async (req, res) => {
    try {
        const { linkType } = req.params;
        const objSugarfeed = await sugarfeedService.findOneByLinkType(linkType, req.query);
        if (!objSugarfeed) {
            util.setError(404, `Cannot find sugarfeed with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found sugarfeed', objSugarfeed);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

sugarfeedCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objSugarfeed = await sugarfeedService.findOneByDescription(description, req.query);
        if (!objSugarfeed) {
            util.setError(404, `Cannot find sugarfeed with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found sugarfeed', objSugarfeed);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

sugarfeedCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objSugarfeed = await sugarfeedService.findOneByDateEntered(dateEntered, req.query);
        if (!objSugarfeed) {
            util.setError(404, `Cannot find sugarfeed with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found sugarfeed', objSugarfeed);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

sugarfeedCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objSugarfeed = await sugarfeedService.findOneByDateModified(dateModified, req.query);
        if (!objSugarfeed) {
            util.setError(404, `Cannot find sugarfeed with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found sugarfeed', objSugarfeed);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

sugarfeedCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objSugarfeed = await sugarfeedService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objSugarfeed) {
            util.setError(404, `Cannot find sugarfeed with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found sugarfeed', objSugarfeed);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

sugarfeedCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objSugarfeed = await sugarfeedService.findOneByCreatedBy(createdBy, req.query);
        if (!objSugarfeed) {
            util.setError(404, `Cannot find sugarfeed with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found sugarfeed', objSugarfeed);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

sugarfeedCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objSugarfeed = await sugarfeedService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objSugarfeed) {
            util.setError(404, `Cannot find sugarfeed with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found sugarfeed', objSugarfeed);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

sugarfeedCtrl.findOneByRelatedId = async (req, res) => {
    try {
        const { relatedId } = req.params;
        const objSugarfeed = await sugarfeedService.findOneByRelatedId(relatedId, req.query);
        if (!objSugarfeed) {
            util.setError(404, `Cannot find sugarfeed with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found sugarfeed', objSugarfeed);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



sugarfeedCtrl.updateSugarfeedById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSugarfeed = await sugarfeedService.updateSugarfeedById(id, req.body);
            if (!objSugarfeed) {
                util.setError(404, `Cannot find sugarfeed with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Sugarfeed updated', objSugarfeed);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

sugarfeedCtrl.updateSugarfeedByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSugarfeed = await sugarfeedService.updateSugarfeedByDeleted(deleted, req.body);
            if (!objSugarfeed) {
                util.setError(404, `Cannot find sugarfeed with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Sugarfeed updated', objSugarfeed);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

sugarfeedCtrl.updateSugarfeedByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSugarfeed = await sugarfeedService.updateSugarfeedByName(name, req.body);
            if (!objSugarfeed) {
                util.setError(404, `Cannot find sugarfeed with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Sugarfeed updated', objSugarfeed);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

sugarfeedCtrl.updateSugarfeedByRelatedModule = async (req, res) => {
     const { relatedModule } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSugarfeed = await sugarfeedService.updateSugarfeedByRelatedModule(relatedModule, req.body);
            if (!objSugarfeed) {
                util.setError(404, `Cannot find sugarfeed with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Sugarfeed updated', objSugarfeed);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

sugarfeedCtrl.updateSugarfeedByLinkUrl = async (req, res) => {
     const { linkUrl } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSugarfeed = await sugarfeedService.updateSugarfeedByLinkUrl(linkUrl, req.body);
            if (!objSugarfeed) {
                util.setError(404, `Cannot find sugarfeed with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Sugarfeed updated', objSugarfeed);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

sugarfeedCtrl.updateSugarfeedByLinkType = async (req, res) => {
     const { linkType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSugarfeed = await sugarfeedService.updateSugarfeedByLinkType(linkType, req.body);
            if (!objSugarfeed) {
                util.setError(404, `Cannot find sugarfeed with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Sugarfeed updated', objSugarfeed);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

sugarfeedCtrl.updateSugarfeedByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSugarfeed = await sugarfeedService.updateSugarfeedByDescription(description, req.body);
            if (!objSugarfeed) {
                util.setError(404, `Cannot find sugarfeed with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Sugarfeed updated', objSugarfeed);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

sugarfeedCtrl.updateSugarfeedByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSugarfeed = await sugarfeedService.updateSugarfeedByDateEntered(dateEntered, req.body);
            if (!objSugarfeed) {
                util.setError(404, `Cannot find sugarfeed with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Sugarfeed updated', objSugarfeed);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

sugarfeedCtrl.updateSugarfeedByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSugarfeed = await sugarfeedService.updateSugarfeedByDateModified(dateModified, req.body);
            if (!objSugarfeed) {
                util.setError(404, `Cannot find sugarfeed with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Sugarfeed updated', objSugarfeed);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

sugarfeedCtrl.updateSugarfeedByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSugarfeed = await sugarfeedService.updateSugarfeedByModifiedUserId(modifiedUserId, req.body);
            if (!objSugarfeed) {
                util.setError(404, `Cannot find sugarfeed with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Sugarfeed updated', objSugarfeed);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

sugarfeedCtrl.updateSugarfeedByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSugarfeed = await sugarfeedService.updateSugarfeedByCreatedBy(createdBy, req.body);
            if (!objSugarfeed) {
                util.setError(404, `Cannot find sugarfeed with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Sugarfeed updated', objSugarfeed);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

sugarfeedCtrl.updateSugarfeedByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSugarfeed = await sugarfeedService.updateSugarfeedByAssignedUserId(assignedUserId, req.body);
            if (!objSugarfeed) {
                util.setError(404, `Cannot find sugarfeed with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Sugarfeed updated', objSugarfeed);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

sugarfeedCtrl.updateSugarfeedByRelatedId = async (req, res) => {
     const { relatedId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSugarfeed = await sugarfeedService.updateSugarfeedByRelatedId(relatedId, req.body);
            if (!objSugarfeed) {
                util.setError(404, `Cannot find sugarfeed with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Sugarfeed updated', objSugarfeed);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = sugarfeedCtrl;
//</es-section>
