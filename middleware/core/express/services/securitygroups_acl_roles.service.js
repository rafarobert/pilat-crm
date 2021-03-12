/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:42 GMT-0400 (Bolivia Time)
 * Time: 14:57:42
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:42 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:42
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

class SecuritygroupAclRoleService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllSecuritygroupsAclRoles(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.securitygroupsAclRoles.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.securitygroupsAclRoles.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllSecuritygroupsAclRoles(select = []) {
		try {
			if(sql) {
				return await models.sequelize.securitygroupsAclRoles.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.securitygroupsAclRoles.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addSecuritygroupAclRole(newSecuritygroupAclRole) {
		try {
			let objSecuritygroupAclRole;
			if(util.PrimaryKeyTypeIsString(models.sequelize.securitygroupsAclRoles.primaryKeys.id.type.toString())) {
			    newSecuritygroupAclRole.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objSecuritygroupAclRole = await models.sequelize.securitygroupsAclRoles.create(newSecuritygroupAclRole);
			} else {
				objSecuritygroupAclRole = new models.mongoose.securitygroupsAclRoles(newSecuritygroupAclRole);
				await objSecuritygroupAclRole.save();
			}
			return objSecuritygroupAclRole;
		} catch (error) {
			throw error;
		}
	}

	static async updateSecuritygroupAclRole(id, updateSecuritygroupAclRole) {
		try {
			let objSecuritygroupAclRole;
			if(sql) {
				objSecuritygroupAclRole = await models.sequelize.securitygroupsAclRoles.findOne({where: { id: util.Char(id) }});
				if (objSecuritygroupAclRole) {
					await models.sequelize.securitygroupsAclRoles.update(updateSecuritygroupAclRole, { where: { id: util.Char(id) } });
					objSecuritygroupAclRole = await models.sequelize.securitygroupsAclRoles.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateSecuritygroupAclRole._id;
				objSecuritygroupAclRole = await models.mongoose.securitygroupsAclRoles.findOneAndUpdate({id:id}, {$set: updateSecuritygroupAclRole}, {new: true});
			}
			return objSecuritygroupAclRole;
		} catch (error) {
			throw error;
		}
	}

	static async getASecuritygroupAclRole(id, query) {
		try {
			let objSecuritygroupAclRole;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objSecuritygroupAclRole = await models.sequelize.securitygroupsAclRoles.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objSecuritygroupAclRole = await models.mongoose.securitygroupsAclRoles.find({id:util.Char(id)}).select(query.select);
			}
			return objSecuritygroupAclRole;
		} catch (error) {
			throw error;
		}
	}

	static async deleteSecuritygroupAclRole(id) {
		try {
			let objSecuritygroupAclRole;
			if(sql) {
				objSecuritygroupAclRole = await models.sequelize.securitygroupsAclRoles.findOne({ where: { id: util.Char(id) } });
				if (objSecuritygroupAclRole) {
					await models.sequelize.securitygroupsAclRoles.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objSecuritygroupAclRole = await models.mongoose.securitygroupsAclRoles.deleteOne({id:util.Char(id)});
			}
			return objSecuritygroupAclRole;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objSecuritygroupAclRole;
    		if(sql) {
    			objSecuritygroupAclRole = await models.sequelize.securitygroupsAclRoles.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objSecuritygroupAclRole = await models.mongoose.securitygroupsAclRoles.findOne({id: id});
    		}
    		return objSecuritygroupAclRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objSecuritygroupAclRole;
    		if(sql) {
    			objSecuritygroupAclRole = await models.sequelize.securitygroupsAclRoles.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objSecuritygroupAclRole = await models.mongoose.securitygroupsAclRoles.findOne({deleted: deleted});
    		}
    		return objSecuritygroupAclRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objSecuritygroupAclRole;
    		if(sql) {
    			objSecuritygroupAclRole = await models.sequelize.securitygroupsAclRoles.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objSecuritygroupAclRole = await models.mongoose.securitygroupsAclRoles.findOne({date_modified: dateModified});
    		}
    		return objSecuritygroupAclRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySecuritygroupId(securitygroupId, query = {}) {
    	try {
    		let objSecuritygroupAclRole;
    		if(sql) {
    			objSecuritygroupAclRole = await models.sequelize.securitygroupsAclRoles.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { securitygroup_id: securitygroupId },
    			});
    		} else {
    			objSecuritygroupAclRole = await models.mongoose.securitygroupsAclRoles.findOne({securitygroup_id: securitygroupId});
    		}
    		return objSecuritygroupAclRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRoleId(roleId, query = {}) {
    	try {
    		let objSecuritygroupAclRole;
    		if(sql) {
    			objSecuritygroupAclRole = await models.sequelize.securitygroupsAclRoles.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { role_id: roleId },
    			});
    		} else {
    			objSecuritygroupAclRole = await models.mongoose.securitygroupsAclRoles.findOne({role_id: roleId});
    		}
    		return objSecuritygroupAclRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateSecuritygroupAclRoleById(id, updateSecuritygroupAclRole) {
    	try {
    		let objSecuritygroupAclRole;
    		if(sql) {
    			objSecuritygroupAclRole = await models.sequelize.securitygroupsAclRoles.findOne({where: { id: id }});
    			if (objSecuritygroupAclRole) {
    				objSecuritygroupAclRole = await models.sequelize.securitygroupsAclRoles.update(updateSecuritygroupAclRole, { where: { id: id } });
    			}
    		} else {
    			objSecuritygroupAclRole = await models.mongoose.securitygroupsAclRoles.findOneAndUpdate({id: id}, {$set: updateSecuritygroupAclRole}, {new: true});
    		}
    		return objSecuritygroupAclRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSecuritygroupAclRoleByDeleted(deleted, updateSecuritygroupAclRole) {
    	try {
    		let objSecuritygroupAclRole;
    		if(sql) {
    			objSecuritygroupAclRole = await models.sequelize.securitygroupsAclRoles.findOne({where: { deleted: deleted }});
    			if (objSecuritygroupAclRole) {
    				objSecuritygroupAclRole = await models.sequelize.securitygroupsAclRoles.update(updateSecuritygroupAclRole, { where: { deleted: deleted } });
    			}
    		} else {
    			objSecuritygroupAclRole = await models.mongoose.securitygroupsAclRoles.findOneAndUpdate({deleted: deleted}, {$set: updateSecuritygroupAclRole}, {new: true});
    		}
    		return objSecuritygroupAclRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSecuritygroupAclRoleByDateModified(dateModified, updateSecuritygroupAclRole) {
    	try {
    		let objSecuritygroupAclRole;
    		if(sql) {
    			objSecuritygroupAclRole = await models.sequelize.securitygroupsAclRoles.findOne({where: { date_modified: dateModified }});
    			if (objSecuritygroupAclRole) {
    				objSecuritygroupAclRole = await models.sequelize.securitygroupsAclRoles.update(updateSecuritygroupAclRole, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objSecuritygroupAclRole = await models.mongoose.securitygroupsAclRoles.findOneAndUpdate({date_modified: dateModified}, {$set: updateSecuritygroupAclRole}, {new: true});
    		}
    		return objSecuritygroupAclRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSecuritygroupAclRoleBySecuritygroupId(securitygroupId, updateSecuritygroupAclRole) {
    	try {
    		let objSecuritygroupAclRole;
    		if(sql) {
    			objSecuritygroupAclRole = await models.sequelize.securitygroupsAclRoles.findOne({where: { securitygroup_id: securitygroupId }});
    			if (objSecuritygroupAclRole) {
    				objSecuritygroupAclRole = await models.sequelize.securitygroupsAclRoles.update(updateSecuritygroupAclRole, { where: { securitygroup_id: securitygroupId } });
    			}
    		} else {
    			objSecuritygroupAclRole = await models.mongoose.securitygroupsAclRoles.findOneAndUpdate({securitygroup_id: securitygroupId}, {$set: updateSecuritygroupAclRole}, {new: true});
    		}
    		return objSecuritygroupAclRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSecuritygroupAclRoleByRoleId(roleId, updateSecuritygroupAclRole) {
    	try {
    		let objSecuritygroupAclRole;
    		if(sql) {
    			objSecuritygroupAclRole = await models.sequelize.securitygroupsAclRoles.findOne({where: { role_id: roleId }});
    			if (objSecuritygroupAclRole) {
    				objSecuritygroupAclRole = await models.sequelize.securitygroupsAclRoles.update(updateSecuritygroupAclRole, { where: { role_id: roleId } });
    			}
    		} else {
    			objSecuritygroupAclRole = await models.mongoose.securitygroupsAclRoles.findOneAndUpdate({role_id: roleId}, {$set: updateSecuritygroupAclRole}, {new: true});
    		}
    		return objSecuritygroupAclRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = SecuritygroupAclRoleService;
//</es-section>
