/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:48 GMT-0400 (Bolivia Time)
 * Time: 14:0:48
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:48 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:48
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const emailTemplateService = require('../services/email_templates.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const emailTemplatesCtrl = {};
emailTemplatesCtrl.service = emailTemplateService;


emailTemplatesCtrl.getAllEmailTemplates = async (req, res) => {
    try {
        const objEmailTemplates = await emailTemplateService.getAllEmailTemplates(req.query);
        if (objEmailTemplates.length > 0) {
            util.setSuccess(200, 'EmailTemplates retrieved', objEmailTemplates);
        } else {
            util.setSuccess(200, 'No emailTemplate found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailTemplatesCtrl.getAEmailTemplate = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objEmailTemplate = await emailTemplateService.getAEmailTemplate(id, req.query);
        if (!objEmailTemplate) {
            util.setError(404, `Cannot find emailTemplate with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found emailTemplate', objEmailTemplate);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailTemplatesCtrl.addEmailTemplate = async (req, res) => {
    try {
        const objEmailTemplate = await emailTemplateService.addEmailTemplate(req.body);
        util.setSuccess(201, 'EmailTemplate Added!', objEmailTemplate);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailTemplatesCtrl.updateEmailTemplate = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objEmailTemplate = await emailTemplateService.updateEmailTemplate(id, req.body);
        if (!objEmailTemplate) {
            util.setError(404, `Cannot find emailTemplate with the id: ${id}`);
        } else {
            util.setSuccess(200, 'EmailTemplate updated', objEmailTemplate);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

emailTemplatesCtrl.deleteEmailTemplate = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objEmailTemplate = await emailTemplateService.deleteEmailTemplate(id);
        if (objEmailTemplate) {
            util.setSuccess(200, 'EmailTemplate deleted', objEmailTemplate);
        } else {
            util.setError(404, `EmailTemplate with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



emailTemplatesCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objEmailTemplate = await emailTemplateService.findOneById(id, req.query);
        if (!objEmailTemplate) {
            util.setError(404, `Cannot find emailTemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailTemplate', objEmailTemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailTemplatesCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objEmailTemplate = await emailTemplateService.findOneByDeleted(deleted, req.query);
        if (!objEmailTemplate) {
            util.setError(404, `Cannot find emailTemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailTemplate', objEmailTemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailTemplatesCtrl.findOneByTextOnly = async (req, res) => {
    try {
        const { textOnly } = req.params;
        const objEmailTemplate = await emailTemplateService.findOneByTextOnly(textOnly, req.query);
        if (!objEmailTemplate) {
            util.setError(404, `Cannot find emailTemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailTemplate', objEmailTemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailTemplatesCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objEmailTemplate = await emailTemplateService.findOneByCreatedBy(createdBy, req.query);
        if (!objEmailTemplate) {
            util.setError(404, `Cannot find emailTemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailTemplate', objEmailTemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailTemplatesCtrl.findOneByPublished = async (req, res) => {
    try {
        const { published } = req.params;
        const objEmailTemplate = await emailTemplateService.findOneByPublished(published, req.query);
        if (!objEmailTemplate) {
            util.setError(404, `Cannot find emailTemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailTemplate', objEmailTemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailTemplatesCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objEmailTemplate = await emailTemplateService.findOneByName(name, req.query);
        if (!objEmailTemplate) {
            util.setError(404, `Cannot find emailTemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailTemplate', objEmailTemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailTemplatesCtrl.findOneBySubject = async (req, res) => {
    try {
        const { subject } = req.params;
        const objEmailTemplate = await emailTemplateService.findOneBySubject(subject, req.query);
        if (!objEmailTemplate) {
            util.setError(404, `Cannot find emailTemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailTemplate', objEmailTemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailTemplatesCtrl.findOneByType = async (req, res) => {
    try {
        const { type } = req.params;
        const objEmailTemplate = await emailTemplateService.findOneByType(type, req.query);
        if (!objEmailTemplate) {
            util.setError(404, `Cannot find emailTemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailTemplate', objEmailTemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailTemplatesCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objEmailTemplate = await emailTemplateService.findOneByDescription(description, req.query);
        if (!objEmailTemplate) {
            util.setError(404, `Cannot find emailTemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailTemplate', objEmailTemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailTemplatesCtrl.findOneByBody = async (req, res) => {
    try {
        const { body } = req.params;
        const objEmailTemplate = await emailTemplateService.findOneByBody(body, req.query);
        if (!objEmailTemplate) {
            util.setError(404, `Cannot find emailTemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailTemplate', objEmailTemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailTemplatesCtrl.findOneByBodyHtml = async (req, res) => {
    try {
        const { bodyHtml } = req.params;
        const objEmailTemplate = await emailTemplateService.findOneByBodyHtml(bodyHtml, req.query);
        if (!objEmailTemplate) {
            util.setError(404, `Cannot find emailTemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailTemplate', objEmailTemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailTemplatesCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objEmailTemplate = await emailTemplateService.findOneByDateEntered(dateEntered, req.query);
        if (!objEmailTemplate) {
            util.setError(404, `Cannot find emailTemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailTemplate', objEmailTemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailTemplatesCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objEmailTemplate = await emailTemplateService.findOneByDateModified(dateModified, req.query);
        if (!objEmailTemplate) {
            util.setError(404, `Cannot find emailTemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailTemplate', objEmailTemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailTemplatesCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objEmailTemplate = await emailTemplateService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objEmailTemplate) {
            util.setError(404, `Cannot find emailTemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailTemplate', objEmailTemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailTemplatesCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objEmailTemplate = await emailTemplateService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objEmailTemplate) {
            util.setError(404, `Cannot find emailTemplate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailTemplate', objEmailTemplate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



emailTemplatesCtrl.updateEmailTemplateById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailTemplate = await emailTemplateService.updateEmailTemplateById(id, req.body);
            if (!objEmailTemplate) {
                util.setError(404, `Cannot find emailTemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailTemplate updated', objEmailTemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailTemplatesCtrl.updateEmailTemplateByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailTemplate = await emailTemplateService.updateEmailTemplateByDeleted(deleted, req.body);
            if (!objEmailTemplate) {
                util.setError(404, `Cannot find emailTemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailTemplate updated', objEmailTemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailTemplatesCtrl.updateEmailTemplateByTextOnly = async (req, res) => {
     const { textOnly } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailTemplate = await emailTemplateService.updateEmailTemplateByTextOnly(textOnly, req.body);
            if (!objEmailTemplate) {
                util.setError(404, `Cannot find emailTemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailTemplate updated', objEmailTemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailTemplatesCtrl.updateEmailTemplateByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailTemplate = await emailTemplateService.updateEmailTemplateByCreatedBy(createdBy, req.body);
            if (!objEmailTemplate) {
                util.setError(404, `Cannot find emailTemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailTemplate updated', objEmailTemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailTemplatesCtrl.updateEmailTemplateByPublished = async (req, res) => {
     const { published } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailTemplate = await emailTemplateService.updateEmailTemplateByPublished(published, req.body);
            if (!objEmailTemplate) {
                util.setError(404, `Cannot find emailTemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailTemplate updated', objEmailTemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailTemplatesCtrl.updateEmailTemplateByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailTemplate = await emailTemplateService.updateEmailTemplateByName(name, req.body);
            if (!objEmailTemplate) {
                util.setError(404, `Cannot find emailTemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailTemplate updated', objEmailTemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailTemplatesCtrl.updateEmailTemplateBySubject = async (req, res) => {
     const { subject } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailTemplate = await emailTemplateService.updateEmailTemplateBySubject(subject, req.body);
            if (!objEmailTemplate) {
                util.setError(404, `Cannot find emailTemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailTemplate updated', objEmailTemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailTemplatesCtrl.updateEmailTemplateByType = async (req, res) => {
     const { type } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailTemplate = await emailTemplateService.updateEmailTemplateByType(type, req.body);
            if (!objEmailTemplate) {
                util.setError(404, `Cannot find emailTemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailTemplate updated', objEmailTemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailTemplatesCtrl.updateEmailTemplateByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailTemplate = await emailTemplateService.updateEmailTemplateByDescription(description, req.body);
            if (!objEmailTemplate) {
                util.setError(404, `Cannot find emailTemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailTemplate updated', objEmailTemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailTemplatesCtrl.updateEmailTemplateByBody = async (req, res) => {
     const { body } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailTemplate = await emailTemplateService.updateEmailTemplateByBody(body, req.body);
            if (!objEmailTemplate) {
                util.setError(404, `Cannot find emailTemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailTemplate updated', objEmailTemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailTemplatesCtrl.updateEmailTemplateByBodyHtml = async (req, res) => {
     const { bodyHtml } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailTemplate = await emailTemplateService.updateEmailTemplateByBodyHtml(bodyHtml, req.body);
            if (!objEmailTemplate) {
                util.setError(404, `Cannot find emailTemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailTemplate updated', objEmailTemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailTemplatesCtrl.updateEmailTemplateByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailTemplate = await emailTemplateService.updateEmailTemplateByDateEntered(dateEntered, req.body);
            if (!objEmailTemplate) {
                util.setError(404, `Cannot find emailTemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailTemplate updated', objEmailTemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailTemplatesCtrl.updateEmailTemplateByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailTemplate = await emailTemplateService.updateEmailTemplateByDateModified(dateModified, req.body);
            if (!objEmailTemplate) {
                util.setError(404, `Cannot find emailTemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailTemplate updated', objEmailTemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailTemplatesCtrl.updateEmailTemplateByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailTemplate = await emailTemplateService.updateEmailTemplateByModifiedUserId(modifiedUserId, req.body);
            if (!objEmailTemplate) {
                util.setError(404, `Cannot find emailTemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailTemplate updated', objEmailTemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailTemplatesCtrl.updateEmailTemplateByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailTemplate = await emailTemplateService.updateEmailTemplateByAssignedUserId(assignedUserId, req.body);
            if (!objEmailTemplate) {
                util.setError(404, `Cannot find emailTemplate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailTemplate updated', objEmailTemplate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = emailTemplatesCtrl;
//</es-section>
