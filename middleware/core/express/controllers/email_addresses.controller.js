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
const emailAddresseService = require('../services/email_addresses.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const emailAddressesCtrl = {};
emailAddressesCtrl.service = emailAddresseService;


emailAddressesCtrl.getAllEmailAddresses = async (req, res) => {
    try {
        const objEmailAddresses = await emailAddresseService.getAllEmailAddresses(req.query);
        if (objEmailAddresses.length > 0) {
            util.setSuccess(200, 'EmailAddresses retrieved', objEmailAddresses);
        } else {
            util.setSuccess(200, 'No emailAddresse found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailAddressesCtrl.getAEmailAddresse = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objEmailAddresse = await emailAddresseService.getAEmailAddresse(id, req.query);
        if (!objEmailAddresse) {
            util.setError(404, `Cannot find emailAddresse with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found emailAddresse', objEmailAddresse);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailAddressesCtrl.addEmailAddresse = async (req, res) => {
    try {
        const objEmailAddresse = await emailAddresseService.addEmailAddresse(req.body);
        util.setSuccess(201, 'EmailAddresse Added!', objEmailAddresse);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailAddressesCtrl.updateEmailAddresse = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objEmailAddresse = await emailAddresseService.updateEmailAddresse(id, req.body);
        if (!objEmailAddresse) {
            util.setError(404, `Cannot find emailAddresse with the id: ${id}`);
        } else {
            util.setSuccess(200, 'EmailAddresse updated', objEmailAddresse);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

emailAddressesCtrl.deleteEmailAddresse = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objEmailAddresse = await emailAddresseService.deleteEmailAddresse(id);
        if (objEmailAddresse) {
            util.setSuccess(200, 'EmailAddresse deleted', objEmailAddresse);
        } else {
            util.setError(404, `EmailAddresse with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



emailAddressesCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objEmailAddresse = await emailAddresseService.findOneById(id, req.query);
        if (!objEmailAddresse) {
            util.setError(404, `Cannot find emailAddresse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailAddresse', objEmailAddresse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailAddressesCtrl.findOneByInvalidEmail = async (req, res) => {
    try {
        const { invalidEmail } = req.params;
        const objEmailAddresse = await emailAddresseService.findOneByInvalidEmail(invalidEmail, req.query);
        if (!objEmailAddresse) {
            util.setError(404, `Cannot find emailAddresse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailAddresse', objEmailAddresse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailAddressesCtrl.findOneByOptOut = async (req, res) => {
    try {
        const { optOut } = req.params;
        const objEmailAddresse = await emailAddresseService.findOneByOptOut(optOut, req.query);
        if (!objEmailAddresse) {
            util.setError(404, `Cannot find emailAddresse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailAddresse', objEmailAddresse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailAddressesCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objEmailAddresse = await emailAddresseService.findOneByDeleted(deleted, req.query);
        if (!objEmailAddresse) {
            util.setError(404, `Cannot find emailAddresse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailAddresse', objEmailAddresse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailAddressesCtrl.findOneByEmailAddress = async (req, res) => {
    try {
        const { emailAddress } = req.params;
        const objEmailAddresse = await emailAddresseService.findOneByEmailAddress(emailAddress, req.query);
        if (!objEmailAddresse) {
            util.setError(404, `Cannot find emailAddresse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailAddresse', objEmailAddresse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailAddressesCtrl.findOneByEmailAddressCaps = async (req, res) => {
    try {
        const { emailAddressCaps } = req.params;
        const objEmailAddresse = await emailAddresseService.findOneByEmailAddressCaps(emailAddressCaps, req.query);
        if (!objEmailAddresse) {
            util.setError(404, `Cannot find emailAddresse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailAddresse', objEmailAddresse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailAddressesCtrl.findOneByConfirmOptIn = async (req, res) => {
    try {
        const { confirmOptIn } = req.params;
        const objEmailAddresse = await emailAddresseService.findOneByConfirmOptIn(confirmOptIn, req.query);
        if (!objEmailAddresse) {
            util.setError(404, `Cannot find emailAddresse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailAddresse', objEmailAddresse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailAddressesCtrl.findOneByConfirmOptInToken = async (req, res) => {
    try {
        const { confirmOptInToken } = req.params;
        const objEmailAddresse = await emailAddresseService.findOneByConfirmOptInToken(confirmOptInToken, req.query);
        if (!objEmailAddresse) {
            util.setError(404, `Cannot find emailAddresse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailAddresse', objEmailAddresse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailAddressesCtrl.findOneByConfirmOptInDate = async (req, res) => {
    try {
        const { confirmOptInDate } = req.params;
        const objEmailAddresse = await emailAddresseService.findOneByConfirmOptInDate(confirmOptInDate, req.query);
        if (!objEmailAddresse) {
            util.setError(404, `Cannot find emailAddresse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailAddresse', objEmailAddresse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailAddressesCtrl.findOneByConfirmOptInSentDate = async (req, res) => {
    try {
        const { confirmOptInSentDate } = req.params;
        const objEmailAddresse = await emailAddresseService.findOneByConfirmOptInSentDate(confirmOptInSentDate, req.query);
        if (!objEmailAddresse) {
            util.setError(404, `Cannot find emailAddresse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailAddresse', objEmailAddresse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailAddressesCtrl.findOneByConfirmOptInFailDate = async (req, res) => {
    try {
        const { confirmOptInFailDate } = req.params;
        const objEmailAddresse = await emailAddresseService.findOneByConfirmOptInFailDate(confirmOptInFailDate, req.query);
        if (!objEmailAddresse) {
            util.setError(404, `Cannot find emailAddresse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailAddresse', objEmailAddresse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailAddressesCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objEmailAddresse = await emailAddresseService.findOneByDateCreated(dateCreated, req.query);
        if (!objEmailAddresse) {
            util.setError(404, `Cannot find emailAddresse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailAddresse', objEmailAddresse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailAddressesCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objEmailAddresse = await emailAddresseService.findOneByDateModified(dateModified, req.query);
        if (!objEmailAddresse) {
            util.setError(404, `Cannot find emailAddresse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailAddresse', objEmailAddresse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



emailAddressesCtrl.updateEmailAddresseById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailAddresse = await emailAddresseService.updateEmailAddresseById(id, req.body);
            if (!objEmailAddresse) {
                util.setError(404, `Cannot find emailAddresse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailAddresse updated', objEmailAddresse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailAddressesCtrl.updateEmailAddresseByInvalidEmail = async (req, res) => {
     const { invalidEmail } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailAddresse = await emailAddresseService.updateEmailAddresseByInvalidEmail(invalidEmail, req.body);
            if (!objEmailAddresse) {
                util.setError(404, `Cannot find emailAddresse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailAddresse updated', objEmailAddresse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailAddressesCtrl.updateEmailAddresseByOptOut = async (req, res) => {
     const { optOut } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailAddresse = await emailAddresseService.updateEmailAddresseByOptOut(optOut, req.body);
            if (!objEmailAddresse) {
                util.setError(404, `Cannot find emailAddresse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailAddresse updated', objEmailAddresse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailAddressesCtrl.updateEmailAddresseByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailAddresse = await emailAddresseService.updateEmailAddresseByDeleted(deleted, req.body);
            if (!objEmailAddresse) {
                util.setError(404, `Cannot find emailAddresse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailAddresse updated', objEmailAddresse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailAddressesCtrl.updateEmailAddresseByEmailAddress = async (req, res) => {
     const { emailAddress } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailAddresse = await emailAddresseService.updateEmailAddresseByEmailAddress(emailAddress, req.body);
            if (!objEmailAddresse) {
                util.setError(404, `Cannot find emailAddresse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailAddresse updated', objEmailAddresse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailAddressesCtrl.updateEmailAddresseByEmailAddressCaps = async (req, res) => {
     const { emailAddressCaps } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailAddresse = await emailAddresseService.updateEmailAddresseByEmailAddressCaps(emailAddressCaps, req.body);
            if (!objEmailAddresse) {
                util.setError(404, `Cannot find emailAddresse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailAddresse updated', objEmailAddresse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailAddressesCtrl.updateEmailAddresseByConfirmOptIn = async (req, res) => {
     const { confirmOptIn } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailAddresse = await emailAddresseService.updateEmailAddresseByConfirmOptIn(confirmOptIn, req.body);
            if (!objEmailAddresse) {
                util.setError(404, `Cannot find emailAddresse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailAddresse updated', objEmailAddresse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailAddressesCtrl.updateEmailAddresseByConfirmOptInToken = async (req, res) => {
     const { confirmOptInToken } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailAddresse = await emailAddresseService.updateEmailAddresseByConfirmOptInToken(confirmOptInToken, req.body);
            if (!objEmailAddresse) {
                util.setError(404, `Cannot find emailAddresse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailAddresse updated', objEmailAddresse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailAddressesCtrl.updateEmailAddresseByConfirmOptInDate = async (req, res) => {
     const { confirmOptInDate } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailAddresse = await emailAddresseService.updateEmailAddresseByConfirmOptInDate(confirmOptInDate, req.body);
            if (!objEmailAddresse) {
                util.setError(404, `Cannot find emailAddresse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailAddresse updated', objEmailAddresse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailAddressesCtrl.updateEmailAddresseByConfirmOptInSentDate = async (req, res) => {
     const { confirmOptInSentDate } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailAddresse = await emailAddresseService.updateEmailAddresseByConfirmOptInSentDate(confirmOptInSentDate, req.body);
            if (!objEmailAddresse) {
                util.setError(404, `Cannot find emailAddresse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailAddresse updated', objEmailAddresse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailAddressesCtrl.updateEmailAddresseByConfirmOptInFailDate = async (req, res) => {
     const { confirmOptInFailDate } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailAddresse = await emailAddresseService.updateEmailAddresseByConfirmOptInFailDate(confirmOptInFailDate, req.body);
            if (!objEmailAddresse) {
                util.setError(404, `Cannot find emailAddresse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailAddresse updated', objEmailAddresse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailAddressesCtrl.updateEmailAddresseByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailAddresse = await emailAddresseService.updateEmailAddresseByDateCreated(dateCreated, req.body);
            if (!objEmailAddresse) {
                util.setError(404, `Cannot find emailAddresse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailAddresse updated', objEmailAddresse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailAddressesCtrl.updateEmailAddresseByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailAddresse = await emailAddresseService.updateEmailAddresseByDateModified(dateModified, req.body);
            if (!objEmailAddresse) {
                util.setError(404, `Cannot find emailAddresse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailAddresse updated', objEmailAddresse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = emailAddressesCtrl;
//</es-section>
