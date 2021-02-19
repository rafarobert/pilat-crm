/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:42:41 GMT-0400 (Bolivia Time)
 * Time: 4:42:41
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:42:41 GMT-0400 (Bolivia Time)
 * Last time updated: 4:42:41
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

class CampaignTrkrService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllCampaignTrkrs(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.campaignTrkrs.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.campaignTrkrs.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllCampaignTrkrs(select = []) {
		try {
			if(sql) {
				return await models.sequelize.campaignTrkrs.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.campaignTrkrs.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addCampaignTrkr(newCampaignTrkr) {
		try {
			let objCampaignTrkr;
			if(util.PrimaryKeyTypeIsString(models.sequelize.campaignTrkrs.primaryKeys.id.type.toString())) {
			    newCampaignTrkr.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objCampaignTrkr = await models.sequelize.campaignTrkrs.create(newCampaignTrkr);
			} else {
				objCampaignTrkr = new models.mongoose.campaignTrkrs(newCampaignTrkr);
				await objCampaignTrkr.save();
			}
			return objCampaignTrkr;
		} catch (error) {
			throw error;
		}
	}

	static async updateCampaignTrkr(id, updateCampaignTrkr) {
		try {
			let objCampaignTrkr;
			if(sql) {
				objCampaignTrkr = await models.sequelize.campaignTrkrs.findOne({where: { id: util.Char(id) }});
				if (objCampaignTrkr) {
					await models.sequelize.campaignTrkrs.update(updateCampaignTrkr, { where: { id: util.Char(id) } });
					objCampaignTrkr = await models.sequelize.campaignTrkrs.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateCampaignTrkr._id;
				objCampaignTrkr = await models.mongoose.campaignTrkrs.findOneAndUpdate({id:id}, {$set: updateCampaignTrkr}, {new: true});
			}
			return objCampaignTrkr;
		} catch (error) {
			throw error;
		}
	}

	static async getACampaignTrkr(id, query) {
		try {
			let objCampaignTrkr;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objCampaignTrkr = await models.sequelize.campaignTrkrs.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objCampaignTrkr = await models.mongoose.campaignTrkrs.find({id:util.Char(id)}).select(query.select);
			}
			return objCampaignTrkr;
		} catch (error) {
			throw error;
		}
	}

	static async deleteCampaignTrkr(id) {
		try {
			let objCampaignTrkr;
			if(sql) {
				objCampaignTrkr = await models.sequelize.campaignTrkrs.findOne({ where: { id: util.Char(id) } });
				if (objCampaignTrkr) {
					await models.sequelize.campaignTrkrs.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objCampaignTrkr = await models.mongoose.campaignTrkrs.deleteOne({id:util.Char(id)});
			}
			return objCampaignTrkr;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objCampaignTrkr;
    		if(sql) {
    			objCampaignTrkr = await models.sequelize.campaignTrkrs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objCampaignTrkr = await models.mongoose.campaignTrkrs.findOne({id: id});
    		}
    		return objCampaignTrkr;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByIsOptout(isOptout, query = {}) {
    	try {
    		let objCampaignTrkr;
    		if(sql) {
    			objCampaignTrkr = await models.sequelize.campaignTrkrs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { is_optout: isOptout },
    			});
    		} else {
    			objCampaignTrkr = await models.mongoose.campaignTrkrs.findOne({is_optout: isOptout});
    		}
    		return objCampaignTrkr;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objCampaignTrkr;
    		if(sql) {
    			objCampaignTrkr = await models.sequelize.campaignTrkrs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objCampaignTrkr = await models.mongoose.campaignTrkrs.findOne({deleted: deleted});
    		}
    		return objCampaignTrkr;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTrackerKey(trackerKey, query = {}) {
    	try {
    		let objCampaignTrkr;
    		if(sql) {
    			objCampaignTrkr = await models.sequelize.campaignTrkrs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { tracker_key: trackerKey },
    			});
    		} else {
    			objCampaignTrkr = await models.mongoose.campaignTrkrs.findOne({tracker_key: trackerKey});
    		}
    		return objCampaignTrkr;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTrackerName(trackerName, query = {}) {
    	try {
    		let objCampaignTrkr;
    		if(sql) {
    			objCampaignTrkr = await models.sequelize.campaignTrkrs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { tracker_name: trackerName },
    			});
    		} else {
    			objCampaignTrkr = await models.mongoose.campaignTrkrs.findOne({tracker_name: trackerName});
    		}
    		return objCampaignTrkr;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTrackerUrl(trackerUrl, query = {}) {
    	try {
    		let objCampaignTrkr;
    		if(sql) {
    			objCampaignTrkr = await models.sequelize.campaignTrkrs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { tracker_url: trackerUrl },
    			});
    		} else {
    			objCampaignTrkr = await models.mongoose.campaignTrkrs.findOne({tracker_url: trackerUrl});
    		}
    		return objCampaignTrkr;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objCampaignTrkr;
    		if(sql) {
    			objCampaignTrkr = await models.sequelize.campaignTrkrs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objCampaignTrkr = await models.mongoose.campaignTrkrs.findOne({date_entered: dateEntered});
    		}
    		return objCampaignTrkr;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objCampaignTrkr;
    		if(sql) {
    			objCampaignTrkr = await models.sequelize.campaignTrkrs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objCampaignTrkr = await models.mongoose.campaignTrkrs.findOne({date_modified: dateModified});
    		}
    		return objCampaignTrkr;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCampaignId(campaignId, query = {}) {
    	try {
    		let objCampaignTrkr;
    		if(sql) {
    			objCampaignTrkr = await models.sequelize.campaignTrkrs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { campaign_id: campaignId },
    			});
    		} else {
    			objCampaignTrkr = await models.mongoose.campaignTrkrs.findOne({campaign_id: campaignId});
    		}
    		return objCampaignTrkr;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objCampaignTrkr;
    		if(sql) {
    			objCampaignTrkr = await models.sequelize.campaignTrkrs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objCampaignTrkr = await models.mongoose.campaignTrkrs.findOne({modified_user_id: modifiedUserId});
    		}
    		return objCampaignTrkr;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objCampaignTrkr;
    		if(sql) {
    			objCampaignTrkr = await models.sequelize.campaignTrkrs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objCampaignTrkr = await models.mongoose.campaignTrkrs.findOne({created_by: createdBy});
    		}
    		return objCampaignTrkr;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateCampaignTrkrById(id, updateCampaignTrkr) {
    	try {
    		let objCampaignTrkr;
    		if(sql) {
    			objCampaignTrkr = await models.sequelize.campaignTrkrs.findOne({where: { id: id }});
    			if (objCampaignTrkr) {
    				objCampaignTrkr = await models.sequelize.campaignTrkrs.update(updateCampaignTrkr, { where: { id: id } });
    			}
    		} else {
    			objCampaignTrkr = await models.mongoose.campaignTrkrs.findOneAndUpdate({id: id}, {$set: updateCampaignTrkr}, {new: true});
    		}
    		return objCampaignTrkr;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignTrkrByIsOptout(isOptout, updateCampaignTrkr) {
    	try {
    		let objCampaignTrkr;
    		if(sql) {
    			objCampaignTrkr = await models.sequelize.campaignTrkrs.findOne({where: { is_optout: isOptout }});
    			if (objCampaignTrkr) {
    				objCampaignTrkr = await models.sequelize.campaignTrkrs.update(updateCampaignTrkr, { where: { is_optout: isOptout } });
    			}
    		} else {
    			objCampaignTrkr = await models.mongoose.campaignTrkrs.findOneAndUpdate({is_optout: isOptout}, {$set: updateCampaignTrkr}, {new: true});
    		}
    		return objCampaignTrkr;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignTrkrByDeleted(deleted, updateCampaignTrkr) {
    	try {
    		let objCampaignTrkr;
    		if(sql) {
    			objCampaignTrkr = await models.sequelize.campaignTrkrs.findOne({where: { deleted: deleted }});
    			if (objCampaignTrkr) {
    				objCampaignTrkr = await models.sequelize.campaignTrkrs.update(updateCampaignTrkr, { where: { deleted: deleted } });
    			}
    		} else {
    			objCampaignTrkr = await models.mongoose.campaignTrkrs.findOneAndUpdate({deleted: deleted}, {$set: updateCampaignTrkr}, {new: true});
    		}
    		return objCampaignTrkr;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignTrkrByTrackerKey(trackerKey, updateCampaignTrkr) {
    	try {
    		let objCampaignTrkr;
    		if(sql) {
    			objCampaignTrkr = await models.sequelize.campaignTrkrs.findOne({where: { tracker_key: trackerKey }});
    			if (objCampaignTrkr) {
    				objCampaignTrkr = await models.sequelize.campaignTrkrs.update(updateCampaignTrkr, { where: { tracker_key: trackerKey } });
    			}
    		} else {
    			objCampaignTrkr = await models.mongoose.campaignTrkrs.findOneAndUpdate({tracker_key: trackerKey}, {$set: updateCampaignTrkr}, {new: true});
    		}
    		return objCampaignTrkr;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignTrkrByTrackerName(trackerName, updateCampaignTrkr) {
    	try {
    		let objCampaignTrkr;
    		if(sql) {
    			objCampaignTrkr = await models.sequelize.campaignTrkrs.findOne({where: { tracker_name: trackerName }});
    			if (objCampaignTrkr) {
    				objCampaignTrkr = await models.sequelize.campaignTrkrs.update(updateCampaignTrkr, { where: { tracker_name: trackerName } });
    			}
    		} else {
    			objCampaignTrkr = await models.mongoose.campaignTrkrs.findOneAndUpdate({tracker_name: trackerName}, {$set: updateCampaignTrkr}, {new: true});
    		}
    		return objCampaignTrkr;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignTrkrByTrackerUrl(trackerUrl, updateCampaignTrkr) {
    	try {
    		let objCampaignTrkr;
    		if(sql) {
    			objCampaignTrkr = await models.sequelize.campaignTrkrs.findOne({where: { tracker_url: trackerUrl }});
    			if (objCampaignTrkr) {
    				objCampaignTrkr = await models.sequelize.campaignTrkrs.update(updateCampaignTrkr, { where: { tracker_url: trackerUrl } });
    			}
    		} else {
    			objCampaignTrkr = await models.mongoose.campaignTrkrs.findOneAndUpdate({tracker_url: trackerUrl}, {$set: updateCampaignTrkr}, {new: true});
    		}
    		return objCampaignTrkr;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignTrkrByDateEntered(dateEntered, updateCampaignTrkr) {
    	try {
    		let objCampaignTrkr;
    		if(sql) {
    			objCampaignTrkr = await models.sequelize.campaignTrkrs.findOne({where: { date_entered: dateEntered }});
    			if (objCampaignTrkr) {
    				objCampaignTrkr = await models.sequelize.campaignTrkrs.update(updateCampaignTrkr, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objCampaignTrkr = await models.mongoose.campaignTrkrs.findOneAndUpdate({date_entered: dateEntered}, {$set: updateCampaignTrkr}, {new: true});
    		}
    		return objCampaignTrkr;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignTrkrByDateModified(dateModified, updateCampaignTrkr) {
    	try {
    		let objCampaignTrkr;
    		if(sql) {
    			objCampaignTrkr = await models.sequelize.campaignTrkrs.findOne({where: { date_modified: dateModified }});
    			if (objCampaignTrkr) {
    				objCampaignTrkr = await models.sequelize.campaignTrkrs.update(updateCampaignTrkr, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objCampaignTrkr = await models.mongoose.campaignTrkrs.findOneAndUpdate({date_modified: dateModified}, {$set: updateCampaignTrkr}, {new: true});
    		}
    		return objCampaignTrkr;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignTrkrByCampaignId(campaignId, updateCampaignTrkr) {
    	try {
    		let objCampaignTrkr;
    		if(sql) {
    			objCampaignTrkr = await models.sequelize.campaignTrkrs.findOne({where: { campaign_id: campaignId }});
    			if (objCampaignTrkr) {
    				objCampaignTrkr = await models.sequelize.campaignTrkrs.update(updateCampaignTrkr, { where: { campaign_id: campaignId } });
    			}
    		} else {
    			objCampaignTrkr = await models.mongoose.campaignTrkrs.findOneAndUpdate({campaign_id: campaignId}, {$set: updateCampaignTrkr}, {new: true});
    		}
    		return objCampaignTrkr;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignTrkrByModifiedUserId(modifiedUserId, updateCampaignTrkr) {
    	try {
    		let objCampaignTrkr;
    		if(sql) {
    			objCampaignTrkr = await models.sequelize.campaignTrkrs.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objCampaignTrkr) {
    				objCampaignTrkr = await models.sequelize.campaignTrkrs.update(updateCampaignTrkr, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objCampaignTrkr = await models.mongoose.campaignTrkrs.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateCampaignTrkr}, {new: true});
    		}
    		return objCampaignTrkr;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignTrkrByCreatedBy(createdBy, updateCampaignTrkr) {
    	try {
    		let objCampaignTrkr;
    		if(sql) {
    			objCampaignTrkr = await models.sequelize.campaignTrkrs.findOne({where: { created_by: createdBy }});
    			if (objCampaignTrkr) {
    				objCampaignTrkr = await models.sequelize.campaignTrkrs.update(updateCampaignTrkr, { where: { created_by: createdBy } });
    			}
    		} else {
    			objCampaignTrkr = await models.mongoose.campaignTrkrs.findOneAndUpdate({created_by: createdBy}, {$set: updateCampaignTrkr}, {new: true});
    		}
    		return objCampaignTrkr;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = CampaignTrkrService;
//</es-section>
