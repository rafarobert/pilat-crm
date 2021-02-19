/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:35:21 GMT-0400 (Bolivia Time)
 * Time: 18:35:21
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:35:21 GMT-0400 (Bolivia Time)
 * Last time updated: 18:35:21
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

class AccountAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAccountsAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.accountsAudit.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.accountsAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAccountsAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.accountsAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.accountsAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAccountAudit(newAccountAudit) {
		try {
			let objAccountAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.accountsAudit.primaryKeys.id.type.toString())) {
			    newAccountAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAccountAudit = await models.sequelize.accountsAudit.create(newAccountAudit);
			} else {
				objAccountAudit = new models.mongoose.accountsAudit(newAccountAudit);
				await objAccountAudit.save();
			}
			return objAccountAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateAccountAudit(id, updateAccountAudit) {
		try {
			let objAccountAudit;
			if(sql) {
				objAccountAudit = await models.sequelize.accountsAudit.findOne({where: { id: util.Char(id) }});
				if (objAccountAudit) {
					await models.sequelize.accountsAudit.update(updateAccountAudit, { where: { id: util.Char(id) } });
					objAccountAudit = await models.sequelize.accountsAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAccountAudit._id;
				objAccountAudit = await models.mongoose.accountsAudit.findOneAndUpdate({id:id}, {$set: updateAccountAudit}, {new: true});
			}
			return objAccountAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getAAccountAudit(id, query) {
		try {
			let objAccountAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAccountAudit = await models.sequelize.accountsAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAccountAudit = await models.mongoose.accountsAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objAccountAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAccountAudit(id) {
		try {
			let objAccountAudit;
			if(sql) {
				objAccountAudit = await models.sequelize.accountsAudit.findOne({ where: { id: util.Char(id) } });
				if (objAccountAudit) {
					await models.sequelize.accountsAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAccountAudit = await models.mongoose.accountsAudit.deleteOne({id:util.Char(id)});
			}
			return objAccountAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAccountAudit;
    		if(sql) {
    			objAccountAudit = await models.sequelize.accountsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAccountAudit = await models.mongoose.accountsAudit.findOne({id: id});
    		}
    		return objAccountAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAccountAudit;
    		if(sql) {
    			objAccountAudit = await models.sequelize.accountsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAccountAudit = await models.mongoose.accountsAudit.findOne({created_by: createdBy});
    		}
    		return objAccountAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objAccountAudit;
    		if(sql) {
    			objAccountAudit = await models.sequelize.accountsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objAccountAudit = await models.mongoose.accountsAudit.findOne({field_name: fieldName});
    		}
    		return objAccountAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objAccountAudit;
    		if(sql) {
    			objAccountAudit = await models.sequelize.accountsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objAccountAudit = await models.mongoose.accountsAudit.findOne({data_type: dataType});
    		}
    		return objAccountAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objAccountAudit;
    		if(sql) {
    			objAccountAudit = await models.sequelize.accountsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objAccountAudit = await models.mongoose.accountsAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objAccountAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objAccountAudit;
    		if(sql) {
    			objAccountAudit = await models.sequelize.accountsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objAccountAudit = await models.mongoose.accountsAudit.findOne({after_value_string: afterValueString});
    		}
    		return objAccountAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objAccountAudit;
    		if(sql) {
    			objAccountAudit = await models.sequelize.accountsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objAccountAudit = await models.mongoose.accountsAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objAccountAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objAccountAudit;
    		if(sql) {
    			objAccountAudit = await models.sequelize.accountsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objAccountAudit = await models.mongoose.accountsAudit.findOne({after_value_text: afterValueText});
    		}
    		return objAccountAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objAccountAudit;
    		if(sql) {
    			objAccountAudit = await models.sequelize.accountsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objAccountAudit = await models.mongoose.accountsAudit.findOne({date_created: dateCreated});
    		}
    		return objAccountAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objAccountAudit;
    		if(sql) {
    			objAccountAudit = await models.sequelize.accountsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objAccountAudit = await models.mongoose.accountsAudit.findOne({parent_id: parentId});
    		}
    		return objAccountAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAccountAuditById(id, updateAccountAudit) {
    	try {
    		let objAccountAudit;
    		if(sql) {
    			objAccountAudit = await models.sequelize.accountsAudit.findOne({where: { id: id }});
    			if (objAccountAudit) {
    				objAccountAudit = await models.sequelize.accountsAudit.update(updateAccountAudit, { where: { id: id } });
    			}
    		} else {
    			objAccountAudit = await models.mongoose.accountsAudit.findOneAndUpdate({id: id}, {$set: updateAccountAudit}, {new: true});
    		}
    		return objAccountAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountAuditByCreatedBy(createdBy, updateAccountAudit) {
    	try {
    		let objAccountAudit;
    		if(sql) {
    			objAccountAudit = await models.sequelize.accountsAudit.findOne({where: { created_by: createdBy }});
    			if (objAccountAudit) {
    				objAccountAudit = await models.sequelize.accountsAudit.update(updateAccountAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAccountAudit = await models.mongoose.accountsAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateAccountAudit}, {new: true});
    		}
    		return objAccountAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountAuditByFieldName(fieldName, updateAccountAudit) {
    	try {
    		let objAccountAudit;
    		if(sql) {
    			objAccountAudit = await models.sequelize.accountsAudit.findOne({where: { field_name: fieldName }});
    			if (objAccountAudit) {
    				objAccountAudit = await models.sequelize.accountsAudit.update(updateAccountAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objAccountAudit = await models.mongoose.accountsAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateAccountAudit}, {new: true});
    		}
    		return objAccountAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountAuditByDataType(dataType, updateAccountAudit) {
    	try {
    		let objAccountAudit;
    		if(sql) {
    			objAccountAudit = await models.sequelize.accountsAudit.findOne({where: { data_type: dataType }});
    			if (objAccountAudit) {
    				objAccountAudit = await models.sequelize.accountsAudit.update(updateAccountAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objAccountAudit = await models.mongoose.accountsAudit.findOneAndUpdate({data_type: dataType}, {$set: updateAccountAudit}, {new: true});
    		}
    		return objAccountAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountAuditByBeforeValueString(beforeValueString, updateAccountAudit) {
    	try {
    		let objAccountAudit;
    		if(sql) {
    			objAccountAudit = await models.sequelize.accountsAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objAccountAudit) {
    				objAccountAudit = await models.sequelize.accountsAudit.update(updateAccountAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objAccountAudit = await models.mongoose.accountsAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateAccountAudit}, {new: true});
    		}
    		return objAccountAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountAuditByAfterValueString(afterValueString, updateAccountAudit) {
    	try {
    		let objAccountAudit;
    		if(sql) {
    			objAccountAudit = await models.sequelize.accountsAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objAccountAudit) {
    				objAccountAudit = await models.sequelize.accountsAudit.update(updateAccountAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objAccountAudit = await models.mongoose.accountsAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateAccountAudit}, {new: true});
    		}
    		return objAccountAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountAuditByBeforeValueText(beforeValueText, updateAccountAudit) {
    	try {
    		let objAccountAudit;
    		if(sql) {
    			objAccountAudit = await models.sequelize.accountsAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objAccountAudit) {
    				objAccountAudit = await models.sequelize.accountsAudit.update(updateAccountAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objAccountAudit = await models.mongoose.accountsAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateAccountAudit}, {new: true});
    		}
    		return objAccountAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountAuditByAfterValueText(afterValueText, updateAccountAudit) {
    	try {
    		let objAccountAudit;
    		if(sql) {
    			objAccountAudit = await models.sequelize.accountsAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objAccountAudit) {
    				objAccountAudit = await models.sequelize.accountsAudit.update(updateAccountAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objAccountAudit = await models.mongoose.accountsAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateAccountAudit}, {new: true});
    		}
    		return objAccountAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountAuditByDateCreated(dateCreated, updateAccountAudit) {
    	try {
    		let objAccountAudit;
    		if(sql) {
    			objAccountAudit = await models.sequelize.accountsAudit.findOne({where: { date_created: dateCreated }});
    			if (objAccountAudit) {
    				objAccountAudit = await models.sequelize.accountsAudit.update(updateAccountAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objAccountAudit = await models.mongoose.accountsAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateAccountAudit}, {new: true});
    		}
    		return objAccountAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountAuditByParentId(parentId, updateAccountAudit) {
    	try {
    		let objAccountAudit;
    		if(sql) {
    			objAccountAudit = await models.sequelize.accountsAudit.findOne({where: { parent_id: parentId }});
    			if (objAccountAudit) {
    				objAccountAudit = await models.sequelize.accountsAudit.update(updateAccountAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objAccountAudit = await models.mongoose.accountsAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateAccountAudit}, {new: true});
    		}
    		return objAccountAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AccountAuditService;
//</es-section>
