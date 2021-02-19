/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:36:14 GMT-0400 (Bolivia Time)
 * Time: 18:36:14
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:36:14 GMT-0400 (Bolivia Time)
 * Last time updated: 18:36:14
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

class AoProductCategoryAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAosProductCategoriesAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aosProductCategoriesAudit.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aosProductCategoriesAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAosProductCategoriesAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aosProductCategoriesAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aosProductCategoriesAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAoProductCategoryAudit(newAoProductCategoryAudit) {
		try {
			let objAoProductCategoryAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aosProductCategoriesAudit.primaryKeys.id.type.toString())) {
			    newAoProductCategoryAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAoProductCategoryAudit = await models.sequelize.aosProductCategoriesAudit.create(newAoProductCategoryAudit);
			} else {
				objAoProductCategoryAudit = new models.mongoose.aosProductCategoriesAudit(newAoProductCategoryAudit);
				await objAoProductCategoryAudit.save();
			}
			return objAoProductCategoryAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateAoProductCategoryAudit(id, updateAoProductCategoryAudit) {
		try {
			let objAoProductCategoryAudit;
			if(sql) {
				objAoProductCategoryAudit = await models.sequelize.aosProductCategoriesAudit.findOne({where: { id: util.Char(id) }});
				if (objAoProductCategoryAudit) {
					await models.sequelize.aosProductCategoriesAudit.update(updateAoProductCategoryAudit, { where: { id: util.Char(id) } });
					objAoProductCategoryAudit = await models.sequelize.aosProductCategoriesAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAoProductCategoryAudit._id;
				objAoProductCategoryAudit = await models.mongoose.aosProductCategoriesAudit.findOneAndUpdate({id:id}, {$set: updateAoProductCategoryAudit}, {new: true});
			}
			return objAoProductCategoryAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getAAoProductCategoryAudit(id, query) {
		try {
			let objAoProductCategoryAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAoProductCategoryAudit = await models.sequelize.aosProductCategoriesAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAoProductCategoryAudit = await models.mongoose.aosProductCategoriesAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objAoProductCategoryAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAoProductCategoryAudit(id) {
		try {
			let objAoProductCategoryAudit;
			if(sql) {
				objAoProductCategoryAudit = await models.sequelize.aosProductCategoriesAudit.findOne({ where: { id: util.Char(id) } });
				if (objAoProductCategoryAudit) {
					await models.sequelize.aosProductCategoriesAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAoProductCategoryAudit = await models.mongoose.aosProductCategoriesAudit.deleteOne({id:util.Char(id)});
			}
			return objAoProductCategoryAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAoProductCategoryAudit;
    		if(sql) {
    			objAoProductCategoryAudit = await models.sequelize.aosProductCategoriesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAoProductCategoryAudit = await models.mongoose.aosProductCategoriesAudit.findOne({id: id});
    		}
    		return objAoProductCategoryAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAoProductCategoryAudit;
    		if(sql) {
    			objAoProductCategoryAudit = await models.sequelize.aosProductCategoriesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAoProductCategoryAudit = await models.mongoose.aosProductCategoriesAudit.findOne({created_by: createdBy});
    		}
    		return objAoProductCategoryAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objAoProductCategoryAudit;
    		if(sql) {
    			objAoProductCategoryAudit = await models.sequelize.aosProductCategoriesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objAoProductCategoryAudit = await models.mongoose.aosProductCategoriesAudit.findOne({field_name: fieldName});
    		}
    		return objAoProductCategoryAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objAoProductCategoryAudit;
    		if(sql) {
    			objAoProductCategoryAudit = await models.sequelize.aosProductCategoriesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objAoProductCategoryAudit = await models.mongoose.aosProductCategoriesAudit.findOne({data_type: dataType});
    		}
    		return objAoProductCategoryAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objAoProductCategoryAudit;
    		if(sql) {
    			objAoProductCategoryAudit = await models.sequelize.aosProductCategoriesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objAoProductCategoryAudit = await models.mongoose.aosProductCategoriesAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objAoProductCategoryAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objAoProductCategoryAudit;
    		if(sql) {
    			objAoProductCategoryAudit = await models.sequelize.aosProductCategoriesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objAoProductCategoryAudit = await models.mongoose.aosProductCategoriesAudit.findOne({after_value_string: afterValueString});
    		}
    		return objAoProductCategoryAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objAoProductCategoryAudit;
    		if(sql) {
    			objAoProductCategoryAudit = await models.sequelize.aosProductCategoriesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objAoProductCategoryAudit = await models.mongoose.aosProductCategoriesAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objAoProductCategoryAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objAoProductCategoryAudit;
    		if(sql) {
    			objAoProductCategoryAudit = await models.sequelize.aosProductCategoriesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objAoProductCategoryAudit = await models.mongoose.aosProductCategoriesAudit.findOne({after_value_text: afterValueText});
    		}
    		return objAoProductCategoryAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objAoProductCategoryAudit;
    		if(sql) {
    			objAoProductCategoryAudit = await models.sequelize.aosProductCategoriesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objAoProductCategoryAudit = await models.mongoose.aosProductCategoriesAudit.findOne({date_created: dateCreated});
    		}
    		return objAoProductCategoryAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objAoProductCategoryAudit;
    		if(sql) {
    			objAoProductCategoryAudit = await models.sequelize.aosProductCategoriesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objAoProductCategoryAudit = await models.mongoose.aosProductCategoriesAudit.findOne({parent_id: parentId});
    		}
    		return objAoProductCategoryAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAoProductCategoryAuditById(id, updateAoProductCategoryAudit) {
    	try {
    		let objAoProductCategoryAudit;
    		if(sql) {
    			objAoProductCategoryAudit = await models.sequelize.aosProductCategoriesAudit.findOne({where: { id: id }});
    			if (objAoProductCategoryAudit) {
    				objAoProductCategoryAudit = await models.sequelize.aosProductCategoriesAudit.update(updateAoProductCategoryAudit, { where: { id: id } });
    			}
    		} else {
    			objAoProductCategoryAudit = await models.mongoose.aosProductCategoriesAudit.findOneAndUpdate({id: id}, {$set: updateAoProductCategoryAudit}, {new: true});
    		}
    		return objAoProductCategoryAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductCategoryAuditByCreatedBy(createdBy, updateAoProductCategoryAudit) {
    	try {
    		let objAoProductCategoryAudit;
    		if(sql) {
    			objAoProductCategoryAudit = await models.sequelize.aosProductCategoriesAudit.findOne({where: { created_by: createdBy }});
    			if (objAoProductCategoryAudit) {
    				objAoProductCategoryAudit = await models.sequelize.aosProductCategoriesAudit.update(updateAoProductCategoryAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAoProductCategoryAudit = await models.mongoose.aosProductCategoriesAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateAoProductCategoryAudit}, {new: true});
    		}
    		return objAoProductCategoryAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductCategoryAuditByFieldName(fieldName, updateAoProductCategoryAudit) {
    	try {
    		let objAoProductCategoryAudit;
    		if(sql) {
    			objAoProductCategoryAudit = await models.sequelize.aosProductCategoriesAudit.findOne({where: { field_name: fieldName }});
    			if (objAoProductCategoryAudit) {
    				objAoProductCategoryAudit = await models.sequelize.aosProductCategoriesAudit.update(updateAoProductCategoryAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objAoProductCategoryAudit = await models.mongoose.aosProductCategoriesAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateAoProductCategoryAudit}, {new: true});
    		}
    		return objAoProductCategoryAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductCategoryAuditByDataType(dataType, updateAoProductCategoryAudit) {
    	try {
    		let objAoProductCategoryAudit;
    		if(sql) {
    			objAoProductCategoryAudit = await models.sequelize.aosProductCategoriesAudit.findOne({where: { data_type: dataType }});
    			if (objAoProductCategoryAudit) {
    				objAoProductCategoryAudit = await models.sequelize.aosProductCategoriesAudit.update(updateAoProductCategoryAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objAoProductCategoryAudit = await models.mongoose.aosProductCategoriesAudit.findOneAndUpdate({data_type: dataType}, {$set: updateAoProductCategoryAudit}, {new: true});
    		}
    		return objAoProductCategoryAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductCategoryAuditByBeforeValueString(beforeValueString, updateAoProductCategoryAudit) {
    	try {
    		let objAoProductCategoryAudit;
    		if(sql) {
    			objAoProductCategoryAudit = await models.sequelize.aosProductCategoriesAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objAoProductCategoryAudit) {
    				objAoProductCategoryAudit = await models.sequelize.aosProductCategoriesAudit.update(updateAoProductCategoryAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objAoProductCategoryAudit = await models.mongoose.aosProductCategoriesAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateAoProductCategoryAudit}, {new: true});
    		}
    		return objAoProductCategoryAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductCategoryAuditByAfterValueString(afterValueString, updateAoProductCategoryAudit) {
    	try {
    		let objAoProductCategoryAudit;
    		if(sql) {
    			objAoProductCategoryAudit = await models.sequelize.aosProductCategoriesAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objAoProductCategoryAudit) {
    				objAoProductCategoryAudit = await models.sequelize.aosProductCategoriesAudit.update(updateAoProductCategoryAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objAoProductCategoryAudit = await models.mongoose.aosProductCategoriesAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateAoProductCategoryAudit}, {new: true});
    		}
    		return objAoProductCategoryAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductCategoryAuditByBeforeValueText(beforeValueText, updateAoProductCategoryAudit) {
    	try {
    		let objAoProductCategoryAudit;
    		if(sql) {
    			objAoProductCategoryAudit = await models.sequelize.aosProductCategoriesAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objAoProductCategoryAudit) {
    				objAoProductCategoryAudit = await models.sequelize.aosProductCategoriesAudit.update(updateAoProductCategoryAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objAoProductCategoryAudit = await models.mongoose.aosProductCategoriesAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateAoProductCategoryAudit}, {new: true});
    		}
    		return objAoProductCategoryAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductCategoryAuditByAfterValueText(afterValueText, updateAoProductCategoryAudit) {
    	try {
    		let objAoProductCategoryAudit;
    		if(sql) {
    			objAoProductCategoryAudit = await models.sequelize.aosProductCategoriesAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objAoProductCategoryAudit) {
    				objAoProductCategoryAudit = await models.sequelize.aosProductCategoriesAudit.update(updateAoProductCategoryAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objAoProductCategoryAudit = await models.mongoose.aosProductCategoriesAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateAoProductCategoryAudit}, {new: true});
    		}
    		return objAoProductCategoryAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductCategoryAuditByDateCreated(dateCreated, updateAoProductCategoryAudit) {
    	try {
    		let objAoProductCategoryAudit;
    		if(sql) {
    			objAoProductCategoryAudit = await models.sequelize.aosProductCategoriesAudit.findOne({where: { date_created: dateCreated }});
    			if (objAoProductCategoryAudit) {
    				objAoProductCategoryAudit = await models.sequelize.aosProductCategoriesAudit.update(updateAoProductCategoryAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objAoProductCategoryAudit = await models.mongoose.aosProductCategoriesAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateAoProductCategoryAudit}, {new: true});
    		}
    		return objAoProductCategoryAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductCategoryAuditByParentId(parentId, updateAoProductCategoryAudit) {
    	try {
    		let objAoProductCategoryAudit;
    		if(sql) {
    			objAoProductCategoryAudit = await models.sequelize.aosProductCategoriesAudit.findOne({where: { parent_id: parentId }});
    			if (objAoProductCategoryAudit) {
    				objAoProductCategoryAudit = await models.sequelize.aosProductCategoriesAudit.update(updateAoProductCategoryAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objAoProductCategoryAudit = await models.mongoose.aosProductCategoriesAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateAoProductCategoryAudit}, {new: true});
    		}
    		return objAoProductCategoryAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AoProductCategoryAuditService;
//</es-section>
