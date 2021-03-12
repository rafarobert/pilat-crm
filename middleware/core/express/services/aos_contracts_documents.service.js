/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:09 GMT-0400 (Bolivia Time)
 * Time: 14:56:9
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:09 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:9
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

class AoContractDocumentService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAosContractsDocuments(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aosContractsDocuments.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aosContractsDocuments.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAosContractsDocuments(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aosContractsDocuments.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aosContractsDocuments.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAoContractDocument(newAoContractDocument) {
		try {
			let objAoContractDocument;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aosContractsDocuments.primaryKeys.id.type.toString())) {
			    newAoContractDocument.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAoContractDocument = await models.sequelize.aosContractsDocuments.create(newAoContractDocument);
			} else {
				objAoContractDocument = new models.mongoose.aosContractsDocuments(newAoContractDocument);
				await objAoContractDocument.save();
			}
			return objAoContractDocument;
		} catch (error) {
			throw error;
		}
	}

	static async updateAoContractDocument(id, updateAoContractDocument) {
		try {
			let objAoContractDocument;
			if(sql) {
				objAoContractDocument = await models.sequelize.aosContractsDocuments.findOne({where: { id: util.String(id) }});
				if (objAoContractDocument) {
					await models.sequelize.aosContractsDocuments.update(updateAoContractDocument, { where: { id: util.String(id) } });
					objAoContractDocument = await models.sequelize.aosContractsDocuments.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateAoContractDocument._id;
				objAoContractDocument = await models.mongoose.aosContractsDocuments.findOneAndUpdate({id:id}, {$set: updateAoContractDocument}, {new: true});
			}
			return objAoContractDocument;
		} catch (error) {
			throw error;
		}
	}

	static async getAAoContractDocument(id, query) {
		try {
			let objAoContractDocument;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAoContractDocument = await models.sequelize.aosContractsDocuments.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAoContractDocument = await models.mongoose.aosContractsDocuments.find({id:util.String(id)}).select(query.select);
			}
			return objAoContractDocument;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAoContractDocument(id) {
		try {
			let objAoContractDocument;
			if(sql) {
				objAoContractDocument = await models.sequelize.aosContractsDocuments.findOne({ where: { id: util.String(id) } });
				if (objAoContractDocument) {
					await models.sequelize.aosContractsDocuments.destroy({where: { id: util.String(id) }});
				}
			} else {
				objAoContractDocument = await models.mongoose.aosContractsDocuments.deleteOne({id:util.String(id)});
			}
			return objAoContractDocument;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAoContractDocument;
    		if(sql) {
    			objAoContractDocument = await models.sequelize.aosContractsDocuments.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAoContractDocument = await models.mongoose.aosContractsDocuments.findOne({id: id});
    		}
    		return objAoContractDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAoContractDocument;
    		if(sql) {
    			objAoContractDocument = await models.sequelize.aosContractsDocuments.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAoContractDocument = await models.mongoose.aosContractsDocuments.findOne({deleted: deleted});
    		}
    		return objAoContractDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAosContractsId(aosContractsId, query = {}) {
    	try {
    		let objAoContractDocument;
    		if(sql) {
    			objAoContractDocument = await models.sequelize.aosContractsDocuments.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { aos_contracts_id: aosContractsId },
    			});
    		} else {
    			objAoContractDocument = await models.mongoose.aosContractsDocuments.findOne({aos_contracts_id: aosContractsId});
    		}
    		return objAoContractDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDocumentsId(documentsId, query = {}) {
    	try {
    		let objAoContractDocument;
    		if(sql) {
    			objAoContractDocument = await models.sequelize.aosContractsDocuments.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { documents_id: documentsId },
    			});
    		} else {
    			objAoContractDocument = await models.mongoose.aosContractsDocuments.findOne({documents_id: documentsId});
    		}
    		return objAoContractDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDocumentRevisionId(documentRevisionId, query = {}) {
    	try {
    		let objAoContractDocument;
    		if(sql) {
    			objAoContractDocument = await models.sequelize.aosContractsDocuments.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { document_revision_id: documentRevisionId },
    			});
    		} else {
    			objAoContractDocument = await models.mongoose.aosContractsDocuments.findOne({document_revision_id: documentRevisionId});
    		}
    		return objAoContractDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAoContractDocument;
    		if(sql) {
    			objAoContractDocument = await models.sequelize.aosContractsDocuments.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAoContractDocument = await models.mongoose.aosContractsDocuments.findOne({date_modified: dateModified});
    		}
    		return objAoContractDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAoContractDocumentById(id, updateAoContractDocument) {
    	try {
    		let objAoContractDocument;
    		if(sql) {
    			objAoContractDocument = await models.sequelize.aosContractsDocuments.findOne({where: { id: id }});
    			if (objAoContractDocument) {
    				objAoContractDocument = await models.sequelize.aosContractsDocuments.update(updateAoContractDocument, { where: { id: id } });
    			}
    		} else {
    			objAoContractDocument = await models.mongoose.aosContractsDocuments.findOneAndUpdate({id: id}, {$set: updateAoContractDocument}, {new: true});
    		}
    		return objAoContractDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractDocumentByDeleted(deleted, updateAoContractDocument) {
    	try {
    		let objAoContractDocument;
    		if(sql) {
    			objAoContractDocument = await models.sequelize.aosContractsDocuments.findOne({where: { deleted: deleted }});
    			if (objAoContractDocument) {
    				objAoContractDocument = await models.sequelize.aosContractsDocuments.update(updateAoContractDocument, { where: { deleted: deleted } });
    			}
    		} else {
    			objAoContractDocument = await models.mongoose.aosContractsDocuments.findOneAndUpdate({deleted: deleted}, {$set: updateAoContractDocument}, {new: true});
    		}
    		return objAoContractDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractDocumentByAosContractsId(aosContractsId, updateAoContractDocument) {
    	try {
    		let objAoContractDocument;
    		if(sql) {
    			objAoContractDocument = await models.sequelize.aosContractsDocuments.findOne({where: { aos_contracts_id: aosContractsId }});
    			if (objAoContractDocument) {
    				objAoContractDocument = await models.sequelize.aosContractsDocuments.update(updateAoContractDocument, { where: { aos_contracts_id: aosContractsId } });
    			}
    		} else {
    			objAoContractDocument = await models.mongoose.aosContractsDocuments.findOneAndUpdate({aos_contracts_id: aosContractsId}, {$set: updateAoContractDocument}, {new: true});
    		}
    		return objAoContractDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractDocumentByDocumentsId(documentsId, updateAoContractDocument) {
    	try {
    		let objAoContractDocument;
    		if(sql) {
    			objAoContractDocument = await models.sequelize.aosContractsDocuments.findOne({where: { documents_id: documentsId }});
    			if (objAoContractDocument) {
    				objAoContractDocument = await models.sequelize.aosContractsDocuments.update(updateAoContractDocument, { where: { documents_id: documentsId } });
    			}
    		} else {
    			objAoContractDocument = await models.mongoose.aosContractsDocuments.findOneAndUpdate({documents_id: documentsId}, {$set: updateAoContractDocument}, {new: true});
    		}
    		return objAoContractDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractDocumentByDocumentRevisionId(documentRevisionId, updateAoContractDocument) {
    	try {
    		let objAoContractDocument;
    		if(sql) {
    			objAoContractDocument = await models.sequelize.aosContractsDocuments.findOne({where: { document_revision_id: documentRevisionId }});
    			if (objAoContractDocument) {
    				objAoContractDocument = await models.sequelize.aosContractsDocuments.update(updateAoContractDocument, { where: { document_revision_id: documentRevisionId } });
    			}
    		} else {
    			objAoContractDocument = await models.mongoose.aosContractsDocuments.findOneAndUpdate({document_revision_id: documentRevisionId}, {$set: updateAoContractDocument}, {new: true});
    		}
    		return objAoContractDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoContractDocumentByDateModified(dateModified, updateAoContractDocument) {
    	try {
    		let objAoContractDocument;
    		if(sql) {
    			objAoContractDocument = await models.sequelize.aosContractsDocuments.findOne({where: { date_modified: dateModified }});
    			if (objAoContractDocument) {
    				objAoContractDocument = await models.sequelize.aosContractsDocuments.update(updateAoContractDocument, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAoContractDocument = await models.mongoose.aosContractsDocuments.findOneAndUpdate({date_modified: dateModified}, {$set: updateAoContractDocument}, {new: true});
    		}
    		return objAoContractDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AoContractDocumentService;
//</es-section>
