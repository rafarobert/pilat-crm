/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:09 GMT-0400 (Bolivia Time)
 * Time: 0:23:9
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:09 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:9
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

class JjwgAreaAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllJjwgAreasAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.jjwgAreasAudit.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.jjwgAreasAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllJjwgAreasAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.jjwgAreasAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.jjwgAreasAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addJjwgAreaAudit(newJjwgAreaAudit) {
		try {
			let objJjwgAreaAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.jjwgAreasAudit.primaryKeys.id.type.toString())) {
			    newJjwgAreaAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objJjwgAreaAudit = await models.sequelize.jjwgAreasAudit.create(newJjwgAreaAudit);
			} else {
				objJjwgAreaAudit = new models.mongoose.jjwgAreasAudit(newJjwgAreaAudit);
				await objJjwgAreaAudit.save();
			}
			return objJjwgAreaAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateJjwgAreaAudit(id, updateJjwgAreaAudit) {
		try {
			let objJjwgAreaAudit;
			if(sql) {
				objJjwgAreaAudit = await models.sequelize.jjwgAreasAudit.findOne({where: { id: util.Char(id) }});
				if (objJjwgAreaAudit) {
					await models.sequelize.jjwgAreasAudit.update(updateJjwgAreaAudit, { where: { id: util.Char(id) } });
					objJjwgAreaAudit = await models.sequelize.jjwgAreasAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateJjwgAreaAudit._id;
				objJjwgAreaAudit = await models.mongoose.jjwgAreasAudit.findOneAndUpdate({id:id}, {$set: updateJjwgAreaAudit}, {new: true});
			}
			return objJjwgAreaAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getAJjwgAreaAudit(id, query) {
		try {
			let objJjwgAreaAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objJjwgAreaAudit = await models.sequelize.jjwgAreasAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objJjwgAreaAudit = await models.mongoose.jjwgAreasAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objJjwgAreaAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteJjwgAreaAudit(id) {
		try {
			let objJjwgAreaAudit;
			if(sql) {
				objJjwgAreaAudit = await models.sequelize.jjwgAreasAudit.findOne({ where: { id: util.Char(id) } });
				if (objJjwgAreaAudit) {
					await models.sequelize.jjwgAreasAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objJjwgAreaAudit = await models.mongoose.jjwgAreasAudit.deleteOne({id:util.Char(id)});
			}
			return objJjwgAreaAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objJjwgAreaAudit;
    		if(sql) {
    			objJjwgAreaAudit = await models.sequelize.jjwgAreasAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objJjwgAreaAudit = await models.mongoose.jjwgAreasAudit.findOne({id: id});
    		}
    		return objJjwgAreaAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objJjwgAreaAudit;
    		if(sql) {
    			objJjwgAreaAudit = await models.sequelize.jjwgAreasAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objJjwgAreaAudit = await models.mongoose.jjwgAreasAudit.findOne({created_by: createdBy});
    		}
    		return objJjwgAreaAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objJjwgAreaAudit;
    		if(sql) {
    			objJjwgAreaAudit = await models.sequelize.jjwgAreasAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objJjwgAreaAudit = await models.mongoose.jjwgAreasAudit.findOne({field_name: fieldName});
    		}
    		return objJjwgAreaAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objJjwgAreaAudit;
    		if(sql) {
    			objJjwgAreaAudit = await models.sequelize.jjwgAreasAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objJjwgAreaAudit = await models.mongoose.jjwgAreasAudit.findOne({data_type: dataType});
    		}
    		return objJjwgAreaAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objJjwgAreaAudit;
    		if(sql) {
    			objJjwgAreaAudit = await models.sequelize.jjwgAreasAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objJjwgAreaAudit = await models.mongoose.jjwgAreasAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objJjwgAreaAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objJjwgAreaAudit;
    		if(sql) {
    			objJjwgAreaAudit = await models.sequelize.jjwgAreasAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objJjwgAreaAudit = await models.mongoose.jjwgAreasAudit.findOne({after_value_string: afterValueString});
    		}
    		return objJjwgAreaAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objJjwgAreaAudit;
    		if(sql) {
    			objJjwgAreaAudit = await models.sequelize.jjwgAreasAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objJjwgAreaAudit = await models.mongoose.jjwgAreasAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objJjwgAreaAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objJjwgAreaAudit;
    		if(sql) {
    			objJjwgAreaAudit = await models.sequelize.jjwgAreasAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objJjwgAreaAudit = await models.mongoose.jjwgAreasAudit.findOne({after_value_text: afterValueText});
    		}
    		return objJjwgAreaAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objJjwgAreaAudit;
    		if(sql) {
    			objJjwgAreaAudit = await models.sequelize.jjwgAreasAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objJjwgAreaAudit = await models.mongoose.jjwgAreasAudit.findOne({date_created: dateCreated});
    		}
    		return objJjwgAreaAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objJjwgAreaAudit;
    		if(sql) {
    			objJjwgAreaAudit = await models.sequelize.jjwgAreasAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objJjwgAreaAudit = await models.mongoose.jjwgAreasAudit.findOne({parent_id: parentId});
    		}
    		return objJjwgAreaAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateJjwgAreaAuditById(id, updateJjwgAreaAudit) {
    	try {
    		let objJjwgAreaAudit;
    		if(sql) {
    			objJjwgAreaAudit = await models.sequelize.jjwgAreasAudit.findOne({where: { id: id }});
    			if (objJjwgAreaAudit) {
    				objJjwgAreaAudit = await models.sequelize.jjwgAreasAudit.update(updateJjwgAreaAudit, { where: { id: id } });
    			}
    		} else {
    			objJjwgAreaAudit = await models.mongoose.jjwgAreasAudit.findOneAndUpdate({id: id}, {$set: updateJjwgAreaAudit}, {new: true});
    		}
    		return objJjwgAreaAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgAreaAuditByCreatedBy(createdBy, updateJjwgAreaAudit) {
    	try {
    		let objJjwgAreaAudit;
    		if(sql) {
    			objJjwgAreaAudit = await models.sequelize.jjwgAreasAudit.findOne({where: { created_by: createdBy }});
    			if (objJjwgAreaAudit) {
    				objJjwgAreaAudit = await models.sequelize.jjwgAreasAudit.update(updateJjwgAreaAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objJjwgAreaAudit = await models.mongoose.jjwgAreasAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateJjwgAreaAudit}, {new: true});
    		}
    		return objJjwgAreaAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgAreaAuditByFieldName(fieldName, updateJjwgAreaAudit) {
    	try {
    		let objJjwgAreaAudit;
    		if(sql) {
    			objJjwgAreaAudit = await models.sequelize.jjwgAreasAudit.findOne({where: { field_name: fieldName }});
    			if (objJjwgAreaAudit) {
    				objJjwgAreaAudit = await models.sequelize.jjwgAreasAudit.update(updateJjwgAreaAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objJjwgAreaAudit = await models.mongoose.jjwgAreasAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateJjwgAreaAudit}, {new: true});
    		}
    		return objJjwgAreaAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgAreaAuditByDataType(dataType, updateJjwgAreaAudit) {
    	try {
    		let objJjwgAreaAudit;
    		if(sql) {
    			objJjwgAreaAudit = await models.sequelize.jjwgAreasAudit.findOne({where: { data_type: dataType }});
    			if (objJjwgAreaAudit) {
    				objJjwgAreaAudit = await models.sequelize.jjwgAreasAudit.update(updateJjwgAreaAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objJjwgAreaAudit = await models.mongoose.jjwgAreasAudit.findOneAndUpdate({data_type: dataType}, {$set: updateJjwgAreaAudit}, {new: true});
    		}
    		return objJjwgAreaAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgAreaAuditByBeforeValueString(beforeValueString, updateJjwgAreaAudit) {
    	try {
    		let objJjwgAreaAudit;
    		if(sql) {
    			objJjwgAreaAudit = await models.sequelize.jjwgAreasAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objJjwgAreaAudit) {
    				objJjwgAreaAudit = await models.sequelize.jjwgAreasAudit.update(updateJjwgAreaAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objJjwgAreaAudit = await models.mongoose.jjwgAreasAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateJjwgAreaAudit}, {new: true});
    		}
    		return objJjwgAreaAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgAreaAuditByAfterValueString(afterValueString, updateJjwgAreaAudit) {
    	try {
    		let objJjwgAreaAudit;
    		if(sql) {
    			objJjwgAreaAudit = await models.sequelize.jjwgAreasAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objJjwgAreaAudit) {
    				objJjwgAreaAudit = await models.sequelize.jjwgAreasAudit.update(updateJjwgAreaAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objJjwgAreaAudit = await models.mongoose.jjwgAreasAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateJjwgAreaAudit}, {new: true});
    		}
    		return objJjwgAreaAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgAreaAuditByBeforeValueText(beforeValueText, updateJjwgAreaAudit) {
    	try {
    		let objJjwgAreaAudit;
    		if(sql) {
    			objJjwgAreaAudit = await models.sequelize.jjwgAreasAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objJjwgAreaAudit) {
    				objJjwgAreaAudit = await models.sequelize.jjwgAreasAudit.update(updateJjwgAreaAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objJjwgAreaAudit = await models.mongoose.jjwgAreasAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateJjwgAreaAudit}, {new: true});
    		}
    		return objJjwgAreaAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgAreaAuditByAfterValueText(afterValueText, updateJjwgAreaAudit) {
    	try {
    		let objJjwgAreaAudit;
    		if(sql) {
    			objJjwgAreaAudit = await models.sequelize.jjwgAreasAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objJjwgAreaAudit) {
    				objJjwgAreaAudit = await models.sequelize.jjwgAreasAudit.update(updateJjwgAreaAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objJjwgAreaAudit = await models.mongoose.jjwgAreasAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateJjwgAreaAudit}, {new: true});
    		}
    		return objJjwgAreaAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgAreaAuditByDateCreated(dateCreated, updateJjwgAreaAudit) {
    	try {
    		let objJjwgAreaAudit;
    		if(sql) {
    			objJjwgAreaAudit = await models.sequelize.jjwgAreasAudit.findOne({where: { date_created: dateCreated }});
    			if (objJjwgAreaAudit) {
    				objJjwgAreaAudit = await models.sequelize.jjwgAreasAudit.update(updateJjwgAreaAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objJjwgAreaAudit = await models.mongoose.jjwgAreasAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateJjwgAreaAudit}, {new: true});
    		}
    		return objJjwgAreaAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgAreaAuditByParentId(parentId, updateJjwgAreaAudit) {
    	try {
    		let objJjwgAreaAudit;
    		if(sql) {
    			objJjwgAreaAudit = await models.sequelize.jjwgAreasAudit.findOne({where: { parent_id: parentId }});
    			if (objJjwgAreaAudit) {
    				objJjwgAreaAudit = await models.sequelize.jjwgAreasAudit.update(updateJjwgAreaAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objJjwgAreaAudit = await models.mongoose.jjwgAreasAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateJjwgAreaAudit}, {new: true});
    		}
    		return objJjwgAreaAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = JjwgAreaAuditService;
//</es-section>
