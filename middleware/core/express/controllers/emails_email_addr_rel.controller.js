/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:46 GMT-0400 (Bolivia Time)
 * Time: 14:56:46
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:46 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:46
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const emailEmailAddrRelService = require('../services/emails_email_addr_rel.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const emailsEmailAddrRelCtrl = {};
emailsEmailAddrRelCtrl.service = emailEmailAddrRelService;


emailsEmailAddrRelCtrl.getAllEmailsEmailAddrRel = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.emailsEmailAddrRel.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objEmailsEmailAddrRel = await emailEmailAddrRelService.getAllEmailsEmailAddrRel(req.query);
        if (objEmailsEmailAddrRel && objEmailsEmailAddrRel.rows && objEmailsEmailAddrRel.count) {
            util.setSuccess(200, 'EmailsEmailAddrRel retrieved', objEmailsEmailAddrRel.rows, objEmailsEmailAddrRel.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No emailEmailAddrRel found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsEmailAddrRelCtrl.getAEmailEmailAddrRel = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objEmailEmailAddrRel = await emailEmailAddrRelService.getAEmailEmailAddrRel(id, req.query);
        if (!objEmailEmailAddrRel) {
            util.setError(404, `Cannot find emailEmailAddrRel with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found emailEmailAddrRel', objEmailEmailAddrRel);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsEmailAddrRelCtrl.addEmailEmailAddrRel = async (req, res) => {
    try {
        const objEmailEmailAddrRel = await emailEmailAddrRelService.addEmailEmailAddrRel(req.body);
        util.setSuccess(201, 'EmailEmailAddrRel Added!', objEmailEmailAddrRel);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsEmailAddrRelCtrl.updateEmailEmailAddrRel = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objEmailEmailAddrRel = await emailEmailAddrRelService.updateEmailEmailAddrRel(id, req.body);
        if (!objEmailEmailAddrRel) {
            util.setError(404, `Cannot find emailEmailAddrRel with the id: ${id}`);
        } else {
            util.setSuccess(200, 'EmailEmailAddrRel updated', objEmailEmailAddrRel);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

emailsEmailAddrRelCtrl.deleteEmailEmailAddrRel = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objEmailEmailAddrRel = await emailEmailAddrRelService.deleteEmailEmailAddrRel(id);
        if (objEmailEmailAddrRel) {
            util.setSuccess(200, 'EmailEmailAddrRel deleted', objEmailEmailAddrRel);
        } else {
            util.setError(404, `EmailEmailAddrRel with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



emailsEmailAddrRelCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objEmailEmailAddrRel = await emailEmailAddrRelService.findOneById(id, req.query);
        if (!objEmailEmailAddrRel) {
            util.setError(404, `Cannot find emailEmailAddrRel with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailEmailAddrRel', objEmailEmailAddrRel);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsEmailAddrRelCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objEmailEmailAddrRel = await emailEmailAddrRelService.findOneByDeleted(deleted, req.query);
        if (!objEmailEmailAddrRel) {
            util.setError(404, `Cannot find emailEmailAddrRel with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailEmailAddrRel', objEmailEmailAddrRel);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsEmailAddrRelCtrl.findOneByAddressType = async (req, res) => {
    try {
        const { addressType } = req.params;
        const objEmailEmailAddrRel = await emailEmailAddrRelService.findOneByAddressType(addressType, req.query);
        if (!objEmailEmailAddrRel) {
            util.setError(404, `Cannot find emailEmailAddrRel with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailEmailAddrRel', objEmailEmailAddrRel);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsEmailAddrRelCtrl.findOneByEmailId = async (req, res) => {
    try {
        const { emailId } = req.params;
        const objEmailEmailAddrRel = await emailEmailAddrRelService.findOneByEmailId(emailId, req.query);
        if (!objEmailEmailAddrRel) {
            util.setError(404, `Cannot find emailEmailAddrRel with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailEmailAddrRel', objEmailEmailAddrRel);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsEmailAddrRelCtrl.findOneByEmailAddressId = async (req, res) => {
    try {
        const { emailAddressId } = req.params;
        const objEmailEmailAddrRel = await emailEmailAddrRelService.findOneByEmailAddressId(emailAddressId, req.query);
        if (!objEmailEmailAddrRel) {
            util.setError(404, `Cannot find emailEmailAddrRel with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailEmailAddrRel', objEmailEmailAddrRel);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



emailsEmailAddrRelCtrl.updateEmailEmailAddrRelById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailEmailAddrRel = await emailEmailAddrRelService.updateEmailEmailAddrRelById(id, req.body);
            if (!objEmailEmailAddrRel) {
                util.setError(404, `Cannot find emailEmailAddrRel with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailEmailAddrRel updated', objEmailEmailAddrRel);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailsEmailAddrRelCtrl.updateEmailEmailAddrRelByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailEmailAddrRel = await emailEmailAddrRelService.updateEmailEmailAddrRelByDeleted(deleted, req.body);
            if (!objEmailEmailAddrRel) {
                util.setError(404, `Cannot find emailEmailAddrRel with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailEmailAddrRel updated', objEmailEmailAddrRel);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailsEmailAddrRelCtrl.updateEmailEmailAddrRelByAddressType = async (req, res) => {
     const { addressType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailEmailAddrRel = await emailEmailAddrRelService.updateEmailEmailAddrRelByAddressType(addressType, req.body);
            if (!objEmailEmailAddrRel) {
                util.setError(404, `Cannot find emailEmailAddrRel with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailEmailAddrRel updated', objEmailEmailAddrRel);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailsEmailAddrRelCtrl.updateEmailEmailAddrRelByEmailId = async (req, res) => {
     const { emailId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailEmailAddrRel = await emailEmailAddrRelService.updateEmailEmailAddrRelByEmailId(emailId, req.body);
            if (!objEmailEmailAddrRel) {
                util.setError(404, `Cannot find emailEmailAddrRel with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailEmailAddrRel updated', objEmailEmailAddrRel);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailsEmailAddrRelCtrl.updateEmailEmailAddrRelByEmailAddressId = async (req, res) => {
     const { emailAddressId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailEmailAddrRel = await emailEmailAddrRelService.updateEmailEmailAddrRelByEmailAddressId(emailAddressId, req.body);
            if (!objEmailEmailAddrRel) {
                util.setError(404, `Cannot find emailEmailAddrRel with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailEmailAddrRel updated', objEmailEmailAddrRel);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = emailsEmailAddrRelCtrl;
//</es-section>
