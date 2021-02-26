/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:55 GMT-0400 (Bolivia Time)
 * Time: 0:23:55
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:55 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:55
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const upgradeHistoryService = require('../services/upgrade_history.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const upgradeHistoryCtrl = {};
upgradeHistoryCtrl.service = upgradeHistoryService;


upgradeHistoryCtrl.getAllUpgradeHistory = async (req, res) => {
    try {
        const objUpgradeHistory = await upgradeHistoryService.getAllUpgradeHistory(req.query);
        if (objUpgradeHistory.length > 0) {
            util.setSuccess(200, 'UpgradeHistory retrieved', objUpgradeHistory);
        } else {
            util.setSuccess(200, 'No upgradeHistory found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

upgradeHistoryCtrl.getAUpgradeHistory = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objUpgradeHistory = await upgradeHistoryService.getAUpgradeHistory(id, req.query);
        if (!objUpgradeHistory) {
            util.setError(404, `Cannot find upgradeHistory with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found upgradeHistory', objUpgradeHistory);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

upgradeHistoryCtrl.addUpgradeHistory = async (req, res) => {
    try {
        const objUpgradeHistory = await upgradeHistoryService.addUpgradeHistory(req.body);
        util.setSuccess(201, 'UpgradeHistory Added!', objUpgradeHistory);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

upgradeHistoryCtrl.updateUpgradeHistory = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objUpgradeHistory = await upgradeHistoryService.updateUpgradeHistory(id, req.body);
        if (!objUpgradeHistory) {
            util.setError(404, `Cannot find upgradeHistory with the id: ${id}`);
        } else {
            util.setSuccess(200, 'UpgradeHistory updated', objUpgradeHistory);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

upgradeHistoryCtrl.deleteUpgradeHistory = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objUpgradeHistory = await upgradeHistoryService.deleteUpgradeHistory(id);
        if (objUpgradeHistory) {
            util.setSuccess(200, 'UpgradeHistory deleted', objUpgradeHistory);
        } else {
            util.setError(404, `UpgradeHistory with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



upgradeHistoryCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objUpgradeHistory = await upgradeHistoryService.findOneById(id, req.query);
        if (!objUpgradeHistory) {
            util.setError(404, `Cannot find upgradeHistory with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found upgradeHistory', objUpgradeHistory);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

upgradeHistoryCtrl.findOneByEnabled = async (req, res) => {
    try {
        const { enabled } = req.params;
        const objUpgradeHistory = await upgradeHistoryService.findOneByEnabled(enabled, req.query);
        if (!objUpgradeHistory) {
            util.setError(404, `Cannot find upgradeHistory with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found upgradeHistory', objUpgradeHistory);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

upgradeHistoryCtrl.findOneByFilename = async (req, res) => {
    try {
        const { filename } = req.params;
        const objUpgradeHistory = await upgradeHistoryService.findOneByFilename(filename, req.query);
        if (!objUpgradeHistory) {
            util.setError(404, `Cannot find upgradeHistory with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found upgradeHistory', objUpgradeHistory);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

upgradeHistoryCtrl.findOneByMd5sum = async (req, res) => {
    try {
        const { md5sum } = req.params;
        const objUpgradeHistory = await upgradeHistoryService.findOneByMd5sum(md5sum, req.query);
        if (!objUpgradeHistory) {
            util.setError(404, `Cannot find upgradeHistory with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found upgradeHistory', objUpgradeHistory);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

upgradeHistoryCtrl.findOneByType = async (req, res) => {
    try {
        const { type } = req.params;
        const objUpgradeHistory = await upgradeHistoryService.findOneByType(type, req.query);
        if (!objUpgradeHistory) {
            util.setError(404, `Cannot find upgradeHistory with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found upgradeHistory', objUpgradeHistory);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

upgradeHistoryCtrl.findOneByStatus = async (req, res) => {
    try {
        const { status } = req.params;
        const objUpgradeHistory = await upgradeHistoryService.findOneByStatus(status, req.query);
        if (!objUpgradeHistory) {
            util.setError(404, `Cannot find upgradeHistory with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found upgradeHistory', objUpgradeHistory);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

upgradeHistoryCtrl.findOneByVersion = async (req, res) => {
    try {
        const { version } = req.params;
        const objUpgradeHistory = await upgradeHistoryService.findOneByVersion(version, req.query);
        if (!objUpgradeHistory) {
            util.setError(404, `Cannot find upgradeHistory with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found upgradeHistory', objUpgradeHistory);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

upgradeHistoryCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objUpgradeHistory = await upgradeHistoryService.findOneByName(name, req.query);
        if (!objUpgradeHistory) {
            util.setError(404, `Cannot find upgradeHistory with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found upgradeHistory', objUpgradeHistory);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

upgradeHistoryCtrl.findOneByIdName = async (req, res) => {
    try {
        const { idName } = req.params;
        const objUpgradeHistory = await upgradeHistoryService.findOneByIdName(idName, req.query);
        if (!objUpgradeHistory) {
            util.setError(404, `Cannot find upgradeHistory with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found upgradeHistory', objUpgradeHistory);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

upgradeHistoryCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objUpgradeHistory = await upgradeHistoryService.findOneByDescription(description, req.query);
        if (!objUpgradeHistory) {
            util.setError(404, `Cannot find upgradeHistory with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found upgradeHistory', objUpgradeHistory);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

upgradeHistoryCtrl.findOneByManifest = async (req, res) => {
    try {
        const { manifest } = req.params;
        const objUpgradeHistory = await upgradeHistoryService.findOneByManifest(manifest, req.query);
        if (!objUpgradeHistory) {
            util.setError(404, `Cannot find upgradeHistory with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found upgradeHistory', objUpgradeHistory);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

upgradeHistoryCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objUpgradeHistory = await upgradeHistoryService.findOneByDateEntered(dateEntered, req.query);
        if (!objUpgradeHistory) {
            util.setError(404, `Cannot find upgradeHistory with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found upgradeHistory', objUpgradeHistory);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



upgradeHistoryCtrl.updateUpgradeHistoryById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUpgradeHistory = await upgradeHistoryService.updateUpgradeHistoryById(id, req.body);
            if (!objUpgradeHistory) {
                util.setError(404, `Cannot find upgradeHistory with the id: ${id}`);
            } else {
                util.setSuccess(200, 'UpgradeHistory updated', objUpgradeHistory);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

upgradeHistoryCtrl.updateUpgradeHistoryByEnabled = async (req, res) => {
     const { enabled } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUpgradeHistory = await upgradeHistoryService.updateUpgradeHistoryByEnabled(enabled, req.body);
            if (!objUpgradeHistory) {
                util.setError(404, `Cannot find upgradeHistory with the id: ${id}`);
            } else {
                util.setSuccess(200, 'UpgradeHistory updated', objUpgradeHistory);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

upgradeHistoryCtrl.updateUpgradeHistoryByFilename = async (req, res) => {
     const { filename } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUpgradeHistory = await upgradeHistoryService.updateUpgradeHistoryByFilename(filename, req.body);
            if (!objUpgradeHistory) {
                util.setError(404, `Cannot find upgradeHistory with the id: ${id}`);
            } else {
                util.setSuccess(200, 'UpgradeHistory updated', objUpgradeHistory);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

upgradeHistoryCtrl.updateUpgradeHistoryByMd5sum = async (req, res) => {
     const { md5sum } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUpgradeHistory = await upgradeHistoryService.updateUpgradeHistoryByMd5sum(md5sum, req.body);
            if (!objUpgradeHistory) {
                util.setError(404, `Cannot find upgradeHistory with the id: ${id}`);
            } else {
                util.setSuccess(200, 'UpgradeHistory updated', objUpgradeHistory);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

upgradeHistoryCtrl.updateUpgradeHistoryByType = async (req, res) => {
     const { type } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUpgradeHistory = await upgradeHistoryService.updateUpgradeHistoryByType(type, req.body);
            if (!objUpgradeHistory) {
                util.setError(404, `Cannot find upgradeHistory with the id: ${id}`);
            } else {
                util.setSuccess(200, 'UpgradeHistory updated', objUpgradeHistory);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

upgradeHistoryCtrl.updateUpgradeHistoryByStatus = async (req, res) => {
     const { status } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUpgradeHistory = await upgradeHistoryService.updateUpgradeHistoryByStatus(status, req.body);
            if (!objUpgradeHistory) {
                util.setError(404, `Cannot find upgradeHistory with the id: ${id}`);
            } else {
                util.setSuccess(200, 'UpgradeHistory updated', objUpgradeHistory);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

upgradeHistoryCtrl.updateUpgradeHistoryByVersion = async (req, res) => {
     const { version } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUpgradeHistory = await upgradeHistoryService.updateUpgradeHistoryByVersion(version, req.body);
            if (!objUpgradeHistory) {
                util.setError(404, `Cannot find upgradeHistory with the id: ${id}`);
            } else {
                util.setSuccess(200, 'UpgradeHistory updated', objUpgradeHistory);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

upgradeHistoryCtrl.updateUpgradeHistoryByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUpgradeHistory = await upgradeHistoryService.updateUpgradeHistoryByName(name, req.body);
            if (!objUpgradeHistory) {
                util.setError(404, `Cannot find upgradeHistory with the id: ${id}`);
            } else {
                util.setSuccess(200, 'UpgradeHistory updated', objUpgradeHistory);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

upgradeHistoryCtrl.updateUpgradeHistoryByIdName = async (req, res) => {
     const { idName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUpgradeHistory = await upgradeHistoryService.updateUpgradeHistoryByIdName(idName, req.body);
            if (!objUpgradeHistory) {
                util.setError(404, `Cannot find upgradeHistory with the id: ${id}`);
            } else {
                util.setSuccess(200, 'UpgradeHistory updated', objUpgradeHistory);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

upgradeHistoryCtrl.updateUpgradeHistoryByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUpgradeHistory = await upgradeHistoryService.updateUpgradeHistoryByDescription(description, req.body);
            if (!objUpgradeHistory) {
                util.setError(404, `Cannot find upgradeHistory with the id: ${id}`);
            } else {
                util.setSuccess(200, 'UpgradeHistory updated', objUpgradeHistory);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

upgradeHistoryCtrl.updateUpgradeHistoryByManifest = async (req, res) => {
     const { manifest } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUpgradeHistory = await upgradeHistoryService.updateUpgradeHistoryByManifest(manifest, req.body);
            if (!objUpgradeHistory) {
                util.setError(404, `Cannot find upgradeHistory with the id: ${id}`);
            } else {
                util.setSuccess(200, 'UpgradeHistory updated', objUpgradeHistory);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

upgradeHistoryCtrl.updateUpgradeHistoryByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUpgradeHistory = await upgradeHistoryService.updateUpgradeHistoryByDateEntered(dateEntered, req.body);
            if (!objUpgradeHistory) {
                util.setError(404, `Cannot find upgradeHistory with the id: ${id}`);
            } else {
                util.setSuccess(200, 'UpgradeHistory updated', objUpgradeHistory);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = upgradeHistoryCtrl;
//</es-section>
