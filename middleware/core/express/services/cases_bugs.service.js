/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:42:43 GMT-0400 (Bolivia Time)
 * Time: 4:42:43
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:42:43 GMT-0400 (Bolivia Time)
 * Last time updated: 4:42:43
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

class CaseBugService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllCasesBugs(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.casesBugs.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.casesBugs.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllCasesBugs(select = []) {
		try {
			if(sql) {
				return await models.sequelize.casesBugs.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.casesBugs.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addCaseBug(newCaseBug) {
		try {
			let objCaseBug;
			if(util.PrimaryKeyTypeIsString(models.sequelize.casesBugs.primaryKeys.id.type.toString())) {
			    newCaseBug.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objCaseBug = await models.sequelize.casesBugs.create(newCaseBug);
			} else {
				objCaseBug = new models.mongoose.casesBugs(newCaseBug);
				await objCaseBug.save();
			}
			return objCaseBug;
		} catch (error) {
			throw error;
		}
	}

	static async updateCaseBug(id, updateCaseBug) {
		try {
			let objCaseBug;
			if(sql) {
				objCaseBug = await models.sequelize.casesBugs.findOne({where: { id: util.String(id) }});
				if (objCaseBug) {
					await models.sequelize.casesBugs.update(updateCaseBug, { where: { id: util.String(id) } });
					objCaseBug = await models.sequelize.casesBugs.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateCaseBug._id;
				objCaseBug = await models.mongoose.casesBugs.findOneAndUpdate({id:id}, {$set: updateCaseBug}, {new: true});
			}
			return objCaseBug;
		} catch (error) {
			throw error;
		}
	}

	static async getACaseBug(id, query) {
		try {
			let objCaseBug;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objCaseBug = await models.sequelize.casesBugs.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objCaseBug = await models.mongoose.casesBugs.find({id:util.String(id)}).select(query.select);
			}
			return objCaseBug;
		} catch (error) {
			throw error;
		}
	}

	static async deleteCaseBug(id) {
		try {
			let objCaseBug;
			if(sql) {
				objCaseBug = await models.sequelize.casesBugs.findOne({ where: { id: util.String(id) } });
				if (objCaseBug) {
					await models.sequelize.casesBugs.destroy({where: { id: util.String(id) }});
				}
			} else {
				objCaseBug = await models.mongoose.casesBugs.deleteOne({id:util.String(id)});
			}
			return objCaseBug;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objCaseBug;
    		if(sql) {
    			objCaseBug = await models.sequelize.casesBugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objCaseBug = await models.mongoose.casesBugs.findOne({id: id});
    		}
    		return objCaseBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objCaseBug;
    		if(sql) {
    			objCaseBug = await models.sequelize.casesBugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objCaseBug = await models.mongoose.casesBugs.findOne({deleted: deleted});
    		}
    		return objCaseBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCaseId(caseId, query = {}) {
    	try {
    		let objCaseBug;
    		if(sql) {
    			objCaseBug = await models.sequelize.casesBugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { case_id: caseId },
    			});
    		} else {
    			objCaseBug = await models.mongoose.casesBugs.findOne({case_id: caseId});
    		}
    		return objCaseBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBugId(bugId, query = {}) {
    	try {
    		let objCaseBug;
    		if(sql) {
    			objCaseBug = await models.sequelize.casesBugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { bug_id: bugId },
    			});
    		} else {
    			objCaseBug = await models.mongoose.casesBugs.findOne({bug_id: bugId});
    		}
    		return objCaseBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objCaseBug;
    		if(sql) {
    			objCaseBug = await models.sequelize.casesBugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objCaseBug = await models.mongoose.casesBugs.findOne({date_modified: dateModified});
    		}
    		return objCaseBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateCaseBugById(id, updateCaseBug) {
    	try {
    		let objCaseBug;
    		if(sql) {
    			objCaseBug = await models.sequelize.casesBugs.findOne({where: { id: id }});
    			if (objCaseBug) {
    				objCaseBug = await models.sequelize.casesBugs.update(updateCaseBug, { where: { id: id } });
    			}
    		} else {
    			objCaseBug = await models.mongoose.casesBugs.findOneAndUpdate({id: id}, {$set: updateCaseBug}, {new: true});
    		}
    		return objCaseBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCaseBugByDeleted(deleted, updateCaseBug) {
    	try {
    		let objCaseBug;
    		if(sql) {
    			objCaseBug = await models.sequelize.casesBugs.findOne({where: { deleted: deleted }});
    			if (objCaseBug) {
    				objCaseBug = await models.sequelize.casesBugs.update(updateCaseBug, { where: { deleted: deleted } });
    			}
    		} else {
    			objCaseBug = await models.mongoose.casesBugs.findOneAndUpdate({deleted: deleted}, {$set: updateCaseBug}, {new: true});
    		}
    		return objCaseBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCaseBugByCaseId(caseId, updateCaseBug) {
    	try {
    		let objCaseBug;
    		if(sql) {
    			objCaseBug = await models.sequelize.casesBugs.findOne({where: { case_id: caseId }});
    			if (objCaseBug) {
    				objCaseBug = await models.sequelize.casesBugs.update(updateCaseBug, { where: { case_id: caseId } });
    			}
    		} else {
    			objCaseBug = await models.mongoose.casesBugs.findOneAndUpdate({case_id: caseId}, {$set: updateCaseBug}, {new: true});
    		}
    		return objCaseBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCaseBugByBugId(bugId, updateCaseBug) {
    	try {
    		let objCaseBug;
    		if(sql) {
    			objCaseBug = await models.sequelize.casesBugs.findOne({where: { bug_id: bugId }});
    			if (objCaseBug) {
    				objCaseBug = await models.sequelize.casesBugs.update(updateCaseBug, { where: { bug_id: bugId } });
    			}
    		} else {
    			objCaseBug = await models.mongoose.casesBugs.findOneAndUpdate({bug_id: bugId}, {$set: updateCaseBug}, {new: true});
    		}
    		return objCaseBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCaseBugByDateModified(dateModified, updateCaseBug) {
    	try {
    		let objCaseBug;
    		if(sql) {
    			objCaseBug = await models.sequelize.casesBugs.findOne({where: { date_modified: dateModified }});
    			if (objCaseBug) {
    				objCaseBug = await models.sequelize.casesBugs.update(updateCaseBug, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objCaseBug = await models.mongoose.casesBugs.findOneAndUpdate({date_modified: dateModified}, {$set: updateCaseBug}, {new: true});
    		}
    		return objCaseBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = CaseBugService;
//</es-section>
