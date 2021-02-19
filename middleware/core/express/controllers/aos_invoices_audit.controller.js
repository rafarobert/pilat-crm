/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:36:03 GMT-0400 (Bolivia Time)
 * Time: 18:36:3
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:36:03 GMT-0400 (Bolivia Time)
 * Last time updated: 18:36:3
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const aoInvoiceAuditService = require('../services/aos_invoices_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aosInvoicesAuditCtrl = {};
aosInvoicesAuditCtrl.service = aoInvoiceAuditService;


aosInvoicesAuditCtrl.getAllAosInvoicesAudit = async (req, res) => {
    try {
        const objAosInvoicesAudit = await aoInvoiceAuditService.getAllAosInvoicesAudit(req.query);
        if (objAosInvoicesAudit.length > 0) {
            util.setSuccess(200, 'AosInvoicesAudit retrieved', objAosInvoicesAudit);
        } else {
            util.setSuccess(200, 'No aoInvoiceAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesAuditCtrl.getAAoInvoiceAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAoInvoiceAudit = await aoInvoiceAuditService.getAAoInvoiceAudit(id, req.query);
        if (!objAoInvoiceAudit) {
            util.setError(404, `Cannot find aoInvoiceAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aoInvoiceAudit', objAoInvoiceAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesAuditCtrl.addAoInvoiceAudit = async (req, res) => {
    try {
        const objAoInvoiceAudit = await aoInvoiceAuditService.addAoInvoiceAudit(req.body);
        util.setSuccess(201, 'AoInvoiceAudit Added!', objAoInvoiceAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesAuditCtrl.updateAoInvoiceAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAoInvoiceAudit = await aoInvoiceAuditService.updateAoInvoiceAudit(id, req.body);
        if (!objAoInvoiceAudit) {
            util.setError(404, `Cannot find aoInvoiceAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AoInvoiceAudit updated', objAoInvoiceAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aosInvoicesAuditCtrl.deleteAoInvoiceAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAoInvoiceAudit = await aoInvoiceAuditService.deleteAoInvoiceAudit(id);
        if (objAoInvoiceAudit) {
            util.setSuccess(200, 'AoInvoiceAudit deleted', objAoInvoiceAudit);
        } else {
            util.setError(404, `AoInvoiceAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aosInvoicesAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAoInvoiceAudit = await aoInvoiceAuditService.findOneById(id, req.query);
        if (!objAoInvoiceAudit) {
            util.setError(404, `Cannot find aoInvoiceAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoiceAudit', objAoInvoiceAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAoInvoiceAudit = await aoInvoiceAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objAoInvoiceAudit) {
            util.setError(404, `Cannot find aoInvoiceAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoiceAudit', objAoInvoiceAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objAoInvoiceAudit = await aoInvoiceAuditService.findOneByFieldName(fieldName, req.query);
        if (!objAoInvoiceAudit) {
            util.setError(404, `Cannot find aoInvoiceAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoiceAudit', objAoInvoiceAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objAoInvoiceAudit = await aoInvoiceAuditService.findOneByDataType(dataType, req.query);
        if (!objAoInvoiceAudit) {
            util.setError(404, `Cannot find aoInvoiceAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoiceAudit', objAoInvoiceAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objAoInvoiceAudit = await aoInvoiceAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objAoInvoiceAudit) {
            util.setError(404, `Cannot find aoInvoiceAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoiceAudit', objAoInvoiceAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objAoInvoiceAudit = await aoInvoiceAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objAoInvoiceAudit) {
            util.setError(404, `Cannot find aoInvoiceAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoiceAudit', objAoInvoiceAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objAoInvoiceAudit = await aoInvoiceAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objAoInvoiceAudit) {
            util.setError(404, `Cannot find aoInvoiceAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoiceAudit', objAoInvoiceAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objAoInvoiceAudit = await aoInvoiceAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objAoInvoiceAudit) {
            util.setError(404, `Cannot find aoInvoiceAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoiceAudit', objAoInvoiceAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objAoInvoiceAudit = await aoInvoiceAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objAoInvoiceAudit) {
            util.setError(404, `Cannot find aoInvoiceAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoiceAudit', objAoInvoiceAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosInvoicesAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objAoInvoiceAudit = await aoInvoiceAuditService.findOneByParentId(parentId, req.query);
        if (!objAoInvoiceAudit) {
            util.setError(404, `Cannot find aoInvoiceAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoInvoiceAudit', objAoInvoiceAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aosInvoicesAuditCtrl.updateAoInvoiceAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoiceAudit = await aoInvoiceAuditService.updateAoInvoiceAuditById(id, req.body);
            if (!objAoInvoiceAudit) {
                util.setError(404, `Cannot find aoInvoiceAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoiceAudit updated', objAoInvoiceAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesAuditCtrl.updateAoInvoiceAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoiceAudit = await aoInvoiceAuditService.updateAoInvoiceAuditByCreatedBy(createdBy, req.body);
            if (!objAoInvoiceAudit) {
                util.setError(404, `Cannot find aoInvoiceAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoiceAudit updated', objAoInvoiceAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesAuditCtrl.updateAoInvoiceAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoiceAudit = await aoInvoiceAuditService.updateAoInvoiceAuditByFieldName(fieldName, req.body);
            if (!objAoInvoiceAudit) {
                util.setError(404, `Cannot find aoInvoiceAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoiceAudit updated', objAoInvoiceAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesAuditCtrl.updateAoInvoiceAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoiceAudit = await aoInvoiceAuditService.updateAoInvoiceAuditByDataType(dataType, req.body);
            if (!objAoInvoiceAudit) {
                util.setError(404, `Cannot find aoInvoiceAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoiceAudit updated', objAoInvoiceAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesAuditCtrl.updateAoInvoiceAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoiceAudit = await aoInvoiceAuditService.updateAoInvoiceAuditByBeforeValueString(beforeValueString, req.body);
            if (!objAoInvoiceAudit) {
                util.setError(404, `Cannot find aoInvoiceAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoiceAudit updated', objAoInvoiceAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesAuditCtrl.updateAoInvoiceAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoiceAudit = await aoInvoiceAuditService.updateAoInvoiceAuditByAfterValueString(afterValueString, req.body);
            if (!objAoInvoiceAudit) {
                util.setError(404, `Cannot find aoInvoiceAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoiceAudit updated', objAoInvoiceAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesAuditCtrl.updateAoInvoiceAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoiceAudit = await aoInvoiceAuditService.updateAoInvoiceAuditByBeforeValueText(beforeValueText, req.body);
            if (!objAoInvoiceAudit) {
                util.setError(404, `Cannot find aoInvoiceAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoiceAudit updated', objAoInvoiceAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesAuditCtrl.updateAoInvoiceAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoiceAudit = await aoInvoiceAuditService.updateAoInvoiceAuditByAfterValueText(afterValueText, req.body);
            if (!objAoInvoiceAudit) {
                util.setError(404, `Cannot find aoInvoiceAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoiceAudit updated', objAoInvoiceAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesAuditCtrl.updateAoInvoiceAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoiceAudit = await aoInvoiceAuditService.updateAoInvoiceAuditByDateCreated(dateCreated, req.body);
            if (!objAoInvoiceAudit) {
                util.setError(404, `Cannot find aoInvoiceAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoiceAudit updated', objAoInvoiceAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosInvoicesAuditCtrl.updateAoInvoiceAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoInvoiceAudit = await aoInvoiceAuditService.updateAoInvoiceAuditByParentId(parentId, req.body);
            if (!objAoInvoiceAudit) {
                util.setError(404, `Cannot find aoInvoiceAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoInvoiceAudit updated', objAoInvoiceAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aosInvoicesAuditCtrl;
//</es-section>
