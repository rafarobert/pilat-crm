/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:55:49 GMT-0400 (Bolivia Time)
 * Time: 14:55:49
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:55:49 GMT-0400 (Bolivia Time)
 * Last time updated: 14:55:49
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

class AccountOpportunityService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAccountsOpportunities(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.accountsOpportunities.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['_id','ASC']],
                });
			} else {
				return await models.mongoose.accountsOpportunities.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAccountsOpportunities(select = []) {
		try {
			if(sql) {
				return await models.sequelize.accountsOpportunities.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.accountsOpportunities.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAccountOpportunity(newAccountOpportunity) {
		try {
			let objAccountOpportunity;
			if(util.PrimaryKeyTypeIsString(models.sequelize.accountsOpportunities.primaryKeys.id.type.toString())) {
			    newAccountOpportunity.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAccountOpportunity = await models.sequelize.accountsOpportunities.create(newAccountOpportunity);
			} else {
				objAccountOpportunity = new models.mongoose.accountsOpportunities(newAccountOpportunity);
				await objAccountOpportunity.save();
			}
			return objAccountOpportunity;
		} catch (error) {
			throw error;
		}
	}

	static async updateAccountOpportunity(id, updateAccountOpportunity) {
		try {
			let objAccountOpportunity;
			if(sql) {
				objAccountOpportunity = await models.sequelize.accountsOpportunities.findOne({where: { id: util.String(id) }});
				if (objAccountOpportunity) {
					await models.sequelize.accountsOpportunities.update(updateAccountOpportunity, { where: { id: util.String(id) } });
					objAccountOpportunity = await models.sequelize.accountsOpportunities.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateAccountOpportunity._id;
				objAccountOpportunity = await models.mongoose.accountsOpportunities.findOneAndUpdate({id:id}, {$set: updateAccountOpportunity}, {new: true});
			}
			return objAccountOpportunity;
		} catch (error) {
			throw error;
		}
	}

	static async getAAccountOpportunity(id, query) {
		try {
			let objAccountOpportunity;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAccountOpportunity = await models.sequelize.accountsOpportunities.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAccountOpportunity = await models.mongoose.accountsOpportunities.find({id:util.String(id)}).select(query.select);
			}
			return objAccountOpportunity;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAccountOpportunity(id) {
		try {
			let objAccountOpportunity;
			if(sql) {
				objAccountOpportunity = await models.sequelize.accountsOpportunities.findOne({ where: { id: util.String(id) } });
				if (objAccountOpportunity) {
					await models.sequelize.accountsOpportunities.destroy({where: { id: util.String(id) }});
				}
			} else {
				objAccountOpportunity = await models.mongoose.accountsOpportunities.deleteOne({id:util.String(id)});
			}
			return objAccountOpportunity;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAccountOpportunity;
    		if(sql) {
    			objAccountOpportunity = await models.sequelize.accountsOpportunities.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAccountOpportunity = await models.mongoose.accountsOpportunities.findOne({id: id});
    		}
    		return objAccountOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAccountOpportunity;
    		if(sql) {
    			objAccountOpportunity = await models.sequelize.accountsOpportunities.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAccountOpportunity = await models.mongoose.accountsOpportunities.findOne({deleted: deleted});
    		}
    		return objAccountOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByOpportunityId(opportunityId, query = {}) {
    	try {
    		let objAccountOpportunity;
    		if(sql) {
    			objAccountOpportunity = await models.sequelize.accountsOpportunities.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { opportunity_id: opportunityId },
    			});
    		} else {
    			objAccountOpportunity = await models.mongoose.accountsOpportunities.findOne({opportunity_id: opportunityId});
    		}
    		return objAccountOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAccountId(accountId, query = {}) {
    	try {
    		let objAccountOpportunity;
    		if(sql) {
    			objAccountOpportunity = await models.sequelize.accountsOpportunities.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { account_id: accountId },
    			});
    		} else {
    			objAccountOpportunity = await models.mongoose.accountsOpportunities.findOne({account_id: accountId});
    		}
    		return objAccountOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAccountOpportunity;
    		if(sql) {
    			objAccountOpportunity = await models.sequelize.accountsOpportunities.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAccountOpportunity = await models.mongoose.accountsOpportunities.findOne({date_modified: dateModified});
    		}
    		return objAccountOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAccountOpportunityById(id, updateAccountOpportunity) {
    	try {
    		let objAccountOpportunity;
    		if(sql) {
    			objAccountOpportunity = await models.sequelize.accountsOpportunities.findOne({where: { id: id }});
    			if (objAccountOpportunity) {
    				objAccountOpportunity = await models.sequelize.accountsOpportunities.update(updateAccountOpportunity, { where: { id: id } });
    			}
    		} else {
    			objAccountOpportunity = await models.mongoose.accountsOpportunities.findOneAndUpdate({id: id}, {$set: updateAccountOpportunity}, {new: true});
    		}
    		return objAccountOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountOpportunityByDeleted(deleted, updateAccountOpportunity) {
    	try {
    		let objAccountOpportunity;
    		if(sql) {
    			objAccountOpportunity = await models.sequelize.accountsOpportunities.findOne({where: { deleted: deleted }});
    			if (objAccountOpportunity) {
    				objAccountOpportunity = await models.sequelize.accountsOpportunities.update(updateAccountOpportunity, { where: { deleted: deleted } });
    			}
    		} else {
    			objAccountOpportunity = await models.mongoose.accountsOpportunities.findOneAndUpdate({deleted: deleted}, {$set: updateAccountOpportunity}, {new: true});
    		}
    		return objAccountOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountOpportunityByOpportunityId(opportunityId, updateAccountOpportunity) {
    	try {
    		let objAccountOpportunity;
    		if(sql) {
    			objAccountOpportunity = await models.sequelize.accountsOpportunities.findOne({where: { opportunity_id: opportunityId }});
    			if (objAccountOpportunity) {
    				objAccountOpportunity = await models.sequelize.accountsOpportunities.update(updateAccountOpportunity, { where: { opportunity_id: opportunityId } });
    			}
    		} else {
    			objAccountOpportunity = await models.mongoose.accountsOpportunities.findOneAndUpdate({opportunity_id: opportunityId}, {$set: updateAccountOpportunity}, {new: true});
    		}
    		return objAccountOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountOpportunityByAccountId(accountId, updateAccountOpportunity) {
    	try {
    		let objAccountOpportunity;
    		if(sql) {
    			objAccountOpportunity = await models.sequelize.accountsOpportunities.findOne({where: { account_id: accountId }});
    			if (objAccountOpportunity) {
    				objAccountOpportunity = await models.sequelize.accountsOpportunities.update(updateAccountOpportunity, { where: { account_id: accountId } });
    			}
    		} else {
    			objAccountOpportunity = await models.mongoose.accountsOpportunities.findOneAndUpdate({account_id: accountId}, {$set: updateAccountOpportunity}, {new: true});
    		}
    		return objAccountOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountOpportunityByDateModified(dateModified, updateAccountOpportunity) {
    	try {
    		let objAccountOpportunity;
    		if(sql) {
    			objAccountOpportunity = await models.sequelize.accountsOpportunities.findOne({where: { date_modified: dateModified }});
    			if (objAccountOpportunity) {
    				objAccountOpportunity = await models.sequelize.accountsOpportunities.update(updateAccountOpportunity, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAccountOpportunity = await models.mongoose.accountsOpportunities.findOneAndUpdate({date_modified: dateModified}, {$set: updateAccountOpportunity}, {new: true});
    		}
    		return objAccountOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AccountOpportunityService;
//</es-section>
