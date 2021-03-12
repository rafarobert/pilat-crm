/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:15 GMT-0400 (Bolivia Time)
 * Time: 14:56:15
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:15 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:15
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

class AoPdfTemplateAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAosPdfTemplatesAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aosPdfTemplatesAudit.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aosPdfTemplatesAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAosPdfTemplatesAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aosPdfTemplatesAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aosPdfTemplatesAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAoPdfTemplateAudit(newAoPdfTemplateAudit) {
		try {
			let objAoPdfTemplateAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aosPdfTemplatesAudit.primaryKeys.id.type.toString())) {
			    newAoPdfTemplateAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAoPdfTemplateAudit = await models.sequelize.aosPdfTemplatesAudit.create(newAoPdfTemplateAudit);
			} else {
				objAoPdfTemplateAudit = new models.mongoose.aosPdfTemplatesAudit(newAoPdfTemplateAudit);
				await objAoPdfTemplateAudit.save();
			}
			return objAoPdfTemplateAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateAoPdfTemplateAudit(id, updateAoPdfTemplateAudit) {
		try {
			let objAoPdfTemplateAudit;
			if(sql) {
				objAoPdfTemplateAudit = await models.sequelize.aosPdfTemplatesAudit.findOne({where: { id: util.Char(id) }});
				if (objAoPdfTemplateAudit) {
					await models.sequelize.aosPdfTemplatesAudit.update(updateAoPdfTemplateAudit, { where: { id: util.Char(id) } });
					objAoPdfTemplateAudit = await models.sequelize.aosPdfTemplatesAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAoPdfTemplateAudit._id;
				objAoPdfTemplateAudit = await models.mongoose.aosPdfTemplatesAudit.findOneAndUpdate({id:id}, {$set: updateAoPdfTemplateAudit}, {new: true});
			}
			return objAoPdfTemplateAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getAAoPdfTemplateAudit(id, query) {
		try {
			let objAoPdfTemplateAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAoPdfTemplateAudit = await models.sequelize.aosPdfTemplatesAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAoPdfTemplateAudit = await models.mongoose.aosPdfTemplatesAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objAoPdfTemplateAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAoPdfTemplateAudit(id) {
		try {
			let objAoPdfTemplateAudit;
			if(sql) {
				objAoPdfTemplateAudit = await models.sequelize.aosPdfTemplatesAudit.findOne({ where: { id: util.Char(id) } });
				if (objAoPdfTemplateAudit) {
					await models.sequelize.aosPdfTemplatesAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAoPdfTemplateAudit = await models.mongoose.aosPdfTemplatesAudit.deleteOne({id:util.Char(id)});
			}
			return objAoPdfTemplateAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAoPdfTemplateAudit;
    		if(sql) {
    			objAoPdfTemplateAudit = await models.sequelize.aosPdfTemplatesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAoPdfTemplateAudit = await models.mongoose.aosPdfTemplatesAudit.findOne({id: id});
    		}
    		return objAoPdfTemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAoPdfTemplateAudit;
    		if(sql) {
    			objAoPdfTemplateAudit = await models.sequelize.aosPdfTemplatesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAoPdfTemplateAudit = await models.mongoose.aosPdfTemplatesAudit.findOne({created_by: createdBy});
    		}
    		return objAoPdfTemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objAoPdfTemplateAudit;
    		if(sql) {
    			objAoPdfTemplateAudit = await models.sequelize.aosPdfTemplatesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objAoPdfTemplateAudit = await models.mongoose.aosPdfTemplatesAudit.findOne({field_name: fieldName});
    		}
    		return objAoPdfTemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objAoPdfTemplateAudit;
    		if(sql) {
    			objAoPdfTemplateAudit = await models.sequelize.aosPdfTemplatesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objAoPdfTemplateAudit = await models.mongoose.aosPdfTemplatesAudit.findOne({data_type: dataType});
    		}
    		return objAoPdfTemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objAoPdfTemplateAudit;
    		if(sql) {
    			objAoPdfTemplateAudit = await models.sequelize.aosPdfTemplatesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objAoPdfTemplateAudit = await models.mongoose.aosPdfTemplatesAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objAoPdfTemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objAoPdfTemplateAudit;
    		if(sql) {
    			objAoPdfTemplateAudit = await models.sequelize.aosPdfTemplatesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objAoPdfTemplateAudit = await models.mongoose.aosPdfTemplatesAudit.findOne({after_value_string: afterValueString});
    		}
    		return objAoPdfTemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objAoPdfTemplateAudit;
    		if(sql) {
    			objAoPdfTemplateAudit = await models.sequelize.aosPdfTemplatesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objAoPdfTemplateAudit = await models.mongoose.aosPdfTemplatesAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objAoPdfTemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objAoPdfTemplateAudit;
    		if(sql) {
    			objAoPdfTemplateAudit = await models.sequelize.aosPdfTemplatesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objAoPdfTemplateAudit = await models.mongoose.aosPdfTemplatesAudit.findOne({after_value_text: afterValueText});
    		}
    		return objAoPdfTemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objAoPdfTemplateAudit;
    		if(sql) {
    			objAoPdfTemplateAudit = await models.sequelize.aosPdfTemplatesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objAoPdfTemplateAudit = await models.mongoose.aosPdfTemplatesAudit.findOne({date_created: dateCreated});
    		}
    		return objAoPdfTemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objAoPdfTemplateAudit;
    		if(sql) {
    			objAoPdfTemplateAudit = await models.sequelize.aosPdfTemplatesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objAoPdfTemplateAudit = await models.mongoose.aosPdfTemplatesAudit.findOne({parent_id: parentId});
    		}
    		return objAoPdfTemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAoPdfTemplateAuditById(id, updateAoPdfTemplateAudit) {
    	try {
    		let objAoPdfTemplateAudit;
    		if(sql) {
    			objAoPdfTemplateAudit = await models.sequelize.aosPdfTemplatesAudit.findOne({where: { id: id }});
    			if (objAoPdfTemplateAudit) {
    				objAoPdfTemplateAudit = await models.sequelize.aosPdfTemplatesAudit.update(updateAoPdfTemplateAudit, { where: { id: id } });
    			}
    		} else {
    			objAoPdfTemplateAudit = await models.mongoose.aosPdfTemplatesAudit.findOneAndUpdate({id: id}, {$set: updateAoPdfTemplateAudit}, {new: true});
    		}
    		return objAoPdfTemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoPdfTemplateAuditByCreatedBy(createdBy, updateAoPdfTemplateAudit) {
    	try {
    		let objAoPdfTemplateAudit;
    		if(sql) {
    			objAoPdfTemplateAudit = await models.sequelize.aosPdfTemplatesAudit.findOne({where: { created_by: createdBy }});
    			if (objAoPdfTemplateAudit) {
    				objAoPdfTemplateAudit = await models.sequelize.aosPdfTemplatesAudit.update(updateAoPdfTemplateAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAoPdfTemplateAudit = await models.mongoose.aosPdfTemplatesAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateAoPdfTemplateAudit}, {new: true});
    		}
    		return objAoPdfTemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoPdfTemplateAuditByFieldName(fieldName, updateAoPdfTemplateAudit) {
    	try {
    		let objAoPdfTemplateAudit;
    		if(sql) {
    			objAoPdfTemplateAudit = await models.sequelize.aosPdfTemplatesAudit.findOne({where: { field_name: fieldName }});
    			if (objAoPdfTemplateAudit) {
    				objAoPdfTemplateAudit = await models.sequelize.aosPdfTemplatesAudit.update(updateAoPdfTemplateAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objAoPdfTemplateAudit = await models.mongoose.aosPdfTemplatesAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateAoPdfTemplateAudit}, {new: true});
    		}
    		return objAoPdfTemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoPdfTemplateAuditByDataType(dataType, updateAoPdfTemplateAudit) {
    	try {
    		let objAoPdfTemplateAudit;
    		if(sql) {
    			objAoPdfTemplateAudit = await models.sequelize.aosPdfTemplatesAudit.findOne({where: { data_type: dataType }});
    			if (objAoPdfTemplateAudit) {
    				objAoPdfTemplateAudit = await models.sequelize.aosPdfTemplatesAudit.update(updateAoPdfTemplateAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objAoPdfTemplateAudit = await models.mongoose.aosPdfTemplatesAudit.findOneAndUpdate({data_type: dataType}, {$set: updateAoPdfTemplateAudit}, {new: true});
    		}
    		return objAoPdfTemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoPdfTemplateAuditByBeforeValueString(beforeValueString, updateAoPdfTemplateAudit) {
    	try {
    		let objAoPdfTemplateAudit;
    		if(sql) {
    			objAoPdfTemplateAudit = await models.sequelize.aosPdfTemplatesAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objAoPdfTemplateAudit) {
    				objAoPdfTemplateAudit = await models.sequelize.aosPdfTemplatesAudit.update(updateAoPdfTemplateAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objAoPdfTemplateAudit = await models.mongoose.aosPdfTemplatesAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateAoPdfTemplateAudit}, {new: true});
    		}
    		return objAoPdfTemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoPdfTemplateAuditByAfterValueString(afterValueString, updateAoPdfTemplateAudit) {
    	try {
    		let objAoPdfTemplateAudit;
    		if(sql) {
    			objAoPdfTemplateAudit = await models.sequelize.aosPdfTemplatesAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objAoPdfTemplateAudit) {
    				objAoPdfTemplateAudit = await models.sequelize.aosPdfTemplatesAudit.update(updateAoPdfTemplateAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objAoPdfTemplateAudit = await models.mongoose.aosPdfTemplatesAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateAoPdfTemplateAudit}, {new: true});
    		}
    		return objAoPdfTemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoPdfTemplateAuditByBeforeValueText(beforeValueText, updateAoPdfTemplateAudit) {
    	try {
    		let objAoPdfTemplateAudit;
    		if(sql) {
    			objAoPdfTemplateAudit = await models.sequelize.aosPdfTemplatesAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objAoPdfTemplateAudit) {
    				objAoPdfTemplateAudit = await models.sequelize.aosPdfTemplatesAudit.update(updateAoPdfTemplateAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objAoPdfTemplateAudit = await models.mongoose.aosPdfTemplatesAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateAoPdfTemplateAudit}, {new: true});
    		}
    		return objAoPdfTemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoPdfTemplateAuditByAfterValueText(afterValueText, updateAoPdfTemplateAudit) {
    	try {
    		let objAoPdfTemplateAudit;
    		if(sql) {
    			objAoPdfTemplateAudit = await models.sequelize.aosPdfTemplatesAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objAoPdfTemplateAudit) {
    				objAoPdfTemplateAudit = await models.sequelize.aosPdfTemplatesAudit.update(updateAoPdfTemplateAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objAoPdfTemplateAudit = await models.mongoose.aosPdfTemplatesAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateAoPdfTemplateAudit}, {new: true});
    		}
    		return objAoPdfTemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoPdfTemplateAuditByDateCreated(dateCreated, updateAoPdfTemplateAudit) {
    	try {
    		let objAoPdfTemplateAudit;
    		if(sql) {
    			objAoPdfTemplateAudit = await models.sequelize.aosPdfTemplatesAudit.findOne({where: { date_created: dateCreated }});
    			if (objAoPdfTemplateAudit) {
    				objAoPdfTemplateAudit = await models.sequelize.aosPdfTemplatesAudit.update(updateAoPdfTemplateAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objAoPdfTemplateAudit = await models.mongoose.aosPdfTemplatesAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateAoPdfTemplateAudit}, {new: true});
    		}
    		return objAoPdfTemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoPdfTemplateAuditByParentId(parentId, updateAoPdfTemplateAudit) {
    	try {
    		let objAoPdfTemplateAudit;
    		if(sql) {
    			objAoPdfTemplateAudit = await models.sequelize.aosPdfTemplatesAudit.findOne({where: { parent_id: parentId }});
    			if (objAoPdfTemplateAudit) {
    				objAoPdfTemplateAudit = await models.sequelize.aosPdfTemplatesAudit.update(updateAoPdfTemplateAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objAoPdfTemplateAudit = await models.mongoose.aosPdfTemplatesAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateAoPdfTemplateAudit}, {new: true});
    		}
    		return objAoPdfTemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AoPdfTemplateAuditService;
//</es-section>
