/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:39 GMT-0400 (Bolivia Time)
 * Time: 14:57:39
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:39 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:39
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

class RoleModuleService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllRolesModules(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.rolesModules.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.rolesModules.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllRolesModules(select = []) {
		try {
			if(sql) {
				return await models.sequelize.rolesModules.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.rolesModules.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addRoleModule(newRoleModule) {
		try {
			let objRoleModule;
			if(util.PrimaryKeyTypeIsString(models.sequelize.rolesModules.primaryKeys.id.type.toString())) {
			    newRoleModule.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objRoleModule = await models.sequelize.rolesModules.create(newRoleModule);
			} else {
				objRoleModule = new models.mongoose.rolesModules(newRoleModule);
				await objRoleModule.save();
			}
			return objRoleModule;
		} catch (error) {
			throw error;
		}
	}

	static async updateRoleModule(id, updateRoleModule) {
		try {
			let objRoleModule;
			if(sql) {
				objRoleModule = await models.sequelize.rolesModules.findOne({where: { id: util.String(id) }});
				if (objRoleModule) {
					await models.sequelize.rolesModules.update(updateRoleModule, { where: { id: util.String(id) } });
					objRoleModule = await models.sequelize.rolesModules.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateRoleModule._id;
				objRoleModule = await models.mongoose.rolesModules.findOneAndUpdate({id:id}, {$set: updateRoleModule}, {new: true});
			}
			return objRoleModule;
		} catch (error) {
			throw error;
		}
	}

	static async getARoleModule(id, query) {
		try {
			let objRoleModule;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objRoleModule = await models.sequelize.rolesModules.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objRoleModule = await models.mongoose.rolesModules.find({id:util.String(id)}).select(query.select);
			}
			return objRoleModule;
		} catch (error) {
			throw error;
		}
	}

	static async deleteRoleModule(id) {
		try {
			let objRoleModule;
			if(sql) {
				objRoleModule = await models.sequelize.rolesModules.findOne({ where: { id: util.String(id) } });
				if (objRoleModule) {
					await models.sequelize.rolesModules.destroy({where: { id: util.String(id) }});
				}
			} else {
				objRoleModule = await models.mongoose.rolesModules.deleteOne({id:util.String(id)});
			}
			return objRoleModule;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objRoleModule;
    		if(sql) {
    			objRoleModule = await models.sequelize.rolesModules.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objRoleModule = await models.mongoose.rolesModules.findOne({id: id});
    		}
    		return objRoleModule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAllow(allow, query = {}) {
    	try {
    		let objRoleModule;
    		if(sql) {
    			objRoleModule = await models.sequelize.rolesModules.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { allow: allow },
    			});
    		} else {
    			objRoleModule = await models.mongoose.rolesModules.findOne({allow: allow});
    		}
    		return objRoleModule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objRoleModule;
    		if(sql) {
    			objRoleModule = await models.sequelize.rolesModules.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objRoleModule = await models.mongoose.rolesModules.findOne({deleted: deleted});
    		}
    		return objRoleModule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRoleId(roleId, query = {}) {
    	try {
    		let objRoleModule;
    		if(sql) {
    			objRoleModule = await models.sequelize.rolesModules.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { role_id: roleId },
    			});
    		} else {
    			objRoleModule = await models.mongoose.rolesModules.findOne({role_id: roleId});
    		}
    		return objRoleModule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModuleId(moduleId, query = {}) {
    	try {
    		let objRoleModule;
    		if(sql) {
    			objRoleModule = await models.sequelize.rolesModules.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { module_id: moduleId },
    			});
    		} else {
    			objRoleModule = await models.mongoose.rolesModules.findOne({module_id: moduleId});
    		}
    		return objRoleModule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objRoleModule;
    		if(sql) {
    			objRoleModule = await models.sequelize.rolesModules.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objRoleModule = await models.mongoose.rolesModules.findOne({date_modified: dateModified});
    		}
    		return objRoleModule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateRoleModuleById(id, updateRoleModule) {
    	try {
    		let objRoleModule;
    		if(sql) {
    			objRoleModule = await models.sequelize.rolesModules.findOne({where: { id: id }});
    			if (objRoleModule) {
    				objRoleModule = await models.sequelize.rolesModules.update(updateRoleModule, { where: { id: id } });
    			}
    		} else {
    			objRoleModule = await models.mongoose.rolesModules.findOneAndUpdate({id: id}, {$set: updateRoleModule}, {new: true});
    		}
    		return objRoleModule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateRoleModuleByAllow(allow, updateRoleModule) {
    	try {
    		let objRoleModule;
    		if(sql) {
    			objRoleModule = await models.sequelize.rolesModules.findOne({where: { allow: allow }});
    			if (objRoleModule) {
    				objRoleModule = await models.sequelize.rolesModules.update(updateRoleModule, { where: { allow: allow } });
    			}
    		} else {
    			objRoleModule = await models.mongoose.rolesModules.findOneAndUpdate({allow: allow}, {$set: updateRoleModule}, {new: true});
    		}
    		return objRoleModule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateRoleModuleByDeleted(deleted, updateRoleModule) {
    	try {
    		let objRoleModule;
    		if(sql) {
    			objRoleModule = await models.sequelize.rolesModules.findOne({where: { deleted: deleted }});
    			if (objRoleModule) {
    				objRoleModule = await models.sequelize.rolesModules.update(updateRoleModule, { where: { deleted: deleted } });
    			}
    		} else {
    			objRoleModule = await models.mongoose.rolesModules.findOneAndUpdate({deleted: deleted}, {$set: updateRoleModule}, {new: true});
    		}
    		return objRoleModule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateRoleModuleByRoleId(roleId, updateRoleModule) {
    	try {
    		let objRoleModule;
    		if(sql) {
    			objRoleModule = await models.sequelize.rolesModules.findOne({where: { role_id: roleId }});
    			if (objRoleModule) {
    				objRoleModule = await models.sequelize.rolesModules.update(updateRoleModule, { where: { role_id: roleId } });
    			}
    		} else {
    			objRoleModule = await models.mongoose.rolesModules.findOneAndUpdate({role_id: roleId}, {$set: updateRoleModule}, {new: true});
    		}
    		return objRoleModule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateRoleModuleByModuleId(moduleId, updateRoleModule) {
    	try {
    		let objRoleModule;
    		if(sql) {
    			objRoleModule = await models.sequelize.rolesModules.findOne({where: { module_id: moduleId }});
    			if (objRoleModule) {
    				objRoleModule = await models.sequelize.rolesModules.update(updateRoleModule, { where: { module_id: moduleId } });
    			}
    		} else {
    			objRoleModule = await models.mongoose.rolesModules.findOneAndUpdate({module_id: moduleId}, {$set: updateRoleModule}, {new: true});
    		}
    		return objRoleModule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateRoleModuleByDateModified(dateModified, updateRoleModule) {
    	try {
    		let objRoleModule;
    		if(sql) {
    			objRoleModule = await models.sequelize.rolesModules.findOne({where: { date_modified: dateModified }});
    			if (objRoleModule) {
    				objRoleModule = await models.sequelize.rolesModules.update(updateRoleModule, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objRoleModule = await models.mongoose.rolesModules.findOneAndUpdate({date_modified: dateModified}, {$set: updateRoleModule}, {new: true});
    		}
    		return objRoleModule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = RoleModuleService;
//</es-section>
