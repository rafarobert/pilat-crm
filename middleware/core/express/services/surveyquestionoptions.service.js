/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:45 GMT-0400 (Bolivia Time)
 * Time: 14:57:45
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:45 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:45
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

class SurveyquestionoptionService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllSurveyquestionoptions(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.surveyquestionoptions.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.surveyquestionoptions.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllSurveyquestionoptions(select = []) {
		try {
			if(sql) {
				return await models.sequelize.surveyquestionoptions.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.surveyquestionoptions.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addSurveyquestionoption(newSurveyquestionoption) {
		try {
			let objSurveyquestionoption;
			if(util.PrimaryKeyTypeIsString(models.sequelize.surveyquestionoptions.primaryKeys.id.type.toString())) {
			    newSurveyquestionoption.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objSurveyquestionoption = await models.sequelize.surveyquestionoptions.create(newSurveyquestionoption);
			} else {
				objSurveyquestionoption = new models.mongoose.surveyquestionoptions(newSurveyquestionoption);
				await objSurveyquestionoption.save();
			}
			return objSurveyquestionoption;
		} catch (error) {
			throw error;
		}
	}

	static async updateSurveyquestionoption(id, updateSurveyquestionoption) {
		try {
			let objSurveyquestionoption;
			if(sql) {
				objSurveyquestionoption = await models.sequelize.surveyquestionoptions.findOne({where: { id: util.Char(id) }});
				if (objSurveyquestionoption) {
					await models.sequelize.surveyquestionoptions.update(updateSurveyquestionoption, { where: { id: util.Char(id) } });
					objSurveyquestionoption = await models.sequelize.surveyquestionoptions.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateSurveyquestionoption._id;
				objSurveyquestionoption = await models.mongoose.surveyquestionoptions.findOneAndUpdate({id:id}, {$set: updateSurveyquestionoption}, {new: true});
			}
			return objSurveyquestionoption;
		} catch (error) {
			throw error;
		}
	}

	static async getASurveyquestionoption(id, query) {
		try {
			let objSurveyquestionoption;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objSurveyquestionoption = await models.sequelize.surveyquestionoptions.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objSurveyquestionoption = await models.mongoose.surveyquestionoptions.find({id:util.Char(id)}).select(query.select);
			}
			return objSurveyquestionoption;
		} catch (error) {
			throw error;
		}
	}

	static async deleteSurveyquestionoption(id) {
		try {
			let objSurveyquestionoption;
			if(sql) {
				objSurveyquestionoption = await models.sequelize.surveyquestionoptions.findOne({ where: { id: util.Char(id) } });
				if (objSurveyquestionoption) {
					await models.sequelize.surveyquestionoptions.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objSurveyquestionoption = await models.mongoose.surveyquestionoptions.deleteOne({id:util.Char(id)});
			}
			return objSurveyquestionoption;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objSurveyquestionoption;
    		if(sql) {
    			objSurveyquestionoption = await models.sequelize.surveyquestionoptions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objSurveyquestionoption = await models.mongoose.surveyquestionoptions.findOne({id: id});
    		}
    		return objSurveyquestionoption;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objSurveyquestionoption;
    		if(sql) {
    			objSurveyquestionoption = await models.sequelize.surveyquestionoptions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objSurveyquestionoption = await models.mongoose.surveyquestionoptions.findOne({deleted: deleted});
    		}
    		return objSurveyquestionoption;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySortOrder(sortOrder, query = {}) {
    	try {
    		let objSurveyquestionoption;
    		if(sql) {
    			objSurveyquestionoption = await models.sequelize.surveyquestionoptions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { sort_order: sortOrder },
    			});
    		} else {
    			objSurveyquestionoption = await models.mongoose.surveyquestionoptions.findOne({sort_order: sortOrder});
    		}
    		return objSurveyquestionoption;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objSurveyquestionoption;
    		if(sql) {
    			objSurveyquestionoption = await models.sequelize.surveyquestionoptions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objSurveyquestionoption = await models.mongoose.surveyquestionoptions.findOne({name: name});
    		}
    		return objSurveyquestionoption;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objSurveyquestionoption;
    		if(sql) {
    			objSurveyquestionoption = await models.sequelize.surveyquestionoptions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objSurveyquestionoption = await models.mongoose.surveyquestionoptions.findOne({description: description});
    		}
    		return objSurveyquestionoption;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objSurveyquestionoption;
    		if(sql) {
    			objSurveyquestionoption = await models.sequelize.surveyquestionoptions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objSurveyquestionoption = await models.mongoose.surveyquestionoptions.findOne({date_entered: dateEntered});
    		}
    		return objSurveyquestionoption;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objSurveyquestionoption;
    		if(sql) {
    			objSurveyquestionoption = await models.sequelize.surveyquestionoptions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objSurveyquestionoption = await models.mongoose.surveyquestionoptions.findOne({date_modified: dateModified});
    		}
    		return objSurveyquestionoption;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objSurveyquestionoption;
    		if(sql) {
    			objSurveyquestionoption = await models.sequelize.surveyquestionoptions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objSurveyquestionoption = await models.mongoose.surveyquestionoptions.findOne({modified_user_id: modifiedUserId});
    		}
    		return objSurveyquestionoption;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objSurveyquestionoption;
    		if(sql) {
    			objSurveyquestionoption = await models.sequelize.surveyquestionoptions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objSurveyquestionoption = await models.mongoose.surveyquestionoptions.findOne({created_by: createdBy});
    		}
    		return objSurveyquestionoption;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objSurveyquestionoption;
    		if(sql) {
    			objSurveyquestionoption = await models.sequelize.surveyquestionoptions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objSurveyquestionoption = await models.mongoose.surveyquestionoptions.findOne({assigned_user_id: assignedUserId});
    		}
    		return objSurveyquestionoption;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySurveyQuestionId(surveyQuestionId, query = {}) {
    	try {
    		let objSurveyquestionoption;
    		if(sql) {
    			objSurveyquestionoption = await models.sequelize.surveyquestionoptions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { survey_question_id: surveyQuestionId },
    			});
    		} else {
    			objSurveyquestionoption = await models.mongoose.surveyquestionoptions.findOne({survey_question_id: surveyQuestionId});
    		}
    		return objSurveyquestionoption;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateSurveyquestionoptionById(id, updateSurveyquestionoption) {
    	try {
    		let objSurveyquestionoption;
    		if(sql) {
    			objSurveyquestionoption = await models.sequelize.surveyquestionoptions.findOne({where: { id: id }});
    			if (objSurveyquestionoption) {
    				objSurveyquestionoption = await models.sequelize.surveyquestionoptions.update(updateSurveyquestionoption, { where: { id: id } });
    			}
    		} else {
    			objSurveyquestionoption = await models.mongoose.surveyquestionoptions.findOneAndUpdate({id: id}, {$set: updateSurveyquestionoption}, {new: true});
    		}
    		return objSurveyquestionoption;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionoptionByDeleted(deleted, updateSurveyquestionoption) {
    	try {
    		let objSurveyquestionoption;
    		if(sql) {
    			objSurveyquestionoption = await models.sequelize.surveyquestionoptions.findOne({where: { deleted: deleted }});
    			if (objSurveyquestionoption) {
    				objSurveyquestionoption = await models.sequelize.surveyquestionoptions.update(updateSurveyquestionoption, { where: { deleted: deleted } });
    			}
    		} else {
    			objSurveyquestionoption = await models.mongoose.surveyquestionoptions.findOneAndUpdate({deleted: deleted}, {$set: updateSurveyquestionoption}, {new: true});
    		}
    		return objSurveyquestionoption;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionoptionBySortOrder(sortOrder, updateSurveyquestionoption) {
    	try {
    		let objSurveyquestionoption;
    		if(sql) {
    			objSurveyquestionoption = await models.sequelize.surveyquestionoptions.findOne({where: { sort_order: sortOrder }});
    			if (objSurveyquestionoption) {
    				objSurveyquestionoption = await models.sequelize.surveyquestionoptions.update(updateSurveyquestionoption, { where: { sort_order: sortOrder } });
    			}
    		} else {
    			objSurveyquestionoption = await models.mongoose.surveyquestionoptions.findOneAndUpdate({sort_order: sortOrder}, {$set: updateSurveyquestionoption}, {new: true});
    		}
    		return objSurveyquestionoption;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionoptionByName(name, updateSurveyquestionoption) {
    	try {
    		let objSurveyquestionoption;
    		if(sql) {
    			objSurveyquestionoption = await models.sequelize.surveyquestionoptions.findOne({where: { name: name }});
    			if (objSurveyquestionoption) {
    				objSurveyquestionoption = await models.sequelize.surveyquestionoptions.update(updateSurveyquestionoption, { where: { name: name } });
    			}
    		} else {
    			objSurveyquestionoption = await models.mongoose.surveyquestionoptions.findOneAndUpdate({name: name}, {$set: updateSurveyquestionoption}, {new: true});
    		}
    		return objSurveyquestionoption;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionoptionByDescription(description, updateSurveyquestionoption) {
    	try {
    		let objSurveyquestionoption;
    		if(sql) {
    			objSurveyquestionoption = await models.sequelize.surveyquestionoptions.findOne({where: { description: description }});
    			if (objSurveyquestionoption) {
    				objSurveyquestionoption = await models.sequelize.surveyquestionoptions.update(updateSurveyquestionoption, { where: { description: description } });
    			}
    		} else {
    			objSurveyquestionoption = await models.mongoose.surveyquestionoptions.findOneAndUpdate({description: description}, {$set: updateSurveyquestionoption}, {new: true});
    		}
    		return objSurveyquestionoption;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionoptionByDateEntered(dateEntered, updateSurveyquestionoption) {
    	try {
    		let objSurveyquestionoption;
    		if(sql) {
    			objSurveyquestionoption = await models.sequelize.surveyquestionoptions.findOne({where: { date_entered: dateEntered }});
    			if (objSurveyquestionoption) {
    				objSurveyquestionoption = await models.sequelize.surveyquestionoptions.update(updateSurveyquestionoption, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objSurveyquestionoption = await models.mongoose.surveyquestionoptions.findOneAndUpdate({date_entered: dateEntered}, {$set: updateSurveyquestionoption}, {new: true});
    		}
    		return objSurveyquestionoption;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionoptionByDateModified(dateModified, updateSurveyquestionoption) {
    	try {
    		let objSurveyquestionoption;
    		if(sql) {
    			objSurveyquestionoption = await models.sequelize.surveyquestionoptions.findOne({where: { date_modified: dateModified }});
    			if (objSurveyquestionoption) {
    				objSurveyquestionoption = await models.sequelize.surveyquestionoptions.update(updateSurveyquestionoption, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objSurveyquestionoption = await models.mongoose.surveyquestionoptions.findOneAndUpdate({date_modified: dateModified}, {$set: updateSurveyquestionoption}, {new: true});
    		}
    		return objSurveyquestionoption;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionoptionByModifiedUserId(modifiedUserId, updateSurveyquestionoption) {
    	try {
    		let objSurveyquestionoption;
    		if(sql) {
    			objSurveyquestionoption = await models.sequelize.surveyquestionoptions.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objSurveyquestionoption) {
    				objSurveyquestionoption = await models.sequelize.surveyquestionoptions.update(updateSurveyquestionoption, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objSurveyquestionoption = await models.mongoose.surveyquestionoptions.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateSurveyquestionoption}, {new: true});
    		}
    		return objSurveyquestionoption;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionoptionByCreatedBy(createdBy, updateSurveyquestionoption) {
    	try {
    		let objSurveyquestionoption;
    		if(sql) {
    			objSurveyquestionoption = await models.sequelize.surveyquestionoptions.findOne({where: { created_by: createdBy }});
    			if (objSurveyquestionoption) {
    				objSurveyquestionoption = await models.sequelize.surveyquestionoptions.update(updateSurveyquestionoption, { where: { created_by: createdBy } });
    			}
    		} else {
    			objSurveyquestionoption = await models.mongoose.surveyquestionoptions.findOneAndUpdate({created_by: createdBy}, {$set: updateSurveyquestionoption}, {new: true});
    		}
    		return objSurveyquestionoption;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionoptionByAssignedUserId(assignedUserId, updateSurveyquestionoption) {
    	try {
    		let objSurveyquestionoption;
    		if(sql) {
    			objSurveyquestionoption = await models.sequelize.surveyquestionoptions.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objSurveyquestionoption) {
    				objSurveyquestionoption = await models.sequelize.surveyquestionoptions.update(updateSurveyquestionoption, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objSurveyquestionoption = await models.mongoose.surveyquestionoptions.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateSurveyquestionoption}, {new: true});
    		}
    		return objSurveyquestionoption;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionoptionBySurveyQuestionId(surveyQuestionId, updateSurveyquestionoption) {
    	try {
    		let objSurveyquestionoption;
    		if(sql) {
    			objSurveyquestionoption = await models.sequelize.surveyquestionoptions.findOne({where: { survey_question_id: surveyQuestionId }});
    			if (objSurveyquestionoption) {
    				objSurveyquestionoption = await models.sequelize.surveyquestionoptions.update(updateSurveyquestionoption, { where: { survey_question_id: surveyQuestionId } });
    			}
    		} else {
    			objSurveyquestionoption = await models.mongoose.surveyquestionoptions.findOneAndUpdate({survey_question_id: surveyQuestionId}, {$set: updateSurveyquestionoption}, {new: true});
    		}
    		return objSurveyquestionoption;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = SurveyquestionoptionService;
//</es-section>
