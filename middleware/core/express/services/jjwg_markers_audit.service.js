/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:11 GMT-0400 (Bolivia Time)
 * Time: 0:23:11
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:11 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:11
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

class JjwgMarkerAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllJjwgMarkersAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.jjwgMarkersAudit.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.jjwgMarkersAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllJjwgMarkersAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.jjwgMarkersAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.jjwgMarkersAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addJjwgMarkerAudit(newJjwgMarkerAudit) {
		try {
			let objJjwgMarkerAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.jjwgMarkersAudit.primaryKeys.id.type.toString())) {
			    newJjwgMarkerAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objJjwgMarkerAudit = await models.sequelize.jjwgMarkersAudit.create(newJjwgMarkerAudit);
			} else {
				objJjwgMarkerAudit = new models.mongoose.jjwgMarkersAudit(newJjwgMarkerAudit);
				await objJjwgMarkerAudit.save();
			}
			return objJjwgMarkerAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateJjwgMarkerAudit(id, updateJjwgMarkerAudit) {
		try {
			let objJjwgMarkerAudit;
			if(sql) {
				objJjwgMarkerAudit = await models.sequelize.jjwgMarkersAudit.findOne({where: { id: util.Char(id) }});
				if (objJjwgMarkerAudit) {
					await models.sequelize.jjwgMarkersAudit.update(updateJjwgMarkerAudit, { where: { id: util.Char(id) } });
					objJjwgMarkerAudit = await models.sequelize.jjwgMarkersAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateJjwgMarkerAudit._id;
				objJjwgMarkerAudit = await models.mongoose.jjwgMarkersAudit.findOneAndUpdate({id:id}, {$set: updateJjwgMarkerAudit}, {new: true});
			}
			return objJjwgMarkerAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getAJjwgMarkerAudit(id, query) {
		try {
			let objJjwgMarkerAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objJjwgMarkerAudit = await models.sequelize.jjwgMarkersAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objJjwgMarkerAudit = await models.mongoose.jjwgMarkersAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objJjwgMarkerAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteJjwgMarkerAudit(id) {
		try {
			let objJjwgMarkerAudit;
			if(sql) {
				objJjwgMarkerAudit = await models.sequelize.jjwgMarkersAudit.findOne({ where: { id: util.Char(id) } });
				if (objJjwgMarkerAudit) {
					await models.sequelize.jjwgMarkersAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objJjwgMarkerAudit = await models.mongoose.jjwgMarkersAudit.deleteOne({id:util.Char(id)});
			}
			return objJjwgMarkerAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objJjwgMarkerAudit;
    		if(sql) {
    			objJjwgMarkerAudit = await models.sequelize.jjwgMarkersAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objJjwgMarkerAudit = await models.mongoose.jjwgMarkersAudit.findOne({id: id});
    		}
    		return objJjwgMarkerAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objJjwgMarkerAudit;
    		if(sql) {
    			objJjwgMarkerAudit = await models.sequelize.jjwgMarkersAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objJjwgMarkerAudit = await models.mongoose.jjwgMarkersAudit.findOne({created_by: createdBy});
    		}
    		return objJjwgMarkerAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objJjwgMarkerAudit;
    		if(sql) {
    			objJjwgMarkerAudit = await models.sequelize.jjwgMarkersAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objJjwgMarkerAudit = await models.mongoose.jjwgMarkersAudit.findOne({field_name: fieldName});
    		}
    		return objJjwgMarkerAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objJjwgMarkerAudit;
    		if(sql) {
    			objJjwgMarkerAudit = await models.sequelize.jjwgMarkersAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objJjwgMarkerAudit = await models.mongoose.jjwgMarkersAudit.findOne({data_type: dataType});
    		}
    		return objJjwgMarkerAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objJjwgMarkerAudit;
    		if(sql) {
    			objJjwgMarkerAudit = await models.sequelize.jjwgMarkersAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objJjwgMarkerAudit = await models.mongoose.jjwgMarkersAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objJjwgMarkerAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objJjwgMarkerAudit;
    		if(sql) {
    			objJjwgMarkerAudit = await models.sequelize.jjwgMarkersAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objJjwgMarkerAudit = await models.mongoose.jjwgMarkersAudit.findOne({after_value_string: afterValueString});
    		}
    		return objJjwgMarkerAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objJjwgMarkerAudit;
    		if(sql) {
    			objJjwgMarkerAudit = await models.sequelize.jjwgMarkersAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objJjwgMarkerAudit = await models.mongoose.jjwgMarkersAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objJjwgMarkerAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objJjwgMarkerAudit;
    		if(sql) {
    			objJjwgMarkerAudit = await models.sequelize.jjwgMarkersAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objJjwgMarkerAudit = await models.mongoose.jjwgMarkersAudit.findOne({after_value_text: afterValueText});
    		}
    		return objJjwgMarkerAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objJjwgMarkerAudit;
    		if(sql) {
    			objJjwgMarkerAudit = await models.sequelize.jjwgMarkersAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objJjwgMarkerAudit = await models.mongoose.jjwgMarkersAudit.findOne({date_created: dateCreated});
    		}
    		return objJjwgMarkerAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objJjwgMarkerAudit;
    		if(sql) {
    			objJjwgMarkerAudit = await models.sequelize.jjwgMarkersAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objJjwgMarkerAudit = await models.mongoose.jjwgMarkersAudit.findOne({parent_id: parentId});
    		}
    		return objJjwgMarkerAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateJjwgMarkerAuditById(id, updateJjwgMarkerAudit) {
    	try {
    		let objJjwgMarkerAudit;
    		if(sql) {
    			objJjwgMarkerAudit = await models.sequelize.jjwgMarkersAudit.findOne({where: { id: id }});
    			if (objJjwgMarkerAudit) {
    				objJjwgMarkerAudit = await models.sequelize.jjwgMarkersAudit.update(updateJjwgMarkerAudit, { where: { id: id } });
    			}
    		} else {
    			objJjwgMarkerAudit = await models.mongoose.jjwgMarkersAudit.findOneAndUpdate({id: id}, {$set: updateJjwgMarkerAudit}, {new: true});
    		}
    		return objJjwgMarkerAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMarkerAuditByCreatedBy(createdBy, updateJjwgMarkerAudit) {
    	try {
    		let objJjwgMarkerAudit;
    		if(sql) {
    			objJjwgMarkerAudit = await models.sequelize.jjwgMarkersAudit.findOne({where: { created_by: createdBy }});
    			if (objJjwgMarkerAudit) {
    				objJjwgMarkerAudit = await models.sequelize.jjwgMarkersAudit.update(updateJjwgMarkerAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objJjwgMarkerAudit = await models.mongoose.jjwgMarkersAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateJjwgMarkerAudit}, {new: true});
    		}
    		return objJjwgMarkerAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMarkerAuditByFieldName(fieldName, updateJjwgMarkerAudit) {
    	try {
    		let objJjwgMarkerAudit;
    		if(sql) {
    			objJjwgMarkerAudit = await models.sequelize.jjwgMarkersAudit.findOne({where: { field_name: fieldName }});
    			if (objJjwgMarkerAudit) {
    				objJjwgMarkerAudit = await models.sequelize.jjwgMarkersAudit.update(updateJjwgMarkerAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objJjwgMarkerAudit = await models.mongoose.jjwgMarkersAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateJjwgMarkerAudit}, {new: true});
    		}
    		return objJjwgMarkerAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMarkerAuditByDataType(dataType, updateJjwgMarkerAudit) {
    	try {
    		let objJjwgMarkerAudit;
    		if(sql) {
    			objJjwgMarkerAudit = await models.sequelize.jjwgMarkersAudit.findOne({where: { data_type: dataType }});
    			if (objJjwgMarkerAudit) {
    				objJjwgMarkerAudit = await models.sequelize.jjwgMarkersAudit.update(updateJjwgMarkerAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objJjwgMarkerAudit = await models.mongoose.jjwgMarkersAudit.findOneAndUpdate({data_type: dataType}, {$set: updateJjwgMarkerAudit}, {new: true});
    		}
    		return objJjwgMarkerAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMarkerAuditByBeforeValueString(beforeValueString, updateJjwgMarkerAudit) {
    	try {
    		let objJjwgMarkerAudit;
    		if(sql) {
    			objJjwgMarkerAudit = await models.sequelize.jjwgMarkersAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objJjwgMarkerAudit) {
    				objJjwgMarkerAudit = await models.sequelize.jjwgMarkersAudit.update(updateJjwgMarkerAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objJjwgMarkerAudit = await models.mongoose.jjwgMarkersAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateJjwgMarkerAudit}, {new: true});
    		}
    		return objJjwgMarkerAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMarkerAuditByAfterValueString(afterValueString, updateJjwgMarkerAudit) {
    	try {
    		let objJjwgMarkerAudit;
    		if(sql) {
    			objJjwgMarkerAudit = await models.sequelize.jjwgMarkersAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objJjwgMarkerAudit) {
    				objJjwgMarkerAudit = await models.sequelize.jjwgMarkersAudit.update(updateJjwgMarkerAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objJjwgMarkerAudit = await models.mongoose.jjwgMarkersAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateJjwgMarkerAudit}, {new: true});
    		}
    		return objJjwgMarkerAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMarkerAuditByBeforeValueText(beforeValueText, updateJjwgMarkerAudit) {
    	try {
    		let objJjwgMarkerAudit;
    		if(sql) {
    			objJjwgMarkerAudit = await models.sequelize.jjwgMarkersAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objJjwgMarkerAudit) {
    				objJjwgMarkerAudit = await models.sequelize.jjwgMarkersAudit.update(updateJjwgMarkerAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objJjwgMarkerAudit = await models.mongoose.jjwgMarkersAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateJjwgMarkerAudit}, {new: true});
    		}
    		return objJjwgMarkerAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMarkerAuditByAfterValueText(afterValueText, updateJjwgMarkerAudit) {
    	try {
    		let objJjwgMarkerAudit;
    		if(sql) {
    			objJjwgMarkerAudit = await models.sequelize.jjwgMarkersAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objJjwgMarkerAudit) {
    				objJjwgMarkerAudit = await models.sequelize.jjwgMarkersAudit.update(updateJjwgMarkerAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objJjwgMarkerAudit = await models.mongoose.jjwgMarkersAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateJjwgMarkerAudit}, {new: true});
    		}
    		return objJjwgMarkerAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMarkerAuditByDateCreated(dateCreated, updateJjwgMarkerAudit) {
    	try {
    		let objJjwgMarkerAudit;
    		if(sql) {
    			objJjwgMarkerAudit = await models.sequelize.jjwgMarkersAudit.findOne({where: { date_created: dateCreated }});
    			if (objJjwgMarkerAudit) {
    				objJjwgMarkerAudit = await models.sequelize.jjwgMarkersAudit.update(updateJjwgMarkerAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objJjwgMarkerAudit = await models.mongoose.jjwgMarkersAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateJjwgMarkerAudit}, {new: true});
    		}
    		return objJjwgMarkerAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMarkerAuditByParentId(parentId, updateJjwgMarkerAudit) {
    	try {
    		let objJjwgMarkerAudit;
    		if(sql) {
    			objJjwgMarkerAudit = await models.sequelize.jjwgMarkersAudit.findOne({where: { parent_id: parentId }});
    			if (objJjwgMarkerAudit) {
    				objJjwgMarkerAudit = await models.sequelize.jjwgMarkersAudit.update(updateJjwgMarkerAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objJjwgMarkerAudit = await models.mongoose.jjwgMarkersAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateJjwgMarkerAudit}, {new: true});
    		}
    		return objJjwgMarkerAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = JjwgMarkerAuditService;
//</es-section>
