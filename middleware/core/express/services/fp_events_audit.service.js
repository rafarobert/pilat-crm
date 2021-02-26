/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:58 GMT-0400 (Bolivia Time)
 * Time: 0:22:58
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:58 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:58
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

class FpEventAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllFpEventsAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.fpEventsAudit.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.fpEventsAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllFpEventsAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.fpEventsAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.fpEventsAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addFpEventAudit(newFpEventAudit) {
		try {
			let objFpEventAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.fpEventsAudit.primaryKeys.id.type.toString())) {
			    newFpEventAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objFpEventAudit = await models.sequelize.fpEventsAudit.create(newFpEventAudit);
			} else {
				objFpEventAudit = new models.mongoose.fpEventsAudit(newFpEventAudit);
				await objFpEventAudit.save();
			}
			return objFpEventAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateFpEventAudit(id, updateFpEventAudit) {
		try {
			let objFpEventAudit;
			if(sql) {
				objFpEventAudit = await models.sequelize.fpEventsAudit.findOne({where: { id: util.Char(id) }});
				if (objFpEventAudit) {
					await models.sequelize.fpEventsAudit.update(updateFpEventAudit, { where: { id: util.Char(id) } });
					objFpEventAudit = await models.sequelize.fpEventsAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateFpEventAudit._id;
				objFpEventAudit = await models.mongoose.fpEventsAudit.findOneAndUpdate({id:id}, {$set: updateFpEventAudit}, {new: true});
			}
			return objFpEventAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getAFpEventAudit(id, query) {
		try {
			let objFpEventAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objFpEventAudit = await models.sequelize.fpEventsAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objFpEventAudit = await models.mongoose.fpEventsAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objFpEventAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteFpEventAudit(id) {
		try {
			let objFpEventAudit;
			if(sql) {
				objFpEventAudit = await models.sequelize.fpEventsAudit.findOne({ where: { id: util.Char(id) } });
				if (objFpEventAudit) {
					await models.sequelize.fpEventsAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objFpEventAudit = await models.mongoose.fpEventsAudit.deleteOne({id:util.Char(id)});
			}
			return objFpEventAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objFpEventAudit;
    		if(sql) {
    			objFpEventAudit = await models.sequelize.fpEventsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objFpEventAudit = await models.mongoose.fpEventsAudit.findOne({id: id});
    		}
    		return objFpEventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objFpEventAudit;
    		if(sql) {
    			objFpEventAudit = await models.sequelize.fpEventsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objFpEventAudit = await models.mongoose.fpEventsAudit.findOne({created_by: createdBy});
    		}
    		return objFpEventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objFpEventAudit;
    		if(sql) {
    			objFpEventAudit = await models.sequelize.fpEventsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objFpEventAudit = await models.mongoose.fpEventsAudit.findOne({field_name: fieldName});
    		}
    		return objFpEventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objFpEventAudit;
    		if(sql) {
    			objFpEventAudit = await models.sequelize.fpEventsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objFpEventAudit = await models.mongoose.fpEventsAudit.findOne({data_type: dataType});
    		}
    		return objFpEventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objFpEventAudit;
    		if(sql) {
    			objFpEventAudit = await models.sequelize.fpEventsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objFpEventAudit = await models.mongoose.fpEventsAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objFpEventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objFpEventAudit;
    		if(sql) {
    			objFpEventAudit = await models.sequelize.fpEventsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objFpEventAudit = await models.mongoose.fpEventsAudit.findOne({after_value_string: afterValueString});
    		}
    		return objFpEventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objFpEventAudit;
    		if(sql) {
    			objFpEventAudit = await models.sequelize.fpEventsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objFpEventAudit = await models.mongoose.fpEventsAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objFpEventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objFpEventAudit;
    		if(sql) {
    			objFpEventAudit = await models.sequelize.fpEventsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objFpEventAudit = await models.mongoose.fpEventsAudit.findOne({after_value_text: afterValueText});
    		}
    		return objFpEventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objFpEventAudit;
    		if(sql) {
    			objFpEventAudit = await models.sequelize.fpEventsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objFpEventAudit = await models.mongoose.fpEventsAudit.findOne({date_created: dateCreated});
    		}
    		return objFpEventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objFpEventAudit;
    		if(sql) {
    			objFpEventAudit = await models.sequelize.fpEventsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objFpEventAudit = await models.mongoose.fpEventsAudit.findOne({parent_id: parentId});
    		}
    		return objFpEventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateFpEventAuditById(id, updateFpEventAudit) {
    	try {
    		let objFpEventAudit;
    		if(sql) {
    			objFpEventAudit = await models.sequelize.fpEventsAudit.findOne({where: { id: id }});
    			if (objFpEventAudit) {
    				objFpEventAudit = await models.sequelize.fpEventsAudit.update(updateFpEventAudit, { where: { id: id } });
    			}
    		} else {
    			objFpEventAudit = await models.mongoose.fpEventsAudit.findOneAndUpdate({id: id}, {$set: updateFpEventAudit}, {new: true});
    		}
    		return objFpEventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventAuditByCreatedBy(createdBy, updateFpEventAudit) {
    	try {
    		let objFpEventAudit;
    		if(sql) {
    			objFpEventAudit = await models.sequelize.fpEventsAudit.findOne({where: { created_by: createdBy }});
    			if (objFpEventAudit) {
    				objFpEventAudit = await models.sequelize.fpEventsAudit.update(updateFpEventAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objFpEventAudit = await models.mongoose.fpEventsAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateFpEventAudit}, {new: true});
    		}
    		return objFpEventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventAuditByFieldName(fieldName, updateFpEventAudit) {
    	try {
    		let objFpEventAudit;
    		if(sql) {
    			objFpEventAudit = await models.sequelize.fpEventsAudit.findOne({where: { field_name: fieldName }});
    			if (objFpEventAudit) {
    				objFpEventAudit = await models.sequelize.fpEventsAudit.update(updateFpEventAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objFpEventAudit = await models.mongoose.fpEventsAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateFpEventAudit}, {new: true});
    		}
    		return objFpEventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventAuditByDataType(dataType, updateFpEventAudit) {
    	try {
    		let objFpEventAudit;
    		if(sql) {
    			objFpEventAudit = await models.sequelize.fpEventsAudit.findOne({where: { data_type: dataType }});
    			if (objFpEventAudit) {
    				objFpEventAudit = await models.sequelize.fpEventsAudit.update(updateFpEventAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objFpEventAudit = await models.mongoose.fpEventsAudit.findOneAndUpdate({data_type: dataType}, {$set: updateFpEventAudit}, {new: true});
    		}
    		return objFpEventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventAuditByBeforeValueString(beforeValueString, updateFpEventAudit) {
    	try {
    		let objFpEventAudit;
    		if(sql) {
    			objFpEventAudit = await models.sequelize.fpEventsAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objFpEventAudit) {
    				objFpEventAudit = await models.sequelize.fpEventsAudit.update(updateFpEventAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objFpEventAudit = await models.mongoose.fpEventsAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateFpEventAudit}, {new: true});
    		}
    		return objFpEventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventAuditByAfterValueString(afterValueString, updateFpEventAudit) {
    	try {
    		let objFpEventAudit;
    		if(sql) {
    			objFpEventAudit = await models.sequelize.fpEventsAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objFpEventAudit) {
    				objFpEventAudit = await models.sequelize.fpEventsAudit.update(updateFpEventAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objFpEventAudit = await models.mongoose.fpEventsAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateFpEventAudit}, {new: true});
    		}
    		return objFpEventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventAuditByBeforeValueText(beforeValueText, updateFpEventAudit) {
    	try {
    		let objFpEventAudit;
    		if(sql) {
    			objFpEventAudit = await models.sequelize.fpEventsAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objFpEventAudit) {
    				objFpEventAudit = await models.sequelize.fpEventsAudit.update(updateFpEventAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objFpEventAudit = await models.mongoose.fpEventsAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateFpEventAudit}, {new: true});
    		}
    		return objFpEventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventAuditByAfterValueText(afterValueText, updateFpEventAudit) {
    	try {
    		let objFpEventAudit;
    		if(sql) {
    			objFpEventAudit = await models.sequelize.fpEventsAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objFpEventAudit) {
    				objFpEventAudit = await models.sequelize.fpEventsAudit.update(updateFpEventAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objFpEventAudit = await models.mongoose.fpEventsAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateFpEventAudit}, {new: true});
    		}
    		return objFpEventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventAuditByDateCreated(dateCreated, updateFpEventAudit) {
    	try {
    		let objFpEventAudit;
    		if(sql) {
    			objFpEventAudit = await models.sequelize.fpEventsAudit.findOne({where: { date_created: dateCreated }});
    			if (objFpEventAudit) {
    				objFpEventAudit = await models.sequelize.fpEventsAudit.update(updateFpEventAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objFpEventAudit = await models.mongoose.fpEventsAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateFpEventAudit}, {new: true});
    		}
    		return objFpEventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventAuditByParentId(parentId, updateFpEventAudit) {
    	try {
    		let objFpEventAudit;
    		if(sql) {
    			objFpEventAudit = await models.sequelize.fpEventsAudit.findOne({where: { parent_id: parentId }});
    			if (objFpEventAudit) {
    				objFpEventAudit = await models.sequelize.fpEventsAudit.update(updateFpEventAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objFpEventAudit = await models.mongoose.fpEventsAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateFpEventAudit}, {new: true});
    		}
    		return objFpEventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = FpEventAuditService;
//</es-section>
