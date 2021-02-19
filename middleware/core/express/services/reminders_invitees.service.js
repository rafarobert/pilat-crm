/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:35 GMT-0400 (Bolivia Time)
 * Time: 18:38:35
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:35 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:35
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

class ReminderInviteeService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllRemindersInvitees(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.remindersInvitees.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.remindersInvitees.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllRemindersInvitees(select = []) {
		try {
			if(sql) {
				return await models.sequelize.remindersInvitees.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.remindersInvitees.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addReminderInvitee(newReminderInvitee) {
		try {
			let objReminderInvitee;
			if(util.PrimaryKeyTypeIsString(models.sequelize.remindersInvitees.primaryKeys.id.type.toString())) {
			    newReminderInvitee.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objReminderInvitee = await models.sequelize.remindersInvitees.create(newReminderInvitee);
			} else {
				objReminderInvitee = new models.mongoose.remindersInvitees(newReminderInvitee);
				await objReminderInvitee.save();
			}
			return objReminderInvitee;
		} catch (error) {
			throw error;
		}
	}

	static async updateReminderInvitee(id, updateReminderInvitee) {
		try {
			let objReminderInvitee;
			if(sql) {
				objReminderInvitee = await models.sequelize.remindersInvitees.findOne({where: { id: util.Char(id) }});
				if (objReminderInvitee) {
					await models.sequelize.remindersInvitees.update(updateReminderInvitee, { where: { id: util.Char(id) } });
					objReminderInvitee = await models.sequelize.remindersInvitees.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateReminderInvitee._id;
				objReminderInvitee = await models.mongoose.remindersInvitees.findOneAndUpdate({id:id}, {$set: updateReminderInvitee}, {new: true});
			}
			return objReminderInvitee;
		} catch (error) {
			throw error;
		}
	}

	static async getAReminderInvitee(id, query) {
		try {
			let objReminderInvitee;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objReminderInvitee = await models.sequelize.remindersInvitees.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objReminderInvitee = await models.mongoose.remindersInvitees.find({id:util.Char(id)}).select(query.select);
			}
			return objReminderInvitee;
		} catch (error) {
			throw error;
		}
	}

	static async deleteReminderInvitee(id) {
		try {
			let objReminderInvitee;
			if(sql) {
				objReminderInvitee = await models.sequelize.remindersInvitees.findOne({ where: { id: util.Char(id) } });
				if (objReminderInvitee) {
					await models.sequelize.remindersInvitees.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objReminderInvitee = await models.mongoose.remindersInvitees.deleteOne({id:util.Char(id)});
			}
			return objReminderInvitee;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objReminderInvitee;
    		if(sql) {
    			objReminderInvitee = await models.sequelize.remindersInvitees.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objReminderInvitee = await models.mongoose.remindersInvitees.findOne({id: id});
    		}
    		return objReminderInvitee;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objReminderInvitee;
    		if(sql) {
    			objReminderInvitee = await models.sequelize.remindersInvitees.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objReminderInvitee = await models.mongoose.remindersInvitees.findOne({deleted: deleted});
    		}
    		return objReminderInvitee;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objReminderInvitee;
    		if(sql) {
    			objReminderInvitee = await models.sequelize.remindersInvitees.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objReminderInvitee = await models.mongoose.remindersInvitees.findOne({name: name});
    		}
    		return objReminderInvitee;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRelatedInviteeModule(relatedInviteeModule, query = {}) {
    	try {
    		let objReminderInvitee;
    		if(sql) {
    			objReminderInvitee = await models.sequelize.remindersInvitees.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { related_invitee_module: relatedInviteeModule },
    			});
    		} else {
    			objReminderInvitee = await models.mongoose.remindersInvitees.findOne({related_invitee_module: relatedInviteeModule});
    		}
    		return objReminderInvitee;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objReminderInvitee;
    		if(sql) {
    			objReminderInvitee = await models.sequelize.remindersInvitees.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objReminderInvitee = await models.mongoose.remindersInvitees.findOne({description: description});
    		}
    		return objReminderInvitee;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objReminderInvitee;
    		if(sql) {
    			objReminderInvitee = await models.sequelize.remindersInvitees.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objReminderInvitee = await models.mongoose.remindersInvitees.findOne({date_entered: dateEntered});
    		}
    		return objReminderInvitee;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objReminderInvitee;
    		if(sql) {
    			objReminderInvitee = await models.sequelize.remindersInvitees.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objReminderInvitee = await models.mongoose.remindersInvitees.findOne({date_modified: dateModified});
    		}
    		return objReminderInvitee;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objReminderInvitee;
    		if(sql) {
    			objReminderInvitee = await models.sequelize.remindersInvitees.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objReminderInvitee = await models.mongoose.remindersInvitees.findOne({modified_user_id: modifiedUserId});
    		}
    		return objReminderInvitee;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objReminderInvitee;
    		if(sql) {
    			objReminderInvitee = await models.sequelize.remindersInvitees.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objReminderInvitee = await models.mongoose.remindersInvitees.findOne({created_by: createdBy});
    		}
    		return objReminderInvitee;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objReminderInvitee;
    		if(sql) {
    			objReminderInvitee = await models.sequelize.remindersInvitees.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objReminderInvitee = await models.mongoose.remindersInvitees.findOne({assigned_user_id: assignedUserId});
    		}
    		return objReminderInvitee;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByReminderId(reminderId, query = {}) {
    	try {
    		let objReminderInvitee;
    		if(sql) {
    			objReminderInvitee = await models.sequelize.remindersInvitees.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { reminder_id: reminderId },
    			});
    		} else {
    			objReminderInvitee = await models.mongoose.remindersInvitees.findOne({reminder_id: reminderId});
    		}
    		return objReminderInvitee;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRelatedInviteeModuleId(relatedInviteeModuleId, query = {}) {
    	try {
    		let objReminderInvitee;
    		if(sql) {
    			objReminderInvitee = await models.sequelize.remindersInvitees.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { related_invitee_module_id: relatedInviteeModuleId },
    			});
    		} else {
    			objReminderInvitee = await models.mongoose.remindersInvitees.findOne({related_invitee_module_id: relatedInviteeModuleId});
    		}
    		return objReminderInvitee;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateReminderInviteeById(id, updateReminderInvitee) {
    	try {
    		let objReminderInvitee;
    		if(sql) {
    			objReminderInvitee = await models.sequelize.remindersInvitees.findOne({where: { id: id }});
    			if (objReminderInvitee) {
    				objReminderInvitee = await models.sequelize.remindersInvitees.update(updateReminderInvitee, { where: { id: id } });
    			}
    		} else {
    			objReminderInvitee = await models.mongoose.remindersInvitees.findOneAndUpdate({id: id}, {$set: updateReminderInvitee}, {new: true});
    		}
    		return objReminderInvitee;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateReminderInviteeByDeleted(deleted, updateReminderInvitee) {
    	try {
    		let objReminderInvitee;
    		if(sql) {
    			objReminderInvitee = await models.sequelize.remindersInvitees.findOne({where: { deleted: deleted }});
    			if (objReminderInvitee) {
    				objReminderInvitee = await models.sequelize.remindersInvitees.update(updateReminderInvitee, { where: { deleted: deleted } });
    			}
    		} else {
    			objReminderInvitee = await models.mongoose.remindersInvitees.findOneAndUpdate({deleted: deleted}, {$set: updateReminderInvitee}, {new: true});
    		}
    		return objReminderInvitee;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateReminderInviteeByName(name, updateReminderInvitee) {
    	try {
    		let objReminderInvitee;
    		if(sql) {
    			objReminderInvitee = await models.sequelize.remindersInvitees.findOne({where: { name: name }});
    			if (objReminderInvitee) {
    				objReminderInvitee = await models.sequelize.remindersInvitees.update(updateReminderInvitee, { where: { name: name } });
    			}
    		} else {
    			objReminderInvitee = await models.mongoose.remindersInvitees.findOneAndUpdate({name: name}, {$set: updateReminderInvitee}, {new: true});
    		}
    		return objReminderInvitee;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateReminderInviteeByRelatedInviteeModule(relatedInviteeModule, updateReminderInvitee) {
    	try {
    		let objReminderInvitee;
    		if(sql) {
    			objReminderInvitee = await models.sequelize.remindersInvitees.findOne({where: { related_invitee_module: relatedInviteeModule }});
    			if (objReminderInvitee) {
    				objReminderInvitee = await models.sequelize.remindersInvitees.update(updateReminderInvitee, { where: { related_invitee_module: relatedInviteeModule } });
    			}
    		} else {
    			objReminderInvitee = await models.mongoose.remindersInvitees.findOneAndUpdate({related_invitee_module: relatedInviteeModule}, {$set: updateReminderInvitee}, {new: true});
    		}
    		return objReminderInvitee;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateReminderInviteeByDescription(description, updateReminderInvitee) {
    	try {
    		let objReminderInvitee;
    		if(sql) {
    			objReminderInvitee = await models.sequelize.remindersInvitees.findOne({where: { description: description }});
    			if (objReminderInvitee) {
    				objReminderInvitee = await models.sequelize.remindersInvitees.update(updateReminderInvitee, { where: { description: description } });
    			}
    		} else {
    			objReminderInvitee = await models.mongoose.remindersInvitees.findOneAndUpdate({description: description}, {$set: updateReminderInvitee}, {new: true});
    		}
    		return objReminderInvitee;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateReminderInviteeByDateEntered(dateEntered, updateReminderInvitee) {
    	try {
    		let objReminderInvitee;
    		if(sql) {
    			objReminderInvitee = await models.sequelize.remindersInvitees.findOne({where: { date_entered: dateEntered }});
    			if (objReminderInvitee) {
    				objReminderInvitee = await models.sequelize.remindersInvitees.update(updateReminderInvitee, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objReminderInvitee = await models.mongoose.remindersInvitees.findOneAndUpdate({date_entered: dateEntered}, {$set: updateReminderInvitee}, {new: true});
    		}
    		return objReminderInvitee;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateReminderInviteeByDateModified(dateModified, updateReminderInvitee) {
    	try {
    		let objReminderInvitee;
    		if(sql) {
    			objReminderInvitee = await models.sequelize.remindersInvitees.findOne({where: { date_modified: dateModified }});
    			if (objReminderInvitee) {
    				objReminderInvitee = await models.sequelize.remindersInvitees.update(updateReminderInvitee, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objReminderInvitee = await models.mongoose.remindersInvitees.findOneAndUpdate({date_modified: dateModified}, {$set: updateReminderInvitee}, {new: true});
    		}
    		return objReminderInvitee;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateReminderInviteeByModifiedUserId(modifiedUserId, updateReminderInvitee) {
    	try {
    		let objReminderInvitee;
    		if(sql) {
    			objReminderInvitee = await models.sequelize.remindersInvitees.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objReminderInvitee) {
    				objReminderInvitee = await models.sequelize.remindersInvitees.update(updateReminderInvitee, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objReminderInvitee = await models.mongoose.remindersInvitees.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateReminderInvitee}, {new: true});
    		}
    		return objReminderInvitee;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateReminderInviteeByCreatedBy(createdBy, updateReminderInvitee) {
    	try {
    		let objReminderInvitee;
    		if(sql) {
    			objReminderInvitee = await models.sequelize.remindersInvitees.findOne({where: { created_by: createdBy }});
    			if (objReminderInvitee) {
    				objReminderInvitee = await models.sequelize.remindersInvitees.update(updateReminderInvitee, { where: { created_by: createdBy } });
    			}
    		} else {
    			objReminderInvitee = await models.mongoose.remindersInvitees.findOneAndUpdate({created_by: createdBy}, {$set: updateReminderInvitee}, {new: true});
    		}
    		return objReminderInvitee;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateReminderInviteeByAssignedUserId(assignedUserId, updateReminderInvitee) {
    	try {
    		let objReminderInvitee;
    		if(sql) {
    			objReminderInvitee = await models.sequelize.remindersInvitees.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objReminderInvitee) {
    				objReminderInvitee = await models.sequelize.remindersInvitees.update(updateReminderInvitee, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objReminderInvitee = await models.mongoose.remindersInvitees.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateReminderInvitee}, {new: true});
    		}
    		return objReminderInvitee;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateReminderInviteeByReminderId(reminderId, updateReminderInvitee) {
    	try {
    		let objReminderInvitee;
    		if(sql) {
    			objReminderInvitee = await models.sequelize.remindersInvitees.findOne({where: { reminder_id: reminderId }});
    			if (objReminderInvitee) {
    				objReminderInvitee = await models.sequelize.remindersInvitees.update(updateReminderInvitee, { where: { reminder_id: reminderId } });
    			}
    		} else {
    			objReminderInvitee = await models.mongoose.remindersInvitees.findOneAndUpdate({reminder_id: reminderId}, {$set: updateReminderInvitee}, {new: true});
    		}
    		return objReminderInvitee;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateReminderInviteeByRelatedInviteeModuleId(relatedInviteeModuleId, updateReminderInvitee) {
    	try {
    		let objReminderInvitee;
    		if(sql) {
    			objReminderInvitee = await models.sequelize.remindersInvitees.findOne({where: { related_invitee_module_id: relatedInviteeModuleId }});
    			if (objReminderInvitee) {
    				objReminderInvitee = await models.sequelize.remindersInvitees.update(updateReminderInvitee, { where: { related_invitee_module_id: relatedInviteeModuleId } });
    			}
    		} else {
    			objReminderInvitee = await models.mongoose.remindersInvitees.findOneAndUpdate({related_invitee_module_id: relatedInviteeModuleId}, {$set: updateReminderInvitee}, {new: true});
    		}
    		return objReminderInvitee;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = ReminderInviteeService;
//</es-section>
