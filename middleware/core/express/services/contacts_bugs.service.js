/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:36:49 GMT-0400 (Bolivia Time)
 * Time: 18:36:49
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:36:49 GMT-0400 (Bolivia Time)
 * Last time updated: 18:36:49
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

class ContactBugService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllContactsBugs(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.contactsBugs.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.contactsBugs.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllContactsBugs(select = []) {
		try {
			if(sql) {
				return await models.sequelize.contactsBugs.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.contactsBugs.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addContactBug(newContactBug) {
		try {
			let objContactBug;
			if(util.PrimaryKeyTypeIsString(models.sequelize.contactsBugs.primaryKeys.id.type.toString())) {
			    newContactBug.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objContactBug = await models.sequelize.contactsBugs.create(newContactBug);
			} else {
				objContactBug = new models.mongoose.contactsBugs(newContactBug);
				await objContactBug.save();
			}
			return objContactBug;
		} catch (error) {
			throw error;
		}
	}

	static async updateContactBug(id, updateContactBug) {
		try {
			let objContactBug;
			if(sql) {
				objContactBug = await models.sequelize.contactsBugs.findOne({where: { id: util.String(id) }});
				if (objContactBug) {
					await models.sequelize.contactsBugs.update(updateContactBug, { where: { id: util.String(id) } });
					objContactBug = await models.sequelize.contactsBugs.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateContactBug._id;
				objContactBug = await models.mongoose.contactsBugs.findOneAndUpdate({id:id}, {$set: updateContactBug}, {new: true});
			}
			return objContactBug;
		} catch (error) {
			throw error;
		}
	}

	static async getAContactBug(id, query) {
		try {
			let objContactBug;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objContactBug = await models.sequelize.contactsBugs.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objContactBug = await models.mongoose.contactsBugs.find({id:util.String(id)}).select(query.select);
			}
			return objContactBug;
		} catch (error) {
			throw error;
		}
	}

	static async deleteContactBug(id) {
		try {
			let objContactBug;
			if(sql) {
				objContactBug = await models.sequelize.contactsBugs.findOne({ where: { id: util.String(id) } });
				if (objContactBug) {
					await models.sequelize.contactsBugs.destroy({where: { id: util.String(id) }});
				}
			} else {
				objContactBug = await models.mongoose.contactsBugs.deleteOne({id:util.String(id)});
			}
			return objContactBug;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objContactBug;
    		if(sql) {
    			objContactBug = await models.sequelize.contactsBugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objContactBug = await models.mongoose.contactsBugs.findOne({id: id});
    		}
    		return objContactBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objContactBug;
    		if(sql) {
    			objContactBug = await models.sequelize.contactsBugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objContactBug = await models.mongoose.contactsBugs.findOne({deleted: deleted});
    		}
    		return objContactBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByContactId(contactId, query = {}) {
    	try {
    		let objContactBug;
    		if(sql) {
    			objContactBug = await models.sequelize.contactsBugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { contact_id: contactId },
    			});
    		} else {
    			objContactBug = await models.mongoose.contactsBugs.findOne({contact_id: contactId});
    		}
    		return objContactBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBugId(bugId, query = {}) {
    	try {
    		let objContactBug;
    		if(sql) {
    			objContactBug = await models.sequelize.contactsBugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { bug_id: bugId },
    			});
    		} else {
    			objContactBug = await models.mongoose.contactsBugs.findOne({bug_id: bugId});
    		}
    		return objContactBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByContactRole(contactRole, query = {}) {
    	try {
    		let objContactBug;
    		if(sql) {
    			objContactBug = await models.sequelize.contactsBugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { contact_role: contactRole },
    			});
    		} else {
    			objContactBug = await models.mongoose.contactsBugs.findOne({contact_role: contactRole});
    		}
    		return objContactBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objContactBug;
    		if(sql) {
    			objContactBug = await models.sequelize.contactsBugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objContactBug = await models.mongoose.contactsBugs.findOne({date_modified: dateModified});
    		}
    		return objContactBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateContactBugById(id, updateContactBug) {
    	try {
    		let objContactBug;
    		if(sql) {
    			objContactBug = await models.sequelize.contactsBugs.findOne({where: { id: id }});
    			if (objContactBug) {
    				objContactBug = await models.sequelize.contactsBugs.update(updateContactBug, { where: { id: id } });
    			}
    		} else {
    			objContactBug = await models.mongoose.contactsBugs.findOneAndUpdate({id: id}, {$set: updateContactBug}, {new: true});
    		}
    		return objContactBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactBugByDeleted(deleted, updateContactBug) {
    	try {
    		let objContactBug;
    		if(sql) {
    			objContactBug = await models.sequelize.contactsBugs.findOne({where: { deleted: deleted }});
    			if (objContactBug) {
    				objContactBug = await models.sequelize.contactsBugs.update(updateContactBug, { where: { deleted: deleted } });
    			}
    		} else {
    			objContactBug = await models.mongoose.contactsBugs.findOneAndUpdate({deleted: deleted}, {$set: updateContactBug}, {new: true});
    		}
    		return objContactBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactBugByContactId(contactId, updateContactBug) {
    	try {
    		let objContactBug;
    		if(sql) {
    			objContactBug = await models.sequelize.contactsBugs.findOne({where: { contact_id: contactId }});
    			if (objContactBug) {
    				objContactBug = await models.sequelize.contactsBugs.update(updateContactBug, { where: { contact_id: contactId } });
    			}
    		} else {
    			objContactBug = await models.mongoose.contactsBugs.findOneAndUpdate({contact_id: contactId}, {$set: updateContactBug}, {new: true});
    		}
    		return objContactBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactBugByBugId(bugId, updateContactBug) {
    	try {
    		let objContactBug;
    		if(sql) {
    			objContactBug = await models.sequelize.contactsBugs.findOne({where: { bug_id: bugId }});
    			if (objContactBug) {
    				objContactBug = await models.sequelize.contactsBugs.update(updateContactBug, { where: { bug_id: bugId } });
    			}
    		} else {
    			objContactBug = await models.mongoose.contactsBugs.findOneAndUpdate({bug_id: bugId}, {$set: updateContactBug}, {new: true});
    		}
    		return objContactBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactBugByContactRole(contactRole, updateContactBug) {
    	try {
    		let objContactBug;
    		if(sql) {
    			objContactBug = await models.sequelize.contactsBugs.findOne({where: { contact_role: contactRole }});
    			if (objContactBug) {
    				objContactBug = await models.sequelize.contactsBugs.update(updateContactBug, { where: { contact_role: contactRole } });
    			}
    		} else {
    			objContactBug = await models.mongoose.contactsBugs.findOneAndUpdate({contact_role: contactRole}, {$set: updateContactBug}, {new: true});
    		}
    		return objContactBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactBugByDateModified(dateModified, updateContactBug) {
    	try {
    		let objContactBug;
    		if(sql) {
    			objContactBug = await models.sequelize.contactsBugs.findOne({where: { date_modified: dateModified }});
    			if (objContactBug) {
    				objContactBug = await models.sequelize.contactsBugs.update(updateContactBug, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objContactBug = await models.mongoose.contactsBugs.findOneAndUpdate({date_modified: dateModified}, {$set: updateContactBug}, {new: true});
    		}
    		return objContactBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = ContactBugService;
//</es-section>
