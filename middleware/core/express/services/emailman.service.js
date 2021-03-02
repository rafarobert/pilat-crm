/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:44 GMT-0400 (Bolivia Time)
 * Time: 14:0:44
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:44 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:44
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

class EmailmanService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllEmailman(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.emailman.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.emailman.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllEmailman(select = []) {
		try {
			if(sql) {
				return await models.sequelize.emailman.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.emailman.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addEmailman(newEmailman) {
		try {
			let objEmailman;
			if(util.PrimaryKeyTypeIsString(models.sequelize.emailman.primaryKeys.id.type.toString())) {
			    newEmailman.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objEmailman = await models.sequelize.emailman.create(newEmailman);
			} else {
				objEmailman = new models.mongoose.emailman(newEmailman);
				await objEmailman.save();
			}
			return objEmailman;
		} catch (error) {
			throw error;
		}
	}

	static async updateEmailman(id, updateEmailman) {
		try {
			let objEmailman;
			if(sql) {
				objEmailman = await models.sequelize.emailman.findOne({where: { id: util.Integer(id) }});
				if (objEmailman) {
					await models.sequelize.emailman.update(updateEmailman, { where: { id: util.Integer(id) } });
					objEmailman = await models.sequelize.emailman.findOne({where: { id: util.Integer(id) }});
				}
			} else {
				delete updateEmailman._id;
				objEmailman = await models.mongoose.emailman.findOneAndUpdate({id:id}, {$set: updateEmailman}, {new: true});
			}
			return objEmailman;
		} catch (error) {
			throw error;
		}
	}

	static async getAEmailman(id, query) {
		try {
			let objEmailman;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objEmailman = await models.sequelize.emailman.findOne({
					    where: where && !where.where ? where : { id: util.Integer(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objEmailman = await models.mongoose.emailman.find({id:util.Integer(id)}).select(query.select);
			}
			return objEmailman;
		} catch (error) {
			throw error;
		}
	}

	static async deleteEmailman(id) {
		try {
			let objEmailman;
			if(sql) {
				objEmailman = await models.sequelize.emailman.findOne({ where: { id: util.Integer(id) } });
				if (objEmailman) {
					await models.sequelize.emailman.destroy({where: { id: util.Integer(id) }});
				}
			} else {
				objEmailman = await models.mongoose.emailman.deleteOne({id:util.Integer(id)});
			}
			return objEmailman;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objEmailman;
    		if(sql) {
    			objEmailman = await models.sequelize.emailman.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objEmailman = await models.mongoose.emailman.findOne({id: id});
    		}
    		return objEmailman;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByInQueue(inQueue, query = {}) {
    	try {
    		let objEmailman;
    		if(sql) {
    			objEmailman = await models.sequelize.emailman.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { in_queue: inQueue },
    			});
    		} else {
    			objEmailman = await models.mongoose.emailman.findOne({in_queue: inQueue});
    		}
    		return objEmailman;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objEmailman;
    		if(sql) {
    			objEmailman = await models.sequelize.emailman.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objEmailman = await models.mongoose.emailman.findOne({deleted: deleted});
    		}
    		return objEmailman;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRelatedConfirmOptIn(relatedConfirmOptIn, query = {}) {
    	try {
    		let objEmailman;
    		if(sql) {
    			objEmailman = await models.sequelize.emailman.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { related_confirm_opt_in: relatedConfirmOptIn },
    			});
    		} else {
    			objEmailman = await models.mongoose.emailman.findOne({related_confirm_opt_in: relatedConfirmOptIn});
    		}
    		return objEmailman;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySendAttempts(sendAttempts, query = {}) {
    	try {
    		let objEmailman;
    		if(sql) {
    			objEmailman = await models.sequelize.emailman.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { send_attempts: sendAttempts },
    			});
    		} else {
    			objEmailman = await models.mongoose.emailman.findOne({send_attempts: sendAttempts});
    		}
    		return objEmailman;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRelatedType(relatedType, query = {}) {
    	try {
    		let objEmailman;
    		if(sql) {
    			objEmailman = await models.sequelize.emailman.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { related_type: relatedType },
    			});
    		} else {
    			objEmailman = await models.mongoose.emailman.findOne({related_type: relatedType});
    		}
    		return objEmailman;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objEmailman;
    		if(sql) {
    			objEmailman = await models.sequelize.emailman.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objEmailman = await models.mongoose.emailman.findOne({date_entered: dateEntered});
    		}
    		return objEmailman;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objEmailman;
    		if(sql) {
    			objEmailman = await models.sequelize.emailman.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objEmailman = await models.mongoose.emailman.findOne({date_modified: dateModified});
    		}
    		return objEmailman;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySendDateTime(sendDateTime, query = {}) {
    	try {
    		let objEmailman;
    		if(sql) {
    			objEmailman = await models.sequelize.emailman.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { send_date_time: sendDateTime },
    			});
    		} else {
    			objEmailman = await models.mongoose.emailman.findOne({send_date_time: sendDateTime});
    		}
    		return objEmailman;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByInQueueDate(inQueueDate, query = {}) {
    	try {
    		let objEmailman;
    		if(sql) {
    			objEmailman = await models.sequelize.emailman.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { in_queue_date: inQueueDate },
    			});
    		} else {
    			objEmailman = await models.mongoose.emailman.findOne({in_queue_date: inQueueDate});
    		}
    		return objEmailman;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUserId(userId, query = {}) {
    	try {
    		let objEmailman;
    		if(sql) {
    			objEmailman = await models.sequelize.emailman.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { user_id: userId },
    			});
    		} else {
    			objEmailman = await models.mongoose.emailman.findOne({user_id: userId});
    		}
    		return objEmailman;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCampaignId(campaignId, query = {}) {
    	try {
    		let objEmailman;
    		if(sql) {
    			objEmailman = await models.sequelize.emailman.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { campaign_id: campaignId },
    			});
    		} else {
    			objEmailman = await models.mongoose.emailman.findOne({campaign_id: campaignId});
    		}
    		return objEmailman;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMarketingId(marketingId, query = {}) {
    	try {
    		let objEmailman;
    		if(sql) {
    			objEmailman = await models.sequelize.emailman.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { marketing_id: marketingId },
    			});
    		} else {
    			objEmailman = await models.mongoose.emailman.findOne({marketing_id: marketingId});
    		}
    		return objEmailman;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByListId(listId, query = {}) {
    	try {
    		let objEmailman;
    		if(sql) {
    			objEmailman = await models.sequelize.emailman.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { list_id: listId },
    			});
    		} else {
    			objEmailman = await models.mongoose.emailman.findOne({list_id: listId});
    		}
    		return objEmailman;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objEmailman;
    		if(sql) {
    			objEmailman = await models.sequelize.emailman.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objEmailman = await models.mongoose.emailman.findOne({modified_user_id: modifiedUserId});
    		}
    		return objEmailman;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRelatedId(relatedId, query = {}) {
    	try {
    		let objEmailman;
    		if(sql) {
    			objEmailman = await models.sequelize.emailman.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { related_id: relatedId },
    			});
    		} else {
    			objEmailman = await models.mongoose.emailman.findOne({related_id: relatedId});
    		}
    		return objEmailman;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateEmailmanById(id, updateEmailman) {
    	try {
    		let objEmailman;
    		if(sql) {
    			objEmailman = await models.sequelize.emailman.findOne({where: { id: id }});
    			if (objEmailman) {
    				objEmailman = await models.sequelize.emailman.update(updateEmailman, { where: { id: id } });
    			}
    		} else {
    			objEmailman = await models.mongoose.emailman.findOneAndUpdate({id: id}, {$set: updateEmailman}, {new: true});
    		}
    		return objEmailman;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailmanByInQueue(inQueue, updateEmailman) {
    	try {
    		let objEmailman;
    		if(sql) {
    			objEmailman = await models.sequelize.emailman.findOne({where: { in_queue: inQueue }});
    			if (objEmailman) {
    				objEmailman = await models.sequelize.emailman.update(updateEmailman, { where: { in_queue: inQueue } });
    			}
    		} else {
    			objEmailman = await models.mongoose.emailman.findOneAndUpdate({in_queue: inQueue}, {$set: updateEmailman}, {new: true});
    		}
    		return objEmailman;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailmanByDeleted(deleted, updateEmailman) {
    	try {
    		let objEmailman;
    		if(sql) {
    			objEmailman = await models.sequelize.emailman.findOne({where: { deleted: deleted }});
    			if (objEmailman) {
    				objEmailman = await models.sequelize.emailman.update(updateEmailman, { where: { deleted: deleted } });
    			}
    		} else {
    			objEmailman = await models.mongoose.emailman.findOneAndUpdate({deleted: deleted}, {$set: updateEmailman}, {new: true});
    		}
    		return objEmailman;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailmanByRelatedConfirmOptIn(relatedConfirmOptIn, updateEmailman) {
    	try {
    		let objEmailman;
    		if(sql) {
    			objEmailman = await models.sequelize.emailman.findOne({where: { related_confirm_opt_in: relatedConfirmOptIn }});
    			if (objEmailman) {
    				objEmailman = await models.sequelize.emailman.update(updateEmailman, { where: { related_confirm_opt_in: relatedConfirmOptIn } });
    			}
    		} else {
    			objEmailman = await models.mongoose.emailman.findOneAndUpdate({related_confirm_opt_in: relatedConfirmOptIn}, {$set: updateEmailman}, {new: true});
    		}
    		return objEmailman;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailmanBySendAttempts(sendAttempts, updateEmailman) {
    	try {
    		let objEmailman;
    		if(sql) {
    			objEmailman = await models.sequelize.emailman.findOne({where: { send_attempts: sendAttempts }});
    			if (objEmailman) {
    				objEmailman = await models.sequelize.emailman.update(updateEmailman, { where: { send_attempts: sendAttempts } });
    			}
    		} else {
    			objEmailman = await models.mongoose.emailman.findOneAndUpdate({send_attempts: sendAttempts}, {$set: updateEmailman}, {new: true});
    		}
    		return objEmailman;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailmanByRelatedType(relatedType, updateEmailman) {
    	try {
    		let objEmailman;
    		if(sql) {
    			objEmailman = await models.sequelize.emailman.findOne({where: { related_type: relatedType }});
    			if (objEmailman) {
    				objEmailman = await models.sequelize.emailman.update(updateEmailman, { where: { related_type: relatedType } });
    			}
    		} else {
    			objEmailman = await models.mongoose.emailman.findOneAndUpdate({related_type: relatedType}, {$set: updateEmailman}, {new: true});
    		}
    		return objEmailman;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailmanByDateEntered(dateEntered, updateEmailman) {
    	try {
    		let objEmailman;
    		if(sql) {
    			objEmailman = await models.sequelize.emailman.findOne({where: { date_entered: dateEntered }});
    			if (objEmailman) {
    				objEmailman = await models.sequelize.emailman.update(updateEmailman, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objEmailman = await models.mongoose.emailman.findOneAndUpdate({date_entered: dateEntered}, {$set: updateEmailman}, {new: true});
    		}
    		return objEmailman;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailmanByDateModified(dateModified, updateEmailman) {
    	try {
    		let objEmailman;
    		if(sql) {
    			objEmailman = await models.sequelize.emailman.findOne({where: { date_modified: dateModified }});
    			if (objEmailman) {
    				objEmailman = await models.sequelize.emailman.update(updateEmailman, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objEmailman = await models.mongoose.emailman.findOneAndUpdate({date_modified: dateModified}, {$set: updateEmailman}, {new: true});
    		}
    		return objEmailman;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailmanBySendDateTime(sendDateTime, updateEmailman) {
    	try {
    		let objEmailman;
    		if(sql) {
    			objEmailman = await models.sequelize.emailman.findOne({where: { send_date_time: sendDateTime }});
    			if (objEmailman) {
    				objEmailman = await models.sequelize.emailman.update(updateEmailman, { where: { send_date_time: sendDateTime } });
    			}
    		} else {
    			objEmailman = await models.mongoose.emailman.findOneAndUpdate({send_date_time: sendDateTime}, {$set: updateEmailman}, {new: true});
    		}
    		return objEmailman;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailmanByInQueueDate(inQueueDate, updateEmailman) {
    	try {
    		let objEmailman;
    		if(sql) {
    			objEmailman = await models.sequelize.emailman.findOne({where: { in_queue_date: inQueueDate }});
    			if (objEmailman) {
    				objEmailman = await models.sequelize.emailman.update(updateEmailman, { where: { in_queue_date: inQueueDate } });
    			}
    		} else {
    			objEmailman = await models.mongoose.emailman.findOneAndUpdate({in_queue_date: inQueueDate}, {$set: updateEmailman}, {new: true});
    		}
    		return objEmailman;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailmanByUserId(userId, updateEmailman) {
    	try {
    		let objEmailman;
    		if(sql) {
    			objEmailman = await models.sequelize.emailman.findOne({where: { user_id: userId }});
    			if (objEmailman) {
    				objEmailman = await models.sequelize.emailman.update(updateEmailman, { where: { user_id: userId } });
    			}
    		} else {
    			objEmailman = await models.mongoose.emailman.findOneAndUpdate({user_id: userId}, {$set: updateEmailman}, {new: true});
    		}
    		return objEmailman;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailmanByCampaignId(campaignId, updateEmailman) {
    	try {
    		let objEmailman;
    		if(sql) {
    			objEmailman = await models.sequelize.emailman.findOne({where: { campaign_id: campaignId }});
    			if (objEmailman) {
    				objEmailman = await models.sequelize.emailman.update(updateEmailman, { where: { campaign_id: campaignId } });
    			}
    		} else {
    			objEmailman = await models.mongoose.emailman.findOneAndUpdate({campaign_id: campaignId}, {$set: updateEmailman}, {new: true});
    		}
    		return objEmailman;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailmanByMarketingId(marketingId, updateEmailman) {
    	try {
    		let objEmailman;
    		if(sql) {
    			objEmailman = await models.sequelize.emailman.findOne({where: { marketing_id: marketingId }});
    			if (objEmailman) {
    				objEmailman = await models.sequelize.emailman.update(updateEmailman, { where: { marketing_id: marketingId } });
    			}
    		} else {
    			objEmailman = await models.mongoose.emailman.findOneAndUpdate({marketing_id: marketingId}, {$set: updateEmailman}, {new: true});
    		}
    		return objEmailman;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailmanByListId(listId, updateEmailman) {
    	try {
    		let objEmailman;
    		if(sql) {
    			objEmailman = await models.sequelize.emailman.findOne({where: { list_id: listId }});
    			if (objEmailman) {
    				objEmailman = await models.sequelize.emailman.update(updateEmailman, { where: { list_id: listId } });
    			}
    		} else {
    			objEmailman = await models.mongoose.emailman.findOneAndUpdate({list_id: listId}, {$set: updateEmailman}, {new: true});
    		}
    		return objEmailman;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailmanByModifiedUserId(modifiedUserId, updateEmailman) {
    	try {
    		let objEmailman;
    		if(sql) {
    			objEmailman = await models.sequelize.emailman.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objEmailman) {
    				objEmailman = await models.sequelize.emailman.update(updateEmailman, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objEmailman = await models.mongoose.emailman.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateEmailman}, {new: true});
    		}
    		return objEmailman;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailmanByRelatedId(relatedId, updateEmailman) {
    	try {
    		let objEmailman;
    		if(sql) {
    			objEmailman = await models.sequelize.emailman.findOne({where: { related_id: relatedId }});
    			if (objEmailman) {
    				objEmailman = await models.sequelize.emailman.update(updateEmailman, { where: { related_id: relatedId } });
    			}
    		} else {
    			objEmailman = await models.mongoose.emailman.findOneAndUpdate({related_id: relatedId}, {$set: updateEmailman}, {new: true});
    		}
    		return objEmailman;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = EmailmanService;
//</es-section>
