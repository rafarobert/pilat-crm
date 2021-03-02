/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:39 GMT-0400 (Bolivia Time)
 * Time: 14:0:39
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:39 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:39
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

class ContactCaseService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllContactsCases(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.contactsCases.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.contactsCases.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllContactsCases(select = []) {
		try {
			if(sql) {
				return await models.sequelize.contactsCases.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.contactsCases.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addContactCase(newContactCase) {
		try {
			let objContactCase;
			if(util.PrimaryKeyTypeIsString(models.sequelize.contactsCases.primaryKeys.id.type.toString())) {
			    newContactCase.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objContactCase = await models.sequelize.contactsCases.create(newContactCase);
			} else {
				objContactCase = new models.mongoose.contactsCases(newContactCase);
				await objContactCase.save();
			}
			return objContactCase;
		} catch (error) {
			throw error;
		}
	}

	static async updateContactCase(id, updateContactCase) {
		try {
			let objContactCase;
			if(sql) {
				objContactCase = await models.sequelize.contactsCases.findOne({where: { id: util.String(id) }});
				if (objContactCase) {
					await models.sequelize.contactsCases.update(updateContactCase, { where: { id: util.String(id) } });
					objContactCase = await models.sequelize.contactsCases.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateContactCase._id;
				objContactCase = await models.mongoose.contactsCases.findOneAndUpdate({id:id}, {$set: updateContactCase}, {new: true});
			}
			return objContactCase;
		} catch (error) {
			throw error;
		}
	}

	static async getAContactCase(id, query) {
		try {
			let objContactCase;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objContactCase = await models.sequelize.contactsCases.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objContactCase = await models.mongoose.contactsCases.find({id:util.String(id)}).select(query.select);
			}
			return objContactCase;
		} catch (error) {
			throw error;
		}
	}

	static async deleteContactCase(id) {
		try {
			let objContactCase;
			if(sql) {
				objContactCase = await models.sequelize.contactsCases.findOne({ where: { id: util.String(id) } });
				if (objContactCase) {
					await models.sequelize.contactsCases.destroy({where: { id: util.String(id) }});
				}
			} else {
				objContactCase = await models.mongoose.contactsCases.deleteOne({id:util.String(id)});
			}
			return objContactCase;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objContactCase;
    		if(sql) {
    			objContactCase = await models.sequelize.contactsCases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objContactCase = await models.mongoose.contactsCases.findOne({id: id});
    		}
    		return objContactCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objContactCase;
    		if(sql) {
    			objContactCase = await models.sequelize.contactsCases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objContactCase = await models.mongoose.contactsCases.findOne({deleted: deleted});
    		}
    		return objContactCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByContactId(contactId, query = {}) {
    	try {
    		let objContactCase;
    		if(sql) {
    			objContactCase = await models.sequelize.contactsCases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { contact_id: contactId },
    			});
    		} else {
    			objContactCase = await models.mongoose.contactsCases.findOne({contact_id: contactId});
    		}
    		return objContactCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCaseId(caseId, query = {}) {
    	try {
    		let objContactCase;
    		if(sql) {
    			objContactCase = await models.sequelize.contactsCases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { case_id: caseId },
    			});
    		} else {
    			objContactCase = await models.mongoose.contactsCases.findOne({case_id: caseId});
    		}
    		return objContactCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByContactRole(contactRole, query = {}) {
    	try {
    		let objContactCase;
    		if(sql) {
    			objContactCase = await models.sequelize.contactsCases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { contact_role: contactRole },
    			});
    		} else {
    			objContactCase = await models.mongoose.contactsCases.findOne({contact_role: contactRole});
    		}
    		return objContactCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objContactCase;
    		if(sql) {
    			objContactCase = await models.sequelize.contactsCases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objContactCase = await models.mongoose.contactsCases.findOne({date_modified: dateModified});
    		}
    		return objContactCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateContactCaseById(id, updateContactCase) {
    	try {
    		let objContactCase;
    		if(sql) {
    			objContactCase = await models.sequelize.contactsCases.findOne({where: { id: id }});
    			if (objContactCase) {
    				objContactCase = await models.sequelize.contactsCases.update(updateContactCase, { where: { id: id } });
    			}
    		} else {
    			objContactCase = await models.mongoose.contactsCases.findOneAndUpdate({id: id}, {$set: updateContactCase}, {new: true});
    		}
    		return objContactCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactCaseByDeleted(deleted, updateContactCase) {
    	try {
    		let objContactCase;
    		if(sql) {
    			objContactCase = await models.sequelize.contactsCases.findOne({where: { deleted: deleted }});
    			if (objContactCase) {
    				objContactCase = await models.sequelize.contactsCases.update(updateContactCase, { where: { deleted: deleted } });
    			}
    		} else {
    			objContactCase = await models.mongoose.contactsCases.findOneAndUpdate({deleted: deleted}, {$set: updateContactCase}, {new: true});
    		}
    		return objContactCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactCaseByContactId(contactId, updateContactCase) {
    	try {
    		let objContactCase;
    		if(sql) {
    			objContactCase = await models.sequelize.contactsCases.findOne({where: { contact_id: contactId }});
    			if (objContactCase) {
    				objContactCase = await models.sequelize.contactsCases.update(updateContactCase, { where: { contact_id: contactId } });
    			}
    		} else {
    			objContactCase = await models.mongoose.contactsCases.findOneAndUpdate({contact_id: contactId}, {$set: updateContactCase}, {new: true});
    		}
    		return objContactCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactCaseByCaseId(caseId, updateContactCase) {
    	try {
    		let objContactCase;
    		if(sql) {
    			objContactCase = await models.sequelize.contactsCases.findOne({where: { case_id: caseId }});
    			if (objContactCase) {
    				objContactCase = await models.sequelize.contactsCases.update(updateContactCase, { where: { case_id: caseId } });
    			}
    		} else {
    			objContactCase = await models.mongoose.contactsCases.findOneAndUpdate({case_id: caseId}, {$set: updateContactCase}, {new: true});
    		}
    		return objContactCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactCaseByContactRole(contactRole, updateContactCase) {
    	try {
    		let objContactCase;
    		if(sql) {
    			objContactCase = await models.sequelize.contactsCases.findOne({where: { contact_role: contactRole }});
    			if (objContactCase) {
    				objContactCase = await models.sequelize.contactsCases.update(updateContactCase, { where: { contact_role: contactRole } });
    			}
    		} else {
    			objContactCase = await models.mongoose.contactsCases.findOneAndUpdate({contact_role: contactRole}, {$set: updateContactCase}, {new: true});
    		}
    		return objContactCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactCaseByDateModified(dateModified, updateContactCase) {
    	try {
    		let objContactCase;
    		if(sql) {
    			objContactCase = await models.sequelize.contactsCases.findOne({where: { date_modified: dateModified }});
    			if (objContactCase) {
    				objContactCase = await models.sequelize.contactsCases.update(updateContactCase, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objContactCase = await models.mongoose.contactsCases.findOneAndUpdate({date_modified: dateModified}, {$set: updateContactCase}, {new: true});
    		}
    		return objContactCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = ContactCaseService;
//</es-section>
