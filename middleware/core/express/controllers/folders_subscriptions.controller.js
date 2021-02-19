/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:37:17 GMT-0400 (Bolivia Time)
 * Time: 18:37:17
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:37:17 GMT-0400 (Bolivia Time)
 * Last time updated: 18:37:17
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const folderSubscriptionService = require('../services/folders_subscriptions.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const foldersSubscriptionsCtrl = {};
foldersSubscriptionsCtrl.service = folderSubscriptionService;


foldersSubscriptionsCtrl.getAllFoldersSubscriptions = async (req, res) => {
    try {
        const objFoldersSubscriptions = await folderSubscriptionService.getAllFoldersSubscriptions(req.query);
        if (objFoldersSubscriptions.length > 0) {
            util.setSuccess(200, 'FoldersSubscriptions retrieved', objFoldersSubscriptions);
        } else {
            util.setSuccess(200, 'No folderSubscription found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

foldersSubscriptionsCtrl.getAFolderSubscription = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objFolderSubscription = await folderSubscriptionService.getAFolderSubscription(id, req.query);
        if (!objFolderSubscription) {
            util.setError(404, `Cannot find folderSubscription with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found folderSubscription', objFolderSubscription);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

foldersSubscriptionsCtrl.addFolderSubscription = async (req, res) => {
    try {
        const objFolderSubscription = await folderSubscriptionService.addFolderSubscription(req.body);
        util.setSuccess(201, 'FolderSubscription Added!', objFolderSubscription);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

foldersSubscriptionsCtrl.updateFolderSubscription = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objFolderSubscription = await folderSubscriptionService.updateFolderSubscription(id, req.body);
        if (!objFolderSubscription) {
            util.setError(404, `Cannot find folderSubscription with the id: ${id}`);
        } else {
            util.setSuccess(200, 'FolderSubscription updated', objFolderSubscription);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

foldersSubscriptionsCtrl.deleteFolderSubscription = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objFolderSubscription = await folderSubscriptionService.deleteFolderSubscription(id);
        if (objFolderSubscription) {
            util.setSuccess(200, 'FolderSubscription deleted', objFolderSubscription);
        } else {
            util.setError(404, `FolderSubscription with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



foldersSubscriptionsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objFolderSubscription = await folderSubscriptionService.findOneById(id, req.query);
        if (!objFolderSubscription) {
            util.setError(404, `Cannot find folderSubscription with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found folderSubscription', objFolderSubscription);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

foldersSubscriptionsCtrl.findOneByFolderId = async (req, res) => {
    try {
        const { folderId } = req.params;
        const objFolderSubscription = await folderSubscriptionService.findOneByFolderId(folderId, req.query);
        if (!objFolderSubscription) {
            util.setError(404, `Cannot find folderSubscription with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found folderSubscription', objFolderSubscription);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

foldersSubscriptionsCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objFolderSubscription = await folderSubscriptionService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objFolderSubscription) {
            util.setError(404, `Cannot find folderSubscription with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found folderSubscription', objFolderSubscription);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



foldersSubscriptionsCtrl.updateFolderSubscriptionById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFolderSubscription = await folderSubscriptionService.updateFolderSubscriptionById(id, req.body);
            if (!objFolderSubscription) {
                util.setError(404, `Cannot find folderSubscription with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FolderSubscription updated', objFolderSubscription);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

foldersSubscriptionsCtrl.updateFolderSubscriptionByFolderId = async (req, res) => {
     const { folderId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFolderSubscription = await folderSubscriptionService.updateFolderSubscriptionByFolderId(folderId, req.body);
            if (!objFolderSubscription) {
                util.setError(404, `Cannot find folderSubscription with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FolderSubscription updated', objFolderSubscription);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

foldersSubscriptionsCtrl.updateFolderSubscriptionByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFolderSubscription = await folderSubscriptionService.updateFolderSubscriptionByAssignedUserId(assignedUserId, req.body);
            if (!objFolderSubscription) {
                util.setError(404, `Cannot find folderSubscription with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FolderSubscription updated', objFolderSubscription);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = foldersSubscriptionsCtrl;
//</es-section>
