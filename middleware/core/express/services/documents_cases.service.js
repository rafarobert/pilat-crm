/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:42 GMT-0400 (Bolivia Time)
 * Time: 14:56:42
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:42 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:42
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

class DocumentCaseService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllDocumentsCases(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.documentsCases.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.documentsCases.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllDocumentsCases(select = []) {
		try {
			if(sql) {
				return await models.sequelize.documentsCases.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.documentsCases.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addDocumentCase(newDocumentCase) {
		try {
			let objDocumentCase;
			if(util.PrimaryKeyTypeIsString(models.sequelize.documentsCases.primaryKeys.id.type.toString())) {
			    newDocumentCase.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objDocumentCase = await models.sequelize.documentsCases.create(newDocumentCase);
			} else {
				objDocumentCase = new models.mongoose.documentsCases(newDocumentCase);
				await objDocumentCase.save();
			}
			return objDocumentCase;
		} catch (error) {
			throw error;
		}
	}

	static async updateDocumentCase(id, updateDocumentCase) {
		try {
			let objDocumentCase;
			if(sql) {
				objDocumentCase = await models.sequelize.documentsCases.findOne({where: { id: util.String(id) }});
				if (objDocumentCase) {
					await models.sequelize.documentsCases.update(updateDocumentCase, { where: { id: util.String(id) } });
					objDocumentCase = await models.sequelize.documentsCases.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateDocumentCase._id;
				objDocumentCase = await models.mongoose.documentsCases.findOneAndUpdate({id:id}, {$set: updateDocumentCase}, {new: true});
			}
			return objDocumentCase;
		} catch (error) {
			throw error;
		}
	}

	static async getADocumentCase(id, query) {
		try {
			let objDocumentCase;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objDocumentCase = await models.sequelize.documentsCases.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objDocumentCase = await models.mongoose.documentsCases.find({id:util.String(id)}).select(query.select);
			}
			return objDocumentCase;
		} catch (error) {
			throw error;
		}
	}

	static async deleteDocumentCase(id) {
		try {
			let objDocumentCase;
			if(sql) {
				objDocumentCase = await models.sequelize.documentsCases.findOne({ where: { id: util.String(id) } });
				if (objDocumentCase) {
					await models.sequelize.documentsCases.destroy({where: { id: util.String(id) }});
				}
			} else {
				objDocumentCase = await models.mongoose.documentsCases.deleteOne({id:util.String(id)});
			}
			return objDocumentCase;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objDocumentCase;
    		if(sql) {
    			objDocumentCase = await models.sequelize.documentsCases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objDocumentCase = await models.mongoose.documentsCases.findOne({id: id});
    		}
    		return objDocumentCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objDocumentCase;
    		if(sql) {
    			objDocumentCase = await models.sequelize.documentsCases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objDocumentCase = await models.mongoose.documentsCases.findOne({deleted: deleted});
    		}
    		return objDocumentCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDocumentId(documentId, query = {}) {
    	try {
    		let objDocumentCase;
    		if(sql) {
    			objDocumentCase = await models.sequelize.documentsCases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { document_id: documentId },
    			});
    		} else {
    			objDocumentCase = await models.mongoose.documentsCases.findOne({document_id: documentId});
    		}
    		return objDocumentCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCaseId(caseId, query = {}) {
    	try {
    		let objDocumentCase;
    		if(sql) {
    			objDocumentCase = await models.sequelize.documentsCases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { case_id: caseId },
    			});
    		} else {
    			objDocumentCase = await models.mongoose.documentsCases.findOne({case_id: caseId});
    		}
    		return objDocumentCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objDocumentCase;
    		if(sql) {
    			objDocumentCase = await models.sequelize.documentsCases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objDocumentCase = await models.mongoose.documentsCases.findOne({date_modified: dateModified});
    		}
    		return objDocumentCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateDocumentCaseById(id, updateDocumentCase) {
    	try {
    		let objDocumentCase;
    		if(sql) {
    			objDocumentCase = await models.sequelize.documentsCases.findOne({where: { id: id }});
    			if (objDocumentCase) {
    				objDocumentCase = await models.sequelize.documentsCases.update(updateDocumentCase, { where: { id: id } });
    			}
    		} else {
    			objDocumentCase = await models.mongoose.documentsCases.findOneAndUpdate({id: id}, {$set: updateDocumentCase}, {new: true});
    		}
    		return objDocumentCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentCaseByDeleted(deleted, updateDocumentCase) {
    	try {
    		let objDocumentCase;
    		if(sql) {
    			objDocumentCase = await models.sequelize.documentsCases.findOne({where: { deleted: deleted }});
    			if (objDocumentCase) {
    				objDocumentCase = await models.sequelize.documentsCases.update(updateDocumentCase, { where: { deleted: deleted } });
    			}
    		} else {
    			objDocumentCase = await models.mongoose.documentsCases.findOneAndUpdate({deleted: deleted}, {$set: updateDocumentCase}, {new: true});
    		}
    		return objDocumentCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentCaseByDocumentId(documentId, updateDocumentCase) {
    	try {
    		let objDocumentCase;
    		if(sql) {
    			objDocumentCase = await models.sequelize.documentsCases.findOne({where: { document_id: documentId }});
    			if (objDocumentCase) {
    				objDocumentCase = await models.sequelize.documentsCases.update(updateDocumentCase, { where: { document_id: documentId } });
    			}
    		} else {
    			objDocumentCase = await models.mongoose.documentsCases.findOneAndUpdate({document_id: documentId}, {$set: updateDocumentCase}, {new: true});
    		}
    		return objDocumentCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentCaseByCaseId(caseId, updateDocumentCase) {
    	try {
    		let objDocumentCase;
    		if(sql) {
    			objDocumentCase = await models.sequelize.documentsCases.findOne({where: { case_id: caseId }});
    			if (objDocumentCase) {
    				objDocumentCase = await models.sequelize.documentsCases.update(updateDocumentCase, { where: { case_id: caseId } });
    			}
    		} else {
    			objDocumentCase = await models.mongoose.documentsCases.findOneAndUpdate({case_id: caseId}, {$set: updateDocumentCase}, {new: true});
    		}
    		return objDocumentCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentCaseByDateModified(dateModified, updateDocumentCase) {
    	try {
    		let objDocumentCase;
    		if(sql) {
    			objDocumentCase = await models.sequelize.documentsCases.findOne({where: { date_modified: dateModified }});
    			if (objDocumentCase) {
    				objDocumentCase = await models.sequelize.documentsCases.update(updateDocumentCase, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objDocumentCase = await models.mongoose.documentsCases.findOneAndUpdate({date_modified: dateModified}, {$set: updateDocumentCase}, {new: true});
    		}
    		return objDocumentCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = DocumentCaseService;
//</es-section>
