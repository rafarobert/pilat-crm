/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:47 GMT-0400 (Bolivia Time)
 * Time: 15:36:47
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:47 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:47
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

class ProjectAccountService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllProjectsAccounts(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.projectsAccounts.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.projectsAccounts.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllProjectsAccounts(select = []) {
		try {
			if(sql) {
				return await models.sequelize.projectsAccounts.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.projectsAccounts.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addProjectAccount(newProjectAccount) {
		try {
			let objProjectAccount;
			if(util.PrimaryKeyTypeIsString(models.sequelize.projectsAccounts.primaryKeys.id.type.toString())) {
			    newProjectAccount.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objProjectAccount = await models.sequelize.projectsAccounts.create(newProjectAccount);
			} else {
				objProjectAccount = new models.mongoose.projectsAccounts(newProjectAccount);
				await objProjectAccount.save();
			}
			return objProjectAccount;
		} catch (error) {
			throw error;
		}
	}

	static async updateProjectAccount(id, updateProjectAccount) {
		try {
			let objProjectAccount;
			if(sql) {
				objProjectAccount = await models.sequelize.projectsAccounts.findOne({where: { id: util.String(id) }});
				if (objProjectAccount) {
					await models.sequelize.projectsAccounts.update(updateProjectAccount, { where: { id: util.String(id) } });
					objProjectAccount = await models.sequelize.projectsAccounts.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateProjectAccount._id;
				objProjectAccount = await models.mongoose.projectsAccounts.findOneAndUpdate({id:id}, {$set: updateProjectAccount}, {new: true});
			}
			return objProjectAccount;
		} catch (error) {
			throw error;
		}
	}

	static async getAProjectAccount(id, query) {
		try {
			let objProjectAccount;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objProjectAccount = await models.sequelize.projectsAccounts.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objProjectAccount = await models.mongoose.projectsAccounts.find({id:util.String(id)}).select(query.select);
			}
			return objProjectAccount;
		} catch (error) {
			throw error;
		}
	}

	static async deleteProjectAccount(id) {
		try {
			let objProjectAccount;
			if(sql) {
				objProjectAccount = await models.sequelize.projectsAccounts.findOne({ where: { id: util.String(id) } });
				if (objProjectAccount) {
					await models.sequelize.projectsAccounts.destroy({where: { id: util.String(id) }});
				}
			} else {
				objProjectAccount = await models.mongoose.projectsAccounts.deleteOne({id:util.String(id)});
			}
			return objProjectAccount;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objProjectAccount;
    		if(sql) {
    			objProjectAccount = await models.sequelize.projectsAccounts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objProjectAccount = await models.mongoose.projectsAccounts.findOne({id: id});
    		}
    		return objProjectAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objProjectAccount;
    		if(sql) {
    			objProjectAccount = await models.sequelize.projectsAccounts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objProjectAccount = await models.mongoose.projectsAccounts.findOne({deleted: deleted});
    		}
    		return objProjectAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAccountId(accountId, query = {}) {
    	try {
    		let objProjectAccount;
    		if(sql) {
    			objProjectAccount = await models.sequelize.projectsAccounts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { account_id: accountId },
    			});
    		} else {
    			objProjectAccount = await models.mongoose.projectsAccounts.findOne({account_id: accountId});
    		}
    		return objProjectAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByProjectId(projectId, query = {}) {
    	try {
    		let objProjectAccount;
    		if(sql) {
    			objProjectAccount = await models.sequelize.projectsAccounts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { project_id: projectId },
    			});
    		} else {
    			objProjectAccount = await models.mongoose.projectsAccounts.findOne({project_id: projectId});
    		}
    		return objProjectAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objProjectAccount;
    		if(sql) {
    			objProjectAccount = await models.sequelize.projectsAccounts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objProjectAccount = await models.mongoose.projectsAccounts.findOne({date_modified: dateModified});
    		}
    		return objProjectAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateProjectAccountById(id, updateProjectAccount) {
    	try {
    		let objProjectAccount;
    		if(sql) {
    			objProjectAccount = await models.sequelize.projectsAccounts.findOne({where: { id: id }});
    			if (objProjectAccount) {
    				objProjectAccount = await models.sequelize.projectsAccounts.update(updateProjectAccount, { where: { id: id } });
    			}
    		} else {
    			objProjectAccount = await models.mongoose.projectsAccounts.findOneAndUpdate({id: id}, {$set: updateProjectAccount}, {new: true});
    		}
    		return objProjectAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectAccountByDeleted(deleted, updateProjectAccount) {
    	try {
    		let objProjectAccount;
    		if(sql) {
    			objProjectAccount = await models.sequelize.projectsAccounts.findOne({where: { deleted: deleted }});
    			if (objProjectAccount) {
    				objProjectAccount = await models.sequelize.projectsAccounts.update(updateProjectAccount, { where: { deleted: deleted } });
    			}
    		} else {
    			objProjectAccount = await models.mongoose.projectsAccounts.findOneAndUpdate({deleted: deleted}, {$set: updateProjectAccount}, {new: true});
    		}
    		return objProjectAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectAccountByAccountId(accountId, updateProjectAccount) {
    	try {
    		let objProjectAccount;
    		if(sql) {
    			objProjectAccount = await models.sequelize.projectsAccounts.findOne({where: { account_id: accountId }});
    			if (objProjectAccount) {
    				objProjectAccount = await models.sequelize.projectsAccounts.update(updateProjectAccount, { where: { account_id: accountId } });
    			}
    		} else {
    			objProjectAccount = await models.mongoose.projectsAccounts.findOneAndUpdate({account_id: accountId}, {$set: updateProjectAccount}, {new: true});
    		}
    		return objProjectAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectAccountByProjectId(projectId, updateProjectAccount) {
    	try {
    		let objProjectAccount;
    		if(sql) {
    			objProjectAccount = await models.sequelize.projectsAccounts.findOne({where: { project_id: projectId }});
    			if (objProjectAccount) {
    				objProjectAccount = await models.sequelize.projectsAccounts.update(updateProjectAccount, { where: { project_id: projectId } });
    			}
    		} else {
    			objProjectAccount = await models.mongoose.projectsAccounts.findOneAndUpdate({project_id: projectId}, {$set: updateProjectAccount}, {new: true});
    		}
    		return objProjectAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectAccountByDateModified(dateModified, updateProjectAccount) {
    	try {
    		let objProjectAccount;
    		if(sql) {
    			objProjectAccount = await models.sequelize.projectsAccounts.findOne({where: { date_modified: dateModified }});
    			if (objProjectAccount) {
    				objProjectAccount = await models.sequelize.projectsAccounts.update(updateProjectAccount, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objProjectAccount = await models.mongoose.projectsAccounts.findOneAndUpdate({date_modified: dateModified}, {$set: updateProjectAccount}, {new: true});
    		}
    		return objProjectAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = ProjectAccountService;
//</es-section>
