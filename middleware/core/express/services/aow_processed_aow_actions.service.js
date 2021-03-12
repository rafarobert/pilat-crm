/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:25 GMT-0400 (Bolivia Time)
 * Time: 14:56:25
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:25 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:25
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

class AowProcessedAowActionService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAowProcessedAowActions(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aowProcessedAowActions.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aowProcessedAowActions.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAowProcessedAowActions(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aowProcessedAowActions.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aowProcessedAowActions.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAowProcessedAowAction(newAowProcessedAowAction) {
		try {
			let objAowProcessedAowAction;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aowProcessedAowActions.primaryKeys.id.type.toString())) {
			    newAowProcessedAowAction.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAowProcessedAowAction = await models.sequelize.aowProcessedAowActions.create(newAowProcessedAowAction);
			} else {
				objAowProcessedAowAction = new models.mongoose.aowProcessedAowActions(newAowProcessedAowAction);
				await objAowProcessedAowAction.save();
			}
			return objAowProcessedAowAction;
		} catch (error) {
			throw error;
		}
	}

	static async updateAowProcessedAowAction(id, updateAowProcessedAowAction) {
		try {
			let objAowProcessedAowAction;
			if(sql) {
				objAowProcessedAowAction = await models.sequelize.aowProcessedAowActions.findOne({where: { id: util.String(id) }});
				if (objAowProcessedAowAction) {
					await models.sequelize.aowProcessedAowActions.update(updateAowProcessedAowAction, { where: { id: util.String(id) } });
					objAowProcessedAowAction = await models.sequelize.aowProcessedAowActions.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateAowProcessedAowAction._id;
				objAowProcessedAowAction = await models.mongoose.aowProcessedAowActions.findOneAndUpdate({id:id}, {$set: updateAowProcessedAowAction}, {new: true});
			}
			return objAowProcessedAowAction;
		} catch (error) {
			throw error;
		}
	}

	static async getAAowProcessedAowAction(id, query) {
		try {
			let objAowProcessedAowAction;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAowProcessedAowAction = await models.sequelize.aowProcessedAowActions.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAowProcessedAowAction = await models.mongoose.aowProcessedAowActions.find({id:util.String(id)}).select(query.select);
			}
			return objAowProcessedAowAction;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAowProcessedAowAction(id) {
		try {
			let objAowProcessedAowAction;
			if(sql) {
				objAowProcessedAowAction = await models.sequelize.aowProcessedAowActions.findOne({ where: { id: util.String(id) } });
				if (objAowProcessedAowAction) {
					await models.sequelize.aowProcessedAowActions.destroy({where: { id: util.String(id) }});
				}
			} else {
				objAowProcessedAowAction = await models.mongoose.aowProcessedAowActions.deleteOne({id:util.String(id)});
			}
			return objAowProcessedAowAction;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAowProcessedAowAction;
    		if(sql) {
    			objAowProcessedAowAction = await models.sequelize.aowProcessedAowActions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAowProcessedAowAction = await models.mongoose.aowProcessedAowActions.findOne({id: id});
    		}
    		return objAowProcessedAowAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAowProcessedAowAction;
    		if(sql) {
    			objAowProcessedAowAction = await models.sequelize.aowProcessedAowActions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAowProcessedAowAction = await models.mongoose.aowProcessedAowActions.findOne({deleted: deleted});
    		}
    		return objAowProcessedAowAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAowProcessedId(aowProcessedId, query = {}) {
    	try {
    		let objAowProcessedAowAction;
    		if(sql) {
    			objAowProcessedAowAction = await models.sequelize.aowProcessedAowActions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { aow_processed_id: aowProcessedId },
    			});
    		} else {
    			objAowProcessedAowAction = await models.mongoose.aowProcessedAowActions.findOne({aow_processed_id: aowProcessedId});
    		}
    		return objAowProcessedAowAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAowActionId(aowActionId, query = {}) {
    	try {
    		let objAowProcessedAowAction;
    		if(sql) {
    			objAowProcessedAowAction = await models.sequelize.aowProcessedAowActions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { aow_action_id: aowActionId },
    			});
    		} else {
    			objAowProcessedAowAction = await models.mongoose.aowProcessedAowActions.findOne({aow_action_id: aowActionId});
    		}
    		return objAowProcessedAowAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByStatus(status, query = {}) {
    	try {
    		let objAowProcessedAowAction;
    		if(sql) {
    			objAowProcessedAowAction = await models.sequelize.aowProcessedAowActions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { status: status },
    			});
    		} else {
    			objAowProcessedAowAction = await models.mongoose.aowProcessedAowActions.findOne({status: status});
    		}
    		return objAowProcessedAowAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAowProcessedAowAction;
    		if(sql) {
    			objAowProcessedAowAction = await models.sequelize.aowProcessedAowActions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAowProcessedAowAction = await models.mongoose.aowProcessedAowActions.findOne({date_modified: dateModified});
    		}
    		return objAowProcessedAowAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAowProcessedAowActionById(id, updateAowProcessedAowAction) {
    	try {
    		let objAowProcessedAowAction;
    		if(sql) {
    			objAowProcessedAowAction = await models.sequelize.aowProcessedAowActions.findOne({where: { id: id }});
    			if (objAowProcessedAowAction) {
    				objAowProcessedAowAction = await models.sequelize.aowProcessedAowActions.update(updateAowProcessedAowAction, { where: { id: id } });
    			}
    		} else {
    			objAowProcessedAowAction = await models.mongoose.aowProcessedAowActions.findOneAndUpdate({id: id}, {$set: updateAowProcessedAowAction}, {new: true});
    		}
    		return objAowProcessedAowAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowProcessedAowActionByDeleted(deleted, updateAowProcessedAowAction) {
    	try {
    		let objAowProcessedAowAction;
    		if(sql) {
    			objAowProcessedAowAction = await models.sequelize.aowProcessedAowActions.findOne({where: { deleted: deleted }});
    			if (objAowProcessedAowAction) {
    				objAowProcessedAowAction = await models.sequelize.aowProcessedAowActions.update(updateAowProcessedAowAction, { where: { deleted: deleted } });
    			}
    		} else {
    			objAowProcessedAowAction = await models.mongoose.aowProcessedAowActions.findOneAndUpdate({deleted: deleted}, {$set: updateAowProcessedAowAction}, {new: true});
    		}
    		return objAowProcessedAowAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowProcessedAowActionByAowProcessedId(aowProcessedId, updateAowProcessedAowAction) {
    	try {
    		let objAowProcessedAowAction;
    		if(sql) {
    			objAowProcessedAowAction = await models.sequelize.aowProcessedAowActions.findOne({where: { aow_processed_id: aowProcessedId }});
    			if (objAowProcessedAowAction) {
    				objAowProcessedAowAction = await models.sequelize.aowProcessedAowActions.update(updateAowProcessedAowAction, { where: { aow_processed_id: aowProcessedId } });
    			}
    		} else {
    			objAowProcessedAowAction = await models.mongoose.aowProcessedAowActions.findOneAndUpdate({aow_processed_id: aowProcessedId}, {$set: updateAowProcessedAowAction}, {new: true});
    		}
    		return objAowProcessedAowAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowProcessedAowActionByAowActionId(aowActionId, updateAowProcessedAowAction) {
    	try {
    		let objAowProcessedAowAction;
    		if(sql) {
    			objAowProcessedAowAction = await models.sequelize.aowProcessedAowActions.findOne({where: { aow_action_id: aowActionId }});
    			if (objAowProcessedAowAction) {
    				objAowProcessedAowAction = await models.sequelize.aowProcessedAowActions.update(updateAowProcessedAowAction, { where: { aow_action_id: aowActionId } });
    			}
    		} else {
    			objAowProcessedAowAction = await models.mongoose.aowProcessedAowActions.findOneAndUpdate({aow_action_id: aowActionId}, {$set: updateAowProcessedAowAction}, {new: true});
    		}
    		return objAowProcessedAowAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowProcessedAowActionByStatus(status, updateAowProcessedAowAction) {
    	try {
    		let objAowProcessedAowAction;
    		if(sql) {
    			objAowProcessedAowAction = await models.sequelize.aowProcessedAowActions.findOne({where: { status: status }});
    			if (objAowProcessedAowAction) {
    				objAowProcessedAowAction = await models.sequelize.aowProcessedAowActions.update(updateAowProcessedAowAction, { where: { status: status } });
    			}
    		} else {
    			objAowProcessedAowAction = await models.mongoose.aowProcessedAowActions.findOneAndUpdate({status: status}, {$set: updateAowProcessedAowAction}, {new: true});
    		}
    		return objAowProcessedAowAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowProcessedAowActionByDateModified(dateModified, updateAowProcessedAowAction) {
    	try {
    		let objAowProcessedAowAction;
    		if(sql) {
    			objAowProcessedAowAction = await models.sequelize.aowProcessedAowActions.findOne({where: { date_modified: dateModified }});
    			if (objAowProcessedAowAction) {
    				objAowProcessedAowAction = await models.sequelize.aowProcessedAowActions.update(updateAowProcessedAowAction, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAowProcessedAowAction = await models.mongoose.aowProcessedAowActions.findOneAndUpdate({date_modified: dateModified}, {$set: updateAowProcessedAowAction}, {new: true});
    		}
    		return objAowProcessedAowAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AowProcessedAowActionService;
//</es-section>
