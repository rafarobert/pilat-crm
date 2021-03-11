/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:50 GMT-0400 (Bolivia Time)
 * Time: 14:56:50
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:50 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:50
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const emailTemplateCstmService = require('../services/email_templates_cstm.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const emailTemplatesCstmCtrl = {};
emailTemplatesCstmCtrl.service = emailTemplateCstmService;


emailTemplatesCstmCtrl.getAllEmailTemplatesCstm = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.emailTemplatesCstm.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objEmailTemplatesCstm = await emailTemplateCstmService.getAllEmailTemplatesCstm(req.query);
        if (objEmailTemplatesCstm && objEmailTemplatesCstm.rows && objEmailTemplatesCstm.count) {
            util.setSuccess(200, 'EmailTemplatesCstm retrieved', objEmailTemplatesCstm.rows, objEmailTemplatesCstm.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No emailTemplateCstm found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailTemplatesCstmCtrl.getAEmailTemplateCstm = async (req, res) => {
    try {
        const { idC } = req.params;
        if (!util.isChar(idC)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objEmailTemplateCstm = await emailTemplateCstmService.getAEmailTemplateCstm(idC, req.query);
        if (!objEmailTemplateCstm) {
            util.setError(404, `Cannot find emailTemplateCstm with the id ${idC}`);
        } else {
            util.setSuccess(200, 'Found emailTemplateCstm', objEmailTemplateCstm);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailTemplatesCstmCtrl.addEmailTemplateCstm = async (req, res) => {
    try {
        const objEmailTemplateCstm = await emailTemplateCstmService.addEmailTemplateCstm(req.body);
        util.setSuccess(201, 'EmailTemplateCstm Added!', objEmailTemplateCstm);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailTemplatesCstmCtrl.updateEmailTemplateCstm = async (req, res) => {
    try {
        const { idC } = req.params;
        if (!util.isChar(idC)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objEmailTemplateCstm = await emailTemplateCstmService.updateEmailTemplateCstm(idC, req.body);
        if (!objEmailTemplateCstm) {
            util.setError(404, `Cannot find emailTemplateCstm with the id: ${idC}`);
        } else {
            util.setSuccess(200, 'EmailTemplateCstm updated', objEmailTemplateCstm);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

emailTemplatesCstmCtrl.deleteEmailTemplateCstm = async (req, res) => {
    try {
        const { idC } = req.params;
        if (!util.isChar(idC)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objEmailTemplateCstm = await emailTemplateCstmService.deleteEmailTemplateCstm(idC);
        if (objEmailTemplateCstm) {
            util.setSuccess(200, 'EmailTemplateCstm deleted', objEmailTemplateCstm);
        } else {
            util.setError(404, `EmailTemplateCstm with the id ${idC} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



emailTemplatesCstmCtrl.findOneByIdC = async (req, res) => {
    try {
        const { idC } = req.params;
        const objEmailTemplateCstm = await emailTemplateCstmService.findOneByIdC(idC, req.query);
        if (!objEmailTemplateCstm) {
            util.setError(404, `Cannot find emailTemplateCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailTemplateCstm', objEmailTemplateCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailTemplatesCstmCtrl.findOneBySmsModuleC = async (req, res) => {
    try {
        const { smsModuleC } = req.params;
        const objEmailTemplateCstm = await emailTemplateCstmService.findOneBySmsModuleC(smsModuleC, req.query);
        if (!objEmailTemplateCstm) {
            util.setError(404, `Cannot find emailTemplateCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailTemplateCstm', objEmailTemplateCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



emailTemplatesCstmCtrl.updateEmailTemplateCstmByIdC = async (req, res) => {
     const { idC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailTemplateCstm = await emailTemplateCstmService.updateEmailTemplateCstmByIdC(idC, req.body);
            if (!objEmailTemplateCstm) {
                util.setError(404, `Cannot find emailTemplateCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'EmailTemplateCstm updated', objEmailTemplateCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailTemplatesCstmCtrl.updateEmailTemplateCstmBySmsModuleC = async (req, res) => {
     const { smsModuleC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailTemplateCstm = await emailTemplateCstmService.updateEmailTemplateCstmBySmsModuleC(smsModuleC, req.body);
            if (!objEmailTemplateCstm) {
                util.setError(404, `Cannot find emailTemplateCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'EmailTemplateCstm updated', objEmailTemplateCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = emailTemplatesCstmCtrl;
//</es-section>
