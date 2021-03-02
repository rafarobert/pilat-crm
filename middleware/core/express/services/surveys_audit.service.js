/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:36 GMT-0400 (Bolivia Time)
 * Time: 14:1:36
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:36 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:36
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

class SurveyAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllSurveysAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.surveysAudit.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.surveysAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllSurveysAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.surveysAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.surveysAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addSurveyAudit(newSurveyAudit) {
		try {
			let objSurveyAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.surveysAudit.primaryKeys.id.type.toString())) {
			    newSurveyAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objSurveyAudit = await models.sequelize.surveysAudit.create(newSurveyAudit);
			} else {
				objSurveyAudit = new models.mongoose.surveysAudit(newSurveyAudit);
				await objSurveyAudit.save();
			}
			return objSurveyAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateSurveyAudit(id, updateSurveyAudit) {
		try {
			let objSurveyAudit;
			if(sql) {
				objSurveyAudit = await models.sequelize.surveysAudit.findOne({where: { id: util.Char(id) }});
				if (objSurveyAudit) {
					await models.sequelize.surveysAudit.update(updateSurveyAudit, { where: { id: util.Char(id) } });
					objSurveyAudit = await models.sequelize.surveysAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateSurveyAudit._id;
				objSurveyAudit = await models.mongoose.surveysAudit.findOneAndUpdate({id:id}, {$set: updateSurveyAudit}, {new: true});
			}
			return objSurveyAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getASurveyAudit(id, query) {
		try {
			let objSurveyAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objSurveyAudit = await models.sequelize.surveysAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objSurveyAudit = await models.mongoose.surveysAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objSurveyAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteSurveyAudit(id) {
		try {
			let objSurveyAudit;
			if(sql) {
				objSurveyAudit = await models.sequelize.surveysAudit.findOne({ where: { id: util.Char(id) } });
				if (objSurveyAudit) {
					await models.sequelize.surveysAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objSurveyAudit = await models.mongoose.surveysAudit.deleteOne({id:util.Char(id)});
			}
			return objSurveyAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objSurveyAudit;
    		if(sql) {
    			objSurveyAudit = await models.sequelize.surveysAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objSurveyAudit = await models.mongoose.surveysAudit.findOne({id: id});
    		}
    		return objSurveyAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objSurveyAudit;
    		if(sql) {
    			objSurveyAudit = await models.sequelize.surveysAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objSurveyAudit = await models.mongoose.surveysAudit.findOne({created_by: createdBy});
    		}
    		return objSurveyAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objSurveyAudit;
    		if(sql) {
    			objSurveyAudit = await models.sequelize.surveysAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objSurveyAudit = await models.mongoose.surveysAudit.findOne({field_name: fieldName});
    		}
    		return objSurveyAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objSurveyAudit;
    		if(sql) {
    			objSurveyAudit = await models.sequelize.surveysAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objSurveyAudit = await models.mongoose.surveysAudit.findOne({data_type: dataType});
    		}
    		return objSurveyAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objSurveyAudit;
    		if(sql) {
    			objSurveyAudit = await models.sequelize.surveysAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objSurveyAudit = await models.mongoose.surveysAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objSurveyAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objSurveyAudit;
    		if(sql) {
    			objSurveyAudit = await models.sequelize.surveysAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objSurveyAudit = await models.mongoose.surveysAudit.findOne({after_value_string: afterValueString});
    		}
    		return objSurveyAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objSurveyAudit;
    		if(sql) {
    			objSurveyAudit = await models.sequelize.surveysAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objSurveyAudit = await models.mongoose.surveysAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objSurveyAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objSurveyAudit;
    		if(sql) {
    			objSurveyAudit = await models.sequelize.surveysAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objSurveyAudit = await models.mongoose.surveysAudit.findOne({after_value_text: afterValueText});
    		}
    		return objSurveyAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objSurveyAudit;
    		if(sql) {
    			objSurveyAudit = await models.sequelize.surveysAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objSurveyAudit = await models.mongoose.surveysAudit.findOne({date_created: dateCreated});
    		}
    		return objSurveyAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objSurveyAudit;
    		if(sql) {
    			objSurveyAudit = await models.sequelize.surveysAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objSurveyAudit = await models.mongoose.surveysAudit.findOne({parent_id: parentId});
    		}
    		return objSurveyAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateSurveyAuditById(id, updateSurveyAudit) {
    	try {
    		let objSurveyAudit;
    		if(sql) {
    			objSurveyAudit = await models.sequelize.surveysAudit.findOne({where: { id: id }});
    			if (objSurveyAudit) {
    				objSurveyAudit = await models.sequelize.surveysAudit.update(updateSurveyAudit, { where: { id: id } });
    			}
    		} else {
    			objSurveyAudit = await models.mongoose.surveysAudit.findOneAndUpdate({id: id}, {$set: updateSurveyAudit}, {new: true});
    		}
    		return objSurveyAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyAuditByCreatedBy(createdBy, updateSurveyAudit) {
    	try {
    		let objSurveyAudit;
    		if(sql) {
    			objSurveyAudit = await models.sequelize.surveysAudit.findOne({where: { created_by: createdBy }});
    			if (objSurveyAudit) {
    				objSurveyAudit = await models.sequelize.surveysAudit.update(updateSurveyAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objSurveyAudit = await models.mongoose.surveysAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateSurveyAudit}, {new: true});
    		}
    		return objSurveyAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyAuditByFieldName(fieldName, updateSurveyAudit) {
    	try {
    		let objSurveyAudit;
    		if(sql) {
    			objSurveyAudit = await models.sequelize.surveysAudit.findOne({where: { field_name: fieldName }});
    			if (objSurveyAudit) {
    				objSurveyAudit = await models.sequelize.surveysAudit.update(updateSurveyAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objSurveyAudit = await models.mongoose.surveysAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateSurveyAudit}, {new: true});
    		}
    		return objSurveyAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyAuditByDataType(dataType, updateSurveyAudit) {
    	try {
    		let objSurveyAudit;
    		if(sql) {
    			objSurveyAudit = await models.sequelize.surveysAudit.findOne({where: { data_type: dataType }});
    			if (objSurveyAudit) {
    				objSurveyAudit = await models.sequelize.surveysAudit.update(updateSurveyAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objSurveyAudit = await models.mongoose.surveysAudit.findOneAndUpdate({data_type: dataType}, {$set: updateSurveyAudit}, {new: true});
    		}
    		return objSurveyAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyAuditByBeforeValueString(beforeValueString, updateSurveyAudit) {
    	try {
    		let objSurveyAudit;
    		if(sql) {
    			objSurveyAudit = await models.sequelize.surveysAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objSurveyAudit) {
    				objSurveyAudit = await models.sequelize.surveysAudit.update(updateSurveyAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objSurveyAudit = await models.mongoose.surveysAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateSurveyAudit}, {new: true});
    		}
    		return objSurveyAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyAuditByAfterValueString(afterValueString, updateSurveyAudit) {
    	try {
    		let objSurveyAudit;
    		if(sql) {
    			objSurveyAudit = await models.sequelize.surveysAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objSurveyAudit) {
    				objSurveyAudit = await models.sequelize.surveysAudit.update(updateSurveyAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objSurveyAudit = await models.mongoose.surveysAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateSurveyAudit}, {new: true});
    		}
    		return objSurveyAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyAuditByBeforeValueText(beforeValueText, updateSurveyAudit) {
    	try {
    		let objSurveyAudit;
    		if(sql) {
    			objSurveyAudit = await models.sequelize.surveysAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objSurveyAudit) {
    				objSurveyAudit = await models.sequelize.surveysAudit.update(updateSurveyAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objSurveyAudit = await models.mongoose.surveysAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateSurveyAudit}, {new: true});
    		}
    		return objSurveyAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyAuditByAfterValueText(afterValueText, updateSurveyAudit) {
    	try {
    		let objSurveyAudit;
    		if(sql) {
    			objSurveyAudit = await models.sequelize.surveysAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objSurveyAudit) {
    				objSurveyAudit = await models.sequelize.surveysAudit.update(updateSurveyAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objSurveyAudit = await models.mongoose.surveysAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateSurveyAudit}, {new: true});
    		}
    		return objSurveyAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyAuditByDateCreated(dateCreated, updateSurveyAudit) {
    	try {
    		let objSurveyAudit;
    		if(sql) {
    			objSurveyAudit = await models.sequelize.surveysAudit.findOne({where: { date_created: dateCreated }});
    			if (objSurveyAudit) {
    				objSurveyAudit = await models.sequelize.surveysAudit.update(updateSurveyAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objSurveyAudit = await models.mongoose.surveysAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateSurveyAudit}, {new: true});
    		}
    		return objSurveyAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyAuditByParentId(parentId, updateSurveyAudit) {
    	try {
    		let objSurveyAudit;
    		if(sql) {
    			objSurveyAudit = await models.sequelize.surveysAudit.findOne({where: { parent_id: parentId }});
    			if (objSurveyAudit) {
    				objSurveyAudit = await models.sequelize.surveysAudit.update(updateSurveyAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objSurveyAudit = await models.mongoose.surveysAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateSurveyAudit}, {new: true});
    		}
    		return objSurveyAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = SurveyAuditService;
//</es-section>
