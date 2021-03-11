/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:55:55 GMT-0400 (Bolivia Time)
 * Time: 14:55:55
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:55:55 GMT-0400 (Bolivia Time)
 * Last time updated: 14:55:55
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

class AmTasktemplateAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAmTasktemplatesAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.amTasktemplatesAudit.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.amTasktemplatesAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAmTasktemplatesAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.amTasktemplatesAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.amTasktemplatesAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAmTasktemplateAudit(newAmTasktemplateAudit) {
		try {
			let objAmTasktemplateAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.amTasktemplatesAudit.primaryKeys.id.type.toString())) {
			    newAmTasktemplateAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAmTasktemplateAudit = await models.sequelize.amTasktemplatesAudit.create(newAmTasktemplateAudit);
			} else {
				objAmTasktemplateAudit = new models.mongoose.amTasktemplatesAudit(newAmTasktemplateAudit);
				await objAmTasktemplateAudit.save();
			}
			return objAmTasktemplateAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateAmTasktemplateAudit(id, updateAmTasktemplateAudit) {
		try {
			let objAmTasktemplateAudit;
			if(sql) {
				objAmTasktemplateAudit = await models.sequelize.amTasktemplatesAudit.findOne({where: { id: util.Char(id) }});
				if (objAmTasktemplateAudit) {
					await models.sequelize.amTasktemplatesAudit.update(updateAmTasktemplateAudit, { where: { id: util.Char(id) } });
					objAmTasktemplateAudit = await models.sequelize.amTasktemplatesAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAmTasktemplateAudit._id;
				objAmTasktemplateAudit = await models.mongoose.amTasktemplatesAudit.findOneAndUpdate({id:id}, {$set: updateAmTasktemplateAudit}, {new: true});
			}
			return objAmTasktemplateAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getAAmTasktemplateAudit(id, query) {
		try {
			let objAmTasktemplateAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAmTasktemplateAudit = await models.sequelize.amTasktemplatesAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAmTasktemplateAudit = await models.mongoose.amTasktemplatesAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objAmTasktemplateAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAmTasktemplateAudit(id) {
		try {
			let objAmTasktemplateAudit;
			if(sql) {
				objAmTasktemplateAudit = await models.sequelize.amTasktemplatesAudit.findOne({ where: { id: util.Char(id) } });
				if (objAmTasktemplateAudit) {
					await models.sequelize.amTasktemplatesAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAmTasktemplateAudit = await models.mongoose.amTasktemplatesAudit.deleteOne({id:util.Char(id)});
			}
			return objAmTasktemplateAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAmTasktemplateAudit;
    		if(sql) {
    			objAmTasktemplateAudit = await models.sequelize.amTasktemplatesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAmTasktemplateAudit = await models.mongoose.amTasktemplatesAudit.findOne({id: id});
    		}
    		return objAmTasktemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAmTasktemplateAudit;
    		if(sql) {
    			objAmTasktemplateAudit = await models.sequelize.amTasktemplatesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAmTasktemplateAudit = await models.mongoose.amTasktemplatesAudit.findOne({created_by: createdBy});
    		}
    		return objAmTasktemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objAmTasktemplateAudit;
    		if(sql) {
    			objAmTasktemplateAudit = await models.sequelize.amTasktemplatesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objAmTasktemplateAudit = await models.mongoose.amTasktemplatesAudit.findOne({field_name: fieldName});
    		}
    		return objAmTasktemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objAmTasktemplateAudit;
    		if(sql) {
    			objAmTasktemplateAudit = await models.sequelize.amTasktemplatesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objAmTasktemplateAudit = await models.mongoose.amTasktemplatesAudit.findOne({data_type: dataType});
    		}
    		return objAmTasktemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objAmTasktemplateAudit;
    		if(sql) {
    			objAmTasktemplateAudit = await models.sequelize.amTasktemplatesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objAmTasktemplateAudit = await models.mongoose.amTasktemplatesAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objAmTasktemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objAmTasktemplateAudit;
    		if(sql) {
    			objAmTasktemplateAudit = await models.sequelize.amTasktemplatesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objAmTasktemplateAudit = await models.mongoose.amTasktemplatesAudit.findOne({after_value_string: afterValueString});
    		}
    		return objAmTasktemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objAmTasktemplateAudit;
    		if(sql) {
    			objAmTasktemplateAudit = await models.sequelize.amTasktemplatesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objAmTasktemplateAudit = await models.mongoose.amTasktemplatesAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objAmTasktemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objAmTasktemplateAudit;
    		if(sql) {
    			objAmTasktemplateAudit = await models.sequelize.amTasktemplatesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objAmTasktemplateAudit = await models.mongoose.amTasktemplatesAudit.findOne({after_value_text: afterValueText});
    		}
    		return objAmTasktemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objAmTasktemplateAudit;
    		if(sql) {
    			objAmTasktemplateAudit = await models.sequelize.amTasktemplatesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objAmTasktemplateAudit = await models.mongoose.amTasktemplatesAudit.findOne({date_created: dateCreated});
    		}
    		return objAmTasktemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objAmTasktemplateAudit;
    		if(sql) {
    			objAmTasktemplateAudit = await models.sequelize.amTasktemplatesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objAmTasktemplateAudit = await models.mongoose.amTasktemplatesAudit.findOne({parent_id: parentId});
    		}
    		return objAmTasktemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAmTasktemplateAuditById(id, updateAmTasktemplateAudit) {
    	try {
    		let objAmTasktemplateAudit;
    		if(sql) {
    			objAmTasktemplateAudit = await models.sequelize.amTasktemplatesAudit.findOne({where: { id: id }});
    			if (objAmTasktemplateAudit) {
    				objAmTasktemplateAudit = await models.sequelize.amTasktemplatesAudit.update(updateAmTasktemplateAudit, { where: { id: id } });
    			}
    		} else {
    			objAmTasktemplateAudit = await models.mongoose.amTasktemplatesAudit.findOneAndUpdate({id: id}, {$set: updateAmTasktemplateAudit}, {new: true});
    		}
    		return objAmTasktemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmTasktemplateAuditByCreatedBy(createdBy, updateAmTasktemplateAudit) {
    	try {
    		let objAmTasktemplateAudit;
    		if(sql) {
    			objAmTasktemplateAudit = await models.sequelize.amTasktemplatesAudit.findOne({where: { created_by: createdBy }});
    			if (objAmTasktemplateAudit) {
    				objAmTasktemplateAudit = await models.sequelize.amTasktemplatesAudit.update(updateAmTasktemplateAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAmTasktemplateAudit = await models.mongoose.amTasktemplatesAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateAmTasktemplateAudit}, {new: true});
    		}
    		return objAmTasktemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmTasktemplateAuditByFieldName(fieldName, updateAmTasktemplateAudit) {
    	try {
    		let objAmTasktemplateAudit;
    		if(sql) {
    			objAmTasktemplateAudit = await models.sequelize.amTasktemplatesAudit.findOne({where: { field_name: fieldName }});
    			if (objAmTasktemplateAudit) {
    				objAmTasktemplateAudit = await models.sequelize.amTasktemplatesAudit.update(updateAmTasktemplateAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objAmTasktemplateAudit = await models.mongoose.amTasktemplatesAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateAmTasktemplateAudit}, {new: true});
    		}
    		return objAmTasktemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmTasktemplateAuditByDataType(dataType, updateAmTasktemplateAudit) {
    	try {
    		let objAmTasktemplateAudit;
    		if(sql) {
    			objAmTasktemplateAudit = await models.sequelize.amTasktemplatesAudit.findOne({where: { data_type: dataType }});
    			if (objAmTasktemplateAudit) {
    				objAmTasktemplateAudit = await models.sequelize.amTasktemplatesAudit.update(updateAmTasktemplateAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objAmTasktemplateAudit = await models.mongoose.amTasktemplatesAudit.findOneAndUpdate({data_type: dataType}, {$set: updateAmTasktemplateAudit}, {new: true});
    		}
    		return objAmTasktemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmTasktemplateAuditByBeforeValueString(beforeValueString, updateAmTasktemplateAudit) {
    	try {
    		let objAmTasktemplateAudit;
    		if(sql) {
    			objAmTasktemplateAudit = await models.sequelize.amTasktemplatesAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objAmTasktemplateAudit) {
    				objAmTasktemplateAudit = await models.sequelize.amTasktemplatesAudit.update(updateAmTasktemplateAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objAmTasktemplateAudit = await models.mongoose.amTasktemplatesAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateAmTasktemplateAudit}, {new: true});
    		}
    		return objAmTasktemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmTasktemplateAuditByAfterValueString(afterValueString, updateAmTasktemplateAudit) {
    	try {
    		let objAmTasktemplateAudit;
    		if(sql) {
    			objAmTasktemplateAudit = await models.sequelize.amTasktemplatesAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objAmTasktemplateAudit) {
    				objAmTasktemplateAudit = await models.sequelize.amTasktemplatesAudit.update(updateAmTasktemplateAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objAmTasktemplateAudit = await models.mongoose.amTasktemplatesAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateAmTasktemplateAudit}, {new: true});
    		}
    		return objAmTasktemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmTasktemplateAuditByBeforeValueText(beforeValueText, updateAmTasktemplateAudit) {
    	try {
    		let objAmTasktemplateAudit;
    		if(sql) {
    			objAmTasktemplateAudit = await models.sequelize.amTasktemplatesAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objAmTasktemplateAudit) {
    				objAmTasktemplateAudit = await models.sequelize.amTasktemplatesAudit.update(updateAmTasktemplateAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objAmTasktemplateAudit = await models.mongoose.amTasktemplatesAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateAmTasktemplateAudit}, {new: true});
    		}
    		return objAmTasktemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmTasktemplateAuditByAfterValueText(afterValueText, updateAmTasktemplateAudit) {
    	try {
    		let objAmTasktemplateAudit;
    		if(sql) {
    			objAmTasktemplateAudit = await models.sequelize.amTasktemplatesAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objAmTasktemplateAudit) {
    				objAmTasktemplateAudit = await models.sequelize.amTasktemplatesAudit.update(updateAmTasktemplateAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objAmTasktemplateAudit = await models.mongoose.amTasktemplatesAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateAmTasktemplateAudit}, {new: true});
    		}
    		return objAmTasktemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmTasktemplateAuditByDateCreated(dateCreated, updateAmTasktemplateAudit) {
    	try {
    		let objAmTasktemplateAudit;
    		if(sql) {
    			objAmTasktemplateAudit = await models.sequelize.amTasktemplatesAudit.findOne({where: { date_created: dateCreated }});
    			if (objAmTasktemplateAudit) {
    				objAmTasktemplateAudit = await models.sequelize.amTasktemplatesAudit.update(updateAmTasktemplateAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objAmTasktemplateAudit = await models.mongoose.amTasktemplatesAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateAmTasktemplateAudit}, {new: true});
    		}
    		return objAmTasktemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmTasktemplateAuditByParentId(parentId, updateAmTasktemplateAudit) {
    	try {
    		let objAmTasktemplateAudit;
    		if(sql) {
    			objAmTasktemplateAudit = await models.sequelize.amTasktemplatesAudit.findOne({where: { parent_id: parentId }});
    			if (objAmTasktemplateAudit) {
    				objAmTasktemplateAudit = await models.sequelize.amTasktemplatesAudit.update(updateAmTasktemplateAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objAmTasktemplateAudit = await models.mongoose.amTasktemplatesAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateAmTasktemplateAudit}, {new: true});
    		}
    		return objAmTasktemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AmTasktemplateAuditService;
//</es-section>
