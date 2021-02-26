/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:17 GMT-0400 (Bolivia Time)
 * Time: 0:23:17
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:17 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:17
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

class LinkedDocumentService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllLinkedDocuments(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.linkedDocuments.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.linkedDocuments.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllLinkedDocuments(select = []) {
		try {
			if(sql) {
				return await models.sequelize.linkedDocuments.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.linkedDocuments.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addLinkedDocument(newLinkedDocument) {
		try {
			let objLinkedDocument;
			if(util.PrimaryKeyTypeIsString(models.sequelize.linkedDocuments.primaryKeys.id.type.toString())) {
			    newLinkedDocument.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objLinkedDocument = await models.sequelize.linkedDocuments.create(newLinkedDocument);
			} else {
				objLinkedDocument = new models.mongoose.linkedDocuments(newLinkedDocument);
				await objLinkedDocument.save();
			}
			return objLinkedDocument;
		} catch (error) {
			throw error;
		}
	}

	static async updateLinkedDocument(id, updateLinkedDocument) {
		try {
			let objLinkedDocument;
			if(sql) {
				objLinkedDocument = await models.sequelize.linkedDocuments.findOne({where: { id: util.String(id) }});
				if (objLinkedDocument) {
					await models.sequelize.linkedDocuments.update(updateLinkedDocument, { where: { id: util.String(id) } });
					objLinkedDocument = await models.sequelize.linkedDocuments.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateLinkedDocument._id;
				objLinkedDocument = await models.mongoose.linkedDocuments.findOneAndUpdate({id:id}, {$set: updateLinkedDocument}, {new: true});
			}
			return objLinkedDocument;
		} catch (error) {
			throw error;
		}
	}

	static async getALinkedDocument(id, query) {
		try {
			let objLinkedDocument;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objLinkedDocument = await models.sequelize.linkedDocuments.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objLinkedDocument = await models.mongoose.linkedDocuments.find({id:util.String(id)}).select(query.select);
			}
			return objLinkedDocument;
		} catch (error) {
			throw error;
		}
	}

	static async deleteLinkedDocument(id) {
		try {
			let objLinkedDocument;
			if(sql) {
				objLinkedDocument = await models.sequelize.linkedDocuments.findOne({ where: { id: util.String(id) } });
				if (objLinkedDocument) {
					await models.sequelize.linkedDocuments.destroy({where: { id: util.String(id) }});
				}
			} else {
				objLinkedDocument = await models.mongoose.linkedDocuments.deleteOne({id:util.String(id)});
			}
			return objLinkedDocument;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objLinkedDocument;
    		if(sql) {
    			objLinkedDocument = await models.sequelize.linkedDocuments.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objLinkedDocument = await models.mongoose.linkedDocuments.findOne({id: id});
    		}
    		return objLinkedDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objLinkedDocument;
    		if(sql) {
    			objLinkedDocument = await models.sequelize.linkedDocuments.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objLinkedDocument = await models.mongoose.linkedDocuments.findOne({deleted: deleted});
    		}
    		return objLinkedDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objLinkedDocument;
    		if(sql) {
    			objLinkedDocument = await models.sequelize.linkedDocuments.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objLinkedDocument = await models.mongoose.linkedDocuments.findOne({parent_id: parentId});
    		}
    		return objLinkedDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentType(parentType, query = {}) {
    	try {
    		let objLinkedDocument;
    		if(sql) {
    			objLinkedDocument = await models.sequelize.linkedDocuments.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_type: parentType },
    			});
    		} else {
    			objLinkedDocument = await models.mongoose.linkedDocuments.findOne({parent_type: parentType});
    		}
    		return objLinkedDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDocumentId(documentId, query = {}) {
    	try {
    		let objLinkedDocument;
    		if(sql) {
    			objLinkedDocument = await models.sequelize.linkedDocuments.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { document_id: documentId },
    			});
    		} else {
    			objLinkedDocument = await models.mongoose.linkedDocuments.findOne({document_id: documentId});
    		}
    		return objLinkedDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDocumentRevisionId(documentRevisionId, query = {}) {
    	try {
    		let objLinkedDocument;
    		if(sql) {
    			objLinkedDocument = await models.sequelize.linkedDocuments.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { document_revision_id: documentRevisionId },
    			});
    		} else {
    			objLinkedDocument = await models.mongoose.linkedDocuments.findOne({document_revision_id: documentRevisionId});
    		}
    		return objLinkedDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objLinkedDocument;
    		if(sql) {
    			objLinkedDocument = await models.sequelize.linkedDocuments.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objLinkedDocument = await models.mongoose.linkedDocuments.findOne({date_modified: dateModified});
    		}
    		return objLinkedDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateLinkedDocumentById(id, updateLinkedDocument) {
    	try {
    		let objLinkedDocument;
    		if(sql) {
    			objLinkedDocument = await models.sequelize.linkedDocuments.findOne({where: { id: id }});
    			if (objLinkedDocument) {
    				objLinkedDocument = await models.sequelize.linkedDocuments.update(updateLinkedDocument, { where: { id: id } });
    			}
    		} else {
    			objLinkedDocument = await models.mongoose.linkedDocuments.findOneAndUpdate({id: id}, {$set: updateLinkedDocument}, {new: true});
    		}
    		return objLinkedDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLinkedDocumentByDeleted(deleted, updateLinkedDocument) {
    	try {
    		let objLinkedDocument;
    		if(sql) {
    			objLinkedDocument = await models.sequelize.linkedDocuments.findOne({where: { deleted: deleted }});
    			if (objLinkedDocument) {
    				objLinkedDocument = await models.sequelize.linkedDocuments.update(updateLinkedDocument, { where: { deleted: deleted } });
    			}
    		} else {
    			objLinkedDocument = await models.mongoose.linkedDocuments.findOneAndUpdate({deleted: deleted}, {$set: updateLinkedDocument}, {new: true});
    		}
    		return objLinkedDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLinkedDocumentByParentId(parentId, updateLinkedDocument) {
    	try {
    		let objLinkedDocument;
    		if(sql) {
    			objLinkedDocument = await models.sequelize.linkedDocuments.findOne({where: { parent_id: parentId }});
    			if (objLinkedDocument) {
    				objLinkedDocument = await models.sequelize.linkedDocuments.update(updateLinkedDocument, { where: { parent_id: parentId } });
    			}
    		} else {
    			objLinkedDocument = await models.mongoose.linkedDocuments.findOneAndUpdate({parent_id: parentId}, {$set: updateLinkedDocument}, {new: true});
    		}
    		return objLinkedDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLinkedDocumentByParentType(parentType, updateLinkedDocument) {
    	try {
    		let objLinkedDocument;
    		if(sql) {
    			objLinkedDocument = await models.sequelize.linkedDocuments.findOne({where: { parent_type: parentType }});
    			if (objLinkedDocument) {
    				objLinkedDocument = await models.sequelize.linkedDocuments.update(updateLinkedDocument, { where: { parent_type: parentType } });
    			}
    		} else {
    			objLinkedDocument = await models.mongoose.linkedDocuments.findOneAndUpdate({parent_type: parentType}, {$set: updateLinkedDocument}, {new: true});
    		}
    		return objLinkedDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLinkedDocumentByDocumentId(documentId, updateLinkedDocument) {
    	try {
    		let objLinkedDocument;
    		if(sql) {
    			objLinkedDocument = await models.sequelize.linkedDocuments.findOne({where: { document_id: documentId }});
    			if (objLinkedDocument) {
    				objLinkedDocument = await models.sequelize.linkedDocuments.update(updateLinkedDocument, { where: { document_id: documentId } });
    			}
    		} else {
    			objLinkedDocument = await models.mongoose.linkedDocuments.findOneAndUpdate({document_id: documentId}, {$set: updateLinkedDocument}, {new: true});
    		}
    		return objLinkedDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLinkedDocumentByDocumentRevisionId(documentRevisionId, updateLinkedDocument) {
    	try {
    		let objLinkedDocument;
    		if(sql) {
    			objLinkedDocument = await models.sequelize.linkedDocuments.findOne({where: { document_revision_id: documentRevisionId }});
    			if (objLinkedDocument) {
    				objLinkedDocument = await models.sequelize.linkedDocuments.update(updateLinkedDocument, { where: { document_revision_id: documentRevisionId } });
    			}
    		} else {
    			objLinkedDocument = await models.mongoose.linkedDocuments.findOneAndUpdate({document_revision_id: documentRevisionId}, {$set: updateLinkedDocument}, {new: true});
    		}
    		return objLinkedDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLinkedDocumentByDateModified(dateModified, updateLinkedDocument) {
    	try {
    		let objLinkedDocument;
    		if(sql) {
    			objLinkedDocument = await models.sequelize.linkedDocuments.findOne({where: { date_modified: dateModified }});
    			if (objLinkedDocument) {
    				objLinkedDocument = await models.sequelize.linkedDocuments.update(updateLinkedDocument, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objLinkedDocument = await models.mongoose.linkedDocuments.findOneAndUpdate({date_modified: dateModified}, {$set: updateLinkedDocument}, {new: true});
    		}
    		return objLinkedDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = LinkedDocumentService;
//</es-section>
