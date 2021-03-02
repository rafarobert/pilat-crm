/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:00 GMT-0400 (Bolivia Time)
 * Time: 14:1:0
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:00 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:0
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

class JjwgAddresCacheAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllJjwgAddressCacheAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.jjwgAddressCacheAudit.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.jjwgAddressCacheAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllJjwgAddressCacheAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.jjwgAddressCacheAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.jjwgAddressCacheAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addJjwgAddresCacheAudit(newJjwgAddresCacheAudit) {
		try {
			let objJjwgAddresCacheAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.jjwgAddressCacheAudit.primaryKeys.id.type.toString())) {
			    newJjwgAddresCacheAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objJjwgAddresCacheAudit = await models.sequelize.jjwgAddressCacheAudit.create(newJjwgAddresCacheAudit);
			} else {
				objJjwgAddresCacheAudit = new models.mongoose.jjwgAddressCacheAudit(newJjwgAddresCacheAudit);
				await objJjwgAddresCacheAudit.save();
			}
			return objJjwgAddresCacheAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateJjwgAddresCacheAudit(id, updateJjwgAddresCacheAudit) {
		try {
			let objJjwgAddresCacheAudit;
			if(sql) {
				objJjwgAddresCacheAudit = await models.sequelize.jjwgAddressCacheAudit.findOne({where: { id: util.Char(id) }});
				if (objJjwgAddresCacheAudit) {
					await models.sequelize.jjwgAddressCacheAudit.update(updateJjwgAddresCacheAudit, { where: { id: util.Char(id) } });
					objJjwgAddresCacheAudit = await models.sequelize.jjwgAddressCacheAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateJjwgAddresCacheAudit._id;
				objJjwgAddresCacheAudit = await models.mongoose.jjwgAddressCacheAudit.findOneAndUpdate({id:id}, {$set: updateJjwgAddresCacheAudit}, {new: true});
			}
			return objJjwgAddresCacheAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getAJjwgAddresCacheAudit(id, query) {
		try {
			let objJjwgAddresCacheAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objJjwgAddresCacheAudit = await models.sequelize.jjwgAddressCacheAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objJjwgAddresCacheAudit = await models.mongoose.jjwgAddressCacheAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objJjwgAddresCacheAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteJjwgAddresCacheAudit(id) {
		try {
			let objJjwgAddresCacheAudit;
			if(sql) {
				objJjwgAddresCacheAudit = await models.sequelize.jjwgAddressCacheAudit.findOne({ where: { id: util.Char(id) } });
				if (objJjwgAddresCacheAudit) {
					await models.sequelize.jjwgAddressCacheAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objJjwgAddresCacheAudit = await models.mongoose.jjwgAddressCacheAudit.deleteOne({id:util.Char(id)});
			}
			return objJjwgAddresCacheAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objJjwgAddresCacheAudit;
    		if(sql) {
    			objJjwgAddresCacheAudit = await models.sequelize.jjwgAddressCacheAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objJjwgAddresCacheAudit = await models.mongoose.jjwgAddressCacheAudit.findOne({id: id});
    		}
    		return objJjwgAddresCacheAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objJjwgAddresCacheAudit;
    		if(sql) {
    			objJjwgAddresCacheAudit = await models.sequelize.jjwgAddressCacheAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objJjwgAddresCacheAudit = await models.mongoose.jjwgAddressCacheAudit.findOne({created_by: createdBy});
    		}
    		return objJjwgAddresCacheAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objJjwgAddresCacheAudit;
    		if(sql) {
    			objJjwgAddresCacheAudit = await models.sequelize.jjwgAddressCacheAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objJjwgAddresCacheAudit = await models.mongoose.jjwgAddressCacheAudit.findOne({field_name: fieldName});
    		}
    		return objJjwgAddresCacheAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objJjwgAddresCacheAudit;
    		if(sql) {
    			objJjwgAddresCacheAudit = await models.sequelize.jjwgAddressCacheAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objJjwgAddresCacheAudit = await models.mongoose.jjwgAddressCacheAudit.findOne({data_type: dataType});
    		}
    		return objJjwgAddresCacheAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objJjwgAddresCacheAudit;
    		if(sql) {
    			objJjwgAddresCacheAudit = await models.sequelize.jjwgAddressCacheAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objJjwgAddresCacheAudit = await models.mongoose.jjwgAddressCacheAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objJjwgAddresCacheAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objJjwgAddresCacheAudit;
    		if(sql) {
    			objJjwgAddresCacheAudit = await models.sequelize.jjwgAddressCacheAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objJjwgAddresCacheAudit = await models.mongoose.jjwgAddressCacheAudit.findOne({after_value_string: afterValueString});
    		}
    		return objJjwgAddresCacheAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objJjwgAddresCacheAudit;
    		if(sql) {
    			objJjwgAddresCacheAudit = await models.sequelize.jjwgAddressCacheAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objJjwgAddresCacheAudit = await models.mongoose.jjwgAddressCacheAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objJjwgAddresCacheAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objJjwgAddresCacheAudit;
    		if(sql) {
    			objJjwgAddresCacheAudit = await models.sequelize.jjwgAddressCacheAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objJjwgAddresCacheAudit = await models.mongoose.jjwgAddressCacheAudit.findOne({after_value_text: afterValueText});
    		}
    		return objJjwgAddresCacheAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objJjwgAddresCacheAudit;
    		if(sql) {
    			objJjwgAddresCacheAudit = await models.sequelize.jjwgAddressCacheAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objJjwgAddresCacheAudit = await models.mongoose.jjwgAddressCacheAudit.findOne({date_created: dateCreated});
    		}
    		return objJjwgAddresCacheAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objJjwgAddresCacheAudit;
    		if(sql) {
    			objJjwgAddresCacheAudit = await models.sequelize.jjwgAddressCacheAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objJjwgAddresCacheAudit = await models.mongoose.jjwgAddressCacheAudit.findOne({parent_id: parentId});
    		}
    		return objJjwgAddresCacheAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateJjwgAddresCacheAuditById(id, updateJjwgAddresCacheAudit) {
    	try {
    		let objJjwgAddresCacheAudit;
    		if(sql) {
    			objJjwgAddresCacheAudit = await models.sequelize.jjwgAddressCacheAudit.findOne({where: { id: id }});
    			if (objJjwgAddresCacheAudit) {
    				objJjwgAddresCacheAudit = await models.sequelize.jjwgAddressCacheAudit.update(updateJjwgAddresCacheAudit, { where: { id: id } });
    			}
    		} else {
    			objJjwgAddresCacheAudit = await models.mongoose.jjwgAddressCacheAudit.findOneAndUpdate({id: id}, {$set: updateJjwgAddresCacheAudit}, {new: true});
    		}
    		return objJjwgAddresCacheAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgAddresCacheAuditByCreatedBy(createdBy, updateJjwgAddresCacheAudit) {
    	try {
    		let objJjwgAddresCacheAudit;
    		if(sql) {
    			objJjwgAddresCacheAudit = await models.sequelize.jjwgAddressCacheAudit.findOne({where: { created_by: createdBy }});
    			if (objJjwgAddresCacheAudit) {
    				objJjwgAddresCacheAudit = await models.sequelize.jjwgAddressCacheAudit.update(updateJjwgAddresCacheAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objJjwgAddresCacheAudit = await models.mongoose.jjwgAddressCacheAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateJjwgAddresCacheAudit}, {new: true});
    		}
    		return objJjwgAddresCacheAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgAddresCacheAuditByFieldName(fieldName, updateJjwgAddresCacheAudit) {
    	try {
    		let objJjwgAddresCacheAudit;
    		if(sql) {
    			objJjwgAddresCacheAudit = await models.sequelize.jjwgAddressCacheAudit.findOne({where: { field_name: fieldName }});
    			if (objJjwgAddresCacheAudit) {
    				objJjwgAddresCacheAudit = await models.sequelize.jjwgAddressCacheAudit.update(updateJjwgAddresCacheAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objJjwgAddresCacheAudit = await models.mongoose.jjwgAddressCacheAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateJjwgAddresCacheAudit}, {new: true});
    		}
    		return objJjwgAddresCacheAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgAddresCacheAuditByDataType(dataType, updateJjwgAddresCacheAudit) {
    	try {
    		let objJjwgAddresCacheAudit;
    		if(sql) {
    			objJjwgAddresCacheAudit = await models.sequelize.jjwgAddressCacheAudit.findOne({where: { data_type: dataType }});
    			if (objJjwgAddresCacheAudit) {
    				objJjwgAddresCacheAudit = await models.sequelize.jjwgAddressCacheAudit.update(updateJjwgAddresCacheAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objJjwgAddresCacheAudit = await models.mongoose.jjwgAddressCacheAudit.findOneAndUpdate({data_type: dataType}, {$set: updateJjwgAddresCacheAudit}, {new: true});
    		}
    		return objJjwgAddresCacheAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgAddresCacheAuditByBeforeValueString(beforeValueString, updateJjwgAddresCacheAudit) {
    	try {
    		let objJjwgAddresCacheAudit;
    		if(sql) {
    			objJjwgAddresCacheAudit = await models.sequelize.jjwgAddressCacheAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objJjwgAddresCacheAudit) {
    				objJjwgAddresCacheAudit = await models.sequelize.jjwgAddressCacheAudit.update(updateJjwgAddresCacheAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objJjwgAddresCacheAudit = await models.mongoose.jjwgAddressCacheAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateJjwgAddresCacheAudit}, {new: true});
    		}
    		return objJjwgAddresCacheAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgAddresCacheAuditByAfterValueString(afterValueString, updateJjwgAddresCacheAudit) {
    	try {
    		let objJjwgAddresCacheAudit;
    		if(sql) {
    			objJjwgAddresCacheAudit = await models.sequelize.jjwgAddressCacheAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objJjwgAddresCacheAudit) {
    				objJjwgAddresCacheAudit = await models.sequelize.jjwgAddressCacheAudit.update(updateJjwgAddresCacheAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objJjwgAddresCacheAudit = await models.mongoose.jjwgAddressCacheAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateJjwgAddresCacheAudit}, {new: true});
    		}
    		return objJjwgAddresCacheAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgAddresCacheAuditByBeforeValueText(beforeValueText, updateJjwgAddresCacheAudit) {
    	try {
    		let objJjwgAddresCacheAudit;
    		if(sql) {
    			objJjwgAddresCacheAudit = await models.sequelize.jjwgAddressCacheAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objJjwgAddresCacheAudit) {
    				objJjwgAddresCacheAudit = await models.sequelize.jjwgAddressCacheAudit.update(updateJjwgAddresCacheAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objJjwgAddresCacheAudit = await models.mongoose.jjwgAddressCacheAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateJjwgAddresCacheAudit}, {new: true});
    		}
    		return objJjwgAddresCacheAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgAddresCacheAuditByAfterValueText(afterValueText, updateJjwgAddresCacheAudit) {
    	try {
    		let objJjwgAddresCacheAudit;
    		if(sql) {
    			objJjwgAddresCacheAudit = await models.sequelize.jjwgAddressCacheAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objJjwgAddresCacheAudit) {
    				objJjwgAddresCacheAudit = await models.sequelize.jjwgAddressCacheAudit.update(updateJjwgAddresCacheAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objJjwgAddresCacheAudit = await models.mongoose.jjwgAddressCacheAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateJjwgAddresCacheAudit}, {new: true});
    		}
    		return objJjwgAddresCacheAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgAddresCacheAuditByDateCreated(dateCreated, updateJjwgAddresCacheAudit) {
    	try {
    		let objJjwgAddresCacheAudit;
    		if(sql) {
    			objJjwgAddresCacheAudit = await models.sequelize.jjwgAddressCacheAudit.findOne({where: { date_created: dateCreated }});
    			if (objJjwgAddresCacheAudit) {
    				objJjwgAddresCacheAudit = await models.sequelize.jjwgAddressCacheAudit.update(updateJjwgAddresCacheAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objJjwgAddresCacheAudit = await models.mongoose.jjwgAddressCacheAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateJjwgAddresCacheAudit}, {new: true});
    		}
    		return objJjwgAddresCacheAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgAddresCacheAuditByParentId(parentId, updateJjwgAddresCacheAudit) {
    	try {
    		let objJjwgAddresCacheAudit;
    		if(sql) {
    			objJjwgAddresCacheAudit = await models.sequelize.jjwgAddressCacheAudit.findOne({where: { parent_id: parentId }});
    			if (objJjwgAddresCacheAudit) {
    				objJjwgAddresCacheAudit = await models.sequelize.jjwgAddressCacheAudit.update(updateJjwgAddresCacheAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objJjwgAddresCacheAudit = await models.mongoose.jjwgAddressCacheAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateJjwgAddresCacheAudit}, {new: true});
    		}
    		return objJjwgAddresCacheAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = JjwgAddresCacheAuditService;
//</es-section>
