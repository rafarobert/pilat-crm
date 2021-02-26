/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:33 GMT-0400 (Bolivia Time)
 * Time: 0:22:33
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:33 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:33
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

class CallRescheduleService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllCallsReschedule(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.callsReschedule.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.callsReschedule.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllCallsReschedule(select = []) {
		try {
			if(sql) {
				return await models.sequelize.callsReschedule.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.callsReschedule.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addCallReschedule(newCallReschedule) {
		try {
			let objCallReschedule;
			if(util.PrimaryKeyTypeIsString(models.sequelize.callsReschedule.primaryKeys.id.type.toString())) {
			    newCallReschedule.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objCallReschedule = await models.sequelize.callsReschedule.create(newCallReschedule);
			} else {
				objCallReschedule = new models.mongoose.callsReschedule(newCallReschedule);
				await objCallReschedule.save();
			}
			return objCallReschedule;
		} catch (error) {
			throw error;
		}
	}

	static async updateCallReschedule(id, updateCallReschedule) {
		try {
			let objCallReschedule;
			if(sql) {
				objCallReschedule = await models.sequelize.callsReschedule.findOne({where: { id: util.Char(id) }});
				if (objCallReschedule) {
					await models.sequelize.callsReschedule.update(updateCallReschedule, { where: { id: util.Char(id) } });
					objCallReschedule = await models.sequelize.callsReschedule.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateCallReschedule._id;
				objCallReschedule = await models.mongoose.callsReschedule.findOneAndUpdate({id:id}, {$set: updateCallReschedule}, {new: true});
			}
			return objCallReschedule;
		} catch (error) {
			throw error;
		}
	}

	static async getACallReschedule(id, query) {
		try {
			let objCallReschedule;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objCallReschedule = await models.sequelize.callsReschedule.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objCallReschedule = await models.mongoose.callsReschedule.find({id:util.Char(id)}).select(query.select);
			}
			return objCallReschedule;
		} catch (error) {
			throw error;
		}
	}

	static async deleteCallReschedule(id) {
		try {
			let objCallReschedule;
			if(sql) {
				objCallReschedule = await models.sequelize.callsReschedule.findOne({ where: { id: util.Char(id) } });
				if (objCallReschedule) {
					await models.sequelize.callsReschedule.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objCallReschedule = await models.mongoose.callsReschedule.deleteOne({id:util.Char(id)});
			}
			return objCallReschedule;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objCallReschedule;
    		if(sql) {
    			objCallReschedule = await models.sequelize.callsReschedule.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objCallReschedule = await models.mongoose.callsReschedule.findOne({id: id});
    		}
    		return objCallReschedule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objCallReschedule;
    		if(sql) {
    			objCallReschedule = await models.sequelize.callsReschedule.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objCallReschedule = await models.mongoose.callsReschedule.findOne({deleted: deleted});
    		}
    		return objCallReschedule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objCallReschedule;
    		if(sql) {
    			objCallReschedule = await models.sequelize.callsReschedule.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objCallReschedule = await models.mongoose.callsReschedule.findOne({name: name});
    		}
    		return objCallReschedule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByReason(reason, query = {}) {
    	try {
    		let objCallReschedule;
    		if(sql) {
    			objCallReschedule = await models.sequelize.callsReschedule.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { reason: reason },
    			});
    		} else {
    			objCallReschedule = await models.mongoose.callsReschedule.findOne({reason: reason});
    		}
    		return objCallReschedule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objCallReschedule;
    		if(sql) {
    			objCallReschedule = await models.sequelize.callsReschedule.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objCallReschedule = await models.mongoose.callsReschedule.findOne({description: description});
    		}
    		return objCallReschedule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objCallReschedule;
    		if(sql) {
    			objCallReschedule = await models.sequelize.callsReschedule.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objCallReschedule = await models.mongoose.callsReschedule.findOne({date_entered: dateEntered});
    		}
    		return objCallReschedule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objCallReschedule;
    		if(sql) {
    			objCallReschedule = await models.sequelize.callsReschedule.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objCallReschedule = await models.mongoose.callsReschedule.findOne({date_modified: dateModified});
    		}
    		return objCallReschedule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objCallReschedule;
    		if(sql) {
    			objCallReschedule = await models.sequelize.callsReschedule.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objCallReschedule = await models.mongoose.callsReschedule.findOne({modified_user_id: modifiedUserId});
    		}
    		return objCallReschedule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objCallReschedule;
    		if(sql) {
    			objCallReschedule = await models.sequelize.callsReschedule.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objCallReschedule = await models.mongoose.callsReschedule.findOne({created_by: createdBy});
    		}
    		return objCallReschedule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objCallReschedule;
    		if(sql) {
    			objCallReschedule = await models.sequelize.callsReschedule.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objCallReschedule = await models.mongoose.callsReschedule.findOne({assigned_user_id: assignedUserId});
    		}
    		return objCallReschedule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCallId(callId, query = {}) {
    	try {
    		let objCallReschedule;
    		if(sql) {
    			objCallReschedule = await models.sequelize.callsReschedule.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { call_id: callId },
    			});
    		} else {
    			objCallReschedule = await models.mongoose.callsReschedule.findOne({call_id: callId});
    		}
    		return objCallReschedule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateCallRescheduleById(id, updateCallReschedule) {
    	try {
    		let objCallReschedule;
    		if(sql) {
    			objCallReschedule = await models.sequelize.callsReschedule.findOne({where: { id: id }});
    			if (objCallReschedule) {
    				objCallReschedule = await models.sequelize.callsReschedule.update(updateCallReschedule, { where: { id: id } });
    			}
    		} else {
    			objCallReschedule = await models.mongoose.callsReschedule.findOneAndUpdate({id: id}, {$set: updateCallReschedule}, {new: true});
    		}
    		return objCallReschedule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallRescheduleByDeleted(deleted, updateCallReschedule) {
    	try {
    		let objCallReschedule;
    		if(sql) {
    			objCallReschedule = await models.sequelize.callsReschedule.findOne({where: { deleted: deleted }});
    			if (objCallReschedule) {
    				objCallReschedule = await models.sequelize.callsReschedule.update(updateCallReschedule, { where: { deleted: deleted } });
    			}
    		} else {
    			objCallReschedule = await models.mongoose.callsReschedule.findOneAndUpdate({deleted: deleted}, {$set: updateCallReschedule}, {new: true});
    		}
    		return objCallReschedule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallRescheduleByName(name, updateCallReschedule) {
    	try {
    		let objCallReschedule;
    		if(sql) {
    			objCallReschedule = await models.sequelize.callsReschedule.findOne({where: { name: name }});
    			if (objCallReschedule) {
    				objCallReschedule = await models.sequelize.callsReschedule.update(updateCallReschedule, { where: { name: name } });
    			}
    		} else {
    			objCallReschedule = await models.mongoose.callsReschedule.findOneAndUpdate({name: name}, {$set: updateCallReschedule}, {new: true});
    		}
    		return objCallReschedule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallRescheduleByReason(reason, updateCallReschedule) {
    	try {
    		let objCallReschedule;
    		if(sql) {
    			objCallReschedule = await models.sequelize.callsReschedule.findOne({where: { reason: reason }});
    			if (objCallReschedule) {
    				objCallReschedule = await models.sequelize.callsReschedule.update(updateCallReschedule, { where: { reason: reason } });
    			}
    		} else {
    			objCallReschedule = await models.mongoose.callsReschedule.findOneAndUpdate({reason: reason}, {$set: updateCallReschedule}, {new: true});
    		}
    		return objCallReschedule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallRescheduleByDescription(description, updateCallReschedule) {
    	try {
    		let objCallReschedule;
    		if(sql) {
    			objCallReschedule = await models.sequelize.callsReschedule.findOne({where: { description: description }});
    			if (objCallReschedule) {
    				objCallReschedule = await models.sequelize.callsReschedule.update(updateCallReschedule, { where: { description: description } });
    			}
    		} else {
    			objCallReschedule = await models.mongoose.callsReschedule.findOneAndUpdate({description: description}, {$set: updateCallReschedule}, {new: true});
    		}
    		return objCallReschedule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallRescheduleByDateEntered(dateEntered, updateCallReschedule) {
    	try {
    		let objCallReschedule;
    		if(sql) {
    			objCallReschedule = await models.sequelize.callsReschedule.findOne({where: { date_entered: dateEntered }});
    			if (objCallReschedule) {
    				objCallReschedule = await models.sequelize.callsReschedule.update(updateCallReschedule, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objCallReschedule = await models.mongoose.callsReschedule.findOneAndUpdate({date_entered: dateEntered}, {$set: updateCallReschedule}, {new: true});
    		}
    		return objCallReschedule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallRescheduleByDateModified(dateModified, updateCallReschedule) {
    	try {
    		let objCallReschedule;
    		if(sql) {
    			objCallReschedule = await models.sequelize.callsReschedule.findOne({where: { date_modified: dateModified }});
    			if (objCallReschedule) {
    				objCallReschedule = await models.sequelize.callsReschedule.update(updateCallReschedule, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objCallReschedule = await models.mongoose.callsReschedule.findOneAndUpdate({date_modified: dateModified}, {$set: updateCallReschedule}, {new: true});
    		}
    		return objCallReschedule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallRescheduleByModifiedUserId(modifiedUserId, updateCallReschedule) {
    	try {
    		let objCallReschedule;
    		if(sql) {
    			objCallReschedule = await models.sequelize.callsReschedule.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objCallReschedule) {
    				objCallReschedule = await models.sequelize.callsReschedule.update(updateCallReschedule, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objCallReschedule = await models.mongoose.callsReschedule.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateCallReschedule}, {new: true});
    		}
    		return objCallReschedule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallRescheduleByCreatedBy(createdBy, updateCallReschedule) {
    	try {
    		let objCallReschedule;
    		if(sql) {
    			objCallReschedule = await models.sequelize.callsReschedule.findOne({where: { created_by: createdBy }});
    			if (objCallReschedule) {
    				objCallReschedule = await models.sequelize.callsReschedule.update(updateCallReschedule, { where: { created_by: createdBy } });
    			}
    		} else {
    			objCallReschedule = await models.mongoose.callsReschedule.findOneAndUpdate({created_by: createdBy}, {$set: updateCallReschedule}, {new: true});
    		}
    		return objCallReschedule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallRescheduleByAssignedUserId(assignedUserId, updateCallReschedule) {
    	try {
    		let objCallReschedule;
    		if(sql) {
    			objCallReschedule = await models.sequelize.callsReschedule.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objCallReschedule) {
    				objCallReschedule = await models.sequelize.callsReschedule.update(updateCallReschedule, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objCallReschedule = await models.mongoose.callsReschedule.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateCallReschedule}, {new: true});
    		}
    		return objCallReschedule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallRescheduleByCallId(callId, updateCallReschedule) {
    	try {
    		let objCallReschedule;
    		if(sql) {
    			objCallReschedule = await models.sequelize.callsReschedule.findOne({where: { call_id: callId }});
    			if (objCallReschedule) {
    				objCallReschedule = await models.sequelize.callsReschedule.update(updateCallReschedule, { where: { call_id: callId } });
    			}
    		} else {
    			objCallReschedule = await models.mongoose.callsReschedule.findOneAndUpdate({call_id: callId}, {$set: updateCallReschedule}, {new: true});
    		}
    		return objCallReschedule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = CallRescheduleService;
//</es-section>
