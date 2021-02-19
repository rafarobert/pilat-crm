/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:36:39 GMT-0400 (Bolivia Time)
 * Time: 18:36:39
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:36:39 GMT-0400 (Bolivia Time)
 * Last time updated: 18:36:39
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

class CampaignLogService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllCampaignLog(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.campaignLog.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.campaignLog.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllCampaignLog(select = []) {
		try {
			if(sql) {
				return await models.sequelize.campaignLog.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.campaignLog.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addCampaignLog(newCampaignLog) {
		try {
			let objCampaignLog;
			if(util.PrimaryKeyTypeIsString(models.sequelize.campaignLog.primaryKeys.id.type.toString())) {
			    newCampaignLog.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objCampaignLog = await models.sequelize.campaignLog.create(newCampaignLog);
			} else {
				objCampaignLog = new models.mongoose.campaignLog(newCampaignLog);
				await objCampaignLog.save();
			}
			return objCampaignLog;
		} catch (error) {
			throw error;
		}
	}

	static async updateCampaignLog(id, updateCampaignLog) {
		try {
			let objCampaignLog;
			if(sql) {
				objCampaignLog = await models.sequelize.campaignLog.findOne({where: { id: util.Char(id) }});
				if (objCampaignLog) {
					await models.sequelize.campaignLog.update(updateCampaignLog, { where: { id: util.Char(id) } });
					objCampaignLog = await models.sequelize.campaignLog.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateCampaignLog._id;
				objCampaignLog = await models.mongoose.campaignLog.findOneAndUpdate({id:id}, {$set: updateCampaignLog}, {new: true});
			}
			return objCampaignLog;
		} catch (error) {
			throw error;
		}
	}

	static async getACampaignLog(id, query) {
		try {
			let objCampaignLog;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objCampaignLog = await models.sequelize.campaignLog.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objCampaignLog = await models.mongoose.campaignLog.find({id:util.Char(id)}).select(query.select);
			}
			return objCampaignLog;
		} catch (error) {
			throw error;
		}
	}

	static async deleteCampaignLog(id) {
		try {
			let objCampaignLog;
			if(sql) {
				objCampaignLog = await models.sequelize.campaignLog.findOne({ where: { id: util.Char(id) } });
				if (objCampaignLog) {
					await models.sequelize.campaignLog.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objCampaignLog = await models.mongoose.campaignLog.deleteOne({id:util.Char(id)});
			}
			return objCampaignLog;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objCampaignLog;
    		if(sql) {
    			objCampaignLog = await models.sequelize.campaignLog.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objCampaignLog = await models.mongoose.campaignLog.findOne({id: id});
    		}
    		return objCampaignLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByArchived(archived, query = {}) {
    	try {
    		let objCampaignLog;
    		if(sql) {
    			objCampaignLog = await models.sequelize.campaignLog.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { archived: archived },
    			});
    		} else {
    			objCampaignLog = await models.mongoose.campaignLog.findOne({archived: archived});
    		}
    		return objCampaignLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objCampaignLog;
    		if(sql) {
    			objCampaignLog = await models.sequelize.campaignLog.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objCampaignLog = await models.mongoose.campaignLog.findOne({deleted: deleted});
    		}
    		return objCampaignLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByHits(hits, query = {}) {
    	try {
    		let objCampaignLog;
    		if(sql) {
    			objCampaignLog = await models.sequelize.campaignLog.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { hits: hits },
    			});
    		} else {
    			objCampaignLog = await models.mongoose.campaignLog.findOne({hits: hits});
    		}
    		return objCampaignLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTargetTrackerKey(targetTrackerKey, query = {}) {
    	try {
    		let objCampaignLog;
    		if(sql) {
    			objCampaignLog = await models.sequelize.campaignLog.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { target_tracker_key: targetTrackerKey },
    			});
    		} else {
    			objCampaignLog = await models.mongoose.campaignLog.findOne({target_tracker_key: targetTrackerKey});
    		}
    		return objCampaignLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTargetId(targetId, query = {}) {
    	try {
    		let objCampaignLog;
    		if(sql) {
    			objCampaignLog = await models.sequelize.campaignLog.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { target_id: targetId },
    			});
    		} else {
    			objCampaignLog = await models.mongoose.campaignLog.findOne({target_id: targetId});
    		}
    		return objCampaignLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTargetType(targetType, query = {}) {
    	try {
    		let objCampaignLog;
    		if(sql) {
    			objCampaignLog = await models.sequelize.campaignLog.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { target_type: targetType },
    			});
    		} else {
    			objCampaignLog = await models.mongoose.campaignLog.findOne({target_type: targetType});
    		}
    		return objCampaignLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByActivityType(activityType, query = {}) {
    	try {
    		let objCampaignLog;
    		if(sql) {
    			objCampaignLog = await models.sequelize.campaignLog.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { activity_type: activityType },
    			});
    		} else {
    			objCampaignLog = await models.mongoose.campaignLog.findOne({activity_type: activityType});
    		}
    		return objCampaignLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRelatedId(relatedId, query = {}) {
    	try {
    		let objCampaignLog;
    		if(sql) {
    			objCampaignLog = await models.sequelize.campaignLog.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { related_id: relatedId },
    			});
    		} else {
    			objCampaignLog = await models.mongoose.campaignLog.findOne({related_id: relatedId});
    		}
    		return objCampaignLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRelatedType(relatedType, query = {}) {
    	try {
    		let objCampaignLog;
    		if(sql) {
    			objCampaignLog = await models.sequelize.campaignLog.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { related_type: relatedType },
    			});
    		} else {
    			objCampaignLog = await models.mongoose.campaignLog.findOne({related_type: relatedType});
    		}
    		return objCampaignLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMoreInformation(moreInformation, query = {}) {
    	try {
    		let objCampaignLog;
    		if(sql) {
    			objCampaignLog = await models.sequelize.campaignLog.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { more_information: moreInformation },
    			});
    		} else {
    			objCampaignLog = await models.mongoose.campaignLog.findOne({more_information: moreInformation});
    		}
    		return objCampaignLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByActivityDate(activityDate, query = {}) {
    	try {
    		let objCampaignLog;
    		if(sql) {
    			objCampaignLog = await models.sequelize.campaignLog.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { activity_date: activityDate },
    			});
    		} else {
    			objCampaignLog = await models.mongoose.campaignLog.findOne({activity_date: activityDate});
    		}
    		return objCampaignLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objCampaignLog;
    		if(sql) {
    			objCampaignLog = await models.sequelize.campaignLog.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objCampaignLog = await models.mongoose.campaignLog.findOne({date_modified: dateModified});
    		}
    		return objCampaignLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCampaignId(campaignId, query = {}) {
    	try {
    		let objCampaignLog;
    		if(sql) {
    			objCampaignLog = await models.sequelize.campaignLog.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { campaign_id: campaignId },
    			});
    		} else {
    			objCampaignLog = await models.mongoose.campaignLog.findOne({campaign_id: campaignId});
    		}
    		return objCampaignLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByListId(listId, query = {}) {
    	try {
    		let objCampaignLog;
    		if(sql) {
    			objCampaignLog = await models.sequelize.campaignLog.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { list_id: listId },
    			});
    		} else {
    			objCampaignLog = await models.mongoose.campaignLog.findOne({list_id: listId});
    		}
    		return objCampaignLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMarketingId(marketingId, query = {}) {
    	try {
    		let objCampaignLog;
    		if(sql) {
    			objCampaignLog = await models.sequelize.campaignLog.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { marketing_id: marketingId },
    			});
    		} else {
    			objCampaignLog = await models.mongoose.campaignLog.findOne({marketing_id: marketingId});
    		}
    		return objCampaignLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateCampaignLogById(id, updateCampaignLog) {
    	try {
    		let objCampaignLog;
    		if(sql) {
    			objCampaignLog = await models.sequelize.campaignLog.findOne({where: { id: id }});
    			if (objCampaignLog) {
    				objCampaignLog = await models.sequelize.campaignLog.update(updateCampaignLog, { where: { id: id } });
    			}
    		} else {
    			objCampaignLog = await models.mongoose.campaignLog.findOneAndUpdate({id: id}, {$set: updateCampaignLog}, {new: true});
    		}
    		return objCampaignLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignLogByArchived(archived, updateCampaignLog) {
    	try {
    		let objCampaignLog;
    		if(sql) {
    			objCampaignLog = await models.sequelize.campaignLog.findOne({where: { archived: archived }});
    			if (objCampaignLog) {
    				objCampaignLog = await models.sequelize.campaignLog.update(updateCampaignLog, { where: { archived: archived } });
    			}
    		} else {
    			objCampaignLog = await models.mongoose.campaignLog.findOneAndUpdate({archived: archived}, {$set: updateCampaignLog}, {new: true});
    		}
    		return objCampaignLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignLogByDeleted(deleted, updateCampaignLog) {
    	try {
    		let objCampaignLog;
    		if(sql) {
    			objCampaignLog = await models.sequelize.campaignLog.findOne({where: { deleted: deleted }});
    			if (objCampaignLog) {
    				objCampaignLog = await models.sequelize.campaignLog.update(updateCampaignLog, { where: { deleted: deleted } });
    			}
    		} else {
    			objCampaignLog = await models.mongoose.campaignLog.findOneAndUpdate({deleted: deleted}, {$set: updateCampaignLog}, {new: true});
    		}
    		return objCampaignLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignLogByHits(hits, updateCampaignLog) {
    	try {
    		let objCampaignLog;
    		if(sql) {
    			objCampaignLog = await models.sequelize.campaignLog.findOne({where: { hits: hits }});
    			if (objCampaignLog) {
    				objCampaignLog = await models.sequelize.campaignLog.update(updateCampaignLog, { where: { hits: hits } });
    			}
    		} else {
    			objCampaignLog = await models.mongoose.campaignLog.findOneAndUpdate({hits: hits}, {$set: updateCampaignLog}, {new: true});
    		}
    		return objCampaignLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignLogByTargetTrackerKey(targetTrackerKey, updateCampaignLog) {
    	try {
    		let objCampaignLog;
    		if(sql) {
    			objCampaignLog = await models.sequelize.campaignLog.findOne({where: { target_tracker_key: targetTrackerKey }});
    			if (objCampaignLog) {
    				objCampaignLog = await models.sequelize.campaignLog.update(updateCampaignLog, { where: { target_tracker_key: targetTrackerKey } });
    			}
    		} else {
    			objCampaignLog = await models.mongoose.campaignLog.findOneAndUpdate({target_tracker_key: targetTrackerKey}, {$set: updateCampaignLog}, {new: true});
    		}
    		return objCampaignLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignLogByTargetId(targetId, updateCampaignLog) {
    	try {
    		let objCampaignLog;
    		if(sql) {
    			objCampaignLog = await models.sequelize.campaignLog.findOne({where: { target_id: targetId }});
    			if (objCampaignLog) {
    				objCampaignLog = await models.sequelize.campaignLog.update(updateCampaignLog, { where: { target_id: targetId } });
    			}
    		} else {
    			objCampaignLog = await models.mongoose.campaignLog.findOneAndUpdate({target_id: targetId}, {$set: updateCampaignLog}, {new: true});
    		}
    		return objCampaignLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignLogByTargetType(targetType, updateCampaignLog) {
    	try {
    		let objCampaignLog;
    		if(sql) {
    			objCampaignLog = await models.sequelize.campaignLog.findOne({where: { target_type: targetType }});
    			if (objCampaignLog) {
    				objCampaignLog = await models.sequelize.campaignLog.update(updateCampaignLog, { where: { target_type: targetType } });
    			}
    		} else {
    			objCampaignLog = await models.mongoose.campaignLog.findOneAndUpdate({target_type: targetType}, {$set: updateCampaignLog}, {new: true});
    		}
    		return objCampaignLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignLogByActivityType(activityType, updateCampaignLog) {
    	try {
    		let objCampaignLog;
    		if(sql) {
    			objCampaignLog = await models.sequelize.campaignLog.findOne({where: { activity_type: activityType }});
    			if (objCampaignLog) {
    				objCampaignLog = await models.sequelize.campaignLog.update(updateCampaignLog, { where: { activity_type: activityType } });
    			}
    		} else {
    			objCampaignLog = await models.mongoose.campaignLog.findOneAndUpdate({activity_type: activityType}, {$set: updateCampaignLog}, {new: true});
    		}
    		return objCampaignLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignLogByRelatedId(relatedId, updateCampaignLog) {
    	try {
    		let objCampaignLog;
    		if(sql) {
    			objCampaignLog = await models.sequelize.campaignLog.findOne({where: { related_id: relatedId }});
    			if (objCampaignLog) {
    				objCampaignLog = await models.sequelize.campaignLog.update(updateCampaignLog, { where: { related_id: relatedId } });
    			}
    		} else {
    			objCampaignLog = await models.mongoose.campaignLog.findOneAndUpdate({related_id: relatedId}, {$set: updateCampaignLog}, {new: true});
    		}
    		return objCampaignLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignLogByRelatedType(relatedType, updateCampaignLog) {
    	try {
    		let objCampaignLog;
    		if(sql) {
    			objCampaignLog = await models.sequelize.campaignLog.findOne({where: { related_type: relatedType }});
    			if (objCampaignLog) {
    				objCampaignLog = await models.sequelize.campaignLog.update(updateCampaignLog, { where: { related_type: relatedType } });
    			}
    		} else {
    			objCampaignLog = await models.mongoose.campaignLog.findOneAndUpdate({related_type: relatedType}, {$set: updateCampaignLog}, {new: true});
    		}
    		return objCampaignLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignLogByMoreInformation(moreInformation, updateCampaignLog) {
    	try {
    		let objCampaignLog;
    		if(sql) {
    			objCampaignLog = await models.sequelize.campaignLog.findOne({where: { more_information: moreInformation }});
    			if (objCampaignLog) {
    				objCampaignLog = await models.sequelize.campaignLog.update(updateCampaignLog, { where: { more_information: moreInformation } });
    			}
    		} else {
    			objCampaignLog = await models.mongoose.campaignLog.findOneAndUpdate({more_information: moreInformation}, {$set: updateCampaignLog}, {new: true});
    		}
    		return objCampaignLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignLogByActivityDate(activityDate, updateCampaignLog) {
    	try {
    		let objCampaignLog;
    		if(sql) {
    			objCampaignLog = await models.sequelize.campaignLog.findOne({where: { activity_date: activityDate }});
    			if (objCampaignLog) {
    				objCampaignLog = await models.sequelize.campaignLog.update(updateCampaignLog, { where: { activity_date: activityDate } });
    			}
    		} else {
    			objCampaignLog = await models.mongoose.campaignLog.findOneAndUpdate({activity_date: activityDate}, {$set: updateCampaignLog}, {new: true});
    		}
    		return objCampaignLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignLogByDateModified(dateModified, updateCampaignLog) {
    	try {
    		let objCampaignLog;
    		if(sql) {
    			objCampaignLog = await models.sequelize.campaignLog.findOne({where: { date_modified: dateModified }});
    			if (objCampaignLog) {
    				objCampaignLog = await models.sequelize.campaignLog.update(updateCampaignLog, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objCampaignLog = await models.mongoose.campaignLog.findOneAndUpdate({date_modified: dateModified}, {$set: updateCampaignLog}, {new: true});
    		}
    		return objCampaignLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignLogByCampaignId(campaignId, updateCampaignLog) {
    	try {
    		let objCampaignLog;
    		if(sql) {
    			objCampaignLog = await models.sequelize.campaignLog.findOne({where: { campaign_id: campaignId }});
    			if (objCampaignLog) {
    				objCampaignLog = await models.sequelize.campaignLog.update(updateCampaignLog, { where: { campaign_id: campaignId } });
    			}
    		} else {
    			objCampaignLog = await models.mongoose.campaignLog.findOneAndUpdate({campaign_id: campaignId}, {$set: updateCampaignLog}, {new: true});
    		}
    		return objCampaignLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignLogByListId(listId, updateCampaignLog) {
    	try {
    		let objCampaignLog;
    		if(sql) {
    			objCampaignLog = await models.sequelize.campaignLog.findOne({where: { list_id: listId }});
    			if (objCampaignLog) {
    				objCampaignLog = await models.sequelize.campaignLog.update(updateCampaignLog, { where: { list_id: listId } });
    			}
    		} else {
    			objCampaignLog = await models.mongoose.campaignLog.findOneAndUpdate({list_id: listId}, {$set: updateCampaignLog}, {new: true});
    		}
    		return objCampaignLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignLogByMarketingId(marketingId, updateCampaignLog) {
    	try {
    		let objCampaignLog;
    		if(sql) {
    			objCampaignLog = await models.sequelize.campaignLog.findOne({where: { marketing_id: marketingId }});
    			if (objCampaignLog) {
    				objCampaignLog = await models.sequelize.campaignLog.update(updateCampaignLog, { where: { marketing_id: marketingId } });
    			}
    		} else {
    			objCampaignLog = await models.mongoose.campaignLog.findOneAndUpdate({marketing_id: marketingId}, {$set: updateCampaignLog}, {new: true});
    		}
    		return objCampaignLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = CampaignLogService;
//</es-section>
