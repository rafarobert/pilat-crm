/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:39 GMT-0400 (Bolivia Time)
 * Time: 14:56:39
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:39 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:39
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

class ContactUserService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllContactsUsers(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.contactsUsers.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.contactsUsers.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllContactsUsers(select = []) {
		try {
			if(sql) {
				return await models.sequelize.contactsUsers.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.contactsUsers.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addContactUser(newContactUser) {
		try {
			let objContactUser;
			if(util.PrimaryKeyTypeIsString(models.sequelize.contactsUsers.primaryKeys.id.type.toString())) {
			    newContactUser.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objContactUser = await models.sequelize.contactsUsers.create(newContactUser);
			} else {
				objContactUser = new models.mongoose.contactsUsers(newContactUser);
				await objContactUser.save();
			}
			return objContactUser;
		} catch (error) {
			throw error;
		}
	}

	static async updateContactUser(id, updateContactUser) {
		try {
			let objContactUser;
			if(sql) {
				objContactUser = await models.sequelize.contactsUsers.findOne({where: { id: util.String(id) }});
				if (objContactUser) {
					await models.sequelize.contactsUsers.update(updateContactUser, { where: { id: util.String(id) } });
					objContactUser = await models.sequelize.contactsUsers.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateContactUser._id;
				objContactUser = await models.mongoose.contactsUsers.findOneAndUpdate({id:id}, {$set: updateContactUser}, {new: true});
			}
			return objContactUser;
		} catch (error) {
			throw error;
		}
	}

	static async getAContactUser(id, query) {
		try {
			let objContactUser;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objContactUser = await models.sequelize.contactsUsers.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objContactUser = await models.mongoose.contactsUsers.find({id:util.String(id)}).select(query.select);
			}
			return objContactUser;
		} catch (error) {
			throw error;
		}
	}

	static async deleteContactUser(id) {
		try {
			let objContactUser;
			if(sql) {
				objContactUser = await models.sequelize.contactsUsers.findOne({ where: { id: util.String(id) } });
				if (objContactUser) {
					await models.sequelize.contactsUsers.destroy({where: { id: util.String(id) }});
				}
			} else {
				objContactUser = await models.mongoose.contactsUsers.deleteOne({id:util.String(id)});
			}
			return objContactUser;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objContactUser;
    		if(sql) {
    			objContactUser = await models.sequelize.contactsUsers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objContactUser = await models.mongoose.contactsUsers.findOne({id: id});
    		}
    		return objContactUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objContactUser;
    		if(sql) {
    			objContactUser = await models.sequelize.contactsUsers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objContactUser = await models.mongoose.contactsUsers.findOne({deleted: deleted});
    		}
    		return objContactUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByContactId(contactId, query = {}) {
    	try {
    		let objContactUser;
    		if(sql) {
    			objContactUser = await models.sequelize.contactsUsers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { contact_id: contactId },
    			});
    		} else {
    			objContactUser = await models.mongoose.contactsUsers.findOne({contact_id: contactId});
    		}
    		return objContactUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUserId(userId, query = {}) {
    	try {
    		let objContactUser;
    		if(sql) {
    			objContactUser = await models.sequelize.contactsUsers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { user_id: userId },
    			});
    		} else {
    			objContactUser = await models.mongoose.contactsUsers.findOne({user_id: userId});
    		}
    		return objContactUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objContactUser;
    		if(sql) {
    			objContactUser = await models.sequelize.contactsUsers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objContactUser = await models.mongoose.contactsUsers.findOne({date_modified: dateModified});
    		}
    		return objContactUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateContactUserById(id, updateContactUser) {
    	try {
    		let objContactUser;
    		if(sql) {
    			objContactUser = await models.sequelize.contactsUsers.findOne({where: { id: id }});
    			if (objContactUser) {
    				objContactUser = await models.sequelize.contactsUsers.update(updateContactUser, { where: { id: id } });
    			}
    		} else {
    			objContactUser = await models.mongoose.contactsUsers.findOneAndUpdate({id: id}, {$set: updateContactUser}, {new: true});
    		}
    		return objContactUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactUserByDeleted(deleted, updateContactUser) {
    	try {
    		let objContactUser;
    		if(sql) {
    			objContactUser = await models.sequelize.contactsUsers.findOne({where: { deleted: deleted }});
    			if (objContactUser) {
    				objContactUser = await models.sequelize.contactsUsers.update(updateContactUser, { where: { deleted: deleted } });
    			}
    		} else {
    			objContactUser = await models.mongoose.contactsUsers.findOneAndUpdate({deleted: deleted}, {$set: updateContactUser}, {new: true});
    		}
    		return objContactUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactUserByContactId(contactId, updateContactUser) {
    	try {
    		let objContactUser;
    		if(sql) {
    			objContactUser = await models.sequelize.contactsUsers.findOne({where: { contact_id: contactId }});
    			if (objContactUser) {
    				objContactUser = await models.sequelize.contactsUsers.update(updateContactUser, { where: { contact_id: contactId } });
    			}
    		} else {
    			objContactUser = await models.mongoose.contactsUsers.findOneAndUpdate({contact_id: contactId}, {$set: updateContactUser}, {new: true});
    		}
    		return objContactUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactUserByUserId(userId, updateContactUser) {
    	try {
    		let objContactUser;
    		if(sql) {
    			objContactUser = await models.sequelize.contactsUsers.findOne({where: { user_id: userId }});
    			if (objContactUser) {
    				objContactUser = await models.sequelize.contactsUsers.update(updateContactUser, { where: { user_id: userId } });
    			}
    		} else {
    			objContactUser = await models.mongoose.contactsUsers.findOneAndUpdate({user_id: userId}, {$set: updateContactUser}, {new: true});
    		}
    		return objContactUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactUserByDateModified(dateModified, updateContactUser) {
    	try {
    		let objContactUser;
    		if(sql) {
    			objContactUser = await models.sequelize.contactsUsers.findOne({where: { date_modified: dateModified }});
    			if (objContactUser) {
    				objContactUser = await models.sequelize.contactsUsers.update(updateContactUser, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objContactUser = await models.mongoose.contactsUsers.findOneAndUpdate({date_modified: dateModified}, {$set: updateContactUser}, {new: true});
    		}
    		return objContactUser;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = ContactUserService;
//</es-section>
