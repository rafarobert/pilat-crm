/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:36:29 GMT-0400 (Bolivia Time)
 * Time: 18:36:29
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:36:29 GMT-0400 (Bolivia Time)
 * Last time updated: 18:36:29
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

class BugAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllBugsAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.bugsAudit.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.bugsAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllBugsAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.bugsAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.bugsAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addBugAudit(newBugAudit) {
		try {
			let objBugAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.bugsAudit.primaryKeys.id.type.toString())) {
			    newBugAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objBugAudit = await models.sequelize.bugsAudit.create(newBugAudit);
			} else {
				objBugAudit = new models.mongoose.bugsAudit(newBugAudit);
				await objBugAudit.save();
			}
			return objBugAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateBugAudit(id, updateBugAudit) {
		try {
			let objBugAudit;
			if(sql) {
				objBugAudit = await models.sequelize.bugsAudit.findOne({where: { id: util.Char(id) }});
				if (objBugAudit) {
					await models.sequelize.bugsAudit.update(updateBugAudit, { where: { id: util.Char(id) } });
					objBugAudit = await models.sequelize.bugsAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateBugAudit._id;
				objBugAudit = await models.mongoose.bugsAudit.findOneAndUpdate({id:id}, {$set: updateBugAudit}, {new: true});
			}
			return objBugAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getABugAudit(id, query) {
		try {
			let objBugAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objBugAudit = await models.sequelize.bugsAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objBugAudit = await models.mongoose.bugsAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objBugAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteBugAudit(id) {
		try {
			let objBugAudit;
			if(sql) {
				objBugAudit = await models.sequelize.bugsAudit.findOne({ where: { id: util.Char(id) } });
				if (objBugAudit) {
					await models.sequelize.bugsAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objBugAudit = await models.mongoose.bugsAudit.deleteOne({id:util.Char(id)});
			}
			return objBugAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objBugAudit;
    		if(sql) {
    			objBugAudit = await models.sequelize.bugsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objBugAudit = await models.mongoose.bugsAudit.findOne({id: id});
    		}
    		return objBugAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objBugAudit;
    		if(sql) {
    			objBugAudit = await models.sequelize.bugsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objBugAudit = await models.mongoose.bugsAudit.findOne({created_by: createdBy});
    		}
    		return objBugAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objBugAudit;
    		if(sql) {
    			objBugAudit = await models.sequelize.bugsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objBugAudit = await models.mongoose.bugsAudit.findOne({field_name: fieldName});
    		}
    		return objBugAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objBugAudit;
    		if(sql) {
    			objBugAudit = await models.sequelize.bugsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objBugAudit = await models.mongoose.bugsAudit.findOne({data_type: dataType});
    		}
    		return objBugAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objBugAudit;
    		if(sql) {
    			objBugAudit = await models.sequelize.bugsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objBugAudit = await models.mongoose.bugsAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objBugAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objBugAudit;
    		if(sql) {
    			objBugAudit = await models.sequelize.bugsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objBugAudit = await models.mongoose.bugsAudit.findOne({after_value_string: afterValueString});
    		}
    		return objBugAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objBugAudit;
    		if(sql) {
    			objBugAudit = await models.sequelize.bugsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objBugAudit = await models.mongoose.bugsAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objBugAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objBugAudit;
    		if(sql) {
    			objBugAudit = await models.sequelize.bugsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objBugAudit = await models.mongoose.bugsAudit.findOne({after_value_text: afterValueText});
    		}
    		return objBugAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objBugAudit;
    		if(sql) {
    			objBugAudit = await models.sequelize.bugsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objBugAudit = await models.mongoose.bugsAudit.findOne({date_created: dateCreated});
    		}
    		return objBugAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objBugAudit;
    		if(sql) {
    			objBugAudit = await models.sequelize.bugsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objBugAudit = await models.mongoose.bugsAudit.findOne({parent_id: parentId});
    		}
    		return objBugAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateBugAuditById(id, updateBugAudit) {
    	try {
    		let objBugAudit;
    		if(sql) {
    			objBugAudit = await models.sequelize.bugsAudit.findOne({where: { id: id }});
    			if (objBugAudit) {
    				objBugAudit = await models.sequelize.bugsAudit.update(updateBugAudit, { where: { id: id } });
    			}
    		} else {
    			objBugAudit = await models.mongoose.bugsAudit.findOneAndUpdate({id: id}, {$set: updateBugAudit}, {new: true});
    		}
    		return objBugAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateBugAuditByCreatedBy(createdBy, updateBugAudit) {
    	try {
    		let objBugAudit;
    		if(sql) {
    			objBugAudit = await models.sequelize.bugsAudit.findOne({where: { created_by: createdBy }});
    			if (objBugAudit) {
    				objBugAudit = await models.sequelize.bugsAudit.update(updateBugAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objBugAudit = await models.mongoose.bugsAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateBugAudit}, {new: true});
    		}
    		return objBugAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateBugAuditByFieldName(fieldName, updateBugAudit) {
    	try {
    		let objBugAudit;
    		if(sql) {
    			objBugAudit = await models.sequelize.bugsAudit.findOne({where: { field_name: fieldName }});
    			if (objBugAudit) {
    				objBugAudit = await models.sequelize.bugsAudit.update(updateBugAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objBugAudit = await models.mongoose.bugsAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateBugAudit}, {new: true});
    		}
    		return objBugAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateBugAuditByDataType(dataType, updateBugAudit) {
    	try {
    		let objBugAudit;
    		if(sql) {
    			objBugAudit = await models.sequelize.bugsAudit.findOne({where: { data_type: dataType }});
    			if (objBugAudit) {
    				objBugAudit = await models.sequelize.bugsAudit.update(updateBugAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objBugAudit = await models.mongoose.bugsAudit.findOneAndUpdate({data_type: dataType}, {$set: updateBugAudit}, {new: true});
    		}
    		return objBugAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateBugAuditByBeforeValueString(beforeValueString, updateBugAudit) {
    	try {
    		let objBugAudit;
    		if(sql) {
    			objBugAudit = await models.sequelize.bugsAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objBugAudit) {
    				objBugAudit = await models.sequelize.bugsAudit.update(updateBugAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objBugAudit = await models.mongoose.bugsAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateBugAudit}, {new: true});
    		}
    		return objBugAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateBugAuditByAfterValueString(afterValueString, updateBugAudit) {
    	try {
    		let objBugAudit;
    		if(sql) {
    			objBugAudit = await models.sequelize.bugsAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objBugAudit) {
    				objBugAudit = await models.sequelize.bugsAudit.update(updateBugAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objBugAudit = await models.mongoose.bugsAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateBugAudit}, {new: true});
    		}
    		return objBugAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateBugAuditByBeforeValueText(beforeValueText, updateBugAudit) {
    	try {
    		let objBugAudit;
    		if(sql) {
    			objBugAudit = await models.sequelize.bugsAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objBugAudit) {
    				objBugAudit = await models.sequelize.bugsAudit.update(updateBugAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objBugAudit = await models.mongoose.bugsAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateBugAudit}, {new: true});
    		}
    		return objBugAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateBugAuditByAfterValueText(afterValueText, updateBugAudit) {
    	try {
    		let objBugAudit;
    		if(sql) {
    			objBugAudit = await models.sequelize.bugsAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objBugAudit) {
    				objBugAudit = await models.sequelize.bugsAudit.update(updateBugAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objBugAudit = await models.mongoose.bugsAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateBugAudit}, {new: true});
    		}
    		return objBugAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateBugAuditByDateCreated(dateCreated, updateBugAudit) {
    	try {
    		let objBugAudit;
    		if(sql) {
    			objBugAudit = await models.sequelize.bugsAudit.findOne({where: { date_created: dateCreated }});
    			if (objBugAudit) {
    				objBugAudit = await models.sequelize.bugsAudit.update(updateBugAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objBugAudit = await models.mongoose.bugsAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateBugAudit}, {new: true});
    		}
    		return objBugAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateBugAuditByParentId(parentId, updateBugAudit) {
    	try {
    		let objBugAudit;
    		if(sql) {
    			objBugAudit = await models.sequelize.bugsAudit.findOne({where: { parent_id: parentId }});
    			if (objBugAudit) {
    				objBugAudit = await models.sequelize.bugsAudit.update(updateBugAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objBugAudit = await models.mongoose.bugsAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateBugAudit}, {new: true});
    		}
    		return objBugAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = BugAuditService;
//</es-section>
