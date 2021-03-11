/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:18 GMT-0400 (Bolivia Time)
 * Time: 14:56:18
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:18 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:18
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

class AoProductQuoteAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAosProductsQuotesAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aosProductsQuotesAudit.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['_id','ASC']],
                });
			} else {
				return await models.mongoose.aosProductsQuotesAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAosProductsQuotesAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aosProductsQuotesAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aosProductsQuotesAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAoProductQuoteAudit(newAoProductQuoteAudit) {
		try {
			let objAoProductQuoteAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aosProductsQuotesAudit.primaryKeys.id.type.toString())) {
			    newAoProductQuoteAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAoProductQuoteAudit = await models.sequelize.aosProductsQuotesAudit.create(newAoProductQuoteAudit);
			} else {
				objAoProductQuoteAudit = new models.mongoose.aosProductsQuotesAudit(newAoProductQuoteAudit);
				await objAoProductQuoteAudit.save();
			}
			return objAoProductQuoteAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateAoProductQuoteAudit(id, updateAoProductQuoteAudit) {
		try {
			let objAoProductQuoteAudit;
			if(sql) {
				objAoProductQuoteAudit = await models.sequelize.aosProductsQuotesAudit.findOne({where: { id: util.Char(id) }});
				if (objAoProductQuoteAudit) {
					await models.sequelize.aosProductsQuotesAudit.update(updateAoProductQuoteAudit, { where: { id: util.Char(id) } });
					objAoProductQuoteAudit = await models.sequelize.aosProductsQuotesAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAoProductQuoteAudit._id;
				objAoProductQuoteAudit = await models.mongoose.aosProductsQuotesAudit.findOneAndUpdate({id:id}, {$set: updateAoProductQuoteAudit}, {new: true});
			}
			return objAoProductQuoteAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getAAoProductQuoteAudit(id, query) {
		try {
			let objAoProductQuoteAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAoProductQuoteAudit = await models.sequelize.aosProductsQuotesAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAoProductQuoteAudit = await models.mongoose.aosProductsQuotesAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objAoProductQuoteAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAoProductQuoteAudit(id) {
		try {
			let objAoProductQuoteAudit;
			if(sql) {
				objAoProductQuoteAudit = await models.sequelize.aosProductsQuotesAudit.findOne({ where: { id: util.Char(id) } });
				if (objAoProductQuoteAudit) {
					await models.sequelize.aosProductsQuotesAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAoProductQuoteAudit = await models.mongoose.aosProductsQuotesAudit.deleteOne({id:util.Char(id)});
			}
			return objAoProductQuoteAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAoProductQuoteAudit;
    		if(sql) {
    			objAoProductQuoteAudit = await models.sequelize.aosProductsQuotesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAoProductQuoteAudit = await models.mongoose.aosProductsQuotesAudit.findOne({id: id});
    		}
    		return objAoProductQuoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAoProductQuoteAudit;
    		if(sql) {
    			objAoProductQuoteAudit = await models.sequelize.aosProductsQuotesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAoProductQuoteAudit = await models.mongoose.aosProductsQuotesAudit.findOne({created_by: createdBy});
    		}
    		return objAoProductQuoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objAoProductQuoteAudit;
    		if(sql) {
    			objAoProductQuoteAudit = await models.sequelize.aosProductsQuotesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objAoProductQuoteAudit = await models.mongoose.aosProductsQuotesAudit.findOne({field_name: fieldName});
    		}
    		return objAoProductQuoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objAoProductQuoteAudit;
    		if(sql) {
    			objAoProductQuoteAudit = await models.sequelize.aosProductsQuotesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objAoProductQuoteAudit = await models.mongoose.aosProductsQuotesAudit.findOne({data_type: dataType});
    		}
    		return objAoProductQuoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objAoProductQuoteAudit;
    		if(sql) {
    			objAoProductQuoteAudit = await models.sequelize.aosProductsQuotesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objAoProductQuoteAudit = await models.mongoose.aosProductsQuotesAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objAoProductQuoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objAoProductQuoteAudit;
    		if(sql) {
    			objAoProductQuoteAudit = await models.sequelize.aosProductsQuotesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objAoProductQuoteAudit = await models.mongoose.aosProductsQuotesAudit.findOne({after_value_string: afterValueString});
    		}
    		return objAoProductQuoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objAoProductQuoteAudit;
    		if(sql) {
    			objAoProductQuoteAudit = await models.sequelize.aosProductsQuotesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objAoProductQuoteAudit = await models.mongoose.aosProductsQuotesAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objAoProductQuoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objAoProductQuoteAudit;
    		if(sql) {
    			objAoProductQuoteAudit = await models.sequelize.aosProductsQuotesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objAoProductQuoteAudit = await models.mongoose.aosProductsQuotesAudit.findOne({after_value_text: afterValueText});
    		}
    		return objAoProductQuoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objAoProductQuoteAudit;
    		if(sql) {
    			objAoProductQuoteAudit = await models.sequelize.aosProductsQuotesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objAoProductQuoteAudit = await models.mongoose.aosProductsQuotesAudit.findOne({date_created: dateCreated});
    		}
    		return objAoProductQuoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objAoProductQuoteAudit;
    		if(sql) {
    			objAoProductQuoteAudit = await models.sequelize.aosProductsQuotesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objAoProductQuoteAudit = await models.mongoose.aosProductsQuotesAudit.findOne({parent_id: parentId});
    		}
    		return objAoProductQuoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAoProductQuoteAuditById(id, updateAoProductQuoteAudit) {
    	try {
    		let objAoProductQuoteAudit;
    		if(sql) {
    			objAoProductQuoteAudit = await models.sequelize.aosProductsQuotesAudit.findOne({where: { id: id }});
    			if (objAoProductQuoteAudit) {
    				objAoProductQuoteAudit = await models.sequelize.aosProductsQuotesAudit.update(updateAoProductQuoteAudit, { where: { id: id } });
    			}
    		} else {
    			objAoProductQuoteAudit = await models.mongoose.aosProductsQuotesAudit.findOneAndUpdate({id: id}, {$set: updateAoProductQuoteAudit}, {new: true});
    		}
    		return objAoProductQuoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductQuoteAuditByCreatedBy(createdBy, updateAoProductQuoteAudit) {
    	try {
    		let objAoProductQuoteAudit;
    		if(sql) {
    			objAoProductQuoteAudit = await models.sequelize.aosProductsQuotesAudit.findOne({where: { created_by: createdBy }});
    			if (objAoProductQuoteAudit) {
    				objAoProductQuoteAudit = await models.sequelize.aosProductsQuotesAudit.update(updateAoProductQuoteAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAoProductQuoteAudit = await models.mongoose.aosProductsQuotesAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateAoProductQuoteAudit}, {new: true});
    		}
    		return objAoProductQuoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductQuoteAuditByFieldName(fieldName, updateAoProductQuoteAudit) {
    	try {
    		let objAoProductQuoteAudit;
    		if(sql) {
    			objAoProductQuoteAudit = await models.sequelize.aosProductsQuotesAudit.findOne({where: { field_name: fieldName }});
    			if (objAoProductQuoteAudit) {
    				objAoProductQuoteAudit = await models.sequelize.aosProductsQuotesAudit.update(updateAoProductQuoteAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objAoProductQuoteAudit = await models.mongoose.aosProductsQuotesAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateAoProductQuoteAudit}, {new: true});
    		}
    		return objAoProductQuoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductQuoteAuditByDataType(dataType, updateAoProductQuoteAudit) {
    	try {
    		let objAoProductQuoteAudit;
    		if(sql) {
    			objAoProductQuoteAudit = await models.sequelize.aosProductsQuotesAudit.findOne({where: { data_type: dataType }});
    			if (objAoProductQuoteAudit) {
    				objAoProductQuoteAudit = await models.sequelize.aosProductsQuotesAudit.update(updateAoProductQuoteAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objAoProductQuoteAudit = await models.mongoose.aosProductsQuotesAudit.findOneAndUpdate({data_type: dataType}, {$set: updateAoProductQuoteAudit}, {new: true});
    		}
    		return objAoProductQuoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductQuoteAuditByBeforeValueString(beforeValueString, updateAoProductQuoteAudit) {
    	try {
    		let objAoProductQuoteAudit;
    		if(sql) {
    			objAoProductQuoteAudit = await models.sequelize.aosProductsQuotesAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objAoProductQuoteAudit) {
    				objAoProductQuoteAudit = await models.sequelize.aosProductsQuotesAudit.update(updateAoProductQuoteAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objAoProductQuoteAudit = await models.mongoose.aosProductsQuotesAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateAoProductQuoteAudit}, {new: true});
    		}
    		return objAoProductQuoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductQuoteAuditByAfterValueString(afterValueString, updateAoProductQuoteAudit) {
    	try {
    		let objAoProductQuoteAudit;
    		if(sql) {
    			objAoProductQuoteAudit = await models.sequelize.aosProductsQuotesAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objAoProductQuoteAudit) {
    				objAoProductQuoteAudit = await models.sequelize.aosProductsQuotesAudit.update(updateAoProductQuoteAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objAoProductQuoteAudit = await models.mongoose.aosProductsQuotesAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateAoProductQuoteAudit}, {new: true});
    		}
    		return objAoProductQuoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductQuoteAuditByBeforeValueText(beforeValueText, updateAoProductQuoteAudit) {
    	try {
    		let objAoProductQuoteAudit;
    		if(sql) {
    			objAoProductQuoteAudit = await models.sequelize.aosProductsQuotesAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objAoProductQuoteAudit) {
    				objAoProductQuoteAudit = await models.sequelize.aosProductsQuotesAudit.update(updateAoProductQuoteAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objAoProductQuoteAudit = await models.mongoose.aosProductsQuotesAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateAoProductQuoteAudit}, {new: true});
    		}
    		return objAoProductQuoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductQuoteAuditByAfterValueText(afterValueText, updateAoProductQuoteAudit) {
    	try {
    		let objAoProductQuoteAudit;
    		if(sql) {
    			objAoProductQuoteAudit = await models.sequelize.aosProductsQuotesAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objAoProductQuoteAudit) {
    				objAoProductQuoteAudit = await models.sequelize.aosProductsQuotesAudit.update(updateAoProductQuoteAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objAoProductQuoteAudit = await models.mongoose.aosProductsQuotesAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateAoProductQuoteAudit}, {new: true});
    		}
    		return objAoProductQuoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductQuoteAuditByDateCreated(dateCreated, updateAoProductQuoteAudit) {
    	try {
    		let objAoProductQuoteAudit;
    		if(sql) {
    			objAoProductQuoteAudit = await models.sequelize.aosProductsQuotesAudit.findOne({where: { date_created: dateCreated }});
    			if (objAoProductQuoteAudit) {
    				objAoProductQuoteAudit = await models.sequelize.aosProductsQuotesAudit.update(updateAoProductQuoteAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objAoProductQuoteAudit = await models.mongoose.aosProductsQuotesAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateAoProductQuoteAudit}, {new: true});
    		}
    		return objAoProductQuoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoProductQuoteAuditByParentId(parentId, updateAoProductQuoteAudit) {
    	try {
    		let objAoProductQuoteAudit;
    		if(sql) {
    			objAoProductQuoteAudit = await models.sequelize.aosProductsQuotesAudit.findOne({where: { parent_id: parentId }});
    			if (objAoProductQuoteAudit) {
    				objAoProductQuoteAudit = await models.sequelize.aosProductsQuotesAudit.update(updateAoProductQuoteAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objAoProductQuoteAudit = await models.mongoose.aosProductsQuotesAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateAoProductQuoteAudit}, {new: true});
    		}
    		return objAoProductQuoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AoProductQuoteAuditService;
//</es-section>
