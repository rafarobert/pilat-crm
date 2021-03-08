/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:57 GMT-0400 (Bolivia Time)
 * Time: 15:35:57
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:57 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:57
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const eapmService = require('../services/eapm.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const eapmCtrl = {};
eapmCtrl.service = eapmService;


eapmCtrl.getAllEapm = async (req, res) => {
    try {
        const objEapm = await eapmService.getAllEapm(req.query);
        if (objEapm.length > 0) {
            util.setSuccess(200, 'Eapm retrieved', objEapm);
        } else {
            util.setSuccess(200, 'No eapm found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

eapmCtrl.getAEapm = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objEapm = await eapmService.getAEapm(id, req.query);
        if (!objEapm) {
            util.setError(404, `Cannot find eapm with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found eapm', objEapm);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

eapmCtrl.addEapm = async (req, res) => {
    try {
        const objEapm = await eapmService.addEapm(req.body);
        util.setSuccess(201, 'Eapm Added!', objEapm);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

eapmCtrl.updateEapm = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objEapm = await eapmService.updateEapm(id, req.body);
        if (!objEapm) {
            util.setError(404, `Cannot find eapm with the id: ${id}`);
        } else {
            util.setSuccess(200, 'Eapm updated', objEapm);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

eapmCtrl.deleteEapm = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objEapm = await eapmService.deleteEapm(id);
        if (objEapm) {
            util.setSuccess(200, 'Eapm deleted', objEapm);
        } else {
            util.setError(404, `Eapm with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



eapmCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objEapm = await eapmService.findOneById(id, req.query);
        if (!objEapm) {
            util.setError(404, `Cannot find eapm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found eapm', objEapm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

eapmCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objEapm = await eapmService.findOneByDeleted(deleted, req.query);
        if (!objEapm) {
            util.setError(404, `Cannot find eapm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found eapm', objEapm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

eapmCtrl.findOneByValidated = async (req, res) => {
    try {
        const { validated } = req.params;
        const objEapm = await eapmService.findOneByValidated(validated, req.query);
        if (!objEapm) {
            util.setError(404, `Cannot find eapm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found eapm', objEapm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

eapmCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objEapm = await eapmService.findOneByName(name, req.query);
        if (!objEapm) {
            util.setError(404, `Cannot find eapm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found eapm', objEapm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

eapmCtrl.findOneByPassword = async (req, res) => {
    try {
        const { password } = req.params;
        const objEapm = await eapmService.findOneByPassword(password, req.query);
        if (!objEapm) {
            util.setError(404, `Cannot find eapm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found eapm', objEapm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

eapmCtrl.findOneByUrl = async (req, res) => {
    try {
        const { url } = req.params;
        const objEapm = await eapmService.findOneByUrl(url, req.query);
        if (!objEapm) {
            util.setError(404, `Cannot find eapm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found eapm', objEapm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

eapmCtrl.findOneByApplication = async (req, res) => {
    try {
        const { application } = req.params;
        const objEapm = await eapmService.findOneByApplication(application, req.query);
        if (!objEapm) {
            util.setError(404, `Cannot find eapm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found eapm', objEapm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

eapmCtrl.findOneByConsumerKey = async (req, res) => {
    try {
        const { consumerKey } = req.params;
        const objEapm = await eapmService.findOneByConsumerKey(consumerKey, req.query);
        if (!objEapm) {
            util.setError(404, `Cannot find eapm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found eapm', objEapm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

eapmCtrl.findOneByConsumerSecret = async (req, res) => {
    try {
        const { consumerSecret } = req.params;
        const objEapm = await eapmService.findOneByConsumerSecret(consumerSecret, req.query);
        if (!objEapm) {
            util.setError(404, `Cannot find eapm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found eapm', objEapm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

eapmCtrl.findOneByOauthToken = async (req, res) => {
    try {
        const { oauthToken } = req.params;
        const objEapm = await eapmService.findOneByOauthToken(oauthToken, req.query);
        if (!objEapm) {
            util.setError(404, `Cannot find eapm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found eapm', objEapm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

eapmCtrl.findOneByOauthSecret = async (req, res) => {
    try {
        const { oauthSecret } = req.params;
        const objEapm = await eapmService.findOneByOauthSecret(oauthSecret, req.query);
        if (!objEapm) {
            util.setError(404, `Cannot find eapm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found eapm', objEapm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

eapmCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objEapm = await eapmService.findOneByDescription(description, req.query);
        if (!objEapm) {
            util.setError(404, `Cannot find eapm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found eapm', objEapm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

eapmCtrl.findOneByApiData = async (req, res) => {
    try {
        const { apiData } = req.params;
        const objEapm = await eapmService.findOneByApiData(apiData, req.query);
        if (!objEapm) {
            util.setError(404, `Cannot find eapm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found eapm', objEapm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

eapmCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objEapm = await eapmService.findOneByDateEntered(dateEntered, req.query);
        if (!objEapm) {
            util.setError(404, `Cannot find eapm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found eapm', objEapm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

eapmCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objEapm = await eapmService.findOneByDateModified(dateModified, req.query);
        if (!objEapm) {
            util.setError(404, `Cannot find eapm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found eapm', objEapm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

eapmCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objEapm = await eapmService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objEapm) {
            util.setError(404, `Cannot find eapm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found eapm', objEapm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

eapmCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objEapm = await eapmService.findOneByCreatedBy(createdBy, req.query);
        if (!objEapm) {
            util.setError(404, `Cannot find eapm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found eapm', objEapm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

eapmCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objEapm = await eapmService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objEapm) {
            util.setError(404, `Cannot find eapm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found eapm', objEapm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



eapmCtrl.updateEapmById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEapm = await eapmService.updateEapmById(id, req.body);
            if (!objEapm) {
                util.setError(404, `Cannot find eapm with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Eapm updated', objEapm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

eapmCtrl.updateEapmByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEapm = await eapmService.updateEapmByDeleted(deleted, req.body);
            if (!objEapm) {
                util.setError(404, `Cannot find eapm with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Eapm updated', objEapm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

eapmCtrl.updateEapmByValidated = async (req, res) => {
     const { validated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEapm = await eapmService.updateEapmByValidated(validated, req.body);
            if (!objEapm) {
                util.setError(404, `Cannot find eapm with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Eapm updated', objEapm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

eapmCtrl.updateEapmByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEapm = await eapmService.updateEapmByName(name, req.body);
            if (!objEapm) {
                util.setError(404, `Cannot find eapm with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Eapm updated', objEapm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

eapmCtrl.updateEapmByPassword = async (req, res) => {
     const { password } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEapm = await eapmService.updateEapmByPassword(password, req.body);
            if (!objEapm) {
                util.setError(404, `Cannot find eapm with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Eapm updated', objEapm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

eapmCtrl.updateEapmByUrl = async (req, res) => {
     const { url } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEapm = await eapmService.updateEapmByUrl(url, req.body);
            if (!objEapm) {
                util.setError(404, `Cannot find eapm with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Eapm updated', objEapm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

eapmCtrl.updateEapmByApplication = async (req, res) => {
     const { application } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEapm = await eapmService.updateEapmByApplication(application, req.body);
            if (!objEapm) {
                util.setError(404, `Cannot find eapm with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Eapm updated', objEapm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

eapmCtrl.updateEapmByConsumerKey = async (req, res) => {
     const { consumerKey } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEapm = await eapmService.updateEapmByConsumerKey(consumerKey, req.body);
            if (!objEapm) {
                util.setError(404, `Cannot find eapm with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Eapm updated', objEapm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

eapmCtrl.updateEapmByConsumerSecret = async (req, res) => {
     const { consumerSecret } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEapm = await eapmService.updateEapmByConsumerSecret(consumerSecret, req.body);
            if (!objEapm) {
                util.setError(404, `Cannot find eapm with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Eapm updated', objEapm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

eapmCtrl.updateEapmByOauthToken = async (req, res) => {
     const { oauthToken } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEapm = await eapmService.updateEapmByOauthToken(oauthToken, req.body);
            if (!objEapm) {
                util.setError(404, `Cannot find eapm with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Eapm updated', objEapm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

eapmCtrl.updateEapmByOauthSecret = async (req, res) => {
     const { oauthSecret } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEapm = await eapmService.updateEapmByOauthSecret(oauthSecret, req.body);
            if (!objEapm) {
                util.setError(404, `Cannot find eapm with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Eapm updated', objEapm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

eapmCtrl.updateEapmByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEapm = await eapmService.updateEapmByDescription(description, req.body);
            if (!objEapm) {
                util.setError(404, `Cannot find eapm with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Eapm updated', objEapm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

eapmCtrl.updateEapmByApiData = async (req, res) => {
     const { apiData } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEapm = await eapmService.updateEapmByApiData(apiData, req.body);
            if (!objEapm) {
                util.setError(404, `Cannot find eapm with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Eapm updated', objEapm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

eapmCtrl.updateEapmByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEapm = await eapmService.updateEapmByDateEntered(dateEntered, req.body);
            if (!objEapm) {
                util.setError(404, `Cannot find eapm with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Eapm updated', objEapm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

eapmCtrl.updateEapmByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEapm = await eapmService.updateEapmByDateModified(dateModified, req.body);
            if (!objEapm) {
                util.setError(404, `Cannot find eapm with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Eapm updated', objEapm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

eapmCtrl.updateEapmByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEapm = await eapmService.updateEapmByModifiedUserId(modifiedUserId, req.body);
            if (!objEapm) {
                util.setError(404, `Cannot find eapm with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Eapm updated', objEapm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

eapmCtrl.updateEapmByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEapm = await eapmService.updateEapmByCreatedBy(createdBy, req.body);
            if (!objEapm) {
                util.setError(404, `Cannot find eapm with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Eapm updated', objEapm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

eapmCtrl.updateEapmByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEapm = await eapmService.updateEapmByAssignedUserId(assignedUserId, req.body);
            if (!objEapm) {
                util.setError(404, `Cannot find eapm with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Eapm updated', objEapm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = eapmCtrl;
//</es-section>
