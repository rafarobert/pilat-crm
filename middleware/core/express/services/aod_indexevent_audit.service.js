/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:41:55 GMT-0400 (Bolivia Time)
 * Time: 4:41:55
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:41:55 GMT-0400 (Bolivia Time)
 * Last time updated: 4:41:55
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

class AodIndexeventAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAodIndexeventAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aodIndexeventAudit.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aodIndexeventAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAodIndexeventAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aodIndexeventAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aodIndexeventAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAodIndexeventAudit(newAodIndexeventAudit) {
		try {
			let objAodIndexeventAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aodIndexeventAudit.primaryKeys.id.type.toString())) {
			    newAodIndexeventAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAodIndexeventAudit = await models.sequelize.aodIndexeventAudit.create(newAodIndexeventAudit);
			} else {
				objAodIndexeventAudit = new models.mongoose.aodIndexeventAudit(newAodIndexeventAudit);
				await objAodIndexeventAudit.save();
			}
			return objAodIndexeventAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateAodIndexeventAudit(id, updateAodIndexeventAudit) {
		try {
			let objAodIndexeventAudit;
			if(sql) {
				objAodIndexeventAudit = await models.sequelize.aodIndexeventAudit.findOne({where: { id: util.Char(id) }});
				if (objAodIndexeventAudit) {
					await models.sequelize.aodIndexeventAudit.update(updateAodIndexeventAudit, { where: { id: util.Char(id) } });
					objAodIndexeventAudit = await models.sequelize.aodIndexeventAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAodIndexeventAudit._id;
				objAodIndexeventAudit = await models.mongoose.aodIndexeventAudit.findOneAndUpdate({id:id}, {$set: updateAodIndexeventAudit}, {new: true});
			}
			return objAodIndexeventAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getAAodIndexeventAudit(id, query) {
		try {
			let objAodIndexeventAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAodIndexeventAudit = await models.sequelize.aodIndexeventAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAodIndexeventAudit = await models.mongoose.aodIndexeventAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objAodIndexeventAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAodIndexeventAudit(id) {
		try {
			let objAodIndexeventAudit;
			if(sql) {
				objAodIndexeventAudit = await models.sequelize.aodIndexeventAudit.findOne({ where: { id: util.Char(id) } });
				if (objAodIndexeventAudit) {
					await models.sequelize.aodIndexeventAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAodIndexeventAudit = await models.mongoose.aodIndexeventAudit.deleteOne({id:util.Char(id)});
			}
			return objAodIndexeventAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAodIndexeventAudit;
    		if(sql) {
    			objAodIndexeventAudit = await models.sequelize.aodIndexeventAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAodIndexeventAudit = await models.mongoose.aodIndexeventAudit.findOne({id: id});
    		}
    		return objAodIndexeventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAodIndexeventAudit;
    		if(sql) {
    			objAodIndexeventAudit = await models.sequelize.aodIndexeventAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAodIndexeventAudit = await models.mongoose.aodIndexeventAudit.findOne({created_by: createdBy});
    		}
    		return objAodIndexeventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objAodIndexeventAudit;
    		if(sql) {
    			objAodIndexeventAudit = await models.sequelize.aodIndexeventAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objAodIndexeventAudit = await models.mongoose.aodIndexeventAudit.findOne({field_name: fieldName});
    		}
    		return objAodIndexeventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objAodIndexeventAudit;
    		if(sql) {
    			objAodIndexeventAudit = await models.sequelize.aodIndexeventAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objAodIndexeventAudit = await models.mongoose.aodIndexeventAudit.findOne({data_type: dataType});
    		}
    		return objAodIndexeventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objAodIndexeventAudit;
    		if(sql) {
    			objAodIndexeventAudit = await models.sequelize.aodIndexeventAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objAodIndexeventAudit = await models.mongoose.aodIndexeventAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objAodIndexeventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objAodIndexeventAudit;
    		if(sql) {
    			objAodIndexeventAudit = await models.sequelize.aodIndexeventAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objAodIndexeventAudit = await models.mongoose.aodIndexeventAudit.findOne({after_value_string: afterValueString});
    		}
    		return objAodIndexeventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objAodIndexeventAudit;
    		if(sql) {
    			objAodIndexeventAudit = await models.sequelize.aodIndexeventAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objAodIndexeventAudit = await models.mongoose.aodIndexeventAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objAodIndexeventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objAodIndexeventAudit;
    		if(sql) {
    			objAodIndexeventAudit = await models.sequelize.aodIndexeventAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objAodIndexeventAudit = await models.mongoose.aodIndexeventAudit.findOne({after_value_text: afterValueText});
    		}
    		return objAodIndexeventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objAodIndexeventAudit;
    		if(sql) {
    			objAodIndexeventAudit = await models.sequelize.aodIndexeventAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objAodIndexeventAudit = await models.mongoose.aodIndexeventAudit.findOne({date_created: dateCreated});
    		}
    		return objAodIndexeventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objAodIndexeventAudit;
    		if(sql) {
    			objAodIndexeventAudit = await models.sequelize.aodIndexeventAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objAodIndexeventAudit = await models.mongoose.aodIndexeventAudit.findOne({parent_id: parentId});
    		}
    		return objAodIndexeventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAodIndexeventAuditById(id, updateAodIndexeventAudit) {
    	try {
    		let objAodIndexeventAudit;
    		if(sql) {
    			objAodIndexeventAudit = await models.sequelize.aodIndexeventAudit.findOne({where: { id: id }});
    			if (objAodIndexeventAudit) {
    				objAodIndexeventAudit = await models.sequelize.aodIndexeventAudit.update(updateAodIndexeventAudit, { where: { id: id } });
    			}
    		} else {
    			objAodIndexeventAudit = await models.mongoose.aodIndexeventAudit.findOneAndUpdate({id: id}, {$set: updateAodIndexeventAudit}, {new: true});
    		}
    		return objAodIndexeventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAodIndexeventAuditByCreatedBy(createdBy, updateAodIndexeventAudit) {
    	try {
    		let objAodIndexeventAudit;
    		if(sql) {
    			objAodIndexeventAudit = await models.sequelize.aodIndexeventAudit.findOne({where: { created_by: createdBy }});
    			if (objAodIndexeventAudit) {
    				objAodIndexeventAudit = await models.sequelize.aodIndexeventAudit.update(updateAodIndexeventAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAodIndexeventAudit = await models.mongoose.aodIndexeventAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateAodIndexeventAudit}, {new: true});
    		}
    		return objAodIndexeventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAodIndexeventAuditByFieldName(fieldName, updateAodIndexeventAudit) {
    	try {
    		let objAodIndexeventAudit;
    		if(sql) {
    			objAodIndexeventAudit = await models.sequelize.aodIndexeventAudit.findOne({where: { field_name: fieldName }});
    			if (objAodIndexeventAudit) {
    				objAodIndexeventAudit = await models.sequelize.aodIndexeventAudit.update(updateAodIndexeventAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objAodIndexeventAudit = await models.mongoose.aodIndexeventAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateAodIndexeventAudit}, {new: true});
    		}
    		return objAodIndexeventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAodIndexeventAuditByDataType(dataType, updateAodIndexeventAudit) {
    	try {
    		let objAodIndexeventAudit;
    		if(sql) {
    			objAodIndexeventAudit = await models.sequelize.aodIndexeventAudit.findOne({where: { data_type: dataType }});
    			if (objAodIndexeventAudit) {
    				objAodIndexeventAudit = await models.sequelize.aodIndexeventAudit.update(updateAodIndexeventAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objAodIndexeventAudit = await models.mongoose.aodIndexeventAudit.findOneAndUpdate({data_type: dataType}, {$set: updateAodIndexeventAudit}, {new: true});
    		}
    		return objAodIndexeventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAodIndexeventAuditByBeforeValueString(beforeValueString, updateAodIndexeventAudit) {
    	try {
    		let objAodIndexeventAudit;
    		if(sql) {
    			objAodIndexeventAudit = await models.sequelize.aodIndexeventAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objAodIndexeventAudit) {
    				objAodIndexeventAudit = await models.sequelize.aodIndexeventAudit.update(updateAodIndexeventAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objAodIndexeventAudit = await models.mongoose.aodIndexeventAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateAodIndexeventAudit}, {new: true});
    		}
    		return objAodIndexeventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAodIndexeventAuditByAfterValueString(afterValueString, updateAodIndexeventAudit) {
    	try {
    		let objAodIndexeventAudit;
    		if(sql) {
    			objAodIndexeventAudit = await models.sequelize.aodIndexeventAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objAodIndexeventAudit) {
    				objAodIndexeventAudit = await models.sequelize.aodIndexeventAudit.update(updateAodIndexeventAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objAodIndexeventAudit = await models.mongoose.aodIndexeventAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateAodIndexeventAudit}, {new: true});
    		}
    		return objAodIndexeventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAodIndexeventAuditByBeforeValueText(beforeValueText, updateAodIndexeventAudit) {
    	try {
    		let objAodIndexeventAudit;
    		if(sql) {
    			objAodIndexeventAudit = await models.sequelize.aodIndexeventAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objAodIndexeventAudit) {
    				objAodIndexeventAudit = await models.sequelize.aodIndexeventAudit.update(updateAodIndexeventAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objAodIndexeventAudit = await models.mongoose.aodIndexeventAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateAodIndexeventAudit}, {new: true});
    		}
    		return objAodIndexeventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAodIndexeventAuditByAfterValueText(afterValueText, updateAodIndexeventAudit) {
    	try {
    		let objAodIndexeventAudit;
    		if(sql) {
    			objAodIndexeventAudit = await models.sequelize.aodIndexeventAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objAodIndexeventAudit) {
    				objAodIndexeventAudit = await models.sequelize.aodIndexeventAudit.update(updateAodIndexeventAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objAodIndexeventAudit = await models.mongoose.aodIndexeventAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateAodIndexeventAudit}, {new: true});
    		}
    		return objAodIndexeventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAodIndexeventAuditByDateCreated(dateCreated, updateAodIndexeventAudit) {
    	try {
    		let objAodIndexeventAudit;
    		if(sql) {
    			objAodIndexeventAudit = await models.sequelize.aodIndexeventAudit.findOne({where: { date_created: dateCreated }});
    			if (objAodIndexeventAudit) {
    				objAodIndexeventAudit = await models.sequelize.aodIndexeventAudit.update(updateAodIndexeventAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objAodIndexeventAudit = await models.mongoose.aodIndexeventAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateAodIndexeventAudit}, {new: true});
    		}
    		return objAodIndexeventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAodIndexeventAuditByParentId(parentId, updateAodIndexeventAudit) {
    	try {
    		let objAodIndexeventAudit;
    		if(sql) {
    			objAodIndexeventAudit = await models.sequelize.aodIndexeventAudit.findOne({where: { parent_id: parentId }});
    			if (objAodIndexeventAudit) {
    				objAodIndexeventAudit = await models.sequelize.aodIndexeventAudit.update(updateAodIndexeventAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objAodIndexeventAudit = await models.mongoose.aodIndexeventAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateAodIndexeventAudit}, {new: true});
    		}
    		return objAodIndexeventAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AodIndexeventAuditService;
//</es-section>
