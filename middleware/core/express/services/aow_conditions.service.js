/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:36:23 GMT-0400 (Bolivia Time)
 * Time: 18:36:23
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:36:23 GMT-0400 (Bolivia Time)
 * Last time updated: 18:36:23
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

class AowConditionService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAowConditions(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aowConditions.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aowConditions.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAowConditions(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aowConditions.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aowConditions.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAowCondition(newAowCondition) {
		try {
			let objAowCondition;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aowConditions.primaryKeys.id.type.toString())) {
			    newAowCondition.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAowCondition = await models.sequelize.aowConditions.create(newAowCondition);
			} else {
				objAowCondition = new models.mongoose.aowConditions(newAowCondition);
				await objAowCondition.save();
			}
			return objAowCondition;
		} catch (error) {
			throw error;
		}
	}

	static async updateAowCondition(id, updateAowCondition) {
		try {
			let objAowCondition;
			if(sql) {
				objAowCondition = await models.sequelize.aowConditions.findOne({where: { id: util.Char(id) }});
				if (objAowCondition) {
					await models.sequelize.aowConditions.update(updateAowCondition, { where: { id: util.Char(id) } });
					objAowCondition = await models.sequelize.aowConditions.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAowCondition._id;
				objAowCondition = await models.mongoose.aowConditions.findOneAndUpdate({id:id}, {$set: updateAowCondition}, {new: true});
			}
			return objAowCondition;
		} catch (error) {
			throw error;
		}
	}

	static async getAAowCondition(id, query) {
		try {
			let objAowCondition;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAowCondition = await models.sequelize.aowConditions.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAowCondition = await models.mongoose.aowConditions.find({id:util.Char(id)}).select(query.select);
			}
			return objAowCondition;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAowCondition(id) {
		try {
			let objAowCondition;
			if(sql) {
				objAowCondition = await models.sequelize.aowConditions.findOne({ where: { id: util.Char(id) } });
				if (objAowCondition) {
					await models.sequelize.aowConditions.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAowCondition = await models.mongoose.aowConditions.deleteOne({id:util.Char(id)});
			}
			return objAowCondition;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAowCondition;
    		if(sql) {
    			objAowCondition = await models.sequelize.aowConditions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAowCondition = await models.mongoose.aowConditions.findOne({id: id});
    		}
    		return objAowCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAowCondition;
    		if(sql) {
    			objAowCondition = await models.sequelize.aowConditions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAowCondition = await models.mongoose.aowConditions.findOne({deleted: deleted});
    		}
    		return objAowCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByConditionOrder(conditionOrder, query = {}) {
    	try {
    		let objAowCondition;
    		if(sql) {
    			objAowCondition = await models.sequelize.aowConditions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { condition_order: conditionOrder },
    			});
    		} else {
    			objAowCondition = await models.mongoose.aowConditions.findOne({condition_order: conditionOrder});
    		}
    		return objAowCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objAowCondition;
    		if(sql) {
    			objAowCondition = await models.sequelize.aowConditions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objAowCondition = await models.mongoose.aowConditions.findOne({name: name});
    		}
    		return objAowCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByField(field, query = {}) {
    	try {
    		let objAowCondition;
    		if(sql) {
    			objAowCondition = await models.sequelize.aowConditions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field: field },
    			});
    		} else {
    			objAowCondition = await models.mongoose.aowConditions.findOne({field: field});
    		}
    		return objAowCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByOperator(operator, query = {}) {
    	try {
    		let objAowCondition;
    		if(sql) {
    			objAowCondition = await models.sequelize.aowConditions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { operator: operator },
    			});
    		} else {
    			objAowCondition = await models.mongoose.aowConditions.findOne({operator: operator});
    		}
    		return objAowCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByValueType(valueType, query = {}) {
    	try {
    		let objAowCondition;
    		if(sql) {
    			objAowCondition = await models.sequelize.aowConditions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { value_type: valueType },
    			});
    		} else {
    			objAowCondition = await models.mongoose.aowConditions.findOne({value_type: valueType});
    		}
    		return objAowCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByValue(value, query = {}) {
    	try {
    		let objAowCondition;
    		if(sql) {
    			objAowCondition = await models.sequelize.aowConditions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { value: value },
    			});
    		} else {
    			objAowCondition = await models.mongoose.aowConditions.findOne({value: value});
    		}
    		return objAowCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objAowCondition;
    		if(sql) {
    			objAowCondition = await models.sequelize.aowConditions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objAowCondition = await models.mongoose.aowConditions.findOne({description: description});
    		}
    		return objAowCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModulePath(modulePath, query = {}) {
    	try {
    		let objAowCondition;
    		if(sql) {
    			objAowCondition = await models.sequelize.aowConditions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { module_path: modulePath },
    			});
    		} else {
    			objAowCondition = await models.mongoose.aowConditions.findOne({module_path: modulePath});
    		}
    		return objAowCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objAowCondition;
    		if(sql) {
    			objAowCondition = await models.sequelize.aowConditions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objAowCondition = await models.mongoose.aowConditions.findOne({date_entered: dateEntered});
    		}
    		return objAowCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAowCondition;
    		if(sql) {
    			objAowCondition = await models.sequelize.aowConditions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAowCondition = await models.mongoose.aowConditions.findOne({date_modified: dateModified});
    		}
    		return objAowCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objAowCondition;
    		if(sql) {
    			objAowCondition = await models.sequelize.aowConditions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objAowCondition = await models.mongoose.aowConditions.findOne({modified_user_id: modifiedUserId});
    		}
    		return objAowCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAowCondition;
    		if(sql) {
    			objAowCondition = await models.sequelize.aowConditions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAowCondition = await models.mongoose.aowConditions.findOne({created_by: createdBy});
    		}
    		return objAowCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAowWorkflowId(aowWorkflowId, query = {}) {
    	try {
    		let objAowCondition;
    		if(sql) {
    			objAowCondition = await models.sequelize.aowConditions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { aow_workflow_id: aowWorkflowId },
    			});
    		} else {
    			objAowCondition = await models.mongoose.aowConditions.findOne({aow_workflow_id: aowWorkflowId});
    		}
    		return objAowCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAowConditionById(id, updateAowCondition) {
    	try {
    		let objAowCondition;
    		if(sql) {
    			objAowCondition = await models.sequelize.aowConditions.findOne({where: { id: id }});
    			if (objAowCondition) {
    				objAowCondition = await models.sequelize.aowConditions.update(updateAowCondition, { where: { id: id } });
    			}
    		} else {
    			objAowCondition = await models.mongoose.aowConditions.findOneAndUpdate({id: id}, {$set: updateAowCondition}, {new: true});
    		}
    		return objAowCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowConditionByDeleted(deleted, updateAowCondition) {
    	try {
    		let objAowCondition;
    		if(sql) {
    			objAowCondition = await models.sequelize.aowConditions.findOne({where: { deleted: deleted }});
    			if (objAowCondition) {
    				objAowCondition = await models.sequelize.aowConditions.update(updateAowCondition, { where: { deleted: deleted } });
    			}
    		} else {
    			objAowCondition = await models.mongoose.aowConditions.findOneAndUpdate({deleted: deleted}, {$set: updateAowCondition}, {new: true});
    		}
    		return objAowCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowConditionByConditionOrder(conditionOrder, updateAowCondition) {
    	try {
    		let objAowCondition;
    		if(sql) {
    			objAowCondition = await models.sequelize.aowConditions.findOne({where: { condition_order: conditionOrder }});
    			if (objAowCondition) {
    				objAowCondition = await models.sequelize.aowConditions.update(updateAowCondition, { where: { condition_order: conditionOrder } });
    			}
    		} else {
    			objAowCondition = await models.mongoose.aowConditions.findOneAndUpdate({condition_order: conditionOrder}, {$set: updateAowCondition}, {new: true});
    		}
    		return objAowCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowConditionByName(name, updateAowCondition) {
    	try {
    		let objAowCondition;
    		if(sql) {
    			objAowCondition = await models.sequelize.aowConditions.findOne({where: { name: name }});
    			if (objAowCondition) {
    				objAowCondition = await models.sequelize.aowConditions.update(updateAowCondition, { where: { name: name } });
    			}
    		} else {
    			objAowCondition = await models.mongoose.aowConditions.findOneAndUpdate({name: name}, {$set: updateAowCondition}, {new: true});
    		}
    		return objAowCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowConditionByField(field, updateAowCondition) {
    	try {
    		let objAowCondition;
    		if(sql) {
    			objAowCondition = await models.sequelize.aowConditions.findOne({where: { field: field }});
    			if (objAowCondition) {
    				objAowCondition = await models.sequelize.aowConditions.update(updateAowCondition, { where: { field: field } });
    			}
    		} else {
    			objAowCondition = await models.mongoose.aowConditions.findOneAndUpdate({field: field}, {$set: updateAowCondition}, {new: true});
    		}
    		return objAowCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowConditionByOperator(operator, updateAowCondition) {
    	try {
    		let objAowCondition;
    		if(sql) {
    			objAowCondition = await models.sequelize.aowConditions.findOne({where: { operator: operator }});
    			if (objAowCondition) {
    				objAowCondition = await models.sequelize.aowConditions.update(updateAowCondition, { where: { operator: operator } });
    			}
    		} else {
    			objAowCondition = await models.mongoose.aowConditions.findOneAndUpdate({operator: operator}, {$set: updateAowCondition}, {new: true});
    		}
    		return objAowCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowConditionByValueType(valueType, updateAowCondition) {
    	try {
    		let objAowCondition;
    		if(sql) {
    			objAowCondition = await models.sequelize.aowConditions.findOne({where: { value_type: valueType }});
    			if (objAowCondition) {
    				objAowCondition = await models.sequelize.aowConditions.update(updateAowCondition, { where: { value_type: valueType } });
    			}
    		} else {
    			objAowCondition = await models.mongoose.aowConditions.findOneAndUpdate({value_type: valueType}, {$set: updateAowCondition}, {new: true});
    		}
    		return objAowCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowConditionByValue(value, updateAowCondition) {
    	try {
    		let objAowCondition;
    		if(sql) {
    			objAowCondition = await models.sequelize.aowConditions.findOne({where: { value: value }});
    			if (objAowCondition) {
    				objAowCondition = await models.sequelize.aowConditions.update(updateAowCondition, { where: { value: value } });
    			}
    		} else {
    			objAowCondition = await models.mongoose.aowConditions.findOneAndUpdate({value: value}, {$set: updateAowCondition}, {new: true});
    		}
    		return objAowCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowConditionByDescription(description, updateAowCondition) {
    	try {
    		let objAowCondition;
    		if(sql) {
    			objAowCondition = await models.sequelize.aowConditions.findOne({where: { description: description }});
    			if (objAowCondition) {
    				objAowCondition = await models.sequelize.aowConditions.update(updateAowCondition, { where: { description: description } });
    			}
    		} else {
    			objAowCondition = await models.mongoose.aowConditions.findOneAndUpdate({description: description}, {$set: updateAowCondition}, {new: true});
    		}
    		return objAowCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowConditionByModulePath(modulePath, updateAowCondition) {
    	try {
    		let objAowCondition;
    		if(sql) {
    			objAowCondition = await models.sequelize.aowConditions.findOne({where: { module_path: modulePath }});
    			if (objAowCondition) {
    				objAowCondition = await models.sequelize.aowConditions.update(updateAowCondition, { where: { module_path: modulePath } });
    			}
    		} else {
    			objAowCondition = await models.mongoose.aowConditions.findOneAndUpdate({module_path: modulePath}, {$set: updateAowCondition}, {new: true});
    		}
    		return objAowCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowConditionByDateEntered(dateEntered, updateAowCondition) {
    	try {
    		let objAowCondition;
    		if(sql) {
    			objAowCondition = await models.sequelize.aowConditions.findOne({where: { date_entered: dateEntered }});
    			if (objAowCondition) {
    				objAowCondition = await models.sequelize.aowConditions.update(updateAowCondition, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objAowCondition = await models.mongoose.aowConditions.findOneAndUpdate({date_entered: dateEntered}, {$set: updateAowCondition}, {new: true});
    		}
    		return objAowCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowConditionByDateModified(dateModified, updateAowCondition) {
    	try {
    		let objAowCondition;
    		if(sql) {
    			objAowCondition = await models.sequelize.aowConditions.findOne({where: { date_modified: dateModified }});
    			if (objAowCondition) {
    				objAowCondition = await models.sequelize.aowConditions.update(updateAowCondition, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAowCondition = await models.mongoose.aowConditions.findOneAndUpdate({date_modified: dateModified}, {$set: updateAowCondition}, {new: true});
    		}
    		return objAowCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowConditionByModifiedUserId(modifiedUserId, updateAowCondition) {
    	try {
    		let objAowCondition;
    		if(sql) {
    			objAowCondition = await models.sequelize.aowConditions.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objAowCondition) {
    				objAowCondition = await models.sequelize.aowConditions.update(updateAowCondition, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objAowCondition = await models.mongoose.aowConditions.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateAowCondition}, {new: true});
    		}
    		return objAowCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowConditionByCreatedBy(createdBy, updateAowCondition) {
    	try {
    		let objAowCondition;
    		if(sql) {
    			objAowCondition = await models.sequelize.aowConditions.findOne({where: { created_by: createdBy }});
    			if (objAowCondition) {
    				objAowCondition = await models.sequelize.aowConditions.update(updateAowCondition, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAowCondition = await models.mongoose.aowConditions.findOneAndUpdate({created_by: createdBy}, {$set: updateAowCondition}, {new: true});
    		}
    		return objAowCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowConditionByAowWorkflowId(aowWorkflowId, updateAowCondition) {
    	try {
    		let objAowCondition;
    		if(sql) {
    			objAowCondition = await models.sequelize.aowConditions.findOne({where: { aow_workflow_id: aowWorkflowId }});
    			if (objAowCondition) {
    				objAowCondition = await models.sequelize.aowConditions.update(updateAowCondition, { where: { aow_workflow_id: aowWorkflowId } });
    			}
    		} else {
    			objAowCondition = await models.mongoose.aowConditions.findOneAndUpdate({aow_workflow_id: aowWorkflowId}, {$set: updateAowCondition}, {new: true});
    		}
    		return objAowCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AowConditionService;
//</es-section>
