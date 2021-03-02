/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:25 GMT-0400 (Bolivia Time)
 * Time: 14:1:25
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:25 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:25
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const releaseService = require('../services/releases.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const releasesCtrl = {};
releasesCtrl.service = releaseService;


releasesCtrl.getAllReleases = async (req, res) => {
    try {
        const objReleases = await releaseService.getAllReleases(req.query);
        if (objReleases.length > 0) {
            util.setSuccess(200, 'Releases retrieved', objReleases);
        } else {
            util.setSuccess(200, 'No release found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

releasesCtrl.getARelease = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objRelease = await releaseService.getARelease(id, req.query);
        if (!objRelease) {
            util.setError(404, `Cannot find release with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found release', objRelease);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

releasesCtrl.addRelease = async (req, res) => {
    try {
        const objRelease = await releaseService.addRelease(req.body);
        util.setSuccess(201, 'Release Added!', objRelease);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

releasesCtrl.updateRelease = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objRelease = await releaseService.updateRelease(id, req.body);
        if (!objRelease) {
            util.setError(404, `Cannot find release with the id: ${id}`);
        } else {
            util.setSuccess(200, 'Release updated', objRelease);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

releasesCtrl.deleteRelease = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objRelease = await releaseService.deleteRelease(id);
        if (objRelease) {
            util.setSuccess(200, 'Release deleted', objRelease);
        } else {
            util.setError(404, `Release with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



releasesCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objRelease = await releaseService.findOneById(id, req.query);
        if (!objRelease) {
            util.setError(404, `Cannot find release with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found release', objRelease);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

releasesCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objRelease = await releaseService.findOneByDeleted(deleted, req.query);
        if (!objRelease) {
            util.setError(404, `Cannot find release with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found release', objRelease);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

releasesCtrl.findOneByListOrder = async (req, res) => {
    try {
        const { listOrder } = req.params;
        const objRelease = await releaseService.findOneByListOrder(listOrder, req.query);
        if (!objRelease) {
            util.setError(404, `Cannot find release with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found release', objRelease);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

releasesCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objRelease = await releaseService.findOneByName(name, req.query);
        if (!objRelease) {
            util.setError(404, `Cannot find release with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found release', objRelease);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

releasesCtrl.findOneByStatus = async (req, res) => {
    try {
        const { status } = req.params;
        const objRelease = await releaseService.findOneByStatus(status, req.query);
        if (!objRelease) {
            util.setError(404, `Cannot find release with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found release', objRelease);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

releasesCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objRelease = await releaseService.findOneByDateEntered(dateEntered, req.query);
        if (!objRelease) {
            util.setError(404, `Cannot find release with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found release', objRelease);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

releasesCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objRelease = await releaseService.findOneByDateModified(dateModified, req.query);
        if (!objRelease) {
            util.setError(404, `Cannot find release with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found release', objRelease);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

releasesCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objRelease = await releaseService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objRelease) {
            util.setError(404, `Cannot find release with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found release', objRelease);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

releasesCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objRelease = await releaseService.findOneByCreatedBy(createdBy, req.query);
        if (!objRelease) {
            util.setError(404, `Cannot find release with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found release', objRelease);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



releasesCtrl.updateReleaseById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objRelease = await releaseService.updateReleaseById(id, req.body);
            if (!objRelease) {
                util.setError(404, `Cannot find release with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Release updated', objRelease);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

releasesCtrl.updateReleaseByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objRelease = await releaseService.updateReleaseByDeleted(deleted, req.body);
            if (!objRelease) {
                util.setError(404, `Cannot find release with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Release updated', objRelease);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

releasesCtrl.updateReleaseByListOrder = async (req, res) => {
     const { listOrder } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objRelease = await releaseService.updateReleaseByListOrder(listOrder, req.body);
            if (!objRelease) {
                util.setError(404, `Cannot find release with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Release updated', objRelease);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

releasesCtrl.updateReleaseByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objRelease = await releaseService.updateReleaseByName(name, req.body);
            if (!objRelease) {
                util.setError(404, `Cannot find release with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Release updated', objRelease);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

releasesCtrl.updateReleaseByStatus = async (req, res) => {
     const { status } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objRelease = await releaseService.updateReleaseByStatus(status, req.body);
            if (!objRelease) {
                util.setError(404, `Cannot find release with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Release updated', objRelease);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

releasesCtrl.updateReleaseByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objRelease = await releaseService.updateReleaseByDateEntered(dateEntered, req.body);
            if (!objRelease) {
                util.setError(404, `Cannot find release with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Release updated', objRelease);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

releasesCtrl.updateReleaseByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objRelease = await releaseService.updateReleaseByDateModified(dateModified, req.body);
            if (!objRelease) {
                util.setError(404, `Cannot find release with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Release updated', objRelease);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

releasesCtrl.updateReleaseByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objRelease = await releaseService.updateReleaseByModifiedUserId(modifiedUserId, req.body);
            if (!objRelease) {
                util.setError(404, `Cannot find release with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Release updated', objRelease);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

releasesCtrl.updateReleaseByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objRelease = await releaseService.updateReleaseByCreatedBy(createdBy, req.body);
            if (!objRelease) {
                util.setError(404, `Cannot find release with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Release updated', objRelease);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = releasesCtrl;
//</es-section>
