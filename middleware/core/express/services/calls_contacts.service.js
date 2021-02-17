/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:42:34 GMT-0400 (Bolivia Time)
 * Time: 4:42:34
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:42:34 GMT-0400 (Bolivia Time)
 * Last time updated: 4:42:34
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

class CallContactService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllCallsContacts(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.callsContacts.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.callsContacts.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllCallsContacts(select = []) {
		try {
			if(sql) {
				return await models.sequelize.callsContacts.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.callsContacts.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addCallContact(newCallContact) {
		try {
			let objCallContact;
			if(util.PrimaryKeyTypeIsString(models.sequelize.callsContacts.primaryKeys.id.type.toString())) {
			    newCallContact.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objCallContact = await models.sequelize.callsContacts.create(newCallContact);
			} else {
				objCallContact = new models.mongoose.callsContacts(newCallContact);
				await objCallContact.save();
			}
			return objCallContact;
		} catch (error) {
			throw error;
		}
	}

	static async updateCallContact(id, updateCallContact) {
		try {
			let objCallContact;
			if(sql) {
				objCallContact = await models.sequelize.callsContacts.findOne({where: { id: util.String(id) }});
				if (objCallContact) {
					await models.sequelize.callsContacts.update(updateCallContact, { where: { id: util.String(id) } });
					objCallContact = await models.sequelize.callsContacts.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateCallContact._id;
				objCallContact = await models.mongoose.callsContacts.findOneAndUpdate({id:id}, {$set: updateCallContact}, {new: true});
			}
			return objCallContact;
		} catch (error) {
			throw error;
		}
	}

	static async getACallContact(id, query) {
		try {
			let objCallContact;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objCallContact = await models.sequelize.callsContacts.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objCallContact = await models.mongoose.callsContacts.find({id:util.String(id)}).select(query.select);
			}
			return objCallContact;
		} catch (error) {
			throw error;
		}
	}

	static async deleteCallContact(id) {
		try {
			let objCallContact;
			if(sql) {
				objCallContact = await models.sequelize.callsContacts.findOne({ where: { id: util.String(id) } });
				if (objCallContact) {
					await models.sequelize.callsContacts.destroy({where: { id: util.String(id) }});
				}
			} else {
				objCallContact = await models.mongoose.callsContacts.deleteOne({id:util.String(id)});
			}
			return objCallContact;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objCallContact;
    		if(sql) {
    			objCallContact = await models.sequelize.callsContacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objCallContact = await models.mongoose.callsContacts.findOne({id: id});
    		}
    		return objCallContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objCallContact;
    		if(sql) {
    			objCallContact = await models.sequelize.callsContacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objCallContact = await models.mongoose.callsContacts.findOne({deleted: deleted});
    		}
    		return objCallContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCallId(callId, query = {}) {
    	try {
    		let objCallContact;
    		if(sql) {
    			objCallContact = await models.sequelize.callsContacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { call_id: callId },
    			});
    		} else {
    			objCallContact = await models.mongoose.callsContacts.findOne({call_id: callId});
    		}
    		return objCallContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByContactId(contactId, query = {}) {
    	try {
    		let objCallContact;
    		if(sql) {
    			objCallContact = await models.sequelize.callsContacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { contact_id: contactId },
    			});
    		} else {
    			objCallContact = await models.mongoose.callsContacts.findOne({contact_id: contactId});
    		}
    		return objCallContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRequired(required, query = {}) {
    	try {
    		let objCallContact;
    		if(sql) {
    			objCallContact = await models.sequelize.callsContacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { required: required },
    			});
    		} else {
    			objCallContact = await models.mongoose.callsContacts.findOne({required: required});
    		}
    		return objCallContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAcceptStatus(acceptStatus, query = {}) {
    	try {
    		let objCallContact;
    		if(sql) {
    			objCallContact = await models.sequelize.callsContacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { accept_status: acceptStatus },
    			});
    		} else {
    			objCallContact = await models.mongoose.callsContacts.findOne({accept_status: acceptStatus});
    		}
    		return objCallContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objCallContact;
    		if(sql) {
    			objCallContact = await models.sequelize.callsContacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objCallContact = await models.mongoose.callsContacts.findOne({date_modified: dateModified});
    		}
    		return objCallContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateCallContactById(id, updateCallContact) {
    	try {
    		let objCallContact;
    		if(sql) {
    			objCallContact = await models.sequelize.callsContacts.findOne({where: { id: id }});
    			if (objCallContact) {
    				objCallContact = await models.sequelize.callsContacts.update(updateCallContact, { where: { id: id } });
    			}
    		} else {
    			objCallContact = await models.mongoose.callsContacts.findOneAndUpdate({id: id}, {$set: updateCallContact}, {new: true});
    		}
    		return objCallContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallContactByDeleted(deleted, updateCallContact) {
    	try {
    		let objCallContact;
    		if(sql) {
    			objCallContact = await models.sequelize.callsContacts.findOne({where: { deleted: deleted }});
    			if (objCallContact) {
    				objCallContact = await models.sequelize.callsContacts.update(updateCallContact, { where: { deleted: deleted } });
    			}
    		} else {
    			objCallContact = await models.mongoose.callsContacts.findOneAndUpdate({deleted: deleted}, {$set: updateCallContact}, {new: true});
    		}
    		return objCallContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallContactByCallId(callId, updateCallContact) {
    	try {
    		let objCallContact;
    		if(sql) {
    			objCallContact = await models.sequelize.callsContacts.findOne({where: { call_id: callId }});
    			if (objCallContact) {
    				objCallContact = await models.sequelize.callsContacts.update(updateCallContact, { where: { call_id: callId } });
    			}
    		} else {
    			objCallContact = await models.mongoose.callsContacts.findOneAndUpdate({call_id: callId}, {$set: updateCallContact}, {new: true});
    		}
    		return objCallContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallContactByContactId(contactId, updateCallContact) {
    	try {
    		let objCallContact;
    		if(sql) {
    			objCallContact = await models.sequelize.callsContacts.findOne({where: { contact_id: contactId }});
    			if (objCallContact) {
    				objCallContact = await models.sequelize.callsContacts.update(updateCallContact, { where: { contact_id: contactId } });
    			}
    		} else {
    			objCallContact = await models.mongoose.callsContacts.findOneAndUpdate({contact_id: contactId}, {$set: updateCallContact}, {new: true});
    		}
    		return objCallContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallContactByRequired(required, updateCallContact) {
    	try {
    		let objCallContact;
    		if(sql) {
    			objCallContact = await models.sequelize.callsContacts.findOne({where: { required: required }});
    			if (objCallContact) {
    				objCallContact = await models.sequelize.callsContacts.update(updateCallContact, { where: { required: required } });
    			}
    		} else {
    			objCallContact = await models.mongoose.callsContacts.findOneAndUpdate({required: required}, {$set: updateCallContact}, {new: true});
    		}
    		return objCallContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallContactByAcceptStatus(acceptStatus, updateCallContact) {
    	try {
    		let objCallContact;
    		if(sql) {
    			objCallContact = await models.sequelize.callsContacts.findOne({where: { accept_status: acceptStatus }});
    			if (objCallContact) {
    				objCallContact = await models.sequelize.callsContacts.update(updateCallContact, { where: { accept_status: acceptStatus } });
    			}
    		} else {
    			objCallContact = await models.mongoose.callsContacts.findOneAndUpdate({accept_status: acceptStatus}, {$set: updateCallContact}, {new: true});
    		}
    		return objCallContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallContactByDateModified(dateModified, updateCallContact) {
    	try {
    		let objCallContact;
    		if(sql) {
    			objCallContact = await models.sequelize.callsContacts.findOne({where: { date_modified: dateModified }});
    			if (objCallContact) {
    				objCallContact = await models.sequelize.callsContacts.update(updateCallContact, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objCallContact = await models.mongoose.callsContacts.findOneAndUpdate({date_modified: dateModified}, {$set: updateCallContact}, {new: true});
    		}
    		return objCallContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = CallContactService;
//</es-section>
