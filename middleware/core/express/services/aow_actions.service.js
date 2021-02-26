/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:26 GMT-0400 (Bolivia Time)
 * Time: 0:22:26
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:26 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:26
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

class AowActionService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAowActions(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aowActions.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aowActions.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAowActions(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aowActions.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aowActions.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAowAction(newAowAction) {
		try {
			let objAowAction;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aowActions.primaryKeys.id.type.toString())) {
			    newAowAction.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAowAction = await models.sequelize.aowActions.create(newAowAction);
			} else {
				objAowAction = new models.mongoose.aowActions(newAowAction);
				await objAowAction.save();
			}
			return objAowAction;
		} catch (error) {
			throw error;
		}
	}

	static async updateAowAction(id, updateAowAction) {
		try {
			let objAowAction;
			if(sql) {
				objAowAction = await models.sequelize.aowActions.findOne({where: { id: util.Char(id) }});
				if (objAowAction) {
					await models.sequelize.aowActions.update(updateAowAction, { where: { id: util.Char(id) } });
					objAowAction = await models.sequelize.aowActions.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAowAction._id;
				objAowAction = await models.mongoose.aowActions.findOneAndUpdate({id:id}, {$set: updateAowAction}, {new: true});
			}
			return objAowAction;
		} catch (error) {
			throw error;
		}
	}

	static async getAAowAction(id, query) {
		try {
			let objAowAction;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAowAction = await models.sequelize.aowActions.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAowAction = await models.mongoose.aowActions.find({id:util.Char(id)}).select(query.select);
			}
			return objAowAction;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAowAction(id) {
		try {
			let objAowAction;
			if(sql) {
				objAowAction = await models.sequelize.aowActions.findOne({ where: { id: util.Char(id) } });
				if (objAowAction) {
					await models.sequelize.aowActions.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAowAction = await models.mongoose.aowActions.deleteOne({id:util.Char(id)});
			}
			return objAowAction;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAowAction;
    		if(sql) {
    			objAowAction = await models.sequelize.aowActions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAowAction = await models.mongoose.aowActions.findOne({id: id});
    		}
    		return objAowAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAowAction;
    		if(sql) {
    			objAowAction = await models.sequelize.aowActions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAowAction = await models.mongoose.aowActions.findOne({deleted: deleted});
    		}
    		return objAowAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByActionOrder(actionOrder, query = {}) {
    	try {
    		let objAowAction;
    		if(sql) {
    			objAowAction = await models.sequelize.aowActions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { action_order: actionOrder },
    			});
    		} else {
    			objAowAction = await models.mongoose.aowActions.findOne({action_order: actionOrder});
    		}
    		return objAowAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objAowAction;
    		if(sql) {
    			objAowAction = await models.sequelize.aowActions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objAowAction = await models.mongoose.aowActions.findOne({name: name});
    		}
    		return objAowAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAction(action, query = {}) {
    	try {
    		let objAowAction;
    		if(sql) {
    			objAowAction = await models.sequelize.aowActions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { action: action },
    			});
    		} else {
    			objAowAction = await models.mongoose.aowActions.findOne({action: action});
    		}
    		return objAowAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objAowAction;
    		if(sql) {
    			objAowAction = await models.sequelize.aowActions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objAowAction = await models.mongoose.aowActions.findOne({description: description});
    		}
    		return objAowAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParameters(parameters, query = {}) {
    	try {
    		let objAowAction;
    		if(sql) {
    			objAowAction = await models.sequelize.aowActions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parameters: parameters },
    			});
    		} else {
    			objAowAction = await models.mongoose.aowActions.findOne({parameters: parameters});
    		}
    		return objAowAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objAowAction;
    		if(sql) {
    			objAowAction = await models.sequelize.aowActions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objAowAction = await models.mongoose.aowActions.findOne({date_entered: dateEntered});
    		}
    		return objAowAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAowAction;
    		if(sql) {
    			objAowAction = await models.sequelize.aowActions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAowAction = await models.mongoose.aowActions.findOne({date_modified: dateModified});
    		}
    		return objAowAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objAowAction;
    		if(sql) {
    			objAowAction = await models.sequelize.aowActions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objAowAction = await models.mongoose.aowActions.findOne({modified_user_id: modifiedUserId});
    		}
    		return objAowAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAowAction;
    		if(sql) {
    			objAowAction = await models.sequelize.aowActions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAowAction = await models.mongoose.aowActions.findOne({created_by: createdBy});
    		}
    		return objAowAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAowWorkflowId(aowWorkflowId, query = {}) {
    	try {
    		let objAowAction;
    		if(sql) {
    			objAowAction = await models.sequelize.aowActions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { aow_workflow_id: aowWorkflowId },
    			});
    		} else {
    			objAowAction = await models.mongoose.aowActions.findOne({aow_workflow_id: aowWorkflowId});
    		}
    		return objAowAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAowActionById(id, updateAowAction) {
    	try {
    		let objAowAction;
    		if(sql) {
    			objAowAction = await models.sequelize.aowActions.findOne({where: { id: id }});
    			if (objAowAction) {
    				objAowAction = await models.sequelize.aowActions.update(updateAowAction, { where: { id: id } });
    			}
    		} else {
    			objAowAction = await models.mongoose.aowActions.findOneAndUpdate({id: id}, {$set: updateAowAction}, {new: true});
    		}
    		return objAowAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowActionByDeleted(deleted, updateAowAction) {
    	try {
    		let objAowAction;
    		if(sql) {
    			objAowAction = await models.sequelize.aowActions.findOne({where: { deleted: deleted }});
    			if (objAowAction) {
    				objAowAction = await models.sequelize.aowActions.update(updateAowAction, { where: { deleted: deleted } });
    			}
    		} else {
    			objAowAction = await models.mongoose.aowActions.findOneAndUpdate({deleted: deleted}, {$set: updateAowAction}, {new: true});
    		}
    		return objAowAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowActionByActionOrder(actionOrder, updateAowAction) {
    	try {
    		let objAowAction;
    		if(sql) {
    			objAowAction = await models.sequelize.aowActions.findOne({where: { action_order: actionOrder }});
    			if (objAowAction) {
    				objAowAction = await models.sequelize.aowActions.update(updateAowAction, { where: { action_order: actionOrder } });
    			}
    		} else {
    			objAowAction = await models.mongoose.aowActions.findOneAndUpdate({action_order: actionOrder}, {$set: updateAowAction}, {new: true});
    		}
    		return objAowAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowActionByName(name, updateAowAction) {
    	try {
    		let objAowAction;
    		if(sql) {
    			objAowAction = await models.sequelize.aowActions.findOne({where: { name: name }});
    			if (objAowAction) {
    				objAowAction = await models.sequelize.aowActions.update(updateAowAction, { where: { name: name } });
    			}
    		} else {
    			objAowAction = await models.mongoose.aowActions.findOneAndUpdate({name: name}, {$set: updateAowAction}, {new: true});
    		}
    		return objAowAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowActionByAction(action, updateAowAction) {
    	try {
    		let objAowAction;
    		if(sql) {
    			objAowAction = await models.sequelize.aowActions.findOne({where: { action: action }});
    			if (objAowAction) {
    				objAowAction = await models.sequelize.aowActions.update(updateAowAction, { where: { action: action } });
    			}
    		} else {
    			objAowAction = await models.mongoose.aowActions.findOneAndUpdate({action: action}, {$set: updateAowAction}, {new: true});
    		}
    		return objAowAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowActionByDescription(description, updateAowAction) {
    	try {
    		let objAowAction;
    		if(sql) {
    			objAowAction = await models.sequelize.aowActions.findOne({where: { description: description }});
    			if (objAowAction) {
    				objAowAction = await models.sequelize.aowActions.update(updateAowAction, { where: { description: description } });
    			}
    		} else {
    			objAowAction = await models.mongoose.aowActions.findOneAndUpdate({description: description}, {$set: updateAowAction}, {new: true});
    		}
    		return objAowAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowActionByParameters(parameters, updateAowAction) {
    	try {
    		let objAowAction;
    		if(sql) {
    			objAowAction = await models.sequelize.aowActions.findOne({where: { parameters: parameters }});
    			if (objAowAction) {
    				objAowAction = await models.sequelize.aowActions.update(updateAowAction, { where: { parameters: parameters } });
    			}
    		} else {
    			objAowAction = await models.mongoose.aowActions.findOneAndUpdate({parameters: parameters}, {$set: updateAowAction}, {new: true});
    		}
    		return objAowAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowActionByDateEntered(dateEntered, updateAowAction) {
    	try {
    		let objAowAction;
    		if(sql) {
    			objAowAction = await models.sequelize.aowActions.findOne({where: { date_entered: dateEntered }});
    			if (objAowAction) {
    				objAowAction = await models.sequelize.aowActions.update(updateAowAction, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objAowAction = await models.mongoose.aowActions.findOneAndUpdate({date_entered: dateEntered}, {$set: updateAowAction}, {new: true});
    		}
    		return objAowAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowActionByDateModified(dateModified, updateAowAction) {
    	try {
    		let objAowAction;
    		if(sql) {
    			objAowAction = await models.sequelize.aowActions.findOne({where: { date_modified: dateModified }});
    			if (objAowAction) {
    				objAowAction = await models.sequelize.aowActions.update(updateAowAction, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAowAction = await models.mongoose.aowActions.findOneAndUpdate({date_modified: dateModified}, {$set: updateAowAction}, {new: true});
    		}
    		return objAowAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowActionByModifiedUserId(modifiedUserId, updateAowAction) {
    	try {
    		let objAowAction;
    		if(sql) {
    			objAowAction = await models.sequelize.aowActions.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objAowAction) {
    				objAowAction = await models.sequelize.aowActions.update(updateAowAction, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objAowAction = await models.mongoose.aowActions.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateAowAction}, {new: true});
    		}
    		return objAowAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowActionByCreatedBy(createdBy, updateAowAction) {
    	try {
    		let objAowAction;
    		if(sql) {
    			objAowAction = await models.sequelize.aowActions.findOne({where: { created_by: createdBy }});
    			if (objAowAction) {
    				objAowAction = await models.sequelize.aowActions.update(updateAowAction, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAowAction = await models.mongoose.aowActions.findOneAndUpdate({created_by: createdBy}, {$set: updateAowAction}, {new: true});
    		}
    		return objAowAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowActionByAowWorkflowId(aowWorkflowId, updateAowAction) {
    	try {
    		let objAowAction;
    		if(sql) {
    			objAowAction = await models.sequelize.aowActions.findOne({where: { aow_workflow_id: aowWorkflowId }});
    			if (objAowAction) {
    				objAowAction = await models.sequelize.aowActions.update(updateAowAction, { where: { aow_workflow_id: aowWorkflowId } });
    			}
    		} else {
    			objAowAction = await models.mongoose.aowActions.findOneAndUpdate({aow_workflow_id: aowWorkflowId}, {$set: updateAowAction}, {new: true});
    		}
    		return objAowAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AowActionService;
//</es-section>
