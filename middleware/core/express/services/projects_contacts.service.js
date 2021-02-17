/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:52 GMT-0400 (Bolivia Time)
 * Time: 4:43:52
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:52 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:52
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

class ProjectContactService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllProjectsContacts(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.projectsContacts.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.projectsContacts.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllProjectsContacts(select = []) {
		try {
			if(sql) {
				return await models.sequelize.projectsContacts.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.projectsContacts.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addProjectContact(newProjectContact) {
		try {
			let objProjectContact;
			if(util.PrimaryKeyTypeIsString(models.sequelize.projectsContacts.primaryKeys.id.type.toString())) {
			    newProjectContact.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objProjectContact = await models.sequelize.projectsContacts.create(newProjectContact);
			} else {
				objProjectContact = new models.mongoose.projectsContacts(newProjectContact);
				await objProjectContact.save();
			}
			return objProjectContact;
		} catch (error) {
			throw error;
		}
	}

	static async updateProjectContact(id, updateProjectContact) {
		try {
			let objProjectContact;
			if(sql) {
				objProjectContact = await models.sequelize.projectsContacts.findOne({where: { id: util.String(id) }});
				if (objProjectContact) {
					await models.sequelize.projectsContacts.update(updateProjectContact, { where: { id: util.String(id) } });
					objProjectContact = await models.sequelize.projectsContacts.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateProjectContact._id;
				objProjectContact = await models.mongoose.projectsContacts.findOneAndUpdate({id:id}, {$set: updateProjectContact}, {new: true});
			}
			return objProjectContact;
		} catch (error) {
			throw error;
		}
	}

	static async getAProjectContact(id, query) {
		try {
			let objProjectContact;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objProjectContact = await models.sequelize.projectsContacts.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objProjectContact = await models.mongoose.projectsContacts.find({id:util.String(id)}).select(query.select);
			}
			return objProjectContact;
		} catch (error) {
			throw error;
		}
	}

	static async deleteProjectContact(id) {
		try {
			let objProjectContact;
			if(sql) {
				objProjectContact = await models.sequelize.projectsContacts.findOne({ where: { id: util.String(id) } });
				if (objProjectContact) {
					await models.sequelize.projectsContacts.destroy({where: { id: util.String(id) }});
				}
			} else {
				objProjectContact = await models.mongoose.projectsContacts.deleteOne({id:util.String(id)});
			}
			return objProjectContact;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objProjectContact;
    		if(sql) {
    			objProjectContact = await models.sequelize.projectsContacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objProjectContact = await models.mongoose.projectsContacts.findOne({id: id});
    		}
    		return objProjectContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objProjectContact;
    		if(sql) {
    			objProjectContact = await models.sequelize.projectsContacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objProjectContact = await models.mongoose.projectsContacts.findOne({deleted: deleted});
    		}
    		return objProjectContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByContactId(contactId, query = {}) {
    	try {
    		let objProjectContact;
    		if(sql) {
    			objProjectContact = await models.sequelize.projectsContacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { contact_id: contactId },
    			});
    		} else {
    			objProjectContact = await models.mongoose.projectsContacts.findOne({contact_id: contactId});
    		}
    		return objProjectContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByProjectId(projectId, query = {}) {
    	try {
    		let objProjectContact;
    		if(sql) {
    			objProjectContact = await models.sequelize.projectsContacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { project_id: projectId },
    			});
    		} else {
    			objProjectContact = await models.mongoose.projectsContacts.findOne({project_id: projectId});
    		}
    		return objProjectContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objProjectContact;
    		if(sql) {
    			objProjectContact = await models.sequelize.projectsContacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objProjectContact = await models.mongoose.projectsContacts.findOne({date_modified: dateModified});
    		}
    		return objProjectContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateProjectContactById(id, updateProjectContact) {
    	try {
    		let objProjectContact;
    		if(sql) {
    			objProjectContact = await models.sequelize.projectsContacts.findOne({where: { id: id }});
    			if (objProjectContact) {
    				objProjectContact = await models.sequelize.projectsContacts.update(updateProjectContact, { where: { id: id } });
    			}
    		} else {
    			objProjectContact = await models.mongoose.projectsContacts.findOneAndUpdate({id: id}, {$set: updateProjectContact}, {new: true});
    		}
    		return objProjectContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectContactByDeleted(deleted, updateProjectContact) {
    	try {
    		let objProjectContact;
    		if(sql) {
    			objProjectContact = await models.sequelize.projectsContacts.findOne({where: { deleted: deleted }});
    			if (objProjectContact) {
    				objProjectContact = await models.sequelize.projectsContacts.update(updateProjectContact, { where: { deleted: deleted } });
    			}
    		} else {
    			objProjectContact = await models.mongoose.projectsContacts.findOneAndUpdate({deleted: deleted}, {$set: updateProjectContact}, {new: true});
    		}
    		return objProjectContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectContactByContactId(contactId, updateProjectContact) {
    	try {
    		let objProjectContact;
    		if(sql) {
    			objProjectContact = await models.sequelize.projectsContacts.findOne({where: { contact_id: contactId }});
    			if (objProjectContact) {
    				objProjectContact = await models.sequelize.projectsContacts.update(updateProjectContact, { where: { contact_id: contactId } });
    			}
    		} else {
    			objProjectContact = await models.mongoose.projectsContacts.findOneAndUpdate({contact_id: contactId}, {$set: updateProjectContact}, {new: true});
    		}
    		return objProjectContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectContactByProjectId(projectId, updateProjectContact) {
    	try {
    		let objProjectContact;
    		if(sql) {
    			objProjectContact = await models.sequelize.projectsContacts.findOne({where: { project_id: projectId }});
    			if (objProjectContact) {
    				objProjectContact = await models.sequelize.projectsContacts.update(updateProjectContact, { where: { project_id: projectId } });
    			}
    		} else {
    			objProjectContact = await models.mongoose.projectsContacts.findOneAndUpdate({project_id: projectId}, {$set: updateProjectContact}, {new: true});
    		}
    		return objProjectContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectContactByDateModified(dateModified, updateProjectContact) {
    	try {
    		let objProjectContact;
    		if(sql) {
    			objProjectContact = await models.sequelize.projectsContacts.findOne({where: { date_modified: dateModified }});
    			if (objProjectContact) {
    				objProjectContact = await models.sequelize.projectsContacts.update(updateProjectContact, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objProjectContact = await models.mongoose.projectsContacts.findOneAndUpdate({date_modified: dateModified}, {$set: updateProjectContact}, {new: true});
    		}
    		return objProjectContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = ProjectContactService;
//</es-section>
