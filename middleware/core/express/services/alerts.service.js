/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:01 GMT-0400 (Bolivia Time)
 * Time: 15:35:1
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:01 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:1
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

class AlertService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAlerts(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.alerts.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.alerts.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAlerts(select = []) {
		try {
			if(sql) {
				return await models.sequelize.alerts.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.alerts.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAlert(newAlert) {
		try {
			let objAlert;
			if(util.PrimaryKeyTypeIsString(models.sequelize.alerts.primaryKeys.id.type.toString())) {
			    newAlert.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAlert = await models.sequelize.alerts.create(newAlert);
			} else {
				objAlert = new models.mongoose.alerts(newAlert);
				await objAlert.save();
			}
			return objAlert;
		} catch (error) {
			throw error;
		}
	}

	static async updateAlert(id, updateAlert) {
		try {
			let objAlert;
			if(sql) {
				objAlert = await models.sequelize.alerts.findOne({where: { id: util.Char(id) }});
				if (objAlert) {
					await models.sequelize.alerts.update(updateAlert, { where: { id: util.Char(id) } });
					objAlert = await models.sequelize.alerts.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAlert._id;
				objAlert = await models.mongoose.alerts.findOneAndUpdate({id:id}, {$set: updateAlert}, {new: true});
			}
			return objAlert;
		} catch (error) {
			throw error;
		}
	}

	static async getAAlert(id, query) {
		try {
			let objAlert;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAlert = await models.sequelize.alerts.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAlert = await models.mongoose.alerts.find({id:util.Char(id)}).select(query.select);
			}
			return objAlert;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAlert(id) {
		try {
			let objAlert;
			if(sql) {
				objAlert = await models.sequelize.alerts.findOne({ where: { id: util.Char(id) } });
				if (objAlert) {
					await models.sequelize.alerts.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAlert = await models.mongoose.alerts.deleteOne({id:util.Char(id)});
			}
			return objAlert;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAlert;
    		if(sql) {
    			objAlert = await models.sequelize.alerts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAlert = await models.mongoose.alerts.findOne({id: id});
    		}
    		return objAlert;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAlert;
    		if(sql) {
    			objAlert = await models.sequelize.alerts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAlert = await models.mongoose.alerts.findOne({deleted: deleted});
    		}
    		return objAlert;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByIsRead(isRead, query = {}) {
    	try {
    		let objAlert;
    		if(sql) {
    			objAlert = await models.sequelize.alerts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { is_read: isRead },
    			});
    		} else {
    			objAlert = await models.mongoose.alerts.findOne({is_read: isRead});
    		}
    		return objAlert;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objAlert;
    		if(sql) {
    			objAlert = await models.sequelize.alerts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objAlert = await models.mongoose.alerts.findOne({name: name});
    		}
    		return objAlert;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTargetModule(targetModule, query = {}) {
    	try {
    		let objAlert;
    		if(sql) {
    			objAlert = await models.sequelize.alerts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { target_module: targetModule },
    			});
    		} else {
    			objAlert = await models.mongoose.alerts.findOne({target_module: targetModule});
    		}
    		return objAlert;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByType(type, query = {}) {
    	try {
    		let objAlert;
    		if(sql) {
    			objAlert = await models.sequelize.alerts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { type: type },
    			});
    		} else {
    			objAlert = await models.mongoose.alerts.findOne({type: type});
    		}
    		return objAlert;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUrlRedirect(urlRedirect, query = {}) {
    	try {
    		let objAlert;
    		if(sql) {
    			objAlert = await models.sequelize.alerts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { url_redirect: urlRedirect },
    			});
    		} else {
    			objAlert = await models.mongoose.alerts.findOne({url_redirect: urlRedirect});
    		}
    		return objAlert;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objAlert;
    		if(sql) {
    			objAlert = await models.sequelize.alerts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objAlert = await models.mongoose.alerts.findOne({description: description});
    		}
    		return objAlert;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objAlert;
    		if(sql) {
    			objAlert = await models.sequelize.alerts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objAlert = await models.mongoose.alerts.findOne({date_entered: dateEntered});
    		}
    		return objAlert;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAlert;
    		if(sql) {
    			objAlert = await models.sequelize.alerts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAlert = await models.mongoose.alerts.findOne({date_modified: dateModified});
    		}
    		return objAlert;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objAlert;
    		if(sql) {
    			objAlert = await models.sequelize.alerts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objAlert = await models.mongoose.alerts.findOne({modified_user_id: modifiedUserId});
    		}
    		return objAlert;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAlert;
    		if(sql) {
    			objAlert = await models.sequelize.alerts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAlert = await models.mongoose.alerts.findOne({created_by: createdBy});
    		}
    		return objAlert;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objAlert;
    		if(sql) {
    			objAlert = await models.sequelize.alerts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objAlert = await models.mongoose.alerts.findOne({assigned_user_id: assignedUserId});
    		}
    		return objAlert;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByReminderId(reminderId, query = {}) {
    	try {
    		let objAlert;
    		if(sql) {
    			objAlert = await models.sequelize.alerts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { reminder_id: reminderId },
    			});
    		} else {
    			objAlert = await models.mongoose.alerts.findOne({reminder_id: reminderId});
    		}
    		return objAlert;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAlertById(id, updateAlert) {
    	try {
    		let objAlert;
    		if(sql) {
    			objAlert = await models.sequelize.alerts.findOne({where: { id: id }});
    			if (objAlert) {
    				objAlert = await models.sequelize.alerts.update(updateAlert, { where: { id: id } });
    			}
    		} else {
    			objAlert = await models.mongoose.alerts.findOneAndUpdate({id: id}, {$set: updateAlert}, {new: true});
    		}
    		return objAlert;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAlertByDeleted(deleted, updateAlert) {
    	try {
    		let objAlert;
    		if(sql) {
    			objAlert = await models.sequelize.alerts.findOne({where: { deleted: deleted }});
    			if (objAlert) {
    				objAlert = await models.sequelize.alerts.update(updateAlert, { where: { deleted: deleted } });
    			}
    		} else {
    			objAlert = await models.mongoose.alerts.findOneAndUpdate({deleted: deleted}, {$set: updateAlert}, {new: true});
    		}
    		return objAlert;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAlertByIsRead(isRead, updateAlert) {
    	try {
    		let objAlert;
    		if(sql) {
    			objAlert = await models.sequelize.alerts.findOne({where: { is_read: isRead }});
    			if (objAlert) {
    				objAlert = await models.sequelize.alerts.update(updateAlert, { where: { is_read: isRead } });
    			}
    		} else {
    			objAlert = await models.mongoose.alerts.findOneAndUpdate({is_read: isRead}, {$set: updateAlert}, {new: true});
    		}
    		return objAlert;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAlertByName(name, updateAlert) {
    	try {
    		let objAlert;
    		if(sql) {
    			objAlert = await models.sequelize.alerts.findOne({where: { name: name }});
    			if (objAlert) {
    				objAlert = await models.sequelize.alerts.update(updateAlert, { where: { name: name } });
    			}
    		} else {
    			objAlert = await models.mongoose.alerts.findOneAndUpdate({name: name}, {$set: updateAlert}, {new: true});
    		}
    		return objAlert;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAlertByTargetModule(targetModule, updateAlert) {
    	try {
    		let objAlert;
    		if(sql) {
    			objAlert = await models.sequelize.alerts.findOne({where: { target_module: targetModule }});
    			if (objAlert) {
    				objAlert = await models.sequelize.alerts.update(updateAlert, { where: { target_module: targetModule } });
    			}
    		} else {
    			objAlert = await models.mongoose.alerts.findOneAndUpdate({target_module: targetModule}, {$set: updateAlert}, {new: true});
    		}
    		return objAlert;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAlertByType(type, updateAlert) {
    	try {
    		let objAlert;
    		if(sql) {
    			objAlert = await models.sequelize.alerts.findOne({where: { type: type }});
    			if (objAlert) {
    				objAlert = await models.sequelize.alerts.update(updateAlert, { where: { type: type } });
    			}
    		} else {
    			objAlert = await models.mongoose.alerts.findOneAndUpdate({type: type}, {$set: updateAlert}, {new: true});
    		}
    		return objAlert;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAlertByUrlRedirect(urlRedirect, updateAlert) {
    	try {
    		let objAlert;
    		if(sql) {
    			objAlert = await models.sequelize.alerts.findOne({where: { url_redirect: urlRedirect }});
    			if (objAlert) {
    				objAlert = await models.sequelize.alerts.update(updateAlert, { where: { url_redirect: urlRedirect } });
    			}
    		} else {
    			objAlert = await models.mongoose.alerts.findOneAndUpdate({url_redirect: urlRedirect}, {$set: updateAlert}, {new: true});
    		}
    		return objAlert;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAlertByDescription(description, updateAlert) {
    	try {
    		let objAlert;
    		if(sql) {
    			objAlert = await models.sequelize.alerts.findOne({where: { description: description }});
    			if (objAlert) {
    				objAlert = await models.sequelize.alerts.update(updateAlert, { where: { description: description } });
    			}
    		} else {
    			objAlert = await models.mongoose.alerts.findOneAndUpdate({description: description}, {$set: updateAlert}, {new: true});
    		}
    		return objAlert;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAlertByDateEntered(dateEntered, updateAlert) {
    	try {
    		let objAlert;
    		if(sql) {
    			objAlert = await models.sequelize.alerts.findOne({where: { date_entered: dateEntered }});
    			if (objAlert) {
    				objAlert = await models.sequelize.alerts.update(updateAlert, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objAlert = await models.mongoose.alerts.findOneAndUpdate({date_entered: dateEntered}, {$set: updateAlert}, {new: true});
    		}
    		return objAlert;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAlertByDateModified(dateModified, updateAlert) {
    	try {
    		let objAlert;
    		if(sql) {
    			objAlert = await models.sequelize.alerts.findOne({where: { date_modified: dateModified }});
    			if (objAlert) {
    				objAlert = await models.sequelize.alerts.update(updateAlert, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAlert = await models.mongoose.alerts.findOneAndUpdate({date_modified: dateModified}, {$set: updateAlert}, {new: true});
    		}
    		return objAlert;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAlertByModifiedUserId(modifiedUserId, updateAlert) {
    	try {
    		let objAlert;
    		if(sql) {
    			objAlert = await models.sequelize.alerts.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objAlert) {
    				objAlert = await models.sequelize.alerts.update(updateAlert, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objAlert = await models.mongoose.alerts.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateAlert}, {new: true});
    		}
    		return objAlert;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAlertByCreatedBy(createdBy, updateAlert) {
    	try {
    		let objAlert;
    		if(sql) {
    			objAlert = await models.sequelize.alerts.findOne({where: { created_by: createdBy }});
    			if (objAlert) {
    				objAlert = await models.sequelize.alerts.update(updateAlert, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAlert = await models.mongoose.alerts.findOneAndUpdate({created_by: createdBy}, {$set: updateAlert}, {new: true});
    		}
    		return objAlert;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAlertByAssignedUserId(assignedUserId, updateAlert) {
    	try {
    		let objAlert;
    		if(sql) {
    			objAlert = await models.sequelize.alerts.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objAlert) {
    				objAlert = await models.sequelize.alerts.update(updateAlert, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objAlert = await models.mongoose.alerts.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateAlert}, {new: true});
    		}
    		return objAlert;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAlertByReminderId(reminderId, updateAlert) {
    	try {
    		let objAlert;
    		if(sql) {
    			objAlert = await models.sequelize.alerts.findOne({where: { reminder_id: reminderId }});
    			if (objAlert) {
    				objAlert = await models.sequelize.alerts.update(updateAlert, { where: { reminder_id: reminderId } });
    			}
    		} else {
    			objAlert = await models.mongoose.alerts.findOneAndUpdate({reminder_id: reminderId}, {$set: updateAlert}, {new: true});
    		}
    		return objAlert;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AlertService;
//</es-section>
