/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:51 GMT-0400 (Bolivia Time)
 * Time: 4:43:51
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:51 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:51
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

class ProjectCaseService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllProjectsCases(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.projectsCases.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.projectsCases.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllProjectsCases(select = []) {
		try {
			if(sql) {
				return await models.sequelize.projectsCases.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.projectsCases.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addProjectCase(newProjectCase) {
		try {
			let objProjectCase;
			if(util.PrimaryKeyTypeIsString(models.sequelize.projectsCases.primaryKeys.id.type.toString())) {
			    newProjectCase.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objProjectCase = await models.sequelize.projectsCases.create(newProjectCase);
			} else {
				objProjectCase = new models.mongoose.projectsCases(newProjectCase);
				await objProjectCase.save();
			}
			return objProjectCase;
		} catch (error) {
			throw error;
		}
	}

	static async updateProjectCase(id, updateProjectCase) {
		try {
			let objProjectCase;
			if(sql) {
				objProjectCase = await models.sequelize.projectsCases.findOne({where: { id: util.String(id) }});
				if (objProjectCase) {
					await models.sequelize.projectsCases.update(updateProjectCase, { where: { id: util.String(id) } });
					objProjectCase = await models.sequelize.projectsCases.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateProjectCase._id;
				objProjectCase = await models.mongoose.projectsCases.findOneAndUpdate({id:id}, {$set: updateProjectCase}, {new: true});
			}
			return objProjectCase;
		} catch (error) {
			throw error;
		}
	}

	static async getAProjectCase(id, query) {
		try {
			let objProjectCase;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objProjectCase = await models.sequelize.projectsCases.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objProjectCase = await models.mongoose.projectsCases.find({id:util.String(id)}).select(query.select);
			}
			return objProjectCase;
		} catch (error) {
			throw error;
		}
	}

	static async deleteProjectCase(id) {
		try {
			let objProjectCase;
			if(sql) {
				objProjectCase = await models.sequelize.projectsCases.findOne({ where: { id: util.String(id) } });
				if (objProjectCase) {
					await models.sequelize.projectsCases.destroy({where: { id: util.String(id) }});
				}
			} else {
				objProjectCase = await models.mongoose.projectsCases.deleteOne({id:util.String(id)});
			}
			return objProjectCase;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objProjectCase;
    		if(sql) {
    			objProjectCase = await models.sequelize.projectsCases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objProjectCase = await models.mongoose.projectsCases.findOne({id: id});
    		}
    		return objProjectCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objProjectCase;
    		if(sql) {
    			objProjectCase = await models.sequelize.projectsCases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objProjectCase = await models.mongoose.projectsCases.findOne({deleted: deleted});
    		}
    		return objProjectCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCaseId(caseId, query = {}) {
    	try {
    		let objProjectCase;
    		if(sql) {
    			objProjectCase = await models.sequelize.projectsCases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { case_id: caseId },
    			});
    		} else {
    			objProjectCase = await models.mongoose.projectsCases.findOne({case_id: caseId});
    		}
    		return objProjectCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByProjectId(projectId, query = {}) {
    	try {
    		let objProjectCase;
    		if(sql) {
    			objProjectCase = await models.sequelize.projectsCases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { project_id: projectId },
    			});
    		} else {
    			objProjectCase = await models.mongoose.projectsCases.findOne({project_id: projectId});
    		}
    		return objProjectCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objProjectCase;
    		if(sql) {
    			objProjectCase = await models.sequelize.projectsCases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objProjectCase = await models.mongoose.projectsCases.findOne({date_modified: dateModified});
    		}
    		return objProjectCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateProjectCaseById(id, updateProjectCase) {
    	try {
    		let objProjectCase;
    		if(sql) {
    			objProjectCase = await models.sequelize.projectsCases.findOne({where: { id: id }});
    			if (objProjectCase) {
    				objProjectCase = await models.sequelize.projectsCases.update(updateProjectCase, { where: { id: id } });
    			}
    		} else {
    			objProjectCase = await models.mongoose.projectsCases.findOneAndUpdate({id: id}, {$set: updateProjectCase}, {new: true});
    		}
    		return objProjectCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectCaseByDeleted(deleted, updateProjectCase) {
    	try {
    		let objProjectCase;
    		if(sql) {
    			objProjectCase = await models.sequelize.projectsCases.findOne({where: { deleted: deleted }});
    			if (objProjectCase) {
    				objProjectCase = await models.sequelize.projectsCases.update(updateProjectCase, { where: { deleted: deleted } });
    			}
    		} else {
    			objProjectCase = await models.mongoose.projectsCases.findOneAndUpdate({deleted: deleted}, {$set: updateProjectCase}, {new: true});
    		}
    		return objProjectCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectCaseByCaseId(caseId, updateProjectCase) {
    	try {
    		let objProjectCase;
    		if(sql) {
    			objProjectCase = await models.sequelize.projectsCases.findOne({where: { case_id: caseId }});
    			if (objProjectCase) {
    				objProjectCase = await models.sequelize.projectsCases.update(updateProjectCase, { where: { case_id: caseId } });
    			}
    		} else {
    			objProjectCase = await models.mongoose.projectsCases.findOneAndUpdate({case_id: caseId}, {$set: updateProjectCase}, {new: true});
    		}
    		return objProjectCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectCaseByProjectId(projectId, updateProjectCase) {
    	try {
    		let objProjectCase;
    		if(sql) {
    			objProjectCase = await models.sequelize.projectsCases.findOne({where: { project_id: projectId }});
    			if (objProjectCase) {
    				objProjectCase = await models.sequelize.projectsCases.update(updateProjectCase, { where: { project_id: projectId } });
    			}
    		} else {
    			objProjectCase = await models.mongoose.projectsCases.findOneAndUpdate({project_id: projectId}, {$set: updateProjectCase}, {new: true});
    		}
    		return objProjectCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectCaseByDateModified(dateModified, updateProjectCase) {
    	try {
    		let objProjectCase;
    		if(sql) {
    			objProjectCase = await models.sequelize.projectsCases.findOne({where: { date_modified: dateModified }});
    			if (objProjectCase) {
    				objProjectCase = await models.sequelize.projectsCases.update(updateProjectCase, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objProjectCase = await models.mongoose.projectsCases.findOneAndUpdate({date_modified: dateModified}, {$set: updateProjectCase}, {new: true});
    		}
    		return objProjectCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = ProjectCaseService;
//</es-section>
