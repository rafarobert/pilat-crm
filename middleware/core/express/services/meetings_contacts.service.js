/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:34 GMT-0400 (Bolivia Time)
 * Time: 4:43:34
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:34 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:34
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

class MeetingContactService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllMeetingsContacts(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.meetingsContacts.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.meetingsContacts.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllMeetingsContacts(select = []) {
		try {
			if(sql) {
				return await models.sequelize.meetingsContacts.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.meetingsContacts.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addMeetingContact(newMeetingContact) {
		try {
			let objMeetingContact;
			if(util.PrimaryKeyTypeIsString(models.sequelize.meetingsContacts.primaryKeys.id.type.toString())) {
			    newMeetingContact.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objMeetingContact = await models.sequelize.meetingsContacts.create(newMeetingContact);
			} else {
				objMeetingContact = new models.mongoose.meetingsContacts(newMeetingContact);
				await objMeetingContact.save();
			}
			return objMeetingContact;
		} catch (error) {
			throw error;
		}
	}

	static async updateMeetingContact(id, updateMeetingContact) {
		try {
			let objMeetingContact;
			if(sql) {
				objMeetingContact = await models.sequelize.meetingsContacts.findOne({where: { id: util.String(id) }});
				if (objMeetingContact) {
					await models.sequelize.meetingsContacts.update(updateMeetingContact, { where: { id: util.String(id) } });
					objMeetingContact = await models.sequelize.meetingsContacts.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateMeetingContact._id;
				objMeetingContact = await models.mongoose.meetingsContacts.findOneAndUpdate({id:id}, {$set: updateMeetingContact}, {new: true});
			}
			return objMeetingContact;
		} catch (error) {
			throw error;
		}
	}

	static async getAMeetingContact(id, query) {
		try {
			let objMeetingContact;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objMeetingContact = await models.sequelize.meetingsContacts.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objMeetingContact = await models.mongoose.meetingsContacts.find({id:util.String(id)}).select(query.select);
			}
			return objMeetingContact;
		} catch (error) {
			throw error;
		}
	}

	static async deleteMeetingContact(id) {
		try {
			let objMeetingContact;
			if(sql) {
				objMeetingContact = await models.sequelize.meetingsContacts.findOne({ where: { id: util.String(id) } });
				if (objMeetingContact) {
					await models.sequelize.meetingsContacts.destroy({where: { id: util.String(id) }});
				}
			} else {
				objMeetingContact = await models.mongoose.meetingsContacts.deleteOne({id:util.String(id)});
			}
			return objMeetingContact;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objMeetingContact;
    		if(sql) {
    			objMeetingContact = await models.sequelize.meetingsContacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objMeetingContact = await models.mongoose.meetingsContacts.findOne({id: id});
    		}
    		return objMeetingContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objMeetingContact;
    		if(sql) {
    			objMeetingContact = await models.sequelize.meetingsContacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objMeetingContact = await models.mongoose.meetingsContacts.findOne({deleted: deleted});
    		}
    		return objMeetingContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMeetingId(meetingId, query = {}) {
    	try {
    		let objMeetingContact;
    		if(sql) {
    			objMeetingContact = await models.sequelize.meetingsContacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { meeting_id: meetingId },
    			});
    		} else {
    			objMeetingContact = await models.mongoose.meetingsContacts.findOne({meeting_id: meetingId});
    		}
    		return objMeetingContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByContactId(contactId, query = {}) {
    	try {
    		let objMeetingContact;
    		if(sql) {
    			objMeetingContact = await models.sequelize.meetingsContacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { contact_id: contactId },
    			});
    		} else {
    			objMeetingContact = await models.mongoose.meetingsContacts.findOne({contact_id: contactId});
    		}
    		return objMeetingContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRequired(required, query = {}) {
    	try {
    		let objMeetingContact;
    		if(sql) {
    			objMeetingContact = await models.sequelize.meetingsContacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { required: required },
    			});
    		} else {
    			objMeetingContact = await models.mongoose.meetingsContacts.findOne({required: required});
    		}
    		return objMeetingContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAcceptStatus(acceptStatus, query = {}) {
    	try {
    		let objMeetingContact;
    		if(sql) {
    			objMeetingContact = await models.sequelize.meetingsContacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { accept_status: acceptStatus },
    			});
    		} else {
    			objMeetingContact = await models.mongoose.meetingsContacts.findOne({accept_status: acceptStatus});
    		}
    		return objMeetingContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objMeetingContact;
    		if(sql) {
    			objMeetingContact = await models.sequelize.meetingsContacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objMeetingContact = await models.mongoose.meetingsContacts.findOne({date_modified: dateModified});
    		}
    		return objMeetingContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateMeetingContactById(id, updateMeetingContact) {
    	try {
    		let objMeetingContact;
    		if(sql) {
    			objMeetingContact = await models.sequelize.meetingsContacts.findOne({where: { id: id }});
    			if (objMeetingContact) {
    				objMeetingContact = await models.sequelize.meetingsContacts.update(updateMeetingContact, { where: { id: id } });
    			}
    		} else {
    			objMeetingContact = await models.mongoose.meetingsContacts.findOneAndUpdate({id: id}, {$set: updateMeetingContact}, {new: true});
    		}
    		return objMeetingContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingContactByDeleted(deleted, updateMeetingContact) {
    	try {
    		let objMeetingContact;
    		if(sql) {
    			objMeetingContact = await models.sequelize.meetingsContacts.findOne({where: { deleted: deleted }});
    			if (objMeetingContact) {
    				objMeetingContact = await models.sequelize.meetingsContacts.update(updateMeetingContact, { where: { deleted: deleted } });
    			}
    		} else {
    			objMeetingContact = await models.mongoose.meetingsContacts.findOneAndUpdate({deleted: deleted}, {$set: updateMeetingContact}, {new: true});
    		}
    		return objMeetingContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingContactByMeetingId(meetingId, updateMeetingContact) {
    	try {
    		let objMeetingContact;
    		if(sql) {
    			objMeetingContact = await models.sequelize.meetingsContacts.findOne({where: { meeting_id: meetingId }});
    			if (objMeetingContact) {
    				objMeetingContact = await models.sequelize.meetingsContacts.update(updateMeetingContact, { where: { meeting_id: meetingId } });
    			}
    		} else {
    			objMeetingContact = await models.mongoose.meetingsContacts.findOneAndUpdate({meeting_id: meetingId}, {$set: updateMeetingContact}, {new: true});
    		}
    		return objMeetingContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingContactByContactId(contactId, updateMeetingContact) {
    	try {
    		let objMeetingContact;
    		if(sql) {
    			objMeetingContact = await models.sequelize.meetingsContacts.findOne({where: { contact_id: contactId }});
    			if (objMeetingContact) {
    				objMeetingContact = await models.sequelize.meetingsContacts.update(updateMeetingContact, { where: { contact_id: contactId } });
    			}
    		} else {
    			objMeetingContact = await models.mongoose.meetingsContacts.findOneAndUpdate({contact_id: contactId}, {$set: updateMeetingContact}, {new: true});
    		}
    		return objMeetingContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingContactByRequired(required, updateMeetingContact) {
    	try {
    		let objMeetingContact;
    		if(sql) {
    			objMeetingContact = await models.sequelize.meetingsContacts.findOne({where: { required: required }});
    			if (objMeetingContact) {
    				objMeetingContact = await models.sequelize.meetingsContacts.update(updateMeetingContact, { where: { required: required } });
    			}
    		} else {
    			objMeetingContact = await models.mongoose.meetingsContacts.findOneAndUpdate({required: required}, {$set: updateMeetingContact}, {new: true});
    		}
    		return objMeetingContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingContactByAcceptStatus(acceptStatus, updateMeetingContact) {
    	try {
    		let objMeetingContact;
    		if(sql) {
    			objMeetingContact = await models.sequelize.meetingsContacts.findOne({where: { accept_status: acceptStatus }});
    			if (objMeetingContact) {
    				objMeetingContact = await models.sequelize.meetingsContacts.update(updateMeetingContact, { where: { accept_status: acceptStatus } });
    			}
    		} else {
    			objMeetingContact = await models.mongoose.meetingsContacts.findOneAndUpdate({accept_status: acceptStatus}, {$set: updateMeetingContact}, {new: true});
    		}
    		return objMeetingContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateMeetingContactByDateModified(dateModified, updateMeetingContact) {
    	try {
    		let objMeetingContact;
    		if(sql) {
    			objMeetingContact = await models.sequelize.meetingsContacts.findOne({where: { date_modified: dateModified }});
    			if (objMeetingContact) {
    				objMeetingContact = await models.sequelize.meetingsContacts.update(updateMeetingContact, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objMeetingContact = await models.mongoose.meetingsContacts.findOneAndUpdate({date_modified: dateModified}, {$set: updateMeetingContact}, {new: true});
    		}
    		return objMeetingContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = MeetingContactService;
//</es-section>
