/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:47 GMT-0400 (Bolivia Time)
 * Time: 18:38:47
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:47 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:47
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

class SurveyquestionresponseService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllSurveyquestionresponses(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.surveyquestionresponses.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.surveyquestionresponses.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllSurveyquestionresponses(select = []) {
		try {
			if(sql) {
				return await models.sequelize.surveyquestionresponses.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.surveyquestionresponses.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addSurveyquestionresponse(newSurveyquestionresponse) {
		try {
			let objSurveyquestionresponse;
			if(util.PrimaryKeyTypeIsString(models.sequelize.surveyquestionresponses.primaryKeys.id.type.toString())) {
			    newSurveyquestionresponse.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.create(newSurveyquestionresponse);
			} else {
				objSurveyquestionresponse = new models.mongoose.surveyquestionresponses(newSurveyquestionresponse);
				await objSurveyquestionresponse.save();
			}
			return objSurveyquestionresponse;
		} catch (error) {
			throw error;
		}
	}

	static async updateSurveyquestionresponse(id, updateSurveyquestionresponse) {
		try {
			let objSurveyquestionresponse;
			if(sql) {
				objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.findOne({where: { id: util.Char(id) }});
				if (objSurveyquestionresponse) {
					await models.sequelize.surveyquestionresponses.update(updateSurveyquestionresponse, { where: { id: util.Char(id) } });
					objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateSurveyquestionresponse._id;
				objSurveyquestionresponse = await models.mongoose.surveyquestionresponses.findOneAndUpdate({id:id}, {$set: updateSurveyquestionresponse}, {new: true});
			}
			return objSurveyquestionresponse;
		} catch (error) {
			throw error;
		}
	}

	static async getASurveyquestionresponse(id, query) {
		try {
			let objSurveyquestionresponse;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objSurveyquestionresponse = await models.mongoose.surveyquestionresponses.find({id:util.Char(id)}).select(query.select);
			}
			return objSurveyquestionresponse;
		} catch (error) {
			throw error;
		}
	}

	static async deleteSurveyquestionresponse(id) {
		try {
			let objSurveyquestionresponse;
			if(sql) {
				objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.findOne({ where: { id: util.Char(id) } });
				if (objSurveyquestionresponse) {
					await models.sequelize.surveyquestionresponses.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objSurveyquestionresponse = await models.mongoose.surveyquestionresponses.deleteOne({id:util.Char(id)});
			}
			return objSurveyquestionresponse;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objSurveyquestionresponse;
    		if(sql) {
    			objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objSurveyquestionresponse = await models.mongoose.surveyquestionresponses.findOne({id: id});
    		}
    		return objSurveyquestionresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objSurveyquestionresponse;
    		if(sql) {
    			objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objSurveyquestionresponse = await models.mongoose.surveyquestionresponses.findOne({deleted: deleted});
    		}
    		return objSurveyquestionresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAnswerBool(answerBool, query = {}) {
    	try {
    		let objSurveyquestionresponse;
    		if(sql) {
    			objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { answer_bool: answerBool },
    			});
    		} else {
    			objSurveyquestionresponse = await models.mongoose.surveyquestionresponses.findOne({answer_bool: answerBool});
    		}
    		return objSurveyquestionresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objSurveyquestionresponse;
    		if(sql) {
    			objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objSurveyquestionresponse = await models.mongoose.surveyquestionresponses.findOne({name: name});
    		}
    		return objSurveyquestionresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objSurveyquestionresponse;
    		if(sql) {
    			objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objSurveyquestionresponse = await models.mongoose.surveyquestionresponses.findOne({description: description});
    		}
    		return objSurveyquestionresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAnswer(answer, query = {}) {
    	try {
    		let objSurveyquestionresponse;
    		if(sql) {
    			objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { answer: answer },
    			});
    		} else {
    			objSurveyquestionresponse = await models.mongoose.surveyquestionresponses.findOne({answer: answer});
    		}
    		return objSurveyquestionresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objSurveyquestionresponse;
    		if(sql) {
    			objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objSurveyquestionresponse = await models.mongoose.surveyquestionresponses.findOne({date_entered: dateEntered});
    		}
    		return objSurveyquestionresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objSurveyquestionresponse;
    		if(sql) {
    			objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objSurveyquestionresponse = await models.mongoose.surveyquestionresponses.findOne({date_modified: dateModified});
    		}
    		return objSurveyquestionresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAnswerDatetime(answerDatetime, query = {}) {
    	try {
    		let objSurveyquestionresponse;
    		if(sql) {
    			objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { answer_datetime: answerDatetime },
    			});
    		} else {
    			objSurveyquestionresponse = await models.mongoose.surveyquestionresponses.findOne({answer_datetime: answerDatetime});
    		}
    		return objSurveyquestionresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objSurveyquestionresponse;
    		if(sql) {
    			objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objSurveyquestionresponse = await models.mongoose.surveyquestionresponses.findOne({modified_user_id: modifiedUserId});
    		}
    		return objSurveyquestionresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objSurveyquestionresponse;
    		if(sql) {
    			objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objSurveyquestionresponse = await models.mongoose.surveyquestionresponses.findOne({created_by: createdBy});
    		}
    		return objSurveyquestionresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objSurveyquestionresponse;
    		if(sql) {
    			objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objSurveyquestionresponse = await models.mongoose.surveyquestionresponses.findOne({assigned_user_id: assignedUserId});
    		}
    		return objSurveyquestionresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySurveyquestionId(surveyquestionId, query = {}) {
    	try {
    		let objSurveyquestionresponse;
    		if(sql) {
    			objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { surveyquestion_id: surveyquestionId },
    			});
    		} else {
    			objSurveyquestionresponse = await models.mongoose.surveyquestionresponses.findOne({surveyquestion_id: surveyquestionId});
    		}
    		return objSurveyquestionresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySurveyresponseId(surveyresponseId, query = {}) {
    	try {
    		let objSurveyquestionresponse;
    		if(sql) {
    			objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { surveyresponse_id: surveyresponseId },
    			});
    		} else {
    			objSurveyquestionresponse = await models.mongoose.surveyquestionresponses.findOne({surveyresponse_id: surveyresponseId});
    		}
    		return objSurveyquestionresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateSurveyquestionresponseById(id, updateSurveyquestionresponse) {
    	try {
    		let objSurveyquestionresponse;
    		if(sql) {
    			objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.findOne({where: { id: id }});
    			if (objSurveyquestionresponse) {
    				objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.update(updateSurveyquestionresponse, { where: { id: id } });
    			}
    		} else {
    			objSurveyquestionresponse = await models.mongoose.surveyquestionresponses.findOneAndUpdate({id: id}, {$set: updateSurveyquestionresponse}, {new: true});
    		}
    		return objSurveyquestionresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionresponseByDeleted(deleted, updateSurveyquestionresponse) {
    	try {
    		let objSurveyquestionresponse;
    		if(sql) {
    			objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.findOne({where: { deleted: deleted }});
    			if (objSurveyquestionresponse) {
    				objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.update(updateSurveyquestionresponse, { where: { deleted: deleted } });
    			}
    		} else {
    			objSurveyquestionresponse = await models.mongoose.surveyquestionresponses.findOneAndUpdate({deleted: deleted}, {$set: updateSurveyquestionresponse}, {new: true});
    		}
    		return objSurveyquestionresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionresponseByAnswerBool(answerBool, updateSurveyquestionresponse) {
    	try {
    		let objSurveyquestionresponse;
    		if(sql) {
    			objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.findOne({where: { answer_bool: answerBool }});
    			if (objSurveyquestionresponse) {
    				objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.update(updateSurveyquestionresponse, { where: { answer_bool: answerBool } });
    			}
    		} else {
    			objSurveyquestionresponse = await models.mongoose.surveyquestionresponses.findOneAndUpdate({answer_bool: answerBool}, {$set: updateSurveyquestionresponse}, {new: true});
    		}
    		return objSurveyquestionresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionresponseByName(name, updateSurveyquestionresponse) {
    	try {
    		let objSurveyquestionresponse;
    		if(sql) {
    			objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.findOne({where: { name: name }});
    			if (objSurveyquestionresponse) {
    				objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.update(updateSurveyquestionresponse, { where: { name: name } });
    			}
    		} else {
    			objSurveyquestionresponse = await models.mongoose.surveyquestionresponses.findOneAndUpdate({name: name}, {$set: updateSurveyquestionresponse}, {new: true});
    		}
    		return objSurveyquestionresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionresponseByDescription(description, updateSurveyquestionresponse) {
    	try {
    		let objSurveyquestionresponse;
    		if(sql) {
    			objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.findOne({where: { description: description }});
    			if (objSurveyquestionresponse) {
    				objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.update(updateSurveyquestionresponse, { where: { description: description } });
    			}
    		} else {
    			objSurveyquestionresponse = await models.mongoose.surveyquestionresponses.findOneAndUpdate({description: description}, {$set: updateSurveyquestionresponse}, {new: true});
    		}
    		return objSurveyquestionresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionresponseByAnswer(answer, updateSurveyquestionresponse) {
    	try {
    		let objSurveyquestionresponse;
    		if(sql) {
    			objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.findOne({where: { answer: answer }});
    			if (objSurveyquestionresponse) {
    				objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.update(updateSurveyquestionresponse, { where: { answer: answer } });
    			}
    		} else {
    			objSurveyquestionresponse = await models.mongoose.surveyquestionresponses.findOneAndUpdate({answer: answer}, {$set: updateSurveyquestionresponse}, {new: true});
    		}
    		return objSurveyquestionresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionresponseByDateEntered(dateEntered, updateSurveyquestionresponse) {
    	try {
    		let objSurveyquestionresponse;
    		if(sql) {
    			objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.findOne({where: { date_entered: dateEntered }});
    			if (objSurveyquestionresponse) {
    				objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.update(updateSurveyquestionresponse, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objSurveyquestionresponse = await models.mongoose.surveyquestionresponses.findOneAndUpdate({date_entered: dateEntered}, {$set: updateSurveyquestionresponse}, {new: true});
    		}
    		return objSurveyquestionresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionresponseByDateModified(dateModified, updateSurveyquestionresponse) {
    	try {
    		let objSurveyquestionresponse;
    		if(sql) {
    			objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.findOne({where: { date_modified: dateModified }});
    			if (objSurveyquestionresponse) {
    				objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.update(updateSurveyquestionresponse, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objSurveyquestionresponse = await models.mongoose.surveyquestionresponses.findOneAndUpdate({date_modified: dateModified}, {$set: updateSurveyquestionresponse}, {new: true});
    		}
    		return objSurveyquestionresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionresponseByAnswerDatetime(answerDatetime, updateSurveyquestionresponse) {
    	try {
    		let objSurveyquestionresponse;
    		if(sql) {
    			objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.findOne({where: { answer_datetime: answerDatetime }});
    			if (objSurveyquestionresponse) {
    				objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.update(updateSurveyquestionresponse, { where: { answer_datetime: answerDatetime } });
    			}
    		} else {
    			objSurveyquestionresponse = await models.mongoose.surveyquestionresponses.findOneAndUpdate({answer_datetime: answerDatetime}, {$set: updateSurveyquestionresponse}, {new: true});
    		}
    		return objSurveyquestionresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionresponseByModifiedUserId(modifiedUserId, updateSurveyquestionresponse) {
    	try {
    		let objSurveyquestionresponse;
    		if(sql) {
    			objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objSurveyquestionresponse) {
    				objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.update(updateSurveyquestionresponse, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objSurveyquestionresponse = await models.mongoose.surveyquestionresponses.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateSurveyquestionresponse}, {new: true});
    		}
    		return objSurveyquestionresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionresponseByCreatedBy(createdBy, updateSurveyquestionresponse) {
    	try {
    		let objSurveyquestionresponse;
    		if(sql) {
    			objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.findOne({where: { created_by: createdBy }});
    			if (objSurveyquestionresponse) {
    				objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.update(updateSurveyquestionresponse, { where: { created_by: createdBy } });
    			}
    		} else {
    			objSurveyquestionresponse = await models.mongoose.surveyquestionresponses.findOneAndUpdate({created_by: createdBy}, {$set: updateSurveyquestionresponse}, {new: true});
    		}
    		return objSurveyquestionresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionresponseByAssignedUserId(assignedUserId, updateSurveyquestionresponse) {
    	try {
    		let objSurveyquestionresponse;
    		if(sql) {
    			objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objSurveyquestionresponse) {
    				objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.update(updateSurveyquestionresponse, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objSurveyquestionresponse = await models.mongoose.surveyquestionresponses.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateSurveyquestionresponse}, {new: true});
    		}
    		return objSurveyquestionresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionresponseBySurveyquestionId(surveyquestionId, updateSurveyquestionresponse) {
    	try {
    		let objSurveyquestionresponse;
    		if(sql) {
    			objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.findOne({where: { surveyquestion_id: surveyquestionId }});
    			if (objSurveyquestionresponse) {
    				objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.update(updateSurveyquestionresponse, { where: { surveyquestion_id: surveyquestionId } });
    			}
    		} else {
    			objSurveyquestionresponse = await models.mongoose.surveyquestionresponses.findOneAndUpdate({surveyquestion_id: surveyquestionId}, {$set: updateSurveyquestionresponse}, {new: true});
    		}
    		return objSurveyquestionresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionresponseBySurveyresponseId(surveyresponseId, updateSurveyquestionresponse) {
    	try {
    		let objSurveyquestionresponse;
    		if(sql) {
    			objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.findOne({where: { surveyresponse_id: surveyresponseId }});
    			if (objSurveyquestionresponse) {
    				objSurveyquestionresponse = await models.sequelize.surveyquestionresponses.update(updateSurveyquestionresponse, { where: { surveyresponse_id: surveyresponseId } });
    			}
    		} else {
    			objSurveyquestionresponse = await models.mongoose.surveyquestionresponses.findOneAndUpdate({surveyresponse_id: surveyresponseId}, {$set: updateSurveyquestionresponse}, {new: true});
    		}
    		return objSurveyquestionresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = SurveyquestionresponseService;
//</es-section>
