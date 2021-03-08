/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:46 GMT-0400 (Bolivia Time)
 * Time: 15:35:46
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:46 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:46
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const campaignTrkrService = require('../services/campaign_trkrs.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const campaignTrkrsCtrl = {};
campaignTrkrsCtrl.service = campaignTrkrService;


campaignTrkrsCtrl.getAllCampaignTrkrs = async (req, res) => {
    try {
        const objCampaignTrkrs = await campaignTrkrService.getAllCampaignTrkrs(req.query);
        if (objCampaignTrkrs.length > 0) {
            util.setSuccess(200, 'CampaignTrkrs retrieved', objCampaignTrkrs);
        } else {
            util.setSuccess(200, 'No campaignTrkr found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignTrkrsCtrl.getACampaignTrkr = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objCampaignTrkr = await campaignTrkrService.getACampaignTrkr(id, req.query);
        if (!objCampaignTrkr) {
            util.setError(404, `Cannot find campaignTrkr with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found campaignTrkr', objCampaignTrkr);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignTrkrsCtrl.addCampaignTrkr = async (req, res) => {
    try {
        const objCampaignTrkr = await campaignTrkrService.addCampaignTrkr(req.body);
        util.setSuccess(201, 'CampaignTrkr Added!', objCampaignTrkr);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignTrkrsCtrl.updateCampaignTrkr = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objCampaignTrkr = await campaignTrkrService.updateCampaignTrkr(id, req.body);
        if (!objCampaignTrkr) {
            util.setError(404, `Cannot find campaignTrkr with the id: ${id}`);
        } else {
            util.setSuccess(200, 'CampaignTrkr updated', objCampaignTrkr);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

campaignTrkrsCtrl.deleteCampaignTrkr = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objCampaignTrkr = await campaignTrkrService.deleteCampaignTrkr(id);
        if (objCampaignTrkr) {
            util.setSuccess(200, 'CampaignTrkr deleted', objCampaignTrkr);
        } else {
            util.setError(404, `CampaignTrkr with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



campaignTrkrsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objCampaignTrkr = await campaignTrkrService.findOneById(id, req.query);
        if (!objCampaignTrkr) {
            util.setError(404, `Cannot find campaignTrkr with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaignTrkr', objCampaignTrkr);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignTrkrsCtrl.findOneByIsOptout = async (req, res) => {
    try {
        const { isOptout } = req.params;
        const objCampaignTrkr = await campaignTrkrService.findOneByIsOptout(isOptout, req.query);
        if (!objCampaignTrkr) {
            util.setError(404, `Cannot find campaignTrkr with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaignTrkr', objCampaignTrkr);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignTrkrsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objCampaignTrkr = await campaignTrkrService.findOneByDeleted(deleted, req.query);
        if (!objCampaignTrkr) {
            util.setError(404, `Cannot find campaignTrkr with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaignTrkr', objCampaignTrkr);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignTrkrsCtrl.findOneByTrackerKey = async (req, res) => {
    try {
        const { trackerKey } = req.params;
        const objCampaignTrkr = await campaignTrkrService.findOneByTrackerKey(trackerKey, req.query);
        if (!objCampaignTrkr) {
            util.setError(404, `Cannot find campaignTrkr with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaignTrkr', objCampaignTrkr);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignTrkrsCtrl.findOneByTrackerName = async (req, res) => {
    try {
        const { trackerName } = req.params;
        const objCampaignTrkr = await campaignTrkrService.findOneByTrackerName(trackerName, req.query);
        if (!objCampaignTrkr) {
            util.setError(404, `Cannot find campaignTrkr with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaignTrkr', objCampaignTrkr);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignTrkrsCtrl.findOneByTrackerUrl = async (req, res) => {
    try {
        const { trackerUrl } = req.params;
        const objCampaignTrkr = await campaignTrkrService.findOneByTrackerUrl(trackerUrl, req.query);
        if (!objCampaignTrkr) {
            util.setError(404, `Cannot find campaignTrkr with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaignTrkr', objCampaignTrkr);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignTrkrsCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objCampaignTrkr = await campaignTrkrService.findOneByDateEntered(dateEntered, req.query);
        if (!objCampaignTrkr) {
            util.setError(404, `Cannot find campaignTrkr with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaignTrkr', objCampaignTrkr);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignTrkrsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objCampaignTrkr = await campaignTrkrService.findOneByDateModified(dateModified, req.query);
        if (!objCampaignTrkr) {
            util.setError(404, `Cannot find campaignTrkr with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaignTrkr', objCampaignTrkr);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignTrkrsCtrl.findOneByCampaignId = async (req, res) => {
    try {
        const { campaignId } = req.params;
        const objCampaignTrkr = await campaignTrkrService.findOneByCampaignId(campaignId, req.query);
        if (!objCampaignTrkr) {
            util.setError(404, `Cannot find campaignTrkr with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaignTrkr', objCampaignTrkr);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignTrkrsCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objCampaignTrkr = await campaignTrkrService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objCampaignTrkr) {
            util.setError(404, `Cannot find campaignTrkr with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaignTrkr', objCampaignTrkr);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

campaignTrkrsCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objCampaignTrkr = await campaignTrkrService.findOneByCreatedBy(createdBy, req.query);
        if (!objCampaignTrkr) {
            util.setError(404, `Cannot find campaignTrkr with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found campaignTrkr', objCampaignTrkr);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



campaignTrkrsCtrl.updateCampaignTrkrById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaignTrkr = await campaignTrkrService.updateCampaignTrkrById(id, req.body);
            if (!objCampaignTrkr) {
                util.setError(404, `Cannot find campaignTrkr with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CampaignTrkr updated', objCampaignTrkr);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignTrkrsCtrl.updateCampaignTrkrByIsOptout = async (req, res) => {
     const { isOptout } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaignTrkr = await campaignTrkrService.updateCampaignTrkrByIsOptout(isOptout, req.body);
            if (!objCampaignTrkr) {
                util.setError(404, `Cannot find campaignTrkr with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CampaignTrkr updated', objCampaignTrkr);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignTrkrsCtrl.updateCampaignTrkrByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaignTrkr = await campaignTrkrService.updateCampaignTrkrByDeleted(deleted, req.body);
            if (!objCampaignTrkr) {
                util.setError(404, `Cannot find campaignTrkr with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CampaignTrkr updated', objCampaignTrkr);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignTrkrsCtrl.updateCampaignTrkrByTrackerKey = async (req, res) => {
     const { trackerKey } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaignTrkr = await campaignTrkrService.updateCampaignTrkrByTrackerKey(trackerKey, req.body);
            if (!objCampaignTrkr) {
                util.setError(404, `Cannot find campaignTrkr with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CampaignTrkr updated', objCampaignTrkr);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignTrkrsCtrl.updateCampaignTrkrByTrackerName = async (req, res) => {
     const { trackerName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaignTrkr = await campaignTrkrService.updateCampaignTrkrByTrackerName(trackerName, req.body);
            if (!objCampaignTrkr) {
                util.setError(404, `Cannot find campaignTrkr with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CampaignTrkr updated', objCampaignTrkr);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignTrkrsCtrl.updateCampaignTrkrByTrackerUrl = async (req, res) => {
     const { trackerUrl } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaignTrkr = await campaignTrkrService.updateCampaignTrkrByTrackerUrl(trackerUrl, req.body);
            if (!objCampaignTrkr) {
                util.setError(404, `Cannot find campaignTrkr with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CampaignTrkr updated', objCampaignTrkr);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignTrkrsCtrl.updateCampaignTrkrByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaignTrkr = await campaignTrkrService.updateCampaignTrkrByDateEntered(dateEntered, req.body);
            if (!objCampaignTrkr) {
                util.setError(404, `Cannot find campaignTrkr with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CampaignTrkr updated', objCampaignTrkr);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignTrkrsCtrl.updateCampaignTrkrByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaignTrkr = await campaignTrkrService.updateCampaignTrkrByDateModified(dateModified, req.body);
            if (!objCampaignTrkr) {
                util.setError(404, `Cannot find campaignTrkr with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CampaignTrkr updated', objCampaignTrkr);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignTrkrsCtrl.updateCampaignTrkrByCampaignId = async (req, res) => {
     const { campaignId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaignTrkr = await campaignTrkrService.updateCampaignTrkrByCampaignId(campaignId, req.body);
            if (!objCampaignTrkr) {
                util.setError(404, `Cannot find campaignTrkr with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CampaignTrkr updated', objCampaignTrkr);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignTrkrsCtrl.updateCampaignTrkrByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaignTrkr = await campaignTrkrService.updateCampaignTrkrByModifiedUserId(modifiedUserId, req.body);
            if (!objCampaignTrkr) {
                util.setError(404, `Cannot find campaignTrkr with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CampaignTrkr updated', objCampaignTrkr);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

campaignTrkrsCtrl.updateCampaignTrkrByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCampaignTrkr = await campaignTrkrService.updateCampaignTrkrByCreatedBy(createdBy, req.body);
            if (!objCampaignTrkr) {
                util.setError(404, `Cannot find campaignTrkr with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CampaignTrkr updated', objCampaignTrkr);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = campaignTrkrsCtrl;
//</es-section>
