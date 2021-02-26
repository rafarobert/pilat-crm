/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:12 GMT-0400 (Bolivia Time)
 * Time: 0:23:12
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:12 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:12
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

class JobQueueService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllJobQueue(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.jobQueue.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.jobQueue.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllJobQueue(select = []) {
		try {
			if(sql) {
				return await models.sequelize.jobQueue.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.jobQueue.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addJobQueue(newJobQueue) {
		try {
			let objJobQueue;
			if(util.PrimaryKeyTypeIsString(models.sequelize.jobQueue.primaryKeys.id.type.toString())) {
			    newJobQueue.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objJobQueue = await models.sequelize.jobQueue.create(newJobQueue);
			} else {
				objJobQueue = new models.mongoose.jobQueue(newJobQueue);
				await objJobQueue.save();
			}
			return objJobQueue;
		} catch (error) {
			throw error;
		}
	}

	static async updateJobQueue(id, updateJobQueue) {
		try {
			let objJobQueue;
			if(sql) {
				objJobQueue = await models.sequelize.jobQueue.findOne({where: { id: util.Char(id) }});
				if (objJobQueue) {
					await models.sequelize.jobQueue.update(updateJobQueue, { where: { id: util.Char(id) } });
					objJobQueue = await models.sequelize.jobQueue.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateJobQueue._id;
				objJobQueue = await models.mongoose.jobQueue.findOneAndUpdate({id:id}, {$set: updateJobQueue}, {new: true});
			}
			return objJobQueue;
		} catch (error) {
			throw error;
		}
	}

	static async getAJobQueue(id, query) {
		try {
			let objJobQueue;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objJobQueue = await models.sequelize.jobQueue.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objJobQueue = await models.mongoose.jobQueue.find({id:util.Char(id)}).select(query.select);
			}
			return objJobQueue;
		} catch (error) {
			throw error;
		}
	}

	static async deleteJobQueue(id) {
		try {
			let objJobQueue;
			if(sql) {
				objJobQueue = await models.sequelize.jobQueue.findOne({ where: { id: util.Char(id) } });
				if (objJobQueue) {
					await models.sequelize.jobQueue.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objJobQueue = await models.mongoose.jobQueue.deleteOne({id:util.Char(id)});
			}
			return objJobQueue;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objJobQueue;
    		if(sql) {
    			objJobQueue = await models.sequelize.jobQueue.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objJobQueue = await models.mongoose.jobQueue.findOne({id: id});
    		}
    		return objJobQueue;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objJobQueue;
    		if(sql) {
    			objJobQueue = await models.sequelize.jobQueue.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objJobQueue = await models.mongoose.jobQueue.findOne({deleted: deleted});
    		}
    		return objJobQueue;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRequeue(requeue, query = {}) {
    	try {
    		let objJobQueue;
    		if(sql) {
    			objJobQueue = await models.sequelize.jobQueue.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { requeue: requeue },
    			});
    		} else {
    			objJobQueue = await models.mongoose.jobQueue.findOne({requeue: requeue});
    		}
    		return objJobQueue;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRetryCount(retryCount, query = {}) {
    	try {
    		let objJobQueue;
    		if(sql) {
    			objJobQueue = await models.sequelize.jobQueue.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { retry_count: retryCount },
    			});
    		} else {
    			objJobQueue = await models.mongoose.jobQueue.findOne({retry_count: retryCount});
    		}
    		return objJobQueue;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFailureCount(failureCount, query = {}) {
    	try {
    		let objJobQueue;
    		if(sql) {
    			objJobQueue = await models.sequelize.jobQueue.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { failure_count: failureCount },
    			});
    		} else {
    			objJobQueue = await models.mongoose.jobQueue.findOne({failure_count: failureCount});
    		}
    		return objJobQueue;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJobDelay(jobDelay, query = {}) {
    	try {
    		let objJobQueue;
    		if(sql) {
    			objJobQueue = await models.sequelize.jobQueue.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { job_delay: jobDelay },
    			});
    		} else {
    			objJobQueue = await models.mongoose.jobQueue.findOne({job_delay: jobDelay});
    		}
    		return objJobQueue;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPercentComplete(percentComplete, query = {}) {
    	try {
    		let objJobQueue;
    		if(sql) {
    			objJobQueue = await models.sequelize.jobQueue.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { percent_complete: percentComplete },
    			});
    		} else {
    			objJobQueue = await models.mongoose.jobQueue.findOne({percent_complete: percentComplete});
    		}
    		return objJobQueue;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objJobQueue;
    		if(sql) {
    			objJobQueue = await models.sequelize.jobQueue.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objJobQueue = await models.mongoose.jobQueue.findOne({name: name});
    		}
    		return objJobQueue;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByStatus(status, query = {}) {
    	try {
    		let objJobQueue;
    		if(sql) {
    			objJobQueue = await models.sequelize.jobQueue.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { status: status },
    			});
    		} else {
    			objJobQueue = await models.mongoose.jobQueue.findOne({status: status});
    		}
    		return objJobQueue;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByResolution(resolution, query = {}) {
    	try {
    		let objJobQueue;
    		if(sql) {
    			objJobQueue = await models.sequelize.jobQueue.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { resolution: resolution },
    			});
    		} else {
    			objJobQueue = await models.mongoose.jobQueue.findOne({resolution: resolution});
    		}
    		return objJobQueue;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTarget(target, query = {}) {
    	try {
    		let objJobQueue;
    		if(sql) {
    			objJobQueue = await models.sequelize.jobQueue.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { target: target },
    			});
    		} else {
    			objJobQueue = await models.mongoose.jobQueue.findOne({target: target});
    		}
    		return objJobQueue;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByClient(client, query = {}) {
    	try {
    		let objJobQueue;
    		if(sql) {
    			objJobQueue = await models.sequelize.jobQueue.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { client: client },
    			});
    		} else {
    			objJobQueue = await models.mongoose.jobQueue.findOne({client: client});
    		}
    		return objJobQueue;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMessage(message, query = {}) {
    	try {
    		let objJobQueue;
    		if(sql) {
    			objJobQueue = await models.sequelize.jobQueue.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { message: message },
    			});
    		} else {
    			objJobQueue = await models.mongoose.jobQueue.findOne({message: message});
    		}
    		return objJobQueue;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByData(data, query = {}) {
    	try {
    		let objJobQueue;
    		if(sql) {
    			objJobQueue = await models.sequelize.jobQueue.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data: data },
    			});
    		} else {
    			objJobQueue = await models.mongoose.jobQueue.findOne({data: data});
    		}
    		return objJobQueue;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objJobQueue;
    		if(sql) {
    			objJobQueue = await models.sequelize.jobQueue.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objJobQueue = await models.mongoose.jobQueue.findOne({date_entered: dateEntered});
    		}
    		return objJobQueue;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objJobQueue;
    		if(sql) {
    			objJobQueue = await models.sequelize.jobQueue.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objJobQueue = await models.mongoose.jobQueue.findOne({date_modified: dateModified});
    		}
    		return objJobQueue;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByExecuteTime(executeTime, query = {}) {
    	try {
    		let objJobQueue;
    		if(sql) {
    			objJobQueue = await models.sequelize.jobQueue.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { execute_time: executeTime },
    			});
    		} else {
    			objJobQueue = await models.mongoose.jobQueue.findOne({execute_time: executeTime});
    		}
    		return objJobQueue;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objJobQueue;
    		if(sql) {
    			objJobQueue = await models.sequelize.jobQueue.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objJobQueue = await models.mongoose.jobQueue.findOne({assigned_user_id: assignedUserId});
    		}
    		return objJobQueue;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySchedulerId(schedulerId, query = {}) {
    	try {
    		let objJobQueue;
    		if(sql) {
    			objJobQueue = await models.sequelize.jobQueue.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { scheduler_id: schedulerId },
    			});
    		} else {
    			objJobQueue = await models.mongoose.jobQueue.findOne({scheduler_id: schedulerId});
    		}
    		return objJobQueue;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateJobQueueById(id, updateJobQueue) {
    	try {
    		let objJobQueue;
    		if(sql) {
    			objJobQueue = await models.sequelize.jobQueue.findOne({where: { id: id }});
    			if (objJobQueue) {
    				objJobQueue = await models.sequelize.jobQueue.update(updateJobQueue, { where: { id: id } });
    			}
    		} else {
    			objJobQueue = await models.mongoose.jobQueue.findOneAndUpdate({id: id}, {$set: updateJobQueue}, {new: true});
    		}
    		return objJobQueue;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJobQueueByDeleted(deleted, updateJobQueue) {
    	try {
    		let objJobQueue;
    		if(sql) {
    			objJobQueue = await models.sequelize.jobQueue.findOne({where: { deleted: deleted }});
    			if (objJobQueue) {
    				objJobQueue = await models.sequelize.jobQueue.update(updateJobQueue, { where: { deleted: deleted } });
    			}
    		} else {
    			objJobQueue = await models.mongoose.jobQueue.findOneAndUpdate({deleted: deleted}, {$set: updateJobQueue}, {new: true});
    		}
    		return objJobQueue;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJobQueueByRequeue(requeue, updateJobQueue) {
    	try {
    		let objJobQueue;
    		if(sql) {
    			objJobQueue = await models.sequelize.jobQueue.findOne({where: { requeue: requeue }});
    			if (objJobQueue) {
    				objJobQueue = await models.sequelize.jobQueue.update(updateJobQueue, { where: { requeue: requeue } });
    			}
    		} else {
    			objJobQueue = await models.mongoose.jobQueue.findOneAndUpdate({requeue: requeue}, {$set: updateJobQueue}, {new: true});
    		}
    		return objJobQueue;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJobQueueByRetryCount(retryCount, updateJobQueue) {
    	try {
    		let objJobQueue;
    		if(sql) {
    			objJobQueue = await models.sequelize.jobQueue.findOne({where: { retry_count: retryCount }});
    			if (objJobQueue) {
    				objJobQueue = await models.sequelize.jobQueue.update(updateJobQueue, { where: { retry_count: retryCount } });
    			}
    		} else {
    			objJobQueue = await models.mongoose.jobQueue.findOneAndUpdate({retry_count: retryCount}, {$set: updateJobQueue}, {new: true});
    		}
    		return objJobQueue;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJobQueueByFailureCount(failureCount, updateJobQueue) {
    	try {
    		let objJobQueue;
    		if(sql) {
    			objJobQueue = await models.sequelize.jobQueue.findOne({where: { failure_count: failureCount }});
    			if (objJobQueue) {
    				objJobQueue = await models.sequelize.jobQueue.update(updateJobQueue, { where: { failure_count: failureCount } });
    			}
    		} else {
    			objJobQueue = await models.mongoose.jobQueue.findOneAndUpdate({failure_count: failureCount}, {$set: updateJobQueue}, {new: true});
    		}
    		return objJobQueue;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJobQueueByJobDelay(jobDelay, updateJobQueue) {
    	try {
    		let objJobQueue;
    		if(sql) {
    			objJobQueue = await models.sequelize.jobQueue.findOne({where: { job_delay: jobDelay }});
    			if (objJobQueue) {
    				objJobQueue = await models.sequelize.jobQueue.update(updateJobQueue, { where: { job_delay: jobDelay } });
    			}
    		} else {
    			objJobQueue = await models.mongoose.jobQueue.findOneAndUpdate({job_delay: jobDelay}, {$set: updateJobQueue}, {new: true});
    		}
    		return objJobQueue;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJobQueueByPercentComplete(percentComplete, updateJobQueue) {
    	try {
    		let objJobQueue;
    		if(sql) {
    			objJobQueue = await models.sequelize.jobQueue.findOne({where: { percent_complete: percentComplete }});
    			if (objJobQueue) {
    				objJobQueue = await models.sequelize.jobQueue.update(updateJobQueue, { where: { percent_complete: percentComplete } });
    			}
    		} else {
    			objJobQueue = await models.mongoose.jobQueue.findOneAndUpdate({percent_complete: percentComplete}, {$set: updateJobQueue}, {new: true});
    		}
    		return objJobQueue;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJobQueueByName(name, updateJobQueue) {
    	try {
    		let objJobQueue;
    		if(sql) {
    			objJobQueue = await models.sequelize.jobQueue.findOne({where: { name: name }});
    			if (objJobQueue) {
    				objJobQueue = await models.sequelize.jobQueue.update(updateJobQueue, { where: { name: name } });
    			}
    		} else {
    			objJobQueue = await models.mongoose.jobQueue.findOneAndUpdate({name: name}, {$set: updateJobQueue}, {new: true});
    		}
    		return objJobQueue;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJobQueueByStatus(status, updateJobQueue) {
    	try {
    		let objJobQueue;
    		if(sql) {
    			objJobQueue = await models.sequelize.jobQueue.findOne({where: { status: status }});
    			if (objJobQueue) {
    				objJobQueue = await models.sequelize.jobQueue.update(updateJobQueue, { where: { status: status } });
    			}
    		} else {
    			objJobQueue = await models.mongoose.jobQueue.findOneAndUpdate({status: status}, {$set: updateJobQueue}, {new: true});
    		}
    		return objJobQueue;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJobQueueByResolution(resolution, updateJobQueue) {
    	try {
    		let objJobQueue;
    		if(sql) {
    			objJobQueue = await models.sequelize.jobQueue.findOne({where: { resolution: resolution }});
    			if (objJobQueue) {
    				objJobQueue = await models.sequelize.jobQueue.update(updateJobQueue, { where: { resolution: resolution } });
    			}
    		} else {
    			objJobQueue = await models.mongoose.jobQueue.findOneAndUpdate({resolution: resolution}, {$set: updateJobQueue}, {new: true});
    		}
    		return objJobQueue;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJobQueueByTarget(target, updateJobQueue) {
    	try {
    		let objJobQueue;
    		if(sql) {
    			objJobQueue = await models.sequelize.jobQueue.findOne({where: { target: target }});
    			if (objJobQueue) {
    				objJobQueue = await models.sequelize.jobQueue.update(updateJobQueue, { where: { target: target } });
    			}
    		} else {
    			objJobQueue = await models.mongoose.jobQueue.findOneAndUpdate({target: target}, {$set: updateJobQueue}, {new: true});
    		}
    		return objJobQueue;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJobQueueByClient(client, updateJobQueue) {
    	try {
    		let objJobQueue;
    		if(sql) {
    			objJobQueue = await models.sequelize.jobQueue.findOne({where: { client: client }});
    			if (objJobQueue) {
    				objJobQueue = await models.sequelize.jobQueue.update(updateJobQueue, { where: { client: client } });
    			}
    		} else {
    			objJobQueue = await models.mongoose.jobQueue.findOneAndUpdate({client: client}, {$set: updateJobQueue}, {new: true});
    		}
    		return objJobQueue;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJobQueueByMessage(message, updateJobQueue) {
    	try {
    		let objJobQueue;
    		if(sql) {
    			objJobQueue = await models.sequelize.jobQueue.findOne({where: { message: message }});
    			if (objJobQueue) {
    				objJobQueue = await models.sequelize.jobQueue.update(updateJobQueue, { where: { message: message } });
    			}
    		} else {
    			objJobQueue = await models.mongoose.jobQueue.findOneAndUpdate({message: message}, {$set: updateJobQueue}, {new: true});
    		}
    		return objJobQueue;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJobQueueByData(data, updateJobQueue) {
    	try {
    		let objJobQueue;
    		if(sql) {
    			objJobQueue = await models.sequelize.jobQueue.findOne({where: { data: data }});
    			if (objJobQueue) {
    				objJobQueue = await models.sequelize.jobQueue.update(updateJobQueue, { where: { data: data } });
    			}
    		} else {
    			objJobQueue = await models.mongoose.jobQueue.findOneAndUpdate({data: data}, {$set: updateJobQueue}, {new: true});
    		}
    		return objJobQueue;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJobQueueByDateEntered(dateEntered, updateJobQueue) {
    	try {
    		let objJobQueue;
    		if(sql) {
    			objJobQueue = await models.sequelize.jobQueue.findOne({where: { date_entered: dateEntered }});
    			if (objJobQueue) {
    				objJobQueue = await models.sequelize.jobQueue.update(updateJobQueue, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objJobQueue = await models.mongoose.jobQueue.findOneAndUpdate({date_entered: dateEntered}, {$set: updateJobQueue}, {new: true});
    		}
    		return objJobQueue;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJobQueueByDateModified(dateModified, updateJobQueue) {
    	try {
    		let objJobQueue;
    		if(sql) {
    			objJobQueue = await models.sequelize.jobQueue.findOne({where: { date_modified: dateModified }});
    			if (objJobQueue) {
    				objJobQueue = await models.sequelize.jobQueue.update(updateJobQueue, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objJobQueue = await models.mongoose.jobQueue.findOneAndUpdate({date_modified: dateModified}, {$set: updateJobQueue}, {new: true});
    		}
    		return objJobQueue;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJobQueueByExecuteTime(executeTime, updateJobQueue) {
    	try {
    		let objJobQueue;
    		if(sql) {
    			objJobQueue = await models.sequelize.jobQueue.findOne({where: { execute_time: executeTime }});
    			if (objJobQueue) {
    				objJobQueue = await models.sequelize.jobQueue.update(updateJobQueue, { where: { execute_time: executeTime } });
    			}
    		} else {
    			objJobQueue = await models.mongoose.jobQueue.findOneAndUpdate({execute_time: executeTime}, {$set: updateJobQueue}, {new: true});
    		}
    		return objJobQueue;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJobQueueByAssignedUserId(assignedUserId, updateJobQueue) {
    	try {
    		let objJobQueue;
    		if(sql) {
    			objJobQueue = await models.sequelize.jobQueue.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objJobQueue) {
    				objJobQueue = await models.sequelize.jobQueue.update(updateJobQueue, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objJobQueue = await models.mongoose.jobQueue.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateJobQueue}, {new: true});
    		}
    		return objJobQueue;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJobQueueBySchedulerId(schedulerId, updateJobQueue) {
    	try {
    		let objJobQueue;
    		if(sql) {
    			objJobQueue = await models.sequelize.jobQueue.findOne({where: { scheduler_id: schedulerId }});
    			if (objJobQueue) {
    				objJobQueue = await models.sequelize.jobQueue.update(updateJobQueue, { where: { scheduler_id: schedulerId } });
    			}
    		} else {
    			objJobQueue = await models.mongoose.jobQueue.findOneAndUpdate({scheduler_id: schedulerId}, {$set: updateJobQueue}, {new: true});
    		}
    		return objJobQueue;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = JobQueueService;
//</es-section>
