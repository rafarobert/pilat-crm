/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:29 GMT-0400 (Bolivia Time)
 * Time: 15:35:29
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:29 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:29
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const aoProductQuoteAuditService = require('../services/aos_products_quotes_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aosProductsQuotesAuditCtrl = {};
aosProductsQuotesAuditCtrl.service = aoProductQuoteAuditService;


aosProductsQuotesAuditCtrl.getAllAosProductsQuotesAudit = async (req, res) => {
    try {
        const objAosProductsQuotesAudit = await aoProductQuoteAuditService.getAllAosProductsQuotesAudit(req.query);
        if (objAosProductsQuotesAudit.length > 0) {
            util.setSuccess(200, 'AosProductsQuotesAudit retrieved', objAosProductsQuotesAudit);
        } else {
            util.setSuccess(200, 'No aoProductQuoteAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesAuditCtrl.getAAoProductQuoteAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAoProductQuoteAudit = await aoProductQuoteAuditService.getAAoProductQuoteAudit(id, req.query);
        if (!objAoProductQuoteAudit) {
            util.setError(404, `Cannot find aoProductQuoteAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuoteAudit', objAoProductQuoteAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesAuditCtrl.addAoProductQuoteAudit = async (req, res) => {
    try {
        const objAoProductQuoteAudit = await aoProductQuoteAuditService.addAoProductQuoteAudit(req.body);
        util.setSuccess(201, 'AoProductQuoteAudit Added!', objAoProductQuoteAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesAuditCtrl.updateAoProductQuoteAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAoProductQuoteAudit = await aoProductQuoteAuditService.updateAoProductQuoteAudit(id, req.body);
        if (!objAoProductQuoteAudit) {
            util.setError(404, `Cannot find aoProductQuoteAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AoProductQuoteAudit updated', objAoProductQuoteAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aosProductsQuotesAuditCtrl.deleteAoProductQuoteAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAoProductQuoteAudit = await aoProductQuoteAuditService.deleteAoProductQuoteAudit(id);
        if (objAoProductQuoteAudit) {
            util.setSuccess(200, 'AoProductQuoteAudit deleted', objAoProductQuoteAudit);
        } else {
            util.setError(404, `AoProductQuoteAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aosProductsQuotesAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAoProductQuoteAudit = await aoProductQuoteAuditService.findOneById(id, req.query);
        if (!objAoProductQuoteAudit) {
            util.setError(404, `Cannot find aoProductQuoteAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuoteAudit', objAoProductQuoteAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAoProductQuoteAudit = await aoProductQuoteAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objAoProductQuoteAudit) {
            util.setError(404, `Cannot find aoProductQuoteAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuoteAudit', objAoProductQuoteAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objAoProductQuoteAudit = await aoProductQuoteAuditService.findOneByFieldName(fieldName, req.query);
        if (!objAoProductQuoteAudit) {
            util.setError(404, `Cannot find aoProductQuoteAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuoteAudit', objAoProductQuoteAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objAoProductQuoteAudit = await aoProductQuoteAuditService.findOneByDataType(dataType, req.query);
        if (!objAoProductQuoteAudit) {
            util.setError(404, `Cannot find aoProductQuoteAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuoteAudit', objAoProductQuoteAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objAoProductQuoteAudit = await aoProductQuoteAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objAoProductQuoteAudit) {
            util.setError(404, `Cannot find aoProductQuoteAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuoteAudit', objAoProductQuoteAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objAoProductQuoteAudit = await aoProductQuoteAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objAoProductQuoteAudit) {
            util.setError(404, `Cannot find aoProductQuoteAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuoteAudit', objAoProductQuoteAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objAoProductQuoteAudit = await aoProductQuoteAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objAoProductQuoteAudit) {
            util.setError(404, `Cannot find aoProductQuoteAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuoteAudit', objAoProductQuoteAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objAoProductQuoteAudit = await aoProductQuoteAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objAoProductQuoteAudit) {
            util.setError(404, `Cannot find aoProductQuoteAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuoteAudit', objAoProductQuoteAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objAoProductQuoteAudit = await aoProductQuoteAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objAoProductQuoteAudit) {
            util.setError(404, `Cannot find aoProductQuoteAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuoteAudit', objAoProductQuoteAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductsQuotesAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objAoProductQuoteAudit = await aoProductQuoteAuditService.findOneByParentId(parentId, req.query);
        if (!objAoProductQuoteAudit) {
            util.setError(404, `Cannot find aoProductQuoteAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductQuoteAudit', objAoProductQuoteAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aosProductsQuotesAuditCtrl.updateAoProductQuoteAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuoteAudit = await aoProductQuoteAuditService.updateAoProductQuoteAuditById(id, req.body);
            if (!objAoProductQuoteAudit) {
                util.setError(404, `Cannot find aoProductQuoteAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuoteAudit updated', objAoProductQuoteAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsQuotesAuditCtrl.updateAoProductQuoteAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuoteAudit = await aoProductQuoteAuditService.updateAoProductQuoteAuditByCreatedBy(createdBy, req.body);
            if (!objAoProductQuoteAudit) {
                util.setError(404, `Cannot find aoProductQuoteAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuoteAudit updated', objAoProductQuoteAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsQuotesAuditCtrl.updateAoProductQuoteAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuoteAudit = await aoProductQuoteAuditService.updateAoProductQuoteAuditByFieldName(fieldName, req.body);
            if (!objAoProductQuoteAudit) {
                util.setError(404, `Cannot find aoProductQuoteAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuoteAudit updated', objAoProductQuoteAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsQuotesAuditCtrl.updateAoProductQuoteAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuoteAudit = await aoProductQuoteAuditService.updateAoProductQuoteAuditByDataType(dataType, req.body);
            if (!objAoProductQuoteAudit) {
                util.setError(404, `Cannot find aoProductQuoteAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuoteAudit updated', objAoProductQuoteAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsQuotesAuditCtrl.updateAoProductQuoteAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuoteAudit = await aoProductQuoteAuditService.updateAoProductQuoteAuditByBeforeValueString(beforeValueString, req.body);
            if (!objAoProductQuoteAudit) {
                util.setError(404, `Cannot find aoProductQuoteAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuoteAudit updated', objAoProductQuoteAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsQuotesAuditCtrl.updateAoProductQuoteAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuoteAudit = await aoProductQuoteAuditService.updateAoProductQuoteAuditByAfterValueString(afterValueString, req.body);
            if (!objAoProductQuoteAudit) {
                util.setError(404, `Cannot find aoProductQuoteAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuoteAudit updated', objAoProductQuoteAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsQuotesAuditCtrl.updateAoProductQuoteAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuoteAudit = await aoProductQuoteAuditService.updateAoProductQuoteAuditByBeforeValueText(beforeValueText, req.body);
            if (!objAoProductQuoteAudit) {
                util.setError(404, `Cannot find aoProductQuoteAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuoteAudit updated', objAoProductQuoteAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsQuotesAuditCtrl.updateAoProductQuoteAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuoteAudit = await aoProductQuoteAuditService.updateAoProductQuoteAuditByAfterValueText(afterValueText, req.body);
            if (!objAoProductQuoteAudit) {
                util.setError(404, `Cannot find aoProductQuoteAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuoteAudit updated', objAoProductQuoteAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsQuotesAuditCtrl.updateAoProductQuoteAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuoteAudit = await aoProductQuoteAuditService.updateAoProductQuoteAuditByDateCreated(dateCreated, req.body);
            if (!objAoProductQuoteAudit) {
                util.setError(404, `Cannot find aoProductQuoteAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuoteAudit updated', objAoProductQuoteAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductsQuotesAuditCtrl.updateAoProductQuoteAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductQuoteAudit = await aoProductQuoteAuditService.updateAoProductQuoteAuditByParentId(parentId, req.body);
            if (!objAoProductQuoteAudit) {
                util.setError(404, `Cannot find aoProductQuoteAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductQuoteAudit updated', objAoProductQuoteAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aosProductsQuotesAuditCtrl;
//</es-section>
