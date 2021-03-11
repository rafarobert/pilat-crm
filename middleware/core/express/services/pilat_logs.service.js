/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:25 GMT-0400 (Bolivia Time)
 * Time: 14:57:25
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:25 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:25
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

class PilatLogService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllPilatLogs(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.pilatLogs.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['_id','ASC']],
                });
			} else {
				return await models.mongoose.pilatLogs.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllPilatLogs(select = []) {
		try {
			if(sql) {
				return await models.sequelize.pilatLogs.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.pilatLogs.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addPilatLog(newPilatLog) {
		try {
			let objPilatLog;
			if(util.PrimaryKeyTypeIsString(models.sequelize.pilatLogs.primaryKeys._id.type.toString())) {
			    newPilatLog._id = models.sequelize.objectId().toString();
		    }
			
			if(!newPilatLog.id) {
              let max = await models.sequelize.pilatLogs.max('id');
              newPilatLog.id = newPilatLog.id ? newPilatLog.id : max+1;
			}
			
			
			
			if(sql) {
				objPilatLog = await models.sequelize.pilatLogs.create(newPilatLog);
			} else {
				objPilatLog = new models.mongoose.pilatLogs(newPilatLog);
				await objPilatLog.save();
			}
			return objPilatLog;
		} catch (error) {
			throw error;
		}
	}

	static async updatePilatLog(_id, updatePilatLog) {
		try {
			let objPilatLog;
			if(sql) {
				objPilatLog = await models.sequelize.pilatLogs.findOne({where: { _id: util.String(_id) }});
				if (objPilatLog) {
					await models.sequelize.pilatLogs.update(updatePilatLog, { where: { _id: util.String(_id) } });
					objPilatLog = await models.sequelize.pilatLogs.findOne({where: { _id: util.String(_id) }});
				}
			} else {
				delete updatePilatLog._id;
				objPilatLog = await models.mongoose.pilatLogs.findOneAndUpdate({_id:_id}, {$set: updatePilatLog}, {new: true});
			}
			return objPilatLog;
		} catch (error) {
			throw error;
		}
	}

	static async getAPilatLog(_id, query) {
		try {
			let objPilatLog;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objPilatLog = await models.sequelize.pilatLogs.findOne({
					    where: where && !where.where ? where : { _id: util.String(_id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objPilatLog = await models.mongoose.pilatLogs.find({_id:util.String(_id)}).select(query.select);
			}
			return objPilatLog;
		} catch (error) {
			throw error;
		}
	}

	static async deletePilatLog(_id) {
		try {
			let objPilatLog;
			if(sql) {
				objPilatLog = await models.sequelize.pilatLogs.findOne({ where: { _id: util.String(_id) } });
				if (objPilatLog) {
					await models.sequelize.pilatLogs.destroy({where: { _id: util.String(_id) }});
				}
			} else {
				objPilatLog = await models.mongoose.pilatLogs.deleteOne({_id:util.String(_id)});
			}
			return objPilatLog;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneByUid(Id, query = {}) {
    	try {
    		let objPilatLog;
    		if(sql) {
    			objPilatLog = await models.sequelize.pilatLogs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { _id: Id },
    			});
    		} else {
    			objPilatLog = await models.mongoose.pilatLogs.findOne({_id: Id});
    		}
    		return objPilatLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneById(id, query = {}) {
    	try {
    		let objPilatLog;
    		if(sql) {
    			objPilatLog = await models.sequelize.pilatLogs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objPilatLog = await models.mongoose.pilatLogs.findOne({id: id});
    		}
    		return objPilatLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAction(action, query = {}) {
    	try {
    		let objPilatLog;
    		if(sql) {
    			objPilatLog = await models.sequelize.pilatLogs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { action: action },
    			});
    		} else {
    			objPilatLog = await models.mongoose.pilatLogs.findOne({action: action});
    		}
    		return objPilatLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objPilatLog;
    		if(sql) {
    			objPilatLog = await models.sequelize.pilatLogs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objPilatLog = await models.mongoose.pilatLogs.findOne({description: description});
    		}
    		return objPilatLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModule(module, query = {}) {
    	try {
    		let objPilatLog;
    		if(sql) {
    			objPilatLog = await models.sequelize.pilatLogs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { module: module },
    			});
    		} else {
    			objPilatLog = await models.mongoose.pilatLogs.findOne({module: module});
    		}
    		return objPilatLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUser(user, query = {}) {
    	try {
    		let objPilatLog;
    		if(sql) {
    			objPilatLog = await models.sequelize.pilatLogs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { user: user },
    			});
    		} else {
    			objPilatLog = await models.mongoose.pilatLogs.findOne({user: user});
    		}
    		return objPilatLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySourceId(sourceId, query = {}) {
    	try {
    		let objPilatLog;
    		if(sql) {
    			objPilatLog = await models.sequelize.pilatLogs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { source_id: sourceId },
    			});
    		} else {
    			objPilatLog = await models.mongoose.pilatLogs.findOne({source_id: sourceId});
    		}
    		return objPilatLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModuleId(moduleId, query = {}) {
    	try {
    		let objPilatLog;
    		if(sql) {
    			objPilatLog = await models.sequelize.pilatLogs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { module_id: moduleId },
    			});
    		} else {
    			objPilatLog = await models.mongoose.pilatLogs.findOne({module_id: moduleId});
    		}
    		return objPilatLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedby(createdby, query = {}) {
    	try {
    		let objPilatLog;
    		if(sql) {
    			objPilatLog = await models.sequelize.pilatLogs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { createdBy: createdby },
    			});
    		} else {
    			objPilatLog = await models.mongoose.pilatLogs.findOne({createdBy: createdby});
    		}
    		return objPilatLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUpdatedby(updatedby, query = {}) {
    	try {
    		let objPilatLog;
    		if(sql) {
    			objPilatLog = await models.sequelize.pilatLogs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { updatedBy: updatedby },
    			});
    		} else {
    			objPilatLog = await models.mongoose.pilatLogs.findOne({updatedBy: updatedby});
    		}
    		return objPilatLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDueat(dueat, query = {}) {
    	try {
    		let objPilatLog;
    		if(sql) {
    			objPilatLog = await models.sequelize.pilatLogs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { dueAt: dueat },
    			});
    		} else {
    			objPilatLog = await models.mongoose.pilatLogs.findOne({dueAt: dueat});
    		}
    		return objPilatLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedat(createdat, query = {}) {
    	try {
    		let objPilatLog;
    		if(sql) {
    			objPilatLog = await models.sequelize.pilatLogs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { createdAt: createdat },
    			});
    		} else {
    			objPilatLog = await models.mongoose.pilatLogs.findOne({createdAt: createdat});
    		}
    		return objPilatLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUpdatedat(updatedat, query = {}) {
    	try {
    		let objPilatLog;
    		if(sql) {
    			objPilatLog = await models.sequelize.pilatLogs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { updatedAt: updatedat },
    			});
    		} else {
    			objPilatLog = await models.mongoose.pilatLogs.findOne({updatedAt: updatedat});
    		}
    		return objPilatLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updatePilatLogByUid(Id, updatePilatLog) {
    	try {
    		let objPilatLog;
    		if(sql) {
    			objPilatLog = await models.sequelize.pilatLogs.findOne({where: { _id: Id }});
    			if (objPilatLog) {
    				objPilatLog = await models.sequelize.pilatLogs.update(updatePilatLog, { where: { _id: Id } });
    			}
    		} else {
    			objPilatLog = await models.mongoose.pilatLogs.findOneAndUpdate({_id: Id}, {$set: updatePilatLog}, {new: true});
    		}
    		return objPilatLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatLogById(id, updatePilatLog) {
    	try {
    		let objPilatLog;
    		if(sql) {
    			objPilatLog = await models.sequelize.pilatLogs.findOne({where: { id: id }});
    			if (objPilatLog) {
    				objPilatLog = await models.sequelize.pilatLogs.update(updatePilatLog, { where: { id: id } });
    			}
    		} else {
    			objPilatLog = await models.mongoose.pilatLogs.findOneAndUpdate({id: id}, {$set: updatePilatLog}, {new: true});
    		}
    		return objPilatLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatLogByAction(action, updatePilatLog) {
    	try {
    		let objPilatLog;
    		if(sql) {
    			objPilatLog = await models.sequelize.pilatLogs.findOne({where: { action: action }});
    			if (objPilatLog) {
    				objPilatLog = await models.sequelize.pilatLogs.update(updatePilatLog, { where: { action: action } });
    			}
    		} else {
    			objPilatLog = await models.mongoose.pilatLogs.findOneAndUpdate({action: action}, {$set: updatePilatLog}, {new: true});
    		}
    		return objPilatLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatLogByDescription(description, updatePilatLog) {
    	try {
    		let objPilatLog;
    		if(sql) {
    			objPilatLog = await models.sequelize.pilatLogs.findOne({where: { description: description }});
    			if (objPilatLog) {
    				objPilatLog = await models.sequelize.pilatLogs.update(updatePilatLog, { where: { description: description } });
    			}
    		} else {
    			objPilatLog = await models.mongoose.pilatLogs.findOneAndUpdate({description: description}, {$set: updatePilatLog}, {new: true});
    		}
    		return objPilatLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatLogByModule(module, updatePilatLog) {
    	try {
    		let objPilatLog;
    		if(sql) {
    			objPilatLog = await models.sequelize.pilatLogs.findOne({where: { module: module }});
    			if (objPilatLog) {
    				objPilatLog = await models.sequelize.pilatLogs.update(updatePilatLog, { where: { module: module } });
    			}
    		} else {
    			objPilatLog = await models.mongoose.pilatLogs.findOneAndUpdate({module: module}, {$set: updatePilatLog}, {new: true});
    		}
    		return objPilatLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatLogByUser(user, updatePilatLog) {
    	try {
    		let objPilatLog;
    		if(sql) {
    			objPilatLog = await models.sequelize.pilatLogs.findOne({where: { user: user }});
    			if (objPilatLog) {
    				objPilatLog = await models.sequelize.pilatLogs.update(updatePilatLog, { where: { user: user } });
    			}
    		} else {
    			objPilatLog = await models.mongoose.pilatLogs.findOneAndUpdate({user: user}, {$set: updatePilatLog}, {new: true});
    		}
    		return objPilatLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatLogBySourceId(sourceId, updatePilatLog) {
    	try {
    		let objPilatLog;
    		if(sql) {
    			objPilatLog = await models.sequelize.pilatLogs.findOne({where: { source_id: sourceId }});
    			if (objPilatLog) {
    				objPilatLog = await models.sequelize.pilatLogs.update(updatePilatLog, { where: { source_id: sourceId } });
    			}
    		} else {
    			objPilatLog = await models.mongoose.pilatLogs.findOneAndUpdate({source_id: sourceId}, {$set: updatePilatLog}, {new: true});
    		}
    		return objPilatLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatLogByModuleId(moduleId, updatePilatLog) {
    	try {
    		let objPilatLog;
    		if(sql) {
    			objPilatLog = await models.sequelize.pilatLogs.findOne({where: { module_id: moduleId }});
    			if (objPilatLog) {
    				objPilatLog = await models.sequelize.pilatLogs.update(updatePilatLog, { where: { module_id: moduleId } });
    			}
    		} else {
    			objPilatLog = await models.mongoose.pilatLogs.findOneAndUpdate({module_id: moduleId}, {$set: updatePilatLog}, {new: true});
    		}
    		return objPilatLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatLogByCreatedby(createdby, updatePilatLog) {
    	try {
    		let objPilatLog;
    		if(sql) {
    			objPilatLog = await models.sequelize.pilatLogs.findOne({where: { createdBy: createdby }});
    			if (objPilatLog) {
    				objPilatLog = await models.sequelize.pilatLogs.update(updatePilatLog, { where: { createdBy: createdby } });
    			}
    		} else {
    			objPilatLog = await models.mongoose.pilatLogs.findOneAndUpdate({createdBy: createdby}, {$set: updatePilatLog}, {new: true});
    		}
    		return objPilatLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatLogByUpdatedby(updatedby, updatePilatLog) {
    	try {
    		let objPilatLog;
    		if(sql) {
    			objPilatLog = await models.sequelize.pilatLogs.findOne({where: { updatedBy: updatedby }});
    			if (objPilatLog) {
    				objPilatLog = await models.sequelize.pilatLogs.update(updatePilatLog, { where: { updatedBy: updatedby } });
    			}
    		} else {
    			objPilatLog = await models.mongoose.pilatLogs.findOneAndUpdate({updatedBy: updatedby}, {$set: updatePilatLog}, {new: true});
    		}
    		return objPilatLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatLogByDueat(dueat, updatePilatLog) {
    	try {
    		let objPilatLog;
    		if(sql) {
    			objPilatLog = await models.sequelize.pilatLogs.findOne({where: { dueAt: dueat }});
    			if (objPilatLog) {
    				objPilatLog = await models.sequelize.pilatLogs.update(updatePilatLog, { where: { dueAt: dueat } });
    			}
    		} else {
    			objPilatLog = await models.mongoose.pilatLogs.findOneAndUpdate({dueAt: dueat}, {$set: updatePilatLog}, {new: true});
    		}
    		return objPilatLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatLogByCreatedat(createdat, updatePilatLog) {
    	try {
    		let objPilatLog;
    		if(sql) {
    			objPilatLog = await models.sequelize.pilatLogs.findOne({where: { createdAt: createdat }});
    			if (objPilatLog) {
    				objPilatLog = await models.sequelize.pilatLogs.update(updatePilatLog, { where: { createdAt: createdat } });
    			}
    		} else {
    			objPilatLog = await models.mongoose.pilatLogs.findOneAndUpdate({createdAt: createdat}, {$set: updatePilatLog}, {new: true});
    		}
    		return objPilatLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatLogByUpdatedat(updatedat, updatePilatLog) {
    	try {
    		let objPilatLog;
    		if(sql) {
    			objPilatLog = await models.sequelize.pilatLogs.findOne({where: { updatedAt: updatedat }});
    			if (objPilatLog) {
    				objPilatLog = await models.sequelize.pilatLogs.update(updatePilatLog, { where: { updatedAt: updatedat } });
    			}
    		} else {
    			objPilatLog = await models.mongoose.pilatLogs.findOneAndUpdate({updatedAt: updatedat}, {$set: updatePilatLog}, {new: true});
    		}
    		return objPilatLog;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = PilatLogService;
//</es-section>
