/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:31 GMT-0400 (Bolivia Time)
 * Time: 14:0:31
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:31 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:31
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

class CallService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllCalls(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.calls.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.calls.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllCalls(select = []) {
		try {
			if(sql) {
				return await models.sequelize.calls.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.calls.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addCall(newCall) {
		try {
			let objCall;
			if(util.PrimaryKeyTypeIsString(models.sequelize.calls.primaryKeys.id.type.toString())) {
			    newCall.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objCall = await models.sequelize.calls.create(newCall);
			} else {
				objCall = new models.mongoose.calls(newCall);
				await objCall.save();
			}
			return objCall;
		} catch (error) {
			throw error;
		}
	}

	static async updateCall(id, updateCall) {
		try {
			let objCall;
			if(sql) {
				objCall = await models.sequelize.calls.findOne({where: { id: util.Char(id) }});
				if (objCall) {
					await models.sequelize.calls.update(updateCall, { where: { id: util.Char(id) } });
					objCall = await models.sequelize.calls.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateCall._id;
				objCall = await models.mongoose.calls.findOneAndUpdate({id:id}, {$set: updateCall}, {new: true});
			}
			return objCall;
		} catch (error) {
			throw error;
		}
	}

	static async getACall(id, query) {
		try {
			let objCall;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objCall = await models.sequelize.calls.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objCall = await models.mongoose.calls.find({id:util.Char(id)}).select(query.select);
			}
			return objCall;
		} catch (error) {
			throw error;
		}
	}

	static async deleteCall(id) {
		try {
			let objCall;
			if(sql) {
				objCall = await models.sequelize.calls.findOne({ where: { id: util.Char(id) } });
				if (objCall) {
					await models.sequelize.calls.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objCall = await models.mongoose.calls.deleteOne({id:util.Char(id)});
			}
			return objCall;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objCall = await models.mongoose.calls.findOne({id: id});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objCall = await models.mongoose.calls.findOne({deleted: deleted});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByEmailReminderSent(emailReminderSent, query = {}) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { email_reminder_sent: emailReminderSent },
    			});
    		} else {
    			objCall = await models.mongoose.calls.findOne({email_reminder_sent: emailReminderSent});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDurationHours(durationHours, query = {}) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { duration_hours: durationHours },
    			});
    		} else {
    			objCall = await models.mongoose.calls.findOne({duration_hours: durationHours});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDurationMinutes(durationMinutes, query = {}) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { duration_minutes: durationMinutes },
    			});
    		} else {
    			objCall = await models.mongoose.calls.findOne({duration_minutes: durationMinutes});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByReminderTime(reminderTime, query = {}) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { reminder_time: reminderTime },
    			});
    		} else {
    			objCall = await models.mongoose.calls.findOne({reminder_time: reminderTime});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByEmailReminderTime(emailReminderTime, query = {}) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { email_reminder_time: emailReminderTime },
    			});
    		} else {
    			objCall = await models.mongoose.calls.findOne({email_reminder_time: emailReminderTime});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRepeatInterval(repeatInterval, query = {}) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { repeat_interval: repeatInterval },
    			});
    		} else {
    			objCall = await models.mongoose.calls.findOne({repeat_interval: repeatInterval});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRepeatCount(repeatCount, query = {}) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { repeat_count: repeatCount },
    			});
    		} else {
    			objCall = await models.mongoose.calls.findOne({repeat_count: repeatCount});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objCall = await models.mongoose.calls.findOne({name: name});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentType(parentType, query = {}) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_type: parentType },
    			});
    		} else {
    			objCall = await models.mongoose.calls.findOne({parent_type: parentType});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByStatus(status, query = {}) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { status: status },
    			});
    		} else {
    			objCall = await models.mongoose.calls.findOne({status: status});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDirection(direction, query = {}) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { direction: direction },
    			});
    		} else {
    			objCall = await models.mongoose.calls.findOne({direction: direction});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByOutlookId(outlookId, query = {}) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { outlook_id: outlookId },
    			});
    		} else {
    			objCall = await models.mongoose.calls.findOne({outlook_id: outlookId});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRepeatType(repeatType, query = {}) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { repeat_type: repeatType },
    			});
    		} else {
    			objCall = await models.mongoose.calls.findOne({repeat_type: repeatType});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRepeatDow(repeatDow, query = {}) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { repeat_dow: repeatDow },
    			});
    		} else {
    			objCall = await models.mongoose.calls.findOne({repeat_dow: repeatDow});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRecurringSource(recurringSource, query = {}) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { recurring_source: recurringSource },
    			});
    		} else {
    			objCall = await models.mongoose.calls.findOne({recurring_source: recurringSource});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objCall = await models.mongoose.calls.findOne({description: description});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objCall = await models.mongoose.calls.findOne({date_entered: dateEntered});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objCall = await models.mongoose.calls.findOne({date_modified: dateModified});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateStart(dateStart, query = {}) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_start: dateStart },
    			});
    		} else {
    			objCall = await models.mongoose.calls.findOne({date_start: dateStart});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEnd(dateEnd, query = {}) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_end: dateEnd },
    			});
    		} else {
    			objCall = await models.mongoose.calls.findOne({date_end: dateEnd});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRepeatUntil(repeatUntil, query = {}) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { repeat_until: repeatUntil },
    			});
    		} else {
    			objCall = await models.mongoose.calls.findOne({repeat_until: repeatUntil});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objCall = await models.mongoose.calls.findOne({modified_user_id: modifiedUserId});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objCall = await models.mongoose.calls.findOne({created_by: createdBy});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objCall = await models.mongoose.calls.findOne({assigned_user_id: assignedUserId});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objCall = await models.mongoose.calls.findOne({parent_id: parentId});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRepeatParentId(repeatParentId, query = {}) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { repeat_parent_id: repeatParentId },
    			});
    		} else {
    			objCall = await models.mongoose.calls.findOne({repeat_parent_id: repeatParentId});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateCallById(id, updateCall) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({where: { id: id }});
    			if (objCall) {
    				objCall = await models.sequelize.calls.update(updateCall, { where: { id: id } });
    			}
    		} else {
    			objCall = await models.mongoose.calls.findOneAndUpdate({id: id}, {$set: updateCall}, {new: true});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallByDeleted(deleted, updateCall) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({where: { deleted: deleted }});
    			if (objCall) {
    				objCall = await models.sequelize.calls.update(updateCall, { where: { deleted: deleted } });
    			}
    		} else {
    			objCall = await models.mongoose.calls.findOneAndUpdate({deleted: deleted}, {$set: updateCall}, {new: true});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallByEmailReminderSent(emailReminderSent, updateCall) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({where: { email_reminder_sent: emailReminderSent }});
    			if (objCall) {
    				objCall = await models.sequelize.calls.update(updateCall, { where: { email_reminder_sent: emailReminderSent } });
    			}
    		} else {
    			objCall = await models.mongoose.calls.findOneAndUpdate({email_reminder_sent: emailReminderSent}, {$set: updateCall}, {new: true});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallByDurationHours(durationHours, updateCall) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({where: { duration_hours: durationHours }});
    			if (objCall) {
    				objCall = await models.sequelize.calls.update(updateCall, { where: { duration_hours: durationHours } });
    			}
    		} else {
    			objCall = await models.mongoose.calls.findOneAndUpdate({duration_hours: durationHours}, {$set: updateCall}, {new: true});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallByDurationMinutes(durationMinutes, updateCall) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({where: { duration_minutes: durationMinutes }});
    			if (objCall) {
    				objCall = await models.sequelize.calls.update(updateCall, { where: { duration_minutes: durationMinutes } });
    			}
    		} else {
    			objCall = await models.mongoose.calls.findOneAndUpdate({duration_minutes: durationMinutes}, {$set: updateCall}, {new: true});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallByReminderTime(reminderTime, updateCall) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({where: { reminder_time: reminderTime }});
    			if (objCall) {
    				objCall = await models.sequelize.calls.update(updateCall, { where: { reminder_time: reminderTime } });
    			}
    		} else {
    			objCall = await models.mongoose.calls.findOneAndUpdate({reminder_time: reminderTime}, {$set: updateCall}, {new: true});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallByEmailReminderTime(emailReminderTime, updateCall) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({where: { email_reminder_time: emailReminderTime }});
    			if (objCall) {
    				objCall = await models.sequelize.calls.update(updateCall, { where: { email_reminder_time: emailReminderTime } });
    			}
    		} else {
    			objCall = await models.mongoose.calls.findOneAndUpdate({email_reminder_time: emailReminderTime}, {$set: updateCall}, {new: true});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallByRepeatInterval(repeatInterval, updateCall) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({where: { repeat_interval: repeatInterval }});
    			if (objCall) {
    				objCall = await models.sequelize.calls.update(updateCall, { where: { repeat_interval: repeatInterval } });
    			}
    		} else {
    			objCall = await models.mongoose.calls.findOneAndUpdate({repeat_interval: repeatInterval}, {$set: updateCall}, {new: true});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallByRepeatCount(repeatCount, updateCall) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({where: { repeat_count: repeatCount }});
    			if (objCall) {
    				objCall = await models.sequelize.calls.update(updateCall, { where: { repeat_count: repeatCount } });
    			}
    		} else {
    			objCall = await models.mongoose.calls.findOneAndUpdate({repeat_count: repeatCount}, {$set: updateCall}, {new: true});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallByName(name, updateCall) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({where: { name: name }});
    			if (objCall) {
    				objCall = await models.sequelize.calls.update(updateCall, { where: { name: name } });
    			}
    		} else {
    			objCall = await models.mongoose.calls.findOneAndUpdate({name: name}, {$set: updateCall}, {new: true});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallByParentType(parentType, updateCall) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({where: { parent_type: parentType }});
    			if (objCall) {
    				objCall = await models.sequelize.calls.update(updateCall, { where: { parent_type: parentType } });
    			}
    		} else {
    			objCall = await models.mongoose.calls.findOneAndUpdate({parent_type: parentType}, {$set: updateCall}, {new: true});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallByStatus(status, updateCall) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({where: { status: status }});
    			if (objCall) {
    				objCall = await models.sequelize.calls.update(updateCall, { where: { status: status } });
    			}
    		} else {
    			objCall = await models.mongoose.calls.findOneAndUpdate({status: status}, {$set: updateCall}, {new: true});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallByDirection(direction, updateCall) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({where: { direction: direction }});
    			if (objCall) {
    				objCall = await models.sequelize.calls.update(updateCall, { where: { direction: direction } });
    			}
    		} else {
    			objCall = await models.mongoose.calls.findOneAndUpdate({direction: direction}, {$set: updateCall}, {new: true});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallByOutlookId(outlookId, updateCall) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({where: { outlook_id: outlookId }});
    			if (objCall) {
    				objCall = await models.sequelize.calls.update(updateCall, { where: { outlook_id: outlookId } });
    			}
    		} else {
    			objCall = await models.mongoose.calls.findOneAndUpdate({outlook_id: outlookId}, {$set: updateCall}, {new: true});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallByRepeatType(repeatType, updateCall) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({where: { repeat_type: repeatType }});
    			if (objCall) {
    				objCall = await models.sequelize.calls.update(updateCall, { where: { repeat_type: repeatType } });
    			}
    		} else {
    			objCall = await models.mongoose.calls.findOneAndUpdate({repeat_type: repeatType}, {$set: updateCall}, {new: true});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallByRepeatDow(repeatDow, updateCall) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({where: { repeat_dow: repeatDow }});
    			if (objCall) {
    				objCall = await models.sequelize.calls.update(updateCall, { where: { repeat_dow: repeatDow } });
    			}
    		} else {
    			objCall = await models.mongoose.calls.findOneAndUpdate({repeat_dow: repeatDow}, {$set: updateCall}, {new: true});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallByRecurringSource(recurringSource, updateCall) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({where: { recurring_source: recurringSource }});
    			if (objCall) {
    				objCall = await models.sequelize.calls.update(updateCall, { where: { recurring_source: recurringSource } });
    			}
    		} else {
    			objCall = await models.mongoose.calls.findOneAndUpdate({recurring_source: recurringSource}, {$set: updateCall}, {new: true});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallByDescription(description, updateCall) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({where: { description: description }});
    			if (objCall) {
    				objCall = await models.sequelize.calls.update(updateCall, { where: { description: description } });
    			}
    		} else {
    			objCall = await models.mongoose.calls.findOneAndUpdate({description: description}, {$set: updateCall}, {new: true});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallByDateEntered(dateEntered, updateCall) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({where: { date_entered: dateEntered }});
    			if (objCall) {
    				objCall = await models.sequelize.calls.update(updateCall, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objCall = await models.mongoose.calls.findOneAndUpdate({date_entered: dateEntered}, {$set: updateCall}, {new: true});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallByDateModified(dateModified, updateCall) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({where: { date_modified: dateModified }});
    			if (objCall) {
    				objCall = await models.sequelize.calls.update(updateCall, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objCall = await models.mongoose.calls.findOneAndUpdate({date_modified: dateModified}, {$set: updateCall}, {new: true});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallByDateStart(dateStart, updateCall) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({where: { date_start: dateStart }});
    			if (objCall) {
    				objCall = await models.sequelize.calls.update(updateCall, { where: { date_start: dateStart } });
    			}
    		} else {
    			objCall = await models.mongoose.calls.findOneAndUpdate({date_start: dateStart}, {$set: updateCall}, {new: true});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallByDateEnd(dateEnd, updateCall) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({where: { date_end: dateEnd }});
    			if (objCall) {
    				objCall = await models.sequelize.calls.update(updateCall, { where: { date_end: dateEnd } });
    			}
    		} else {
    			objCall = await models.mongoose.calls.findOneAndUpdate({date_end: dateEnd}, {$set: updateCall}, {new: true});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallByRepeatUntil(repeatUntil, updateCall) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({where: { repeat_until: repeatUntil }});
    			if (objCall) {
    				objCall = await models.sequelize.calls.update(updateCall, { where: { repeat_until: repeatUntil } });
    			}
    		} else {
    			objCall = await models.mongoose.calls.findOneAndUpdate({repeat_until: repeatUntil}, {$set: updateCall}, {new: true});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallByModifiedUserId(modifiedUserId, updateCall) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objCall) {
    				objCall = await models.sequelize.calls.update(updateCall, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objCall = await models.mongoose.calls.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateCall}, {new: true});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallByCreatedBy(createdBy, updateCall) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({where: { created_by: createdBy }});
    			if (objCall) {
    				objCall = await models.sequelize.calls.update(updateCall, { where: { created_by: createdBy } });
    			}
    		} else {
    			objCall = await models.mongoose.calls.findOneAndUpdate({created_by: createdBy}, {$set: updateCall}, {new: true});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallByAssignedUserId(assignedUserId, updateCall) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objCall) {
    				objCall = await models.sequelize.calls.update(updateCall, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objCall = await models.mongoose.calls.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateCall}, {new: true});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallByParentId(parentId, updateCall) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({where: { parent_id: parentId }});
    			if (objCall) {
    				objCall = await models.sequelize.calls.update(updateCall, { where: { parent_id: parentId } });
    			}
    		} else {
    			objCall = await models.mongoose.calls.findOneAndUpdate({parent_id: parentId}, {$set: updateCall}, {new: true});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallByRepeatParentId(repeatParentId, updateCall) {
    	try {
    		let objCall;
    		if(sql) {
    			objCall = await models.sequelize.calls.findOne({where: { repeat_parent_id: repeatParentId }});
    			if (objCall) {
    				objCall = await models.sequelize.calls.update(updateCall, { where: { repeat_parent_id: repeatParentId } });
    			}
    		} else {
    			objCall = await models.mongoose.calls.findOneAndUpdate({repeat_parent_id: repeatParentId}, {$set: updateCall}, {new: true});
    		}
    		return objCall;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = CallService;
//</es-section>
