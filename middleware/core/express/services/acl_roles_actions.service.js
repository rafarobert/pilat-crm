/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:55:50 GMT-0400 (Bolivia Time)
 * Time: 14:55:50
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:55:50 GMT-0400 (Bolivia Time)
 * Last time updated: 14:55:50
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

class AclRoleActionService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAclRolesActions(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aclRolesActions.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aclRolesActions.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAclRolesActions(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aclRolesActions.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aclRolesActions.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAclRoleAction(newAclRoleAction) {
		try {
			let objAclRoleAction;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aclRolesActions.primaryKeys.id.type.toString())) {
			    newAclRoleAction.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAclRoleAction = await models.sequelize.aclRolesActions.create(newAclRoleAction);
			} else {
				objAclRoleAction = new models.mongoose.aclRolesActions(newAclRoleAction);
				await objAclRoleAction.save();
			}
			return objAclRoleAction;
		} catch (error) {
			throw error;
		}
	}

	static async updateAclRoleAction(id, updateAclRoleAction) {
		try {
			let objAclRoleAction;
			if(sql) {
				objAclRoleAction = await models.sequelize.aclRolesActions.findOne({where: { id: util.String(id) }});
				if (objAclRoleAction) {
					await models.sequelize.aclRolesActions.update(updateAclRoleAction, { where: { id: util.String(id) } });
					objAclRoleAction = await models.sequelize.aclRolesActions.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateAclRoleAction._id;
				objAclRoleAction = await models.mongoose.aclRolesActions.findOneAndUpdate({id:id}, {$set: updateAclRoleAction}, {new: true});
			}
			return objAclRoleAction;
		} catch (error) {
			throw error;
		}
	}

	static async getAAclRoleAction(id, query) {
		try {
			let objAclRoleAction;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAclRoleAction = await models.sequelize.aclRolesActions.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAclRoleAction = await models.mongoose.aclRolesActions.find({id:util.String(id)}).select(query.select);
			}
			return objAclRoleAction;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAclRoleAction(id) {
		try {
			let objAclRoleAction;
			if(sql) {
				objAclRoleAction = await models.sequelize.aclRolesActions.findOne({ where: { id: util.String(id) } });
				if (objAclRoleAction) {
					await models.sequelize.aclRolesActions.destroy({where: { id: util.String(id) }});
				}
			} else {
				objAclRoleAction = await models.mongoose.aclRolesActions.deleteOne({id:util.String(id)});
			}
			return objAclRoleAction;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAclRoleAction;
    		if(sql) {
    			objAclRoleAction = await models.sequelize.aclRolesActions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAclRoleAction = await models.mongoose.aclRolesActions.findOne({id: id});
    		}
    		return objAclRoleAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAclRoleAction;
    		if(sql) {
    			objAclRoleAction = await models.sequelize.aclRolesActions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAclRoleAction = await models.mongoose.aclRolesActions.findOne({deleted: deleted});
    		}
    		return objAclRoleAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAccessOverride(accessOverride, query = {}) {
    	try {
    		let objAclRoleAction;
    		if(sql) {
    			objAclRoleAction = await models.sequelize.aclRolesActions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { access_override: accessOverride },
    			});
    		} else {
    			objAclRoleAction = await models.mongoose.aclRolesActions.findOne({access_override: accessOverride});
    		}
    		return objAclRoleAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRoleId(roleId, query = {}) {
    	try {
    		let objAclRoleAction;
    		if(sql) {
    			objAclRoleAction = await models.sequelize.aclRolesActions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { role_id: roleId },
    			});
    		} else {
    			objAclRoleAction = await models.mongoose.aclRolesActions.findOne({role_id: roleId});
    		}
    		return objAclRoleAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByActionId(actionId, query = {}) {
    	try {
    		let objAclRoleAction;
    		if(sql) {
    			objAclRoleAction = await models.sequelize.aclRolesActions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { action_id: actionId },
    			});
    		} else {
    			objAclRoleAction = await models.mongoose.aclRolesActions.findOne({action_id: actionId});
    		}
    		return objAclRoleAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAclRoleAction;
    		if(sql) {
    			objAclRoleAction = await models.sequelize.aclRolesActions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAclRoleAction = await models.mongoose.aclRolesActions.findOne({date_modified: dateModified});
    		}
    		return objAclRoleAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAclRoleActionById(id, updateAclRoleAction) {
    	try {
    		let objAclRoleAction;
    		if(sql) {
    			objAclRoleAction = await models.sequelize.aclRolesActions.findOne({where: { id: id }});
    			if (objAclRoleAction) {
    				objAclRoleAction = await models.sequelize.aclRolesActions.update(updateAclRoleAction, { where: { id: id } });
    			}
    		} else {
    			objAclRoleAction = await models.mongoose.aclRolesActions.findOneAndUpdate({id: id}, {$set: updateAclRoleAction}, {new: true});
    		}
    		return objAclRoleAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAclRoleActionByDeleted(deleted, updateAclRoleAction) {
    	try {
    		let objAclRoleAction;
    		if(sql) {
    			objAclRoleAction = await models.sequelize.aclRolesActions.findOne({where: { deleted: deleted }});
    			if (objAclRoleAction) {
    				objAclRoleAction = await models.sequelize.aclRolesActions.update(updateAclRoleAction, { where: { deleted: deleted } });
    			}
    		} else {
    			objAclRoleAction = await models.mongoose.aclRolesActions.findOneAndUpdate({deleted: deleted}, {$set: updateAclRoleAction}, {new: true});
    		}
    		return objAclRoleAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAclRoleActionByAccessOverride(accessOverride, updateAclRoleAction) {
    	try {
    		let objAclRoleAction;
    		if(sql) {
    			objAclRoleAction = await models.sequelize.aclRolesActions.findOne({where: { access_override: accessOverride }});
    			if (objAclRoleAction) {
    				objAclRoleAction = await models.sequelize.aclRolesActions.update(updateAclRoleAction, { where: { access_override: accessOverride } });
    			}
    		} else {
    			objAclRoleAction = await models.mongoose.aclRolesActions.findOneAndUpdate({access_override: accessOverride}, {$set: updateAclRoleAction}, {new: true});
    		}
    		return objAclRoleAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAclRoleActionByRoleId(roleId, updateAclRoleAction) {
    	try {
    		let objAclRoleAction;
    		if(sql) {
    			objAclRoleAction = await models.sequelize.aclRolesActions.findOne({where: { role_id: roleId }});
    			if (objAclRoleAction) {
    				objAclRoleAction = await models.sequelize.aclRolesActions.update(updateAclRoleAction, { where: { role_id: roleId } });
    			}
    		} else {
    			objAclRoleAction = await models.mongoose.aclRolesActions.findOneAndUpdate({role_id: roleId}, {$set: updateAclRoleAction}, {new: true});
    		}
    		return objAclRoleAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAclRoleActionByActionId(actionId, updateAclRoleAction) {
    	try {
    		let objAclRoleAction;
    		if(sql) {
    			objAclRoleAction = await models.sequelize.aclRolesActions.findOne({where: { action_id: actionId }});
    			if (objAclRoleAction) {
    				objAclRoleAction = await models.sequelize.aclRolesActions.update(updateAclRoleAction, { where: { action_id: actionId } });
    			}
    		} else {
    			objAclRoleAction = await models.mongoose.aclRolesActions.findOneAndUpdate({action_id: actionId}, {$set: updateAclRoleAction}, {new: true});
    		}
    		return objAclRoleAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAclRoleActionByDateModified(dateModified, updateAclRoleAction) {
    	try {
    		let objAclRoleAction;
    		if(sql) {
    			objAclRoleAction = await models.sequelize.aclRolesActions.findOne({where: { date_modified: dateModified }});
    			if (objAclRoleAction) {
    				objAclRoleAction = await models.sequelize.aclRolesActions.update(updateAclRoleAction, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAclRoleAction = await models.mongoose.aclRolesActions.findOneAndUpdate({date_modified: dateModified}, {$set: updateAclRoleAction}, {new: true});
    		}
    		return objAclRoleAction;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AclRoleActionService;
//</es-section>
