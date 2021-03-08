/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:20 GMT-0400 (Bolivia Time)
 * Time: 15:35:20
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:20 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:20
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

class AoContractAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAosContractsAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aosContractsAudit.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aosContractsAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAosContractsAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aosContractsAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aosContractsAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAoContractAudit(newAoContractAudit) {
		try {
			let objAoContractAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aosContractsAudit.primaryKeys.id.type.toString())) {
			    newAoContractAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAoContractAudit = await models.sequelize.aosContractsAudit.create(newAoContractAudit);
			} else {
				objAoContractAudit = new models.mongoose.aosContractsAudit(newAoContractAudit);
				await objAoContractAudit.save();
			}
			return objAoContractAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateAoContractAudit(id, updateAoContractAudit) {
		try {
			let objAoContractAudit;
			if(sql) {
				objAoContractAudit = await models.sequelize.aosContractsAudit.findOne({where: { id: util.Char(id) }});
				if (objAoContractAudit) {
					await models.sequelize.aosContractsAudit.update(updateAoContractAudit, { where: { id: util.Char(id) } });
					objAoContractAudit = await models.sequelize.aosContractsAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAoContractAudit._id;
				objAoContractAudit = await models.mongoose.aosContractsAudit.findOneAndUpdate({id:id}, {$set: updateAoContractAudit}, {new: true});
			}
			return objAoContractAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getAAoContractAudit(id, query) {
		try {
			let objAoContractAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAoContractAudit = await models.sequelize.aosContractsAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAoContractAudit = await models.mongoose.aosContractsAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objAoContractAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAoContractAudit(id) {
		try {
			let objAoContractAudit;
			if(sql) {
				objAoContractAudit = await models.sequelize.aosContractsAudit.findOne({ where: { id: util.Char(id) } });
				if (objAoContractAudit) {
					await models.sequelize.aosContractsAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAoContractAudit = await models.mongoose.aosContractsAudit.deleteOne({id:util.Char(id)});
			}
			return objAoContractAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAoContractAudit;
    		if(sql) {
    			objAoContractAudit = await models.sequelize.aosContractsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAoContractAudit = await models.mongoose.aosContractsAudit.findOne({id: id});
    		}
    		return objAoContractAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAoContractAudit;
    		if(sql) {
    			objAoContractAudit = await models.sequelize.aosContractsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAoContractAudit = await models.mongoose.aosContractsAudit.findOne({created_by: createdBy});
    		}
    		return objAoContractAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objAoContractAudit;
    		if(sql) {
    			objAoContractAudit = await models.sequelize.aosContractsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objAoContractAudit = await models.mongoose.aosContractsAudit.findOne({field_name: fieldName});
    		}
    		return objAoContractAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objAoContractAudit;
    		if(sql) {
    			objAoContractAudit = await models.sequelize.aosContractsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objAoContractAudit = await models.mongoose.aosContractsAudit.findOne({data_type: dataType});
    		}
    		return objAoContractAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objAoContractAudit;
    		if(sql) {
    			objAoContractAudit = await models.sequelize.aosContractsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objAoContractAudit = await models.mongoose.aosContractsAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objAoContractAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objAoContractAudit;
    		if(sql) {
    			objAoContractAudit = await models.sequelize.aosContractsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objAoContractAudit = await models.mongoose.aosContractsAudit.findOne({after_value_string: afterValueString});
    		}
    		return objAoContractAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objAoContractAudit;
    		if(sql) {
    			objAoContractAudit = await models.sequelize.aosContractsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objAoContractAudit = await models.mongoose.aosContractsAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objAoContractAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objAoContractAudit;
    		if(sql) {
    			objAoContractAudit = await models.sequelize.aosContractsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objAoContractAudit = await models.mongoose.aosContractsAudit.findOne({after_value_text: afterValueText});
    		}
    		return objAoContractAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objAoContractAudit;
    		if(sql) {
    			objAoContractAudit = await models.sequelize.aosContractsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objAoContractAudit = await models.mongoose.aosContractsAudit.findOne({date_created: dateCreated});
    		}
    		return objAoContractAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objAoContractAudit;
    		if(sql) {
    			objAoContractAudit = await models.sequelize.aosContractsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objAoContractAudit = await models.mongoose.aosContractsAudit.findOne({parent_id: parentId});
    		}
    		return objAoContractAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAoContractAuditById(id, updateAoContractAudit) {
    	try {
    		let objAoContractAudit;
    		if(sql) {
    			objAoContractAudit = await models.sequelize.aosContractsAudit.findOne({where: { id: id }});
    			if (objAoContractAudit) {
    				objAoContractAudit = await models.sequelize.aosContractsAudit.update(updateAoContractAudit, { where: { id: id } });
    			}
    		} else {
    			objAoContractAudit = await models.mongoose.aosContractsAudit.findOneAndUpdate({id: id}, {$set: updateAoContractAudit}, {new: true});
    		}
    		return objAoContractAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractAuditByCreatedBy(createdBy, updateAoContractAudit) {
    	try {
    		let objAoContractAudit;
    		if(sql) {
    			objAoContractAudit = await models.sequelize.aosContractsAudit.findOne({where: { created_by: createdBy }});
    			if (objAoContractAudit) {
    				objAoContractAudit = await models.sequelize.aosContractsAudit.update(updateAoContractAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAoContractAudit = await models.mongoose.aosContractsAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateAoContractAudit}, {new: true});
    		}
    		return objAoContractAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractAuditByFieldName(fieldName, updateAoContractAudit) {
    	try {
    		let objAoContractAudit;
    		if(sql) {
    			objAoContractAudit = await models.sequelize.aosContractsAudit.findOne({where: { field_name: fieldName }});
    			if (objAoContractAudit) {
    				objAoContractAudit = await models.sequelize.aosContractsAudit.update(updateAoContractAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objAoContractAudit = await models.mongoose.aosContractsAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateAoContractAudit}, {new: true});
    		}
    		return objAoContractAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractAuditByDataType(dataType, updateAoContractAudit) {
    	try {
    		let objAoContractAudit;
    		if(sql) {
    			objAoContractAudit = await models.sequelize.aosContractsAudit.findOne({where: { data_type: dataType }});
    			if (objAoContractAudit) {
    				objAoContractAudit = await models.sequelize.aosContractsAudit.update(updateAoContractAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objAoContractAudit = await models.mongoose.aosContractsAudit.findOneAndUpdate({data_type: dataType}, {$set: updateAoContractAudit}, {new: true});
    		}
    		return objAoContractAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractAuditByBeforeValueString(beforeValueString, updateAoContractAudit) {
    	try {
    		let objAoContractAudit;
    		if(sql) {
    			objAoContractAudit = await models.sequelize.aosContractsAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objAoContractAudit) {
    				objAoContractAudit = await models.sequelize.aosContractsAudit.update(updateAoContractAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objAoContractAudit = await models.mongoose.aosContractsAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateAoContractAudit}, {new: true});
    		}
    		return objAoContractAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractAuditByAfterValueString(afterValueString, updateAoContractAudit) {
    	try {
    		let objAoContractAudit;
    		if(sql) {
    			objAoContractAudit = await models.sequelize.aosContractsAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objAoContractAudit) {
    				objAoContractAudit = await models.sequelize.aosContractsAudit.update(updateAoContractAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objAoContractAudit = await models.mongoose.aosContractsAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateAoContractAudit}, {new: true});
    		}
    		return objAoContractAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractAuditByBeforeValueText(beforeValueText, updateAoContractAudit) {
    	try {
    		let objAoContractAudit;
    		if(sql) {
    			objAoContractAudit = await models.sequelize.aosContractsAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objAoContractAudit) {
    				objAoContractAudit = await models.sequelize.aosContractsAudit.update(updateAoContractAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objAoContractAudit = await models.mongoose.aosContractsAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateAoContractAudit}, {new: true});
    		}
    		return objAoContractAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractAuditByAfterValueText(afterValueText, updateAoContractAudit) {
    	try {
    		let objAoContractAudit;
    		if(sql) {
    			objAoContractAudit = await models.sequelize.aosContractsAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objAoContractAudit) {
    				objAoContractAudit = await models.sequelize.aosContractsAudit.update(updateAoContractAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objAoContractAudit = await models.mongoose.aosContractsAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateAoContractAudit}, {new: true});
    		}
    		return objAoContractAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractAuditByDateCreated(dateCreated, updateAoContractAudit) {
    	try {
    		let objAoContractAudit;
    		if(sql) {
    			objAoContractAudit = await models.sequelize.aosContractsAudit.findOne({where: { date_created: dateCreated }});
    			if (objAoContractAudit) {
    				objAoContractAudit = await models.sequelize.aosContractsAudit.update(updateAoContractAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objAoContractAudit = await models.mongoose.aosContractsAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateAoContractAudit}, {new: true});
    		}
    		return objAoContractAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractAuditByParentId(parentId, updateAoContractAudit) {
    	try {
    		let objAoContractAudit;
    		if(sql) {
    			objAoContractAudit = await models.sequelize.aosContractsAudit.findOne({where: { parent_id: parentId }});
    			if (objAoContractAudit) {
    				objAoContractAudit = await models.sequelize.aosContractsAudit.update(updateAoContractAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objAoContractAudit = await models.mongoose.aosContractsAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateAoContractAudit}, {new: true});
    		}
    		return objAoContractAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AoContractAuditService;
//</es-section>
