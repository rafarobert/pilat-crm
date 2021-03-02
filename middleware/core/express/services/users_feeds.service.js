/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:40 GMT-0400 (Bolivia Time)
 * Time: 14:1:40
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:40 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:40
 *
 * Caution: es-sections will be replaced by script execution
 */

require('../../../utils/Prototipes');
const helpers = require('../../../utils/helpers');
const bcrypt = require("bcrypt");
const models = require('../index');
const Util = require('../../../utils/Utils');
const util = new Util();

import configJson from '../../../config/config';
const sql = configJson.sql;

const { Op } = require("sequelize");

//<es-section>

//</es-section>

class UserFeedService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objUserFeed;
    		if(sql) {
    			objUserFeed = await models.sequelize.usersFeeds.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objUserFeed = await models.mongoose.usersFeeds.findOne({deleted: deleted});
    		}
    		return objUserFeed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRank(rank, query = {}) {
    	try {
    		let objUserFeed;
    		if(sql) {
    			objUserFeed = await models.sequelize.usersFeeds.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { rank: rank },
    			});
    		} else {
    			objUserFeed = await models.mongoose.usersFeeds.findOne({rank: rank});
    		}
    		return objUserFeed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUserId(userId, query = {}) {
    	try {
    		let objUserFeed;
    		if(sql) {
    			objUserFeed = await models.sequelize.usersFeeds.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { user_id: userId },
    			});
    		} else {
    			objUserFeed = await models.mongoose.usersFeeds.findOne({user_id: userId});
    		}
    		return objUserFeed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFeedId(feedId, query = {}) {
    	try {
    		let objUserFeed;
    		if(sql) {
    			objUserFeed = await models.sequelize.usersFeeds.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { feed_id: feedId },
    			});
    		} else {
    			objUserFeed = await models.mongoose.usersFeeds.findOne({feed_id: feedId});
    		}
    		return objUserFeed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objUserFeed;
    		if(sql) {
    			objUserFeed = await models.sequelize.usersFeeds.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objUserFeed = await models.mongoose.usersFeeds.findOne({date_modified: dateModified});
    		}
    		return objUserFeed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateUserFeedByDeleted(deleted, updateUserFeed) {
    	try {
    		let objUserFeed;
    		if(sql) {
    			objUserFeed = await models.sequelize.usersFeeds.findOne({where: { deleted: deleted }});
    			if (objUserFeed) {
    				objUserFeed = await models.sequelize.usersFeeds.update(updateUserFeed, { where: { deleted: deleted } });
    			}
    		} else {
    			objUserFeed = await models.mongoose.usersFeeds.findOneAndUpdate({deleted: deleted}, {$set: updateUserFeed}, {new: true});
    		}
    		return objUserFeed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserFeedByRank(rank, updateUserFeed) {
    	try {
    		let objUserFeed;
    		if(sql) {
    			objUserFeed = await models.sequelize.usersFeeds.findOne({where: { rank: rank }});
    			if (objUserFeed) {
    				objUserFeed = await models.sequelize.usersFeeds.update(updateUserFeed, { where: { rank: rank } });
    			}
    		} else {
    			objUserFeed = await models.mongoose.usersFeeds.findOneAndUpdate({rank: rank}, {$set: updateUserFeed}, {new: true});
    		}
    		return objUserFeed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserFeedByUserId(userId, updateUserFeed) {
    	try {
    		let objUserFeed;
    		if(sql) {
    			objUserFeed = await models.sequelize.usersFeeds.findOne({where: { user_id: userId }});
    			if (objUserFeed) {
    				objUserFeed = await models.sequelize.usersFeeds.update(updateUserFeed, { where: { user_id: userId } });
    			}
    		} else {
    			objUserFeed = await models.mongoose.usersFeeds.findOneAndUpdate({user_id: userId}, {$set: updateUserFeed}, {new: true});
    		}
    		return objUserFeed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserFeedByFeedId(feedId, updateUserFeed) {
    	try {
    		let objUserFeed;
    		if(sql) {
    			objUserFeed = await models.sequelize.usersFeeds.findOne({where: { feed_id: feedId }});
    			if (objUserFeed) {
    				objUserFeed = await models.sequelize.usersFeeds.update(updateUserFeed, { where: { feed_id: feedId } });
    			}
    		} else {
    			objUserFeed = await models.mongoose.usersFeeds.findOneAndUpdate({feed_id: feedId}, {$set: updateUserFeed}, {new: true});
    		}
    		return objUserFeed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserFeedByDateModified(dateModified, updateUserFeed) {
    	try {
    		let objUserFeed;
    		if(sql) {
    			objUserFeed = await models.sequelize.usersFeeds.findOne({where: { date_modified: dateModified }});
    			if (objUserFeed) {
    				objUserFeed = await models.sequelize.usersFeeds.update(updateUserFeed, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objUserFeed = await models.mongoose.usersFeeds.findOneAndUpdate({date_modified: dateModified}, {$set: updateUserFeed}, {new: true});
    		}
    		return objUserFeed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = UserFeedService;
//</es-section>
