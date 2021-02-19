/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:37:12 GMT-0400 (Bolivia Time)
 * Time: 18:37:12
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:37:12 GMT-0400 (Bolivia Time)
 * Last time updated: 18:37:12
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

class ErpClienteAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllErpClienteAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.erpClienteAudit.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.erpClienteAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllErpClienteAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.erpClienteAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.erpClienteAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addErpClienteAudit(newErpClienteAudit) {
		try {
			let objErpClienteAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.erpClienteAudit.primaryKeys.id.type.toString())) {
			    newErpClienteAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objErpClienteAudit = await models.sequelize.erpClienteAudit.create(newErpClienteAudit);
			} else {
				objErpClienteAudit = new models.mongoose.erpClienteAudit(newErpClienteAudit);
				await objErpClienteAudit.save();
			}
			return objErpClienteAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateErpClienteAudit(id, updateErpClienteAudit) {
		try {
			let objErpClienteAudit;
			if(sql) {
				objErpClienteAudit = await models.sequelize.erpClienteAudit.findOne({where: { id: util.Char(id) }});
				if (objErpClienteAudit) {
					await models.sequelize.erpClienteAudit.update(updateErpClienteAudit, { where: { id: util.Char(id) } });
					objErpClienteAudit = await models.sequelize.erpClienteAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateErpClienteAudit._id;
				objErpClienteAudit = await models.mongoose.erpClienteAudit.findOneAndUpdate({id:id}, {$set: updateErpClienteAudit}, {new: true});
			}
			return objErpClienteAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getAErpClienteAudit(id, query) {
		try {
			let objErpClienteAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objErpClienteAudit = await models.sequelize.erpClienteAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objErpClienteAudit = await models.mongoose.erpClienteAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objErpClienteAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteErpClienteAudit(id) {
		try {
			let objErpClienteAudit;
			if(sql) {
				objErpClienteAudit = await models.sequelize.erpClienteAudit.findOne({ where: { id: util.Char(id) } });
				if (objErpClienteAudit) {
					await models.sequelize.erpClienteAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objErpClienteAudit = await models.mongoose.erpClienteAudit.deleteOne({id:util.Char(id)});
			}
			return objErpClienteAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objErpClienteAudit;
    		if(sql) {
    			objErpClienteAudit = await models.sequelize.erpClienteAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objErpClienteAudit = await models.mongoose.erpClienteAudit.findOne({id: id});
    		}
    		return objErpClienteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objErpClienteAudit;
    		if(sql) {
    			objErpClienteAudit = await models.sequelize.erpClienteAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objErpClienteAudit = await models.mongoose.erpClienteAudit.findOne({created_by: createdBy});
    		}
    		return objErpClienteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objErpClienteAudit;
    		if(sql) {
    			objErpClienteAudit = await models.sequelize.erpClienteAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objErpClienteAudit = await models.mongoose.erpClienteAudit.findOne({field_name: fieldName});
    		}
    		return objErpClienteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objErpClienteAudit;
    		if(sql) {
    			objErpClienteAudit = await models.sequelize.erpClienteAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objErpClienteAudit = await models.mongoose.erpClienteAudit.findOne({data_type: dataType});
    		}
    		return objErpClienteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objErpClienteAudit;
    		if(sql) {
    			objErpClienteAudit = await models.sequelize.erpClienteAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objErpClienteAudit = await models.mongoose.erpClienteAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objErpClienteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objErpClienteAudit;
    		if(sql) {
    			objErpClienteAudit = await models.sequelize.erpClienteAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objErpClienteAudit = await models.mongoose.erpClienteAudit.findOne({after_value_string: afterValueString});
    		}
    		return objErpClienteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objErpClienteAudit;
    		if(sql) {
    			objErpClienteAudit = await models.sequelize.erpClienteAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objErpClienteAudit = await models.mongoose.erpClienteAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objErpClienteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objErpClienteAudit;
    		if(sql) {
    			objErpClienteAudit = await models.sequelize.erpClienteAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objErpClienteAudit = await models.mongoose.erpClienteAudit.findOne({after_value_text: afterValueText});
    		}
    		return objErpClienteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objErpClienteAudit;
    		if(sql) {
    			objErpClienteAudit = await models.sequelize.erpClienteAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objErpClienteAudit = await models.mongoose.erpClienteAudit.findOne({date_created: dateCreated});
    		}
    		return objErpClienteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objErpClienteAudit;
    		if(sql) {
    			objErpClienteAudit = await models.sequelize.erpClienteAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objErpClienteAudit = await models.mongoose.erpClienteAudit.findOne({parent_id: parentId});
    		}
    		return objErpClienteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateErpClienteAuditById(id, updateErpClienteAudit) {
    	try {
    		let objErpClienteAudit;
    		if(sql) {
    			objErpClienteAudit = await models.sequelize.erpClienteAudit.findOne({where: { id: id }});
    			if (objErpClienteAudit) {
    				objErpClienteAudit = await models.sequelize.erpClienteAudit.update(updateErpClienteAudit, { where: { id: id } });
    			}
    		} else {
    			objErpClienteAudit = await models.mongoose.erpClienteAudit.findOneAndUpdate({id: id}, {$set: updateErpClienteAudit}, {new: true});
    		}
    		return objErpClienteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateErpClienteAuditByCreatedBy(createdBy, updateErpClienteAudit) {
    	try {
    		let objErpClienteAudit;
    		if(sql) {
    			objErpClienteAudit = await models.sequelize.erpClienteAudit.findOne({where: { created_by: createdBy }});
    			if (objErpClienteAudit) {
    				objErpClienteAudit = await models.sequelize.erpClienteAudit.update(updateErpClienteAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objErpClienteAudit = await models.mongoose.erpClienteAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateErpClienteAudit}, {new: true});
    		}
    		return objErpClienteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateErpClienteAuditByFieldName(fieldName, updateErpClienteAudit) {
    	try {
    		let objErpClienteAudit;
    		if(sql) {
    			objErpClienteAudit = await models.sequelize.erpClienteAudit.findOne({where: { field_name: fieldName }});
    			if (objErpClienteAudit) {
    				objErpClienteAudit = await models.sequelize.erpClienteAudit.update(updateErpClienteAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objErpClienteAudit = await models.mongoose.erpClienteAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateErpClienteAudit}, {new: true});
    		}
    		return objErpClienteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateErpClienteAuditByDataType(dataType, updateErpClienteAudit) {
    	try {
    		let objErpClienteAudit;
    		if(sql) {
    			objErpClienteAudit = await models.sequelize.erpClienteAudit.findOne({where: { data_type: dataType }});
    			if (objErpClienteAudit) {
    				objErpClienteAudit = await models.sequelize.erpClienteAudit.update(updateErpClienteAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objErpClienteAudit = await models.mongoose.erpClienteAudit.findOneAndUpdate({data_type: dataType}, {$set: updateErpClienteAudit}, {new: true});
    		}
    		return objErpClienteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateErpClienteAuditByBeforeValueString(beforeValueString, updateErpClienteAudit) {
    	try {
    		let objErpClienteAudit;
    		if(sql) {
    			objErpClienteAudit = await models.sequelize.erpClienteAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objErpClienteAudit) {
    				objErpClienteAudit = await models.sequelize.erpClienteAudit.update(updateErpClienteAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objErpClienteAudit = await models.mongoose.erpClienteAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateErpClienteAudit}, {new: true});
    		}
    		return objErpClienteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateErpClienteAuditByAfterValueString(afterValueString, updateErpClienteAudit) {
    	try {
    		let objErpClienteAudit;
    		if(sql) {
    			objErpClienteAudit = await models.sequelize.erpClienteAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objErpClienteAudit) {
    				objErpClienteAudit = await models.sequelize.erpClienteAudit.update(updateErpClienteAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objErpClienteAudit = await models.mongoose.erpClienteAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateErpClienteAudit}, {new: true});
    		}
    		return objErpClienteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateErpClienteAuditByBeforeValueText(beforeValueText, updateErpClienteAudit) {
    	try {
    		let objErpClienteAudit;
    		if(sql) {
    			objErpClienteAudit = await models.sequelize.erpClienteAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objErpClienteAudit) {
    				objErpClienteAudit = await models.sequelize.erpClienteAudit.update(updateErpClienteAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objErpClienteAudit = await models.mongoose.erpClienteAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateErpClienteAudit}, {new: true});
    		}
    		return objErpClienteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateErpClienteAuditByAfterValueText(afterValueText, updateErpClienteAudit) {
    	try {
    		let objErpClienteAudit;
    		if(sql) {
    			objErpClienteAudit = await models.sequelize.erpClienteAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objErpClienteAudit) {
    				objErpClienteAudit = await models.sequelize.erpClienteAudit.update(updateErpClienteAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objErpClienteAudit = await models.mongoose.erpClienteAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateErpClienteAudit}, {new: true});
    		}
    		return objErpClienteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateErpClienteAuditByDateCreated(dateCreated, updateErpClienteAudit) {
    	try {
    		let objErpClienteAudit;
    		if(sql) {
    			objErpClienteAudit = await models.sequelize.erpClienteAudit.findOne({where: { date_created: dateCreated }});
    			if (objErpClienteAudit) {
    				objErpClienteAudit = await models.sequelize.erpClienteAudit.update(updateErpClienteAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objErpClienteAudit = await models.mongoose.erpClienteAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateErpClienteAudit}, {new: true});
    		}
    		return objErpClienteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateErpClienteAuditByParentId(parentId, updateErpClienteAudit) {
    	try {
    		let objErpClienteAudit;
    		if(sql) {
    			objErpClienteAudit = await models.sequelize.erpClienteAudit.findOne({where: { parent_id: parentId }});
    			if (objErpClienteAudit) {
    				objErpClienteAudit = await models.sequelize.erpClienteAudit.update(updateErpClienteAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objErpClienteAudit = await models.mongoose.erpClienteAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateErpClienteAudit}, {new: true});
    		}
    		return objErpClienteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = ErpClienteAuditService;
//</es-section>
