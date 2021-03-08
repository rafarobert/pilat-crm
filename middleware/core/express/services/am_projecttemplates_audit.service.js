/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:02 GMT-0400 (Bolivia Time)
 * Time: 15:35:2
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:02 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:2
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

class AmProjecttemplateAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAmProjecttemplatesAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.amProjecttemplatesAudit.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.amProjecttemplatesAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAmProjecttemplatesAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.amProjecttemplatesAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.amProjecttemplatesAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAmProjecttemplateAudit(newAmProjecttemplateAudit) {
		try {
			let objAmProjecttemplateAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.amProjecttemplatesAudit.primaryKeys.id.type.toString())) {
			    newAmProjecttemplateAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAmProjecttemplateAudit = await models.sequelize.amProjecttemplatesAudit.create(newAmProjecttemplateAudit);
			} else {
				objAmProjecttemplateAudit = new models.mongoose.amProjecttemplatesAudit(newAmProjecttemplateAudit);
				await objAmProjecttemplateAudit.save();
			}
			return objAmProjecttemplateAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateAmProjecttemplateAudit(id, updateAmProjecttemplateAudit) {
		try {
			let objAmProjecttemplateAudit;
			if(sql) {
				objAmProjecttemplateAudit = await models.sequelize.amProjecttemplatesAudit.findOne({where: { id: util.Char(id) }});
				if (objAmProjecttemplateAudit) {
					await models.sequelize.amProjecttemplatesAudit.update(updateAmProjecttemplateAudit, { where: { id: util.Char(id) } });
					objAmProjecttemplateAudit = await models.sequelize.amProjecttemplatesAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAmProjecttemplateAudit._id;
				objAmProjecttemplateAudit = await models.mongoose.amProjecttemplatesAudit.findOneAndUpdate({id:id}, {$set: updateAmProjecttemplateAudit}, {new: true});
			}
			return objAmProjecttemplateAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getAAmProjecttemplateAudit(id, query) {
		try {
			let objAmProjecttemplateAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAmProjecttemplateAudit = await models.sequelize.amProjecttemplatesAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAmProjecttemplateAudit = await models.mongoose.amProjecttemplatesAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objAmProjecttemplateAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAmProjecttemplateAudit(id) {
		try {
			let objAmProjecttemplateAudit;
			if(sql) {
				objAmProjecttemplateAudit = await models.sequelize.amProjecttemplatesAudit.findOne({ where: { id: util.Char(id) } });
				if (objAmProjecttemplateAudit) {
					await models.sequelize.amProjecttemplatesAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAmProjecttemplateAudit = await models.mongoose.amProjecttemplatesAudit.deleteOne({id:util.Char(id)});
			}
			return objAmProjecttemplateAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAmProjecttemplateAudit;
    		if(sql) {
    			objAmProjecttemplateAudit = await models.sequelize.amProjecttemplatesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAmProjecttemplateAudit = await models.mongoose.amProjecttemplatesAudit.findOne({id: id});
    		}
    		return objAmProjecttemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAmProjecttemplateAudit;
    		if(sql) {
    			objAmProjecttemplateAudit = await models.sequelize.amProjecttemplatesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAmProjecttemplateAudit = await models.mongoose.amProjecttemplatesAudit.findOne({created_by: createdBy});
    		}
    		return objAmProjecttemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objAmProjecttemplateAudit;
    		if(sql) {
    			objAmProjecttemplateAudit = await models.sequelize.amProjecttemplatesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objAmProjecttemplateAudit = await models.mongoose.amProjecttemplatesAudit.findOne({field_name: fieldName});
    		}
    		return objAmProjecttemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objAmProjecttemplateAudit;
    		if(sql) {
    			objAmProjecttemplateAudit = await models.sequelize.amProjecttemplatesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objAmProjecttemplateAudit = await models.mongoose.amProjecttemplatesAudit.findOne({data_type: dataType});
    		}
    		return objAmProjecttemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objAmProjecttemplateAudit;
    		if(sql) {
    			objAmProjecttemplateAudit = await models.sequelize.amProjecttemplatesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objAmProjecttemplateAudit = await models.mongoose.amProjecttemplatesAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objAmProjecttemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objAmProjecttemplateAudit;
    		if(sql) {
    			objAmProjecttemplateAudit = await models.sequelize.amProjecttemplatesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objAmProjecttemplateAudit = await models.mongoose.amProjecttemplatesAudit.findOne({after_value_string: afterValueString});
    		}
    		return objAmProjecttemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objAmProjecttemplateAudit;
    		if(sql) {
    			objAmProjecttemplateAudit = await models.sequelize.amProjecttemplatesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objAmProjecttemplateAudit = await models.mongoose.amProjecttemplatesAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objAmProjecttemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objAmProjecttemplateAudit;
    		if(sql) {
    			objAmProjecttemplateAudit = await models.sequelize.amProjecttemplatesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objAmProjecttemplateAudit = await models.mongoose.amProjecttemplatesAudit.findOne({after_value_text: afterValueText});
    		}
    		return objAmProjecttemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objAmProjecttemplateAudit;
    		if(sql) {
    			objAmProjecttemplateAudit = await models.sequelize.amProjecttemplatesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objAmProjecttemplateAudit = await models.mongoose.amProjecttemplatesAudit.findOne({date_created: dateCreated});
    		}
    		return objAmProjecttemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objAmProjecttemplateAudit;
    		if(sql) {
    			objAmProjecttemplateAudit = await models.sequelize.amProjecttemplatesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objAmProjecttemplateAudit = await models.mongoose.amProjecttemplatesAudit.findOne({parent_id: parentId});
    		}
    		return objAmProjecttemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAmProjecttemplateAuditById(id, updateAmProjecttemplateAudit) {
    	try {
    		let objAmProjecttemplateAudit;
    		if(sql) {
    			objAmProjecttemplateAudit = await models.sequelize.amProjecttemplatesAudit.findOne({where: { id: id }});
    			if (objAmProjecttemplateAudit) {
    				objAmProjecttemplateAudit = await models.sequelize.amProjecttemplatesAudit.update(updateAmProjecttemplateAudit, { where: { id: id } });
    			}
    		} else {
    			objAmProjecttemplateAudit = await models.mongoose.amProjecttemplatesAudit.findOneAndUpdate({id: id}, {$set: updateAmProjecttemplateAudit}, {new: true});
    		}
    		return objAmProjecttemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmProjecttemplateAuditByCreatedBy(createdBy, updateAmProjecttemplateAudit) {
    	try {
    		let objAmProjecttemplateAudit;
    		if(sql) {
    			objAmProjecttemplateAudit = await models.sequelize.amProjecttemplatesAudit.findOne({where: { created_by: createdBy }});
    			if (objAmProjecttemplateAudit) {
    				objAmProjecttemplateAudit = await models.sequelize.amProjecttemplatesAudit.update(updateAmProjecttemplateAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAmProjecttemplateAudit = await models.mongoose.amProjecttemplatesAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateAmProjecttemplateAudit}, {new: true});
    		}
    		return objAmProjecttemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmProjecttemplateAuditByFieldName(fieldName, updateAmProjecttemplateAudit) {
    	try {
    		let objAmProjecttemplateAudit;
    		if(sql) {
    			objAmProjecttemplateAudit = await models.sequelize.amProjecttemplatesAudit.findOne({where: { field_name: fieldName }});
    			if (objAmProjecttemplateAudit) {
    				objAmProjecttemplateAudit = await models.sequelize.amProjecttemplatesAudit.update(updateAmProjecttemplateAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objAmProjecttemplateAudit = await models.mongoose.amProjecttemplatesAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateAmProjecttemplateAudit}, {new: true});
    		}
    		return objAmProjecttemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmProjecttemplateAuditByDataType(dataType, updateAmProjecttemplateAudit) {
    	try {
    		let objAmProjecttemplateAudit;
    		if(sql) {
    			objAmProjecttemplateAudit = await models.sequelize.amProjecttemplatesAudit.findOne({where: { data_type: dataType }});
    			if (objAmProjecttemplateAudit) {
    				objAmProjecttemplateAudit = await models.sequelize.amProjecttemplatesAudit.update(updateAmProjecttemplateAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objAmProjecttemplateAudit = await models.mongoose.amProjecttemplatesAudit.findOneAndUpdate({data_type: dataType}, {$set: updateAmProjecttemplateAudit}, {new: true});
    		}
    		return objAmProjecttemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmProjecttemplateAuditByBeforeValueString(beforeValueString, updateAmProjecttemplateAudit) {
    	try {
    		let objAmProjecttemplateAudit;
    		if(sql) {
    			objAmProjecttemplateAudit = await models.sequelize.amProjecttemplatesAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objAmProjecttemplateAudit) {
    				objAmProjecttemplateAudit = await models.sequelize.amProjecttemplatesAudit.update(updateAmProjecttemplateAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objAmProjecttemplateAudit = await models.mongoose.amProjecttemplatesAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateAmProjecttemplateAudit}, {new: true});
    		}
    		return objAmProjecttemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmProjecttemplateAuditByAfterValueString(afterValueString, updateAmProjecttemplateAudit) {
    	try {
    		let objAmProjecttemplateAudit;
    		if(sql) {
    			objAmProjecttemplateAudit = await models.sequelize.amProjecttemplatesAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objAmProjecttemplateAudit) {
    				objAmProjecttemplateAudit = await models.sequelize.amProjecttemplatesAudit.update(updateAmProjecttemplateAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objAmProjecttemplateAudit = await models.mongoose.amProjecttemplatesAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateAmProjecttemplateAudit}, {new: true});
    		}
    		return objAmProjecttemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmProjecttemplateAuditByBeforeValueText(beforeValueText, updateAmProjecttemplateAudit) {
    	try {
    		let objAmProjecttemplateAudit;
    		if(sql) {
    			objAmProjecttemplateAudit = await models.sequelize.amProjecttemplatesAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objAmProjecttemplateAudit) {
    				objAmProjecttemplateAudit = await models.sequelize.amProjecttemplatesAudit.update(updateAmProjecttemplateAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objAmProjecttemplateAudit = await models.mongoose.amProjecttemplatesAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateAmProjecttemplateAudit}, {new: true});
    		}
    		return objAmProjecttemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmProjecttemplateAuditByAfterValueText(afterValueText, updateAmProjecttemplateAudit) {
    	try {
    		let objAmProjecttemplateAudit;
    		if(sql) {
    			objAmProjecttemplateAudit = await models.sequelize.amProjecttemplatesAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objAmProjecttemplateAudit) {
    				objAmProjecttemplateAudit = await models.sequelize.amProjecttemplatesAudit.update(updateAmProjecttemplateAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objAmProjecttemplateAudit = await models.mongoose.amProjecttemplatesAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateAmProjecttemplateAudit}, {new: true});
    		}
    		return objAmProjecttemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmProjecttemplateAuditByDateCreated(dateCreated, updateAmProjecttemplateAudit) {
    	try {
    		let objAmProjecttemplateAudit;
    		if(sql) {
    			objAmProjecttemplateAudit = await models.sequelize.amProjecttemplatesAudit.findOne({where: { date_created: dateCreated }});
    			if (objAmProjecttemplateAudit) {
    				objAmProjecttemplateAudit = await models.sequelize.amProjecttemplatesAudit.update(updateAmProjecttemplateAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objAmProjecttemplateAudit = await models.mongoose.amProjecttemplatesAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateAmProjecttemplateAudit}, {new: true});
    		}
    		return objAmProjecttemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmProjecttemplateAuditByParentId(parentId, updateAmProjecttemplateAudit) {
    	try {
    		let objAmProjecttemplateAudit;
    		if(sql) {
    			objAmProjecttemplateAudit = await models.sequelize.amProjecttemplatesAudit.findOne({where: { parent_id: parentId }});
    			if (objAmProjecttemplateAudit) {
    				objAmProjecttemplateAudit = await models.sequelize.amProjecttemplatesAudit.update(updateAmProjecttemplateAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objAmProjecttemplateAudit = await models.mongoose.amProjecttemplatesAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateAmProjecttemplateAudit}, {new: true});
    		}
    		return objAmProjecttemplateAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AmProjecttemplateAuditService;
//</es-section>
