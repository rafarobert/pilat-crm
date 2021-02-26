/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:15 GMT-0400 (Bolivia Time)
 * Time: 0:23:15
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:15 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:15
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

class LeadAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllLeadsAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.leadsAudit.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.leadsAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllLeadsAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.leadsAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.leadsAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addLeadAudit(newLeadAudit) {
		try {
			let objLeadAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.leadsAudit.primaryKeys.id.type.toString())) {
			    newLeadAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objLeadAudit = await models.sequelize.leadsAudit.create(newLeadAudit);
			} else {
				objLeadAudit = new models.mongoose.leadsAudit(newLeadAudit);
				await objLeadAudit.save();
			}
			return objLeadAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateLeadAudit(id, updateLeadAudit) {
		try {
			let objLeadAudit;
			if(sql) {
				objLeadAudit = await models.sequelize.leadsAudit.findOne({where: { id: util.Char(id) }});
				if (objLeadAudit) {
					await models.sequelize.leadsAudit.update(updateLeadAudit, { where: { id: util.Char(id) } });
					objLeadAudit = await models.sequelize.leadsAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateLeadAudit._id;
				objLeadAudit = await models.mongoose.leadsAudit.findOneAndUpdate({id:id}, {$set: updateLeadAudit}, {new: true});
			}
			return objLeadAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getALeadAudit(id, query) {
		try {
			let objLeadAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objLeadAudit = await models.sequelize.leadsAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objLeadAudit = await models.mongoose.leadsAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objLeadAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteLeadAudit(id) {
		try {
			let objLeadAudit;
			if(sql) {
				objLeadAudit = await models.sequelize.leadsAudit.findOne({ where: { id: util.Char(id) } });
				if (objLeadAudit) {
					await models.sequelize.leadsAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objLeadAudit = await models.mongoose.leadsAudit.deleteOne({id:util.Char(id)});
			}
			return objLeadAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objLeadAudit;
    		if(sql) {
    			objLeadAudit = await models.sequelize.leadsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objLeadAudit = await models.mongoose.leadsAudit.findOne({id: id});
    		}
    		return objLeadAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objLeadAudit;
    		if(sql) {
    			objLeadAudit = await models.sequelize.leadsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objLeadAudit = await models.mongoose.leadsAudit.findOne({created_by: createdBy});
    		}
    		return objLeadAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objLeadAudit;
    		if(sql) {
    			objLeadAudit = await models.sequelize.leadsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objLeadAudit = await models.mongoose.leadsAudit.findOne({field_name: fieldName});
    		}
    		return objLeadAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objLeadAudit;
    		if(sql) {
    			objLeadAudit = await models.sequelize.leadsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objLeadAudit = await models.mongoose.leadsAudit.findOne({data_type: dataType});
    		}
    		return objLeadAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objLeadAudit;
    		if(sql) {
    			objLeadAudit = await models.sequelize.leadsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objLeadAudit = await models.mongoose.leadsAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objLeadAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objLeadAudit;
    		if(sql) {
    			objLeadAudit = await models.sequelize.leadsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objLeadAudit = await models.mongoose.leadsAudit.findOne({after_value_string: afterValueString});
    		}
    		return objLeadAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objLeadAudit;
    		if(sql) {
    			objLeadAudit = await models.sequelize.leadsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objLeadAudit = await models.mongoose.leadsAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objLeadAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objLeadAudit;
    		if(sql) {
    			objLeadAudit = await models.sequelize.leadsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objLeadAudit = await models.mongoose.leadsAudit.findOne({after_value_text: afterValueText});
    		}
    		return objLeadAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objLeadAudit;
    		if(sql) {
    			objLeadAudit = await models.sequelize.leadsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objLeadAudit = await models.mongoose.leadsAudit.findOne({date_created: dateCreated});
    		}
    		return objLeadAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objLeadAudit;
    		if(sql) {
    			objLeadAudit = await models.sequelize.leadsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objLeadAudit = await models.mongoose.leadsAudit.findOne({parent_id: parentId});
    		}
    		return objLeadAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateLeadAuditById(id, updateLeadAudit) {
    	try {
    		let objLeadAudit;
    		if(sql) {
    			objLeadAudit = await models.sequelize.leadsAudit.findOne({where: { id: id }});
    			if (objLeadAudit) {
    				objLeadAudit = await models.sequelize.leadsAudit.update(updateLeadAudit, { where: { id: id } });
    			}
    		} else {
    			objLeadAudit = await models.mongoose.leadsAudit.findOneAndUpdate({id: id}, {$set: updateLeadAudit}, {new: true});
    		}
    		return objLeadAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadAuditByCreatedBy(createdBy, updateLeadAudit) {
    	try {
    		let objLeadAudit;
    		if(sql) {
    			objLeadAudit = await models.sequelize.leadsAudit.findOne({where: { created_by: createdBy }});
    			if (objLeadAudit) {
    				objLeadAudit = await models.sequelize.leadsAudit.update(updateLeadAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objLeadAudit = await models.mongoose.leadsAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateLeadAudit}, {new: true});
    		}
    		return objLeadAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadAuditByFieldName(fieldName, updateLeadAudit) {
    	try {
    		let objLeadAudit;
    		if(sql) {
    			objLeadAudit = await models.sequelize.leadsAudit.findOne({where: { field_name: fieldName }});
    			if (objLeadAudit) {
    				objLeadAudit = await models.sequelize.leadsAudit.update(updateLeadAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objLeadAudit = await models.mongoose.leadsAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateLeadAudit}, {new: true});
    		}
    		return objLeadAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadAuditByDataType(dataType, updateLeadAudit) {
    	try {
    		let objLeadAudit;
    		if(sql) {
    			objLeadAudit = await models.sequelize.leadsAudit.findOne({where: { data_type: dataType }});
    			if (objLeadAudit) {
    				objLeadAudit = await models.sequelize.leadsAudit.update(updateLeadAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objLeadAudit = await models.mongoose.leadsAudit.findOneAndUpdate({data_type: dataType}, {$set: updateLeadAudit}, {new: true});
    		}
    		return objLeadAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadAuditByBeforeValueString(beforeValueString, updateLeadAudit) {
    	try {
    		let objLeadAudit;
    		if(sql) {
    			objLeadAudit = await models.sequelize.leadsAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objLeadAudit) {
    				objLeadAudit = await models.sequelize.leadsAudit.update(updateLeadAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objLeadAudit = await models.mongoose.leadsAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateLeadAudit}, {new: true});
    		}
    		return objLeadAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadAuditByAfterValueString(afterValueString, updateLeadAudit) {
    	try {
    		let objLeadAudit;
    		if(sql) {
    			objLeadAudit = await models.sequelize.leadsAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objLeadAudit) {
    				objLeadAudit = await models.sequelize.leadsAudit.update(updateLeadAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objLeadAudit = await models.mongoose.leadsAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateLeadAudit}, {new: true});
    		}
    		return objLeadAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadAuditByBeforeValueText(beforeValueText, updateLeadAudit) {
    	try {
    		let objLeadAudit;
    		if(sql) {
    			objLeadAudit = await models.sequelize.leadsAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objLeadAudit) {
    				objLeadAudit = await models.sequelize.leadsAudit.update(updateLeadAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objLeadAudit = await models.mongoose.leadsAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateLeadAudit}, {new: true});
    		}
    		return objLeadAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadAuditByAfterValueText(afterValueText, updateLeadAudit) {
    	try {
    		let objLeadAudit;
    		if(sql) {
    			objLeadAudit = await models.sequelize.leadsAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objLeadAudit) {
    				objLeadAudit = await models.sequelize.leadsAudit.update(updateLeadAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objLeadAudit = await models.mongoose.leadsAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateLeadAudit}, {new: true});
    		}
    		return objLeadAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadAuditByDateCreated(dateCreated, updateLeadAudit) {
    	try {
    		let objLeadAudit;
    		if(sql) {
    			objLeadAudit = await models.sequelize.leadsAudit.findOne({where: { date_created: dateCreated }});
    			if (objLeadAudit) {
    				objLeadAudit = await models.sequelize.leadsAudit.update(updateLeadAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objLeadAudit = await models.mongoose.leadsAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateLeadAudit}, {new: true});
    		}
    		return objLeadAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadAuditByParentId(parentId, updateLeadAudit) {
    	try {
    		let objLeadAudit;
    		if(sql) {
    			objLeadAudit = await models.sequelize.leadsAudit.findOne({where: { parent_id: parentId }});
    			if (objLeadAudit) {
    				objLeadAudit = await models.sequelize.leadsAudit.update(updateLeadAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objLeadAudit = await models.mongoose.leadsAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateLeadAudit}, {new: true});
    		}
    		return objLeadAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = LeadAuditService;
//</es-section>
