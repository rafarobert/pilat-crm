/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:09 GMT-0400 (Bolivia Time)
 * Time: 14:0:9
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:09 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:9
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

class AopCaseEventService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAopCaseEvents(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aopCaseEvents.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aopCaseEvents.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAopCaseEvents(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aopCaseEvents.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aopCaseEvents.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAopCaseEvent(newAopCaseEvent) {
		try {
			let objAopCaseEvent;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aopCaseEvents.primaryKeys.id.type.toString())) {
			    newAopCaseEvent.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAopCaseEvent = await models.sequelize.aopCaseEvents.create(newAopCaseEvent);
			} else {
				objAopCaseEvent = new models.mongoose.aopCaseEvents(newAopCaseEvent);
				await objAopCaseEvent.save();
			}
			return objAopCaseEvent;
		} catch (error) {
			throw error;
		}
	}

	static async updateAopCaseEvent(id, updateAopCaseEvent) {
		try {
			let objAopCaseEvent;
			if(sql) {
				objAopCaseEvent = await models.sequelize.aopCaseEvents.findOne({where: { id: util.Char(id) }});
				if (objAopCaseEvent) {
					await models.sequelize.aopCaseEvents.update(updateAopCaseEvent, { where: { id: util.Char(id) } });
					objAopCaseEvent = await models.sequelize.aopCaseEvents.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAopCaseEvent._id;
				objAopCaseEvent = await models.mongoose.aopCaseEvents.findOneAndUpdate({id:id}, {$set: updateAopCaseEvent}, {new: true});
			}
			return objAopCaseEvent;
		} catch (error) {
			throw error;
		}
	}

	static async getAAopCaseEvent(id, query) {
		try {
			let objAopCaseEvent;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAopCaseEvent = await models.sequelize.aopCaseEvents.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAopCaseEvent = await models.mongoose.aopCaseEvents.find({id:util.Char(id)}).select(query.select);
			}
			return objAopCaseEvent;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAopCaseEvent(id) {
		try {
			let objAopCaseEvent;
			if(sql) {
				objAopCaseEvent = await models.sequelize.aopCaseEvents.findOne({ where: { id: util.Char(id) } });
				if (objAopCaseEvent) {
					await models.sequelize.aopCaseEvents.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAopCaseEvent = await models.mongoose.aopCaseEvents.deleteOne({id:util.Char(id)});
			}
			return objAopCaseEvent;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAopCaseEvent;
    		if(sql) {
    			objAopCaseEvent = await models.sequelize.aopCaseEvents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAopCaseEvent = await models.mongoose.aopCaseEvents.findOne({id: id});
    		}
    		return objAopCaseEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAopCaseEvent;
    		if(sql) {
    			objAopCaseEvent = await models.sequelize.aopCaseEvents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAopCaseEvent = await models.mongoose.aopCaseEvents.findOne({deleted: deleted});
    		}
    		return objAopCaseEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objAopCaseEvent;
    		if(sql) {
    			objAopCaseEvent = await models.sequelize.aopCaseEvents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objAopCaseEvent = await models.mongoose.aopCaseEvents.findOne({name: name});
    		}
    		return objAopCaseEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objAopCaseEvent;
    		if(sql) {
    			objAopCaseEvent = await models.sequelize.aopCaseEvents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objAopCaseEvent = await models.mongoose.aopCaseEvents.findOne({description: description});
    		}
    		return objAopCaseEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objAopCaseEvent;
    		if(sql) {
    			objAopCaseEvent = await models.sequelize.aopCaseEvents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objAopCaseEvent = await models.mongoose.aopCaseEvents.findOne({date_entered: dateEntered});
    		}
    		return objAopCaseEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAopCaseEvent;
    		if(sql) {
    			objAopCaseEvent = await models.sequelize.aopCaseEvents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAopCaseEvent = await models.mongoose.aopCaseEvents.findOne({date_modified: dateModified});
    		}
    		return objAopCaseEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objAopCaseEvent;
    		if(sql) {
    			objAopCaseEvent = await models.sequelize.aopCaseEvents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objAopCaseEvent = await models.mongoose.aopCaseEvents.findOne({modified_user_id: modifiedUserId});
    		}
    		return objAopCaseEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAopCaseEvent;
    		if(sql) {
    			objAopCaseEvent = await models.sequelize.aopCaseEvents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAopCaseEvent = await models.mongoose.aopCaseEvents.findOne({created_by: createdBy});
    		}
    		return objAopCaseEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objAopCaseEvent;
    		if(sql) {
    			objAopCaseEvent = await models.sequelize.aopCaseEvents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objAopCaseEvent = await models.mongoose.aopCaseEvents.findOne({assigned_user_id: assignedUserId});
    		}
    		return objAopCaseEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCaseId(caseId, query = {}) {
    	try {
    		let objAopCaseEvent;
    		if(sql) {
    			objAopCaseEvent = await models.sequelize.aopCaseEvents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { case_id: caseId },
    			});
    		} else {
    			objAopCaseEvent = await models.mongoose.aopCaseEvents.findOne({case_id: caseId});
    		}
    		return objAopCaseEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAopCaseEventById(id, updateAopCaseEvent) {
    	try {
    		let objAopCaseEvent;
    		if(sql) {
    			objAopCaseEvent = await models.sequelize.aopCaseEvents.findOne({where: { id: id }});
    			if (objAopCaseEvent) {
    				objAopCaseEvent = await models.sequelize.aopCaseEvents.update(updateAopCaseEvent, { where: { id: id } });
    			}
    		} else {
    			objAopCaseEvent = await models.mongoose.aopCaseEvents.findOneAndUpdate({id: id}, {$set: updateAopCaseEvent}, {new: true});
    		}
    		return objAopCaseEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAopCaseEventByDeleted(deleted, updateAopCaseEvent) {
    	try {
    		let objAopCaseEvent;
    		if(sql) {
    			objAopCaseEvent = await models.sequelize.aopCaseEvents.findOne({where: { deleted: deleted }});
    			if (objAopCaseEvent) {
    				objAopCaseEvent = await models.sequelize.aopCaseEvents.update(updateAopCaseEvent, { where: { deleted: deleted } });
    			}
    		} else {
    			objAopCaseEvent = await models.mongoose.aopCaseEvents.findOneAndUpdate({deleted: deleted}, {$set: updateAopCaseEvent}, {new: true});
    		}
    		return objAopCaseEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAopCaseEventByName(name, updateAopCaseEvent) {
    	try {
    		let objAopCaseEvent;
    		if(sql) {
    			objAopCaseEvent = await models.sequelize.aopCaseEvents.findOne({where: { name: name }});
    			if (objAopCaseEvent) {
    				objAopCaseEvent = await models.sequelize.aopCaseEvents.update(updateAopCaseEvent, { where: { name: name } });
    			}
    		} else {
    			objAopCaseEvent = await models.mongoose.aopCaseEvents.findOneAndUpdate({name: name}, {$set: updateAopCaseEvent}, {new: true});
    		}
    		return objAopCaseEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAopCaseEventByDescription(description, updateAopCaseEvent) {
    	try {
    		let objAopCaseEvent;
    		if(sql) {
    			objAopCaseEvent = await models.sequelize.aopCaseEvents.findOne({where: { description: description }});
    			if (objAopCaseEvent) {
    				objAopCaseEvent = await models.sequelize.aopCaseEvents.update(updateAopCaseEvent, { where: { description: description } });
    			}
    		} else {
    			objAopCaseEvent = await models.mongoose.aopCaseEvents.findOneAndUpdate({description: description}, {$set: updateAopCaseEvent}, {new: true});
    		}
    		return objAopCaseEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAopCaseEventByDateEntered(dateEntered, updateAopCaseEvent) {
    	try {
    		let objAopCaseEvent;
    		if(sql) {
    			objAopCaseEvent = await models.sequelize.aopCaseEvents.findOne({where: { date_entered: dateEntered }});
    			if (objAopCaseEvent) {
    				objAopCaseEvent = await models.sequelize.aopCaseEvents.update(updateAopCaseEvent, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objAopCaseEvent = await models.mongoose.aopCaseEvents.findOneAndUpdate({date_entered: dateEntered}, {$set: updateAopCaseEvent}, {new: true});
    		}
    		return objAopCaseEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAopCaseEventByDateModified(dateModified, updateAopCaseEvent) {
    	try {
    		let objAopCaseEvent;
    		if(sql) {
    			objAopCaseEvent = await models.sequelize.aopCaseEvents.findOne({where: { date_modified: dateModified }});
    			if (objAopCaseEvent) {
    				objAopCaseEvent = await models.sequelize.aopCaseEvents.update(updateAopCaseEvent, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAopCaseEvent = await models.mongoose.aopCaseEvents.findOneAndUpdate({date_modified: dateModified}, {$set: updateAopCaseEvent}, {new: true});
    		}
    		return objAopCaseEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAopCaseEventByModifiedUserId(modifiedUserId, updateAopCaseEvent) {
    	try {
    		let objAopCaseEvent;
    		if(sql) {
    			objAopCaseEvent = await models.sequelize.aopCaseEvents.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objAopCaseEvent) {
    				objAopCaseEvent = await models.sequelize.aopCaseEvents.update(updateAopCaseEvent, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objAopCaseEvent = await models.mongoose.aopCaseEvents.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateAopCaseEvent}, {new: true});
    		}
    		return objAopCaseEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAopCaseEventByCreatedBy(createdBy, updateAopCaseEvent) {
    	try {
    		let objAopCaseEvent;
    		if(sql) {
    			objAopCaseEvent = await models.sequelize.aopCaseEvents.findOne({where: { created_by: createdBy }});
    			if (objAopCaseEvent) {
    				objAopCaseEvent = await models.sequelize.aopCaseEvents.update(updateAopCaseEvent, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAopCaseEvent = await models.mongoose.aopCaseEvents.findOneAndUpdate({created_by: createdBy}, {$set: updateAopCaseEvent}, {new: true});
    		}
    		return objAopCaseEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAopCaseEventByAssignedUserId(assignedUserId, updateAopCaseEvent) {
    	try {
    		let objAopCaseEvent;
    		if(sql) {
    			objAopCaseEvent = await models.sequelize.aopCaseEvents.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objAopCaseEvent) {
    				objAopCaseEvent = await models.sequelize.aopCaseEvents.update(updateAopCaseEvent, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objAopCaseEvent = await models.mongoose.aopCaseEvents.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateAopCaseEvent}, {new: true});
    		}
    		return objAopCaseEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAopCaseEventByCaseId(caseId, updateAopCaseEvent) {
    	try {
    		let objAopCaseEvent;
    		if(sql) {
    			objAopCaseEvent = await models.sequelize.aopCaseEvents.findOne({where: { case_id: caseId }});
    			if (objAopCaseEvent) {
    				objAopCaseEvent = await models.sequelize.aopCaseEvents.update(updateAopCaseEvent, { where: { case_id: caseId } });
    			}
    		} else {
    			objAopCaseEvent = await models.mongoose.aopCaseEvents.findOneAndUpdate({case_id: caseId}, {$set: updateAopCaseEvent}, {new: true});
    		}
    		return objAopCaseEvent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AopCaseEventService;
//</es-section>
