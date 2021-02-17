/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:41 GMT-0400 (Bolivia Time)
 * Time: 4:43:41
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:41 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:41
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

class OpportunityContactService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllOpportunitiesContacts(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.opportunitiesContacts.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.opportunitiesContacts.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllOpportunitiesContacts(select = []) {
		try {
			if(sql) {
				return await models.sequelize.opportunitiesContacts.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.opportunitiesContacts.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addOpportunityContact(newOpportunityContact) {
		try {
			let objOpportunityContact;
			if(util.PrimaryKeyTypeIsString(models.sequelize.opportunitiesContacts.primaryKeys.id.type.toString())) {
			    newOpportunityContact.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objOpportunityContact = await models.sequelize.opportunitiesContacts.create(newOpportunityContact);
			} else {
				objOpportunityContact = new models.mongoose.opportunitiesContacts(newOpportunityContact);
				await objOpportunityContact.save();
			}
			return objOpportunityContact;
		} catch (error) {
			throw error;
		}
	}

	static async updateOpportunityContact(id, updateOpportunityContact) {
		try {
			let objOpportunityContact;
			if(sql) {
				objOpportunityContact = await models.sequelize.opportunitiesContacts.findOne({where: { id: util.String(id) }});
				if (objOpportunityContact) {
					await models.sequelize.opportunitiesContacts.update(updateOpportunityContact, { where: { id: util.String(id) } });
					objOpportunityContact = await models.sequelize.opportunitiesContacts.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateOpportunityContact._id;
				objOpportunityContact = await models.mongoose.opportunitiesContacts.findOneAndUpdate({id:id}, {$set: updateOpportunityContact}, {new: true});
			}
			return objOpportunityContact;
		} catch (error) {
			throw error;
		}
	}

	static async getAOpportunityContact(id, query) {
		try {
			let objOpportunityContact;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objOpportunityContact = await models.sequelize.opportunitiesContacts.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objOpportunityContact = await models.mongoose.opportunitiesContacts.find({id:util.String(id)}).select(query.select);
			}
			return objOpportunityContact;
		} catch (error) {
			throw error;
		}
	}

	static async deleteOpportunityContact(id) {
		try {
			let objOpportunityContact;
			if(sql) {
				objOpportunityContact = await models.sequelize.opportunitiesContacts.findOne({ where: { id: util.String(id) } });
				if (objOpportunityContact) {
					await models.sequelize.opportunitiesContacts.destroy({where: { id: util.String(id) }});
				}
			} else {
				objOpportunityContact = await models.mongoose.opportunitiesContacts.deleteOne({id:util.String(id)});
			}
			return objOpportunityContact;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objOpportunityContact;
    		if(sql) {
    			objOpportunityContact = await models.sequelize.opportunitiesContacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objOpportunityContact = await models.mongoose.opportunitiesContacts.findOne({id: id});
    		}
    		return objOpportunityContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objOpportunityContact;
    		if(sql) {
    			objOpportunityContact = await models.sequelize.opportunitiesContacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objOpportunityContact = await models.mongoose.opportunitiesContacts.findOne({deleted: deleted});
    		}
    		return objOpportunityContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByContactId(contactId, query = {}) {
    	try {
    		let objOpportunityContact;
    		if(sql) {
    			objOpportunityContact = await models.sequelize.opportunitiesContacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { contact_id: contactId },
    			});
    		} else {
    			objOpportunityContact = await models.mongoose.opportunitiesContacts.findOne({contact_id: contactId});
    		}
    		return objOpportunityContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByOpportunityId(opportunityId, query = {}) {
    	try {
    		let objOpportunityContact;
    		if(sql) {
    			objOpportunityContact = await models.sequelize.opportunitiesContacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { opportunity_id: opportunityId },
    			});
    		} else {
    			objOpportunityContact = await models.mongoose.opportunitiesContacts.findOne({opportunity_id: opportunityId});
    		}
    		return objOpportunityContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByContactRole(contactRole, query = {}) {
    	try {
    		let objOpportunityContact;
    		if(sql) {
    			objOpportunityContact = await models.sequelize.opportunitiesContacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { contact_role: contactRole },
    			});
    		} else {
    			objOpportunityContact = await models.mongoose.opportunitiesContacts.findOne({contact_role: contactRole});
    		}
    		return objOpportunityContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objOpportunityContact;
    		if(sql) {
    			objOpportunityContact = await models.sequelize.opportunitiesContacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objOpportunityContact = await models.mongoose.opportunitiesContacts.findOne({date_modified: dateModified});
    		}
    		return objOpportunityContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateOpportunityContactById(id, updateOpportunityContact) {
    	try {
    		let objOpportunityContact;
    		if(sql) {
    			objOpportunityContact = await models.sequelize.opportunitiesContacts.findOne({where: { id: id }});
    			if (objOpportunityContact) {
    				objOpportunityContact = await models.sequelize.opportunitiesContacts.update(updateOpportunityContact, { where: { id: id } });
    			}
    		} else {
    			objOpportunityContact = await models.mongoose.opportunitiesContacts.findOneAndUpdate({id: id}, {$set: updateOpportunityContact}, {new: true});
    		}
    		return objOpportunityContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOpportunityContactByDeleted(deleted, updateOpportunityContact) {
    	try {
    		let objOpportunityContact;
    		if(sql) {
    			objOpportunityContact = await models.sequelize.opportunitiesContacts.findOne({where: { deleted: deleted }});
    			if (objOpportunityContact) {
    				objOpportunityContact = await models.sequelize.opportunitiesContacts.update(updateOpportunityContact, { where: { deleted: deleted } });
    			}
    		} else {
    			objOpportunityContact = await models.mongoose.opportunitiesContacts.findOneAndUpdate({deleted: deleted}, {$set: updateOpportunityContact}, {new: true});
    		}
    		return objOpportunityContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOpportunityContactByContactId(contactId, updateOpportunityContact) {
    	try {
    		let objOpportunityContact;
    		if(sql) {
    			objOpportunityContact = await models.sequelize.opportunitiesContacts.findOne({where: { contact_id: contactId }});
    			if (objOpportunityContact) {
    				objOpportunityContact = await models.sequelize.opportunitiesContacts.update(updateOpportunityContact, { where: { contact_id: contactId } });
    			}
    		} else {
    			objOpportunityContact = await models.mongoose.opportunitiesContacts.findOneAndUpdate({contact_id: contactId}, {$set: updateOpportunityContact}, {new: true});
    		}
    		return objOpportunityContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOpportunityContactByOpportunityId(opportunityId, updateOpportunityContact) {
    	try {
    		let objOpportunityContact;
    		if(sql) {
    			objOpportunityContact = await models.sequelize.opportunitiesContacts.findOne({where: { opportunity_id: opportunityId }});
    			if (objOpportunityContact) {
    				objOpportunityContact = await models.sequelize.opportunitiesContacts.update(updateOpportunityContact, { where: { opportunity_id: opportunityId } });
    			}
    		} else {
    			objOpportunityContact = await models.mongoose.opportunitiesContacts.findOneAndUpdate({opportunity_id: opportunityId}, {$set: updateOpportunityContact}, {new: true});
    		}
    		return objOpportunityContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOpportunityContactByContactRole(contactRole, updateOpportunityContact) {
    	try {
    		let objOpportunityContact;
    		if(sql) {
    			objOpportunityContact = await models.sequelize.opportunitiesContacts.findOne({where: { contact_role: contactRole }});
    			if (objOpportunityContact) {
    				objOpportunityContact = await models.sequelize.opportunitiesContacts.update(updateOpportunityContact, { where: { contact_role: contactRole } });
    			}
    		} else {
    			objOpportunityContact = await models.mongoose.opportunitiesContacts.findOneAndUpdate({contact_role: contactRole}, {$set: updateOpportunityContact}, {new: true});
    		}
    		return objOpportunityContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOpportunityContactByDateModified(dateModified, updateOpportunityContact) {
    	try {
    		let objOpportunityContact;
    		if(sql) {
    			objOpportunityContact = await models.sequelize.opportunitiesContacts.findOne({where: { date_modified: dateModified }});
    			if (objOpportunityContact) {
    				objOpportunityContact = await models.sequelize.opportunitiesContacts.update(updateOpportunityContact, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objOpportunityContact = await models.mongoose.opportunitiesContacts.findOneAndUpdate({date_modified: dateModified}, {$set: updateOpportunityContact}, {new: true});
    		}
    		return objOpportunityContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = OpportunityContactService;
//</es-section>
