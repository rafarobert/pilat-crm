/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:56 GMT-0400 (Bolivia Time)
 * Time: 14:0:56
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:56 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:56
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

class G3lGelWhatsappAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllG3lGelWhatsappAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.g3lGelWhatsappAudit.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.g3lGelWhatsappAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllG3lGelWhatsappAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.g3lGelWhatsappAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.g3lGelWhatsappAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addG3lGelWhatsappAudit(newG3lGelWhatsappAudit) {
		try {
			let objG3lGelWhatsappAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.g3lGelWhatsappAudit.primaryKeys.id.type.toString())) {
			    newG3lGelWhatsappAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objG3lGelWhatsappAudit = await models.sequelize.g3lGelWhatsappAudit.create(newG3lGelWhatsappAudit);
			} else {
				objG3lGelWhatsappAudit = new models.mongoose.g3lGelWhatsappAudit(newG3lGelWhatsappAudit);
				await objG3lGelWhatsappAudit.save();
			}
			return objG3lGelWhatsappAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateG3lGelWhatsappAudit(id, updateG3lGelWhatsappAudit) {
		try {
			let objG3lGelWhatsappAudit;
			if(sql) {
				objG3lGelWhatsappAudit = await models.sequelize.g3lGelWhatsappAudit.findOne({where: { id: util.Char(id) }});
				if (objG3lGelWhatsappAudit) {
					await models.sequelize.g3lGelWhatsappAudit.update(updateG3lGelWhatsappAudit, { where: { id: util.Char(id) } });
					objG3lGelWhatsappAudit = await models.sequelize.g3lGelWhatsappAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateG3lGelWhatsappAudit._id;
				objG3lGelWhatsappAudit = await models.mongoose.g3lGelWhatsappAudit.findOneAndUpdate({id:id}, {$set: updateG3lGelWhatsappAudit}, {new: true});
			}
			return objG3lGelWhatsappAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getAG3lGelWhatsappAudit(id, query) {
		try {
			let objG3lGelWhatsappAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objG3lGelWhatsappAudit = await models.sequelize.g3lGelWhatsappAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objG3lGelWhatsappAudit = await models.mongoose.g3lGelWhatsappAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objG3lGelWhatsappAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteG3lGelWhatsappAudit(id) {
		try {
			let objG3lGelWhatsappAudit;
			if(sql) {
				objG3lGelWhatsappAudit = await models.sequelize.g3lGelWhatsappAudit.findOne({ where: { id: util.Char(id) } });
				if (objG3lGelWhatsappAudit) {
					await models.sequelize.g3lGelWhatsappAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objG3lGelWhatsappAudit = await models.mongoose.g3lGelWhatsappAudit.deleteOne({id:util.Char(id)});
			}
			return objG3lGelWhatsappAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objG3lGelWhatsappAudit;
    		if(sql) {
    			objG3lGelWhatsappAudit = await models.sequelize.g3lGelWhatsappAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objG3lGelWhatsappAudit = await models.mongoose.g3lGelWhatsappAudit.findOne({id: id});
    		}
    		return objG3lGelWhatsappAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objG3lGelWhatsappAudit;
    		if(sql) {
    			objG3lGelWhatsappAudit = await models.sequelize.g3lGelWhatsappAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objG3lGelWhatsappAudit = await models.mongoose.g3lGelWhatsappAudit.findOne({created_by: createdBy});
    		}
    		return objG3lGelWhatsappAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objG3lGelWhatsappAudit;
    		if(sql) {
    			objG3lGelWhatsappAudit = await models.sequelize.g3lGelWhatsappAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objG3lGelWhatsappAudit = await models.mongoose.g3lGelWhatsappAudit.findOne({field_name: fieldName});
    		}
    		return objG3lGelWhatsappAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objG3lGelWhatsappAudit;
    		if(sql) {
    			objG3lGelWhatsappAudit = await models.sequelize.g3lGelWhatsappAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objG3lGelWhatsappAudit = await models.mongoose.g3lGelWhatsappAudit.findOne({data_type: dataType});
    		}
    		return objG3lGelWhatsappAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objG3lGelWhatsappAudit;
    		if(sql) {
    			objG3lGelWhatsappAudit = await models.sequelize.g3lGelWhatsappAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objG3lGelWhatsappAudit = await models.mongoose.g3lGelWhatsappAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objG3lGelWhatsappAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objG3lGelWhatsappAudit;
    		if(sql) {
    			objG3lGelWhatsappAudit = await models.sequelize.g3lGelWhatsappAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objG3lGelWhatsappAudit = await models.mongoose.g3lGelWhatsappAudit.findOne({after_value_string: afterValueString});
    		}
    		return objG3lGelWhatsappAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objG3lGelWhatsappAudit;
    		if(sql) {
    			objG3lGelWhatsappAudit = await models.sequelize.g3lGelWhatsappAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objG3lGelWhatsappAudit = await models.mongoose.g3lGelWhatsappAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objG3lGelWhatsappAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objG3lGelWhatsappAudit;
    		if(sql) {
    			objG3lGelWhatsappAudit = await models.sequelize.g3lGelWhatsappAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objG3lGelWhatsappAudit = await models.mongoose.g3lGelWhatsappAudit.findOne({after_value_text: afterValueText});
    		}
    		return objG3lGelWhatsappAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objG3lGelWhatsappAudit;
    		if(sql) {
    			objG3lGelWhatsappAudit = await models.sequelize.g3lGelWhatsappAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objG3lGelWhatsappAudit = await models.mongoose.g3lGelWhatsappAudit.findOne({date_created: dateCreated});
    		}
    		return objG3lGelWhatsappAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objG3lGelWhatsappAudit;
    		if(sql) {
    			objG3lGelWhatsappAudit = await models.sequelize.g3lGelWhatsappAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objG3lGelWhatsappAudit = await models.mongoose.g3lGelWhatsappAudit.findOne({parent_id: parentId});
    		}
    		return objG3lGelWhatsappAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateG3lGelWhatsappAuditById(id, updateG3lGelWhatsappAudit) {
    	try {
    		let objG3lGelWhatsappAudit;
    		if(sql) {
    			objG3lGelWhatsappAudit = await models.sequelize.g3lGelWhatsappAudit.findOne({where: { id: id }});
    			if (objG3lGelWhatsappAudit) {
    				objG3lGelWhatsappAudit = await models.sequelize.g3lGelWhatsappAudit.update(updateG3lGelWhatsappAudit, { where: { id: id } });
    			}
    		} else {
    			objG3lGelWhatsappAudit = await models.mongoose.g3lGelWhatsappAudit.findOneAndUpdate({id: id}, {$set: updateG3lGelWhatsappAudit}, {new: true});
    		}
    		return objG3lGelWhatsappAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelWhatsappAuditByCreatedBy(createdBy, updateG3lGelWhatsappAudit) {
    	try {
    		let objG3lGelWhatsappAudit;
    		if(sql) {
    			objG3lGelWhatsappAudit = await models.sequelize.g3lGelWhatsappAudit.findOne({where: { created_by: createdBy }});
    			if (objG3lGelWhatsappAudit) {
    				objG3lGelWhatsappAudit = await models.sequelize.g3lGelWhatsappAudit.update(updateG3lGelWhatsappAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objG3lGelWhatsappAudit = await models.mongoose.g3lGelWhatsappAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateG3lGelWhatsappAudit}, {new: true});
    		}
    		return objG3lGelWhatsappAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelWhatsappAuditByFieldName(fieldName, updateG3lGelWhatsappAudit) {
    	try {
    		let objG3lGelWhatsappAudit;
    		if(sql) {
    			objG3lGelWhatsappAudit = await models.sequelize.g3lGelWhatsappAudit.findOne({where: { field_name: fieldName }});
    			if (objG3lGelWhatsappAudit) {
    				objG3lGelWhatsappAudit = await models.sequelize.g3lGelWhatsappAudit.update(updateG3lGelWhatsappAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objG3lGelWhatsappAudit = await models.mongoose.g3lGelWhatsappAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateG3lGelWhatsappAudit}, {new: true});
    		}
    		return objG3lGelWhatsappAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelWhatsappAuditByDataType(dataType, updateG3lGelWhatsappAudit) {
    	try {
    		let objG3lGelWhatsappAudit;
    		if(sql) {
    			objG3lGelWhatsappAudit = await models.sequelize.g3lGelWhatsappAudit.findOne({where: { data_type: dataType }});
    			if (objG3lGelWhatsappAudit) {
    				objG3lGelWhatsappAudit = await models.sequelize.g3lGelWhatsappAudit.update(updateG3lGelWhatsappAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objG3lGelWhatsappAudit = await models.mongoose.g3lGelWhatsappAudit.findOneAndUpdate({data_type: dataType}, {$set: updateG3lGelWhatsappAudit}, {new: true});
    		}
    		return objG3lGelWhatsappAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelWhatsappAuditByBeforeValueString(beforeValueString, updateG3lGelWhatsappAudit) {
    	try {
    		let objG3lGelWhatsappAudit;
    		if(sql) {
    			objG3lGelWhatsappAudit = await models.sequelize.g3lGelWhatsappAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objG3lGelWhatsappAudit) {
    				objG3lGelWhatsappAudit = await models.sequelize.g3lGelWhatsappAudit.update(updateG3lGelWhatsappAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objG3lGelWhatsappAudit = await models.mongoose.g3lGelWhatsappAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateG3lGelWhatsappAudit}, {new: true});
    		}
    		return objG3lGelWhatsappAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelWhatsappAuditByAfterValueString(afterValueString, updateG3lGelWhatsappAudit) {
    	try {
    		let objG3lGelWhatsappAudit;
    		if(sql) {
    			objG3lGelWhatsappAudit = await models.sequelize.g3lGelWhatsappAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objG3lGelWhatsappAudit) {
    				objG3lGelWhatsappAudit = await models.sequelize.g3lGelWhatsappAudit.update(updateG3lGelWhatsappAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objG3lGelWhatsappAudit = await models.mongoose.g3lGelWhatsappAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateG3lGelWhatsappAudit}, {new: true});
    		}
    		return objG3lGelWhatsappAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelWhatsappAuditByBeforeValueText(beforeValueText, updateG3lGelWhatsappAudit) {
    	try {
    		let objG3lGelWhatsappAudit;
    		if(sql) {
    			objG3lGelWhatsappAudit = await models.sequelize.g3lGelWhatsappAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objG3lGelWhatsappAudit) {
    				objG3lGelWhatsappAudit = await models.sequelize.g3lGelWhatsappAudit.update(updateG3lGelWhatsappAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objG3lGelWhatsappAudit = await models.mongoose.g3lGelWhatsappAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateG3lGelWhatsappAudit}, {new: true});
    		}
    		return objG3lGelWhatsappAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelWhatsappAuditByAfterValueText(afterValueText, updateG3lGelWhatsappAudit) {
    	try {
    		let objG3lGelWhatsappAudit;
    		if(sql) {
    			objG3lGelWhatsappAudit = await models.sequelize.g3lGelWhatsappAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objG3lGelWhatsappAudit) {
    				objG3lGelWhatsappAudit = await models.sequelize.g3lGelWhatsappAudit.update(updateG3lGelWhatsappAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objG3lGelWhatsappAudit = await models.mongoose.g3lGelWhatsappAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateG3lGelWhatsappAudit}, {new: true});
    		}
    		return objG3lGelWhatsappAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelWhatsappAuditByDateCreated(dateCreated, updateG3lGelWhatsappAudit) {
    	try {
    		let objG3lGelWhatsappAudit;
    		if(sql) {
    			objG3lGelWhatsappAudit = await models.sequelize.g3lGelWhatsappAudit.findOne({where: { date_created: dateCreated }});
    			if (objG3lGelWhatsappAudit) {
    				objG3lGelWhatsappAudit = await models.sequelize.g3lGelWhatsappAudit.update(updateG3lGelWhatsappAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objG3lGelWhatsappAudit = await models.mongoose.g3lGelWhatsappAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateG3lGelWhatsappAudit}, {new: true});
    		}
    		return objG3lGelWhatsappAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelWhatsappAuditByParentId(parentId, updateG3lGelWhatsappAudit) {
    	try {
    		let objG3lGelWhatsappAudit;
    		if(sql) {
    			objG3lGelWhatsappAudit = await models.sequelize.g3lGelWhatsappAudit.findOne({where: { parent_id: parentId }});
    			if (objG3lGelWhatsappAudit) {
    				objG3lGelWhatsappAudit = await models.sequelize.g3lGelWhatsappAudit.update(updateG3lGelWhatsappAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objG3lGelWhatsappAudit = await models.mongoose.g3lGelWhatsappAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateG3lGelWhatsappAudit}, {new: true});
    		}
    		return objG3lGelWhatsappAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = G3lGelWhatsappAuditService;
//</es-section>
