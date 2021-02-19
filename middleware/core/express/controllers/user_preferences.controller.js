/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:39:05 GMT-0400 (Bolivia Time)
 * Time: 18:39:5
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:39:05 GMT-0400 (Bolivia Time)
 * Last time updated: 18:39:5
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const userPreferenceService = require('../services/user_preferences.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const userPreferencesCtrl = {};
userPreferencesCtrl.service = userPreferenceService;


userPreferencesCtrl.getAllUserPreferences = async (req, res) => {
    try {
        const objUserPreferences = await userPreferenceService.getAllUserPreferences(req.query);
        if (objUserPreferences.length > 0) {
            util.setSuccess(200, 'UserPreferences retrieved', objUserPreferences);
        } else {
            util.setSuccess(200, 'No userPreference found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

userPreferencesCtrl.getAUserPreference = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objUserPreference = await userPreferenceService.getAUserPreference(id, req.query);
        if (!objUserPreference) {
            util.setError(404, `Cannot find userPreference with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found userPreference', objUserPreference);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

userPreferencesCtrl.addUserPreference = async (req, res) => {
    try {
        const objUserPreference = await userPreferenceService.addUserPreference(req.body);
        util.setSuccess(201, 'UserPreference Added!', objUserPreference);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

userPreferencesCtrl.updateUserPreference = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objUserPreference = await userPreferenceService.updateUserPreference(id, req.body);
        if (!objUserPreference) {
            util.setError(404, `Cannot find userPreference with the id: ${id}`);
        } else {
            util.setSuccess(200, 'UserPreference updated', objUserPreference);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

userPreferencesCtrl.deleteUserPreference = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objUserPreference = await userPreferenceService.deleteUserPreference(id);
        if (objUserPreference) {
            util.setSuccess(200, 'UserPreference deleted', objUserPreference);
        } else {
            util.setError(404, `UserPreference with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



userPreferencesCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objUserPreference = await userPreferenceService.findOneById(id, req.query);
        if (!objUserPreference) {
            util.setError(404, `Cannot find userPreference with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found userPreference', objUserPreference);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

userPreferencesCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objUserPreference = await userPreferenceService.findOneByDeleted(deleted, req.query);
        if (!objUserPreference) {
            util.setError(404, `Cannot find userPreference with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found userPreference', objUserPreference);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

userPreferencesCtrl.findOneByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const objUserPreference = await userPreferenceService.findOneByCategory(category, req.query);
        if (!objUserPreference) {
            util.setError(404, `Cannot find userPreference with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found userPreference', objUserPreference);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

userPreferencesCtrl.findOneByContents = async (req, res) => {
    try {
        const { contents } = req.params;
        const objUserPreference = await userPreferenceService.findOneByContents(contents, req.query);
        if (!objUserPreference) {
            util.setError(404, `Cannot find userPreference with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found userPreference', objUserPreference);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

userPreferencesCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objUserPreference = await userPreferenceService.findOneByDateEntered(dateEntered, req.query);
        if (!objUserPreference) {
            util.setError(404, `Cannot find userPreference with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found userPreference', objUserPreference);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

userPreferencesCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objUserPreference = await userPreferenceService.findOneByDateModified(dateModified, req.query);
        if (!objUserPreference) {
            util.setError(404, `Cannot find userPreference with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found userPreference', objUserPreference);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

userPreferencesCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objUserPreference = await userPreferenceService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objUserPreference) {
            util.setError(404, `Cannot find userPreference with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found userPreference', objUserPreference);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



userPreferencesCtrl.updateUserPreferenceById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUserPreference = await userPreferenceService.updateUserPreferenceById(id, req.body);
            if (!objUserPreference) {
                util.setError(404, `Cannot find userPreference with the id: ${id}`);
            } else {
                util.setSuccess(200, 'UserPreference updated', objUserPreference);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

userPreferencesCtrl.updateUserPreferenceByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUserPreference = await userPreferenceService.updateUserPreferenceByDeleted(deleted, req.body);
            if (!objUserPreference) {
                util.setError(404, `Cannot find userPreference with the id: ${id}`);
            } else {
                util.setSuccess(200, 'UserPreference updated', objUserPreference);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

userPreferencesCtrl.updateUserPreferenceByCategory = async (req, res) => {
     const { category } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUserPreference = await userPreferenceService.updateUserPreferenceByCategory(category, req.body);
            if (!objUserPreference) {
                util.setError(404, `Cannot find userPreference with the id: ${id}`);
            } else {
                util.setSuccess(200, 'UserPreference updated', objUserPreference);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

userPreferencesCtrl.updateUserPreferenceByContents = async (req, res) => {
     const { contents } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUserPreference = await userPreferenceService.updateUserPreferenceByContents(contents, req.body);
            if (!objUserPreference) {
                util.setError(404, `Cannot find userPreference with the id: ${id}`);
            } else {
                util.setSuccess(200, 'UserPreference updated', objUserPreference);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

userPreferencesCtrl.updateUserPreferenceByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUserPreference = await userPreferenceService.updateUserPreferenceByDateEntered(dateEntered, req.body);
            if (!objUserPreference) {
                util.setError(404, `Cannot find userPreference with the id: ${id}`);
            } else {
                util.setSuccess(200, 'UserPreference updated', objUserPreference);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

userPreferencesCtrl.updateUserPreferenceByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUserPreference = await userPreferenceService.updateUserPreferenceByDateModified(dateModified, req.body);
            if (!objUserPreference) {
                util.setError(404, `Cannot find userPreference with the id: ${id}`);
            } else {
                util.setSuccess(200, 'UserPreference updated', objUserPreference);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

userPreferencesCtrl.updateUserPreferenceByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUserPreference = await userPreferenceService.updateUserPreferenceByAssignedUserId(assignedUserId, req.body);
            if (!objUserPreference) {
                util.setError(404, `Cannot find userPreference with the id: ${id}`);
            } else {
                util.setSuccess(200, 'UserPreference updated', objUserPreference);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = userPreferencesCtrl;
//</es-section>
