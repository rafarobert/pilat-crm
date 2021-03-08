/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:43 GMT-0400 (Bolivia Time)
 * Time: 15:36:43
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:43 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:43
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const pilatModuleService = require('../services/pilat_modules.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const pilatModulesCtrl = {};
pilatModulesCtrl.service = pilatModuleService;


pilatModulesCtrl.getAllPilatModules = async (req, res) => {
    try {
        const objPilatModules = await pilatModuleService.getAllPilatModules(req.query);
        if (objPilatModules.length > 0) {
            util.setSuccess(200, 'PilatModules retrieved', objPilatModules);
        } else {
            util.setSuccess(200, 'No pilatModule found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatModulesCtrl.getAPilatModule = async (req, res) => {
    try {
        const { Id } = req.params;
        if (!util.isString(Id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objPilatModule = await pilatModuleService.getAPilatModule(Id, req.query);
        if (!objPilatModule) {
            util.setError(404, `Cannot find pilatModule with the id ${Id}`);
        } else {
            util.setSuccess(200, 'Found pilatModule', objPilatModule);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatModulesCtrl.addPilatModule = async (req, res) => {
    try {
        const objPilatModule = await pilatModuleService.addPilatModule(req.body);
        util.setSuccess(201, 'PilatModule Added!', objPilatModule);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatModulesCtrl.updatePilatModule = async (req, res) => {
    try {
        const { Id } = req.params;
        if (!util.isString(Id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objPilatModule = await pilatModuleService.updatePilatModule(Id, req.body);
        if (!objPilatModule) {
            util.setError(404, `Cannot find pilatModule with the id: ${Id}`);
        } else {
            util.setSuccess(200, 'PilatModule updated', objPilatModule);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

pilatModulesCtrl.deletePilatModule = async (req, res) => {
    try {
        const { Id } = req.params;
        if (!util.isString(Id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objPilatModule = await pilatModuleService.deletePilatModule(Id);
        if (objPilatModule) {
            util.setSuccess(200, 'PilatModule deleted', objPilatModule);
        } else {
            util.setError(404, `PilatModule with the id ${Id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



pilatModulesCtrl.findOneByUid = async (req, res) => {
    try {
        const { Id } = req.params;
        const objPilatModule = await pilatModuleService.findOneByUid(Id, req.query);
        if (!objPilatModule) {
            util.setError(404, `Cannot find pilatModule with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatModule', objPilatModule);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatModulesCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objPilatModule = await pilatModuleService.findOneById(id, req.query);
        if (!objPilatModule) {
            util.setError(404, `Cannot find pilatModule with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatModule', objPilatModule);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatModulesCtrl.findOneByModCode = async (req, res) => {
    try {
        const { modCode } = req.params;
        const objPilatModule = await pilatModuleService.findOneByModCode(modCode, req.query);
        if (!objPilatModule) {
            util.setError(404, `Cannot find pilatModule with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatModule', objPilatModule);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatModulesCtrl.findOneByModDescription = async (req, res) => {
    try {
        const { modDescription } = req.params;
        const objPilatModule = await pilatModuleService.findOneByModDescription(modDescription, req.query);
        if (!objPilatModule) {
            util.setError(404, `Cannot find pilatModule with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatModule', objPilatModule);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatModulesCtrl.findOneByModAbbr = async (req, res) => {
    try {
        const { modAbbr } = req.params;
        const objPilatModule = await pilatModuleService.findOneByModAbbr(modAbbr, req.query);
        if (!objPilatModule) {
            util.setError(404, `Cannot find pilatModule with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatModule', objPilatModule);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatModulesCtrl.findOneByModIcon = async (req, res) => {
    try {
        const { modIcon } = req.params;
        const objPilatModule = await pilatModuleService.findOneByModIcon(modIcon, req.query);
        if (!objPilatModule) {
            util.setError(404, `Cannot find pilatModule with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatModule', objPilatModule);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatModulesCtrl.findOneByModGroup = async (req, res) => {
    try {
        const { modGroup } = req.params;
        const objPilatModule = await pilatModuleService.findOneByModGroup(modGroup, req.query);
        if (!objPilatModule) {
            util.setError(404, `Cannot find pilatModule with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatModule', objPilatModule);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatModulesCtrl.findOneByModParStatusId = async (req, res) => {
    try {
        const { modParStatusId } = req.params;
        const objPilatModule = await pilatModuleService.findOneByModParStatusId(modParStatusId, req.query);
        if (!objPilatModule) {
            util.setError(404, `Cannot find pilatModule with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatModule', objPilatModule);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatModulesCtrl.findOneByCreatedby = async (req, res) => {
    try {
        const { createdby } = req.params;
        const objPilatModule = await pilatModuleService.findOneByCreatedby(createdby, req.query);
        if (!objPilatModule) {
            util.setError(404, `Cannot find pilatModule with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatModule', objPilatModule);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatModulesCtrl.findOneByUpdatedby = async (req, res) => {
    try {
        const { updatedby } = req.params;
        const objPilatModule = await pilatModuleService.findOneByUpdatedby(updatedby, req.query);
        if (!objPilatModule) {
            util.setError(404, `Cannot find pilatModule with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatModule', objPilatModule);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatModulesCtrl.findOneByModParentId = async (req, res) => {
    try {
        const { modParentId } = req.params;
        const objPilatModule = await pilatModuleService.findOneByModParentId(modParentId, req.query);
        if (!objPilatModule) {
            util.setError(404, `Cannot find pilatModule with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatModule', objPilatModule);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatModulesCtrl.findOneByDueat = async (req, res) => {
    try {
        const { dueat } = req.params;
        const objPilatModule = await pilatModuleService.findOneByDueat(dueat, req.query);
        if (!objPilatModule) {
            util.setError(404, `Cannot find pilatModule with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatModule', objPilatModule);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatModulesCtrl.findOneByCreatedat = async (req, res) => {
    try {
        const { createdat } = req.params;
        const objPilatModule = await pilatModuleService.findOneByCreatedat(createdat, req.query);
        if (!objPilatModule) {
            util.setError(404, `Cannot find pilatModule with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatModule', objPilatModule);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatModulesCtrl.findOneByUpdatedat = async (req, res) => {
    try {
        const { updatedat } = req.params;
        const objPilatModule = await pilatModuleService.findOneByUpdatedat(updatedat, req.query);
        if (!objPilatModule) {
            util.setError(404, `Cannot find pilatModule with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found pilatModule', objPilatModule);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



pilatModulesCtrl.updatePilatModuleByUid = async (req, res) => {
     const { Id } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatModule = await pilatModuleService.updatePilatModuleByUid(Id, req.body);
            if (!objPilatModule) {
                util.setError(404, `Cannot find pilatModule with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatModule updated', objPilatModule);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatModulesCtrl.updatePilatModuleById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatModule = await pilatModuleService.updatePilatModuleById(id, req.body);
            if (!objPilatModule) {
                util.setError(404, `Cannot find pilatModule with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatModule updated', objPilatModule);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatModulesCtrl.updatePilatModuleByModCode = async (req, res) => {
     const { modCode } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatModule = await pilatModuleService.updatePilatModuleByModCode(modCode, req.body);
            if (!objPilatModule) {
                util.setError(404, `Cannot find pilatModule with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatModule updated', objPilatModule);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatModulesCtrl.updatePilatModuleByModDescription = async (req, res) => {
     const { modDescription } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatModule = await pilatModuleService.updatePilatModuleByModDescription(modDescription, req.body);
            if (!objPilatModule) {
                util.setError(404, `Cannot find pilatModule with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatModule updated', objPilatModule);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatModulesCtrl.updatePilatModuleByModAbbr = async (req, res) => {
     const { modAbbr } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatModule = await pilatModuleService.updatePilatModuleByModAbbr(modAbbr, req.body);
            if (!objPilatModule) {
                util.setError(404, `Cannot find pilatModule with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatModule updated', objPilatModule);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatModulesCtrl.updatePilatModuleByModIcon = async (req, res) => {
     const { modIcon } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatModule = await pilatModuleService.updatePilatModuleByModIcon(modIcon, req.body);
            if (!objPilatModule) {
                util.setError(404, `Cannot find pilatModule with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatModule updated', objPilatModule);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatModulesCtrl.updatePilatModuleByModGroup = async (req, res) => {
     const { modGroup } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatModule = await pilatModuleService.updatePilatModuleByModGroup(modGroup, req.body);
            if (!objPilatModule) {
                util.setError(404, `Cannot find pilatModule with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatModule updated', objPilatModule);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatModulesCtrl.updatePilatModuleByModParStatusId = async (req, res) => {
     const { modParStatusId } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatModule = await pilatModuleService.updatePilatModuleByModParStatusId(modParStatusId, req.body);
            if (!objPilatModule) {
                util.setError(404, `Cannot find pilatModule with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatModule updated', objPilatModule);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatModulesCtrl.updatePilatModuleByCreatedby = async (req, res) => {
     const { createdby } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatModule = await pilatModuleService.updatePilatModuleByCreatedby(createdby, req.body);
            if (!objPilatModule) {
                util.setError(404, `Cannot find pilatModule with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatModule updated', objPilatModule);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatModulesCtrl.updatePilatModuleByUpdatedby = async (req, res) => {
     const { updatedby } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatModule = await pilatModuleService.updatePilatModuleByUpdatedby(updatedby, req.body);
            if (!objPilatModule) {
                util.setError(404, `Cannot find pilatModule with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatModule updated', objPilatModule);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatModulesCtrl.updatePilatModuleByModParentId = async (req, res) => {
     const { modParentId } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatModule = await pilatModuleService.updatePilatModuleByModParentId(modParentId, req.body);
            if (!objPilatModule) {
                util.setError(404, `Cannot find pilatModule with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatModule updated', objPilatModule);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatModulesCtrl.updatePilatModuleByDueat = async (req, res) => {
     const { dueat } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatModule = await pilatModuleService.updatePilatModuleByDueat(dueat, req.body);
            if (!objPilatModule) {
                util.setError(404, `Cannot find pilatModule with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatModule updated', objPilatModule);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatModulesCtrl.updatePilatModuleByCreatedat = async (req, res) => {
     const { createdat } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatModule = await pilatModuleService.updatePilatModuleByCreatedat(createdat, req.body);
            if (!objPilatModule) {
                util.setError(404, `Cannot find pilatModule with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatModule updated', objPilatModule);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

pilatModulesCtrl.updatePilatModuleByUpdatedat = async (req, res) => {
     const { updatedat } = req.params;
        try {
            if (!util.isString(Id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objPilatModule = await pilatModuleService.updatePilatModuleByUpdatedat(updatedat, req.body);
            if (!objPilatModule) {
                util.setError(404, `Cannot find pilatModule with the id: ${Id}`);
            } else {
                util.setSuccess(200, 'PilatModule updated', objPilatModule);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}



pilatModulesCtrl.findPilatParamsModParStatusWithParOrder = async (req, res) => {
    try {
        const { select } = req.params;
        const pilatModules = await pilatModuleService.findPilatParamsModParStatusWithParOrder(select, req.query);
        if (pilatModules.length > 0) {
            util.setSuccess(200, 'PilatModules retrieved', pilatModules);
        } else {
            util.setSuccess(200, 'No pilatModule found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatModulesCtrl.findPilatModulesModParentWithModCode = async (req, res) => {
    try {
        const { select } = req.params;
        const pilatModules = await pilatModuleService.findPilatModulesModParentWithModCode(select, req.query);
        if (pilatModules.length > 0) {
            util.setSuccess(200, 'PilatModules retrieved', pilatModules);
        } else {
            util.setSuccess(200, 'No pilatModule found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



pilatModulesCtrl.filterPilatModulesByModParStatus = async (req, res) => {
    try {
        const { Id } = req.params;
        const pilatModules = await pilatModuleService.filterPilatModulesByModParStatus(Id, req.query);
        if (pilatModules.length > 0) {
            util.setSuccess(200, 'PilatModules retrieved', pilatModules);
        } else {
            util.setSuccess(200, 'No pilatModule found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatModulesCtrl.filterPilatModulesByModParStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const pilatModules = await pilatModuleService.filterPilatModulesByModParStatus(id, req.query);
        if (pilatModules.length > 0) {
            util.setSuccess(200, 'PilatModules retrieved', pilatModules);
        } else {
            util.setSuccess(200, 'No pilatModule found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatModulesCtrl.filterPilatModulesByModParStatus = async (req, res) => {
    try {
        const { modCode } = req.params;
        const pilatModules = await pilatModuleService.filterPilatModulesByModParStatus(modCode, req.query);
        if (pilatModules.length > 0) {
            util.setSuccess(200, 'PilatModules retrieved', pilatModules);
        } else {
            util.setSuccess(200, 'No pilatModule found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatModulesCtrl.filterPilatModulesByModParStatus = async (req, res) => {
    try {
        const { modDescription } = req.params;
        const pilatModules = await pilatModuleService.filterPilatModulesByModParStatus(modDescription, req.query);
        if (pilatModules.length > 0) {
            util.setSuccess(200, 'PilatModules retrieved', pilatModules);
        } else {
            util.setSuccess(200, 'No pilatModule found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatModulesCtrl.filterPilatModulesByModParStatus = async (req, res) => {
    try {
        const { modAbbr } = req.params;
        const pilatModules = await pilatModuleService.filterPilatModulesByModParStatus(modAbbr, req.query);
        if (pilatModules.length > 0) {
            util.setSuccess(200, 'PilatModules retrieved', pilatModules);
        } else {
            util.setSuccess(200, 'No pilatModule found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatModulesCtrl.filterPilatModulesByModParStatus = async (req, res) => {
    try {
        const { modIcon } = req.params;
        const pilatModules = await pilatModuleService.filterPilatModulesByModParStatus(modIcon, req.query);
        if (pilatModules.length > 0) {
            util.setSuccess(200, 'PilatModules retrieved', pilatModules);
        } else {
            util.setSuccess(200, 'No pilatModule found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatModulesCtrl.filterPilatModulesByModParStatus = async (req, res) => {
    try {
        const { modGroup } = req.params;
        const pilatModules = await pilatModuleService.filterPilatModulesByModParStatus(modGroup, req.query);
        if (pilatModules.length > 0) {
            util.setSuccess(200, 'PilatModules retrieved', pilatModules);
        } else {
            util.setSuccess(200, 'No pilatModule found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatModulesCtrl.filterPilatModulesByModParStatus = async (req, res) => {
    try {
        const { modParStatusId } = req.params;
        const pilatModules = await pilatModuleService.filterPilatModulesByModParStatus(modParStatusId, req.query);
        if (pilatModules.length > 0) {
            util.setSuccess(200, 'PilatModules retrieved', pilatModules);
        } else {
            util.setSuccess(200, 'No pilatModule found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatModulesCtrl.filterPilatModulesByModParStatus = async (req, res) => {
    try {
        const { createdby } = req.params;
        const pilatModules = await pilatModuleService.filterPilatModulesByModParStatus(createdby, req.query);
        if (pilatModules.length > 0) {
            util.setSuccess(200, 'PilatModules retrieved', pilatModules);
        } else {
            util.setSuccess(200, 'No pilatModule found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatModulesCtrl.filterPilatModulesByModParStatus = async (req, res) => {
    try {
        const { updatedby } = req.params;
        const pilatModules = await pilatModuleService.filterPilatModulesByModParStatus(updatedby, req.query);
        if (pilatModules.length > 0) {
            util.setSuccess(200, 'PilatModules retrieved', pilatModules);
        } else {
            util.setSuccess(200, 'No pilatModule found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatModulesCtrl.filterPilatModulesByModParent = async (req, res) => {
    try {
        const { modParentId } = req.params;
        const pilatModules = await pilatModuleService.filterPilatModulesByModParent(modParentId, req.query);
        if (pilatModules.length > 0) {
            util.setSuccess(200, 'PilatModules retrieved', pilatModules);
        } else {
            util.setSuccess(200, 'No pilatModule found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatModulesCtrl.filterPilatModulesByModParStatus = async (req, res) => {
    try {
        const { dueat } = req.params;
        const pilatModules = await pilatModuleService.filterPilatModulesByModParStatus(dueat, req.query);
        if (pilatModules.length > 0) {
            util.setSuccess(200, 'PilatModules retrieved', pilatModules);
        } else {
            util.setSuccess(200, 'No pilatModule found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatModulesCtrl.filterPilatModulesByModParStatus = async (req, res) => {
    try {
        const { createdat } = req.params;
        const pilatModules = await pilatModuleService.filterPilatModulesByModParStatus(createdat, req.query);
        if (pilatModules.length > 0) {
            util.setSuccess(200, 'PilatModules retrieved', pilatModules);
        } else {
            util.setSuccess(200, 'No pilatModule found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

pilatModulesCtrl.filterPilatModulesByModParStatus = async (req, res) => {
    try {
        const { updatedat } = req.params;
        const pilatModules = await pilatModuleService.filterPilatModulesByModParStatus(updatedat, req.query);
        if (pilatModules.length > 0) {
            util.setSuccess(200, 'PilatModules retrieved', pilatModules);
        } else {
            util.setSuccess(200, 'No pilatModule found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



//</es-section>

//<es-section>
module.exports = pilatModulesCtrl;
//</es-section>
