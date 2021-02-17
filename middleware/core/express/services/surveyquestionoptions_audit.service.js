/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:44:12 GMT-0400 (Bolivia Time)
 * Time: 4:44:12
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:44:12 GMT-0400 (Bolivia Time)
 * Last time updated: 4:44:12
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

class SurveyquestionoptionAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllSurveyquestionoptionsAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.surveyquestionoptionsAudit.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.surveyquestionoptionsAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllSurveyquestionoptionsAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.surveyquestionoptionsAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.surveyquestionoptionsAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addSurveyquestionoptionAudit(newSurveyquestionoptionAudit) {
		try {
			let objSurveyquestionoptionAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.surveyquestionoptionsAudit.primaryKeys.id.type.toString())) {
			    newSurveyquestionoptionAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objSurveyquestionoptionAudit = await models.sequelize.surveyquestionoptionsAudit.create(newSurveyquestionoptionAudit);
			} else {
				objSurveyquestionoptionAudit = new models.mongoose.surveyquestionoptionsAudit(newSurveyquestionoptionAudit);
				await objSurveyquestionoptionAudit.save();
			}
			return objSurveyquestionoptionAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateSurveyquestionoptionAudit(id, updateSurveyquestionoptionAudit) {
		try {
			let objSurveyquestionoptionAudit;
			if(sql) {
				objSurveyquestionoptionAudit = await models.sequelize.surveyquestionoptionsAudit.findOne({where: { id: util.Char(id) }});
				if (objSurveyquestionoptionAudit) {
					await models.sequelize.surveyquestionoptionsAudit.update(updateSurveyquestionoptionAudit, { where: { id: util.Char(id) } });
					objSurveyquestionoptionAudit = await models.sequelize.surveyquestionoptionsAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateSurveyquestionoptionAudit._id;
				objSurveyquestionoptionAudit = await models.mongoose.surveyquestionoptionsAudit.findOneAndUpdate({id:id}, {$set: updateSurveyquestionoptionAudit}, {new: true});
			}
			return objSurveyquestionoptionAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getASurveyquestionoptionAudit(id, query) {
		try {
			let objSurveyquestionoptionAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objSurveyquestionoptionAudit = await models.sequelize.surveyquestionoptionsAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objSurveyquestionoptionAudit = await models.mongoose.surveyquestionoptionsAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objSurveyquestionoptionAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteSurveyquestionoptionAudit(id) {
		try {
			let objSurveyquestionoptionAudit;
			if(sql) {
				objSurveyquestionoptionAudit = await models.sequelize.surveyquestionoptionsAudit.findOne({ where: { id: util.Char(id) } });
				if (objSurveyquestionoptionAudit) {
					await models.sequelize.surveyquestionoptionsAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objSurveyquestionoptionAudit = await models.mongoose.surveyquestionoptionsAudit.deleteOne({id:util.Char(id)});
			}
			return objSurveyquestionoptionAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objSurveyquestionoptionAudit;
    		if(sql) {
    			objSurveyquestionoptionAudit = await models.sequelize.surveyquestionoptionsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objSurveyquestionoptionAudit = await models.mongoose.surveyquestionoptionsAudit.findOne({id: id});
    		}
    		return objSurveyquestionoptionAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objSurveyquestionoptionAudit;
    		if(sql) {
    			objSurveyquestionoptionAudit = await models.sequelize.surveyquestionoptionsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objSurveyquestionoptionAudit = await models.mongoose.surveyquestionoptionsAudit.findOne({created_by: createdBy});
    		}
    		return objSurveyquestionoptionAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objSurveyquestionoptionAudit;
    		if(sql) {
    			objSurveyquestionoptionAudit = await models.sequelize.surveyquestionoptionsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objSurveyquestionoptionAudit = await models.mongoose.surveyquestionoptionsAudit.findOne({field_name: fieldName});
    		}
    		return objSurveyquestionoptionAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objSurveyquestionoptionAudit;
    		if(sql) {
    			objSurveyquestionoptionAudit = await models.sequelize.surveyquestionoptionsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objSurveyquestionoptionAudit = await models.mongoose.surveyquestionoptionsAudit.findOne({data_type: dataType});
    		}
    		return objSurveyquestionoptionAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objSurveyquestionoptionAudit;
    		if(sql) {
    			objSurveyquestionoptionAudit = await models.sequelize.surveyquestionoptionsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objSurveyquestionoptionAudit = await models.mongoose.surveyquestionoptionsAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objSurveyquestionoptionAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objSurveyquestionoptionAudit;
    		if(sql) {
    			objSurveyquestionoptionAudit = await models.sequelize.surveyquestionoptionsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objSurveyquestionoptionAudit = await models.mongoose.surveyquestionoptionsAudit.findOne({after_value_string: afterValueString});
    		}
    		return objSurveyquestionoptionAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objSurveyquestionoptionAudit;
    		if(sql) {
    			objSurveyquestionoptionAudit = await models.sequelize.surveyquestionoptionsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objSurveyquestionoptionAudit = await models.mongoose.surveyquestionoptionsAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objSurveyquestionoptionAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objSurveyquestionoptionAudit;
    		if(sql) {
    			objSurveyquestionoptionAudit = await models.sequelize.surveyquestionoptionsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objSurveyquestionoptionAudit = await models.mongoose.surveyquestionoptionsAudit.findOne({after_value_text: afterValueText});
    		}
    		return objSurveyquestionoptionAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objSurveyquestionoptionAudit;
    		if(sql) {
    			objSurveyquestionoptionAudit = await models.sequelize.surveyquestionoptionsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objSurveyquestionoptionAudit = await models.mongoose.surveyquestionoptionsAudit.findOne({date_created: dateCreated});
    		}
    		return objSurveyquestionoptionAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objSurveyquestionoptionAudit;
    		if(sql) {
    			objSurveyquestionoptionAudit = await models.sequelize.surveyquestionoptionsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objSurveyquestionoptionAudit = await models.mongoose.surveyquestionoptionsAudit.findOne({parent_id: parentId});
    		}
    		return objSurveyquestionoptionAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateSurveyquestionoptionAuditById(id, updateSurveyquestionoptionAudit) {
    	try {
    		let objSurveyquestionoptionAudit;
    		if(sql) {
    			objSurveyquestionoptionAudit = await models.sequelize.surveyquestionoptionsAudit.findOne({where: { id: id }});
    			if (objSurveyquestionoptionAudit) {
    				objSurveyquestionoptionAudit = await models.sequelize.surveyquestionoptionsAudit.update(updateSurveyquestionoptionAudit, { where: { id: id } });
    			}
    		} else {
    			objSurveyquestionoptionAudit = await models.mongoose.surveyquestionoptionsAudit.findOneAndUpdate({id: id}, {$set: updateSurveyquestionoptionAudit}, {new: true});
    		}
    		return objSurveyquestionoptionAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionoptionAuditByCreatedBy(createdBy, updateSurveyquestionoptionAudit) {
    	try {
    		let objSurveyquestionoptionAudit;
    		if(sql) {
    			objSurveyquestionoptionAudit = await models.sequelize.surveyquestionoptionsAudit.findOne({where: { created_by: createdBy }});
    			if (objSurveyquestionoptionAudit) {
    				objSurveyquestionoptionAudit = await models.sequelize.surveyquestionoptionsAudit.update(updateSurveyquestionoptionAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objSurveyquestionoptionAudit = await models.mongoose.surveyquestionoptionsAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateSurveyquestionoptionAudit}, {new: true});
    		}
    		return objSurveyquestionoptionAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionoptionAuditByFieldName(fieldName, updateSurveyquestionoptionAudit) {
    	try {
    		let objSurveyquestionoptionAudit;
    		if(sql) {
    			objSurveyquestionoptionAudit = await models.sequelize.surveyquestionoptionsAudit.findOne({where: { field_name: fieldName }});
    			if (objSurveyquestionoptionAudit) {
    				objSurveyquestionoptionAudit = await models.sequelize.surveyquestionoptionsAudit.update(updateSurveyquestionoptionAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objSurveyquestionoptionAudit = await models.mongoose.surveyquestionoptionsAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateSurveyquestionoptionAudit}, {new: true});
    		}
    		return objSurveyquestionoptionAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionoptionAuditByDataType(dataType, updateSurveyquestionoptionAudit) {
    	try {
    		let objSurveyquestionoptionAudit;
    		if(sql) {
    			objSurveyquestionoptionAudit = await models.sequelize.surveyquestionoptionsAudit.findOne({where: { data_type: dataType }});
    			if (objSurveyquestionoptionAudit) {
    				objSurveyquestionoptionAudit = await models.sequelize.surveyquestionoptionsAudit.update(updateSurveyquestionoptionAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objSurveyquestionoptionAudit = await models.mongoose.surveyquestionoptionsAudit.findOneAndUpdate({data_type: dataType}, {$set: updateSurveyquestionoptionAudit}, {new: true});
    		}
    		return objSurveyquestionoptionAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionoptionAuditByBeforeValueString(beforeValueString, updateSurveyquestionoptionAudit) {
    	try {
    		let objSurveyquestionoptionAudit;
    		if(sql) {
    			objSurveyquestionoptionAudit = await models.sequelize.surveyquestionoptionsAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objSurveyquestionoptionAudit) {
    				objSurveyquestionoptionAudit = await models.sequelize.surveyquestionoptionsAudit.update(updateSurveyquestionoptionAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objSurveyquestionoptionAudit = await models.mongoose.surveyquestionoptionsAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateSurveyquestionoptionAudit}, {new: true});
    		}
    		return objSurveyquestionoptionAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionoptionAuditByAfterValueString(afterValueString, updateSurveyquestionoptionAudit) {
    	try {
    		let objSurveyquestionoptionAudit;
    		if(sql) {
    			objSurveyquestionoptionAudit = await models.sequelize.surveyquestionoptionsAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objSurveyquestionoptionAudit) {
    				objSurveyquestionoptionAudit = await models.sequelize.surveyquestionoptionsAudit.update(updateSurveyquestionoptionAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objSurveyquestionoptionAudit = await models.mongoose.surveyquestionoptionsAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateSurveyquestionoptionAudit}, {new: true});
    		}
    		return objSurveyquestionoptionAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionoptionAuditByBeforeValueText(beforeValueText, updateSurveyquestionoptionAudit) {
    	try {
    		let objSurveyquestionoptionAudit;
    		if(sql) {
    			objSurveyquestionoptionAudit = await models.sequelize.surveyquestionoptionsAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objSurveyquestionoptionAudit) {
    				objSurveyquestionoptionAudit = await models.sequelize.surveyquestionoptionsAudit.update(updateSurveyquestionoptionAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objSurveyquestionoptionAudit = await models.mongoose.surveyquestionoptionsAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateSurveyquestionoptionAudit}, {new: true});
    		}
    		return objSurveyquestionoptionAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionoptionAuditByAfterValueText(afterValueText, updateSurveyquestionoptionAudit) {
    	try {
    		let objSurveyquestionoptionAudit;
    		if(sql) {
    			objSurveyquestionoptionAudit = await models.sequelize.surveyquestionoptionsAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objSurveyquestionoptionAudit) {
    				objSurveyquestionoptionAudit = await models.sequelize.surveyquestionoptionsAudit.update(updateSurveyquestionoptionAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objSurveyquestionoptionAudit = await models.mongoose.surveyquestionoptionsAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateSurveyquestionoptionAudit}, {new: true});
    		}
    		return objSurveyquestionoptionAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionoptionAuditByDateCreated(dateCreated, updateSurveyquestionoptionAudit) {
    	try {
    		let objSurveyquestionoptionAudit;
    		if(sql) {
    			objSurveyquestionoptionAudit = await models.sequelize.surveyquestionoptionsAudit.findOne({where: { date_created: dateCreated }});
    			if (objSurveyquestionoptionAudit) {
    				objSurveyquestionoptionAudit = await models.sequelize.surveyquestionoptionsAudit.update(updateSurveyquestionoptionAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objSurveyquestionoptionAudit = await models.mongoose.surveyquestionoptionsAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateSurveyquestionoptionAudit}, {new: true});
    		}
    		return objSurveyquestionoptionAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionoptionAuditByParentId(parentId, updateSurveyquestionoptionAudit) {
    	try {
    		let objSurveyquestionoptionAudit;
    		if(sql) {
    			objSurveyquestionoptionAudit = await models.sequelize.surveyquestionoptionsAudit.findOne({where: { parent_id: parentId }});
    			if (objSurveyquestionoptionAudit) {
    				objSurveyquestionoptionAudit = await models.sequelize.surveyquestionoptionsAudit.update(updateSurveyquestionoptionAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objSurveyquestionoptionAudit = await models.mongoose.surveyquestionoptionsAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateSurveyquestionoptionAudit}, {new: true});
    		}
    		return objSurveyquestionoptionAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = SurveyquestionoptionAuditService;
//</es-section>
