/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:47 GMT-0400 (Bolivia Time)
 * Time: 14:57:47
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:47 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:47
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

class SurveyquestionresponseAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllSurveyquestionresponsesAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.surveyquestionresponsesAudit.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.surveyquestionresponsesAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllSurveyquestionresponsesAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.surveyquestionresponsesAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.surveyquestionresponsesAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addSurveyquestionresponseAudit(newSurveyquestionresponseAudit) {
		try {
			let objSurveyquestionresponseAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.surveyquestionresponsesAudit.primaryKeys.id.type.toString())) {
			    newSurveyquestionresponseAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objSurveyquestionresponseAudit = await models.sequelize.surveyquestionresponsesAudit.create(newSurveyquestionresponseAudit);
			} else {
				objSurveyquestionresponseAudit = new models.mongoose.surveyquestionresponsesAudit(newSurveyquestionresponseAudit);
				await objSurveyquestionresponseAudit.save();
			}
			return objSurveyquestionresponseAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateSurveyquestionresponseAudit(id, updateSurveyquestionresponseAudit) {
		try {
			let objSurveyquestionresponseAudit;
			if(sql) {
				objSurveyquestionresponseAudit = await models.sequelize.surveyquestionresponsesAudit.findOne({where: { id: util.Char(id) }});
				if (objSurveyquestionresponseAudit) {
					await models.sequelize.surveyquestionresponsesAudit.update(updateSurveyquestionresponseAudit, { where: { id: util.Char(id) } });
					objSurveyquestionresponseAudit = await models.sequelize.surveyquestionresponsesAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateSurveyquestionresponseAudit._id;
				objSurveyquestionresponseAudit = await models.mongoose.surveyquestionresponsesAudit.findOneAndUpdate({id:id}, {$set: updateSurveyquestionresponseAudit}, {new: true});
			}
			return objSurveyquestionresponseAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getASurveyquestionresponseAudit(id, query) {
		try {
			let objSurveyquestionresponseAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objSurveyquestionresponseAudit = await models.sequelize.surveyquestionresponsesAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objSurveyquestionresponseAudit = await models.mongoose.surveyquestionresponsesAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objSurveyquestionresponseAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteSurveyquestionresponseAudit(id) {
		try {
			let objSurveyquestionresponseAudit;
			if(sql) {
				objSurveyquestionresponseAudit = await models.sequelize.surveyquestionresponsesAudit.findOne({ where: { id: util.Char(id) } });
				if (objSurveyquestionresponseAudit) {
					await models.sequelize.surveyquestionresponsesAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objSurveyquestionresponseAudit = await models.mongoose.surveyquestionresponsesAudit.deleteOne({id:util.Char(id)});
			}
			return objSurveyquestionresponseAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objSurveyquestionresponseAudit;
    		if(sql) {
    			objSurveyquestionresponseAudit = await models.sequelize.surveyquestionresponsesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objSurveyquestionresponseAudit = await models.mongoose.surveyquestionresponsesAudit.findOne({id: id});
    		}
    		return objSurveyquestionresponseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objSurveyquestionresponseAudit;
    		if(sql) {
    			objSurveyquestionresponseAudit = await models.sequelize.surveyquestionresponsesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objSurveyquestionresponseAudit = await models.mongoose.surveyquestionresponsesAudit.findOne({created_by: createdBy});
    		}
    		return objSurveyquestionresponseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objSurveyquestionresponseAudit;
    		if(sql) {
    			objSurveyquestionresponseAudit = await models.sequelize.surveyquestionresponsesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objSurveyquestionresponseAudit = await models.mongoose.surveyquestionresponsesAudit.findOne({field_name: fieldName});
    		}
    		return objSurveyquestionresponseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objSurveyquestionresponseAudit;
    		if(sql) {
    			objSurveyquestionresponseAudit = await models.sequelize.surveyquestionresponsesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objSurveyquestionresponseAudit = await models.mongoose.surveyquestionresponsesAudit.findOne({data_type: dataType});
    		}
    		return objSurveyquestionresponseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objSurveyquestionresponseAudit;
    		if(sql) {
    			objSurveyquestionresponseAudit = await models.sequelize.surveyquestionresponsesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objSurveyquestionresponseAudit = await models.mongoose.surveyquestionresponsesAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objSurveyquestionresponseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objSurveyquestionresponseAudit;
    		if(sql) {
    			objSurveyquestionresponseAudit = await models.sequelize.surveyquestionresponsesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objSurveyquestionresponseAudit = await models.mongoose.surveyquestionresponsesAudit.findOne({after_value_string: afterValueString});
    		}
    		return objSurveyquestionresponseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objSurveyquestionresponseAudit;
    		if(sql) {
    			objSurveyquestionresponseAudit = await models.sequelize.surveyquestionresponsesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objSurveyquestionresponseAudit = await models.mongoose.surveyquestionresponsesAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objSurveyquestionresponseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objSurveyquestionresponseAudit;
    		if(sql) {
    			objSurveyquestionresponseAudit = await models.sequelize.surveyquestionresponsesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objSurveyquestionresponseAudit = await models.mongoose.surveyquestionresponsesAudit.findOne({after_value_text: afterValueText});
    		}
    		return objSurveyquestionresponseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objSurveyquestionresponseAudit;
    		if(sql) {
    			objSurveyquestionresponseAudit = await models.sequelize.surveyquestionresponsesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objSurveyquestionresponseAudit = await models.mongoose.surveyquestionresponsesAudit.findOne({date_created: dateCreated});
    		}
    		return objSurveyquestionresponseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objSurveyquestionresponseAudit;
    		if(sql) {
    			objSurveyquestionresponseAudit = await models.sequelize.surveyquestionresponsesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objSurveyquestionresponseAudit = await models.mongoose.surveyquestionresponsesAudit.findOne({parent_id: parentId});
    		}
    		return objSurveyquestionresponseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateSurveyquestionresponseAuditById(id, updateSurveyquestionresponseAudit) {
    	try {
    		let objSurveyquestionresponseAudit;
    		if(sql) {
    			objSurveyquestionresponseAudit = await models.sequelize.surveyquestionresponsesAudit.findOne({where: { id: id }});
    			if (objSurveyquestionresponseAudit) {
    				objSurveyquestionresponseAudit = await models.sequelize.surveyquestionresponsesAudit.update(updateSurveyquestionresponseAudit, { where: { id: id } });
    			}
    		} else {
    			objSurveyquestionresponseAudit = await models.mongoose.surveyquestionresponsesAudit.findOneAndUpdate({id: id}, {$set: updateSurveyquestionresponseAudit}, {new: true});
    		}
    		return objSurveyquestionresponseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionresponseAuditByCreatedBy(createdBy, updateSurveyquestionresponseAudit) {
    	try {
    		let objSurveyquestionresponseAudit;
    		if(sql) {
    			objSurveyquestionresponseAudit = await models.sequelize.surveyquestionresponsesAudit.findOne({where: { created_by: createdBy }});
    			if (objSurveyquestionresponseAudit) {
    				objSurveyquestionresponseAudit = await models.sequelize.surveyquestionresponsesAudit.update(updateSurveyquestionresponseAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objSurveyquestionresponseAudit = await models.mongoose.surveyquestionresponsesAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateSurveyquestionresponseAudit}, {new: true});
    		}
    		return objSurveyquestionresponseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionresponseAuditByFieldName(fieldName, updateSurveyquestionresponseAudit) {
    	try {
    		let objSurveyquestionresponseAudit;
    		if(sql) {
    			objSurveyquestionresponseAudit = await models.sequelize.surveyquestionresponsesAudit.findOne({where: { field_name: fieldName }});
    			if (objSurveyquestionresponseAudit) {
    				objSurveyquestionresponseAudit = await models.sequelize.surveyquestionresponsesAudit.update(updateSurveyquestionresponseAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objSurveyquestionresponseAudit = await models.mongoose.surveyquestionresponsesAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateSurveyquestionresponseAudit}, {new: true});
    		}
    		return objSurveyquestionresponseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionresponseAuditByDataType(dataType, updateSurveyquestionresponseAudit) {
    	try {
    		let objSurveyquestionresponseAudit;
    		if(sql) {
    			objSurveyquestionresponseAudit = await models.sequelize.surveyquestionresponsesAudit.findOne({where: { data_type: dataType }});
    			if (objSurveyquestionresponseAudit) {
    				objSurveyquestionresponseAudit = await models.sequelize.surveyquestionresponsesAudit.update(updateSurveyquestionresponseAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objSurveyquestionresponseAudit = await models.mongoose.surveyquestionresponsesAudit.findOneAndUpdate({data_type: dataType}, {$set: updateSurveyquestionresponseAudit}, {new: true});
    		}
    		return objSurveyquestionresponseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionresponseAuditByBeforeValueString(beforeValueString, updateSurveyquestionresponseAudit) {
    	try {
    		let objSurveyquestionresponseAudit;
    		if(sql) {
    			objSurveyquestionresponseAudit = await models.sequelize.surveyquestionresponsesAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objSurveyquestionresponseAudit) {
    				objSurveyquestionresponseAudit = await models.sequelize.surveyquestionresponsesAudit.update(updateSurveyquestionresponseAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objSurveyquestionresponseAudit = await models.mongoose.surveyquestionresponsesAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateSurveyquestionresponseAudit}, {new: true});
    		}
    		return objSurveyquestionresponseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionresponseAuditByAfterValueString(afterValueString, updateSurveyquestionresponseAudit) {
    	try {
    		let objSurveyquestionresponseAudit;
    		if(sql) {
    			objSurveyquestionresponseAudit = await models.sequelize.surveyquestionresponsesAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objSurveyquestionresponseAudit) {
    				objSurveyquestionresponseAudit = await models.sequelize.surveyquestionresponsesAudit.update(updateSurveyquestionresponseAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objSurveyquestionresponseAudit = await models.mongoose.surveyquestionresponsesAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateSurveyquestionresponseAudit}, {new: true});
    		}
    		return objSurveyquestionresponseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionresponseAuditByBeforeValueText(beforeValueText, updateSurveyquestionresponseAudit) {
    	try {
    		let objSurveyquestionresponseAudit;
    		if(sql) {
    			objSurveyquestionresponseAudit = await models.sequelize.surveyquestionresponsesAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objSurveyquestionresponseAudit) {
    				objSurveyquestionresponseAudit = await models.sequelize.surveyquestionresponsesAudit.update(updateSurveyquestionresponseAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objSurveyquestionresponseAudit = await models.mongoose.surveyquestionresponsesAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateSurveyquestionresponseAudit}, {new: true});
    		}
    		return objSurveyquestionresponseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionresponseAuditByAfterValueText(afterValueText, updateSurveyquestionresponseAudit) {
    	try {
    		let objSurveyquestionresponseAudit;
    		if(sql) {
    			objSurveyquestionresponseAudit = await models.sequelize.surveyquestionresponsesAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objSurveyquestionresponseAudit) {
    				objSurveyquestionresponseAudit = await models.sequelize.surveyquestionresponsesAudit.update(updateSurveyquestionresponseAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objSurveyquestionresponseAudit = await models.mongoose.surveyquestionresponsesAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateSurveyquestionresponseAudit}, {new: true});
    		}
    		return objSurveyquestionresponseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionresponseAuditByDateCreated(dateCreated, updateSurveyquestionresponseAudit) {
    	try {
    		let objSurveyquestionresponseAudit;
    		if(sql) {
    			objSurveyquestionresponseAudit = await models.sequelize.surveyquestionresponsesAudit.findOne({where: { date_created: dateCreated }});
    			if (objSurveyquestionresponseAudit) {
    				objSurveyquestionresponseAudit = await models.sequelize.surveyquestionresponsesAudit.update(updateSurveyquestionresponseAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objSurveyquestionresponseAudit = await models.mongoose.surveyquestionresponsesAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateSurveyquestionresponseAudit}, {new: true});
    		}
    		return objSurveyquestionresponseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionresponseAuditByParentId(parentId, updateSurveyquestionresponseAudit) {
    	try {
    		let objSurveyquestionresponseAudit;
    		if(sql) {
    			objSurveyquestionresponseAudit = await models.sequelize.surveyquestionresponsesAudit.findOne({where: { parent_id: parentId }});
    			if (objSurveyquestionresponseAudit) {
    				objSurveyquestionresponseAudit = await models.sequelize.surveyquestionresponsesAudit.update(updateSurveyquestionresponseAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objSurveyquestionresponseAudit = await models.mongoose.surveyquestionresponsesAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateSurveyquestionresponseAudit}, {new: true});
    		}
    		return objSurveyquestionresponseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = SurveyquestionresponseAuditService;
//</es-section>
