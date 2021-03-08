/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:10 GMT-0400 (Bolivia Time)
 * Time: 15:36:10
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:10 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:10
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

class FpEventService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllFpEvents(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.fpEvents.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.fpEvents.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllFpEvents(select = []) {
		try {
			if(sql) {
				return await models.sequelize.fpEvents.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.fpEvents.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addFpEvent(newFpEvent) {
		try {
			let objFpEvent;
			if(util.PrimaryKeyTypeIsString(models.sequelize.fpEvents.primaryKeys.id.type.toString())) {
			    newFpEvent.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objFpEvent = await models.sequelize.fpEvents.create(newFpEvent);
			} else {
				objFpEvent = new models.mongoose.fpEvents(newFpEvent);
				await objFpEvent.save();
			}
			return objFpEvent;
		} catch (error) {
			throw error;
		}
	}

	static async updateFpEvent(id, updateFpEvent) {
		try {
			let objFpEvent;
			if(sql) {
				objFpEvent = await models.sequelize.fpEvents.findOne({where: { id: util.Char(id) }});
				if (objFpEvent) {
					await models.sequelize.fpEvents.update(updateFpEvent, { where: { id: util.Char(id) } });
					objFpEvent = await models.sequelize.fpEvents.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateFpEvent._id;
				objFpEvent = await models.mongoose.fpEvents.findOneAndUpdate({id:id}, {$set: updateFpEvent}, {new: true});
			}
			return objFpEvent;
		} catch (error) {
			throw error;
		}
	}

	static async getAFpEvent(id, query) {
		try {
			let objFpEvent;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objFpEvent = await models.sequelize.fpEvents.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objFpEvent = await models.mongoose.fpEvents.find({id:util.Char(id)}).select(query.select);
			}
			return objFpEvent;
		} catch (error) {
			throw error;
		}
	}

	static async deleteFpEvent(id) {
		try {
			let objFpEvent;
			if(sql) {
				objFpEvent = await models.sequelize.fpEvents.findOne({ where: { id: util.Char(id) } });
				if (objFpEvent) {
					await models.sequelize.fpEvents.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objFpEvent = await models.mongoose.fpEvents.deleteOne({id:util.Char(id)});
			}
			return objFpEvent;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objFpEvent;
    		if(sql) {
    			objFpEvent = await models.sequelize.fpEvents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objFpEvent = await models.mongoose.fpEvents.findOne({id: id});
    		}
    		return objFpEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objFpEvent;
    		if(sql) {
    			objFpEvent = await models.sequelize.fpEvents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objFpEvent = await models.mongoose.fpEvents.findOne({deleted: deleted});
    		}
    		return objFpEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDurationHours(durationHours, query = {}) {
    	try {
    		let objFpEvent;
    		if(sql) {
    			objFpEvent = await models.sequelize.fpEvents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { duration_hours: durationHours },
    			});
    		} else {
    			objFpEvent = await models.mongoose.fpEvents.findOne({duration_hours: durationHours});
    		}
    		return objFpEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDurationMinutes(durationMinutes, query = {}) {
    	try {
    		let objFpEvent;
    		if(sql) {
    			objFpEvent = await models.sequelize.fpEvents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { duration_minutes: durationMinutes },
    			});
    		} else {
    			objFpEvent = await models.mongoose.fpEvents.findOne({duration_minutes: durationMinutes});
    		}
    		return objFpEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBudget(budget, query = {}) {
    	try {
    		let objFpEvent;
    		if(sql) {
    			objFpEvent = await models.sequelize.fpEvents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { budget: budget },
    			});
    		} else {
    			objFpEvent = await models.mongoose.fpEvents.findOne({budget: budget});
    		}
    		return objFpEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objFpEvent;
    		if(sql) {
    			objFpEvent = await models.sequelize.fpEvents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objFpEvent = await models.mongoose.fpEvents.findOne({name: name});
    		}
    		return objFpEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByInviteTemplates(inviteTemplates, query = {}) {
    	try {
    		let objFpEvent;
    		if(sql) {
    			objFpEvent = await models.sequelize.fpEvents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { invite_templates: inviteTemplates },
    			});
    		} else {
    			objFpEvent = await models.mongoose.fpEvents.findOne({invite_templates: inviteTemplates});
    		}
    		return objFpEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAcceptRedirect(acceptRedirect, query = {}) {
    	try {
    		let objFpEvent;
    		if(sql) {
    			objFpEvent = await models.sequelize.fpEvents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { accept_redirect: acceptRedirect },
    			});
    		} else {
    			objFpEvent = await models.mongoose.fpEvents.findOne({accept_redirect: acceptRedirect});
    		}
    		return objFpEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeclineRedirect(declineRedirect, query = {}) {
    	try {
    		let objFpEvent;
    		if(sql) {
    			objFpEvent = await models.sequelize.fpEvents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { decline_redirect: declineRedirect },
    			});
    		} else {
    			objFpEvent = await models.mongoose.fpEvents.findOne({decline_redirect: declineRedirect});
    		}
    		return objFpEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByActivityStatusType(activityStatusType, query = {}) {
    	try {
    		let objFpEvent;
    		if(sql) {
    			objFpEvent = await models.sequelize.fpEvents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { activity_status_type: activityStatusType },
    			});
    		} else {
    			objFpEvent = await models.mongoose.fpEvents.findOne({activity_status_type: activityStatusType});
    		}
    		return objFpEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objFpEvent;
    		if(sql) {
    			objFpEvent = await models.sequelize.fpEvents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objFpEvent = await models.mongoose.fpEvents.findOne({description: description});
    		}
    		return objFpEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objFpEvent;
    		if(sql) {
    			objFpEvent = await models.sequelize.fpEvents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objFpEvent = await models.mongoose.fpEvents.findOne({date_entered: dateEntered});
    		}
    		return objFpEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objFpEvent;
    		if(sql) {
    			objFpEvent = await models.sequelize.fpEvents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objFpEvent = await models.mongoose.fpEvents.findOne({date_modified: dateModified});
    		}
    		return objFpEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateStart(dateStart, query = {}) {
    	try {
    		let objFpEvent;
    		if(sql) {
    			objFpEvent = await models.sequelize.fpEvents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_start: dateStart },
    			});
    		} else {
    			objFpEvent = await models.mongoose.fpEvents.findOne({date_start: dateStart});
    		}
    		return objFpEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEnd(dateEnd, query = {}) {
    	try {
    		let objFpEvent;
    		if(sql) {
    			objFpEvent = await models.sequelize.fpEvents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_end: dateEnd },
    			});
    		} else {
    			objFpEvent = await models.mongoose.fpEvents.findOne({date_end: dateEnd});
    		}
    		return objFpEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objFpEvent;
    		if(sql) {
    			objFpEvent = await models.sequelize.fpEvents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objFpEvent = await models.mongoose.fpEvents.findOne({modified_user_id: modifiedUserId});
    		}
    		return objFpEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objFpEvent;
    		if(sql) {
    			objFpEvent = await models.sequelize.fpEvents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objFpEvent = await models.mongoose.fpEvents.findOne({created_by: createdBy});
    		}
    		return objFpEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objFpEvent;
    		if(sql) {
    			objFpEvent = await models.sequelize.fpEvents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objFpEvent = await models.mongoose.fpEvents.findOne({assigned_user_id: assignedUserId});
    		}
    		return objFpEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCurrencyId(currencyId, query = {}) {
    	try {
    		let objFpEvent;
    		if(sql) {
    			objFpEvent = await models.sequelize.fpEvents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { currency_id: currencyId },
    			});
    		} else {
    			objFpEvent = await models.mongoose.fpEvents.findOne({currency_id: currencyId});
    		}
    		return objFpEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateFpEventById(id, updateFpEvent) {
    	try {
    		let objFpEvent;
    		if(sql) {
    			objFpEvent = await models.sequelize.fpEvents.findOne({where: { id: id }});
    			if (objFpEvent) {
    				objFpEvent = await models.sequelize.fpEvents.update(updateFpEvent, { where: { id: id } });
    			}
    		} else {
    			objFpEvent = await models.mongoose.fpEvents.findOneAndUpdate({id: id}, {$set: updateFpEvent}, {new: true});
    		}
    		return objFpEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventByDeleted(deleted, updateFpEvent) {
    	try {
    		let objFpEvent;
    		if(sql) {
    			objFpEvent = await models.sequelize.fpEvents.findOne({where: { deleted: deleted }});
    			if (objFpEvent) {
    				objFpEvent = await models.sequelize.fpEvents.update(updateFpEvent, { where: { deleted: deleted } });
    			}
    		} else {
    			objFpEvent = await models.mongoose.fpEvents.findOneAndUpdate({deleted: deleted}, {$set: updateFpEvent}, {new: true});
    		}
    		return objFpEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventByDurationHours(durationHours, updateFpEvent) {
    	try {
    		let objFpEvent;
    		if(sql) {
    			objFpEvent = await models.sequelize.fpEvents.findOne({where: { duration_hours: durationHours }});
    			if (objFpEvent) {
    				objFpEvent = await models.sequelize.fpEvents.update(updateFpEvent, { where: { duration_hours: durationHours } });
    			}
    		} else {
    			objFpEvent = await models.mongoose.fpEvents.findOneAndUpdate({duration_hours: durationHours}, {$set: updateFpEvent}, {new: true});
    		}
    		return objFpEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventByDurationMinutes(durationMinutes, updateFpEvent) {
    	try {
    		let objFpEvent;
    		if(sql) {
    			objFpEvent = await models.sequelize.fpEvents.findOne({where: { duration_minutes: durationMinutes }});
    			if (objFpEvent) {
    				objFpEvent = await models.sequelize.fpEvents.update(updateFpEvent, { where: { duration_minutes: durationMinutes } });
    			}
    		} else {
    			objFpEvent = await models.mongoose.fpEvents.findOneAndUpdate({duration_minutes: durationMinutes}, {$set: updateFpEvent}, {new: true});
    		}
    		return objFpEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventByBudget(budget, updateFpEvent) {
    	try {
    		let objFpEvent;
    		if(sql) {
    			objFpEvent = await models.sequelize.fpEvents.findOne({where: { budget: budget }});
    			if (objFpEvent) {
    				objFpEvent = await models.sequelize.fpEvents.update(updateFpEvent, { where: { budget: budget } });
    			}
    		} else {
    			objFpEvent = await models.mongoose.fpEvents.findOneAndUpdate({budget: budget}, {$set: updateFpEvent}, {new: true});
    		}
    		return objFpEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventByName(name, updateFpEvent) {
    	try {
    		let objFpEvent;
    		if(sql) {
    			objFpEvent = await models.sequelize.fpEvents.findOne({where: { name: name }});
    			if (objFpEvent) {
    				objFpEvent = await models.sequelize.fpEvents.update(updateFpEvent, { where: { name: name } });
    			}
    		} else {
    			objFpEvent = await models.mongoose.fpEvents.findOneAndUpdate({name: name}, {$set: updateFpEvent}, {new: true});
    		}
    		return objFpEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventByInviteTemplates(inviteTemplates, updateFpEvent) {
    	try {
    		let objFpEvent;
    		if(sql) {
    			objFpEvent = await models.sequelize.fpEvents.findOne({where: { invite_templates: inviteTemplates }});
    			if (objFpEvent) {
    				objFpEvent = await models.sequelize.fpEvents.update(updateFpEvent, { where: { invite_templates: inviteTemplates } });
    			}
    		} else {
    			objFpEvent = await models.mongoose.fpEvents.findOneAndUpdate({invite_templates: inviteTemplates}, {$set: updateFpEvent}, {new: true});
    		}
    		return objFpEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventByAcceptRedirect(acceptRedirect, updateFpEvent) {
    	try {
    		let objFpEvent;
    		if(sql) {
    			objFpEvent = await models.sequelize.fpEvents.findOne({where: { accept_redirect: acceptRedirect }});
    			if (objFpEvent) {
    				objFpEvent = await models.sequelize.fpEvents.update(updateFpEvent, { where: { accept_redirect: acceptRedirect } });
    			}
    		} else {
    			objFpEvent = await models.mongoose.fpEvents.findOneAndUpdate({accept_redirect: acceptRedirect}, {$set: updateFpEvent}, {new: true});
    		}
    		return objFpEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventByDeclineRedirect(declineRedirect, updateFpEvent) {
    	try {
    		let objFpEvent;
    		if(sql) {
    			objFpEvent = await models.sequelize.fpEvents.findOne({where: { decline_redirect: declineRedirect }});
    			if (objFpEvent) {
    				objFpEvent = await models.sequelize.fpEvents.update(updateFpEvent, { where: { decline_redirect: declineRedirect } });
    			}
    		} else {
    			objFpEvent = await models.mongoose.fpEvents.findOneAndUpdate({decline_redirect: declineRedirect}, {$set: updateFpEvent}, {new: true});
    		}
    		return objFpEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventByActivityStatusType(activityStatusType, updateFpEvent) {
    	try {
    		let objFpEvent;
    		if(sql) {
    			objFpEvent = await models.sequelize.fpEvents.findOne({where: { activity_status_type: activityStatusType }});
    			if (objFpEvent) {
    				objFpEvent = await models.sequelize.fpEvents.update(updateFpEvent, { where: { activity_status_type: activityStatusType } });
    			}
    		} else {
    			objFpEvent = await models.mongoose.fpEvents.findOneAndUpdate({activity_status_type: activityStatusType}, {$set: updateFpEvent}, {new: true});
    		}
    		return objFpEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventByDescription(description, updateFpEvent) {
    	try {
    		let objFpEvent;
    		if(sql) {
    			objFpEvent = await models.sequelize.fpEvents.findOne({where: { description: description }});
    			if (objFpEvent) {
    				objFpEvent = await models.sequelize.fpEvents.update(updateFpEvent, { where: { description: description } });
    			}
    		} else {
    			objFpEvent = await models.mongoose.fpEvents.findOneAndUpdate({description: description}, {$set: updateFpEvent}, {new: true});
    		}
    		return objFpEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventByDateEntered(dateEntered, updateFpEvent) {
    	try {
    		let objFpEvent;
    		if(sql) {
    			objFpEvent = await models.sequelize.fpEvents.findOne({where: { date_entered: dateEntered }});
    			if (objFpEvent) {
    				objFpEvent = await models.sequelize.fpEvents.update(updateFpEvent, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objFpEvent = await models.mongoose.fpEvents.findOneAndUpdate({date_entered: dateEntered}, {$set: updateFpEvent}, {new: true});
    		}
    		return objFpEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventByDateModified(dateModified, updateFpEvent) {
    	try {
    		let objFpEvent;
    		if(sql) {
    			objFpEvent = await models.sequelize.fpEvents.findOne({where: { date_modified: dateModified }});
    			if (objFpEvent) {
    				objFpEvent = await models.sequelize.fpEvents.update(updateFpEvent, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objFpEvent = await models.mongoose.fpEvents.findOneAndUpdate({date_modified: dateModified}, {$set: updateFpEvent}, {new: true});
    		}
    		return objFpEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventByDateStart(dateStart, updateFpEvent) {
    	try {
    		let objFpEvent;
    		if(sql) {
    			objFpEvent = await models.sequelize.fpEvents.findOne({where: { date_start: dateStart }});
    			if (objFpEvent) {
    				objFpEvent = await models.sequelize.fpEvents.update(updateFpEvent, { where: { date_start: dateStart } });
    			}
    		} else {
    			objFpEvent = await models.mongoose.fpEvents.findOneAndUpdate({date_start: dateStart}, {$set: updateFpEvent}, {new: true});
    		}
    		return objFpEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventByDateEnd(dateEnd, updateFpEvent) {
    	try {
    		let objFpEvent;
    		if(sql) {
    			objFpEvent = await models.sequelize.fpEvents.findOne({where: { date_end: dateEnd }});
    			if (objFpEvent) {
    				objFpEvent = await models.sequelize.fpEvents.update(updateFpEvent, { where: { date_end: dateEnd } });
    			}
    		} else {
    			objFpEvent = await models.mongoose.fpEvents.findOneAndUpdate({date_end: dateEnd}, {$set: updateFpEvent}, {new: true});
    		}
    		return objFpEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventByModifiedUserId(modifiedUserId, updateFpEvent) {
    	try {
    		let objFpEvent;
    		if(sql) {
    			objFpEvent = await models.sequelize.fpEvents.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objFpEvent) {
    				objFpEvent = await models.sequelize.fpEvents.update(updateFpEvent, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objFpEvent = await models.mongoose.fpEvents.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateFpEvent}, {new: true});
    		}
    		return objFpEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventByCreatedBy(createdBy, updateFpEvent) {
    	try {
    		let objFpEvent;
    		if(sql) {
    			objFpEvent = await models.sequelize.fpEvents.findOne({where: { created_by: createdBy }});
    			if (objFpEvent) {
    				objFpEvent = await models.sequelize.fpEvents.update(updateFpEvent, { where: { created_by: createdBy } });
    			}
    		} else {
    			objFpEvent = await models.mongoose.fpEvents.findOneAndUpdate({created_by: createdBy}, {$set: updateFpEvent}, {new: true});
    		}
    		return objFpEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventByAssignedUserId(assignedUserId, updateFpEvent) {
    	try {
    		let objFpEvent;
    		if(sql) {
    			objFpEvent = await models.sequelize.fpEvents.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objFpEvent) {
    				objFpEvent = await models.sequelize.fpEvents.update(updateFpEvent, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objFpEvent = await models.mongoose.fpEvents.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateFpEvent}, {new: true});
    		}
    		return objFpEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventByCurrencyId(currencyId, updateFpEvent) {
    	try {
    		let objFpEvent;
    		if(sql) {
    			objFpEvent = await models.sequelize.fpEvents.findOne({where: { currency_id: currencyId }});
    			if (objFpEvent) {
    				objFpEvent = await models.sequelize.fpEvents.update(updateFpEvent, { where: { currency_id: currencyId } });
    			}
    		} else {
    			objFpEvent = await models.mongoose.fpEvents.findOneAndUpdate({currency_id: currencyId}, {$set: updateFpEvent}, {new: true});
    		}
    		return objFpEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = FpEventService;
//</es-section>
