/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:51 GMT-0400 (Bolivia Time)
 * Time: 0:23:51
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:51 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:51
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

class SurveyquestionAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllSurveyquestionsAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.surveyquestionsAudit.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.surveyquestionsAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllSurveyquestionsAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.surveyquestionsAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.surveyquestionsAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addSurveyquestionAudit(newSurveyquestionAudit) {
		try {
			let objSurveyquestionAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.surveyquestionsAudit.primaryKeys.id.type.toString())) {
			    newSurveyquestionAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objSurveyquestionAudit = await models.sequelize.surveyquestionsAudit.create(newSurveyquestionAudit);
			} else {
				objSurveyquestionAudit = new models.mongoose.surveyquestionsAudit(newSurveyquestionAudit);
				await objSurveyquestionAudit.save();
			}
			return objSurveyquestionAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateSurveyquestionAudit(id, updateSurveyquestionAudit) {
		try {
			let objSurveyquestionAudit;
			if(sql) {
				objSurveyquestionAudit = await models.sequelize.surveyquestionsAudit.findOne({where: { id: util.Char(id) }});
				if (objSurveyquestionAudit) {
					await models.sequelize.surveyquestionsAudit.update(updateSurveyquestionAudit, { where: { id: util.Char(id) } });
					objSurveyquestionAudit = await models.sequelize.surveyquestionsAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateSurveyquestionAudit._id;
				objSurveyquestionAudit = await models.mongoose.surveyquestionsAudit.findOneAndUpdate({id:id}, {$set: updateSurveyquestionAudit}, {new: true});
			}
			return objSurveyquestionAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getASurveyquestionAudit(id, query) {
		try {
			let objSurveyquestionAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objSurveyquestionAudit = await models.sequelize.surveyquestionsAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objSurveyquestionAudit = await models.mongoose.surveyquestionsAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objSurveyquestionAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteSurveyquestionAudit(id) {
		try {
			let objSurveyquestionAudit;
			if(sql) {
				objSurveyquestionAudit = await models.sequelize.surveyquestionsAudit.findOne({ where: { id: util.Char(id) } });
				if (objSurveyquestionAudit) {
					await models.sequelize.surveyquestionsAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objSurveyquestionAudit = await models.mongoose.surveyquestionsAudit.deleteOne({id:util.Char(id)});
			}
			return objSurveyquestionAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objSurveyquestionAudit;
    		if(sql) {
    			objSurveyquestionAudit = await models.sequelize.surveyquestionsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objSurveyquestionAudit = await models.mongoose.surveyquestionsAudit.findOne({id: id});
    		}
    		return objSurveyquestionAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objSurveyquestionAudit;
    		if(sql) {
    			objSurveyquestionAudit = await models.sequelize.surveyquestionsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objSurveyquestionAudit = await models.mongoose.surveyquestionsAudit.findOne({created_by: createdBy});
    		}
    		return objSurveyquestionAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objSurveyquestionAudit;
    		if(sql) {
    			objSurveyquestionAudit = await models.sequelize.surveyquestionsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objSurveyquestionAudit = await models.mongoose.surveyquestionsAudit.findOne({field_name: fieldName});
    		}
    		return objSurveyquestionAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objSurveyquestionAudit;
    		if(sql) {
    			objSurveyquestionAudit = await models.sequelize.surveyquestionsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objSurveyquestionAudit = await models.mongoose.surveyquestionsAudit.findOne({data_type: dataType});
    		}
    		return objSurveyquestionAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objSurveyquestionAudit;
    		if(sql) {
    			objSurveyquestionAudit = await models.sequelize.surveyquestionsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objSurveyquestionAudit = await models.mongoose.surveyquestionsAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objSurveyquestionAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objSurveyquestionAudit;
    		if(sql) {
    			objSurveyquestionAudit = await models.sequelize.surveyquestionsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objSurveyquestionAudit = await models.mongoose.surveyquestionsAudit.findOne({after_value_string: afterValueString});
    		}
    		return objSurveyquestionAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objSurveyquestionAudit;
    		if(sql) {
    			objSurveyquestionAudit = await models.sequelize.surveyquestionsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objSurveyquestionAudit = await models.mongoose.surveyquestionsAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objSurveyquestionAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objSurveyquestionAudit;
    		if(sql) {
    			objSurveyquestionAudit = await models.sequelize.surveyquestionsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objSurveyquestionAudit = await models.mongoose.surveyquestionsAudit.findOne({after_value_text: afterValueText});
    		}
    		return objSurveyquestionAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objSurveyquestionAudit;
    		if(sql) {
    			objSurveyquestionAudit = await models.sequelize.surveyquestionsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objSurveyquestionAudit = await models.mongoose.surveyquestionsAudit.findOne({date_created: dateCreated});
    		}
    		return objSurveyquestionAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objSurveyquestionAudit;
    		if(sql) {
    			objSurveyquestionAudit = await models.sequelize.surveyquestionsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objSurveyquestionAudit = await models.mongoose.surveyquestionsAudit.findOne({parent_id: parentId});
    		}
    		return objSurveyquestionAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateSurveyquestionAuditById(id, updateSurveyquestionAudit) {
    	try {
    		let objSurveyquestionAudit;
    		if(sql) {
    			objSurveyquestionAudit = await models.sequelize.surveyquestionsAudit.findOne({where: { id: id }});
    			if (objSurveyquestionAudit) {
    				objSurveyquestionAudit = await models.sequelize.surveyquestionsAudit.update(updateSurveyquestionAudit, { where: { id: id } });
    			}
    		} else {
    			objSurveyquestionAudit = await models.mongoose.surveyquestionsAudit.findOneAndUpdate({id: id}, {$set: updateSurveyquestionAudit}, {new: true});
    		}
    		return objSurveyquestionAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionAuditByCreatedBy(createdBy, updateSurveyquestionAudit) {
    	try {
    		let objSurveyquestionAudit;
    		if(sql) {
    			objSurveyquestionAudit = await models.sequelize.surveyquestionsAudit.findOne({where: { created_by: createdBy }});
    			if (objSurveyquestionAudit) {
    				objSurveyquestionAudit = await models.sequelize.surveyquestionsAudit.update(updateSurveyquestionAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objSurveyquestionAudit = await models.mongoose.surveyquestionsAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateSurveyquestionAudit}, {new: true});
    		}
    		return objSurveyquestionAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionAuditByFieldName(fieldName, updateSurveyquestionAudit) {
    	try {
    		let objSurveyquestionAudit;
    		if(sql) {
    			objSurveyquestionAudit = await models.sequelize.surveyquestionsAudit.findOne({where: { field_name: fieldName }});
    			if (objSurveyquestionAudit) {
    				objSurveyquestionAudit = await models.sequelize.surveyquestionsAudit.update(updateSurveyquestionAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objSurveyquestionAudit = await models.mongoose.surveyquestionsAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateSurveyquestionAudit}, {new: true});
    		}
    		return objSurveyquestionAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionAuditByDataType(dataType, updateSurveyquestionAudit) {
    	try {
    		let objSurveyquestionAudit;
    		if(sql) {
    			objSurveyquestionAudit = await models.sequelize.surveyquestionsAudit.findOne({where: { data_type: dataType }});
    			if (objSurveyquestionAudit) {
    				objSurveyquestionAudit = await models.sequelize.surveyquestionsAudit.update(updateSurveyquestionAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objSurveyquestionAudit = await models.mongoose.surveyquestionsAudit.findOneAndUpdate({data_type: dataType}, {$set: updateSurveyquestionAudit}, {new: true});
    		}
    		return objSurveyquestionAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionAuditByBeforeValueString(beforeValueString, updateSurveyquestionAudit) {
    	try {
    		let objSurveyquestionAudit;
    		if(sql) {
    			objSurveyquestionAudit = await models.sequelize.surveyquestionsAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objSurveyquestionAudit) {
    				objSurveyquestionAudit = await models.sequelize.surveyquestionsAudit.update(updateSurveyquestionAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objSurveyquestionAudit = await models.mongoose.surveyquestionsAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateSurveyquestionAudit}, {new: true});
    		}
    		return objSurveyquestionAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionAuditByAfterValueString(afterValueString, updateSurveyquestionAudit) {
    	try {
    		let objSurveyquestionAudit;
    		if(sql) {
    			objSurveyquestionAudit = await models.sequelize.surveyquestionsAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objSurveyquestionAudit) {
    				objSurveyquestionAudit = await models.sequelize.surveyquestionsAudit.update(updateSurveyquestionAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objSurveyquestionAudit = await models.mongoose.surveyquestionsAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateSurveyquestionAudit}, {new: true});
    		}
    		return objSurveyquestionAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionAuditByBeforeValueText(beforeValueText, updateSurveyquestionAudit) {
    	try {
    		let objSurveyquestionAudit;
    		if(sql) {
    			objSurveyquestionAudit = await models.sequelize.surveyquestionsAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objSurveyquestionAudit) {
    				objSurveyquestionAudit = await models.sequelize.surveyquestionsAudit.update(updateSurveyquestionAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objSurveyquestionAudit = await models.mongoose.surveyquestionsAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateSurveyquestionAudit}, {new: true});
    		}
    		return objSurveyquestionAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionAuditByAfterValueText(afterValueText, updateSurveyquestionAudit) {
    	try {
    		let objSurveyquestionAudit;
    		if(sql) {
    			objSurveyquestionAudit = await models.sequelize.surveyquestionsAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objSurveyquestionAudit) {
    				objSurveyquestionAudit = await models.sequelize.surveyquestionsAudit.update(updateSurveyquestionAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objSurveyquestionAudit = await models.mongoose.surveyquestionsAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateSurveyquestionAudit}, {new: true});
    		}
    		return objSurveyquestionAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionAuditByDateCreated(dateCreated, updateSurveyquestionAudit) {
    	try {
    		let objSurveyquestionAudit;
    		if(sql) {
    			objSurveyquestionAudit = await models.sequelize.surveyquestionsAudit.findOne({where: { date_created: dateCreated }});
    			if (objSurveyquestionAudit) {
    				objSurveyquestionAudit = await models.sequelize.surveyquestionsAudit.update(updateSurveyquestionAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objSurveyquestionAudit = await models.mongoose.surveyquestionsAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateSurveyquestionAudit}, {new: true});
    		}
    		return objSurveyquestionAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionAuditByParentId(parentId, updateSurveyquestionAudit) {
    	try {
    		let objSurveyquestionAudit;
    		if(sql) {
    			objSurveyquestionAudit = await models.sequelize.surveyquestionsAudit.findOne({where: { parent_id: parentId }});
    			if (objSurveyquestionAudit) {
    				objSurveyquestionAudit = await models.sequelize.surveyquestionsAudit.update(updateSurveyquestionAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objSurveyquestionAudit = await models.mongoose.surveyquestionsAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateSurveyquestionAudit}, {new: true});
    		}
    		return objSurveyquestionAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = SurveyquestionAuditService;
//</es-section>
