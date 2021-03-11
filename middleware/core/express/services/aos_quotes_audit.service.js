/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:21 GMT-0400 (Bolivia Time)
 * Time: 14:56:21
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:21 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:21
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

class AoQuoteAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAosQuotesAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aosQuotesAudit.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aosQuotesAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAosQuotesAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aosQuotesAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aosQuotesAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAoQuoteAudit(newAoQuoteAudit) {
		try {
			let objAoQuoteAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aosQuotesAudit.primaryKeys.id.type.toString())) {
			    newAoQuoteAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAoQuoteAudit = await models.sequelize.aosQuotesAudit.create(newAoQuoteAudit);
			} else {
				objAoQuoteAudit = new models.mongoose.aosQuotesAudit(newAoQuoteAudit);
				await objAoQuoteAudit.save();
			}
			return objAoQuoteAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateAoQuoteAudit(id, updateAoQuoteAudit) {
		try {
			let objAoQuoteAudit;
			if(sql) {
				objAoQuoteAudit = await models.sequelize.aosQuotesAudit.findOne({where: { id: util.Char(id) }});
				if (objAoQuoteAudit) {
					await models.sequelize.aosQuotesAudit.update(updateAoQuoteAudit, { where: { id: util.Char(id) } });
					objAoQuoteAudit = await models.sequelize.aosQuotesAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAoQuoteAudit._id;
				objAoQuoteAudit = await models.mongoose.aosQuotesAudit.findOneAndUpdate({id:id}, {$set: updateAoQuoteAudit}, {new: true});
			}
			return objAoQuoteAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getAAoQuoteAudit(id, query) {
		try {
			let objAoQuoteAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAoQuoteAudit = await models.sequelize.aosQuotesAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAoQuoteAudit = await models.mongoose.aosQuotesAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objAoQuoteAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAoQuoteAudit(id) {
		try {
			let objAoQuoteAudit;
			if(sql) {
				objAoQuoteAudit = await models.sequelize.aosQuotesAudit.findOne({ where: { id: util.Char(id) } });
				if (objAoQuoteAudit) {
					await models.sequelize.aosQuotesAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAoQuoteAudit = await models.mongoose.aosQuotesAudit.deleteOne({id:util.Char(id)});
			}
			return objAoQuoteAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAoQuoteAudit;
    		if(sql) {
    			objAoQuoteAudit = await models.sequelize.aosQuotesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAoQuoteAudit = await models.mongoose.aosQuotesAudit.findOne({id: id});
    		}
    		return objAoQuoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAoQuoteAudit;
    		if(sql) {
    			objAoQuoteAudit = await models.sequelize.aosQuotesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAoQuoteAudit = await models.mongoose.aosQuotesAudit.findOne({created_by: createdBy});
    		}
    		return objAoQuoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objAoQuoteAudit;
    		if(sql) {
    			objAoQuoteAudit = await models.sequelize.aosQuotesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objAoQuoteAudit = await models.mongoose.aosQuotesAudit.findOne({field_name: fieldName});
    		}
    		return objAoQuoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objAoQuoteAudit;
    		if(sql) {
    			objAoQuoteAudit = await models.sequelize.aosQuotesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objAoQuoteAudit = await models.mongoose.aosQuotesAudit.findOne({data_type: dataType});
    		}
    		return objAoQuoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objAoQuoteAudit;
    		if(sql) {
    			objAoQuoteAudit = await models.sequelize.aosQuotesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objAoQuoteAudit = await models.mongoose.aosQuotesAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objAoQuoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objAoQuoteAudit;
    		if(sql) {
    			objAoQuoteAudit = await models.sequelize.aosQuotesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objAoQuoteAudit = await models.mongoose.aosQuotesAudit.findOne({after_value_string: afterValueString});
    		}
    		return objAoQuoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objAoQuoteAudit;
    		if(sql) {
    			objAoQuoteAudit = await models.sequelize.aosQuotesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objAoQuoteAudit = await models.mongoose.aosQuotesAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objAoQuoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objAoQuoteAudit;
    		if(sql) {
    			objAoQuoteAudit = await models.sequelize.aosQuotesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objAoQuoteAudit = await models.mongoose.aosQuotesAudit.findOne({after_value_text: afterValueText});
    		}
    		return objAoQuoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objAoQuoteAudit;
    		if(sql) {
    			objAoQuoteAudit = await models.sequelize.aosQuotesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objAoQuoteAudit = await models.mongoose.aosQuotesAudit.findOne({date_created: dateCreated});
    		}
    		return objAoQuoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objAoQuoteAudit;
    		if(sql) {
    			objAoQuoteAudit = await models.sequelize.aosQuotesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objAoQuoteAudit = await models.mongoose.aosQuotesAudit.findOne({parent_id: parentId});
    		}
    		return objAoQuoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAoQuoteAuditById(id, updateAoQuoteAudit) {
    	try {
    		let objAoQuoteAudit;
    		if(sql) {
    			objAoQuoteAudit = await models.sequelize.aosQuotesAudit.findOne({where: { id: id }});
    			if (objAoQuoteAudit) {
    				objAoQuoteAudit = await models.sequelize.aosQuotesAudit.update(updateAoQuoteAudit, { where: { id: id } });
    			}
    		} else {
    			objAoQuoteAudit = await models.mongoose.aosQuotesAudit.findOneAndUpdate({id: id}, {$set: updateAoQuoteAudit}, {new: true});
    		}
    		return objAoQuoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteAuditByCreatedBy(createdBy, updateAoQuoteAudit) {
    	try {
    		let objAoQuoteAudit;
    		if(sql) {
    			objAoQuoteAudit = await models.sequelize.aosQuotesAudit.findOne({where: { created_by: createdBy }});
    			if (objAoQuoteAudit) {
    				objAoQuoteAudit = await models.sequelize.aosQuotesAudit.update(updateAoQuoteAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAoQuoteAudit = await models.mongoose.aosQuotesAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateAoQuoteAudit}, {new: true});
    		}
    		return objAoQuoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteAuditByFieldName(fieldName, updateAoQuoteAudit) {
    	try {
    		let objAoQuoteAudit;
    		if(sql) {
    			objAoQuoteAudit = await models.sequelize.aosQuotesAudit.findOne({where: { field_name: fieldName }});
    			if (objAoQuoteAudit) {
    				objAoQuoteAudit = await models.sequelize.aosQuotesAudit.update(updateAoQuoteAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objAoQuoteAudit = await models.mongoose.aosQuotesAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateAoQuoteAudit}, {new: true});
    		}
    		return objAoQuoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteAuditByDataType(dataType, updateAoQuoteAudit) {
    	try {
    		let objAoQuoteAudit;
    		if(sql) {
    			objAoQuoteAudit = await models.sequelize.aosQuotesAudit.findOne({where: { data_type: dataType }});
    			if (objAoQuoteAudit) {
    				objAoQuoteAudit = await models.sequelize.aosQuotesAudit.update(updateAoQuoteAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objAoQuoteAudit = await models.mongoose.aosQuotesAudit.findOneAndUpdate({data_type: dataType}, {$set: updateAoQuoteAudit}, {new: true});
    		}
    		return objAoQuoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteAuditByBeforeValueString(beforeValueString, updateAoQuoteAudit) {
    	try {
    		let objAoQuoteAudit;
    		if(sql) {
    			objAoQuoteAudit = await models.sequelize.aosQuotesAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objAoQuoteAudit) {
    				objAoQuoteAudit = await models.sequelize.aosQuotesAudit.update(updateAoQuoteAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objAoQuoteAudit = await models.mongoose.aosQuotesAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateAoQuoteAudit}, {new: true});
    		}
    		return objAoQuoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteAuditByAfterValueString(afterValueString, updateAoQuoteAudit) {
    	try {
    		let objAoQuoteAudit;
    		if(sql) {
    			objAoQuoteAudit = await models.sequelize.aosQuotesAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objAoQuoteAudit) {
    				objAoQuoteAudit = await models.sequelize.aosQuotesAudit.update(updateAoQuoteAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objAoQuoteAudit = await models.mongoose.aosQuotesAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateAoQuoteAudit}, {new: true});
    		}
    		return objAoQuoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteAuditByBeforeValueText(beforeValueText, updateAoQuoteAudit) {
    	try {
    		let objAoQuoteAudit;
    		if(sql) {
    			objAoQuoteAudit = await models.sequelize.aosQuotesAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objAoQuoteAudit) {
    				objAoQuoteAudit = await models.sequelize.aosQuotesAudit.update(updateAoQuoteAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objAoQuoteAudit = await models.mongoose.aosQuotesAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateAoQuoteAudit}, {new: true});
    		}
    		return objAoQuoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteAuditByAfterValueText(afterValueText, updateAoQuoteAudit) {
    	try {
    		let objAoQuoteAudit;
    		if(sql) {
    			objAoQuoteAudit = await models.sequelize.aosQuotesAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objAoQuoteAudit) {
    				objAoQuoteAudit = await models.sequelize.aosQuotesAudit.update(updateAoQuoteAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objAoQuoteAudit = await models.mongoose.aosQuotesAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateAoQuoteAudit}, {new: true});
    		}
    		return objAoQuoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteAuditByDateCreated(dateCreated, updateAoQuoteAudit) {
    	try {
    		let objAoQuoteAudit;
    		if(sql) {
    			objAoQuoteAudit = await models.sequelize.aosQuotesAudit.findOne({where: { date_created: dateCreated }});
    			if (objAoQuoteAudit) {
    				objAoQuoteAudit = await models.sequelize.aosQuotesAudit.update(updateAoQuoteAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objAoQuoteAudit = await models.mongoose.aosQuotesAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateAoQuoteAudit}, {new: true});
    		}
    		return objAoQuoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteAuditByParentId(parentId, updateAoQuoteAudit) {
    	try {
    		let objAoQuoteAudit;
    		if(sql) {
    			objAoQuoteAudit = await models.sequelize.aosQuotesAudit.findOne({where: { parent_id: parentId }});
    			if (objAoQuoteAudit) {
    				objAoQuoteAudit = await models.sequelize.aosQuotesAudit.update(updateAoQuoteAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objAoQuoteAudit = await models.mongoose.aosQuotesAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateAoQuoteAudit}, {new: true});
    		}
    		return objAoQuoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AoQuoteAuditService;
//</es-section>
