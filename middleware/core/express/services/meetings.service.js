/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:15 GMT-0400 (Bolivia Time)
 * Time: 14:57:15
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:15 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:15
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

class MeetingService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllMeetings(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.meetings.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['_id','ASC']],
                });
			} else {
				return await models.mongoose.meetings.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllMeetings(select = []) {
		try {
			if(sql) {
				return await models.sequelize.meetings.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.meetings.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addMeeting(newMeeting) {
		try {
			let objMeeting;
			if(util.PrimaryKeyTypeIsString(models.sequelize.meetings.primaryKeys.id.type.toString())) {
			    newMeeting.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objMeeting = await models.sequelize.meetings.create(newMeeting);
			} else {
				objMeeting = new models.mongoose.meetings(newMeeting);
				await objMeeting.save();
			}
			return objMeeting;
		} catch (error) {
			throw error;
		}
	}

	static async updateMeeting(id, updateMeeting) {
		try {
			let objMeeting;
			if(sql) {
				objMeeting = await models.sequelize.meetings.findOne({where: { id: util.Char(id) }});
				if (objMeeting) {
					await models.sequelize.meetings.update(updateMeeting, { where: { id: util.Char(id) } });
					objMeeting = await models.sequelize.meetings.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateMeeting._id;
				objMeeting = await models.mongoose.meetings.findOneAndUpdate({id:id}, {$set: updateMeeting}, {new: true});
			}
			return objMeeting;
		} catch (error) {
			throw error;
		}
	}

	static async getAMeeting(id, query) {
		try {
			let objMeeting;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objMeeting = await models.sequelize.meetings.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objMeeting = await models.mongoose.meetings.find({id:util.Char(id)}).select(query.select);
			}
			return objMeeting;
		} catch (error) {
			throw error;
		}
	}

	static async deleteMeeting(id) {
		try {
			let objMeeting;
			if(sql) {
				objMeeting = await models.sequelize.meetings.findOne({ where: { id: util.Char(id) } });
				if (objMeeting) {
					await models.sequelize.meetings.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objMeeting = await models.mongoose.meetings.deleteOne({id:util.Char(id)});
			}
			return objMeeting;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objMeeting = await models.mongoose.meetings.findOne({id: id});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objMeeting = await models.mongoose.meetings.findOne({deleted: deleted});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByEmailReminderSent(emailReminderSent, query = {}) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { email_reminder_sent: emailReminderSent },
    			});
    		} else {
    			objMeeting = await models.mongoose.meetings.findOne({email_reminder_sent: emailReminderSent});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDurationHours(durationHours, query = {}) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { duration_hours: durationHours },
    			});
    		} else {
    			objMeeting = await models.mongoose.meetings.findOne({duration_hours: durationHours});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDurationMinutes(durationMinutes, query = {}) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { duration_minutes: durationMinutes },
    			});
    		} else {
    			objMeeting = await models.mongoose.meetings.findOne({duration_minutes: durationMinutes});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByReminderTime(reminderTime, query = {}) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { reminder_time: reminderTime },
    			});
    		} else {
    			objMeeting = await models.mongoose.meetings.findOne({reminder_time: reminderTime});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByEmailReminderTime(emailReminderTime, query = {}) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { email_reminder_time: emailReminderTime },
    			});
    		} else {
    			objMeeting = await models.mongoose.meetings.findOne({email_reminder_time: emailReminderTime});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySequence(sequence, query = {}) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { sequence: sequence },
    			});
    		} else {
    			objMeeting = await models.mongoose.meetings.findOne({sequence: sequence});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRepeatInterval(repeatInterval, query = {}) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { repeat_interval: repeatInterval },
    			});
    		} else {
    			objMeeting = await models.mongoose.meetings.findOne({repeat_interval: repeatInterval});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRepeatCount(repeatCount, query = {}) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { repeat_count: repeatCount },
    			});
    		} else {
    			objMeeting = await models.mongoose.meetings.findOne({repeat_count: repeatCount});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByGsyncLastsync(gsyncLastsync, query = {}) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { gsync_lastsync: gsyncLastsync },
    			});
    		} else {
    			objMeeting = await models.mongoose.meetings.findOne({gsync_lastsync: gsyncLastsync});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objMeeting = await models.mongoose.meetings.findOne({name: name});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByLocation(location, query = {}) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { location: location },
    			});
    		} else {
    			objMeeting = await models.mongoose.meetings.findOne({location: location});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPassword(password, query = {}) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { password: password },
    			});
    		} else {
    			objMeeting = await models.mongoose.meetings.findOne({password: password});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJoinUrl(joinUrl, query = {}) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { join_url: joinUrl },
    			});
    		} else {
    			objMeeting = await models.mongoose.meetings.findOne({join_url: joinUrl});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByHostUrl(hostUrl, query = {}) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { host_url: hostUrl },
    			});
    		} else {
    			objMeeting = await models.mongoose.meetings.findOne({host_url: hostUrl});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDisplayedUrl(displayedUrl, query = {}) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { displayed_url: displayedUrl },
    			});
    		} else {
    			objMeeting = await models.mongoose.meetings.findOne({displayed_url: displayedUrl});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreator(creator, query = {}) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { creator: creator },
    			});
    		} else {
    			objMeeting = await models.mongoose.meetings.findOne({creator: creator});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByExternalId(externalId, query = {}) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { external_id: externalId },
    			});
    		} else {
    			objMeeting = await models.mongoose.meetings.findOne({external_id: externalId});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentType(parentType, query = {}) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_type: parentType },
    			});
    		} else {
    			objMeeting = await models.mongoose.meetings.findOne({parent_type: parentType});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByStatus(status, query = {}) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { status: status },
    			});
    		} else {
    			objMeeting = await models.mongoose.meetings.findOne({status: status});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByType(type, query = {}) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { type: type },
    			});
    		} else {
    			objMeeting = await models.mongoose.meetings.findOne({type: type});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByOutlookId(outlookId, query = {}) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { outlook_id: outlookId },
    			});
    		} else {
    			objMeeting = await models.mongoose.meetings.findOne({outlook_id: outlookId});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRepeatType(repeatType, query = {}) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { repeat_type: repeatType },
    			});
    		} else {
    			objMeeting = await models.mongoose.meetings.findOne({repeat_type: repeatType});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRepeatDow(repeatDow, query = {}) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { repeat_dow: repeatDow },
    			});
    		} else {
    			objMeeting = await models.mongoose.meetings.findOne({repeat_dow: repeatDow});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRecurringSource(recurringSource, query = {}) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { recurring_source: recurringSource },
    			});
    		} else {
    			objMeeting = await models.mongoose.meetings.findOne({recurring_source: recurringSource});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByGsyncId(gsyncId, query = {}) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { gsync_id: gsyncId },
    			});
    		} else {
    			objMeeting = await models.mongoose.meetings.findOne({gsync_id: gsyncId});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objMeeting = await models.mongoose.meetings.findOne({description: description});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objMeeting = await models.mongoose.meetings.findOne({date_entered: dateEntered});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objMeeting = await models.mongoose.meetings.findOne({date_modified: dateModified});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateStart(dateStart, query = {}) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_start: dateStart },
    			});
    		} else {
    			objMeeting = await models.mongoose.meetings.findOne({date_start: dateStart});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEnd(dateEnd, query = {}) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_end: dateEnd },
    			});
    		} else {
    			objMeeting = await models.mongoose.meetings.findOne({date_end: dateEnd});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRepeatUntil(repeatUntil, query = {}) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { repeat_until: repeatUntil },
    			});
    		} else {
    			objMeeting = await models.mongoose.meetings.findOne({repeat_until: repeatUntil});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objMeeting = await models.mongoose.meetings.findOne({modified_user_id: modifiedUserId});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objMeeting = await models.mongoose.meetings.findOne({created_by: createdBy});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objMeeting = await models.mongoose.meetings.findOne({assigned_user_id: assignedUserId});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objMeeting = await models.mongoose.meetings.findOne({parent_id: parentId});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRepeatParentId(repeatParentId, query = {}) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { repeat_parent_id: repeatParentId },
    			});
    		} else {
    			objMeeting = await models.mongoose.meetings.findOne({repeat_parent_id: repeatParentId});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateMeetingById(id, updateMeeting) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({where: { id: id }});
    			if (objMeeting) {
    				objMeeting = await models.sequelize.meetings.update(updateMeeting, { where: { id: id } });
    			}
    		} else {
    			objMeeting = await models.mongoose.meetings.findOneAndUpdate({id: id}, {$set: updateMeeting}, {new: true});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingByDeleted(deleted, updateMeeting) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({where: { deleted: deleted }});
    			if (objMeeting) {
    				objMeeting = await models.sequelize.meetings.update(updateMeeting, { where: { deleted: deleted } });
    			}
    		} else {
    			objMeeting = await models.mongoose.meetings.findOneAndUpdate({deleted: deleted}, {$set: updateMeeting}, {new: true});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingByEmailReminderSent(emailReminderSent, updateMeeting) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({where: { email_reminder_sent: emailReminderSent }});
    			if (objMeeting) {
    				objMeeting = await models.sequelize.meetings.update(updateMeeting, { where: { email_reminder_sent: emailReminderSent } });
    			}
    		} else {
    			objMeeting = await models.mongoose.meetings.findOneAndUpdate({email_reminder_sent: emailReminderSent}, {$set: updateMeeting}, {new: true});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingByDurationHours(durationHours, updateMeeting) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({where: { duration_hours: durationHours }});
    			if (objMeeting) {
    				objMeeting = await models.sequelize.meetings.update(updateMeeting, { where: { duration_hours: durationHours } });
    			}
    		} else {
    			objMeeting = await models.mongoose.meetings.findOneAndUpdate({duration_hours: durationHours}, {$set: updateMeeting}, {new: true});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingByDurationMinutes(durationMinutes, updateMeeting) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({where: { duration_minutes: durationMinutes }});
    			if (objMeeting) {
    				objMeeting = await models.sequelize.meetings.update(updateMeeting, { where: { duration_minutes: durationMinutes } });
    			}
    		} else {
    			objMeeting = await models.mongoose.meetings.findOneAndUpdate({duration_minutes: durationMinutes}, {$set: updateMeeting}, {new: true});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingByReminderTime(reminderTime, updateMeeting) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({where: { reminder_time: reminderTime }});
    			if (objMeeting) {
    				objMeeting = await models.sequelize.meetings.update(updateMeeting, { where: { reminder_time: reminderTime } });
    			}
    		} else {
    			objMeeting = await models.mongoose.meetings.findOneAndUpdate({reminder_time: reminderTime}, {$set: updateMeeting}, {new: true});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingByEmailReminderTime(emailReminderTime, updateMeeting) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({where: { email_reminder_time: emailReminderTime }});
    			if (objMeeting) {
    				objMeeting = await models.sequelize.meetings.update(updateMeeting, { where: { email_reminder_time: emailReminderTime } });
    			}
    		} else {
    			objMeeting = await models.mongoose.meetings.findOneAndUpdate({email_reminder_time: emailReminderTime}, {$set: updateMeeting}, {new: true});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingBySequence(sequence, updateMeeting) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({where: { sequence: sequence }});
    			if (objMeeting) {
    				objMeeting = await models.sequelize.meetings.update(updateMeeting, { where: { sequence: sequence } });
    			}
    		} else {
    			objMeeting = await models.mongoose.meetings.findOneAndUpdate({sequence: sequence}, {$set: updateMeeting}, {new: true});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingByRepeatInterval(repeatInterval, updateMeeting) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({where: { repeat_interval: repeatInterval }});
    			if (objMeeting) {
    				objMeeting = await models.sequelize.meetings.update(updateMeeting, { where: { repeat_interval: repeatInterval } });
    			}
    		} else {
    			objMeeting = await models.mongoose.meetings.findOneAndUpdate({repeat_interval: repeatInterval}, {$set: updateMeeting}, {new: true});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingByRepeatCount(repeatCount, updateMeeting) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({where: { repeat_count: repeatCount }});
    			if (objMeeting) {
    				objMeeting = await models.sequelize.meetings.update(updateMeeting, { where: { repeat_count: repeatCount } });
    			}
    		} else {
    			objMeeting = await models.mongoose.meetings.findOneAndUpdate({repeat_count: repeatCount}, {$set: updateMeeting}, {new: true});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingByGsyncLastsync(gsyncLastsync, updateMeeting) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({where: { gsync_lastsync: gsyncLastsync }});
    			if (objMeeting) {
    				objMeeting = await models.sequelize.meetings.update(updateMeeting, { where: { gsync_lastsync: gsyncLastsync } });
    			}
    		} else {
    			objMeeting = await models.mongoose.meetings.findOneAndUpdate({gsync_lastsync: gsyncLastsync}, {$set: updateMeeting}, {new: true});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingByName(name, updateMeeting) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({where: { name: name }});
    			if (objMeeting) {
    				objMeeting = await models.sequelize.meetings.update(updateMeeting, { where: { name: name } });
    			}
    		} else {
    			objMeeting = await models.mongoose.meetings.findOneAndUpdate({name: name}, {$set: updateMeeting}, {new: true});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingByLocation(location, updateMeeting) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({where: { location: location }});
    			if (objMeeting) {
    				objMeeting = await models.sequelize.meetings.update(updateMeeting, { where: { location: location } });
    			}
    		} else {
    			objMeeting = await models.mongoose.meetings.findOneAndUpdate({location: location}, {$set: updateMeeting}, {new: true});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingByPassword(password, updateMeeting) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({where: { password: password }});
    			if (objMeeting) {
    				objMeeting = await models.sequelize.meetings.update(updateMeeting, { where: { password: password } });
    			}
    		} else {
    			objMeeting = await models.mongoose.meetings.findOneAndUpdate({password: password}, {$set: updateMeeting}, {new: true});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingByJoinUrl(joinUrl, updateMeeting) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({where: { join_url: joinUrl }});
    			if (objMeeting) {
    				objMeeting = await models.sequelize.meetings.update(updateMeeting, { where: { join_url: joinUrl } });
    			}
    		} else {
    			objMeeting = await models.mongoose.meetings.findOneAndUpdate({join_url: joinUrl}, {$set: updateMeeting}, {new: true});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingByHostUrl(hostUrl, updateMeeting) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({where: { host_url: hostUrl }});
    			if (objMeeting) {
    				objMeeting = await models.sequelize.meetings.update(updateMeeting, { where: { host_url: hostUrl } });
    			}
    		} else {
    			objMeeting = await models.mongoose.meetings.findOneAndUpdate({host_url: hostUrl}, {$set: updateMeeting}, {new: true});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingByDisplayedUrl(displayedUrl, updateMeeting) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({where: { displayed_url: displayedUrl }});
    			if (objMeeting) {
    				objMeeting = await models.sequelize.meetings.update(updateMeeting, { where: { displayed_url: displayedUrl } });
    			}
    		} else {
    			objMeeting = await models.mongoose.meetings.findOneAndUpdate({displayed_url: displayedUrl}, {$set: updateMeeting}, {new: true});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingByCreator(creator, updateMeeting) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({where: { creator: creator }});
    			if (objMeeting) {
    				objMeeting = await models.sequelize.meetings.update(updateMeeting, { where: { creator: creator } });
    			}
    		} else {
    			objMeeting = await models.mongoose.meetings.findOneAndUpdate({creator: creator}, {$set: updateMeeting}, {new: true});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingByExternalId(externalId, updateMeeting) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({where: { external_id: externalId }});
    			if (objMeeting) {
    				objMeeting = await models.sequelize.meetings.update(updateMeeting, { where: { external_id: externalId } });
    			}
    		} else {
    			objMeeting = await models.mongoose.meetings.findOneAndUpdate({external_id: externalId}, {$set: updateMeeting}, {new: true});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingByParentType(parentType, updateMeeting) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({where: { parent_type: parentType }});
    			if (objMeeting) {
    				objMeeting = await models.sequelize.meetings.update(updateMeeting, { where: { parent_type: parentType } });
    			}
    		} else {
    			objMeeting = await models.mongoose.meetings.findOneAndUpdate({parent_type: parentType}, {$set: updateMeeting}, {new: true});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingByStatus(status, updateMeeting) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({where: { status: status }});
    			if (objMeeting) {
    				objMeeting = await models.sequelize.meetings.update(updateMeeting, { where: { status: status } });
    			}
    		} else {
    			objMeeting = await models.mongoose.meetings.findOneAndUpdate({status: status}, {$set: updateMeeting}, {new: true});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingByType(type, updateMeeting) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({where: { type: type }});
    			if (objMeeting) {
    				objMeeting = await models.sequelize.meetings.update(updateMeeting, { where: { type: type } });
    			}
    		} else {
    			objMeeting = await models.mongoose.meetings.findOneAndUpdate({type: type}, {$set: updateMeeting}, {new: true});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingByOutlookId(outlookId, updateMeeting) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({where: { outlook_id: outlookId }});
    			if (objMeeting) {
    				objMeeting = await models.sequelize.meetings.update(updateMeeting, { where: { outlook_id: outlookId } });
    			}
    		} else {
    			objMeeting = await models.mongoose.meetings.findOneAndUpdate({outlook_id: outlookId}, {$set: updateMeeting}, {new: true});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingByRepeatType(repeatType, updateMeeting) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({where: { repeat_type: repeatType }});
    			if (objMeeting) {
    				objMeeting = await models.sequelize.meetings.update(updateMeeting, { where: { repeat_type: repeatType } });
    			}
    		} else {
    			objMeeting = await models.mongoose.meetings.findOneAndUpdate({repeat_type: repeatType}, {$set: updateMeeting}, {new: true});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingByRepeatDow(repeatDow, updateMeeting) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({where: { repeat_dow: repeatDow }});
    			if (objMeeting) {
    				objMeeting = await models.sequelize.meetings.update(updateMeeting, { where: { repeat_dow: repeatDow } });
    			}
    		} else {
    			objMeeting = await models.mongoose.meetings.findOneAndUpdate({repeat_dow: repeatDow}, {$set: updateMeeting}, {new: true});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingByRecurringSource(recurringSource, updateMeeting) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({where: { recurring_source: recurringSource }});
    			if (objMeeting) {
    				objMeeting = await models.sequelize.meetings.update(updateMeeting, { where: { recurring_source: recurringSource } });
    			}
    		} else {
    			objMeeting = await models.mongoose.meetings.findOneAndUpdate({recurring_source: recurringSource}, {$set: updateMeeting}, {new: true});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingByGsyncId(gsyncId, updateMeeting) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({where: { gsync_id: gsyncId }});
    			if (objMeeting) {
    				objMeeting = await models.sequelize.meetings.update(updateMeeting, { where: { gsync_id: gsyncId } });
    			}
    		} else {
    			objMeeting = await models.mongoose.meetings.findOneAndUpdate({gsync_id: gsyncId}, {$set: updateMeeting}, {new: true});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingByDescription(description, updateMeeting) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({where: { description: description }});
    			if (objMeeting) {
    				objMeeting = await models.sequelize.meetings.update(updateMeeting, { where: { description: description } });
    			}
    		} else {
    			objMeeting = await models.mongoose.meetings.findOneAndUpdate({description: description}, {$set: updateMeeting}, {new: true});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingByDateEntered(dateEntered, updateMeeting) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({where: { date_entered: dateEntered }});
    			if (objMeeting) {
    				objMeeting = await models.sequelize.meetings.update(updateMeeting, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objMeeting = await models.mongoose.meetings.findOneAndUpdate({date_entered: dateEntered}, {$set: updateMeeting}, {new: true});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingByDateModified(dateModified, updateMeeting) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({where: { date_modified: dateModified }});
    			if (objMeeting) {
    				objMeeting = await models.sequelize.meetings.update(updateMeeting, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objMeeting = await models.mongoose.meetings.findOneAndUpdate({date_modified: dateModified}, {$set: updateMeeting}, {new: true});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingByDateStart(dateStart, updateMeeting) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({where: { date_start: dateStart }});
    			if (objMeeting) {
    				objMeeting = await models.sequelize.meetings.update(updateMeeting, { where: { date_start: dateStart } });
    			}
    		} else {
    			objMeeting = await models.mongoose.meetings.findOneAndUpdate({date_start: dateStart}, {$set: updateMeeting}, {new: true});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingByDateEnd(dateEnd, updateMeeting) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({where: { date_end: dateEnd }});
    			if (objMeeting) {
    				objMeeting = await models.sequelize.meetings.update(updateMeeting, { where: { date_end: dateEnd } });
    			}
    		} else {
    			objMeeting = await models.mongoose.meetings.findOneAndUpdate({date_end: dateEnd}, {$set: updateMeeting}, {new: true});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingByRepeatUntil(repeatUntil, updateMeeting) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({where: { repeat_until: repeatUntil }});
    			if (objMeeting) {
    				objMeeting = await models.sequelize.meetings.update(updateMeeting, { where: { repeat_until: repeatUntil } });
    			}
    		} else {
    			objMeeting = await models.mongoose.meetings.findOneAndUpdate({repeat_until: repeatUntil}, {$set: updateMeeting}, {new: true});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingByModifiedUserId(modifiedUserId, updateMeeting) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objMeeting) {
    				objMeeting = await models.sequelize.meetings.update(updateMeeting, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objMeeting = await models.mongoose.meetings.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateMeeting}, {new: true});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingByCreatedBy(createdBy, updateMeeting) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({where: { created_by: createdBy }});
    			if (objMeeting) {
    				objMeeting = await models.sequelize.meetings.update(updateMeeting, { where: { created_by: createdBy } });
    			}
    		} else {
    			objMeeting = await models.mongoose.meetings.findOneAndUpdate({created_by: createdBy}, {$set: updateMeeting}, {new: true});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingByAssignedUserId(assignedUserId, updateMeeting) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objMeeting) {
    				objMeeting = await models.sequelize.meetings.update(updateMeeting, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objMeeting = await models.mongoose.meetings.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateMeeting}, {new: true});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingByParentId(parentId, updateMeeting) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({where: { parent_id: parentId }});
    			if (objMeeting) {
    				objMeeting = await models.sequelize.meetings.update(updateMeeting, { where: { parent_id: parentId } });
    			}
    		} else {
    			objMeeting = await models.mongoose.meetings.findOneAndUpdate({parent_id: parentId}, {$set: updateMeeting}, {new: true});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingByRepeatParentId(repeatParentId, updateMeeting) {
    	try {
    		let objMeeting;
    		if(sql) {
    			objMeeting = await models.sequelize.meetings.findOne({where: { repeat_parent_id: repeatParentId }});
    			if (objMeeting) {
    				objMeeting = await models.sequelize.meetings.update(updateMeeting, { where: { repeat_parent_id: repeatParentId } });
    			}
    		} else {
    			objMeeting = await models.mongoose.meetings.findOneAndUpdate({repeat_parent_id: repeatParentId}, {$set: updateMeeting}, {new: true});
    		}
    		return objMeeting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = MeetingService;
//</es-section>
