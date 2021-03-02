/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:46 GMT-0400 (Bolivia Time)
 * Time: 14:0:46
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:46 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:46
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

class EmailAddresseAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllEmailAddressesAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.emailAddressesAudit.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.emailAddressesAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllEmailAddressesAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.emailAddressesAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.emailAddressesAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addEmailAddresseAudit(newEmailAddresseAudit) {
		try {
			let objEmailAddresseAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.emailAddressesAudit.primaryKeys.id.type.toString())) {
			    newEmailAddresseAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objEmailAddresseAudit = await models.sequelize.emailAddressesAudit.create(newEmailAddresseAudit);
			} else {
				objEmailAddresseAudit = new models.mongoose.emailAddressesAudit(newEmailAddresseAudit);
				await objEmailAddresseAudit.save();
			}
			return objEmailAddresseAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateEmailAddresseAudit(id, updateEmailAddresseAudit) {
		try {
			let objEmailAddresseAudit;
			if(sql) {
				objEmailAddresseAudit = await models.sequelize.emailAddressesAudit.findOne({where: { id: util.Char(id) }});
				if (objEmailAddresseAudit) {
					await models.sequelize.emailAddressesAudit.update(updateEmailAddresseAudit, { where: { id: util.Char(id) } });
					objEmailAddresseAudit = await models.sequelize.emailAddressesAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateEmailAddresseAudit._id;
				objEmailAddresseAudit = await models.mongoose.emailAddressesAudit.findOneAndUpdate({id:id}, {$set: updateEmailAddresseAudit}, {new: true});
			}
			return objEmailAddresseAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getAEmailAddresseAudit(id, query) {
		try {
			let objEmailAddresseAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objEmailAddresseAudit = await models.sequelize.emailAddressesAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objEmailAddresseAudit = await models.mongoose.emailAddressesAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objEmailAddresseAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteEmailAddresseAudit(id) {
		try {
			let objEmailAddresseAudit;
			if(sql) {
				objEmailAddresseAudit = await models.sequelize.emailAddressesAudit.findOne({ where: { id: util.Char(id) } });
				if (objEmailAddresseAudit) {
					await models.sequelize.emailAddressesAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objEmailAddresseAudit = await models.mongoose.emailAddressesAudit.deleteOne({id:util.Char(id)});
			}
			return objEmailAddresseAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objEmailAddresseAudit;
    		if(sql) {
    			objEmailAddresseAudit = await models.sequelize.emailAddressesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objEmailAddresseAudit = await models.mongoose.emailAddressesAudit.findOne({id: id});
    		}
    		return objEmailAddresseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objEmailAddresseAudit;
    		if(sql) {
    			objEmailAddresseAudit = await models.sequelize.emailAddressesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objEmailAddresseAudit = await models.mongoose.emailAddressesAudit.findOne({created_by: createdBy});
    		}
    		return objEmailAddresseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objEmailAddresseAudit;
    		if(sql) {
    			objEmailAddresseAudit = await models.sequelize.emailAddressesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objEmailAddresseAudit = await models.mongoose.emailAddressesAudit.findOne({field_name: fieldName});
    		}
    		return objEmailAddresseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objEmailAddresseAudit;
    		if(sql) {
    			objEmailAddresseAudit = await models.sequelize.emailAddressesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objEmailAddresseAudit = await models.mongoose.emailAddressesAudit.findOne({data_type: dataType});
    		}
    		return objEmailAddresseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objEmailAddresseAudit;
    		if(sql) {
    			objEmailAddresseAudit = await models.sequelize.emailAddressesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objEmailAddresseAudit = await models.mongoose.emailAddressesAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objEmailAddresseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objEmailAddresseAudit;
    		if(sql) {
    			objEmailAddresseAudit = await models.sequelize.emailAddressesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objEmailAddresseAudit = await models.mongoose.emailAddressesAudit.findOne({after_value_string: afterValueString});
    		}
    		return objEmailAddresseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objEmailAddresseAudit;
    		if(sql) {
    			objEmailAddresseAudit = await models.sequelize.emailAddressesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objEmailAddresseAudit = await models.mongoose.emailAddressesAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objEmailAddresseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objEmailAddresseAudit;
    		if(sql) {
    			objEmailAddresseAudit = await models.sequelize.emailAddressesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objEmailAddresseAudit = await models.mongoose.emailAddressesAudit.findOne({after_value_text: afterValueText});
    		}
    		return objEmailAddresseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objEmailAddresseAudit;
    		if(sql) {
    			objEmailAddresseAudit = await models.sequelize.emailAddressesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objEmailAddresseAudit = await models.mongoose.emailAddressesAudit.findOne({date_created: dateCreated});
    		}
    		return objEmailAddresseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objEmailAddresseAudit;
    		if(sql) {
    			objEmailAddresseAudit = await models.sequelize.emailAddressesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objEmailAddresseAudit = await models.mongoose.emailAddressesAudit.findOne({parent_id: parentId});
    		}
    		return objEmailAddresseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateEmailAddresseAuditById(id, updateEmailAddresseAudit) {
    	try {
    		let objEmailAddresseAudit;
    		if(sql) {
    			objEmailAddresseAudit = await models.sequelize.emailAddressesAudit.findOne({where: { id: id }});
    			if (objEmailAddresseAudit) {
    				objEmailAddresseAudit = await models.sequelize.emailAddressesAudit.update(updateEmailAddresseAudit, { where: { id: id } });
    			}
    		} else {
    			objEmailAddresseAudit = await models.mongoose.emailAddressesAudit.findOneAndUpdate({id: id}, {$set: updateEmailAddresseAudit}, {new: true});
    		}
    		return objEmailAddresseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailAddresseAuditByCreatedBy(createdBy, updateEmailAddresseAudit) {
    	try {
    		let objEmailAddresseAudit;
    		if(sql) {
    			objEmailAddresseAudit = await models.sequelize.emailAddressesAudit.findOne({where: { created_by: createdBy }});
    			if (objEmailAddresseAudit) {
    				objEmailAddresseAudit = await models.sequelize.emailAddressesAudit.update(updateEmailAddresseAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objEmailAddresseAudit = await models.mongoose.emailAddressesAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateEmailAddresseAudit}, {new: true});
    		}
    		return objEmailAddresseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailAddresseAuditByFieldName(fieldName, updateEmailAddresseAudit) {
    	try {
    		let objEmailAddresseAudit;
    		if(sql) {
    			objEmailAddresseAudit = await models.sequelize.emailAddressesAudit.findOne({where: { field_name: fieldName }});
    			if (objEmailAddresseAudit) {
    				objEmailAddresseAudit = await models.sequelize.emailAddressesAudit.update(updateEmailAddresseAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objEmailAddresseAudit = await models.mongoose.emailAddressesAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateEmailAddresseAudit}, {new: true});
    		}
    		return objEmailAddresseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailAddresseAuditByDataType(dataType, updateEmailAddresseAudit) {
    	try {
    		let objEmailAddresseAudit;
    		if(sql) {
    			objEmailAddresseAudit = await models.sequelize.emailAddressesAudit.findOne({where: { data_type: dataType }});
    			if (objEmailAddresseAudit) {
    				objEmailAddresseAudit = await models.sequelize.emailAddressesAudit.update(updateEmailAddresseAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objEmailAddresseAudit = await models.mongoose.emailAddressesAudit.findOneAndUpdate({data_type: dataType}, {$set: updateEmailAddresseAudit}, {new: true});
    		}
    		return objEmailAddresseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailAddresseAuditByBeforeValueString(beforeValueString, updateEmailAddresseAudit) {
    	try {
    		let objEmailAddresseAudit;
    		if(sql) {
    			objEmailAddresseAudit = await models.sequelize.emailAddressesAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objEmailAddresseAudit) {
    				objEmailAddresseAudit = await models.sequelize.emailAddressesAudit.update(updateEmailAddresseAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objEmailAddresseAudit = await models.mongoose.emailAddressesAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateEmailAddresseAudit}, {new: true});
    		}
    		return objEmailAddresseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailAddresseAuditByAfterValueString(afterValueString, updateEmailAddresseAudit) {
    	try {
    		let objEmailAddresseAudit;
    		if(sql) {
    			objEmailAddresseAudit = await models.sequelize.emailAddressesAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objEmailAddresseAudit) {
    				objEmailAddresseAudit = await models.sequelize.emailAddressesAudit.update(updateEmailAddresseAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objEmailAddresseAudit = await models.mongoose.emailAddressesAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateEmailAddresseAudit}, {new: true});
    		}
    		return objEmailAddresseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailAddresseAuditByBeforeValueText(beforeValueText, updateEmailAddresseAudit) {
    	try {
    		let objEmailAddresseAudit;
    		if(sql) {
    			objEmailAddresseAudit = await models.sequelize.emailAddressesAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objEmailAddresseAudit) {
    				objEmailAddresseAudit = await models.sequelize.emailAddressesAudit.update(updateEmailAddresseAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objEmailAddresseAudit = await models.mongoose.emailAddressesAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateEmailAddresseAudit}, {new: true});
    		}
    		return objEmailAddresseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailAddresseAuditByAfterValueText(afterValueText, updateEmailAddresseAudit) {
    	try {
    		let objEmailAddresseAudit;
    		if(sql) {
    			objEmailAddresseAudit = await models.sequelize.emailAddressesAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objEmailAddresseAudit) {
    				objEmailAddresseAudit = await models.sequelize.emailAddressesAudit.update(updateEmailAddresseAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objEmailAddresseAudit = await models.mongoose.emailAddressesAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateEmailAddresseAudit}, {new: true});
    		}
    		return objEmailAddresseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailAddresseAuditByDateCreated(dateCreated, updateEmailAddresseAudit) {
    	try {
    		let objEmailAddresseAudit;
    		if(sql) {
    			objEmailAddresseAudit = await models.sequelize.emailAddressesAudit.findOne({where: { date_created: dateCreated }});
    			if (objEmailAddresseAudit) {
    				objEmailAddresseAudit = await models.sequelize.emailAddressesAudit.update(updateEmailAddresseAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objEmailAddresseAudit = await models.mongoose.emailAddressesAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateEmailAddresseAudit}, {new: true});
    		}
    		return objEmailAddresseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailAddresseAuditByParentId(parentId, updateEmailAddresseAudit) {
    	try {
    		let objEmailAddresseAudit;
    		if(sql) {
    			objEmailAddresseAudit = await models.sequelize.emailAddressesAudit.findOne({where: { parent_id: parentId }});
    			if (objEmailAddresseAudit) {
    				objEmailAddresseAudit = await models.sequelize.emailAddressesAudit.update(updateEmailAddresseAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objEmailAddresseAudit = await models.mongoose.emailAddressesAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateEmailAddresseAudit}, {new: true});
    		}
    		return objEmailAddresseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = EmailAddresseAuditService;
//</es-section>
