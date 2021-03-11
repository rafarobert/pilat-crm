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

class AccountCaseService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAccountsCases(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.accountsCases.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.accountsCases.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAccountsCases(select = []) {
		try {
			if(sql) {
				return await models.sequelize.accountsCases.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.accountsCases.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAccountCase(newAccountCase) {
		try {
			let objAccountCase;
			if(util.PrimaryKeyTypeIsString(models.sequelize.accountsCases.primaryKeys.id.type.toString())) {
			    newAccountCase.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAccountCase = await models.sequelize.accountsCases.create(newAccountCase);
			} else {
				objAccountCase = new models.mongoose.accountsCases(newAccountCase);
				await objAccountCase.save();
			}
			return objAccountCase;
		} catch (error) {
			throw error;
		}
	}

	static async updateAccountCase(id, updateAccountCase) {
		try {
			let objAccountCase;
			if(sql) {
				objAccountCase = await models.sequelize.accountsCases.findOne({where: { id: util.String(id) }});
				if (objAccountCase) {
					await models.sequelize.accountsCases.update(updateAccountCase, { where: { id: util.String(id) } });
					objAccountCase = await models.sequelize.accountsCases.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateAccountCase._id;
				objAccountCase = await models.mongoose.accountsCases.findOneAndUpdate({id:id}, {$set: updateAccountCase}, {new: true});
			}
			return objAccountCase;
		} catch (error) {
			throw error;
		}
	}

	static async getAAccountCase(id, query) {
		try {
			let objAccountCase;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAccountCase = await models.sequelize.accountsCases.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAccountCase = await models.mongoose.accountsCases.find({id:util.String(id)}).select(query.select);
			}
			return objAccountCase;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAccountCase(id) {
		try {
			let objAccountCase;
			if(sql) {
				objAccountCase = await models.sequelize.accountsCases.findOne({ where: { id: util.String(id) } });
				if (objAccountCase) {
					await models.sequelize.accountsCases.destroy({where: { id: util.String(id) }});
				}
			} else {
				objAccountCase = await models.mongoose.accountsCases.deleteOne({id:util.String(id)});
			}
			return objAccountCase;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAccountCase;
    		if(sql) {
    			objAccountCase = await models.sequelize.accountsCases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAccountCase = await models.mongoose.accountsCases.findOne({id: id});
    		}
    		return objAccountCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAccountCase;
    		if(sql) {
    			objAccountCase = await models.sequelize.accountsCases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAccountCase = await models.mongoose.accountsCases.findOne({deleted: deleted});
    		}
    		return objAccountCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAccountId(accountId, query = {}) {
    	try {
    		let objAccountCase;
    		if(sql) {
    			objAccountCase = await models.sequelize.accountsCases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { account_id: accountId },
    			});
    		} else {
    			objAccountCase = await models.mongoose.accountsCases.findOne({account_id: accountId});
    		}
    		return objAccountCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCaseId(caseId, query = {}) {
    	try {
    		let objAccountCase;
    		if(sql) {
    			objAccountCase = await models.sequelize.accountsCases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { case_id: caseId },
    			});
    		} else {
    			objAccountCase = await models.mongoose.accountsCases.findOne({case_id: caseId});
    		}
    		return objAccountCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAccountCase;
    		if(sql) {
    			objAccountCase = await models.sequelize.accountsCases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAccountCase = await models.mongoose.accountsCases.findOne({date_modified: dateModified});
    		}
    		return objAccountCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAccountCaseById(id, updateAccountCase) {
    	try {
    		let objAccountCase;
    		if(sql) {
    			objAccountCase = await models.sequelize.accountsCases.findOne({where: { id: id }});
    			if (objAccountCase) {
    				objAccountCase = await models.sequelize.accountsCases.update(updateAccountCase, { where: { id: id } });
    			}
    		} else {
    			objAccountCase = await models.mongoose.accountsCases.findOneAndUpdate({id: id}, {$set: updateAccountCase}, {new: true});
    		}
    		return objAccountCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountCaseByDeleted(deleted, updateAccountCase) {
    	try {
    		let objAccountCase;
    		if(sql) {
    			objAccountCase = await models.sequelize.accountsCases.findOne({where: { deleted: deleted }});
    			if (objAccountCase) {
    				objAccountCase = await models.sequelize.accountsCases.update(updateAccountCase, { where: { deleted: deleted } });
    			}
    		} else {
    			objAccountCase = await models.mongoose.accountsCases.findOneAndUpdate({deleted: deleted}, {$set: updateAccountCase}, {new: true});
    		}
    		return objAccountCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountCaseByAccountId(accountId, updateAccountCase) {
    	try {
    		let objAccountCase;
    		if(sql) {
    			objAccountCase = await models.sequelize.accountsCases.findOne({where: { account_id: accountId }});
    			if (objAccountCase) {
    				objAccountCase = await models.sequelize.accountsCases.update(updateAccountCase, { where: { account_id: accountId } });
    			}
    		} else {
    			objAccountCase = await models.mongoose.accountsCases.findOneAndUpdate({account_id: accountId}, {$set: updateAccountCase}, {new: true});
    		}
    		return objAccountCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountCaseByCaseId(caseId, updateAccountCase) {
    	try {
    		let objAccountCase;
    		if(sql) {
    			objAccountCase = await models.sequelize.accountsCases.findOne({where: { case_id: caseId }});
    			if (objAccountCase) {
    				objAccountCase = await models.sequelize.accountsCases.update(updateAccountCase, { where: { case_id: caseId } });
    			}
    		} else {
    			objAccountCase = await models.mongoose.accountsCases.findOneAndUpdate({case_id: caseId}, {$set: updateAccountCase}, {new: true});
    		}
    		return objAccountCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountCaseByDateModified(dateModified, updateAccountCase) {
    	try {
    		let objAccountCase;
    		if(sql) {
    			objAccountCase = await models.sequelize.accountsCases.findOne({where: { date_modified: dateModified }});
    			if (objAccountCase) {
    				objAccountCase = await models.sequelize.accountsCases.update(updateAccountCase, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAccountCase = await models.mongoose.accountsCases.findOneAndUpdate({date_modified: dateModified}, {$set: updateAccountCase}, {new: true});
    		}
    		return objAccountCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AccountCaseService;
//</es-section>
