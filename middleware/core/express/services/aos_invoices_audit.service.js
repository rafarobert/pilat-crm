/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:14 GMT-0400 (Bolivia Time)
 * Time: 0:22:14
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:14 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:14
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

class AoInvoiceAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAosInvoicesAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aosInvoicesAudit.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aosInvoicesAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAosInvoicesAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aosInvoicesAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aosInvoicesAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAoInvoiceAudit(newAoInvoiceAudit) {
		try {
			let objAoInvoiceAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aosInvoicesAudit.primaryKeys.id.type.toString())) {
			    newAoInvoiceAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAoInvoiceAudit = await models.sequelize.aosInvoicesAudit.create(newAoInvoiceAudit);
			} else {
				objAoInvoiceAudit = new models.mongoose.aosInvoicesAudit(newAoInvoiceAudit);
				await objAoInvoiceAudit.save();
			}
			return objAoInvoiceAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateAoInvoiceAudit(id, updateAoInvoiceAudit) {
		try {
			let objAoInvoiceAudit;
			if(sql) {
				objAoInvoiceAudit = await models.sequelize.aosInvoicesAudit.findOne({where: { id: util.Char(id) }});
				if (objAoInvoiceAudit) {
					await models.sequelize.aosInvoicesAudit.update(updateAoInvoiceAudit, { where: { id: util.Char(id) } });
					objAoInvoiceAudit = await models.sequelize.aosInvoicesAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAoInvoiceAudit._id;
				objAoInvoiceAudit = await models.mongoose.aosInvoicesAudit.findOneAndUpdate({id:id}, {$set: updateAoInvoiceAudit}, {new: true});
			}
			return objAoInvoiceAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getAAoInvoiceAudit(id, query) {
		try {
			let objAoInvoiceAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAoInvoiceAudit = await models.sequelize.aosInvoicesAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAoInvoiceAudit = await models.mongoose.aosInvoicesAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objAoInvoiceAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAoInvoiceAudit(id) {
		try {
			let objAoInvoiceAudit;
			if(sql) {
				objAoInvoiceAudit = await models.sequelize.aosInvoicesAudit.findOne({ where: { id: util.Char(id) } });
				if (objAoInvoiceAudit) {
					await models.sequelize.aosInvoicesAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAoInvoiceAudit = await models.mongoose.aosInvoicesAudit.deleteOne({id:util.Char(id)});
			}
			return objAoInvoiceAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAoInvoiceAudit;
    		if(sql) {
    			objAoInvoiceAudit = await models.sequelize.aosInvoicesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAoInvoiceAudit = await models.mongoose.aosInvoicesAudit.findOne({id: id});
    		}
    		return objAoInvoiceAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAoInvoiceAudit;
    		if(sql) {
    			objAoInvoiceAudit = await models.sequelize.aosInvoicesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAoInvoiceAudit = await models.mongoose.aosInvoicesAudit.findOne({created_by: createdBy});
    		}
    		return objAoInvoiceAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objAoInvoiceAudit;
    		if(sql) {
    			objAoInvoiceAudit = await models.sequelize.aosInvoicesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objAoInvoiceAudit = await models.mongoose.aosInvoicesAudit.findOne({field_name: fieldName});
    		}
    		return objAoInvoiceAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objAoInvoiceAudit;
    		if(sql) {
    			objAoInvoiceAudit = await models.sequelize.aosInvoicesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objAoInvoiceAudit = await models.mongoose.aosInvoicesAudit.findOne({data_type: dataType});
    		}
    		return objAoInvoiceAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objAoInvoiceAudit;
    		if(sql) {
    			objAoInvoiceAudit = await models.sequelize.aosInvoicesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objAoInvoiceAudit = await models.mongoose.aosInvoicesAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objAoInvoiceAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objAoInvoiceAudit;
    		if(sql) {
    			objAoInvoiceAudit = await models.sequelize.aosInvoicesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objAoInvoiceAudit = await models.mongoose.aosInvoicesAudit.findOne({after_value_string: afterValueString});
    		}
    		return objAoInvoiceAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objAoInvoiceAudit;
    		if(sql) {
    			objAoInvoiceAudit = await models.sequelize.aosInvoicesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objAoInvoiceAudit = await models.mongoose.aosInvoicesAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objAoInvoiceAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objAoInvoiceAudit;
    		if(sql) {
    			objAoInvoiceAudit = await models.sequelize.aosInvoicesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objAoInvoiceAudit = await models.mongoose.aosInvoicesAudit.findOne({after_value_text: afterValueText});
    		}
    		return objAoInvoiceAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objAoInvoiceAudit;
    		if(sql) {
    			objAoInvoiceAudit = await models.sequelize.aosInvoicesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objAoInvoiceAudit = await models.mongoose.aosInvoicesAudit.findOne({date_created: dateCreated});
    		}
    		return objAoInvoiceAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objAoInvoiceAudit;
    		if(sql) {
    			objAoInvoiceAudit = await models.sequelize.aosInvoicesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objAoInvoiceAudit = await models.mongoose.aosInvoicesAudit.findOne({parent_id: parentId});
    		}
    		return objAoInvoiceAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAoInvoiceAuditById(id, updateAoInvoiceAudit) {
    	try {
    		let objAoInvoiceAudit;
    		if(sql) {
    			objAoInvoiceAudit = await models.sequelize.aosInvoicesAudit.findOne({where: { id: id }});
    			if (objAoInvoiceAudit) {
    				objAoInvoiceAudit = await models.sequelize.aosInvoicesAudit.update(updateAoInvoiceAudit, { where: { id: id } });
    			}
    		} else {
    			objAoInvoiceAudit = await models.mongoose.aosInvoicesAudit.findOneAndUpdate({id: id}, {$set: updateAoInvoiceAudit}, {new: true});
    		}
    		return objAoInvoiceAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceAuditByCreatedBy(createdBy, updateAoInvoiceAudit) {
    	try {
    		let objAoInvoiceAudit;
    		if(sql) {
    			objAoInvoiceAudit = await models.sequelize.aosInvoicesAudit.findOne({where: { created_by: createdBy }});
    			if (objAoInvoiceAudit) {
    				objAoInvoiceAudit = await models.sequelize.aosInvoicesAudit.update(updateAoInvoiceAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAoInvoiceAudit = await models.mongoose.aosInvoicesAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateAoInvoiceAudit}, {new: true});
    		}
    		return objAoInvoiceAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceAuditByFieldName(fieldName, updateAoInvoiceAudit) {
    	try {
    		let objAoInvoiceAudit;
    		if(sql) {
    			objAoInvoiceAudit = await models.sequelize.aosInvoicesAudit.findOne({where: { field_name: fieldName }});
    			if (objAoInvoiceAudit) {
    				objAoInvoiceAudit = await models.sequelize.aosInvoicesAudit.update(updateAoInvoiceAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objAoInvoiceAudit = await models.mongoose.aosInvoicesAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateAoInvoiceAudit}, {new: true});
    		}
    		return objAoInvoiceAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceAuditByDataType(dataType, updateAoInvoiceAudit) {
    	try {
    		let objAoInvoiceAudit;
    		if(sql) {
    			objAoInvoiceAudit = await models.sequelize.aosInvoicesAudit.findOne({where: { data_type: dataType }});
    			if (objAoInvoiceAudit) {
    				objAoInvoiceAudit = await models.sequelize.aosInvoicesAudit.update(updateAoInvoiceAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objAoInvoiceAudit = await models.mongoose.aosInvoicesAudit.findOneAndUpdate({data_type: dataType}, {$set: updateAoInvoiceAudit}, {new: true});
    		}
    		return objAoInvoiceAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceAuditByBeforeValueString(beforeValueString, updateAoInvoiceAudit) {
    	try {
    		let objAoInvoiceAudit;
    		if(sql) {
    			objAoInvoiceAudit = await models.sequelize.aosInvoicesAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objAoInvoiceAudit) {
    				objAoInvoiceAudit = await models.sequelize.aosInvoicesAudit.update(updateAoInvoiceAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objAoInvoiceAudit = await models.mongoose.aosInvoicesAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateAoInvoiceAudit}, {new: true});
    		}
    		return objAoInvoiceAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceAuditByAfterValueString(afterValueString, updateAoInvoiceAudit) {
    	try {
    		let objAoInvoiceAudit;
    		if(sql) {
    			objAoInvoiceAudit = await models.sequelize.aosInvoicesAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objAoInvoiceAudit) {
    				objAoInvoiceAudit = await models.sequelize.aosInvoicesAudit.update(updateAoInvoiceAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objAoInvoiceAudit = await models.mongoose.aosInvoicesAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateAoInvoiceAudit}, {new: true});
    		}
    		return objAoInvoiceAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceAuditByBeforeValueText(beforeValueText, updateAoInvoiceAudit) {
    	try {
    		let objAoInvoiceAudit;
    		if(sql) {
    			objAoInvoiceAudit = await models.sequelize.aosInvoicesAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objAoInvoiceAudit) {
    				objAoInvoiceAudit = await models.sequelize.aosInvoicesAudit.update(updateAoInvoiceAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objAoInvoiceAudit = await models.mongoose.aosInvoicesAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateAoInvoiceAudit}, {new: true});
    		}
    		return objAoInvoiceAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceAuditByAfterValueText(afterValueText, updateAoInvoiceAudit) {
    	try {
    		let objAoInvoiceAudit;
    		if(sql) {
    			objAoInvoiceAudit = await models.sequelize.aosInvoicesAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objAoInvoiceAudit) {
    				objAoInvoiceAudit = await models.sequelize.aosInvoicesAudit.update(updateAoInvoiceAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objAoInvoiceAudit = await models.mongoose.aosInvoicesAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateAoInvoiceAudit}, {new: true});
    		}
    		return objAoInvoiceAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceAuditByDateCreated(dateCreated, updateAoInvoiceAudit) {
    	try {
    		let objAoInvoiceAudit;
    		if(sql) {
    			objAoInvoiceAudit = await models.sequelize.aosInvoicesAudit.findOne({where: { date_created: dateCreated }});
    			if (objAoInvoiceAudit) {
    				objAoInvoiceAudit = await models.sequelize.aosInvoicesAudit.update(updateAoInvoiceAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objAoInvoiceAudit = await models.mongoose.aosInvoicesAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateAoInvoiceAudit}, {new: true});
    		}
    		return objAoInvoiceAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoInvoiceAuditByParentId(parentId, updateAoInvoiceAudit) {
    	try {
    		let objAoInvoiceAudit;
    		if(sql) {
    			objAoInvoiceAudit = await models.sequelize.aosInvoicesAudit.findOne({where: { parent_id: parentId }});
    			if (objAoInvoiceAudit) {
    				objAoInvoiceAudit = await models.sequelize.aosInvoicesAudit.update(updateAoInvoiceAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objAoInvoiceAudit = await models.mongoose.aosInvoicesAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateAoInvoiceAudit}, {new: true});
    		}
    		return objAoInvoiceAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AoInvoiceAuditService;
//</es-section>
