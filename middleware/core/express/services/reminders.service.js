/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:38 GMT-0400 (Bolivia Time)
 * Time: 14:57:38
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:38 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:38
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

class ReminderService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllReminders(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.reminders.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.reminders.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllReminders(select = []) {
		try {
			if(sql) {
				return await models.sequelize.reminders.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.reminders.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addReminder(newReminder) {
		try {
			let objReminder;
			if(util.PrimaryKeyTypeIsString(models.sequelize.reminders.primaryKeys.id.type.toString())) {
			    newReminder.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objReminder = await models.sequelize.reminders.create(newReminder);
			} else {
				objReminder = new models.mongoose.reminders(newReminder);
				await objReminder.save();
			}
			return objReminder;
		} catch (error) {
			throw error;
		}
	}

	static async updateReminder(id, updateReminder) {
		try {
			let objReminder;
			if(sql) {
				objReminder = await models.sequelize.reminders.findOne({where: { id: util.Char(id) }});
				if (objReminder) {
					await models.sequelize.reminders.update(updateReminder, { where: { id: util.Char(id) } });
					objReminder = await models.sequelize.reminders.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateReminder._id;
				objReminder = await models.mongoose.reminders.findOneAndUpdate({id:id}, {$set: updateReminder}, {new: true});
			}
			return objReminder;
		} catch (error) {
			throw error;
		}
	}

	static async getAReminder(id, query) {
		try {
			let objReminder;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objReminder = await models.sequelize.reminders.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objReminder = await models.mongoose.reminders.find({id:util.Char(id)}).select(query.select);
			}
			return objReminder;
		} catch (error) {
			throw error;
		}
	}

	static async deleteReminder(id) {
		try {
			let objReminder;
			if(sql) {
				objReminder = await models.sequelize.reminders.findOne({ where: { id: util.Char(id) } });
				if (objReminder) {
					await models.sequelize.reminders.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objReminder = await models.mongoose.reminders.deleteOne({id:util.Char(id)});
			}
			return objReminder;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objReminder;
    		if(sql) {
    			objReminder = await models.sequelize.reminders.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objReminder = await models.mongoose.reminders.findOne({id: id});
    		}
    		return objReminder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objReminder;
    		if(sql) {
    			objReminder = await models.sequelize.reminders.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objReminder = await models.mongoose.reminders.findOne({deleted: deleted});
    		}
    		return objReminder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPopup(popup, query = {}) {
    	try {
    		let objReminder;
    		if(sql) {
    			objReminder = await models.sequelize.reminders.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { popup: popup },
    			});
    		} else {
    			objReminder = await models.mongoose.reminders.findOne({popup: popup});
    		}
    		return objReminder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByEmail(email, query = {}) {
    	try {
    		let objReminder;
    		if(sql) {
    			objReminder = await models.sequelize.reminders.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { email: email },
    			});
    		} else {
    			objReminder = await models.mongoose.reminders.findOne({email: email});
    		}
    		return objReminder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByEmailSent(emailSent, query = {}) {
    	try {
    		let objReminder;
    		if(sql) {
    			objReminder = await models.sequelize.reminders.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { email_sent: emailSent },
    			});
    		} else {
    			objReminder = await models.mongoose.reminders.findOne({email_sent: emailSent});
    		}
    		return objReminder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPopupViewed(popupViewed, query = {}) {
    	try {
    		let objReminder;
    		if(sql) {
    			objReminder = await models.sequelize.reminders.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { popup_viewed: popupViewed },
    			});
    		} else {
    			objReminder = await models.mongoose.reminders.findOne({popup_viewed: popupViewed});
    		}
    		return objReminder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateWillexecute(dateWillexecute, query = {}) {
    	try {
    		let objReminder;
    		if(sql) {
    			objReminder = await models.sequelize.reminders.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_willexecute: dateWillexecute },
    			});
    		} else {
    			objReminder = await models.mongoose.reminders.findOne({date_willexecute: dateWillexecute});
    		}
    		return objReminder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objReminder;
    		if(sql) {
    			objReminder = await models.sequelize.reminders.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objReminder = await models.mongoose.reminders.findOne({name: name});
    		}
    		return objReminder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTimerPopup(timerPopup, query = {}) {
    	try {
    		let objReminder;
    		if(sql) {
    			objReminder = await models.sequelize.reminders.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { timer_popup: timerPopup },
    			});
    		} else {
    			objReminder = await models.mongoose.reminders.findOne({timer_popup: timerPopup});
    		}
    		return objReminder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTimerEmail(timerEmail, query = {}) {
    	try {
    		let objReminder;
    		if(sql) {
    			objReminder = await models.sequelize.reminders.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { timer_email: timerEmail },
    			});
    		} else {
    			objReminder = await models.mongoose.reminders.findOne({timer_email: timerEmail});
    		}
    		return objReminder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRelatedEventModule(relatedEventModule, query = {}) {
    	try {
    		let objReminder;
    		if(sql) {
    			objReminder = await models.sequelize.reminders.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { related_event_module: relatedEventModule },
    			});
    		} else {
    			objReminder = await models.mongoose.reminders.findOne({related_event_module: relatedEventModule});
    		}
    		return objReminder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objReminder;
    		if(sql) {
    			objReminder = await models.sequelize.reminders.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objReminder = await models.mongoose.reminders.findOne({description: description});
    		}
    		return objReminder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objReminder;
    		if(sql) {
    			objReminder = await models.sequelize.reminders.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objReminder = await models.mongoose.reminders.findOne({date_entered: dateEntered});
    		}
    		return objReminder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objReminder;
    		if(sql) {
    			objReminder = await models.sequelize.reminders.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objReminder = await models.mongoose.reminders.findOne({date_modified: dateModified});
    		}
    		return objReminder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objReminder;
    		if(sql) {
    			objReminder = await models.sequelize.reminders.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objReminder = await models.mongoose.reminders.findOne({modified_user_id: modifiedUserId});
    		}
    		return objReminder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objReminder;
    		if(sql) {
    			objReminder = await models.sequelize.reminders.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objReminder = await models.mongoose.reminders.findOne({created_by: createdBy});
    		}
    		return objReminder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objReminder;
    		if(sql) {
    			objReminder = await models.sequelize.reminders.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objReminder = await models.mongoose.reminders.findOne({assigned_user_id: assignedUserId});
    		}
    		return objReminder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRelatedEventModuleId(relatedEventModuleId, query = {}) {
    	try {
    		let objReminder;
    		if(sql) {
    			objReminder = await models.sequelize.reminders.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { related_event_module_id: relatedEventModuleId },
    			});
    		} else {
    			objReminder = await models.mongoose.reminders.findOne({related_event_module_id: relatedEventModuleId});
    		}
    		return objReminder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateReminderById(id, updateReminder) {
    	try {
    		let objReminder;
    		if(sql) {
    			objReminder = await models.sequelize.reminders.findOne({where: { id: id }});
    			if (objReminder) {
    				objReminder = await models.sequelize.reminders.update(updateReminder, { where: { id: id } });
    			}
    		} else {
    			objReminder = await models.mongoose.reminders.findOneAndUpdate({id: id}, {$set: updateReminder}, {new: true});
    		}
    		return objReminder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateReminderByDeleted(deleted, updateReminder) {
    	try {
    		let objReminder;
    		if(sql) {
    			objReminder = await models.sequelize.reminders.findOne({where: { deleted: deleted }});
    			if (objReminder) {
    				objReminder = await models.sequelize.reminders.update(updateReminder, { where: { deleted: deleted } });
    			}
    		} else {
    			objReminder = await models.mongoose.reminders.findOneAndUpdate({deleted: deleted}, {$set: updateReminder}, {new: true});
    		}
    		return objReminder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateReminderByPopup(popup, updateReminder) {
    	try {
    		let objReminder;
    		if(sql) {
    			objReminder = await models.sequelize.reminders.findOne({where: { popup: popup }});
    			if (objReminder) {
    				objReminder = await models.sequelize.reminders.update(updateReminder, { where: { popup: popup } });
    			}
    		} else {
    			objReminder = await models.mongoose.reminders.findOneAndUpdate({popup: popup}, {$set: updateReminder}, {new: true});
    		}
    		return objReminder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateReminderByEmail(email, updateReminder) {
    	try {
    		let objReminder;
    		if(sql) {
    			objReminder = await models.sequelize.reminders.findOne({where: { email: email }});
    			if (objReminder) {
    				objReminder = await models.sequelize.reminders.update(updateReminder, { where: { email: email } });
    			}
    		} else {
    			objReminder = await models.mongoose.reminders.findOneAndUpdate({email: email}, {$set: updateReminder}, {new: true});
    		}
    		return objReminder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateReminderByEmailSent(emailSent, updateReminder) {
    	try {
    		let objReminder;
    		if(sql) {
    			objReminder = await models.sequelize.reminders.findOne({where: { email_sent: emailSent }});
    			if (objReminder) {
    				objReminder = await models.sequelize.reminders.update(updateReminder, { where: { email_sent: emailSent } });
    			}
    		} else {
    			objReminder = await models.mongoose.reminders.findOneAndUpdate({email_sent: emailSent}, {$set: updateReminder}, {new: true});
    		}
    		return objReminder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateReminderByPopupViewed(popupViewed, updateReminder) {
    	try {
    		let objReminder;
    		if(sql) {
    			objReminder = await models.sequelize.reminders.findOne({where: { popup_viewed: popupViewed }});
    			if (objReminder) {
    				objReminder = await models.sequelize.reminders.update(updateReminder, { where: { popup_viewed: popupViewed } });
    			}
    		} else {
    			objReminder = await models.mongoose.reminders.findOneAndUpdate({popup_viewed: popupViewed}, {$set: updateReminder}, {new: true});
    		}
    		return objReminder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateReminderByDateWillexecute(dateWillexecute, updateReminder) {
    	try {
    		let objReminder;
    		if(sql) {
    			objReminder = await models.sequelize.reminders.findOne({where: { date_willexecute: dateWillexecute }});
    			if (objReminder) {
    				objReminder = await models.sequelize.reminders.update(updateReminder, { where: { date_willexecute: dateWillexecute } });
    			}
    		} else {
    			objReminder = await models.mongoose.reminders.findOneAndUpdate({date_willexecute: dateWillexecute}, {$set: updateReminder}, {new: true});
    		}
    		return objReminder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateReminderByName(name, updateReminder) {
    	try {
    		let objReminder;
    		if(sql) {
    			objReminder = await models.sequelize.reminders.findOne({where: { name: name }});
    			if (objReminder) {
    				objReminder = await models.sequelize.reminders.update(updateReminder, { where: { name: name } });
    			}
    		} else {
    			objReminder = await models.mongoose.reminders.findOneAndUpdate({name: name}, {$set: updateReminder}, {new: true});
    		}
    		return objReminder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateReminderByTimerPopup(timerPopup, updateReminder) {
    	try {
    		let objReminder;
    		if(sql) {
    			objReminder = await models.sequelize.reminders.findOne({where: { timer_popup: timerPopup }});
    			if (objReminder) {
    				objReminder = await models.sequelize.reminders.update(updateReminder, { where: { timer_popup: timerPopup } });
    			}
    		} else {
    			objReminder = await models.mongoose.reminders.findOneAndUpdate({timer_popup: timerPopup}, {$set: updateReminder}, {new: true});
    		}
    		return objReminder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateReminderByTimerEmail(timerEmail, updateReminder) {
    	try {
    		let objReminder;
    		if(sql) {
    			objReminder = await models.sequelize.reminders.findOne({where: { timer_email: timerEmail }});
    			if (objReminder) {
    				objReminder = await models.sequelize.reminders.update(updateReminder, { where: { timer_email: timerEmail } });
    			}
    		} else {
    			objReminder = await models.mongoose.reminders.findOneAndUpdate({timer_email: timerEmail}, {$set: updateReminder}, {new: true});
    		}
    		return objReminder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateReminderByRelatedEventModule(relatedEventModule, updateReminder) {
    	try {
    		let objReminder;
    		if(sql) {
    			objReminder = await models.sequelize.reminders.findOne({where: { related_event_module: relatedEventModule }});
    			if (objReminder) {
    				objReminder = await models.sequelize.reminders.update(updateReminder, { where: { related_event_module: relatedEventModule } });
    			}
    		} else {
    			objReminder = await models.mongoose.reminders.findOneAndUpdate({related_event_module: relatedEventModule}, {$set: updateReminder}, {new: true});
    		}
    		return objReminder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateReminderByDescription(description, updateReminder) {
    	try {
    		let objReminder;
    		if(sql) {
    			objReminder = await models.sequelize.reminders.findOne({where: { description: description }});
    			if (objReminder) {
    				objReminder = await models.sequelize.reminders.update(updateReminder, { where: { description: description } });
    			}
    		} else {
    			objReminder = await models.mongoose.reminders.findOneAndUpdate({description: description}, {$set: updateReminder}, {new: true});
    		}
    		return objReminder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateReminderByDateEntered(dateEntered, updateReminder) {
    	try {
    		let objReminder;
    		if(sql) {
    			objReminder = await models.sequelize.reminders.findOne({where: { date_entered: dateEntered }});
    			if (objReminder) {
    				objReminder = await models.sequelize.reminders.update(updateReminder, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objReminder = await models.mongoose.reminders.findOneAndUpdate({date_entered: dateEntered}, {$set: updateReminder}, {new: true});
    		}
    		return objReminder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateReminderByDateModified(dateModified, updateReminder) {
    	try {
    		let objReminder;
    		if(sql) {
    			objReminder = await models.sequelize.reminders.findOne({where: { date_modified: dateModified }});
    			if (objReminder) {
    				objReminder = await models.sequelize.reminders.update(updateReminder, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objReminder = await models.mongoose.reminders.findOneAndUpdate({date_modified: dateModified}, {$set: updateReminder}, {new: true});
    		}
    		return objReminder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateReminderByModifiedUserId(modifiedUserId, updateReminder) {
    	try {
    		let objReminder;
    		if(sql) {
    			objReminder = await models.sequelize.reminders.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objReminder) {
    				objReminder = await models.sequelize.reminders.update(updateReminder, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objReminder = await models.mongoose.reminders.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateReminder}, {new: true});
    		}
    		return objReminder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateReminderByCreatedBy(createdBy, updateReminder) {
    	try {
    		let objReminder;
    		if(sql) {
    			objReminder = await models.sequelize.reminders.findOne({where: { created_by: createdBy }});
    			if (objReminder) {
    				objReminder = await models.sequelize.reminders.update(updateReminder, { where: { created_by: createdBy } });
    			}
    		} else {
    			objReminder = await models.mongoose.reminders.findOneAndUpdate({created_by: createdBy}, {$set: updateReminder}, {new: true});
    		}
    		return objReminder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateReminderByAssignedUserId(assignedUserId, updateReminder) {
    	try {
    		let objReminder;
    		if(sql) {
    			objReminder = await models.sequelize.reminders.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objReminder) {
    				objReminder = await models.sequelize.reminders.update(updateReminder, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objReminder = await models.mongoose.reminders.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateReminder}, {new: true});
    		}
    		return objReminder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateReminderByRelatedEventModuleId(relatedEventModuleId, updateReminder) {
    	try {
    		let objReminder;
    		if(sql) {
    			objReminder = await models.sequelize.reminders.findOne({where: { related_event_module_id: relatedEventModuleId }});
    			if (objReminder) {
    				objReminder = await models.sequelize.reminders.update(updateReminder, { where: { related_event_module_id: relatedEventModuleId } });
    			}
    		} else {
    			objReminder = await models.mongoose.reminders.findOneAndUpdate({related_event_module_id: relatedEventModuleId}, {$set: updateReminder}, {new: true});
    		}
    		return objReminder;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = ReminderService;
//</es-section>
