/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:29 GMT-0400 (Bolivia Time)
 * Time: 14:57:29
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:29 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:29
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

class ProjectService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllProject(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.project.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.project.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllProject(select = []) {
		try {
			if(sql) {
				return await models.sequelize.project.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.project.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addProject(newProject) {
		try {
			let objProject;
			if(util.PrimaryKeyTypeIsString(models.sequelize.project.primaryKeys.id.type.toString())) {
			    newProject.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objProject = await models.sequelize.project.create(newProject);
			} else {
				objProject = new models.mongoose.project(newProject);
				await objProject.save();
			}
			return objProject;
		} catch (error) {
			throw error;
		}
	}

	static async updateProject(id, updateProject) {
		try {
			let objProject;
			if(sql) {
				objProject = await models.sequelize.project.findOne({where: { id: util.Char(id) }});
				if (objProject) {
					await models.sequelize.project.update(updateProject, { where: { id: util.Char(id) } });
					objProject = await models.sequelize.project.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateProject._id;
				objProject = await models.mongoose.project.findOneAndUpdate({id:id}, {$set: updateProject}, {new: true});
			}
			return objProject;
		} catch (error) {
			throw error;
		}
	}

	static async getAProject(id, query) {
		try {
			let objProject;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objProject = await models.sequelize.project.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objProject = await models.mongoose.project.find({id:util.Char(id)}).select(query.select);
			}
			return objProject;
		} catch (error) {
			throw error;
		}
	}

	static async deleteProject(id) {
		try {
			let objProject;
			if(sql) {
				objProject = await models.sequelize.project.findOne({ where: { id: util.Char(id) } });
				if (objProject) {
					await models.sequelize.project.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objProject = await models.mongoose.project.deleteOne({id:util.Char(id)});
			}
			return objProject;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objProject;
    		if(sql) {
    			objProject = await models.sequelize.project.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objProject = await models.mongoose.project.findOne({id: id});
    		}
    		return objProject;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objProject;
    		if(sql) {
    			objProject = await models.sequelize.project.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objProject = await models.mongoose.project.findOne({deleted: deleted});
    		}
    		return objProject;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByOverrideBusinessHours(overrideBusinessHours, query = {}) {
    	try {
    		let objProject;
    		if(sql) {
    			objProject = await models.sequelize.project.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { override_business_hours: overrideBusinessHours },
    			});
    		} else {
    			objProject = await models.mongoose.project.findOne({override_business_hours: overrideBusinessHours});
    		}
    		return objProject;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objProject;
    		if(sql) {
    			objProject = await models.sequelize.project.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objProject = await models.mongoose.project.findOne({name: name});
    		}
    		return objProject;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByStatus(status, query = {}) {
    	try {
    		let objProject;
    		if(sql) {
    			objProject = await models.sequelize.project.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { status: status },
    			});
    		} else {
    			objProject = await models.mongoose.project.findOne({status: status});
    		}
    		return objProject;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPriority(priority, query = {}) {
    	try {
    		let objProject;
    		if(sql) {
    			objProject = await models.sequelize.project.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { priority: priority },
    			});
    		} else {
    			objProject = await models.mongoose.project.findOne({priority: priority});
    		}
    		return objProject;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objProject;
    		if(sql) {
    			objProject = await models.sequelize.project.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objProject = await models.mongoose.project.findOne({description: description});
    		}
    		return objProject;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objProject;
    		if(sql) {
    			objProject = await models.sequelize.project.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objProject = await models.mongoose.project.findOne({date_entered: dateEntered});
    		}
    		return objProject;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objProject;
    		if(sql) {
    			objProject = await models.sequelize.project.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objProject = await models.mongoose.project.findOne({date_modified: dateModified});
    		}
    		return objProject;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByEstimatedStartDate(estimatedStartDate, query = {}) {
    	try {
    		let objProject;
    		if(sql) {
    			objProject = await models.sequelize.project.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { estimated_start_date: estimatedStartDate },
    			});
    		} else {
    			objProject = await models.mongoose.project.findOne({estimated_start_date: estimatedStartDate});
    		}
    		return objProject;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByEstimatedEndDate(estimatedEndDate, query = {}) {
    	try {
    		let objProject;
    		if(sql) {
    			objProject = await models.sequelize.project.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { estimated_end_date: estimatedEndDate },
    			});
    		} else {
    			objProject = await models.mongoose.project.findOne({estimated_end_date: estimatedEndDate});
    		}
    		return objProject;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objProject;
    		if(sql) {
    			objProject = await models.sequelize.project.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objProject = await models.mongoose.project.findOne({assigned_user_id: assignedUserId});
    		}
    		return objProject;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objProject;
    		if(sql) {
    			objProject = await models.sequelize.project.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objProject = await models.mongoose.project.findOne({modified_user_id: modifiedUserId});
    		}
    		return objProject;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objProject;
    		if(sql) {
    			objProject = await models.sequelize.project.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objProject = await models.mongoose.project.findOne({created_by: createdBy});
    		}
    		return objProject;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateProjectById(id, updateProject) {
    	try {
    		let objProject;
    		if(sql) {
    			objProject = await models.sequelize.project.findOne({where: { id: id }});
    			if (objProject) {
    				objProject = await models.sequelize.project.update(updateProject, { where: { id: id } });
    			}
    		} else {
    			objProject = await models.mongoose.project.findOneAndUpdate({id: id}, {$set: updateProject}, {new: true});
    		}
    		return objProject;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectByDeleted(deleted, updateProject) {
    	try {
    		let objProject;
    		if(sql) {
    			objProject = await models.sequelize.project.findOne({where: { deleted: deleted }});
    			if (objProject) {
    				objProject = await models.sequelize.project.update(updateProject, { where: { deleted: deleted } });
    			}
    		} else {
    			objProject = await models.mongoose.project.findOneAndUpdate({deleted: deleted}, {$set: updateProject}, {new: true});
    		}
    		return objProject;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectByOverrideBusinessHours(overrideBusinessHours, updateProject) {
    	try {
    		let objProject;
    		if(sql) {
    			objProject = await models.sequelize.project.findOne({where: { override_business_hours: overrideBusinessHours }});
    			if (objProject) {
    				objProject = await models.sequelize.project.update(updateProject, { where: { override_business_hours: overrideBusinessHours } });
    			}
    		} else {
    			objProject = await models.mongoose.project.findOneAndUpdate({override_business_hours: overrideBusinessHours}, {$set: updateProject}, {new: true});
    		}
    		return objProject;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectByName(name, updateProject) {
    	try {
    		let objProject;
    		if(sql) {
    			objProject = await models.sequelize.project.findOne({where: { name: name }});
    			if (objProject) {
    				objProject = await models.sequelize.project.update(updateProject, { where: { name: name } });
    			}
    		} else {
    			objProject = await models.mongoose.project.findOneAndUpdate({name: name}, {$set: updateProject}, {new: true});
    		}
    		return objProject;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectByStatus(status, updateProject) {
    	try {
    		let objProject;
    		if(sql) {
    			objProject = await models.sequelize.project.findOne({where: { status: status }});
    			if (objProject) {
    				objProject = await models.sequelize.project.update(updateProject, { where: { status: status } });
    			}
    		} else {
    			objProject = await models.mongoose.project.findOneAndUpdate({status: status}, {$set: updateProject}, {new: true});
    		}
    		return objProject;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectByPriority(priority, updateProject) {
    	try {
    		let objProject;
    		if(sql) {
    			objProject = await models.sequelize.project.findOne({where: { priority: priority }});
    			if (objProject) {
    				objProject = await models.sequelize.project.update(updateProject, { where: { priority: priority } });
    			}
    		} else {
    			objProject = await models.mongoose.project.findOneAndUpdate({priority: priority}, {$set: updateProject}, {new: true});
    		}
    		return objProject;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectByDescription(description, updateProject) {
    	try {
    		let objProject;
    		if(sql) {
    			objProject = await models.sequelize.project.findOne({where: { description: description }});
    			if (objProject) {
    				objProject = await models.sequelize.project.update(updateProject, { where: { description: description } });
    			}
    		} else {
    			objProject = await models.mongoose.project.findOneAndUpdate({description: description}, {$set: updateProject}, {new: true});
    		}
    		return objProject;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectByDateEntered(dateEntered, updateProject) {
    	try {
    		let objProject;
    		if(sql) {
    			objProject = await models.sequelize.project.findOne({where: { date_entered: dateEntered }});
    			if (objProject) {
    				objProject = await models.sequelize.project.update(updateProject, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objProject = await models.mongoose.project.findOneAndUpdate({date_entered: dateEntered}, {$set: updateProject}, {new: true});
    		}
    		return objProject;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectByDateModified(dateModified, updateProject) {
    	try {
    		let objProject;
    		if(sql) {
    			objProject = await models.sequelize.project.findOne({where: { date_modified: dateModified }});
    			if (objProject) {
    				objProject = await models.sequelize.project.update(updateProject, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objProject = await models.mongoose.project.findOneAndUpdate({date_modified: dateModified}, {$set: updateProject}, {new: true});
    		}
    		return objProject;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectByEstimatedStartDate(estimatedStartDate, updateProject) {
    	try {
    		let objProject;
    		if(sql) {
    			objProject = await models.sequelize.project.findOne({where: { estimated_start_date: estimatedStartDate }});
    			if (objProject) {
    				objProject = await models.sequelize.project.update(updateProject, { where: { estimated_start_date: estimatedStartDate } });
    			}
    		} else {
    			objProject = await models.mongoose.project.findOneAndUpdate({estimated_start_date: estimatedStartDate}, {$set: updateProject}, {new: true});
    		}
    		return objProject;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectByEstimatedEndDate(estimatedEndDate, updateProject) {
    	try {
    		let objProject;
    		if(sql) {
    			objProject = await models.sequelize.project.findOne({where: { estimated_end_date: estimatedEndDate }});
    			if (objProject) {
    				objProject = await models.sequelize.project.update(updateProject, { where: { estimated_end_date: estimatedEndDate } });
    			}
    		} else {
    			objProject = await models.mongoose.project.findOneAndUpdate({estimated_end_date: estimatedEndDate}, {$set: updateProject}, {new: true});
    		}
    		return objProject;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectByAssignedUserId(assignedUserId, updateProject) {
    	try {
    		let objProject;
    		if(sql) {
    			objProject = await models.sequelize.project.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objProject) {
    				objProject = await models.sequelize.project.update(updateProject, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objProject = await models.mongoose.project.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateProject}, {new: true});
    		}
    		return objProject;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectByModifiedUserId(modifiedUserId, updateProject) {
    	try {
    		let objProject;
    		if(sql) {
    			objProject = await models.sequelize.project.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objProject) {
    				objProject = await models.sequelize.project.update(updateProject, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objProject = await models.mongoose.project.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateProject}, {new: true});
    		}
    		return objProject;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectByCreatedBy(createdBy, updateProject) {
    	try {
    		let objProject;
    		if(sql) {
    			objProject = await models.sequelize.project.findOne({where: { created_by: createdBy }});
    			if (objProject) {
    				objProject = await models.sequelize.project.update(updateProject, { where: { created_by: createdBy } });
    			}
    		} else {
    			objProject = await models.mongoose.project.findOneAndUpdate({created_by: createdBy}, {$set: updateProject}, {new: true});
    		}
    		return objProject;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = ProjectService;
//</es-section>
