/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:10 GMT-0400 (Bolivia Time)
 * Time: 14:0:10
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:10 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:10
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

class AopCaseUpdateAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAopCaseUpdatesAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aopCaseUpdatesAudit.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aopCaseUpdatesAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAopCaseUpdatesAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aopCaseUpdatesAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aopCaseUpdatesAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAopCaseUpdateAudit(newAopCaseUpdateAudit) {
		try {
			let objAopCaseUpdateAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aopCaseUpdatesAudit.primaryKeys.id.type.toString())) {
			    newAopCaseUpdateAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAopCaseUpdateAudit = await models.sequelize.aopCaseUpdatesAudit.create(newAopCaseUpdateAudit);
			} else {
				objAopCaseUpdateAudit = new models.mongoose.aopCaseUpdatesAudit(newAopCaseUpdateAudit);
				await objAopCaseUpdateAudit.save();
			}
			return objAopCaseUpdateAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateAopCaseUpdateAudit(id, updateAopCaseUpdateAudit) {
		try {
			let objAopCaseUpdateAudit;
			if(sql) {
				objAopCaseUpdateAudit = await models.sequelize.aopCaseUpdatesAudit.findOne({where: { id: util.Char(id) }});
				if (objAopCaseUpdateAudit) {
					await models.sequelize.aopCaseUpdatesAudit.update(updateAopCaseUpdateAudit, { where: { id: util.Char(id) } });
					objAopCaseUpdateAudit = await models.sequelize.aopCaseUpdatesAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAopCaseUpdateAudit._id;
				objAopCaseUpdateAudit = await models.mongoose.aopCaseUpdatesAudit.findOneAndUpdate({id:id}, {$set: updateAopCaseUpdateAudit}, {new: true});
			}
			return objAopCaseUpdateAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getAAopCaseUpdateAudit(id, query) {
		try {
			let objAopCaseUpdateAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAopCaseUpdateAudit = await models.sequelize.aopCaseUpdatesAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAopCaseUpdateAudit = await models.mongoose.aopCaseUpdatesAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objAopCaseUpdateAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAopCaseUpdateAudit(id) {
		try {
			let objAopCaseUpdateAudit;
			if(sql) {
				objAopCaseUpdateAudit = await models.sequelize.aopCaseUpdatesAudit.findOne({ where: { id: util.Char(id) } });
				if (objAopCaseUpdateAudit) {
					await models.sequelize.aopCaseUpdatesAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAopCaseUpdateAudit = await models.mongoose.aopCaseUpdatesAudit.deleteOne({id:util.Char(id)});
			}
			return objAopCaseUpdateAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAopCaseUpdateAudit;
    		if(sql) {
    			objAopCaseUpdateAudit = await models.sequelize.aopCaseUpdatesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAopCaseUpdateAudit = await models.mongoose.aopCaseUpdatesAudit.findOne({id: id});
    		}
    		return objAopCaseUpdateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAopCaseUpdateAudit;
    		if(sql) {
    			objAopCaseUpdateAudit = await models.sequelize.aopCaseUpdatesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAopCaseUpdateAudit = await models.mongoose.aopCaseUpdatesAudit.findOne({created_by: createdBy});
    		}
    		return objAopCaseUpdateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objAopCaseUpdateAudit;
    		if(sql) {
    			objAopCaseUpdateAudit = await models.sequelize.aopCaseUpdatesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objAopCaseUpdateAudit = await models.mongoose.aopCaseUpdatesAudit.findOne({field_name: fieldName});
    		}
    		return objAopCaseUpdateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objAopCaseUpdateAudit;
    		if(sql) {
    			objAopCaseUpdateAudit = await models.sequelize.aopCaseUpdatesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objAopCaseUpdateAudit = await models.mongoose.aopCaseUpdatesAudit.findOne({data_type: dataType});
    		}
    		return objAopCaseUpdateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objAopCaseUpdateAudit;
    		if(sql) {
    			objAopCaseUpdateAudit = await models.sequelize.aopCaseUpdatesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objAopCaseUpdateAudit = await models.mongoose.aopCaseUpdatesAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objAopCaseUpdateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objAopCaseUpdateAudit;
    		if(sql) {
    			objAopCaseUpdateAudit = await models.sequelize.aopCaseUpdatesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objAopCaseUpdateAudit = await models.mongoose.aopCaseUpdatesAudit.findOne({after_value_string: afterValueString});
    		}
    		return objAopCaseUpdateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objAopCaseUpdateAudit;
    		if(sql) {
    			objAopCaseUpdateAudit = await models.sequelize.aopCaseUpdatesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objAopCaseUpdateAudit = await models.mongoose.aopCaseUpdatesAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objAopCaseUpdateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objAopCaseUpdateAudit;
    		if(sql) {
    			objAopCaseUpdateAudit = await models.sequelize.aopCaseUpdatesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objAopCaseUpdateAudit = await models.mongoose.aopCaseUpdatesAudit.findOne({after_value_text: afterValueText});
    		}
    		return objAopCaseUpdateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objAopCaseUpdateAudit;
    		if(sql) {
    			objAopCaseUpdateAudit = await models.sequelize.aopCaseUpdatesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objAopCaseUpdateAudit = await models.mongoose.aopCaseUpdatesAudit.findOne({date_created: dateCreated});
    		}
    		return objAopCaseUpdateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objAopCaseUpdateAudit;
    		if(sql) {
    			objAopCaseUpdateAudit = await models.sequelize.aopCaseUpdatesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objAopCaseUpdateAudit = await models.mongoose.aopCaseUpdatesAudit.findOne({parent_id: parentId});
    		}
    		return objAopCaseUpdateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAopCaseUpdateAuditById(id, updateAopCaseUpdateAudit) {
    	try {
    		let objAopCaseUpdateAudit;
    		if(sql) {
    			objAopCaseUpdateAudit = await models.sequelize.aopCaseUpdatesAudit.findOne({where: { id: id }});
    			if (objAopCaseUpdateAudit) {
    				objAopCaseUpdateAudit = await models.sequelize.aopCaseUpdatesAudit.update(updateAopCaseUpdateAudit, { where: { id: id } });
    			}
    		} else {
    			objAopCaseUpdateAudit = await models.mongoose.aopCaseUpdatesAudit.findOneAndUpdate({id: id}, {$set: updateAopCaseUpdateAudit}, {new: true});
    		}
    		return objAopCaseUpdateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAopCaseUpdateAuditByCreatedBy(createdBy, updateAopCaseUpdateAudit) {
    	try {
    		let objAopCaseUpdateAudit;
    		if(sql) {
    			objAopCaseUpdateAudit = await models.sequelize.aopCaseUpdatesAudit.findOne({where: { created_by: createdBy }});
    			if (objAopCaseUpdateAudit) {
    				objAopCaseUpdateAudit = await models.sequelize.aopCaseUpdatesAudit.update(updateAopCaseUpdateAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAopCaseUpdateAudit = await models.mongoose.aopCaseUpdatesAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateAopCaseUpdateAudit}, {new: true});
    		}
    		return objAopCaseUpdateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAopCaseUpdateAuditByFieldName(fieldName, updateAopCaseUpdateAudit) {
    	try {
    		let objAopCaseUpdateAudit;
    		if(sql) {
    			objAopCaseUpdateAudit = await models.sequelize.aopCaseUpdatesAudit.findOne({where: { field_name: fieldName }});
    			if (objAopCaseUpdateAudit) {
    				objAopCaseUpdateAudit = await models.sequelize.aopCaseUpdatesAudit.update(updateAopCaseUpdateAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objAopCaseUpdateAudit = await models.mongoose.aopCaseUpdatesAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateAopCaseUpdateAudit}, {new: true});
    		}
    		return objAopCaseUpdateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAopCaseUpdateAuditByDataType(dataType, updateAopCaseUpdateAudit) {
    	try {
    		let objAopCaseUpdateAudit;
    		if(sql) {
    			objAopCaseUpdateAudit = await models.sequelize.aopCaseUpdatesAudit.findOne({where: { data_type: dataType }});
    			if (objAopCaseUpdateAudit) {
    				objAopCaseUpdateAudit = await models.sequelize.aopCaseUpdatesAudit.update(updateAopCaseUpdateAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objAopCaseUpdateAudit = await models.mongoose.aopCaseUpdatesAudit.findOneAndUpdate({data_type: dataType}, {$set: updateAopCaseUpdateAudit}, {new: true});
    		}
    		return objAopCaseUpdateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAopCaseUpdateAuditByBeforeValueString(beforeValueString, updateAopCaseUpdateAudit) {
    	try {
    		let objAopCaseUpdateAudit;
    		if(sql) {
    			objAopCaseUpdateAudit = await models.sequelize.aopCaseUpdatesAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objAopCaseUpdateAudit) {
    				objAopCaseUpdateAudit = await models.sequelize.aopCaseUpdatesAudit.update(updateAopCaseUpdateAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objAopCaseUpdateAudit = await models.mongoose.aopCaseUpdatesAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateAopCaseUpdateAudit}, {new: true});
    		}
    		return objAopCaseUpdateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAopCaseUpdateAuditByAfterValueString(afterValueString, updateAopCaseUpdateAudit) {
    	try {
    		let objAopCaseUpdateAudit;
    		if(sql) {
    			objAopCaseUpdateAudit = await models.sequelize.aopCaseUpdatesAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objAopCaseUpdateAudit) {
    				objAopCaseUpdateAudit = await models.sequelize.aopCaseUpdatesAudit.update(updateAopCaseUpdateAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objAopCaseUpdateAudit = await models.mongoose.aopCaseUpdatesAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateAopCaseUpdateAudit}, {new: true});
    		}
    		return objAopCaseUpdateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAopCaseUpdateAuditByBeforeValueText(beforeValueText, updateAopCaseUpdateAudit) {
    	try {
    		let objAopCaseUpdateAudit;
    		if(sql) {
    			objAopCaseUpdateAudit = await models.sequelize.aopCaseUpdatesAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objAopCaseUpdateAudit) {
    				objAopCaseUpdateAudit = await models.sequelize.aopCaseUpdatesAudit.update(updateAopCaseUpdateAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objAopCaseUpdateAudit = await models.mongoose.aopCaseUpdatesAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateAopCaseUpdateAudit}, {new: true});
    		}
    		return objAopCaseUpdateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAopCaseUpdateAuditByAfterValueText(afterValueText, updateAopCaseUpdateAudit) {
    	try {
    		let objAopCaseUpdateAudit;
    		if(sql) {
    			objAopCaseUpdateAudit = await models.sequelize.aopCaseUpdatesAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objAopCaseUpdateAudit) {
    				objAopCaseUpdateAudit = await models.sequelize.aopCaseUpdatesAudit.update(updateAopCaseUpdateAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objAopCaseUpdateAudit = await models.mongoose.aopCaseUpdatesAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateAopCaseUpdateAudit}, {new: true});
    		}
    		return objAopCaseUpdateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAopCaseUpdateAuditByDateCreated(dateCreated, updateAopCaseUpdateAudit) {
    	try {
    		let objAopCaseUpdateAudit;
    		if(sql) {
    			objAopCaseUpdateAudit = await models.sequelize.aopCaseUpdatesAudit.findOne({where: { date_created: dateCreated }});
    			if (objAopCaseUpdateAudit) {
    				objAopCaseUpdateAudit = await models.sequelize.aopCaseUpdatesAudit.update(updateAopCaseUpdateAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objAopCaseUpdateAudit = await models.mongoose.aopCaseUpdatesAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateAopCaseUpdateAudit}, {new: true});
    		}
    		return objAopCaseUpdateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAopCaseUpdateAuditByParentId(parentId, updateAopCaseUpdateAudit) {
    	try {
    		let objAopCaseUpdateAudit;
    		if(sql) {
    			objAopCaseUpdateAudit = await models.sequelize.aopCaseUpdatesAudit.findOne({where: { parent_id: parentId }});
    			if (objAopCaseUpdateAudit) {
    				objAopCaseUpdateAudit = await models.sequelize.aopCaseUpdatesAudit.update(updateAopCaseUpdateAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objAopCaseUpdateAudit = await models.mongoose.aopCaseUpdatesAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateAopCaseUpdateAudit}, {new: true});
    		}
    		return objAopCaseUpdateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AopCaseUpdateAuditService;
//</es-section>
