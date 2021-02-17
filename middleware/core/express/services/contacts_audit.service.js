/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:42:46 GMT-0400 (Bolivia Time)
 * Time: 4:42:46
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:42:46 GMT-0400 (Bolivia Time)
 * Last time updated: 4:42:46
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

class ContactAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllContactsAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.contactsAudit.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.contactsAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllContactsAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.contactsAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.contactsAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addContactAudit(newContactAudit) {
		try {
			let objContactAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.contactsAudit.primaryKeys.id.type.toString())) {
			    newContactAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objContactAudit = await models.sequelize.contactsAudit.create(newContactAudit);
			} else {
				objContactAudit = new models.mongoose.contactsAudit(newContactAudit);
				await objContactAudit.save();
			}
			return objContactAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateContactAudit(id, updateContactAudit) {
		try {
			let objContactAudit;
			if(sql) {
				objContactAudit = await models.sequelize.contactsAudit.findOne({where: { id: util.Char(id) }});
				if (objContactAudit) {
					await models.sequelize.contactsAudit.update(updateContactAudit, { where: { id: util.Char(id) } });
					objContactAudit = await models.sequelize.contactsAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateContactAudit._id;
				objContactAudit = await models.mongoose.contactsAudit.findOneAndUpdate({id:id}, {$set: updateContactAudit}, {new: true});
			}
			return objContactAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getAContactAudit(id, query) {
		try {
			let objContactAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objContactAudit = await models.sequelize.contactsAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objContactAudit = await models.mongoose.contactsAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objContactAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteContactAudit(id) {
		try {
			let objContactAudit;
			if(sql) {
				objContactAudit = await models.sequelize.contactsAudit.findOne({ where: { id: util.Char(id) } });
				if (objContactAudit) {
					await models.sequelize.contactsAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objContactAudit = await models.mongoose.contactsAudit.deleteOne({id:util.Char(id)});
			}
			return objContactAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objContactAudit;
    		if(sql) {
    			objContactAudit = await models.sequelize.contactsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objContactAudit = await models.mongoose.contactsAudit.findOne({id: id});
    		}
    		return objContactAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objContactAudit;
    		if(sql) {
    			objContactAudit = await models.sequelize.contactsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objContactAudit = await models.mongoose.contactsAudit.findOne({created_by: createdBy});
    		}
    		return objContactAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objContactAudit;
    		if(sql) {
    			objContactAudit = await models.sequelize.contactsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objContactAudit = await models.mongoose.contactsAudit.findOne({field_name: fieldName});
    		}
    		return objContactAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objContactAudit;
    		if(sql) {
    			objContactAudit = await models.sequelize.contactsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objContactAudit = await models.mongoose.contactsAudit.findOne({data_type: dataType});
    		}
    		return objContactAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objContactAudit;
    		if(sql) {
    			objContactAudit = await models.sequelize.contactsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objContactAudit = await models.mongoose.contactsAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objContactAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objContactAudit;
    		if(sql) {
    			objContactAudit = await models.sequelize.contactsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objContactAudit = await models.mongoose.contactsAudit.findOne({after_value_string: afterValueString});
    		}
    		return objContactAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objContactAudit;
    		if(sql) {
    			objContactAudit = await models.sequelize.contactsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objContactAudit = await models.mongoose.contactsAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objContactAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objContactAudit;
    		if(sql) {
    			objContactAudit = await models.sequelize.contactsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objContactAudit = await models.mongoose.contactsAudit.findOne({after_value_text: afterValueText});
    		}
    		return objContactAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objContactAudit;
    		if(sql) {
    			objContactAudit = await models.sequelize.contactsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objContactAudit = await models.mongoose.contactsAudit.findOne({date_created: dateCreated});
    		}
    		return objContactAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objContactAudit;
    		if(sql) {
    			objContactAudit = await models.sequelize.contactsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objContactAudit = await models.mongoose.contactsAudit.findOne({parent_id: parentId});
    		}
    		return objContactAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateContactAuditById(id, updateContactAudit) {
    	try {
    		let objContactAudit;
    		if(sql) {
    			objContactAudit = await models.sequelize.contactsAudit.findOne({where: { id: id }});
    			if (objContactAudit) {
    				objContactAudit = await models.sequelize.contactsAudit.update(updateContactAudit, { where: { id: id } });
    			}
    		} else {
    			objContactAudit = await models.mongoose.contactsAudit.findOneAndUpdate({id: id}, {$set: updateContactAudit}, {new: true});
    		}
    		return objContactAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactAuditByCreatedBy(createdBy, updateContactAudit) {
    	try {
    		let objContactAudit;
    		if(sql) {
    			objContactAudit = await models.sequelize.contactsAudit.findOne({where: { created_by: createdBy }});
    			if (objContactAudit) {
    				objContactAudit = await models.sequelize.contactsAudit.update(updateContactAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objContactAudit = await models.mongoose.contactsAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateContactAudit}, {new: true});
    		}
    		return objContactAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactAuditByFieldName(fieldName, updateContactAudit) {
    	try {
    		let objContactAudit;
    		if(sql) {
    			objContactAudit = await models.sequelize.contactsAudit.findOne({where: { field_name: fieldName }});
    			if (objContactAudit) {
    				objContactAudit = await models.sequelize.contactsAudit.update(updateContactAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objContactAudit = await models.mongoose.contactsAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateContactAudit}, {new: true});
    		}
    		return objContactAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactAuditByDataType(dataType, updateContactAudit) {
    	try {
    		let objContactAudit;
    		if(sql) {
    			objContactAudit = await models.sequelize.contactsAudit.findOne({where: { data_type: dataType }});
    			if (objContactAudit) {
    				objContactAudit = await models.sequelize.contactsAudit.update(updateContactAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objContactAudit = await models.mongoose.contactsAudit.findOneAndUpdate({data_type: dataType}, {$set: updateContactAudit}, {new: true});
    		}
    		return objContactAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactAuditByBeforeValueString(beforeValueString, updateContactAudit) {
    	try {
    		let objContactAudit;
    		if(sql) {
    			objContactAudit = await models.sequelize.contactsAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objContactAudit) {
    				objContactAudit = await models.sequelize.contactsAudit.update(updateContactAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objContactAudit = await models.mongoose.contactsAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateContactAudit}, {new: true});
    		}
    		return objContactAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactAuditByAfterValueString(afterValueString, updateContactAudit) {
    	try {
    		let objContactAudit;
    		if(sql) {
    			objContactAudit = await models.sequelize.contactsAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objContactAudit) {
    				objContactAudit = await models.sequelize.contactsAudit.update(updateContactAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objContactAudit = await models.mongoose.contactsAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateContactAudit}, {new: true});
    		}
    		return objContactAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactAuditByBeforeValueText(beforeValueText, updateContactAudit) {
    	try {
    		let objContactAudit;
    		if(sql) {
    			objContactAudit = await models.sequelize.contactsAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objContactAudit) {
    				objContactAudit = await models.sequelize.contactsAudit.update(updateContactAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objContactAudit = await models.mongoose.contactsAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateContactAudit}, {new: true});
    		}
    		return objContactAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactAuditByAfterValueText(afterValueText, updateContactAudit) {
    	try {
    		let objContactAudit;
    		if(sql) {
    			objContactAudit = await models.sequelize.contactsAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objContactAudit) {
    				objContactAudit = await models.sequelize.contactsAudit.update(updateContactAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objContactAudit = await models.mongoose.contactsAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateContactAudit}, {new: true});
    		}
    		return objContactAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactAuditByDateCreated(dateCreated, updateContactAudit) {
    	try {
    		let objContactAudit;
    		if(sql) {
    			objContactAudit = await models.sequelize.contactsAudit.findOne({where: { date_created: dateCreated }});
    			if (objContactAudit) {
    				objContactAudit = await models.sequelize.contactsAudit.update(updateContactAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objContactAudit = await models.mongoose.contactsAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateContactAudit}, {new: true});
    		}
    		return objContactAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactAuditByParentId(parentId, updateContactAudit) {
    	try {
    		let objContactAudit;
    		if(sql) {
    			objContactAudit = await models.sequelize.contactsAudit.findOne({where: { parent_id: parentId }});
    			if (objContactAudit) {
    				objContactAudit = await models.sequelize.contactsAudit.update(updateContactAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objContactAudit = await models.mongoose.contactsAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateContactAudit}, {new: true});
    		}
    		return objContactAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = ContactAuditService;
//</es-section>
