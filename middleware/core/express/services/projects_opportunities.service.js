/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:19 GMT-0400 (Bolivia Time)
 * Time: 18:38:19
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:19 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:19
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

class ProjectOpportunityService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllProjectsOpportunities(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.projectsOpportunities.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.projectsOpportunities.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllProjectsOpportunities(select = []) {
		try {
			if(sql) {
				return await models.sequelize.projectsOpportunities.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.projectsOpportunities.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addProjectOpportunity(newProjectOpportunity) {
		try {
			let objProjectOpportunity;
			if(util.PrimaryKeyTypeIsString(models.sequelize.projectsOpportunities.primaryKeys.id.type.toString())) {
			    newProjectOpportunity.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objProjectOpportunity = await models.sequelize.projectsOpportunities.create(newProjectOpportunity);
			} else {
				objProjectOpportunity = new models.mongoose.projectsOpportunities(newProjectOpportunity);
				await objProjectOpportunity.save();
			}
			return objProjectOpportunity;
		} catch (error) {
			throw error;
		}
	}

	static async updateProjectOpportunity(id, updateProjectOpportunity) {
		try {
			let objProjectOpportunity;
			if(sql) {
				objProjectOpportunity = await models.sequelize.projectsOpportunities.findOne({where: { id: util.String(id) }});
				if (objProjectOpportunity) {
					await models.sequelize.projectsOpportunities.update(updateProjectOpportunity, { where: { id: util.String(id) } });
					objProjectOpportunity = await models.sequelize.projectsOpportunities.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateProjectOpportunity._id;
				objProjectOpportunity = await models.mongoose.projectsOpportunities.findOneAndUpdate({id:id}, {$set: updateProjectOpportunity}, {new: true});
			}
			return objProjectOpportunity;
		} catch (error) {
			throw error;
		}
	}

	static async getAProjectOpportunity(id, query) {
		try {
			let objProjectOpportunity;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objProjectOpportunity = await models.sequelize.projectsOpportunities.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objProjectOpportunity = await models.mongoose.projectsOpportunities.find({id:util.String(id)}).select(query.select);
			}
			return objProjectOpportunity;
		} catch (error) {
			throw error;
		}
	}

	static async deleteProjectOpportunity(id) {
		try {
			let objProjectOpportunity;
			if(sql) {
				objProjectOpportunity = await models.sequelize.projectsOpportunities.findOne({ where: { id: util.String(id) } });
				if (objProjectOpportunity) {
					await models.sequelize.projectsOpportunities.destroy({where: { id: util.String(id) }});
				}
			} else {
				objProjectOpportunity = await models.mongoose.projectsOpportunities.deleteOne({id:util.String(id)});
			}
			return objProjectOpportunity;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objProjectOpportunity;
    		if(sql) {
    			objProjectOpportunity = await models.sequelize.projectsOpportunities.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objProjectOpportunity = await models.mongoose.projectsOpportunities.findOne({id: id});
    		}
    		return objProjectOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objProjectOpportunity;
    		if(sql) {
    			objProjectOpportunity = await models.sequelize.projectsOpportunities.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objProjectOpportunity = await models.mongoose.projectsOpportunities.findOne({deleted: deleted});
    		}
    		return objProjectOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByOpportunityId(opportunityId, query = {}) {
    	try {
    		let objProjectOpportunity;
    		if(sql) {
    			objProjectOpportunity = await models.sequelize.projectsOpportunities.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { opportunity_id: opportunityId },
    			});
    		} else {
    			objProjectOpportunity = await models.mongoose.projectsOpportunities.findOne({opportunity_id: opportunityId});
    		}
    		return objProjectOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByProjectId(projectId, query = {}) {
    	try {
    		let objProjectOpportunity;
    		if(sql) {
    			objProjectOpportunity = await models.sequelize.projectsOpportunities.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { project_id: projectId },
    			});
    		} else {
    			objProjectOpportunity = await models.mongoose.projectsOpportunities.findOne({project_id: projectId});
    		}
    		return objProjectOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objProjectOpportunity;
    		if(sql) {
    			objProjectOpportunity = await models.sequelize.projectsOpportunities.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objProjectOpportunity = await models.mongoose.projectsOpportunities.findOne({date_modified: dateModified});
    		}
    		return objProjectOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateProjectOpportunityById(id, updateProjectOpportunity) {
    	try {
    		let objProjectOpportunity;
    		if(sql) {
    			objProjectOpportunity = await models.sequelize.projectsOpportunities.findOne({where: { id: id }});
    			if (objProjectOpportunity) {
    				objProjectOpportunity = await models.sequelize.projectsOpportunities.update(updateProjectOpportunity, { where: { id: id } });
    			}
    		} else {
    			objProjectOpportunity = await models.mongoose.projectsOpportunities.findOneAndUpdate({id: id}, {$set: updateProjectOpportunity}, {new: true});
    		}
    		return objProjectOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectOpportunityByDeleted(deleted, updateProjectOpportunity) {
    	try {
    		let objProjectOpportunity;
    		if(sql) {
    			objProjectOpportunity = await models.sequelize.projectsOpportunities.findOne({where: { deleted: deleted }});
    			if (objProjectOpportunity) {
    				objProjectOpportunity = await models.sequelize.projectsOpportunities.update(updateProjectOpportunity, { where: { deleted: deleted } });
    			}
    		} else {
    			objProjectOpportunity = await models.mongoose.projectsOpportunities.findOneAndUpdate({deleted: deleted}, {$set: updateProjectOpportunity}, {new: true});
    		}
    		return objProjectOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectOpportunityByOpportunityId(opportunityId, updateProjectOpportunity) {
    	try {
    		let objProjectOpportunity;
    		if(sql) {
    			objProjectOpportunity = await models.sequelize.projectsOpportunities.findOne({where: { opportunity_id: opportunityId }});
    			if (objProjectOpportunity) {
    				objProjectOpportunity = await models.sequelize.projectsOpportunities.update(updateProjectOpportunity, { where: { opportunity_id: opportunityId } });
    			}
    		} else {
    			objProjectOpportunity = await models.mongoose.projectsOpportunities.findOneAndUpdate({opportunity_id: opportunityId}, {$set: updateProjectOpportunity}, {new: true});
    		}
    		return objProjectOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectOpportunityByProjectId(projectId, updateProjectOpportunity) {
    	try {
    		let objProjectOpportunity;
    		if(sql) {
    			objProjectOpportunity = await models.sequelize.projectsOpportunities.findOne({where: { project_id: projectId }});
    			if (objProjectOpportunity) {
    				objProjectOpportunity = await models.sequelize.projectsOpportunities.update(updateProjectOpportunity, { where: { project_id: projectId } });
    			}
    		} else {
    			objProjectOpportunity = await models.mongoose.projectsOpportunities.findOneAndUpdate({project_id: projectId}, {$set: updateProjectOpportunity}, {new: true});
    		}
    		return objProjectOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectOpportunityByDateModified(dateModified, updateProjectOpportunity) {
    	try {
    		let objProjectOpportunity;
    		if(sql) {
    			objProjectOpportunity = await models.sequelize.projectsOpportunities.findOne({where: { date_modified: dateModified }});
    			if (objProjectOpportunity) {
    				objProjectOpportunity = await models.sequelize.projectsOpportunities.update(updateProjectOpportunity, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objProjectOpportunity = await models.mongoose.projectsOpportunities.findOneAndUpdate({date_modified: dateModified}, {$set: updateProjectOpportunity}, {new: true});
    		}
    		return objProjectOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = ProjectOpportunityService;
//</es-section>
