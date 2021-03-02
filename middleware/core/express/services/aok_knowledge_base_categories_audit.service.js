/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:09 GMT-0400 (Bolivia Time)
 * Time: 14:0:9
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:09 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:9
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

class AokKnowledgeBaseCategoryAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAokKnowledgeBaseCategoriesAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aokKnowledgeBaseCategoriesAudit.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aokKnowledgeBaseCategoriesAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAokKnowledgeBaseCategoriesAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aokKnowledgeBaseCategoriesAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aokKnowledgeBaseCategoriesAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAokKnowledgeBaseCategoryAudit(newAokKnowledgeBaseCategoryAudit) {
		try {
			let objAokKnowledgeBaseCategoryAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aokKnowledgeBaseCategoriesAudit.primaryKeys.id.type.toString())) {
			    newAokKnowledgeBaseCategoryAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAokKnowledgeBaseCategoryAudit = await models.sequelize.aokKnowledgeBaseCategoriesAudit.create(newAokKnowledgeBaseCategoryAudit);
			} else {
				objAokKnowledgeBaseCategoryAudit = new models.mongoose.aokKnowledgeBaseCategoriesAudit(newAokKnowledgeBaseCategoryAudit);
				await objAokKnowledgeBaseCategoryAudit.save();
			}
			return objAokKnowledgeBaseCategoryAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateAokKnowledgeBaseCategoryAudit(id, updateAokKnowledgeBaseCategoryAudit) {
		try {
			let objAokKnowledgeBaseCategoryAudit;
			if(sql) {
				objAokKnowledgeBaseCategoryAudit = await models.sequelize.aokKnowledgeBaseCategoriesAudit.findOne({where: { id: util.Char(id) }});
				if (objAokKnowledgeBaseCategoryAudit) {
					await models.sequelize.aokKnowledgeBaseCategoriesAudit.update(updateAokKnowledgeBaseCategoryAudit, { where: { id: util.Char(id) } });
					objAokKnowledgeBaseCategoryAudit = await models.sequelize.aokKnowledgeBaseCategoriesAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAokKnowledgeBaseCategoryAudit._id;
				objAokKnowledgeBaseCategoryAudit = await models.mongoose.aokKnowledgeBaseCategoriesAudit.findOneAndUpdate({id:id}, {$set: updateAokKnowledgeBaseCategoryAudit}, {new: true});
			}
			return objAokKnowledgeBaseCategoryAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getAAokKnowledgeBaseCategoryAudit(id, query) {
		try {
			let objAokKnowledgeBaseCategoryAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAokKnowledgeBaseCategoryAudit = await models.sequelize.aokKnowledgeBaseCategoriesAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAokKnowledgeBaseCategoryAudit = await models.mongoose.aokKnowledgeBaseCategoriesAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objAokKnowledgeBaseCategoryAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAokKnowledgeBaseCategoryAudit(id) {
		try {
			let objAokKnowledgeBaseCategoryAudit;
			if(sql) {
				objAokKnowledgeBaseCategoryAudit = await models.sequelize.aokKnowledgeBaseCategoriesAudit.findOne({ where: { id: util.Char(id) } });
				if (objAokKnowledgeBaseCategoryAudit) {
					await models.sequelize.aokKnowledgeBaseCategoriesAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAokKnowledgeBaseCategoryAudit = await models.mongoose.aokKnowledgeBaseCategoriesAudit.deleteOne({id:util.Char(id)});
			}
			return objAokKnowledgeBaseCategoryAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAokKnowledgeBaseCategoryAudit;
    		if(sql) {
    			objAokKnowledgeBaseCategoryAudit = await models.sequelize.aokKnowledgeBaseCategoriesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAokKnowledgeBaseCategoryAudit = await models.mongoose.aokKnowledgeBaseCategoriesAudit.findOne({id: id});
    		}
    		return objAokKnowledgeBaseCategoryAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAokKnowledgeBaseCategoryAudit;
    		if(sql) {
    			objAokKnowledgeBaseCategoryAudit = await models.sequelize.aokKnowledgeBaseCategoriesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAokKnowledgeBaseCategoryAudit = await models.mongoose.aokKnowledgeBaseCategoriesAudit.findOne({created_by: createdBy});
    		}
    		return objAokKnowledgeBaseCategoryAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objAokKnowledgeBaseCategoryAudit;
    		if(sql) {
    			objAokKnowledgeBaseCategoryAudit = await models.sequelize.aokKnowledgeBaseCategoriesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objAokKnowledgeBaseCategoryAudit = await models.mongoose.aokKnowledgeBaseCategoriesAudit.findOne({field_name: fieldName});
    		}
    		return objAokKnowledgeBaseCategoryAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objAokKnowledgeBaseCategoryAudit;
    		if(sql) {
    			objAokKnowledgeBaseCategoryAudit = await models.sequelize.aokKnowledgeBaseCategoriesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objAokKnowledgeBaseCategoryAudit = await models.mongoose.aokKnowledgeBaseCategoriesAudit.findOne({data_type: dataType});
    		}
    		return objAokKnowledgeBaseCategoryAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objAokKnowledgeBaseCategoryAudit;
    		if(sql) {
    			objAokKnowledgeBaseCategoryAudit = await models.sequelize.aokKnowledgeBaseCategoriesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objAokKnowledgeBaseCategoryAudit = await models.mongoose.aokKnowledgeBaseCategoriesAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objAokKnowledgeBaseCategoryAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objAokKnowledgeBaseCategoryAudit;
    		if(sql) {
    			objAokKnowledgeBaseCategoryAudit = await models.sequelize.aokKnowledgeBaseCategoriesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objAokKnowledgeBaseCategoryAudit = await models.mongoose.aokKnowledgeBaseCategoriesAudit.findOne({after_value_string: afterValueString});
    		}
    		return objAokKnowledgeBaseCategoryAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objAokKnowledgeBaseCategoryAudit;
    		if(sql) {
    			objAokKnowledgeBaseCategoryAudit = await models.sequelize.aokKnowledgeBaseCategoriesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objAokKnowledgeBaseCategoryAudit = await models.mongoose.aokKnowledgeBaseCategoriesAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objAokKnowledgeBaseCategoryAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objAokKnowledgeBaseCategoryAudit;
    		if(sql) {
    			objAokKnowledgeBaseCategoryAudit = await models.sequelize.aokKnowledgeBaseCategoriesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objAokKnowledgeBaseCategoryAudit = await models.mongoose.aokKnowledgeBaseCategoriesAudit.findOne({after_value_text: afterValueText});
    		}
    		return objAokKnowledgeBaseCategoryAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objAokKnowledgeBaseCategoryAudit;
    		if(sql) {
    			objAokKnowledgeBaseCategoryAudit = await models.sequelize.aokKnowledgeBaseCategoriesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objAokKnowledgeBaseCategoryAudit = await models.mongoose.aokKnowledgeBaseCategoriesAudit.findOne({date_created: dateCreated});
    		}
    		return objAokKnowledgeBaseCategoryAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objAokKnowledgeBaseCategoryAudit;
    		if(sql) {
    			objAokKnowledgeBaseCategoryAudit = await models.sequelize.aokKnowledgeBaseCategoriesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objAokKnowledgeBaseCategoryAudit = await models.mongoose.aokKnowledgeBaseCategoriesAudit.findOne({parent_id: parentId});
    		}
    		return objAokKnowledgeBaseCategoryAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAokKnowledgeBaseCategoryAuditById(id, updateAokKnowledgeBaseCategoryAudit) {
    	try {
    		let objAokKnowledgeBaseCategoryAudit;
    		if(sql) {
    			objAokKnowledgeBaseCategoryAudit = await models.sequelize.aokKnowledgeBaseCategoriesAudit.findOne({where: { id: id }});
    			if (objAokKnowledgeBaseCategoryAudit) {
    				objAokKnowledgeBaseCategoryAudit = await models.sequelize.aokKnowledgeBaseCategoriesAudit.update(updateAokKnowledgeBaseCategoryAudit, { where: { id: id } });
    			}
    		} else {
    			objAokKnowledgeBaseCategoryAudit = await models.mongoose.aokKnowledgeBaseCategoriesAudit.findOneAndUpdate({id: id}, {$set: updateAokKnowledgeBaseCategoryAudit}, {new: true});
    		}
    		return objAokKnowledgeBaseCategoryAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAokKnowledgeBaseCategoryAuditByCreatedBy(createdBy, updateAokKnowledgeBaseCategoryAudit) {
    	try {
    		let objAokKnowledgeBaseCategoryAudit;
    		if(sql) {
    			objAokKnowledgeBaseCategoryAudit = await models.sequelize.aokKnowledgeBaseCategoriesAudit.findOne({where: { created_by: createdBy }});
    			if (objAokKnowledgeBaseCategoryAudit) {
    				objAokKnowledgeBaseCategoryAudit = await models.sequelize.aokKnowledgeBaseCategoriesAudit.update(updateAokKnowledgeBaseCategoryAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAokKnowledgeBaseCategoryAudit = await models.mongoose.aokKnowledgeBaseCategoriesAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateAokKnowledgeBaseCategoryAudit}, {new: true});
    		}
    		return objAokKnowledgeBaseCategoryAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAokKnowledgeBaseCategoryAuditByFieldName(fieldName, updateAokKnowledgeBaseCategoryAudit) {
    	try {
    		let objAokKnowledgeBaseCategoryAudit;
    		if(sql) {
    			objAokKnowledgeBaseCategoryAudit = await models.sequelize.aokKnowledgeBaseCategoriesAudit.findOne({where: { field_name: fieldName }});
    			if (objAokKnowledgeBaseCategoryAudit) {
    				objAokKnowledgeBaseCategoryAudit = await models.sequelize.aokKnowledgeBaseCategoriesAudit.update(updateAokKnowledgeBaseCategoryAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objAokKnowledgeBaseCategoryAudit = await models.mongoose.aokKnowledgeBaseCategoriesAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateAokKnowledgeBaseCategoryAudit}, {new: true});
    		}
    		return objAokKnowledgeBaseCategoryAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAokKnowledgeBaseCategoryAuditByDataType(dataType, updateAokKnowledgeBaseCategoryAudit) {
    	try {
    		let objAokKnowledgeBaseCategoryAudit;
    		if(sql) {
    			objAokKnowledgeBaseCategoryAudit = await models.sequelize.aokKnowledgeBaseCategoriesAudit.findOne({where: { data_type: dataType }});
    			if (objAokKnowledgeBaseCategoryAudit) {
    				objAokKnowledgeBaseCategoryAudit = await models.sequelize.aokKnowledgeBaseCategoriesAudit.update(updateAokKnowledgeBaseCategoryAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objAokKnowledgeBaseCategoryAudit = await models.mongoose.aokKnowledgeBaseCategoriesAudit.findOneAndUpdate({data_type: dataType}, {$set: updateAokKnowledgeBaseCategoryAudit}, {new: true});
    		}
    		return objAokKnowledgeBaseCategoryAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAokKnowledgeBaseCategoryAuditByBeforeValueString(beforeValueString, updateAokKnowledgeBaseCategoryAudit) {
    	try {
    		let objAokKnowledgeBaseCategoryAudit;
    		if(sql) {
    			objAokKnowledgeBaseCategoryAudit = await models.sequelize.aokKnowledgeBaseCategoriesAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objAokKnowledgeBaseCategoryAudit) {
    				objAokKnowledgeBaseCategoryAudit = await models.sequelize.aokKnowledgeBaseCategoriesAudit.update(updateAokKnowledgeBaseCategoryAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objAokKnowledgeBaseCategoryAudit = await models.mongoose.aokKnowledgeBaseCategoriesAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateAokKnowledgeBaseCategoryAudit}, {new: true});
    		}
    		return objAokKnowledgeBaseCategoryAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAokKnowledgeBaseCategoryAuditByAfterValueString(afterValueString, updateAokKnowledgeBaseCategoryAudit) {
    	try {
    		let objAokKnowledgeBaseCategoryAudit;
    		if(sql) {
    			objAokKnowledgeBaseCategoryAudit = await models.sequelize.aokKnowledgeBaseCategoriesAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objAokKnowledgeBaseCategoryAudit) {
    				objAokKnowledgeBaseCategoryAudit = await models.sequelize.aokKnowledgeBaseCategoriesAudit.update(updateAokKnowledgeBaseCategoryAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objAokKnowledgeBaseCategoryAudit = await models.mongoose.aokKnowledgeBaseCategoriesAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateAokKnowledgeBaseCategoryAudit}, {new: true});
    		}
    		return objAokKnowledgeBaseCategoryAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAokKnowledgeBaseCategoryAuditByBeforeValueText(beforeValueText, updateAokKnowledgeBaseCategoryAudit) {
    	try {
    		let objAokKnowledgeBaseCategoryAudit;
    		if(sql) {
    			objAokKnowledgeBaseCategoryAudit = await models.sequelize.aokKnowledgeBaseCategoriesAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objAokKnowledgeBaseCategoryAudit) {
    				objAokKnowledgeBaseCategoryAudit = await models.sequelize.aokKnowledgeBaseCategoriesAudit.update(updateAokKnowledgeBaseCategoryAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objAokKnowledgeBaseCategoryAudit = await models.mongoose.aokKnowledgeBaseCategoriesAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateAokKnowledgeBaseCategoryAudit}, {new: true});
    		}
    		return objAokKnowledgeBaseCategoryAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAokKnowledgeBaseCategoryAuditByAfterValueText(afterValueText, updateAokKnowledgeBaseCategoryAudit) {
    	try {
    		let objAokKnowledgeBaseCategoryAudit;
    		if(sql) {
    			objAokKnowledgeBaseCategoryAudit = await models.sequelize.aokKnowledgeBaseCategoriesAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objAokKnowledgeBaseCategoryAudit) {
    				objAokKnowledgeBaseCategoryAudit = await models.sequelize.aokKnowledgeBaseCategoriesAudit.update(updateAokKnowledgeBaseCategoryAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objAokKnowledgeBaseCategoryAudit = await models.mongoose.aokKnowledgeBaseCategoriesAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateAokKnowledgeBaseCategoryAudit}, {new: true});
    		}
    		return objAokKnowledgeBaseCategoryAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAokKnowledgeBaseCategoryAuditByDateCreated(dateCreated, updateAokKnowledgeBaseCategoryAudit) {
    	try {
    		let objAokKnowledgeBaseCategoryAudit;
    		if(sql) {
    			objAokKnowledgeBaseCategoryAudit = await models.sequelize.aokKnowledgeBaseCategoriesAudit.findOne({where: { date_created: dateCreated }});
    			if (objAokKnowledgeBaseCategoryAudit) {
    				objAokKnowledgeBaseCategoryAudit = await models.sequelize.aokKnowledgeBaseCategoriesAudit.update(updateAokKnowledgeBaseCategoryAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objAokKnowledgeBaseCategoryAudit = await models.mongoose.aokKnowledgeBaseCategoriesAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateAokKnowledgeBaseCategoryAudit}, {new: true});
    		}
    		return objAokKnowledgeBaseCategoryAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAokKnowledgeBaseCategoryAuditByParentId(parentId, updateAokKnowledgeBaseCategoryAudit) {
    	try {
    		let objAokKnowledgeBaseCategoryAudit;
    		if(sql) {
    			objAokKnowledgeBaseCategoryAudit = await models.sequelize.aokKnowledgeBaseCategoriesAudit.findOne({where: { parent_id: parentId }});
    			if (objAokKnowledgeBaseCategoryAudit) {
    				objAokKnowledgeBaseCategoryAudit = await models.sequelize.aokKnowledgeBaseCategoriesAudit.update(updateAokKnowledgeBaseCategoryAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objAokKnowledgeBaseCategoryAudit = await models.mongoose.aokKnowledgeBaseCategoriesAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateAokKnowledgeBaseCategoryAudit}, {new: true});
    		}
    		return objAokKnowledgeBaseCategoryAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AokKnowledgeBaseCategoryAuditService;
//</es-section>
