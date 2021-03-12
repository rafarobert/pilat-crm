/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:26 GMT-0400 (Bolivia Time)
 * Time: 14:56:26
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:26 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:26
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

class AowWorkflowAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAowWorkflowAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aowWorkflowAudit.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aowWorkflowAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAowWorkflowAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aowWorkflowAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aowWorkflowAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAowWorkflowAudit(newAowWorkflowAudit) {
		try {
			let objAowWorkflowAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aowWorkflowAudit.primaryKeys.id.type.toString())) {
			    newAowWorkflowAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAowWorkflowAudit = await models.sequelize.aowWorkflowAudit.create(newAowWorkflowAudit);
			} else {
				objAowWorkflowAudit = new models.mongoose.aowWorkflowAudit(newAowWorkflowAudit);
				await objAowWorkflowAudit.save();
			}
			return objAowWorkflowAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateAowWorkflowAudit(id, updateAowWorkflowAudit) {
		try {
			let objAowWorkflowAudit;
			if(sql) {
				objAowWorkflowAudit = await models.sequelize.aowWorkflowAudit.findOne({where: { id: util.Char(id) }});
				if (objAowWorkflowAudit) {
					await models.sequelize.aowWorkflowAudit.update(updateAowWorkflowAudit, { where: { id: util.Char(id) } });
					objAowWorkflowAudit = await models.sequelize.aowWorkflowAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAowWorkflowAudit._id;
				objAowWorkflowAudit = await models.mongoose.aowWorkflowAudit.findOneAndUpdate({id:id}, {$set: updateAowWorkflowAudit}, {new: true});
			}
			return objAowWorkflowAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getAAowWorkflowAudit(id, query) {
		try {
			let objAowWorkflowAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAowWorkflowAudit = await models.sequelize.aowWorkflowAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAowWorkflowAudit = await models.mongoose.aowWorkflowAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objAowWorkflowAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAowWorkflowAudit(id) {
		try {
			let objAowWorkflowAudit;
			if(sql) {
				objAowWorkflowAudit = await models.sequelize.aowWorkflowAudit.findOne({ where: { id: util.Char(id) } });
				if (objAowWorkflowAudit) {
					await models.sequelize.aowWorkflowAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAowWorkflowAudit = await models.mongoose.aowWorkflowAudit.deleteOne({id:util.Char(id)});
			}
			return objAowWorkflowAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAowWorkflowAudit;
    		if(sql) {
    			objAowWorkflowAudit = await models.sequelize.aowWorkflowAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAowWorkflowAudit = await models.mongoose.aowWorkflowAudit.findOne({id: id});
    		}
    		return objAowWorkflowAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAowWorkflowAudit;
    		if(sql) {
    			objAowWorkflowAudit = await models.sequelize.aowWorkflowAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAowWorkflowAudit = await models.mongoose.aowWorkflowAudit.findOne({created_by: createdBy});
    		}
    		return objAowWorkflowAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objAowWorkflowAudit;
    		if(sql) {
    			objAowWorkflowAudit = await models.sequelize.aowWorkflowAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objAowWorkflowAudit = await models.mongoose.aowWorkflowAudit.findOne({field_name: fieldName});
    		}
    		return objAowWorkflowAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objAowWorkflowAudit;
    		if(sql) {
    			objAowWorkflowAudit = await models.sequelize.aowWorkflowAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objAowWorkflowAudit = await models.mongoose.aowWorkflowAudit.findOne({data_type: dataType});
    		}
    		return objAowWorkflowAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objAowWorkflowAudit;
    		if(sql) {
    			objAowWorkflowAudit = await models.sequelize.aowWorkflowAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objAowWorkflowAudit = await models.mongoose.aowWorkflowAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objAowWorkflowAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objAowWorkflowAudit;
    		if(sql) {
    			objAowWorkflowAudit = await models.sequelize.aowWorkflowAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objAowWorkflowAudit = await models.mongoose.aowWorkflowAudit.findOne({after_value_string: afterValueString});
    		}
    		return objAowWorkflowAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objAowWorkflowAudit;
    		if(sql) {
    			objAowWorkflowAudit = await models.sequelize.aowWorkflowAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objAowWorkflowAudit = await models.mongoose.aowWorkflowAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objAowWorkflowAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objAowWorkflowAudit;
    		if(sql) {
    			objAowWorkflowAudit = await models.sequelize.aowWorkflowAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objAowWorkflowAudit = await models.mongoose.aowWorkflowAudit.findOne({after_value_text: afterValueText});
    		}
    		return objAowWorkflowAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objAowWorkflowAudit;
    		if(sql) {
    			objAowWorkflowAudit = await models.sequelize.aowWorkflowAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objAowWorkflowAudit = await models.mongoose.aowWorkflowAudit.findOne({date_created: dateCreated});
    		}
    		return objAowWorkflowAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objAowWorkflowAudit;
    		if(sql) {
    			objAowWorkflowAudit = await models.sequelize.aowWorkflowAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objAowWorkflowAudit = await models.mongoose.aowWorkflowAudit.findOne({parent_id: parentId});
    		}
    		return objAowWorkflowAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAowWorkflowAuditById(id, updateAowWorkflowAudit) {
    	try {
    		let objAowWorkflowAudit;
    		if(sql) {
    			objAowWorkflowAudit = await models.sequelize.aowWorkflowAudit.findOne({where: { id: id }});
    			if (objAowWorkflowAudit) {
    				objAowWorkflowAudit = await models.sequelize.aowWorkflowAudit.update(updateAowWorkflowAudit, { where: { id: id } });
    			}
    		} else {
    			objAowWorkflowAudit = await models.mongoose.aowWorkflowAudit.findOneAndUpdate({id: id}, {$set: updateAowWorkflowAudit}, {new: true});
    		}
    		return objAowWorkflowAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowWorkflowAuditByCreatedBy(createdBy, updateAowWorkflowAudit) {
    	try {
    		let objAowWorkflowAudit;
    		if(sql) {
    			objAowWorkflowAudit = await models.sequelize.aowWorkflowAudit.findOne({where: { created_by: createdBy }});
    			if (objAowWorkflowAudit) {
    				objAowWorkflowAudit = await models.sequelize.aowWorkflowAudit.update(updateAowWorkflowAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAowWorkflowAudit = await models.mongoose.aowWorkflowAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateAowWorkflowAudit}, {new: true});
    		}
    		return objAowWorkflowAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowWorkflowAuditByFieldName(fieldName, updateAowWorkflowAudit) {
    	try {
    		let objAowWorkflowAudit;
    		if(sql) {
    			objAowWorkflowAudit = await models.sequelize.aowWorkflowAudit.findOne({where: { field_name: fieldName }});
    			if (objAowWorkflowAudit) {
    				objAowWorkflowAudit = await models.sequelize.aowWorkflowAudit.update(updateAowWorkflowAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objAowWorkflowAudit = await models.mongoose.aowWorkflowAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateAowWorkflowAudit}, {new: true});
    		}
    		return objAowWorkflowAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowWorkflowAuditByDataType(dataType, updateAowWorkflowAudit) {
    	try {
    		let objAowWorkflowAudit;
    		if(sql) {
    			objAowWorkflowAudit = await models.sequelize.aowWorkflowAudit.findOne({where: { data_type: dataType }});
    			if (objAowWorkflowAudit) {
    				objAowWorkflowAudit = await models.sequelize.aowWorkflowAudit.update(updateAowWorkflowAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objAowWorkflowAudit = await models.mongoose.aowWorkflowAudit.findOneAndUpdate({data_type: dataType}, {$set: updateAowWorkflowAudit}, {new: true});
    		}
    		return objAowWorkflowAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowWorkflowAuditByBeforeValueString(beforeValueString, updateAowWorkflowAudit) {
    	try {
    		let objAowWorkflowAudit;
    		if(sql) {
    			objAowWorkflowAudit = await models.sequelize.aowWorkflowAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objAowWorkflowAudit) {
    				objAowWorkflowAudit = await models.sequelize.aowWorkflowAudit.update(updateAowWorkflowAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objAowWorkflowAudit = await models.mongoose.aowWorkflowAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateAowWorkflowAudit}, {new: true});
    		}
    		return objAowWorkflowAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowWorkflowAuditByAfterValueString(afterValueString, updateAowWorkflowAudit) {
    	try {
    		let objAowWorkflowAudit;
    		if(sql) {
    			objAowWorkflowAudit = await models.sequelize.aowWorkflowAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objAowWorkflowAudit) {
    				objAowWorkflowAudit = await models.sequelize.aowWorkflowAudit.update(updateAowWorkflowAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objAowWorkflowAudit = await models.mongoose.aowWorkflowAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateAowWorkflowAudit}, {new: true});
    		}
    		return objAowWorkflowAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowWorkflowAuditByBeforeValueText(beforeValueText, updateAowWorkflowAudit) {
    	try {
    		let objAowWorkflowAudit;
    		if(sql) {
    			objAowWorkflowAudit = await models.sequelize.aowWorkflowAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objAowWorkflowAudit) {
    				objAowWorkflowAudit = await models.sequelize.aowWorkflowAudit.update(updateAowWorkflowAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objAowWorkflowAudit = await models.mongoose.aowWorkflowAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateAowWorkflowAudit}, {new: true});
    		}
    		return objAowWorkflowAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowWorkflowAuditByAfterValueText(afterValueText, updateAowWorkflowAudit) {
    	try {
    		let objAowWorkflowAudit;
    		if(sql) {
    			objAowWorkflowAudit = await models.sequelize.aowWorkflowAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objAowWorkflowAudit) {
    				objAowWorkflowAudit = await models.sequelize.aowWorkflowAudit.update(updateAowWorkflowAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objAowWorkflowAudit = await models.mongoose.aowWorkflowAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateAowWorkflowAudit}, {new: true});
    		}
    		return objAowWorkflowAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowWorkflowAuditByDateCreated(dateCreated, updateAowWorkflowAudit) {
    	try {
    		let objAowWorkflowAudit;
    		if(sql) {
    			objAowWorkflowAudit = await models.sequelize.aowWorkflowAudit.findOne({where: { date_created: dateCreated }});
    			if (objAowWorkflowAudit) {
    				objAowWorkflowAudit = await models.sequelize.aowWorkflowAudit.update(updateAowWorkflowAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objAowWorkflowAudit = await models.mongoose.aowWorkflowAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateAowWorkflowAudit}, {new: true});
    		}
    		return objAowWorkflowAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowWorkflowAuditByParentId(parentId, updateAowWorkflowAudit) {
    	try {
    		let objAowWorkflowAudit;
    		if(sql) {
    			objAowWorkflowAudit = await models.sequelize.aowWorkflowAudit.findOne({where: { parent_id: parentId }});
    			if (objAowWorkflowAudit) {
    				objAowWorkflowAudit = await models.sequelize.aowWorkflowAudit.update(updateAowWorkflowAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objAowWorkflowAudit = await models.mongoose.aowWorkflowAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateAowWorkflowAudit}, {new: true});
    		}
    		return objAowWorkflowAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AowWorkflowAuditService;
//</es-section>
