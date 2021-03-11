/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:34 GMT-0400 (Bolivia Time)
 * Time: 14:57:34
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:34 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:34
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

class ProjectUser1CService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllProjectUsers1C(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.projectUsers1C.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.projectUsers1C.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllProjectUsers1C(select = []) {
		try {
			if(sql) {
				return await models.sequelize.projectUsers1C.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.projectUsers1C.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addProjectUser1C(newProjectUser1C) {
		try {
			let objProjectUser1C;
			if(util.PrimaryKeyTypeIsString(models.sequelize.projectUsers1C.primaryKeys.id.type.toString())) {
			    newProjectUser1C.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objProjectUser1C = await models.sequelize.projectUsers1C.create(newProjectUser1C);
			} else {
				objProjectUser1C = new models.mongoose.projectUsers1C(newProjectUser1C);
				await objProjectUser1C.save();
			}
			return objProjectUser1C;
		} catch (error) {
			throw error;
		}
	}

	static async updateProjectUser1C(id, updateProjectUser1C) {
		try {
			let objProjectUser1C;
			if(sql) {
				objProjectUser1C = await models.sequelize.projectUsers1C.findOne({where: { id: util.String(id) }});
				if (objProjectUser1C) {
					await models.sequelize.projectUsers1C.update(updateProjectUser1C, { where: { id: util.String(id) } });
					objProjectUser1C = await models.sequelize.projectUsers1C.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateProjectUser1C._id;
				objProjectUser1C = await models.mongoose.projectUsers1C.findOneAndUpdate({id:id}, {$set: updateProjectUser1C}, {new: true});
			}
			return objProjectUser1C;
		} catch (error) {
			throw error;
		}
	}

	static async getAProjectUser1C(id, query) {
		try {
			let objProjectUser1C;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objProjectUser1C = await models.sequelize.projectUsers1C.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objProjectUser1C = await models.mongoose.projectUsers1C.find({id:util.String(id)}).select(query.select);
			}
			return objProjectUser1C;
		} catch (error) {
			throw error;
		}
	}

	static async deleteProjectUser1C(id) {
		try {
			let objProjectUser1C;
			if(sql) {
				objProjectUser1C = await models.sequelize.projectUsers1C.findOne({ where: { id: util.String(id) } });
				if (objProjectUser1C) {
					await models.sequelize.projectUsers1C.destroy({where: { id: util.String(id) }});
				}
			} else {
				objProjectUser1C = await models.mongoose.projectUsers1C.deleteOne({id:util.String(id)});
			}
			return objProjectUser1C;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objProjectUser1C;
    		if(sql) {
    			objProjectUser1C = await models.sequelize.projectUsers1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objProjectUser1C = await models.mongoose.projectUsers1C.findOne({id: id});
    		}
    		return objProjectUser1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objProjectUser1C;
    		if(sql) {
    			objProjectUser1C = await models.sequelize.projectUsers1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objProjectUser1C = await models.mongoose.projectUsers1C.findOne({deleted: deleted});
    		}
    		return objProjectUser1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByProjectUsers1projectIda(projectUsers1projectIda, query = {}) {
    	try {
    		let objProjectUser1C;
    		if(sql) {
    			objProjectUser1C = await models.sequelize.projectUsers1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { project_users_1project_ida: projectUsers1projectIda },
    			});
    		} else {
    			objProjectUser1C = await models.mongoose.projectUsers1C.findOne({project_users_1project_ida: projectUsers1projectIda});
    		}
    		return objProjectUser1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByProjectUsers1usersIdb(projectUsers1usersIdb, query = {}) {
    	try {
    		let objProjectUser1C;
    		if(sql) {
    			objProjectUser1C = await models.sequelize.projectUsers1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { project_users_1users_idb: projectUsers1usersIdb },
    			});
    		} else {
    			objProjectUser1C = await models.mongoose.projectUsers1C.findOne({project_users_1users_idb: projectUsers1usersIdb});
    		}
    		return objProjectUser1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objProjectUser1C;
    		if(sql) {
    			objProjectUser1C = await models.sequelize.projectUsers1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objProjectUser1C = await models.mongoose.projectUsers1C.findOne({date_modified: dateModified});
    		}
    		return objProjectUser1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateProjectUser1CById(id, updateProjectUser1C) {
    	try {
    		let objProjectUser1C;
    		if(sql) {
    			objProjectUser1C = await models.sequelize.projectUsers1C.findOne({where: { id: id }});
    			if (objProjectUser1C) {
    				objProjectUser1C = await models.sequelize.projectUsers1C.update(updateProjectUser1C, { where: { id: id } });
    			}
    		} else {
    			objProjectUser1C = await models.mongoose.projectUsers1C.findOneAndUpdate({id: id}, {$set: updateProjectUser1C}, {new: true});
    		}
    		return objProjectUser1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectUser1CByDeleted(deleted, updateProjectUser1C) {
    	try {
    		let objProjectUser1C;
    		if(sql) {
    			objProjectUser1C = await models.sequelize.projectUsers1C.findOne({where: { deleted: deleted }});
    			if (objProjectUser1C) {
    				objProjectUser1C = await models.sequelize.projectUsers1C.update(updateProjectUser1C, { where: { deleted: deleted } });
    			}
    		} else {
    			objProjectUser1C = await models.mongoose.projectUsers1C.findOneAndUpdate({deleted: deleted}, {$set: updateProjectUser1C}, {new: true});
    		}
    		return objProjectUser1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectUser1CByProjectUsers1projectIda(projectUsers1projectIda, updateProjectUser1C) {
    	try {
    		let objProjectUser1C;
    		if(sql) {
    			objProjectUser1C = await models.sequelize.projectUsers1C.findOne({where: { project_users_1project_ida: projectUsers1projectIda }});
    			if (objProjectUser1C) {
    				objProjectUser1C = await models.sequelize.projectUsers1C.update(updateProjectUser1C, { where: { project_users_1project_ida: projectUsers1projectIda } });
    			}
    		} else {
    			objProjectUser1C = await models.mongoose.projectUsers1C.findOneAndUpdate({project_users_1project_ida: projectUsers1projectIda}, {$set: updateProjectUser1C}, {new: true});
    		}
    		return objProjectUser1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectUser1CByProjectUsers1usersIdb(projectUsers1usersIdb, updateProjectUser1C) {
    	try {
    		let objProjectUser1C;
    		if(sql) {
    			objProjectUser1C = await models.sequelize.projectUsers1C.findOne({where: { project_users_1users_idb: projectUsers1usersIdb }});
    			if (objProjectUser1C) {
    				objProjectUser1C = await models.sequelize.projectUsers1C.update(updateProjectUser1C, { where: { project_users_1users_idb: projectUsers1usersIdb } });
    			}
    		} else {
    			objProjectUser1C = await models.mongoose.projectUsers1C.findOneAndUpdate({project_users_1users_idb: projectUsers1usersIdb}, {$set: updateProjectUser1C}, {new: true});
    		}
    		return objProjectUser1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectUser1CByDateModified(dateModified, updateProjectUser1C) {
    	try {
    		let objProjectUser1C;
    		if(sql) {
    			objProjectUser1C = await models.sequelize.projectUsers1C.findOne({where: { date_modified: dateModified }});
    			if (objProjectUser1C) {
    				objProjectUser1C = await models.sequelize.projectUsers1C.update(updateProjectUser1C, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objProjectUser1C = await models.mongoose.projectUsers1C.findOneAndUpdate({date_modified: dateModified}, {$set: updateProjectUser1C}, {new: true});
    		}
    		return objProjectUser1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = ProjectUser1CService;
//</es-section>
