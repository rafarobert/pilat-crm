/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:41:45 GMT-0400 (Bolivia Time)
 * Time: 4:41:45
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:41:45 GMT-0400 (Bolivia Time)
 * Last time updated: 4:41:45
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

class AclRoleService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAclRoles(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aclRoles.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aclRoles.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAclRoles(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aclRoles.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aclRoles.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAclRole(newAclRole) {
		try {
			let objAclRole;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aclRoles.primaryKeys.id.type.toString())) {
			    newAclRole.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAclRole = await models.sequelize.aclRoles.create(newAclRole);
			} else {
				objAclRole = new models.mongoose.aclRoles(newAclRole);
				await objAclRole.save();
			}
			return objAclRole;
		} catch (error) {
			throw error;
		}
	}

	static async updateAclRole(id, updateAclRole) {
		try {
			let objAclRole;
			if(sql) {
				objAclRole = await models.sequelize.aclRoles.findOne({where: { id: util.Char(id) }});
				if (objAclRole) {
					await models.sequelize.aclRoles.update(updateAclRole, { where: { id: util.Char(id) } });
					objAclRole = await models.sequelize.aclRoles.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAclRole._id;
				objAclRole = await models.mongoose.aclRoles.findOneAndUpdate({id:id}, {$set: updateAclRole}, {new: true});
			}
			return objAclRole;
		} catch (error) {
			throw error;
		}
	}

	static async getAAclRole(id, query) {
		try {
			let objAclRole;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAclRole = await models.sequelize.aclRoles.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAclRole = await models.mongoose.aclRoles.find({id:util.Char(id)}).select(query.select);
			}
			return objAclRole;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAclRole(id) {
		try {
			let objAclRole;
			if(sql) {
				objAclRole = await models.sequelize.aclRoles.findOne({ where: { id: util.Char(id) } });
				if (objAclRole) {
					await models.sequelize.aclRoles.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAclRole = await models.mongoose.aclRoles.deleteOne({id:util.Char(id)});
			}
			return objAclRole;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAclRole;
    		if(sql) {
    			objAclRole = await models.sequelize.aclRoles.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAclRole = await models.mongoose.aclRoles.findOne({id: id});
    		}
    		return objAclRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAclRole;
    		if(sql) {
    			objAclRole = await models.sequelize.aclRoles.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAclRole = await models.mongoose.aclRoles.findOne({deleted: deleted});
    		}
    		return objAclRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objAclRole;
    		if(sql) {
    			objAclRole = await models.sequelize.aclRoles.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objAclRole = await models.mongoose.aclRoles.findOne({name: name});
    		}
    		return objAclRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objAclRole;
    		if(sql) {
    			objAclRole = await models.sequelize.aclRoles.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objAclRole = await models.mongoose.aclRoles.findOne({description: description});
    		}
    		return objAclRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objAclRole;
    		if(sql) {
    			objAclRole = await models.sequelize.aclRoles.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objAclRole = await models.mongoose.aclRoles.findOne({date_entered: dateEntered});
    		}
    		return objAclRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAclRole;
    		if(sql) {
    			objAclRole = await models.sequelize.aclRoles.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAclRole = await models.mongoose.aclRoles.findOne({date_modified: dateModified});
    		}
    		return objAclRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objAclRole;
    		if(sql) {
    			objAclRole = await models.sequelize.aclRoles.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objAclRole = await models.mongoose.aclRoles.findOne({modified_user_id: modifiedUserId});
    		}
    		return objAclRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAclRole;
    		if(sql) {
    			objAclRole = await models.sequelize.aclRoles.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAclRole = await models.mongoose.aclRoles.findOne({created_by: createdBy});
    		}
    		return objAclRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAclRoleById(id, updateAclRole) {
    	try {
    		let objAclRole;
    		if(sql) {
    			objAclRole = await models.sequelize.aclRoles.findOne({where: { id: id }});
    			if (objAclRole) {
    				objAclRole = await models.sequelize.aclRoles.update(updateAclRole, { where: { id: id } });
    			}
    		} else {
    			objAclRole = await models.mongoose.aclRoles.findOneAndUpdate({id: id}, {$set: updateAclRole}, {new: true});
    		}
    		return objAclRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAclRoleByDeleted(deleted, updateAclRole) {
    	try {
    		let objAclRole;
    		if(sql) {
    			objAclRole = await models.sequelize.aclRoles.findOne({where: { deleted: deleted }});
    			if (objAclRole) {
    				objAclRole = await models.sequelize.aclRoles.update(updateAclRole, { where: { deleted: deleted } });
    			}
    		} else {
    			objAclRole = await models.mongoose.aclRoles.findOneAndUpdate({deleted: deleted}, {$set: updateAclRole}, {new: true});
    		}
    		return objAclRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAclRoleByName(name, updateAclRole) {
    	try {
    		let objAclRole;
    		if(sql) {
    			objAclRole = await models.sequelize.aclRoles.findOne({where: { name: name }});
    			if (objAclRole) {
    				objAclRole = await models.sequelize.aclRoles.update(updateAclRole, { where: { name: name } });
    			}
    		} else {
    			objAclRole = await models.mongoose.aclRoles.findOneAndUpdate({name: name}, {$set: updateAclRole}, {new: true});
    		}
    		return objAclRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAclRoleByDescription(description, updateAclRole) {
    	try {
    		let objAclRole;
    		if(sql) {
    			objAclRole = await models.sequelize.aclRoles.findOne({where: { description: description }});
    			if (objAclRole) {
    				objAclRole = await models.sequelize.aclRoles.update(updateAclRole, { where: { description: description } });
    			}
    		} else {
    			objAclRole = await models.mongoose.aclRoles.findOneAndUpdate({description: description}, {$set: updateAclRole}, {new: true});
    		}
    		return objAclRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAclRoleByDateEntered(dateEntered, updateAclRole) {
    	try {
    		let objAclRole;
    		if(sql) {
    			objAclRole = await models.sequelize.aclRoles.findOne({where: { date_entered: dateEntered }});
    			if (objAclRole) {
    				objAclRole = await models.sequelize.aclRoles.update(updateAclRole, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objAclRole = await models.mongoose.aclRoles.findOneAndUpdate({date_entered: dateEntered}, {$set: updateAclRole}, {new: true});
    		}
    		return objAclRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAclRoleByDateModified(dateModified, updateAclRole) {
    	try {
    		let objAclRole;
    		if(sql) {
    			objAclRole = await models.sequelize.aclRoles.findOne({where: { date_modified: dateModified }});
    			if (objAclRole) {
    				objAclRole = await models.sequelize.aclRoles.update(updateAclRole, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAclRole = await models.mongoose.aclRoles.findOneAndUpdate({date_modified: dateModified}, {$set: updateAclRole}, {new: true});
    		}
    		return objAclRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAclRoleByModifiedUserId(modifiedUserId, updateAclRole) {
    	try {
    		let objAclRole;
    		if(sql) {
    			objAclRole = await models.sequelize.aclRoles.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objAclRole) {
    				objAclRole = await models.sequelize.aclRoles.update(updateAclRole, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objAclRole = await models.mongoose.aclRoles.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateAclRole}, {new: true});
    		}
    		return objAclRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAclRoleByCreatedBy(createdBy, updateAclRole) {
    	try {
    		let objAclRole;
    		if(sql) {
    			objAclRole = await models.sequelize.aclRoles.findOne({where: { created_by: createdBy }});
    			if (objAclRole) {
    				objAclRole = await models.sequelize.aclRoles.update(updateAclRole, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAclRole = await models.mongoose.aclRoles.findOneAndUpdate({created_by: createdBy}, {$set: updateAclRole}, {new: true});
    		}
    		return objAclRole;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AclRoleService;
//</es-section>
