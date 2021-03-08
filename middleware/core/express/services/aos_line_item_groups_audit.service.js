/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:25 GMT-0400 (Bolivia Time)
 * Time: 15:35:25
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:25 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:25
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

class AoLineItemGroupAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAosLineItemGroupsAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aosLineItemGroupsAudit.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aosLineItemGroupsAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAosLineItemGroupsAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aosLineItemGroupsAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aosLineItemGroupsAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAoLineItemGroupAudit(newAoLineItemGroupAudit) {
		try {
			let objAoLineItemGroupAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aosLineItemGroupsAudit.primaryKeys.id.type.toString())) {
			    newAoLineItemGroupAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAoLineItemGroupAudit = await models.sequelize.aosLineItemGroupsAudit.create(newAoLineItemGroupAudit);
			} else {
				objAoLineItemGroupAudit = new models.mongoose.aosLineItemGroupsAudit(newAoLineItemGroupAudit);
				await objAoLineItemGroupAudit.save();
			}
			return objAoLineItemGroupAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateAoLineItemGroupAudit(id, updateAoLineItemGroupAudit) {
		try {
			let objAoLineItemGroupAudit;
			if(sql) {
				objAoLineItemGroupAudit = await models.sequelize.aosLineItemGroupsAudit.findOne({where: { id: util.Char(id) }});
				if (objAoLineItemGroupAudit) {
					await models.sequelize.aosLineItemGroupsAudit.update(updateAoLineItemGroupAudit, { where: { id: util.Char(id) } });
					objAoLineItemGroupAudit = await models.sequelize.aosLineItemGroupsAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAoLineItemGroupAudit._id;
				objAoLineItemGroupAudit = await models.mongoose.aosLineItemGroupsAudit.findOneAndUpdate({id:id}, {$set: updateAoLineItemGroupAudit}, {new: true});
			}
			return objAoLineItemGroupAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getAAoLineItemGroupAudit(id, query) {
		try {
			let objAoLineItemGroupAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAoLineItemGroupAudit = await models.sequelize.aosLineItemGroupsAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAoLineItemGroupAudit = await models.mongoose.aosLineItemGroupsAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objAoLineItemGroupAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAoLineItemGroupAudit(id) {
		try {
			let objAoLineItemGroupAudit;
			if(sql) {
				objAoLineItemGroupAudit = await models.sequelize.aosLineItemGroupsAudit.findOne({ where: { id: util.Char(id) } });
				if (objAoLineItemGroupAudit) {
					await models.sequelize.aosLineItemGroupsAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAoLineItemGroupAudit = await models.mongoose.aosLineItemGroupsAudit.deleteOne({id:util.Char(id)});
			}
			return objAoLineItemGroupAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAoLineItemGroupAudit;
    		if(sql) {
    			objAoLineItemGroupAudit = await models.sequelize.aosLineItemGroupsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAoLineItemGroupAudit = await models.mongoose.aosLineItemGroupsAudit.findOne({id: id});
    		}
    		return objAoLineItemGroupAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAoLineItemGroupAudit;
    		if(sql) {
    			objAoLineItemGroupAudit = await models.sequelize.aosLineItemGroupsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAoLineItemGroupAudit = await models.mongoose.aosLineItemGroupsAudit.findOne({created_by: createdBy});
    		}
    		return objAoLineItemGroupAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objAoLineItemGroupAudit;
    		if(sql) {
    			objAoLineItemGroupAudit = await models.sequelize.aosLineItemGroupsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objAoLineItemGroupAudit = await models.mongoose.aosLineItemGroupsAudit.findOne({field_name: fieldName});
    		}
    		return objAoLineItemGroupAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objAoLineItemGroupAudit;
    		if(sql) {
    			objAoLineItemGroupAudit = await models.sequelize.aosLineItemGroupsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objAoLineItemGroupAudit = await models.mongoose.aosLineItemGroupsAudit.findOne({data_type: dataType});
    		}
    		return objAoLineItemGroupAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objAoLineItemGroupAudit;
    		if(sql) {
    			objAoLineItemGroupAudit = await models.sequelize.aosLineItemGroupsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objAoLineItemGroupAudit = await models.mongoose.aosLineItemGroupsAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objAoLineItemGroupAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objAoLineItemGroupAudit;
    		if(sql) {
    			objAoLineItemGroupAudit = await models.sequelize.aosLineItemGroupsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objAoLineItemGroupAudit = await models.mongoose.aosLineItemGroupsAudit.findOne({after_value_string: afterValueString});
    		}
    		return objAoLineItemGroupAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objAoLineItemGroupAudit;
    		if(sql) {
    			objAoLineItemGroupAudit = await models.sequelize.aosLineItemGroupsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objAoLineItemGroupAudit = await models.mongoose.aosLineItemGroupsAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objAoLineItemGroupAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objAoLineItemGroupAudit;
    		if(sql) {
    			objAoLineItemGroupAudit = await models.sequelize.aosLineItemGroupsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objAoLineItemGroupAudit = await models.mongoose.aosLineItemGroupsAudit.findOne({after_value_text: afterValueText});
    		}
    		return objAoLineItemGroupAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objAoLineItemGroupAudit;
    		if(sql) {
    			objAoLineItemGroupAudit = await models.sequelize.aosLineItemGroupsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objAoLineItemGroupAudit = await models.mongoose.aosLineItemGroupsAudit.findOne({date_created: dateCreated});
    		}
    		return objAoLineItemGroupAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objAoLineItemGroupAudit;
    		if(sql) {
    			objAoLineItemGroupAudit = await models.sequelize.aosLineItemGroupsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objAoLineItemGroupAudit = await models.mongoose.aosLineItemGroupsAudit.findOne({parent_id: parentId});
    		}
    		return objAoLineItemGroupAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAoLineItemGroupAuditById(id, updateAoLineItemGroupAudit) {
    	try {
    		let objAoLineItemGroupAudit;
    		if(sql) {
    			objAoLineItemGroupAudit = await models.sequelize.aosLineItemGroupsAudit.findOne({where: { id: id }});
    			if (objAoLineItemGroupAudit) {
    				objAoLineItemGroupAudit = await models.sequelize.aosLineItemGroupsAudit.update(updateAoLineItemGroupAudit, { where: { id: id } });
    			}
    		} else {
    			objAoLineItemGroupAudit = await models.mongoose.aosLineItemGroupsAudit.findOneAndUpdate({id: id}, {$set: updateAoLineItemGroupAudit}, {new: true});
    		}
    		return objAoLineItemGroupAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoLineItemGroupAuditByCreatedBy(createdBy, updateAoLineItemGroupAudit) {
    	try {
    		let objAoLineItemGroupAudit;
    		if(sql) {
    			objAoLineItemGroupAudit = await models.sequelize.aosLineItemGroupsAudit.findOne({where: { created_by: createdBy }});
    			if (objAoLineItemGroupAudit) {
    				objAoLineItemGroupAudit = await models.sequelize.aosLineItemGroupsAudit.update(updateAoLineItemGroupAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAoLineItemGroupAudit = await models.mongoose.aosLineItemGroupsAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateAoLineItemGroupAudit}, {new: true});
    		}
    		return objAoLineItemGroupAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoLineItemGroupAuditByFieldName(fieldName, updateAoLineItemGroupAudit) {
    	try {
    		let objAoLineItemGroupAudit;
    		if(sql) {
    			objAoLineItemGroupAudit = await models.sequelize.aosLineItemGroupsAudit.findOne({where: { field_name: fieldName }});
    			if (objAoLineItemGroupAudit) {
    				objAoLineItemGroupAudit = await models.sequelize.aosLineItemGroupsAudit.update(updateAoLineItemGroupAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objAoLineItemGroupAudit = await models.mongoose.aosLineItemGroupsAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateAoLineItemGroupAudit}, {new: true});
    		}
    		return objAoLineItemGroupAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoLineItemGroupAuditByDataType(dataType, updateAoLineItemGroupAudit) {
    	try {
    		let objAoLineItemGroupAudit;
    		if(sql) {
    			objAoLineItemGroupAudit = await models.sequelize.aosLineItemGroupsAudit.findOne({where: { data_type: dataType }});
    			if (objAoLineItemGroupAudit) {
    				objAoLineItemGroupAudit = await models.sequelize.aosLineItemGroupsAudit.update(updateAoLineItemGroupAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objAoLineItemGroupAudit = await models.mongoose.aosLineItemGroupsAudit.findOneAndUpdate({data_type: dataType}, {$set: updateAoLineItemGroupAudit}, {new: true});
    		}
    		return objAoLineItemGroupAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoLineItemGroupAuditByBeforeValueString(beforeValueString, updateAoLineItemGroupAudit) {
    	try {
    		let objAoLineItemGroupAudit;
    		if(sql) {
    			objAoLineItemGroupAudit = await models.sequelize.aosLineItemGroupsAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objAoLineItemGroupAudit) {
    				objAoLineItemGroupAudit = await models.sequelize.aosLineItemGroupsAudit.update(updateAoLineItemGroupAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objAoLineItemGroupAudit = await models.mongoose.aosLineItemGroupsAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateAoLineItemGroupAudit}, {new: true});
    		}
    		return objAoLineItemGroupAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoLineItemGroupAuditByAfterValueString(afterValueString, updateAoLineItemGroupAudit) {
    	try {
    		let objAoLineItemGroupAudit;
    		if(sql) {
    			objAoLineItemGroupAudit = await models.sequelize.aosLineItemGroupsAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objAoLineItemGroupAudit) {
    				objAoLineItemGroupAudit = await models.sequelize.aosLineItemGroupsAudit.update(updateAoLineItemGroupAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objAoLineItemGroupAudit = await models.mongoose.aosLineItemGroupsAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateAoLineItemGroupAudit}, {new: true});
    		}
    		return objAoLineItemGroupAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoLineItemGroupAuditByBeforeValueText(beforeValueText, updateAoLineItemGroupAudit) {
    	try {
    		let objAoLineItemGroupAudit;
    		if(sql) {
    			objAoLineItemGroupAudit = await models.sequelize.aosLineItemGroupsAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objAoLineItemGroupAudit) {
    				objAoLineItemGroupAudit = await models.sequelize.aosLineItemGroupsAudit.update(updateAoLineItemGroupAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objAoLineItemGroupAudit = await models.mongoose.aosLineItemGroupsAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateAoLineItemGroupAudit}, {new: true});
    		}
    		return objAoLineItemGroupAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoLineItemGroupAuditByAfterValueText(afterValueText, updateAoLineItemGroupAudit) {
    	try {
    		let objAoLineItemGroupAudit;
    		if(sql) {
    			objAoLineItemGroupAudit = await models.sequelize.aosLineItemGroupsAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objAoLineItemGroupAudit) {
    				objAoLineItemGroupAudit = await models.sequelize.aosLineItemGroupsAudit.update(updateAoLineItemGroupAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objAoLineItemGroupAudit = await models.mongoose.aosLineItemGroupsAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateAoLineItemGroupAudit}, {new: true});
    		}
    		return objAoLineItemGroupAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoLineItemGroupAuditByDateCreated(dateCreated, updateAoLineItemGroupAudit) {
    	try {
    		let objAoLineItemGroupAudit;
    		if(sql) {
    			objAoLineItemGroupAudit = await models.sequelize.aosLineItemGroupsAudit.findOne({where: { date_created: dateCreated }});
    			if (objAoLineItemGroupAudit) {
    				objAoLineItemGroupAudit = await models.sequelize.aosLineItemGroupsAudit.update(updateAoLineItemGroupAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objAoLineItemGroupAudit = await models.mongoose.aosLineItemGroupsAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateAoLineItemGroupAudit}, {new: true});
    		}
    		return objAoLineItemGroupAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoLineItemGroupAuditByParentId(parentId, updateAoLineItemGroupAudit) {
    	try {
    		let objAoLineItemGroupAudit;
    		if(sql) {
    			objAoLineItemGroupAudit = await models.sequelize.aosLineItemGroupsAudit.findOne({where: { parent_id: parentId }});
    			if (objAoLineItemGroupAudit) {
    				objAoLineItemGroupAudit = await models.sequelize.aosLineItemGroupsAudit.update(updateAoLineItemGroupAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objAoLineItemGroupAudit = await models.mongoose.aosLineItemGroupsAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateAoLineItemGroupAudit}, {new: true});
    		}
    		return objAoLineItemGroupAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AoLineItemGroupAuditService;
//</es-section>
