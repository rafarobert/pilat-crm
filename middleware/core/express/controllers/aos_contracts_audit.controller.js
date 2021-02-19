/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:42:08 GMT-0400 (Bolivia Time)
 * Time: 4:42:8
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:42:08 GMT-0400 (Bolivia Time)
 * Last time updated: 4:42:8
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const aoContractAuditService = require('../services/aos_contracts_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aosContractsAuditCtrl = {};
aosContractsAuditCtrl.service = aoContractAuditService;


aosContractsAuditCtrl.getAllAosContractsAudit = async (req, res) => {
    try {
        const objAosContractsAudit = await aoContractAuditService.getAllAosContractsAudit(req.query);
        if (objAosContractsAudit.length > 0) {
            util.setSuccess(200, 'AosContractsAudit retrieved', objAosContractsAudit);
        } else {
            util.setSuccess(200, 'No aoContractAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsAuditCtrl.getAAoContractAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAoContractAudit = await aoContractAuditService.getAAoContractAudit(id, req.query);
        if (!objAoContractAudit) {
            util.setError(404, `Cannot find aoContractAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aoContractAudit', objAoContractAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsAuditCtrl.addAoContractAudit = async (req, res) => {
    try {
        const objAoContractAudit = await aoContractAuditService.addAoContractAudit(req.body);
        util.setSuccess(201, 'AoContractAudit Added!', objAoContractAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsAuditCtrl.updateAoContractAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAoContractAudit = await aoContractAuditService.updateAoContractAudit(id, req.body);
        if (!objAoContractAudit) {
            util.setError(404, `Cannot find aoContractAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AoContractAudit updated', objAoContractAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aosContractsAuditCtrl.deleteAoContractAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAoContractAudit = await aoContractAuditService.deleteAoContractAudit(id);
        if (objAoContractAudit) {
            util.setSuccess(200, 'AoContractAudit deleted', objAoContractAudit);
        } else {
            util.setError(404, `AoContractAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aosContractsAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAoContractAudit = await aoContractAuditService.findOneById(id, req.query);
        if (!objAoContractAudit) {
            util.setError(404, `Cannot find aoContractAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContractAudit', objAoContractAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAoContractAudit = await aoContractAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objAoContractAudit) {
            util.setError(404, `Cannot find aoContractAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContractAudit', objAoContractAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objAoContractAudit = await aoContractAuditService.findOneByFieldName(fieldName, req.query);
        if (!objAoContractAudit) {
            util.setError(404, `Cannot find aoContractAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContractAudit', objAoContractAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objAoContractAudit = await aoContractAuditService.findOneByDataType(dataType, req.query);
        if (!objAoContractAudit) {
            util.setError(404, `Cannot find aoContractAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContractAudit', objAoContractAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objAoContractAudit = await aoContractAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objAoContractAudit) {
            util.setError(404, `Cannot find aoContractAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContractAudit', objAoContractAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objAoContractAudit = await aoContractAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objAoContractAudit) {
            util.setError(404, `Cannot find aoContractAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContractAudit', objAoContractAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objAoContractAudit = await aoContractAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objAoContractAudit) {
            util.setError(404, `Cannot find aoContractAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContractAudit', objAoContractAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objAoContractAudit = await aoContractAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objAoContractAudit) {
            util.setError(404, `Cannot find aoContractAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContractAudit', objAoContractAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objAoContractAudit = await aoContractAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objAoContractAudit) {
            util.setError(404, `Cannot find aoContractAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContractAudit', objAoContractAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosContractsAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objAoContractAudit = await aoContractAuditService.findOneByParentId(parentId, req.query);
        if (!objAoContractAudit) {
            util.setError(404, `Cannot find aoContractAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoContractAudit', objAoContractAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aosContractsAuditCtrl.updateAoContractAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContractAudit = await aoContractAuditService.updateAoContractAuditById(id, req.body);
            if (!objAoContractAudit) {
                util.setError(404, `Cannot find aoContractAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContractAudit updated', objAoContractAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsAuditCtrl.updateAoContractAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContractAudit = await aoContractAuditService.updateAoContractAuditByCreatedBy(createdBy, req.body);
            if (!objAoContractAudit) {
                util.setError(404, `Cannot find aoContractAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContractAudit updated', objAoContractAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsAuditCtrl.updateAoContractAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContractAudit = await aoContractAuditService.updateAoContractAuditByFieldName(fieldName, req.body);
            if (!objAoContractAudit) {
                util.setError(404, `Cannot find aoContractAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContractAudit updated', objAoContractAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsAuditCtrl.updateAoContractAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContractAudit = await aoContractAuditService.updateAoContractAuditByDataType(dataType, req.body);
            if (!objAoContractAudit) {
                util.setError(404, `Cannot find aoContractAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContractAudit updated', objAoContractAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsAuditCtrl.updateAoContractAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContractAudit = await aoContractAuditService.updateAoContractAuditByBeforeValueString(beforeValueString, req.body);
            if (!objAoContractAudit) {
                util.setError(404, `Cannot find aoContractAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContractAudit updated', objAoContractAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsAuditCtrl.updateAoContractAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContractAudit = await aoContractAuditService.updateAoContractAuditByAfterValueString(afterValueString, req.body);
            if (!objAoContractAudit) {
                util.setError(404, `Cannot find aoContractAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContractAudit updated', objAoContractAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsAuditCtrl.updateAoContractAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContractAudit = await aoContractAuditService.updateAoContractAuditByBeforeValueText(beforeValueText, req.body);
            if (!objAoContractAudit) {
                util.setError(404, `Cannot find aoContractAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContractAudit updated', objAoContractAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsAuditCtrl.updateAoContractAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContractAudit = await aoContractAuditService.updateAoContractAuditByAfterValueText(afterValueText, req.body);
            if (!objAoContractAudit) {
                util.setError(404, `Cannot find aoContractAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContractAudit updated', objAoContractAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsAuditCtrl.updateAoContractAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContractAudit = await aoContractAuditService.updateAoContractAuditByDateCreated(dateCreated, req.body);
            if (!objAoContractAudit) {
                util.setError(404, `Cannot find aoContractAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContractAudit updated', objAoContractAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosContractsAuditCtrl.updateAoContractAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoContractAudit = await aoContractAuditService.updateAoContractAuditByParentId(parentId, req.body);
            if (!objAoContractAudit) {
                util.setError(404, `Cannot find aoContractAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoContractAudit updated', objAoContractAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aosContractsAuditCtrl;
//</es-section>
