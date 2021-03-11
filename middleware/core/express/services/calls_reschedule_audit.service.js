/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:30 GMT-0400 (Bolivia Time)
 * Time: 14:56:30
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:30 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:30
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

class CallRescheduleAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllCallsRescheduleAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.callsRescheduleAudit.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['_id','ASC']],
                });
			} else {
				return await models.mongoose.callsRescheduleAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllCallsRescheduleAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.callsRescheduleAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.callsRescheduleAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addCallRescheduleAudit(newCallRescheduleAudit) {
		try {
			let objCallRescheduleAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.callsRescheduleAudit.primaryKeys.id.type.toString())) {
			    newCallRescheduleAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objCallRescheduleAudit = await models.sequelize.callsRescheduleAudit.create(newCallRescheduleAudit);
			} else {
				objCallRescheduleAudit = new models.mongoose.callsRescheduleAudit(newCallRescheduleAudit);
				await objCallRescheduleAudit.save();
			}
			return objCallRescheduleAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateCallRescheduleAudit(id, updateCallRescheduleAudit) {
		try {
			let objCallRescheduleAudit;
			if(sql) {
				objCallRescheduleAudit = await models.sequelize.callsRescheduleAudit.findOne({where: { id: util.Char(id) }});
				if (objCallRescheduleAudit) {
					await models.sequelize.callsRescheduleAudit.update(updateCallRescheduleAudit, { where: { id: util.Char(id) } });
					objCallRescheduleAudit = await models.sequelize.callsRescheduleAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateCallRescheduleAudit._id;
				objCallRescheduleAudit = await models.mongoose.callsRescheduleAudit.findOneAndUpdate({id:id}, {$set: updateCallRescheduleAudit}, {new: true});
			}
			return objCallRescheduleAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getACallRescheduleAudit(id, query) {
		try {
			let objCallRescheduleAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objCallRescheduleAudit = await models.sequelize.callsRescheduleAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objCallRescheduleAudit = await models.mongoose.callsRescheduleAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objCallRescheduleAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteCallRescheduleAudit(id) {
		try {
			let objCallRescheduleAudit;
			if(sql) {
				objCallRescheduleAudit = await models.sequelize.callsRescheduleAudit.findOne({ where: { id: util.Char(id) } });
				if (objCallRescheduleAudit) {
					await models.sequelize.callsRescheduleAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objCallRescheduleAudit = await models.mongoose.callsRescheduleAudit.deleteOne({id:util.Char(id)});
			}
			return objCallRescheduleAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objCallRescheduleAudit;
    		if(sql) {
    			objCallRescheduleAudit = await models.sequelize.callsRescheduleAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objCallRescheduleAudit = await models.mongoose.callsRescheduleAudit.findOne({id: id});
    		}
    		return objCallRescheduleAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objCallRescheduleAudit;
    		if(sql) {
    			objCallRescheduleAudit = await models.sequelize.callsRescheduleAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objCallRescheduleAudit = await models.mongoose.callsRescheduleAudit.findOne({created_by: createdBy});
    		}
    		return objCallRescheduleAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objCallRescheduleAudit;
    		if(sql) {
    			objCallRescheduleAudit = await models.sequelize.callsRescheduleAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objCallRescheduleAudit = await models.mongoose.callsRescheduleAudit.findOne({field_name: fieldName});
    		}
    		return objCallRescheduleAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objCallRescheduleAudit;
    		if(sql) {
    			objCallRescheduleAudit = await models.sequelize.callsRescheduleAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objCallRescheduleAudit = await models.mongoose.callsRescheduleAudit.findOne({data_type: dataType});
    		}
    		return objCallRescheduleAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objCallRescheduleAudit;
    		if(sql) {
    			objCallRescheduleAudit = await models.sequelize.callsRescheduleAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objCallRescheduleAudit = await models.mongoose.callsRescheduleAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objCallRescheduleAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objCallRescheduleAudit;
    		if(sql) {
    			objCallRescheduleAudit = await models.sequelize.callsRescheduleAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objCallRescheduleAudit = await models.mongoose.callsRescheduleAudit.findOne({after_value_string: afterValueString});
    		}
    		return objCallRescheduleAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objCallRescheduleAudit;
    		if(sql) {
    			objCallRescheduleAudit = await models.sequelize.callsRescheduleAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objCallRescheduleAudit = await models.mongoose.callsRescheduleAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objCallRescheduleAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objCallRescheduleAudit;
    		if(sql) {
    			objCallRescheduleAudit = await models.sequelize.callsRescheduleAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objCallRescheduleAudit = await models.mongoose.callsRescheduleAudit.findOne({after_value_text: afterValueText});
    		}
    		return objCallRescheduleAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objCallRescheduleAudit;
    		if(sql) {
    			objCallRescheduleAudit = await models.sequelize.callsRescheduleAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objCallRescheduleAudit = await models.mongoose.callsRescheduleAudit.findOne({date_created: dateCreated});
    		}
    		return objCallRescheduleAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objCallRescheduleAudit;
    		if(sql) {
    			objCallRescheduleAudit = await models.sequelize.callsRescheduleAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objCallRescheduleAudit = await models.mongoose.callsRescheduleAudit.findOne({parent_id: parentId});
    		}
    		return objCallRescheduleAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateCallRescheduleAuditById(id, updateCallRescheduleAudit) {
    	try {
    		let objCallRescheduleAudit;
    		if(sql) {
    			objCallRescheduleAudit = await models.sequelize.callsRescheduleAudit.findOne({where: { id: id }});
    			if (objCallRescheduleAudit) {
    				objCallRescheduleAudit = await models.sequelize.callsRescheduleAudit.update(updateCallRescheduleAudit, { where: { id: id } });
    			}
    		} else {
    			objCallRescheduleAudit = await models.mongoose.callsRescheduleAudit.findOneAndUpdate({id: id}, {$set: updateCallRescheduleAudit}, {new: true});
    		}
    		return objCallRescheduleAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallRescheduleAuditByCreatedBy(createdBy, updateCallRescheduleAudit) {
    	try {
    		let objCallRescheduleAudit;
    		if(sql) {
    			objCallRescheduleAudit = await models.sequelize.callsRescheduleAudit.findOne({where: { created_by: createdBy }});
    			if (objCallRescheduleAudit) {
    				objCallRescheduleAudit = await models.sequelize.callsRescheduleAudit.update(updateCallRescheduleAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objCallRescheduleAudit = await models.mongoose.callsRescheduleAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateCallRescheduleAudit}, {new: true});
    		}
    		return objCallRescheduleAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallRescheduleAuditByFieldName(fieldName, updateCallRescheduleAudit) {
    	try {
    		let objCallRescheduleAudit;
    		if(sql) {
    			objCallRescheduleAudit = await models.sequelize.callsRescheduleAudit.findOne({where: { field_name: fieldName }});
    			if (objCallRescheduleAudit) {
    				objCallRescheduleAudit = await models.sequelize.callsRescheduleAudit.update(updateCallRescheduleAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objCallRescheduleAudit = await models.mongoose.callsRescheduleAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateCallRescheduleAudit}, {new: true});
    		}
    		return objCallRescheduleAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallRescheduleAuditByDataType(dataType, updateCallRescheduleAudit) {
    	try {
    		let objCallRescheduleAudit;
    		if(sql) {
    			objCallRescheduleAudit = await models.sequelize.callsRescheduleAudit.findOne({where: { data_type: dataType }});
    			if (objCallRescheduleAudit) {
    				objCallRescheduleAudit = await models.sequelize.callsRescheduleAudit.update(updateCallRescheduleAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objCallRescheduleAudit = await models.mongoose.callsRescheduleAudit.findOneAndUpdate({data_type: dataType}, {$set: updateCallRescheduleAudit}, {new: true});
    		}
    		return objCallRescheduleAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallRescheduleAuditByBeforeValueString(beforeValueString, updateCallRescheduleAudit) {
    	try {
    		let objCallRescheduleAudit;
    		if(sql) {
    			objCallRescheduleAudit = await models.sequelize.callsRescheduleAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objCallRescheduleAudit) {
    				objCallRescheduleAudit = await models.sequelize.callsRescheduleAudit.update(updateCallRescheduleAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objCallRescheduleAudit = await models.mongoose.callsRescheduleAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateCallRescheduleAudit}, {new: true});
    		}
    		return objCallRescheduleAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallRescheduleAuditByAfterValueString(afterValueString, updateCallRescheduleAudit) {
    	try {
    		let objCallRescheduleAudit;
    		if(sql) {
    			objCallRescheduleAudit = await models.sequelize.callsRescheduleAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objCallRescheduleAudit) {
    				objCallRescheduleAudit = await models.sequelize.callsRescheduleAudit.update(updateCallRescheduleAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objCallRescheduleAudit = await models.mongoose.callsRescheduleAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateCallRescheduleAudit}, {new: true});
    		}
    		return objCallRescheduleAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallRescheduleAuditByBeforeValueText(beforeValueText, updateCallRescheduleAudit) {
    	try {
    		let objCallRescheduleAudit;
    		if(sql) {
    			objCallRescheduleAudit = await models.sequelize.callsRescheduleAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objCallRescheduleAudit) {
    				objCallRescheduleAudit = await models.sequelize.callsRescheduleAudit.update(updateCallRescheduleAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objCallRescheduleAudit = await models.mongoose.callsRescheduleAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateCallRescheduleAudit}, {new: true});
    		}
    		return objCallRescheduleAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallRescheduleAuditByAfterValueText(afterValueText, updateCallRescheduleAudit) {
    	try {
    		let objCallRescheduleAudit;
    		if(sql) {
    			objCallRescheduleAudit = await models.sequelize.callsRescheduleAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objCallRescheduleAudit) {
    				objCallRescheduleAudit = await models.sequelize.callsRescheduleAudit.update(updateCallRescheduleAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objCallRescheduleAudit = await models.mongoose.callsRescheduleAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateCallRescheduleAudit}, {new: true});
    		}
    		return objCallRescheduleAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallRescheduleAuditByDateCreated(dateCreated, updateCallRescheduleAudit) {
    	try {
    		let objCallRescheduleAudit;
    		if(sql) {
    			objCallRescheduleAudit = await models.sequelize.callsRescheduleAudit.findOne({where: { date_created: dateCreated }});
    			if (objCallRescheduleAudit) {
    				objCallRescheduleAudit = await models.sequelize.callsRescheduleAudit.update(updateCallRescheduleAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objCallRescheduleAudit = await models.mongoose.callsRescheduleAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateCallRescheduleAudit}, {new: true});
    		}
    		return objCallRescheduleAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallRescheduleAuditByParentId(parentId, updateCallRescheduleAudit) {
    	try {
    		let objCallRescheduleAudit;
    		if(sql) {
    			objCallRescheduleAudit = await models.sequelize.callsRescheduleAudit.findOne({where: { parent_id: parentId }});
    			if (objCallRescheduleAudit) {
    				objCallRescheduleAudit = await models.sequelize.callsRescheduleAudit.update(updateCallRescheduleAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objCallRescheduleAudit = await models.mongoose.callsRescheduleAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateCallRescheduleAudit}, {new: true});
    		}
    		return objCallRescheduleAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = CallRescheduleAuditService;
//</es-section>
