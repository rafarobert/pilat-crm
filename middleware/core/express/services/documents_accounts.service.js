/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:41 GMT-0400 (Bolivia Time)
 * Time: 14:56:41
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:41 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:41
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

class DocumentAccountService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllDocumentsAccounts(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.documentsAccounts.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['_id','ASC']],
                });
			} else {
				return await models.mongoose.documentsAccounts.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllDocumentsAccounts(select = []) {
		try {
			if(sql) {
				return await models.sequelize.documentsAccounts.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.documentsAccounts.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addDocumentAccount(newDocumentAccount) {
		try {
			let objDocumentAccount;
			if(util.PrimaryKeyTypeIsString(models.sequelize.documentsAccounts.primaryKeys.id.type.toString())) {
			    newDocumentAccount.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objDocumentAccount = await models.sequelize.documentsAccounts.create(newDocumentAccount);
			} else {
				objDocumentAccount = new models.mongoose.documentsAccounts(newDocumentAccount);
				await objDocumentAccount.save();
			}
			return objDocumentAccount;
		} catch (error) {
			throw error;
		}
	}

	static async updateDocumentAccount(id, updateDocumentAccount) {
		try {
			let objDocumentAccount;
			if(sql) {
				objDocumentAccount = await models.sequelize.documentsAccounts.findOne({where: { id: util.String(id) }});
				if (objDocumentAccount) {
					await models.sequelize.documentsAccounts.update(updateDocumentAccount, { where: { id: util.String(id) } });
					objDocumentAccount = await models.sequelize.documentsAccounts.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateDocumentAccount._id;
				objDocumentAccount = await models.mongoose.documentsAccounts.findOneAndUpdate({id:id}, {$set: updateDocumentAccount}, {new: true});
			}
			return objDocumentAccount;
		} catch (error) {
			throw error;
		}
	}

	static async getADocumentAccount(id, query) {
		try {
			let objDocumentAccount;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objDocumentAccount = await models.sequelize.documentsAccounts.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objDocumentAccount = await models.mongoose.documentsAccounts.find({id:util.String(id)}).select(query.select);
			}
			return objDocumentAccount;
		} catch (error) {
			throw error;
		}
	}

	static async deleteDocumentAccount(id) {
		try {
			let objDocumentAccount;
			if(sql) {
				objDocumentAccount = await models.sequelize.documentsAccounts.findOne({ where: { id: util.String(id) } });
				if (objDocumentAccount) {
					await models.sequelize.documentsAccounts.destroy({where: { id: util.String(id) }});
				}
			} else {
				objDocumentAccount = await models.mongoose.documentsAccounts.deleteOne({id:util.String(id)});
			}
			return objDocumentAccount;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objDocumentAccount;
    		if(sql) {
    			objDocumentAccount = await models.sequelize.documentsAccounts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objDocumentAccount = await models.mongoose.documentsAccounts.findOne({id: id});
    		}
    		return objDocumentAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objDocumentAccount;
    		if(sql) {
    			objDocumentAccount = await models.sequelize.documentsAccounts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objDocumentAccount = await models.mongoose.documentsAccounts.findOne({deleted: deleted});
    		}
    		return objDocumentAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDocumentId(documentId, query = {}) {
    	try {
    		let objDocumentAccount;
    		if(sql) {
    			objDocumentAccount = await models.sequelize.documentsAccounts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { document_id: documentId },
    			});
    		} else {
    			objDocumentAccount = await models.mongoose.documentsAccounts.findOne({document_id: documentId});
    		}
    		return objDocumentAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAccountId(accountId, query = {}) {
    	try {
    		let objDocumentAccount;
    		if(sql) {
    			objDocumentAccount = await models.sequelize.documentsAccounts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { account_id: accountId },
    			});
    		} else {
    			objDocumentAccount = await models.mongoose.documentsAccounts.findOne({account_id: accountId});
    		}
    		return objDocumentAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objDocumentAccount;
    		if(sql) {
    			objDocumentAccount = await models.sequelize.documentsAccounts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objDocumentAccount = await models.mongoose.documentsAccounts.findOne({date_modified: dateModified});
    		}
    		return objDocumentAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateDocumentAccountById(id, updateDocumentAccount) {
    	try {
    		let objDocumentAccount;
    		if(sql) {
    			objDocumentAccount = await models.sequelize.documentsAccounts.findOne({where: { id: id }});
    			if (objDocumentAccount) {
    				objDocumentAccount = await models.sequelize.documentsAccounts.update(updateDocumentAccount, { where: { id: id } });
    			}
    		} else {
    			objDocumentAccount = await models.mongoose.documentsAccounts.findOneAndUpdate({id: id}, {$set: updateDocumentAccount}, {new: true});
    		}
    		return objDocumentAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentAccountByDeleted(deleted, updateDocumentAccount) {
    	try {
    		let objDocumentAccount;
    		if(sql) {
    			objDocumentAccount = await models.sequelize.documentsAccounts.findOne({where: { deleted: deleted }});
    			if (objDocumentAccount) {
    				objDocumentAccount = await models.sequelize.documentsAccounts.update(updateDocumentAccount, { where: { deleted: deleted } });
    			}
    		} else {
    			objDocumentAccount = await models.mongoose.documentsAccounts.findOneAndUpdate({deleted: deleted}, {$set: updateDocumentAccount}, {new: true});
    		}
    		return objDocumentAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentAccountByDocumentId(documentId, updateDocumentAccount) {
    	try {
    		let objDocumentAccount;
    		if(sql) {
    			objDocumentAccount = await models.sequelize.documentsAccounts.findOne({where: { document_id: documentId }});
    			if (objDocumentAccount) {
    				objDocumentAccount = await models.sequelize.documentsAccounts.update(updateDocumentAccount, { where: { document_id: documentId } });
    			}
    		} else {
    			objDocumentAccount = await models.mongoose.documentsAccounts.findOneAndUpdate({document_id: documentId}, {$set: updateDocumentAccount}, {new: true});
    		}
    		return objDocumentAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentAccountByAccountId(accountId, updateDocumentAccount) {
    	try {
    		let objDocumentAccount;
    		if(sql) {
    			objDocumentAccount = await models.sequelize.documentsAccounts.findOne({where: { account_id: accountId }});
    			if (objDocumentAccount) {
    				objDocumentAccount = await models.sequelize.documentsAccounts.update(updateDocumentAccount, { where: { account_id: accountId } });
    			}
    		} else {
    			objDocumentAccount = await models.mongoose.documentsAccounts.findOneAndUpdate({account_id: accountId}, {$set: updateDocumentAccount}, {new: true});
    		}
    		return objDocumentAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentAccountByDateModified(dateModified, updateDocumentAccount) {
    	try {
    		let objDocumentAccount;
    		if(sql) {
    			objDocumentAccount = await models.sequelize.documentsAccounts.findOne({where: { date_modified: dateModified }});
    			if (objDocumentAccount) {
    				objDocumentAccount = await models.sequelize.documentsAccounts.update(updateDocumentAccount, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objDocumentAccount = await models.mongoose.documentsAccounts.findOneAndUpdate({date_modified: dateModified}, {$set: updateDocumentAccount}, {new: true});
    		}
    		return objDocumentAccount;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = DocumentAccountService;
//</es-section>
