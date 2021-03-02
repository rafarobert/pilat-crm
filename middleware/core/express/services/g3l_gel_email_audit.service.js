/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:55 GMT-0400 (Bolivia Time)
 * Time: 14:0:55
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:55 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:55
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

class G3lGelEmailAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllG3lGelEmailAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.g3lGelEmailAudit.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.g3lGelEmailAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllG3lGelEmailAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.g3lGelEmailAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.g3lGelEmailAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addG3lGelEmailAudit(newG3lGelEmailAudit) {
		try {
			let objG3lGelEmailAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.g3lGelEmailAudit.primaryKeys.id.type.toString())) {
			    newG3lGelEmailAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objG3lGelEmailAudit = await models.sequelize.g3lGelEmailAudit.create(newG3lGelEmailAudit);
			} else {
				objG3lGelEmailAudit = new models.mongoose.g3lGelEmailAudit(newG3lGelEmailAudit);
				await objG3lGelEmailAudit.save();
			}
			return objG3lGelEmailAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateG3lGelEmailAudit(id, updateG3lGelEmailAudit) {
		try {
			let objG3lGelEmailAudit;
			if(sql) {
				objG3lGelEmailAudit = await models.sequelize.g3lGelEmailAudit.findOne({where: { id: util.Char(id) }});
				if (objG3lGelEmailAudit) {
					await models.sequelize.g3lGelEmailAudit.update(updateG3lGelEmailAudit, { where: { id: util.Char(id) } });
					objG3lGelEmailAudit = await models.sequelize.g3lGelEmailAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateG3lGelEmailAudit._id;
				objG3lGelEmailAudit = await models.mongoose.g3lGelEmailAudit.findOneAndUpdate({id:id}, {$set: updateG3lGelEmailAudit}, {new: true});
			}
			return objG3lGelEmailAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getAG3lGelEmailAudit(id, query) {
		try {
			let objG3lGelEmailAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objG3lGelEmailAudit = await models.sequelize.g3lGelEmailAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objG3lGelEmailAudit = await models.mongoose.g3lGelEmailAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objG3lGelEmailAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteG3lGelEmailAudit(id) {
		try {
			let objG3lGelEmailAudit;
			if(sql) {
				objG3lGelEmailAudit = await models.sequelize.g3lGelEmailAudit.findOne({ where: { id: util.Char(id) } });
				if (objG3lGelEmailAudit) {
					await models.sequelize.g3lGelEmailAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objG3lGelEmailAudit = await models.mongoose.g3lGelEmailAudit.deleteOne({id:util.Char(id)});
			}
			return objG3lGelEmailAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objG3lGelEmailAudit;
    		if(sql) {
    			objG3lGelEmailAudit = await models.sequelize.g3lGelEmailAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objG3lGelEmailAudit = await models.mongoose.g3lGelEmailAudit.findOne({id: id});
    		}
    		return objG3lGelEmailAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objG3lGelEmailAudit;
    		if(sql) {
    			objG3lGelEmailAudit = await models.sequelize.g3lGelEmailAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objG3lGelEmailAudit = await models.mongoose.g3lGelEmailAudit.findOne({created_by: createdBy});
    		}
    		return objG3lGelEmailAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objG3lGelEmailAudit;
    		if(sql) {
    			objG3lGelEmailAudit = await models.sequelize.g3lGelEmailAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objG3lGelEmailAudit = await models.mongoose.g3lGelEmailAudit.findOne({field_name: fieldName});
    		}
    		return objG3lGelEmailAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objG3lGelEmailAudit;
    		if(sql) {
    			objG3lGelEmailAudit = await models.sequelize.g3lGelEmailAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objG3lGelEmailAudit = await models.mongoose.g3lGelEmailAudit.findOne({data_type: dataType});
    		}
    		return objG3lGelEmailAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objG3lGelEmailAudit;
    		if(sql) {
    			objG3lGelEmailAudit = await models.sequelize.g3lGelEmailAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objG3lGelEmailAudit = await models.mongoose.g3lGelEmailAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objG3lGelEmailAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objG3lGelEmailAudit;
    		if(sql) {
    			objG3lGelEmailAudit = await models.sequelize.g3lGelEmailAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objG3lGelEmailAudit = await models.mongoose.g3lGelEmailAudit.findOne({after_value_string: afterValueString});
    		}
    		return objG3lGelEmailAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objG3lGelEmailAudit;
    		if(sql) {
    			objG3lGelEmailAudit = await models.sequelize.g3lGelEmailAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objG3lGelEmailAudit = await models.mongoose.g3lGelEmailAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objG3lGelEmailAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objG3lGelEmailAudit;
    		if(sql) {
    			objG3lGelEmailAudit = await models.sequelize.g3lGelEmailAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objG3lGelEmailAudit = await models.mongoose.g3lGelEmailAudit.findOne({after_value_text: afterValueText});
    		}
    		return objG3lGelEmailAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objG3lGelEmailAudit;
    		if(sql) {
    			objG3lGelEmailAudit = await models.sequelize.g3lGelEmailAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objG3lGelEmailAudit = await models.mongoose.g3lGelEmailAudit.findOne({date_created: dateCreated});
    		}
    		return objG3lGelEmailAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objG3lGelEmailAudit;
    		if(sql) {
    			objG3lGelEmailAudit = await models.sequelize.g3lGelEmailAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objG3lGelEmailAudit = await models.mongoose.g3lGelEmailAudit.findOne({parent_id: parentId});
    		}
    		return objG3lGelEmailAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateG3lGelEmailAuditById(id, updateG3lGelEmailAudit) {
    	try {
    		let objG3lGelEmailAudit;
    		if(sql) {
    			objG3lGelEmailAudit = await models.sequelize.g3lGelEmailAudit.findOne({where: { id: id }});
    			if (objG3lGelEmailAudit) {
    				objG3lGelEmailAudit = await models.sequelize.g3lGelEmailAudit.update(updateG3lGelEmailAudit, { where: { id: id } });
    			}
    		} else {
    			objG3lGelEmailAudit = await models.mongoose.g3lGelEmailAudit.findOneAndUpdate({id: id}, {$set: updateG3lGelEmailAudit}, {new: true});
    		}
    		return objG3lGelEmailAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelEmailAuditByCreatedBy(createdBy, updateG3lGelEmailAudit) {
    	try {
    		let objG3lGelEmailAudit;
    		if(sql) {
    			objG3lGelEmailAudit = await models.sequelize.g3lGelEmailAudit.findOne({where: { created_by: createdBy }});
    			if (objG3lGelEmailAudit) {
    				objG3lGelEmailAudit = await models.sequelize.g3lGelEmailAudit.update(updateG3lGelEmailAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objG3lGelEmailAudit = await models.mongoose.g3lGelEmailAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateG3lGelEmailAudit}, {new: true});
    		}
    		return objG3lGelEmailAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelEmailAuditByFieldName(fieldName, updateG3lGelEmailAudit) {
    	try {
    		let objG3lGelEmailAudit;
    		if(sql) {
    			objG3lGelEmailAudit = await models.sequelize.g3lGelEmailAudit.findOne({where: { field_name: fieldName }});
    			if (objG3lGelEmailAudit) {
    				objG3lGelEmailAudit = await models.sequelize.g3lGelEmailAudit.update(updateG3lGelEmailAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objG3lGelEmailAudit = await models.mongoose.g3lGelEmailAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateG3lGelEmailAudit}, {new: true});
    		}
    		return objG3lGelEmailAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelEmailAuditByDataType(dataType, updateG3lGelEmailAudit) {
    	try {
    		let objG3lGelEmailAudit;
    		if(sql) {
    			objG3lGelEmailAudit = await models.sequelize.g3lGelEmailAudit.findOne({where: { data_type: dataType }});
    			if (objG3lGelEmailAudit) {
    				objG3lGelEmailAudit = await models.sequelize.g3lGelEmailAudit.update(updateG3lGelEmailAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objG3lGelEmailAudit = await models.mongoose.g3lGelEmailAudit.findOneAndUpdate({data_type: dataType}, {$set: updateG3lGelEmailAudit}, {new: true});
    		}
    		return objG3lGelEmailAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelEmailAuditByBeforeValueString(beforeValueString, updateG3lGelEmailAudit) {
    	try {
    		let objG3lGelEmailAudit;
    		if(sql) {
    			objG3lGelEmailAudit = await models.sequelize.g3lGelEmailAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objG3lGelEmailAudit) {
    				objG3lGelEmailAudit = await models.sequelize.g3lGelEmailAudit.update(updateG3lGelEmailAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objG3lGelEmailAudit = await models.mongoose.g3lGelEmailAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateG3lGelEmailAudit}, {new: true});
    		}
    		return objG3lGelEmailAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelEmailAuditByAfterValueString(afterValueString, updateG3lGelEmailAudit) {
    	try {
    		let objG3lGelEmailAudit;
    		if(sql) {
    			objG3lGelEmailAudit = await models.sequelize.g3lGelEmailAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objG3lGelEmailAudit) {
    				objG3lGelEmailAudit = await models.sequelize.g3lGelEmailAudit.update(updateG3lGelEmailAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objG3lGelEmailAudit = await models.mongoose.g3lGelEmailAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateG3lGelEmailAudit}, {new: true});
    		}
    		return objG3lGelEmailAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelEmailAuditByBeforeValueText(beforeValueText, updateG3lGelEmailAudit) {
    	try {
    		let objG3lGelEmailAudit;
    		if(sql) {
    			objG3lGelEmailAudit = await models.sequelize.g3lGelEmailAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objG3lGelEmailAudit) {
    				objG3lGelEmailAudit = await models.sequelize.g3lGelEmailAudit.update(updateG3lGelEmailAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objG3lGelEmailAudit = await models.mongoose.g3lGelEmailAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateG3lGelEmailAudit}, {new: true});
    		}
    		return objG3lGelEmailAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelEmailAuditByAfterValueText(afterValueText, updateG3lGelEmailAudit) {
    	try {
    		let objG3lGelEmailAudit;
    		if(sql) {
    			objG3lGelEmailAudit = await models.sequelize.g3lGelEmailAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objG3lGelEmailAudit) {
    				objG3lGelEmailAudit = await models.sequelize.g3lGelEmailAudit.update(updateG3lGelEmailAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objG3lGelEmailAudit = await models.mongoose.g3lGelEmailAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateG3lGelEmailAudit}, {new: true});
    		}
    		return objG3lGelEmailAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelEmailAuditByDateCreated(dateCreated, updateG3lGelEmailAudit) {
    	try {
    		let objG3lGelEmailAudit;
    		if(sql) {
    			objG3lGelEmailAudit = await models.sequelize.g3lGelEmailAudit.findOne({where: { date_created: dateCreated }});
    			if (objG3lGelEmailAudit) {
    				objG3lGelEmailAudit = await models.sequelize.g3lGelEmailAudit.update(updateG3lGelEmailAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objG3lGelEmailAudit = await models.mongoose.g3lGelEmailAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateG3lGelEmailAudit}, {new: true});
    		}
    		return objG3lGelEmailAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelEmailAuditByParentId(parentId, updateG3lGelEmailAudit) {
    	try {
    		let objG3lGelEmailAudit;
    		if(sql) {
    			objG3lGelEmailAudit = await models.sequelize.g3lGelEmailAudit.findOne({where: { parent_id: parentId }});
    			if (objG3lGelEmailAudit) {
    				objG3lGelEmailAudit = await models.sequelize.g3lGelEmailAudit.update(updateG3lGelEmailAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objG3lGelEmailAudit = await models.mongoose.g3lGelEmailAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateG3lGelEmailAudit}, {new: true});
    		}
    		return objG3lGelEmailAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = G3lGelEmailAuditService;
//</es-section>
