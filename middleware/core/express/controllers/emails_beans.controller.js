/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:48 GMT-0400 (Bolivia Time)
 * Time: 0:22:48
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:48 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:48
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const emailBeanService = require('../services/emails_beans.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const emailsBeansCtrl = {};
emailsBeansCtrl.service = emailBeanService;


emailsBeansCtrl.getAllEmailsBeans = async (req, res) => {
    try {
        const objEmailsBeans = await emailBeanService.getAllEmailsBeans(req.query);
        if (objEmailsBeans.length > 0) {
            util.setSuccess(200, 'EmailsBeans retrieved', objEmailsBeans);
        } else {
            util.setSuccess(200, 'No emailBean found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsBeansCtrl.getAEmailBean = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objEmailBean = await emailBeanService.getAEmailBean(id, req.query);
        if (!objEmailBean) {
            util.setError(404, `Cannot find emailBean with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found emailBean', objEmailBean);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsBeansCtrl.addEmailBean = async (req, res) => {
    try {
        const objEmailBean = await emailBeanService.addEmailBean(req.body);
        util.setSuccess(201, 'EmailBean Added!', objEmailBean);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsBeansCtrl.updateEmailBean = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objEmailBean = await emailBeanService.updateEmailBean(id, req.body);
        if (!objEmailBean) {
            util.setError(404, `Cannot find emailBean with the id: ${id}`);
        } else {
            util.setSuccess(200, 'EmailBean updated', objEmailBean);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

emailsBeansCtrl.deleteEmailBean = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objEmailBean = await emailBeanService.deleteEmailBean(id);
        if (objEmailBean) {
            util.setSuccess(200, 'EmailBean deleted', objEmailBean);
        } else {
            util.setError(404, `EmailBean with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



emailsBeansCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objEmailBean = await emailBeanService.findOneById(id, req.query);
        if (!objEmailBean) {
            util.setError(404, `Cannot find emailBean with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailBean', objEmailBean);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsBeansCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objEmailBean = await emailBeanService.findOneByDeleted(deleted, req.query);
        if (!objEmailBean) {
            util.setError(404, `Cannot find emailBean with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailBean', objEmailBean);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsBeansCtrl.findOneByBeanModule = async (req, res) => {
    try {
        const { beanModule } = req.params;
        const objEmailBean = await emailBeanService.findOneByBeanModule(beanModule, req.query);
        if (!objEmailBean) {
            util.setError(404, `Cannot find emailBean with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailBean', objEmailBean);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsBeansCtrl.findOneByCampaignData = async (req, res) => {
    try {
        const { campaignData } = req.params;
        const objEmailBean = await emailBeanService.findOneByCampaignData(campaignData, req.query);
        if (!objEmailBean) {
            util.setError(404, `Cannot find emailBean with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailBean', objEmailBean);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsBeansCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objEmailBean = await emailBeanService.findOneByDateModified(dateModified, req.query);
        if (!objEmailBean) {
            util.setError(404, `Cannot find emailBean with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailBean', objEmailBean);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsBeansCtrl.findOneByEmailId = async (req, res) => {
    try {
        const { emailId } = req.params;
        const objEmailBean = await emailBeanService.findOneByEmailId(emailId, req.query);
        if (!objEmailBean) {
            util.setError(404, `Cannot find emailBean with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailBean', objEmailBean);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsBeansCtrl.findOneByBeanId = async (req, res) => {
    try {
        const { beanId } = req.params;
        const objEmailBean = await emailBeanService.findOneByBeanId(beanId, req.query);
        if (!objEmailBean) {
            util.setError(404, `Cannot find emailBean with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailBean', objEmailBean);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



emailsBeansCtrl.updateEmailBeanById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailBean = await emailBeanService.updateEmailBeanById(id, req.body);
            if (!objEmailBean) {
                util.setError(404, `Cannot find emailBean with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailBean updated', objEmailBean);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailsBeansCtrl.updateEmailBeanByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailBean = await emailBeanService.updateEmailBeanByDeleted(deleted, req.body);
            if (!objEmailBean) {
                util.setError(404, `Cannot find emailBean with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailBean updated', objEmailBean);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailsBeansCtrl.updateEmailBeanByBeanModule = async (req, res) => {
     const { beanModule } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailBean = await emailBeanService.updateEmailBeanByBeanModule(beanModule, req.body);
            if (!objEmailBean) {
                util.setError(404, `Cannot find emailBean with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailBean updated', objEmailBean);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailsBeansCtrl.updateEmailBeanByCampaignData = async (req, res) => {
     const { campaignData } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailBean = await emailBeanService.updateEmailBeanByCampaignData(campaignData, req.body);
            if (!objEmailBean) {
                util.setError(404, `Cannot find emailBean with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailBean updated', objEmailBean);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailsBeansCtrl.updateEmailBeanByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailBean = await emailBeanService.updateEmailBeanByDateModified(dateModified, req.body);
            if (!objEmailBean) {
                util.setError(404, `Cannot find emailBean with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailBean updated', objEmailBean);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailsBeansCtrl.updateEmailBeanByEmailId = async (req, res) => {
     const { emailId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailBean = await emailBeanService.updateEmailBeanByEmailId(emailId, req.body);
            if (!objEmailBean) {
                util.setError(404, `Cannot find emailBean with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailBean updated', objEmailBean);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailsBeansCtrl.updateEmailBeanByBeanId = async (req, res) => {
     const { beanId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailBean = await emailBeanService.updateEmailBeanByBeanId(beanId, req.body);
            if (!objEmailBean) {
                util.setError(404, `Cannot find emailBean with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailBean updated', objEmailBean);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = emailsBeansCtrl;
//</es-section>
