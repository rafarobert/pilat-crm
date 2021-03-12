/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:44 GMT-0400 (Bolivia Time)
 * Time: 14:57:44
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:44 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:44
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

class SecuritygroupUserService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllSecuritygroupsUsers(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.securitygroupsUsers.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.securitygroupsUsers.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllSecuritygroupsUsers(select = []) {
		try {
			if(sql) {
				return await models.sequelize.securitygroupsUsers.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.securitygroupsUsers.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addSecuritygroupUser(newSecuritygroupUser) {
		try {
			let objSecuritygroupUser;
			if(util.PrimaryKeyTypeIsString(models.sequelize.securitygroupsUsers.primaryKeys.id.type.toString())) {
			    newSecuritygroupUser.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objSecuritygroupUser = await models.sequelize.securitygroupsUsers.create(newSecuritygroupUser);
			} else {
				objSecuritygroupUser = new models.mongoose.securitygroupsUsers(newSecuritygroupUser);
				await objSecuritygroupUser.save();
			}
			return objSecuritygroupUser;
		} catch (error) {
			throw error;
		}
	}

	static async updateSecuritygroupUser(id, updateSecuritygroupUser) {
		try {
			let objSecuritygroupUser;
			if(sql) {
				objSecuritygroupUser = await models.sequelize.securitygroupsUsers.findOne({where: { id: util.String(id) }});
				if (objSecuritygroupUser) {
					await models.sequelize.securitygroupsUsers.update(updateSecuritygroupUser, { where: { id: util.String(id) } });
					objSecuritygroupUser = await models.sequelize.securitygroupsUsers.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateSecuritygroupUser._id;
				objSecuritygroupUser = await models.mongoose.securitygroupsUsers.findOneAndUpdate({id:id}, {$set: updateSecuritygroupUser}, {new: true});
			}
			return objSecuritygroupUser;
		} catch (error) {
			throw error;
		}
	}

	static async getASecuritygroupUser(id, query) {
		try {
			let objSecuritygroupUser;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objSecuritygroupUser = await models.sequelize.securitygroupsUsers.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objSecuritygroupUser = await models.mongoose.securitygroupsUsers.find({id:util.String(id)}).select(query.select);
			}
			return objSecuritygroupUser;
		} catch (error) {
			throw error;
		}
	}

	static async deleteSecuritygroupUser(id) {
		try {
			let objSecuritygroupUser;
			if(sql) {
				objSecuritygroupUser = await models.sequelize.securitygroupsUsers.findOne({ where: { id: util.String(id) } });
				if (objSecuritygroupUser) {
					await models.sequelize.securitygroupsUsers.destroy({where: { id: util.String(id) }});
				}
			} else {
				objSecuritygroupUser = await models.mongoose.securitygroupsUsers.deleteOne({id:util.String(id)});
			}
			return objSecuritygroupUser;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objSecuritygroupUser;
    		if(sql) {
    			objSecuritygroupUser = await models.sequelize.securitygroupsUsers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objSecuritygroupUser = await models.mongoose.securitygroupsUsers.findOne({id: id});
    		}
    		return objSecuritygroupUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objSecuritygroupUser;
    		if(sql) {
    			objSecuritygroupUser = await models.sequelize.securitygroupsUsers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objSecuritygroupUser = await models.mongoose.securitygroupsUsers.findOne({deleted: deleted});
    		}
    		return objSecuritygroupUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPrimaryGroup(primaryGroup, query = {}) {
    	try {
    		let objSecuritygroupUser;
    		if(sql) {
    			objSecuritygroupUser = await models.sequelize.securitygroupsUsers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { primary_group: primaryGroup },
    			});
    		} else {
    			objSecuritygroupUser = await models.mongoose.securitygroupsUsers.findOne({primary_group: primaryGroup});
    		}
    		return objSecuritygroupUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByNoninheritable(noninheritable, query = {}) {
    	try {
    		let objSecuritygroupUser;
    		if(sql) {
    			objSecuritygroupUser = await models.sequelize.securitygroupsUsers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { noninheritable: noninheritable },
    			});
    		} else {
    			objSecuritygroupUser = await models.mongoose.securitygroupsUsers.findOne({noninheritable: noninheritable});
    		}
    		return objSecuritygroupUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySecuritygroupId(securitygroupId, query = {}) {
    	try {
    		let objSecuritygroupUser;
    		if(sql) {
    			objSecuritygroupUser = await models.sequelize.securitygroupsUsers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { securitygroup_id: securitygroupId },
    			});
    		} else {
    			objSecuritygroupUser = await models.mongoose.securitygroupsUsers.findOne({securitygroup_id: securitygroupId});
    		}
    		return objSecuritygroupUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUserId(userId, query = {}) {
    	try {
    		let objSecuritygroupUser;
    		if(sql) {
    			objSecuritygroupUser = await models.sequelize.securitygroupsUsers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { user_id: userId },
    			});
    		} else {
    			objSecuritygroupUser = await models.mongoose.securitygroupsUsers.findOne({user_id: userId});
    		}
    		return objSecuritygroupUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objSecuritygroupUser;
    		if(sql) {
    			objSecuritygroupUser = await models.sequelize.securitygroupsUsers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objSecuritygroupUser = await models.mongoose.securitygroupsUsers.findOne({date_modified: dateModified});
    		}
    		return objSecuritygroupUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateSecuritygroupUserById(id, updateSecuritygroupUser) {
    	try {
    		let objSecuritygroupUser;
    		if(sql) {
    			objSecuritygroupUser = await models.sequelize.securitygroupsUsers.findOne({where: { id: id }});
    			if (objSecuritygroupUser) {
    				objSecuritygroupUser = await models.sequelize.securitygroupsUsers.update(updateSecuritygroupUser, { where: { id: id } });
    			}
    		} else {
    			objSecuritygroupUser = await models.mongoose.securitygroupsUsers.findOneAndUpdate({id: id}, {$set: updateSecuritygroupUser}, {new: true});
    		}
    		return objSecuritygroupUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSecuritygroupUserByDeleted(deleted, updateSecuritygroupUser) {
    	try {
    		let objSecuritygroupUser;
    		if(sql) {
    			objSecuritygroupUser = await models.sequelize.securitygroupsUsers.findOne({where: { deleted: deleted }});
    			if (objSecuritygroupUser) {
    				objSecuritygroupUser = await models.sequelize.securitygroupsUsers.update(updateSecuritygroupUser, { where: { deleted: deleted } });
    			}
    		} else {
    			objSecuritygroupUser = await models.mongoose.securitygroupsUsers.findOneAndUpdate({deleted: deleted}, {$set: updateSecuritygroupUser}, {new: true});
    		}
    		return objSecuritygroupUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSecuritygroupUserByPrimaryGroup(primaryGroup, updateSecuritygroupUser) {
    	try {
    		let objSecuritygroupUser;
    		if(sql) {
    			objSecuritygroupUser = await models.sequelize.securitygroupsUsers.findOne({where: { primary_group: primaryGroup }});
    			if (objSecuritygroupUser) {
    				objSecuritygroupUser = await models.sequelize.securitygroupsUsers.update(updateSecuritygroupUser, { where: { primary_group: primaryGroup } });
    			}
    		} else {
    			objSecuritygroupUser = await models.mongoose.securitygroupsUsers.findOneAndUpdate({primary_group: primaryGroup}, {$set: updateSecuritygroupUser}, {new: true});
    		}
    		return objSecuritygroupUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSecuritygroupUserByNoninheritable(noninheritable, updateSecuritygroupUser) {
    	try {
    		let objSecuritygroupUser;
    		if(sql) {
    			objSecuritygroupUser = await models.sequelize.securitygroupsUsers.findOne({where: { noninheritable: noninheritable }});
    			if (objSecuritygroupUser) {
    				objSecuritygroupUser = await models.sequelize.securitygroupsUsers.update(updateSecuritygroupUser, { where: { noninheritable: noninheritable } });
    			}
    		} else {
    			objSecuritygroupUser = await models.mongoose.securitygroupsUsers.findOneAndUpdate({noninheritable: noninheritable}, {$set: updateSecuritygroupUser}, {new: true});
    		}
    		return objSecuritygroupUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSecuritygroupUserBySecuritygroupId(securitygroupId, updateSecuritygroupUser) {
    	try {
    		let objSecuritygroupUser;
    		if(sql) {
    			objSecuritygroupUser = await models.sequelize.securitygroupsUsers.findOne({where: { securitygroup_id: securitygroupId }});
    			if (objSecuritygroupUser) {
    				objSecuritygroupUser = await models.sequelize.securitygroupsUsers.update(updateSecuritygroupUser, { where: { securitygroup_id: securitygroupId } });
    			}
    		} else {
    			objSecuritygroupUser = await models.mongoose.securitygroupsUsers.findOneAndUpdate({securitygroup_id: securitygroupId}, {$set: updateSecuritygroupUser}, {new: true});
    		}
    		return objSecuritygroupUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSecuritygroupUserByUserId(userId, updateSecuritygroupUser) {
    	try {
    		let objSecuritygroupUser;
    		if(sql) {
    			objSecuritygroupUser = await models.sequelize.securitygroupsUsers.findOne({where: { user_id: userId }});
    			if (objSecuritygroupUser) {
    				objSecuritygroupUser = await models.sequelize.securitygroupsUsers.update(updateSecuritygroupUser, { where: { user_id: userId } });
    			}
    		} else {
    			objSecuritygroupUser = await models.mongoose.securitygroupsUsers.findOneAndUpdate({user_id: userId}, {$set: updateSecuritygroupUser}, {new: true});
    		}
    		return objSecuritygroupUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSecuritygroupUserByDateModified(dateModified, updateSecuritygroupUser) {
    	try {
    		let objSecuritygroupUser;
    		if(sql) {
    			objSecuritygroupUser = await models.sequelize.securitygroupsUsers.findOne({where: { date_modified: dateModified }});
    			if (objSecuritygroupUser) {
    				objSecuritygroupUser = await models.sequelize.securitygroupsUsers.update(updateSecuritygroupUser, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objSecuritygroupUser = await models.mongoose.securitygroupsUsers.findOneAndUpdate({date_modified: dateModified}, {$set: updateSecuritygroupUser}, {new: true});
    		}
    		return objSecuritygroupUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = SecuritygroupUserService;
//</es-section>
