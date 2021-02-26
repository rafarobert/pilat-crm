/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:18 GMT-0400 (Bolivia Time)
 * Time: 0:22:18
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:18 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:18
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const aoProductAuditService = require('../services/aos_products_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aosProductsAuditCtrl = {};
aosProductsAuditCtrl.service = aoProductAuditService;


aosProductsAuditCtrl.getAllAosProductsAudit = async (req, res) => {
    try {
        const objAosProductsAudit = await aoProductAuditService.getAllAosProductsAudit(req.query);
        if (objAosProductsAudit.length > 0) {
            util.setSuccess(200, 'AosProductsAudit retrieved', objAosProductsAudit);
        } else {
            util.setSuccess(200, 'No aoProductAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsAuditCtrl.getAAoProductAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAoProductAudit = await aoProductAuditService.getAAoProductAudit(id, req.query);
        if (!objAoProductAudit) {
            util.setError(404, `Cannot find aoProductAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aoProductAudit', objAoProductAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsAuditCtrl.addAoProductAudit = async (req, res) => {
    try {
        const objAoProductAudit = await aoProductAuditService.addAoProductAudit(req.body);
        util.setSuccess(201, 'AoProductAudit Added!', objAoProductAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsAuditCtrl.updateAoProductAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAoProductAudit = await aoProductAuditService.updateAoProductAudit(id, req.body);
        if (!objAoProductAudit) {
            util.setError(404, `Cannot find aoProductAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AoProductAudit updated', objAoProductAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aosProductsAuditCtrl.deleteAoProductAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAoProductAudit = await aoProductAuditService.deleteAoProductAudit(id);
        if (objAoProductAudit) {
            util.setSuccess(200, 'AoProductAudit deleted', objAoProductAudit);
        } else {
            util.setError(404, `AoProductAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aosProductsAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAoProductAudit = await aoProductAuditService.findOneById(id, req.query);
        if (!objAoProductAudit) {
            util.setError(404, `Cannot find aoProductAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductAudit', objAoProductAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAoProductAudit = await aoProductAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objAoProductAudit) {
            util.setError(404, `Cannot find aoProductAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductAudit', objAoProductAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objAoProductAudit = await aoProductAuditService.findOneByFieldName(fieldName, req.query);
        if (!objAoProductAudit) {
            util.setError(404, `Cannot find aoProductAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductAudit', objAoProductAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objAoProductAudit = await aoProductAuditService.findOneByDataType(dataType, req.query);
        if (!objAoProductAudit) {
            util.setError(404, `Cannot find aoProductAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductAudit', objAoProductAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objAoProductAudit = await aoProductAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objAoProductAudit) {
            util.setError(404, `Cannot find aoProductAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductAudit', objAoProductAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objAoProductAudit = await aoProductAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objAoProductAudit) {
            util.setError(404, `Cannot find aoProductAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductAudit', objAoProductAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objAoProductAudit = await aoProductAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objAoProductAudit) {
            util.setError(404, `Cannot find aoProductAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductAudit', objAoProductAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objAoProductAudit = await aoProductAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objAoProductAudit) {
            util.setError(404, `Cannot find aoProductAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductAudit', objAoProductAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objAoProductAudit = await aoProductAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objAoProductAudit) {
            util.setError(404, `Cannot find aoProductAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductAudit', objAoProductAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objAoProductAudit = await aoProductAuditService.findOneByParentId(parentId, req.query);
        if (!objAoProductAudit) {
            util.setError(404, `Cannot find aoProductAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductAudit', objAoProductAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aosProductsAuditCtrl.updateAoProductAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductAudit = await aoProductAuditService.updateAoProductAuditById(id, req.body);
            if (!objAoProductAudit) {
                util.setError(404, `Cannot find aoProductAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductAudit updated', objAoProductAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsAuditCtrl.updateAoProductAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductAudit = await aoProductAuditService.updateAoProductAuditByCreatedBy(createdBy, req.body);
            if (!objAoProductAudit) {
                util.setError(404, `Cannot find aoProductAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductAudit updated', objAoProductAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsAuditCtrl.updateAoProductAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductAudit = await aoProductAuditService.updateAoProductAuditByFieldName(fieldName, req.body);
            if (!objAoProductAudit) {
                util.setError(404, `Cannot find aoProductAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductAudit updated', objAoProductAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsAuditCtrl.updateAoProductAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductAudit = await aoProductAuditService.updateAoProductAuditByDataType(dataType, req.body);
            if (!objAoProductAudit) {
                util.setError(404, `Cannot find aoProductAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductAudit updated', objAoProductAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsAuditCtrl.updateAoProductAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductAudit = await aoProductAuditService.updateAoProductAuditByBeforeValueString(beforeValueString, req.body);
            if (!objAoProductAudit) {
                util.setError(404, `Cannot find aoProductAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductAudit updated', objAoProductAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsAuditCtrl.updateAoProductAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductAudit = await aoProductAuditService.updateAoProductAuditByAfterValueString(afterValueString, req.body);
            if (!objAoProductAudit) {
                util.setError(404, `Cannot find aoProductAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductAudit updated', objAoProductAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsAuditCtrl.updateAoProductAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductAudit = await aoProductAuditService.updateAoProductAuditByBeforeValueText(beforeValueText, req.body);
            if (!objAoProductAudit) {
                util.setError(404, `Cannot find aoProductAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductAudit updated', objAoProductAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsAuditCtrl.updateAoProductAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductAudit = await aoProductAuditService.updateAoProductAuditByAfterValueText(afterValueText, req.body);
            if (!objAoProductAudit) {
                util.setError(404, `Cannot find aoProductAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductAudit updated', objAoProductAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsAuditCtrl.updateAoProductAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductAudit = await aoProductAuditService.updateAoProductAuditByDateCreated(dateCreated, req.body);
            if (!objAoProductAudit) {
                util.setError(404, `Cannot find aoProductAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductAudit updated', objAoProductAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsAuditCtrl.updateAoProductAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductAudit = await aoProductAuditService.updateAoProductAuditByParentId(parentId, req.body);
            if (!objAoProductAudit) {
                util.setError(404, `Cannot find aoProductAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductAudit updated', objAoProductAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aosProductsAuditCtrl;
//</es-section>
