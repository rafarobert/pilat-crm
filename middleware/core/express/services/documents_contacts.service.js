/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:45 GMT-0400 (Bolivia Time)
 * Time: 0:22:45
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:45 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:45
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

class DocumentContactService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllDocumentsContacts(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.documentsContacts.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.documentsContacts.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllDocumentsContacts(select = []) {
		try {
			if(sql) {
				return await models.sequelize.documentsContacts.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.documentsContacts.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addDocumentContact(newDocumentContact) {
		try {
			let objDocumentContact;
			if(util.PrimaryKeyTypeIsString(models.sequelize.documentsContacts.primaryKeys.id.type.toString())) {
			    newDocumentContact.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objDocumentContact = await models.sequelize.documentsContacts.create(newDocumentContact);
			} else {
				objDocumentContact = new models.mongoose.documentsContacts(newDocumentContact);
				await objDocumentContact.save();
			}
			return objDocumentContact;
		} catch (error) {
			throw error;
		}
	}

	static async updateDocumentContact(id, updateDocumentContact) {
		try {
			let objDocumentContact;
			if(sql) {
				objDocumentContact = await models.sequelize.documentsContacts.findOne({where: { id: util.String(id) }});
				if (objDocumentContact) {
					await models.sequelize.documentsContacts.update(updateDocumentContact, { where: { id: util.String(id) } });
					objDocumentContact = await models.sequelize.documentsContacts.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateDocumentContact._id;
				objDocumentContact = await models.mongoose.documentsContacts.findOneAndUpdate({id:id}, {$set: updateDocumentContact}, {new: true});
			}
			return objDocumentContact;
		} catch (error) {
			throw error;
		}
	}

	static async getADocumentContact(id, query) {
		try {
			let objDocumentContact;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objDocumentContact = await models.sequelize.documentsContacts.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objDocumentContact = await models.mongoose.documentsContacts.find({id:util.String(id)}).select(query.select);
			}
			return objDocumentContact;
		} catch (error) {
			throw error;
		}
	}

	static async deleteDocumentContact(id) {
		try {
			let objDocumentContact;
			if(sql) {
				objDocumentContact = await models.sequelize.documentsContacts.findOne({ where: { id: util.String(id) } });
				if (objDocumentContact) {
					await models.sequelize.documentsContacts.destroy({where: { id: util.String(id) }});
				}
			} else {
				objDocumentContact = await models.mongoose.documentsContacts.deleteOne({id:util.String(id)});
			}
			return objDocumentContact;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objDocumentContact;
    		if(sql) {
    			objDocumentContact = await models.sequelize.documentsContacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objDocumentContact = await models.mongoose.documentsContacts.findOne({id: id});
    		}
    		return objDocumentContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objDocumentContact;
    		if(sql) {
    			objDocumentContact = await models.sequelize.documentsContacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objDocumentContact = await models.mongoose.documentsContacts.findOne({deleted: deleted});
    		}
    		return objDocumentContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDocumentId(documentId, query = {}) {
    	try {
    		let objDocumentContact;
    		if(sql) {
    			objDocumentContact = await models.sequelize.documentsContacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { document_id: documentId },
    			});
    		} else {
    			objDocumentContact = await models.mongoose.documentsContacts.findOne({document_id: documentId});
    		}
    		return objDocumentContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByContactId(contactId, query = {}) {
    	try {
    		let objDocumentContact;
    		if(sql) {
    			objDocumentContact = await models.sequelize.documentsContacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { contact_id: contactId },
    			});
    		} else {
    			objDocumentContact = await models.mongoose.documentsContacts.findOne({contact_id: contactId});
    		}
    		return objDocumentContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objDocumentContact;
    		if(sql) {
    			objDocumentContact = await models.sequelize.documentsContacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objDocumentContact = await models.mongoose.documentsContacts.findOne({date_modified: dateModified});
    		}
    		return objDocumentContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateDocumentContactById(id, updateDocumentContact) {
    	try {
    		let objDocumentContact;
    		if(sql) {
    			objDocumentContact = await models.sequelize.documentsContacts.findOne({where: { id: id }});
    			if (objDocumentContact) {
    				objDocumentContact = await models.sequelize.documentsContacts.update(updateDocumentContact, { where: { id: id } });
    			}
    		} else {
    			objDocumentContact = await models.mongoose.documentsContacts.findOneAndUpdate({id: id}, {$set: updateDocumentContact}, {new: true});
    		}
    		return objDocumentContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentContactByDeleted(deleted, updateDocumentContact) {
    	try {
    		let objDocumentContact;
    		if(sql) {
    			objDocumentContact = await models.sequelize.documentsContacts.findOne({where: { deleted: deleted }});
    			if (objDocumentContact) {
    				objDocumentContact = await models.sequelize.documentsContacts.update(updateDocumentContact, { where: { deleted: deleted } });
    			}
    		} else {
    			objDocumentContact = await models.mongoose.documentsContacts.findOneAndUpdate({deleted: deleted}, {$set: updateDocumentContact}, {new: true});
    		}
    		return objDocumentContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentContactByDocumentId(documentId, updateDocumentContact) {
    	try {
    		let objDocumentContact;
    		if(sql) {
    			objDocumentContact = await models.sequelize.documentsContacts.findOne({where: { document_id: documentId }});
    			if (objDocumentContact) {
    				objDocumentContact = await models.sequelize.documentsContacts.update(updateDocumentContact, { where: { document_id: documentId } });
    			}
    		} else {
    			objDocumentContact = await models.mongoose.documentsContacts.findOneAndUpdate({document_id: documentId}, {$set: updateDocumentContact}, {new: true});
    		}
    		return objDocumentContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentContactByContactId(contactId, updateDocumentContact) {
    	try {
    		let objDocumentContact;
    		if(sql) {
    			objDocumentContact = await models.sequelize.documentsContacts.findOne({where: { contact_id: contactId }});
    			if (objDocumentContact) {
    				objDocumentContact = await models.sequelize.documentsContacts.update(updateDocumentContact, { where: { contact_id: contactId } });
    			}
    		} else {
    			objDocumentContact = await models.mongoose.documentsContacts.findOneAndUpdate({contact_id: contactId}, {$set: updateDocumentContact}, {new: true});
    		}
    		return objDocumentContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentContactByDateModified(dateModified, updateDocumentContact) {
    	try {
    		let objDocumentContact;
    		if(sql) {
    			objDocumentContact = await models.sequelize.documentsContacts.findOne({where: { date_modified: dateModified }});
    			if (objDocumentContact) {
    				objDocumentContact = await models.sequelize.documentsContacts.update(updateDocumentContact, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objDocumentContact = await models.mongoose.documentsContacts.findOneAndUpdate({date_modified: dateModified}, {$set: updateDocumentContact}, {new: true});
    		}
    		return objDocumentContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = DocumentContactService;
//</es-section>
