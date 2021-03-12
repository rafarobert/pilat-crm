/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:21 GMT-0400 (Bolivia Time)
 * Time: 14:57:21
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:21 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:21
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

class OpportunityAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllOpportunitiesAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.opportunitiesAudit.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.opportunitiesAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllOpportunitiesAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.opportunitiesAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.opportunitiesAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addOpportunityAudit(newOpportunityAudit) {
		try {
			let objOpportunityAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.opportunitiesAudit.primaryKeys.id.type.toString())) {
			    newOpportunityAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objOpportunityAudit = await models.sequelize.opportunitiesAudit.create(newOpportunityAudit);
			} else {
				objOpportunityAudit = new models.mongoose.opportunitiesAudit(newOpportunityAudit);
				await objOpportunityAudit.save();
			}
			return objOpportunityAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateOpportunityAudit(id, updateOpportunityAudit) {
		try {
			let objOpportunityAudit;
			if(sql) {
				objOpportunityAudit = await models.sequelize.opportunitiesAudit.findOne({where: { id: util.Char(id) }});
				if (objOpportunityAudit) {
					await models.sequelize.opportunitiesAudit.update(updateOpportunityAudit, { where: { id: util.Char(id) } });
					objOpportunityAudit = await models.sequelize.opportunitiesAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateOpportunityAudit._id;
				objOpportunityAudit = await models.mongoose.opportunitiesAudit.findOneAndUpdate({id:id}, {$set: updateOpportunityAudit}, {new: true});
			}
			return objOpportunityAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getAOpportunityAudit(id, query) {
		try {
			let objOpportunityAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objOpportunityAudit = await models.sequelize.opportunitiesAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objOpportunityAudit = await models.mongoose.opportunitiesAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objOpportunityAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteOpportunityAudit(id) {
		try {
			let objOpportunityAudit;
			if(sql) {
				objOpportunityAudit = await models.sequelize.opportunitiesAudit.findOne({ where: { id: util.Char(id) } });
				if (objOpportunityAudit) {
					await models.sequelize.opportunitiesAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objOpportunityAudit = await models.mongoose.opportunitiesAudit.deleteOne({id:util.Char(id)});
			}
			return objOpportunityAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objOpportunityAudit;
    		if(sql) {
    			objOpportunityAudit = await models.sequelize.opportunitiesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objOpportunityAudit = await models.mongoose.opportunitiesAudit.findOne({id: id});
    		}
    		return objOpportunityAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objOpportunityAudit;
    		if(sql) {
    			objOpportunityAudit = await models.sequelize.opportunitiesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objOpportunityAudit = await models.mongoose.opportunitiesAudit.findOne({created_by: createdBy});
    		}
    		return objOpportunityAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objOpportunityAudit;
    		if(sql) {
    			objOpportunityAudit = await models.sequelize.opportunitiesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objOpportunityAudit = await models.mongoose.opportunitiesAudit.findOne({field_name: fieldName});
    		}
    		return objOpportunityAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objOpportunityAudit;
    		if(sql) {
    			objOpportunityAudit = await models.sequelize.opportunitiesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objOpportunityAudit = await models.mongoose.opportunitiesAudit.findOne({data_type: dataType});
    		}
    		return objOpportunityAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objOpportunityAudit;
    		if(sql) {
    			objOpportunityAudit = await models.sequelize.opportunitiesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objOpportunityAudit = await models.mongoose.opportunitiesAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objOpportunityAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objOpportunityAudit;
    		if(sql) {
    			objOpportunityAudit = await models.sequelize.opportunitiesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objOpportunityAudit = await models.mongoose.opportunitiesAudit.findOne({after_value_string: afterValueString});
    		}
    		return objOpportunityAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objOpportunityAudit;
    		if(sql) {
    			objOpportunityAudit = await models.sequelize.opportunitiesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objOpportunityAudit = await models.mongoose.opportunitiesAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objOpportunityAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objOpportunityAudit;
    		if(sql) {
    			objOpportunityAudit = await models.sequelize.opportunitiesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objOpportunityAudit = await models.mongoose.opportunitiesAudit.findOne({after_value_text: afterValueText});
    		}
    		return objOpportunityAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objOpportunityAudit;
    		if(sql) {
    			objOpportunityAudit = await models.sequelize.opportunitiesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objOpportunityAudit = await models.mongoose.opportunitiesAudit.findOne({date_created: dateCreated});
    		}
    		return objOpportunityAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objOpportunityAudit;
    		if(sql) {
    			objOpportunityAudit = await models.sequelize.opportunitiesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objOpportunityAudit = await models.mongoose.opportunitiesAudit.findOne({parent_id: parentId});
    		}
    		return objOpportunityAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateOpportunityAuditById(id, updateOpportunityAudit) {
    	try {
    		let objOpportunityAudit;
    		if(sql) {
    			objOpportunityAudit = await models.sequelize.opportunitiesAudit.findOne({where: { id: id }});
    			if (objOpportunityAudit) {
    				objOpportunityAudit = await models.sequelize.opportunitiesAudit.update(updateOpportunityAudit, { where: { id: id } });
    			}
    		} else {
    			objOpportunityAudit = await models.mongoose.opportunitiesAudit.findOneAndUpdate({id: id}, {$set: updateOpportunityAudit}, {new: true});
    		}
    		return objOpportunityAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOpportunityAuditByCreatedBy(createdBy, updateOpportunityAudit) {
    	try {
    		let objOpportunityAudit;
    		if(sql) {
    			objOpportunityAudit = await models.sequelize.opportunitiesAudit.findOne({where: { created_by: createdBy }});
    			if (objOpportunityAudit) {
    				objOpportunityAudit = await models.sequelize.opportunitiesAudit.update(updateOpportunityAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objOpportunityAudit = await models.mongoose.opportunitiesAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateOpportunityAudit}, {new: true});
    		}
    		return objOpportunityAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOpportunityAuditByFieldName(fieldName, updateOpportunityAudit) {
    	try {
    		let objOpportunityAudit;
    		if(sql) {
    			objOpportunityAudit = await models.sequelize.opportunitiesAudit.findOne({where: { field_name: fieldName }});
    			if (objOpportunityAudit) {
    				objOpportunityAudit = await models.sequelize.opportunitiesAudit.update(updateOpportunityAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objOpportunityAudit = await models.mongoose.opportunitiesAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateOpportunityAudit}, {new: true});
    		}
    		return objOpportunityAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOpportunityAuditByDataType(dataType, updateOpportunityAudit) {
    	try {
    		let objOpportunityAudit;
    		if(sql) {
    			objOpportunityAudit = await models.sequelize.opportunitiesAudit.findOne({where: { data_type: dataType }});
    			if (objOpportunityAudit) {
    				objOpportunityAudit = await models.sequelize.opportunitiesAudit.update(updateOpportunityAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objOpportunityAudit = await models.mongoose.opportunitiesAudit.findOneAndUpdate({data_type: dataType}, {$set: updateOpportunityAudit}, {new: true});
    		}
    		return objOpportunityAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOpportunityAuditByBeforeValueString(beforeValueString, updateOpportunityAudit) {
    	try {
    		let objOpportunityAudit;
    		if(sql) {
    			objOpportunityAudit = await models.sequelize.opportunitiesAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objOpportunityAudit) {
    				objOpportunityAudit = await models.sequelize.opportunitiesAudit.update(updateOpportunityAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objOpportunityAudit = await models.mongoose.opportunitiesAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateOpportunityAudit}, {new: true});
    		}
    		return objOpportunityAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOpportunityAuditByAfterValueString(afterValueString, updateOpportunityAudit) {
    	try {
    		let objOpportunityAudit;
    		if(sql) {
    			objOpportunityAudit = await models.sequelize.opportunitiesAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objOpportunityAudit) {
    				objOpportunityAudit = await models.sequelize.opportunitiesAudit.update(updateOpportunityAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objOpportunityAudit = await models.mongoose.opportunitiesAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateOpportunityAudit}, {new: true});
    		}
    		return objOpportunityAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOpportunityAuditByBeforeValueText(beforeValueText, updateOpportunityAudit) {
    	try {
    		let objOpportunityAudit;
    		if(sql) {
    			objOpportunityAudit = await models.sequelize.opportunitiesAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objOpportunityAudit) {
    				objOpportunityAudit = await models.sequelize.opportunitiesAudit.update(updateOpportunityAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objOpportunityAudit = await models.mongoose.opportunitiesAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateOpportunityAudit}, {new: true});
    		}
    		return objOpportunityAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOpportunityAuditByAfterValueText(afterValueText, updateOpportunityAudit) {
    	try {
    		let objOpportunityAudit;
    		if(sql) {
    			objOpportunityAudit = await models.sequelize.opportunitiesAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objOpportunityAudit) {
    				objOpportunityAudit = await models.sequelize.opportunitiesAudit.update(updateOpportunityAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objOpportunityAudit = await models.mongoose.opportunitiesAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateOpportunityAudit}, {new: true});
    		}
    		return objOpportunityAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOpportunityAuditByDateCreated(dateCreated, updateOpportunityAudit) {
    	try {
    		let objOpportunityAudit;
    		if(sql) {
    			objOpportunityAudit = await models.sequelize.opportunitiesAudit.findOne({where: { date_created: dateCreated }});
    			if (objOpportunityAudit) {
    				objOpportunityAudit = await models.sequelize.opportunitiesAudit.update(updateOpportunityAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objOpportunityAudit = await models.mongoose.opportunitiesAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateOpportunityAudit}, {new: true});
    		}
    		return objOpportunityAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOpportunityAuditByParentId(parentId, updateOpportunityAudit) {
    	try {
    		let objOpportunityAudit;
    		if(sql) {
    			objOpportunityAudit = await models.sequelize.opportunitiesAudit.findOne({where: { parent_id: parentId }});
    			if (objOpportunityAudit) {
    				objOpportunityAudit = await models.sequelize.opportunitiesAudit.update(updateOpportunityAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objOpportunityAudit = await models.mongoose.opportunitiesAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateOpportunityAudit}, {new: true});
    		}
    		return objOpportunityAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = OpportunityAuditService;
//</es-section>
