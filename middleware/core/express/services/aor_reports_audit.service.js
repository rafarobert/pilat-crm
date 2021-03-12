/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:06 GMT-0400 (Bolivia Time)
 * Time: 14:56:6
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:06 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:6
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

class AorReportAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAorReportsAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aorReportsAudit.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aorReportsAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAorReportsAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aorReportsAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aorReportsAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAorReportAudit(newAorReportAudit) {
		try {
			let objAorReportAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aorReportsAudit.primaryKeys.id.type.toString())) {
			    newAorReportAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAorReportAudit = await models.sequelize.aorReportsAudit.create(newAorReportAudit);
			} else {
				objAorReportAudit = new models.mongoose.aorReportsAudit(newAorReportAudit);
				await objAorReportAudit.save();
			}
			return objAorReportAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateAorReportAudit(id, updateAorReportAudit) {
		try {
			let objAorReportAudit;
			if(sql) {
				objAorReportAudit = await models.sequelize.aorReportsAudit.findOne({where: { id: util.Char(id) }});
				if (objAorReportAudit) {
					await models.sequelize.aorReportsAudit.update(updateAorReportAudit, { where: { id: util.Char(id) } });
					objAorReportAudit = await models.sequelize.aorReportsAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAorReportAudit._id;
				objAorReportAudit = await models.mongoose.aorReportsAudit.findOneAndUpdate({id:id}, {$set: updateAorReportAudit}, {new: true});
			}
			return objAorReportAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getAAorReportAudit(id, query) {
		try {
			let objAorReportAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAorReportAudit = await models.sequelize.aorReportsAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAorReportAudit = await models.mongoose.aorReportsAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objAorReportAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAorReportAudit(id) {
		try {
			let objAorReportAudit;
			if(sql) {
				objAorReportAudit = await models.sequelize.aorReportsAudit.findOne({ where: { id: util.Char(id) } });
				if (objAorReportAudit) {
					await models.sequelize.aorReportsAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAorReportAudit = await models.mongoose.aorReportsAudit.deleteOne({id:util.Char(id)});
			}
			return objAorReportAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAorReportAudit;
    		if(sql) {
    			objAorReportAudit = await models.sequelize.aorReportsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAorReportAudit = await models.mongoose.aorReportsAudit.findOne({id: id});
    		}
    		return objAorReportAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAorReportAudit;
    		if(sql) {
    			objAorReportAudit = await models.sequelize.aorReportsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAorReportAudit = await models.mongoose.aorReportsAudit.findOne({created_by: createdBy});
    		}
    		return objAorReportAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objAorReportAudit;
    		if(sql) {
    			objAorReportAudit = await models.sequelize.aorReportsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objAorReportAudit = await models.mongoose.aorReportsAudit.findOne({field_name: fieldName});
    		}
    		return objAorReportAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objAorReportAudit;
    		if(sql) {
    			objAorReportAudit = await models.sequelize.aorReportsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objAorReportAudit = await models.mongoose.aorReportsAudit.findOne({data_type: dataType});
    		}
    		return objAorReportAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objAorReportAudit;
    		if(sql) {
    			objAorReportAudit = await models.sequelize.aorReportsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objAorReportAudit = await models.mongoose.aorReportsAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objAorReportAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objAorReportAudit;
    		if(sql) {
    			objAorReportAudit = await models.sequelize.aorReportsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objAorReportAudit = await models.mongoose.aorReportsAudit.findOne({after_value_string: afterValueString});
    		}
    		return objAorReportAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objAorReportAudit;
    		if(sql) {
    			objAorReportAudit = await models.sequelize.aorReportsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objAorReportAudit = await models.mongoose.aorReportsAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objAorReportAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objAorReportAudit;
    		if(sql) {
    			objAorReportAudit = await models.sequelize.aorReportsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objAorReportAudit = await models.mongoose.aorReportsAudit.findOne({after_value_text: afterValueText});
    		}
    		return objAorReportAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objAorReportAudit;
    		if(sql) {
    			objAorReportAudit = await models.sequelize.aorReportsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objAorReportAudit = await models.mongoose.aorReportsAudit.findOne({date_created: dateCreated});
    		}
    		return objAorReportAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objAorReportAudit;
    		if(sql) {
    			objAorReportAudit = await models.sequelize.aorReportsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objAorReportAudit = await models.mongoose.aorReportsAudit.findOne({parent_id: parentId});
    		}
    		return objAorReportAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAorReportAuditById(id, updateAorReportAudit) {
    	try {
    		let objAorReportAudit;
    		if(sql) {
    			objAorReportAudit = await models.sequelize.aorReportsAudit.findOne({where: { id: id }});
    			if (objAorReportAudit) {
    				objAorReportAudit = await models.sequelize.aorReportsAudit.update(updateAorReportAudit, { where: { id: id } });
    			}
    		} else {
    			objAorReportAudit = await models.mongoose.aorReportsAudit.findOneAndUpdate({id: id}, {$set: updateAorReportAudit}, {new: true});
    		}
    		return objAorReportAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorReportAuditByCreatedBy(createdBy, updateAorReportAudit) {
    	try {
    		let objAorReportAudit;
    		if(sql) {
    			objAorReportAudit = await models.sequelize.aorReportsAudit.findOne({where: { created_by: createdBy }});
    			if (objAorReportAudit) {
    				objAorReportAudit = await models.sequelize.aorReportsAudit.update(updateAorReportAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAorReportAudit = await models.mongoose.aorReportsAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateAorReportAudit}, {new: true});
    		}
    		return objAorReportAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorReportAuditByFieldName(fieldName, updateAorReportAudit) {
    	try {
    		let objAorReportAudit;
    		if(sql) {
    			objAorReportAudit = await models.sequelize.aorReportsAudit.findOne({where: { field_name: fieldName }});
    			if (objAorReportAudit) {
    				objAorReportAudit = await models.sequelize.aorReportsAudit.update(updateAorReportAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objAorReportAudit = await models.mongoose.aorReportsAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateAorReportAudit}, {new: true});
    		}
    		return objAorReportAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorReportAuditByDataType(dataType, updateAorReportAudit) {
    	try {
    		let objAorReportAudit;
    		if(sql) {
    			objAorReportAudit = await models.sequelize.aorReportsAudit.findOne({where: { data_type: dataType }});
    			if (objAorReportAudit) {
    				objAorReportAudit = await models.sequelize.aorReportsAudit.update(updateAorReportAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objAorReportAudit = await models.mongoose.aorReportsAudit.findOneAndUpdate({data_type: dataType}, {$set: updateAorReportAudit}, {new: true});
    		}
    		return objAorReportAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorReportAuditByBeforeValueString(beforeValueString, updateAorReportAudit) {
    	try {
    		let objAorReportAudit;
    		if(sql) {
    			objAorReportAudit = await models.sequelize.aorReportsAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objAorReportAudit) {
    				objAorReportAudit = await models.sequelize.aorReportsAudit.update(updateAorReportAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objAorReportAudit = await models.mongoose.aorReportsAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateAorReportAudit}, {new: true});
    		}
    		return objAorReportAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorReportAuditByAfterValueString(afterValueString, updateAorReportAudit) {
    	try {
    		let objAorReportAudit;
    		if(sql) {
    			objAorReportAudit = await models.sequelize.aorReportsAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objAorReportAudit) {
    				objAorReportAudit = await models.sequelize.aorReportsAudit.update(updateAorReportAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objAorReportAudit = await models.mongoose.aorReportsAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateAorReportAudit}, {new: true});
    		}
    		return objAorReportAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorReportAuditByBeforeValueText(beforeValueText, updateAorReportAudit) {
    	try {
    		let objAorReportAudit;
    		if(sql) {
    			objAorReportAudit = await models.sequelize.aorReportsAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objAorReportAudit) {
    				objAorReportAudit = await models.sequelize.aorReportsAudit.update(updateAorReportAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objAorReportAudit = await models.mongoose.aorReportsAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateAorReportAudit}, {new: true});
    		}
    		return objAorReportAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorReportAuditByAfterValueText(afterValueText, updateAorReportAudit) {
    	try {
    		let objAorReportAudit;
    		if(sql) {
    			objAorReportAudit = await models.sequelize.aorReportsAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objAorReportAudit) {
    				objAorReportAudit = await models.sequelize.aorReportsAudit.update(updateAorReportAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objAorReportAudit = await models.mongoose.aorReportsAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateAorReportAudit}, {new: true});
    		}
    		return objAorReportAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorReportAuditByDateCreated(dateCreated, updateAorReportAudit) {
    	try {
    		let objAorReportAudit;
    		if(sql) {
    			objAorReportAudit = await models.sequelize.aorReportsAudit.findOne({where: { date_created: dateCreated }});
    			if (objAorReportAudit) {
    				objAorReportAudit = await models.sequelize.aorReportsAudit.update(updateAorReportAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objAorReportAudit = await models.mongoose.aorReportsAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateAorReportAudit}, {new: true});
    		}
    		return objAorReportAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorReportAuditByParentId(parentId, updateAorReportAudit) {
    	try {
    		let objAorReportAudit;
    		if(sql) {
    			objAorReportAudit = await models.sequelize.aorReportsAudit.findOne({where: { parent_id: parentId }});
    			if (objAorReportAudit) {
    				objAorReportAudit = await models.sequelize.aorReportsAudit.update(updateAorReportAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objAorReportAudit = await models.mongoose.aorReportsAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateAorReportAudit}, {new: true});
    		}
    		return objAorReportAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AorReportAuditService;
//</es-section>
