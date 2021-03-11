/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:55:47 GMT-0400 (Bolivia Time)
 * Time: 14:55:47
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:55:47 GMT-0400 (Bolivia Time)
 * Last time updated: 14:55:47
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const accountAuditService = require('../services/accounts_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const accountsAuditCtrl = {};
accountsAuditCtrl.service = accountAuditService;


accountsAuditCtrl.getAllAccountsAudit = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.accountsAudit.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objAccountsAudit = await accountAuditService.getAllAccountsAudit(req.query);
        if (objAccountsAudit && objAccountsAudit.rows && objAccountsAudit.count) {
            util.setSuccess(200, 'AccountsAudit retrieved', objAccountsAudit.rows, objAccountsAudit.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No accountAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsAuditCtrl.getAAccountAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAccountAudit = await accountAuditService.getAAccountAudit(id, req.query);
        if (!objAccountAudit) {
            util.setError(404, `Cannot find accountAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found accountAudit', objAccountAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsAuditCtrl.addAccountAudit = async (req, res) => {
    try {
        const objAccountAudit = await accountAuditService.addAccountAudit(req.body);
        util.setSuccess(201, 'AccountAudit Added!', objAccountAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsAuditCtrl.updateAccountAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAccountAudit = await accountAuditService.updateAccountAudit(id, req.body);
        if (!objAccountAudit) {
            util.setError(404, `Cannot find accountAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AccountAudit updated', objAccountAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

accountsAuditCtrl.deleteAccountAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAccountAudit = await accountAuditService.deleteAccountAudit(id);
        if (objAccountAudit) {
            util.setSuccess(200, 'AccountAudit deleted', objAccountAudit);
        } else {
            util.setError(404, `AccountAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



accountsAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAccountAudit = await accountAuditService.findOneById(id, req.query);
        if (!objAccountAudit) {
            util.setError(404, `Cannot find accountAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found accountAudit', objAccountAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAccountAudit = await accountAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objAccountAudit) {
            util.setError(404, `Cannot find accountAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found accountAudit', objAccountAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objAccountAudit = await accountAuditService.findOneByFieldName(fieldName, req.query);
        if (!objAccountAudit) {
            util.setError(404, `Cannot find accountAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found accountAudit', objAccountAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objAccountAudit = await accountAuditService.findOneByDataType(dataType, req.query);
        if (!objAccountAudit) {
            util.setError(404, `Cannot find accountAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found accountAudit', objAccountAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objAccountAudit = await accountAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objAccountAudit) {
            util.setError(404, `Cannot find accountAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found accountAudit', objAccountAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objAccountAudit = await accountAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objAccountAudit) {
            util.setError(404, `Cannot find accountAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found accountAudit', objAccountAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objAccountAudit = await accountAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objAccountAudit) {
            util.setError(404, `Cannot find accountAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found accountAudit', objAccountAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objAccountAudit = await accountAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objAccountAudit) {
            util.setError(404, `Cannot find accountAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found accountAudit', objAccountAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objAccountAudit = await accountAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objAccountAudit) {
            util.setError(404, `Cannot find accountAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found accountAudit', objAccountAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objAccountAudit = await accountAuditService.findOneByParentId(parentId, req.query);
        if (!objAccountAudit) {
            util.setError(404, `Cannot find accountAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found accountAudit', objAccountAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



accountsAuditCtrl.updateAccountAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccountAudit = await accountAuditService.updateAccountAuditById(id, req.body);
            if (!objAccountAudit) {
                util.setError(404, `Cannot find accountAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AccountAudit updated', objAccountAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsAuditCtrl.updateAccountAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccountAudit = await accountAuditService.updateAccountAuditByCreatedBy(createdBy, req.body);
            if (!objAccountAudit) {
                util.setError(404, `Cannot find accountAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AccountAudit updated', objAccountAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsAuditCtrl.updateAccountAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccountAudit = await accountAuditService.updateAccountAuditByFieldName(fieldName, req.body);
            if (!objAccountAudit) {
                util.setError(404, `Cannot find accountAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AccountAudit updated', objAccountAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsAuditCtrl.updateAccountAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccountAudit = await accountAuditService.updateAccountAuditByDataType(dataType, req.body);
            if (!objAccountAudit) {
                util.setError(404, `Cannot find accountAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AccountAudit updated', objAccountAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsAuditCtrl.updateAccountAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccountAudit = await accountAuditService.updateAccountAuditByBeforeValueString(beforeValueString, req.body);
            if (!objAccountAudit) {
                util.setError(404, `Cannot find accountAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AccountAudit updated', objAccountAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsAuditCtrl.updateAccountAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccountAudit = await accountAuditService.updateAccountAuditByAfterValueString(afterValueString, req.body);
            if (!objAccountAudit) {
                util.setError(404, `Cannot find accountAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AccountAudit updated', objAccountAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsAuditCtrl.updateAccountAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccountAudit = await accountAuditService.updateAccountAuditByBeforeValueText(beforeValueText, req.body);
            if (!objAccountAudit) {
                util.setError(404, `Cannot find accountAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AccountAudit updated', objAccountAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsAuditCtrl.updateAccountAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccountAudit = await accountAuditService.updateAccountAuditByAfterValueText(afterValueText, req.body);
            if (!objAccountAudit) {
                util.setError(404, `Cannot find accountAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AccountAudit updated', objAccountAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsAuditCtrl.updateAccountAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccountAudit = await accountAuditService.updateAccountAuditByDateCreated(dateCreated, req.body);
            if (!objAccountAudit) {
                util.setError(404, `Cannot find accountAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AccountAudit updated', objAccountAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsAuditCtrl.updateAccountAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccountAudit = await accountAuditService.updateAccountAuditByParentId(parentId, req.body);
            if (!objAccountAudit) {
                util.setError(404, `Cannot find accountAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AccountAudit updated', objAccountAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = accountsAuditCtrl;
//</es-section>
