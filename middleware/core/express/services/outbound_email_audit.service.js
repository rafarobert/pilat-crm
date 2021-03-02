/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:15 GMT-0400 (Bolivia Time)
 * Time: 14:1:15
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:15 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:15
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

class OutboundEmailAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllOutboundEmailAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.outboundEmailAudit.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.outboundEmailAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllOutboundEmailAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.outboundEmailAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.outboundEmailAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addOutboundEmailAudit(newOutboundEmailAudit) {
		try {
			let objOutboundEmailAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.outboundEmailAudit.primaryKeys.id.type.toString())) {
			    newOutboundEmailAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objOutboundEmailAudit = await models.sequelize.outboundEmailAudit.create(newOutboundEmailAudit);
			} else {
				objOutboundEmailAudit = new models.mongoose.outboundEmailAudit(newOutboundEmailAudit);
				await objOutboundEmailAudit.save();
			}
			return objOutboundEmailAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateOutboundEmailAudit(id, updateOutboundEmailAudit) {
		try {
			let objOutboundEmailAudit;
			if(sql) {
				objOutboundEmailAudit = await models.sequelize.outboundEmailAudit.findOne({where: { id: util.Char(id) }});
				if (objOutboundEmailAudit) {
					await models.sequelize.outboundEmailAudit.update(updateOutboundEmailAudit, { where: { id: util.Char(id) } });
					objOutboundEmailAudit = await models.sequelize.outboundEmailAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateOutboundEmailAudit._id;
				objOutboundEmailAudit = await models.mongoose.outboundEmailAudit.findOneAndUpdate({id:id}, {$set: updateOutboundEmailAudit}, {new: true});
			}
			return objOutboundEmailAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getAOutboundEmailAudit(id, query) {
		try {
			let objOutboundEmailAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objOutboundEmailAudit = await models.sequelize.outboundEmailAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objOutboundEmailAudit = await models.mongoose.outboundEmailAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objOutboundEmailAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteOutboundEmailAudit(id) {
		try {
			let objOutboundEmailAudit;
			if(sql) {
				objOutboundEmailAudit = await models.sequelize.outboundEmailAudit.findOne({ where: { id: util.Char(id) } });
				if (objOutboundEmailAudit) {
					await models.sequelize.outboundEmailAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objOutboundEmailAudit = await models.mongoose.outboundEmailAudit.deleteOne({id:util.Char(id)});
			}
			return objOutboundEmailAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objOutboundEmailAudit;
    		if(sql) {
    			objOutboundEmailAudit = await models.sequelize.outboundEmailAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objOutboundEmailAudit = await models.mongoose.outboundEmailAudit.findOne({id: id});
    		}
    		return objOutboundEmailAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objOutboundEmailAudit;
    		if(sql) {
    			objOutboundEmailAudit = await models.sequelize.outboundEmailAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objOutboundEmailAudit = await models.mongoose.outboundEmailAudit.findOne({created_by: createdBy});
    		}
    		return objOutboundEmailAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objOutboundEmailAudit;
    		if(sql) {
    			objOutboundEmailAudit = await models.sequelize.outboundEmailAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objOutboundEmailAudit = await models.mongoose.outboundEmailAudit.findOne({field_name: fieldName});
    		}
    		return objOutboundEmailAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objOutboundEmailAudit;
    		if(sql) {
    			objOutboundEmailAudit = await models.sequelize.outboundEmailAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objOutboundEmailAudit = await models.mongoose.outboundEmailAudit.findOne({data_type: dataType});
    		}
    		return objOutboundEmailAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objOutboundEmailAudit;
    		if(sql) {
    			objOutboundEmailAudit = await models.sequelize.outboundEmailAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objOutboundEmailAudit = await models.mongoose.outboundEmailAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objOutboundEmailAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objOutboundEmailAudit;
    		if(sql) {
    			objOutboundEmailAudit = await models.sequelize.outboundEmailAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objOutboundEmailAudit = await models.mongoose.outboundEmailAudit.findOne({after_value_string: afterValueString});
    		}
    		return objOutboundEmailAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objOutboundEmailAudit;
    		if(sql) {
    			objOutboundEmailAudit = await models.sequelize.outboundEmailAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objOutboundEmailAudit = await models.mongoose.outboundEmailAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objOutboundEmailAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objOutboundEmailAudit;
    		if(sql) {
    			objOutboundEmailAudit = await models.sequelize.outboundEmailAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objOutboundEmailAudit = await models.mongoose.outboundEmailAudit.findOne({after_value_text: afterValueText});
    		}
    		return objOutboundEmailAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objOutboundEmailAudit;
    		if(sql) {
    			objOutboundEmailAudit = await models.sequelize.outboundEmailAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objOutboundEmailAudit = await models.mongoose.outboundEmailAudit.findOne({date_created: dateCreated});
    		}
    		return objOutboundEmailAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objOutboundEmailAudit;
    		if(sql) {
    			objOutboundEmailAudit = await models.sequelize.outboundEmailAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objOutboundEmailAudit = await models.mongoose.outboundEmailAudit.findOne({parent_id: parentId});
    		}
    		return objOutboundEmailAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateOutboundEmailAuditById(id, updateOutboundEmailAudit) {
    	try {
    		let objOutboundEmailAudit;
    		if(sql) {
    			objOutboundEmailAudit = await models.sequelize.outboundEmailAudit.findOne({where: { id: id }});
    			if (objOutboundEmailAudit) {
    				objOutboundEmailAudit = await models.sequelize.outboundEmailAudit.update(updateOutboundEmailAudit, { where: { id: id } });
    			}
    		} else {
    			objOutboundEmailAudit = await models.mongoose.outboundEmailAudit.findOneAndUpdate({id: id}, {$set: updateOutboundEmailAudit}, {new: true});
    		}
    		return objOutboundEmailAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOutboundEmailAuditByCreatedBy(createdBy, updateOutboundEmailAudit) {
    	try {
    		let objOutboundEmailAudit;
    		if(sql) {
    			objOutboundEmailAudit = await models.sequelize.outboundEmailAudit.findOne({where: { created_by: createdBy }});
    			if (objOutboundEmailAudit) {
    				objOutboundEmailAudit = await models.sequelize.outboundEmailAudit.update(updateOutboundEmailAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objOutboundEmailAudit = await models.mongoose.outboundEmailAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateOutboundEmailAudit}, {new: true});
    		}
    		return objOutboundEmailAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOutboundEmailAuditByFieldName(fieldName, updateOutboundEmailAudit) {
    	try {
    		let objOutboundEmailAudit;
    		if(sql) {
    			objOutboundEmailAudit = await models.sequelize.outboundEmailAudit.findOne({where: { field_name: fieldName }});
    			if (objOutboundEmailAudit) {
    				objOutboundEmailAudit = await models.sequelize.outboundEmailAudit.update(updateOutboundEmailAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objOutboundEmailAudit = await models.mongoose.outboundEmailAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateOutboundEmailAudit}, {new: true});
    		}
    		return objOutboundEmailAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOutboundEmailAuditByDataType(dataType, updateOutboundEmailAudit) {
    	try {
    		let objOutboundEmailAudit;
    		if(sql) {
    			objOutboundEmailAudit = await models.sequelize.outboundEmailAudit.findOne({where: { data_type: dataType }});
    			if (objOutboundEmailAudit) {
    				objOutboundEmailAudit = await models.sequelize.outboundEmailAudit.update(updateOutboundEmailAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objOutboundEmailAudit = await models.mongoose.outboundEmailAudit.findOneAndUpdate({data_type: dataType}, {$set: updateOutboundEmailAudit}, {new: true});
    		}
    		return objOutboundEmailAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOutboundEmailAuditByBeforeValueString(beforeValueString, updateOutboundEmailAudit) {
    	try {
    		let objOutboundEmailAudit;
    		if(sql) {
    			objOutboundEmailAudit = await models.sequelize.outboundEmailAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objOutboundEmailAudit) {
    				objOutboundEmailAudit = await models.sequelize.outboundEmailAudit.update(updateOutboundEmailAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objOutboundEmailAudit = await models.mongoose.outboundEmailAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateOutboundEmailAudit}, {new: true});
    		}
    		return objOutboundEmailAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOutboundEmailAuditByAfterValueString(afterValueString, updateOutboundEmailAudit) {
    	try {
    		let objOutboundEmailAudit;
    		if(sql) {
    			objOutboundEmailAudit = await models.sequelize.outboundEmailAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objOutboundEmailAudit) {
    				objOutboundEmailAudit = await models.sequelize.outboundEmailAudit.update(updateOutboundEmailAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objOutboundEmailAudit = await models.mongoose.outboundEmailAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateOutboundEmailAudit}, {new: true});
    		}
    		return objOutboundEmailAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOutboundEmailAuditByBeforeValueText(beforeValueText, updateOutboundEmailAudit) {
    	try {
    		let objOutboundEmailAudit;
    		if(sql) {
    			objOutboundEmailAudit = await models.sequelize.outboundEmailAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objOutboundEmailAudit) {
    				objOutboundEmailAudit = await models.sequelize.outboundEmailAudit.update(updateOutboundEmailAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objOutboundEmailAudit = await models.mongoose.outboundEmailAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateOutboundEmailAudit}, {new: true});
    		}
    		return objOutboundEmailAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOutboundEmailAuditByAfterValueText(afterValueText, updateOutboundEmailAudit) {
    	try {
    		let objOutboundEmailAudit;
    		if(sql) {
    			objOutboundEmailAudit = await models.sequelize.outboundEmailAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objOutboundEmailAudit) {
    				objOutboundEmailAudit = await models.sequelize.outboundEmailAudit.update(updateOutboundEmailAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objOutboundEmailAudit = await models.mongoose.outboundEmailAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateOutboundEmailAudit}, {new: true});
    		}
    		return objOutboundEmailAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOutboundEmailAuditByDateCreated(dateCreated, updateOutboundEmailAudit) {
    	try {
    		let objOutboundEmailAudit;
    		if(sql) {
    			objOutboundEmailAudit = await models.sequelize.outboundEmailAudit.findOne({where: { date_created: dateCreated }});
    			if (objOutboundEmailAudit) {
    				objOutboundEmailAudit = await models.sequelize.outboundEmailAudit.update(updateOutboundEmailAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objOutboundEmailAudit = await models.mongoose.outboundEmailAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateOutboundEmailAudit}, {new: true});
    		}
    		return objOutboundEmailAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOutboundEmailAuditByParentId(parentId, updateOutboundEmailAudit) {
    	try {
    		let objOutboundEmailAudit;
    		if(sql) {
    			objOutboundEmailAudit = await models.sequelize.outboundEmailAudit.findOne({where: { parent_id: parentId }});
    			if (objOutboundEmailAudit) {
    				objOutboundEmailAudit = await models.sequelize.outboundEmailAudit.update(updateOutboundEmailAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objOutboundEmailAudit = await models.mongoose.outboundEmailAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateOutboundEmailAudit}, {new: true});
    		}
    		return objOutboundEmailAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = OutboundEmailAuditService;
//</es-section>
