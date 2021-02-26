/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:53 GMT-0400 (Bolivia Time)
 * Time: 0:23:53
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:53 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:53
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

class SurveyService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllSurveys(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.surveys.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.surveys.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllSurveys(select = []) {
		try {
			if(sql) {
				return await models.sequelize.surveys.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.surveys.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addSurvey(newSurvey) {
		try {
			let objSurvey;
			if(util.PrimaryKeyTypeIsString(models.sequelize.surveys.primaryKeys.id.type.toString())) {
			    newSurvey.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objSurvey = await models.sequelize.surveys.create(newSurvey);
			} else {
				objSurvey = new models.mongoose.surveys(newSurvey);
				await objSurvey.save();
			}
			return objSurvey;
		} catch (error) {
			throw error;
		}
	}

	static async updateSurvey(id, updateSurvey) {
		try {
			let objSurvey;
			if(sql) {
				objSurvey = await models.sequelize.surveys.findOne({where: { id: util.Char(id) }});
				if (objSurvey) {
					await models.sequelize.surveys.update(updateSurvey, { where: { id: util.Char(id) } });
					objSurvey = await models.sequelize.surveys.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateSurvey._id;
				objSurvey = await models.mongoose.surveys.findOneAndUpdate({id:id}, {$set: updateSurvey}, {new: true});
			}
			return objSurvey;
		} catch (error) {
			throw error;
		}
	}

	static async getASurvey(id, query) {
		try {
			let objSurvey;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objSurvey = await models.sequelize.surveys.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objSurvey = await models.mongoose.surveys.find({id:util.Char(id)}).select(query.select);
			}
			return objSurvey;
		} catch (error) {
			throw error;
		}
	}

	static async deleteSurvey(id) {
		try {
			let objSurvey;
			if(sql) {
				objSurvey = await models.sequelize.surveys.findOne({ where: { id: util.Char(id) } });
				if (objSurvey) {
					await models.sequelize.surveys.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objSurvey = await models.mongoose.surveys.deleteOne({id:util.Char(id)});
			}
			return objSurvey;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objSurvey;
    		if(sql) {
    			objSurvey = await models.sequelize.surveys.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objSurvey = await models.mongoose.surveys.findOne({id: id});
    		}
    		return objSurvey;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objSurvey;
    		if(sql) {
    			objSurvey = await models.sequelize.surveys.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objSurvey = await models.mongoose.surveys.findOne({deleted: deleted});
    		}
    		return objSurvey;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objSurvey;
    		if(sql) {
    			objSurvey = await models.sequelize.surveys.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objSurvey = await models.mongoose.surveys.findOne({name: name});
    		}
    		return objSurvey;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByStatus(status, query = {}) {
    	try {
    		let objSurvey;
    		if(sql) {
    			objSurvey = await models.sequelize.surveys.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { status: status },
    			});
    		} else {
    			objSurvey = await models.mongoose.surveys.findOne({status: status});
    		}
    		return objSurvey;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySubmitText(submitText, query = {}) {
    	try {
    		let objSurvey;
    		if(sql) {
    			objSurvey = await models.sequelize.surveys.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { submit_text: submitText },
    			});
    		} else {
    			objSurvey = await models.mongoose.surveys.findOne({submit_text: submitText});
    		}
    		return objSurvey;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySatisfiedText(satisfiedText, query = {}) {
    	try {
    		let objSurvey;
    		if(sql) {
    			objSurvey = await models.sequelize.surveys.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { satisfied_text: satisfiedText },
    			});
    		} else {
    			objSurvey = await models.mongoose.surveys.findOne({satisfied_text: satisfiedText});
    		}
    		return objSurvey;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByNeitherText(neitherText, query = {}) {
    	try {
    		let objSurvey;
    		if(sql) {
    			objSurvey = await models.sequelize.surveys.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { neither_text: neitherText },
    			});
    		} else {
    			objSurvey = await models.mongoose.surveys.findOne({neither_text: neitherText});
    		}
    		return objSurvey;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDissatisfiedText(dissatisfiedText, query = {}) {
    	try {
    		let objSurvey;
    		if(sql) {
    			objSurvey = await models.sequelize.surveys.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { dissatisfied_text: dissatisfiedText },
    			});
    		} else {
    			objSurvey = await models.mongoose.surveys.findOne({dissatisfied_text: dissatisfiedText});
    		}
    		return objSurvey;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objSurvey;
    		if(sql) {
    			objSurvey = await models.sequelize.surveys.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objSurvey = await models.mongoose.surveys.findOne({description: description});
    		}
    		return objSurvey;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objSurvey;
    		if(sql) {
    			objSurvey = await models.sequelize.surveys.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objSurvey = await models.mongoose.surveys.findOne({date_entered: dateEntered});
    		}
    		return objSurvey;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objSurvey;
    		if(sql) {
    			objSurvey = await models.sequelize.surveys.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objSurvey = await models.mongoose.surveys.findOne({date_modified: dateModified});
    		}
    		return objSurvey;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objSurvey;
    		if(sql) {
    			objSurvey = await models.sequelize.surveys.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objSurvey = await models.mongoose.surveys.findOne({modified_user_id: modifiedUserId});
    		}
    		return objSurvey;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objSurvey;
    		if(sql) {
    			objSurvey = await models.sequelize.surveys.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objSurvey = await models.mongoose.surveys.findOne({created_by: createdBy});
    		}
    		return objSurvey;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objSurvey;
    		if(sql) {
    			objSurvey = await models.sequelize.surveys.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objSurvey = await models.mongoose.surveys.findOne({assigned_user_id: assignedUserId});
    		}
    		return objSurvey;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateSurveyById(id, updateSurvey) {
    	try {
    		let objSurvey;
    		if(sql) {
    			objSurvey = await models.sequelize.surveys.findOne({where: { id: id }});
    			if (objSurvey) {
    				objSurvey = await models.sequelize.surveys.update(updateSurvey, { where: { id: id } });
    			}
    		} else {
    			objSurvey = await models.mongoose.surveys.findOneAndUpdate({id: id}, {$set: updateSurvey}, {new: true});
    		}
    		return objSurvey;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyByDeleted(deleted, updateSurvey) {
    	try {
    		let objSurvey;
    		if(sql) {
    			objSurvey = await models.sequelize.surveys.findOne({where: { deleted: deleted }});
    			if (objSurvey) {
    				objSurvey = await models.sequelize.surveys.update(updateSurvey, { where: { deleted: deleted } });
    			}
    		} else {
    			objSurvey = await models.mongoose.surveys.findOneAndUpdate({deleted: deleted}, {$set: updateSurvey}, {new: true});
    		}
    		return objSurvey;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyByName(name, updateSurvey) {
    	try {
    		let objSurvey;
    		if(sql) {
    			objSurvey = await models.sequelize.surveys.findOne({where: { name: name }});
    			if (objSurvey) {
    				objSurvey = await models.sequelize.surveys.update(updateSurvey, { where: { name: name } });
    			}
    		} else {
    			objSurvey = await models.mongoose.surveys.findOneAndUpdate({name: name}, {$set: updateSurvey}, {new: true});
    		}
    		return objSurvey;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyByStatus(status, updateSurvey) {
    	try {
    		let objSurvey;
    		if(sql) {
    			objSurvey = await models.sequelize.surveys.findOne({where: { status: status }});
    			if (objSurvey) {
    				objSurvey = await models.sequelize.surveys.update(updateSurvey, { where: { status: status } });
    			}
    		} else {
    			objSurvey = await models.mongoose.surveys.findOneAndUpdate({status: status}, {$set: updateSurvey}, {new: true});
    		}
    		return objSurvey;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyBySubmitText(submitText, updateSurvey) {
    	try {
    		let objSurvey;
    		if(sql) {
    			objSurvey = await models.sequelize.surveys.findOne({where: { submit_text: submitText }});
    			if (objSurvey) {
    				objSurvey = await models.sequelize.surveys.update(updateSurvey, { where: { submit_text: submitText } });
    			}
    		} else {
    			objSurvey = await models.mongoose.surveys.findOneAndUpdate({submit_text: submitText}, {$set: updateSurvey}, {new: true});
    		}
    		return objSurvey;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyBySatisfiedText(satisfiedText, updateSurvey) {
    	try {
    		let objSurvey;
    		if(sql) {
    			objSurvey = await models.sequelize.surveys.findOne({where: { satisfied_text: satisfiedText }});
    			if (objSurvey) {
    				objSurvey = await models.sequelize.surveys.update(updateSurvey, { where: { satisfied_text: satisfiedText } });
    			}
    		} else {
    			objSurvey = await models.mongoose.surveys.findOneAndUpdate({satisfied_text: satisfiedText}, {$set: updateSurvey}, {new: true});
    		}
    		return objSurvey;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyByNeitherText(neitherText, updateSurvey) {
    	try {
    		let objSurvey;
    		if(sql) {
    			objSurvey = await models.sequelize.surveys.findOne({where: { neither_text: neitherText }});
    			if (objSurvey) {
    				objSurvey = await models.sequelize.surveys.update(updateSurvey, { where: { neither_text: neitherText } });
    			}
    		} else {
    			objSurvey = await models.mongoose.surveys.findOneAndUpdate({neither_text: neitherText}, {$set: updateSurvey}, {new: true});
    		}
    		return objSurvey;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyByDissatisfiedText(dissatisfiedText, updateSurvey) {
    	try {
    		let objSurvey;
    		if(sql) {
    			objSurvey = await models.sequelize.surveys.findOne({where: { dissatisfied_text: dissatisfiedText }});
    			if (objSurvey) {
    				objSurvey = await models.sequelize.surveys.update(updateSurvey, { where: { dissatisfied_text: dissatisfiedText } });
    			}
    		} else {
    			objSurvey = await models.mongoose.surveys.findOneAndUpdate({dissatisfied_text: dissatisfiedText}, {$set: updateSurvey}, {new: true});
    		}
    		return objSurvey;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyByDescription(description, updateSurvey) {
    	try {
    		let objSurvey;
    		if(sql) {
    			objSurvey = await models.sequelize.surveys.findOne({where: { description: description }});
    			if (objSurvey) {
    				objSurvey = await models.sequelize.surveys.update(updateSurvey, { where: { description: description } });
    			}
    		} else {
    			objSurvey = await models.mongoose.surveys.findOneAndUpdate({description: description}, {$set: updateSurvey}, {new: true});
    		}
    		return objSurvey;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyByDateEntered(dateEntered, updateSurvey) {
    	try {
    		let objSurvey;
    		if(sql) {
    			objSurvey = await models.sequelize.surveys.findOne({where: { date_entered: dateEntered }});
    			if (objSurvey) {
    				objSurvey = await models.sequelize.surveys.update(updateSurvey, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objSurvey = await models.mongoose.surveys.findOneAndUpdate({date_entered: dateEntered}, {$set: updateSurvey}, {new: true});
    		}
    		return objSurvey;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyByDateModified(dateModified, updateSurvey) {
    	try {
    		let objSurvey;
    		if(sql) {
    			objSurvey = await models.sequelize.surveys.findOne({where: { date_modified: dateModified }});
    			if (objSurvey) {
    				objSurvey = await models.sequelize.surveys.update(updateSurvey, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objSurvey = await models.mongoose.surveys.findOneAndUpdate({date_modified: dateModified}, {$set: updateSurvey}, {new: true});
    		}
    		return objSurvey;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyByModifiedUserId(modifiedUserId, updateSurvey) {
    	try {
    		let objSurvey;
    		if(sql) {
    			objSurvey = await models.sequelize.surveys.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objSurvey) {
    				objSurvey = await models.sequelize.surveys.update(updateSurvey, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objSurvey = await models.mongoose.surveys.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateSurvey}, {new: true});
    		}
    		return objSurvey;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyByCreatedBy(createdBy, updateSurvey) {
    	try {
    		let objSurvey;
    		if(sql) {
    			objSurvey = await models.sequelize.surveys.findOne({where: { created_by: createdBy }});
    			if (objSurvey) {
    				objSurvey = await models.sequelize.surveys.update(updateSurvey, { where: { created_by: createdBy } });
    			}
    		} else {
    			objSurvey = await models.mongoose.surveys.findOneAndUpdate({created_by: createdBy}, {$set: updateSurvey}, {new: true});
    		}
    		return objSurvey;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyByAssignedUserId(assignedUserId, updateSurvey) {
    	try {
    		let objSurvey;
    		if(sql) {
    			objSurvey = await models.sequelize.surveys.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objSurvey) {
    				objSurvey = await models.sequelize.surveys.update(updateSurvey, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objSurvey = await models.mongoose.surveys.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateSurvey}, {new: true});
    		}
    		return objSurvey;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = SurveyService;
//</es-section>
