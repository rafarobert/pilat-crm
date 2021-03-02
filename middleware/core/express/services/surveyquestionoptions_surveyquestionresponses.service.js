/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:33 GMT-0400 (Bolivia Time)
 * Time: 14:1:33
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:33 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:33
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

class SurveyquestionoptionSurveyquestionresponseService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllSurveyquestionoptionsSurveyquestionresponses(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.surveyquestionoptionsSurveyquestionresponses.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.surveyquestionoptionsSurveyquestionresponses.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllSurveyquestionoptionsSurveyquestionresponses(select = []) {
		try {
			if(sql) {
				return await models.sequelize.surveyquestionoptionsSurveyquestionresponses.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.surveyquestionoptionsSurveyquestionresponses.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addSurveyquestionoptionSurveyquestionresponse(newSurveyquestionoptionSurveyquestionresponse) {
		try {
			let objSurveyquestionoptionSurveyquestionresponse;
			if(util.PrimaryKeyTypeIsString(models.sequelize.surveyquestionoptionsSurveyquestionresponses.primaryKeys.id.type.toString())) {
			    newSurveyquestionoptionSurveyquestionresponse.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objSurveyquestionoptionSurveyquestionresponse = await models.sequelize.surveyquestionoptionsSurveyquestionresponses.create(newSurveyquestionoptionSurveyquestionresponse);
			} else {
				objSurveyquestionoptionSurveyquestionresponse = new models.mongoose.surveyquestionoptionsSurveyquestionresponses(newSurveyquestionoptionSurveyquestionresponse);
				await objSurveyquestionoptionSurveyquestionresponse.save();
			}
			return objSurveyquestionoptionSurveyquestionresponse;
		} catch (error) {
			throw error;
		}
	}

	static async updateSurveyquestionoptionSurveyquestionresponse(id, updateSurveyquestionoptionSurveyquestionresponse) {
		try {
			let objSurveyquestionoptionSurveyquestionresponse;
			if(sql) {
				objSurveyquestionoptionSurveyquestionresponse = await models.sequelize.surveyquestionoptionsSurveyquestionresponses.findOne({where: { id: util.String(id) }});
				if (objSurveyquestionoptionSurveyquestionresponse) {
					await models.sequelize.surveyquestionoptionsSurveyquestionresponses.update(updateSurveyquestionoptionSurveyquestionresponse, { where: { id: util.String(id) } });
					objSurveyquestionoptionSurveyquestionresponse = await models.sequelize.surveyquestionoptionsSurveyquestionresponses.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateSurveyquestionoptionSurveyquestionresponse._id;
				objSurveyquestionoptionSurveyquestionresponse = await models.mongoose.surveyquestionoptionsSurveyquestionresponses.findOneAndUpdate({id:id}, {$set: updateSurveyquestionoptionSurveyquestionresponse}, {new: true});
			}
			return objSurveyquestionoptionSurveyquestionresponse;
		} catch (error) {
			throw error;
		}
	}

	static async getASurveyquestionoptionSurveyquestionresponse(id, query) {
		try {
			let objSurveyquestionoptionSurveyquestionresponse;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objSurveyquestionoptionSurveyquestionresponse = await models.sequelize.surveyquestionoptionsSurveyquestionresponses.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objSurveyquestionoptionSurveyquestionresponse = await models.mongoose.surveyquestionoptionsSurveyquestionresponses.find({id:util.String(id)}).select(query.select);
			}
			return objSurveyquestionoptionSurveyquestionresponse;
		} catch (error) {
			throw error;
		}
	}

	static async deleteSurveyquestionoptionSurveyquestionresponse(id) {
		try {
			let objSurveyquestionoptionSurveyquestionresponse;
			if(sql) {
				objSurveyquestionoptionSurveyquestionresponse = await models.sequelize.surveyquestionoptionsSurveyquestionresponses.findOne({ where: { id: util.String(id) } });
				if (objSurveyquestionoptionSurveyquestionresponse) {
					await models.sequelize.surveyquestionoptionsSurveyquestionresponses.destroy({where: { id: util.String(id) }});
				}
			} else {
				objSurveyquestionoptionSurveyquestionresponse = await models.mongoose.surveyquestionoptionsSurveyquestionresponses.deleteOne({id:util.String(id)});
			}
			return objSurveyquestionoptionSurveyquestionresponse;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objSurveyquestionoptionSurveyquestionresponse;
    		if(sql) {
    			objSurveyquestionoptionSurveyquestionresponse = await models.sequelize.surveyquestionoptionsSurveyquestionresponses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objSurveyquestionoptionSurveyquestionresponse = await models.mongoose.surveyquestionoptionsSurveyquestionresponses.findOne({id: id});
    		}
    		return objSurveyquestionoptionSurveyquestionresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objSurveyquestionoptionSurveyquestionresponse;
    		if(sql) {
    			objSurveyquestionoptionSurveyquestionresponse = await models.sequelize.surveyquestionoptionsSurveyquestionresponses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objSurveyquestionoptionSurveyquestionresponse = await models.mongoose.surveyquestionoptionsSurveyquestionresponses.findOne({deleted: deleted});
    		}
    		return objSurveyquestionoptionSurveyquestionresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySurveyq72c7optionsIda(surveyq72c7optionsIda, query = {}) {
    	try {
    		let objSurveyquestionoptionSurveyquestionresponse;
    		if(sql) {
    			objSurveyquestionoptionSurveyquestionresponse = await models.sequelize.surveyquestionoptionsSurveyquestionresponses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { surveyq72c7options_ida: surveyq72c7optionsIda },
    			});
    		} else {
    			objSurveyquestionoptionSurveyquestionresponse = await models.mongoose.surveyquestionoptionsSurveyquestionresponses.findOne({surveyq72c7options_ida: surveyq72c7optionsIda});
    		}
    		return objSurveyquestionoptionSurveyquestionresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySurveyq10d4sponsesIdb(surveyq10d4sponsesIdb, query = {}) {
    	try {
    		let objSurveyquestionoptionSurveyquestionresponse;
    		if(sql) {
    			objSurveyquestionoptionSurveyquestionresponse = await models.sequelize.surveyquestionoptionsSurveyquestionresponses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { surveyq10d4sponses_idb: surveyq10d4sponsesIdb },
    			});
    		} else {
    			objSurveyquestionoptionSurveyquestionresponse = await models.mongoose.surveyquestionoptionsSurveyquestionresponses.findOne({surveyq10d4sponses_idb: surveyq10d4sponsesIdb});
    		}
    		return objSurveyquestionoptionSurveyquestionresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objSurveyquestionoptionSurveyquestionresponse;
    		if(sql) {
    			objSurveyquestionoptionSurveyquestionresponse = await models.sequelize.surveyquestionoptionsSurveyquestionresponses.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objSurveyquestionoptionSurveyquestionresponse = await models.mongoose.surveyquestionoptionsSurveyquestionresponses.findOne({date_modified: dateModified});
    		}
    		return objSurveyquestionoptionSurveyquestionresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateSurveyquestionoptionSurveyquestionresponseById(id, updateSurveyquestionoptionSurveyquestionresponse) {
    	try {
    		let objSurveyquestionoptionSurveyquestionresponse;
    		if(sql) {
    			objSurveyquestionoptionSurveyquestionresponse = await models.sequelize.surveyquestionoptionsSurveyquestionresponses.findOne({where: { id: id }});
    			if (objSurveyquestionoptionSurveyquestionresponse) {
    				objSurveyquestionoptionSurveyquestionresponse = await models.sequelize.surveyquestionoptionsSurveyquestionresponses.update(updateSurveyquestionoptionSurveyquestionresponse, { where: { id: id } });
    			}
    		} else {
    			objSurveyquestionoptionSurveyquestionresponse = await models.mongoose.surveyquestionoptionsSurveyquestionresponses.findOneAndUpdate({id: id}, {$set: updateSurveyquestionoptionSurveyquestionresponse}, {new: true});
    		}
    		return objSurveyquestionoptionSurveyquestionresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionoptionSurveyquestionresponseByDeleted(deleted, updateSurveyquestionoptionSurveyquestionresponse) {
    	try {
    		let objSurveyquestionoptionSurveyquestionresponse;
    		if(sql) {
    			objSurveyquestionoptionSurveyquestionresponse = await models.sequelize.surveyquestionoptionsSurveyquestionresponses.findOne({where: { deleted: deleted }});
    			if (objSurveyquestionoptionSurveyquestionresponse) {
    				objSurveyquestionoptionSurveyquestionresponse = await models.sequelize.surveyquestionoptionsSurveyquestionresponses.update(updateSurveyquestionoptionSurveyquestionresponse, { where: { deleted: deleted } });
    			}
    		} else {
    			objSurveyquestionoptionSurveyquestionresponse = await models.mongoose.surveyquestionoptionsSurveyquestionresponses.findOneAndUpdate({deleted: deleted}, {$set: updateSurveyquestionoptionSurveyquestionresponse}, {new: true});
    		}
    		return objSurveyquestionoptionSurveyquestionresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionoptionSurveyquestionresponseBySurveyq72c7optionsIda(surveyq72c7optionsIda, updateSurveyquestionoptionSurveyquestionresponse) {
    	try {
    		let objSurveyquestionoptionSurveyquestionresponse;
    		if(sql) {
    			objSurveyquestionoptionSurveyquestionresponse = await models.sequelize.surveyquestionoptionsSurveyquestionresponses.findOne({where: { surveyq72c7options_ida: surveyq72c7optionsIda }});
    			if (objSurveyquestionoptionSurveyquestionresponse) {
    				objSurveyquestionoptionSurveyquestionresponse = await models.sequelize.surveyquestionoptionsSurveyquestionresponses.update(updateSurveyquestionoptionSurveyquestionresponse, { where: { surveyq72c7options_ida: surveyq72c7optionsIda } });
    			}
    		} else {
    			objSurveyquestionoptionSurveyquestionresponse = await models.mongoose.surveyquestionoptionsSurveyquestionresponses.findOneAndUpdate({surveyq72c7options_ida: surveyq72c7optionsIda}, {$set: updateSurveyquestionoptionSurveyquestionresponse}, {new: true});
    		}
    		return objSurveyquestionoptionSurveyquestionresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionoptionSurveyquestionresponseBySurveyq10d4sponsesIdb(surveyq10d4sponsesIdb, updateSurveyquestionoptionSurveyquestionresponse) {
    	try {
    		let objSurveyquestionoptionSurveyquestionresponse;
    		if(sql) {
    			objSurveyquestionoptionSurveyquestionresponse = await models.sequelize.surveyquestionoptionsSurveyquestionresponses.findOne({where: { surveyq10d4sponses_idb: surveyq10d4sponsesIdb }});
    			if (objSurveyquestionoptionSurveyquestionresponse) {
    				objSurveyquestionoptionSurveyquestionresponse = await models.sequelize.surveyquestionoptionsSurveyquestionresponses.update(updateSurveyquestionoptionSurveyquestionresponse, { where: { surveyq10d4sponses_idb: surveyq10d4sponsesIdb } });
    			}
    		} else {
    			objSurveyquestionoptionSurveyquestionresponse = await models.mongoose.surveyquestionoptionsSurveyquestionresponses.findOneAndUpdate({surveyq10d4sponses_idb: surveyq10d4sponsesIdb}, {$set: updateSurveyquestionoptionSurveyquestionresponse}, {new: true});
    		}
    		return objSurveyquestionoptionSurveyquestionresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSurveyquestionoptionSurveyquestionresponseByDateModified(dateModified, updateSurveyquestionoptionSurveyquestionresponse) {
    	try {
    		let objSurveyquestionoptionSurveyquestionresponse;
    		if(sql) {
    			objSurveyquestionoptionSurveyquestionresponse = await models.sequelize.surveyquestionoptionsSurveyquestionresponses.findOne({where: { date_modified: dateModified }});
    			if (objSurveyquestionoptionSurveyquestionresponse) {
    				objSurveyquestionoptionSurveyquestionresponse = await models.sequelize.surveyquestionoptionsSurveyquestionresponses.update(updateSurveyquestionoptionSurveyquestionresponse, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objSurveyquestionoptionSurveyquestionresponse = await models.mongoose.surveyquestionoptionsSurveyquestionresponses.findOneAndUpdate({date_modified: dateModified}, {$set: updateSurveyquestionoptionSurveyquestionresponse}, {new: true});
    		}
    		return objSurveyquestionoptionSurveyquestionresponse;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = SurveyquestionoptionSurveyquestionresponseService;
//</es-section>
