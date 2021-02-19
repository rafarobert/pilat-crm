/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:36:42 GMT-0400 (Bolivia Time)
 * Time: 18:36:42
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:36:42 GMT-0400 (Bolivia Time)
 * Last time updated: 18:36:42
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

class CaseAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllCasesAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.casesAudit.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.casesAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllCasesAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.casesAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.casesAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addCaseAudit(newCaseAudit) {
		try {
			let objCaseAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.casesAudit.primaryKeys.id.type.toString())) {
			    newCaseAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objCaseAudit = await models.sequelize.casesAudit.create(newCaseAudit);
			} else {
				objCaseAudit = new models.mongoose.casesAudit(newCaseAudit);
				await objCaseAudit.save();
			}
			return objCaseAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateCaseAudit(id, updateCaseAudit) {
		try {
			let objCaseAudit;
			if(sql) {
				objCaseAudit = await models.sequelize.casesAudit.findOne({where: { id: util.Char(id) }});
				if (objCaseAudit) {
					await models.sequelize.casesAudit.update(updateCaseAudit, { where: { id: util.Char(id) } });
					objCaseAudit = await models.sequelize.casesAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateCaseAudit._id;
				objCaseAudit = await models.mongoose.casesAudit.findOneAndUpdate({id:id}, {$set: updateCaseAudit}, {new: true});
			}
			return objCaseAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getACaseAudit(id, query) {
		try {
			let objCaseAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objCaseAudit = await models.sequelize.casesAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objCaseAudit = await models.mongoose.casesAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objCaseAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteCaseAudit(id) {
		try {
			let objCaseAudit;
			if(sql) {
				objCaseAudit = await models.sequelize.casesAudit.findOne({ where: { id: util.Char(id) } });
				if (objCaseAudit) {
					await models.sequelize.casesAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objCaseAudit = await models.mongoose.casesAudit.deleteOne({id:util.Char(id)});
			}
			return objCaseAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objCaseAudit;
    		if(sql) {
    			objCaseAudit = await models.sequelize.casesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objCaseAudit = await models.mongoose.casesAudit.findOne({id: id});
    		}
    		return objCaseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objCaseAudit;
    		if(sql) {
    			objCaseAudit = await models.sequelize.casesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objCaseAudit = await models.mongoose.casesAudit.findOne({created_by: createdBy});
    		}
    		return objCaseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objCaseAudit;
    		if(sql) {
    			objCaseAudit = await models.sequelize.casesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objCaseAudit = await models.mongoose.casesAudit.findOne({field_name: fieldName});
    		}
    		return objCaseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objCaseAudit;
    		if(sql) {
    			objCaseAudit = await models.sequelize.casesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objCaseAudit = await models.mongoose.casesAudit.findOne({data_type: dataType});
    		}
    		return objCaseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objCaseAudit;
    		if(sql) {
    			objCaseAudit = await models.sequelize.casesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objCaseAudit = await models.mongoose.casesAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objCaseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objCaseAudit;
    		if(sql) {
    			objCaseAudit = await models.sequelize.casesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objCaseAudit = await models.mongoose.casesAudit.findOne({after_value_string: afterValueString});
    		}
    		return objCaseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objCaseAudit;
    		if(sql) {
    			objCaseAudit = await models.sequelize.casesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objCaseAudit = await models.mongoose.casesAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objCaseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objCaseAudit;
    		if(sql) {
    			objCaseAudit = await models.sequelize.casesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objCaseAudit = await models.mongoose.casesAudit.findOne({after_value_text: afterValueText});
    		}
    		return objCaseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objCaseAudit;
    		if(sql) {
    			objCaseAudit = await models.sequelize.casesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objCaseAudit = await models.mongoose.casesAudit.findOne({date_created: dateCreated});
    		}
    		return objCaseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objCaseAudit;
    		if(sql) {
    			objCaseAudit = await models.sequelize.casesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objCaseAudit = await models.mongoose.casesAudit.findOne({parent_id: parentId});
    		}
    		return objCaseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateCaseAuditById(id, updateCaseAudit) {
    	try {
    		let objCaseAudit;
    		if(sql) {
    			objCaseAudit = await models.sequelize.casesAudit.findOne({where: { id: id }});
    			if (objCaseAudit) {
    				objCaseAudit = await models.sequelize.casesAudit.update(updateCaseAudit, { where: { id: id } });
    			}
    		} else {
    			objCaseAudit = await models.mongoose.casesAudit.findOneAndUpdate({id: id}, {$set: updateCaseAudit}, {new: true});
    		}
    		return objCaseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCaseAuditByCreatedBy(createdBy, updateCaseAudit) {
    	try {
    		let objCaseAudit;
    		if(sql) {
    			objCaseAudit = await models.sequelize.casesAudit.findOne({where: { created_by: createdBy }});
    			if (objCaseAudit) {
    				objCaseAudit = await models.sequelize.casesAudit.update(updateCaseAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objCaseAudit = await models.mongoose.casesAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateCaseAudit}, {new: true});
    		}
    		return objCaseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCaseAuditByFieldName(fieldName, updateCaseAudit) {
    	try {
    		let objCaseAudit;
    		if(sql) {
    			objCaseAudit = await models.sequelize.casesAudit.findOne({where: { field_name: fieldName }});
    			if (objCaseAudit) {
    				objCaseAudit = await models.sequelize.casesAudit.update(updateCaseAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objCaseAudit = await models.mongoose.casesAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateCaseAudit}, {new: true});
    		}
    		return objCaseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCaseAuditByDataType(dataType, updateCaseAudit) {
    	try {
    		let objCaseAudit;
    		if(sql) {
    			objCaseAudit = await models.sequelize.casesAudit.findOne({where: { data_type: dataType }});
    			if (objCaseAudit) {
    				objCaseAudit = await models.sequelize.casesAudit.update(updateCaseAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objCaseAudit = await models.mongoose.casesAudit.findOneAndUpdate({data_type: dataType}, {$set: updateCaseAudit}, {new: true});
    		}
    		return objCaseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCaseAuditByBeforeValueString(beforeValueString, updateCaseAudit) {
    	try {
    		let objCaseAudit;
    		if(sql) {
    			objCaseAudit = await models.sequelize.casesAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objCaseAudit) {
    				objCaseAudit = await models.sequelize.casesAudit.update(updateCaseAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objCaseAudit = await models.mongoose.casesAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateCaseAudit}, {new: true});
    		}
    		return objCaseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCaseAuditByAfterValueString(afterValueString, updateCaseAudit) {
    	try {
    		let objCaseAudit;
    		if(sql) {
    			objCaseAudit = await models.sequelize.casesAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objCaseAudit) {
    				objCaseAudit = await models.sequelize.casesAudit.update(updateCaseAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objCaseAudit = await models.mongoose.casesAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateCaseAudit}, {new: true});
    		}
    		return objCaseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCaseAuditByBeforeValueText(beforeValueText, updateCaseAudit) {
    	try {
    		let objCaseAudit;
    		if(sql) {
    			objCaseAudit = await models.sequelize.casesAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objCaseAudit) {
    				objCaseAudit = await models.sequelize.casesAudit.update(updateCaseAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objCaseAudit = await models.mongoose.casesAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateCaseAudit}, {new: true});
    		}
    		return objCaseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCaseAuditByAfterValueText(afterValueText, updateCaseAudit) {
    	try {
    		let objCaseAudit;
    		if(sql) {
    			objCaseAudit = await models.sequelize.casesAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objCaseAudit) {
    				objCaseAudit = await models.sequelize.casesAudit.update(updateCaseAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objCaseAudit = await models.mongoose.casesAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateCaseAudit}, {new: true});
    		}
    		return objCaseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCaseAuditByDateCreated(dateCreated, updateCaseAudit) {
    	try {
    		let objCaseAudit;
    		if(sql) {
    			objCaseAudit = await models.sequelize.casesAudit.findOne({where: { date_created: dateCreated }});
    			if (objCaseAudit) {
    				objCaseAudit = await models.sequelize.casesAudit.update(updateCaseAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objCaseAudit = await models.mongoose.casesAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateCaseAudit}, {new: true});
    		}
    		return objCaseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCaseAuditByParentId(parentId, updateCaseAudit) {
    	try {
    		let objCaseAudit;
    		if(sql) {
    			objCaseAudit = await models.sequelize.casesAudit.findOne({where: { parent_id: parentId }});
    			if (objCaseAudit) {
    				objCaseAudit = await models.sequelize.casesAudit.update(updateCaseAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objCaseAudit = await models.mongoose.casesAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateCaseAudit}, {new: true});
    		}
    		return objCaseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = CaseAuditService;
//</es-section>
