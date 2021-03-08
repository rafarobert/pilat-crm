/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:02 GMT-0400 (Bolivia Time)
 * Time: 15:36:2
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:02 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:2
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const emailAddrBeanRelService = require('../services/email_addr_bean_rel.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const emailAddrBeanRelCtrl = {};
emailAddrBeanRelCtrl.service = emailAddrBeanRelService;


emailAddrBeanRelCtrl.getAllEmailAddrBeanRel = async (req, res) => {
    try {
        const objEmailAddrBeanRel = await emailAddrBeanRelService.getAllEmailAddrBeanRel(req.query);
        if (objEmailAddrBeanRel.length > 0) {
            util.setSuccess(200, 'EmailAddrBeanRel retrieved', objEmailAddrBeanRel);
        } else {
            util.setSuccess(200, 'No emailAddrBeanRel found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailAddrBeanRelCtrl.getAEmailAddrBeanRel = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objEmailAddrBeanRel = await emailAddrBeanRelService.getAEmailAddrBeanRel(id, req.query);
        if (!objEmailAddrBeanRel) {
            util.setError(404, `Cannot find emailAddrBeanRel with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found emailAddrBeanRel', objEmailAddrBeanRel);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailAddrBeanRelCtrl.addEmailAddrBeanRel = async (req, res) => {
    try {
        const objEmailAddrBeanRel = await emailAddrBeanRelService.addEmailAddrBeanRel(req.body);
        util.setSuccess(201, 'EmailAddrBeanRel Added!', objEmailAddrBeanRel);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailAddrBeanRelCtrl.updateEmailAddrBeanRel = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objEmailAddrBeanRel = await emailAddrBeanRelService.updateEmailAddrBeanRel(id, req.body);
        if (!objEmailAddrBeanRel) {
            util.setError(404, `Cannot find emailAddrBeanRel with the id: ${id}`);
        } else {
            util.setSuccess(200, 'EmailAddrBeanRel updated', objEmailAddrBeanRel);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

emailAddrBeanRelCtrl.deleteEmailAddrBeanRel = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objEmailAddrBeanRel = await emailAddrBeanRelService.deleteEmailAddrBeanRel(id);
        if (objEmailAddrBeanRel) {
            util.setSuccess(200, 'EmailAddrBeanRel deleted', objEmailAddrBeanRel);
        } else {
            util.setError(404, `EmailAddrBeanRel with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



emailAddrBeanRelCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objEmailAddrBeanRel = await emailAddrBeanRelService.findOneById(id, req.query);
        if (!objEmailAddrBeanRel) {
            util.setError(404, `Cannot find emailAddrBeanRel with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailAddrBeanRel', objEmailAddrBeanRel);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailAddrBeanRelCtrl.findOneByPrimaryAddress = async (req, res) => {
    try {
        const { primaryAddress } = req.params;
        const objEmailAddrBeanRel = await emailAddrBeanRelService.findOneByPrimaryAddress(primaryAddress, req.query);
        if (!objEmailAddrBeanRel) {
            util.setError(404, `Cannot find emailAddrBeanRel with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailAddrBeanRel', objEmailAddrBeanRel);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailAddrBeanRelCtrl.findOneByReplyToAddress = async (req, res) => {
    try {
        const { replyToAddress } = req.params;
        const objEmailAddrBeanRel = await emailAddrBeanRelService.findOneByReplyToAddress(replyToAddress, req.query);
        if (!objEmailAddrBeanRel) {
            util.setError(404, `Cannot find emailAddrBeanRel with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailAddrBeanRel', objEmailAddrBeanRel);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailAddrBeanRelCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objEmailAddrBeanRel = await emailAddrBeanRelService.findOneByDeleted(deleted, req.query);
        if (!objEmailAddrBeanRel) {
            util.setError(404, `Cannot find emailAddrBeanRel with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailAddrBeanRel', objEmailAddrBeanRel);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailAddrBeanRelCtrl.findOneByBeanModule = async (req, res) => {
    try {
        const { beanModule } = req.params;
        const objEmailAddrBeanRel = await emailAddrBeanRelService.findOneByBeanModule(beanModule, req.query);
        if (!objEmailAddrBeanRel) {
            util.setError(404, `Cannot find emailAddrBeanRel with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailAddrBeanRel', objEmailAddrBeanRel);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailAddrBeanRelCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objEmailAddrBeanRel = await emailAddrBeanRelService.findOneByDateCreated(dateCreated, req.query);
        if (!objEmailAddrBeanRel) {
            util.setError(404, `Cannot find emailAddrBeanRel with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailAddrBeanRel', objEmailAddrBeanRel);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailAddrBeanRelCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objEmailAddrBeanRel = await emailAddrBeanRelService.findOneByDateModified(dateModified, req.query);
        if (!objEmailAddrBeanRel) {
            util.setError(404, `Cannot find emailAddrBeanRel with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailAddrBeanRel', objEmailAddrBeanRel);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailAddrBeanRelCtrl.findOneByEmailAddressId = async (req, res) => {
    try {
        const { emailAddressId } = req.params;
        const objEmailAddrBeanRel = await emailAddrBeanRelService.findOneByEmailAddressId(emailAddressId, req.query);
        if (!objEmailAddrBeanRel) {
            util.setError(404, `Cannot find emailAddrBeanRel with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailAddrBeanRel', objEmailAddrBeanRel);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailAddrBeanRelCtrl.findOneByBeanId = async (req, res) => {
    try {
        const { beanId } = req.params;
        const objEmailAddrBeanRel = await emailAddrBeanRelService.findOneByBeanId(beanId, req.query);
        if (!objEmailAddrBeanRel) {
            util.setError(404, `Cannot find emailAddrBeanRel with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailAddrBeanRel', objEmailAddrBeanRel);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



emailAddrBeanRelCtrl.updateEmailAddrBeanRelById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailAddrBeanRel = await emailAddrBeanRelService.updateEmailAddrBeanRelById(id, req.body);
            if (!objEmailAddrBeanRel) {
                util.setError(404, `Cannot find emailAddrBeanRel with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailAddrBeanRel updated', objEmailAddrBeanRel);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailAddrBeanRelCtrl.updateEmailAddrBeanRelByPrimaryAddress = async (req, res) => {
     const { primaryAddress } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailAddrBeanRel = await emailAddrBeanRelService.updateEmailAddrBeanRelByPrimaryAddress(primaryAddress, req.body);
            if (!objEmailAddrBeanRel) {
                util.setError(404, `Cannot find emailAddrBeanRel with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailAddrBeanRel updated', objEmailAddrBeanRel);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailAddrBeanRelCtrl.updateEmailAddrBeanRelByReplyToAddress = async (req, res) => {
     const { replyToAddress } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailAddrBeanRel = await emailAddrBeanRelService.updateEmailAddrBeanRelByReplyToAddress(replyToAddress, req.body);
            if (!objEmailAddrBeanRel) {
                util.setError(404, `Cannot find emailAddrBeanRel with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailAddrBeanRel updated', objEmailAddrBeanRel);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailAddrBeanRelCtrl.updateEmailAddrBeanRelByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailAddrBeanRel = await emailAddrBeanRelService.updateEmailAddrBeanRelByDeleted(deleted, req.body);
            if (!objEmailAddrBeanRel) {
                util.setError(404, `Cannot find emailAddrBeanRel with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailAddrBeanRel updated', objEmailAddrBeanRel);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailAddrBeanRelCtrl.updateEmailAddrBeanRelByBeanModule = async (req, res) => {
     const { beanModule } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailAddrBeanRel = await emailAddrBeanRelService.updateEmailAddrBeanRelByBeanModule(beanModule, req.body);
            if (!objEmailAddrBeanRel) {
                util.setError(404, `Cannot find emailAddrBeanRel with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailAddrBeanRel updated', objEmailAddrBeanRel);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailAddrBeanRelCtrl.updateEmailAddrBeanRelByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailAddrBeanRel = await emailAddrBeanRelService.updateEmailAddrBeanRelByDateCreated(dateCreated, req.body);
            if (!objEmailAddrBeanRel) {
                util.setError(404, `Cannot find emailAddrBeanRel with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailAddrBeanRel updated', objEmailAddrBeanRel);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailAddrBeanRelCtrl.updateEmailAddrBeanRelByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailAddrBeanRel = await emailAddrBeanRelService.updateEmailAddrBeanRelByDateModified(dateModified, req.body);
            if (!objEmailAddrBeanRel) {
                util.setError(404, `Cannot find emailAddrBeanRel with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailAddrBeanRel updated', objEmailAddrBeanRel);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailAddrBeanRelCtrl.updateEmailAddrBeanRelByEmailAddressId = async (req, res) => {
     const { emailAddressId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailAddrBeanRel = await emailAddrBeanRelService.updateEmailAddrBeanRelByEmailAddressId(emailAddressId, req.body);
            if (!objEmailAddrBeanRel) {
                util.setError(404, `Cannot find emailAddrBeanRel with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailAddrBeanRel updated', objEmailAddrBeanRel);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailAddrBeanRelCtrl.updateEmailAddrBeanRelByBeanId = async (req, res) => {
     const { beanId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailAddrBeanRel = await emailAddrBeanRelService.updateEmailAddrBeanRelByBeanId(beanId, req.body);
            if (!objEmailAddrBeanRel) {
                util.setError(404, `Cannot find emailAddrBeanRel with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailAddrBeanRel updated', objEmailAddrBeanRel);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = emailAddrBeanRelCtrl;
//</es-section>
