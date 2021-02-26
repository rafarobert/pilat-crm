/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:19 GMT-0400 (Bolivia Time)
 * Time: 0:22:19
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:19 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:19
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

class AoProductAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAosProductsAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aosProductsAudit.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aosProductsAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAosProductsAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aosProductsAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aosProductsAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAoProductAudit(newAoProductAudit) {
		try {
			let objAoProductAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aosProductsAudit.primaryKeys.id.type.toString())) {
			    newAoProductAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAoProductAudit = await models.sequelize.aosProductsAudit.create(newAoProductAudit);
			} else {
				objAoProductAudit = new models.mongoose.aosProductsAudit(newAoProductAudit);
				await objAoProductAudit.save();
			}
			return objAoProductAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateAoProductAudit(id, updateAoProductAudit) {
		try {
			let objAoProductAudit;
			if(sql) {
				objAoProductAudit = await models.sequelize.aosProductsAudit.findOne({where: { id: util.Char(id) }});
				if (objAoProductAudit) {
					await models.sequelize.aosProductsAudit.update(updateAoProductAudit, { where: { id: util.Char(id) } });
					objAoProductAudit = await models.sequelize.aosProductsAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAoProductAudit._id;
				objAoProductAudit = await models.mongoose.aosProductsAudit.findOneAndUpdate({id:id}, {$set: updateAoProductAudit}, {new: true});
			}
			return objAoProductAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getAAoProductAudit(id, query) {
		try {
			let objAoProductAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAoProductAudit = await models.sequelize.aosProductsAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAoProductAudit = await models.mongoose.aosProductsAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objAoProductAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAoProductAudit(id) {
		try {
			let objAoProductAudit;
			if(sql) {
				objAoProductAudit = await models.sequelize.aosProductsAudit.findOne({ where: { id: util.Char(id) } });
				if (objAoProductAudit) {
					await models.sequelize.aosProductsAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAoProductAudit = await models.mongoose.aosProductsAudit.deleteOne({id:util.Char(id)});
			}
			return objAoProductAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAoProductAudit;
    		if(sql) {
    			objAoProductAudit = await models.sequelize.aosProductsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAoProductAudit = await models.mongoose.aosProductsAudit.findOne({id: id});
    		}
    		return objAoProductAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAoProductAudit;
    		if(sql) {
    			objAoProductAudit = await models.sequelize.aosProductsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAoProductAudit = await models.mongoose.aosProductsAudit.findOne({created_by: createdBy});
    		}
    		return objAoProductAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objAoProductAudit;
    		if(sql) {
    			objAoProductAudit = await models.sequelize.aosProductsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objAoProductAudit = await models.mongoose.aosProductsAudit.findOne({field_name: fieldName});
    		}
    		return objAoProductAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objAoProductAudit;
    		if(sql) {
    			objAoProductAudit = await models.sequelize.aosProductsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objAoProductAudit = await models.mongoose.aosProductsAudit.findOne({data_type: dataType});
    		}
    		return objAoProductAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objAoProductAudit;
    		if(sql) {
    			objAoProductAudit = await models.sequelize.aosProductsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objAoProductAudit = await models.mongoose.aosProductsAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objAoProductAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objAoProductAudit;
    		if(sql) {
    			objAoProductAudit = await models.sequelize.aosProductsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objAoProductAudit = await models.mongoose.aosProductsAudit.findOne({after_value_string: afterValueString});
    		}
    		return objAoProductAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objAoProductAudit;
    		if(sql) {
    			objAoProductAudit = await models.sequelize.aosProductsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objAoProductAudit = await models.mongoose.aosProductsAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objAoProductAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objAoProductAudit;
    		if(sql) {
    			objAoProductAudit = await models.sequelize.aosProductsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objAoProductAudit = await models.mongoose.aosProductsAudit.findOne({after_value_text: afterValueText});
    		}
    		return objAoProductAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objAoProductAudit;
    		if(sql) {
    			objAoProductAudit = await models.sequelize.aosProductsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objAoProductAudit = await models.mongoose.aosProductsAudit.findOne({date_created: dateCreated});
    		}
    		return objAoProductAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objAoProductAudit;
    		if(sql) {
    			objAoProductAudit = await models.sequelize.aosProductsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objAoProductAudit = await models.mongoose.aosProductsAudit.findOne({parent_id: parentId});
    		}
    		return objAoProductAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAoProductAuditById(id, updateAoProductAudit) {
    	try {
    		let objAoProductAudit;
    		if(sql) {
    			objAoProductAudit = await models.sequelize.aosProductsAudit.findOne({where: { id: id }});
    			if (objAoProductAudit) {
    				objAoProductAudit = await models.sequelize.aosProductsAudit.update(updateAoProductAudit, { where: { id: id } });
    			}
    		} else {
    			objAoProductAudit = await models.mongoose.aosProductsAudit.findOneAndUpdate({id: id}, {$set: updateAoProductAudit}, {new: true});
    		}
    		return objAoProductAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductAuditByCreatedBy(createdBy, updateAoProductAudit) {
    	try {
    		let objAoProductAudit;
    		if(sql) {
    			objAoProductAudit = await models.sequelize.aosProductsAudit.findOne({where: { created_by: createdBy }});
    			if (objAoProductAudit) {
    				objAoProductAudit = await models.sequelize.aosProductsAudit.update(updateAoProductAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAoProductAudit = await models.mongoose.aosProductsAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateAoProductAudit}, {new: true});
    		}
    		return objAoProductAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductAuditByFieldName(fieldName, updateAoProductAudit) {
    	try {
    		let objAoProductAudit;
    		if(sql) {
    			objAoProductAudit = await models.sequelize.aosProductsAudit.findOne({where: { field_name: fieldName }});
    			if (objAoProductAudit) {
    				objAoProductAudit = await models.sequelize.aosProductsAudit.update(updateAoProductAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objAoProductAudit = await models.mongoose.aosProductsAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateAoProductAudit}, {new: true});
    		}
    		return objAoProductAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductAuditByDataType(dataType, updateAoProductAudit) {
    	try {
    		let objAoProductAudit;
    		if(sql) {
    			objAoProductAudit = await models.sequelize.aosProductsAudit.findOne({where: { data_type: dataType }});
    			if (objAoProductAudit) {
    				objAoProductAudit = await models.sequelize.aosProductsAudit.update(updateAoProductAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objAoProductAudit = await models.mongoose.aosProductsAudit.findOneAndUpdate({data_type: dataType}, {$set: updateAoProductAudit}, {new: true});
    		}
    		return objAoProductAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductAuditByBeforeValueString(beforeValueString, updateAoProductAudit) {
    	try {
    		let objAoProductAudit;
    		if(sql) {
    			objAoProductAudit = await models.sequelize.aosProductsAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objAoProductAudit) {
    				objAoProductAudit = await models.sequelize.aosProductsAudit.update(updateAoProductAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objAoProductAudit = await models.mongoose.aosProductsAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateAoProductAudit}, {new: true});
    		}
    		return objAoProductAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductAuditByAfterValueString(afterValueString, updateAoProductAudit) {
    	try {
    		let objAoProductAudit;
    		if(sql) {
    			objAoProductAudit = await models.sequelize.aosProductsAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objAoProductAudit) {
    				objAoProductAudit = await models.sequelize.aosProductsAudit.update(updateAoProductAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objAoProductAudit = await models.mongoose.aosProductsAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateAoProductAudit}, {new: true});
    		}
    		return objAoProductAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductAuditByBeforeValueText(beforeValueText, updateAoProductAudit) {
    	try {
    		let objAoProductAudit;
    		if(sql) {
    			objAoProductAudit = await models.sequelize.aosProductsAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objAoProductAudit) {
    				objAoProductAudit = await models.sequelize.aosProductsAudit.update(updateAoProductAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objAoProductAudit = await models.mongoose.aosProductsAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateAoProductAudit}, {new: true});
    		}
    		return objAoProductAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductAuditByAfterValueText(afterValueText, updateAoProductAudit) {
    	try {
    		let objAoProductAudit;
    		if(sql) {
    			objAoProductAudit = await models.sequelize.aosProductsAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objAoProductAudit) {
    				objAoProductAudit = await models.sequelize.aosProductsAudit.update(updateAoProductAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objAoProductAudit = await models.mongoose.aosProductsAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateAoProductAudit}, {new: true});
    		}
    		return objAoProductAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductAuditByDateCreated(dateCreated, updateAoProductAudit) {
    	try {
    		let objAoProductAudit;
    		if(sql) {
    			objAoProductAudit = await models.sequelize.aosProductsAudit.findOne({where: { date_created: dateCreated }});
    			if (objAoProductAudit) {
    				objAoProductAudit = await models.sequelize.aosProductsAudit.update(updateAoProductAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objAoProductAudit = await models.mongoose.aosProductsAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateAoProductAudit}, {new: true});
    		}
    		return objAoProductAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductAuditByParentId(parentId, updateAoProductAudit) {
    	try {
    		let objAoProductAudit;
    		if(sql) {
    			objAoProductAudit = await models.sequelize.aosProductsAudit.findOne({where: { parent_id: parentId }});
    			if (objAoProductAudit) {
    				objAoProductAudit = await models.sequelize.aosProductsAudit.update(updateAoProductAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objAoProductAudit = await models.mongoose.aosProductsAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateAoProductAudit}, {new: true});
    		}
    		return objAoProductAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AoProductAuditService;
//</es-section>
