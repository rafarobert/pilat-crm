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

class RoleService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllRoles(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.roles.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['_id','ASC']],
                });
			} else {
				return await models.mongoose.roles.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllRoles(select = []) {
		try {
			if(sql) {
				return await models.sequelize.roles.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.roles.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addRole(newRole) {
		try {
			let objRole;
			if(util.PrimaryKeyTypeIsString(models.sequelize.roles.primaryKeys.id.type.toString())) {
			    newRole.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objRole = await models.sequelize.roles.create(newRole);
			} else {
				objRole = new models.mongoose.roles(newRole);
				await objRole.save();
			}
			return objRole;
		} catch (error) {
			throw error;
		}
	}

	static async updateRole(id, updateRole) {
		try {
			let objRole;
			if(sql) {
				objRole = await models.sequelize.roles.findOne({where: { id: util.Char(id) }});
				if (objRole) {
					await models.sequelize.roles.update(updateRole, { where: { id: util.Char(id) } });
					objRole = await models.sequelize.roles.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateRole._id;
				objRole = await models.mongoose.roles.findOneAndUpdate({id:id}, {$set: updateRole}, {new: true});
			}
			return objRole;
		} catch (error) {
			throw error;
		}
	}

	static async getARole(id, query) {
		try {
			let objRole;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objRole = await models.sequelize.roles.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objRole = await models.mongoose.roles.find({id:util.Char(id)}).select(query.select);
			}
			return objRole;
		} catch (error) {
			throw error;
		}
	}

	static async deleteRole(id) {
		try {
			let objRole;
			if(sql) {
				objRole = await models.sequelize.roles.findOne({ where: { id: util.Char(id) } });
				if (objRole) {
					await models.sequelize.roles.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objRole = await models.mongoose.roles.deleteOne({id:util.Char(id)});
			}
			return objRole;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objRole;
    		if(sql) {
    			objRole = await models.sequelize.roles.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objRole = await models.mongoose.roles.findOne({id: id});
    		}
    		return objRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objRole;
    		if(sql) {
    			objRole = await models.sequelize.roles.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objRole = await models.mongoose.roles.findOne({deleted: deleted});
    		}
    		return objRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objRole;
    		if(sql) {
    			objRole = await models.sequelize.roles.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objRole = await models.mongoose.roles.findOne({name: name});
    		}
    		return objRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objRole;
    		if(sql) {
    			objRole = await models.sequelize.roles.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objRole = await models.mongoose.roles.findOne({description: description});
    		}
    		return objRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModules(modules, query = {}) {
    	try {
    		let objRole;
    		if(sql) {
    			objRole = await models.sequelize.roles.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modules: modules },
    			});
    		} else {
    			objRole = await models.mongoose.roles.findOne({modules: modules});
    		}
    		return objRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objRole;
    		if(sql) {
    			objRole = await models.sequelize.roles.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objRole = await models.mongoose.roles.findOne({date_entered: dateEntered});
    		}
    		return objRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objRole;
    		if(sql) {
    			objRole = await models.sequelize.roles.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objRole = await models.mongoose.roles.findOne({date_modified: dateModified});
    		}
    		return objRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objRole;
    		if(sql) {
    			objRole = await models.sequelize.roles.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objRole = await models.mongoose.roles.findOne({modified_user_id: modifiedUserId});
    		}
    		return objRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objRole;
    		if(sql) {
    			objRole = await models.sequelize.roles.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objRole = await models.mongoose.roles.findOne({created_by: createdBy});
    		}
    		return objRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateRoleById(id, updateRole) {
    	try {
    		let objRole;
    		if(sql) {
    			objRole = await models.sequelize.roles.findOne({where: { id: id }});
    			if (objRole) {
    				objRole = await models.sequelize.roles.update(updateRole, { where: { id: id } });
    			}
    		} else {
    			objRole = await models.mongoose.roles.findOneAndUpdate({id: id}, {$set: updateRole}, {new: true});
    		}
    		return objRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateRoleByDeleted(deleted, updateRole) {
    	try {
    		let objRole;
    		if(sql) {
    			objRole = await models.sequelize.roles.findOne({where: { deleted: deleted }});
    			if (objRole) {
    				objRole = await models.sequelize.roles.update(updateRole, { where: { deleted: deleted } });
    			}
    		} else {
    			objRole = await models.mongoose.roles.findOneAndUpdate({deleted: deleted}, {$set: updateRole}, {new: true});
    		}
    		return objRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateRoleByName(name, updateRole) {
    	try {
    		let objRole;
    		if(sql) {
    			objRole = await models.sequelize.roles.findOne({where: { name: name }});
    			if (objRole) {
    				objRole = await models.sequelize.roles.update(updateRole, { where: { name: name } });
    			}
    		} else {
    			objRole = await models.mongoose.roles.findOneAndUpdate({name: name}, {$set: updateRole}, {new: true});
    		}
    		return objRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateRoleByDescription(description, updateRole) {
    	try {
    		let objRole;
    		if(sql) {
    			objRole = await models.sequelize.roles.findOne({where: { description: description }});
    			if (objRole) {
    				objRole = await models.sequelize.roles.update(updateRole, { where: { description: description } });
    			}
    		} else {
    			objRole = await models.mongoose.roles.findOneAndUpdate({description: description}, {$set: updateRole}, {new: true});
    		}
    		return objRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateRoleByModules(modules, updateRole) {
    	try {
    		let objRole;
    		if(sql) {
    			objRole = await models.sequelize.roles.findOne({where: { modules: modules }});
    			if (objRole) {
    				objRole = await models.sequelize.roles.update(updateRole, { where: { modules: modules } });
    			}
    		} else {
    			objRole = await models.mongoose.roles.findOneAndUpdate({modules: modules}, {$set: updateRole}, {new: true});
    		}
    		return objRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateRoleByDateEntered(dateEntered, updateRole) {
    	try {
    		let objRole;
    		if(sql) {
    			objRole = await models.sequelize.roles.findOne({where: { date_entered: dateEntered }});
    			if (objRole) {
    				objRole = await models.sequelize.roles.update(updateRole, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objRole = await models.mongoose.roles.findOneAndUpdate({date_entered: dateEntered}, {$set: updateRole}, {new: true});
    		}
    		return objRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateRoleByDateModified(dateModified, updateRole) {
    	try {
    		let objRole;
    		if(sql) {
    			objRole = await models.sequelize.roles.findOne({where: { date_modified: dateModified }});
    			if (objRole) {
    				objRole = await models.sequelize.roles.update(updateRole, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objRole = await models.mongoose.roles.findOneAndUpdate({date_modified: dateModified}, {$set: updateRole}, {new: true});
    		}
    		return objRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateRoleByModifiedUserId(modifiedUserId, updateRole) {
    	try {
    		let objRole;
    		if(sql) {
    			objRole = await models.sequelize.roles.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objRole) {
    				objRole = await models.sequelize.roles.update(updateRole, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objRole = await models.mongoose.roles.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateRole}, {new: true});
    		}
    		return objRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateRoleByCreatedBy(createdBy, updateRole) {
    	try {
    		let objRole;
    		if(sql) {
    			objRole = await models.sequelize.roles.findOne({where: { created_by: createdBy }});
    			if (objRole) {
    				objRole = await models.sequelize.roles.update(updateRole, { where: { created_by: createdBy } });
    			}
    		} else {
    			objRole = await models.mongoose.roles.findOneAndUpdate({created_by: createdBy}, {$set: updateRole}, {new: true});
    		}
    		return objRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = RoleService;
//</es-section>
