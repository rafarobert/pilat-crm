/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:41 GMT-0400 (Bolivia Time)
 * Time: 14:57:41
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:41 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:41
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

class SchedulerService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllSchedulers(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.schedulers.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['_id','ASC']],
                });
			} else {
				return await models.mongoose.schedulers.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllSchedulers(select = []) {
		try {
			if(sql) {
				return await models.sequelize.schedulers.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.schedulers.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addScheduler(newScheduler) {
		try {
			let objScheduler;
			if(util.PrimaryKeyTypeIsString(models.sequelize.schedulers.primaryKeys.id.type.toString())) {
			    newScheduler.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objScheduler = await models.sequelize.schedulers.create(newScheduler);
			} else {
				objScheduler = new models.mongoose.schedulers(newScheduler);
				await objScheduler.save();
			}
			return objScheduler;
		} catch (error) {
			throw error;
		}
	}

	static async updateScheduler(id, updateScheduler) {
		try {
			let objScheduler;
			if(sql) {
				objScheduler = await models.sequelize.schedulers.findOne({where: { id: util.String(id) }});
				if (objScheduler) {
					await models.sequelize.schedulers.update(updateScheduler, { where: { id: util.String(id) } });
					objScheduler = await models.sequelize.schedulers.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateScheduler._id;
				objScheduler = await models.mongoose.schedulers.findOneAndUpdate({id:id}, {$set: updateScheduler}, {new: true});
			}
			return objScheduler;
		} catch (error) {
			throw error;
		}
	}

	static async getAScheduler(id, query) {
		try {
			let objScheduler;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objScheduler = await models.sequelize.schedulers.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objScheduler = await models.mongoose.schedulers.find({id:util.String(id)}).select(query.select);
			}
			return objScheduler;
		} catch (error) {
			throw error;
		}
	}

	static async deleteScheduler(id) {
		try {
			let objScheduler;
			if(sql) {
				objScheduler = await models.sequelize.schedulers.findOne({ where: { id: util.String(id) } });
				if (objScheduler) {
					await models.sequelize.schedulers.destroy({where: { id: util.String(id) }});
				}
			} else {
				objScheduler = await models.mongoose.schedulers.deleteOne({id:util.String(id)});
			}
			return objScheduler;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objScheduler;
    		if(sql) {
    			objScheduler = await models.sequelize.schedulers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objScheduler = await models.mongoose.schedulers.findOne({id: id});
    		}
    		return objScheduler;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objScheduler;
    		if(sql) {
    			objScheduler = await models.sequelize.schedulers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objScheduler = await models.mongoose.schedulers.findOne({deleted: deleted});
    		}
    		return objScheduler;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCatchUp(catchUp, query = {}) {
    	try {
    		let objScheduler;
    		if(sql) {
    			objScheduler = await models.sequelize.schedulers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { catch_up: catchUp },
    			});
    		} else {
    			objScheduler = await models.mongoose.schedulers.findOne({catch_up: catchUp});
    		}
    		return objScheduler;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objScheduler;
    		if(sql) {
    			objScheduler = await models.sequelize.schedulers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objScheduler = await models.mongoose.schedulers.findOne({name: name});
    		}
    		return objScheduler;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJob(job, query = {}) {
    	try {
    		let objScheduler;
    		if(sql) {
    			objScheduler = await models.sequelize.schedulers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { job: job },
    			});
    		} else {
    			objScheduler = await models.mongoose.schedulers.findOne({job: job});
    		}
    		return objScheduler;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJobInterval(jobInterval, query = {}) {
    	try {
    		let objScheduler;
    		if(sql) {
    			objScheduler = await models.sequelize.schedulers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { job_interval: jobInterval },
    			});
    		} else {
    			objScheduler = await models.mongoose.schedulers.findOne({job_interval: jobInterval});
    		}
    		return objScheduler;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByStatus(status, query = {}) {
    	try {
    		let objScheduler;
    		if(sql) {
    			objScheduler = await models.sequelize.schedulers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { status: status },
    			});
    		} else {
    			objScheduler = await models.mongoose.schedulers.findOne({status: status});
    		}
    		return objScheduler;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objScheduler;
    		if(sql) {
    			objScheduler = await models.sequelize.schedulers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objScheduler = await models.mongoose.schedulers.findOne({date_entered: dateEntered});
    		}
    		return objScheduler;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objScheduler;
    		if(sql) {
    			objScheduler = await models.sequelize.schedulers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objScheduler = await models.mongoose.schedulers.findOne({date_modified: dateModified});
    		}
    		return objScheduler;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateTimeStart(dateTimeStart, query = {}) {
    	try {
    		let objScheduler;
    		if(sql) {
    			objScheduler = await models.sequelize.schedulers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_time_start: dateTimeStart },
    			});
    		} else {
    			objScheduler = await models.mongoose.schedulers.findOne({date_time_start: dateTimeStart});
    		}
    		return objScheduler;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateTimeEnd(dateTimeEnd, query = {}) {
    	try {
    		let objScheduler;
    		if(sql) {
    			objScheduler = await models.sequelize.schedulers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_time_end: dateTimeEnd },
    			});
    		} else {
    			objScheduler = await models.mongoose.schedulers.findOne({date_time_end: dateTimeEnd});
    		}
    		return objScheduler;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByLastRun(lastRun, query = {}) {
    	try {
    		let objScheduler;
    		if(sql) {
    			objScheduler = await models.sequelize.schedulers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { last_run: lastRun },
    			});
    		} else {
    			objScheduler = await models.mongoose.schedulers.findOne({last_run: lastRun});
    		}
    		return objScheduler;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objScheduler;
    		if(sql) {
    			objScheduler = await models.sequelize.schedulers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objScheduler = await models.mongoose.schedulers.findOne({created_by: createdBy});
    		}
    		return objScheduler;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objScheduler;
    		if(sql) {
    			objScheduler = await models.sequelize.schedulers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objScheduler = await models.mongoose.schedulers.findOne({modified_user_id: modifiedUserId});
    		}
    		return objScheduler;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateSchedulerById(id, updateScheduler) {
    	try {
    		let objScheduler;
    		if(sql) {
    			objScheduler = await models.sequelize.schedulers.findOne({where: { id: id }});
    			if (objScheduler) {
    				objScheduler = await models.sequelize.schedulers.update(updateScheduler, { where: { id: id } });
    			}
    		} else {
    			objScheduler = await models.mongoose.schedulers.findOneAndUpdate({id: id}, {$set: updateScheduler}, {new: true});
    		}
    		return objScheduler;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSchedulerByDeleted(deleted, updateScheduler) {
    	try {
    		let objScheduler;
    		if(sql) {
    			objScheduler = await models.sequelize.schedulers.findOne({where: { deleted: deleted }});
    			if (objScheduler) {
    				objScheduler = await models.sequelize.schedulers.update(updateScheduler, { where: { deleted: deleted } });
    			}
    		} else {
    			objScheduler = await models.mongoose.schedulers.findOneAndUpdate({deleted: deleted}, {$set: updateScheduler}, {new: true});
    		}
    		return objScheduler;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSchedulerByCatchUp(catchUp, updateScheduler) {
    	try {
    		let objScheduler;
    		if(sql) {
    			objScheduler = await models.sequelize.schedulers.findOne({where: { catch_up: catchUp }});
    			if (objScheduler) {
    				objScheduler = await models.sequelize.schedulers.update(updateScheduler, { where: { catch_up: catchUp } });
    			}
    		} else {
    			objScheduler = await models.mongoose.schedulers.findOneAndUpdate({catch_up: catchUp}, {$set: updateScheduler}, {new: true});
    		}
    		return objScheduler;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSchedulerByName(name, updateScheduler) {
    	try {
    		let objScheduler;
    		if(sql) {
    			objScheduler = await models.sequelize.schedulers.findOne({where: { name: name }});
    			if (objScheduler) {
    				objScheduler = await models.sequelize.schedulers.update(updateScheduler, { where: { name: name } });
    			}
    		} else {
    			objScheduler = await models.mongoose.schedulers.findOneAndUpdate({name: name}, {$set: updateScheduler}, {new: true});
    		}
    		return objScheduler;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSchedulerByJob(job, updateScheduler) {
    	try {
    		let objScheduler;
    		if(sql) {
    			objScheduler = await models.sequelize.schedulers.findOne({where: { job: job }});
    			if (objScheduler) {
    				objScheduler = await models.sequelize.schedulers.update(updateScheduler, { where: { job: job } });
    			}
    		} else {
    			objScheduler = await models.mongoose.schedulers.findOneAndUpdate({job: job}, {$set: updateScheduler}, {new: true});
    		}
    		return objScheduler;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSchedulerByJobInterval(jobInterval, updateScheduler) {
    	try {
    		let objScheduler;
    		if(sql) {
    			objScheduler = await models.sequelize.schedulers.findOne({where: { job_interval: jobInterval }});
    			if (objScheduler) {
    				objScheduler = await models.sequelize.schedulers.update(updateScheduler, { where: { job_interval: jobInterval } });
    			}
    		} else {
    			objScheduler = await models.mongoose.schedulers.findOneAndUpdate({job_interval: jobInterval}, {$set: updateScheduler}, {new: true});
    		}
    		return objScheduler;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSchedulerByStatus(status, updateScheduler) {
    	try {
    		let objScheduler;
    		if(sql) {
    			objScheduler = await models.sequelize.schedulers.findOne({where: { status: status }});
    			if (objScheduler) {
    				objScheduler = await models.sequelize.schedulers.update(updateScheduler, { where: { status: status } });
    			}
    		} else {
    			objScheduler = await models.mongoose.schedulers.findOneAndUpdate({status: status}, {$set: updateScheduler}, {new: true});
    		}
    		return objScheduler;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSchedulerByDateEntered(dateEntered, updateScheduler) {
    	try {
    		let objScheduler;
    		if(sql) {
    			objScheduler = await models.sequelize.schedulers.findOne({where: { date_entered: dateEntered }});
    			if (objScheduler) {
    				objScheduler = await models.sequelize.schedulers.update(updateScheduler, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objScheduler = await models.mongoose.schedulers.findOneAndUpdate({date_entered: dateEntered}, {$set: updateScheduler}, {new: true});
    		}
    		return objScheduler;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSchedulerByDateModified(dateModified, updateScheduler) {
    	try {
    		let objScheduler;
    		if(sql) {
    			objScheduler = await models.sequelize.schedulers.findOne({where: { date_modified: dateModified }});
    			if (objScheduler) {
    				objScheduler = await models.sequelize.schedulers.update(updateScheduler, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objScheduler = await models.mongoose.schedulers.findOneAndUpdate({date_modified: dateModified}, {$set: updateScheduler}, {new: true});
    		}
    		return objScheduler;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSchedulerByDateTimeStart(dateTimeStart, updateScheduler) {
    	try {
    		let objScheduler;
    		if(sql) {
    			objScheduler = await models.sequelize.schedulers.findOne({where: { date_time_start: dateTimeStart }});
    			if (objScheduler) {
    				objScheduler = await models.sequelize.schedulers.update(updateScheduler, { where: { date_time_start: dateTimeStart } });
    			}
    		} else {
    			objScheduler = await models.mongoose.schedulers.findOneAndUpdate({date_time_start: dateTimeStart}, {$set: updateScheduler}, {new: true});
    		}
    		return objScheduler;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSchedulerByDateTimeEnd(dateTimeEnd, updateScheduler) {
    	try {
    		let objScheduler;
    		if(sql) {
    			objScheduler = await models.sequelize.schedulers.findOne({where: { date_time_end: dateTimeEnd }});
    			if (objScheduler) {
    				objScheduler = await models.sequelize.schedulers.update(updateScheduler, { where: { date_time_end: dateTimeEnd } });
    			}
    		} else {
    			objScheduler = await models.mongoose.schedulers.findOneAndUpdate({date_time_end: dateTimeEnd}, {$set: updateScheduler}, {new: true});
    		}
    		return objScheduler;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSchedulerByLastRun(lastRun, updateScheduler) {
    	try {
    		let objScheduler;
    		if(sql) {
    			objScheduler = await models.sequelize.schedulers.findOne({where: { last_run: lastRun }});
    			if (objScheduler) {
    				objScheduler = await models.sequelize.schedulers.update(updateScheduler, { where: { last_run: lastRun } });
    			}
    		} else {
    			objScheduler = await models.mongoose.schedulers.findOneAndUpdate({last_run: lastRun}, {$set: updateScheduler}, {new: true});
    		}
    		return objScheduler;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSchedulerByCreatedBy(createdBy, updateScheduler) {
    	try {
    		let objScheduler;
    		if(sql) {
    			objScheduler = await models.sequelize.schedulers.findOne({where: { created_by: createdBy }});
    			if (objScheduler) {
    				objScheduler = await models.sequelize.schedulers.update(updateScheduler, { where: { created_by: createdBy } });
    			}
    		} else {
    			objScheduler = await models.mongoose.schedulers.findOneAndUpdate({created_by: createdBy}, {$set: updateScheduler}, {new: true});
    		}
    		return objScheduler;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSchedulerByModifiedUserId(modifiedUserId, updateScheduler) {
    	try {
    		let objScheduler;
    		if(sql) {
    			objScheduler = await models.sequelize.schedulers.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objScheduler) {
    				objScheduler = await models.sequelize.schedulers.update(updateScheduler, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objScheduler = await models.mongoose.schedulers.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateScheduler}, {new: true});
    		}
    		return objScheduler;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = SchedulerService;
//</es-section>
