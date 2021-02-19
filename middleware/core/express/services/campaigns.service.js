/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:36:36 GMT-0400 (Bolivia Time)
 * Time: 18:36:36
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:36:36 GMT-0400 (Bolivia Time)
 * Last time updated: 18:36:36
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

class CampaignService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllCampaigns(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.campaigns.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.campaigns.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllCampaigns(select = []) {
		try {
			if(sql) {
				return await models.sequelize.campaigns.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.campaigns.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addCampaign(newCampaign) {
		try {
			let objCampaign;
			if(util.PrimaryKeyTypeIsString(models.sequelize.campaigns.primaryKeys.id.type.toString())) {
			    newCampaign.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objCampaign = await models.sequelize.campaigns.create(newCampaign);
			} else {
				objCampaign = new models.mongoose.campaigns(newCampaign);
				await objCampaign.save();
			}
			return objCampaign;
		} catch (error) {
			throw error;
		}
	}

	static async updateCampaign(id, updateCampaign) {
		try {
			let objCampaign;
			if(sql) {
				objCampaign = await models.sequelize.campaigns.findOne({where: { id: util.Char(id) }});
				if (objCampaign) {
					await models.sequelize.campaigns.update(updateCampaign, { where: { id: util.Char(id) } });
					objCampaign = await models.sequelize.campaigns.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateCampaign._id;
				objCampaign = await models.mongoose.campaigns.findOneAndUpdate({id:id}, {$set: updateCampaign}, {new: true});
			}
			return objCampaign;
		} catch (error) {
			throw error;
		}
	}

	static async getACampaign(id, query) {
		try {
			let objCampaign;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objCampaign = await models.sequelize.campaigns.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objCampaign = await models.mongoose.campaigns.find({id:util.Char(id)}).select(query.select);
			}
			return objCampaign;
		} catch (error) {
			throw error;
		}
	}

	static async deleteCampaign(id) {
		try {
			let objCampaign;
			if(sql) {
				objCampaign = await models.sequelize.campaigns.findOne({ where: { id: util.Char(id) } });
				if (objCampaign) {
					await models.sequelize.campaigns.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objCampaign = await models.mongoose.campaigns.deleteOne({id:util.Char(id)});
			}
			return objCampaign;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOne({id: id});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOne({deleted: deleted});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTrackerKey(trackerKey, query = {}) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { tracker_key: trackerKey },
    			});
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOne({tracker_key: trackerKey});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTrackerCount(trackerCount, query = {}) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { tracker_count: trackerCount },
    			});
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOne({tracker_count: trackerCount});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByImpressions(impressions, query = {}) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { impressions: impressions },
    			});
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOne({impressions: impressions});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBudget(budget, query = {}) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { budget: budget },
    			});
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOne({budget: budget});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByExpectedCost(expectedCost, query = {}) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { expected_cost: expectedCost },
    			});
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOne({expected_cost: expectedCost});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByActualCost(actualCost, query = {}) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { actual_cost: actualCost },
    			});
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOne({actual_cost: actualCost});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByExpectedRevenue(expectedRevenue, query = {}) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { expected_revenue: expectedRevenue },
    			});
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOne({expected_revenue: expectedRevenue});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOne({name: name});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByReferUrl(referUrl, query = {}) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { refer_url: referUrl },
    			});
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOne({refer_url: referUrl});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTrackerText(trackerText, query = {}) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { tracker_text: trackerText },
    			});
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOne({tracker_text: trackerText});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByStatus(status, query = {}) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { status: status },
    			});
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOne({status: status});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCampaignType(campaignType, query = {}) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { campaign_type: campaignType },
    			});
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOne({campaign_type: campaignType});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFrequency(frequency, query = {}) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { frequency: frequency },
    			});
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOne({frequency: frequency});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByObjective(objective, query = {}) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { objective: objective },
    			});
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOne({objective: objective});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByContent(content, query = {}) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { content: content },
    			});
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOne({content: content});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOne({date_entered: dateEntered});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOne({date_modified: dateModified});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByStartDate(startDate, query = {}) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { start_date: startDate },
    			});
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOne({start_date: startDate});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByEndDate(endDate, query = {}) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { end_date: endDate },
    			});
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOne({end_date: endDate});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOne({modified_user_id: modifiedUserId});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOne({created_by: createdBy});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOne({assigned_user_id: assignedUserId});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCurrencyId(currencyId, query = {}) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { currency_id: currencyId },
    			});
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOne({currency_id: currencyId});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySurveyId(surveyId, query = {}) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { survey_id: surveyId },
    			});
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOne({survey_id: surveyId});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateCampaignById(id, updateCampaign) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({where: { id: id }});
    			if (objCampaign) {
    				objCampaign = await models.sequelize.campaigns.update(updateCampaign, { where: { id: id } });
    			}
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOneAndUpdate({id: id}, {$set: updateCampaign}, {new: true});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignByDeleted(deleted, updateCampaign) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({where: { deleted: deleted }});
    			if (objCampaign) {
    				objCampaign = await models.sequelize.campaigns.update(updateCampaign, { where: { deleted: deleted } });
    			}
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOneAndUpdate({deleted: deleted}, {$set: updateCampaign}, {new: true});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignByTrackerKey(trackerKey, updateCampaign) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({where: { tracker_key: trackerKey }});
    			if (objCampaign) {
    				objCampaign = await models.sequelize.campaigns.update(updateCampaign, { where: { tracker_key: trackerKey } });
    			}
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOneAndUpdate({tracker_key: trackerKey}, {$set: updateCampaign}, {new: true});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignByTrackerCount(trackerCount, updateCampaign) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({where: { tracker_count: trackerCount }});
    			if (objCampaign) {
    				objCampaign = await models.sequelize.campaigns.update(updateCampaign, { where: { tracker_count: trackerCount } });
    			}
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOneAndUpdate({tracker_count: trackerCount}, {$set: updateCampaign}, {new: true});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignByImpressions(impressions, updateCampaign) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({where: { impressions: impressions }});
    			if (objCampaign) {
    				objCampaign = await models.sequelize.campaigns.update(updateCampaign, { where: { impressions: impressions } });
    			}
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOneAndUpdate({impressions: impressions}, {$set: updateCampaign}, {new: true});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignByBudget(budget, updateCampaign) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({where: { budget: budget }});
    			if (objCampaign) {
    				objCampaign = await models.sequelize.campaigns.update(updateCampaign, { where: { budget: budget } });
    			}
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOneAndUpdate({budget: budget}, {$set: updateCampaign}, {new: true});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignByExpectedCost(expectedCost, updateCampaign) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({where: { expected_cost: expectedCost }});
    			if (objCampaign) {
    				objCampaign = await models.sequelize.campaigns.update(updateCampaign, { where: { expected_cost: expectedCost } });
    			}
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOneAndUpdate({expected_cost: expectedCost}, {$set: updateCampaign}, {new: true});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignByActualCost(actualCost, updateCampaign) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({where: { actual_cost: actualCost }});
    			if (objCampaign) {
    				objCampaign = await models.sequelize.campaigns.update(updateCampaign, { where: { actual_cost: actualCost } });
    			}
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOneAndUpdate({actual_cost: actualCost}, {$set: updateCampaign}, {new: true});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignByExpectedRevenue(expectedRevenue, updateCampaign) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({where: { expected_revenue: expectedRevenue }});
    			if (objCampaign) {
    				objCampaign = await models.sequelize.campaigns.update(updateCampaign, { where: { expected_revenue: expectedRevenue } });
    			}
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOneAndUpdate({expected_revenue: expectedRevenue}, {$set: updateCampaign}, {new: true});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignByName(name, updateCampaign) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({where: { name: name }});
    			if (objCampaign) {
    				objCampaign = await models.sequelize.campaigns.update(updateCampaign, { where: { name: name } });
    			}
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOneAndUpdate({name: name}, {$set: updateCampaign}, {new: true});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignByReferUrl(referUrl, updateCampaign) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({where: { refer_url: referUrl }});
    			if (objCampaign) {
    				objCampaign = await models.sequelize.campaigns.update(updateCampaign, { where: { refer_url: referUrl } });
    			}
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOneAndUpdate({refer_url: referUrl}, {$set: updateCampaign}, {new: true});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignByTrackerText(trackerText, updateCampaign) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({where: { tracker_text: trackerText }});
    			if (objCampaign) {
    				objCampaign = await models.sequelize.campaigns.update(updateCampaign, { where: { tracker_text: trackerText } });
    			}
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOneAndUpdate({tracker_text: trackerText}, {$set: updateCampaign}, {new: true});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignByStatus(status, updateCampaign) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({where: { status: status }});
    			if (objCampaign) {
    				objCampaign = await models.sequelize.campaigns.update(updateCampaign, { where: { status: status } });
    			}
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOneAndUpdate({status: status}, {$set: updateCampaign}, {new: true});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignByCampaignType(campaignType, updateCampaign) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({where: { campaign_type: campaignType }});
    			if (objCampaign) {
    				objCampaign = await models.sequelize.campaigns.update(updateCampaign, { where: { campaign_type: campaignType } });
    			}
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOneAndUpdate({campaign_type: campaignType}, {$set: updateCampaign}, {new: true});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignByFrequency(frequency, updateCampaign) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({where: { frequency: frequency }});
    			if (objCampaign) {
    				objCampaign = await models.sequelize.campaigns.update(updateCampaign, { where: { frequency: frequency } });
    			}
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOneAndUpdate({frequency: frequency}, {$set: updateCampaign}, {new: true});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignByObjective(objective, updateCampaign) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({where: { objective: objective }});
    			if (objCampaign) {
    				objCampaign = await models.sequelize.campaigns.update(updateCampaign, { where: { objective: objective } });
    			}
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOneAndUpdate({objective: objective}, {$set: updateCampaign}, {new: true});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignByContent(content, updateCampaign) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({where: { content: content }});
    			if (objCampaign) {
    				objCampaign = await models.sequelize.campaigns.update(updateCampaign, { where: { content: content } });
    			}
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOneAndUpdate({content: content}, {$set: updateCampaign}, {new: true});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignByDateEntered(dateEntered, updateCampaign) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({where: { date_entered: dateEntered }});
    			if (objCampaign) {
    				objCampaign = await models.sequelize.campaigns.update(updateCampaign, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOneAndUpdate({date_entered: dateEntered}, {$set: updateCampaign}, {new: true});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignByDateModified(dateModified, updateCampaign) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({where: { date_modified: dateModified }});
    			if (objCampaign) {
    				objCampaign = await models.sequelize.campaigns.update(updateCampaign, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOneAndUpdate({date_modified: dateModified}, {$set: updateCampaign}, {new: true});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignByStartDate(startDate, updateCampaign) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({where: { start_date: startDate }});
    			if (objCampaign) {
    				objCampaign = await models.sequelize.campaigns.update(updateCampaign, { where: { start_date: startDate } });
    			}
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOneAndUpdate({start_date: startDate}, {$set: updateCampaign}, {new: true});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignByEndDate(endDate, updateCampaign) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({where: { end_date: endDate }});
    			if (objCampaign) {
    				objCampaign = await models.sequelize.campaigns.update(updateCampaign, { where: { end_date: endDate } });
    			}
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOneAndUpdate({end_date: endDate}, {$set: updateCampaign}, {new: true});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignByModifiedUserId(modifiedUserId, updateCampaign) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objCampaign) {
    				objCampaign = await models.sequelize.campaigns.update(updateCampaign, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateCampaign}, {new: true});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignByCreatedBy(createdBy, updateCampaign) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({where: { created_by: createdBy }});
    			if (objCampaign) {
    				objCampaign = await models.sequelize.campaigns.update(updateCampaign, { where: { created_by: createdBy } });
    			}
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOneAndUpdate({created_by: createdBy}, {$set: updateCampaign}, {new: true});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignByAssignedUserId(assignedUserId, updateCampaign) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objCampaign) {
    				objCampaign = await models.sequelize.campaigns.update(updateCampaign, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateCampaign}, {new: true});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignByCurrencyId(currencyId, updateCampaign) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({where: { currency_id: currencyId }});
    			if (objCampaign) {
    				objCampaign = await models.sequelize.campaigns.update(updateCampaign, { where: { currency_id: currencyId } });
    			}
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOneAndUpdate({currency_id: currencyId}, {$set: updateCampaign}, {new: true});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignBySurveyId(surveyId, updateCampaign) {
    	try {
    		let objCampaign;
    		if(sql) {
    			objCampaign = await models.sequelize.campaigns.findOne({where: { survey_id: surveyId }});
    			if (objCampaign) {
    				objCampaign = await models.sequelize.campaigns.update(updateCampaign, { where: { survey_id: surveyId } });
    			}
    		} else {
    			objCampaign = await models.mongoose.campaigns.findOneAndUpdate({survey_id: surveyId}, {$set: updateCampaign}, {new: true});
    		}
    		return objCampaign;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = CampaignService;
//</es-section>
