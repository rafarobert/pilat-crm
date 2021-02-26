/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:58 GMT-0400 (Bolivia Time)
 * Time: 0:23:58
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:58 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:58
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const userFeedService = require('../services/users_feeds.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const usersFeedsCtrl = {};
usersFeedsCtrl.service = userFeedService;




usersFeedsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objUserFeed = await userFeedService.findOneByDeleted(deleted, req.query);
        if (!objUserFeed) {
            util.setError(404, `Cannot find userFeed with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found userFeed', objUserFeed);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersFeedsCtrl.findOneByRank = async (req, res) => {
    try {
        const { rank } = req.params;
        const objUserFeed = await userFeedService.findOneByRank(rank, req.query);
        if (!objUserFeed) {
            util.setError(404, `Cannot find userFeed with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found userFeed', objUserFeed);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersFeedsCtrl.findOneByUserId = async (req, res) => {
    try {
        const { userId } = req.params;
        const objUserFeed = await userFeedService.findOneByUserId(userId, req.query);
        if (!objUserFeed) {
            util.setError(404, `Cannot find userFeed with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found userFeed', objUserFeed);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersFeedsCtrl.findOneByFeedId = async (req, res) => {
    try {
        const { feedId } = req.params;
        const objUserFeed = await userFeedService.findOneByFeedId(feedId, req.query);
        if (!objUserFeed) {
            util.setError(404, `Cannot find userFeed with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found userFeed', objUserFeed);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersFeedsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objUserFeed = await userFeedService.findOneByDateModified(dateModified, req.query);
        if (!objUserFeed) {
            util.setError(404, `Cannot find userFeed with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found userFeed', objUserFeed);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}









//</es-section>

//<es-section>
module.exports = usersFeedsCtrl;
//</es-section>
