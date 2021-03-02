/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:11 GMT-0400 (Bolivia Time)
 * Time: 14:0:11
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:11 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:11
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

class AorConditionService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAorConditions(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aorConditions.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aorConditions.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAorConditions(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aorConditions.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aorConditions.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAorCondition(newAorCondition) {
		try {
			let objAorCondition;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aorConditions.primaryKeys.id.type.toString())) {
			    newAorCondition.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAorCondition = await models.sequelize.aorConditions.create(newAorCondition);
			} else {
				objAorCondition = new models.mongoose.aorConditions(newAorCondition);
				await objAorCondition.save();
			}
			return objAorCondition;
		} catch (error) {
			throw error;
		}
	}

	static async updateAorCondition(id, updateAorCondition) {
		try {
			let objAorCondition;
			if(sql) {
				objAorCondition = await models.sequelize.aorConditions.findOne({where: { id: util.Char(id) }});
				if (objAorCondition) {
					await models.sequelize.aorConditions.update(updateAorCondition, { where: { id: util.Char(id) } });
					objAorCondition = await models.sequelize.aorConditions.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAorCondition._id;
				objAorCondition = await models.mongoose.aorConditions.findOneAndUpdate({id:id}, {$set: updateAorCondition}, {new: true});
			}
			return objAorCondition;
		} catch (error) {
			throw error;
		}
	}

	static async getAAorCondition(id, query) {
		try {
			let objAorCondition;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAorCondition = await models.sequelize.aorConditions.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAorCondition = await models.mongoose.aorConditions.find({id:util.Char(id)}).select(query.select);
			}
			return objAorCondition;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAorCondition(id) {
		try {
			let objAorCondition;
			if(sql) {
				objAorCondition = await models.sequelize.aorConditions.findOne({ where: { id: util.Char(id) } });
				if (objAorCondition) {
					await models.sequelize.aorConditions.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAorCondition = await models.mongoose.aorConditions.deleteOne({id:util.Char(id)});
			}
			return objAorCondition;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAorCondition;
    		if(sql) {
    			objAorCondition = await models.sequelize.aorConditions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAorCondition = await models.mongoose.aorConditions.findOne({id: id});
    		}
    		return objAorCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAorCondition;
    		if(sql) {
    			objAorCondition = await models.sequelize.aorConditions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAorCondition = await models.mongoose.aorConditions.findOne({deleted: deleted});
    		}
    		return objAorCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParameter(parameter, query = {}) {
    	try {
    		let objAorCondition;
    		if(sql) {
    			objAorCondition = await models.sequelize.aorConditions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parameter: parameter },
    			});
    		} else {
    			objAorCondition = await models.mongoose.aorConditions.findOne({parameter: parameter});
    		}
    		return objAorCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByConditionOrder(conditionOrder, query = {}) {
    	try {
    		let objAorCondition;
    		if(sql) {
    			objAorCondition = await models.sequelize.aorConditions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { condition_order: conditionOrder },
    			});
    		} else {
    			objAorCondition = await models.mongoose.aorConditions.findOne({condition_order: conditionOrder});
    		}
    		return objAorCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objAorCondition;
    		if(sql) {
    			objAorCondition = await models.sequelize.aorConditions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objAorCondition = await models.mongoose.aorConditions.findOne({name: name});
    		}
    		return objAorCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByLogicOp(logicOp, query = {}) {
    	try {
    		let objAorCondition;
    		if(sql) {
    			objAorCondition = await models.sequelize.aorConditions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { logic_op: logicOp },
    			});
    		} else {
    			objAorCondition = await models.mongoose.aorConditions.findOne({logic_op: logicOp});
    		}
    		return objAorCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParenthesis(parenthesis, query = {}) {
    	try {
    		let objAorCondition;
    		if(sql) {
    			objAorCondition = await models.sequelize.aorConditions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parenthesis: parenthesis },
    			});
    		} else {
    			objAorCondition = await models.mongoose.aorConditions.findOne({parenthesis: parenthesis});
    		}
    		return objAorCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByField(field, query = {}) {
    	try {
    		let objAorCondition;
    		if(sql) {
    			objAorCondition = await models.sequelize.aorConditions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field: field },
    			});
    		} else {
    			objAorCondition = await models.mongoose.aorConditions.findOne({field: field});
    		}
    		return objAorCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByOperator(operator, query = {}) {
    	try {
    		let objAorCondition;
    		if(sql) {
    			objAorCondition = await models.sequelize.aorConditions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { operator: operator },
    			});
    		} else {
    			objAorCondition = await models.mongoose.aorConditions.findOne({operator: operator});
    		}
    		return objAorCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByValueType(valueType, query = {}) {
    	try {
    		let objAorCondition;
    		if(sql) {
    			objAorCondition = await models.sequelize.aorConditions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { value_type: valueType },
    			});
    		} else {
    			objAorCondition = await models.mongoose.aorConditions.findOne({value_type: valueType});
    		}
    		return objAorCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByValue(value, query = {}) {
    	try {
    		let objAorCondition;
    		if(sql) {
    			objAorCondition = await models.sequelize.aorConditions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { value: value },
    			});
    		} else {
    			objAorCondition = await models.mongoose.aorConditions.findOne({value: value});
    		}
    		return objAorCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objAorCondition;
    		if(sql) {
    			objAorCondition = await models.sequelize.aorConditions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objAorCondition = await models.mongoose.aorConditions.findOne({description: description});
    		}
    		return objAorCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModulePath(modulePath, query = {}) {
    	try {
    		let objAorCondition;
    		if(sql) {
    			objAorCondition = await models.sequelize.aorConditions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { module_path: modulePath },
    			});
    		} else {
    			objAorCondition = await models.mongoose.aorConditions.findOne({module_path: modulePath});
    		}
    		return objAorCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objAorCondition;
    		if(sql) {
    			objAorCondition = await models.sequelize.aorConditions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objAorCondition = await models.mongoose.aorConditions.findOne({date_entered: dateEntered});
    		}
    		return objAorCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAorCondition;
    		if(sql) {
    			objAorCondition = await models.sequelize.aorConditions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAorCondition = await models.mongoose.aorConditions.findOne({date_modified: dateModified});
    		}
    		return objAorCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objAorCondition;
    		if(sql) {
    			objAorCondition = await models.sequelize.aorConditions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objAorCondition = await models.mongoose.aorConditions.findOne({modified_user_id: modifiedUserId});
    		}
    		return objAorCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAorCondition;
    		if(sql) {
    			objAorCondition = await models.sequelize.aorConditions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAorCondition = await models.mongoose.aorConditions.findOne({created_by: createdBy});
    		}
    		return objAorCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAorReportId(aorReportId, query = {}) {
    	try {
    		let objAorCondition;
    		if(sql) {
    			objAorCondition = await models.sequelize.aorConditions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { aor_report_id: aorReportId },
    			});
    		} else {
    			objAorCondition = await models.mongoose.aorConditions.findOne({aor_report_id: aorReportId});
    		}
    		return objAorCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAorConditionById(id, updateAorCondition) {
    	try {
    		let objAorCondition;
    		if(sql) {
    			objAorCondition = await models.sequelize.aorConditions.findOne({where: { id: id }});
    			if (objAorCondition) {
    				objAorCondition = await models.sequelize.aorConditions.update(updateAorCondition, { where: { id: id } });
    			}
    		} else {
    			objAorCondition = await models.mongoose.aorConditions.findOneAndUpdate({id: id}, {$set: updateAorCondition}, {new: true});
    		}
    		return objAorCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorConditionByDeleted(deleted, updateAorCondition) {
    	try {
    		let objAorCondition;
    		if(sql) {
    			objAorCondition = await models.sequelize.aorConditions.findOne({where: { deleted: deleted }});
    			if (objAorCondition) {
    				objAorCondition = await models.sequelize.aorConditions.update(updateAorCondition, { where: { deleted: deleted } });
    			}
    		} else {
    			objAorCondition = await models.mongoose.aorConditions.findOneAndUpdate({deleted: deleted}, {$set: updateAorCondition}, {new: true});
    		}
    		return objAorCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorConditionByParameter(parameter, updateAorCondition) {
    	try {
    		let objAorCondition;
    		if(sql) {
    			objAorCondition = await models.sequelize.aorConditions.findOne({where: { parameter: parameter }});
    			if (objAorCondition) {
    				objAorCondition = await models.sequelize.aorConditions.update(updateAorCondition, { where: { parameter: parameter } });
    			}
    		} else {
    			objAorCondition = await models.mongoose.aorConditions.findOneAndUpdate({parameter: parameter}, {$set: updateAorCondition}, {new: true});
    		}
    		return objAorCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorConditionByConditionOrder(conditionOrder, updateAorCondition) {
    	try {
    		let objAorCondition;
    		if(sql) {
    			objAorCondition = await models.sequelize.aorConditions.findOne({where: { condition_order: conditionOrder }});
    			if (objAorCondition) {
    				objAorCondition = await models.sequelize.aorConditions.update(updateAorCondition, { where: { condition_order: conditionOrder } });
    			}
    		} else {
    			objAorCondition = await models.mongoose.aorConditions.findOneAndUpdate({condition_order: conditionOrder}, {$set: updateAorCondition}, {new: true});
    		}
    		return objAorCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorConditionByName(name, updateAorCondition) {
    	try {
    		let objAorCondition;
    		if(sql) {
    			objAorCondition = await models.sequelize.aorConditions.findOne({where: { name: name }});
    			if (objAorCondition) {
    				objAorCondition = await models.sequelize.aorConditions.update(updateAorCondition, { where: { name: name } });
    			}
    		} else {
    			objAorCondition = await models.mongoose.aorConditions.findOneAndUpdate({name: name}, {$set: updateAorCondition}, {new: true});
    		}
    		return objAorCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorConditionByLogicOp(logicOp, updateAorCondition) {
    	try {
    		let objAorCondition;
    		if(sql) {
    			objAorCondition = await models.sequelize.aorConditions.findOne({where: { logic_op: logicOp }});
    			if (objAorCondition) {
    				objAorCondition = await models.sequelize.aorConditions.update(updateAorCondition, { where: { logic_op: logicOp } });
    			}
    		} else {
    			objAorCondition = await models.mongoose.aorConditions.findOneAndUpdate({logic_op: logicOp}, {$set: updateAorCondition}, {new: true});
    		}
    		return objAorCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorConditionByParenthesis(parenthesis, updateAorCondition) {
    	try {
    		let objAorCondition;
    		if(sql) {
    			objAorCondition = await models.sequelize.aorConditions.findOne({where: { parenthesis: parenthesis }});
    			if (objAorCondition) {
    				objAorCondition = await models.sequelize.aorConditions.update(updateAorCondition, { where: { parenthesis: parenthesis } });
    			}
    		} else {
    			objAorCondition = await models.mongoose.aorConditions.findOneAndUpdate({parenthesis: parenthesis}, {$set: updateAorCondition}, {new: true});
    		}
    		return objAorCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorConditionByField(field, updateAorCondition) {
    	try {
    		let objAorCondition;
    		if(sql) {
    			objAorCondition = await models.sequelize.aorConditions.findOne({where: { field: field }});
    			if (objAorCondition) {
    				objAorCondition = await models.sequelize.aorConditions.update(updateAorCondition, { where: { field: field } });
    			}
    		} else {
    			objAorCondition = await models.mongoose.aorConditions.findOneAndUpdate({field: field}, {$set: updateAorCondition}, {new: true});
    		}
    		return objAorCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorConditionByOperator(operator, updateAorCondition) {
    	try {
    		let objAorCondition;
    		if(sql) {
    			objAorCondition = await models.sequelize.aorConditions.findOne({where: { operator: operator }});
    			if (objAorCondition) {
    				objAorCondition = await models.sequelize.aorConditions.update(updateAorCondition, { where: { operator: operator } });
    			}
    		} else {
    			objAorCondition = await models.mongoose.aorConditions.findOneAndUpdate({operator: operator}, {$set: updateAorCondition}, {new: true});
    		}
    		return objAorCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorConditionByValueType(valueType, updateAorCondition) {
    	try {
    		let objAorCondition;
    		if(sql) {
    			objAorCondition = await models.sequelize.aorConditions.findOne({where: { value_type: valueType }});
    			if (objAorCondition) {
    				objAorCondition = await models.sequelize.aorConditions.update(updateAorCondition, { where: { value_type: valueType } });
    			}
    		} else {
    			objAorCondition = await models.mongoose.aorConditions.findOneAndUpdate({value_type: valueType}, {$set: updateAorCondition}, {new: true});
    		}
    		return objAorCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorConditionByValue(value, updateAorCondition) {
    	try {
    		let objAorCondition;
    		if(sql) {
    			objAorCondition = await models.sequelize.aorConditions.findOne({where: { value: value }});
    			if (objAorCondition) {
    				objAorCondition = await models.sequelize.aorConditions.update(updateAorCondition, { where: { value: value } });
    			}
    		} else {
    			objAorCondition = await models.mongoose.aorConditions.findOneAndUpdate({value: value}, {$set: updateAorCondition}, {new: true});
    		}
    		return objAorCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorConditionByDescription(description, updateAorCondition) {
    	try {
    		let objAorCondition;
    		if(sql) {
    			objAorCondition = await models.sequelize.aorConditions.findOne({where: { description: description }});
    			if (objAorCondition) {
    				objAorCondition = await models.sequelize.aorConditions.update(updateAorCondition, { where: { description: description } });
    			}
    		} else {
    			objAorCondition = await models.mongoose.aorConditions.findOneAndUpdate({description: description}, {$set: updateAorCondition}, {new: true});
    		}
    		return objAorCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorConditionByModulePath(modulePath, updateAorCondition) {
    	try {
    		let objAorCondition;
    		if(sql) {
    			objAorCondition = await models.sequelize.aorConditions.findOne({where: { module_path: modulePath }});
    			if (objAorCondition) {
    				objAorCondition = await models.sequelize.aorConditions.update(updateAorCondition, { where: { module_path: modulePath } });
    			}
    		} else {
    			objAorCondition = await models.mongoose.aorConditions.findOneAndUpdate({module_path: modulePath}, {$set: updateAorCondition}, {new: true});
    		}
    		return objAorCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorConditionByDateEntered(dateEntered, updateAorCondition) {
    	try {
    		let objAorCondition;
    		if(sql) {
    			objAorCondition = await models.sequelize.aorConditions.findOne({where: { date_entered: dateEntered }});
    			if (objAorCondition) {
    				objAorCondition = await models.sequelize.aorConditions.update(updateAorCondition, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objAorCondition = await models.mongoose.aorConditions.findOneAndUpdate({date_entered: dateEntered}, {$set: updateAorCondition}, {new: true});
    		}
    		return objAorCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorConditionByDateModified(dateModified, updateAorCondition) {
    	try {
    		let objAorCondition;
    		if(sql) {
    			objAorCondition = await models.sequelize.aorConditions.findOne({where: { date_modified: dateModified }});
    			if (objAorCondition) {
    				objAorCondition = await models.sequelize.aorConditions.update(updateAorCondition, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAorCondition = await models.mongoose.aorConditions.findOneAndUpdate({date_modified: dateModified}, {$set: updateAorCondition}, {new: true});
    		}
    		return objAorCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorConditionByModifiedUserId(modifiedUserId, updateAorCondition) {
    	try {
    		let objAorCondition;
    		if(sql) {
    			objAorCondition = await models.sequelize.aorConditions.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objAorCondition) {
    				objAorCondition = await models.sequelize.aorConditions.update(updateAorCondition, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objAorCondition = await models.mongoose.aorConditions.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateAorCondition}, {new: true});
    		}
    		return objAorCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorConditionByCreatedBy(createdBy, updateAorCondition) {
    	try {
    		let objAorCondition;
    		if(sql) {
    			objAorCondition = await models.sequelize.aorConditions.findOne({where: { created_by: createdBy }});
    			if (objAorCondition) {
    				objAorCondition = await models.sequelize.aorConditions.update(updateAorCondition, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAorCondition = await models.mongoose.aorConditions.findOneAndUpdate({created_by: createdBy}, {$set: updateAorCondition}, {new: true});
    		}
    		return objAorCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorConditionByAorReportId(aorReportId, updateAorCondition) {
    	try {
    		let objAorCondition;
    		if(sql) {
    			objAorCondition = await models.sequelize.aorConditions.findOne({where: { aor_report_id: aorReportId }});
    			if (objAorCondition) {
    				objAorCondition = await models.sequelize.aorConditions.update(updateAorCondition, { where: { aor_report_id: aorReportId } });
    			}
    		} else {
    			objAorCondition = await models.mongoose.aorConditions.findOneAndUpdate({aor_report_id: aorReportId}, {$set: updateAorCondition}, {new: true});
    		}
    		return objAorCondition;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AorConditionService;
//</es-section>
