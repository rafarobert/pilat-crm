/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:14 GMT-0400 (Bolivia Time)
 * Time: 15:36:14
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:14 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:14
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

class FpEventLocationAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllFpEventLocationsAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.fpEventLocationsAudit.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.fpEventLocationsAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllFpEventLocationsAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.fpEventLocationsAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.fpEventLocationsAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addFpEventLocationAudit(newFpEventLocationAudit) {
		try {
			let objFpEventLocationAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.fpEventLocationsAudit.primaryKeys.id.type.toString())) {
			    newFpEventLocationAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objFpEventLocationAudit = await models.sequelize.fpEventLocationsAudit.create(newFpEventLocationAudit);
			} else {
				objFpEventLocationAudit = new models.mongoose.fpEventLocationsAudit(newFpEventLocationAudit);
				await objFpEventLocationAudit.save();
			}
			return objFpEventLocationAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateFpEventLocationAudit(id, updateFpEventLocationAudit) {
		try {
			let objFpEventLocationAudit;
			if(sql) {
				objFpEventLocationAudit = await models.sequelize.fpEventLocationsAudit.findOne({where: { id: util.Char(id) }});
				if (objFpEventLocationAudit) {
					await models.sequelize.fpEventLocationsAudit.update(updateFpEventLocationAudit, { where: { id: util.Char(id) } });
					objFpEventLocationAudit = await models.sequelize.fpEventLocationsAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateFpEventLocationAudit._id;
				objFpEventLocationAudit = await models.mongoose.fpEventLocationsAudit.findOneAndUpdate({id:id}, {$set: updateFpEventLocationAudit}, {new: true});
			}
			return objFpEventLocationAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getAFpEventLocationAudit(id, query) {
		try {
			let objFpEventLocationAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objFpEventLocationAudit = await models.sequelize.fpEventLocationsAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objFpEventLocationAudit = await models.mongoose.fpEventLocationsAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objFpEventLocationAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteFpEventLocationAudit(id) {
		try {
			let objFpEventLocationAudit;
			if(sql) {
				objFpEventLocationAudit = await models.sequelize.fpEventLocationsAudit.findOne({ where: { id: util.Char(id) } });
				if (objFpEventLocationAudit) {
					await models.sequelize.fpEventLocationsAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objFpEventLocationAudit = await models.mongoose.fpEventLocationsAudit.deleteOne({id:util.Char(id)});
			}
			return objFpEventLocationAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objFpEventLocationAudit;
    		if(sql) {
    			objFpEventLocationAudit = await models.sequelize.fpEventLocationsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objFpEventLocationAudit = await models.mongoose.fpEventLocationsAudit.findOne({id: id});
    		}
    		return objFpEventLocationAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objFpEventLocationAudit;
    		if(sql) {
    			objFpEventLocationAudit = await models.sequelize.fpEventLocationsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objFpEventLocationAudit = await models.mongoose.fpEventLocationsAudit.findOne({created_by: createdBy});
    		}
    		return objFpEventLocationAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objFpEventLocationAudit;
    		if(sql) {
    			objFpEventLocationAudit = await models.sequelize.fpEventLocationsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objFpEventLocationAudit = await models.mongoose.fpEventLocationsAudit.findOne({field_name: fieldName});
    		}
    		return objFpEventLocationAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objFpEventLocationAudit;
    		if(sql) {
    			objFpEventLocationAudit = await models.sequelize.fpEventLocationsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objFpEventLocationAudit = await models.mongoose.fpEventLocationsAudit.findOne({data_type: dataType});
    		}
    		return objFpEventLocationAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objFpEventLocationAudit;
    		if(sql) {
    			objFpEventLocationAudit = await models.sequelize.fpEventLocationsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objFpEventLocationAudit = await models.mongoose.fpEventLocationsAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objFpEventLocationAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objFpEventLocationAudit;
    		if(sql) {
    			objFpEventLocationAudit = await models.sequelize.fpEventLocationsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objFpEventLocationAudit = await models.mongoose.fpEventLocationsAudit.findOne({after_value_string: afterValueString});
    		}
    		return objFpEventLocationAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objFpEventLocationAudit;
    		if(sql) {
    			objFpEventLocationAudit = await models.sequelize.fpEventLocationsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objFpEventLocationAudit = await models.mongoose.fpEventLocationsAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objFpEventLocationAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objFpEventLocationAudit;
    		if(sql) {
    			objFpEventLocationAudit = await models.sequelize.fpEventLocationsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objFpEventLocationAudit = await models.mongoose.fpEventLocationsAudit.findOne({after_value_text: afterValueText});
    		}
    		return objFpEventLocationAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objFpEventLocationAudit;
    		if(sql) {
    			objFpEventLocationAudit = await models.sequelize.fpEventLocationsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objFpEventLocationAudit = await models.mongoose.fpEventLocationsAudit.findOne({date_created: dateCreated});
    		}
    		return objFpEventLocationAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objFpEventLocationAudit;
    		if(sql) {
    			objFpEventLocationAudit = await models.sequelize.fpEventLocationsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objFpEventLocationAudit = await models.mongoose.fpEventLocationsAudit.findOne({parent_id: parentId});
    		}
    		return objFpEventLocationAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateFpEventLocationAuditById(id, updateFpEventLocationAudit) {
    	try {
    		let objFpEventLocationAudit;
    		if(sql) {
    			objFpEventLocationAudit = await models.sequelize.fpEventLocationsAudit.findOne({where: { id: id }});
    			if (objFpEventLocationAudit) {
    				objFpEventLocationAudit = await models.sequelize.fpEventLocationsAudit.update(updateFpEventLocationAudit, { where: { id: id } });
    			}
    		} else {
    			objFpEventLocationAudit = await models.mongoose.fpEventLocationsAudit.findOneAndUpdate({id: id}, {$set: updateFpEventLocationAudit}, {new: true});
    		}
    		return objFpEventLocationAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventLocationAuditByCreatedBy(createdBy, updateFpEventLocationAudit) {
    	try {
    		let objFpEventLocationAudit;
    		if(sql) {
    			objFpEventLocationAudit = await models.sequelize.fpEventLocationsAudit.findOne({where: { created_by: createdBy }});
    			if (objFpEventLocationAudit) {
    				objFpEventLocationAudit = await models.sequelize.fpEventLocationsAudit.update(updateFpEventLocationAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objFpEventLocationAudit = await models.mongoose.fpEventLocationsAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateFpEventLocationAudit}, {new: true});
    		}
    		return objFpEventLocationAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventLocationAuditByFieldName(fieldName, updateFpEventLocationAudit) {
    	try {
    		let objFpEventLocationAudit;
    		if(sql) {
    			objFpEventLocationAudit = await models.sequelize.fpEventLocationsAudit.findOne({where: { field_name: fieldName }});
    			if (objFpEventLocationAudit) {
    				objFpEventLocationAudit = await models.sequelize.fpEventLocationsAudit.update(updateFpEventLocationAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objFpEventLocationAudit = await models.mongoose.fpEventLocationsAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateFpEventLocationAudit}, {new: true});
    		}
    		return objFpEventLocationAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventLocationAuditByDataType(dataType, updateFpEventLocationAudit) {
    	try {
    		let objFpEventLocationAudit;
    		if(sql) {
    			objFpEventLocationAudit = await models.sequelize.fpEventLocationsAudit.findOne({where: { data_type: dataType }});
    			if (objFpEventLocationAudit) {
    				objFpEventLocationAudit = await models.sequelize.fpEventLocationsAudit.update(updateFpEventLocationAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objFpEventLocationAudit = await models.mongoose.fpEventLocationsAudit.findOneAndUpdate({data_type: dataType}, {$set: updateFpEventLocationAudit}, {new: true});
    		}
    		return objFpEventLocationAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventLocationAuditByBeforeValueString(beforeValueString, updateFpEventLocationAudit) {
    	try {
    		let objFpEventLocationAudit;
    		if(sql) {
    			objFpEventLocationAudit = await models.sequelize.fpEventLocationsAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objFpEventLocationAudit) {
    				objFpEventLocationAudit = await models.sequelize.fpEventLocationsAudit.update(updateFpEventLocationAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objFpEventLocationAudit = await models.mongoose.fpEventLocationsAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateFpEventLocationAudit}, {new: true});
    		}
    		return objFpEventLocationAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventLocationAuditByAfterValueString(afterValueString, updateFpEventLocationAudit) {
    	try {
    		let objFpEventLocationAudit;
    		if(sql) {
    			objFpEventLocationAudit = await models.sequelize.fpEventLocationsAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objFpEventLocationAudit) {
    				objFpEventLocationAudit = await models.sequelize.fpEventLocationsAudit.update(updateFpEventLocationAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objFpEventLocationAudit = await models.mongoose.fpEventLocationsAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateFpEventLocationAudit}, {new: true});
    		}
    		return objFpEventLocationAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventLocationAuditByBeforeValueText(beforeValueText, updateFpEventLocationAudit) {
    	try {
    		let objFpEventLocationAudit;
    		if(sql) {
    			objFpEventLocationAudit = await models.sequelize.fpEventLocationsAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objFpEventLocationAudit) {
    				objFpEventLocationAudit = await models.sequelize.fpEventLocationsAudit.update(updateFpEventLocationAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objFpEventLocationAudit = await models.mongoose.fpEventLocationsAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateFpEventLocationAudit}, {new: true});
    		}
    		return objFpEventLocationAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventLocationAuditByAfterValueText(afterValueText, updateFpEventLocationAudit) {
    	try {
    		let objFpEventLocationAudit;
    		if(sql) {
    			objFpEventLocationAudit = await models.sequelize.fpEventLocationsAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objFpEventLocationAudit) {
    				objFpEventLocationAudit = await models.sequelize.fpEventLocationsAudit.update(updateFpEventLocationAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objFpEventLocationAudit = await models.mongoose.fpEventLocationsAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateFpEventLocationAudit}, {new: true});
    		}
    		return objFpEventLocationAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventLocationAuditByDateCreated(dateCreated, updateFpEventLocationAudit) {
    	try {
    		let objFpEventLocationAudit;
    		if(sql) {
    			objFpEventLocationAudit = await models.sequelize.fpEventLocationsAudit.findOne({where: { date_created: dateCreated }});
    			if (objFpEventLocationAudit) {
    				objFpEventLocationAudit = await models.sequelize.fpEventLocationsAudit.update(updateFpEventLocationAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objFpEventLocationAudit = await models.mongoose.fpEventLocationsAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateFpEventLocationAudit}, {new: true});
    		}
    		return objFpEventLocationAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventLocationAuditByParentId(parentId, updateFpEventLocationAudit) {
    	try {
    		let objFpEventLocationAudit;
    		if(sql) {
    			objFpEventLocationAudit = await models.sequelize.fpEventLocationsAudit.findOne({where: { parent_id: parentId }});
    			if (objFpEventLocationAudit) {
    				objFpEventLocationAudit = await models.sequelize.fpEventLocationsAudit.update(updateFpEventLocationAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objFpEventLocationAudit = await models.mongoose.fpEventLocationsAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateFpEventLocationAudit}, {new: true});
    		}
    		return objFpEventLocationAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = FpEventLocationAuditService;
//</es-section>
