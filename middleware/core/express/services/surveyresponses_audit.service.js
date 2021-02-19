/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:44:16 GMT-0400 (Bolivia Time)
 * Time: 4:44:16
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:44:16 GMT-0400 (Bolivia Time)
 * Last time updated: 4:44:16
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

class SurveyresponseAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllSurveyresponsesAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.surveyresponsesAudit.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.surveyresponsesAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllSurveyresponsesAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.surveyresponsesAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.surveyresponsesAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addSurveyresponseAudit(newSurveyresponseAudit) {
		try {
			let objSurveyresponseAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.surveyresponsesAudit.primaryKeys.id.type.toString())) {
			    newSurveyresponseAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objSurveyresponseAudit = await models.sequelize.surveyresponsesAudit.create(newSurveyresponseAudit);
			} else {
				objSurveyresponseAudit = new models.mongoose.surveyresponsesAudit(newSurveyresponseAudit);
				await objSurveyresponseAudit.save();
			}
			return objSurveyresponseAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateSurveyresponseAudit(id, updateSurveyresponseAudit) {
		try {
			let objSurveyresponseAudit;
			if(sql) {
				objSurveyresponseAudit = await models.sequelize.surveyresponsesAudit.findOne({where: { id: util.Char(id) }});
				if (objSurveyresponseAudit) {
					await models.sequelize.surveyresponsesAudit.update(updateSurveyresponseAudit, { where: { id: util.Char(id) } });
					objSurveyresponseAudit = await models.sequelize.surveyresponsesAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateSurveyresponseAudit._id;
				objSurveyresponseAudit = await models.mongoose.surveyresponsesAudit.findOneAndUpdate({id:id}, {$set: updateSurveyresponseAudit}, {new: true});
			}
			return objSurveyresponseAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getASurveyresponseAudit(id, query) {
		try {
			let objSurveyresponseAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objSurveyresponseAudit = await models.sequelize.surveyresponsesAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objSurveyresponseAudit = await models.mongoose.surveyresponsesAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objSurveyresponseAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteSurveyresponseAudit(id) {
		try {
			let objSurveyresponseAudit;
			if(sql) {
				objSurveyresponseAudit = await models.sequelize.surveyresponsesAudit.findOne({ where: { id: util.Char(id) } });
				if (objSurveyresponseAudit) {
					await models.sequelize.surveyresponsesAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objSurveyresponseAudit = await models.mongoose.surveyresponsesAudit.deleteOne({id:util.Char(id)});
			}
			return objSurveyresponseAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objSurveyresponseAudit;
    		if(sql) {
    			objSurveyresponseAudit = await models.sequelize.surveyresponsesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objSurveyresponseAudit = await models.mongoose.surveyresponsesAudit.findOne({id: id});
    		}
    		return objSurveyresponseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objSurveyresponseAudit;
    		if(sql) {
    			objSurveyresponseAudit = await models.sequelize.surveyresponsesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objSurveyresponseAudit = await models.mongoose.surveyresponsesAudit.findOne({created_by: createdBy});
    		}
    		return objSurveyresponseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objSurveyresponseAudit;
    		if(sql) {
    			objSurveyresponseAudit = await models.sequelize.surveyresponsesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objSurveyresponseAudit = await models.mongoose.surveyresponsesAudit.findOne({field_name: fieldName});
    		}
    		return objSurveyresponseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objSurveyresponseAudit;
    		if(sql) {
    			objSurveyresponseAudit = await models.sequelize.surveyresponsesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objSurveyresponseAudit = await models.mongoose.surveyresponsesAudit.findOne({data_type: dataType});
    		}
    		return objSurveyresponseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objSurveyresponseAudit;
    		if(sql) {
    			objSurveyresponseAudit = await models.sequelize.surveyresponsesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objSurveyresponseAudit = await models.mongoose.surveyresponsesAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objSurveyresponseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objSurveyresponseAudit;
    		if(sql) {
    			objSurveyresponseAudit = await models.sequelize.surveyresponsesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objSurveyresponseAudit = await models.mongoose.surveyresponsesAudit.findOne({after_value_string: afterValueString});
    		}
    		return objSurveyresponseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objSurveyresponseAudit;
    		if(sql) {
    			objSurveyresponseAudit = await models.sequelize.surveyresponsesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objSurveyresponseAudit = await models.mongoose.surveyresponsesAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objSurveyresponseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objSurveyresponseAudit;
    		if(sql) {
    			objSurveyresponseAudit = await models.sequelize.surveyresponsesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objSurveyresponseAudit = await models.mongoose.surveyresponsesAudit.findOne({after_value_text: afterValueText});
    		}
    		return objSurveyresponseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objSurveyresponseAudit;
    		if(sql) {
    			objSurveyresponseAudit = await models.sequelize.surveyresponsesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objSurveyresponseAudit = await models.mongoose.surveyresponsesAudit.findOne({date_created: dateCreated});
    		}
    		return objSurveyresponseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objSurveyresponseAudit;
    		if(sql) {
    			objSurveyresponseAudit = await models.sequelize.surveyresponsesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objSurveyresponseAudit = await models.mongoose.surveyresponsesAudit.findOne({parent_id: parentId});
    		}
    		return objSurveyresponseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateSurveyresponseAuditById(id, updateSurveyresponseAudit) {
    	try {
    		let objSurveyresponseAudit;
    		if(sql) {
    			objSurveyresponseAudit = await models.sequelize.surveyresponsesAudit.findOne({where: { id: id }});
    			if (objSurveyresponseAudit) {
    				objSurveyresponseAudit = await models.sequelize.surveyresponsesAudit.update(updateSurveyresponseAudit, { where: { id: id } });
    			}
    		} else {
    			objSurveyresponseAudit = await models.mongoose.surveyresponsesAudit.findOneAndUpdate({id: id}, {$set: updateSurveyresponseAudit}, {new: true});
    		}
    		return objSurveyresponseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyresponseAuditByCreatedBy(createdBy, updateSurveyresponseAudit) {
    	try {
    		let objSurveyresponseAudit;
    		if(sql) {
    			objSurveyresponseAudit = await models.sequelize.surveyresponsesAudit.findOne({where: { created_by: createdBy }});
    			if (objSurveyresponseAudit) {
    				objSurveyresponseAudit = await models.sequelize.surveyresponsesAudit.update(updateSurveyresponseAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objSurveyresponseAudit = await models.mongoose.surveyresponsesAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateSurveyresponseAudit}, {new: true});
    		}
    		return objSurveyresponseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyresponseAuditByFieldName(fieldName, updateSurveyresponseAudit) {
    	try {
    		let objSurveyresponseAudit;
    		if(sql) {
    			objSurveyresponseAudit = await models.sequelize.surveyresponsesAudit.findOne({where: { field_name: fieldName }});
    			if (objSurveyresponseAudit) {
    				objSurveyresponseAudit = await models.sequelize.surveyresponsesAudit.update(updateSurveyresponseAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objSurveyresponseAudit = await models.mongoose.surveyresponsesAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateSurveyresponseAudit}, {new: true});
    		}
    		return objSurveyresponseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyresponseAuditByDataType(dataType, updateSurveyresponseAudit) {
    	try {
    		let objSurveyresponseAudit;
    		if(sql) {
    			objSurveyresponseAudit = await models.sequelize.surveyresponsesAudit.findOne({where: { data_type: dataType }});
    			if (objSurveyresponseAudit) {
    				objSurveyresponseAudit = await models.sequelize.surveyresponsesAudit.update(updateSurveyresponseAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objSurveyresponseAudit = await models.mongoose.surveyresponsesAudit.findOneAndUpdate({data_type: dataType}, {$set: updateSurveyresponseAudit}, {new: true});
    		}
    		return objSurveyresponseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyresponseAuditByBeforeValueString(beforeValueString, updateSurveyresponseAudit) {
    	try {
    		let objSurveyresponseAudit;
    		if(sql) {
    			objSurveyresponseAudit = await models.sequelize.surveyresponsesAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objSurveyresponseAudit) {
    				objSurveyresponseAudit = await models.sequelize.surveyresponsesAudit.update(updateSurveyresponseAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objSurveyresponseAudit = await models.mongoose.surveyresponsesAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateSurveyresponseAudit}, {new: true});
    		}
    		return objSurveyresponseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyresponseAuditByAfterValueString(afterValueString, updateSurveyresponseAudit) {
    	try {
    		let objSurveyresponseAudit;
    		if(sql) {
    			objSurveyresponseAudit = await models.sequelize.surveyresponsesAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objSurveyresponseAudit) {
    				objSurveyresponseAudit = await models.sequelize.surveyresponsesAudit.update(updateSurveyresponseAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objSurveyresponseAudit = await models.mongoose.surveyresponsesAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateSurveyresponseAudit}, {new: true});
    		}
    		return objSurveyresponseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyresponseAuditByBeforeValueText(beforeValueText, updateSurveyresponseAudit) {
    	try {
    		let objSurveyresponseAudit;
    		if(sql) {
    			objSurveyresponseAudit = await models.sequelize.surveyresponsesAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objSurveyresponseAudit) {
    				objSurveyresponseAudit = await models.sequelize.surveyresponsesAudit.update(updateSurveyresponseAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objSurveyresponseAudit = await models.mongoose.surveyresponsesAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateSurveyresponseAudit}, {new: true});
    		}
    		return objSurveyresponseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyresponseAuditByAfterValueText(afterValueText, updateSurveyresponseAudit) {
    	try {
    		let objSurveyresponseAudit;
    		if(sql) {
    			objSurveyresponseAudit = await models.sequelize.surveyresponsesAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objSurveyresponseAudit) {
    				objSurveyresponseAudit = await models.sequelize.surveyresponsesAudit.update(updateSurveyresponseAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objSurveyresponseAudit = await models.mongoose.surveyresponsesAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateSurveyresponseAudit}, {new: true});
    		}
    		return objSurveyresponseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyresponseAuditByDateCreated(dateCreated, updateSurveyresponseAudit) {
    	try {
    		let objSurveyresponseAudit;
    		if(sql) {
    			objSurveyresponseAudit = await models.sequelize.surveyresponsesAudit.findOne({where: { date_created: dateCreated }});
    			if (objSurveyresponseAudit) {
    				objSurveyresponseAudit = await models.sequelize.surveyresponsesAudit.update(updateSurveyresponseAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objSurveyresponseAudit = await models.mongoose.surveyresponsesAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateSurveyresponseAudit}, {new: true});
    		}
    		return objSurveyresponseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyresponseAuditByParentId(parentId, updateSurveyresponseAudit) {
    	try {
    		let objSurveyresponseAudit;
    		if(sql) {
    			objSurveyresponseAudit = await models.sequelize.surveyresponsesAudit.findOne({where: { parent_id: parentId }});
    			if (objSurveyresponseAudit) {
    				objSurveyresponseAudit = await models.sequelize.surveyresponsesAudit.update(updateSurveyresponseAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objSurveyresponseAudit = await models.mongoose.surveyresponsesAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateSurveyresponseAudit}, {new: true});
    		}
    		return objSurveyresponseAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = SurveyresponseAuditService;
//</es-section>
