/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:42:58 GMT-0400 (Bolivia Time)
 * Time: 4:42:58
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:42:58 GMT-0400 (Bolivia Time)
 * Last time updated: 4:42:58
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const emailTextService = require('../services/emails_text.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const emailsTextCtrl = {};
emailsTextCtrl.service = emailTextService;


emailsTextCtrl.getAllEmailsText = async (req, res) => {
    try {
        const objEmailsText = await emailTextService.getAllEmailsText(req.query);
        if (objEmailsText.length > 0) {
            util.setSuccess(200, 'EmailsText retrieved', objEmailsText);
        } else {
            util.setSuccess(200, 'No emailText found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsTextCtrl.getAEmailText = async (req, res) => {
    try {
        const { emailId } = req.params;
        if (!util.isChar(emailId)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objEmailText = await emailTextService.getAEmailText(emailId, req.query);
        if (!objEmailText) {
            util.setError(404, `Cannot find emailText with the id ${emailId}`);
        } else {
            util.setSuccess(200, 'Found emailText', objEmailText);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsTextCtrl.addEmailText = async (req, res) => {
    try {
        const objEmailText = await emailTextService.addEmailText(req.body);
        util.setSuccess(201, 'EmailText Added!', objEmailText);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsTextCtrl.updateEmailText = async (req, res) => {
    try {
        const { emailId } = req.params;
        if (!util.isChar(emailId)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objEmailText = await emailTextService.updateEmailText(emailId, req.body);
        if (!objEmailText) {
            util.setError(404, `Cannot find emailText with the id: ${emailId}`);
        } else {
            util.setSuccess(200, 'EmailText updated', objEmailText);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

emailsTextCtrl.deleteEmailText = async (req, res) => {
    try {
        const { emailId } = req.params;
        if (!util.isChar(emailId)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objEmailText = await emailTextService.deleteEmailText(emailId);
        if (objEmailText) {
            util.setSuccess(200, 'EmailText deleted', objEmailText);
        } else {
            util.setError(404, `EmailText with the id ${emailId} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



emailsTextCtrl.findOneByEmailId = async (req, res) => {
    try {
        const { emailId } = req.params;
        const objEmailText = await emailTextService.findOneByEmailId(emailId, req.query);
        if (!objEmailText) {
            util.setError(404, `Cannot find emailText with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailText', objEmailText);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsTextCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objEmailText = await emailTextService.findOneByDeleted(deleted, req.query);
        if (!objEmailText) {
            util.setError(404, `Cannot find emailText with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailText', objEmailText);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsTextCtrl.findOneByFromAddr = async (req, res) => {
    try {
        const { fromAddr } = req.params;
        const objEmailText = await emailTextService.findOneByFromAddr(fromAddr, req.query);
        if (!objEmailText) {
            util.setError(404, `Cannot find emailText with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailText', objEmailText);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsTextCtrl.findOneByReplyToAddr = async (req, res) => {
    try {
        const { replyToAddr } = req.params;
        const objEmailText = await emailTextService.findOneByReplyToAddr(replyToAddr, req.query);
        if (!objEmailText) {
            util.setError(404, `Cannot find emailText with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailText', objEmailText);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsTextCtrl.findOneByToAddrs = async (req, res) => {
    try {
        const { toAddrs } = req.params;
        const objEmailText = await emailTextService.findOneByToAddrs(toAddrs, req.query);
        if (!objEmailText) {
            util.setError(404, `Cannot find emailText with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailText', objEmailText);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsTextCtrl.findOneByCcAddrs = async (req, res) => {
    try {
        const { ccAddrs } = req.params;
        const objEmailText = await emailTextService.findOneByCcAddrs(ccAddrs, req.query);
        if (!objEmailText) {
            util.setError(404, `Cannot find emailText with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailText', objEmailText);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsTextCtrl.findOneByBccAddrs = async (req, res) => {
    try {
        const { bccAddrs } = req.params;
        const objEmailText = await emailTextService.findOneByBccAddrs(bccAddrs, req.query);
        if (!objEmailText) {
            util.setError(404, `Cannot find emailText with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailText', objEmailText);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsTextCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objEmailText = await emailTextService.findOneByDescription(description, req.query);
        if (!objEmailText) {
            util.setError(404, `Cannot find emailText with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailText', objEmailText);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsTextCtrl.findOneByDescriptionHtml = async (req, res) => {
    try {
        const { descriptionHtml } = req.params;
        const objEmailText = await emailTextService.findOneByDescriptionHtml(descriptionHtml, req.query);
        if (!objEmailText) {
            util.setError(404, `Cannot find emailText with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailText', objEmailText);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailsTextCtrl.findOneByRawSource = async (req, res) => {
    try {
        const { rawSource } = req.params;
        const objEmailText = await emailTextService.findOneByRawSource(rawSource, req.query);
        if (!objEmailText) {
            util.setError(404, `Cannot find emailText with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailText', objEmailText);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



emailsTextCtrl.updateEmailTextByEmailId = async (req, res) => {
     const { emailId } = req.params;
        try {
            if (!util.isChar(emailId)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailText = await emailTextService.updateEmailTextByEmailId(emailId, req.body);
            if (!objEmailText) {
                util.setError(404, `Cannot find emailText with the id: ${emailId}`);
            } else {
                util.setSuccess(200, 'EmailText updated', objEmailText);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailsTextCtrl.updateEmailTextByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(emailId)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailText = await emailTextService.updateEmailTextByDeleted(deleted, req.body);
            if (!objEmailText) {
                util.setError(404, `Cannot find emailText with the id: ${emailId}`);
            } else {
                util.setSuccess(200, 'EmailText updated', objEmailText);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailsTextCtrl.updateEmailTextByFromAddr = async (req, res) => {
     const { fromAddr } = req.params;
        try {
            if (!util.isChar(emailId)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailText = await emailTextService.updateEmailTextByFromAddr(fromAddr, req.body);
            if (!objEmailText) {
                util.setError(404, `Cannot find emailText with the id: ${emailId}`);
            } else {
                util.setSuccess(200, 'EmailText updated', objEmailText);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailsTextCtrl.updateEmailTextByReplyToAddr = async (req, res) => {
     const { replyToAddr } = req.params;
        try {
            if (!util.isChar(emailId)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailText = await emailTextService.updateEmailTextByReplyToAddr(replyToAddr, req.body);
            if (!objEmailText) {
                util.setError(404, `Cannot find emailText with the id: ${emailId}`);
            } else {
                util.setSuccess(200, 'EmailText updated', objEmailText);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailsTextCtrl.updateEmailTextByToAddrs = async (req, res) => {
     const { toAddrs } = req.params;
        try {
            if (!util.isChar(emailId)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailText = await emailTextService.updateEmailTextByToAddrs(toAddrs, req.body);
            if (!objEmailText) {
                util.setError(404, `Cannot find emailText with the id: ${emailId}`);
            } else {
                util.setSuccess(200, 'EmailText updated', objEmailText);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailsTextCtrl.updateEmailTextByCcAddrs = async (req, res) => {
     const { ccAddrs } = req.params;
        try {
            if (!util.isChar(emailId)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailText = await emailTextService.updateEmailTextByCcAddrs(ccAddrs, req.body);
            if (!objEmailText) {
                util.setError(404, `Cannot find emailText with the id: ${emailId}`);
            } else {
                util.setSuccess(200, 'EmailText updated', objEmailText);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailsTextCtrl.updateEmailTextByBccAddrs = async (req, res) => {
     const { bccAddrs } = req.params;
        try {
            if (!util.isChar(emailId)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailText = await emailTextService.updateEmailTextByBccAddrs(bccAddrs, req.body);
            if (!objEmailText) {
                util.setError(404, `Cannot find emailText with the id: ${emailId}`);
            } else {
                util.setSuccess(200, 'EmailText updated', objEmailText);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailsTextCtrl.updateEmailTextByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(emailId)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailText = await emailTextService.updateEmailTextByDescription(description, req.body);
            if (!objEmailText) {
                util.setError(404, `Cannot find emailText with the id: ${emailId}`);
            } else {
                util.setSuccess(200, 'EmailText updated', objEmailText);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailsTextCtrl.updateEmailTextByDescriptionHtml = async (req, res) => {
     const { descriptionHtml } = req.params;
        try {
            if (!util.isChar(emailId)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailText = await emailTextService.updateEmailTextByDescriptionHtml(descriptionHtml, req.body);
            if (!objEmailText) {
                util.setError(404, `Cannot find emailText with the id: ${emailId}`);
            } else {
                util.setSuccess(200, 'EmailText updated', objEmailText);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailsTextCtrl.updateEmailTextByRawSource = async (req, res) => {
     const { rawSource } = req.params;
        try {
            if (!util.isChar(emailId)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailText = await emailTextService.updateEmailTextByRawSource(rawSource, req.body);
            if (!objEmailText) {
                util.setError(404, `Cannot find emailText with the id: ${emailId}`);
            } else {
                util.setSuccess(200, 'EmailText updated', objEmailText);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = emailsTextCtrl;
//</es-section>
