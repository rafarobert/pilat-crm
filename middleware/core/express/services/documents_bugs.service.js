/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:42:52 GMT-0400 (Bolivia Time)
 * Time: 4:42:52
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:42:52 GMT-0400 (Bolivia Time)
 * Last time updated: 4:42:52
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

class DocumentBugService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllDocumentsBugs(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.documentsBugs.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.documentsBugs.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllDocumentsBugs(select = []) {
		try {
			if(sql) {
				return await models.sequelize.documentsBugs.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.documentsBugs.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addDocumentBug(newDocumentBug) {
		try {
			let objDocumentBug;
			if(util.PrimaryKeyTypeIsString(models.sequelize.documentsBugs.primaryKeys.id.type.toString())) {
			    newDocumentBug.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objDocumentBug = await models.sequelize.documentsBugs.create(newDocumentBug);
			} else {
				objDocumentBug = new models.mongoose.documentsBugs(newDocumentBug);
				await objDocumentBug.save();
			}
			return objDocumentBug;
		} catch (error) {
			throw error;
		}
	}

	static async updateDocumentBug(id, updateDocumentBug) {
		try {
			let objDocumentBug;
			if(sql) {
				objDocumentBug = await models.sequelize.documentsBugs.findOne({where: { id: util.String(id) }});
				if (objDocumentBug) {
					await models.sequelize.documentsBugs.update(updateDocumentBug, { where: { id: util.String(id) } });
					objDocumentBug = await models.sequelize.documentsBugs.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateDocumentBug._id;
				objDocumentBug = await models.mongoose.documentsBugs.findOneAndUpdate({id:id}, {$set: updateDocumentBug}, {new: true});
			}
			return objDocumentBug;
		} catch (error) {
			throw error;
		}
	}

	static async getADocumentBug(id, query) {
		try {
			let objDocumentBug;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objDocumentBug = await models.sequelize.documentsBugs.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objDocumentBug = await models.mongoose.documentsBugs.find({id:util.String(id)}).select(query.select);
			}
			return objDocumentBug;
		} catch (error) {
			throw error;
		}
	}

	static async deleteDocumentBug(id) {
		try {
			let objDocumentBug;
			if(sql) {
				objDocumentBug = await models.sequelize.documentsBugs.findOne({ where: { id: util.String(id) } });
				if (objDocumentBug) {
					await models.sequelize.documentsBugs.destroy({where: { id: util.String(id) }});
				}
			} else {
				objDocumentBug = await models.mongoose.documentsBugs.deleteOne({id:util.String(id)});
			}
			return objDocumentBug;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objDocumentBug;
    		if(sql) {
    			objDocumentBug = await models.sequelize.documentsBugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objDocumentBug = await models.mongoose.documentsBugs.findOne({id: id});
    		}
    		return objDocumentBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objDocumentBug;
    		if(sql) {
    			objDocumentBug = await models.sequelize.documentsBugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objDocumentBug = await models.mongoose.documentsBugs.findOne({deleted: deleted});
    		}
    		return objDocumentBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDocumentId(documentId, query = {}) {
    	try {
    		let objDocumentBug;
    		if(sql) {
    			objDocumentBug = await models.sequelize.documentsBugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { document_id: documentId },
    			});
    		} else {
    			objDocumentBug = await models.mongoose.documentsBugs.findOne({document_id: documentId});
    		}
    		return objDocumentBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBugId(bugId, query = {}) {
    	try {
    		let objDocumentBug;
    		if(sql) {
    			objDocumentBug = await models.sequelize.documentsBugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { bug_id: bugId },
    			});
    		} else {
    			objDocumentBug = await models.mongoose.documentsBugs.findOne({bug_id: bugId});
    		}
    		return objDocumentBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objDocumentBug;
    		if(sql) {
    			objDocumentBug = await models.sequelize.documentsBugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objDocumentBug = await models.mongoose.documentsBugs.findOne({date_modified: dateModified});
    		}
    		return objDocumentBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateDocumentBugById(id, updateDocumentBug) {
    	try {
    		let objDocumentBug;
    		if(sql) {
    			objDocumentBug = await models.sequelize.documentsBugs.findOne({where: { id: id }});
    			if (objDocumentBug) {
    				objDocumentBug = await models.sequelize.documentsBugs.update(updateDocumentBug, { where: { id: id } });
    			}
    		} else {
    			objDocumentBug = await models.mongoose.documentsBugs.findOneAndUpdate({id: id}, {$set: updateDocumentBug}, {new: true});
    		}
    		return objDocumentBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentBugByDeleted(deleted, updateDocumentBug) {
    	try {
    		let objDocumentBug;
    		if(sql) {
    			objDocumentBug = await models.sequelize.documentsBugs.findOne({where: { deleted: deleted }});
    			if (objDocumentBug) {
    				objDocumentBug = await models.sequelize.documentsBugs.update(updateDocumentBug, { where: { deleted: deleted } });
    			}
    		} else {
    			objDocumentBug = await models.mongoose.documentsBugs.findOneAndUpdate({deleted: deleted}, {$set: updateDocumentBug}, {new: true});
    		}
    		return objDocumentBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentBugByDocumentId(documentId, updateDocumentBug) {
    	try {
    		let objDocumentBug;
    		if(sql) {
    			objDocumentBug = await models.sequelize.documentsBugs.findOne({where: { document_id: documentId }});
    			if (objDocumentBug) {
    				objDocumentBug = await models.sequelize.documentsBugs.update(updateDocumentBug, { where: { document_id: documentId } });
    			}
    		} else {
    			objDocumentBug = await models.mongoose.documentsBugs.findOneAndUpdate({document_id: documentId}, {$set: updateDocumentBug}, {new: true});
    		}
    		return objDocumentBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentBugByBugId(bugId, updateDocumentBug) {
    	try {
    		let objDocumentBug;
    		if(sql) {
    			objDocumentBug = await models.sequelize.documentsBugs.findOne({where: { bug_id: bugId }});
    			if (objDocumentBug) {
    				objDocumentBug = await models.sequelize.documentsBugs.update(updateDocumentBug, { where: { bug_id: bugId } });
    			}
    		} else {
    			objDocumentBug = await models.mongoose.documentsBugs.findOneAndUpdate({bug_id: bugId}, {$set: updateDocumentBug}, {new: true});
    		}
    		return objDocumentBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentBugByDateModified(dateModified, updateDocumentBug) {
    	try {
    		let objDocumentBug;
    		if(sql) {
    			objDocumentBug = await models.sequelize.documentsBugs.findOne({where: { date_modified: dateModified }});
    			if (objDocumentBug) {
    				objDocumentBug = await models.sequelize.documentsBugs.update(updateDocumentBug, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objDocumentBug = await models.mongoose.documentsBugs.findOneAndUpdate({date_modified: dateModified}, {$set: updateDocumentBug}, {new: true});
    		}
    		return objDocumentBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = DocumentBugService;
//</es-section>
