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

class TrackerService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllTracker(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.tracker.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.tracker.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllTracker(select = []) {
		try {
			if(sql) {
				return await models.sequelize.tracker.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.tracker.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addTracker(newTracker) {
		try {
			let objTracker;
			if(util.PrimaryKeyTypeIsString(models.sequelize.tracker.primaryKeys.id.type.toString())) {
			    newTracker.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objTracker = await models.sequelize.tracker.create(newTracker);
			} else {
				objTracker = new models.mongoose.tracker(newTracker);
				await objTracker.save();
			}
			return objTracker;
		} catch (error) {
			throw error;
		}
	}

	static async updateTracker(id, updateTracker) {
		try {
			let objTracker;
			if(sql) {
				objTracker = await models.sequelize.tracker.findOne({where: { id: util.Integer(id) }});
				if (objTracker) {
					await models.sequelize.tracker.update(updateTracker, { where: { id: util.Integer(id) } });
					objTracker = await models.sequelize.tracker.findOne({where: { id: util.Integer(id) }});
				}
			} else {
				delete updateTracker._id;
				objTracker = await models.mongoose.tracker.findOneAndUpdate({id:id}, {$set: updateTracker}, {new: true});
			}
			return objTracker;
		} catch (error) {
			throw error;
		}
	}

	static async getATracker(id, query) {
		try {
			let objTracker;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objTracker = await models.sequelize.tracker.findOne({
					    where: where && !where.where ? where : { id: util.Integer(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objTracker = await models.mongoose.tracker.find({id:util.Integer(id)}).select(query.select);
			}
			return objTracker;
		} catch (error) {
			throw error;
		}
	}

	static async deleteTracker(id) {
		try {
			let objTracker;
			if(sql) {
				objTracker = await models.sequelize.tracker.findOne({ where: { id: util.Integer(id) } });
				if (objTracker) {
					await models.sequelize.tracker.destroy({where: { id: util.Integer(id) }});
				}
			} else {
				objTracker = await models.mongoose.tracker.deleteOne({id:util.Integer(id)});
			}
			return objTracker;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objTracker;
    		if(sql) {
    			objTracker = await models.sequelize.tracker.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objTracker = await models.mongoose.tracker.findOne({id: id});
    		}
    		return objTracker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByVisible(visible, query = {}) {
    	try {
    		let objTracker;
    		if(sql) {
    			objTracker = await models.sequelize.tracker.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { visible: visible },
    			});
    		} else {
    			objTracker = await models.mongoose.tracker.findOne({visible: visible});
    		}
    		return objTracker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objTracker;
    		if(sql) {
    			objTracker = await models.sequelize.tracker.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objTracker = await models.mongoose.tracker.findOne({deleted: deleted});
    		}
    		return objTracker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUserId(userId, query = {}) {
    	try {
    		let objTracker;
    		if(sql) {
    			objTracker = await models.sequelize.tracker.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { user_id: userId },
    			});
    		} else {
    			objTracker = await models.mongoose.tracker.findOne({user_id: userId});
    		}
    		return objTracker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModuleName(moduleName, query = {}) {
    	try {
    		let objTracker;
    		if(sql) {
    			objTracker = await models.sequelize.tracker.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { module_name: moduleName },
    			});
    		} else {
    			objTracker = await models.mongoose.tracker.findOne({module_name: moduleName});
    		}
    		return objTracker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByItemId(itemId, query = {}) {
    	try {
    		let objTracker;
    		if(sql) {
    			objTracker = await models.sequelize.tracker.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { item_id: itemId },
    			});
    		} else {
    			objTracker = await models.mongoose.tracker.findOne({item_id: itemId});
    		}
    		return objTracker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByItemSummary(itemSummary, query = {}) {
    	try {
    		let objTracker;
    		if(sql) {
    			objTracker = await models.sequelize.tracker.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { item_summary: itemSummary },
    			});
    		} else {
    			objTracker = await models.mongoose.tracker.findOne({item_summary: itemSummary});
    		}
    		return objTracker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAction(action, query = {}) {
    	try {
    		let objTracker;
    		if(sql) {
    			objTracker = await models.sequelize.tracker.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { action: action },
    			});
    		} else {
    			objTracker = await models.mongoose.tracker.findOne({action: action});
    		}
    		return objTracker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySessionId(sessionId, query = {}) {
    	try {
    		let objTracker;
    		if(sql) {
    			objTracker = await models.sequelize.tracker.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { session_id: sessionId },
    			});
    		} else {
    			objTracker = await models.mongoose.tracker.findOne({session_id: sessionId});
    		}
    		return objTracker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objTracker;
    		if(sql) {
    			objTracker = await models.sequelize.tracker.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objTracker = await models.mongoose.tracker.findOne({date_modified: dateModified});
    		}
    		return objTracker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMonitorId(monitorId, query = {}) {
    	try {
    		let objTracker;
    		if(sql) {
    			objTracker = await models.sequelize.tracker.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { monitor_id: monitorId },
    			});
    		} else {
    			objTracker = await models.mongoose.tracker.findOne({monitor_id: monitorId});
    		}
    		return objTracker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateTrackerById(id, updateTracker) {
    	try {
    		let objTracker;
    		if(sql) {
    			objTracker = await models.sequelize.tracker.findOne({where: { id: id }});
    			if (objTracker) {
    				objTracker = await models.sequelize.tracker.update(updateTracker, { where: { id: id } });
    			}
    		} else {
    			objTracker = await models.mongoose.tracker.findOneAndUpdate({id: id}, {$set: updateTracker}, {new: true});
    		}
    		return objTracker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateTrackerByVisible(visible, updateTracker) {
    	try {
    		let objTracker;
    		if(sql) {
    			objTracker = await models.sequelize.tracker.findOne({where: { visible: visible }});
    			if (objTracker) {
    				objTracker = await models.sequelize.tracker.update(updateTracker, { where: { visible: visible } });
    			}
    		} else {
    			objTracker = await models.mongoose.tracker.findOneAndUpdate({visible: visible}, {$set: updateTracker}, {new: true});
    		}
    		return objTracker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateTrackerByDeleted(deleted, updateTracker) {
    	try {
    		let objTracker;
    		if(sql) {
    			objTracker = await models.sequelize.tracker.findOne({where: { deleted: deleted }});
    			if (objTracker) {
    				objTracker = await models.sequelize.tracker.update(updateTracker, { where: { deleted: deleted } });
    			}
    		} else {
    			objTracker = await models.mongoose.tracker.findOneAndUpdate({deleted: deleted}, {$set: updateTracker}, {new: true});
    		}
    		return objTracker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateTrackerByUserId(userId, updateTracker) {
    	try {
    		let objTracker;
    		if(sql) {
    			objTracker = await models.sequelize.tracker.findOne({where: { user_id: userId }});
    			if (objTracker) {
    				objTracker = await models.sequelize.tracker.update(updateTracker, { where: { user_id: userId } });
    			}
    		} else {
    			objTracker = await models.mongoose.tracker.findOneAndUpdate({user_id: userId}, {$set: updateTracker}, {new: true});
    		}
    		return objTracker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateTrackerByModuleName(moduleName, updateTracker) {
    	try {
    		let objTracker;
    		if(sql) {
    			objTracker = await models.sequelize.tracker.findOne({where: { module_name: moduleName }});
    			if (objTracker) {
    				objTracker = await models.sequelize.tracker.update(updateTracker, { where: { module_name: moduleName } });
    			}
    		} else {
    			objTracker = await models.mongoose.tracker.findOneAndUpdate({module_name: moduleName}, {$set: updateTracker}, {new: true});
    		}
    		return objTracker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateTrackerByItemId(itemId, updateTracker) {
    	try {
    		let objTracker;
    		if(sql) {
    			objTracker = await models.sequelize.tracker.findOne({where: { item_id: itemId }});
    			if (objTracker) {
    				objTracker = await models.sequelize.tracker.update(updateTracker, { where: { item_id: itemId } });
    			}
    		} else {
    			objTracker = await models.mongoose.tracker.findOneAndUpdate({item_id: itemId}, {$set: updateTracker}, {new: true});
    		}
    		return objTracker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateTrackerByItemSummary(itemSummary, updateTracker) {
    	try {
    		let objTracker;
    		if(sql) {
    			objTracker = await models.sequelize.tracker.findOne({where: { item_summary: itemSummary }});
    			if (objTracker) {
    				objTracker = await models.sequelize.tracker.update(updateTracker, { where: { item_summary: itemSummary } });
    			}
    		} else {
    			objTracker = await models.mongoose.tracker.findOneAndUpdate({item_summary: itemSummary}, {$set: updateTracker}, {new: true});
    		}
    		return objTracker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateTrackerByAction(action, updateTracker) {
    	try {
    		let objTracker;
    		if(sql) {
    			objTracker = await models.sequelize.tracker.findOne({where: { action: action }});
    			if (objTracker) {
    				objTracker = await models.sequelize.tracker.update(updateTracker, { where: { action: action } });
    			}
    		} else {
    			objTracker = await models.mongoose.tracker.findOneAndUpdate({action: action}, {$set: updateTracker}, {new: true});
    		}
    		return objTracker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateTrackerBySessionId(sessionId, updateTracker) {
    	try {
    		let objTracker;
    		if(sql) {
    			objTracker = await models.sequelize.tracker.findOne({where: { session_id: sessionId }});
    			if (objTracker) {
    				objTracker = await models.sequelize.tracker.update(updateTracker, { where: { session_id: sessionId } });
    			}
    		} else {
    			objTracker = await models.mongoose.tracker.findOneAndUpdate({session_id: sessionId}, {$set: updateTracker}, {new: true});
    		}
    		return objTracker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateTrackerByDateModified(dateModified, updateTracker) {
    	try {
    		let objTracker;
    		if(sql) {
    			objTracker = await models.sequelize.tracker.findOne({where: { date_modified: dateModified }});
    			if (objTracker) {
    				objTracker = await models.sequelize.tracker.update(updateTracker, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objTracker = await models.mongoose.tracker.findOneAndUpdate({date_modified: dateModified}, {$set: updateTracker}, {new: true});
    		}
    		return objTracker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateTrackerByMonitorId(monitorId, updateTracker) {
    	try {
    		let objTracker;
    		if(sql) {
    			objTracker = await models.sequelize.tracker.findOne({where: { monitor_id: monitorId }});
    			if (objTracker) {
    				objTracker = await models.sequelize.tracker.update(updateTracker, { where: { monitor_id: monitorId } });
    			}
    		} else {
    			objTracker = await models.mongoose.tracker.findOneAndUpdate({monitor_id: monitorId}, {$set: updateTracker}, {new: true});
    		}
    		return objTracker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = TrackerService;
//</es-section>
