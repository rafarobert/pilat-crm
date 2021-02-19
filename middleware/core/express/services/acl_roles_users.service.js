/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:41:46 GMT-0400 (Bolivia Time)
 * Time: 4:41:46
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:41:46 GMT-0400 (Bolivia Time)
 * Last time updated: 4:41:46
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

class AclRoleUserService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAclRolesUsers(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aclRolesUsers.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aclRolesUsers.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAclRolesUsers(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aclRolesUsers.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aclRolesUsers.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAclRoleUser(newAclRoleUser) {
		try {
			let objAclRoleUser;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aclRolesUsers.primaryKeys.id.type.toString())) {
			    newAclRoleUser.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAclRoleUser = await models.sequelize.aclRolesUsers.create(newAclRoleUser);
			} else {
				objAclRoleUser = new models.mongoose.aclRolesUsers(newAclRoleUser);
				await objAclRoleUser.save();
			}
			return objAclRoleUser;
		} catch (error) {
			throw error;
		}
	}

	static async updateAclRoleUser(id, updateAclRoleUser) {
		try {
			let objAclRoleUser;
			if(sql) {
				objAclRoleUser = await models.sequelize.aclRolesUsers.findOne({where: { id: util.String(id) }});
				if (objAclRoleUser) {
					await models.sequelize.aclRolesUsers.update(updateAclRoleUser, { where: { id: util.String(id) } });
					objAclRoleUser = await models.sequelize.aclRolesUsers.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateAclRoleUser._id;
				objAclRoleUser = await models.mongoose.aclRolesUsers.findOneAndUpdate({id:id}, {$set: updateAclRoleUser}, {new: true});
			}
			return objAclRoleUser;
		} catch (error) {
			throw error;
		}
	}

	static async getAAclRoleUser(id, query) {
		try {
			let objAclRoleUser;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAclRoleUser = await models.sequelize.aclRolesUsers.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAclRoleUser = await models.mongoose.aclRolesUsers.find({id:util.String(id)}).select(query.select);
			}
			return objAclRoleUser;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAclRoleUser(id) {
		try {
			let objAclRoleUser;
			if(sql) {
				objAclRoleUser = await models.sequelize.aclRolesUsers.findOne({ where: { id: util.String(id) } });
				if (objAclRoleUser) {
					await models.sequelize.aclRolesUsers.destroy({where: { id: util.String(id) }});
				}
			} else {
				objAclRoleUser = await models.mongoose.aclRolesUsers.deleteOne({id:util.String(id)});
			}
			return objAclRoleUser;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAclRoleUser;
    		if(sql) {
    			objAclRoleUser = await models.sequelize.aclRolesUsers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAclRoleUser = await models.mongoose.aclRolesUsers.findOne({id: id});
    		}
    		return objAclRoleUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAclRoleUser;
    		if(sql) {
    			objAclRoleUser = await models.sequelize.aclRolesUsers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAclRoleUser = await models.mongoose.aclRolesUsers.findOne({deleted: deleted});
    		}
    		return objAclRoleUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRoleId(roleId, query = {}) {
    	try {
    		let objAclRoleUser;
    		if(sql) {
    			objAclRoleUser = await models.sequelize.aclRolesUsers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { role_id: roleId },
    			});
    		} else {
    			objAclRoleUser = await models.mongoose.aclRolesUsers.findOne({role_id: roleId});
    		}
    		return objAclRoleUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUserId(userId, query = {}) {
    	try {
    		let objAclRoleUser;
    		if(sql) {
    			objAclRoleUser = await models.sequelize.aclRolesUsers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { user_id: userId },
    			});
    		} else {
    			objAclRoleUser = await models.mongoose.aclRolesUsers.findOne({user_id: userId});
    		}
    		return objAclRoleUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAclRoleUser;
    		if(sql) {
    			objAclRoleUser = await models.sequelize.aclRolesUsers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAclRoleUser = await models.mongoose.aclRolesUsers.findOne({date_modified: dateModified});
    		}
    		return objAclRoleUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAclRoleUserById(id, updateAclRoleUser) {
    	try {
    		let objAclRoleUser;
    		if(sql) {
    			objAclRoleUser = await models.sequelize.aclRolesUsers.findOne({where: { id: id }});
    			if (objAclRoleUser) {
    				objAclRoleUser = await models.sequelize.aclRolesUsers.update(updateAclRoleUser, { where: { id: id } });
    			}
    		} else {
    			objAclRoleUser = await models.mongoose.aclRolesUsers.findOneAndUpdate({id: id}, {$set: updateAclRoleUser}, {new: true});
    		}
    		return objAclRoleUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAclRoleUserByDeleted(deleted, updateAclRoleUser) {
    	try {
    		let objAclRoleUser;
    		if(sql) {
    			objAclRoleUser = await models.sequelize.aclRolesUsers.findOne({where: { deleted: deleted }});
    			if (objAclRoleUser) {
    				objAclRoleUser = await models.sequelize.aclRolesUsers.update(updateAclRoleUser, { where: { deleted: deleted } });
    			}
    		} else {
    			objAclRoleUser = await models.mongoose.aclRolesUsers.findOneAndUpdate({deleted: deleted}, {$set: updateAclRoleUser}, {new: true});
    		}
    		return objAclRoleUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAclRoleUserByRoleId(roleId, updateAclRoleUser) {
    	try {
    		let objAclRoleUser;
    		if(sql) {
    			objAclRoleUser = await models.sequelize.aclRolesUsers.findOne({where: { role_id: roleId }});
    			if (objAclRoleUser) {
    				objAclRoleUser = await models.sequelize.aclRolesUsers.update(updateAclRoleUser, { where: { role_id: roleId } });
    			}
    		} else {
    			objAclRoleUser = await models.mongoose.aclRolesUsers.findOneAndUpdate({role_id: roleId}, {$set: updateAclRoleUser}, {new: true});
    		}
    		return objAclRoleUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAclRoleUserByUserId(userId, updateAclRoleUser) {
    	try {
    		let objAclRoleUser;
    		if(sql) {
    			objAclRoleUser = await models.sequelize.aclRolesUsers.findOne({where: { user_id: userId }});
    			if (objAclRoleUser) {
    				objAclRoleUser = await models.sequelize.aclRolesUsers.update(updateAclRoleUser, { where: { user_id: userId } });
    			}
    		} else {
    			objAclRoleUser = await models.mongoose.aclRolesUsers.findOneAndUpdate({user_id: userId}, {$set: updateAclRoleUser}, {new: true});
    		}
    		return objAclRoleUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAclRoleUserByDateModified(dateModified, updateAclRoleUser) {
    	try {
    		let objAclRoleUser;
    		if(sql) {
    			objAclRoleUser = await models.sequelize.aclRolesUsers.findOne({where: { date_modified: dateModified }});
    			if (objAclRoleUser) {
    				objAclRoleUser = await models.sequelize.aclRolesUsers.update(updateAclRoleUser, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAclRoleUser = await models.mongoose.aclRolesUsers.findOneAndUpdate({date_modified: dateModified}, {$set: updateAclRoleUser}, {new: true});
    		}
    		return objAclRoleUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AclRoleUserService;
//</es-section>
