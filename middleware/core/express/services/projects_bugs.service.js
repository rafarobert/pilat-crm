/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:30 GMT-0400 (Bolivia Time)
 * Time: 14:57:30
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:30 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:30
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

class ProjectBugService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllProjectsBugs(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.projectsBugs.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['_id','ASC']],
                });
			} else {
				return await models.mongoose.projectsBugs.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllProjectsBugs(select = []) {
		try {
			if(sql) {
				return await models.sequelize.projectsBugs.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.projectsBugs.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addProjectBug(newProjectBug) {
		try {
			let objProjectBug;
			if(util.PrimaryKeyTypeIsString(models.sequelize.projectsBugs.primaryKeys.id.type.toString())) {
			    newProjectBug.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objProjectBug = await models.sequelize.projectsBugs.create(newProjectBug);
			} else {
				objProjectBug = new models.mongoose.projectsBugs(newProjectBug);
				await objProjectBug.save();
			}
			return objProjectBug;
		} catch (error) {
			throw error;
		}
	}

	static async updateProjectBug(id, updateProjectBug) {
		try {
			let objProjectBug;
			if(sql) {
				objProjectBug = await models.sequelize.projectsBugs.findOne({where: { id: util.String(id) }});
				if (objProjectBug) {
					await models.sequelize.projectsBugs.update(updateProjectBug, { where: { id: util.String(id) } });
					objProjectBug = await models.sequelize.projectsBugs.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateProjectBug._id;
				objProjectBug = await models.mongoose.projectsBugs.findOneAndUpdate({id:id}, {$set: updateProjectBug}, {new: true});
			}
			return objProjectBug;
		} catch (error) {
			throw error;
		}
	}

	static async getAProjectBug(id, query) {
		try {
			let objProjectBug;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objProjectBug = await models.sequelize.projectsBugs.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objProjectBug = await models.mongoose.projectsBugs.find({id:util.String(id)}).select(query.select);
			}
			return objProjectBug;
		} catch (error) {
			throw error;
		}
	}

	static async deleteProjectBug(id) {
		try {
			let objProjectBug;
			if(sql) {
				objProjectBug = await models.sequelize.projectsBugs.findOne({ where: { id: util.String(id) } });
				if (objProjectBug) {
					await models.sequelize.projectsBugs.destroy({where: { id: util.String(id) }});
				}
			} else {
				objProjectBug = await models.mongoose.projectsBugs.deleteOne({id:util.String(id)});
			}
			return objProjectBug;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objProjectBug;
    		if(sql) {
    			objProjectBug = await models.sequelize.projectsBugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objProjectBug = await models.mongoose.projectsBugs.findOne({id: id});
    		}
    		return objProjectBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objProjectBug;
    		if(sql) {
    			objProjectBug = await models.sequelize.projectsBugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objProjectBug = await models.mongoose.projectsBugs.findOne({deleted: deleted});
    		}
    		return objProjectBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBugId(bugId, query = {}) {
    	try {
    		let objProjectBug;
    		if(sql) {
    			objProjectBug = await models.sequelize.projectsBugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { bug_id: bugId },
    			});
    		} else {
    			objProjectBug = await models.mongoose.projectsBugs.findOne({bug_id: bugId});
    		}
    		return objProjectBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByProjectId(projectId, query = {}) {
    	try {
    		let objProjectBug;
    		if(sql) {
    			objProjectBug = await models.sequelize.projectsBugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { project_id: projectId },
    			});
    		} else {
    			objProjectBug = await models.mongoose.projectsBugs.findOne({project_id: projectId});
    		}
    		return objProjectBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objProjectBug;
    		if(sql) {
    			objProjectBug = await models.sequelize.projectsBugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objProjectBug = await models.mongoose.projectsBugs.findOne({date_modified: dateModified});
    		}
    		return objProjectBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateProjectBugById(id, updateProjectBug) {
    	try {
    		let objProjectBug;
    		if(sql) {
    			objProjectBug = await models.sequelize.projectsBugs.findOne({where: { id: id }});
    			if (objProjectBug) {
    				objProjectBug = await models.sequelize.projectsBugs.update(updateProjectBug, { where: { id: id } });
    			}
    		} else {
    			objProjectBug = await models.mongoose.projectsBugs.findOneAndUpdate({id: id}, {$set: updateProjectBug}, {new: true});
    		}
    		return objProjectBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectBugByDeleted(deleted, updateProjectBug) {
    	try {
    		let objProjectBug;
    		if(sql) {
    			objProjectBug = await models.sequelize.projectsBugs.findOne({where: { deleted: deleted }});
    			if (objProjectBug) {
    				objProjectBug = await models.sequelize.projectsBugs.update(updateProjectBug, { where: { deleted: deleted } });
    			}
    		} else {
    			objProjectBug = await models.mongoose.projectsBugs.findOneAndUpdate({deleted: deleted}, {$set: updateProjectBug}, {new: true});
    		}
    		return objProjectBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectBugByBugId(bugId, updateProjectBug) {
    	try {
    		let objProjectBug;
    		if(sql) {
    			objProjectBug = await models.sequelize.projectsBugs.findOne({where: { bug_id: bugId }});
    			if (objProjectBug) {
    				objProjectBug = await models.sequelize.projectsBugs.update(updateProjectBug, { where: { bug_id: bugId } });
    			}
    		} else {
    			objProjectBug = await models.mongoose.projectsBugs.findOneAndUpdate({bug_id: bugId}, {$set: updateProjectBug}, {new: true});
    		}
    		return objProjectBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectBugByProjectId(projectId, updateProjectBug) {
    	try {
    		let objProjectBug;
    		if(sql) {
    			objProjectBug = await models.sequelize.projectsBugs.findOne({where: { project_id: projectId }});
    			if (objProjectBug) {
    				objProjectBug = await models.sequelize.projectsBugs.update(updateProjectBug, { where: { project_id: projectId } });
    			}
    		} else {
    			objProjectBug = await models.mongoose.projectsBugs.findOneAndUpdate({project_id: projectId}, {$set: updateProjectBug}, {new: true});
    		}
    		return objProjectBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectBugByDateModified(dateModified, updateProjectBug) {
    	try {
    		let objProjectBug;
    		if(sql) {
    			objProjectBug = await models.sequelize.projectsBugs.findOne({where: { date_modified: dateModified }});
    			if (objProjectBug) {
    				objProjectBug = await models.sequelize.projectsBugs.update(updateProjectBug, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objProjectBug = await models.mongoose.projectsBugs.findOneAndUpdate({date_modified: dateModified}, {$set: updateProjectBug}, {new: true});
    		}
    		return objProjectBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = ProjectBugService;
//</es-section>
