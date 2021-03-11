/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:31 GMT-0400 (Bolivia Time)
 * Time: 14:57:31
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:31 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:31
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

class ProjectContact1CService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllProjectContacts1C(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.projectContacts1C.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.projectContacts1C.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllProjectContacts1C(select = []) {
		try {
			if(sql) {
				return await models.sequelize.projectContacts1C.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.projectContacts1C.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addProjectContact1C(newProjectContact1C) {
		try {
			let objProjectContact1C;
			if(util.PrimaryKeyTypeIsString(models.sequelize.projectContacts1C.primaryKeys.id.type.toString())) {
			    newProjectContact1C.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objProjectContact1C = await models.sequelize.projectContacts1C.create(newProjectContact1C);
			} else {
				objProjectContact1C = new models.mongoose.projectContacts1C(newProjectContact1C);
				await objProjectContact1C.save();
			}
			return objProjectContact1C;
		} catch (error) {
			throw error;
		}
	}

	static async updateProjectContact1C(id, updateProjectContact1C) {
		try {
			let objProjectContact1C;
			if(sql) {
				objProjectContact1C = await models.sequelize.projectContacts1C.findOne({where: { id: util.String(id) }});
				if (objProjectContact1C) {
					await models.sequelize.projectContacts1C.update(updateProjectContact1C, { where: { id: util.String(id) } });
					objProjectContact1C = await models.sequelize.projectContacts1C.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateProjectContact1C._id;
				objProjectContact1C = await models.mongoose.projectContacts1C.findOneAndUpdate({id:id}, {$set: updateProjectContact1C}, {new: true});
			}
			return objProjectContact1C;
		} catch (error) {
			throw error;
		}
	}

	static async getAProjectContact1C(id, query) {
		try {
			let objProjectContact1C;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objProjectContact1C = await models.sequelize.projectContacts1C.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objProjectContact1C = await models.mongoose.projectContacts1C.find({id:util.String(id)}).select(query.select);
			}
			return objProjectContact1C;
		} catch (error) {
			throw error;
		}
	}

	static async deleteProjectContact1C(id) {
		try {
			let objProjectContact1C;
			if(sql) {
				objProjectContact1C = await models.sequelize.projectContacts1C.findOne({ where: { id: util.String(id) } });
				if (objProjectContact1C) {
					await models.sequelize.projectContacts1C.destroy({where: { id: util.String(id) }});
				}
			} else {
				objProjectContact1C = await models.mongoose.projectContacts1C.deleteOne({id:util.String(id)});
			}
			return objProjectContact1C;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objProjectContact1C;
    		if(sql) {
    			objProjectContact1C = await models.sequelize.projectContacts1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objProjectContact1C = await models.mongoose.projectContacts1C.findOne({id: id});
    		}
    		return objProjectContact1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objProjectContact1C;
    		if(sql) {
    			objProjectContact1C = await models.sequelize.projectContacts1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objProjectContact1C = await models.mongoose.projectContacts1C.findOne({deleted: deleted});
    		}
    		return objProjectContact1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByProjectContacts1projectIda(projectContacts1projectIda, query = {}) {
    	try {
    		let objProjectContact1C;
    		if(sql) {
    			objProjectContact1C = await models.sequelize.projectContacts1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { project_contacts_1project_ida: projectContacts1projectIda },
    			});
    		} else {
    			objProjectContact1C = await models.mongoose.projectContacts1C.findOne({project_contacts_1project_ida: projectContacts1projectIda});
    		}
    		return objProjectContact1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByProjectContacts1contactsIdb(projectContacts1contactsIdb, query = {}) {
    	try {
    		let objProjectContact1C;
    		if(sql) {
    			objProjectContact1C = await models.sequelize.projectContacts1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { project_contacts_1contacts_idb: projectContacts1contactsIdb },
    			});
    		} else {
    			objProjectContact1C = await models.mongoose.projectContacts1C.findOne({project_contacts_1contacts_idb: projectContacts1contactsIdb});
    		}
    		return objProjectContact1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objProjectContact1C;
    		if(sql) {
    			objProjectContact1C = await models.sequelize.projectContacts1C.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objProjectContact1C = await models.mongoose.projectContacts1C.findOne({date_modified: dateModified});
    		}
    		return objProjectContact1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateProjectContact1CById(id, updateProjectContact1C) {
    	try {
    		let objProjectContact1C;
    		if(sql) {
    			objProjectContact1C = await models.sequelize.projectContacts1C.findOne({where: { id: id }});
    			if (objProjectContact1C) {
    				objProjectContact1C = await models.sequelize.projectContacts1C.update(updateProjectContact1C, { where: { id: id } });
    			}
    		} else {
    			objProjectContact1C = await models.mongoose.projectContacts1C.findOneAndUpdate({id: id}, {$set: updateProjectContact1C}, {new: true});
    		}
    		return objProjectContact1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectContact1CByDeleted(deleted, updateProjectContact1C) {
    	try {
    		let objProjectContact1C;
    		if(sql) {
    			objProjectContact1C = await models.sequelize.projectContacts1C.findOne({where: { deleted: deleted }});
    			if (objProjectContact1C) {
    				objProjectContact1C = await models.sequelize.projectContacts1C.update(updateProjectContact1C, { where: { deleted: deleted } });
    			}
    		} else {
    			objProjectContact1C = await models.mongoose.projectContacts1C.findOneAndUpdate({deleted: deleted}, {$set: updateProjectContact1C}, {new: true});
    		}
    		return objProjectContact1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectContact1CByProjectContacts1projectIda(projectContacts1projectIda, updateProjectContact1C) {
    	try {
    		let objProjectContact1C;
    		if(sql) {
    			objProjectContact1C = await models.sequelize.projectContacts1C.findOne({where: { project_contacts_1project_ida: projectContacts1projectIda }});
    			if (objProjectContact1C) {
    				objProjectContact1C = await models.sequelize.projectContacts1C.update(updateProjectContact1C, { where: { project_contacts_1project_ida: projectContacts1projectIda } });
    			}
    		} else {
    			objProjectContact1C = await models.mongoose.projectContacts1C.findOneAndUpdate({project_contacts_1project_ida: projectContacts1projectIda}, {$set: updateProjectContact1C}, {new: true});
    		}
    		return objProjectContact1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectContact1CByProjectContacts1contactsIdb(projectContacts1contactsIdb, updateProjectContact1C) {
    	try {
    		let objProjectContact1C;
    		if(sql) {
    			objProjectContact1C = await models.sequelize.projectContacts1C.findOne({where: { project_contacts_1contacts_idb: projectContacts1contactsIdb }});
    			if (objProjectContact1C) {
    				objProjectContact1C = await models.sequelize.projectContacts1C.update(updateProjectContact1C, { where: { project_contacts_1contacts_idb: projectContacts1contactsIdb } });
    			}
    		} else {
    			objProjectContact1C = await models.mongoose.projectContacts1C.findOneAndUpdate({project_contacts_1contacts_idb: projectContacts1contactsIdb}, {$set: updateProjectContact1C}, {new: true});
    		}
    		return objProjectContact1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectContact1CByDateModified(dateModified, updateProjectContact1C) {
    	try {
    		let objProjectContact1C;
    		if(sql) {
    			objProjectContact1C = await models.sequelize.projectContacts1C.findOne({where: { date_modified: dateModified }});
    			if (objProjectContact1C) {
    				objProjectContact1C = await models.sequelize.projectContacts1C.update(updateProjectContact1C, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objProjectContact1C = await models.mongoose.projectContacts1C.findOneAndUpdate({date_modified: dateModified}, {$set: updateProjectContact1C}, {new: true});
    		}
    		return objProjectContact1C;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = ProjectContact1CService;
//</es-section>
