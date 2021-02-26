/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:01 GMT-0400 (Bolivia Time)
 * Time: 0:22:1
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:01 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:1
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

class AodIndexAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAodIndexAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aodIndexAudit.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aodIndexAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAodIndexAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aodIndexAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aodIndexAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAodIndexAudit(newAodIndexAudit) {
		try {
			let objAodIndexAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aodIndexAudit.primaryKeys.id.type.toString())) {
			    newAodIndexAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAodIndexAudit = await models.sequelize.aodIndexAudit.create(newAodIndexAudit);
			} else {
				objAodIndexAudit = new models.mongoose.aodIndexAudit(newAodIndexAudit);
				await objAodIndexAudit.save();
			}
			return objAodIndexAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateAodIndexAudit(id, updateAodIndexAudit) {
		try {
			let objAodIndexAudit;
			if(sql) {
				objAodIndexAudit = await models.sequelize.aodIndexAudit.findOne({where: { id: util.Char(id) }});
				if (objAodIndexAudit) {
					await models.sequelize.aodIndexAudit.update(updateAodIndexAudit, { where: { id: util.Char(id) } });
					objAodIndexAudit = await models.sequelize.aodIndexAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAodIndexAudit._id;
				objAodIndexAudit = await models.mongoose.aodIndexAudit.findOneAndUpdate({id:id}, {$set: updateAodIndexAudit}, {new: true});
			}
			return objAodIndexAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getAAodIndexAudit(id, query) {
		try {
			let objAodIndexAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAodIndexAudit = await models.sequelize.aodIndexAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAodIndexAudit = await models.mongoose.aodIndexAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objAodIndexAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAodIndexAudit(id) {
		try {
			let objAodIndexAudit;
			if(sql) {
				objAodIndexAudit = await models.sequelize.aodIndexAudit.findOne({ where: { id: util.Char(id) } });
				if (objAodIndexAudit) {
					await models.sequelize.aodIndexAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAodIndexAudit = await models.mongoose.aodIndexAudit.deleteOne({id:util.Char(id)});
			}
			return objAodIndexAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAodIndexAudit;
    		if(sql) {
    			objAodIndexAudit = await models.sequelize.aodIndexAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAodIndexAudit = await models.mongoose.aodIndexAudit.findOne({id: id});
    		}
    		return objAodIndexAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAodIndexAudit;
    		if(sql) {
    			objAodIndexAudit = await models.sequelize.aodIndexAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAodIndexAudit = await models.mongoose.aodIndexAudit.findOne({created_by: createdBy});
    		}
    		return objAodIndexAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objAodIndexAudit;
    		if(sql) {
    			objAodIndexAudit = await models.sequelize.aodIndexAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objAodIndexAudit = await models.mongoose.aodIndexAudit.findOne({field_name: fieldName});
    		}
    		return objAodIndexAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objAodIndexAudit;
    		if(sql) {
    			objAodIndexAudit = await models.sequelize.aodIndexAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objAodIndexAudit = await models.mongoose.aodIndexAudit.findOne({data_type: dataType});
    		}
    		return objAodIndexAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objAodIndexAudit;
    		if(sql) {
    			objAodIndexAudit = await models.sequelize.aodIndexAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objAodIndexAudit = await models.mongoose.aodIndexAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objAodIndexAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objAodIndexAudit;
    		if(sql) {
    			objAodIndexAudit = await models.sequelize.aodIndexAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objAodIndexAudit = await models.mongoose.aodIndexAudit.findOne({after_value_string: afterValueString});
    		}
    		return objAodIndexAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objAodIndexAudit;
    		if(sql) {
    			objAodIndexAudit = await models.sequelize.aodIndexAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objAodIndexAudit = await models.mongoose.aodIndexAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objAodIndexAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objAodIndexAudit;
    		if(sql) {
    			objAodIndexAudit = await models.sequelize.aodIndexAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objAodIndexAudit = await models.mongoose.aodIndexAudit.findOne({after_value_text: afterValueText});
    		}
    		return objAodIndexAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objAodIndexAudit;
    		if(sql) {
    			objAodIndexAudit = await models.sequelize.aodIndexAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objAodIndexAudit = await models.mongoose.aodIndexAudit.findOne({date_created: dateCreated});
    		}
    		return objAodIndexAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objAodIndexAudit;
    		if(sql) {
    			objAodIndexAudit = await models.sequelize.aodIndexAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objAodIndexAudit = await models.mongoose.aodIndexAudit.findOne({parent_id: parentId});
    		}
    		return objAodIndexAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAodIndexAuditById(id, updateAodIndexAudit) {
    	try {
    		let objAodIndexAudit;
    		if(sql) {
    			objAodIndexAudit = await models.sequelize.aodIndexAudit.findOne({where: { id: id }});
    			if (objAodIndexAudit) {
    				objAodIndexAudit = await models.sequelize.aodIndexAudit.update(updateAodIndexAudit, { where: { id: id } });
    			}
    		} else {
    			objAodIndexAudit = await models.mongoose.aodIndexAudit.findOneAndUpdate({id: id}, {$set: updateAodIndexAudit}, {new: true});
    		}
    		return objAodIndexAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAodIndexAuditByCreatedBy(createdBy, updateAodIndexAudit) {
    	try {
    		let objAodIndexAudit;
    		if(sql) {
    			objAodIndexAudit = await models.sequelize.aodIndexAudit.findOne({where: { created_by: createdBy }});
    			if (objAodIndexAudit) {
    				objAodIndexAudit = await models.sequelize.aodIndexAudit.update(updateAodIndexAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAodIndexAudit = await models.mongoose.aodIndexAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateAodIndexAudit}, {new: true});
    		}
    		return objAodIndexAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAodIndexAuditByFieldName(fieldName, updateAodIndexAudit) {
    	try {
    		let objAodIndexAudit;
    		if(sql) {
    			objAodIndexAudit = await models.sequelize.aodIndexAudit.findOne({where: { field_name: fieldName }});
    			if (objAodIndexAudit) {
    				objAodIndexAudit = await models.sequelize.aodIndexAudit.update(updateAodIndexAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objAodIndexAudit = await models.mongoose.aodIndexAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateAodIndexAudit}, {new: true});
    		}
    		return objAodIndexAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAodIndexAuditByDataType(dataType, updateAodIndexAudit) {
    	try {
    		let objAodIndexAudit;
    		if(sql) {
    			objAodIndexAudit = await models.sequelize.aodIndexAudit.findOne({where: { data_type: dataType }});
    			if (objAodIndexAudit) {
    				objAodIndexAudit = await models.sequelize.aodIndexAudit.update(updateAodIndexAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objAodIndexAudit = await models.mongoose.aodIndexAudit.findOneAndUpdate({data_type: dataType}, {$set: updateAodIndexAudit}, {new: true});
    		}
    		return objAodIndexAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAodIndexAuditByBeforeValueString(beforeValueString, updateAodIndexAudit) {
    	try {
    		let objAodIndexAudit;
    		if(sql) {
    			objAodIndexAudit = await models.sequelize.aodIndexAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objAodIndexAudit) {
    				objAodIndexAudit = await models.sequelize.aodIndexAudit.update(updateAodIndexAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objAodIndexAudit = await models.mongoose.aodIndexAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateAodIndexAudit}, {new: true});
    		}
    		return objAodIndexAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAodIndexAuditByAfterValueString(afterValueString, updateAodIndexAudit) {
    	try {
    		let objAodIndexAudit;
    		if(sql) {
    			objAodIndexAudit = await models.sequelize.aodIndexAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objAodIndexAudit) {
    				objAodIndexAudit = await models.sequelize.aodIndexAudit.update(updateAodIndexAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objAodIndexAudit = await models.mongoose.aodIndexAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateAodIndexAudit}, {new: true});
    		}
    		return objAodIndexAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAodIndexAuditByBeforeValueText(beforeValueText, updateAodIndexAudit) {
    	try {
    		let objAodIndexAudit;
    		if(sql) {
    			objAodIndexAudit = await models.sequelize.aodIndexAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objAodIndexAudit) {
    				objAodIndexAudit = await models.sequelize.aodIndexAudit.update(updateAodIndexAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objAodIndexAudit = await models.mongoose.aodIndexAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateAodIndexAudit}, {new: true});
    		}
    		return objAodIndexAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAodIndexAuditByAfterValueText(afterValueText, updateAodIndexAudit) {
    	try {
    		let objAodIndexAudit;
    		if(sql) {
    			objAodIndexAudit = await models.sequelize.aodIndexAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objAodIndexAudit) {
    				objAodIndexAudit = await models.sequelize.aodIndexAudit.update(updateAodIndexAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objAodIndexAudit = await models.mongoose.aodIndexAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateAodIndexAudit}, {new: true});
    		}
    		return objAodIndexAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAodIndexAuditByDateCreated(dateCreated, updateAodIndexAudit) {
    	try {
    		let objAodIndexAudit;
    		if(sql) {
    			objAodIndexAudit = await models.sequelize.aodIndexAudit.findOne({where: { date_created: dateCreated }});
    			if (objAodIndexAudit) {
    				objAodIndexAudit = await models.sequelize.aodIndexAudit.update(updateAodIndexAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objAodIndexAudit = await models.mongoose.aodIndexAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateAodIndexAudit}, {new: true});
    		}
    		return objAodIndexAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAodIndexAuditByParentId(parentId, updateAodIndexAudit) {
    	try {
    		let objAodIndexAudit;
    		if(sql) {
    			objAodIndexAudit = await models.sequelize.aodIndexAudit.findOne({where: { parent_id: parentId }});
    			if (objAodIndexAudit) {
    				objAodIndexAudit = await models.sequelize.aodIndexAudit.update(updateAodIndexAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objAodIndexAudit = await models.mongoose.aodIndexAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateAodIndexAudit}, {new: true});
    		}
    		return objAodIndexAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AodIndexAuditService;
//</es-section>
