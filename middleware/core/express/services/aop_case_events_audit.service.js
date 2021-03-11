/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:01 GMT-0400 (Bolivia Time)
 * Time: 14:56:1
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:01 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:1
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

class AopCaseEventAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAopCaseEventsAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aopCaseEventsAudit.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['_id','ASC']],
                });
			} else {
				return await models.mongoose.aopCaseEventsAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAopCaseEventsAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aopCaseEventsAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aopCaseEventsAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAopCaseEventAudit(newAopCaseEventAudit) {
		try {
			let objAopCaseEventAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aopCaseEventsAudit.primaryKeys.id.type.toString())) {
			    newAopCaseEventAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAopCaseEventAudit = await models.sequelize.aopCaseEventsAudit.create(newAopCaseEventAudit);
			} else {
				objAopCaseEventAudit = new models.mongoose.aopCaseEventsAudit(newAopCaseEventAudit);
				await objAopCaseEventAudit.save();
			}
			return objAopCaseEventAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateAopCaseEventAudit(id, updateAopCaseEventAudit) {
		try {
			let objAopCaseEventAudit;
			if(sql) {
				objAopCaseEventAudit = await models.sequelize.aopCaseEventsAudit.findOne({where: { id: util.Char(id) }});
				if (objAopCaseEventAudit) {
					await models.sequelize.aopCaseEventsAudit.update(updateAopCaseEventAudit, { where: { id: util.Char(id) } });
					objAopCaseEventAudit = await models.sequelize.aopCaseEventsAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAopCaseEventAudit._id;
				objAopCaseEventAudit = await models.mongoose.aopCaseEventsAudit.findOneAndUpdate({id:id}, {$set: updateAopCaseEventAudit}, {new: true});
			}
			return objAopCaseEventAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getAAopCaseEventAudit(id, query) {
		try {
			let objAopCaseEventAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAopCaseEventAudit = await models.sequelize.aopCaseEventsAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAopCaseEventAudit = await models.mongoose.aopCaseEventsAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objAopCaseEventAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAopCaseEventAudit(id) {
		try {
			let objAopCaseEventAudit;
			if(sql) {
				objAopCaseEventAudit = await models.sequelize.aopCaseEventsAudit.findOne({ where: { id: util.Char(id) } });
				if (objAopCaseEventAudit) {
					await models.sequelize.aopCaseEventsAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAopCaseEventAudit = await models.mongoose.aopCaseEventsAudit.deleteOne({id:util.Char(id)});
			}
			return objAopCaseEventAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAopCaseEventAudit;
    		if(sql) {
    			objAopCaseEventAudit = await models.sequelize.aopCaseEventsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAopCaseEventAudit = await models.mongoose.aopCaseEventsAudit.findOne({id: id});
    		}
    		return objAopCaseEventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAopCaseEventAudit;
    		if(sql) {
    			objAopCaseEventAudit = await models.sequelize.aopCaseEventsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAopCaseEventAudit = await models.mongoose.aopCaseEventsAudit.findOne({created_by: createdBy});
    		}
    		return objAopCaseEventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objAopCaseEventAudit;
    		if(sql) {
    			objAopCaseEventAudit = await models.sequelize.aopCaseEventsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objAopCaseEventAudit = await models.mongoose.aopCaseEventsAudit.findOne({field_name: fieldName});
    		}
    		return objAopCaseEventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objAopCaseEventAudit;
    		if(sql) {
    			objAopCaseEventAudit = await models.sequelize.aopCaseEventsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objAopCaseEventAudit = await models.mongoose.aopCaseEventsAudit.findOne({data_type: dataType});
    		}
    		return objAopCaseEventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objAopCaseEventAudit;
    		if(sql) {
    			objAopCaseEventAudit = await models.sequelize.aopCaseEventsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objAopCaseEventAudit = await models.mongoose.aopCaseEventsAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objAopCaseEventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objAopCaseEventAudit;
    		if(sql) {
    			objAopCaseEventAudit = await models.sequelize.aopCaseEventsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objAopCaseEventAudit = await models.mongoose.aopCaseEventsAudit.findOne({after_value_string: afterValueString});
    		}
    		return objAopCaseEventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objAopCaseEventAudit;
    		if(sql) {
    			objAopCaseEventAudit = await models.sequelize.aopCaseEventsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objAopCaseEventAudit = await models.mongoose.aopCaseEventsAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objAopCaseEventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objAopCaseEventAudit;
    		if(sql) {
    			objAopCaseEventAudit = await models.sequelize.aopCaseEventsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objAopCaseEventAudit = await models.mongoose.aopCaseEventsAudit.findOne({after_value_text: afterValueText});
    		}
    		return objAopCaseEventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objAopCaseEventAudit;
    		if(sql) {
    			objAopCaseEventAudit = await models.sequelize.aopCaseEventsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objAopCaseEventAudit = await models.mongoose.aopCaseEventsAudit.findOne({date_created: dateCreated});
    		}
    		return objAopCaseEventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objAopCaseEventAudit;
    		if(sql) {
    			objAopCaseEventAudit = await models.sequelize.aopCaseEventsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objAopCaseEventAudit = await models.mongoose.aopCaseEventsAudit.findOne({parent_id: parentId});
    		}
    		return objAopCaseEventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAopCaseEventAuditById(id, updateAopCaseEventAudit) {
    	try {
    		let objAopCaseEventAudit;
    		if(sql) {
    			objAopCaseEventAudit = await models.sequelize.aopCaseEventsAudit.findOne({where: { id: id }});
    			if (objAopCaseEventAudit) {
    				objAopCaseEventAudit = await models.sequelize.aopCaseEventsAudit.update(updateAopCaseEventAudit, { where: { id: id } });
    			}
    		} else {
    			objAopCaseEventAudit = await models.mongoose.aopCaseEventsAudit.findOneAndUpdate({id: id}, {$set: updateAopCaseEventAudit}, {new: true});
    		}
    		return objAopCaseEventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAopCaseEventAuditByCreatedBy(createdBy, updateAopCaseEventAudit) {
    	try {
    		let objAopCaseEventAudit;
    		if(sql) {
    			objAopCaseEventAudit = await models.sequelize.aopCaseEventsAudit.findOne({where: { created_by: createdBy }});
    			if (objAopCaseEventAudit) {
    				objAopCaseEventAudit = await models.sequelize.aopCaseEventsAudit.update(updateAopCaseEventAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAopCaseEventAudit = await models.mongoose.aopCaseEventsAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateAopCaseEventAudit}, {new: true});
    		}
    		return objAopCaseEventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAopCaseEventAuditByFieldName(fieldName, updateAopCaseEventAudit) {
    	try {
    		let objAopCaseEventAudit;
    		if(sql) {
    			objAopCaseEventAudit = await models.sequelize.aopCaseEventsAudit.findOne({where: { field_name: fieldName }});
    			if (objAopCaseEventAudit) {
    				objAopCaseEventAudit = await models.sequelize.aopCaseEventsAudit.update(updateAopCaseEventAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objAopCaseEventAudit = await models.mongoose.aopCaseEventsAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateAopCaseEventAudit}, {new: true});
    		}
    		return objAopCaseEventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAopCaseEventAuditByDataType(dataType, updateAopCaseEventAudit) {
    	try {
    		let objAopCaseEventAudit;
    		if(sql) {
    			objAopCaseEventAudit = await models.sequelize.aopCaseEventsAudit.findOne({where: { data_type: dataType }});
    			if (objAopCaseEventAudit) {
    				objAopCaseEventAudit = await models.sequelize.aopCaseEventsAudit.update(updateAopCaseEventAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objAopCaseEventAudit = await models.mongoose.aopCaseEventsAudit.findOneAndUpdate({data_type: dataType}, {$set: updateAopCaseEventAudit}, {new: true});
    		}
    		return objAopCaseEventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAopCaseEventAuditByBeforeValueString(beforeValueString, updateAopCaseEventAudit) {
    	try {
    		let objAopCaseEventAudit;
    		if(sql) {
    			objAopCaseEventAudit = await models.sequelize.aopCaseEventsAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objAopCaseEventAudit) {
    				objAopCaseEventAudit = await models.sequelize.aopCaseEventsAudit.update(updateAopCaseEventAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objAopCaseEventAudit = await models.mongoose.aopCaseEventsAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateAopCaseEventAudit}, {new: true});
    		}
    		return objAopCaseEventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAopCaseEventAuditByAfterValueString(afterValueString, updateAopCaseEventAudit) {
    	try {
    		let objAopCaseEventAudit;
    		if(sql) {
    			objAopCaseEventAudit = await models.sequelize.aopCaseEventsAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objAopCaseEventAudit) {
    				objAopCaseEventAudit = await models.sequelize.aopCaseEventsAudit.update(updateAopCaseEventAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objAopCaseEventAudit = await models.mongoose.aopCaseEventsAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateAopCaseEventAudit}, {new: true});
    		}
    		return objAopCaseEventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAopCaseEventAuditByBeforeValueText(beforeValueText, updateAopCaseEventAudit) {
    	try {
    		let objAopCaseEventAudit;
    		if(sql) {
    			objAopCaseEventAudit = await models.sequelize.aopCaseEventsAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objAopCaseEventAudit) {
    				objAopCaseEventAudit = await models.sequelize.aopCaseEventsAudit.update(updateAopCaseEventAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objAopCaseEventAudit = await models.mongoose.aopCaseEventsAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateAopCaseEventAudit}, {new: true});
    		}
    		return objAopCaseEventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAopCaseEventAuditByAfterValueText(afterValueText, updateAopCaseEventAudit) {
    	try {
    		let objAopCaseEventAudit;
    		if(sql) {
    			objAopCaseEventAudit = await models.sequelize.aopCaseEventsAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objAopCaseEventAudit) {
    				objAopCaseEventAudit = await models.sequelize.aopCaseEventsAudit.update(updateAopCaseEventAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objAopCaseEventAudit = await models.mongoose.aopCaseEventsAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateAopCaseEventAudit}, {new: true});
    		}
    		return objAopCaseEventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAopCaseEventAuditByDateCreated(dateCreated, updateAopCaseEventAudit) {
    	try {
    		let objAopCaseEventAudit;
    		if(sql) {
    			objAopCaseEventAudit = await models.sequelize.aopCaseEventsAudit.findOne({where: { date_created: dateCreated }});
    			if (objAopCaseEventAudit) {
    				objAopCaseEventAudit = await models.sequelize.aopCaseEventsAudit.update(updateAopCaseEventAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objAopCaseEventAudit = await models.mongoose.aopCaseEventsAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateAopCaseEventAudit}, {new: true});
    		}
    		return objAopCaseEventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAopCaseEventAuditByParentId(parentId, updateAopCaseEventAudit) {
    	try {
    		let objAopCaseEventAudit;
    		if(sql) {
    			objAopCaseEventAudit = await models.sequelize.aopCaseEventsAudit.findOne({where: { parent_id: parentId }});
    			if (objAopCaseEventAudit) {
    				objAopCaseEventAudit = await models.sequelize.aopCaseEventsAudit.update(updateAopCaseEventAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objAopCaseEventAudit = await models.mongoose.aopCaseEventsAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateAopCaseEventAudit}, {new: true});
    		}
    		return objAopCaseEventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AopCaseEventAuditService;
//</es-section>
