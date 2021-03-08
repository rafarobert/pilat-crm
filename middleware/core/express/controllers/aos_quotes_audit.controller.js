/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:33 GMT-0400 (Bolivia Time)
 * Time: 15:35:33
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:33 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:33
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const aoQuoteAuditService = require('../services/aos_quotes_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aosQuotesAuditCtrl = {};
aosQuotesAuditCtrl.service = aoQuoteAuditService;


aosQuotesAuditCtrl.getAllAosQuotesAudit = async (req, res) => {
    try {
        const objAosQuotesAudit = await aoQuoteAuditService.getAllAosQuotesAudit(req.query);
        if (objAosQuotesAudit.length > 0) {
            util.setSuccess(200, 'AosQuotesAudit retrieved', objAosQuotesAudit);
        } else {
            util.setSuccess(200, 'No aoQuoteAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesAuditCtrl.getAAoQuoteAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAoQuoteAudit = await aoQuoteAuditService.getAAoQuoteAudit(id, req.query);
        if (!objAoQuoteAudit) {
            util.setError(404, `Cannot find aoQuoteAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteAudit', objAoQuoteAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesAuditCtrl.addAoQuoteAudit = async (req, res) => {
    try {
        const objAoQuoteAudit = await aoQuoteAuditService.addAoQuoteAudit(req.body);
        util.setSuccess(201, 'AoQuoteAudit Added!', objAoQuoteAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesAuditCtrl.updateAoQuoteAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAoQuoteAudit = await aoQuoteAuditService.updateAoQuoteAudit(id, req.body);
        if (!objAoQuoteAudit) {
            util.setError(404, `Cannot find aoQuoteAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AoQuoteAudit updated', objAoQuoteAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aosQuotesAuditCtrl.deleteAoQuoteAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAoQuoteAudit = await aoQuoteAuditService.deleteAoQuoteAudit(id);
        if (objAoQuoteAudit) {
            util.setSuccess(200, 'AoQuoteAudit deleted', objAoQuoteAudit);
        } else {
            util.setError(404, `AoQuoteAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aosQuotesAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAoQuoteAudit = await aoQuoteAuditService.findOneById(id, req.query);
        if (!objAoQuoteAudit) {
            util.setError(404, `Cannot find aoQuoteAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteAudit', objAoQuoteAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAoQuoteAudit = await aoQuoteAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objAoQuoteAudit) {
            util.setError(404, `Cannot find aoQuoteAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteAudit', objAoQuoteAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objAoQuoteAudit = await aoQuoteAuditService.findOneByFieldName(fieldName, req.query);
        if (!objAoQuoteAudit) {
            util.setError(404, `Cannot find aoQuoteAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteAudit', objAoQuoteAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objAoQuoteAudit = await aoQuoteAuditService.findOneByDataType(dataType, req.query);
        if (!objAoQuoteAudit) {
            util.setError(404, `Cannot find aoQuoteAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteAudit', objAoQuoteAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objAoQuoteAudit = await aoQuoteAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objAoQuoteAudit) {
            util.setError(404, `Cannot find aoQuoteAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteAudit', objAoQuoteAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objAoQuoteAudit = await aoQuoteAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objAoQuoteAudit) {
            util.setError(404, `Cannot find aoQuoteAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteAudit', objAoQuoteAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objAoQuoteAudit = await aoQuoteAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objAoQuoteAudit) {
            util.setError(404, `Cannot find aoQuoteAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteAudit', objAoQuoteAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objAoQuoteAudit = await aoQuoteAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objAoQuoteAudit) {
            util.setError(404, `Cannot find aoQuoteAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteAudit', objAoQuoteAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objAoQuoteAudit = await aoQuoteAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objAoQuoteAudit) {
            util.setError(404, `Cannot find aoQuoteAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteAudit', objAoQuoteAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objAoQuoteAudit = await aoQuoteAuditService.findOneByParentId(parentId, req.query);
        if (!objAoQuoteAudit) {
            util.setError(404, `Cannot find aoQuoteAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteAudit', objAoQuoteAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aosQuotesAuditCtrl.updateAoQuoteAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuoteAudit = await aoQuoteAuditService.updateAoQuoteAuditById(id, req.body);
            if (!objAoQuoteAudit) {
                util.setError(404, `Cannot find aoQuoteAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuoteAudit updated', objAoQuoteAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesAuditCtrl.updateAoQuoteAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuoteAudit = await aoQuoteAuditService.updateAoQuoteAuditByCreatedBy(createdBy, req.body);
            if (!objAoQuoteAudit) {
                util.setError(404, `Cannot find aoQuoteAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuoteAudit updated', objAoQuoteAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesAuditCtrl.updateAoQuoteAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuoteAudit = await aoQuoteAuditService.updateAoQuoteAuditByFieldName(fieldName, req.body);
            if (!objAoQuoteAudit) {
                util.setError(404, `Cannot find aoQuoteAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuoteAudit updated', objAoQuoteAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesAuditCtrl.updateAoQuoteAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuoteAudit = await aoQuoteAuditService.updateAoQuoteAuditByDataType(dataType, req.body);
            if (!objAoQuoteAudit) {
                util.setError(404, `Cannot find aoQuoteAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuoteAudit updated', objAoQuoteAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesAuditCtrl.updateAoQuoteAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuoteAudit = await aoQuoteAuditService.updateAoQuoteAuditByBeforeValueString(beforeValueString, req.body);
            if (!objAoQuoteAudit) {
                util.setError(404, `Cannot find aoQuoteAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuoteAudit updated', objAoQuoteAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesAuditCtrl.updateAoQuoteAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuoteAudit = await aoQuoteAuditService.updateAoQuoteAuditByAfterValueString(afterValueString, req.body);
            if (!objAoQuoteAudit) {
                util.setError(404, `Cannot find aoQuoteAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuoteAudit updated', objAoQuoteAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesAuditCtrl.updateAoQuoteAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuoteAudit = await aoQuoteAuditService.updateAoQuoteAuditByBeforeValueText(beforeValueText, req.body);
            if (!objAoQuoteAudit) {
                util.setError(404, `Cannot find aoQuoteAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuoteAudit updated', objAoQuoteAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesAuditCtrl.updateAoQuoteAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuoteAudit = await aoQuoteAuditService.updateAoQuoteAuditByAfterValueText(afterValueText, req.body);
            if (!objAoQuoteAudit) {
                util.setError(404, `Cannot find aoQuoteAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuoteAudit updated', objAoQuoteAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesAuditCtrl.updateAoQuoteAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuoteAudit = await aoQuoteAuditService.updateAoQuoteAuditByDateCreated(dateCreated, req.body);
            if (!objAoQuoteAudit) {
                util.setError(404, `Cannot find aoQuoteAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuoteAudit updated', objAoQuoteAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesAuditCtrl.updateAoQuoteAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuoteAudit = await aoQuoteAuditService.updateAoQuoteAuditByParentId(parentId, req.body);
            if (!objAoQuoteAudit) {
                util.setError(404, `Cannot find aoQuoteAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoQuoteAudit updated', objAoQuoteAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aosQuotesAuditCtrl;
//</es-section>
