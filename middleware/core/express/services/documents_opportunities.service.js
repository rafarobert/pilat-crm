/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:42:53 GMT-0400 (Bolivia Time)
 * Time: 4:42:53
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:42:53 GMT-0400 (Bolivia Time)
 * Last time updated: 4:42:53
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

class DocumentOpportunityService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllDocumentsOpportunities(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.documentsOpportunities.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.documentsOpportunities.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllDocumentsOpportunities(select = []) {
		try {
			if(sql) {
				return await models.sequelize.documentsOpportunities.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.documentsOpportunities.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addDocumentOpportunity(newDocumentOpportunity) {
		try {
			let objDocumentOpportunity;
			if(util.PrimaryKeyTypeIsString(models.sequelize.documentsOpportunities.primaryKeys.id.type.toString())) {
			    newDocumentOpportunity.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objDocumentOpportunity = await models.sequelize.documentsOpportunities.create(newDocumentOpportunity);
			} else {
				objDocumentOpportunity = new models.mongoose.documentsOpportunities(newDocumentOpportunity);
				await objDocumentOpportunity.save();
			}
			return objDocumentOpportunity;
		} catch (error) {
			throw error;
		}
	}

	static async updateDocumentOpportunity(id, updateDocumentOpportunity) {
		try {
			let objDocumentOpportunity;
			if(sql) {
				objDocumentOpportunity = await models.sequelize.documentsOpportunities.findOne({where: { id: util.String(id) }});
				if (objDocumentOpportunity) {
					await models.sequelize.documentsOpportunities.update(updateDocumentOpportunity, { where: { id: util.String(id) } });
					objDocumentOpportunity = await models.sequelize.documentsOpportunities.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateDocumentOpportunity._id;
				objDocumentOpportunity = await models.mongoose.documentsOpportunities.findOneAndUpdate({id:id}, {$set: updateDocumentOpportunity}, {new: true});
			}
			return objDocumentOpportunity;
		} catch (error) {
			throw error;
		}
	}

	static async getADocumentOpportunity(id, query) {
		try {
			let objDocumentOpportunity;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objDocumentOpportunity = await models.sequelize.documentsOpportunities.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objDocumentOpportunity = await models.mongoose.documentsOpportunities.find({id:util.String(id)}).select(query.select);
			}
			return objDocumentOpportunity;
		} catch (error) {
			throw error;
		}
	}

	static async deleteDocumentOpportunity(id) {
		try {
			let objDocumentOpportunity;
			if(sql) {
				objDocumentOpportunity = await models.sequelize.documentsOpportunities.findOne({ where: { id: util.String(id) } });
				if (objDocumentOpportunity) {
					await models.sequelize.documentsOpportunities.destroy({where: { id: util.String(id) }});
				}
			} else {
				objDocumentOpportunity = await models.mongoose.documentsOpportunities.deleteOne({id:util.String(id)});
			}
			return objDocumentOpportunity;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objDocumentOpportunity;
    		if(sql) {
    			objDocumentOpportunity = await models.sequelize.documentsOpportunities.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objDocumentOpportunity = await models.mongoose.documentsOpportunities.findOne({id: id});
    		}
    		return objDocumentOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objDocumentOpportunity;
    		if(sql) {
    			objDocumentOpportunity = await models.sequelize.documentsOpportunities.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objDocumentOpportunity = await models.mongoose.documentsOpportunities.findOne({deleted: deleted});
    		}
    		return objDocumentOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDocumentId(documentId, query = {}) {
    	try {
    		let objDocumentOpportunity;
    		if(sql) {
    			objDocumentOpportunity = await models.sequelize.documentsOpportunities.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { document_id: documentId },
    			});
    		} else {
    			objDocumentOpportunity = await models.mongoose.documentsOpportunities.findOne({document_id: documentId});
    		}
    		return objDocumentOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByOpportunityId(opportunityId, query = {}) {
    	try {
    		let objDocumentOpportunity;
    		if(sql) {
    			objDocumentOpportunity = await models.sequelize.documentsOpportunities.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { opportunity_id: opportunityId },
    			});
    		} else {
    			objDocumentOpportunity = await models.mongoose.documentsOpportunities.findOne({opportunity_id: opportunityId});
    		}
    		return objDocumentOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objDocumentOpportunity;
    		if(sql) {
    			objDocumentOpportunity = await models.sequelize.documentsOpportunities.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objDocumentOpportunity = await models.mongoose.documentsOpportunities.findOne({date_modified: dateModified});
    		}
    		return objDocumentOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateDocumentOpportunityById(id, updateDocumentOpportunity) {
    	try {
    		let objDocumentOpportunity;
    		if(sql) {
    			objDocumentOpportunity = await models.sequelize.documentsOpportunities.findOne({where: { id: id }});
    			if (objDocumentOpportunity) {
    				objDocumentOpportunity = await models.sequelize.documentsOpportunities.update(updateDocumentOpportunity, { where: { id: id } });
    			}
    		} else {
    			objDocumentOpportunity = await models.mongoose.documentsOpportunities.findOneAndUpdate({id: id}, {$set: updateDocumentOpportunity}, {new: true});
    		}
    		return objDocumentOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentOpportunityByDeleted(deleted, updateDocumentOpportunity) {
    	try {
    		let objDocumentOpportunity;
    		if(sql) {
    			objDocumentOpportunity = await models.sequelize.documentsOpportunities.findOne({where: { deleted: deleted }});
    			if (objDocumentOpportunity) {
    				objDocumentOpportunity = await models.sequelize.documentsOpportunities.update(updateDocumentOpportunity, { where: { deleted: deleted } });
    			}
    		} else {
    			objDocumentOpportunity = await models.mongoose.documentsOpportunities.findOneAndUpdate({deleted: deleted}, {$set: updateDocumentOpportunity}, {new: true});
    		}
    		return objDocumentOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentOpportunityByDocumentId(documentId, updateDocumentOpportunity) {
    	try {
    		let objDocumentOpportunity;
    		if(sql) {
    			objDocumentOpportunity = await models.sequelize.documentsOpportunities.findOne({where: { document_id: documentId }});
    			if (objDocumentOpportunity) {
    				objDocumentOpportunity = await models.sequelize.documentsOpportunities.update(updateDocumentOpportunity, { where: { document_id: documentId } });
    			}
    		} else {
    			objDocumentOpportunity = await models.mongoose.documentsOpportunities.findOneAndUpdate({document_id: documentId}, {$set: updateDocumentOpportunity}, {new: true});
    		}
    		return objDocumentOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentOpportunityByOpportunityId(opportunityId, updateDocumentOpportunity) {
    	try {
    		let objDocumentOpportunity;
    		if(sql) {
    			objDocumentOpportunity = await models.sequelize.documentsOpportunities.findOne({where: { opportunity_id: opportunityId }});
    			if (objDocumentOpportunity) {
    				objDocumentOpportunity = await models.sequelize.documentsOpportunities.update(updateDocumentOpportunity, { where: { opportunity_id: opportunityId } });
    			}
    		} else {
    			objDocumentOpportunity = await models.mongoose.documentsOpportunities.findOneAndUpdate({opportunity_id: opportunityId}, {$set: updateDocumentOpportunity}, {new: true});
    		}
    		return objDocumentOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentOpportunityByDateModified(dateModified, updateDocumentOpportunity) {
    	try {
    		let objDocumentOpportunity;
    		if(sql) {
    			objDocumentOpportunity = await models.sequelize.documentsOpportunities.findOne({where: { date_modified: dateModified }});
    			if (objDocumentOpportunity) {
    				objDocumentOpportunity = await models.sequelize.documentsOpportunities.update(updateDocumentOpportunity, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objDocumentOpportunity = await models.mongoose.documentsOpportunities.findOneAndUpdate({date_modified: dateModified}, {$set: updateDocumentOpportunity}, {new: true});
    		}
    		return objDocumentOpportunity;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = DocumentOpportunityService;
//</es-section>
