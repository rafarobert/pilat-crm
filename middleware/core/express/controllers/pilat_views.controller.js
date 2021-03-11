/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:28 GMT-0400 (Bolivia Time)
 * Time: 14:57:28
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:28 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:28
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const pilatViewService = require('../services/pilat_views.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const pilatViewsCtrl = {};
pilatViewsCtrl.service = pilatViewService;


pilatViewsCtrl.getAllPilatViews = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.pilatViews.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objPilatViews = await pilatViewService.getAllPilatViews(req.query);
        if (objPilatViews && objPilatViews.rows && objPilatViews.count) {
            util.setSuccess(200, 'PilatViews retrieved', objPilatViews.rows, objPilatViews.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No pilatView found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatViewsCtrl.getAPilatView = async (req, res) => {
    try {
        const { Id } = req.params;
        if (!util.isString(Id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objPilatView = await pilatViewService.getAPilatView(Id, req.query);
        if (!objPilatView) {
            util.setError(404, `Cannot find pilatView with the id ${Id}`);
        } else {
            util.setSuccess(200, 'Found pilatView', objPilatView);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatViewsCtrl.addPilatView = async (req, res) => {
    try {
        const objPilatView = await pilatViewService.addPilatView(req.body);
        util.setSuccess(201, 'PilatView Added!', objPilatView);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatViewsCtrl.updatePilatView = async (req, res) => {
    try {
        const { Id } = req.params;
        if (!util.isString(Id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objPilatView = await pilatViewService.updatePilatView(Id, req.body);
        if (!objPilatView) {
            util.setError(404, `Cannot find pilatView with the id: ${Id}`);
        } else {
            util.setSuccess(200, 'PilatView updated', objPilatView);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

pilatViewsCtrl.deletePilatView = async (req, res) => {
    try {
        const { Id } = req.params;
        if (!util.isString(Id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objPilatView = await pilatViewService.deletePilatView(Id);
        if (objPilatView) {
            util.setSuccess(200, 'PilatView deleted', objPilatView);
        } else {
            util.setError(404, `PilatView with the id ${Id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



pilatViewsCtrl.findOneByUid = async (req, res) => {
    try {
        const { Id } = req.params;
        const objPilatView = await pilatViewService.findOneByUid(Id, req.query);
        if (!objPilatView) {
            util.setError(404, `Cannot find pilatView with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatView', objPilatView);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatViewsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objPilatView = await pilatViewService.findOneById(id, req.query);
        if (!objPilatView) {
            util.setError(404, `Cannot find pilatView with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatView', objPilatView);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatViewsCtrl.findOneByVieCode = async (req, res) => {
    try {
        const { vieCode } = req.params;
        const objPilatView = await pilatViewService.findOneByVieCode(vieCode, req.query);
        if (!objPilatView) {
            util.setError(404, `Cannot find pilatView with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatView', objPilatView);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatViewsCtrl.findOneByVieDescription = async (req, res) => {
    try {
        const { vieDescription } = req.params;
        const objPilatView = await pilatViewService.findOneByVieDescription(vieDescription, req.query);
        if (!objPilatView) {
            util.setError(404, `Cannot find pilatView with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatView', objPilatView);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatViewsCtrl.findOneByVieRoute = async (req, res) => {
    try {
        const { vieRoute } = req.params;
        const objPilatView = await pilatViewService.findOneByVieRoute(vieRoute, req.query);
        if (!objPilatView) {
            util.setError(404, `Cannot find pilatView with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatView', objPilatView);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatViewsCtrl.findOneByVieParams = async (req, res) => {
    try {
        const { vieParams } = req.params;
        const objPilatView = await pilatViewService.findOneByVieParams(vieParams, req.query);
        if (!objPilatView) {
            util.setError(404, `Cannot find pilatView with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatView', objPilatView);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatViewsCtrl.findOneByVieIcon = async (req, res) => {
    try {
        const { vieIcon } = req.params;
        const objPilatView = await pilatViewService.findOneByVieIcon(vieIcon, req.query);
        if (!objPilatView) {
            util.setError(404, `Cannot find pilatView with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatView', objPilatView);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatViewsCtrl.findOneByVieGroup = async (req, res) => {
    try {
        const { vieGroup } = req.params;
        const objPilatView = await pilatViewService.findOneByVieGroup(vieGroup, req.query);
        if (!objPilatView) {
            util.setError(404, `Cannot find pilatView with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatView', objPilatView);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatViewsCtrl.findOneByCreatedby = async (req, res) => {
    try {
        const { createdby } = req.params;
        const objPilatView = await pilatViewService.findOneByCreatedby(createdby, req.query);
        if (!objPilatView) {
            util.setError(404, `Cannot find pilatView with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatView', objPilatView);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatViewsCtrl.findOneByUpdatedby = async (req, res) => {
    try {
        const { updatedby } = req.params;
        const objPilatView = await pilatViewService.findOneByUpdatedby(updatedby, req.query);
        if (!objPilatView) {
            util.setError(404, `Cannot find pilatView with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatView', objPilatView);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatViewsCtrl.findOneByVieModuleId = async (req, res) => {
    try {
        const { vieModuleId } = req.params;
        const objPilatView = await pilatViewService.findOneByVieModuleId(vieModuleId, req.query);
        if (!objPilatView) {
            util.setError(404, `Cannot find pilatView with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatView', objPilatView);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatViewsCtrl.findOneByVieReturnId = async (req, res) => {
    try {
        const { vieReturnId } = req.params;
        const objPilatView = await pilatViewService.findOneByVieReturnId(vieReturnId, req.query);
        if (!objPilatView) {
            util.setError(404, `Cannot find pilatView with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatView', objPilatView);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatViewsCtrl.findOneByVieParStatusId = async (req, res) => {
    try {
        const { vieParStatusId } = req.params;
        const objPilatView = await pilatViewService.findOneByVieParStatusId(vieParStatusId, req.query);
        if (!objPilatView) {
            util.setError(404, `Cannot find pilatView with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatView', objPilatView);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatViewsCtrl.findOneByDueat = async (req, res) => {
    try {
        const { dueat } = req.params;
        const objPilatView = await pilatViewService.findOneByDueat(dueat, req.query);
        if (!objPilatView) {
            util.setError(404, `Cannot find pilatView with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatView', objPilatView);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatViewsCtrl.findOneByCreatedat = async (req, res) => {
    try {
        const { createdat } = req.params;
        const objPilatView = await pilatViewService.findOneByCreatedat(createdat, req.query);
        if (!objPilatView) {
            util.setError(404, `Cannot find pilatView with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatView', objPilatView);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatViewsCtrl.findOneByUpdatedat = async (req, res) => {
    try {
        const { updatedat } = req.params;
        const objPilatView = await pilatViewService.findOneByUpdatedat(updatedat, req.query);
        if (!objPilatView) {
            util.setError(404, `Cannot find pilatView with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatView', objPilatView);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



pilatViewsCtrl.updatePilatViewByUid = async (req, res) => {
     const { Id } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatView = await pilatViewService.updatePilatViewByUid(Id, req.body);
            if (!objPilatView) {
                util.setError(404, `Cannot find pilatView with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatView updated', objPilatView);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatViewsCtrl.updatePilatViewById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatView = await pilatViewService.updatePilatViewById(id, req.body);
            if (!objPilatView) {
                util.setError(404, `Cannot find pilatView with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatView updated', objPilatView);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatViewsCtrl.updatePilatViewByVieCode = async (req, res) => {
     const { vieCode } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatView = await pilatViewService.updatePilatViewByVieCode(vieCode, req.body);
            if (!objPilatView) {
                util.setError(404, `Cannot find pilatView with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatView updated', objPilatView);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatViewsCtrl.updatePilatViewByVieDescription = async (req, res) => {
     const { vieDescription } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatView = await pilatViewService.updatePilatViewByVieDescription(vieDescription, req.body);
            if (!objPilatView) {
                util.setError(404, `Cannot find pilatView with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatView updated', objPilatView);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatViewsCtrl.updatePilatViewByVieRoute = async (req, res) => {
     const { vieRoute } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatView = await pilatViewService.updatePilatViewByVieRoute(vieRoute, req.body);
            if (!objPilatView) {
                util.setError(404, `Cannot find pilatView with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatView updated', objPilatView);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatViewsCtrl.updatePilatViewByVieParams = async (req, res) => {
     const { vieParams } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatView = await pilatViewService.updatePilatViewByVieParams(vieParams, req.body);
            if (!objPilatView) {
                util.setError(404, `Cannot find pilatView with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatView updated', objPilatView);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatViewsCtrl.updatePilatViewByVieIcon = async (req, res) => {
     const { vieIcon } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatView = await pilatViewService.updatePilatViewByVieIcon(vieIcon, req.body);
            if (!objPilatView) {
                util.setError(404, `Cannot find pilatView with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatView updated', objPilatView);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatViewsCtrl.updatePilatViewByVieGroup = async (req, res) => {
     const { vieGroup } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatView = await pilatViewService.updatePilatViewByVieGroup(vieGroup, req.body);
            if (!objPilatView) {
                util.setError(404, `Cannot find pilatView with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatView updated', objPilatView);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatViewsCtrl.updatePilatViewByCreatedby = async (req, res) => {
     const { createdby } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatView = await pilatViewService.updatePilatViewByCreatedby(createdby, req.body);
            if (!objPilatView) {
                util.setError(404, `Cannot find pilatView with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatView updated', objPilatView);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatViewsCtrl.updatePilatViewByUpdatedby = async (req, res) => {
     const { updatedby } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatView = await pilatViewService.updatePilatViewByUpdatedby(updatedby, req.body);
            if (!objPilatView) {
                util.setError(404, `Cannot find pilatView with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatView updated', objPilatView);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatViewsCtrl.updatePilatViewByVieModuleId = async (req, res) => {
     const { vieModuleId } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatView = await pilatViewService.updatePilatViewByVieModuleId(vieModuleId, req.body);
            if (!objPilatView) {
                util.setError(404, `Cannot find pilatView with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatView updated', objPilatView);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatViewsCtrl.updatePilatViewByVieReturnId = async (req, res) => {
     const { vieReturnId } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatView = await pilatViewService.updatePilatViewByVieReturnId(vieReturnId, req.body);
            if (!objPilatView) {
                util.setError(404, `Cannot find pilatView with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatView updated', objPilatView);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatViewsCtrl.updatePilatViewByVieParStatusId = async (req, res) => {
     const { vieParStatusId } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatView = await pilatViewService.updatePilatViewByVieParStatusId(vieParStatusId, req.body);
            if (!objPilatView) {
                util.setError(404, `Cannot find pilatView with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatView updated', objPilatView);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatViewsCtrl.updatePilatViewByDueat = async (req, res) => {
     const { dueat } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatView = await pilatViewService.updatePilatViewByDueat(dueat, req.body);
            if (!objPilatView) {
                util.setError(404, `Cannot find pilatView with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatView updated', objPilatView);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatViewsCtrl.updatePilatViewByCreatedat = async (req, res) => {
     const { createdat } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatView = await pilatViewService.updatePilatViewByCreatedat(createdat, req.body);
            if (!objPilatView) {
                util.setError(404, `Cannot find pilatView with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatView updated', objPilatView);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatViewsCtrl.updatePilatViewByUpdatedat = async (req, res) => {
     const { updatedat } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatView = await pilatViewService.updatePilatViewByUpdatedat(updatedat, req.body);
            if (!objPilatView) {
                util.setError(404, `Cannot find pilatView with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatView updated', objPilatView);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}



pilatViewsCtrl.findPilatModulesVieModuleWithModCode = async (req, res) => {
    try {
        const { select } = req.params;
        const pilatViews = await pilatViewService.findPilatModulesVieModuleWithModCode(select, req.query);
        if (pilatViews.length > 0) {
            util.setSuccess(200, 'PilatViews retrieved', pilatViews);
        } else {
            util.setSuccess(200, 'No pilatView found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatViewsCtrl.findPilatViewsVieReturnWithVieCode = async (req, res) => {
    try {
        const { select } = req.params;
        const pilatViews = await pilatViewService.findPilatViewsVieReturnWithVieCode(select, req.query);
        if (pilatViews.length > 0) {
            util.setSuccess(200, 'PilatViews retrieved', pilatViews);
        } else {
            util.setSuccess(200, 'No pilatView found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatViewsCtrl.findPilatParamsVieParStatusWithParOrder = async (req, res) => {
    try {
        const { select } = req.params;
        const pilatViews = await pilatViewService.findPilatParamsVieParStatusWithParOrder(select, req.query);
        if (pilatViews.length > 0) {
            util.setSuccess(200, 'PilatViews retrieved', pilatViews);
        } else {
            util.setSuccess(200, 'No pilatView found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



pilatViewsCtrl.filterPilatViewsByVieModule = async (req, res) => {
    try {
        const { Id } = req.params;
        const pilatViews = await pilatViewService.filterPilatViewsByVieModule(Id, req.query);
        if (pilatViews.length > 0) {
            util.setSuccess(200, 'PilatViews retrieved', pilatViews);
        } else {
            util.setSuccess(200, 'No pilatView found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatViewsCtrl.filterPilatViewsByVieModule = async (req, res) => {
    try {
        const { id } = req.params;
        const pilatViews = await pilatViewService.filterPilatViewsByVieModule(id, req.query);
        if (pilatViews.length > 0) {
            util.setSuccess(200, 'PilatViews retrieved', pilatViews);
        } else {
            util.setSuccess(200, 'No pilatView found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatViewsCtrl.filterPilatViewsByVieModule = async (req, res) => {
    try {
        const { vieCode } = req.params;
        const pilatViews = await pilatViewService.filterPilatViewsByVieModule(vieCode, req.query);
        if (pilatViews.length > 0) {
            util.setSuccess(200, 'PilatViews retrieved', pilatViews);
        } else {
            util.setSuccess(200, 'No pilatView found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatViewsCtrl.filterPilatViewsByVieModule = async (req, res) => {
    try {
        const { vieDescription } = req.params;
        const pilatViews = await pilatViewService.filterPilatViewsByVieModule(vieDescription, req.query);
        if (pilatViews.length > 0) {
            util.setSuccess(200, 'PilatViews retrieved', pilatViews);
        } else {
            util.setSuccess(200, 'No pilatView found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatViewsCtrl.filterPilatViewsByVieModule = async (req, res) => {
    try {
        const { vieRoute } = req.params;
        const pilatViews = await pilatViewService.filterPilatViewsByVieModule(vieRoute, req.query);
        if (pilatViews.length > 0) {
            util.setSuccess(200, 'PilatViews retrieved', pilatViews);
        } else {
            util.setSuccess(200, 'No pilatView found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatViewsCtrl.filterPilatViewsByVieModule = async (req, res) => {
    try {
        const { vieParams } = req.params;
        const pilatViews = await pilatViewService.filterPilatViewsByVieModule(vieParams, req.query);
        if (pilatViews.length > 0) {
            util.setSuccess(200, 'PilatViews retrieved', pilatViews);
        } else {
            util.setSuccess(200, 'No pilatView found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatViewsCtrl.filterPilatViewsByVieModule = async (req, res) => {
    try {
        const { vieIcon } = req.params;
        const pilatViews = await pilatViewService.filterPilatViewsByVieModule(vieIcon, req.query);
        if (pilatViews.length > 0) {
            util.setSuccess(200, 'PilatViews retrieved', pilatViews);
        } else {
            util.setSuccess(200, 'No pilatView found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatViewsCtrl.filterPilatViewsByVieModule = async (req, res) => {
    try {
        const { vieGroup } = req.params;
        const pilatViews = await pilatViewService.filterPilatViewsByVieModule(vieGroup, req.query);
        if (pilatViews.length > 0) {
            util.setSuccess(200, 'PilatViews retrieved', pilatViews);
        } else {
            util.setSuccess(200, 'No pilatView found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatViewsCtrl.filterPilatViewsByVieModule = async (req, res) => {
    try {
        const { createdby } = req.params;
        const pilatViews = await pilatViewService.filterPilatViewsByVieModule(createdby, req.query);
        if (pilatViews.length > 0) {
            util.setSuccess(200, 'PilatViews retrieved', pilatViews);
        } else {
            util.setSuccess(200, 'No pilatView found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatViewsCtrl.filterPilatViewsByVieModule = async (req, res) => {
    try {
        const { updatedby } = req.params;
        const pilatViews = await pilatViewService.filterPilatViewsByVieModule(updatedby, req.query);
        if (pilatViews.length > 0) {
            util.setSuccess(200, 'PilatViews retrieved', pilatViews);
        } else {
            util.setSuccess(200, 'No pilatView found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatViewsCtrl.filterPilatViewsByVieModule = async (req, res) => {
    try {
        const { vieModuleId } = req.params;
        const pilatViews = await pilatViewService.filterPilatViewsByVieModule(vieModuleId, req.query);
        if (pilatViews.length > 0) {
            util.setSuccess(200, 'PilatViews retrieved', pilatViews);
        } else {
            util.setSuccess(200, 'No pilatView found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatViewsCtrl.filterPilatViewsByVieReturn = async (req, res) => {
    try {
        const { vieReturnId } = req.params;
        const pilatViews = await pilatViewService.filterPilatViewsByVieReturn(vieReturnId, req.query);
        if (pilatViews.length > 0) {
            util.setSuccess(200, 'PilatViews retrieved', pilatViews);
        } else {
            util.setSuccess(200, 'No pilatView found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatViewsCtrl.filterPilatViewsByVieParStatus = async (req, res) => {
    try {
        const { vieParStatusId } = req.params;
        const pilatViews = await pilatViewService.filterPilatViewsByVieParStatus(vieParStatusId, req.query);
        if (pilatViews.length > 0) {
            util.setSuccess(200, 'PilatViews retrieved', pilatViews);
        } else {
            util.setSuccess(200, 'No pilatView found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatViewsCtrl.filterPilatViewsByVieModule = async (req, res) => {
    try {
        const { dueat } = req.params;
        const pilatViews = await pilatViewService.filterPilatViewsByVieModule(dueat, req.query);
        if (pilatViews.length > 0) {
            util.setSuccess(200, 'PilatViews retrieved', pilatViews);
        } else {
            util.setSuccess(200, 'No pilatView found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatViewsCtrl.filterPilatViewsByVieModule = async (req, res) => {
    try {
        const { createdat } = req.params;
        const pilatViews = await pilatViewService.filterPilatViewsByVieModule(createdat, req.query);
        if (pilatViews.length > 0) {
            util.setSuccess(200, 'PilatViews retrieved', pilatViews);
        } else {
            util.setSuccess(200, 'No pilatView found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatViewsCtrl.filterPilatViewsByVieModule = async (req, res) => {
    try {
        const { updatedat } = req.params;
        const pilatViews = await pilatViewService.filterPilatViewsByVieModule(updatedat, req.query);
        if (pilatViews.length > 0) {
            util.setSuccess(200, 'PilatViews retrieved', pilatViews);
        } else {
            util.setSuccess(200, 'No pilatView found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



//</es-section>

//<es-section>
module.exports = pilatViewsCtrl;
//</es-section>
