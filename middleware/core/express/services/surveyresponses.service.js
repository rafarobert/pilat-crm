/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:52 GMT-0400 (Bolivia Time)
 * Time: 0:23:52
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:52 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:52
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

class SurveyresponseService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllSurveyresponses(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.surveyresponses.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.surveyresponses.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllSurveyresponses(select = []) {
		try {
			if(sql) {
				return await models.sequelize.surveyresponses.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.surveyresponses.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addSurveyresponse(newSurveyresponse) {
		try {
			let objSurveyresponse;
			if(util.PrimaryKeyTypeIsString(models.sequelize.surveyresponses.primaryKeys.id.type.toString())) {
			    newSurveyresponse.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objSurveyresponse = await models.sequelize.surveyresponses.create(newSurveyresponse);
			} else {
				objSurveyresponse = new models.mongoose.surveyresponses(newSurveyresponse);
				await objSurveyresponse.save();
			}
			return objSurveyresponse;
		} catch (error) {
			throw error;
		}
	}

	static async updateSurveyresponse(id, updateSurveyresponse) {
		try {
			let objSurveyresponse;
			if(sql) {
				objSurveyresponse = await models.sequelize.surveyresponses.findOne({where: { id: util.Char(id) }});
				if (objSurveyresponse) {
					await models.sequelize.surveyresponses.update(updateSurveyresponse, { where: { id: util.Char(id) } });
					objSurveyresponse = await models.sequelize.surveyresponses.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateSurveyresponse._id;
				objSurveyresponse = await models.mongoose.surveyresponses.findOneAndUpdate({id:id}, {$set: updateSurveyresponse}, {new: true});
			}
			return objSurveyresponse;
		} catch (error) {
			throw error;
		}
	}

	static async getASurveyresponse(id, query) {
		try {
			let objSurveyresponse;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objSurveyresponse = await models.sequelize.surveyresponses.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objSurveyresponse = await models.mongoose.surveyresponses.find({id:util.Char(id)}).select(query.select);
			}
			return objSurveyresponse;
		} catch (error) {
			throw error;
		}
	}

	static async deleteSurveyresponse(id) {
		try {
			let objSurveyresponse;
			if(sql) {
				objSurveyresponse = await models.sequelize.surveyresponses.findOne({ where: { id: util.Char(id) } });
				if (objSurveyresponse) {
					await models.sequelize.surveyresponses.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objSurveyresponse = await models.mongoose.surveyresponses.deleteOne({id:util.Char(id)});
			}
			return objSurveyresponse;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objSurveyresponse;
    		if(sql) {
    			objSurveyresponse = await models.sequelize.surveyresponses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objSurveyresponse = await models.mongoose.surveyresponses.findOne({id: id});
    		}
    		return objSurveyresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objSurveyresponse;
    		if(sql) {
    			objSurveyresponse = await models.sequelize.surveyresponses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objSurveyresponse = await models.mongoose.surveyresponses.findOne({deleted: deleted});
    		}
    		return objSurveyresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByEmailResponseSent(emailResponseSent, query = {}) {
    	try {
    		let objSurveyresponse;
    		if(sql) {
    			objSurveyresponse = await models.sequelize.surveyresponses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { email_response_sent: emailResponseSent },
    			});
    		} else {
    			objSurveyresponse = await models.mongoose.surveyresponses.findOne({email_response_sent: emailResponseSent});
    		}
    		return objSurveyresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByHappiness(happiness, query = {}) {
    	try {
    		let objSurveyresponse;
    		if(sql) {
    			objSurveyresponse = await models.sequelize.surveyresponses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { happiness: happiness },
    			});
    		} else {
    			objSurveyresponse = await models.mongoose.surveyresponses.findOne({happiness: happiness});
    		}
    		return objSurveyresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objSurveyresponse;
    		if(sql) {
    			objSurveyresponse = await models.sequelize.surveyresponses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objSurveyresponse = await models.mongoose.surveyresponses.findOne({name: name});
    		}
    		return objSurveyresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objSurveyresponse;
    		if(sql) {
    			objSurveyresponse = await models.sequelize.surveyresponses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objSurveyresponse = await models.mongoose.surveyresponses.findOne({description: description});
    		}
    		return objSurveyresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objSurveyresponse;
    		if(sql) {
    			objSurveyresponse = await models.sequelize.surveyresponses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objSurveyresponse = await models.mongoose.surveyresponses.findOne({date_entered: dateEntered});
    		}
    		return objSurveyresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objSurveyresponse;
    		if(sql) {
    			objSurveyresponse = await models.sequelize.surveyresponses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objSurveyresponse = await models.mongoose.surveyresponses.findOne({date_modified: dateModified});
    		}
    		return objSurveyresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objSurveyresponse;
    		if(sql) {
    			objSurveyresponse = await models.sequelize.surveyresponses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objSurveyresponse = await models.mongoose.surveyresponses.findOne({modified_user_id: modifiedUserId});
    		}
    		return objSurveyresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objSurveyresponse;
    		if(sql) {
    			objSurveyresponse = await models.sequelize.surveyresponses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objSurveyresponse = await models.mongoose.surveyresponses.findOne({created_by: createdBy});
    		}
    		return objSurveyresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objSurveyresponse;
    		if(sql) {
    			objSurveyresponse = await models.sequelize.surveyresponses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objSurveyresponse = await models.mongoose.surveyresponses.findOne({assigned_user_id: assignedUserId});
    		}
    		return objSurveyresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAccountId(accountId, query = {}) {
    	try {
    		let objSurveyresponse;
    		if(sql) {
    			objSurveyresponse = await models.sequelize.surveyresponses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { account_id: accountId },
    			});
    		} else {
    			objSurveyresponse = await models.mongoose.surveyresponses.findOne({account_id: accountId});
    		}
    		return objSurveyresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCampaignId(campaignId, query = {}) {
    	try {
    		let objSurveyresponse;
    		if(sql) {
    			objSurveyresponse = await models.sequelize.surveyresponses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { campaign_id: campaignId },
    			});
    		} else {
    			objSurveyresponse = await models.mongoose.surveyresponses.findOne({campaign_id: campaignId});
    		}
    		return objSurveyresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByContactId(contactId, query = {}) {
    	try {
    		let objSurveyresponse;
    		if(sql) {
    			objSurveyresponse = await models.sequelize.surveyresponses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { contact_id: contactId },
    			});
    		} else {
    			objSurveyresponse = await models.mongoose.surveyresponses.findOne({contact_id: contactId});
    		}
    		return objSurveyresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySurveyId(surveyId, query = {}) {
    	try {
    		let objSurveyresponse;
    		if(sql) {
    			objSurveyresponse = await models.sequelize.surveyresponses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { survey_id: surveyId },
    			});
    		} else {
    			objSurveyresponse = await models.mongoose.surveyresponses.findOne({survey_id: surveyId});
    		}
    		return objSurveyresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateSurveyresponseById(id, updateSurveyresponse) {
    	try {
    		let objSurveyresponse;
    		if(sql) {
    			objSurveyresponse = await models.sequelize.surveyresponses.findOne({where: { id: id }});
    			if (objSurveyresponse) {
    				objSurveyresponse = await models.sequelize.surveyresponses.update(updateSurveyresponse, { where: { id: id } });
    			}
    		} else {
    			objSurveyresponse = await models.mongoose.surveyresponses.findOneAndUpdate({id: id}, {$set: updateSurveyresponse}, {new: true});
    		}
    		return objSurveyresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyresponseByDeleted(deleted, updateSurveyresponse) {
    	try {
    		let objSurveyresponse;
    		if(sql) {
    			objSurveyresponse = await models.sequelize.surveyresponses.findOne({where: { deleted: deleted }});
    			if (objSurveyresponse) {
    				objSurveyresponse = await models.sequelize.surveyresponses.update(updateSurveyresponse, { where: { deleted: deleted } });
    			}
    		} else {
    			objSurveyresponse = await models.mongoose.surveyresponses.findOneAndUpdate({deleted: deleted}, {$set: updateSurveyresponse}, {new: true});
    		}
    		return objSurveyresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyresponseByEmailResponseSent(emailResponseSent, updateSurveyresponse) {
    	try {
    		let objSurveyresponse;
    		if(sql) {
    			objSurveyresponse = await models.sequelize.surveyresponses.findOne({where: { email_response_sent: emailResponseSent }});
    			if (objSurveyresponse) {
    				objSurveyresponse = await models.sequelize.surveyresponses.update(updateSurveyresponse, { where: { email_response_sent: emailResponseSent } });
    			}
    		} else {
    			objSurveyresponse = await models.mongoose.surveyresponses.findOneAndUpdate({email_response_sent: emailResponseSent}, {$set: updateSurveyresponse}, {new: true});
    		}
    		return objSurveyresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyresponseByHappiness(happiness, updateSurveyresponse) {
    	try {
    		let objSurveyresponse;
    		if(sql) {
    			objSurveyresponse = await models.sequelize.surveyresponses.findOne({where: { happiness: happiness }});
    			if (objSurveyresponse) {
    				objSurveyresponse = await models.sequelize.surveyresponses.update(updateSurveyresponse, { where: { happiness: happiness } });
    			}
    		} else {
    			objSurveyresponse = await models.mongoose.surveyresponses.findOneAndUpdate({happiness: happiness}, {$set: updateSurveyresponse}, {new: true});
    		}
    		return objSurveyresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyresponseByName(name, updateSurveyresponse) {
    	try {
    		let objSurveyresponse;
    		if(sql) {
    			objSurveyresponse = await models.sequelize.surveyresponses.findOne({where: { name: name }});
    			if (objSurveyresponse) {
    				objSurveyresponse = await models.sequelize.surveyresponses.update(updateSurveyresponse, { where: { name: name } });
    			}
    		} else {
    			objSurveyresponse = await models.mongoose.surveyresponses.findOneAndUpdate({name: name}, {$set: updateSurveyresponse}, {new: true});
    		}
    		return objSurveyresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyresponseByDescription(description, updateSurveyresponse) {
    	try {
    		let objSurveyresponse;
    		if(sql) {
    			objSurveyresponse = await models.sequelize.surveyresponses.findOne({where: { description: description }});
    			if (objSurveyresponse) {
    				objSurveyresponse = await models.sequelize.surveyresponses.update(updateSurveyresponse, { where: { description: description } });
    			}
    		} else {
    			objSurveyresponse = await models.mongoose.surveyresponses.findOneAndUpdate({description: description}, {$set: updateSurveyresponse}, {new: true});
    		}
    		return objSurveyresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyresponseByDateEntered(dateEntered, updateSurveyresponse) {
    	try {
    		let objSurveyresponse;
    		if(sql) {
    			objSurveyresponse = await models.sequelize.surveyresponses.findOne({where: { date_entered: dateEntered }});
    			if (objSurveyresponse) {
    				objSurveyresponse = await models.sequelize.surveyresponses.update(updateSurveyresponse, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objSurveyresponse = await models.mongoose.surveyresponses.findOneAndUpdate({date_entered: dateEntered}, {$set: updateSurveyresponse}, {new: true});
    		}
    		return objSurveyresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyresponseByDateModified(dateModified, updateSurveyresponse) {
    	try {
    		let objSurveyresponse;
    		if(sql) {
    			objSurveyresponse = await models.sequelize.surveyresponses.findOne({where: { date_modified: dateModified }});
    			if (objSurveyresponse) {
    				objSurveyresponse = await models.sequelize.surveyresponses.update(updateSurveyresponse, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objSurveyresponse = await models.mongoose.surveyresponses.findOneAndUpdate({date_modified: dateModified}, {$set: updateSurveyresponse}, {new: true});
    		}
    		return objSurveyresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyresponseByModifiedUserId(modifiedUserId, updateSurveyresponse) {
    	try {
    		let objSurveyresponse;
    		if(sql) {
    			objSurveyresponse = await models.sequelize.surveyresponses.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objSurveyresponse) {
    				objSurveyresponse = await models.sequelize.surveyresponses.update(updateSurveyresponse, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objSurveyresponse = await models.mongoose.surveyresponses.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateSurveyresponse}, {new: true});
    		}
    		return objSurveyresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyresponseByCreatedBy(createdBy, updateSurveyresponse) {
    	try {
    		let objSurveyresponse;
    		if(sql) {
    			objSurveyresponse = await models.sequelize.surveyresponses.findOne({where: { created_by: createdBy }});
    			if (objSurveyresponse) {
    				objSurveyresponse = await models.sequelize.surveyresponses.update(updateSurveyresponse, { where: { created_by: createdBy } });
    			}
    		} else {
    			objSurveyresponse = await models.mongoose.surveyresponses.findOneAndUpdate({created_by: createdBy}, {$set: updateSurveyresponse}, {new: true});
    		}
    		return objSurveyresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyresponseByAssignedUserId(assignedUserId, updateSurveyresponse) {
    	try {
    		let objSurveyresponse;
    		if(sql) {
    			objSurveyresponse = await models.sequelize.surveyresponses.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objSurveyresponse) {
    				objSurveyresponse = await models.sequelize.surveyresponses.update(updateSurveyresponse, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objSurveyresponse = await models.mongoose.surveyresponses.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateSurveyresponse}, {new: true});
    		}
    		return objSurveyresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyresponseByAccountId(accountId, updateSurveyresponse) {
    	try {
    		let objSurveyresponse;
    		if(sql) {
    			objSurveyresponse = await models.sequelize.surveyresponses.findOne({where: { account_id: accountId }});
    			if (objSurveyresponse) {
    				objSurveyresponse = await models.sequelize.surveyresponses.update(updateSurveyresponse, { where: { account_id: accountId } });
    			}
    		} else {
    			objSurveyresponse = await models.mongoose.surveyresponses.findOneAndUpdate({account_id: accountId}, {$set: updateSurveyresponse}, {new: true});
    		}
    		return objSurveyresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyresponseByCampaignId(campaignId, updateSurveyresponse) {
    	try {
    		let objSurveyresponse;
    		if(sql) {
    			objSurveyresponse = await models.sequelize.surveyresponses.findOne({where: { campaign_id: campaignId }});
    			if (objSurveyresponse) {
    				objSurveyresponse = await models.sequelize.surveyresponses.update(updateSurveyresponse, { where: { campaign_id: campaignId } });
    			}
    		} else {
    			objSurveyresponse = await models.mongoose.surveyresponses.findOneAndUpdate({campaign_id: campaignId}, {$set: updateSurveyresponse}, {new: true});
    		}
    		return objSurveyresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyresponseByContactId(contactId, updateSurveyresponse) {
    	try {
    		let objSurveyresponse;
    		if(sql) {
    			objSurveyresponse = await models.sequelize.surveyresponses.findOne({where: { contact_id: contactId }});
    			if (objSurveyresponse) {
    				objSurveyresponse = await models.sequelize.surveyresponses.update(updateSurveyresponse, { where: { contact_id: contactId } });
    			}
    		} else {
    			objSurveyresponse = await models.mongoose.surveyresponses.findOneAndUpdate({contact_id: contactId}, {$set: updateSurveyresponse}, {new: true});
    		}
    		return objSurveyresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyresponseBySurveyId(surveyId, updateSurveyresponse) {
    	try {
    		let objSurveyresponse;
    		if(sql) {
    			objSurveyresponse = await models.sequelize.surveyresponses.findOne({where: { survey_id: surveyId }});
    			if (objSurveyresponse) {
    				objSurveyresponse = await models.sequelize.surveyresponses.update(updateSurveyresponse, { where: { survey_id: surveyId } });
    			}
    		} else {
    			objSurveyresponse = await models.mongoose.surveyresponses.findOneAndUpdate({survey_id: surveyId}, {$set: updateSurveyresponse}, {new: true});
    		}
    		return objSurveyresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = SurveyresponseService;
//</es-section>
