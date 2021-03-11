/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:55:48 GMT-0400 (Bolivia Time)
 * Time: 14:55:48
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:55:48 GMT-0400 (Bolivia Time)
 * Last time updated: 14:55:48
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

class AccountBugService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAccountsBugs(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.accountsBugs.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.accountsBugs.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAccountsBugs(select = []) {
		try {
			if(sql) {
				return await models.sequelize.accountsBugs.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.accountsBugs.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAccountBug(newAccountBug) {
		try {
			let objAccountBug;
			if(util.PrimaryKeyTypeIsString(models.sequelize.accountsBugs.primaryKeys.id.type.toString())) {
			    newAccountBug.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAccountBug = await models.sequelize.accountsBugs.create(newAccountBug);
			} else {
				objAccountBug = new models.mongoose.accountsBugs(newAccountBug);
				await objAccountBug.save();
			}
			return objAccountBug;
		} catch (error) {
			throw error;
		}
	}

	static async updateAccountBug(id, updateAccountBug) {
		try {
			let objAccountBug;
			if(sql) {
				objAccountBug = await models.sequelize.accountsBugs.findOne({where: { id: util.String(id) }});
				if (objAccountBug) {
					await models.sequelize.accountsBugs.update(updateAccountBug, { where: { id: util.String(id) } });
					objAccountBug = await models.sequelize.accountsBugs.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateAccountBug._id;
				objAccountBug = await models.mongoose.accountsBugs.findOneAndUpdate({id:id}, {$set: updateAccountBug}, {new: true});
			}
			return objAccountBug;
		} catch (error) {
			throw error;
		}
	}

	static async getAAccountBug(id, query) {
		try {
			let objAccountBug;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAccountBug = await models.sequelize.accountsBugs.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAccountBug = await models.mongoose.accountsBugs.find({id:util.String(id)}).select(query.select);
			}
			return objAccountBug;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAccountBug(id) {
		try {
			let objAccountBug;
			if(sql) {
				objAccountBug = await models.sequelize.accountsBugs.findOne({ where: { id: util.String(id) } });
				if (objAccountBug) {
					await models.sequelize.accountsBugs.destroy({where: { id: util.String(id) }});
				}
			} else {
				objAccountBug = await models.mongoose.accountsBugs.deleteOne({id:util.String(id)});
			}
			return objAccountBug;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAccountBug;
    		if(sql) {
    			objAccountBug = await models.sequelize.accountsBugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAccountBug = await models.mongoose.accountsBugs.findOne({id: id});
    		}
    		return objAccountBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAccountBug;
    		if(sql) {
    			objAccountBug = await models.sequelize.accountsBugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAccountBug = await models.mongoose.accountsBugs.findOne({deleted: deleted});
    		}
    		return objAccountBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAccountId(accountId, query = {}) {
    	try {
    		let objAccountBug;
    		if(sql) {
    			objAccountBug = await models.sequelize.accountsBugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { account_id: accountId },
    			});
    		} else {
    			objAccountBug = await models.mongoose.accountsBugs.findOne({account_id: accountId});
    		}
    		return objAccountBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBugId(bugId, query = {}) {
    	try {
    		let objAccountBug;
    		if(sql) {
    			objAccountBug = await models.sequelize.accountsBugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { bug_id: bugId },
    			});
    		} else {
    			objAccountBug = await models.mongoose.accountsBugs.findOne({bug_id: bugId});
    		}
    		return objAccountBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAccountBug;
    		if(sql) {
    			objAccountBug = await models.sequelize.accountsBugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAccountBug = await models.mongoose.accountsBugs.findOne({date_modified: dateModified});
    		}
    		return objAccountBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAccountBugById(id, updateAccountBug) {
    	try {
    		let objAccountBug;
    		if(sql) {
    			objAccountBug = await models.sequelize.accountsBugs.findOne({where: { id: id }});
    			if (objAccountBug) {
    				objAccountBug = await models.sequelize.accountsBugs.update(updateAccountBug, { where: { id: id } });
    			}
    		} else {
    			objAccountBug = await models.mongoose.accountsBugs.findOneAndUpdate({id: id}, {$set: updateAccountBug}, {new: true});
    		}
    		return objAccountBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountBugByDeleted(deleted, updateAccountBug) {
    	try {
    		let objAccountBug;
    		if(sql) {
    			objAccountBug = await models.sequelize.accountsBugs.findOne({where: { deleted: deleted }});
    			if (objAccountBug) {
    				objAccountBug = await models.sequelize.accountsBugs.update(updateAccountBug, { where: { deleted: deleted } });
    			}
    		} else {
    			objAccountBug = await models.mongoose.accountsBugs.findOneAndUpdate({deleted: deleted}, {$set: updateAccountBug}, {new: true});
    		}
    		return objAccountBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountBugByAccountId(accountId, updateAccountBug) {
    	try {
    		let objAccountBug;
    		if(sql) {
    			objAccountBug = await models.sequelize.accountsBugs.findOne({where: { account_id: accountId }});
    			if (objAccountBug) {
    				objAccountBug = await models.sequelize.accountsBugs.update(updateAccountBug, { where: { account_id: accountId } });
    			}
    		} else {
    			objAccountBug = await models.mongoose.accountsBugs.findOneAndUpdate({account_id: accountId}, {$set: updateAccountBug}, {new: true});
    		}
    		return objAccountBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountBugByBugId(bugId, updateAccountBug) {
    	try {
    		let objAccountBug;
    		if(sql) {
    			objAccountBug = await models.sequelize.accountsBugs.findOne({where: { bug_id: bugId }});
    			if (objAccountBug) {
    				objAccountBug = await models.sequelize.accountsBugs.update(updateAccountBug, { where: { bug_id: bugId } });
    			}
    		} else {
    			objAccountBug = await models.mongoose.accountsBugs.findOneAndUpdate({bug_id: bugId}, {$set: updateAccountBug}, {new: true});
    		}
    		return objAccountBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountBugByDateModified(dateModified, updateAccountBug) {
    	try {
    		let objAccountBug;
    		if(sql) {
    			objAccountBug = await models.sequelize.accountsBugs.findOne({where: { date_modified: dateModified }});
    			if (objAccountBug) {
    				objAccountBug = await models.sequelize.accountsBugs.update(updateAccountBug, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAccountBug = await models.mongoose.accountsBugs.findOneAndUpdate({date_modified: dateModified}, {$set: updateAccountBug}, {new: true});
    		}
    		return objAccountBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AccountBugService;
//</es-section>
