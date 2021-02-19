/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:35:22 GMT-0400 (Bolivia Time)
 * Time: 18:35:22
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:35:22 GMT-0400 (Bolivia Time)
 * Last time updated: 18:35:22
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

class AccountContactService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAccountsContacts(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.accountsContacts.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.accountsContacts.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAccountsContacts(select = []) {
		try {
			if(sql) {
				return await models.sequelize.accountsContacts.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.accountsContacts.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAccountContact(newAccountContact) {
		try {
			let objAccountContact;
			if(util.PrimaryKeyTypeIsString(models.sequelize.accountsContacts.primaryKeys.id.type.toString())) {
			    newAccountContact.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAccountContact = await models.sequelize.accountsContacts.create(newAccountContact);
			} else {
				objAccountContact = new models.mongoose.accountsContacts(newAccountContact);
				await objAccountContact.save();
			}
			return objAccountContact;
		} catch (error) {
			throw error;
		}
	}

	static async updateAccountContact(id, updateAccountContact) {
		try {
			let objAccountContact;
			if(sql) {
				objAccountContact = await models.sequelize.accountsContacts.findOne({where: { id: util.String(id) }});
				if (objAccountContact) {
					await models.sequelize.accountsContacts.update(updateAccountContact, { where: { id: util.String(id) } });
					objAccountContact = await models.sequelize.accountsContacts.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateAccountContact._id;
				objAccountContact = await models.mongoose.accountsContacts.findOneAndUpdate({id:id}, {$set: updateAccountContact}, {new: true});
			}
			return objAccountContact;
		} catch (error) {
			throw error;
		}
	}

	static async getAAccountContact(id, query) {
		try {
			let objAccountContact;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAccountContact = await models.sequelize.accountsContacts.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAccountContact = await models.mongoose.accountsContacts.find({id:util.String(id)}).select(query.select);
			}
			return objAccountContact;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAccountContact(id) {
		try {
			let objAccountContact;
			if(sql) {
				objAccountContact = await models.sequelize.accountsContacts.findOne({ where: { id: util.String(id) } });
				if (objAccountContact) {
					await models.sequelize.accountsContacts.destroy({where: { id: util.String(id) }});
				}
			} else {
				objAccountContact = await models.mongoose.accountsContacts.deleteOne({id:util.String(id)});
			}
			return objAccountContact;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAccountContact;
    		if(sql) {
    			objAccountContact = await models.sequelize.accountsContacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAccountContact = await models.mongoose.accountsContacts.findOne({id: id});
    		}
    		return objAccountContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAccountContact;
    		if(sql) {
    			objAccountContact = await models.sequelize.accountsContacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAccountContact = await models.mongoose.accountsContacts.findOne({deleted: deleted});
    		}
    		return objAccountContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByContactId(contactId, query = {}) {
    	try {
    		let objAccountContact;
    		if(sql) {
    			objAccountContact = await models.sequelize.accountsContacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { contact_id: contactId },
    			});
    		} else {
    			objAccountContact = await models.mongoose.accountsContacts.findOne({contact_id: contactId});
    		}
    		return objAccountContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAccountId(accountId, query = {}) {
    	try {
    		let objAccountContact;
    		if(sql) {
    			objAccountContact = await models.sequelize.accountsContacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { account_id: accountId },
    			});
    		} else {
    			objAccountContact = await models.mongoose.accountsContacts.findOne({account_id: accountId});
    		}
    		return objAccountContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAccountContact;
    		if(sql) {
    			objAccountContact = await models.sequelize.accountsContacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAccountContact = await models.mongoose.accountsContacts.findOne({date_modified: dateModified});
    		}
    		return objAccountContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAccountContactById(id, updateAccountContact) {
    	try {
    		let objAccountContact;
    		if(sql) {
    			objAccountContact = await models.sequelize.accountsContacts.findOne({where: { id: id }});
    			if (objAccountContact) {
    				objAccountContact = await models.sequelize.accountsContacts.update(updateAccountContact, { where: { id: id } });
    			}
    		} else {
    			objAccountContact = await models.mongoose.accountsContacts.findOneAndUpdate({id: id}, {$set: updateAccountContact}, {new: true});
    		}
    		return objAccountContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountContactByDeleted(deleted, updateAccountContact) {
    	try {
    		let objAccountContact;
    		if(sql) {
    			objAccountContact = await models.sequelize.accountsContacts.findOne({where: { deleted: deleted }});
    			if (objAccountContact) {
    				objAccountContact = await models.sequelize.accountsContacts.update(updateAccountContact, { where: { deleted: deleted } });
    			}
    		} else {
    			objAccountContact = await models.mongoose.accountsContacts.findOneAndUpdate({deleted: deleted}, {$set: updateAccountContact}, {new: true});
    		}
    		return objAccountContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountContactByContactId(contactId, updateAccountContact) {
    	try {
    		let objAccountContact;
    		if(sql) {
    			objAccountContact = await models.sequelize.accountsContacts.findOne({where: { contact_id: contactId }});
    			if (objAccountContact) {
    				objAccountContact = await models.sequelize.accountsContacts.update(updateAccountContact, { where: { contact_id: contactId } });
    			}
    		} else {
    			objAccountContact = await models.mongoose.accountsContacts.findOneAndUpdate({contact_id: contactId}, {$set: updateAccountContact}, {new: true});
    		}
    		return objAccountContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountContactByAccountId(accountId, updateAccountContact) {
    	try {
    		let objAccountContact;
    		if(sql) {
    			objAccountContact = await models.sequelize.accountsContacts.findOne({where: { account_id: accountId }});
    			if (objAccountContact) {
    				objAccountContact = await models.sequelize.accountsContacts.update(updateAccountContact, { where: { account_id: accountId } });
    			}
    		} else {
    			objAccountContact = await models.mongoose.accountsContacts.findOneAndUpdate({account_id: accountId}, {$set: updateAccountContact}, {new: true});
    		}
    		return objAccountContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountContactByDateModified(dateModified, updateAccountContact) {
    	try {
    		let objAccountContact;
    		if(sql) {
    			objAccountContact = await models.sequelize.accountsContacts.findOne({where: { date_modified: dateModified }});
    			if (objAccountContact) {
    				objAccountContact = await models.sequelize.accountsContacts.update(updateAccountContact, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAccountContact = await models.mongoose.accountsContacts.findOneAndUpdate({date_modified: dateModified}, {$set: updateAccountContact}, {new: true});
    		}
    		return objAccountContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AccountContactService;
//</es-section>
