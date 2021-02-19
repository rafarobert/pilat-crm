/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:44:00 GMT-0400 (Bolivia Time)
 * Time: 4:44:0
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:44:00 GMT-0400 (Bolivia Time)
 * Last time updated: 4:44:0
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

class ProspectListCampaignService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllProspectListCampaigns(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.prospectListCampaigns.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.prospectListCampaigns.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllProspectListCampaigns(select = []) {
		try {
			if(sql) {
				return await models.sequelize.prospectListCampaigns.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.prospectListCampaigns.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addProspectListCampaign(newProspectListCampaign) {
		try {
			let objProspectListCampaign;
			if(util.PrimaryKeyTypeIsString(models.sequelize.prospectListCampaigns.primaryKeys.id.type.toString())) {
			    newProspectListCampaign.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objProspectListCampaign = await models.sequelize.prospectListCampaigns.create(newProspectListCampaign);
			} else {
				objProspectListCampaign = new models.mongoose.prospectListCampaigns(newProspectListCampaign);
				await objProspectListCampaign.save();
			}
			return objProspectListCampaign;
		} catch (error) {
			throw error;
		}
	}

	static async updateProspectListCampaign(id, updateProspectListCampaign) {
		try {
			let objProspectListCampaign;
			if(sql) {
				objProspectListCampaign = await models.sequelize.prospectListCampaigns.findOne({where: { id: util.String(id) }});
				if (objProspectListCampaign) {
					await models.sequelize.prospectListCampaigns.update(updateProspectListCampaign, { where: { id: util.String(id) } });
					objProspectListCampaign = await models.sequelize.prospectListCampaigns.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateProspectListCampaign._id;
				objProspectListCampaign = await models.mongoose.prospectListCampaigns.findOneAndUpdate({id:id}, {$set: updateProspectListCampaign}, {new: true});
			}
			return objProspectListCampaign;
		} catch (error) {
			throw error;
		}
	}

	static async getAProspectListCampaign(id, query) {
		try {
			let objProspectListCampaign;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objProspectListCampaign = await models.sequelize.prospectListCampaigns.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objProspectListCampaign = await models.mongoose.prospectListCampaigns.find({id:util.String(id)}).select(query.select);
			}
			return objProspectListCampaign;
		} catch (error) {
			throw error;
		}
	}

	static async deleteProspectListCampaign(id) {
		try {
			let objProspectListCampaign;
			if(sql) {
				objProspectListCampaign = await models.sequelize.prospectListCampaigns.findOne({ where: { id: util.String(id) } });
				if (objProspectListCampaign) {
					await models.sequelize.prospectListCampaigns.destroy({where: { id: util.String(id) }});
				}
			} else {
				objProspectListCampaign = await models.mongoose.prospectListCampaigns.deleteOne({id:util.String(id)});
			}
			return objProspectListCampaign;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objProspectListCampaign;
    		if(sql) {
    			objProspectListCampaign = await models.sequelize.prospectListCampaigns.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objProspectListCampaign = await models.mongoose.prospectListCampaigns.findOne({id: id});
    		}
    		return objProspectListCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objProspectListCampaign;
    		if(sql) {
    			objProspectListCampaign = await models.sequelize.prospectListCampaigns.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objProspectListCampaign = await models.mongoose.prospectListCampaigns.findOne({deleted: deleted});
    		}
    		return objProspectListCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByProspectListId(prospectListId, query = {}) {
    	try {
    		let objProspectListCampaign;
    		if(sql) {
    			objProspectListCampaign = await models.sequelize.prospectListCampaigns.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { prospect_list_id: prospectListId },
    			});
    		} else {
    			objProspectListCampaign = await models.mongoose.prospectListCampaigns.findOne({prospect_list_id: prospectListId});
    		}
    		return objProspectListCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCampaignId(campaignId, query = {}) {
    	try {
    		let objProspectListCampaign;
    		if(sql) {
    			objProspectListCampaign = await models.sequelize.prospectListCampaigns.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { campaign_id: campaignId },
    			});
    		} else {
    			objProspectListCampaign = await models.mongoose.prospectListCampaigns.findOne({campaign_id: campaignId});
    		}
    		return objProspectListCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objProspectListCampaign;
    		if(sql) {
    			objProspectListCampaign = await models.sequelize.prospectListCampaigns.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objProspectListCampaign = await models.mongoose.prospectListCampaigns.findOne({date_modified: dateModified});
    		}
    		return objProspectListCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateProspectListCampaignById(id, updateProspectListCampaign) {
    	try {
    		let objProspectListCampaign;
    		if(sql) {
    			objProspectListCampaign = await models.sequelize.prospectListCampaigns.findOne({where: { id: id }});
    			if (objProspectListCampaign) {
    				objProspectListCampaign = await models.sequelize.prospectListCampaigns.update(updateProspectListCampaign, { where: { id: id } });
    			}
    		} else {
    			objProspectListCampaign = await models.mongoose.prospectListCampaigns.findOneAndUpdate({id: id}, {$set: updateProspectListCampaign}, {new: true});
    		}
    		return objProspectListCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectListCampaignByDeleted(deleted, updateProspectListCampaign) {
    	try {
    		let objProspectListCampaign;
    		if(sql) {
    			objProspectListCampaign = await models.sequelize.prospectListCampaigns.findOne({where: { deleted: deleted }});
    			if (objProspectListCampaign) {
    				objProspectListCampaign = await models.sequelize.prospectListCampaigns.update(updateProspectListCampaign, { where: { deleted: deleted } });
    			}
    		} else {
    			objProspectListCampaign = await models.mongoose.prospectListCampaigns.findOneAndUpdate({deleted: deleted}, {$set: updateProspectListCampaign}, {new: true});
    		}
    		return objProspectListCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectListCampaignByProspectListId(prospectListId, updateProspectListCampaign) {
    	try {
    		let objProspectListCampaign;
    		if(sql) {
    			objProspectListCampaign = await models.sequelize.prospectListCampaigns.findOne({where: { prospect_list_id: prospectListId }});
    			if (objProspectListCampaign) {
    				objProspectListCampaign = await models.sequelize.prospectListCampaigns.update(updateProspectListCampaign, { where: { prospect_list_id: prospectListId } });
    			}
    		} else {
    			objProspectListCampaign = await models.mongoose.prospectListCampaigns.findOneAndUpdate({prospect_list_id: prospectListId}, {$set: updateProspectListCampaign}, {new: true});
    		}
    		return objProspectListCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectListCampaignByCampaignId(campaignId, updateProspectListCampaign) {
    	try {
    		let objProspectListCampaign;
    		if(sql) {
    			objProspectListCampaign = await models.sequelize.prospectListCampaigns.findOne({where: { campaign_id: campaignId }});
    			if (objProspectListCampaign) {
    				objProspectListCampaign = await models.sequelize.prospectListCampaigns.update(updateProspectListCampaign, { where: { campaign_id: campaignId } });
    			}
    		} else {
    			objProspectListCampaign = await models.mongoose.prospectListCampaigns.findOneAndUpdate({campaign_id: campaignId}, {$set: updateProspectListCampaign}, {new: true});
    		}
    		return objProspectListCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectListCampaignByDateModified(dateModified, updateProspectListCampaign) {
    	try {
    		let objProspectListCampaign;
    		if(sql) {
    			objProspectListCampaign = await models.sequelize.prospectListCampaigns.findOne({where: { date_modified: dateModified }});
    			if (objProspectListCampaign) {
    				objProspectListCampaign = await models.sequelize.prospectListCampaigns.update(updateProspectListCampaign, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objProspectListCampaign = await models.mongoose.prospectListCampaigns.findOneAndUpdate({date_modified: dateModified}, {$set: updateProspectListCampaign}, {new: true});
    		}
    		return objProspectListCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = ProspectListCampaignService;
//</es-section>
