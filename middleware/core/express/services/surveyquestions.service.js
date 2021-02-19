/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:44:14 GMT-0400 (Bolivia Time)
 * Time: 4:44:14
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:44:14 GMT-0400 (Bolivia Time)
 * Last time updated: 4:44:14
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

class SurveyquestionService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllSurveyquestions(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.surveyquestions.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.surveyquestions.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllSurveyquestions(select = []) {
		try {
			if(sql) {
				return await models.sequelize.surveyquestions.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.surveyquestions.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addSurveyquestion(newSurveyquestion) {
		try {
			let objSurveyquestion;
			if(util.PrimaryKeyTypeIsString(models.sequelize.surveyquestions.primaryKeys.id.type.toString())) {
			    newSurveyquestion.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objSurveyquestion = await models.sequelize.surveyquestions.create(newSurveyquestion);
			} else {
				objSurveyquestion = new models.mongoose.surveyquestions(newSurveyquestion);
				await objSurveyquestion.save();
			}
			return objSurveyquestion;
		} catch (error) {
			throw error;
		}
	}

	static async updateSurveyquestion(id, updateSurveyquestion) {
		try {
			let objSurveyquestion;
			if(sql) {
				objSurveyquestion = await models.sequelize.surveyquestions.findOne({where: { id: util.Char(id) }});
				if (objSurveyquestion) {
					await models.sequelize.surveyquestions.update(updateSurveyquestion, { where: { id: util.Char(id) } });
					objSurveyquestion = await models.sequelize.surveyquestions.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateSurveyquestion._id;
				objSurveyquestion = await models.mongoose.surveyquestions.findOneAndUpdate({id:id}, {$set: updateSurveyquestion}, {new: true});
			}
			return objSurveyquestion;
		} catch (error) {
			throw error;
		}
	}

	static async getASurveyquestion(id, query) {
		try {
			let objSurveyquestion;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objSurveyquestion = await models.sequelize.surveyquestions.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objSurveyquestion = await models.mongoose.surveyquestions.find({id:util.Char(id)}).select(query.select);
			}
			return objSurveyquestion;
		} catch (error) {
			throw error;
		}
	}

	static async deleteSurveyquestion(id) {
		try {
			let objSurveyquestion;
			if(sql) {
				objSurveyquestion = await models.sequelize.surveyquestions.findOne({ where: { id: util.Char(id) } });
				if (objSurveyquestion) {
					await models.sequelize.surveyquestions.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objSurveyquestion = await models.mongoose.surveyquestions.deleteOne({id:util.Char(id)});
			}
			return objSurveyquestion;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objSurveyquestion;
    		if(sql) {
    			objSurveyquestion = await models.sequelize.surveyquestions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objSurveyquestion = await models.mongoose.surveyquestions.findOne({id: id});
    		}
    		return objSurveyquestion;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objSurveyquestion;
    		if(sql) {
    			objSurveyquestion = await models.sequelize.surveyquestions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objSurveyquestion = await models.mongoose.surveyquestions.findOne({deleted: deleted});
    		}
    		return objSurveyquestion;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByHappinessQuestion(happinessQuestion, query = {}) {
    	try {
    		let objSurveyquestion;
    		if(sql) {
    			objSurveyquestion = await models.sequelize.surveyquestions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { happiness_question: happinessQuestion },
    			});
    		} else {
    			objSurveyquestion = await models.mongoose.surveyquestions.findOne({happiness_question: happinessQuestion});
    		}
    		return objSurveyquestion;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySortOrder(sortOrder, query = {}) {
    	try {
    		let objSurveyquestion;
    		if(sql) {
    			objSurveyquestion = await models.sequelize.surveyquestions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { sort_order: sortOrder },
    			});
    		} else {
    			objSurveyquestion = await models.mongoose.surveyquestions.findOne({sort_order: sortOrder});
    		}
    		return objSurveyquestion;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objSurveyquestion;
    		if(sql) {
    			objSurveyquestion = await models.sequelize.surveyquestions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objSurveyquestion = await models.mongoose.surveyquestions.findOne({name: name});
    		}
    		return objSurveyquestion;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByType(type, query = {}) {
    	try {
    		let objSurveyquestion;
    		if(sql) {
    			objSurveyquestion = await models.sequelize.surveyquestions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { type: type },
    			});
    		} else {
    			objSurveyquestion = await models.mongoose.surveyquestions.findOne({type: type});
    		}
    		return objSurveyquestion;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objSurveyquestion;
    		if(sql) {
    			objSurveyquestion = await models.sequelize.surveyquestions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objSurveyquestion = await models.mongoose.surveyquestions.findOne({description: description});
    		}
    		return objSurveyquestion;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objSurveyquestion;
    		if(sql) {
    			objSurveyquestion = await models.sequelize.surveyquestions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objSurveyquestion = await models.mongoose.surveyquestions.findOne({date_entered: dateEntered});
    		}
    		return objSurveyquestion;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objSurveyquestion;
    		if(sql) {
    			objSurveyquestion = await models.sequelize.surveyquestions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objSurveyquestion = await models.mongoose.surveyquestions.findOne({date_modified: dateModified});
    		}
    		return objSurveyquestion;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objSurveyquestion;
    		if(sql) {
    			objSurveyquestion = await models.sequelize.surveyquestions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objSurveyquestion = await models.mongoose.surveyquestions.findOne({modified_user_id: modifiedUserId});
    		}
    		return objSurveyquestion;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objSurveyquestion;
    		if(sql) {
    			objSurveyquestion = await models.sequelize.surveyquestions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objSurveyquestion = await models.mongoose.surveyquestions.findOne({created_by: createdBy});
    		}
    		return objSurveyquestion;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objSurveyquestion;
    		if(sql) {
    			objSurveyquestion = await models.sequelize.surveyquestions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objSurveyquestion = await models.mongoose.surveyquestions.findOne({assigned_user_id: assignedUserId});
    		}
    		return objSurveyquestion;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySurveyId(surveyId, query = {}) {
    	try {
    		let objSurveyquestion;
    		if(sql) {
    			objSurveyquestion = await models.sequelize.surveyquestions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { survey_id: surveyId },
    			});
    		} else {
    			objSurveyquestion = await models.mongoose.surveyquestions.findOne({survey_id: surveyId});
    		}
    		return objSurveyquestion;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateSurveyquestionById(id, updateSurveyquestion) {
    	try {
    		let objSurveyquestion;
    		if(sql) {
    			objSurveyquestion = await models.sequelize.surveyquestions.findOne({where: { id: id }});
    			if (objSurveyquestion) {
    				objSurveyquestion = await models.sequelize.surveyquestions.update(updateSurveyquestion, { where: { id: id } });
    			}
    		} else {
    			objSurveyquestion = await models.mongoose.surveyquestions.findOneAndUpdate({id: id}, {$set: updateSurveyquestion}, {new: true});
    		}
    		return objSurveyquestion;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionByDeleted(deleted, updateSurveyquestion) {
    	try {
    		let objSurveyquestion;
    		if(sql) {
    			objSurveyquestion = await models.sequelize.surveyquestions.findOne({where: { deleted: deleted }});
    			if (objSurveyquestion) {
    				objSurveyquestion = await models.sequelize.surveyquestions.update(updateSurveyquestion, { where: { deleted: deleted } });
    			}
    		} else {
    			objSurveyquestion = await models.mongoose.surveyquestions.findOneAndUpdate({deleted: deleted}, {$set: updateSurveyquestion}, {new: true});
    		}
    		return objSurveyquestion;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionByHappinessQuestion(happinessQuestion, updateSurveyquestion) {
    	try {
    		let objSurveyquestion;
    		if(sql) {
    			objSurveyquestion = await models.sequelize.surveyquestions.findOne({where: { happiness_question: happinessQuestion }});
    			if (objSurveyquestion) {
    				objSurveyquestion = await models.sequelize.surveyquestions.update(updateSurveyquestion, { where: { happiness_question: happinessQuestion } });
    			}
    		} else {
    			objSurveyquestion = await models.mongoose.surveyquestions.findOneAndUpdate({happiness_question: happinessQuestion}, {$set: updateSurveyquestion}, {new: true});
    		}
    		return objSurveyquestion;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionBySortOrder(sortOrder, updateSurveyquestion) {
    	try {
    		let objSurveyquestion;
    		if(sql) {
    			objSurveyquestion = await models.sequelize.surveyquestions.findOne({where: { sort_order: sortOrder }});
    			if (objSurveyquestion) {
    				objSurveyquestion = await models.sequelize.surveyquestions.update(updateSurveyquestion, { where: { sort_order: sortOrder } });
    			}
    		} else {
    			objSurveyquestion = await models.mongoose.surveyquestions.findOneAndUpdate({sort_order: sortOrder}, {$set: updateSurveyquestion}, {new: true});
    		}
    		return objSurveyquestion;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionByName(name, updateSurveyquestion) {
    	try {
    		let objSurveyquestion;
    		if(sql) {
    			objSurveyquestion = await models.sequelize.surveyquestions.findOne({where: { name: name }});
    			if (objSurveyquestion) {
    				objSurveyquestion = await models.sequelize.surveyquestions.update(updateSurveyquestion, { where: { name: name } });
    			}
    		} else {
    			objSurveyquestion = await models.mongoose.surveyquestions.findOneAndUpdate({name: name}, {$set: updateSurveyquestion}, {new: true});
    		}
    		return objSurveyquestion;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionByType(type, updateSurveyquestion) {
    	try {
    		let objSurveyquestion;
    		if(sql) {
    			objSurveyquestion = await models.sequelize.surveyquestions.findOne({where: { type: type }});
    			if (objSurveyquestion) {
    				objSurveyquestion = await models.sequelize.surveyquestions.update(updateSurveyquestion, { where: { type: type } });
    			}
    		} else {
    			objSurveyquestion = await models.mongoose.surveyquestions.findOneAndUpdate({type: type}, {$set: updateSurveyquestion}, {new: true});
    		}
    		return objSurveyquestion;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionByDescription(description, updateSurveyquestion) {
    	try {
    		let objSurveyquestion;
    		if(sql) {
    			objSurveyquestion = await models.sequelize.surveyquestions.findOne({where: { description: description }});
    			if (objSurveyquestion) {
    				objSurveyquestion = await models.sequelize.surveyquestions.update(updateSurveyquestion, { where: { description: description } });
    			}
    		} else {
    			objSurveyquestion = await models.mongoose.surveyquestions.findOneAndUpdate({description: description}, {$set: updateSurveyquestion}, {new: true});
    		}
    		return objSurveyquestion;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionByDateEntered(dateEntered, updateSurveyquestion) {
    	try {
    		let objSurveyquestion;
    		if(sql) {
    			objSurveyquestion = await models.sequelize.surveyquestions.findOne({where: { date_entered: dateEntered }});
    			if (objSurveyquestion) {
    				objSurveyquestion = await models.sequelize.surveyquestions.update(updateSurveyquestion, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objSurveyquestion = await models.mongoose.surveyquestions.findOneAndUpdate({date_entered: dateEntered}, {$set: updateSurveyquestion}, {new: true});
    		}
    		return objSurveyquestion;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionByDateModified(dateModified, updateSurveyquestion) {
    	try {
    		let objSurveyquestion;
    		if(sql) {
    			objSurveyquestion = await models.sequelize.surveyquestions.findOne({where: { date_modified: dateModified }});
    			if (objSurveyquestion) {
    				objSurveyquestion = await models.sequelize.surveyquestions.update(updateSurveyquestion, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objSurveyquestion = await models.mongoose.surveyquestions.findOneAndUpdate({date_modified: dateModified}, {$set: updateSurveyquestion}, {new: true});
    		}
    		return objSurveyquestion;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionByModifiedUserId(modifiedUserId, updateSurveyquestion) {
    	try {
    		let objSurveyquestion;
    		if(sql) {
    			objSurveyquestion = await models.sequelize.surveyquestions.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objSurveyquestion) {
    				objSurveyquestion = await models.sequelize.surveyquestions.update(updateSurveyquestion, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objSurveyquestion = await models.mongoose.surveyquestions.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateSurveyquestion}, {new: true});
    		}
    		return objSurveyquestion;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionByCreatedBy(createdBy, updateSurveyquestion) {
    	try {
    		let objSurveyquestion;
    		if(sql) {
    			objSurveyquestion = await models.sequelize.surveyquestions.findOne({where: { created_by: createdBy }});
    			if (objSurveyquestion) {
    				objSurveyquestion = await models.sequelize.surveyquestions.update(updateSurveyquestion, { where: { created_by: createdBy } });
    			}
    		} else {
    			objSurveyquestion = await models.mongoose.surveyquestions.findOneAndUpdate({created_by: createdBy}, {$set: updateSurveyquestion}, {new: true});
    		}
    		return objSurveyquestion;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionByAssignedUserId(assignedUserId, updateSurveyquestion) {
    	try {
    		let objSurveyquestion;
    		if(sql) {
    			objSurveyquestion = await models.sequelize.surveyquestions.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objSurveyquestion) {
    				objSurveyquestion = await models.sequelize.surveyquestions.update(updateSurveyquestion, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objSurveyquestion = await models.mongoose.surveyquestions.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateSurveyquestion}, {new: true});
    		}
    		return objSurveyquestion;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionBySurveyId(surveyId, updateSurveyquestion) {
    	try {
    		let objSurveyquestion;
    		if(sql) {
    			objSurveyquestion = await models.sequelize.surveyquestions.findOne({where: { survey_id: surveyId }});
    			if (objSurveyquestion) {
    				objSurveyquestion = await models.sequelize.surveyquestions.update(updateSurveyquestion, { where: { survey_id: surveyId } });
    			}
    		} else {
    			objSurveyquestion = await models.mongoose.surveyquestions.findOneAndUpdate({survey_id: surveyId}, {$set: updateSurveyquestion}, {new: true});
    		}
    		return objSurveyquestion;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = SurveyquestionService;
//</es-section>
