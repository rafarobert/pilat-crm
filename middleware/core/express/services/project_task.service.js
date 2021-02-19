/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:23 GMT-0400 (Bolivia Time)
 * Time: 18:38:23
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:23 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:23
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

class ProjectTaskService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllProjectTask(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.projectTask.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.projectTask.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllProjectTask(select = []) {
		try {
			if(sql) {
				return await models.sequelize.projectTask.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.projectTask.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addProjectTask(newProjectTask) {
		try {
			let objProjectTask;
			if(util.PrimaryKeyTypeIsString(models.sequelize.projectTask.primaryKeys.id.type.toString())) {
			    newProjectTask.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objProjectTask = await models.sequelize.projectTask.create(newProjectTask);
			} else {
				objProjectTask = new models.mongoose.projectTask(newProjectTask);
				await objProjectTask.save();
			}
			return objProjectTask;
		} catch (error) {
			throw error;
		}
	}

	static async updateProjectTask(id, updateProjectTask) {
		try {
			let objProjectTask;
			if(sql) {
				objProjectTask = await models.sequelize.projectTask.findOne({where: { id: util.Char(id) }});
				if (objProjectTask) {
					await models.sequelize.projectTask.update(updateProjectTask, { where: { id: util.Char(id) } });
					objProjectTask = await models.sequelize.projectTask.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateProjectTask._id;
				objProjectTask = await models.mongoose.projectTask.findOneAndUpdate({id:id}, {$set: updateProjectTask}, {new: true});
			}
			return objProjectTask;
		} catch (error) {
			throw error;
		}
	}

	static async getAProjectTask(id, query) {
		try {
			let objProjectTask;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objProjectTask = await models.sequelize.projectTask.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objProjectTask = await models.mongoose.projectTask.find({id:util.Char(id)}).select(query.select);
			}
			return objProjectTask;
		} catch (error) {
			throw error;
		}
	}

	static async deleteProjectTask(id) {
		try {
			let objProjectTask;
			if(sql) {
				objProjectTask = await models.sequelize.projectTask.findOne({ where: { id: util.Char(id) } });
				if (objProjectTask) {
					await models.sequelize.projectTask.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objProjectTask = await models.mongoose.projectTask.deleteOne({id:util.Char(id)});
			}
			return objProjectTask;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOne({id: id});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMilestoneFlag(milestoneFlag, query = {}) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { milestone_flag: milestoneFlag },
    			});
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOne({milestone_flag: milestoneFlag});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOne({deleted: deleted});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByProjectTaskId(projectTaskId, query = {}) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { project_task_id: projectTaskId },
    			});
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOne({project_task_id: projectTaskId});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTimeStart(timeStart, query = {}) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { time_start: timeStart },
    			});
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOne({time_start: timeStart});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTimeFinish(timeFinish, query = {}) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { time_finish: timeFinish },
    			});
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOne({time_finish: timeFinish});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDuration(duration, query = {}) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { duration: duration },
    			});
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOne({duration: duration});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByActualDuration(actualDuration, query = {}) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { actual_duration: actualDuration },
    			});
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOne({actual_duration: actualDuration});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPercentComplete(percentComplete, query = {}) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { percent_complete: percentComplete },
    			});
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOne({percent_complete: percentComplete});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentTaskId(parentTaskId, query = {}) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_task_id: parentTaskId },
    			});
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOne({parent_task_id: parentTaskId});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByOrderNumber(orderNumber, query = {}) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { order_number: orderNumber },
    			});
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOne({order_number: orderNumber});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTaskNumber(taskNumber, query = {}) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { task_number: taskNumber },
    			});
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOne({task_number: taskNumber});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByEstimatedEffort(estimatedEffort, query = {}) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { estimated_effort: estimatedEffort },
    			});
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOne({estimated_effort: estimatedEffort});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByActualEffort(actualEffort, query = {}) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { actual_effort: actualEffort },
    			});
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOne({actual_effort: actualEffort});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUtilization(utilization, query = {}) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { utilization: utilization },
    			});
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOne({utilization: utilization});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOne({name: name});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByStatus(status, query = {}) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { status: status },
    			});
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOne({status: status});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRelationshipType(relationshipType, query = {}) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { relationship_type: relationshipType },
    			});
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOne({relationship_type: relationshipType});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPriority(priority, query = {}) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { priority: priority },
    			});
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOne({priority: priority});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOne({description: description});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPredecessors(predecessors, query = {}) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { predecessors: predecessors },
    			});
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOne({predecessors: predecessors});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDurationUnit(durationUnit, query = {}) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { duration_unit: durationUnit },
    			});
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOne({duration_unit: durationUnit});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOne({date_entered: dateEntered});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOne({date_modified: dateModified});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateStart(dateStart, query = {}) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_start: dateStart },
    			});
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOne({date_start: dateStart});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateFinish(dateFinish, query = {}) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_finish: dateFinish },
    			});
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOne({date_finish: dateFinish});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateDue(dateDue, query = {}) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_due: dateDue },
    			});
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOne({date_due: dateDue});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByProjectId(projectId, query = {}) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { project_id: projectId },
    			});
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOne({project_id: projectId});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOne({assigned_user_id: assignedUserId});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOne({modified_user_id: modifiedUserId});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOne({created_by: createdBy});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateProjectTaskById(id, updateProjectTask) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({where: { id: id }});
    			if (objProjectTask) {
    				objProjectTask = await models.sequelize.projectTask.update(updateProjectTask, { where: { id: id } });
    			}
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOneAndUpdate({id: id}, {$set: updateProjectTask}, {new: true});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectTaskByMilestoneFlag(milestoneFlag, updateProjectTask) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({where: { milestone_flag: milestoneFlag }});
    			if (objProjectTask) {
    				objProjectTask = await models.sequelize.projectTask.update(updateProjectTask, { where: { milestone_flag: milestoneFlag } });
    			}
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOneAndUpdate({milestone_flag: milestoneFlag}, {$set: updateProjectTask}, {new: true});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectTaskByDeleted(deleted, updateProjectTask) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({where: { deleted: deleted }});
    			if (objProjectTask) {
    				objProjectTask = await models.sequelize.projectTask.update(updateProjectTask, { where: { deleted: deleted } });
    			}
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOneAndUpdate({deleted: deleted}, {$set: updateProjectTask}, {new: true});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectTaskByProjectTaskId(projectTaskId, updateProjectTask) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({where: { project_task_id: projectTaskId }});
    			if (objProjectTask) {
    				objProjectTask = await models.sequelize.projectTask.update(updateProjectTask, { where: { project_task_id: projectTaskId } });
    			}
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOneAndUpdate({project_task_id: projectTaskId}, {$set: updateProjectTask}, {new: true});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectTaskByTimeStart(timeStart, updateProjectTask) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({where: { time_start: timeStart }});
    			if (objProjectTask) {
    				objProjectTask = await models.sequelize.projectTask.update(updateProjectTask, { where: { time_start: timeStart } });
    			}
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOneAndUpdate({time_start: timeStart}, {$set: updateProjectTask}, {new: true});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectTaskByTimeFinish(timeFinish, updateProjectTask) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({where: { time_finish: timeFinish }});
    			if (objProjectTask) {
    				objProjectTask = await models.sequelize.projectTask.update(updateProjectTask, { where: { time_finish: timeFinish } });
    			}
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOneAndUpdate({time_finish: timeFinish}, {$set: updateProjectTask}, {new: true});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectTaskByDuration(duration, updateProjectTask) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({where: { duration: duration }});
    			if (objProjectTask) {
    				objProjectTask = await models.sequelize.projectTask.update(updateProjectTask, { where: { duration: duration } });
    			}
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOneAndUpdate({duration: duration}, {$set: updateProjectTask}, {new: true});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectTaskByActualDuration(actualDuration, updateProjectTask) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({where: { actual_duration: actualDuration }});
    			if (objProjectTask) {
    				objProjectTask = await models.sequelize.projectTask.update(updateProjectTask, { where: { actual_duration: actualDuration } });
    			}
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOneAndUpdate({actual_duration: actualDuration}, {$set: updateProjectTask}, {new: true});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectTaskByPercentComplete(percentComplete, updateProjectTask) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({where: { percent_complete: percentComplete }});
    			if (objProjectTask) {
    				objProjectTask = await models.sequelize.projectTask.update(updateProjectTask, { where: { percent_complete: percentComplete } });
    			}
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOneAndUpdate({percent_complete: percentComplete}, {$set: updateProjectTask}, {new: true});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectTaskByParentTaskId(parentTaskId, updateProjectTask) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({where: { parent_task_id: parentTaskId }});
    			if (objProjectTask) {
    				objProjectTask = await models.sequelize.projectTask.update(updateProjectTask, { where: { parent_task_id: parentTaskId } });
    			}
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOneAndUpdate({parent_task_id: parentTaskId}, {$set: updateProjectTask}, {new: true});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectTaskByOrderNumber(orderNumber, updateProjectTask) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({where: { order_number: orderNumber }});
    			if (objProjectTask) {
    				objProjectTask = await models.sequelize.projectTask.update(updateProjectTask, { where: { order_number: orderNumber } });
    			}
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOneAndUpdate({order_number: orderNumber}, {$set: updateProjectTask}, {new: true});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectTaskByTaskNumber(taskNumber, updateProjectTask) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({where: { task_number: taskNumber }});
    			if (objProjectTask) {
    				objProjectTask = await models.sequelize.projectTask.update(updateProjectTask, { where: { task_number: taskNumber } });
    			}
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOneAndUpdate({task_number: taskNumber}, {$set: updateProjectTask}, {new: true});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectTaskByEstimatedEffort(estimatedEffort, updateProjectTask) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({where: { estimated_effort: estimatedEffort }});
    			if (objProjectTask) {
    				objProjectTask = await models.sequelize.projectTask.update(updateProjectTask, { where: { estimated_effort: estimatedEffort } });
    			}
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOneAndUpdate({estimated_effort: estimatedEffort}, {$set: updateProjectTask}, {new: true});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectTaskByActualEffort(actualEffort, updateProjectTask) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({where: { actual_effort: actualEffort }});
    			if (objProjectTask) {
    				objProjectTask = await models.sequelize.projectTask.update(updateProjectTask, { where: { actual_effort: actualEffort } });
    			}
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOneAndUpdate({actual_effort: actualEffort}, {$set: updateProjectTask}, {new: true});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectTaskByUtilization(utilization, updateProjectTask) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({where: { utilization: utilization }});
    			if (objProjectTask) {
    				objProjectTask = await models.sequelize.projectTask.update(updateProjectTask, { where: { utilization: utilization } });
    			}
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOneAndUpdate({utilization: utilization}, {$set: updateProjectTask}, {new: true});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectTaskByName(name, updateProjectTask) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({where: { name: name }});
    			if (objProjectTask) {
    				objProjectTask = await models.sequelize.projectTask.update(updateProjectTask, { where: { name: name } });
    			}
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOneAndUpdate({name: name}, {$set: updateProjectTask}, {new: true});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectTaskByStatus(status, updateProjectTask) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({where: { status: status }});
    			if (objProjectTask) {
    				objProjectTask = await models.sequelize.projectTask.update(updateProjectTask, { where: { status: status } });
    			}
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOneAndUpdate({status: status}, {$set: updateProjectTask}, {new: true});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectTaskByRelationshipType(relationshipType, updateProjectTask) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({where: { relationship_type: relationshipType }});
    			if (objProjectTask) {
    				objProjectTask = await models.sequelize.projectTask.update(updateProjectTask, { where: { relationship_type: relationshipType } });
    			}
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOneAndUpdate({relationship_type: relationshipType}, {$set: updateProjectTask}, {new: true});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectTaskByPriority(priority, updateProjectTask) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({where: { priority: priority }});
    			if (objProjectTask) {
    				objProjectTask = await models.sequelize.projectTask.update(updateProjectTask, { where: { priority: priority } });
    			}
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOneAndUpdate({priority: priority}, {$set: updateProjectTask}, {new: true});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectTaskByDescription(description, updateProjectTask) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({where: { description: description }});
    			if (objProjectTask) {
    				objProjectTask = await models.sequelize.projectTask.update(updateProjectTask, { where: { description: description } });
    			}
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOneAndUpdate({description: description}, {$set: updateProjectTask}, {new: true});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectTaskByPredecessors(predecessors, updateProjectTask) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({where: { predecessors: predecessors }});
    			if (objProjectTask) {
    				objProjectTask = await models.sequelize.projectTask.update(updateProjectTask, { where: { predecessors: predecessors } });
    			}
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOneAndUpdate({predecessors: predecessors}, {$set: updateProjectTask}, {new: true});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectTaskByDurationUnit(durationUnit, updateProjectTask) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({where: { duration_unit: durationUnit }});
    			if (objProjectTask) {
    				objProjectTask = await models.sequelize.projectTask.update(updateProjectTask, { where: { duration_unit: durationUnit } });
    			}
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOneAndUpdate({duration_unit: durationUnit}, {$set: updateProjectTask}, {new: true});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectTaskByDateEntered(dateEntered, updateProjectTask) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({where: { date_entered: dateEntered }});
    			if (objProjectTask) {
    				objProjectTask = await models.sequelize.projectTask.update(updateProjectTask, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOneAndUpdate({date_entered: dateEntered}, {$set: updateProjectTask}, {new: true});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectTaskByDateModified(dateModified, updateProjectTask) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({where: { date_modified: dateModified }});
    			if (objProjectTask) {
    				objProjectTask = await models.sequelize.projectTask.update(updateProjectTask, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOneAndUpdate({date_modified: dateModified}, {$set: updateProjectTask}, {new: true});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectTaskByDateStart(dateStart, updateProjectTask) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({where: { date_start: dateStart }});
    			if (objProjectTask) {
    				objProjectTask = await models.sequelize.projectTask.update(updateProjectTask, { where: { date_start: dateStart } });
    			}
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOneAndUpdate({date_start: dateStart}, {$set: updateProjectTask}, {new: true});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectTaskByDateFinish(dateFinish, updateProjectTask) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({where: { date_finish: dateFinish }});
    			if (objProjectTask) {
    				objProjectTask = await models.sequelize.projectTask.update(updateProjectTask, { where: { date_finish: dateFinish } });
    			}
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOneAndUpdate({date_finish: dateFinish}, {$set: updateProjectTask}, {new: true});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectTaskByDateDue(dateDue, updateProjectTask) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({where: { date_due: dateDue }});
    			if (objProjectTask) {
    				objProjectTask = await models.sequelize.projectTask.update(updateProjectTask, { where: { date_due: dateDue } });
    			}
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOneAndUpdate({date_due: dateDue}, {$set: updateProjectTask}, {new: true});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectTaskByProjectId(projectId, updateProjectTask) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({where: { project_id: projectId }});
    			if (objProjectTask) {
    				objProjectTask = await models.sequelize.projectTask.update(updateProjectTask, { where: { project_id: projectId } });
    			}
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOneAndUpdate({project_id: projectId}, {$set: updateProjectTask}, {new: true});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectTaskByAssignedUserId(assignedUserId, updateProjectTask) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objProjectTask) {
    				objProjectTask = await models.sequelize.projectTask.update(updateProjectTask, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateProjectTask}, {new: true});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectTaskByModifiedUserId(modifiedUserId, updateProjectTask) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objProjectTask) {
    				objProjectTask = await models.sequelize.projectTask.update(updateProjectTask, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateProjectTask}, {new: true});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectTaskByCreatedBy(createdBy, updateProjectTask) {
    	try {
    		let objProjectTask;
    		if(sql) {
    			objProjectTask = await models.sequelize.projectTask.findOne({where: { created_by: createdBy }});
    			if (objProjectTask) {
    				objProjectTask = await models.sequelize.projectTask.update(updateProjectTask, { where: { created_by: createdBy } });
    			}
    		} else {
    			objProjectTask = await models.mongoose.projectTask.findOneAndUpdate({created_by: createdBy}, {$set: updateProjectTask}, {new: true});
    		}
    		return objProjectTask;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = ProjectTaskService;
//</es-section>
