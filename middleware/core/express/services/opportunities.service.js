/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:01 GMT-0400 (Bolivia Time)
 * Time: 18:38:1
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:01 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:1
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

class OpportunityService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllOpportunities(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.opportunities.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.opportunities.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllOpportunities(select = []) {
		try {
			if(sql) {
				return await models.sequelize.opportunities.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.opportunities.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addOpportunity(newOpportunity) {
		try {
			let objOpportunity;
			if(util.PrimaryKeyTypeIsString(models.sequelize.opportunities.primaryKeys.id.type.toString())) {
			    newOpportunity.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objOpportunity = await models.sequelize.opportunities.create(newOpportunity);
			} else {
				objOpportunity = new models.mongoose.opportunities(newOpportunity);
				await objOpportunity.save();
			}
			return objOpportunity;
		} catch (error) {
			throw error;
		}
	}

	static async updateOpportunity(id, updateOpportunity) {
		try {
			let objOpportunity;
			if(sql) {
				objOpportunity = await models.sequelize.opportunities.findOne({where: { id: util.Char(id) }});
				if (objOpportunity) {
					await models.sequelize.opportunities.update(updateOpportunity, { where: { id: util.Char(id) } });
					objOpportunity = await models.sequelize.opportunities.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateOpportunity._id;
				objOpportunity = await models.mongoose.opportunities.findOneAndUpdate({id:id}, {$set: updateOpportunity}, {new: true});
			}
			return objOpportunity;
		} catch (error) {
			throw error;
		}
	}

	static async getAOpportunity(id, query) {
		try {
			let objOpportunity;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objOpportunity = await models.sequelize.opportunities.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objOpportunity = await models.mongoose.opportunities.find({id:util.Char(id)}).select(query.select);
			}
			return objOpportunity;
		} catch (error) {
			throw error;
		}
	}

	static async deleteOpportunity(id) {
		try {
			let objOpportunity;
			if(sql) {
				objOpportunity = await models.sequelize.opportunities.findOne({ where: { id: util.Char(id) } });
				if (objOpportunity) {
					await models.sequelize.opportunities.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objOpportunity = await models.mongoose.opportunities.deleteOne({id:util.Char(id)});
			}
			return objOpportunity;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objOpportunity;
    		if(sql) {
    			objOpportunity = await models.sequelize.opportunities.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objOpportunity = await models.mongoose.opportunities.findOne({id: id});
    		}
    		return objOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objOpportunity;
    		if(sql) {
    			objOpportunity = await models.sequelize.opportunities.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objOpportunity = await models.mongoose.opportunities.findOne({deleted: deleted});
    		}
    		return objOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAmount(amount, query = {}) {
    	try {
    		let objOpportunity;
    		if(sql) {
    			objOpportunity = await models.sequelize.opportunities.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { amount: amount },
    			});
    		} else {
    			objOpportunity = await models.mongoose.opportunities.findOne({amount: amount});
    		}
    		return objOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAmountUsdollar(amountUsdollar, query = {}) {
    	try {
    		let objOpportunity;
    		if(sql) {
    			objOpportunity = await models.sequelize.opportunities.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { amount_usdollar: amountUsdollar },
    			});
    		} else {
    			objOpportunity = await models.mongoose.opportunities.findOne({amount_usdollar: amountUsdollar});
    		}
    		return objOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByProbability(probability, query = {}) {
    	try {
    		let objOpportunity;
    		if(sql) {
    			objOpportunity = await models.sequelize.opportunities.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { probability: probability },
    			});
    		} else {
    			objOpportunity = await models.mongoose.opportunities.findOne({probability: probability});
    		}
    		return objOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objOpportunity;
    		if(sql) {
    			objOpportunity = await models.sequelize.opportunities.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objOpportunity = await models.mongoose.opportunities.findOne({name: name});
    		}
    		return objOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByOpportunityType(opportunityType, query = {}) {
    	try {
    		let objOpportunity;
    		if(sql) {
    			objOpportunity = await models.sequelize.opportunities.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { opportunity_type: opportunityType },
    			});
    		} else {
    			objOpportunity = await models.mongoose.opportunities.findOne({opportunity_type: opportunityType});
    		}
    		return objOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByLeadSource(leadSource, query = {}) {
    	try {
    		let objOpportunity;
    		if(sql) {
    			objOpportunity = await models.sequelize.opportunities.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { lead_source: leadSource },
    			});
    		} else {
    			objOpportunity = await models.mongoose.opportunities.findOne({lead_source: leadSource});
    		}
    		return objOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByNextStep(nextStep, query = {}) {
    	try {
    		let objOpportunity;
    		if(sql) {
    			objOpportunity = await models.sequelize.opportunities.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { next_step: nextStep },
    			});
    		} else {
    			objOpportunity = await models.mongoose.opportunities.findOne({next_step: nextStep});
    		}
    		return objOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySalesStage(salesStage, query = {}) {
    	try {
    		let objOpportunity;
    		if(sql) {
    			objOpportunity = await models.sequelize.opportunities.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { sales_stage: salesStage },
    			});
    		} else {
    			objOpportunity = await models.mongoose.opportunities.findOne({sales_stage: salesStage});
    		}
    		return objOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objOpportunity;
    		if(sql) {
    			objOpportunity = await models.sequelize.opportunities.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objOpportunity = await models.mongoose.opportunities.findOne({description: description});
    		}
    		return objOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objOpportunity;
    		if(sql) {
    			objOpportunity = await models.sequelize.opportunities.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objOpportunity = await models.mongoose.opportunities.findOne({date_entered: dateEntered});
    		}
    		return objOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objOpportunity;
    		if(sql) {
    			objOpportunity = await models.sequelize.opportunities.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objOpportunity = await models.mongoose.opportunities.findOne({date_modified: dateModified});
    		}
    		return objOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateClosed(dateClosed, query = {}) {
    	try {
    		let objOpportunity;
    		if(sql) {
    			objOpportunity = await models.sequelize.opportunities.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_closed: dateClosed },
    			});
    		} else {
    			objOpportunity = await models.mongoose.opportunities.findOne({date_closed: dateClosed});
    		}
    		return objOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objOpportunity;
    		if(sql) {
    			objOpportunity = await models.sequelize.opportunities.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objOpportunity = await models.mongoose.opportunities.findOne({modified_user_id: modifiedUserId});
    		}
    		return objOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objOpportunity;
    		if(sql) {
    			objOpportunity = await models.sequelize.opportunities.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objOpportunity = await models.mongoose.opportunities.findOne({created_by: createdBy});
    		}
    		return objOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objOpportunity;
    		if(sql) {
    			objOpportunity = await models.sequelize.opportunities.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objOpportunity = await models.mongoose.opportunities.findOne({assigned_user_id: assignedUserId});
    		}
    		return objOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCampaignId(campaignId, query = {}) {
    	try {
    		let objOpportunity;
    		if(sql) {
    			objOpportunity = await models.sequelize.opportunities.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { campaign_id: campaignId },
    			});
    		} else {
    			objOpportunity = await models.mongoose.opportunities.findOne({campaign_id: campaignId});
    		}
    		return objOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCurrencyId(currencyId, query = {}) {
    	try {
    		let objOpportunity;
    		if(sql) {
    			objOpportunity = await models.sequelize.opportunities.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { currency_id: currencyId },
    			});
    		} else {
    			objOpportunity = await models.mongoose.opportunities.findOne({currency_id: currencyId});
    		}
    		return objOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateOpportunityById(id, updateOpportunity) {
    	try {
    		let objOpportunity;
    		if(sql) {
    			objOpportunity = await models.sequelize.opportunities.findOne({where: { id: id }});
    			if (objOpportunity) {
    				objOpportunity = await models.sequelize.opportunities.update(updateOpportunity, { where: { id: id } });
    			}
    		} else {
    			objOpportunity = await models.mongoose.opportunities.findOneAndUpdate({id: id}, {$set: updateOpportunity}, {new: true});
    		}
    		return objOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOpportunityByDeleted(deleted, updateOpportunity) {
    	try {
    		let objOpportunity;
    		if(sql) {
    			objOpportunity = await models.sequelize.opportunities.findOne({where: { deleted: deleted }});
    			if (objOpportunity) {
    				objOpportunity = await models.sequelize.opportunities.update(updateOpportunity, { where: { deleted: deleted } });
    			}
    		} else {
    			objOpportunity = await models.mongoose.opportunities.findOneAndUpdate({deleted: deleted}, {$set: updateOpportunity}, {new: true});
    		}
    		return objOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOpportunityByAmount(amount, updateOpportunity) {
    	try {
    		let objOpportunity;
    		if(sql) {
    			objOpportunity = await models.sequelize.opportunities.findOne({where: { amount: amount }});
    			if (objOpportunity) {
    				objOpportunity = await models.sequelize.opportunities.update(updateOpportunity, { where: { amount: amount } });
    			}
    		} else {
    			objOpportunity = await models.mongoose.opportunities.findOneAndUpdate({amount: amount}, {$set: updateOpportunity}, {new: true});
    		}
    		return objOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOpportunityByAmountUsdollar(amountUsdollar, updateOpportunity) {
    	try {
    		let objOpportunity;
    		if(sql) {
    			objOpportunity = await models.sequelize.opportunities.findOne({where: { amount_usdollar: amountUsdollar }});
    			if (objOpportunity) {
    				objOpportunity = await models.sequelize.opportunities.update(updateOpportunity, { where: { amount_usdollar: amountUsdollar } });
    			}
    		} else {
    			objOpportunity = await models.mongoose.opportunities.findOneAndUpdate({amount_usdollar: amountUsdollar}, {$set: updateOpportunity}, {new: true});
    		}
    		return objOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOpportunityByProbability(probability, updateOpportunity) {
    	try {
    		let objOpportunity;
    		if(sql) {
    			objOpportunity = await models.sequelize.opportunities.findOne({where: { probability: probability }});
    			if (objOpportunity) {
    				objOpportunity = await models.sequelize.opportunities.update(updateOpportunity, { where: { probability: probability } });
    			}
    		} else {
    			objOpportunity = await models.mongoose.opportunities.findOneAndUpdate({probability: probability}, {$set: updateOpportunity}, {new: true});
    		}
    		return objOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOpportunityByName(name, updateOpportunity) {
    	try {
    		let objOpportunity;
    		if(sql) {
    			objOpportunity = await models.sequelize.opportunities.findOne({where: { name: name }});
    			if (objOpportunity) {
    				objOpportunity = await models.sequelize.opportunities.update(updateOpportunity, { where: { name: name } });
    			}
    		} else {
    			objOpportunity = await models.mongoose.opportunities.findOneAndUpdate({name: name}, {$set: updateOpportunity}, {new: true});
    		}
    		return objOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOpportunityByOpportunityType(opportunityType, updateOpportunity) {
    	try {
    		let objOpportunity;
    		if(sql) {
    			objOpportunity = await models.sequelize.opportunities.findOne({where: { opportunity_type: opportunityType }});
    			if (objOpportunity) {
    				objOpportunity = await models.sequelize.opportunities.update(updateOpportunity, { where: { opportunity_type: opportunityType } });
    			}
    		} else {
    			objOpportunity = await models.mongoose.opportunities.findOneAndUpdate({opportunity_type: opportunityType}, {$set: updateOpportunity}, {new: true});
    		}
    		return objOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOpportunityByLeadSource(leadSource, updateOpportunity) {
    	try {
    		let objOpportunity;
    		if(sql) {
    			objOpportunity = await models.sequelize.opportunities.findOne({where: { lead_source: leadSource }});
    			if (objOpportunity) {
    				objOpportunity = await models.sequelize.opportunities.update(updateOpportunity, { where: { lead_source: leadSource } });
    			}
    		} else {
    			objOpportunity = await models.mongoose.opportunities.findOneAndUpdate({lead_source: leadSource}, {$set: updateOpportunity}, {new: true});
    		}
    		return objOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOpportunityByNextStep(nextStep, updateOpportunity) {
    	try {
    		let objOpportunity;
    		if(sql) {
    			objOpportunity = await models.sequelize.opportunities.findOne({where: { next_step: nextStep }});
    			if (objOpportunity) {
    				objOpportunity = await models.sequelize.opportunities.update(updateOpportunity, { where: { next_step: nextStep } });
    			}
    		} else {
    			objOpportunity = await models.mongoose.opportunities.findOneAndUpdate({next_step: nextStep}, {$set: updateOpportunity}, {new: true});
    		}
    		return objOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOpportunityBySalesStage(salesStage, updateOpportunity) {
    	try {
    		let objOpportunity;
    		if(sql) {
    			objOpportunity = await models.sequelize.opportunities.findOne({where: { sales_stage: salesStage }});
    			if (objOpportunity) {
    				objOpportunity = await models.sequelize.opportunities.update(updateOpportunity, { where: { sales_stage: salesStage } });
    			}
    		} else {
    			objOpportunity = await models.mongoose.opportunities.findOneAndUpdate({sales_stage: salesStage}, {$set: updateOpportunity}, {new: true});
    		}
    		return objOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOpportunityByDescription(description, updateOpportunity) {
    	try {
    		let objOpportunity;
    		if(sql) {
    			objOpportunity = await models.sequelize.opportunities.findOne({where: { description: description }});
    			if (objOpportunity) {
    				objOpportunity = await models.sequelize.opportunities.update(updateOpportunity, { where: { description: description } });
    			}
    		} else {
    			objOpportunity = await models.mongoose.opportunities.findOneAndUpdate({description: description}, {$set: updateOpportunity}, {new: true});
    		}
    		return objOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOpportunityByDateEntered(dateEntered, updateOpportunity) {
    	try {
    		let objOpportunity;
    		if(sql) {
    			objOpportunity = await models.sequelize.opportunities.findOne({where: { date_entered: dateEntered }});
    			if (objOpportunity) {
    				objOpportunity = await models.sequelize.opportunities.update(updateOpportunity, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objOpportunity = await models.mongoose.opportunities.findOneAndUpdate({date_entered: dateEntered}, {$set: updateOpportunity}, {new: true});
    		}
    		return objOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOpportunityByDateModified(dateModified, updateOpportunity) {
    	try {
    		let objOpportunity;
    		if(sql) {
    			objOpportunity = await models.sequelize.opportunities.findOne({where: { date_modified: dateModified }});
    			if (objOpportunity) {
    				objOpportunity = await models.sequelize.opportunities.update(updateOpportunity, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objOpportunity = await models.mongoose.opportunities.findOneAndUpdate({date_modified: dateModified}, {$set: updateOpportunity}, {new: true});
    		}
    		return objOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOpportunityByDateClosed(dateClosed, updateOpportunity) {
    	try {
    		let objOpportunity;
    		if(sql) {
    			objOpportunity = await models.sequelize.opportunities.findOne({where: { date_closed: dateClosed }});
    			if (objOpportunity) {
    				objOpportunity = await models.sequelize.opportunities.update(updateOpportunity, { where: { date_closed: dateClosed } });
    			}
    		} else {
    			objOpportunity = await models.mongoose.opportunities.findOneAndUpdate({date_closed: dateClosed}, {$set: updateOpportunity}, {new: true});
    		}
    		return objOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOpportunityByModifiedUserId(modifiedUserId, updateOpportunity) {
    	try {
    		let objOpportunity;
    		if(sql) {
    			objOpportunity = await models.sequelize.opportunities.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objOpportunity) {
    				objOpportunity = await models.sequelize.opportunities.update(updateOpportunity, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objOpportunity = await models.mongoose.opportunities.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateOpportunity}, {new: true});
    		}
    		return objOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOpportunityByCreatedBy(createdBy, updateOpportunity) {
    	try {
    		let objOpportunity;
    		if(sql) {
    			objOpportunity = await models.sequelize.opportunities.findOne({where: { created_by: createdBy }});
    			if (objOpportunity) {
    				objOpportunity = await models.sequelize.opportunities.update(updateOpportunity, { where: { created_by: createdBy } });
    			}
    		} else {
    			objOpportunity = await models.mongoose.opportunities.findOneAndUpdate({created_by: createdBy}, {$set: updateOpportunity}, {new: true});
    		}
    		return objOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOpportunityByAssignedUserId(assignedUserId, updateOpportunity) {
    	try {
    		let objOpportunity;
    		if(sql) {
    			objOpportunity = await models.sequelize.opportunities.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objOpportunity) {
    				objOpportunity = await models.sequelize.opportunities.update(updateOpportunity, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objOpportunity = await models.mongoose.opportunities.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateOpportunity}, {new: true});
    		}
    		return objOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOpportunityByCampaignId(campaignId, updateOpportunity) {
    	try {
    		let objOpportunity;
    		if(sql) {
    			objOpportunity = await models.sequelize.opportunities.findOne({where: { campaign_id: campaignId }});
    			if (objOpportunity) {
    				objOpportunity = await models.sequelize.opportunities.update(updateOpportunity, { where: { campaign_id: campaignId } });
    			}
    		} else {
    			objOpportunity = await models.mongoose.opportunities.findOneAndUpdate({campaign_id: campaignId}, {$set: updateOpportunity}, {new: true});
    		}
    		return objOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOpportunityByCurrencyId(currencyId, updateOpportunity) {
    	try {
    		let objOpportunity;
    		if(sql) {
    			objOpportunity = await models.sequelize.opportunities.findOne({where: { currency_id: currencyId }});
    			if (objOpportunity) {
    				objOpportunity = await models.sequelize.opportunities.update(updateOpportunity, { where: { currency_id: currencyId } });
    			}
    		} else {
    			objOpportunity = await models.mongoose.opportunities.findOneAndUpdate({currency_id: currencyId}, {$set: updateOpportunity}, {new: true});
    		}
    		return objOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = OpportunityService;
//</es-section>
