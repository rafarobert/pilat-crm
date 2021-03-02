/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:30 GMT-0400 (Bolivia Time)
 * Time: 14:1:30
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:30 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:30
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

class SecuritygroupAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllSecuritygroupsAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.securitygroupsAudit.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.securitygroupsAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllSecuritygroupsAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.securitygroupsAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.securitygroupsAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addSecuritygroupAudit(newSecuritygroupAudit) {
		try {
			let objSecuritygroupAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.securitygroupsAudit.primaryKeys.id.type.toString())) {
			    newSecuritygroupAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objSecuritygroupAudit = await models.sequelize.securitygroupsAudit.create(newSecuritygroupAudit);
			} else {
				objSecuritygroupAudit = new models.mongoose.securitygroupsAudit(newSecuritygroupAudit);
				await objSecuritygroupAudit.save();
			}
			return objSecuritygroupAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateSecuritygroupAudit(id, updateSecuritygroupAudit) {
		try {
			let objSecuritygroupAudit;
			if(sql) {
				objSecuritygroupAudit = await models.sequelize.securitygroupsAudit.findOne({where: { id: util.Char(id) }});
				if (objSecuritygroupAudit) {
					await models.sequelize.securitygroupsAudit.update(updateSecuritygroupAudit, { where: { id: util.Char(id) } });
					objSecuritygroupAudit = await models.sequelize.securitygroupsAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateSecuritygroupAudit._id;
				objSecuritygroupAudit = await models.mongoose.securitygroupsAudit.findOneAndUpdate({id:id}, {$set: updateSecuritygroupAudit}, {new: true});
			}
			return objSecuritygroupAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getASecuritygroupAudit(id, query) {
		try {
			let objSecuritygroupAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objSecuritygroupAudit = await models.sequelize.securitygroupsAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objSecuritygroupAudit = await models.mongoose.securitygroupsAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objSecuritygroupAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteSecuritygroupAudit(id) {
		try {
			let objSecuritygroupAudit;
			if(sql) {
				objSecuritygroupAudit = await models.sequelize.securitygroupsAudit.findOne({ where: { id: util.Char(id) } });
				if (objSecuritygroupAudit) {
					await models.sequelize.securitygroupsAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objSecuritygroupAudit = await models.mongoose.securitygroupsAudit.deleteOne({id:util.Char(id)});
			}
			return objSecuritygroupAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objSecuritygroupAudit;
    		if(sql) {
    			objSecuritygroupAudit = await models.sequelize.securitygroupsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objSecuritygroupAudit = await models.mongoose.securitygroupsAudit.findOne({id: id});
    		}
    		return objSecuritygroupAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objSecuritygroupAudit;
    		if(sql) {
    			objSecuritygroupAudit = await models.sequelize.securitygroupsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objSecuritygroupAudit = await models.mongoose.securitygroupsAudit.findOne({created_by: createdBy});
    		}
    		return objSecuritygroupAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objSecuritygroupAudit;
    		if(sql) {
    			objSecuritygroupAudit = await models.sequelize.securitygroupsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objSecuritygroupAudit = await models.mongoose.securitygroupsAudit.findOne({field_name: fieldName});
    		}
    		return objSecuritygroupAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objSecuritygroupAudit;
    		if(sql) {
    			objSecuritygroupAudit = await models.sequelize.securitygroupsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objSecuritygroupAudit = await models.mongoose.securitygroupsAudit.findOne({data_type: dataType});
    		}
    		return objSecuritygroupAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objSecuritygroupAudit;
    		if(sql) {
    			objSecuritygroupAudit = await models.sequelize.securitygroupsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objSecuritygroupAudit = await models.mongoose.securitygroupsAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objSecuritygroupAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objSecuritygroupAudit;
    		if(sql) {
    			objSecuritygroupAudit = await models.sequelize.securitygroupsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objSecuritygroupAudit = await models.mongoose.securitygroupsAudit.findOne({after_value_string: afterValueString});
    		}
    		return objSecuritygroupAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objSecuritygroupAudit;
    		if(sql) {
    			objSecuritygroupAudit = await models.sequelize.securitygroupsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objSecuritygroupAudit = await models.mongoose.securitygroupsAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objSecuritygroupAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objSecuritygroupAudit;
    		if(sql) {
    			objSecuritygroupAudit = await models.sequelize.securitygroupsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objSecuritygroupAudit = await models.mongoose.securitygroupsAudit.findOne({after_value_text: afterValueText});
    		}
    		return objSecuritygroupAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objSecuritygroupAudit;
    		if(sql) {
    			objSecuritygroupAudit = await models.sequelize.securitygroupsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objSecuritygroupAudit = await models.mongoose.securitygroupsAudit.findOne({date_created: dateCreated});
    		}
    		return objSecuritygroupAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objSecuritygroupAudit;
    		if(sql) {
    			objSecuritygroupAudit = await models.sequelize.securitygroupsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objSecuritygroupAudit = await models.mongoose.securitygroupsAudit.findOne({parent_id: parentId});
    		}
    		return objSecuritygroupAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateSecuritygroupAuditById(id, updateSecuritygroupAudit) {
    	try {
    		let objSecuritygroupAudit;
    		if(sql) {
    			objSecuritygroupAudit = await models.sequelize.securitygroupsAudit.findOne({where: { id: id }});
    			if (objSecuritygroupAudit) {
    				objSecuritygroupAudit = await models.sequelize.securitygroupsAudit.update(updateSecuritygroupAudit, { where: { id: id } });
    			}
    		} else {
    			objSecuritygroupAudit = await models.mongoose.securitygroupsAudit.findOneAndUpdate({id: id}, {$set: updateSecuritygroupAudit}, {new: true});
    		}
    		return objSecuritygroupAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSecuritygroupAuditByCreatedBy(createdBy, updateSecuritygroupAudit) {
    	try {
    		let objSecuritygroupAudit;
    		if(sql) {
    			objSecuritygroupAudit = await models.sequelize.securitygroupsAudit.findOne({where: { created_by: createdBy }});
    			if (objSecuritygroupAudit) {
    				objSecuritygroupAudit = await models.sequelize.securitygroupsAudit.update(updateSecuritygroupAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objSecuritygroupAudit = await models.mongoose.securitygroupsAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateSecuritygroupAudit}, {new: true});
    		}
    		return objSecuritygroupAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSecuritygroupAuditByFieldName(fieldName, updateSecuritygroupAudit) {
    	try {
    		let objSecuritygroupAudit;
    		if(sql) {
    			objSecuritygroupAudit = await models.sequelize.securitygroupsAudit.findOne({where: { field_name: fieldName }});
    			if (objSecuritygroupAudit) {
    				objSecuritygroupAudit = await models.sequelize.securitygroupsAudit.update(updateSecuritygroupAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objSecuritygroupAudit = await models.mongoose.securitygroupsAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateSecuritygroupAudit}, {new: true});
    		}
    		return objSecuritygroupAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSecuritygroupAuditByDataType(dataType, updateSecuritygroupAudit) {
    	try {
    		let objSecuritygroupAudit;
    		if(sql) {
    			objSecuritygroupAudit = await models.sequelize.securitygroupsAudit.findOne({where: { data_type: dataType }});
    			if (objSecuritygroupAudit) {
    				objSecuritygroupAudit = await models.sequelize.securitygroupsAudit.update(updateSecuritygroupAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objSecuritygroupAudit = await models.mongoose.securitygroupsAudit.findOneAndUpdate({data_type: dataType}, {$set: updateSecuritygroupAudit}, {new: true});
    		}
    		return objSecuritygroupAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSecuritygroupAuditByBeforeValueString(beforeValueString, updateSecuritygroupAudit) {
    	try {
    		let objSecuritygroupAudit;
    		if(sql) {
    			objSecuritygroupAudit = await models.sequelize.securitygroupsAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objSecuritygroupAudit) {
    				objSecuritygroupAudit = await models.sequelize.securitygroupsAudit.update(updateSecuritygroupAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objSecuritygroupAudit = await models.mongoose.securitygroupsAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateSecuritygroupAudit}, {new: true});
    		}
    		return objSecuritygroupAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSecuritygroupAuditByAfterValueString(afterValueString, updateSecuritygroupAudit) {
    	try {
    		let objSecuritygroupAudit;
    		if(sql) {
    			objSecuritygroupAudit = await models.sequelize.securitygroupsAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objSecuritygroupAudit) {
    				objSecuritygroupAudit = await models.sequelize.securitygroupsAudit.update(updateSecuritygroupAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objSecuritygroupAudit = await models.mongoose.securitygroupsAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateSecuritygroupAudit}, {new: true});
    		}
    		return objSecuritygroupAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSecuritygroupAuditByBeforeValueText(beforeValueText, updateSecuritygroupAudit) {
    	try {
    		let objSecuritygroupAudit;
    		if(sql) {
    			objSecuritygroupAudit = await models.sequelize.securitygroupsAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objSecuritygroupAudit) {
    				objSecuritygroupAudit = await models.sequelize.securitygroupsAudit.update(updateSecuritygroupAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objSecuritygroupAudit = await models.mongoose.securitygroupsAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateSecuritygroupAudit}, {new: true});
    		}
    		return objSecuritygroupAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSecuritygroupAuditByAfterValueText(afterValueText, updateSecuritygroupAudit) {
    	try {
    		let objSecuritygroupAudit;
    		if(sql) {
    			objSecuritygroupAudit = await models.sequelize.securitygroupsAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objSecuritygroupAudit) {
    				objSecuritygroupAudit = await models.sequelize.securitygroupsAudit.update(updateSecuritygroupAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objSecuritygroupAudit = await models.mongoose.securitygroupsAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateSecuritygroupAudit}, {new: true});
    		}
    		return objSecuritygroupAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSecuritygroupAuditByDateCreated(dateCreated, updateSecuritygroupAudit) {
    	try {
    		let objSecuritygroupAudit;
    		if(sql) {
    			objSecuritygroupAudit = await models.sequelize.securitygroupsAudit.findOne({where: { date_created: dateCreated }});
    			if (objSecuritygroupAudit) {
    				objSecuritygroupAudit = await models.sequelize.securitygroupsAudit.update(updateSecuritygroupAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objSecuritygroupAudit = await models.mongoose.securitygroupsAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateSecuritygroupAudit}, {new: true});
    		}
    		return objSecuritygroupAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSecuritygroupAuditByParentId(parentId, updateSecuritygroupAudit) {
    	try {
    		let objSecuritygroupAudit;
    		if(sql) {
    			objSecuritygroupAudit = await models.sequelize.securitygroupsAudit.findOne({where: { parent_id: parentId }});
    			if (objSecuritygroupAudit) {
    				objSecuritygroupAudit = await models.sequelize.securitygroupsAudit.update(updateSecuritygroupAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objSecuritygroupAudit = await models.mongoose.securitygroupsAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateSecuritygroupAudit}, {new: true});
    		}
    		return objSecuritygroupAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = SecuritygroupAuditService;
//</es-section>
