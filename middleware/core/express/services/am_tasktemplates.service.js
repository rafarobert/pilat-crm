/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:55:54 GMT-0400 (Bolivia Time)
 * Time: 14:55:54
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:55:54 GMT-0400 (Bolivia Time)
 * Last time updated: 14:55:54
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

class AmTasktemplateService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAmTasktemplates(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.amTasktemplates.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.amTasktemplates.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAmTasktemplates(select = []) {
		try {
			if(sql) {
				return await models.sequelize.amTasktemplates.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.amTasktemplates.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAmTasktemplate(newAmTasktemplate) {
		try {
			let objAmTasktemplate;
			if(util.PrimaryKeyTypeIsString(models.sequelize.amTasktemplates.primaryKeys.id.type.toString())) {
			    newAmTasktemplate.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAmTasktemplate = await models.sequelize.amTasktemplates.create(newAmTasktemplate);
			} else {
				objAmTasktemplate = new models.mongoose.amTasktemplates(newAmTasktemplate);
				await objAmTasktemplate.save();
			}
			return objAmTasktemplate;
		} catch (error) {
			throw error;
		}
	}

	static async updateAmTasktemplate(id, updateAmTasktemplate) {
		try {
			let objAmTasktemplate;
			if(sql) {
				objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({where: { id: util.Char(id) }});
				if (objAmTasktemplate) {
					await models.sequelize.amTasktemplates.update(updateAmTasktemplate, { where: { id: util.Char(id) } });
					objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAmTasktemplate._id;
				objAmTasktemplate = await models.mongoose.amTasktemplates.findOneAndUpdate({id:id}, {$set: updateAmTasktemplate}, {new: true});
			}
			return objAmTasktemplate;
		} catch (error) {
			throw error;
		}
	}

	static async getAAmTasktemplate(id, query) {
		try {
			let objAmTasktemplate;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAmTasktemplate = await models.mongoose.amTasktemplates.find({id:util.Char(id)}).select(query.select);
			}
			return objAmTasktemplate;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAmTasktemplate(id) {
		try {
			let objAmTasktemplate;
			if(sql) {
				objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({ where: { id: util.Char(id) } });
				if (objAmTasktemplate) {
					await models.sequelize.amTasktemplates.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAmTasktemplate = await models.mongoose.amTasktemplates.deleteOne({id:util.Char(id)});
			}
			return objAmTasktemplate;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAmTasktemplate;
    		if(sql) {
    			objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAmTasktemplate = await models.mongoose.amTasktemplates.findOne({id: id});
    		}
    		return objAmTasktemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAmTasktemplate;
    		if(sql) {
    			objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAmTasktemplate = await models.mongoose.amTasktemplates.findOne({deleted: deleted});
    		}
    		return objAmTasktemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMilestoneFlag(milestoneFlag, query = {}) {
    	try {
    		let objAmTasktemplate;
    		if(sql) {
    			objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { milestone_flag: milestoneFlag },
    			});
    		} else {
    			objAmTasktemplate = await models.mongoose.amTasktemplates.findOne({milestone_flag: milestoneFlag});
    		}
    		return objAmTasktemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPercentComplete(percentComplete, query = {}) {
    	try {
    		let objAmTasktemplate;
    		if(sql) {
    			objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { percent_complete: percentComplete },
    			});
    		} else {
    			objAmTasktemplate = await models.mongoose.amTasktemplates.findOne({percent_complete: percentComplete});
    		}
    		return objAmTasktemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPredecessors(predecessors, query = {}) {
    	try {
    		let objAmTasktemplate;
    		if(sql) {
    			objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { predecessors: predecessors },
    			});
    		} else {
    			objAmTasktemplate = await models.mongoose.amTasktemplates.findOne({predecessors: predecessors});
    		}
    		return objAmTasktemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTaskNumber(taskNumber, query = {}) {
    	try {
    		let objAmTasktemplate;
    		if(sql) {
    			objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { task_number: taskNumber },
    			});
    		} else {
    			objAmTasktemplate = await models.mongoose.amTasktemplates.findOne({task_number: taskNumber});
    		}
    		return objAmTasktemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByOrderNumber(orderNumber, query = {}) {
    	try {
    		let objAmTasktemplate;
    		if(sql) {
    			objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { order_number: orderNumber },
    			});
    		} else {
    			objAmTasktemplate = await models.mongoose.amTasktemplates.findOne({order_number: orderNumber});
    		}
    		return objAmTasktemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByEstimatedEffort(estimatedEffort, query = {}) {
    	try {
    		let objAmTasktemplate;
    		if(sql) {
    			objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { estimated_effort: estimatedEffort },
    			});
    		} else {
    			objAmTasktemplate = await models.mongoose.amTasktemplates.findOne({estimated_effort: estimatedEffort});
    		}
    		return objAmTasktemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDuration(duration, query = {}) {
    	try {
    		let objAmTasktemplate;
    		if(sql) {
    			objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { duration: duration },
    			});
    		} else {
    			objAmTasktemplate = await models.mongoose.amTasktemplates.findOne({duration: duration});
    		}
    		return objAmTasktemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objAmTasktemplate;
    		if(sql) {
    			objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objAmTasktemplate = await models.mongoose.amTasktemplates.findOne({name: name});
    		}
    		return objAmTasktemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByStatus(status, query = {}) {
    	try {
    		let objAmTasktemplate;
    		if(sql) {
    			objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { status: status },
    			});
    		} else {
    			objAmTasktemplate = await models.mongoose.amTasktemplates.findOne({status: status});
    		}
    		return objAmTasktemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPriority(priority, query = {}) {
    	try {
    		let objAmTasktemplate;
    		if(sql) {
    			objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { priority: priority },
    			});
    		} else {
    			objAmTasktemplate = await models.mongoose.amTasktemplates.findOne({priority: priority});
    		}
    		return objAmTasktemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRelationshipType(relationshipType, query = {}) {
    	try {
    		let objAmTasktemplate;
    		if(sql) {
    			objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { relationship_type: relationshipType },
    			});
    		} else {
    			objAmTasktemplate = await models.mongoose.amTasktemplates.findOne({relationship_type: relationshipType});
    		}
    		return objAmTasktemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUtilization(utilization, query = {}) {
    	try {
    		let objAmTasktemplate;
    		if(sql) {
    			objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { utilization: utilization },
    			});
    		} else {
    			objAmTasktemplate = await models.mongoose.amTasktemplates.findOne({utilization: utilization});
    		}
    		return objAmTasktemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objAmTasktemplate;
    		if(sql) {
    			objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objAmTasktemplate = await models.mongoose.amTasktemplates.findOne({description: description});
    		}
    		return objAmTasktemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objAmTasktemplate;
    		if(sql) {
    			objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objAmTasktemplate = await models.mongoose.amTasktemplates.findOne({date_entered: dateEntered});
    		}
    		return objAmTasktemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAmTasktemplate;
    		if(sql) {
    			objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAmTasktemplate = await models.mongoose.amTasktemplates.findOne({date_modified: dateModified});
    		}
    		return objAmTasktemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objAmTasktemplate;
    		if(sql) {
    			objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objAmTasktemplate = await models.mongoose.amTasktemplates.findOne({modified_user_id: modifiedUserId});
    		}
    		return objAmTasktemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAmTasktemplate;
    		if(sql) {
    			objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAmTasktemplate = await models.mongoose.amTasktemplates.findOne({created_by: createdBy});
    		}
    		return objAmTasktemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objAmTasktemplate;
    		if(sql) {
    			objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objAmTasktemplate = await models.mongoose.amTasktemplates.findOne({assigned_user_id: assignedUserId});
    		}
    		return objAmTasktemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAmTasktemplateById(id, updateAmTasktemplate) {
    	try {
    		let objAmTasktemplate;
    		if(sql) {
    			objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({where: { id: id }});
    			if (objAmTasktemplate) {
    				objAmTasktemplate = await models.sequelize.amTasktemplates.update(updateAmTasktemplate, { where: { id: id } });
    			}
    		} else {
    			objAmTasktemplate = await models.mongoose.amTasktemplates.findOneAndUpdate({id: id}, {$set: updateAmTasktemplate}, {new: true});
    		}
    		return objAmTasktemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmTasktemplateByDeleted(deleted, updateAmTasktemplate) {
    	try {
    		let objAmTasktemplate;
    		if(sql) {
    			objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({where: { deleted: deleted }});
    			if (objAmTasktemplate) {
    				objAmTasktemplate = await models.sequelize.amTasktemplates.update(updateAmTasktemplate, { where: { deleted: deleted } });
    			}
    		} else {
    			objAmTasktemplate = await models.mongoose.amTasktemplates.findOneAndUpdate({deleted: deleted}, {$set: updateAmTasktemplate}, {new: true});
    		}
    		return objAmTasktemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmTasktemplateByMilestoneFlag(milestoneFlag, updateAmTasktemplate) {
    	try {
    		let objAmTasktemplate;
    		if(sql) {
    			objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({where: { milestone_flag: milestoneFlag }});
    			if (objAmTasktemplate) {
    				objAmTasktemplate = await models.sequelize.amTasktemplates.update(updateAmTasktemplate, { where: { milestone_flag: milestoneFlag } });
    			}
    		} else {
    			objAmTasktemplate = await models.mongoose.amTasktemplates.findOneAndUpdate({milestone_flag: milestoneFlag}, {$set: updateAmTasktemplate}, {new: true});
    		}
    		return objAmTasktemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmTasktemplateByPercentComplete(percentComplete, updateAmTasktemplate) {
    	try {
    		let objAmTasktemplate;
    		if(sql) {
    			objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({where: { percent_complete: percentComplete }});
    			if (objAmTasktemplate) {
    				objAmTasktemplate = await models.sequelize.amTasktemplates.update(updateAmTasktemplate, { where: { percent_complete: percentComplete } });
    			}
    		} else {
    			objAmTasktemplate = await models.mongoose.amTasktemplates.findOneAndUpdate({percent_complete: percentComplete}, {$set: updateAmTasktemplate}, {new: true});
    		}
    		return objAmTasktemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmTasktemplateByPredecessors(predecessors, updateAmTasktemplate) {
    	try {
    		let objAmTasktemplate;
    		if(sql) {
    			objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({where: { predecessors: predecessors }});
    			if (objAmTasktemplate) {
    				objAmTasktemplate = await models.sequelize.amTasktemplates.update(updateAmTasktemplate, { where: { predecessors: predecessors } });
    			}
    		} else {
    			objAmTasktemplate = await models.mongoose.amTasktemplates.findOneAndUpdate({predecessors: predecessors}, {$set: updateAmTasktemplate}, {new: true});
    		}
    		return objAmTasktemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmTasktemplateByTaskNumber(taskNumber, updateAmTasktemplate) {
    	try {
    		let objAmTasktemplate;
    		if(sql) {
    			objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({where: { task_number: taskNumber }});
    			if (objAmTasktemplate) {
    				objAmTasktemplate = await models.sequelize.amTasktemplates.update(updateAmTasktemplate, { where: { task_number: taskNumber } });
    			}
    		} else {
    			objAmTasktemplate = await models.mongoose.amTasktemplates.findOneAndUpdate({task_number: taskNumber}, {$set: updateAmTasktemplate}, {new: true});
    		}
    		return objAmTasktemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmTasktemplateByOrderNumber(orderNumber, updateAmTasktemplate) {
    	try {
    		let objAmTasktemplate;
    		if(sql) {
    			objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({where: { order_number: orderNumber }});
    			if (objAmTasktemplate) {
    				objAmTasktemplate = await models.sequelize.amTasktemplates.update(updateAmTasktemplate, { where: { order_number: orderNumber } });
    			}
    		} else {
    			objAmTasktemplate = await models.mongoose.amTasktemplates.findOneAndUpdate({order_number: orderNumber}, {$set: updateAmTasktemplate}, {new: true});
    		}
    		return objAmTasktemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmTasktemplateByEstimatedEffort(estimatedEffort, updateAmTasktemplate) {
    	try {
    		let objAmTasktemplate;
    		if(sql) {
    			objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({where: { estimated_effort: estimatedEffort }});
    			if (objAmTasktemplate) {
    				objAmTasktemplate = await models.sequelize.amTasktemplates.update(updateAmTasktemplate, { where: { estimated_effort: estimatedEffort } });
    			}
    		} else {
    			objAmTasktemplate = await models.mongoose.amTasktemplates.findOneAndUpdate({estimated_effort: estimatedEffort}, {$set: updateAmTasktemplate}, {new: true});
    		}
    		return objAmTasktemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmTasktemplateByDuration(duration, updateAmTasktemplate) {
    	try {
    		let objAmTasktemplate;
    		if(sql) {
    			objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({where: { duration: duration }});
    			if (objAmTasktemplate) {
    				objAmTasktemplate = await models.sequelize.amTasktemplates.update(updateAmTasktemplate, { where: { duration: duration } });
    			}
    		} else {
    			objAmTasktemplate = await models.mongoose.amTasktemplates.findOneAndUpdate({duration: duration}, {$set: updateAmTasktemplate}, {new: true});
    		}
    		return objAmTasktemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmTasktemplateByName(name, updateAmTasktemplate) {
    	try {
    		let objAmTasktemplate;
    		if(sql) {
    			objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({where: { name: name }});
    			if (objAmTasktemplate) {
    				objAmTasktemplate = await models.sequelize.amTasktemplates.update(updateAmTasktemplate, { where: { name: name } });
    			}
    		} else {
    			objAmTasktemplate = await models.mongoose.amTasktemplates.findOneAndUpdate({name: name}, {$set: updateAmTasktemplate}, {new: true});
    		}
    		return objAmTasktemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmTasktemplateByStatus(status, updateAmTasktemplate) {
    	try {
    		let objAmTasktemplate;
    		if(sql) {
    			objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({where: { status: status }});
    			if (objAmTasktemplate) {
    				objAmTasktemplate = await models.sequelize.amTasktemplates.update(updateAmTasktemplate, { where: { status: status } });
    			}
    		} else {
    			objAmTasktemplate = await models.mongoose.amTasktemplates.findOneAndUpdate({status: status}, {$set: updateAmTasktemplate}, {new: true});
    		}
    		return objAmTasktemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmTasktemplateByPriority(priority, updateAmTasktemplate) {
    	try {
    		let objAmTasktemplate;
    		if(sql) {
    			objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({where: { priority: priority }});
    			if (objAmTasktemplate) {
    				objAmTasktemplate = await models.sequelize.amTasktemplates.update(updateAmTasktemplate, { where: { priority: priority } });
    			}
    		} else {
    			objAmTasktemplate = await models.mongoose.amTasktemplates.findOneAndUpdate({priority: priority}, {$set: updateAmTasktemplate}, {new: true});
    		}
    		return objAmTasktemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmTasktemplateByRelationshipType(relationshipType, updateAmTasktemplate) {
    	try {
    		let objAmTasktemplate;
    		if(sql) {
    			objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({where: { relationship_type: relationshipType }});
    			if (objAmTasktemplate) {
    				objAmTasktemplate = await models.sequelize.amTasktemplates.update(updateAmTasktemplate, { where: { relationship_type: relationshipType } });
    			}
    		} else {
    			objAmTasktemplate = await models.mongoose.amTasktemplates.findOneAndUpdate({relationship_type: relationshipType}, {$set: updateAmTasktemplate}, {new: true});
    		}
    		return objAmTasktemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmTasktemplateByUtilization(utilization, updateAmTasktemplate) {
    	try {
    		let objAmTasktemplate;
    		if(sql) {
    			objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({where: { utilization: utilization }});
    			if (objAmTasktemplate) {
    				objAmTasktemplate = await models.sequelize.amTasktemplates.update(updateAmTasktemplate, { where: { utilization: utilization } });
    			}
    		} else {
    			objAmTasktemplate = await models.mongoose.amTasktemplates.findOneAndUpdate({utilization: utilization}, {$set: updateAmTasktemplate}, {new: true});
    		}
    		return objAmTasktemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmTasktemplateByDescription(description, updateAmTasktemplate) {
    	try {
    		let objAmTasktemplate;
    		if(sql) {
    			objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({where: { description: description }});
    			if (objAmTasktemplate) {
    				objAmTasktemplate = await models.sequelize.amTasktemplates.update(updateAmTasktemplate, { where: { description: description } });
    			}
    		} else {
    			objAmTasktemplate = await models.mongoose.amTasktemplates.findOneAndUpdate({description: description}, {$set: updateAmTasktemplate}, {new: true});
    		}
    		return objAmTasktemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmTasktemplateByDateEntered(dateEntered, updateAmTasktemplate) {
    	try {
    		let objAmTasktemplate;
    		if(sql) {
    			objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({where: { date_entered: dateEntered }});
    			if (objAmTasktemplate) {
    				objAmTasktemplate = await models.sequelize.amTasktemplates.update(updateAmTasktemplate, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objAmTasktemplate = await models.mongoose.amTasktemplates.findOneAndUpdate({date_entered: dateEntered}, {$set: updateAmTasktemplate}, {new: true});
    		}
    		return objAmTasktemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmTasktemplateByDateModified(dateModified, updateAmTasktemplate) {
    	try {
    		let objAmTasktemplate;
    		if(sql) {
    			objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({where: { date_modified: dateModified }});
    			if (objAmTasktemplate) {
    				objAmTasktemplate = await models.sequelize.amTasktemplates.update(updateAmTasktemplate, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAmTasktemplate = await models.mongoose.amTasktemplates.findOneAndUpdate({date_modified: dateModified}, {$set: updateAmTasktemplate}, {new: true});
    		}
    		return objAmTasktemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmTasktemplateByModifiedUserId(modifiedUserId, updateAmTasktemplate) {
    	try {
    		let objAmTasktemplate;
    		if(sql) {
    			objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objAmTasktemplate) {
    				objAmTasktemplate = await models.sequelize.amTasktemplates.update(updateAmTasktemplate, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objAmTasktemplate = await models.mongoose.amTasktemplates.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateAmTasktemplate}, {new: true});
    		}
    		return objAmTasktemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmTasktemplateByCreatedBy(createdBy, updateAmTasktemplate) {
    	try {
    		let objAmTasktemplate;
    		if(sql) {
    			objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({where: { created_by: createdBy }});
    			if (objAmTasktemplate) {
    				objAmTasktemplate = await models.sequelize.amTasktemplates.update(updateAmTasktemplate, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAmTasktemplate = await models.mongoose.amTasktemplates.findOneAndUpdate({created_by: createdBy}, {$set: updateAmTasktemplate}, {new: true});
    		}
    		return objAmTasktemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmTasktemplateByAssignedUserId(assignedUserId, updateAmTasktemplate) {
    	try {
    		let objAmTasktemplate;
    		if(sql) {
    			objAmTasktemplate = await models.sequelize.amTasktemplates.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objAmTasktemplate) {
    				objAmTasktemplate = await models.sequelize.amTasktemplates.update(updateAmTasktemplate, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objAmTasktemplate = await models.mongoose.amTasktemplates.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateAmTasktemplate}, {new: true});
    		}
    		return objAmTasktemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AmTasktemplateService;
//</es-section>
