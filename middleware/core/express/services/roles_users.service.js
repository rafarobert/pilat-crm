/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:40 GMT-0400 (Bolivia Time)
 * Time: 14:57:40
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:40 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:40
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

class RoleUserService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllRolesUsers(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.rolesUsers.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.rolesUsers.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllRolesUsers(select = []) {
		try {
			if(sql) {
				return await models.sequelize.rolesUsers.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.rolesUsers.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addRoleUser(newRoleUser) {
		try {
			let objRoleUser;
			if(util.PrimaryKeyTypeIsString(models.sequelize.rolesUsers.primaryKeys.id.type.toString())) {
			    newRoleUser.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objRoleUser = await models.sequelize.rolesUsers.create(newRoleUser);
			} else {
				objRoleUser = new models.mongoose.rolesUsers(newRoleUser);
				await objRoleUser.save();
			}
			return objRoleUser;
		} catch (error) {
			throw error;
		}
	}

	static async updateRoleUser(id, updateRoleUser) {
		try {
			let objRoleUser;
			if(sql) {
				objRoleUser = await models.sequelize.rolesUsers.findOne({where: { id: util.String(id) }});
				if (objRoleUser) {
					await models.sequelize.rolesUsers.update(updateRoleUser, { where: { id: util.String(id) } });
					objRoleUser = await models.sequelize.rolesUsers.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateRoleUser._id;
				objRoleUser = await models.mongoose.rolesUsers.findOneAndUpdate({id:id}, {$set: updateRoleUser}, {new: true});
			}
			return objRoleUser;
		} catch (error) {
			throw error;
		}
	}

	static async getARoleUser(id, query) {
		try {
			let objRoleUser;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objRoleUser = await models.sequelize.rolesUsers.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objRoleUser = await models.mongoose.rolesUsers.find({id:util.String(id)}).select(query.select);
			}
			return objRoleUser;
		} catch (error) {
			throw error;
		}
	}

	static async deleteRoleUser(id) {
		try {
			let objRoleUser;
			if(sql) {
				objRoleUser = await models.sequelize.rolesUsers.findOne({ where: { id: util.String(id) } });
				if (objRoleUser) {
					await models.sequelize.rolesUsers.destroy({where: { id: util.String(id) }});
				}
			} else {
				objRoleUser = await models.mongoose.rolesUsers.deleteOne({id:util.String(id)});
			}
			return objRoleUser;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objRoleUser;
    		if(sql) {
    			objRoleUser = await models.sequelize.rolesUsers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objRoleUser = await models.mongoose.rolesUsers.findOne({id: id});
    		}
    		return objRoleUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objRoleUser;
    		if(sql) {
    			objRoleUser = await models.sequelize.rolesUsers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objRoleUser = await models.mongoose.rolesUsers.findOne({deleted: deleted});
    		}
    		return objRoleUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRoleId(roleId, query = {}) {
    	try {
    		let objRoleUser;
    		if(sql) {
    			objRoleUser = await models.sequelize.rolesUsers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { role_id: roleId },
    			});
    		} else {
    			objRoleUser = await models.mongoose.rolesUsers.findOne({role_id: roleId});
    		}
    		return objRoleUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUserId(userId, query = {}) {
    	try {
    		let objRoleUser;
    		if(sql) {
    			objRoleUser = await models.sequelize.rolesUsers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { user_id: userId },
    			});
    		} else {
    			objRoleUser = await models.mongoose.rolesUsers.findOne({user_id: userId});
    		}
    		return objRoleUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objRoleUser;
    		if(sql) {
    			objRoleUser = await models.sequelize.rolesUsers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objRoleUser = await models.mongoose.rolesUsers.findOne({date_modified: dateModified});
    		}
    		return objRoleUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateRoleUserById(id, updateRoleUser) {
    	try {
    		let objRoleUser;
    		if(sql) {
    			objRoleUser = await models.sequelize.rolesUsers.findOne({where: { id: id }});
    			if (objRoleUser) {
    				objRoleUser = await models.sequelize.rolesUsers.update(updateRoleUser, { where: { id: id } });
    			}
    		} else {
    			objRoleUser = await models.mongoose.rolesUsers.findOneAndUpdate({id: id}, {$set: updateRoleUser}, {new: true});
    		}
    		return objRoleUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateRoleUserByDeleted(deleted, updateRoleUser) {
    	try {
    		let objRoleUser;
    		if(sql) {
    			objRoleUser = await models.sequelize.rolesUsers.findOne({where: { deleted: deleted }});
    			if (objRoleUser) {
    				objRoleUser = await models.sequelize.rolesUsers.update(updateRoleUser, { where: { deleted: deleted } });
    			}
    		} else {
    			objRoleUser = await models.mongoose.rolesUsers.findOneAndUpdate({deleted: deleted}, {$set: updateRoleUser}, {new: true});
    		}
    		return objRoleUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateRoleUserByRoleId(roleId, updateRoleUser) {
    	try {
    		let objRoleUser;
    		if(sql) {
    			objRoleUser = await models.sequelize.rolesUsers.findOne({where: { role_id: roleId }});
    			if (objRoleUser) {
    				objRoleUser = await models.sequelize.rolesUsers.update(updateRoleUser, { where: { role_id: roleId } });
    			}
    		} else {
    			objRoleUser = await models.mongoose.rolesUsers.findOneAndUpdate({role_id: roleId}, {$set: updateRoleUser}, {new: true});
    		}
    		return objRoleUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateRoleUserByUserId(userId, updateRoleUser) {
    	try {
    		let objRoleUser;
    		if(sql) {
    			objRoleUser = await models.sequelize.rolesUsers.findOne({where: { user_id: userId }});
    			if (objRoleUser) {
    				objRoleUser = await models.sequelize.rolesUsers.update(updateRoleUser, { where: { user_id: userId } });
    			}
    		} else {
    			objRoleUser = await models.mongoose.rolesUsers.findOneAndUpdate({user_id: userId}, {$set: updateRoleUser}, {new: true});
    		}
    		return objRoleUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateRoleUserByDateModified(dateModified, updateRoleUser) {
    	try {
    		let objRoleUser;
    		if(sql) {
    			objRoleUser = await models.sequelize.rolesUsers.findOne({where: { date_modified: dateModified }});
    			if (objRoleUser) {
    				objRoleUser = await models.sequelize.rolesUsers.update(updateRoleUser, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objRoleUser = await models.mongoose.rolesUsers.findOneAndUpdate({date_modified: dateModified}, {$set: updateRoleUser}, {new: true});
    		}
    		return objRoleUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = RoleUserService;
//</es-section>
