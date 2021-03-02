/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:37 GMT-0400 (Bolivia Time)
 * Time: 14:1:37
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:37 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:37
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

class TaskService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllTasks(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.tasks.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.tasks.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllTasks(select = []) {
		try {
			if(sql) {
				return await models.sequelize.tasks.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.tasks.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addTask(newTask) {
		try {
			let objTask;
			if(util.PrimaryKeyTypeIsString(models.sequelize.tasks.primaryKeys.id.type.toString())) {
			    newTask.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objTask = await models.sequelize.tasks.create(newTask);
			} else {
				objTask = new models.mongoose.tasks(newTask);
				await objTask.save();
			}
			return objTask;
		} catch (error) {
			throw error;
		}
	}

	static async updateTask(id, updateTask) {
		try {
			let objTask;
			if(sql) {
				objTask = await models.sequelize.tasks.findOne({where: { id: util.Char(id) }});
				if (objTask) {
					await models.sequelize.tasks.update(updateTask, { where: { id: util.Char(id) } });
					objTask = await models.sequelize.tasks.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateTask._id;
				objTask = await models.mongoose.tasks.findOneAndUpdate({id:id}, {$set: updateTask}, {new: true});
			}
			return objTask;
		} catch (error) {
			throw error;
		}
	}

	static async getATask(id, query) {
		try {
			let objTask;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objTask = await models.sequelize.tasks.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objTask = await models.mongoose.tasks.find({id:util.Char(id)}).select(query.select);
			}
			return objTask;
		} catch (error) {
			throw error;
		}
	}

	static async deleteTask(id) {
		try {
			let objTask;
			if(sql) {
				objTask = await models.sequelize.tasks.findOne({ where: { id: util.Char(id) } });
				if (objTask) {
					await models.sequelize.tasks.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objTask = await models.mongoose.tasks.deleteOne({id:util.Char(id)});
			}
			return objTask;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objTask;
    		if(sql) {
    			objTask = await models.sequelize.tasks.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objTask = await models.mongoose.tasks.findOne({id: id});
    		}
    		return objTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objTask;
    		if(sql) {
    			objTask = await models.sequelize.tasks.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objTask = await models.mongoose.tasks.findOne({deleted: deleted});
    		}
    		return objTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateDueFlag(dateDueFlag, query = {}) {
    	try {
    		let objTask;
    		if(sql) {
    			objTask = await models.sequelize.tasks.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_due_flag: dateDueFlag },
    			});
    		} else {
    			objTask = await models.mongoose.tasks.findOne({date_due_flag: dateDueFlag});
    		}
    		return objTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateStartFlag(dateStartFlag, query = {}) {
    	try {
    		let objTask;
    		if(sql) {
    			objTask = await models.sequelize.tasks.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_start_flag: dateStartFlag },
    			});
    		} else {
    			objTask = await models.mongoose.tasks.findOne({date_start_flag: dateStartFlag});
    		}
    		return objTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objTask;
    		if(sql) {
    			objTask = await models.sequelize.tasks.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objTask = await models.mongoose.tasks.findOne({name: name});
    		}
    		return objTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByStatus(status, query = {}) {
    	try {
    		let objTask;
    		if(sql) {
    			objTask = await models.sequelize.tasks.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { status: status },
    			});
    		} else {
    			objTask = await models.mongoose.tasks.findOne({status: status});
    		}
    		return objTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentType(parentType, query = {}) {
    	try {
    		let objTask;
    		if(sql) {
    			objTask = await models.sequelize.tasks.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_type: parentType },
    			});
    		} else {
    			objTask = await models.mongoose.tasks.findOne({parent_type: parentType});
    		}
    		return objTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPriority(priority, query = {}) {
    	try {
    		let objTask;
    		if(sql) {
    			objTask = await models.sequelize.tasks.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { priority: priority },
    			});
    		} else {
    			objTask = await models.mongoose.tasks.findOne({priority: priority});
    		}
    		return objTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objTask;
    		if(sql) {
    			objTask = await models.sequelize.tasks.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objTask = await models.mongoose.tasks.findOne({description: description});
    		}
    		return objTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objTask;
    		if(sql) {
    			objTask = await models.sequelize.tasks.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objTask = await models.mongoose.tasks.findOne({date_entered: dateEntered});
    		}
    		return objTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objTask;
    		if(sql) {
    			objTask = await models.sequelize.tasks.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objTask = await models.mongoose.tasks.findOne({date_modified: dateModified});
    		}
    		return objTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateDue(dateDue, query = {}) {
    	try {
    		let objTask;
    		if(sql) {
    			objTask = await models.sequelize.tasks.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_due: dateDue },
    			});
    		} else {
    			objTask = await models.mongoose.tasks.findOne({date_due: dateDue});
    		}
    		return objTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateStart(dateStart, query = {}) {
    	try {
    		let objTask;
    		if(sql) {
    			objTask = await models.sequelize.tasks.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_start: dateStart },
    			});
    		} else {
    			objTask = await models.mongoose.tasks.findOne({date_start: dateStart});
    		}
    		return objTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objTask;
    		if(sql) {
    			objTask = await models.sequelize.tasks.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objTask = await models.mongoose.tasks.findOne({modified_user_id: modifiedUserId});
    		}
    		return objTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objTask;
    		if(sql) {
    			objTask = await models.sequelize.tasks.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objTask = await models.mongoose.tasks.findOne({created_by: createdBy});
    		}
    		return objTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objTask;
    		if(sql) {
    			objTask = await models.sequelize.tasks.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objTask = await models.mongoose.tasks.findOne({assigned_user_id: assignedUserId});
    		}
    		return objTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objTask;
    		if(sql) {
    			objTask = await models.sequelize.tasks.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objTask = await models.mongoose.tasks.findOne({parent_id: parentId});
    		}
    		return objTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByContactId(contactId, query = {}) {
    	try {
    		let objTask;
    		if(sql) {
    			objTask = await models.sequelize.tasks.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { contact_id: contactId },
    			});
    		} else {
    			objTask = await models.mongoose.tasks.findOne({contact_id: contactId});
    		}
    		return objTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateTaskById(id, updateTask) {
    	try {
    		let objTask;
    		if(sql) {
    			objTask = await models.sequelize.tasks.findOne({where: { id: id }});
    			if (objTask) {
    				objTask = await models.sequelize.tasks.update(updateTask, { where: { id: id } });
    			}
    		} else {
    			objTask = await models.mongoose.tasks.findOneAndUpdate({id: id}, {$set: updateTask}, {new: true});
    		}
    		return objTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateTaskByDeleted(deleted, updateTask) {
    	try {
    		let objTask;
    		if(sql) {
    			objTask = await models.sequelize.tasks.findOne({where: { deleted: deleted }});
    			if (objTask) {
    				objTask = await models.sequelize.tasks.update(updateTask, { where: { deleted: deleted } });
    			}
    		} else {
    			objTask = await models.mongoose.tasks.findOneAndUpdate({deleted: deleted}, {$set: updateTask}, {new: true});
    		}
    		return objTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateTaskByDateDueFlag(dateDueFlag, updateTask) {
    	try {
    		let objTask;
    		if(sql) {
    			objTask = await models.sequelize.tasks.findOne({where: { date_due_flag: dateDueFlag }});
    			if (objTask) {
    				objTask = await models.sequelize.tasks.update(updateTask, { where: { date_due_flag: dateDueFlag } });
    			}
    		} else {
    			objTask = await models.mongoose.tasks.findOneAndUpdate({date_due_flag: dateDueFlag}, {$set: updateTask}, {new: true});
    		}
    		return objTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateTaskByDateStartFlag(dateStartFlag, updateTask) {
    	try {
    		let objTask;
    		if(sql) {
    			objTask = await models.sequelize.tasks.findOne({where: { date_start_flag: dateStartFlag }});
    			if (objTask) {
    				objTask = await models.sequelize.tasks.update(updateTask, { where: { date_start_flag: dateStartFlag } });
    			}
    		} else {
    			objTask = await models.mongoose.tasks.findOneAndUpdate({date_start_flag: dateStartFlag}, {$set: updateTask}, {new: true});
    		}
    		return objTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateTaskByName(name, updateTask) {
    	try {
    		let objTask;
    		if(sql) {
    			objTask = await models.sequelize.tasks.findOne({where: { name: name }});
    			if (objTask) {
    				objTask = await models.sequelize.tasks.update(updateTask, { where: { name: name } });
    			}
    		} else {
    			objTask = await models.mongoose.tasks.findOneAndUpdate({name: name}, {$set: updateTask}, {new: true});
    		}
    		return objTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateTaskByStatus(status, updateTask) {
    	try {
    		let objTask;
    		if(sql) {
    			objTask = await models.sequelize.tasks.findOne({where: { status: status }});
    			if (objTask) {
    				objTask = await models.sequelize.tasks.update(updateTask, { where: { status: status } });
    			}
    		} else {
    			objTask = await models.mongoose.tasks.findOneAndUpdate({status: status}, {$set: updateTask}, {new: true});
    		}
    		return objTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateTaskByParentType(parentType, updateTask) {
    	try {
    		let objTask;
    		if(sql) {
    			objTask = await models.sequelize.tasks.findOne({where: { parent_type: parentType }});
    			if (objTask) {
    				objTask = await models.sequelize.tasks.update(updateTask, { where: { parent_type: parentType } });
    			}
    		} else {
    			objTask = await models.mongoose.tasks.findOneAndUpdate({parent_type: parentType}, {$set: updateTask}, {new: true});
    		}
    		return objTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateTaskByPriority(priority, updateTask) {
    	try {
    		let objTask;
    		if(sql) {
    			objTask = await models.sequelize.tasks.findOne({where: { priority: priority }});
    			if (objTask) {
    				objTask = await models.sequelize.tasks.update(updateTask, { where: { priority: priority } });
    			}
    		} else {
    			objTask = await models.mongoose.tasks.findOneAndUpdate({priority: priority}, {$set: updateTask}, {new: true});
    		}
    		return objTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateTaskByDescription(description, updateTask) {
    	try {
    		let objTask;
    		if(sql) {
    			objTask = await models.sequelize.tasks.findOne({where: { description: description }});
    			if (objTask) {
    				objTask = await models.sequelize.tasks.update(updateTask, { where: { description: description } });
    			}
    		} else {
    			objTask = await models.mongoose.tasks.findOneAndUpdate({description: description}, {$set: updateTask}, {new: true});
    		}
    		return objTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateTaskByDateEntered(dateEntered, updateTask) {
    	try {
    		let objTask;
    		if(sql) {
    			objTask = await models.sequelize.tasks.findOne({where: { date_entered: dateEntered }});
    			if (objTask) {
    				objTask = await models.sequelize.tasks.update(updateTask, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objTask = await models.mongoose.tasks.findOneAndUpdate({date_entered: dateEntered}, {$set: updateTask}, {new: true});
    		}
    		return objTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateTaskByDateModified(dateModified, updateTask) {
    	try {
    		let objTask;
    		if(sql) {
    			objTask = await models.sequelize.tasks.findOne({where: { date_modified: dateModified }});
    			if (objTask) {
    				objTask = await models.sequelize.tasks.update(updateTask, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objTask = await models.mongoose.tasks.findOneAndUpdate({date_modified: dateModified}, {$set: updateTask}, {new: true});
    		}
    		return objTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateTaskByDateDue(dateDue, updateTask) {
    	try {
    		let objTask;
    		if(sql) {
    			objTask = await models.sequelize.tasks.findOne({where: { date_due: dateDue }});
    			if (objTask) {
    				objTask = await models.sequelize.tasks.update(updateTask, { where: { date_due: dateDue } });
    			}
    		} else {
    			objTask = await models.mongoose.tasks.findOneAndUpdate({date_due: dateDue}, {$set: updateTask}, {new: true});
    		}
    		return objTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateTaskByDateStart(dateStart, updateTask) {
    	try {
    		let objTask;
    		if(sql) {
    			objTask = await models.sequelize.tasks.findOne({where: { date_start: dateStart }});
    			if (objTask) {
    				objTask = await models.sequelize.tasks.update(updateTask, { where: { date_start: dateStart } });
    			}
    		} else {
    			objTask = await models.mongoose.tasks.findOneAndUpdate({date_start: dateStart}, {$set: updateTask}, {new: true});
    		}
    		return objTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateTaskByModifiedUserId(modifiedUserId, updateTask) {
    	try {
    		let objTask;
    		if(sql) {
    			objTask = await models.sequelize.tasks.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objTask) {
    				objTask = await models.sequelize.tasks.update(updateTask, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objTask = await models.mongoose.tasks.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateTask}, {new: true});
    		}
    		return objTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateTaskByCreatedBy(createdBy, updateTask) {
    	try {
    		let objTask;
    		if(sql) {
    			objTask = await models.sequelize.tasks.findOne({where: { created_by: createdBy }});
    			if (objTask) {
    				objTask = await models.sequelize.tasks.update(updateTask, { where: { created_by: createdBy } });
    			}
    		} else {
    			objTask = await models.mongoose.tasks.findOneAndUpdate({created_by: createdBy}, {$set: updateTask}, {new: true});
    		}
    		return objTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateTaskByAssignedUserId(assignedUserId, updateTask) {
    	try {
    		let objTask;
    		if(sql) {
    			objTask = await models.sequelize.tasks.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objTask) {
    				objTask = await models.sequelize.tasks.update(updateTask, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objTask = await models.mongoose.tasks.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateTask}, {new: true});
    		}
    		return objTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateTaskByParentId(parentId, updateTask) {
    	try {
    		let objTask;
    		if(sql) {
    			objTask = await models.sequelize.tasks.findOne({where: { parent_id: parentId }});
    			if (objTask) {
    				objTask = await models.sequelize.tasks.update(updateTask, { where: { parent_id: parentId } });
    			}
    		} else {
    			objTask = await models.mongoose.tasks.findOneAndUpdate({parent_id: parentId}, {$set: updateTask}, {new: true});
    		}
    		return objTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateTaskByContactId(contactId, updateTask) {
    	try {
    		let objTask;
    		if(sql) {
    			objTask = await models.sequelize.tasks.findOne({where: { contact_id: contactId }});
    			if (objTask) {
    				objTask = await models.sequelize.tasks.update(updateTask, { where: { contact_id: contactId } });
    			}
    		} else {
    			objTask = await models.mongoose.tasks.findOneAndUpdate({contact_id: contactId}, {$set: updateTask}, {new: true});
    		}
    		return objTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = TaskService;
//</es-section>
