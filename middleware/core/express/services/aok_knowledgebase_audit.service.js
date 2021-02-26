/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:02 GMT-0400 (Bolivia Time)
 * Time: 0:22:2
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:02 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:2
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

class AokKnowledgebaseAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAokKnowledgebaseAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aokKnowledgebaseAudit.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aokKnowledgebaseAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAokKnowledgebaseAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aokKnowledgebaseAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aokKnowledgebaseAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAokKnowledgebaseAudit(newAokKnowledgebaseAudit) {
		try {
			let objAokKnowledgebaseAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aokKnowledgebaseAudit.primaryKeys.id.type.toString())) {
			    newAokKnowledgebaseAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAokKnowledgebaseAudit = await models.sequelize.aokKnowledgebaseAudit.create(newAokKnowledgebaseAudit);
			} else {
				objAokKnowledgebaseAudit = new models.mongoose.aokKnowledgebaseAudit(newAokKnowledgebaseAudit);
				await objAokKnowledgebaseAudit.save();
			}
			return objAokKnowledgebaseAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateAokKnowledgebaseAudit(id, updateAokKnowledgebaseAudit) {
		try {
			let objAokKnowledgebaseAudit;
			if(sql) {
				objAokKnowledgebaseAudit = await models.sequelize.aokKnowledgebaseAudit.findOne({where: { id: util.Char(id) }});
				if (objAokKnowledgebaseAudit) {
					await models.sequelize.aokKnowledgebaseAudit.update(updateAokKnowledgebaseAudit, { where: { id: util.Char(id) } });
					objAokKnowledgebaseAudit = await models.sequelize.aokKnowledgebaseAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAokKnowledgebaseAudit._id;
				objAokKnowledgebaseAudit = await models.mongoose.aokKnowledgebaseAudit.findOneAndUpdate({id:id}, {$set: updateAokKnowledgebaseAudit}, {new: true});
			}
			return objAokKnowledgebaseAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getAAokKnowledgebaseAudit(id, query) {
		try {
			let objAokKnowledgebaseAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAokKnowledgebaseAudit = await models.sequelize.aokKnowledgebaseAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAokKnowledgebaseAudit = await models.mongoose.aokKnowledgebaseAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objAokKnowledgebaseAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAokKnowledgebaseAudit(id) {
		try {
			let objAokKnowledgebaseAudit;
			if(sql) {
				objAokKnowledgebaseAudit = await models.sequelize.aokKnowledgebaseAudit.findOne({ where: { id: util.Char(id) } });
				if (objAokKnowledgebaseAudit) {
					await models.sequelize.aokKnowledgebaseAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAokKnowledgebaseAudit = await models.mongoose.aokKnowledgebaseAudit.deleteOne({id:util.Char(id)});
			}
			return objAokKnowledgebaseAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAokKnowledgebaseAudit;
    		if(sql) {
    			objAokKnowledgebaseAudit = await models.sequelize.aokKnowledgebaseAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAokKnowledgebaseAudit = await models.mongoose.aokKnowledgebaseAudit.findOne({id: id});
    		}
    		return objAokKnowledgebaseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAokKnowledgebaseAudit;
    		if(sql) {
    			objAokKnowledgebaseAudit = await models.sequelize.aokKnowledgebaseAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAokKnowledgebaseAudit = await models.mongoose.aokKnowledgebaseAudit.findOne({created_by: createdBy});
    		}
    		return objAokKnowledgebaseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objAokKnowledgebaseAudit;
    		if(sql) {
    			objAokKnowledgebaseAudit = await models.sequelize.aokKnowledgebaseAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objAokKnowledgebaseAudit = await models.mongoose.aokKnowledgebaseAudit.findOne({field_name: fieldName});
    		}
    		return objAokKnowledgebaseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objAokKnowledgebaseAudit;
    		if(sql) {
    			objAokKnowledgebaseAudit = await models.sequelize.aokKnowledgebaseAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objAokKnowledgebaseAudit = await models.mongoose.aokKnowledgebaseAudit.findOne({data_type: dataType});
    		}
    		return objAokKnowledgebaseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objAokKnowledgebaseAudit;
    		if(sql) {
    			objAokKnowledgebaseAudit = await models.sequelize.aokKnowledgebaseAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objAokKnowledgebaseAudit = await models.mongoose.aokKnowledgebaseAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objAokKnowledgebaseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objAokKnowledgebaseAudit;
    		if(sql) {
    			objAokKnowledgebaseAudit = await models.sequelize.aokKnowledgebaseAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objAokKnowledgebaseAudit = await models.mongoose.aokKnowledgebaseAudit.findOne({after_value_string: afterValueString});
    		}
    		return objAokKnowledgebaseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objAokKnowledgebaseAudit;
    		if(sql) {
    			objAokKnowledgebaseAudit = await models.sequelize.aokKnowledgebaseAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objAokKnowledgebaseAudit = await models.mongoose.aokKnowledgebaseAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objAokKnowledgebaseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objAokKnowledgebaseAudit;
    		if(sql) {
    			objAokKnowledgebaseAudit = await models.sequelize.aokKnowledgebaseAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objAokKnowledgebaseAudit = await models.mongoose.aokKnowledgebaseAudit.findOne({after_value_text: afterValueText});
    		}
    		return objAokKnowledgebaseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objAokKnowledgebaseAudit;
    		if(sql) {
    			objAokKnowledgebaseAudit = await models.sequelize.aokKnowledgebaseAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objAokKnowledgebaseAudit = await models.mongoose.aokKnowledgebaseAudit.findOne({date_created: dateCreated});
    		}
    		return objAokKnowledgebaseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objAokKnowledgebaseAudit;
    		if(sql) {
    			objAokKnowledgebaseAudit = await models.sequelize.aokKnowledgebaseAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objAokKnowledgebaseAudit = await models.mongoose.aokKnowledgebaseAudit.findOne({parent_id: parentId});
    		}
    		return objAokKnowledgebaseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAokKnowledgebaseAuditById(id, updateAokKnowledgebaseAudit) {
    	try {
    		let objAokKnowledgebaseAudit;
    		if(sql) {
    			objAokKnowledgebaseAudit = await models.sequelize.aokKnowledgebaseAudit.findOne({where: { id: id }});
    			if (objAokKnowledgebaseAudit) {
    				objAokKnowledgebaseAudit = await models.sequelize.aokKnowledgebaseAudit.update(updateAokKnowledgebaseAudit, { where: { id: id } });
    			}
    		} else {
    			objAokKnowledgebaseAudit = await models.mongoose.aokKnowledgebaseAudit.findOneAndUpdate({id: id}, {$set: updateAokKnowledgebaseAudit}, {new: true});
    		}
    		return objAokKnowledgebaseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAokKnowledgebaseAuditByCreatedBy(createdBy, updateAokKnowledgebaseAudit) {
    	try {
    		let objAokKnowledgebaseAudit;
    		if(sql) {
    			objAokKnowledgebaseAudit = await models.sequelize.aokKnowledgebaseAudit.findOne({where: { created_by: createdBy }});
    			if (objAokKnowledgebaseAudit) {
    				objAokKnowledgebaseAudit = await models.sequelize.aokKnowledgebaseAudit.update(updateAokKnowledgebaseAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAokKnowledgebaseAudit = await models.mongoose.aokKnowledgebaseAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateAokKnowledgebaseAudit}, {new: true});
    		}
    		return objAokKnowledgebaseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAokKnowledgebaseAuditByFieldName(fieldName, updateAokKnowledgebaseAudit) {
    	try {
    		let objAokKnowledgebaseAudit;
    		if(sql) {
    			objAokKnowledgebaseAudit = await models.sequelize.aokKnowledgebaseAudit.findOne({where: { field_name: fieldName }});
    			if (objAokKnowledgebaseAudit) {
    				objAokKnowledgebaseAudit = await models.sequelize.aokKnowledgebaseAudit.update(updateAokKnowledgebaseAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objAokKnowledgebaseAudit = await models.mongoose.aokKnowledgebaseAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateAokKnowledgebaseAudit}, {new: true});
    		}
    		return objAokKnowledgebaseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAokKnowledgebaseAuditByDataType(dataType, updateAokKnowledgebaseAudit) {
    	try {
    		let objAokKnowledgebaseAudit;
    		if(sql) {
    			objAokKnowledgebaseAudit = await models.sequelize.aokKnowledgebaseAudit.findOne({where: { data_type: dataType }});
    			if (objAokKnowledgebaseAudit) {
    				objAokKnowledgebaseAudit = await models.sequelize.aokKnowledgebaseAudit.update(updateAokKnowledgebaseAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objAokKnowledgebaseAudit = await models.mongoose.aokKnowledgebaseAudit.findOneAndUpdate({data_type: dataType}, {$set: updateAokKnowledgebaseAudit}, {new: true});
    		}
    		return objAokKnowledgebaseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAokKnowledgebaseAuditByBeforeValueString(beforeValueString, updateAokKnowledgebaseAudit) {
    	try {
    		let objAokKnowledgebaseAudit;
    		if(sql) {
    			objAokKnowledgebaseAudit = await models.sequelize.aokKnowledgebaseAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objAokKnowledgebaseAudit) {
    				objAokKnowledgebaseAudit = await models.sequelize.aokKnowledgebaseAudit.update(updateAokKnowledgebaseAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objAokKnowledgebaseAudit = await models.mongoose.aokKnowledgebaseAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateAokKnowledgebaseAudit}, {new: true});
    		}
    		return objAokKnowledgebaseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAokKnowledgebaseAuditByAfterValueString(afterValueString, updateAokKnowledgebaseAudit) {
    	try {
    		let objAokKnowledgebaseAudit;
    		if(sql) {
    			objAokKnowledgebaseAudit = await models.sequelize.aokKnowledgebaseAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objAokKnowledgebaseAudit) {
    				objAokKnowledgebaseAudit = await models.sequelize.aokKnowledgebaseAudit.update(updateAokKnowledgebaseAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objAokKnowledgebaseAudit = await models.mongoose.aokKnowledgebaseAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateAokKnowledgebaseAudit}, {new: true});
    		}
    		return objAokKnowledgebaseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAokKnowledgebaseAuditByBeforeValueText(beforeValueText, updateAokKnowledgebaseAudit) {
    	try {
    		let objAokKnowledgebaseAudit;
    		if(sql) {
    			objAokKnowledgebaseAudit = await models.sequelize.aokKnowledgebaseAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objAokKnowledgebaseAudit) {
    				objAokKnowledgebaseAudit = await models.sequelize.aokKnowledgebaseAudit.update(updateAokKnowledgebaseAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objAokKnowledgebaseAudit = await models.mongoose.aokKnowledgebaseAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateAokKnowledgebaseAudit}, {new: true});
    		}
    		return objAokKnowledgebaseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAokKnowledgebaseAuditByAfterValueText(afterValueText, updateAokKnowledgebaseAudit) {
    	try {
    		let objAokKnowledgebaseAudit;
    		if(sql) {
    			objAokKnowledgebaseAudit = await models.sequelize.aokKnowledgebaseAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objAokKnowledgebaseAudit) {
    				objAokKnowledgebaseAudit = await models.sequelize.aokKnowledgebaseAudit.update(updateAokKnowledgebaseAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objAokKnowledgebaseAudit = await models.mongoose.aokKnowledgebaseAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateAokKnowledgebaseAudit}, {new: true});
    		}
    		return objAokKnowledgebaseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAokKnowledgebaseAuditByDateCreated(dateCreated, updateAokKnowledgebaseAudit) {
    	try {
    		let objAokKnowledgebaseAudit;
    		if(sql) {
    			objAokKnowledgebaseAudit = await models.sequelize.aokKnowledgebaseAudit.findOne({where: { date_created: dateCreated }});
    			if (objAokKnowledgebaseAudit) {
    				objAokKnowledgebaseAudit = await models.sequelize.aokKnowledgebaseAudit.update(updateAokKnowledgebaseAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objAokKnowledgebaseAudit = await models.mongoose.aokKnowledgebaseAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateAokKnowledgebaseAudit}, {new: true});
    		}
    		return objAokKnowledgebaseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAokKnowledgebaseAuditByParentId(parentId, updateAokKnowledgebaseAudit) {
    	try {
    		let objAokKnowledgebaseAudit;
    		if(sql) {
    			objAokKnowledgebaseAudit = await models.sequelize.aokKnowledgebaseAudit.findOne({where: { parent_id: parentId }});
    			if (objAokKnowledgebaseAudit) {
    				objAokKnowledgebaseAudit = await models.sequelize.aokKnowledgebaseAudit.update(updateAokKnowledgebaseAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objAokKnowledgebaseAudit = await models.mongoose.aokKnowledgebaseAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateAokKnowledgebaseAudit}, {new: true});
    		}
    		return objAokKnowledgebaseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AokKnowledgebaseAuditService;
//</es-section>
