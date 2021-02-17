/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:22 GMT-0400 (Bolivia Time)
 * Time: 4:43:22
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:22 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:22
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

class JjwgMapAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllJjwgMapsAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.jjwgMapsAudit.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.jjwgMapsAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllJjwgMapsAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.jjwgMapsAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.jjwgMapsAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addJjwgMapAudit(newJjwgMapAudit) {
		try {
			let objJjwgMapAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.jjwgMapsAudit.primaryKeys.id.type.toString())) {
			    newJjwgMapAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objJjwgMapAudit = await models.sequelize.jjwgMapsAudit.create(newJjwgMapAudit);
			} else {
				objJjwgMapAudit = new models.mongoose.jjwgMapsAudit(newJjwgMapAudit);
				await objJjwgMapAudit.save();
			}
			return objJjwgMapAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateJjwgMapAudit(id, updateJjwgMapAudit) {
		try {
			let objJjwgMapAudit;
			if(sql) {
				objJjwgMapAudit = await models.sequelize.jjwgMapsAudit.findOne({where: { id: util.Char(id) }});
				if (objJjwgMapAudit) {
					await models.sequelize.jjwgMapsAudit.update(updateJjwgMapAudit, { where: { id: util.Char(id) } });
					objJjwgMapAudit = await models.sequelize.jjwgMapsAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateJjwgMapAudit._id;
				objJjwgMapAudit = await models.mongoose.jjwgMapsAudit.findOneAndUpdate({id:id}, {$set: updateJjwgMapAudit}, {new: true});
			}
			return objJjwgMapAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getAJjwgMapAudit(id, query) {
		try {
			let objJjwgMapAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objJjwgMapAudit = await models.sequelize.jjwgMapsAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objJjwgMapAudit = await models.mongoose.jjwgMapsAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objJjwgMapAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteJjwgMapAudit(id) {
		try {
			let objJjwgMapAudit;
			if(sql) {
				objJjwgMapAudit = await models.sequelize.jjwgMapsAudit.findOne({ where: { id: util.Char(id) } });
				if (objJjwgMapAudit) {
					await models.sequelize.jjwgMapsAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objJjwgMapAudit = await models.mongoose.jjwgMapsAudit.deleteOne({id:util.Char(id)});
			}
			return objJjwgMapAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objJjwgMapAudit;
    		if(sql) {
    			objJjwgMapAudit = await models.sequelize.jjwgMapsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objJjwgMapAudit = await models.mongoose.jjwgMapsAudit.findOne({id: id});
    		}
    		return objJjwgMapAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objJjwgMapAudit;
    		if(sql) {
    			objJjwgMapAudit = await models.sequelize.jjwgMapsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objJjwgMapAudit = await models.mongoose.jjwgMapsAudit.findOne({created_by: createdBy});
    		}
    		return objJjwgMapAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objJjwgMapAudit;
    		if(sql) {
    			objJjwgMapAudit = await models.sequelize.jjwgMapsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objJjwgMapAudit = await models.mongoose.jjwgMapsAudit.findOne({field_name: fieldName});
    		}
    		return objJjwgMapAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objJjwgMapAudit;
    		if(sql) {
    			objJjwgMapAudit = await models.sequelize.jjwgMapsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objJjwgMapAudit = await models.mongoose.jjwgMapsAudit.findOne({data_type: dataType});
    		}
    		return objJjwgMapAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objJjwgMapAudit;
    		if(sql) {
    			objJjwgMapAudit = await models.sequelize.jjwgMapsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objJjwgMapAudit = await models.mongoose.jjwgMapsAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objJjwgMapAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objJjwgMapAudit;
    		if(sql) {
    			objJjwgMapAudit = await models.sequelize.jjwgMapsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objJjwgMapAudit = await models.mongoose.jjwgMapsAudit.findOne({after_value_string: afterValueString});
    		}
    		return objJjwgMapAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objJjwgMapAudit;
    		if(sql) {
    			objJjwgMapAudit = await models.sequelize.jjwgMapsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objJjwgMapAudit = await models.mongoose.jjwgMapsAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objJjwgMapAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objJjwgMapAudit;
    		if(sql) {
    			objJjwgMapAudit = await models.sequelize.jjwgMapsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objJjwgMapAudit = await models.mongoose.jjwgMapsAudit.findOne({after_value_text: afterValueText});
    		}
    		return objJjwgMapAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objJjwgMapAudit;
    		if(sql) {
    			objJjwgMapAudit = await models.sequelize.jjwgMapsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objJjwgMapAudit = await models.mongoose.jjwgMapsAudit.findOne({date_created: dateCreated});
    		}
    		return objJjwgMapAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objJjwgMapAudit;
    		if(sql) {
    			objJjwgMapAudit = await models.sequelize.jjwgMapsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objJjwgMapAudit = await models.mongoose.jjwgMapsAudit.findOne({parent_id: parentId});
    		}
    		return objJjwgMapAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateJjwgMapAuditById(id, updateJjwgMapAudit) {
    	try {
    		let objJjwgMapAudit;
    		if(sql) {
    			objJjwgMapAudit = await models.sequelize.jjwgMapsAudit.findOne({where: { id: id }});
    			if (objJjwgMapAudit) {
    				objJjwgMapAudit = await models.sequelize.jjwgMapsAudit.update(updateJjwgMapAudit, { where: { id: id } });
    			}
    		} else {
    			objJjwgMapAudit = await models.mongoose.jjwgMapsAudit.findOneAndUpdate({id: id}, {$set: updateJjwgMapAudit}, {new: true});
    		}
    		return objJjwgMapAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMapAuditByCreatedBy(createdBy, updateJjwgMapAudit) {
    	try {
    		let objJjwgMapAudit;
    		if(sql) {
    			objJjwgMapAudit = await models.sequelize.jjwgMapsAudit.findOne({where: { created_by: createdBy }});
    			if (objJjwgMapAudit) {
    				objJjwgMapAudit = await models.sequelize.jjwgMapsAudit.update(updateJjwgMapAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objJjwgMapAudit = await models.mongoose.jjwgMapsAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateJjwgMapAudit}, {new: true});
    		}
    		return objJjwgMapAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMapAuditByFieldName(fieldName, updateJjwgMapAudit) {
    	try {
    		let objJjwgMapAudit;
    		if(sql) {
    			objJjwgMapAudit = await models.sequelize.jjwgMapsAudit.findOne({where: { field_name: fieldName }});
    			if (objJjwgMapAudit) {
    				objJjwgMapAudit = await models.sequelize.jjwgMapsAudit.update(updateJjwgMapAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objJjwgMapAudit = await models.mongoose.jjwgMapsAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateJjwgMapAudit}, {new: true});
    		}
    		return objJjwgMapAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMapAuditByDataType(dataType, updateJjwgMapAudit) {
    	try {
    		let objJjwgMapAudit;
    		if(sql) {
    			objJjwgMapAudit = await models.sequelize.jjwgMapsAudit.findOne({where: { data_type: dataType }});
    			if (objJjwgMapAudit) {
    				objJjwgMapAudit = await models.sequelize.jjwgMapsAudit.update(updateJjwgMapAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objJjwgMapAudit = await models.mongoose.jjwgMapsAudit.findOneAndUpdate({data_type: dataType}, {$set: updateJjwgMapAudit}, {new: true});
    		}
    		return objJjwgMapAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMapAuditByBeforeValueString(beforeValueString, updateJjwgMapAudit) {
    	try {
    		let objJjwgMapAudit;
    		if(sql) {
    			objJjwgMapAudit = await models.sequelize.jjwgMapsAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objJjwgMapAudit) {
    				objJjwgMapAudit = await models.sequelize.jjwgMapsAudit.update(updateJjwgMapAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objJjwgMapAudit = await models.mongoose.jjwgMapsAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateJjwgMapAudit}, {new: true});
    		}
    		return objJjwgMapAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMapAuditByAfterValueString(afterValueString, updateJjwgMapAudit) {
    	try {
    		let objJjwgMapAudit;
    		if(sql) {
    			objJjwgMapAudit = await models.sequelize.jjwgMapsAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objJjwgMapAudit) {
    				objJjwgMapAudit = await models.sequelize.jjwgMapsAudit.update(updateJjwgMapAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objJjwgMapAudit = await models.mongoose.jjwgMapsAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateJjwgMapAudit}, {new: true});
    		}
    		return objJjwgMapAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMapAuditByBeforeValueText(beforeValueText, updateJjwgMapAudit) {
    	try {
    		let objJjwgMapAudit;
    		if(sql) {
    			objJjwgMapAudit = await models.sequelize.jjwgMapsAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objJjwgMapAudit) {
    				objJjwgMapAudit = await models.sequelize.jjwgMapsAudit.update(updateJjwgMapAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objJjwgMapAudit = await models.mongoose.jjwgMapsAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateJjwgMapAudit}, {new: true});
    		}
    		return objJjwgMapAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMapAuditByAfterValueText(afterValueText, updateJjwgMapAudit) {
    	try {
    		let objJjwgMapAudit;
    		if(sql) {
    			objJjwgMapAudit = await models.sequelize.jjwgMapsAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objJjwgMapAudit) {
    				objJjwgMapAudit = await models.sequelize.jjwgMapsAudit.update(updateJjwgMapAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objJjwgMapAudit = await models.mongoose.jjwgMapsAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateJjwgMapAudit}, {new: true});
    		}
    		return objJjwgMapAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMapAuditByDateCreated(dateCreated, updateJjwgMapAudit) {
    	try {
    		let objJjwgMapAudit;
    		if(sql) {
    			objJjwgMapAudit = await models.sequelize.jjwgMapsAudit.findOne({where: { date_created: dateCreated }});
    			if (objJjwgMapAudit) {
    				objJjwgMapAudit = await models.sequelize.jjwgMapsAudit.update(updateJjwgMapAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objJjwgMapAudit = await models.mongoose.jjwgMapsAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateJjwgMapAudit}, {new: true});
    		}
    		return objJjwgMapAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMapAuditByParentId(parentId, updateJjwgMapAudit) {
    	try {
    		let objJjwgMapAudit;
    		if(sql) {
    			objJjwgMapAudit = await models.sequelize.jjwgMapsAudit.findOne({where: { parent_id: parentId }});
    			if (objJjwgMapAudit) {
    				objJjwgMapAudit = await models.sequelize.jjwgMapsAudit.update(updateJjwgMapAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objJjwgMapAudit = await models.mongoose.jjwgMapsAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateJjwgMapAudit}, {new: true});
    		}
    		return objJjwgMapAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = JjwgMapAuditService;
//</es-section>
